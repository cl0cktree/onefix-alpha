$(function(){
	$('.start_btn').on('click',function(){
		$('.rading-page').stop().animate({'z-index':'-20','opacity':'0'},function(){
			$('.rading-page').css({'display':'none'})
		});
	});
	$('.video_btn').on('click',function(){
		$('.background_filter').fadeIn('300');
	});
	$('.video_close_btn').on('click',function(){
		$('.background_filter').fadeOut('300');
	});
	return false;
});
