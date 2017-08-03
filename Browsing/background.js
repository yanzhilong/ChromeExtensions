// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.tabs.onUpdated.addListener(function (tabId , info) {
  if (info.status === 'complete') {
    // your code ...
	chrome.tabs.executeScript(tabId, {file: "jquery.min.js"});
	chrome.tabs.executeScript(tabId, {file: "current_script.js"});
	
	chrome.tabs.get(tabId, function(tab){
		url = tab.url;
		title = tab.title;
		//alert(url);
        var postdata = new Object();
		postdata.Title=title;
        postdata.Url=url;
        postdata.Browser=getOs();
        postdata.UserId="31ee6e1d-2d8c-4c7b-b1ea-ce53acdd38c3";
        postdata.Tag="Tag";

        $.ajax({
	        type: 'POST',
	        url: "http://localhost:50116/api/Browsing/",
	        data: postdata,
	        success: function (data) {
		        //alert("save success");
	        },
	        error: function (xhr, ajaxOptions, thrownError) {
				//alert("save fail");
	        }
        });
	});	
  }

});

function getOs() 
{ 
    var OsObject = ""; 
   if(navigator.userAgent.indexOf("MSIE")>0) { 
        return "MSIE"; 
   } 
   else if(isFirefox=navigator.userAgent.indexOf("Firefox")>0){ 
        return "Firefox"; 
   } 
   else if(isMozilla=navigator.userAgent.indexOf("Opera")>0){ //这个也被判断为chrome
        return "Opera"; 
   } 
   else if(isFirefox=navigator.userAgent.indexOf("Chrome")>0){ 
        return "Chrome"; 
   } 
   else if(isSafari=navigator.userAgent.indexOf("Safari")>0) { 
        return "Safari"; 
   }  
   else if(isCamino=navigator.userAgent.indexOf("Camino")>0){ 
        return "Camino"; 
   } 
   else if(isMozilla=navigator.userAgent.indexOf("Gecko/")>0){ 
        return "Gecko"; 
   }
}