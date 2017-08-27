var data = scriptOptions;
$.each(data, function(i) {     
	try 
	{ 
		//alert(data[i].IsCheck);
		if(data[i].IsCheck == "true"){
			//alert(data[i].PropertyKey);
			//alert(data[i].ValueValue);
			$(data[i].PropertyKey).attr('checked', 'true');
		}else{
			//alert(data[i].PropertyKey);
			//alert(data[i].ValueValue);

			$(data[i].PropertyKey).val(data[i].ValueValue);
		}
	} 
	catch (e) 
	{ 
	
	} 
});  