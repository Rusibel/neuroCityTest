export default function draw() 
{
  const canvas = document.getElementById('canvas');
  if (canvas.getContext)
  {
    const ctx = canvas.getContext('2d'), 
    canvasWidth = ctx.width,
    canvasHeight = ctx.height;
    let xPos = -500;

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(75, 0);
    ctx.lineTo(0, 75);
    ctx.fill();
    ctx.closePath();


function drawCircle()  {

    // ctx.moveTo(100, 550);
    // ctx.arc(50,550,50,0, 2*Math.PI,true);
    // ctx.strokeStyle = '#1a2edb';
    // ctx.fill();
    // ctx.stroke()

    // clearRect(0, 0, canvasWidth, canvasHeight)
    // ctx.moveTo(100, 550);
    // ctx.arc(50,550,50,0, 2*Math.PI,true);
    // ctx.strokeStyle = '#1a2edb';
    // ctx.fill();
    // ctx.stroke()
    
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // цвета фона
    ctx.fillStyle = "#F8F8F8";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  
    // рисование круга
    ctx.beginPath();
    ctx.arc(xPos, 550, 50, 0, Math.PI * 2, false);
    ctx.closePath();
  
    ctx.fillStyle = "#FFCC00";
    ctx.fill();
  
    ctx.lineWidth = 10;
    ctx.strokeStyle = "#DCB001";
    ctx.stroke();
  
    xPos += 5;
    if (xPos > 850) {
      xPos = -50;
    }
  
    requestAnimationFrame(drawCircle)
} 
drawCircle();
    
    
    ctx.moveTo(700, 0);
    ctx.lineTo(800, 0); 
    ctx.lineTo(800, 100); 
    ctx.lineTo(700, 100); 
    ctx.closePath(); 
    ctx.fillStyle = '#1a2edb'; 
    ctx.fill();
    ctx.stroke();

    ctx.moveTo(700, 400);
    ctx.lineTo(800, 400); 
    ctx.lineTo(800, 600); 
    ctx.lineTo(700, 600); 
    ctx.closePath(); 
    ctx.fillStyle = '#1a2edb'; 
    ctx.fill();
    ctx.stroke();


  }
}