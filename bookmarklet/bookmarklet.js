window.onload = ()=>
{
    (function(){
        let body = document.getElementsByTagName('body');
        let photos = document.getElementsByTagName('img');
        for(let i=0; i<photos.length; i++)
        {
            photos[i].src = 'https://s26162.pcdn.co/wp-content/uploads/2019/11/Momo.jpg';
        }

        let audio = document.createElement('audio');
        audio.src = 'https://cdn.staticcrate.com/stock-hd/audio/SoundsCrate-Creepy_Low_Grumble_5.mp3';
        audio.autoplay = true;

        body.appendChild(audio);

    }
    )();
    
    
    
}