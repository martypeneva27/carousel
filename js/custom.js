$(document).ready(function() {
	var interval = setInterval(carousel, 5000);
	
	var imgs = document.querySelectorAll('.container img');
	
	function carousel() {
		$(".container").animate({marginLeft: '-504px'}, 1000, function() {
			$(this).find('a:last').after($(this).find('a:first'));
			$(this).css({marginLeft: 0});
		});
	}
	
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
	
	function openpopup(evt) {
		$('.background').css('display', 'block');
		$('.popup .close').css('display', 'block');
		$('.popup img').attr('src', $(this).attr('src')).css('display', 'block');
		clearInterval(interval);
		evt.preventDefault();
	}
	
	function closepopup(evt) {
		$('.background').css('display', 'none');
		$('.popup .close').css('display', 'none');
		$('.popup img').attr('src', "").css('display', 'none');
		interval = setInterval(carousel, 5000);
		evt.preventDefault();
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
	
	rdmstart(imgs);
	$.each($('.filters div'), function() {
		$('.filters div').on('click', changeFilterClass);
	});
	$.each(imgs, function() {
		$(this).on('click', openpopup);
	});
	$('.close').on('click', closepopup);
});

