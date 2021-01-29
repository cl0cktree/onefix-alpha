$(function(){
	$('.start_btn').on('click',function(){
		$('.rading-page').stop().animate({'z-index':'-20','opacity':'0'},function(){
			$('.rading-page').css({'display':'none'})
		});
	});

	return false;
});
