(function() {
  //clear console at runtime
  console.clear();
  //window object
  var window = this.window;
  //set testsite home page url
  var homeUrl = "www.toysrus.co.uk";
  //set testsite page target - stands for 'target page relative url'
  var tarRelUrl = "/checkout/start-checkout";
  

  var testNameSL = {

    init: function() {
       console.log('Greetings from init function step2 of 3');
       //keep external css out
       this.mainCss(false);
       //fire off script
       //this.partyStarted();
       

    },

    mainCss:function() {
      console.log('Greetings from mainCss function step3a of 3');
      //create elem
      var style = document.createElement('style');
      style.type = "text/css";
      
      //enter styles here:
      style.inner = "body {background-color:red;}";

      //append to head
      document.getElementsByTagName('head')[0].appendChild(style);
        

  

    },  //mainCss

    partyStarted: function() {
      console.log('Greetings from partyStarted function step3b of 3');
     
      
      
    },  //partyStarted

    homePage: function() {
        console.clear();
        //if it gets here, just park and call it out -atm
        console.info('Greetings from ' + homeUrl + ' page.');
        
    },

    targetPage: function() {
        console.clear();
        debugger;
        //found right page  
        console.info('Greetings from ' + tarRelUrl + ' page.');

    }


  };// testnameSL



  $(document).ready(function() {
   

      console.log('Test initialized - step1 of 3');
      testNameSL.init();

      function runErrors() {
            //root local folder
            if(window.location.protocol == "file:") {
                //get me 'start-checkout'
                var tar = tarRelUrl.substr(10,tarRelUrl.length); 
                if (window.location.href.includes(tar) != true) {
                    throw "cannot find local home page";      
                }
                //run target page
                else { //testing locally
                    testNameSL.targetPage();
                }    
                
            }//root local folder

            //live and not just any root url
            else if (window.location.hostname == homeUrl) {
                    //get me '/checkout/start-checkout'
                    if (window.location.pathname != tarRelUrl) {
                         throw "not relative target url page";                  
                    }
                    //run target page
                    else { 
                         //testing locally
                         testNameSL.targetPage();
                    }

            }//root url 

      }

      
    try {       
            
      runErrors();
    
    } //try

    catch(err) {
      /*
      --------------------------------------------------------------
      browsers add a red and yellow line in source code when you use
      console.error and console.warn => it\'s not a bug. I tested it.
      --------------------------------------------------------------
      */
      console.warn('\n Greetings from Errors \n\n');
      console.error('Following issues were found: \n\n' +  err + ' \n\n');
    
    } //catch


  });  //doc ready funct



})();  //self exe funct