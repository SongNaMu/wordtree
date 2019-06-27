var selectTxt;

function getDragText(){
  if(document.getSelection){
    selectTxt = document.getSelection();
    //alert("1");
  }else if(document.selection){
    selectTxt = document.selection.createRange().txt;
    //alert("2");
  }
  //return selectTxt;
}



document.onmouseup = function mktooltip(){
  if(selectTxt !== ""){
    var div = document.createElement('div');
    div.style.position = 'fixed';
    div.style.top = window.event.clientY + "px";
    div.style.left = window.event.clientX + "px";
    div.style.backgroundColor = "yellow";
    div.style.zIndex="999";
    div.textContent = '';
    div.id = "txtconsole";
    document.body.appendChild(div);

    getDragText();

    console.log(selectTxt.toString());
    chrome.runtime.sendMessage(selectTxt.toString(), function(rep){
      console.log(rep);
      div.innerHTML = rep;
    });
    //alert(selectTxt);
  }


}
document.onmousedown = function(){
  if(document.getElementById("txtconsole")){
    var div = document.getElementById("txtconsole");
    document.body.removeChild(div);

  }
}
