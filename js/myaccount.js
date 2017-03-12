function displayOrderDetails(orderId,element){
		if(!$("#"+orderId+"").hasClass("open")){
			$("#"+orderId+"").load("/account/gadgets/accountOrderItemDetails.jsp?orderId="+orderId);
			$("#"+orderId+"").show().addClass("open");
		}else{
			$("#"+orderId+"").hide().removeClass("open");
		}
		var toggleValue = element.attr("data-toggleText");
		element.attr("data-toggleText",element.text());
		element.text(toggleValue);
}

$(document).ready(function(){
	
	if(window.location.pathname == "/account/order-history"){
		
		var params = {};
		var ps = window.location.search.split(/\?|&/);
		for (var i = 0; i < ps.length; i++) {
		    if (ps[i]) {
		        var p = ps[i].split(/=/);
		        params[p[0]] = p[1];
		    }
		}
		if(params.order){
			
			displayOrderDetails(params.order,$(".showHideOrderDetails[data-orderId="+params.order+"]"));
			
		}
		
	}
	
	if(window.location.pathname == "/account/gift-registry/update"){
		if ($("#errorEditEventType").length > 0) {
			$('select[id="atg_store_giftListAddEventType"]').find('option[value=""]').attr("selected",true);
		}
	}
	
	$(".showHideOrderDetails").on("click",function(){		
		displayOrderDetails($(this).attr("data-orderId"),$(this));
	});
	
	// fix display email max characters
	$('[class*="max-char"]').each(function(){
		var maxChar = 0; 
		$(this).attr('class').split(' ').forEach(function(classs){
			if (classs.indexOf('max-char')>=0) maxChar = parseInt(classs.replace('max-char[', '').replace(']', ''));		
		});
		if ((str=$(this).text()).length>maxChar) {
			var short = str.substring(0, maxChar) + '...';
			$(this).attr('title', str).text(short);
		}
	});
	
	$('.orders-container table.order td').each(function(){
		if (!($.trim($(this).text()).length)) {
			$(this).html('&nbsp;');
		}
	});
		
	
});

function trimAddress(addressString) {
   return addressString.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'').replace(/ /g,'');
}


// validates zip code, only used for overlays not using a formhandler or a formhandler different to the one used with the address lookup.
function isZipCodeValid(zipCode) {
	var regex = /([A-Z]{1})(([A-Z]{1}[\d]{1}[A-Z]{1})|([\d]{1}[A-Z]{1})|([\d]{1})|([\d]{1}[\d]{1})|([A-Z]{1}[\d]{1})|([A-Z]{1}[\d]{1}[\d]{1}))([\s]{1})([\d]{1}[A-Z]{1}[A-Z]{1})/i;
    return regex.test(zipCode);
}

function loadPasswordOverlay() {
	$("#modalWindow").load("/global/gadgets/modal/passInfoOverlay.jsp");
    $("#modalWindow").modal({
        opacity: 80,
        minHeight:160,
        maxHeight: 800,
        minWidth: 660,
        overlayClose: true, 
        overlayCss:{ 
            backgroundColor:"#000"
        },
        containerCss:{ 
            backgroundColor:"#fff" 
        }
    });
}

function closeOverlay(){
	$.modal.close();
	$("#modalWindow").empty();
}

