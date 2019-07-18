/*
chrome.runtime.onMessage.addListener(fucntion(message){
  if(message !== ""){
    chrome.storage.sync.set({
      word:message
    });
  }
});
*/
var word;

//ajax------------------------------------------
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = callbackfunc;
function callbackfunc(){
  if(xhr.readyState === 4 && xhr.status === 200){
    console.log("recieve");
    word = xhr.responseText;
    console.log(word);
    sendResponse("word");
  }
}
//xhr.open("GET", encodeURI("http://52.79.241.210/extention?word=" + message), true);
//xhr.send();
//--------------------------------------

// 컨텐츠 스크립트까라 메시지가 왔을 때 서버로 요청을 보내고 response를 컨텐츠스크립트로 보내준다.
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse){
  console.log("from content = " + message);
    fetch("http://52.79.241.210/extention?word=" + message)
    .then(response => response.text())
    .then(function(text){
      console.log(text);
      word = text;
      sendResponse(word);
    });
    return true;
/*
  fetch("http://52.79.241.210/extention?word=" + message).then(function(res){
    if(res.status === 200 || res.status === 201){
      sendResponse(res.text());
      //console.log(res.text());
    }else{
      console.error(res.statusText);
    }
  });*/
  //sendResponse("word");
});

//크롬 익스텐션이 처음 설치 됬을때, 업데이트 됬을때  크롬이 업데이트 되었을 때
//크롬스토리지(익스텐션 설정파일)이 있는지 확인하고 없으면 생성
chrome.runtime.onInstalled.addListener(function (){

});

//크롬스토리지 확인
chrome.storage.sync.get("wordtree_mode", function(data){
  console.log(data);
  if(data.wordtree_mode == "1"){
    console.log("mode = 1");
  }
});
