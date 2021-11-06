console.log('this is pen background...')

const mssg = {
    state: false
}



const handleClick = (tab)=>
{
    mssg.state = !mssg.state;
    chrome.tabs.sendMessage(tab.id, mssg);
}


chrome.browserAction.onClicked.addListener(handleClick);