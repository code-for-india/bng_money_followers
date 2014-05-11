$(document).ready(function(){
	$('.subscribe_container').hide();
});

// $('#search_button').click(function(){
	// TweenMax.to(".project_details_container", 0.5, {css:{right: "0px"}, ease:Quad.easeOut});
// });

$('.subscribe_button').click(function(){
	$('.subscribe_container').show();
});

$('#close_subscribe').click(function(){
	$('.subscribe_container').hide();
});

$('.details_close').click(function(){
	TweenMax.to(".project_details_container", 0.5, {css:{right: "-350px"}, ease:Quad.easeOut});
})

$('.bounce').click(function(){
	TweenMax.to(".homepage", 1, {css:{top: "-1000px"}, ease:Power1.easeIn});
});