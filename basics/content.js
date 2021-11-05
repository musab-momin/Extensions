console.log('chrome extension is ready to go....');
let root = document.getElementsByTagName('body');
let photos = document.getElementsByTagName('img');
for(ele of photos)
{
    ele.src = 'https://s26162.pcdn.co/wp-content/uploads/2019/11/Momo.jpg';
}

let audio = document.createElement('audio');
audio.src = 'https://cdn.staticcrate.com/stock-hd/audio/SoundsCrate-Creepy_Low_Grumble_5.mp3';
audio.autoplay = true;



chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    console.log(request.txt);
})