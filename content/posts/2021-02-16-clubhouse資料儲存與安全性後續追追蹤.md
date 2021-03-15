---
template: post
title: Clubhouse資料儲存與安全性後續追蹤
slug: newsupdates_clubhouse_followup
socialImage: /media/clubhouse_followup_cover.png
draft: false
date: 2021-02-16T03:38:14.919Z
description: 前幾天Stanford Internet
  Observatory就針對幾個點發表了一些他們的研究與發現，雖然沒有給出極為肯定的一些答案，大部分的問題都還是有點模糊的，但他們的發表還是把Clubhouse官方釣出來針對資料儲存與安全性給予回應
category: NewsUpdates
tags:
  - Clubhouse
  - Agora
  - E2EE
  - privacy
---
![](/media/clubhouse_followup_cover.png)

## 前情提要

大家對於Clubhouse最擔心的不外乎是資料儲存、和中國的關係和加密這幾個面向，我們在[EP36 - 聊聊Clubhouse資安和隱私吧](/posts/ep36_clubhouse_security_and_privacy)也分享了一些我們的看法跟顧慮。

前幾天Stanford Internet Observatory的研究人員針對Clubhouse公布了一些他們的研究與發現

> 原文連結：\
> [Stanford Internet Observatory - Clubhouse in China: Is the data safe?](https://cyber.fsi.stanford.edu/io/news/clubhouse-china)

## 未加密的資料傳輸

### 用戶相關資訊

研究人員表示使用者在使用Clubhouse的過程中，像是加入一個新房間時，Clubhouse會傳送一些未加密的純文字資訊到Agora的伺服器，這包含了用戶的ID、房間的ID等等的資訊。

因為這些資訊是在未加密的情況下傳送的，因此網路上的任何人都有可能可以攔截這些資訊，當有心人士搜集了這些資料以後，會可以透過這些資訊知道哪些用戶正在與對方在同一個房間中對話。

### 用戶的語音內容

除了這些資料以外，研究人員也認為用戶的語音內容也是沒有使用點對點加密來保護。

根據Agora的開發者文件，如果使用的是Agora內建的加密功能的話，Agora是可以取得加密的金鑰。要讓Agora無法知道使用者的語音內容的話Clubhouse就會需要使用自訂的加密方法，並且自行將加密用的公開金鑰傳送到所有用戶的App上，目前研究人員沒有看到這些公開金鑰，因此他們認為Clubhouse極有可能沒有使用自訂的點對點加密。

> 複習：[什麼是公開金鑰？](/posts/ep21_public_key_encryption)

## 中國政府有辦法取得用戶的聊天資訊嗎？

我們在[EP36中有討論到](https://infosecdecompress.com/posts/ep36_clubhouse_security_and_privacy#clubhouse%E6%9C%83%E9%8C%84%E9%9F%B3%E5%97%8E%EF%BC%9F)，Clubhouse宣稱只有在有人檢舉時才會錄音，目的是為了調查是否有人違反使用者規章。

那麼，中國政府會有辦法取得這些Clubhouse錄下的內容嗎？

研究人員認為只要Clubhouse將這些錄音存放在美國，中國政府應該就無法取得。

雖然中國政府有一些合法的方式可以要求Clubhouse提供用戶資訊，但只要Clubhouse沒有將資料存放在中國，或是沒有與其他中國的公司合作（就目前所知，除了Agora以外沒有），Clubhouse就可以拒絕提供這些資訊給中國政府。

*除了上述的問題以外，Stanford Internet Observatory還發現了一些其他的安全性問題，他們已經這些問題回報給Clubhouse，並計畫在問題被修補後再公開。*

## Clubhouse 的回應

Clubhouse在收到Stanford Internet Observatory研究人員提出的問題和報告後有做出回覆。

針對資料儲存的問題，Clubhouse表示他們並沒有將App在中國上架，不過有些中國用戶仍然找到方法下載並使用Clubhouse，在這個情況下，這些中國用戶所在房間的資訊可能會經過中國伺服器。

針對安全性的問題，Clubhouse承認他們有一些可以改善的地方（他們沒有承認Stanford Internet Observatory所指出的問題，只有委婉的表示有可以改善的地方）。他們表示會在72小時內推出更多的加密方法以及避免Clubhouse的用戶資訊被傳送到中國的伺服器。

他們也計劃在未來請第三方的資訊安全公司來審查這些他們即將推出的安全措施。

![](/media/clubhouse_followup_response.png)

Clubhouse的回應截圖（來源：[Stanford Internet Observatory - Clubhouse in China: Is the data safe?](https://cyber.fsi.stanford.edu/io/news/clubhouse-china))