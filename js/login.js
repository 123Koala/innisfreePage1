/*
* @Author: hp
* @Date:   2019-08-24 13:53:30
* @Last Modified by:   wqh
* @Last Modified time: 2019-08-25 18:54:57
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

	// 登录验证
	var txt;
	$('.login_btn').click(function(event) {
		/* Act on the event */
		txt=$('.txt').val();
		if(txt==""){
			alert("账号/密码不能为空");
			return false;
			$('.login_btn').attr('href', '../html/login.html');
		}
	});

})