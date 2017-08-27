
var url = "http://localhost:50116/api/v1/JDAutos";

$.ajax({
	type: 'GET',
	dataType : 'json',
	url: url,
	success: function (data) {
		//alert(data[0].Id);
		$.each(data, function(i) {     
			//alert(data[i].Id);
			//var trHTML = "<tr><td><button onclick=func('" + data[i].Id + "')>"+data[i].Name+"</button></td></tr>"
			var trHTML = '<tr><td><button id="'+data[i].Id+'">'+data[i].Name+'</button></td></tr>'
			$("#jdautos").append(trHTML);//在table最后面添加一行
			//$("#jdautos").append(data[i].Id);
			document.getElementById(data[i].Id).addEventListener("click", function(){
				jdautoproperties(data[i].Id);
			});
		});  
	},
	error: function (xhr, ajaxOptions, thrownError) {
		alert(thrownError);
	}
});

function jdautoproperties(Id) {
	var url = "http://39.108.160.157:1234/api/v1/JDAutos/"+Id+"/JDProperties";
	  $.ajax({
		type: 'GET',
		dataType : 'json',
		url: url,
		success: function (data) {
			var scriptpara = "var scriptOptions = [";
			//alert(data[0].Id);
			//alert(eval(data).length);
			$.each(data, function(i) {     
				var item = "{"
				item = item + "PropertyKey:'" + data[i].PropertyKey +"',";
				item = item + "ValueValue:'" + data[i].ValueValue +"',";
				item = item + "IsCheck:'" + data[i].IsCheck +"'";
				if(eval(data).length - 1 == i){
					item = item + "}";
				}else{
					item = item + "},";
				}
				scriptpara = scriptpara + item;
			});  
			scriptpara = scriptpara + "]";
			//alert(scriptpara);
			jdautocurrent(scriptpara);
		},
		error: function (xhr, ajaxOptions, thrownError) {
			alert(thrownError);
		}
	});
}

function jdautocurrent(params) {
	chrome.tabs.executeScript({
		file: 'jquery.min.js'
	  });

  chrome.tabs.executeScript({code: params});
  
  chrome.tabs.executeScript({
    file: 'current.js'
  });
}