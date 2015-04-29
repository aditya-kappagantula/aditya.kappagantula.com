$(document).ready(function(){
	$("#about-2").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", showSmiley);
	$("#fishes").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", removeSmileyAndFishes);
	$("#masters-menu").click(function(){
		loadMastersEducation();
	});
	$("#bachelors-menu").click(function(){
		loadBachelorsEducation();
	});
});

function showSmiley(){
    $("#about-1").remove();
    $("#about-2").remove();
    $("#row-2").addClass("animated fadeOut");
    $("#message").addClass("text-center");
	$("#message").css("vertical-align","middle");
	$("#smiley").toggleClass("hidden");
    $("#fishes").toggleClass("hidden");
}

function removeSmileyAndFishes () {
	$("#fishes").removeClass("slideInRight");
	$("#smiley").addClass("animated fadeOut");
	$("#fishes").addClass("animated slideOutLeft").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", slider());
}

function showCube(){
	$("#row-1").toggleClass("hidden");
	$("#row-2").removeClass("fadeOut");
	$("#row-2").addClass("rubberBand");
}

var slider = (function(){
	var count = 3;
	return function sliderClosure(){
		if(count>=0){
			$("#message").remove();
			$("#row-1").append("<div id='message' class='table-cell vertical-center'></div>");
			$("#message").html("<h1>"+count+"</h1>");
			count--;
			$("#message").removeClass("animated zoomIn");
			$("#message").addClass("animated zoomIn");
			$("#message").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", sliderClosure);
		}else{
			showCube();
		}
	}
});

function loadMastersEducation(){
	$("#row-1").remove();
	$("#row-2").remove();
	$("#page-content").remove();
	$("#index-table").prepend("<div id='page-content' class='row page-content table-cell'></div>");
	$("#page-content").load("pages/mastersEducation.html");
	$(".carousel").carousel({
		interval:2000
	});
}

function loadBachelorsEducation(){
	$("#row-1").remove();
	$("#row-2").remove();
	$("#page-content").remove();
	$("#index-table").prepend("<div id='page-content' class='row page-content table-cell'></div>");
	$("#page-content").load("pages/bachelorsEducation.html");
	$(".carousel").carousel({
		interval:2000
	});
}