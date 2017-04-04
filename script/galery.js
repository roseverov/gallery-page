$(document).ready(function (){
	jQuery('#smallBar a').click(function(e) {
			if (jQuery('#bigP img').attr('src') != $(this).attr('href')) {
			jQuery('#bigP img').hide().attr('src',$(this).attr('href'));
			jQuery('#bigP img').load(function(){
			$(this).fadeIn(900);
			});
			}
		e.preventDefault();
	});

	jQuery('#wrap').hide();//или display:none в css
	
	jQuery('#turner span').toggle(function() {
		$(this).html('Скрыть галерею <span>-</span>');
		jQuery('#wrap').slideDown(600);
	}, function() {
		$(this).html('Показать галерею <span>+</span>');
		jQuery('#wrap').slideUp(600);
	});
	
	jQuery('#smallBar a img').click(function() {
		jQuery('#smallBar a img').removeClass('togCl');
		$(this).addClass('togCl')
	});
});