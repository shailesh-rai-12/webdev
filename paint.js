var canvas,cxt,flag=false,currX,currY,color="black";

function getMousePos(evt) {
    var rect=canvas.getBoundingClientRect(),
    scaleX= canvas.width / rect.width,
    scaleY=canvas.height /rect.height,
    absX=evt.offsetX * scaleX,
    absY=evt.offsetY * scaleY;
    currX=absX;
    currY=absY;
    
}

function pixel(event)
{
    cxt.beginPath();
    cxt.moveTo(currX,currY)
    getMousePos(event);
    cxt.lineTo(currX,currY);
    cxt.strokeStyle=color;
    cxt.lineWidth=2;
    cxt.stroke();   
    cxt.closePath();
}


function draw(task,event)
{

    if(task=="down")
    {
        flag=true;
        getMousePos(event);
    }

    if(task=="move" && flag)
    {
        pixel(event);
    }

    if(task=="up")
    {
        flag=false;
        
    }
}
function changeColor(element) {
    color=element.innerText.toLowerCase();
    if(color=="eraser")
        color="white";
    
}

function init(){
    canvas=document.getElementById("canvas");
    cxt=canvas.getContext("2d");

    canvas.addEventListener("mousedown",function(e){
        console.log("down");
           draw("down",e);
    });
    canvas.addEventListener("mouseup",function(e){
        console.log("up");
       draw("up",e);
   });
   canvas.addEventListener("mousemove",function(e){
    console.log("move");
       draw("move",e);
   });

   document.getElementById('clear').addEventListener("click",(e)=>{
        e.preventDefault();
        cxt.clearRect(0,0,canvas.width,canvas.height);
   });

}

init();
