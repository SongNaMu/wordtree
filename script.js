function addev () {
  chrome.tabs.executeScript({
    file:'./injectsrc/addEvent.js'
  });
}

var bt = document.getElementById('bt');
bt.addEventListener("click", addev);
