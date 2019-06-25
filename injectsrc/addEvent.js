var selectTxt;

function getDragText(){
  if(document.getSelection){
    selectTxt = document.getSelection();
  }else if(document.selection){
    selectTxt = document.selection.createRange().txt;
  }
}

var div = document.createElement('div');
div.style.position = 'fixed';
div.style.top = 0;
div.style.right = 0;
div.textContent = '';
div.id = "txtconsole";
document.body.appendChild(div);

document.onmouseup = function(){
  document.getElementById("txtconsole");

}
