

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
	navWrapper.click(function () {
		menuWrapper.toggle();
		$(window).resize(function(){
			menuWrapper.hide();
		});
	});
	
	$(".item_category_nav").mousehold(200, function(i){  
		var pos = $(this).siblings(".shop_item_list_wrap").scrollLeft();
		if($(this).hasClass("prev_button") || $(this).hasClass("prev_button_wrap")) {
			console.log("prev button clicked");
			$(this).siblings(".shop_item_list_wrap").scrollLeft(pos - 314);
		}
		else{
			console.log("next button clicked");
			$(this).siblings(".shop_item_list_wrap").scrollLeft(pos + 314);
		}
	});
if($("body").hasClass("single")){
	$("#wrapper").delegate('a', 'click', function(event){
		event.preventDefault();
	});
}
	
} )( jQuery );
