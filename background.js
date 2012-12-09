//chrome.browserAction.setBadgeText({text:"100"});
// chrome.browserAction.onClicked.addListener(function(){
//   chrome.tabs.executeScript(null, {code: "document.body.style.backgroundColor='red'"});
// });

chrome.browserAction.onClicked.addListener(
	jotei
);


function jotei() {
	var replace1 = "document.body.innerHTML=document.body.innerHTML.replace(/奥田浩美/g,'yamashitam')";
    var replace2 = "document.body.innerHTML=document.body.innerHTML.replace(/奥田/g,'山下')";
    var replace3 = "document.body.innerHTML=document.body.innerHTML.replace(/スタートアップ/g,'プログラミング')";
    var replace4 = "document.body.innerHTML=document.body.innerHTML.replace('株式会社ウィズグループ','明治大学')";
    var replace5 = "document.getElementsByTagName(\"img\")[1].src=\"https://secure.gravatar.com/avatar/ef6112269f73d3f9100853e23746b443?s=420&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png\"";
    var replace6 = "document.body.innerHTML=document.body.innerHTML.replace('TechWave本田氏','明治大学宮下氏')";
 	chrome.tabs.executeScript(null, {code: replace1});
 	chrome.tabs.executeScript(null, {code: replace2});
 	chrome.tabs.executeScript(null, {code: replace3});
 	chrome.tabs.executeScript(null, {code: replace4});
	chrome.tabs.executeScript(null, {code: replace5});
	chrome.tabs.executeScript(null, {code: replace6});
// 	chrome.tabs.executeScript(null, {code: "document.images[1].src='https://twimg0-a.akamaihd.net/profile_images/2598630221/sp30zevlvgnc7ziwm3vf.jpeg')"});
 	//chrome.tabs.executeScript(null, {code: "document.body.innerHTML=document.body.innerHTML.replace('thestartup.jp/wp-content/uploads/2012/09/0a1e681af9b81a713493fd63e87f68cf.png',
 	// 	'secure.gravatar.com/avatar/ef6112269f73d3f9100853e23746b443')"});


}


// chrome.tabs.exexuteScript(null,
// 	{code:
//     "document.body.innerHTML=document.body.innerHTML.replace(/奥田/g,'yamashitam');"
// 	}

// 	);