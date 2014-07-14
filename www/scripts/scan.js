var resultDiv;

document.addEventListener("deviceready", init, false);
function init() {
	document.querySelector("#startScan").addEventListener("touchend", startScan, false);
	resultDiv = document.querySelector("#results");
}

function startScan() {

	cordova.plugins.barcodeScanner.scan(
		function (result) {
			//if(result.cancelled == "true") {
			//	alert('Test');
			//	resultDiv.innerHTML = "Cancelled";
			//} else {
				resultDiv.innerHTML = processBarcode(result.text);
			//}
		}, 
		function (error) {
			alert("Scanning failed: " + error);
		}
	);

}

function processBarcode(barcode) {
	var barcodes="0049000006582";
	var url="http://eandata.com/feed/?v=3&keycode=" + eankey + "&mode=json&find=";
	$.getJSON(url + barcodes, null, function(results) {
	//processBarcode(results);
	console.log(results);	
	var status = results['status'];	
	// Check that we got valid results	
	if(status['code'] == 200) {
		//$('#targetDiv').append('OK');
		var product = results['product'];
		var desc = product['attributes']['product'];
		return desc;
	} else {
		return "Invalid barcode";
	}
});	
}
