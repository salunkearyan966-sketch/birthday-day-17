const slides = document.querySelectorAll(".slide");
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const finalMessage = document.getElementById("finalMessage");

let currentSlide = 0;
let musicPlaying = false;

setTimeout(()=>{
  document.getElementById("mainTrailer").classList.remove("hidden");
},4000);

function showSlide(index){
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");

  for(let i=0;i<12;i++){
    createFloat();
  }

  if(index === slides.length - 1){
    setTimeout(()=>{
      finalMessage.style.display = "flex";
      for(let i=0;i<35;i++){
        createFloat();
      }
    },2500);
  }
}

function nextSlide(){
  if(currentSlide < slides.length - 1){
    currentSlide++;
    showSlide(currentSlide);
  }
}

function prevSlide(){
  if(currentSlide > 0){
    currentSlide--;
    finalMessage.style.display = "none";
    showSlide(currentSlide);
  }
}

function toggleMusic(){
  if(!musicPlaying){
    music.play();
    musicBtn.innerHTML = "Pause Song ⏸";
    musicPlaying = true;
  }else{
    music.pause();
    musicBtn.innerHTML = "Play Song 🎵";
    musicPlaying = false;
  }
}

function createFloat(){
  const item = document.createElement("div");
  item.className = "float";

  const symbols = ["❤️","🎬","✨","🌸","🎂"];
  item.innerHTML = symbols[Math.floor(Math.random()*symbols.length)];

  item.style.left = Math.random()*100 + "vw";
  item.style.animationDuration = (Math.random()*3+4)+"s";

  document.body.appendChild(item);

  setTimeout(()=>{
    item.remove();
  },7000);
}