let socket = null; 
let Array1; 
function AddLine () {
	let line = document.getElementById("textbox").value;
	if ((line.length >0)&&(Array1.includes(line) == false)){
		Array1.push(line);
	}
	socket.emit('change', Array1); 
}

function init () {
	socket = io(); 
	socket.on ('load', load); 
	socket.on('newitem', load); 
	socket.emit('init'); 
}
	
	
function load(data) {
	
	Array1= JSON.parse(data).list;
	html = '';
	if (Array1.length<1) {
		document.getElementById("list").innerHTML = '';
	}
	for (let i =0; i<Array1.length; i++){
			html += ' <div><input id = item'+ (i+1) + ' type = "checkbox" > ' + Array1[i] + ' </input></div> '; 
	}
	document.getElementById("list").innerHTML = html; 

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
	socket.emit('change', Array1) ;
}

function sort () {
	// sorts the array
	// then updates the list div
	Array1.sort();
	socket.emit('change', Array1) ;
}
