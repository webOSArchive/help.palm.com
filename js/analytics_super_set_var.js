// Code from:
// http://www.lunametrics.com/blog/2008/04/17/stuff-more-than-one-value-in-gas-user-defined-segment/
// Added to help.palm.com by tbaker 5/21/2009

// "standard" read cookie function  (copied from Prusak's gwo_write.js)
function read_cookie(cookie_name) {
  var my_cookie=""+document.cookie;
  var ind=my_cookie.indexOf(cookie_name);
  if (ind==-1 || cookie_name=="") return ""; 
  var ind1=my_cookie.indexOf(';',ind);
  if (ind1==-1) ind1=my_cookie.length; 
  return unescape(my_cookie.substring(ind+cookie_name.length+1,ind1));
}

function superSetVar(appendValue) {
  var getVar = read_cookie('__utmv');       // read the __utmv cookie
  hasValue = getVar.indexOf(appendValue);   // does the cookie already have the value we want to append?
  if ( hasValue == -1 ) {                   // if the new value is not already in the cookie
    removePrefix = /^.*\.(.*)/.exec(getVar);  // __utmv cookie has the format 12345678.cookieValue - remove the ## prefix
    if (removePrefix && removePrefix[1]) {
      newVar = removePrefix[1] + appendValue; // append the value
    }else{
      newVar = appendValue;                 // this will execute if the cookie was not already set.
    }
      var superSetVarTracker = _gat._getTracker("UA-1-1");  // set up a tracker to call _setVar from
      superSetVarTracker._initData();  
      superSetVarTracker._setVar(newVar);                   // call _setVar with the new value
  }
}

function unSetVar(removeValue){
  var getVar = read_cookie('__utmv');         // read the __utmv cookie
  hasValue = getVar.indexOf(removeValue);     // does the cookie have the value we want to remove?
  if ( hasValue != -1 ) {                     // if the value is in the cookie then . . .  otherwise, there is nothing further to do.
    removePrefix = /^.*\.(.*)/.exec(getVar);  // __utmv cookie has the format 12345678.cookieValue - remove the ## prefix
    if (removePrefix && removePrefix[1]) {    // if we remove the prefix then. . .
      var re = removeValue + '[^/]*';
      re = new RegExp(re,'g');
      newVar = removePrefix[1].replace(re,""); // newVar = removePrefix[1] MINUS removeValue
      var superSetVarTracker = _gat._getTracker("UA-1-1");  // set up a tracker to call _setVar from
      superSetVarTracker._initData();  
      superSetVarTracker._setVar(newVar);                   // call _setVar with the new value
    }
    
  }
}
	
	var currentServer=window.location.hostname;
	scriptSrc='http://'+currentServer+'/js/analytics_super_set_var2.js';
	var th = document.getElementsByTagName('head')[0];
	var sh = document.createElement('script');
	
	sh.setAttribute('type','text/javascript');
	sh.setAttribute('src',scriptSrc);
	jQuery('head').append('\n');
	th.appendChild(sh);