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

	window.onload = function(){
		var element = document.getElementById('map_load');
		var map = new google.maps.Map(element,{
		zoom:16,
		center:new google.maps.LatLng(37.506425,127.057432),
		mapTypeId:google.maps.MapTypeId.ROADMAP
		})
		new google.maps.Marker({icon: Icon,
			title:'핫요가퀸즈 삼성점',
			cont:'1',
			position:new google.maps.LatLng(37.506409,127.059458),
			map:map
			});
		new google.maps.Marker({icon: Icon,
			title:'자연한의원',
			cont:'1',
			position:new google.maps.LatLng(37.503830,127.055231),
			map:map
			});
		new google.maps.Marker({icon: Icon,
			title:'그랜드인터콘티넬탈 호텔',
			cont:'1',
			position:new google.maps.LatLng(37.509217,127.060789),
			map:map
			});
		}
		var Icon = new google.maps.MarkerImage(
		"./images/source/4/label.png",
		//"icon.html",
		new google.maps.Size(50, 50),
		new google.maps.Point(0, 0),
		new google.maps.Point(20, 20)
		);
		function mk(){
			Icon;
		}
		mk();
		if($('#map_load').find('.gm-style')){
			console.log('11')
			$('.gm-style').css({'top':'250px'});
		}
	return false;
});
