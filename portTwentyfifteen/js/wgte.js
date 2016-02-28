/**
 * Theme functions file.
 *
 * Contains handlers for navigation and widget area.
 */ 
( function( $ ) {
	var menuClose = $("#menu_close");
	var menuWrapper = $("#menu_wrapper");
	var navWrapper = $("#nav_wrapper");
	var navWrapWidth = navWrapper.width();
	/* to "x" or close out of the nav menu*/
	menuClose.click(function () {
		menuWrapper.hide();
		});
	/* handles clicking on the nav menu*/
	$(document).on("click", "#navWrapper", function () {
		if(navWrapWidth <= 800){
			 menuWrapper.toggle();
		}else{
			menuWrapper.hide();
	    }
			console.log("wtf");
	});
	/*
	$(".item_category_nav").mousehold(200, function (i) {
	    console.log($(this).siblings(".shop_item_list_wrap"));
	    var pos = $(this).siblings(".shop_item_list_wrap").scrollLeft();

	    console.log(pos);
		if($(this).hasClass("prev_button") || $(this).hasClass("prev_button_wrap")) {
			console.log("prev button clicked");
			$(this).siblings(".shop_item_list_wrap").scrollLeft(pos - 234.5);
			console.log(pos);
		}
		else {
		    console.log(pos);
			console.log("next button clicked");
			$(this).siblings(".shop_item_list_wrap").scrollLeft(pos + 234.5);
			console.log(pos);
		}
	});
*/

$(document).on("click", "#navWrapper", function menuClose(){
	$("#menu_wrapper").toggle();
	console.log("cats");
});



} )( jQuery );




