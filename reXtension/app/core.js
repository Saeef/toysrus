$(document).ready(function(){
  var $ = window.jQuery;
  var scriptIsMounted =  false;

  if(getCookie('vr_experiment')){

      // New URL without parameters
      var currentURL = location.protocol + '//' + location.host + location.pathname;
      var vrCookie = getCookie('vr_experiment');

      if(vrCookie =='ROOT' || vrCookie == currentURL){
          var scriptIsMounted =  true;
      }else{
          var scriptIsMounted =  false;
      }
      
  }else{
      var scriptIsMounted =  false;
  }
  function getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for(var i=0; i<ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1);
          if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
      }
      return "";
  }
  function addjs(jss){
      var sourceinsert = document.getElementsByTagName('head')[0];
      var j = document.createElement('script');
      j.setAttribute('type', 'text/javascript');
      j.setAttribute('src', jss);
      sourceinsert.appendChild(j);
  }

  var vr_variation = 'v1';
  if(getCookie('vr_variation')){
    vr_variation = 'v'+getCookie('vr_variation');
  }

  function addlesscss(less){
    var sourceinsert = document.getElementsByTagName('head')[0];
    var j = document.createElement('link');
    j.setAttribute('rel', 'stylesheet/less');
    j.setAttribute('type', 'text/css');
    j.setAttribute('id', 'themaillesscss');
    j.setAttribute('href', less);
    sourceinsert.appendChild(j);
  }
  function FileHelper(){}{
      FileHelper.readStringFromFileAtPath = function(pathOfFileToReadFrom)
      {
          var request = new XMLHttpRequest();
          request.open("GET", pathOfFileToReadFrom, false);
          request.send(null);
          var returnValue = request.responseText;
          return returnValue;
      }
  }

  if(scriptIsMounted){
    setTimeout(function(){
        less = {
            env: 'development',
            async: true,
            fileAsync: true
        };
    },100);
    var csslink = chrome.extension.getURL("styles/"+vr_variation+".less");
    addlesscss(csslink);
    var lesslink = chrome.extension.getURL("app/less.js");
    addjs(lesslink);


    var headerlinkjs = chrome.extension.getURL("/includes/header_js.js");
    var header_js = FileHelper.readStringFromFileAtPath (headerlinkjs);


    // // // // // // // // // // // // // //
    // Variations Script --
    var explinkVariation = chrome.extension.getURL(vr_variation+'.js');
    var experimentjsVariation = FileHelper.readStringFromFileAtPath (explinkVariation);
    // END // // // // // // // // // // //


    var footerlinkjs = chrome.extension.getURL("/includes/footer_js.js");
    var footer_js = FileHelper.readStringFromFileAtPath (footerlinkjs);

    var boundedjsfiles =
      '<script type="text/javascript">'+
      ''+header_js+''+
      ''+experimentjsVariation+''+
      'var mainCss="";'+
      ''+footer_js+''+
      '</script>';

    $('head').append(boundedjsfiles);

  }
});
