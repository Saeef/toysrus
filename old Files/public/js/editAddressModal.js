/**
 * Loads the jsp file for the edit address overlay
 */
function editAddress(nickname, shippingId) {
    $("#modalWindow").load("/checkout/modal/editAddressMaster.jsp?nickname=" + encodeURIComponent(nickname) + "&shipId=" + encodeURIComponent(shippingId), function (){

        var height = $(window).scrollTop() + 100;
        jQuery('#overlay-container.edit-address').css('top', height);

    });
    $("#simplemodal-overlay").css("cursor","default");
}

/**
 * Close Edit Address Overlay
 */
function closeAddressOverlay() {
	if ($("#error-message").length > 0 && $("#error-message").val() === "") {
    	$("#error-message").hide();
    }
    if (typeof clearInputs === 'function') {
    	clearInputs();
    }
    
	$.modal.close();
	$("#modalWindow").empty();
	$("#simplemodal-overlay").remove();
	$("#simplemodal-container").remove();
	$("#simplemodal-placeholder").remove();   
	var $newmodalWindow = $( "<div id='modalWindow'></div>");
	$("body").append($newmodalWindow);
}

/**
 * Ajax call to submit edit Address form and update address
 * @param nickname the address to change
 * @param baseURL from the site
 */
function editAddressOverlay(nickname, shippingId) { 
	$("#errorDiv").html("");
    
	var escapedNickname = nickname.replace(/(:|\.|\[|\]|,|\#|\s)/g, "\\$1");
	dataString = $("#editAddress1" + escapedNickname).serialize();
	
	$.ajax({  
		type: "POST", 
		url: "/checkout/gadgets/validateEditAddress.jsp",  
		data: dataString,
		dataType: "text",  
		success: function(data) { 	     
			if(data.indexOf("success") <= -1){ 
				$("#errorDiv").html(data);
				checkFields();
			} else if(data.indexOf("success") > -1){
				if (typeof $.modal != 'undefined') { 
					$.modal.close();
				}
				
				var dataString = jQuery("#updateShippingAddressOrder").serialize();
				
				$.ajax({
			        type : "POST",
			        url : "/checkout/shipping/shipping.jsp",
			        data : dataString,
			        dataType : "html",
			        beforeSend : function() {

			        },
			        complete : function() {

			        },
			        success : function(data) {
			        	document.location.reload(true);
			        },
			        error : function(xhr, ajaxOptions, thrownError) {
			        }
			     });
				
			}
		},
	});	                   
}