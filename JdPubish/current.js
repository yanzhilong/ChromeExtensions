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
try 
{ 
	//福建
	$("#areaId1").val("16");
	changeArea1();
	//泉州
	$("#areaId2").val("1332");

} 
catch (e) 
{ 

} 