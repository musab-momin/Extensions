console.log('content is ready to go');

let paras = document.getElementsByTagName('p');

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    for(elt of paras)
    {
        elt.innerHTML = request.txt;
    }
})