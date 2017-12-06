var map;
var stations;

$.getJSON('https://api.jcdecaux.com/vls/v1/stations?contract=paris&apiKey=cc6485103054d29afbe886a3b44a1b1895002184', function(data) {
    stations = stations(data);
});

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: new google.maps.LatLng(48.8591841, 2.34249, 13.13),
    });
}

// Loop to place a marker
stations = function (results) {
    for (var i = 0; i < results.length; i++) {
        var coords = results[i].position;
        var latLng = new google.maps.LatLng(coords.lat, coords.lng);
        var marker = new google.maps.Marker({
            position: latLng,
            map: map
        });
    }
}


// choper ces infos pour en faire un array (meilleur structure code) + regrouper les marqueurs
stations = function (results) {
    console.log(results[1].position);
}