/*
 * Function to redirect to a country depending on selection from the footer
 */
function redirectCountry(country){
   window.location = country;
}

/**
 * validates the checkboxes to subscribe the user to the newsletter 
 */
function subscribe() {
  var addNewsletter = $("#addNewsletter").val();
  var termsAccept = $("#termsAccept").val();
  if (termsAccept == 'on' && termsAccept == 'on') {
     return true;
  } else {
    return false;
  }
}