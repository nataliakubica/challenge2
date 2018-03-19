var startTime = 0;
var timeline = new TimelineMax({repeat : -1});

function updateClock() {
	var currentTime = new Date();

	document.getElementById('tijd').innerHTML = currentTime.toLocaleTimeString();
	
	if (currentTime.getHours() >= 1 && currentTime.getHours() <= 8) {
		document.getElementById("tekst").innerHTML = "Het is tijd om te slapen"; 
        document.body.style.background = "#80A3B2";
        document.body.style.fontFamily = "Silom";
	}

	if (currentTime.getHours() >= 8 && currentTime.getHours() <= 11) {
		 document.getElementById("tekst").innerHTML = "Het is tijd om te ontbijten";
		 document.body.style.background = "#B77E8D";
        document.body.style.fontFamily = "Silom";
	}

	if (currentTime.getHours() >= 11 && currentTime.getHours() <= 16) {
		 document.getElementById("tekst").innerHTML = "Het is tijd om te lunchen";
		 document.body.style.background = "#AE897E";
        document.body.style.fontFamily = "Silom";
	}
    
    if (currentTime.getHours() >= 16 && currentTime.getHours() <= 19) {
		 document.getElementById("tekst").innerHTML = "Het is tijd om avond te eten";
		 document.body.style.background = "#93AF80";
        document.body.style.fontFamily = "Silom";
	}
    
    if (currentTime.getHours() >= 19 && currentTime.getHours() <= 24) {
		 document.getElementById("tekst").innerHTML = "Het is tijd om te slapen";
		 document.body.style.background = "#80A3B2";
        document.body.style.fontFamily = "Silom";
	}
}

window.onload = function(){
	startTime = new Date();

	timeline.call(updateClock)
			.from('#tijd', 0.5, { top: 0, ease: Linear.easeIn})
			.to('#tijd', 0.5, { opacity: 0.6});			
}



