console.log("welcome to spotify");

//Initialize variables
let songIndex=0;
let audioElement=new Audio("song/Music4.mp3");
let masterPlay=document.getElementById("masterPlay");
let myProgressBar=document.getElementById("myProgressBar");
let gifid=document.getElementById("gifid");
let masterSongName=document.getElementById("masterSongName");
let songitem=Array.from(document.getElementsByClassName("songitems"));

let songs=[
    {SongName:"Fat bass", filePath:"song/Music1.mp3", coverPath: "cover/1.jpg"},
   {SongName:"Inside out", filePath:"song/Music2.mp3", coverpath: "cover/2.jpg"},
    {SongName:"I wanna go", filePath:"song/Music3.mp3", coverpath: "cover/3.jpg"},
    {SongName:"How I roll", filePath:"song/Music4.mp3", coverpath: "cover/4.jpg"},
    {SongName:"drop dead", filePath:"song/Music5.mp3", coverpath: "cover/5.jpg"},
    {SongName:"up n down",filePath:"song/Music6.mp3", coverpath: "cover/6.jpg"},
    {SongName:"he about to lose me", filePath:"Music7.mp3", coverpath: "cover/7.jpg"},
]

songitem.forEach((element,i)=>{
    console.log(element,i);

    //element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].SongName;

})
//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gifid.style.opacity=1;

    }
    else{
        audioElement.pause();
        gifid.style.opacity=0;
        masterPlay.classList.add("fa-circle-play");
        masterPlay.classList.remove("fa-circle-pause");
    }
})

//Event 
audioElement.addEventListener('timeupdate',()=>{
   console.log('timeupdate');
   //Update 
   progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime= myProgressBar.value*audioElement.duration/100;
    
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName("songitemPlay")).forEach((element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    })
}

Array.from(document.getElementsByClassName("songitemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);        
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");

        
        audioElement.src=`song/Music${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].SongName;

        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gifid.style.opacity=1;
    })
})
document.getElementById("next").addEventListener('click',()=>{
    if(songIndex>6){
        songIndex=0;

    }
    else{
    songIndex+=1;
  
    }
    masterSongName.innerText=songs[songIndex].SongName;

    audioElement.src=`song/Music${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gifid.style.opacity=1;
})


document.getElementById("previous").addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
        

    }
    else{
        songIndex-=1;
    }
    masterSongName.innerText=songs[songIndex].SongName;
    audioElement.src=`song/Music${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gifid.style.opacity=1;
})