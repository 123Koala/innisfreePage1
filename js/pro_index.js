/*
* @Author: hp
* @Date:   2019-08-23 09:07:44
* @Last Modified by:   wqh
* @Last Modified time: 2019-08-25 18:16:12
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
	
	$('.shop_address').hover(function() {
		/* Stuff to do when the mouse enters the element */
		$('.address_index').css('display','block');
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$('.address_index').css('display','none');
	});

    // 购买数量的增加减少
    var num=0;
    $('.btn_up').click(function(event) {
    	/* Act on the event */
    	num=$('.number').val();
    	num++;
    	$('.number').val(num);
    	$('.totle_price').html('￥'+65.0*num+'.0');
    });
    $('.btn_down').click(function(event) {
    	/* Act on the event */
    	num=$('.number').val();
    	num--;
    	if(num<0){
    		num=0;
    	}
    	$('.number').val(num);
    	 $('.totle_price').html('￥'+65.0*num+'.0');
    });



	$('.province_btn').click(function(){
		$('.province').css('display','block');
		$('.city').css('display','none');
		$('.county').css('display','none');
	})
	$('.city_btn').click(function(){
		$('.city').css('display','block');
		$('.province').css('display','none');
		$('.county').css('display','none');
	})
	$('.county_btn').click(function(){
		$('.county').css('display','block');
		$('.province').css('display','none');
		$('.city').css('display','none');
	})
})