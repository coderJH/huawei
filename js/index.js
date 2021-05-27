window.onload=function() {
	
	var alist = $(".skyblue a");
	for (let i = 0; i < alist.length; i++) {
		$(alist[i]).hover(function() {
			$(this).children("span").css("width", "100%");
		}, function() {
			$(this).children("span").css("width", "0px");
		});
	}
	
	// 滚动条
	$(window).scroll(function() {
		let scrl = $(this).scrollTop();
		if (scrl > 350) {
			$(".header-bottom").css("top", "-80px");
		} else {
			$(".header-bottom").css("top", "-1px");
		}
	})
	
	// 切换图片
	let oldsrc;
	$(".product-left img").hover(function(){
		let src = $(this).prop("src");
		oldsrc = src;
		let srclist = src.split("/");
		let newnum = srclist[srclist.length-1].split(".");
		newnum[0] = newnum[0]+'_'+newnum[0];
		srclist[srclist.length-1] = newnum.join(".");
		let newsrc = srclist.join('/');
		
		$(this).prop("src",newsrc).css("max-width","80%");
		
	},function() {
		$(this).prop("src",oldsrc);
	})
	
	let bgimg=["himg/kj1.jpg","himg/kj2.jpg","himg/kj3.jpg"];
	let i = 0;
	
	// 切换背景图片
	setInterval(function(){
		if (i>bgimg.length-1) {
			i = 0;
		}
		$(".bgimg").css("background","url('"+bgimg[i]+"') no-repeat").css("background-attachment","fixed").css("background-size","cover");
		i++;
	},10000);
	
	var viewportWith = $(window).width();
	ViewPort(viewportWith);
	function ViewPort(viewportWith) {
		if (viewportWith>768) {
			$(".banner").css("background","url('himg/lb1.jpg') no-repeat").css("background-size","cover");
			$(".banner1").css("background","url('himg/lb2.jpg') no-repeat").css("background-size","cover");
			$(".banner2").css("background","url('himg/lb3.jpg') no-repeat").css("background-size","cover");
			$("#gwc").css("display","block");
		}else if(375 < viewportWith && viewportWith<=768){
			twoimglist = ["himg/tp1.jpg","himg/tp3.jpg"];
			$(".banner").css("background","url('himg/ipad_1.jpg') no-repeat").css("background-size","cover");
			$(".banner1").css("background","url('himg/ipad_2.jpg') no-repeat").css("background-size","cover");
			$(".banner2").css("background","url('himg/ipad_3.jpg') no-repeat").css("background-size","cover");
			$("#gwc").css("display","none");
		}else if(viewportWith<=375){
			twoimglist = ["himg/tp2.jpg","himg/tp7.jpg"];
			$(".banner").css("background","url('himg/ipad_1.jpg') no-repeat").css("background-size","cover");
			$(".banner1").css("background","url('himg/ipad_2.jpg') no-repeat").css("background-size","cover");
			$(".banner2").css("background","url('himg/ipad_3.jpg') no-repeat").css("background-size","cover");
			$("#gwc").css("display","none");
		}
	}
	window.onresize = function(){
		viewportWith = $(window).width();
		ViewPort(viewportWith);
	}
	
	var twoimglist = ["himg/tp1.jpg","himg/tp3.jpg"];
	let j = 0;
	var twotimer = setInterval(function(){
		if (j>twoimglist.length-1) {
			j = 0;
		}
		$("#two_lb img").prop("src",twoimglist[j]);
		j++;
	},2500);
}

