/*
* @Author: hp
* @Date:   2019-08-21 19:02:08
* @Last Modified by:   hp
* @Last Modified time: 2019-08-22 20:17:41
*/

$(function(){
	// 头部下拉菜单
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

	// 列表
	$('.lis').hover(function() {
		/* Stuff to do when the mouse enters the element */
		$(this).children('a').children('.stripe').css('display','block');
		$(this).children('div').css('display','block');
		
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(this).children('a').children('.stripe').css('display','none');
		$(this).children('div').css('display','none');
		
	});

	$('.list').mouseleave(function(){
		$('.first_type').children('a').children('.stripe').addClass('current_type');
		$('.first_type').children('.pro_type1').addClass('current_type');
		$('.first_type').children('a').children('.stripe').css('display','');
		$('.first_type').children('.pro_type1').css('display','');
	})
	$('.list').mouseenter(function(){
		$('.first_type').children('a').children('.stripe').removeClass('current_type');
		$('.first_type').children('.pro_type1').removeClass('current_type');
		$('.first_type').children('a').children('.stripe').css('display','none');
		$('.first_type').children('.pro_type1').css('display','none');
	})


	// 热门产品轮播
	var hot=0;
	$('.hot_lft_btn').click(function(){
		hot++;
		if(hot>1){
			hot=0;
			$('.pro_box>ul').css('margin-left',-511*hot+'px');
			hot=0;
		}
		$('.pro_box>ul').animate({'margin-left':-511*hot+'px'});
	})
	$('.hot_rig_btn').click(function(){
		hot++;
		if(hot>1){
			hot=0;
			$('.pro_box>ul').css('margin-left',-511*hot+'px');
			hot=0;
		}
		$('.pro_box>ul').animate({'margin-left':-511*hot+'px'});
	})

	// 产品展示
	$('.pro_lis').hover(function() {
		/* Stuff to do when the mouse enters the element */
		$(this).children('.add').css('display','block');
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(this).children('.add').css('display','none');
	});

	// page
	$('.page').children('a').click(function(event) {
		/* Act on the event */
		$(this).addClass('current_page').siblings('a').removeClass('current_page')
	});


	// footer
	$('.wx').hover(function() {
		/* Stuff to do when the mouse enters the element */
		$('.left_middle').children('img').css('display','block');
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$('.left_middle').children('img').css('display','none');
	});
})