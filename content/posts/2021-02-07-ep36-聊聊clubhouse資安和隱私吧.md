---
template: post
title: EP36 - 聊聊Clubhouse資安和隱私吧
slug: ep36_clubhouse_security_and_privacy
socialImage: /media/ep36_cover.png
draft: false
date: 2021-02-07T21:06:21.148Z
description: 前一個禮拜Clubhouse爆紅，大家爭先恐後的索取邀請碼想加入這個平台，我們也在得到邀請碼後，花了不少時間在上面。相信大家對於Clubhouse的出現與使用心得都有非常多不同見解，我們不會在這個部分多加著墨，主要還是想和大家聊聊資安與隱私層面的問題
category: Episodes
tags:
  - Clubhouse
  - Agora
  - E2EE
  - privacy
---
## Podcast連結

* [Apple Podcast](https://podcasts.apple.com/tw/podcast/%E8%B3%87%E5%AE%89%E8%A7%A3%E5%A3%93%E7%B8%AE/id1513276667#episodeGuid=ckkvn9kysvre00898xp3borok)
* [Spotify Podcast](https://open.spotify.com/episode/5CAfeFeg2udn6QA7fFa7Ml?si=TnPmkpRnTF-6WZ4AXzd2nw)
* [Firstory Podcast](https://open.firstory.me/story/ckkvn9kysvre00898xp3borok)

- - -

### Clubhouse 是什麼？

[Clubhouse](https://www.joinclubhouse.com/)是在去年四月推出，由聲音為主的社交軟體

在這個平台上，任何人都可以建立一個房間並開放其他人加入，在房間裡會有三個角色：

* 管理員：可以作為主持人講話以外，還有權力邀請聽眾成為主持人或是拿回麥克風把主持人變回聽眾
* 主持人：在房間裡面可以發言講話的角色
* 聽眾：聽主持人講話，也可以舉手讓管理員知道你想要發言

### Clubhouse會突然爆紅的原因

**邀請制**

想要使用Clubhouse你必須要邀請函，而每個使用者在加入以後也只會有兩個邀請函可以邀請他人

這樣稀有性讓大家都更想要拿到湊熱鬧的入場券，之前還聽說過一張邀請函賣到6000台幣

**透過聲音拉近了人與人的距離**

比起Facebook、Instagram或是PTT這些社交平台的文字和圖片內容，聲音是一個更有溫度也更直接的媒介

跟YouTube或是Podcast相比，Clubhouse多了可以邀請聽眾上來與主持人對話的管道，因此這個過程不會是單方向的資訊傳遞，而是有交流與討論的

**名人的加持**

近期從國外的名人像是特斯拉的老闆Elon Musk、Facebook創辦人Mark Zuckerberg和日本的波多野結衣，到台灣許多的藝人名人和網紅都在使用Clubhouse

Clubhouse的特性讓使用者可以聽到這些名人的對談與討論，甚至舉個手就有機會與這些名人直接對談，這個使用體驗大大地縮短了我們與名人間的距離感，因此當大量的名人在使用Clubhouse時就連帶的帶來了許多的用戶

### Clubhouse的隱私和安全性

Clubhouse在隱私上的疑慮：

* 你必須要使用你的電話號碼建立帳號
* 如果你想要提供邀請碼邀請其他人的話，你需要讓Clubhouse讀取你的手機通訊錄，透過通訊錄裡面的聯絡人來邀請他人
* 你也可以透過你的通訊錄，找到其他也在用Clubhouse的人，並追蹤他們
* 帳號資訊會是公開的，你可以看得到任何人的資訊並追蹤他們
* 任何人都可以看到你放在上面的資訊，而且任何人都可以追蹤你
* 你沒有辦法拒絕別人的追蹤，也沒有辦法把自己的帳號設為私密的
* 你也沒有辦法刪除你的帳號

**這些設計背後的出發點：**

在參加Clubhouse創辦人之一Paul Davison的幾個分享和歡迎會，聽過他的想法以後，發現其實這些是故意而且可以理解的

他們創立Clubhouse的目的就是要讓所有人的聲音都可以被聽見，讓所有人都可以互相交流與分享自己的想法

比起Facebook、Instagram這種讓你與朋友私密交流的平台，Clubhouse更像是一個公開的舞台讓你說的話有機會被所有人聽見

因此他們才會這樣設計這個APP，讓所有人的資訊都是公開可以被彼此看見的

### Clubhouse會錄音嗎？

[官方的條款和說明中](https://www.notion.so/Privacy-Policy-cd4b415950204a46819478b31f6ce14f)有提到，當有人檢舉一個聊天室的時候，他們會暫時的保存這個聊天室的錄音，並檢查聊天內容有沒有違反的規定

他們有強調這個錄音是有被加密的，而且只會暫時保存，在調查過後這些檔案就會被刪除了

![Clubhouse_communityguideline](/media/clubhouse_communityguideline.png)

他們也有提到，當有人檢舉一個正在進行的聊天室的話他們才會有錄音，如果是在聊天室結束後才被人檢舉的話，他們是拿不到錄音的，因此看起來像是Clubhouse不會保存用戶聊天的錄音

但是對於使用的是哪種加密方式，或是他們提到會暫時保存的”暫時”具體上是多久等等的許多比較細節和實際上的資訊我們都不了解

### 背後的中國技術 - Agora

除了上述的因素以外，很多人都在謠傳Clubhouse背後是中資，**這是錯誤的資訊**

Clubhouse背後所使用的技術是來自一家中國科技公司Agora，雖然說雙方都沒有公開說明或是承認這件事，但有[網友去研究Clubhouse的App有使用哪些Framework](https://denkeni.medium.com/whats-in-the-clubhouse-ios-app-1c9d5ec6117)的時候有看到Agora在其中，而我在測試Clubhouse的時候也有注意到他會連到以下Agora的網域，因此Clubhouse有使用Agora這件事應該是事實

```
vocs1[.]agora[.]io
ap3[.]agora[.]io
ap5[.]agora[.]ioa
p4[.]agora[.]io
ap[.]agoraio[.]cn
report-edge[.]agora[.]io
vocs2[.]agora[.]io
```

但使用來自中國公司的技術和是由中國資助的公司是不同的，這就像蘋果的iPhone使用了台積電的晶片，但不會被說是台資一樣

在評斷Clubhouse和Agora倒底是不是安全的以前我們應該要先了解一下Agora以及他和Clubhouse的關係

### Agora聲網

Agora主要在做的是即時通訊技術，也就是當我們在視訊或是透過網路講電話的時候，負責處理和傳遞影像聲音的技術

這個技術在現在，尤其是疫情之下，是十分重要需求也很高的

不僅是社交平台會用到，就連遠距教學、遠端工作、視訊會議都是需要這項技術的

Clubhouse就是使用了Agora的即時通訊技術來實現他們的語音聊天功能的

### Agora的疑慮

主要的原因就是它與中國的關聯

Agora的兩位創辦人都是中國人，而且以Agora[2020第三季的營收](https://finance.yahoo.com/news/edited-transcript-api-oq-earnings-010000294.html)來看，他們有約80%的營收來自中國的市場，因此他們可以說是跟中國有很緊密的關係

除了即時通訊相關的技術以外，Agora還有提供語音審查的服務，也就是針對語音的言論審查

套一句他們[官網上的介紹](<https://docs.agora.io/cn/Aliyun Audio Moderation/landing-page?platform=RESTful>)，你可以使用智能語音審核對音頻內容進行多樣化場景檢測，幫助你對內容進行管控，規避內容違規風險

有趣的是，Agora英文版的官網上並沒有列出他們有這些語音審查的功能，只有在中文版的網頁上有寫到

從這些資訊來看，不難看出台灣的大家為什麼會對Clubhouse使用Agora服務這件事這麼敏感和關注了

### Agora技術面探討

我沒有實際使用Agora的經驗，但根據[Agora官方提供的說明](<https://docs.agora.io/en/Interactive Broadcast/channel_encryption_apple?platform=iOS>)，使用他們服務的時候，是可以選擇使用類似點對點加密的保護措施的

也就是我們的語音資訊會在我們的手機上先被加密，透過Clubhouse以及Agora的技術傳到對方的手機上後再被解密

![Clubhouse_agoraencryption](/media/clubhouse_agoraencryption.png)

（圖片來源：[Agora 開發者中心](<https://docs.agora.io/cn/Interactive Broadcast/channel_encryption_apple?platform=iOS>)）

而且也沒有一定要使用Agora提供的加密方式，Clubhouse可以使用自己的加密方法來保護使用者的資訊

這個過程如果有正確的被實作的話是可以避免中間的Agora讀取到我們的語音對話的

但Clubhouse到底有沒有加密我們的對話、有的話他們是使用了哪種加密方法、這個加密方法夠不夠安全等等的這些問題都會需要等Clubhouse跳出來解釋和提供相關資訊，官方目前也沒有提供任何關於這方便的資訊

### Clubhouse的現況

從上面的資訊可以發現對於Clubhouse我們還有許多的事情不了解，畢竟他還算是一個滿新的App，沒有很成熟，使用上我也覺得還有不少東西可以被改進 考量到他是個公開和分享為主要核心的社交平台，在上面的語音內容都是半公開的狀況下，我不會拿審核一般聊天軟體的標準來看他，畢竟在上面發表言論的時候，任何人都有辦法加入你所在的聊天室聽你說話

再加上同一個房間內的人都有辦法透過不同的方式把你的發言錄下來的，因此我不會在這個平台上討論太私密或是不能公開的內容的

雖然說這個平台也有一對一的私密聊天功能，但我的想法會是，如果只是要私密聊天的話使用我們平常在使用，我們可以確保安全的聊天軟體就好了，沒有必要用Clubhouse

在使用Clubhouse快一個禮拜以後，我覺得上面有滿多很深入的討論和對話，使用者的素質也相對比較高

即便是在討論兩岸議題這種很敏感話題的房間裡，我也沒有看到攻擊性的言論，這點是讓我滿驚訝也看到這個平台價值的

相對的他也讓人很沈迷，可以說是把FOMO (Fear of missing out害怕錯過) 這個現象展現的很極致，總覺得別人會在我沒在使用時討論很有意義的事情，就會忍不住會想要一直打開Clubhouse看看別人在幹嘛，可以說是很有魔力

Clubhouse的創辦人也提到，他們會在未來加入不少新功能，這包含一些不同的付費和贊助機制來支持創作者，這些功能在未來會不會改變Clubhouse既有的生態會是需要我們在未來繼續觀察才能知道的事情