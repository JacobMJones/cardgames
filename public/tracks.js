$(document).ready(function() {
    console.log('in tracks start');

    if ("geolocation" in navigator) {

        navigator.geolocation.getCurrentPosition(function(position) {
            $('#status').text(position.coords.latitude + " " + position.coords.longitude);

        });
    } else {
        $('#status').text('geolocation DOESNT exists');
    }
});