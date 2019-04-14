var ul = document.createElement("ul");
ul.innerHTML = `
		<li><a href="http://localhost:8080/home">Home</a></li>
		<li><a href="http://localhost:8080/sketchdecks">SketchDecks</a></li>
		<li><a href="http://localhost:8080/draw">Draw Sketch</a></li>
		<li><a href="http://localhost:8080/sketches">All Sketches</a></li>
		<li><a class="active" href="http://localhost:8080/upload">Upload Sketch</a></li>
	`;
ul.id = "myLinks";
var endNav = document.getElementById("endNav");
endNav.appendChild(ul);

var hamburger = document.getElementById("hamburger");

hamburger = hamburger.addEventListener("click", myFunction);
	
function myFunction() {
    console.log(ul.style.height);
   
    if(ul.style.height === "0px" || ul.style.height === ""){
      ul.style.height = "240px";
    }else{
      ul.style.height = "0px";
    }
     
  }

window.onresize = resetHeight;

function resetHeight(){
	if(window.matchMedia("(min-width: 567px)").matches){
		ul.removeAttribute("style");
	}
}
