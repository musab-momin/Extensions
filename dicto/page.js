let ans = document.querySelector('.ans');



//getting selected word from content.js
chrome.runtime.onMessage.addListener(reciver);

function reciver(request, response, sendResponse){
    console.log('gets called');
    console.log(request);

}