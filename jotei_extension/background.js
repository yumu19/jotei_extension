chrome.browserAction.onClicked.addListener(
	jotei
);

function jotei() {
	var replace = []

    replace.push("document.body.innerHTML=document.body.innerHTML.replace('スタートアップコミュニティの行方','第44回情報科学若手の会に参加してきました')");

	replace.push("document.body.innerHTML=document.body.innerHTML.replace(/奥田浩美/g,'yamashitam')");
    replace.push("document.body.innerHTML=document.body.innerHTML.replace(/スタートアップ/g,'プログラミング')");
    replace.push("document.head.innerHTML=document.head.innerHTML.replace(/奥田浩美/g,'yamashitam')");
    replace.push("document.head.innerHTML=document.head.innerHTML.replace(/スタートアップ/g,'プログラミング')");
    replace.push("document.body.innerHTML=document.body.innerHTML.replace(/起業家/g,'プログラマ')");
    replace.push("document.body.innerHTML=document.body.innerHTML.replace(/娘/g,'兄')");

    replace.push("document.body.innerHTML=document.body.innerHTML.replace('奥田','山下')");
    replace.push("document.body.innerHTML=document.body.innerHTML.replace('株式会社ウィズグループ','明治大学')");
    replace.push("document.body.innerHTML=document.body.innerHTML.replace('TechWave本田氏','明治大学宮下氏')");
    replace.push("document.body.innerHTML=document.body.innerHTML.replace('TechWave','宮下氏')");
    replace.push("document.body.innerHTML=document.body.innerHTML.replace('中学生','大学生')");
    replace.push("document.body.innerHTML=document.body.innerHTML.replace('イベントコーディネーター','女子大学院生')");
    replace.push("document.body.innerHTML=document.body.innerHTML.replace('NFC','情報処理学会プログラミングシンポジウム')");
    replace.push("document.body.innerHTML=document.body.innerHTML.replace('NFC LAB','情報科学若手の会')");
    replace.push("document.body.innerHTML=document.body.innerHTML.replace('イベントアドバイザー','幹事')");
    replace.push("document.body.innerHTML=document.body.innerHTML.replace('StartupDigest','ICPC')");
    replace.push("document.body.innerHTML=document.body.innerHTML.replace('2010年1月','2008年')");
    replace.push("document.body.innerHTML=document.body.innerHTML.replace('をキュレーションする活動','')");

    replace.push("document.body.innerHTML=document.body.innerHTML.replace('http://techwave.jp/archives/51722833.html','http://togetter.com/li/417761')");
    replace.push("document.body.innerHTML=document.body.innerHTML.replace('http://okudawiz.jimdo.com/2012/01/02/20120102/','http://d.hatena.ne.jp/yamashi_tam/20110919/p1')");
    replace.push("document.body.innerHTML=document.body.innerHTML.replace('http://lab-nfc.com','http://wakate.org')");
    replace.push("document.body.innerHTML=document.body.innerHTML.replace('http://startupdigest.com/curator/hiromi-okuda/','http://d.hatena.ne.jp/yamashi_tam/20110629/p1')");

    replace.push("document.getElementsByTagName(\"img\")[1].src=\"https://secure.gravatar.com/avatar/ef6112269f73d3f9100853e23746b443?s=420&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png\"");
    replace.push("document.getElementsByTagName(\"img\")[2].src=\"http://twitpic.com/show/large/an2kct.jpg\"");
    replace.push("document.getElementsByTagName(\"img\")[3].src=\"http://twitpic.com/show/large/an2jvr.jpg\"");

    for (var i = 0; i< replace.length; i++) {
	 	chrome.tabs.executeScript(null, {code: replace[i]});
    }
}
