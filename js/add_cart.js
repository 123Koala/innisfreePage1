/*
* @Author: wqh
* @Date:   2019-08-24 23:00:30
* @Last Modified by:   wqh
* @Last Modified time: 2019-08-25 18:44:18
*/
/*
* @Author: hp
* @Date:   2019-08-24 16:50:52
* @Last Modified by:   hp
* @Last Modified time: 2019-08-24 16:51:00
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

	// 增加数量
	var num=0;
    $('.plugs').click(function(event) {
    	/* Act on the event */
    	num=$('.number1').val();
    	num++;
    	$('.number1').val(num);
    	$('.totle_price1').html('￥'+65.0*num+'.0');
    	$('.price').html('￥'+65.0*num+'.0');
    });
    $('.minus').click(function(event) {
    	/* Act on the event */
    	num=$('.number1').val();
    	num--;
    	if(num<0){
    		num=0;
    	}
    	$('.number1').val(num);
    	 $('.totle_price1').html('￥'+65.0*num+'.0');
    	 $('.price').html('￥'+65.0*num+'.0');
    });

    // 移除
    $('.small_close').click(function(event) {
    	/* Act on the event */
    	$('.pro_account').hide();
    	$('.totle_price1').html('￥'+65.0*0+'.0');
    	$('.account').html(0);
    });
})