// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree
function initialize(latitude, longitude, minZoomLevel)
{
	
	
	
	var mylatlong = new google.maps.LatLng(latitude,longitude);
	if(typeof minZoomLevel == "undefined")
		minZoomLevel = 12;
		
	var mapProp = {
		center: mylatlong,
		zoom: minZoomLevel,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};
	
	var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
	
	
	var marker = new google.maps.Marker({
      position: mylatlong,
      map: map,
      title: 'You'
	});
	
	var closedOptions = {
		strokeColor: '#7CFC00',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: '#7CFC00',
		fillOpacity: 0.35,
		map: map,
		center: mylatlong,
		radius: 1000
	};
	
	var activeOptions = {
		strokeColor: '#FF0000',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: '#FF0000',
		fillOpacity: 0.35,
		map: map,
		center: mylatlong,
		radius: 1000
	};
	
	
	var cityCircle = new google.maps.Circle(closedOptions);
	
	
	google.maps.event.addListener(cityCircle, 'click', function() {
		alert("Booya");
    });

}

function getLocation()
{
	if (navigator.geolocation)
    {
		navigator.geolocation.getCurrentPosition(showPosition, getLocationFromInput);
    }
	else{
		alert(123);
		x.innerHTML = "Geolocation is not supported by this browser.";
	}
	
}

function showPosition(position)
{
	initialize(position.coords.latitude, position.coords.longitude);
}

function getLocationFromInput()
{
	geocoder = new google.maps.Geocoder();
//	var address = document.getElementById("address").value;
	var address = "Bangalore";
	
	geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        //In this case it creates a marker, but you can get the lat and lng from the location.LatLng
		//console.log("Hi");
		console.log(results[0].geometry.location.k);
		console.log(results[0].geometry.location.A);
		initialize(results[0].geometry.location.k, results[0].geometry.location.A);
      } else {
		initialize("21.0000", "78.0000", 5);
      }
    });
	
	
}

google.maps.event.addDomListener(window, 'load', getLocation);


$(document).ready(function(){
	$('.subscribe_container').hide();
	$('#search_button').click(function(){
	TweenMax.to(".project_details_container", 0.5, {css:{right: "0px"}, ease:Quad.easeOut});
	});

	$('.subscribe_button').click(function(){
		$('.subscribe_container').show();
	});

	$('#close_subscribe').click(function(){
		$('.subscribe_container').hide();
	});

	$('.details_close').click(function(){
		TweenMax.to(".project_details_container", 0.5, {css:{right: "-350px"}, ease:Quad.easeOut});
	});
});

