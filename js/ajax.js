var submitClicked = false;

function displayCreditCardAddress(selectedKey){
	$("#selectedCreditCardAddress").load("/checkout/gadgets/creditCardInfo.jsp?nickname="+escape(selectedKey));
}

function displayCreditCardBillingAddress(billAddrSelectedId){
	$("#selectedBillingAddress").load("/checkout/gadgets/en_GB/billingAddressInfo.jsp?billAddrSelectedId=" + billAddrSelectedId);
}

function displayBillingAddress(selectedKey){
	$("#selectedBillingAddress").load("/checkout/gadgets/en_GB/billingAddressInfo.jsp?nickname="+escape(selectedKey));
}

function displayMobileBillingAddress(selectedKey){
	$("#selectedBillingAddress").load("/mobile/checkout/gadgets/en_GB/billingAddressInfo.jsp?nickname="+escape(selectedKey));
}

function validateState(country){
	if (country == 'IE') {
		if ($("#zipCode").length > 0) {
			$("#zipCode").attr('disabled', 'disabled');
			$("#zipCode_error").hide();
	 		$("#zipCode").removeClass("error");
			$("#zipCode").val("");
		}
		if ($("#editPostalCode").length > 0) {
			$("#editPostalCode").attr('disabled', 'disabled');
			$("#editPostalCode_error").hide();
	 		$("#editPostalCode").removeClass("error");
			$("#editPostalCode").val("");
		}
		if ($("#acc_zip").length > 0) {
			$("#acc_zip").attr('disabled', 'disabled');
			$("#acc_zip_error").hide();
	 		$("#acc_zip").removeClass("error");
			$("#acc_zip").val("");
		}
		if ($("#reg-postal").length > 0) {
			$("#reg-postal").attr('disabled', 'disabled');
			$("#reg-postal_error").hide();
	 		$("#reg-postal").removeClass("error");
			$("#reg-postal").val("");
		}
		if ($("#billAddr-postal").length > 0) {
			$("#billAddr-postal").attr('disabled', 'disabled');
			$("#billAddr-postal_error").hide();
	 		$("#billAddr-postal").removeClass("error");
			$("#billAddr-postal").val("");
		}
	} else {
		if ($("#zipCode").length > 0) {
			$("#zipCode").removeAttr("disabled");
		}
		if ($("#editPostalCode").length > 0) {
			$("#editPostalCode").removeAttr("disabled");	
		}
		if ($("#acc_zip").length > 0) {
			$("#acc_zip").removeAttr("disabled");	
		}
		if ($("#reg-postal").length > 0) {
			$("#reg-postal").removeAttr("disabled");	
		}
		if ($("#billAddr-postal").length > 0) {
			$("#billAddr-postal").removeAttr("disabled");	
		}
	}
	
	$('#acc_state').html("");
	if (country != 'PL') {
		$('#acc_state').append('<option value="" selected="true">Select</option>');
	}
	$('#countryPicker').load("/global/util/statePicker.jsp?countryCode=" + escape(country));
}

/**
 * Javascript function used to remove the a gift card from an order
 * @param gcId The gift card id to remove (it is the payment group id)
 */
function removeGC(gcId) {
	$('#giftCertificateToRemove').val(gcId);
	$('#removeGiftSubmit').click();
}

/**
 * used to submit the gift card form
 */
function submitGCform() {
	try {
	var gcCertificateNumber = $('#giftCertificateNumbers').val();
	var gcCertificatePins = $('#giftCertificatePins').val();
	$('#giftCertificateNumbersFormInput').val(gcCertificateNumber);
	$('#giftCertificatePinsFormInput').val(gcCertificatePins);
	localStorage.setItem("prefix",$("#billAddr-prefix").val());
	localStorage.setItem("firstName",$("#billAddr-fName").val());
	localStorage.setItem("lastName",$("#billAddr-lName").val());
	localStorage.setItem("address",$("#billAddr-address").val());
	localStorage.setItem("address2",$("#billAddr-address2").val());
	localStorage.setItem("address3",$("#billAddr-address3").val());
	localStorage.setItem("city",$("#billAddr-city").val());
	localStorage.setItem("postalCode",$("#billAddr-postal").val());
	localStorage.setItem("homePhone1",$("#homePhone1").val());
	localStorage.setItem("cellPhone1",$("#cellPhone1").val());
	localStorage.setItem("email",$("#email").val());
	localStorage.setItem("confirmEmail",$("#confirmEmail").val());
	} catch (error) {
		return false;
	} finally {
		$('#giftCertificateFormSubmitBtn').click();
	}
}

function validateEmail () {
	conditions1 = jQuery("#termsAndConditions").is(":checked");
	conditions2 = jQuery("#termsAndConditions2").is(":checked");
	if (conditions1 && conditions2) {
		$(".error-message").empty();
		$("input").removeClass("error");
		$("p.error").hide();
		
		var confirmEmail = $("#confirmEmail").val();
		var email = $("#email").val();
		if (email.length > 0 && email.toLowerCase() === confirmEmail.toLowerCase()) {
			if ($("#payPal").is(":checked")) {
				$("#paypal-country").val($("#billAddr-country").val());
				$("#paypal-prefix").val($("#billAddr-prefix").val());
				$("#paypal-firstName").val($("#billAddr-fName").val());
				$("#paypal-firstName").val($("#billAddr-fName").val());
				$("#paypal-lastName").val($("#billAddr-lName").val());
				$("#paypal-address1").val($("#billAddr-address").val());
				$("#paypal-address2").val($("#billAddr-address2").val());
				$("#paypal-city").val($("#billAddr-city").val());
				$("#paypal-state").val($("#billAddr-county").val());
				$("#paypal-postalCode").val($("#billAddr-postal").val());
				$("#paypal-phoneNumber").val($("#homePhone1").val());
				$("#paypal-phoneNumber2").val($("#homePhone1").val());
				$("#paypal-cPhoneNumber").val($("#homePhone1").val());
				
				if ($("#addr-phone1").length > 0 && $("#addr-phone1").val().length > 0) {
					$("#paypal-homePhone").val($("#addr-phone1").val());
				} else {
					$("#paypal-homePhone").val($("#homePhone1").val());
				}
				
				$("#paypal-homePhone1").val($("#addr-phone2").val());
				$("#paypal-homePhone2").val($("#addr-phone3").val());
				$("#paypal-faxNumber").val($("#cellPhone1").val());
				$("#paypal-faxNumber2").val($("#cellPhone1").val());
				
				$("#paypal-cFaxNumber").val($("#cellPhone1").val());
				$("#paypal-cellPhone").val($("#addr-cellPhone1").val());
				$("#paypal-cellPhone1").val($("#addr-cellPhone2").val());
				$("#paypal-cellPhone2").val($("#addr-cellPhone3").val());
				
				$("#paypal-billAddr-nickname").val($("#addressId").val());
				
				if ($("#paypal-email").length > 0 && $("#paypal-confirmEmail").length > 0) {
					$("#paypal-email").val($("#email").val());
					$("#paypal-confirmEmail").val($("#confirmEmail").val());
				}
				
				$('#paypalForm').submit();
			} else {
				$('#submitCheckout').trigger( 'click' );
			}
		}
		else {
			var recipientEmailNotMatchText = $("#recipientEmailNotMatchText").text();
			$(".error-message").append('<br>' + recipientEmailNotMatchText);
			var format = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			if (!format.test(email)) {
				$("#email").addClass("error");
				$("#emailError").show();
				$('html, body').animate({scrollTop: $("#email").offset().top - 50}, 500);
			}else if (!format.test(confirmEmail)){
				$("#confirmEmail").addClass("error");
				$("#confirmEmailError").show();
				$('html, body').animate({scrollTop: $("#confirmEmail").offset().top - 50}, 500);
			}else if (format.test(email) && format.test(confirmEmail) && email != confirmEmail){
				$("#confirmEmail").addClass("error");
				$("#emailMisMatch").show();
				$('html, body').animate({scrollTop: $("#confirmEmail").offset().top - 50}, 500);
			}
			submitClicked = false;
			return false;
		}
	} else {
		submitClicked = false;
		return false;
	}
		
}

function submitProfileRegistration(){
    $("#registerForm").submit();
}

function setSelectedBillAddress(callback) {
	
	if (submitClicked) {
		return;
	}
	submitClicked = true;
	
	if ($("#shipping_for_billing:checked").length > 0) {
		loadShippingAsBill();
	}
	
	var selectedBillAddress = $("input#useAddr:checked").val(); 
	if (selectedBillAddress == "useSavedAddress") {
//		$("input#useAddr").val("useSavedAddress");
		$('input[name=useAddr]').val("useSavedAddress");
	} 
	else if (selectedBillAddress == "useShippingForBilling") {
		$('input[name=useAddr]').val("useShippingForBilling");
	}
	else if ($("input#useAddr:checked").length < 1 || selectedBillAddress != "useSavedAddress") {
		if ($("#shipping_for_billing:checked").length > 0) {
			$('input[name=useAddr]').val("useShippingForBilling");
		}
		else {
			$('input[name=useAddr]').val("useNewAddress");
			$('input[name="_D:useAddr"]').val("useNewAddress");
		}
	}
	
	if ($("#saveCC").length > 0) {
		$("#ccNickName2").val($("#ccNickName").val());
	}
	
	callback();
}
