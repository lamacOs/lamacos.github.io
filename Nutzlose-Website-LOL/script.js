const btn = document.getElementById("mainBtn");
const out = document.getElementById("output");
const clickSound = document.getElementById("clickSound");
const explosionSound = document.getElementById("explosionSound");
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Partikel & Matrix
let particles=[], matrix=[];
for(let i=0;i<150;i++){particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,s:Math.random()*3+1,vx:Math.random()*1-0.5,vy:Math.random()*1-0.5})}
for(let i=0;i<200;i++){matrix.push({x:i*20,y:Math.random()*canvas.height,text:String.fromCharCode(33+Math.random()*94)})}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  // Partikel
  particles.forEach(p=>{
    ctx.fillStyle="white";
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.s,0,Math.PI*2); ctx.fill();
    p.x+=p.vx; p.y+=p.vy;
    if(p.x<0)p.x=canvas.width;if(p.x>canvas.width)p.x=0;
    if(p.y<0)p.y=canvas.height;if(p.y>canvas.height)p.y=0;
  });

  // Matrix Regen
  matrix.forEach(m=>{
    ctx.fillStyle="lime";
    ctx.font="20px monospace";
    ctx.fillText(m.text,m.x,m.y);
    m.y+=20;
    if(m.y>canvas.height)m.y=0;
    m.text=String.fromCharCode(33+Math.random()*94);
  });

  requestAnimationFrame(animate);
}
animate();

btn.addEventListener("click",()=>{
  clickSound.play();
  out.classList.remove("hidden");
  setTimeout(()=>out.style.opacity="1",10);

  const messages=["Initialisiere…","Aktiviere Module…","Starte Kernsystem…","Bereit! 🚀"];
  let i=0;
  const loop=setInterval(()=>{
    out.textContent=messages[i]; i++;
    if(i===messages.length){ clearInterval(loop); setTimeout(()=>megaEvent(),800);}
  },900);
});

function megaEvent(){
  explosionSound.play();
  document.body.style.background="white";
  setTimeout(()=>document.body.style.background="black",150);

  out.textContent="SYSTEM ENTFESSELT ⚡";
  out.style.color="#00ffea";
  out.style.transform="scale(1.5)";
  setTimeout(()=>out.style.transform="scale(1)",400);

  let flash=setInterval(()=>canvas.style.filter=`hue-rotate(${Math.random()*360}deg)`,100);

  setTimeout(()=>{
    clearInterval(flash);
    canvas.style.filter="none";
    secretMode();
  },3000);
}

function secretMode(){
  out.textContent="GEHEIMMODUS AKTIV 🕶️";
  document.body.style.transform="scale(1.05)";
  document.body.style.transition="1.2s ease";
  setTimeout(()=>document.body.style.transform="scale(1)",1500);

  // Portal Effekt
  let portalRadius=0;
  const portal=setInterval(()=>{
    ctx.beginPath();
    ctx.arc(canvas.width/2,canvas.height/2,portalRadius,0,Math.PI*2);
    ctx.strokeStyle=`hsl(${Math.random()*360},100%,50%)`;
    ctx.lineWidth=4;
    ctx.stroke();
    portalRadius+=5;
    if(portalRadius>canvas.width/2) portalRadius=0;
  },30);

  // Mini Boss Animation
  let bossX=canvas.width/2, bossY=canvas.height/4, bossDir=2;
  setInterval(()=>{
    ctx.fillStyle="red";
    ctx.fillRect(bossX,bossY,50,50);
    bossX+=bossDir;
    if(bossX>canvas.width-50 || bossX<0) bossDir*=-1;
  },30);

  // Noch mehr verrückte zufällige Effekte
  setInterval(()=>{
    ctx.fillStyle=`hsl(${Math.random()*360},100%,50%)`;
    ctx.fillRect(Math.random()*canvas.width,Math.random()*canvas.height,Math.random()*50+10,Math.random()*50+10);
  },200);
}
