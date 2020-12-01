// JavaScript Document

$(document).ready(function(){
	$("#qr-data").change(generateQR);
});

function generateQR()
{
	var qrdata = document.getElementById("qr-data");
	var data = qrdata.value;
	
	$("#qrcode").empty();
	var qrcode = new QRCode("qrcode",{
		text: data,
		width: 128,
		height: 128,
		colorDark : "#000000",
		colorLight : "#ffffff",
		correctLevel : QRCode.CorrectLevel.H
	});
}