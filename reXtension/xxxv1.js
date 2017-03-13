(function() {
  //window object
  var window = this.window;
  //home page. ex: 'www.toysrus.co.uk'
  var home =  this.location.hostname;
  //ex: '/checkout/start-checkout'
  var page = this.location.pathname;
  //search params.  ex.  '?_requestid=266617'
  var searchID = this.location.search;
debugger;
  var SL01 = {
    console.clear();
    init: function() {
       console.log('Greetings from init function');

       //fire off script
       this.fireOff();
       //keep external css out
       this.mainCss(false);

    },

    mainCss:function(style) {
      console.clear();
      console.log('Greetings from mainCss');

      if(style){
        var style = document.createElement('style');
        style.type = "text/css";
        //enter styles here:
        style.innerHTML = "body {background-color:red;}";
        //append to head
        document.getElementsByTagName('head')[0].appendChild(style);
        
alert('stop');
        

              
      }//if applyCss


    },
    //this is where it all starts
    fireOff: function() {
      console.clear();
      console.log('Greetings from fireOff function');
      var rightSide = document.getElementById('shipRightPanel');

      //targetting urls
      var homepage = 'www.toysrus.co.uk' 
      if (home == homepage) {
        console.log('Greetings from fireOff - homepage');
        homepage();
      
      }//homepage
      var pageOne = "/checkout/start-checkout";
      else if (page == pageOne) {
        console.log("greetings from fireOff - pageOne");
        pageOne();

      }//pageOne


    },//fireOff


    homepage: function() {

        console.log('Greetings from homepage - homepage');

    },

    pageOne: function() {

        console.log('Greetings from fireOff - homepage');


    }



  };// testname



  $(document).ready(function() {
    try {

      console.log('Greetings from testName.init');
      SL01.init();
    
    } //try

      catch(err) {
        
        console.log('Greetings from errors');
        console.log(err);
    
    }. //catch


  });  //doc ready funct



})();  //self exe funct