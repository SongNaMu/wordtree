//크롬스토리지에서 현제 모드를 확인후 모드에 따른 버튼생성
chrome.storage.sync.get("wordtree_mode", function(data){
  console.log(data.wordtree_mode);
  if(data.wordtree_mode == "1"){
    document.getElementById("bt_mode").innerHTML = "double click mode";
  }else{
    document.getElementById("bt_mode").innerHTML = "drag mode";
  }
  document.getElementById("bt_mode").addEventListener("click", change_mode);
});

function change_mode(){
  chrome.storage.sync.get("wordtree_mode", function(data){
    console.log("current mode = " + data.wordtree_mode);
    if(data.wordtree_mode == "1"){
      chrome.storage.sync.set({"wordtree_mode": "2"});
      document.getElementById("bt_mode").innerHTML = "drag mode";
    }else{
      chrome.storage.sync.set({"wordtree_mode": "1"});
      document.getElementById("bt_mode").innerHTML = "double click mode";
    }
  });
}
