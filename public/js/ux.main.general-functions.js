$(function(){
   // Placeholder crossbrowser solution
   $('input[placeholder], textarea[placeholder]').placeholderEnhanced();

   //Set ellipsis to menu
   $('.dept-list > ul > li > a, .category-link > ul > li > a').each(function(index ,element){
      var word = $(this).text();
      if(word.length >= 25){
         reducedWord = word.slice(0,word.indexOf(' ',18));
         wordtrap = 18;
         while(reducedWord.length > 18){
            reducedWord = word.slice(0,word.indexOf(' ',wordtrap));
            wordtrap--;
         }
         // $(this).html(word.slice(0,word.indexOf(' ',12))+'... <span class="tooltip-arrow"><img src="/ux/themes/common/img/mega-menu_left-arrow.png" alt="<"></span>');
         $(this).html(reducedWord+'... <span class="tooltip-arrow"><img src="/ux/themes/common/img/mega-menu_left-arrow.png" alt="<"></span>');
      }
   });

   // cached elements
   var $megaMenuButton = $('.main-menu');
   var $megaMenuLink = $('.first-level-item');

   // display Mega-menu first level
   $megaMenuButton.hover(
      function(){
         if(!$megaMenuButton.children('.sub-menu').hasClass('home')){
            $(this).children('.sub-menu').showItem();
         }
      },function(){
         if(!$megaMenuButton.children('.sub-menu').hasClass('home')){
            $(this).children('.sub-menu').hideItem();
         }
      }
      );

   // Show and hide mega-menu second level
   $megaMenuLink.hover(
      function(){
         $link = $(this).children('a');
         $megamenu = $(this).children('.mega-menu-container');
         $arrow = $link.children('.tooltip-arrow');

         $link.addClass('selected');
         $megamenu.showItem();
         $arrow.show();
      },function(){
         $link.removeClass('selected');
         $megamenu.hideItem();
         $arrow.hide();
      }
      );

   // Cookies disclaimer close button
   $('.close-cookies').click(function(e){
      e.preventDefault();
      $('.cookies').hideItem();
   });
   
   // Legacy browser advice close button
   $('.close-browser-advice').click(function(e){
      e.preventDefault();
      $('.old-browser-advice').hideItem();
   });
   
   // Sign-up show form
   $('.show-tooltip').hover(
      function(){
         $signupForm = $(this).children('.tooltip-container').children('.tooltip');
         $signupForm.showItem();
      },function(){
         $signupForm.hideItem();
      }
   );

   //using hover intent for a more friendly event
   if (undefined != $('.show-tooltip') &&  $('.show-tooltip').length  > 0) {
	   $('.show-tooltip').hoverIntent({
	       over: function(){
	           $signupForm = $(this).children('.tooltip-container').children('.tooltip');
	           $signupForm.showItem();
	        },
	       out:function(){
	           $signupForm.hideItem();
	       },
	       timeout: 600
	});
   }

   //Back to top
   $(window).scroll(function(){
       if ($(this).scrollTop()>80){
           $('.back-to-top').fadeIn('slow').removeClass('removed');
        }
       else{
         $('.back-to-top').fadeOut('fast');
        }
    });

   $('.back-to-top').click(function(e){
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "slow");
   });
   
/*
   This function shows/hides forms depending on data-form content.

   If data-content in the button with the class "add-form" matches
   the data content on the form with the class "added-form", then on
   click it will display the form.

   If data-content in the button with the class "remove-form" matches
   the data content on the form with the class "added-form", then on
   click it will hide the form.

   You can have as many "added-form" elements as soon as the
   data-form value matches an add and/or remove button.
   */
   $('.add-form').click(function(e){
      e.preventDefault();
      $self = $(this);
      $form = $('.added-form');
      $form.each(function(index, element) {
         if($self.data('form') === $(this).data('form')){
            $(this).showItem();
         }
      });
   });

   $('.remove-form').click(function(e){
      e.preventDefault();
      $self = $(this);
      $form = $('.added-form');
      $form.each(function(index, element) {
         if($self.data('form') === $(this).data('form')){
            $(this).hideItem();
            $('html, body').animate({
               scrollTop: $(this).parents().offset().top
            }, 1000);
         }
      });
   });

   // prevent default jump page (at the top) when a[href=#] is clicked
   $(this).on('click', "a[href='#']", function(e){
      e.preventDefault();
   });

});





// Hide or show anything jQuery function
(function($){
   $.fn.showItem = function(){
      $(this).removeClass('removed');
   }
   $.fn.hideItem = function(){
      $(this).addClass('removed');
   }
})(jQuery);