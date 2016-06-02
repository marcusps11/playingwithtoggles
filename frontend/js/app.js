$(document).ready(function() {
	Wagwan.initialize();
	$(window).resize(function() {
	        google.maps.event.trigger(map, 'resize');
	    });
	    google.maps.event.trigger(map, 'resize');
});

var Wagwan = Wagwan || {};
var marker;

Wagwan.initialize = function() {
	Wagwan.addBars();

	window.map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 51.525964, lng: -0.080139},
		scrollwheel: false,
		zoom: 12
	});
};


Wagwan.addBars = function(){
  // Making ajax call to back-end in order to retrieve json bar data
  var ajax = $.ajax({
  	method: "get",
  	url: 'http://localhost:3000/api/bars'
  }).done(function(data){
  	$.each(data.bars, function(index, bar){
  		Wagwan.markBar(bar);

  	});
  });
};

Wagwan.markBar = function(bar) {
	var marker = new google.maps.Marker({
	  position: {lat: bar.lat, lng: bar.lng},
	  map: window.map,
	  title: bar.name
	 
	});
	console.log(marker)
	marker.addListener('click', function() {
	    Wagwan.markerClick(bar, marker);
	  });
};

Wagwan.markerClick = function(bar, marker) {
	if (infowindow) infowindow.close();
	console.log(bar);
	var infowindow = new google.maps.InfoWindow({
	    content: bar.name
	  });

	infowindow.open(window.map, marker);

};

Wagwan.bindEvents = function() {
	$(".nav li a").on("click", Wagwan.ui.toggleTab);
	$("#test").on("click", Wagwan.twitter.getTweets);
};

Wagwan.ui = {};

Wagwan.ui.toggleTab = function() {
	console.log('hello')
	var tab = $(this).data("id");
	Wagwan.ui.toggleDisplays(tab);
};

Wagwan.ui.toggleDisplays = function(id){

  $('.tab').slideUp(1000);
  $("#" + id).toggle(1000);
  
};

Wagwan.twitter = {};

Wagwan.twitter.getTweets = function() {
	var ajax = $.ajax({
		method: "get",
		url: 'https://api.twitter.com/1/statuses/user_timeline/marcusps11.json?count=1&include_rts=1&callback=?'
	}).done(function(data){
			console.log(data);
	});
};


$(function(){
  Wagwan.initialize();
  Wagwan.bindEvents();
});