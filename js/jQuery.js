var text;
function menu() {
	$('ul').remove();
	var count = prompt('Ile pozycji listy stworzyć ?');
	if (count > 0) {
		$('#menu').append('<ul></ul>');
		for (var i = 0; i < count; i++) {
			text = prompt('Podaj text dla pozycji nr ' + (i + 1) + ' :');
			if (text === null || text === '') {
				text = 'Nowa pozycja listy';
			}
			$('ul').append('<li>' + text + ' </li>');
		}
	}
};
//change $.click(); to $.on();
$('.button').on('click', menu);

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
