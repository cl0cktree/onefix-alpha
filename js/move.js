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
		$('.video-wrap').find('video').get(0).pause();
		$('.video-wrap').find('video').get(0).currentTime=0;
	});

	// window.onload = function(){
	// 	var element = document.getElementById('map_load');
	// 	var map = new google.maps.Map(element,{
	// 	zoom:16,
	// 	center:new google.maps.LatLng(37.506425,127.057432),
	// 	mapTypeId:google.maps.MapTypeId.ROADMAP
	// 	})
	// 	new google.maps.Marker({icon: Icon,
	// 		title:'핫요가퀸즈 삼성점',
	// 		cont:'1',
	// 		position:new google.maps.LatLng(37.506409,127.059458),
	// 		map:map
	// 		});
	// 	new google.maps.Marker({icon: Icon,
	// 		title:'자연한의원',
	// 		cont:'1',
	// 		position:new google.maps.LatLng(37.503830,127.055231),
	// 		map:map
	// 		});
	// 	new google.maps.Marker({icon: Icon,
	// 		title:'그랜드인터콘티넬탈 호텔',
	// 		cont:'1',
	// 		position:new google.maps.LatLng(37.509217,127.060789),
	// 		map:map
	// 		});
	// }
	// var Icon = new google.maps.MarkerImage(
	// "./images/source/4/label.png",
	// //"icon.html",
	// new google.maps.Size(50, 50),
	// new google.maps.Point(0, 0),
	// new google.maps.Point(20, 20)
	// );
	// function mk(){
	// 	Icon;
	// }
	// mk();
	
	$('.select-btn-wrap').on('click', 'a', function(){
		var select_kind;
		var selec_num;
		var selec_val;
		selec_val = $(this).data('index');
		if ($(this).is('.select_1')){
			selec_num = 1;
		}else if($(this).is('.select_2')){
			selec_num = 2;
		}else if($(this).is('.select_3')){
			selec_num = 3;
		}else if($(this).is('.select_4')){
			selec_num = 4;
		};
		$('.map-wrap').find('.house-image').children('img').attr('src','./images/data_'+selec_num+'.png');
		$('.map-wrap').find('.house-kind').html(selec_val);
		$('.map-wrap').fadeIn('300');
	});
	$('.back_btn').on('click',function(){
		$('.map-wrap').fadeOut('300');
	});
	$('.life-kind-wrap li').on('click','a',function(){
		$('.life-kind-wrap').find('li').removeClass('on');
		$(this).parents('li').addClass('on');
	});
	$('.under-title').on('click',function(){
		if ($('.under-board').css('bottom')=='0px'){
			$('.under-board').stop().animate({'bottom':'-355px'},200,function(){
				$('.under-board').stop().animate({'bottom':'-344px'},200);
			});
		}else if ($('.under-board').css('bottom')=='-344px'){
			$('.under-board').stop().animate({'bottom':'10px'},200,function(){
				$('.under-board').stop().animate({'bottom':'0'},200);
			});
		};
	});
	$('.search_btn').on('click',function(){
		if ($(this).siblings('input[type="search"]').val()==''){
			alert('검색어를 입력해주세요.');
		}else{
			alert('연결 된 데이터가 없습니다.');
			$(this).siblings('input[type="search"]').val('');
		};
	});
	return false;
});
