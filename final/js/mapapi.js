const data = "https://maps.googleapis.com/maps/api/geocode/json?address=1000+South+Main+Street,%20+Riggins,%20+ID&key=AIzaSyCAmlVQvZ7Gaq58E3-a_CyxOO4--jdy5Ns";
fetch(data)
    .then((response) => response.json())

    .then((jsPosition) => {
        var results = jsPosition.results[0];
        var geometry = results.geometry;
        var location = geometry.location;
        var faddress = results.formatted_address;
        var myCenter = location;
        var main = document.createElement('div');
        var p = document.createElement('p');

        p.textContent = faddress;
        main.appendChild(p);

        document.querySelector('div.address').appendChild(main);

        function initialize() {
            var mapProp = {
                center: myCenter,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            var map = new google.maps.Map(document.getElementById("map"), mapProp);

            var marker = new google.maps.Marker({
                position: myCenter,
            });

            marker.setMap(map);
        }
        google.maps.event.addDomListener(window, 'load', initialize);
    })