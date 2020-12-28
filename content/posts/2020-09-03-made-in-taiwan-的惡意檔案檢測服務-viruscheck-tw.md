---
template: post
title: Made In Taiwan 的惡意檔案檢測服務 VirusCheck.tw
slug: patches_viruscheck
socialImage: /media/viruscheck_cover.jpg
draft: false
date: 2020-09-03T02:23:57.366Z
description: |-
  還記得在EP5裡向大家介紹VirusTotal這個統整有害程式的資料庫嗎？其實台灣也有一個自己的Virus Check可以幫助你做惡意檔案檢測服務！
  最近只要使用檢測服務就可以參加CITI CAFE的飲品抽獎活動哦～
category: Patches
tags:
  - VirusTotal
  - VirusCheck.tw
---
![](/media/viruscheck_cover.jpg)

大家還記得我們曾經在[EP5 - 人性是最大的安全漏洞](/posts/ep5-the-greatest-vulnerability-is-you-and-me/)裡向大家介紹過的[VirusTotal](https://www.virustotal.com/gui/)這個統整有害程式的資料庫嗎？

其實台灣也有一個自己的Virus Check可以幫助你做惡意檔案檢測服務！是由[台灣電腦網路危機處理暨協調中心 (TWCERT/CC) ](https://www.twcert.org.tw/tw/)推出的台灣本土的版本 [VirusCheck.tw](https://viruscheck.tw)！

## 使用方法

使用方法很簡單，只要在網頁上傳可疑的檔案即可

如果是加密的壓縮檔，可以再上傳時提供壓縮檔的密碼，交由Virus Check幫你解密掃描。有些惡意程式會用加密的方式繞過防毒軟體的掃描，透過Virus Check的這個功能即使壓縮檔被加密了也無法逃過Virus Check的掃描噢。

檔案上傳大小限制為20MB，受密碼保護的壓縮檔也支援 

支援超過30種檔案類型，包含：

* 文件檔，如PDF、Word、Excel、PowerPoint
* 網頁格式，如HTM、HTML
* 壓縮檔，如ZIP、RAR、JAR
* 執行檔，如EXE、BAT、DLL

上傳後Virus Check會提供你一個案件編號，我們可以在記下這個案件編號，之後再回來查詢檢查結果。

我們也可以提供Email給Virus Check，讓Virus Check在完成檢查後寄信通知我們

![](/media/viruscheck_upload.jpg)

## 掃描結果

除了透過靜態分析得到的初步檢測結果外，Virus Check還會在沙盒內進行動態分析，觀察我們上傳的檔案是否有惡意的活動。結合靜態分析和動態分析的來達到最佳的檢測效果。

Virus Check 還與趨勢科技和奧義智慧科技合作，當遇到高風險的檔案時會交由他們進行深度檢測，我們可以在兩到三天後知道檢測結果。

掃描後Virus Check會提供我們以下資訊：

* 檔案資訊、檔案[雜湊值](/posts/ep2-what-is-infosec/#雜湊函數-hash-function)
* 風險值

  * 低風險：0 ~ 29
  * 中風險：30 ~ 69
  * 高風險：70 ~ 100
* 檔案行為：

  * 系統登錄檔行為
  * 存取行為
  * 網路行為
  * 系統服務

![](/media/viruscheck_report.jpg)

## 抽獎活動

最近只要使用檢測服務就可以參加CITI CAFE的飲品抽獎活動哦～

活動日期：2020/09/01 ~ 2020/11/30

上傳檔案並完成檢測，憑上傳檔案時留下之e-mail，即可參加 CITY CAFE 60元飲品電子兌換卷抽獎活動。

活動詳情：[【2020】惡意檔案檢測服務(Virus Check)-上傳並檢測成功抽獎活動說明](https://surl.twcert.org.tw/ckfxR)

<p>&nbsp;</p>
<p>&nbsp;</p>

> 為了提高台灣整體資安防護能量、減少感染惡意程式之風險，除了不下載來路不明之檔案外，對於下載之檔案，建議透過檢測系統完整分析，可降低電腦遭到惡意程式之威脅。
>
> **台灣資安能量，需要大家共同參與和努力** 
>
> **\-** TWCERT/CC