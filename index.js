
async function getsong(){
let song=await fetch('complete spotify\songlist');
let songs=await song.json();
console.log(songs);
}
getsong();
