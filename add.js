let size = 0 ;
let spliceCount; 
let html;
let colorarr = []; 
let Array1 = []; 

function init () {
	html = '';
	if (Array1.length<1) {
		document.getElementById("list").innerHTML = '';
	}
	for (let i =0; i<Array1.length; i++){
		if (colorarr[i] == false) {
			html += ' <div><input id = item'+ (i+1) + ' type = "checkbox" > ' + Array1[i] + ' </input></div> '; 
		}
		else {
			html += ' <div style= "background-color: red;" ><input id = item'+ (i+1) + ' type = "checkbox" > ' + Array1[i] + ' </input></div> ';
		}
	}
	document.getElementById("list").innerHTML = html; 
}



function AddLine () {
	let line = document.getElementById("textbox").value;
	if ((line.length >0)&&(Array1.includes(line) == false)){
		Array1.push(line);
		colorarr.push(false);
		init();
	}
}

function RemoveLine() {
	let elem; 
	let i;
	spliceCount =1; 
	size = Array1.length
	for (i = 1; i<size+1;i++) {
		elem = document.getElementById("item"+i);
		if (elem.checked == true) {  
			Array1.splice(i-spliceCount,1);
			spliceCount++;
		}
	}
	init(); 
}
function highlight () {
	for (i = 1; i<Array1.length+1;i++) {
		elem = document.getElementById("item"+i);
			if (elem.checked == true) {
				if (elem.parentNode.style.backgroundColor != "red") {
					elem.parentNode.style.backgroundColor = "red"
					colorarr[i-1] = true;
					console.log(elem.parentNode);
				}
				else {
					elem.parentNode.style.backgroundColor = ""
					colorarr[i-1] = false; 
				}
			}
	}
}
	
function sort () {
	// sorts the array
	// then updates the list div
	Array1.sort();
	init();
}
	


