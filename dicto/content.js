
const selectedContent = ()=>
{
    let selectedText = window.getSelection().toString();
    if(selectedText.length > 0){
        console.log(selectedText);
        let message = {
            txt: selectedText
        }
        chrome.runtime.sendMessage(message);
    }
}


window.addEventListener('mouseup', selectedContent);

