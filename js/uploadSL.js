(function() {
  
  //number of items
  var baskette = null;
  
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
      style.innerHTML += ".mt30 {margin:10px 0 0 0 !important;}\n";
      style.innerHTML += "#rightside { position:absolute; top:23%; left:47%; width:2px; height:225px; background:#e8e8e8; }\n";
      style.innerHTML += "#cartCtrl {cursor:pointer; color:#333;position:absolute;font-size:.75rem;  display:block; padding:12px 0 0 8px;  top:2.3%; right:25%;}\n";
     
      style.innerHTML += ".cartino {position:absolute; top:-14px; right:10px;}\n";
      style.innerHTML += "#cartCtrl a {line-height:24px; vertical-align:top;\n}";
      style.innerHTML += ".toysheads {font-size:18px !important;line-height:26px;}\n";
      style.innerHTML += ".cusrus {font-size:18px !important; line-height:26px;}\n";
      style.innerHTML += ".payment-step .checkout-steps input[type=text] {margin:0 0 17px;font-size:12.5px !important;}";
      style.innerHTML += ".payment-step .checkout-steps .tabs .tab {font-size:12.5px; padding:0 15px !important;}";
      style.innerHTML += ".payment-step .checkout-steps .tabs .tab.active {padding:0 15px !important;}";
      style.innerHTML += ".payment-step .checkout-steps {}";
      style.innerHTML += "#newCustomButton {width:140px; min-height:35px!important; font-size:14px;}\n"

      //append to head
      document.getElementsByTagName('head')[0].appendChild(style);
        

    },  //mainCss
    //ref page
    homePage: function() {
        console.clear();
        //if it gets here, just park and call it out
        console.info('Greetings from ' + homeUrl + ' page.');
        
    },

    //final adjust
    cssAdjustments:function() {
      //register heading
      var reghead = document.querySelector('.mt16.pb16 span');
      //adding a class
      reghead.classList.add('toysheads');
      //new customer
      var cus = document.querySelector('.mt10 span');
      cus.classList.add('cusrus');



    },

    
    //creates cart
    createCart: function() {
      //baskette
      var bas = document.querySelector('table td.qty');
      baskette = bas.textContent;
      //is a number
      if(isNaN(baskette)) {
          console.warn('basket empty');
          //avoid an error, set to zero
          baskette = 0;
      }

      //creates div
      var cartUs = document.createElement('div');
      cartUs.id = "cartCtrl";
      cartUs.innerHTML = "<a href='/mobile/toys/cart' class='right relative cart-trigger color-2'>Back to Basket&nbsp; <span class='simple-cart-qty color-2 cartino'>" + baskette + "</span><img src='images/cart_icon.png' alt='Cart' height='23' width='34'></a>";
      var mainContent = document.querySelector('.content.payment-step'); 
      window.document.body.appendChild(cartUs);
      this.cssAdjustments();

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
        this.createCart();

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
        forgotten.textContent = "Forgotten your password?"
        forgotten.style.color = "rgb(0, 86, 182)";
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
         create.style.right = '5%';
         create.style.top = '50%';
         create.style.border = 0;
         create.style.width = '400px';
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
         guess.style.right = '5%';
         guess.style.top = '17.5%';
         guess.style.border = 0;
         guess.style.width = '400px';
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
        console.info('Greetings from target page.');
        //remove rightPanel
        this.rightPanel();
        

    }



      

  };// testnameSL



  $(document).ready(function() {
   
      console.log('Test initialized - step1 of 3');
      testNameSL.init();
      debugger;
      function runErrors() {
            //root local folder
            if(window.location.protocol == "file:") {
                
                    throw "wrong page";      
            }
            //run target page
            else { //testing locally
                    testNameSL.targetPage();
            }    
                
         

            

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