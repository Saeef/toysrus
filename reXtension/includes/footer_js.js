

var headofdoc = document.getElementsByTagName('head')[0];
function addcss(css){
    var s = document.createElement('style');
    s.setAttribute('type', 'text/css');
    s.appendChild(document.createTextNode(css));
    headofdoc.appendChild(s);
} try{
	addcss(mainCss);
} catch(err){console.log(err);}

