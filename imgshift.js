var shift = 50;
var imgShift = 0;

function startImg()
{
    document.getElementById("stopShift").disabled = false;
    document.getElementById("startShift").disabled = true;
    var image=document.getElementById("destinyImg");
    imgShift = setInterval(function()
    { 
        image.style.left = shift + "px";
        image.style.top = shift + "px";

        shift +=2; // change is set to 2 to minimze movement;
    
    },250);

}


function stopImg()
{
    document.getElementById("stopShift").disabled = true;
    document.getElementById("startShift").disabled = false;
    clearInterval(imgShift);
}