var sounds = {

KeyQ:"./Sound/28.mp3",
KeyW:"./Sound/29.mp3",
KeyE:"./Sound/30.mp3",
KeyR:"./Sound/31.mp3",
KeyT:"./Sound/32.mp3",
KeyY:"./Sound/33.mp3",
KeyU:"./Sound/34.mp3",
KeyI:"./Sound/35.mp3",
KeyO:"./Sound/36.mp3",
KeyP:"./Sound/37.mp3",

KeyA:"./Sound/38.mp3",
KeyS:"./Sound/39.mp3",
KeyD:"./Sound/40.mp3",
KeyF:"./Sound/41.mp3",
KeyG:"./Sound/42.mp3",
KeyH:"./Sound/43.mp3",
KeyJ:"./Sound/44.mp3",
KeyK:"./Sound/45.mp3",
KeyL:"./Sound/46.mp3",

KeyZ:"./Sound/47.mp3",
KeyX:"./Sound/48.mp3",
KeyC:"./Sound/49.mp3",
KeyV:"./Sound/50.mp3"

}

var keys = document.querySelectorAll(".key")

document.body.addEventListener("keydown",function(e){

if(sounds[e.code]){

var audio = new Audio(sounds[e.code])
audio.play()

keys.forEach(function(k){

if(k.innerHTML === e.key.toUpperCase()){

k.classList.add("active")

setTimeout(function(){
k.classList.remove("active")
},120)

}

})

}

})