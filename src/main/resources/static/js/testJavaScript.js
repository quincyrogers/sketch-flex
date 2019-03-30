var sketchbox = document.createElement("canvas");
var body = document.getElementsByTagName("body")[0];
var ctx = sketchbox.getContext('2d');
var isMouseDown = false;
currentSize = 5;
var currentColor = "rgb(0,0,0)";
var currentOpacity = "1";


defineInitialCanvas();


// Create Sketch Pad
function defineInitialCanvas() {
	sketchbox.id = "sketchbox";
	sketchbox.width = (screen.width - 160);
  sketchbox.height =  600;
  sketchbox.style.zIndex = 8;
  sketchbox.style.position = "absolute";
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, sketchbox.width, sketchbox.height);
 body.appendChild(sketchbox);
}

	// DRAWING EVENT HANDLERS

		sketchbox.addEventListener('mousedown', function() {mousedown(sketchbox, event);});
		sketchbox.addEventListener('mousemove',function() {mousemove(sketchbox, event);});
		sketchbox.addEventListener('mouseup',mouseup);

//Button Event Handler
    document.getElementById('eraser').addEventListener('click', eraser);
    document.getElementById('draw').addEventListener('click', draw);
	  document.getElementById('download').addEventListener('click', function() {
			downloadCanvas(this, 'sketchbox', document.getElementById('textbox').value);
		}, false);
    document.getElementById("clear").addEventListener('click', defineInitialCanvas);
    document.getElementById("penColor").addEventListener('change', function() {
			currentColor = this.value;
		});
    document.getElementById("pensize").addEventListener('change', function() {
    currentSize= this.value; document.getElementById("dotSize").innerHTML= this.value;
  })
  document.getElementById("opacity").addEventListener('change', function() {sketchbox.style.opacity = this.value; document.getElementById("opacityValue").innerHTML= this.value * 100;})
                                                                

  //Eraser Function

    function eraser(){
      currentColor = ctx.fillStyle;
      currentSize = 20;
    }

  //Draw Function
      function draw(){
        currentColor = "rgb(0,0,0)";
        currentSize = 5;
      }


	// GET MOUSE POSITION

		function getMousePos(sketchbox, event) {
			var boundaryRect = sketchbox.getBoundingClientRect();
			return {
				x: event.clientX - boundaryRect.left,
				y: event.clientY - boundaryRect.top
			};
    }


// Mouse Down Event Function

	function mousedown(sketchbox, event) {
			var mousePos = getMousePos(sketchbox, event);
			isMouseDown=true
			var currentPosition = getMousePos(sketchbox, event);
			ctx.moveTo(currentPosition.x, currentPosition.y)
			ctx.beginPath();
			ctx.lineWidth  = currentSize;
			ctx.lineCap = "round";
			ctx.strokeStyle = currentColor;
		}
		// ON MOUSE MOVE

		function mousemove(sketchbox, event) {

			if(isMouseDown){
				var currentPosition = getMousePos(sketchbox, event);
				ctx.lineTo(currentPosition.x, currentPosition.y)
				ctx.stroke();
				store(currentPosition.x, currentPosition.y, currentSize, currentColor);
			}
		}

	// ON MOUSE UP

		function mouseup() {
			isMouseDown=false
			document.getElementById('lob').value = document.getElementById('sketchbox').toDataURL(); //changes value of 'lob' input when mouseup
			store()
		}
	// Download Sketchbox

		function downloadCanvas(link, sketchbox, filename) {
			link.href = document.getElementById(sketchbox).toDataURL();
			link.download = filename;
		}