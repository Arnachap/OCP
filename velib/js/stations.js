var stations;

$.getJSON('https://api.jcdecaux.com/vls/v1/stations?contract=paris&apiKey=cc6485103054d29afbe886a3b44a1b1895002184', function(data) {
    stations = stations(data);
});

// Loop to place a marker
window.stations = function (results) {
    for (var i = 0; i < results.length; i++) {
        var coords = results[i].position;
        var latLng = new google.maps.LatLng(coords.lat, coords.lng);
        var marker = new google.maps.Marker({
            position: latLng,
            map: map
        });
    }
}