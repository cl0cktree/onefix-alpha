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
		// $('.video-wrap').find('video').get(0).pause();
		// $('.video-wrap').find('video').get(0).currentTime=0;
		$("iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
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
		$('.house-kind').css({'width':'auto','text-align':''});
		if ($(this).is('.select_1')){
			selec_num = 1;
		}else if($(this).is('.select_2')){
			selec_num = 2;
		}else if($(this).is('.select_3')){
			selec_num = 3;
			$('.house-kind').css({'width':'60px','text-align':'center'});
		}else if($(this).is('.select_4')){
			selec_num = 4;
		};
		$('.map-wrap').find('.house-image').children('img').attr('src','./images/data_'+selec_num+'.png');
		$('.map-wrap').find('.house-kind').html(selec_val);
		$('.map-wrap').stop().animate({'z-index':'1'},0,function(){
			$('.map-wrap').stop().animate({'opacity':'1'},300)
		});
		$('.house-in-wrap').find('.head-middle ').children('img').attr('src','./images/source/6/build_'+selec_num+'.png');
	});
	$('.back_btn').on('click',function(){
		if ($('.house-in-wrap').css('display')=='block'){
			$('.house-in-wrap').fadeOut(300);
		}else{
			if ($('.under-board_2').css('bottom')=='0px'){
				$('.under-board_2').stop().animate({'bottom':'-344px'},200,function(){
					$('.under-board_1').stop().animate({'bottom':'0'},200);
				});
			}else{
				$('.map-wrap').stop().animate({'opacity':'0','z-index':'-2'},300);
				$('.under-board_1').css({'bottom':'-344px'});
			}
		}
	});
	$('.life-kind-wrap li').on('click','a',function(){
		var life_btn_index=$(this).parents('li').data('on');
		$('.life-kind-wrap').find('li').removeClass('on');
		$('.life-kind-wrap').find('.life-'+life_btn_index).addClass('on');
	});
	$('.under-title').on('click',function(){
		if ($('.under-board_1').css('bottom')=='0px'){
			$('.under-board_1').stop().animate({'bottom':'-355px'},200,function(){
				$('.under-board_1').stop().animate({'bottom':'-344px'},200);
			});
		}else if ($('.under-board_1').css('bottom')=='-344px'){
			$('.under-board_1').stop().animate({'bottom':'10px'},200,function(){
				$('.under-board_1').stop().animate({'bottom':'0'},200);
			});
		};
	});
	$('.under_btn').on('click',function(){
		$('.under-board_1').stop().animate({'bottom':'-355px'},200,function(){
			$('.under-board_1').stop().animate({'bottom':'-344px'},200,function(){
				$('.under-board_2').stop().animate({'bottom':'0'},200);
			});
		});
	});
	$('.search_btn').on('click',function(){
		if ($(this).siblings('input[type="search"]').val()==''){
			alert('검색어를 입력해주세요.');
		}else{
			alert('연결 된 데이터가 없습니다.');
			$(this).siblings('input[type="search"]').val('');
		};
	});
	$('.house_open_btn').on('click',function(){
		$('.house-in-wrap').fadeIn(300);
	});
	$('.tab').on('click',function(){
		var tab_index=$(this).data('li');
		$('.tab').removeClass('on');
		$(this).addClass('on');
		$('.staters').removeClass('on');
		$('.staters-'+tab_index).addClass('on');
	});
	$('.over').on('click',function(){
		var over_index=$(this).data('over');
		$('.staters-sel').removeClass('on');
		$('.staters-sel-'+over_index).addClass('on');
	});
	$('.contract_btn').on('click',function(){
		if($('#check_contract').prop('checked')){
			alert('해당 기능은 개발 중 입니다.');
		}else{
			alert('공지사항 확인을 체크 해주세요.');
		};
	});

	vw.ol3.MapOptions = {
		basemapType: vw.ol3.BasemapType.GRAPHIC
	, controlDensity: vw.ol3.DensityType.EMPTY
	, interactionDensity: vw.ol3.DensityType.BASIC
	, controlsAutoArrange: true
	, homePosition: vw.ol3.CameraPosition
	, initPosition: vw.ol3.CameraPosition
	};
	vmap = new vw.ol3.Map("vmap",  vw.ol3.MapOptions);
	return false;
});
