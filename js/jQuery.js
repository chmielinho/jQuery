$('.button').on('click', function () {
	var text;
	$('#menu ul').remove();
	var count = prompt('Ile pozycji listy stworzyć ?');
	if (count > 0) {
		$('#menu').append('<ul></ul>');
		for (var i = 0; i < count; i++) {
			text = prompt('Podaj text dla pozycji nr ' + (i + 1) + ' :');
			if (text === null || text === '') {
				text = 'Nowa pozycja listy';
			}
			$('#menu ul').append('<li>' + text + ' </li>');
		}
	}
});

$('span').each(function (index, element) {
	if (index % 2 === 0) {
		$(element).css('color', 'red');
	}
});
var paragraphs = $('.buttons').find('p');
paragraphs.each(function (index, element) {
	var button = '<button class="btn" data-tmp="' + index + '">Click me</button>';
	$(element).append(button);
});
$('.btn').on('click', function () {
	alert($(this).attr('data-tmp'));
});

$(function () {
	var carouselList = $('#carousel .photos');
	$('#carousel .next').on('click', changeSlideNext);
	$('#carousel .back').on('click', changeSlideBack);
	$('#carousel .bullets li').on('click', bulletsOnClick);
	setInterval(changeSlideNext, 10000);
	bullets();
	function changeSlideNext() {
		carouselList.animate({'marginLeft': -600}, 500, moveFirstSlide);
	}
	function changeSlideBack() {
		carouselList.animate({'marginLeft': 0}, 500, moveLastSlide());
	}
	function moveFirstSlide() {
		var firstItem = carouselList.find('li:first'),
			lastItem = carouselList.find('li:last');
		lastItem.after(firstItem);
		carouselList.css({marginLeft: 0});
		bullets();
	}
	function moveLastSlide() {
		var firstItem = carouselList.find('li:first'),
			lastItem = carouselList.find('li:last');
		firstItem.before(lastItem);
		carouselList.css({marginLeft: -600});
		bullets();
	}
	function bullets() {
		var carouselList = $('#carousel .photos');
		var carouselList2 = $('#carousel .bullets');
		var count = carouselList.find('li').length;
		for (var i = 0; i < count; i++) {
			var photoLi = carouselList.find('li').eq(0).data('no'),
				bulletsLi = carouselList2.find('li').eq(i).index();
			if (photoLi == bulletsLi) {
				carouselList2.find('li').eq(i).html('<i class="fa fa-circle" aria-hidden="true"></i>');
			} else {
				carouselList2.find('li').eq(i).html('<i class="fa fa-circle-o" aria-hidden="true"></i>');
			}
		}
	}
	function bulletsOnClick() {
		var clicked = $(this).index();
		var carouselList = $('#carousel .photos');
		var i = carouselList.find('li').eq(0).data('no');
		for (i; i >= clicked; i--){
				moveLastSlide();
		};
		for (i; i < clicked; i++){
				moveFirstSlide();
		};
	}
});