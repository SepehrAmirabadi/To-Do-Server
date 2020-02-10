let Array1 = []; 
let spliceCount;
let size; 

function AddLine () {
	
	let newItem = document.getElementById("textbox");
	if(newItem.value.length == 0){
		alert("You must enter a name");
	}else{
		let req = new XMLHttpRequest();
		req.onreadystatechange = function() {
			if(this.readyState==4){
				if(this.status==200){
					newItem.value = "";
				}else{
					alert("Error while trying to add. Try again.");
				}
			}
		}
		Array1.push(newItem.value)
		let data =  JSON.stringify({L:Array1}); 
		req.open("PUT", `http://localhost:3000/change`);
		req.send(data);
	}
	init(); 
	
/* 	let line = document.getElementById("textbox").value;
	if ((line.length >0)&&(Array1.includes(line) == false)){
		Array1.push(line);
		colorarr.push(false);
		init();
	} */
}

function RemoveLine() {
		let elem; 
		let i;
		spliceCount = 1; 
		size = Array1.length;
		for (i = 1; i<size+1;i++) {
			elem = document.getElementById("item"+i);
			if (elem.checked == true) {  
				Array1.splice(i-spliceCount,1);
				spliceCount++;
			}
		}
	
		let req = new XMLHttpRequest();
		let data =  JSON.stringify({L:Array1}); 
		req.open("PUT", `http://localhost:3000/change`);
		req.send(data);
		
		init(); 

}
/* function highlight () {
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
} */
	
function sort () {
	// sorts the array
	// then updates the list div
	Array1.sort();
	init();
}

function init(){
	setTimeout(init,3000); 
	let req = new XMLHttpRequest();
		req.onreadystatechange = function() {
			if(this.readyState==4){
				if(this.status==200){
					Array1 = JSON.parse(this.responseText).A;
					load();
				}else{
					alert("Error while trying to add. Try again.");
				}
			}
		}
		req.open("GET", `http://localhost:3000/array`);
		req.send();
}

function load() {
	let html = '';
	if (Array1.length<1) {
		document.getElementById("list").innerHTML = '';
	}
	for (let i =0; i<Array1.length; i++){
			html += ' <div><input id = item'+ (i+1) + ' type = "checkbox" > ' + Array1[i] + ' </input></div> '; 
	}
	document.getElementById("list").innerHTML = html; 
	
	
}
	


