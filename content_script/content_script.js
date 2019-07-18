//페이지가 load될때마다 크롬스토리지에서 현재 무슨 모드인지 확인후
//모드에 활성화
function mode_setting(){
  chrome.storage.sync.get("wordtree_mode", function(data){
    if(data.wordtree_mode == "1"){

      console.log("드래그 모드 입니다.");
      document.onmouseup = mktooltip;


    }else{ //더블 클릭 모드
      console.log("더블 클릭 모드 입니다.");
      document.onmouseup="";
      document.ondblclick = mktooltip;
    }
  });
}


var selectTxt;
var interval_check_mode;
interval_check_mode = setInterval(mode_setting, "1000")


//드래그한 텍스트를 selectTxt변수에 담기
function getDragText(){
  if(document.getSelection){
    selectTxt = document.getSelection();
  }else if(document.selection){
    selectTxt = document.selection.createRange().txt;
  }
}

//마우스 누를때 txtconsole 닫기
document.onmousedown = function(){
  if(document.getElementById("txtconsole")){
    var div = document.getElementById("txtconsole");
    document.body.removeChild(div);
    selectTxt = "";
  }
}

//툴팁만들기
function mktooltip(){

  getDragText();

  if(selectTxt.toString() !== ""){
    var div = document.createElement('div');
    div.style.position = 'fixed';
    div.style.top = window.event.clientY + "px";
    div.style.left = window.event.clientX + "px";
    div.style.backgroundColor = "yellow";
    div.style.zIndex="999";
    div.textContent = '';
    div.id = "txtconsole";
    document.body.appendChild(div);


//백그라운드 스크립트에 드래그한 단어 보내기
    console.log("drag : \"" + selectTxt + "\"");
    chrome.runtime.sendMessage(selectTxt.toString(), function(rep){
      console.log("response : " + rep);
      div.innerHTML = rep;
    });
    //alert(selectTxt);
  }
}
