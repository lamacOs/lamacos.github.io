const TOTAL = 50;
const DURATION = 8000;

const grid = document.getElementById("grid");
const playBtn = document.getElementById("playBtn");
const randomBtn = document.getElementById("randomBtn");
const chosenLabel = document.getElementById("chosenLabel");
const overlay = document.getElementById("overlay");
const canvas = document.getElementById("stage");
const ctx = canvas.getContext("2d");
const loopCheckbox = document.getElementById("loopCheckbox");
const escBtn = document.getElementById("escBtn");

let chosen = null;
let W = 0, H = 0;
let loopForever = false;
let currentAnim = null;

// Favoriten aus localStorage
let favs = JSON.parse(localStorage.getItem("favAnims") || "[]");

/* ---------- Auswahl & Favoriten ---------- */
for (let i = 1; i <= TOTAL; i++) {
  const c = document.createElement("div");
  c.className = "card";
  c.textContent = "Animation " + i;
  if(favs.includes(i)) c.classList.add("favorite");
  
  c.onclick = () => select(i, c);
  c.ondblclick = () => toggleFavorite(i, c);
  
  grid.appendChild(c);
}

function select(i, el) {
  document.querySelectorAll(".card").forEach(c => c.classList.remove("selected"));
  el.classList.add("selected");
  chosen = i;
  chosenLabel.textContent = "Ausgewählt: " + i;
  playBtn.disabled = false;
}

function toggleFavorite(i, el){
  if(favs.includes(i)){
    favs = favs.filter(x=>x!==i);
    el.classList.remove("favorite");
  } else {
    favs.push(i);
    el.classList.add("favorite");
  }
  localStorage.setItem("favAnims", JSON.stringify(favs));
}

/* ---------- Buttons ---------- */
playBtn.onclick = () => play();
randomBtn.onclick = () => {
  const r = Math.floor(Math.random() * TOTAL) + 1;
  grid.children[r-1].click();
  play();
};

/* ---------- Canvas Resize ---------- */
function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;
  W = window.innerWidth;
  H = window.innerHeight;
  canvas.style.width = W + "px";
  canvas.style.height = H + "px";
  canvas.width = W*dpr;
  canvas.height = H*dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
window.addEventListener("resize", resizeCanvas);

/* ---------- ESC-Knopf ---------- */
escBtn.onclick = () => {
  overlay.style.display = "none";
  if(currentAnim) cancelAnimationFrame(currentAnim);
};

/* ---------- Play ---------- */
async function play() {
  overlay.style.display = "block";
  resizeCanvas();
  loopForever = loopCheckbox.checked;
  await runAnimation(chosen);
  if(loopForever && overlay.style.display !== "none") play();
  else overlay.style.display = "none";
}

/* ---------- Runner ---------- */
function runAnimation(id){
  return new Promise(resolve=>{
    const anim = animations[id-1];
    const start = performance.now();

    function loop(now){
      const t = (now - start)/1000;
      ctx.clearRect(0,0,W,H);
      ctx.fillStyle = "white";
      ctx.strokeStyle = "white";
      ctx.lineWidth = 2;
      ctx.globalAlpha = 1;

      anim(t);

      if(now - start >= DURATION){
        resolve();
      } else {
        currentAnim = requestAnimationFrame(loop);
      }
    }

    currentAnim = requestAnimationFrame(loop);
  });
}

/* ---------- Hilfsfunktion ---------- */
function center(){ return [W/2, H/2]; }

/* ========================================================= */
/* =================== ANIMATIONEN ========================= */
/* ========================================================= */

const animations = [];

// 1–50 Animationen
function circlePulse(t){const [x,y]=center();ctx.strokeStyle=`hsl(${t*100},80%,60%)`;ctx.lineWidth=6;ctx.beginPath();ctx.arc(x,y,100+Math.sin(t*3)*60,0,Math.PI*2);ctx.stroke();}
function squareSpin(t){const [x,y]=center();ctx.save();ctx.translate(x,y);ctx.rotate(t);ctx.fillStyle="cyan";ctx.fillRect(-80,-80,160,160);ctx.restore();}
function particleRain(t){for(let i=0;i<300;i++){ctx.fillStyle="white";ctx.fillRect(Math.random()*W,(Math.random()+t)%1*H,2,6);}}
function radialLines(t){const [x,y]=center();for(let i=0;i<32;i++){const a=i/32*Math.PI*2+t;ctx.strokeStyle=`hsl(${i*10},80%,60%)`;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+Math.cos(a)*300,y+Math.sin(a)*300);ctx.stroke();}}
function colorFade(t){ctx.fillStyle=`hsl(${t*80},80%,50%)`;ctx.fillRect(0,0,W,H);}
function waveRings(t){const [x,y]=center();for(let r=20;r<300;r+=20){ctx.beginPath();ctx.arc(x,y,r+Math.sin(t+r)*10,0,Math.PI*2);ctx.stroke();}}
function zigzag(t){ctx.beginPath();for(let x=0;x<W;x+=20)ctx.lineTo(x,H/2+Math.sin(x*0.05+t*5)*100);ctx.stroke();}
function textBounce(t){ctx.fillStyle="white";ctx.font="60px Arial";ctx.fillText("Animation",W/2-150,H/2+Math.sin(t*5)*100);}
function spiral(t){const [x,y]=center();for(let i=0;i<200;i++){const a=i*0.1+t;ctx.fillStyle=`hsl(${i},100%,60%)`;ctx.fillRect(x+Math.cos(a)*i,y+Math.sin(a)*i,3,3);}}
function sineField(t){
  for(let y=0;y<H;y+=20){
    ctx.strokeStyle=`hsl(${y},80%,60%)`;
    ctx.beginPath();
    for(let x=0;x<W;x+=10) ctx.lineTo(x,y+Math.sin(x*0.05+t)*20);
    ctx.stroke();
  }
}
function fireworks(t){for(let i=0;i<100;i++){const a=i/100*Math.PI*2;ctx.fillStyle="yellow";ctx.fillRect(W/2+Math.cos(a+t)*200,H/2+Math.sin(a+t)*200,4,4);}}
function gridPulse(t){for(let x=0;x<W;x+=60)for(let y=0;y<H;y+=60){ctx.fillStyle=`hsl(${(x+y+t*50)%360},80%,60%)`;ctx.fillRect(x,y,40+Math.sin(t+x)*10,40+Math.cos(t+y)*10);}}
function fallingSquares(t){for(let i=0;i<200;i++){ctx.fillStyle=`hsl(${i*5+t*50},80%,60%)`;ctx.fillRect((i*50)%W,(t*200+i*40)%H,20,20);}}
function orbitDots(t){for(let i=0;i<100;i++){ctx.fillStyle="white";const a=i+t;ctx.fillRect(W/2+Math.cos(a)*200,H/2+Math.sin(a)*200,4,4);}}
function scanline(t){ctx.fillStyle="lime";ctx.fillRect(0,(t*200)%H,W,40);}
function explodingCircle(t){ctx.strokeStyle="orange";ctx.beginPath();ctx.arc(W/2,H/2,(t*200)%400,0,Math.PI*2);ctx.stroke();}
function starfield(t){for(let i=0;i<300;i++){ctx.fillStyle="white";ctx.fillRect(Math.random()*W,(Math.random()+t*0.2)%1*H,2,2);}}
function rotatingBars(t){ctx.save();ctx.translate(W/2,H/2);ctx.rotate(t);for(let i=0;i<12;i++){ctx.fillStyle=`hsl(${i*30},80%,60%)`;ctx.fillRect(-20,-300,40,150);ctx.rotate(Math.PI/6);}ctx.restore();}
function noiseFlash(t){for(let i=0;i<2000;i++){ctx.fillStyle=`hsl(${Math.random()*360},100%,50%)`;ctx.fillRect(Math.random()*W,Math.random()*H,2,2);}}
function bouncingBalls(t){for(let i=0;i<20;i++){ctx.fillStyle="cyan";ctx.beginPath();ctx.arc((t*100+i*80)%W,H/2+Math.sin(t+i)*200,20,0,Math.PI*2);ctx.fill();}}
function dnaWave(t){for(let y=0;y<H;y+=20){ctx.fillStyle="magenta";ctx.fillRect(W/2+Math.sin(y*0.05+t)*100,y,5,5);ctx.fillRect(W/2-Math.sin(y*0.05+t)*100,y,5,5);}}
function checkerZoom(t){for(let x=0;x<W;x+=50)for(let y=0;y<H;y+=50){ctx.fillStyle=((x+y)/50+t|0)%2?"#000":"#fff";ctx.fillRect(x,y,50,50);}}
function pulseCross(t){ctx.fillStyle="red";ctx.fillRect(W/2-20,0,40,H);ctx.fillRect(0,H/2-20,W,40);}
function floatingText(t){ctx.fillStyle="white";ctx.font="80px Arial";ctx.fillText("WOW",W/2-100,H/2+Math.sin(t)*200);}
function ringTunnel(t){ctx.strokeStyle="white";for(let i=0;i<20;i++){ctx.beginPath();ctx.arc(W/2,H/2,i*40+((t*100)%40),0,Math.PI*2);ctx.stroke();}}
function diagonalRain(t){ctx.fillStyle="blue";for(let i=0;i<300;i++)ctx.fillRect((i*30+t*100)%W,(i*50)%H,4,20);}
function radarSweep(t){ctx.strokeStyle="lime";ctx.beginPath();ctx.moveTo(W/2,H/2);ctx.lineTo(W/2+Math.cos(t)*W,H/2+Math.sin(t)*H);ctx.stroke();}
function spiralLines(t){ctx.fillStyle="cyan";for(let i=0;i<300;i++){const a=i*0.05+t;ctx.fillRect(W/2+Math.cos(a)*i,H/2+Math.sin(a)*i,2,2);}}
function zoomRects(t){ctx.strokeStyle="magenta";ctx.strokeRect(W/2-t*50,H/2-t*50,t*100,t*100);}
function colorGrid(t){for(let x=0;x<W;x+=40)for(let y=0;y<H;y+=40){ctx.fillStyle=`hsl(${x+y+t*50},80%,60%)`;ctx.fillRect(x,y,40,40);}}
function waveColumns(t){ctx.fillStyle="white";for(let x=0;x<W;x+=30)ctx.fillRect(x,H/2,20,Math.sin(t+x*0.1)*200);}
function plasma(t){for(let x=0;x<W;x+=10)for(let y=0;y<H;y+=10){ctx.fillStyle=`hsl(${Math.sin(x*0.02+t)+Math.cos(y*0.02+t)*180},80%,60%)`;ctx.fillRect(x,y,10,10);}}
function orbitRings(t){ctx.strokeStyle="yellow";for(let i=0;i<10;i++){ctx.beginPath();ctx.arc(W/2,H/2,100+i*30+t*10,0,Math.PI*2);ctx.stroke();}}
function pixelExplosion(t){ctx.fillStyle="white";for(let i=0;i<500;i++)ctx.fillRect(W/2+Math.random()*400-200,H/2+Math.random()*400-200,4,4);}
function heartbeat(t){ctx.strokeStyle="red";ctx.strokeRect(W/2-100,H/2-50,200+Math.sin(t*5)*50,100);}
function neonTriangles(t){ctx.strokeStyle="magenta";for(let i=0;i<20;i++){ctx.beginPath();ctx.moveTo(W/2,H/2-i*20);ctx.lineTo(W/2+i*20,H/2+i*20);ctx.lineTo(W/2-i*20,H/2+i*20);ctx.closePath();ctx.stroke();}}
function vortex(t){ctx.fillStyle="cyan";for(let i=0;i<300;i++){const a=i*0.05+t;ctx.fillRect(W/2+Math.cos(a)*i,H/2+Math.sin(a)*i,2,2);}}
function randomCircles(t){ctx.strokeStyle="white";for(let i=0;i<50;i++){ctx.beginPath();ctx.arc(Math.random()*W,Math.random()*H,20,0,Math.PI*2);ctx.stroke();}}
function mirrorWave(t){ctx.fillStyle="white";for(let x=0;x<W;x+=10){const y=Math.sin(t+x*0.05)*100;ctx.fillRect(x,H/2+y,5,5);ctx.fillRect(x,H/2-y,5,5);}}
function sunburst(t){ctx.strokeStyle="yellow";for(let i=0;i<60;i++){ctx.beginPath();ctx.moveTo(W/2,H/2);ctx.lineTo(W/2+Math.cos(i+t)*W,H/2+Math.sin(i+t)*H);ctx.stroke();}}
function movingGrid(t){gridPulse(t);}
function lightBeams(t){ctx.fillStyle="lime";for(let i=0;i<10;i++)ctx.fillRect(i*100+t*50,0,30,H);}
function confetti(t){ctx.fillStyle="white";for(let i=0;i<300;i++)ctx.fillRect(Math.random()*W,(Math.random()+t)%1*H,6,6);}
function pulseDots(t){ctx.fillStyle="cyan";for(let i=0;i<200;i++)ctx.fillRect(Math.random()*W,Math.random()*H,4+Math.sin(t*5)*3,4);}
function hexSpin(t){ctx.strokeStyle="magenta";ctx.save();ctx.translate(W/2,H/2);ctx.rotate(t);for(let i=0;i<6;i++){ctx.rotate(Math.PI/3);ctx.strokeRect(100,0,50,50);}ctx.restore();}
function flowField(t){ctx.strokeStyle="white";for(let x=0;x<W;x+=30)for(let y=0;y<H;y+=30){ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+Math.cos(t+x)*20,y+Math.sin(t+y)*20);ctx.stroke();}}
function glitchFlash(t){if(Math.random()<0.1){ctx.fillStyle="white";ctx.fillRect(0,0,W,H);}}
function snow(t){ctx.fillStyle="white";for(let i=0;i<300;i++)ctx.fillRect(Math.random()*W,(Math.random()+t*0.1)%1*H,3,3);}
function finalExplosion(t){ctx.fillStyle="orange";for(let i=0;i<600;i++)ctx.fillRect(W/2+Math.random()*t*200-t*100,H/2+Math.random()*t*200-t*100,4,4);}
function blackWhiteFlash(t){ctx.fillStyle = Math.sin(t*10)>0?"white":"black";ctx.fillRect(0,0,W,H);}

/* ---------- Push alle Animationen ---------- */
animations.push(
  circlePulse,squareSpin,particleRain,radialLines,colorFade,waveRings,zigzag,textBounce,spiral,sineField,
  fireworks,gridPulse,fallingSquares,orbitDots,scanline,explodingCircle,starfield,rotatingBars,noiseFlash,bouncingBalls,
  dnaWave,checkerZoom,pulseCross,floatingText,ringTunnel,diagonalRain,radarSweep,spiralLines,zoomRects,colorGrid,
  waveColumns,plasma,orbitRings,pixelExplosion,heartbeat,neonTriangles,vortex,randomCircles,mirrorWave,sunburst,
  movingGrid,lightBeams,confetti,pulseDots,hexSpin,flowField,glitchFlash,snow,finalExplosion,blackWhiteFlash
);
