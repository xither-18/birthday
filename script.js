/* ================= EDIT YOUR CONTENT HERE ================= */
const COUNTDOWN_TARGET = "2027-11-21T00:00:00+05:30"; // e.g. "2027-03-15T00:00:00+05:30" (+05:30 = Indian Standard Time). Leave "" until you know the date.

const PHOTO_FILES = [
  "photo4.jpg",   // slot 1
  "photo5.jpg.jpeg",   // slot 2 (tall)
  "photo15.jpg.jpeg",   // slot 3 (wide)
  "photo7.jpg.jpeg",   // slot 4
  "photo8.jpg.jpeg",   // slot 5 (tall)
  "photo13.jpg.jpeg",   // slot 6
  "photo12.jpg.jpeg",   // slot 7
  "photo14.jpg.jpeg",   // slot 8 (wide)
  "photo16.jpg.jpeg",   // slot 9
  "photo11.jpg.jpeg",  // slot 10 (tall)
  "photo6.jpg.jpeg",  // slot 11
  "photo9.jpg.jpeg",  // slot 12
  "photo10.jpg.jpeg",      // slot13
  "photo17.jpg.jpeg",      // slot14
  "photo18.jpg.jpeg"       // slot15
];
const PHOTOS = [ // files go in assets/photos/ named photo1.jpg ... photo12.jpg
  "Caption 1","Caption 2","Caption 3","Caption 4","Caption 5","Caption 6",
  "Caption 7","Caption 8","Caption 9","Caption 10","Caption 11","Caption 12","Caption 13","Caption 14","Caption 15"];
const VIDEOS = ["Video 1","Video 2","Video 3","Video 4"]; // assets/videos/video1.mp4 ...

const MEMORIES = [
  ["Add a date","Memory title","Describe this memory."],
  ["Add a date","Memory title","Describe this memory."],
  ["Add a date","Memory title","Describe this memory."],
  ["Add a date","Memory title","Describe this memory."],
  ["Add a date","Memory title","Describe this memory."]];
const FUNNY = [
  ["Funny moment #1","LOTS OF, CAN'T SPECIFICALLY DESCRIBE ONE."],["Inside joke #1","NAMSAI, IYKYK💀."],
  ["Funny moment #2","LOTS OF, CAN'T SPECIFICALLY DESCRIBE ONE."],["Inside joke #2","Hum namak hai maharaj jaha chahe istamaal kar lijiye."],
  ["Funny moment #3","LOTS OF, CAN'T SPECIFICALLY DESCRIBE ONE."],["Inside joke #3","Itna joke toh mereko khud hi yaad nhi, TUM BHI EK JOKE HI HAI ALAG BAAT HAI😅."]];
const SPECIAL = [
  ["🌟","Quality #1","Always keeps motivating me, alag baat hai gaali de deke hi karta hai but chalega😅."],["💛","Quality #2","Never thinks about money whenever its for family, toh birthday ke din ek BIRYANI bhi ho jata toh maza aa jata🙃."],
  ["🔥","Quality #3","Helps everyone no matter in what condition they are."],["🤝","Quality #4","Mood swings as fast as the speed of light, abhi dekho mazak kar rha hai and seconds later gali dene shuru😶🫡."],
  ["🎯","Quality #5","USES TOO MUCH LAME JOKES😒."],["😄","Quality #6","Supports Manchester United too much🫥."]];
const THINGS = [
  ["Why are you special to me?","for me u are my confort zone wala insaan kyuki hum kuch bhi share kar skta hai isiliye."],
  ["What do I like most about you?","Situation handling like any type of."],
  ["Your biggest superpower?","Communication skills for sure."],
  ["A moment you made me proud","IDK actually😅."],
  ["Your funniest habit","Koi bhi situation mei lame jokes maar dena."],
  ["The best advice you ever gave me","Every advice of urs are GOATED itself ."],
  ["A childhood memory I treasure","Tum toh pura childhood hostel mei hi rha hai🥲."],
  ["Something you taught me","EVERYTHING!!."],
  ["What makes you a great brother?","IDK, just u are a great brother."],
  ["Your most iconic phrase","TAQDIR SE KISMAT KA TALA KHOLA JAA SKTA HAI LEKIN, KISMAT SE TAQDIR KA TALA NHI KHOLA JA SKTA🫡."],
  ["A time you had my back","Almost everytime whenever Iam not wrong."],
  ["What I admire about your work ethic","Learning new and different things in life, dont stick with one option."],
  ["Your most underrated quality","A good motivational speaker😶‍🌫️."],
  ["Our best trip or outing","Dibrugarh JEE exam ke time💀."],
  ["What I'd never change about you","Free mei acche gyan dena."],
  ["Your favourite food, according to me","MUTTON, no second thought."],
  ["A song or movie that reminds me of you","Pta nhi, I think WAVING FLAG."],
  ["The way you handle tough days","Silently and alone surviver, dusra ko bolke kyu tension dena."],
  ["What makes you laugh the hardest?","TMKOC."],
  ["If you were a superhero, who would you be?","BLACK PANTHER."],
  ["Your dream, and how I'll help","pta nhi yeh toh but, i'll truly support u."],
  ["Something small you do that means a lot","Jab bhi biryani khilata hai😅."],
  ["What our home would be without you","BORED."],
  ["My favourite photo of us, and why","IDK humlog ka sath mei photos kam hi hai but jitna bhi hoga jab hum chota tha tab ka hi hoga."],
  ["What I hope for you this year","Best wishes and lots of success."],
  ["What I'm thankful to you for","That u suggested me to GAME OF THRONES🐉👑."],
  ["Why you deserve the best birthday ever","For being the best person i've ever met."]
];
const SECRET = "OPEN THE SURPRISE!!!";
const FINAL = "I may not say it often, but I'm genuinely proud to have you as my brother. No matter where life takes us, you'll always have my respect and support. ❤️Happy Birthday, Bhai! Keep smiling and keep winning! ❤️.";
/* ========================================================== */

const $ = s => document.querySelector(s);
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const esc = t => String(t).replace(/[&<>"]/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

/* ---- build sections ---- */
const layout = ["wide2","","", "","wide2","", "","","","", "","","wide2", "wide2","wide2"];
$("#masonry").innerHTML = PHOTOS.map((c,i)=>
 `<div class="ph ${layout[i]}" data-i="${i}" data-n="${i+1}" tabindex="0"><img src="assets/photos/${PHOTO_FILES[i]}" alt="${esc(c)}" loading="lazy"><span>${esc(c)}</span></div>`).join("");
document.querySelectorAll(".ph img").forEach(im=>im.onerror=()=>{im.style.display="none";im.parentElement.classList.add("empty");im.parentElement.dataset.broken="1";});
$("#videos").innerHTML = VIDEOS.map((t,i)=>`<div class="vid"><video controls preload="metadata" src="assets/videos/video${i+1}.mp4#t=0.1"></video><p>${esc(t)}</p></div>`).join("");
$("#tl").innerHTML = MEMORIES.map(m=>`<div class="tl-item reveal"><div class="tl-card"><b>${esc(m[0])}</b><h3>${esc(m[1])}</h3><p>${esc(m[2])}</p></div></div>`).join("");
$("#funnyGrid").innerHTML = FUNNY.map(f=>`<div class="card reveal"><h3>${esc(f[0])}</h3><p>${esc(f[1])}</p></div>`).join("");
$("#specialGrid").innerHTML = SPECIAL.map(s=>`<div class="card reveal"><div class="ico">${s[0]}</div><h3>${esc(s[1])}</h3><p>${esc(s[2])}</p></div>`).join("");
$("#thingsGrid").innerHTML = THINGS.map((t,i)=>`<div class="flip" tabindex="0"><div class="flip-in"><div class="f"><span class="n">${i+1}</span><small>${esc(t[0])}</small></div><div class="b">${esc(t[1])}</div></div></div>`).join("");
document.querySelectorAll(".flip").forEach(f=>{f.onclick=()=>f.classList.toggle("on");f.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();f.classList.toggle("on")}}});
$("#secretText").textContent = SECRET;
$("#finalMsg").textContent = FINAL;
document.querySelectorAll(".sec .title,.paper,.cake,.cd").forEach(e=>e.classList.add("reveal"));

/* ---- scroll reveal ---- */
const io = new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll(".reveal").forEach(e=>io.observe(e));

/* ---- falling leaves ---- */
(function(){
  const cols=["#c1272d","#d9422b","#e8602c","#a31d2e","#b8341f"], box=$("#leaves");
  for(let i=0;i<24;i++){
    const l=document.createElement("div"), s=14+Math.random()*26;
    l.className="leaf";
    l.style.cssText=`left:${Math.random()*100}%;width:${s}px;height:${s}px;background:${cols[i%5]};--dx:${(Math.random()-.5)*160}px;animation-duration:${9+Math.random()*10}s;animation-delay:${-Math.random()*16}s`;
    box.appendChild(l);
  }
})();

/* ---- confetti ---- */
const cv=$("#confetti"), cx=cv.getContext("2d"); let parts=[], running=false;
function size(){cv.width=innerWidth;cv.height=innerHeight} size(); addEventListener("resize",size);
function burst(n=180,x=innerWidth/2,y=innerHeight/2){
  if(reduce) n=Math.min(n,40);
  const gold=["#f2b632","#ffd35c","#ffe08a","#d9a21b","#fff3b0","#ff9a4d"];
  for(let i=0;i<n;i++){const a=Math.random()*Math.PI*2,v=4+Math.random()*12;
    parts.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v-5,w:6+Math.random()*7,h:4+Math.random()*6,r:Math.random()*6,vr:(Math.random()-.5)*.4,c:gold[i%gold.length],life:140+Math.random()*60});}
  if(!running){running=true;requestAnimationFrame(tick)}
}
function tick(){
  cx.clearRect(0,0,cv.width,cv.height);
  parts=parts.filter(p=>p.life>0&&p.y<cv.height+30);
  parts.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=.22;p.vx*=.99;p.r+=p.vr;p.life--;
    cx.save();cx.translate(p.x,p.y);cx.rotate(p.r);cx.globalAlpha=Math.min(1,p.life/40);cx.fillStyle=p.c;cx.fillRect(-p.w/2,-p.h/2,p.w,p.h);cx.restore();});
  if(parts.length)requestAnimationFrame(tick);else running=false;
}

/* ---- music ---- */
const bgm=$("#bgm"), mBtn=$("#musicBtn");
function playMusic(){bgm.play().then(()=>mBtn.classList.remove("off")).catch(()=>mBtn.classList.add("off"))}
mBtn.onclick=()=>{ if(bgm.paused)playMusic(); else{bgm.pause();mBtn.classList.add("off")} };
mBtn.classList.add("off");

/* ---- enter ---- */
$("#enterBtn").onclick=()=>{
  burst(260);setTimeout(()=>burst(140,innerWidth*.2,innerHeight*.4),300);setTimeout(()=>burst(140,innerWidth*.8,innerHeight*.4),500);
  $("#site").classList.remove("hidden");
  $("#welcome").classList.add("out");
  document.body.classList.remove("locked");
  scrollTo(0,0); playMusic();
  setTimeout(()=>$("#welcome").remove(),1100);
};

/* ---- lightbox ---- */
let cur=0; const lb=$("#lightbox"), lbImg=$("#lbImg");
const okPhotos=()=>[...document.querySelectorAll(".ph")].filter(p=>!p.dataset.broken);
function show(i){const l=okPhotos();if(!l.length)return;cur=(i+l.length)%l.length;lbImg.src=l[cur].querySelector("img").src;lbImg.alt=l[cur].querySelector("img").alt}
function openLb(p){const l=okPhotos();if(p.dataset.broken)return;lb.hidden=false;show(l.indexOf(p))}
document.querySelectorAll(".ph").forEach(p=>{p.onclick=()=>openLb(p);p.onkeydown=e=>{if(e.key==="Enter")openLb(p)}});
$(".lb-x").onclick=()=>lb.hidden=true;
$(".lb-prev").onclick=()=>show(cur-1);$(".lb-next").onclick=()=>show(cur+1);
lb.onclick=e=>{if(e.target===lb)lb.hidden=true};
addEventListener("keydown",e=>{if(lb.hidden)return;if(e.key==="Escape")lb.hidden=true;if(e.key==="ArrowLeft")show(cur-1);if(e.key==="ArrowRight")show(cur+1)});

/* ---- candles ---- */
const cBox=$("#candles"), cake=$(".cake");
for(let i=0;i<27;i++){const c=document.createElement("div");c.className="candle";c.innerHTML='<div class="flame"></div>';cBox.appendChild(c)}
let blown=false;
$("#blowBtn").onclick=()=>{
  const btn=$("#blowBtn");
  if(blown){cake.classList.remove("out");$("#wishMsg").classList.remove("show");btn.textContent="Blow the Candles";blown=false;return}
  blown=true;cake.classList.add("out");
  document.querySelectorAll(".candle").forEach((c,i)=>setTimeout(()=>{
    for(let k=0;k<2;k++){const s=document.createElement("div");s.className="smoke";s.style.setProperty("--sx",(Math.random()*40-20)+"px");c.appendChild(s);setTimeout(()=>s.remove(),2500)}
  },i*40));
  setTimeout(()=>{$("#wishMsg").classList.add("show");const r=cake.getBoundingClientRect();burst(120,r.left+r.width/2,r.top)},700);
  btn.textContent="Light Them Again";
};

/* ---- secret ---- */
$("#secretBtn").onclick=()=>{
  $("#secretBox").classList.toggle("open");
  burst(60,innerWidth/2,innerHeight*.6);
  $("#transfer").classList.remove("hidden");
};

/* ---- countdown (IST) ---- */
function renderCd(){
  const box=$("#cd");
  if(!COUNTDOWN_TARGET){box.innerHTML="<p>Set COUNTDOWN_TARGET at the top of script.js to start the countdown.</p>";return}
  let t=new Date(COUNTDOWN_TARGET).getTime()-Date.now();
  if(isNaN(t)){box.innerHTML="<p>Date format should look like 2027-03-15T00:00:00+05:30</p>";return}
  if(t<=0){box.innerHTML="<p>🎉 It's birthday time! 🎉</p>";return}
  const d=Math.floor(t/864e5),h=Math.floor(t%864e5/36e5),m=Math.floor(t%36e5/6e4),s=Math.floor(t%6e4/1e3);
  box.innerHTML=[["Days",d],["Hours",h],["Minutes",m],["Seconds",s]].map(x=>`<div><b>${x[1]}</b>${x[0]}</div>`).join("");
}
renderCd();setInterval(renderCd,1000);

/* ---- finale ---- */
let finaleSeen=false;
new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting&&!finaleSeen){finaleSeen=true;burst(220)}}),{threshold:.5}).observe($("#finale"));
$("#replayBtn").onclick=()=>{burst(260);setTimeout(()=>burst(160,innerWidth*.25,innerHeight*.5),350);setTimeout(()=>burst(160,innerWidth*.75,innerHeight*.5),650)};
/* ---- transfer contract ---- */
$("#openContract").onclick=()=>{
  $("#envelope").classList.add("open");
  $("#openContract").disabled=true;
  burst(60,innerWidth/2,innerHeight*.5);
  setTimeout(()=>{
    $("#envStage").classList.add("gone");
    $("#contractWrap").classList.add("show");
    setTimeout(()=>$("#contractWrap").scrollIntoView({behavior:reduce?"auto":"smooth",block:"start"}),400);
  },1100);
};
$("#signBtn").onclick=()=>{
  const b=$("#signBtn"); b.disabled=true; b.textContent="Signing…";
  $("#sig").classList.add("on");
  setTimeout(()=>{
    $("#stamp").style.opacity=".85";
    $("#welcomeTeam").classList.add("show");
    b.textContent="Contract Signed ✓";
    burst(240);setTimeout(()=>burst(150,innerWidth*.2,innerHeight*.5),300);setTimeout(()=>burst(150,innerWidth*.8,innerHeight*.5),550);
  },1900);
};
/* ---- hall of fame: tap to reveal ---- */
document.querySelectorAll(".hcard").forEach(c=>{
  const flip=()=>{
    const was=c.classList.contains("on");
    c.classList.toggle("on");
    if(!was){const r=c.getBoundingClientRect();burst(50,r.left+r.width/2,r.top+r.height/2)}
  };
  c.onclick=flip;
  c.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();flip()}};
});