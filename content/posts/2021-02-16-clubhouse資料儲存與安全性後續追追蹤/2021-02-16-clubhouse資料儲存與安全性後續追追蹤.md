---
template: "post"
title: Clubhouse資料儲存與安全性後續追蹤
slug: "/posts/newsupdates_clubhouse_followup"
socialImage: "/media/clubhouse_followup_cover.png"
draft: false
date: "2021-02-16T03:38:14.919Z"
description: "前幾天Stanford Internet
  Observatory就針對幾個點發表了一些他們的研究與發現，雖然沒有給出極為肯定的一些答案，大部分的問題都還是有點模糊的，但他們的發表還是把Clubhouse官方釣出來針對資料儲存與安全性給予回應"
category: "NewsUpdates"
tags:
  - Clubhouse
  - Agora
  - E2EE
  - privacy
---

![](/media/clubhouse_followup_cover.png)

## 前情提要

大家對於 Clubhouse 最擔心的不外乎是資料儲存、和中國的關係和加密這幾個面向，我們在[EP36 - 聊聊 Clubhouse 資安和隱私吧](/posts/ep36_clubhouse_security_and_privacy)也分享了一些我們的看法跟顧慮。

前幾天 Stanford Internet Observatory 的研究人員針對 Clubhouse 公布了一些他們的研究與發現

> 原文連結：\
> [Stanford Internet Observatory - Clubhouse in China: Is the data safe?](https://cyber.fsi.stanford.edu/io/news/clubhouse-china)

## 未加密的資料傳輸

### 用戶相關資訊

研究人員表示使用者在使用 Clubhouse 的過程中，像是加入一個新房間時，Clubhouse 會傳送一些未加密的純文字資訊到 Agora 的伺服器，這包含了用戶的 ID、房間的 ID 等等的資訊。

因為這些資訊是在未加密的情況下傳送的，因此網路上的任何人都有可能可以攔截這些資訊，當有心人士搜集了這些資料以後，會可以透過這些資訊知道哪些用戶正在與對方在同一個房間中對話。

### 用戶的語音內容

除了這些資料以外，研究人員也認為用戶的語音內容也是沒有使用點對點加密來保護。

根據 Agora 的開發者文件，如果使用的是 Agora 內建的加密功能的話，Agora 是可以取得加密的金鑰。要讓 Agora 無法知道使用者的語音內容的話 Clubhouse 就會需要使用自訂的加密方法，並且自行將加密用的公開金鑰傳送到所有用戶的 App 上，目前研究人員沒有看到這些公開金鑰，因此他們認為 Clubhouse 極有可能沒有使用自訂的點對點加密。

> 複習：[什麼是公開金鑰？](/posts/ep21_public_key_encryption)

## 中國政府有辦法取得用戶的聊天資訊嗎？

我們在[EP36 中有討論到](https://infosecdecompress.com/posts/ep36_clubhouse_security_and_privacy#clubhouse%E6%9C%83%E9%8C%84%E9%9F%B3%E5%97%8E%EF%BC%9F)，Clubhouse 宣稱只有在有人檢舉時才會錄音，目的是為了調查是否有人違反使用者規章。

那麼，中國政府會有辦法取得這些 Clubhouse 錄下的內容嗎？

研究人員認為只要 Clubhouse 將這些錄音存放在美國，中國政府應該就無法取得。

雖然中國政府有一些合法的方式可以要求 Clubhouse 提供用戶資訊，但只要 Clubhouse 沒有將資料存放在中國，或是沒有與其他中國的公司合作（就目前所知，除了 Agora 以外沒有），Clubhouse 就可以拒絕提供這些資訊給中國政府。

_除了上述的問題以外，Stanford Internet Observatory 還發現了一些其他的安全性問題，他們已經這些問題回報給 Clubhouse，並計畫在問題被修補後再公開。_

## Clubhouse 的回應

Clubhouse 在收到 Stanford Internet Observatory 研究人員提出的問題和報告後有做出回覆。

針對資料儲存的問題，Clubhouse 表示他們並沒有將 App 在中國上架，不過有些中國用戶仍然找到方法下載並使用 Clubhouse，在這個情況下，這些中國用戶所在房間的資訊可能會經過中國伺服器。

針對安全性的問題，Clubhouse 承認他們有一些可以改善的地方（他們沒有承認 Stanford Internet Observatory 所指出的問題，只有委婉的表示有可以改善的地方）。他們表示會在 72 小時內推出更多的加密方法以及避免 Clubhouse 的用戶資訊被傳送到中國的伺服器。

他們也計劃在未來請第三方的資訊安全公司來審查這些他們即將推出的安全措施。

![](/media/clubhouse_followup_response.png)

Clubhouse 的回應截圖（來源：[Stanford Internet Observatory - Clubhouse in China: Is the data safe?](https://cyber.fsi.stanford.edu/io/news/clubhouse-china))
