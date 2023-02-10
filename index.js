console.log("Welcome to Scocify");
//Initilize the Variable
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgreebar= document.getElementById('myProgreebar');
let gif= document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
// audioElement.play();


let songs = [
    {songName:"Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName:"Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName:"DEAF KEV - Invincible ", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName:"Different Heaven & EH!DE - My Heart ", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName:"Janji-Heroes-Tonight-feat-Johnning", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName:"Jai Shree Ram", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName:"Jai Shree Ram", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName:"Jai Shree Ram", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName:"Jai Shree Ram", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
]

songItems.forEach((element,i)=>{
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

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

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e.target);
        makeAllPlays();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
    })
})