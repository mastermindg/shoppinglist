var barcode="688267142062";
var url="http://eandata.com/feed/?v=3&keycode=" + eankey + "&mode=json&find=";
$.getJSON(url + barcode, null, function(results) {
	console.log(results);	
	var status = results['status'];	
	if(status['code'] == 200) {
		//$('#targetDiv').append('OK');
		var product = results['product'];
		var desc = product['attributes']['product'];
		$('#targetDiv').append(desc);
	}	
});
