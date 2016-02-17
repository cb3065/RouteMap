'use strict';

var map;

function routeMap() {
	var myLatlng = new google.maps.LatLng(52.823363,0.852726);
	var mapOptions = {
		zoom: 13,
		center: myLatlng
	}
	map = new google.maps.Map(document.getElementById("routeMap"), mapOptions);
}
routeMap();
