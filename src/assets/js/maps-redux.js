var MAP_DATA;
var MAP_SETTINGS;
var USER_UUIDS;

document.addEventListener('DOMContentLoaded', async () => {
  MAP_DATA = JSON.parse(await getFile('/data/maps/pgm.json')).data.maps;
  MAP_SETTINGS = JSON.parse(await getFile('/data/global.json')).settings.maps;
  USER_UUIDS = JSON.parse(await getFile('/data/uuids.json')).uuids;

  var searchList = new List('searchable-collection', {
    valueNames: ['tags', 's-title', 'users', 'uuids']
  });
  var searchPlaceholder = 'maps';
  setupSearch(searchList, searchPlaceholder);

  document.querySelectorAll('[data-action="open-download"]').forEach(btn => {
    btn.addEventListener('click', e => {
      var id = btn.dataset.id;

      populateDownloadModal(id);
      $('#map-download-display').modal('show');
    });
  });

  document.querySelectorAll('[data-action="start-download"]').forEach(btn => {
    btn.addEventListener('click', e => {
      var id = btn.dataset.id;

      if (!id) return;

      startDownload(id);
      $('#map-download-display').modal('hide');
    });
  });
});

async function startDownload(id) {
  const map = MAP_DATA.find(x => x.id === id);
  const license = MAP_SETTINGS.licenses[map.source.license];

  // if (is_development) GitZip.setProductionState(false);
  if (user._token) GitZip.setAccessToken(user._token);

  // remove if set from previous download
  GitZip.removeTextFile("LICENSE.txt");

  if (map.source.license_scope === "repository") {
    var licenseText = await getFile(`/assets/licenses/${map.source.license}.txt`);
    if (licenseText) GitZip.addTextFile("LICENSE.txt", licenseText);
  }

  GitZip.zipRepo(map.source.github_url);
}

function populateDownloadModal(id) {
  const modal = document.getElementById('map-download-display');
  const map = MAP_DATA.find(x => x.id === id);
  const license = MAP_SETTINGS.licenses[map.source.license];
  const maintainer = MAP_SETTINGS.maintainers[map.source.maintainer];

  populateElementContent("title", map.name);
  populateElementContent("version", "v" + map.version);
  populateElementContent("objective", map.objective);

  modal.querySelectorAll('[data-populate="authors"]').forEach(node => {
    node.innerHTML = "Created by ";
  });
  map.authors.forEach(author => {
    var hasUuid = author.hasOwnProperty('uuid');
    var username = hasUuid ? USER_UUIDS[author.uuid.replaceAll('-', '')] : author.username;

    var avatarEl = document.createElement('img');
    avatarEl.setAttribute('src', "https://crafatar.com/avatars/" + (hasUuid ? author.uuid : "606e2ff0ed7748429d6ce1d3321c7838"));

    var usernameEl = document.createElement('span');
    usernameEl.innerHTML = username ? username : "";

    var authorEl = document.createElement('div');
    authorEl.setAttribute('class', 'mr-author');

    authorEl.append(avatarEl);
    authorEl.append(usernameEl);

    modal.querySelectorAll('[data-populate="authors"]').forEach(node => {
      node.append(authorEl);
    });
  });

  modal.querySelectorAll('[data-populate="teams"]').forEach(node => {
    node.innerHTML = "";
  });
  map.teams.forEach(team => {
    var teamSizeEl = document.createElement('div');
    teamSizeEl.setAttribute('class', 'mr-team-size');
    teamSizeEl.innerHTML = ` (${team.size})`;

    var teamEl = document.createElement('div');
    teamEl.setAttribute('class', 'mr-team');
    teamEl.setAttribute('data-color', team.color);
    teamEl.innerHTML = team.name;

    teamEl.append(teamSizeEl);
    modal.querySelectorAll('[data-populate="teams"]').forEach(node => {
      node.append(teamEl);
    });
  });

  modal.querySelectorAll('[data-populate="tags"]').forEach(node => {
    node.innerHTML = "";
  });
  map.tags.forEach(tag => {
    var tagEl = document.createElement('div');
    tagEl.setAttribute('class', 'mr-tag');
    tagEl.innerHTML = tag;

    modal.querySelectorAll('[data-populate="tags"]').forEach(node => {
      node.append(tagEl);
    });
  });

  populateElementContent("license-name", license.name);
  populateElementContent("license-description", license.description);

  modal.querySelectorAll('[data-populate="license-permissions"]').forEach(node => {
    node.innerHTML = "";
  });
  license.permissions.forEach(attr => {
    var attrEl = document.createElement('div');
    attrEl.setAttribute('class', 'mr-license-regulation');
    attrEl.setAttribute('title', attr.hint);
    attrEl.setAttribute('data-toggle', 'tooltip');
    attrEl.innerHTML = attr.label;

    modal.querySelectorAll('[data-populate="license-permissions"]').forEach(node => {
      node.append(attrEl);
      node.classList.remove('d-none');
      node.classList.add('d-block');
    });
  });

  modal.querySelectorAll('[data-populate="license-restrictions"]').forEach(node => {
    node.innerHTML = "";
  });
  license.restrictions.forEach(attr => {
    var attrEl = document.createElement('div');
    attrEl.setAttribute('class', 'mr-license-regulation');
    attrEl.setAttribute('title', attr.hint);
    attrEl.setAttribute('data-toggle', 'tooltip');
    attrEl.innerHTML = attr.label;

    modal.querySelectorAll('[data-populate="license-restrictions"]').forEach(node => {
      node.append(attrEl);
    });
  });

  modal.querySelectorAll('[data-regulation]').forEach(node => {
    if (node.getElementsByTagName('div')[0].children.length <= 0) {
      node.classList.add('d-none');
      node.classList.remove('d-block');
    } else {
      node.classList.remove('d-none');
      node.classList.add('d-block');
    };
  });

  populateElementContent("maintainer", (maintainer ? maintainer.name : map.source.maintainer));
  populateElementAttribute("maintainer_url", "href", `https://github.com/${map.source.maintainer}/${map.source.repository}`);
  populateElementAttribute("maintainer-image", "src", `https://github.com/${map.source.maintainer}.png`);
  populateElementContent("maintainer-description", (maintainer ? maintainer.description : ""));
  populateElementAttribute("github-url", "href", map.source.github_url);
  populateElementAttribute("xml-url", "href", map.source.github_url + "/map.xml");
  populateElementAttribute("image-url", "src", map.source.image_url);
  populateElementAttribute("map-id", "data-id", map.id);

  $('#map-download-display [data-toggle="tooltip"]').tooltip('enable');
}

function populateElementContent(target, content) {
  document.querySelectorAll(`[data-populate="${target}"]`).forEach(node => {
    node.innerHTML = content;
  });
};

function populateElementAttribute(target, attr, content) {
  document.querySelectorAll(`[data-populate="${target}"]`).forEach(node => {
    node.setAttribute(attr, content);
  });
};

async function getFile(url, options = {}) {
  const res = await fetch(url, options);

  if (!res.ok) {
    console.log(res.statusText);
    return false;
  };

  return res.text();
};
