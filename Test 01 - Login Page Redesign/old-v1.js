(function(){
  
  var testName = {
      init: function(data) {
          //init code
          this.yourCode();
          //keep out external css
          this.mainCss(false);
      },
      mainCss: function(applyCss){
          if(applyCss){
              var mainCss = null;

              var style = document.createElement('style');
              style.type = "text/css";
              style.innerHTML = "your CSS"   
              //append to head
              document.getElementsByTagName('head')[0].appendChild(style);
              
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