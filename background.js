// var blacklist = [''];
var blacklist = ['www.binance.com']; // TODO: replace real blacklist

function hostname(url) {
  var hostname;
  //find & remove protocol (http, ftp, etc.) and get hostname
  if (url.indexOf("://") > -1) {
      hostname = url.split('/')[2];
  }
  else {
      hostname = url.split('/')[0];
  }
  //find & remove port number
  hostname = hostname.split(':')[0];
  //find & remove "?"
  hostname = hostname.split('?')[0];
  return hostname;
}

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  var tab_url_host = hostname(tab.url);
  if(blacklist.includes(tab_url_host)){
    if (changeInfo.status == 'complete') {
      alert(tab_url_host + 'はブラックリストに登録されています。注意してください。');
    }
  }
})

