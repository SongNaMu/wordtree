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



document.onmouseup = function(){

  var div = document.createElement('div');
  div.style.position = 'fixed';
  div.style.top = 400; //window.event.clientY;
  div.style.left = 400;//window.event.clientX;
  div.style.backgroundColor = "black";
  div.textContent = '';
  div.id = "txtconsole";
  document.body.appendChild(div);

  getDragText();
  div.innerHTML = selectTxt;
  console.log(selectTxt);
  alert(selectTxt);

}
document.onmousedown = function(){
  if(document.getElementById("txtconsole")){
    var div = document.getElementById("txtconsole");
    document.body.removeChild(div);
  }
}
