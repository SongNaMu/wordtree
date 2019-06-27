/*
chrome.runtime.onMessage.addListener(fucntion(message){
  if(message !== ""){
    chrome.storage.sync.set({
      word:message
    });
  }
});
*/
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse){
  console.log(message);
  sendResponse("mean : " + message);

});
