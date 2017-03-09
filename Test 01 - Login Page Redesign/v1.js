(function(){
  //window object
  var window = window.jQuery;
  //set home page here: http://www.example.com
  var home = null;
  //set page target here:  /contacts
  var page1 = null;

  var testName = {                  //bom
      init: function(data) {
          //disables external css
          this.mainCss(false);
          //init code fired off
          this.begins();
          
      },
      mainCss: function(applyCss){        //dom
          if(applyCss){
              //injecting css
              var mainCss = document.createElement('style');
              mainCss.type = "text/css";
              mainCss.innerHTML = "css welcome here";  
              //append to head
              document.getElementsByTagName('head')[0].appendChild(mainCss);
              
          }
      },
      begins: function() {
          console.log('Greetings from begins');
          //targeting urls
          if(window.location.href == home) {
             console.log('you are in the home page');
          }
          //home page, target page
          else if (window.p)
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