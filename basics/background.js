console.log('background script is running');

const handleClicked = (tab)=>
{
    const msg = {
        txt: 'hello'
    }
    chrome.tabs.sendMessage(tab.id, msg)
}



chrome.browserAction.onClicked.addListener(handleClicked);
