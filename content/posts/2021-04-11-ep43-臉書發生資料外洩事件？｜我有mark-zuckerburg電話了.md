---
template: post
title: EP43 -臉書發生資料外洩事件？｜我有Mark Zuckerburg電話了?!
slug: ep43_553m_facebook_user_info_published_online
socialImage: /media/ep43_cover.jpeg
draft: false
date: 2021-04-11T20:30:38.793Z
description: 臉書在四月初的時候傳出發生資料外洩，事實上這件事並不太能算是一起資料外洩，但確確實實是因為臉書的漏洞所引起事件。這次事件所包含的五億筆資料都是用戶在臉書上舊的公開資訊，被人有意搜集整理而來，甚至被做成Telegram的Bot盈利
category: Episodes
tags:
  - Facebook
  - Privacy
  - PII
  - data breach
---
## Podcast連結

* [Apple Podcast](https://podcasts.apple.com/tw/podcast/%E8%B3%87%E5%AE%89%E8%A7%A3%E5%A3%93%E7%B8%AE/id1513276667#episodeGuid=ckndnka46n9cp0a49o0sau7o0)
* [Spotify Podcast](https://open.spotify.com/episode/5yn7q8Sq6hvEVfPoyt8FRi?si=75572ffa0bc246eb)
* [Firstory Podcast](https://open.firstory.me/story/ckndnka46n9cp0a49o0sau7o0)

- - -

## 事發經過

四月三號的時候，[Alon Gal](https://twitter.com/UnderTheBreach)在Twitter上表示他發現有人在駭客論壇上分享了大量Facebook用戶的個資，而且是以很便宜到幾乎免費的價格在販售這些資訊，等於是說這五億筆Facebook用戶個資是免費被分享在這個論壇上的。

![fb_breach_alongal](/media/fb_breach_alongal.png)

事實上，這些Facebook的資料早在2019年之前就被搜集了，去年六月的時候這些資料就開始就在一些駭客論壇上流竄與被販售，有些駭客甚至開發出Telegram的Bot，把這些資料做為資料庫，讓人可以直接付費查詢特定Facebook用戶的電話號碼。

![fb_breach_raidforums](/media/fb_breach_raidforums.jpeg)

Screenshot Source: [Alon Gal's Twitter Post](https://twitter.com/UnderTheBreach/status/1349671294808285184/photo/1)

這些資料只是在最近才被公開給大家下載而已，也就是說這次公開的是算是幾年前的舊資料。

諷刺的是，包含Mark Zuckerberg在內的三位臉書創辦人的電話號碼也都出現在這次事件的資料中。

### 資料來源

這些資訊是在幾年前駭客透過Facebook的一個漏洞蒐集而來的。

Facebook有一個功能是讓用戶可以匯入手機的通訊錄，透過比對電話號碼的方式看看你是不是有認識的人也在使用這個社群媒體，這個功能可以幫助新加入的用戶在這個社群媒體上快速的找到自己認識的人。

駭客發現Facebook的這個功能有漏洞，可以透過這個方式查詢任何一個手機號碼對應的Facebook帳號。他們寫一些程式，透過自動化的方式去查詢所有大量的電話號碼，接著把Facebook回傳的這些用戶資料搜集並整理起來，變成現在大家所知道這次事件的五億筆資料。

公開的資料庫中包含了電話、姓名、性別、所在的城市、工作以及Email。

但並不是每一筆資料都包含了剛剛提到的所有資訊，每一筆資料都一定有的是電話、姓名跟性別，剩下的就是取決於用戶公開分享了哪些內容，也就是資料庫中只包含了用戶公開分享的資訊。

在這次的事件，駭客其實沒有入侵任何Facebook的網站和系統，只是透過了Facebook的漏洞大量搜刮了用戶的公開資訊。

### Facebook官方回應

> [Facebook - The Facts on News Reports About Facebook Data](https://about.fb.com/news/2021/04/facts-on-news-reports-about-facebook-data/)
>
> [Reuters - Facebook does not plan to notify half-billion users affected by data leak](https://www.reuters.com/article/us-facebook-data-leak-idUSKBN2BU2ZY)

Facebook表示這些資料是在2017年6月到2018年4月這段時間內蒐集的。

Facebook在2019年八月的時候發現了匯入通訊錄的這個漏洞，並在不久之後就修補了漏洞，讓駭客沒有辦法繼續大量的搜刮Facebook用戶的資訊。官方強調，這次被公開的是舊資料，而且資料沒有包含任何的用戶健康資訊、財務資訊或是密碼。

Facebook發言人表示他們無法很明確的透過這些資料知道應該要通知哪些使用者，而且這些資訊已經被公開在網路上了，即使通知了用戶，也沒有辦法做出任何的補救或是改變任何事實，因此他們不打算要發出通知提醒受到這次事件影響的用戶。

## 我有沒有在這五億人之中？

大家可以去之前跟大家介紹過的資料外洩網站Have I Been Pwned查詢。

>  網站連結：<https://haveibeenpwned.com/>

這個網站過去都只能查詢自己的帳號跟密碼有沒有出現在資料外洩中，但網站的作者[Troy Hunt](https://www.troyhunt.com/)在這次Facebook的事件以後，在網站上增加了查詢電話號碼的功能。

在查詢自己的電話的時候記得要加上國碼，台灣的手機的話就會是要加上886

舉例來說，如果手機號碼是0987654321的話，我們要把第一個數字0去掉，換成886，也就是變成886987654321，這樣才能夠正確的查詢自己有沒有出現在這次的事件中。

## 舊資料就不重要？

這次的事件又再一次的把Facebook和其他社群媒體，以及個資隱私等等的相關議題搬上檯面。

雖然Facebook官方表示，這次事件的資訊是舊資訊，但實際上對於許多資訊來說，並沒有所謂的新舊的問題。

大部分的人都不會一直改名字，手機號碼也通常不能說換就換，更別說是地址或是所在城市了。即便這次的資料是在兩三年前蒐集來的，其中的很多資訊應該都還是正確的，也就是說如果壞人取得了這些資訊，並拿他們來做一些非法的事情，那麼他們還是有辦法影響到許多人的。

### 一但外流就無法挽回的個資

我曾經聽到不少人說過，他們覺得自己不是什麼有名或是很有錢的人，壞人拿到了他們的個資跟其他資訊也沒有辦法做什麼事，因為這樣，他們會懶得去保護自己的個資。對於個資和隱私，每個人會有不同的衡量標準，因此大家有不同的處理和應對方式是很合理的。

但對於個資這類型的資訊，**很多的個資都是一輩子不會變的，只要你的個資外流或是被公佈在網路上你是沒有任何辦法可以改變或是挽回的**。

即使你現在可能覺得這些資料沒什麼大不了的，但如果未來你想法改變想要開始保護自己的個資時，你的個資已經外流被分享在網路上的話，一切都來不及了。如果不希望這樣的事情發生在自己身上的話，我們就會需要越早開始保護自己的資料越好，不然等到我們的資訊已經外流了以後才想保護的話就來不及了。

### 手機號碼＆網路身份

以現在各種網路服務或是App的現況來看，我們的手機號碼與我們在網路上使用的身份，這兩者之間的連結有越來越深的趨勢。在使用新的軟體服務，要建立一個新的帳號的時候，我們很常會被要求提供電話號碼來作為身份驗證以及某種程度上的實名認證，把手機簡訊作為雙因素認證或是密碼重設的驗證機制也是很常見的做法。

當我們有越來越多帳號都有綁定我們的手機號碼的時候，手機號碼對我們來說的重要性也就越來越高，他也就需要越多的保護和重視。

>  複習：[EP28 - 你還在用手機收簡訊驗證碼嗎？](/posts/ep28_why_you_shouldnt_use_sms_as_2FA)

### 社群媒體上公開的資訊

想要保護好自己的個資，在使用像是Facebook、社群媒體時就要特別注意公開分享的資訊，這次的事件就是一個很好的例子可以用來作為警惕。

這次除了Facebook通訊錄匯入功能上的漏洞以外，會可以成功搜尋到那麼多人的資訊還有一個原因就是大家公開了自己的資訊。除了開放讓任何人都可以透過電話加自己好友以外，還公開了自己所在的城市、工作和Email。

如果我們在檢查自己的隱私設定的時候，可以將沒有必要公開的資訊都設成私人或是只有朋友看得到的話，即使類似的事情再一次的發生了，我們也就不會被抓取那麼多資料，受到那麼大的影響。

### Facebook 隱私設定檢查

> 官方說明：[隱私設定檢查是什麼？如何在 Facebook 找到這項功能？](https://www.facebook.com/help/www/443357099140264)

這個工具把Facebook上比較重要的一些隱私設定分成了五個類別，把這五個類別的項目設定都檢查過一遍的話，我們會對於自己在Facebook上的分享了哪些資訊會比較了解。

這邊特別提醒大家一下Facebook上手機號碼的部分，除了在個人頁面上可以選擇要不要顯示自己的手機號碼以外，還有另外一個設定是決定其他人可以在 Facebook 上找到你的方式，這個設定會決定別人可不可以透過手機號碼或是Email找到你，以及設定要不要讓Google或是Yahoo這些搜尋引擎可以找到你的帳號。

> 官方說明：[如何控制誰可以使用我的電子郵件或手機號碼在 Facebook 上搜尋我？](https://www.facebook.com/help/131297846947406/)

如果想要讓自己公開的資訊最小化的話，這些設定要記得去做修改。

### 下載你的Facebook資訊

這是一個在幾年前因應法規要求所推出的功能，透過這個功能我們可以向Facebook要求下載一份自己在Facebook上所有資料的副本。

> 官方說明：[如何下載我的 Facebook 資訊？](https://www.facebook.com/help/212802592074644/)

除了利用這個功能備份我們在Facebook上的資料，我們還可以利用下載來的資料看看Facebook搜集了哪些資訊。我們可以透過這個功能看看Facebook所搜集的我們的資訊，回頭檢視一下在防護上有沒有可以做得更好的地方。

我相信大部分的人在下載了自己的資訊以後會被Facebook蒐集的資料數嚇到，以我自己來說，我的Facebook資訊有超過10GB，裡面的資訊包含了我使用Facebook超過十年的過中按過的每一個讚，傳送過的每一則訊息，所有曾經用過的IP地址等等的資訊都鉅細彌遺列在裡面。

### 我的資料也被公開了怎麼辦？

檢查一下自己在Facebook上公開的資訊，把一些沒有必要公開給所有人的資料刪掉或是改成分享給朋友就好，避免未來類似的事情再次發生時又有過多的資訊公開在外。

多注意社交工程或是詐騙，當駭客取得了我們的這些個資以後，可能會利用這些資訊來對你進行釣魚攻擊或是詐騙，因此要更加小心。

## 相關新聞與資料來源

* [The Facts on News Reports About Facebook Data](https://about.fb.com/news/2021/04/facts-on-news-reports-about-facebook-data/)
* [Reuters - Facebook does not plan to notify half-billion users affected by data leak](https://www.reuters.com/article/us-facebook-data-leak-idUSKBN2BU2ZY)
* [Krebs On Security - Are You One of the 533M People Who Got Facebooked?](https://krebsonsecurity.com/2021/04/are-you-one-of-the-533m-people-who-got-facebooked/)
* [Troy Hunt - The Facebook Phone Numbers Are Now Searchable in Have I Been Pwned](https://www.troyhunt.com/the-facebook-phone-numbers-are-now-searchable-in-have-i-been-pwned/)
* [iThome - 臉書再傳超過5億用戶個資外洩，內有73萬名臺灣用戶](https://www.ithome.com.tw/news/143631)
* [iThome - 臉書：資料外洩為網頁抓取，非被駭](https://www.ithome.com.tw/news/143702)
* [iThome - 歐盟將調查臉書5.3億用戶資料外洩](https://www.ithome.com.tw/news/143664)