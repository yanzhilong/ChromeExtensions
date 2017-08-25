// var app = chrome.runtime.getBackgroundPage();

function hello() {
  chrome.tabs.executeScript({
	file: 'jquery.min.js'
  });

  chrome.tabs.executeScript({code: "var scriptOptions = {title:'标题标题标题标题标题标题标题标题标题',param2:'value2'};"});
  
  chrome.tabs.executeScript({
    file: 'current.js'
  });
}

document.getElementById('clickme').addEventListener('click', hello);
