chrome.tabs.query({currentWindow: true, active: true},function(tabs){

    var curTabUrl = tabs[0].url;
    var checkiftabischrome = curTabUrl.indexOf('chrome://') > -1;


    if(curTabUrl!='' && !checkiftabischrome){
        chrome.cookies.get({url:curTabUrl, name:'vr_experiment'}, function(cookie){
            if (cookie) {

                var currentURL = curTabUrl;
                if (currentURL.indexOf("?")>-1){
                  currentURL = currentURL.split('?');
                  currentURL = currentURL[0];
                }
                if(cookie.value==currentURL || cookie.value=='ROOT'){
                  less = {
                    env: 'development',
                    async: true,
                    fileAsync: true
                  };
                }else{
                  less = {
                    env: 'production',
                    async: true,
                    fileAsync: true
                  };
                }
            }else{
              less = {
                env: 'production',
                async: true,
                fileAsync: true
              };
            }
        });
    }else{
      $('#myonoffswitch').remove();
      $('#wrapper-app-content').hide();
    }


    chrome.cookies.get({url: curTabUrl, name:'vr_variation'}, function(cookie){
      var lessFile = 'v1';
      if(cookie){
        lessFile = 'v'+cookie.value;
      }
      function addjs(jss){
          var sourceinsert = document.getElementsByTagName('head')[0];
          var j = document.createElement('script');
          j.setAttribute('type', 'text/javascript');
          j.setAttribute('src', jss);
          sourceinsert.appendChild(j);
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

      var lesslink = chrome.extension.getURL("app/less.js");
      var csslink = chrome.extension.getURL("styles/"+lessFile+".less");

      addjs(lesslink);
      addlesscss(csslink);
    });

});



var manifest = new XMLHttpRequest();
manifest.open("get", "/manifest.json", true);
manifest.onreadystatechange = function (e) { if (manifest.readyState == 4) { 
  console.log(JSON.parse(manifest.responseText)); 
  $('#title-exp').text(JSON.parse(manifest.responseText).name);
  $('#title-description').text(JSON.parse(manifest.responseText).description);
} };
manifest.send({});


function submitNew(url, name, value) {

    newCookie = {};
    // Check if URL is ROOT or SPECIFIC before setting cookie
    var checkIfUrlIsRoot = /^https?\:\/\/[^\/]+\/?$/.test(value);
    if(checkIfUrlIsRoot){
      //URL IS ROOT
      newCookie.value = 'ROOT';
      $('.cur_active').hide();
      $('.all_active').show();
    }else{
      //URL IS SPECIFIC
      newCookie.value = value;
      console.log(newCookie.value);
      $('.cur_active').show();
      $('.all_active').hide();
    }

    newCookie.url = url;
  	newCookie.name = name
  	newCookie.path = "/"
  	chrome.cookies.set(newCookie);
}

//var manifest = chrome.runtime.getManifest();
function compileYourCode(curTabUrl){
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

  var headerlinkjs = chrome.extension.getURL("includes/header_js.js");
  var header_js = FileHelper.readStringFromFileAtPath (headerlinkjs);

  /*
  // Force Script --
  var forceExplink = chrome.extension.getURL("-forceExperiment.js");
  var forceExplinkxperimentjs = FileHelper.readStringFromFileAtPath (forceExplink);

  var explink = chrome.extension.getURL("experiment.js");
  var experimentjs = FileHelper.readStringFromFileAtPath (explink);
  */

  // // // // // // // // // // // // // //
  // Variations Script --
  var experimentjsVariation = 'HEY';
  chrome.cookies.get({url: curTabUrl, name:'vr_variation'}, function(cookie){
    if (cookie) {
      var tmpVariaton = cookie.value;
      var explinkVariation = chrome.extension.getURL('v'+tmpVariaton+'.js');
      experimentjsVariation = FileHelper.readStringFromFileAtPath (explinkVariation);
    } else{
      var explinkVariation = chrome.extension.getURL('v1.js');
      experimentjsVariation = FileHelper.readStringFromFileAtPath (explinkVariation);
    }
  });
  // END // // // // // // // // // // //

  
  var footerlinkjs = chrome.extension.getURL("includes/footer_js.js");
  var footer_js = FileHelper.readStringFromFileAtPath (footerlinkjs);
  

  /*
  // Append to bottom of the page Script --
  var appendToBottomlink = chrome.extension.getURL("-appendToBottom.js");
  var appendToBottomScriptfile = FileHelper.readStringFromFileAtPath (appendToBottomlink);
  // END ----------------------------------
  */

  setTimeout(function(){
      less.sheets.push($('#themaillesscss')[0]);
      less.refresh();
      setTimeout(function(){
        var allrules = "var mainCss='";
        $.each(document.styleSheets, function(sheetIndex, sheet) {
            $.each(sheet.cssRules || sheet.rules, function(ruleIndex, rule) {
              var chunkrule = rule.cssText.replace("'","\'");
              var chunkrule = rule.cssText.replace('"','\"');
              // var chunkrule = rule.cssText.replace('}',"}'+\'");
              allrules += chunkrule;
            });
            allrules += "';"

            // $('#alljsrc code').text(header_js+' '+experimentjs+' '+experimentjsVariation+' '+allrules+' '+footer_js);
            // $('#alljsrc code').text(allrules);

            if(allrules !== undefined){
              if(allrules.indexOf('}') > -1){
                allrules = allrules.replace(/}/g, "}'+<br>'");
                allrules = allrules.replace("+<br>''", '');
                $('#alljsrc code').html(allrules);
              }
            }

            return false;
        });
      },150);
  },250);
}


chrome.tabs.query({currentWindow: true, active: true},function(tabs){
    $('.all_active, .cur_active').hide();

    var curTabUrl = tabs[0].url;
    var checkiftabischrome = curTabUrl.indexOf('chrome://') > -1;

    if(curTabUrl!='' && !checkiftabischrome){
        chrome.cookies.get({url:curTabUrl, name:'vr_experiment'}, function(cookie){
            if (cookie) {
                if(cookie.value==curTabUrl){
                  $('.cur_active').show();
                  $('.all_active').hide();
                }else{
                  $('.cur_active').hide();
                  $('.all_active').show();
                }
                if(cookie.value==curTabUrl || cookie.value=='ROOT'){
                    $('#myonoffswitch').attr('checked', true);
                    $('#wrapper-app-content').show();
                }else{
                    $('#myonoffswitch').attr('checked', false);
                    $('#wrapper-app-content').hide();
                }
            }else{
                $('#wrapper-app-content').hide();
            }
        });

        if (curTabUrl.indexOf("?")>-1){
          curTabUrl = curTabUrl.split('?');
          curTabUrl = curTabUrl[0];
        }


        $('.onoffswitch').click(function(){
            //.prop("checked");
            chrome.cookies.get({url:curTabUrl, name:'vr_experiment'}, function(cookie){
                if (cookie) {
                    if(cookie.value==curTabUrl){
                      $('.cur_active').show();
                      $('.all_active').hide();
                    }else{
                      $('.cur_active').hide();
                      $('.all_active').show();
                    }
                    if(cookie.value==curTabUrl || cookie.value=='ROOT'){
                        chrome.cookies.remove({url: curTabUrl, name: 'vr_experiment'});
                        $('#wrapper-app-content, .less-error-message').hide();
                    }else{
                        submitNew(curTabUrl, 'vr_experiment', curTabUrl);
                        $('#wrapper-app-content, .less-error-message').show();
                    }
                }else{
                    // Cookie nu exista, asa ca adugam acum
                    submitNew(curTabUrl, 'vr_experiment', curTabUrl);
                    $('#wrapper-app-content, .less-error-message').show();
                }
            });
        });


        chrome.cookies.get({url:curTabUrl, name:'vr_variation'}, function(cookie){
          if (cookie) {
              if(cookie.value==1){
                $('.variations ul li:nth-child(1)').addClass('active');
              } else if(cookie.value==2){
                $('.variations ul li:nth-child(2)').addClass('active');
              } else if(cookie.value==3){
                $('.variations ul li:nth-child(3)').addClass('active');
              }
          } else{
            $('.variations ul li:first-child').addClass('active');
            submitNew(curTabUrl, 'vr_variation', '1');
          }
        

          if (cookie) {
            var variation = cookie.value;
          }

          $('.sub-options ul li').click(function(){
            var dataV = $( this ).attr("data-variation");
            $('.sub-options ul li').removeClass('active');

            $('#alljsrc').hide();
            
            $(this).addClass('active');
            if( dataV === '1' ){
              submitNew(curTabUrl, 'vr_variation', '1');
              if (variation == dataV) {
                $('#alljsrc').show();
              }
            } else if ( dataV === '2' ){
              submitNew(curTabUrl, 'vr_variation', '2');
              if (variation == dataV) {
                $('#alljsrc').show();
              }
            } else if ( dataV === '3' ){
              submitNew(curTabUrl, 'vr_variation', '3');
              if (variation == dataV) {
                $('#alljsrc').show();
              }
            }
            compileYourCode(curTabUrl);
          });
        });
    }


    compileYourCode(curTabUrl);


});


