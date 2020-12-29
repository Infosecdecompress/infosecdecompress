---
template: post
title: Zoom 資安事件追蹤
slug: newsupdates_zoom
socialImage: /media/zoom_cover.jpg
draft: false
date: 2020-06-15T11:04:02.777Z
description: |-
  [2020.06.17 Update Zoom的最新公告 ]  
  前陣子吵得沸沸揚揚的Zoom爭議事件，最近又因為六四紀念事件重新引起關注，我們簡單整理了一下發生了什麼事，一起來了解一下吧～
category: NewsUpdates
tags:
  - Zoom
  - E2EE
  - privacy
---
![](/media/zoom_cover.jpg)

## 前情提要 - 先前的爭議

**Zoom 誇大自己的安全性**

* 號稱所有服務皆使用[點對點加密](/posts/ep4-do-we-need-vpn#end-to-end-encryption-點對點加密)，實際上視訊與音訊並沒有 (新聞連結：[The Intercept](https://theintercept.com/2020/03/31/zoom-meeting-encryption/))
* 號稱使用AES-256加密法，實際上只使用了較弱的AES-128加密法 (新聞連結：[](https://www.ithome.com.tw/news/136762)[Citizen Lab](https://citizenlab.ca/2020/04/move-fast-roll-your-own-crypto-a-quick-look-at-the-confidentiality-of-zoom-meetings/))

**個資和隱私問題**

* 未告知用戶便向Facebook傳送用戶數據 (新聞連結：[](https://www.ithome.com.tw/news/136648)[Vice](https://www.vice.com/en_us/article/k7e599/zoom-ios-app-sends-data-to-facebook-even-if-you-dont-have-a-facebook-account))。
* 透過中國伺服器傳送資訊，即便通話雙方都在北美洲 (新聞連結：[](https://www.ithome.com.tw/news/136762)[Citizen Lab](https://citizenlab.ca/2020/04/move-fast-roll-your-own-crypto-a-quick-look-at-the-confidentiality-of-zoom-meetings/))

**陌生人亂入視訊會議，引起FBI警告**

會議預設為無密碼且會議ID簡單，讓有心人士可輕易購過自動化工具找到規則並亂入 (新聞連結：[](https://www.ithome.com.tw/news/136668)[FBI ](https://www.fbi.gov/contact-us/field-offices/boston/news/press-releases/fbi-warns-of-teleconferencing-and-online-classroom-hijacking-during-covid-19-pandemic))

## 爭議後續 - Zoom的改善與回應

**CEO出面道歉** 2020 4月初

Zoom宣布實施90天資安計畫\
暫停所有新功能開發，優先改善資訊安全與隱私

新聞連結：[Business Insider - Zoom's CEO apologizes for its many security issues as daily users balloon to 200 million](https://www.businessinsider.com/zoom-ceo-sorry-privacy-security-2020-4)。

**Zoom 5.0 發布** 2020 4月底

* 改用較好的加密法 (AES-256 + GCM加密)
* 在視訊與音訊推出[點對點加密](/posts/ep4-do-we-need-vpn#end-to-end-encryption-點對點加密)
* 允許使用者選擇資料傳送的伺服器位置
* 改善會議流程安全性

  * 會議預設為需要使用密碼加入
  * 參加者須在等候室等待主持人同意才能加入會議
  * 主持人可以回報違規用戶給Zoom加以審查

Zoom 發行公告：[Zoom 5.0 is here!](https://zoom.us/docs/en-us/zoom-v5-0.html)

## 近期爭議

**Zoom公開表明會與政府機關分享用戶資訊**

> “Free users — for sure we don’t want to give \[them] that, because we also want to work together with the FBI, with local law enforcement, in case some people use Zoom for a bad purpose." - Zoom CEO Eric Yuan
>
> (翻譯) "我們想與FBI或當地政府合作，因此我們並不打算提供免費用戶依些資安功能，以防有人利用Zoom來做壞事" - Zoom CEO Eric Yuan。

新聞連結：[The Verge - Zoom says free users won’t get end-to-end encryption so FBI and police can access calls](https://www.theverge.com/2020/6/3/21279355/zoom-end-encryption-calls-fbi-police-free-users)。

**六四紀念活動遭中斷，帳戶遭封鎖**

Zoom承認在中國政府指使下，中斷兩起在Zoom上由非政府組織所舉辦的六四天安門紀念活動，並停用了數名活動發起人的帳號。  

新聞連結：[紐約時報中文網 - Zoom暫停「六四」學運領袖帳號](https://cn.nytimes.com/technology/20200612/zoom-china-tiananmen-square/zh-hant/)

## 反思

**資安對Zoom只是附加功能而非必要，有別於其他大公司做法**

對於免費用戶，Zoom非但沒有要加密傳送的訊息以保障用戶隱私和安全，還直接表明要與政府機關分享資訊。除此之外Zoom與中國政府的互動令人擔憂，身為一間美國公司，為什麼對中國政府言聽計從?

- - -

## 2020.06.17 Update

Zoom 突然宣布即將提供點對點加密給免費用戶，條件為免費用戶需要提供額外個人資訊，像是以簡訊驗證身份 ，根據Zoom的說法，這樣做是為了避免有心人士大量註冊假帳號，濫用這些功能。免費用戶的點對點加密功能將於7月開始測試。Zoom也將他們的點對點加密白皮書公開放在原始碼代管服務平台GitHub上。

以一個使用者的觀點來說，這是一個好消息，Zoom開始重視免費使用者個隱私及安全絕對是朝著對的方向前進，雖然說有點晚，但總比沒有好。

新聞連結：

* [Zoom Blog End-to-End Encryption Update](https://blog.zoom.us/wordpress/2020/06/17/end-to-end-encryption-update/)
* [iThome - Zoom政策急轉彎，免費用戶也將有全程加密，7月開始測試](https://www.ithome.com.tw/news/138310)