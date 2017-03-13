/* _optimizely_evaluate=force */
function checkifbodyexist() {
 if (document.body === null) {
   setTimeout(function() {
     checkifbodyexist();
   }, 10);
 } else {
   document.body.style.opacity = 0;
 }
}
checkifbodyexist();
/* _optimizely_evaluate=safe */


(function(){
  var $ = window.jQuery;
  var testName = {
      init: function(data) {
          this.yourCode();
          this.mainCss(false);
      },
      mainCss: function(applyCss){
          if(applyCss){
              var mainCss = '';

              var headofdoc = document.getElementsByTagName('head')[0];
              var s = document.createElement('style');
              s.setAttribute('type', 'text/css');
              s.appendChild(document.createTextNode(mainCss));
              headofdoc.appendChild(s);
          }
      },
      yourCode: function() {
          console.log('HEY');
      }
  };

    

  $(document).ready(function() {
    try{

      testName.init();

      setTimeout(function(){
        document.body.style.opacity = 1;  
      }, 300);


    } catch(err){
      document.body.style.opacity = 1;
      console.log('Something happen: '+ err);
    }

  });

})();