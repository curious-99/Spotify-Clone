console.log("Welcome to Scocify");
//Initilize the Variable
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgreebar= document.getElementById('myProgreebar');
let gif= document.getElementById('gif');
// audioElement.play();


let songs = [
    {songName:"Jai Shree Ram", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName:"Jai Shree Ram", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName:"Jai Shree Ram", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName:"Jai Shree Ram", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName:"Jai Shree Ram", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
]

// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;

    }
})

//Listen to events
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    //update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = ( myProgressBar.value* audioElement.duration)/100;
})