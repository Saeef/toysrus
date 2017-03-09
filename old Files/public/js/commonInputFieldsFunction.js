/*
 * Function required when an input is not valid and the border should be red colored
 */

function addInputError(selector) {
   addInputError(selector, "");
}

function addInputError(selector, message) {
   
   jQuery(document).ready(function() {
      $(selector).addClass("error");

      $(selector + "_error").show();
      if (message.length>30) {
    	  message = "<span class='large-error'>"+message+"</span>";
      }
      $(selector + "_error").html("");
      $(selector + "_error").append(message);
   });
}


/**
 * Populate address form with selected addresses from address doctor' results
 * 
 * @param address1
 * @param city
 * @param postalCode
 */
function populateAddress(address1, address2, city, postalCode, address3) {
   $("#address1").val(address1);
   $("#acc_street").val(address1);//signin.jsp
   $("#address_streetAddress").val(address1);//accountProfileInfo.jsp, addressAddEdit.jsp
   $("#billAddr-address").val(address1);//billingAddress.jspf
   $("#reg-address").val(address1);//register.jsp
   $("#addr-address").val(address1);//accountGiftListAddressForm.jsp
   
   $("#address2").val(address2);
   $("#acc_street2").val(address2);//signin.jsp
   $("#address_streetAddress2").val(address2);//accountProfileInfo.jsp
   $("#address_streetAddress_2").val(address2);//addressAddEdit.jsp
   $("#billAddr-address2").val(address2);//billingAddress.jspf
   $("#reg-address2").val(address2);//register.jsp
   $("#addr-address2").val(address2);//accountGiftListAddressForm.jsp
   
   $("#address3").val(address3);
   $("#acc_street3").val(address3);//signin.jsp
   $("#address_streetAddress3").val(address3);//accountProfileInfo.jsp
   $("#address_streetAddress_3").val(address3);//addressAddEdit.jsp
   $("#billAddr-address3").val(address3);//billingAddress.jspf
   $("#reg-address3").val(address3);//register.jsp
   $("#addr-address3").val(address3);//accountGiftListAddressForm.jsp
   
   $("#city").val(city);
   $("#acc_city").val(city);//signin.jsp
   $("#address_city").val(city);//accountProfileInfo.jsp, addressAddEdit.jsp
   $("#billAddr-city").val(city);//billingAddress.jspf
   $("#reg-city").val(city);//register.jsp
   $("#addr-city").val(city);//accountGiftListAddressForm.jsp
   
   var country = "";
   
   if ($("#acc_country").val() != undefined) {
	   country = $("#acc_country").val();
   } else if ($("#address_country").val() != undefined) {
	   country = $("#address_country").val();
   } else if ($("#billAddr-country").val() != undefined) {
	   country = $("#billAddr-country").val();
   } else if ($("#reg-country").val() != undefined) {
	   country = $("#reg-country").val();
   } else if ($("#addr-country").val() != undefined) {
	   country = $("#addr-country").val();
   } else if ($("select[id='country']").val() != undefined) {
	   country = $("select[id='country']").val();
   }
   
   if (country == "IE"){
	   $("#zipCode").val("");  
	   $("#acc_zip").val("");//signin.jsp
	   $("#address_zipCode").val("");//accountProfileInfo.jsp, addressAddEdit.jsp
	   $("#billAddr-postal").val("");//billingAddress.jspf
	   $("#reg-postal").val("");//register.jsp
	   $("#addr-postal").val("");//accountGiftListAddressForm.jsp
   } else {
	   $("#zipCode").val(postalCode);  
	   $("#acc_zip").val(postalCode);//signin.jsp
	   $("#address_zipCode").val(postalCode);//accountProfileInfo.jsp, addressAddEdit.jsp
	   $("#billAddr-postal").val(postalCode);//billingAddress.jspf
	   $("#reg-postal").val(postalCode);//register.jsp
	   $("#addr-postal").val(postalCode);//accountGiftListAddressForm.jsp
   }
   
   var addrNickName = address1 + city + postalCode;
   
   if(addrNickName.length > 41) {
   	addrNickName = addrNickName.substring(0, 41);
   }
   
   $("#address_savedName").val(trimAddress(addrNickName));
   $("#address_newSavedName").val(trimAddress(addrNickName));
   $("#nickName").val(trimAddress(addrNickName));
   
   if (window.location.pathname.indexOf("mobile") != -1) {
      $('html,body').animate({scrollTop:$(".lookupContainerForm").offset().top - 25}, 500);
   } else {
      $('html,body').animate({scrollTop:$("#postalCodeInput").offset().top}, 500);
   }
}

function trimAddress(addressString) {
	   return addressString.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'').replace(/ /g,'');
	}

//please remove this line