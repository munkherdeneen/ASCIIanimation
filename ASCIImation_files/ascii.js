window.onload = function () {
	"use strict";
	
	let textboxValue = "";
	let selAnimation = ANIMATIONS["Blank"];
	let animID;
	let timer;
	let isRunning = false;
	let rate = 300;
	
	const textArea = document.getElementById("text-area");
	const startButton = document.getElementById("start");
	const stopButton = document.getElementById("stop");
	const animField = document.getElementById("animation");
	const size = document.getElementById("fontsize");
	const turbo = document.getElementById("turbo");
	
	startButton.onclick = function () {
		textboxValue = textArea.value;
		stopButton.disabled = false;
		startButton.disabled = true;
		if (selAnimation) {
			animID = 0;
			textArea.value = selAnimation[(animID)];
			isRunning = true;
			timer = setTimeout(animatefunc, rate);
		}
		else {
			textArea.value = "";
		}
	};
	
	stopButton.onclick = function () {
		clearTimeout();
		isRunning = false;
		textArea.value = textboxValue;
		stopButton.disabled = true;
		startButton.disabled = false;		
	};
	
	animField.onchange = function () {
		selAnimation = ANIMATIONS[animField.value].split("=====\n");
	};
	
	size.onchange = function () {
		let ss;
				
		switch (size.value){
			case "Tiny":
				ss = "8pt";
				break;
			case "Small":
				ss = "10pt";
				break;
			case "Medium":
				ss = "12pt";
				break;
			case "Large":
				ss = "14pt";
				break;
			case "Extra Large":
				ss = "16pt";
				break;
			case "XXL":
				ss = "18pt";
		}
		
		textArea.style.fontSize = ss;
	};
	
	turbo.onchange = function () {
		rate = turbo.checked ? 50 : 300;
	};
	
	function animatefunc () {
		if (isRunning){
			textArea.value = selAnimation[animID++];
			animID %= selAnimation.length;
			setTimeout(animatefunc, rate);
		}
	}
};