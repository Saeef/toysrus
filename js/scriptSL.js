(function() {
  //clear console at runtime
  console.clear();
  //window object
  var window = this.window;
  //set testsite home page url
  var homeUrl = "www.toysrus.co.uk";
  //set testsite page target - stands for 'target page relative url'
  var tarRelUrl = "/checkout/start-checkout";
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
      style.innerHTML += "#rightside { position:absolute; top:23%; left:44%; width:2px; height:225px; background:#e8e8e8; }\n";
      style.innerHTML += "#cartCtrl {cursor:pointer; color:#fff;position:absolute; background-image:url(images/arrow_white_down_small.png); background-repeat:no-repeat; width:134px; display:block; height:42px; padding:12px 0 0 8px; border-top-right-radius:5px; border-top-left-radius:3px; top:5%; right:5%;background-position:114px center; }\n";
      style.innerHTML += "#cartCtrl label {color:#333; font-weight:normal; font-size:12px; line-height:28px; cursor:pointer;}";
      style.innerHTML += "#mini-cart-counter {color:#fff; position:absolute; top:12px; right:50px;}";
      style.innerHTML += "#cartCtrl:hover {background-color: #ff7000;}";


      //append to head
      document.getElementsByTagName('head')[0].appendChild(style);
        

    },  //mainCss
    //ref page
    homePage: function() {
        console.clear();
        //if it gets here, just park and call it out
        console.info('Greetings from ' + homeUrl + ' page.');
        
    },

    cartusMini: function() {
      var cartusrmini = document.createElement('div');
      cartusrmini.id = "mini-cart";
      cartusrmini.className = "minicart pol-mini";
      cartusrmini.style.height = "auto";
      cartusrmini.style.display = "block";

/*
-------------
CART-MINI - ENABLE WHEN WORKING LIVE
-------------
*/
      //content here *|* Been added disable for now cause CSS files relative to Server
      //cartusrmini.innerHTML = " <div id=\"mini-cart\" class=\"minicart pol-mini\" style=\"height: auto; display: block;\">\r\n   <!-- Start Common to all modals -->\r\n   <!-- End Common to all modals -->\r\n   <!-- Common to TRU pages -->\r\n   <link href=\"\/ux\/themes\/tru\/common\/css\/ux.main.tru.base.css\" rel=\"stylesheet\" type=\"text\/css\">\r\n   <link href=\"\/ux\/themes\/tru\/common\/css\/ux.main.tru.header-footer.css\" rel=\"stylesheet\" type=\"text\/css\">\r\n   <link href=\"\/ux\/themes\/tru\/common\/css\/ux.main.tru.browse.family.grid.css\" rel=\"stylesheet\" type=\"text\/css\">\r\n   <script src=\"\/ux-custom\/themes\/common\/js\/minicart.js\" type=\"text\/javascript\"><\/script>\r\n   <div style=\"display: none\">\r\n   <\/div>\r\n   <a href=\"javascript:void(0)\" class=\"close-minicart linkClose\" onclick=\"closeMiniCartBtn();\">\r\n   <img src=\"\/ux\/themes\/tru\/common\/img\/icon_close.gif\" alt=\"close\">\r\n   <\/a>\r\n   <h2><strong>Recently Added<\/strong>:<\/h2>\r\n   <div class=\"miniColumn\">\r\n      <div class=\"miniImg\">\r\n         <a href=\"\/toys\/star-wars-the-force-awakens-micro-machines-r2-d2-playset\/TRUP1930060003\"> <img width=\"65\" src=\"http:\/\/truimg.toysrus.co.uk\/product\/images\/UK\/TRUP1930060003_CF0001.jpg?resize=150:150\" alt=\"Product\">\r\n         <\/a>\r\n      <\/div>\r\n      <div class=\"miniDetails\">\r\n         <h4>\r\n            <a href=\"\/toys\/star-wars-the-force-awakens-micro-machines-r2-d2-playset\/TRUP1930060003\"> \r\n            Star Wars The Force Awakens Micro Machines R2-D2 Playset \r\n            <\/a>\r\n         <\/h4>\r\n         <h4>\r\n         <\/h4>\r\n         <h5>\r\n            <p style=\"color: #848484\">\r\n               Was\r\n               <span class=\"\">\u00A312.49<\/span><br>\r\n            <\/p>\r\n            \u00A39.98\r\n         <\/h5>\r\n         <p>\r\n            <span>\r\n            Qty: 2\r\n            <\/span> \r\n            <em>\r\n            <a class=\"removeItemFromMinicartLink\" id=\"removeItemFromMinicartLink\" onclick=\"onClickRemoveItemFromMinicart(event, this);\" href=\"\/toys\/star-wars-the-force-awakens-micro-machines-r2-d2-playset\/TRUP1930060003\" itemid=\"ci12994009359\" baseurl=\"\/toys\">Remove\r\n            <\/a>\r\n            <\/em>\r\n         <\/p>\r\n      <\/div>\r\n   <\/div>\r\n   <div class=\"miniColumn\">\r\n      <div class=\"miniImg\">\r\n         <a href=\"\/toys\/star-wars-the-empire-strikes-back-darth-vader-voice-changer-mask\/TRUP1929910001\"> <img width=\"65\" src=\"http:\/\/truimg.toysrus.co.uk\/product\/images\/UK\/TRUP1929910001_CF0001.jpg?resize=150:150\" alt=\"Product\">\r\n         <\/a>\r\n      <\/div>\r\n      <div class=\"miniDetails\">\r\n         <h4>\r\n            <a href=\"\/toys\/star-wars-the-empire-strikes-back-darth-vader-voice-changer-mask\/TRUP1929910001\"> \r\n            Star Wars The Empire Strikes Back Darth Vader Voice Changer Mask \r\n            <\/a>\r\n         <\/h4>\r\n         <h4>\r\n         <\/h4>\r\n         <h5>\r\n            <p style=\"color: #848484\">\r\n               Was\r\n               <span class=\"\">\u00A344.99<\/span><br>\r\n            <\/p>\r\n            \u00A319.99\r\n         <\/h5>\r\n         <p>\r\n            <span>\r\n            Qty: 1\r\n            <\/span> \r\n            <em>\r\n            <a class=\"removeItemFromMinicartLink\" id=\"removeItemFromMinicartLink\" onclick=\"onClickRemoveItemFromMinicart(event, this);\" href=\"\/toys\/star-wars-the-empire-strikes-back-darth-vader-voice-changer-mask\/TRUP1929910001\" itemid=\"ci12994009358\" baseurl=\"\/toys\">Remove\r\n            <\/a>\r\n            <\/em>\r\n         <\/p>\r\n      <\/div>\r\n   <\/div>\r\n   <div class=\"miniColumn\">\r\n      <div class=\"miniImg\">\r\n         <a href=\"\/toys\/star-wars-the-black-series-titanium-series-vehicles-multi-pack\/TRUP1929050001\"> <img width=\"65\" src=\"http:\/\/truimg.toysrus.co.uk\/product\/images\/UK\/TRUP1929050001_CF0001.jpg?resize=150:150\" alt=\"Product\">\r\n         <\/a>\r\n      <\/div>\r\n      <div class=\"miniDetails\">\r\n         <h4>\r\n            <a href=\"\/toys\/star-wars-the-black-series-titanium-series-vehicles-multi-pack\/TRUP1929050001\"> \r\n            Star Wars The Black Series Titanium Series Vehicles Multi Pack \r\n            <\/a>\r\n         <\/h4>\r\n         <h4>\r\n         <\/h4>\r\n         <h5>\r\n            <p style=\"color: #848484\">\r\n               Was\r\n               <span class=\"\">\u00A39.99<\/span><br>\r\n            <\/p>\r\n            \u00A34.99\r\n         <\/h5>\r\n         <p>\r\n            <span>\r\n            Qty: 1\r\n            <\/span> \r\n            <em>\r\n            <a class=\"removeItemFromMinicartLink\" id=\"removeItemFromMinicartLink\" onclick=\"onClickRemoveItemFromMinicart(event, this);\" href=\"\/toys\/star-wars-the-black-series-titanium-series-vehicles-multi-pack\/TRUP1929050001\" itemid=\"ci12994009356\" baseurl=\"\/toys\">Remove\r\n            <\/a>\r\n            <\/em>\r\n         <\/p>\r\n      <\/div>\r\n   <\/div>\r\n   <hr>\r\n   <div class=\"miniFooter\">\r\n      <h2><strong>Basket summary<\/strong><\/h2>\r\n      <p>You have&nbsp;4&nbsp;items in your basket.<\/p>\r\n      <h2><strong>Basket subtotal<\/strong><\/h2>\r\n      <h3>\u00A334.96<\/h3>\r\n      <input id=\"cartBut\" class=\"button tertiary-button color-0 mini-submit bg-color-5\" value=\"View Basket &amp; Checkout\" type=\"button\" onclick=\"window.location.href=\'\/cart\'\">\r\n   <\/div>\r\n   <form id=\"removeItemFromMinicartForm\" name=\"removeItemFromMinicartForm\" action=\"\/toys\/minicart\/modals\/modal-cartsummary.jsp?_DARGS=\/minicart\/modals\/modal-cartsummary.jsp.removeItemFromMinicartForm\" method=\"post\">\r\n      <div style=\"display:none\"><input name=\"_dyncharset\" value=\"UTF-8\" type=\"hidden\"> <\/div>\r\n      <div style=\"display:none\"><input name=\"_dynSessConf\" value=\"-8254946039230857847\" type=\"hidden\"> <\/div>\r\n      <input id=\"removeMinicartItemId\" name=\"\/atg\/store\/order\/purchase\/CartFormHandler.removalCommerceIds\" value=\"\" type=\"hidden\"><input name=\"_D:\/atg\/store\/order\/purchase\/CartFormHandler.removalCommerceIds\" value=\" \" type=\"hidden\">\r\n      <input name=\"\/atg\/store\/order\/purchase\/CartFormHandler.deleteItemFromOrder\" value=\"true\" type=\"hidden\"><input name=\"_D:\/atg\/store\/order\/purchase\/CartFormHandler.deleteItemFromOrder\" value=\" \" type=\"hidden\">\r\n      <div style=\"display:none\"><input name=\"_DARGS\" value=\"\/minicart\/modals\/modal-cartsummary.jsp.removeItemFromMinicartForm\" type=\"hidden\"> <\/div>\r\n   <\/form>\r\n<\/div> ";

      //handle,append
      var mainContent = document.querySelector('.content.payment-step'); 
      mainContent.appendChild(cartusrmini);



      this.createCart();
    },


    //creates cart
    createCart: function() {
      //baskette
      var bas = document.getElementsByClassName('miniColumn');
      baskette = bas.length;
      //is a number
      if(isNaN(baskette)) {
          console.warn('basket not loaded');
          //avoid an error, set to zero
          baskette = 0;
      }

      //creates div
      var cartUs = document.createElement('div');
      cartUs.className = 'cart';
      cartUs.id = "cartCtrl";
      cartUs.innerHTML = "<div class='minicart-iconArea'><a class='minicart-link strong' href='/cart' alt='My Basket' title='My Basket'><label>Back to Basket</label><img style='padding-left:10px;' class='center' src='images/icon_cart_empty.png' alt='My Basket' title='My Basket'><span id='mini-cart-counter' class='cart-quantity cartIconItemCount'>" + baskette + "</span></a></div>";
      var mainContent = document.querySelector('.content.payment-step'); 
      mainContent.appendChild(cartUs);

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
        this.cartusMini();

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