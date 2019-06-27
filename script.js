//컨텐츠 페이지에 이벤트를 삽입합니다.
function addev () {
  chrome.tabs.executeScript({
    file:'./injectsrc/addEvent.js'
  });
}
//컨텐츠 페이지에 삽입된 이벤트를 제거 합니다.
function rmev(){
  chrome.tabs.executeScript({
    file:'./injectsrc/rmEvent.js'
  });
}
function selectev(){
  if(bt.className == "on"){
    addev();
  }else if(bt.className == "off"){
    rmev();
  }
}

var bt = document.getElementById('bt');
var btf = document.getElementById('bt_off');

btf.addEventListener("click", rmev);
bt.addEventListener("click", selectev);
