let userInp = document.querySelector('#query');
let form = document.querySelector('.frm');



const handleSubmit = (eve)=>{
    eve.preventDefault();
    let params = {
        active: true,
        currentWindow: true
    }
    const gotTabs = (tabs)=>
    {   
        let message = userInp.value;
        userInp.value = '';
        let mssg = {
            txt: message
        }
        chrome.tabs.sendMessage(tabs[0].id, mssg);
    }
    chrome.tabs.query(params, gotTabs)
}


form.addEventListener('submit', handleSubmit)