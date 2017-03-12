(function() {
  //clear console at runtime
  console.clear();
  //window object
  var window = this.window;
  //set testsite home page url
  var homeUrl = "www.toysrus.co.uk";
  //set testsite page target - stands for 'target page relative url'
  var tarRelUrl = "/checkout/start-checkout";
  
/*
----------------->
 ***testNameSL***
----------------->
*/
  var testNameSL = {

    init: function() {
       console.log('Greetings from init function step2 of 3');
       //keep external css out
       this.mainCss(false);

    },

    mainCss:function() {
      console.log('Greetings from mainCss function step3 of 3');
      //create elem
      var style = document.createElement('style');
      style.type = "text/css";
      
      //enter styles here:
      style.innerHTML = "body {}\n";
      //rightPan class
      style.innerHTML += ".basket {transition:all, .5s;}\n";
      style.innerHTML += ".mainToysArea { position:relative;  min-height:475px;}\n";
      style.innerHTML += ".mt30 {margin:10px 0 0 0 !important;}";
      style.innerHTML += "#rightside { position:absolute; top:23%; left:44%; width:2px; height:225px; background:#e8e8e8; }";

      //append to head
      document.getElementsByTagName('head')[0].appendChild(style);
        

    },  //mainCss
    //ref page
    homePage: function() {
        console.clear();
        //if it gets here, just park and call it out
        console.info('Greetings from ' + homeUrl + ' page.');
        
    },

    //drops divide
    createElem: function() {
        //new div
        var ele = document.createElement('div');
        ele.id = 'rightside';
        //add div
        var mainContent = document.querySelector('.content.payment-step'); 
        mainContent.appendChild(ele);
        mainContent.style.width = '980px';
        

        




    },

    signIni: function() {
        //entire signin section handle
        var but0 = document.querySelectorAll('.actions.clearfix')[0];
        //remove bottom border
        but0.parentElement.parentElement.
        classList.remove('gray-border-bottom');
        //grab signin and take it down
        var sibut = but0.children[0];
        sibut.style.clear = 'both';
        //checkout heading bottom border
        var sign = document.querySelector('ul.tabs');
        sign.style.width = '980px';
        //get rid off required
        var req = document.
        querySelector('.required-msg.color-4.text-align-right');
        req.style.display = 'none';
        //forgotten
        var forgotten = document.querySelector('.mt30');
        //remove floatleft class and float right
        forgotten.classList.remove('floatleft');
        forgotten.style.float = 'right';
        //wrap up right side on a div
        this.createElem();  



    },

    //create account button
    createAccount:function() {
        //create account button handle
         var but2 = document.querySelectorAll('.actions.clearfix')[2];
         but2.style.float = 'left';
         but2.children[0].style.backgroundColor = "#0056b6";
         //create account handle
         var create = document.
         querySelector('.new-customer-checkout.gray-border-bottom.pb20'); 
         //move to new position
         create.style.position = 'absolute';
         create.style.right = '2%';
         create.style.top = '46%';
         create.style.border = 0;
         //remove new customer small heading
         create.children[0].children[0].children[0].innerText = '';
         this.signIni();

    },

    //move guess checkout to the right
    guessCheck: function() {
         //guess handle
         var g = document.querySelectorAll('span.strong')[1];
         //change to new customer
         g.textContent = "New Customer"; 
         //checkout as guess button handle
         var but1 = document.querySelectorAll('.actions.clearfix')[1];
         but1.style.float = 'left';
         //entire checkout content handle
         var mainContent = document.querySelector('.content.payment-step'); 
         //add class with pos relative
         mainContent.classList.add('mainToysArea');
         //entire div handle
         var guess = document.
         querySelector('.guest-checkout.gray-border-bottom.pb20'); 
         //new position
         guess.style.position = 'absolute';
         guess.style.right = '10%';
         guess.style.top = '17.5%';
         guess.style.border = 0;
         //do blue button
         this.createAccount();


    },

    //removes rightPanel
    rightPanel: function() {
        var rightPan = document.getElementById('shipRightPanel');
        rightPan.style.position = 'absolute';
        rightPan.style.right = '-999999px';
        //adds class
        rightPan.classList.add('basket');
        //move to guess checkout
        this.guessCheck();

    },

    //target page
    targetPage: function() {
        console.clear();
        debugger;
        //found right page  
        console.info('Greetings from ' + tarRelUrl + ' page.');
        //remove rightPanel
        this.rightPanel();
        

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

            //target\'s live root url
            else if (window.location.hostname == homeUrl) {
                    //get me '/checkout/start-checkout'
                    if (window.location.pathname != tarRelUrl) {
                         throw "not relative target url page";                  
                    }
                    //run target page
                    else { 
                         //testing live
                         testNameSL.targetPage();
                    }

            }//root url 

      }

/*
--------------------------------->
 try & catch
--------------------------------->
*********************************
* it\'s not a bug. I tested it *
*********************************
browsers add a red and yellow 
line in source code when using 
console.error and console.warn
---------------------------------

*/
      
      try {       
              
        runErrors();
      
      } //try

      catch(err) {
  
        console.warn('\n Greetings from Errors \n\n');
        console.error('Following issues were found: \n\n' +  err + ' \n\n');
      
      } //catch


  });  //doc ready funct



})();  //self exe funct