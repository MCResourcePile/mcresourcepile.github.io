var MAP_DATA;
var MAP_SETTINGS;
var USER_UUIDS;

document.addEventListener('DOMContentLoaded', () => {
  fetchData();

  document.querySelectorAll('[data-action="open-download"]').forEach(btn => {
    btn.addEventListener('click', e => {
      alert(btn.dataset.id)
    });
  });
});

function fetchData() {
  getJSON('/data/maps/pgm.json', (err, data) => {
    if (!err) {
      MAP_DATA = data.data.maps;
    };
  });
  getJSON('/data/global.json', (err, data) => {
    if (!err) {
      MAP_SETTINGS = data.settings.maps;
    };
  });
  getJSON('/data/uuids.json', (err, data) => {
    if (!err) {
      USER_UUIDS = data.uuids;
    };
  });
};

function getJSON(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';
  xhr.onload = function() {
    var status = xhr.status;
    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    };
  };
  xhr.send();
};
