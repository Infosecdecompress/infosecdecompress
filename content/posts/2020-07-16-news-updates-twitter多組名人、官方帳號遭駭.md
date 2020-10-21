---
template: post
title: Twitter多組名人、官方帳號遭駭
slug: newsupdates_twitter_hacked_phishing_incident
socialImage: /media/twitter_cover.jpg
draft: false
date: 2020-07-16T02:06:20.366Z
description: |-
  [2020/07/15 23:30 CDT Update: 新增Twitter官方回覆]  
  Twitter在台灣凌晨四點左右，多組名人帳密被盜，攻擊者利用這些帳號散播釣魚內容。
category: NewsUpdates
tags:
  - news updates
  - twitter
  - phishing
---
![](/media/twitter_cover.jpg)

## 事發

Twitter在台灣凌晨四點(美西時間7/15 下午四點左右)，多組名人和官方帳密被盜，攻擊者利用這些帳號散播釣魚內容。受影響的帳號包含美國前總統歐巴馬(Barack Obama)、特斯拉創辦人伊隆馬斯克(Elon Musk)、比爾蓋茲(Bill Gates)、Apple官方推特等等。

![](/media/twitter_hacked_obama.jpg)

![](/media/twitter_hacked_elon.jpg)

![](/media/twitter_billgates.jpg)

![](/media/twitter_hacked_apple.jpg)

推文的內容皆類似，大致翻譯為：

> 今天心情好想要回饋社會，任何付我比特幣的人我都會回送雙倍的金額。你給我$1000，我就還你$2000。 \
> 比特幣地址：ooooxxxxx.... \
> 只有30分鐘噢！

根據比特幣鏈上的紀錄，已有363位人士上當，傳送比特幣到詐騙的地址，總計金額超過$118,000美金。

![](/media/twitter_hacked_btcrecord.png)

目前事發的原因尚不明確，有的人表示自己有使用多重驗證機制，帳號仍遭駭，因此在我看來不像是單純的帳密被盜或是[帳號填充攻擊](posts/ep3-why-does-password-has-to-be-so-complicated/#帳密填充攻擊-credential-stuffing)。

有人表示此次事件為Twitter內部員工遭駭，駭客利用員工的權限來在那些名人帳號上發文，但此聞**尚未被證實，還只是謠言。**

![](/media/twitter_hacked_rumor.jpg)

## 現況

Twitter正在調查事情事發，目前已關閉推文、重設密碼等部分功能避免事件持續擴大。

![](/media/twitter_hacked_official.jpg)

## 我們的想法

我們可以看到這次事件中攻擊者利用[社交工程](/posts/ep5-the-greatest-vulnerability-is-you-and-me)中的[熟悉性和急迫性](/posts/ep5-the-greatest-vulnerability-is-you-and-me#%E7%A4%BE%E4%BA%A4%E5%B7%A5%E7%A8%8B%E7%9A%84%E6%94%BB%E6%93%8A%E5%88%87%E5%85%A5%E9%BB%9E)，瞄準人性的貪婪進行詐騙。

就像之前提過的，太美好的事情往往不會是真的，看到這種大放送的內容時要多想兩下。我們無法阻止駭客入侵別人的系統或是盜別人的帳號，但我們可以學著不落入駭客的圈套和騙局中。

## Update: Twitter 官方回覆(2020/07/15 23:30 CDT)

Twitter 官方已證實，員工內部帳號遭駭是造成這次事件的原因。

攻擊者針對Twitter內特定員工進行社交攻擊。並在取得員工權限後，利用內部系統和工具於名人的帳號發文。

Twitter會持續鎖住受影響的帳號直到確定威脅都已排除。於此同時，Twitter 也會大幅限制內部工具的存取權限。

![](/media/twitter_hacked_response.jpg)

## 資料/新聞來源

* 詐騙地址的區塊練紀錄 - [Blockchain.com](<* https://www.blockchain.com/btc/address/bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh>) 
* [Twitter Support](https://twitter.com/TwitterSupport)
* [ZDNet - Twitter accounts of Elon Musk, Bill Gates and others hijacked to promote crypto scam](https://www.zdnet.com/article/twitter-accounts-of-elon-musk-bill-gates-and-others-hijacked-to-promote-crypto-scam/)