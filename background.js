var blacklist = [''];

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if(blacklist.includes(tab.url)){
    if (changeInfo.status == 'complete') {
      alert('このURLはブラックリストに登録されています。注意してください。');
    }
  }
})

