(function () {
    // your code goes here
    var map = new google.maps.Map(document.getElementById('map'), {
        center: new google.maps.LatLng(51.505, -0.09),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 11
    });

    var t = new Date().getTime();
    var waqiMapOverlay = new google.maps.ImageMapType({
        getTileUrl: function (coord, zoom) {
            return 'https://tiles.aqicn.org/tiles/usepa-aqi/' + zoom + "/" + coord.x + "/" + coord
                .y + ".png?token=9c03d80dc5bc4c873966b88600d3e7a29bb72d41";
        },
        name: "Air  Quality",
    });

    map.overlayMapTypes.insertAt(0, waqiMapOverlay);
})();