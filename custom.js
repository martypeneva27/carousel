$(document).ready(function() {
	setInterval (function() {
		$(".container").animate({marginLeft: '-504px'}, 1000, function() {
			$(this).find('a:last').after($(this).find('a:first'));
			$(this).css({marginLeft: 0});
		});
	}, 5000);
	
	var imgs = document.querySelectorAll('.container img');
	rdmstart(imgs);
	
	
	
	function rdmstart(images) {
		var imgaddr = [];
		for (var i = 0; i < images.length; i++) {
			imgaddr[i] = images[i].getAttribute('src');
		}
		var links = $('.img-link').detach();
		for (var i = 0; i < links.length; i++) {
			var rand = getRandomInt(0, imgaddr.length);
			
			var img = links[i].querySelector('img');
			img.setAttribute('src', imgaddr[rand]);
			imgaddr.splice(rand, 1);
		};
		$('.container').append(links);
	}
	
	function getRandomInt(min, max) {
		 min = Math.ceil(min);
		 max = Math.floor(max);
		 return Math.floor(Math.random() * (max - min)) + min;
	}
	
	function changeFilterClass(evt) {
		if ($(this).hasClass('btns')) {
			$(this).removeClass('btns').addClass('btns-clicked');
		}
		else {
			if (document.querySelectorAll('.btns-clicked').length == 1) {
				return;
			}
			$(this).removeClass('btns-clicked').addClass('btns');
		}
	}
	$.each($('.filters div'), function() {
		$('.filters div').on('click',changeFilterClass);
		});
});

