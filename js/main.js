
//Get the Modal
var modal1 = document.getElementById('myModal1');
var modal2 = document.getElementById('myModal2');
var modal3 = document.getElementById('myModal3');
var modal4 = document.getElementById('myModal4');
var modal5 = document.getElementById('myModal5');
var modal6 = document.getElementById('myModal6');

//Get the button that opens the modal
var proj1 = document.getElementById("proj1");
var proj2 = document.getElementById("proj2");
var proj3 = document.getElementById("proj3");
var proj4 = document.getElementById("proj4");
var proj5 = document.getElementById("proj5");
var proj6 = document.getElementById("proj6");

//Get modal class
var modal = document.getElementsByClassName("modal");

//Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//WHen the user clicks the button, open the modal
proj1.onclick = function() {
	modal1.style.display = "block";
}
proj2.onclick = function() {
	modal2.style.display = "block";
}
proj3.onclick = function() {
	modal3.style.display = "block";
}
proj4.onclick = function() {
	modal4.style.display = "block";
}
proj5.onclick = function() {
	modal5.style.display = "block";
}
proj6.onclick = function() {
	modal6.style.display = "block";
}



//When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
	if (event.target == modal1 ){
		modal1.style.display = "none";
	} else if (event.target == modal2 ){
		modal2.style.display = "none";
	} else if (event.target == modal3 ){
		modal3.style.display = "none";
	} else if (event.target == modal4 ){
		modal4.style.display = "none";
	} else if (event.target == modal5 ){
		modal5.style.display = "none";
	} else if (event.target == modal6 ){
		modal6.style.display = "none";
	}
}