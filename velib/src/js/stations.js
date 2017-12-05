const $ = require('jquery');

$.getJSON('https://api.jcdecaux.com/vls/v1/stations?contract=paris&apiKey=cc6485103054d29afbe886a3b44a1b1895002184', function(data) {
    console.log(data);
});