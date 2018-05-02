// This is the javascript code for the challenge problem for SaRA 

"use strict"; // use strict syntax notation 

(function() { 
	let x = 0; 
	let y = 0; 
	let z = 0; 
	window.onload = function() { 

	$("image1").onclick = firstClick; 
	$("image2").onclick = secondClick; 
	$("image3").onclick = thirdClick; 

	}; 

	function firstClick() {

		if(x % 2 == 0) { 
			$("image1").classList.add("fullop"); 
			$("image2").classList.add("partialop"); 
			$("image3").classList.add("partialop");
			x = x + 1; 
		} else { 
			$("image1").classList.remove("fullop"); 
			$("image2").classList.remove("partialop"); 
			$("image3").classList.remove("partialop");
			x = x + 1; 
		}
	}

	function secondClick() {
		if(y % 2 == 0) {
			$("image1").classList.add("partialop"); 
			$("image2").classList.add("fullop"); 
			$("image3").classList.add("partialop"); 
			y = y + 1; 
		} else { 
			$("image1").classList.remove("partialop"); 
			$("image2").classList.remove("fullop"); 
			$("image3").classList.remove("partialop"); 
			y = y + 1; 
		}
	}

	function thirdClick() {
		if( z % 2 == 0) { 
			$("image1").classList.add("partialop"); 
			$("image2").classList.add("partialop"); 
			$("image3").classList.add("fullop");
			z = z + 1; 
		} else  { 
			$("image1").classList.remove("partialop"); 
			$("image2").classList.remove("partialop"); 
			$("image3").classList.remove("fullop");
			z = z + 1; 
		} 
	}

	function $(id) { 
		return document.getElementById(id);
	}

})(); 

