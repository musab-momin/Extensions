console.log('broken pen is ready to go....')


let root = document.body;
let ctx;




let canvas = document.createElement('canvas');
canvas.style.position = 'absolute';
canvas.style.top = '0';
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
//canvas.style.background = '#121212'
// canvas.style.pointerEvents = "none";
// canvas.style.userSelect = "none";

let painting = false;

const startPosition = ()=>{ painting = true;  }
const endPosition = ()=>{ painting = false; ctx.beginPath(); }
const drawing = (eve)=>
{
    if(!painting)   return;
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.lineTo(eve.clientX, eve.clientY);
    ctx.strokeStyle = "#121212";
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(eve.clientX, eve.clientY);
}



const callReciver = (request, sender, sendResponse)=>
{47
    if(request.state)
    {
        root.style.cursor = "cell";
        root.appendChild(canvas);
        ctx = canvas.getContext("2d");
        window.addEventListener('mousedown', startPosition);
        window.addEventListener('mouseup', endPosition);
        window.addEventListener('mousemove', drawing);

      
    }else{
        root.style.cursor = "default";
        root.removeChild(canvas);
    }
}



chrome.runtime.onMessage.addListener(callReciver);