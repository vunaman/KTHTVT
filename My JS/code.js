// JavaScript Document

var qrdata, qrlogo, checkImg;

$(document).ready(function(){
	qrlogo = document.getElementById("qrlogo");
	checkImg = 0;
	
	$("#button").click(showQR);
});

function generateQR()
{
	qrdata = document.getElementById("qr-data");
	var data = qrdata.value;
	
	$("#qrcode").empty();
	
	var qrcode = new QRCode("qrcode",{
		text: data,
		width: 200,
		height: 200,
		colorDark : "#000000",
		colorLight : "#ffffff",
		correctLevel : QRCode.CorrectLevel.H
	});
}

function readURL(input)
{	
	qrlogo.src = "#";
	checkImg = 0;
	
	if (input.files && input.files[0])
	{
    	var reader = new FileReader();
            
    	reader.onload = function (e) 
		{
			$("#qrlogo").attr("src", e.target.result);
    	}
            
		reader.readAsDataURL(input.files[0]);
		checkImg = 1;
	}
}

function showQR()
{
	var file = document.getElementById("file");
	
	generateQR();
	readURL(file);
	
	if(checkImg && qrdata.value != "")
		{
			qrlogo.style.opacity = "1";
		}
	else
		{
			qrlogo.style.opacity = "0";
		}
}