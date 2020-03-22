var myCenter;
var pcenter = {lat:42.096290, lng:-111.876640};
var scenter = {lat:42.654739, lng:-111.597778};
var fcenter = {lat:42.051970, lng:-111.449880};
var page = window.location.href;
if (page.match(/preston/)){
  myCenter = pcenter;
  
}
else if (page.match(/sodasprings/)) {
    myCenter = scenter;
}
else if (page.match(/fishhaven/)) {
    myCenter = fcenter;
}
console.log(myCenter);
function initialize(){
    var mapProp = {
        center:myCenter,
        zoom:11,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map"),mapProp);

    var marker = new google.maps.Marker({
        position:myCenter,
    });

    marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);