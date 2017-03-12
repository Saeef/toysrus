$(document).ready(function(){
	$(".checkout-steps .billing-address.registered input#useAddr").on("click",function(){
		if($(this).val() == "useSavedAddress"){
			$(this).parents(".billing-address.registered").find(".saved-addrs").slideDown();
			$(this).parents(".billing-address.registered").find(".new-addr").slideUp();
			jQuery("#billAddr-nickname").val(jQuery("#addressId").val());
		} else if ($(this).val() == "useShippingForBilling") {
			$(this).parents(".billing-address.registered").find(".saved-addrs").slideUp();
			$(this).parents(".billing-address.registered").find(".new-addr").slideUp();
		} else{
			$(this).parents(".billing-address.registered").find(".new-addr").slideDown();
			
			if ($("#shipping_for_billing:checked").length < 1) {
			   $(this).parents(".billing-address.registered").find(".new-addr").find(".newBillingForm").slideDown();
		    }
			
			$(this).parents(".billing-address.registered").find(".saved-addrs").slideUp();
		}
	});
	if($(".checkout-steps .billing-address.registered input#useAddr:checked").val() == "useSavedAddress"){
		$(".billing-address.registered").find(".saved-addrs").slideDown();
		$(".billing-address.registered").find(".new-addr").slideUp();
	}else{
		$(".billing-address.registered").find(".saved-addrs").slideUp();
		$(".billing-address.registered").find(".new-addr").slideDown();
	}
	
	
	// Gift Card Overlay
	$(".overlay-link").on("click",function(e){
		e.preventDefault();
		$("body #overlay-container,body #overlay-shadow").remove();
		$("body").append("<div id=\"overlay-container\">Loading...</div><div id=\"overlay-shadow\"></div>");
		$.get($(this).attr("href"),function(data){
			$("body #overlay-container").html(data).css({"top":((($(window).height()/2)-($("body #overlay-container").outerHeight(true)/2))+$(window).scrollTop())+"px","left":(($(window).width()/2)-($("body #overlay-container").outerWidth(true)/2))+"px"});
			$("body #overlay-container .close").on("click",function(e){
				e.preventDefault();
				$("body #overlay-container,body #overlay-shadow").remove();
			});
		}).error(function(){
			console.log("error fetching overlay contents");
		});		
	});	
});