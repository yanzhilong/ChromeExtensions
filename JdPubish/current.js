alert("aaa");
$("#addWareVO\\.title").val("aaaa");
alert('hello ' + document.location.href);

item=new Object();
item.addWareVOadContent="标语";//addWareVO.adContent
item.combobox_caption_brandId="64352";//combobox-caption-brandId  品牌
item.addWareVOis7ToReturn="1";//addWareVO.is7ToReturn 支持7天无理由退换货

item.attid_3_1_91768="91768:570338";//attid_3_1_91768 场合 时尚休闲
item.attid_3_1_11853="11853:589926";//attid_3_1_11853 总类 透气网鞋
item.attid_3_2_14951_222446="14951:222446";//attid_3_2_14951_222446 颜色 黑色 checkbox
item.attid_3_1_11864="11864:112931";//attid_3_1_11864 鞋面材料 棉布
item.attid_3_1_91791="91791:570530";//attid_3_1_91791 里料材料 羊毛
item.attid_3_1_14919="14919:221157";//attid_3_1_14919 鞋底材质 橡胶
item.attid_3_1_14850="14850:220185";//attid_3_1_14850 闭合方式 系带
item.attid_3_1_14888="14888:220845";//attid_3_1_14888 蒜头款式 圆头
item.attid_3_1_11839="11839:570565";//attid_3_1_11839 价格 1-99
item.attid_3_1_104886="104886:719352";//attid_3_1_104886 上市年份季节 2017秋季
item.attid_3_1_91794="91794:570621";//attid_3_1_91794 制作工艺 胶粘鞋
item.attid_3_1_14941="14941:570657";//attid_3_1_14941 风格 韩版
item.attid_3_1_91800="91800:570692";//attid_3_1_91800 流行元素 车缝线
item.attid_3_1_91801="91801:570721";//attid_3_1_91801 皮革风格 其他
item.attid_3_1_91805="91805:570726";//attid_3_1_91805 功能 透气
item.attid_3_1_91806="91806:589950";//attid_3_1_91806 鞋跟 平底
item.attid_3_2_104857_609630="";//attid_3_2_104857_609630 销售渠道类型 线上销售 checkbox

item.addWareVOweight="0.8";//addWareVO.weight 毛重  
item.addWareVOlength="300";//addWareVO.length 长  
item.addWareVOwide="200";//addWareVO.wide 宽
item.addWareVOhigh="200";//addWareVO.high 高

item.areaId1="16";//areaId1 发货地 省
item.areaId2="1332";//areaId2 发货地 市
item.fareId="1183512";//fareId 运费模版 市




ParseJson(item);



//解析json，操作元素
function ParseJson(data) {

	$("#addWareVO\\.adContent").val(data.addWareVOadContent);
	$("#combobox-caption-brandId").val(data.combobox_caption_brandId);
	$("[name='addWareVO\\.is7ToReturn']").val(data.addWareVOis7ToReturn);

	$("#attid_3_1_91768").val(data.attid_3_1_91768);
	$("#attid_3_1_11853").val(data.attid_3_1_11853);
	$("#attid_3_2_14951_222446").attr('checked', 'true');

	
	$("#attid_3_1_11864").val(data.attid_3_1_11864);
	$("#attid_3_1_91791").val(data.attid_3_1_91791);
	$("#attid_3_1_14919").val(data.attid_3_1_14919);
	$("#attid_3_1_14850").val(data.attid_3_1_14850);
	$("#attid_3_1_14888").val(data.attid_3_1_14888);
	$("#attid_3_1_11839").val(data.attid_3_1_11839);
	$("#attid_3_1_104886").val(data.attid_3_1_104886);
	$("#attid_3_1_91794").val(data.attid_3_1_91794);
	$("#attid_3_1_14941").val(data.attid_3_1_14941);
	$("#attid_3_1_91800").val(data.attid_3_1_91800);
	$("#attid_3_1_91801").val(data.attid_3_1_91801);
	$("#attid_3_1_91805").val(data.attid_3_1_91805);
	$("#attid_3_1_91806").val(data.attid_3_1_91806);
	$("#attid_3_2_104857_609630").attr('checked', 'true');
	$("#addWareVO\\.weight").val(data.addWareVOweight);
	$("#addWareVO\\.length").val(data.addWareVOlength);
	$("#addWareVO\\.wide").val(data.addWareVOwide);
	$("#addWareVO\\.high").val(data.addWareVOhigh);

	$("#areaId1").val(data.areaId1);
	$("#areaId2").val(data.areaId2);
	$("#fareId").val(data.fareId);
}