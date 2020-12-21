// JavaScript Document

var qrdata, cover, qrlogo, checkImg, canvas;

$(document).ready(function(){
	qrlogo = document.getElementById("qrlogo");
	cover = document.getElementById("cover");
	checkImg = 0;
	
	$("#button-submit").click(showQR);
	$("#button-download").click(downloadIMG);
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
		cover.style.opacity = "1";
	}
	else
	{
		qrlogo.style.opacity = "0";
		cover.style.opacity = "0";
	}
}

function creatCanvas()
{
	//$("#qrcode,#qrlogo").wrapAll("<div id='wrap-qr'></div>");
	$("#canvas").remove();
	html2canvas(document.querySelector("#qr-container")).then(canvas => {
    	document.getElementById("div-canvas").append(canvas);
		$("#div-canvas > canvas").attr("id","canvas");
	});
}

function downloadIMG()
{
	creatCanvas();
	
	setTimeout(function(){
		canvas = document.getElementById("canvas");
 		var dataURL = canvas.toDataURL();
		console.log(dataURL);	
	},200);
	
}