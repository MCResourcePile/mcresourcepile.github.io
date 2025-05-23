var MAP_DATA;
var MAP_SETTINGS;
var USER_UUIDS;

document.addEventListener('DOMContentLoaded', async () => {
  MAP_DATA = JSON.parse(await getFile('/data/maps/pgm.json')).data.maps;
  MAP_SETTINGS = JSON.parse(await getFile('/data/global.json')).settings.maps;
  USER_UUIDS = JSON.parse(await getFile('/data/uuids.json')).uuids;

  var searchList = new List('searchable-collection', {
    valueNames: ['tags', 's-title', 'users', 'uuids', 'version', 'slug', 'id'],
    page: 120,
    pagination: [
      {
        paginationClass: 'pagination-upper',
        left: 1,
        right: 1
      },
      {
        paginationClass: 'pagination-lower',
        left: 1,
        right: 1
      }
    ]
  });

  var searchPlaceholder = 'maps';
  setupSearch(searchList, searchPlaceholder);
  initDownloadEventListeners();

  document.querySelectorAll('.pagination').forEach(pag => {
    pag.addEventListener('click', e => {
      initDownloadEventListeners();
      document.getElementById('searchable-collection').scrollIntoView();
    });
  });

  searchList.on('updated', e => {
    initDownloadEventListeners();
  });
});

function initDownloadEventListeners() {
  document.querySelectorAll('[data-action="open-download"]').forEach(btn => {
    btn.addEventListener('click', e => {
      var id = btn.dataset.id;

      populateDownloadModal(id);
      $('#map-download-display').modal('show');
      $('#mr-download-progress').hide();
      $('#mr-download-controls').show();
    });
  });

  document.querySelectorAll('[data-action="start-download"]').forEach(btn => {
    btn.addEventListener('click', e => {
      var id = btn.dataset.id;

      if (!id) return;

      startDownload(id);
      $('#mr-download-progress').show();
      $('#mr-download-controls').hide();
    });
  });


  document.querySelectorAll('[data-populate="variants"]').forEach(node => {
    node.addEventListener("click", function(e) {
      const target = e.target.closest('a');

      if (target) {
        var id = target.dataset.target;
        populateDownloadModal(id);
      }
    });
  });
};

async function startDownload(id) {
  const map = MAP_DATA.find(x => x.id === id);
  const license = MAP_SETTINGS.licenses[map.source.license];

  if (is_development) GitZip.setProductionState(false);
  if (user._token) GitZip.setAccessToken(user._token);

  // remove if set from previous download
  GitZip.removeTextFile('LICENSE.txt');

  if (map.source.license_scope === 'repository') {
    var licenseText = await getFile(`/assets/licenses/${map.source.license}.txt`);
    if (licenseText) GitZip.addTextFile('LICENSE.txt', licenseText);
  };

  GitZip.zipRepo(map.source.github_url);
};

function populateDownloadModal(id) {
  const modal = document.getElementById('map-download-display');
  const map = MAP_DATA.find(x => x.id === id);
  const license = MAP_SETTINGS.licenses[map.source.license];
  const maintainer = MAP_SETTINGS.maintainers[map.source.maintainer];

  populateElementContent('title', map.name);
  populateElementContent('version', 'v' + map.version);
  populateElementContent('objective', map.objective);

  document.querySelectorAll('[data-populate="authors"]').forEach(node => {
    node.innerHTML = map.hasOwnProperty('created') ? `Created ${new Date(map.created).toLocaleString('default', {month: 'long', year: 'numeric'})} by ` : 'Created by ';
  });
  map.authors.forEach(author => {
    var hasUuid = author.hasOwnProperty('uuid');
    var username = hasUuid ? USER_UUIDS[author.uuid.replaceAll('-', '')] : author.username;

    var avatarEl = document.createElement('img');
    avatarEl.setAttribute('src', 'https://mc-heads.net/avatar/' + (hasUuid ? author.uuid : '606e2ff0ed7748429d6ce1d3321c7838'));

    var usernameEl = document.createElement('span');
    usernameEl.innerHTML = username ? username : '';

    var authorEl = document.createElement('div');
    authorEl.setAttribute('class', 'mr-author');

    authorEl.append(avatarEl);
    authorEl.append(usernameEl);

    document.querySelectorAll('[data-populate="authors"]').forEach(node => {
      node.appendChild(authorEl.cloneNode(true));
    });
  });

  document.querySelectorAll('[data-populate="teams"]').forEach(node => {
    node.innerHTML = '';
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
    document.querySelectorAll('[data-populate="teams"]').forEach(node => {
      node.appendChild(teamEl.cloneNode(true));
    });
  });

  document.querySelectorAll('[data-populate="tags"]').forEach(node => {
    node.innerHTML = '';
  });
  map.tags.forEach(tag => {
    var tagEl = document.createElement('div');
    tagEl.setAttribute('class', 'mr-tag');
    tagEl.innerHTML = tag;

    document.querySelectorAll('[data-populate="tags"]').forEach(node => {
      node.appendChild(tagEl.cloneNode(true));
    });
  });

  document.querySelectorAll('[data-populate="includes"]').forEach(node => {
    node.innerHTML = '';
    document.getElementById('mr-map-includes').classList.add('d-none');
  });
  if (map.source.includes) {
    document.getElementById('mr-map-includes').classList.remove('d-none');
    map.source.includes.files.forEach(file => {
      var includeEl = document.createElement('a');
      includeEl.setAttribute('href', `${map.source.includes.root}/${file}.xml`);
      includeEl.setAttribute('class', 'mr-include');
      includeEl.setAttribute('target', '_blank');
      includeEl.innerHTML = file;

      document.querySelectorAll('[data-populate="includes"]').forEach(node => {
        node.appendChild(includeEl.cloneNode(true));
      });
    });
  };

  document.querySelectorAll('[data-populate="variants"]').forEach(node => {
    node.innerHTML = '';
    document.getElementById('mr-map-variants').classList.add('d-none');
  });
  if (map.variants) {
    document.getElementById('mr-map-variants').classList.remove('d-none');
    map.variants.forEach(variant => {
      var variantEl = document.createElement('li');
      var variantElLink = document.createElement('a');
      variantElLink.innerHTML = variant.name;
      variantElLink.setAttribute('data-target', variant.internal_id);
      variantElLink.href = 'javascript:void(0)';
      variantEl.appendChild(variantElLink);

      document.querySelectorAll('[data-populate="variants"]').forEach(node => {
        node.appendChild(variantEl.cloneNode(true));
      });
    });

    const variantInfo = `The following variant of ${map.name} is bundled with this map:`;
    const variantInfoPlural = `The following variants of ${map.name} are bundled with this map:`;
    populateElementContent('variant-info', map.variants.length > 1 ? variantInfoPlural : variantInfo);
  };

  document.getElementById('mr-version-card').classList.add('d-none');
  document.querySelectorAll('[data-populate="version-description"]').forEach(node => {
    node.innerHTML = '';
  });
  if (map.server_version) {
    document.getElementById('mr-version-card').classList.remove('d-none');
    var versionDesc = '';
    if (map.server_version.min && !map.server_version.max) {
      versionDesc = `This map is designed for Minecraft ${map.server_version.min} and newer and will not be available on older server versions`;
    }
    if (!map.server_version.min && map.server_version.max) {
      versionDesc = `This map is designed for Minecraft ${map.server_version.max} and older and will not be available on newer server versions`;
    }
    if (map.server_version.min && map.server_version.max) {
      versionDesc = `This map is designed for Minecraft ${map.server_version.min} to ${map.server_version.max} and will not be available on other server versions`;
    }

    document.querySelectorAll('[data-populate="version-description"]').forEach(node => {
      node.innerHTML = versionDesc;
    });
  }

  document.querySelectorAll('[data-populate="license-name"]').forEach(node => {
    node.innerHTML = license.name;

    if (license.human_readable_url) {
      var linkEl = document.createElement('a');
      linkEl.setAttribute('href', license.human_readable_url);
      linkEl.setAttribute('target', '_blank');
      node.appendChild(linkEl.cloneNode(true));
    };
  });
  populateElementContent('license-description', license.description);

  document.querySelectorAll('[data-populate="license-permissions"]').forEach(node => {
    node.innerHTML = '';
  });
  license.permissions.forEach(attr => {
    var attrEl = document.createElement('div');
    attrEl.setAttribute('class', 'mr-license-regulation');
    attrEl.setAttribute('title', attr.hint);
    attrEl.setAttribute('data-toggle', 'tooltip');
    attrEl.innerHTML = attr.label;

    document.querySelectorAll('[data-populate="license-permissions"]').forEach(node => {
      node.appendChild(attrEl.cloneNode(true));
    });
  });

  document.querySelectorAll('[data-populate="license-restrictions"]').forEach(node => {
    node.innerHTML = '';
  });
  license.restrictions.forEach(attr => {
    var attrEl = document.createElement('div');
    attrEl.setAttribute('class', 'mr-license-regulation');
    attrEl.setAttribute('title', attr.hint);
    attrEl.setAttribute('data-toggle', 'tooltip');
    attrEl.innerHTML = attr.label;

    document.querySelectorAll('[data-populate="license-restrictions"]').forEach(node => {
      node.appendChild(attrEl.cloneNode(true));
    });
  });

  document.querySelectorAll('[data-regulation]').forEach(node => {
    if (node.getElementsByTagName('div')[0].children.length <= 0) {
      node.classList.add('d-none');
      node.classList.remove('d-block');
    } else {
      node.classList.remove('d-none');
      node.classList.add('d-block');
    };
  });

  populateElementContent('maintainer', (maintainer ? maintainer.name : map.source.maintainer));
  populateElementAttribute('maintainer_url', 'href', `https://github.com/${map.source.maintainer}/${map.source.repository}`);
  populateElementAttribute('maintainer-image', 'src', `https://github.com/${map.source.maintainer}.png`);
  populateElementContent('maintainer-description', (maintainer ? maintainer.description : ''));
  populateElementAttribute('github-url', 'href', map.source.github_url);
  populateElementAttribute('xml-url', 'href', map.source.github_url + '/map.xml');
  populateElementAttribute('image-url', 'src', map.source.image_url);
  populateElementAttribute('map-id', 'data-id', map.id);

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

// handle errors from maps
function onError(message) {
    $('.modal.show').modal('hide');
    $('#download-error-message').modal('show');
    $('#download-error-output').text(message);
}

// modal control for download progress and error messages
GitZip.registerCallback(function(status, message, percent) {
    var progress = percent;
    if (status === 'done') {
        $('.modal').modal('hide');
        $('#map-download-started').modal('show');
        progress = 0;
        updateAndDisplayRates();
    } else if (status === 'error') {
        $('.modal').modal('hide');
        if (message.indexOf('API rate limit exceeded for') === -1) {
            onError('An error occurred while retrieving your download. Check the console for more details.');
        } else {
            $('#download-rate-limit-message').modal('show');
        }
        progress = 0;
        updateAndDisplayRates();
    }
    $('.progress-bar').css({
        'width': (progress * 2) + '%',
        'background-color': 'rgb(71, 198, 99)'
    });
});
