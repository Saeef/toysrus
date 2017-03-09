/* Vertical Align Plugin */
(function (jQuery) {
  jQuery.fn.vAlign = function(){
    return this.each(function(i){
      var ah = jQuery(this).height();
      var ph = jQuery(this).parent().height();
      var mh = Math.ceil((ph-ah) / 2);
      jQuery(this).css('margin-top', mh);
    });
  };
})(jQuery);