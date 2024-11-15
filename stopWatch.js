
let startStopBtn = document.querySelector('#startStopBtn');
let resetBtn = document.querySelector('#resetBtn');


let seconds =0;
let minutes = 0;
let hours = 0;

// variable for leading zeros
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

//  variables for set Interval and timerStatue
let timerInterval =null;
let timerStatus = "stopped";


function stopWatch(){
  seconds++;
  if(seconds / 60 ===1){
    seconds = 0;
    minutes  ++;
    if(minutes / 60 ===1){
      minutes = 0;
      hours++;
    }
  }
  if(seconds < 10){
     leadingSeconds = "0"+ seconds.toString();
     // we can also remove .toString()
  }else{
    leadingSeconds=seconds;
  }
  if(minutes < 10){
     leadingMinutes = "0"+ minutes.toString();
     // we can also remove .toString()
  }else{
    leadingMinutes=minutes;
  }
  if(hours < 10){
     leadingHours = "0"+ hours.toString();
     // we can also remove .toString()
  }else{
    leadingHours=hours;
  }

  let displayTimer = document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}



startStopBtn.addEventListener('click', ()=>{

  if(timerStatus ==="stopped"){
  timerInterval = setInterval(stopWatch,100);
  document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
  timerStatus = "started";
  }else{
    clearInterval(timerInterval);
    document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
    timerStatus = "stopped";
  }
});


resetBtn.addEventListener('click',()=>{
  window.clearInterval(timerInterval);
  seconds = 0;
  minutes =0;
  hours = 0;
  document.getElementById('timer').innerHTML ="00:00:00";
});