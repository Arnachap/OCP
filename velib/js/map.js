var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: new google.maps.LatLng(48.8591841, 2.34249,13.13),
    });
}

window.initMap = initMap;