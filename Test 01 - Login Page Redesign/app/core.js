var $ = window.jQuery;
var scriptIsMounted = false;

window.redEyeEXT = {
    init: function() {
        redEyeEXT.applyChanges();
    },
    addjs: function(jss) {
        var sourceinsert = document.getElementsByTagName('head')[0];
        var j = document.createElement('script');
        j.setAttribute('type', 'text/javascript');
        j.setAttribute('src', jss);
        sourceinsert.appendChild(j);
    },
    addlesscss: function(less) {
        var sourceinsert = document.getElementsByTagName('head')[0];
        var j = document.createElement('link');
        j.setAttribute('rel', 'stylesheet/less');
        j.setAttribute('type', 'text/css');
        j.setAttribute('id', 'themaillesscss');
        j.setAttribute('href', less);
        sourceinsert.appendChild(j);
    },
    readCookie: function(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },
    getCookie: function(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1);
            if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
        }
        return "";
    },
    FileHelper: function(pathOfFileToReadFrom) {
        var request = new XMLHttpRequest();
        request.open("GET", pathOfFileToReadFrom, false);
        request.send(null);
        var returnValue = request.responseText;
        return returnValue;
    },
    findExtraOptions: function(value) {
        if (value !== undefined) {
            value = value.split(', ');

            var goalsAlerts = value[0];
            var disableLinks = value[1];

            if (goalsAlerts !== undefined) {
                goalsAlerts = goalsAlerts.split(': ');
                goalsAlerts = goalsAlerts[1];
            }

            if (disableLinks !== undefined) {
                disableLinks = disableLinks.split(': ');
                disableLinks = disableLinks[1];
            }

            if (goalsAlerts == 'true' || disableLinks == 'true') {
                window.redEyeEXT.extraOptions(goalsAlerts, disableLinks);
            } else {
              window.redEyeEXT.endChanges();
            }
        }
    },
    extraOptions: function(goalsAlerts, disableLinks) {
            
        var redTag = chrome.extension.getURL('app/extra/redTag.js');
        var redTag_Code = redEyeEXT.FileHelper(redTag);

        var extensionGoals = chrome.extension.getURL('app/extra/extension_goals.js');
        var extensionGoals_Code = redEyeEXT.FileHelper(extensionGoals);

        var script = document.createElement("script");
        script.type = "text/javascript";
        script.text = redTag_Code + extensionGoals_Code;

        if (goalsAlerts == 'true') {
            script.text += 'window.extension.goalsAlerts();';
        }
        if (disableLinks == 'true') {
            script.text += "window.extension.disableClicks();";
        }
        document.body.appendChild(script);

    },
    endChanges: function(){
      


      var vr_variation = 'v1';
      if (redEyeEXT.getCookie('vr_variation')) {
          vr_variation = 'v' + redEyeEXT.getCookie('vr_variation');
      }

      setTimeout(function() {
          less = {
              env: 'development',
              async: true,
              fileAsync: true
          };
      }, 100);
      var csslink = chrome.extension.getURL("styles/" + vr_variation + ".less");
      redEyeEXT.addlesscss(csslink);
      var lesslink = chrome.extension.getURL("app/less.js");
      redEyeEXT.addjs(lesslink);


      var headerlinkjs = chrome.extension.getURL("/includes/header_js.js");
      var header_js = redEyeEXT.FileHelper(headerlinkjs);

      // // // // // // // // // // // // // //
      // Variations Script --
      var explinkVariation = chrome.extension.getURL(vr_variation + '.js');
      var experimentjsVariation = redEyeEXT.FileHelper(explinkVariation);
      // END // // // // // // // // // // //


      var footerlinkjs = chrome.extension.getURL("/includes/footer_js.js");
      var footer_js = redEyeEXT.FileHelper(footerlinkjs);

      var script = document.createElement("script");
      script.type = "text/javascript";
      script.text = header_js + experimentjsVariation + 'var mainCss="";' + footer_js;
      document.body.appendChild(script);

    },
    applyChanges: function() {

        
      if (redEyeEXT.getCookie('vr_experiment')) {
          // New URL without parameters
          var currentURL = location.protocol + '//' + location.host + location.pathname;
          var vrCookie = redEyeEXT.getCookie('vr_experiment');

          if (vrCookie == 'ROOT' || vrCookie == currentURL) {
              scriptIsMounted = true;
          } else {
              scriptIsMounted = false;
          }
      } else {
          scriptIsMounted = false;
      }

      if(scriptIsMounted){
        var value = redEyeEXT.getCookie('vr_extraOptions');
        window.redEyeEXT.findExtraOptions(value, scriptIsMounted);
      }
        

        

    }
};




$(document).ready(function() {
    redEyeEXT.init();
});