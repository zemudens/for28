const tg = window.Telegram.WebApp
const vinyl = document.getElementById("vinyl")

let playing = false
let index = 0

const playlist = Array.from({length:28},(_,i)=>`song${i+1}.mp3`)
const audio = new Audio()

audio.src = playlist[index]

function togglePlay(){
  playing = !playing
  if(playing){
    audio.play()
    vinyl.style.animationPlayState = "running"
  }else{
    audio.pause()
    vinyl.style.animationPlayState = "paused"
  }
}

function next(){
  index = (index+1)%playlist.length
  audio.src = playlist[index]
  audio.play()
}

function prev(){
  index = (index-1+playlist.length)%playlist.length
  audio.src = playlist[index]
  audio.play()
}

function shuffle(){
  index = Math.floor(Math.random()*playlist.length)
  audio.src = playlist[index]
  audio.play()
}

function openLove(){
  document.getElementById("love").style.display="flex"
}

function closeLove(){
  document.getElementById("love").style.display="none"
}
