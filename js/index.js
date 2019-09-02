/*
* @Author: hp
* @Date:   2019-08-20 10:42:21
* @Last Modified by:   hp
* @Last Modified time: 2019-09-02 12:07:03
*/
// 头部下拉菜单
$(function(){
	$('.drop_menu1').hover(function() {
			/* Stuff to do when the mouse enters the element */
			$('.dropbox1').css('display', 'block');
		}, function() {
			/* Stuff to do when the mouse leaves the element */
			$('.dropbox1').css('display', 'none');;
	});
	$('.drop_menu2').hover(function() {
			/* Stuff to do when the mouse enters the element */
			$('.dropbox2').css('display', 'block');
		}, function() {
			/* Stuff to do when the mouse leaves the element */
			$('.dropbox2').css('display', 'none');;
	});
	$('.drop_menu3').hover(function() {
			/* Stuff to do when the mouse enters the element */
			$('.dropbox3').css('display', 'block');
		}, function() {
			/* Stuff to do when the mouse leaves the element */
			$('.dropbox3').css('display', 'none');;
	});
	$('.drop_menu4').hover(function() {
			/* Stuff to do when the mouse enters the element */
			$('.dropbox4').css('display', 'block');
		}, function() {
			/* Stuff to do when the mouse leaves the element */
			$('.dropbox4').css('display', 'none');;
	})

	// banner
	var timer;
	var num=0;
	clearInterval(timer);
	timer=setInterval(function(){
		num++;
		if(num>3){
			num=0;
			$('.bannerbox').css('margin-left',-1583*num+'px');
			$('.progressbar').children('li').css('background-color','');
			$('.xuhao').html(num+1);
			num=0;
		}
		$('.bannerbox').animate({'margin-left':-1583*num+'px'});
		$('.progressbar').children('li').eq(num).css('background-color','#ffffff');
		$('.xuhao').html(num+1);
	},2000)



	$('.pausebtn').click(function(){
		$(this).toggleClass('play');
		if($(this).hasClass('play')==true){
			$(this).css('background-image', 'url("../images/pause.png")');
			clearInterval(timer);
		}else{
			$(this).css('background-image', 'url("../images/play.png")');
			clearInterval(timer);
			timer=setInterval(function(){
				num++;
				if(num>3){
					num=0;
					$('.bannerbox').css('margin-left',-1583*num+'px');
					$('.progressbar').children('li').css('background-color','');
					$('.xuhao').html(num+1);
					num=0;
				}
				$('.bannerbox').animate({'margin-left':-1583*num+'px'});
				$('.progressbar').children('li').eq(num).css('background-color','#ffffff');
				$('.xuhao').html(num+1);
			},2000)
		}
	})


    $('.leftbtn').click(function(){
    	clearInterval(timer);
    	num++;
    	if(num>3){
			num=0;
			$('.bannerbox').css('margin-left',-1583*num+'px');
			$('.progressbar').children('li').css('background-color','');
			num=0;
		}
		$('.bannerbox').animate({'margin-left':-1583*num+'px'});
		$('.progressbar').children('li').eq(num).css('background-color','#ffffff');
		$('.xuhao').html(num+1);
    })

    
    $('.rightbtn').click(function(){
    	clearInterval(timer);
    	num--;
    	if(num<0){
			num=3;
			$('.bannerbox').css('margin-left',-1583*num+'px');
			$('.progressbar').children('li').css('background-color','#ffffff');
			num=3;
		}
		$('.bannerbox').animate({'margin-left':-1583*num+'px'});
		$('.progressbar').children('li').eq(num+1).css('background-color','');
		$('.xuhao').html(num+1);
    })



	$('.bannerbox').mouseover(function(){
		clearInterval(timer);
		$('.leftbtn').css('display','block');
		$('.rightbtn').css('display','block');
	})
	$('.bannerbox').mouseout(function(){
		clearInterval(timer);
		timer=setInterval(function(){
			num++;
			if(num>3){
				num=0;
				$('.bannerbox').css('margin-left',-1583*num+'px');
				$('.progressbar').children('li').css('background-color','');
				num=0;
			}
			$('.bannerbox').animate({'margin-left':-1583*num+'px'});
			$('.progressbar').children('li').eq(num).css('background-color','#ffffff');
			$('.xuhao').html(num+1);
		},2000)
		$('.leftbtn').css('display','none');
		$('.rightbtn').css('display','none');
	})


   // 产品侧轮播
	var pro_side;
	var n=0;
	clearInterval(pro_side);
	pro_side=setInterval(function(){
		n++;
		if(n>2){
			n=0;
			$('.sidebanner').css('margin-left',-100*n+'%');
			n=0;
		}
		$('.sidebanner').animate({'margin-left':-100*n+'%'});
		$('.fixed_ul').children('span').eq(n).css('background-color','#044437').siblings('span').css('background-color','#c6c2bb');
	},2000)

	// 播放视频
	$('.video_btn').click(function(event) {
		/* Act on the event */
		$(this).css('display', 'none');
		$('video').css('display', 'block');

	});

	// 产品列表
	$('.lis').mouseenter(function(event) {
		/* Act on the event */
		$(this).css('background-color','#ffffff');
		$(this).children('.bottom').css('display','block');
	});

	$('.lis').mouseleave(function(event) {
		/* Act on the event */
		$(this).css('background-color','');
		$(this).children('.bottom').css('display','none');
	});

	var showlis;
	var s=0;
	clearInterval(showlis);
	showlis=setInterval(function(){
		s++;
		if(s>1){
			s=0;
			$('.show_box').children('ul').css('margin-left',-1300*s+'px');
			s=0;
		}
		$('.show_box').children('ul').animate({'margin-left':-1300*s+'px'});
	},2000)


	// footer
	$('.wx').hover(function() {
		/* Stuff to do when the mouse enters the element */
		$('.left_middle').children('img').css('display','block');
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$('.left_middle').children('img').css('display','none');
	});
})