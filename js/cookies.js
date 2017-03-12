$(document).ready(function() { 
	var cookieSet = $.cookie("cookieSet");
	
	if(cookieSet == "" || cookieSet == null){
		$('.cookies').showItem();
	}
	
	   // Cookies disclaimer close button
	   $('.close-cookies').click(function(){
			$.cookie("cookieSet", 1, {
				   expires : 1825,           //expires in 5 years

				   path    : '/'          //The value of the path attribute of the cookie 
				                           //(default: path of page that created the cookie).

				   //domain  : 'jquery.com',  //The value of the domain attribute of the cookie
				                           //(default: domain of page that created the cookie).

				   //secure  : true          //If set to true the secure attribute of the cookie
				                           //will be set and the cookie transmission will
				                           //require a secure protocol (defaults to false).
				});
	   });
	   
	   // Code to handle the legacy browser advice
	   var cookieBrowserAdvice = $.cookie("cookieBrowserAdvice");
		
	   if(cookieBrowserAdvice == "" || cookieBrowserAdvice == null){
		   $('.old-browser-advice').showItem();
	   }
		
	   // Cookies disclaimer close button
	   $('.close-browser-advice').click(function(){
			$.cookie("cookieBrowserAdvice", 1);
	   });
	
	
});