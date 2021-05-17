---
template: post
title: Mailvelope教學2 - 金鑰管理
slug: patches_how_to_use_mailvelope_2
socialImage: /media/mailvelope_02.png
draft: false
date: 2021-05-10T21:51:17.331Z
description: 本文要繼續分享如何在Mailvelope中管理我們的金鑰
category: Patches
tags:
  - PGP
  - GPG
  - Mailvelope
  - public key
  - digital signature
---
我們在[EP46](/posts/ep46_pretty_good_privacy)中介紹了什麼是PGP，也在[上一篇文章](/posts/patches_how_to_use_mailvelope)中介紹了Mailvelope的簡易使用

今天我們要來教大家怎麼管理Mailvelope中的金鑰

## 目錄

[管理金鑰](#管理金鑰)

[自訂金鑰伺服器](#自訂金鑰伺服器)

[匯出金鑰](#匯出金鑰)

[匯入金鑰](#匯入金鑰)

[撤銷金鑰](#撤銷金鑰)

[移除金鑰](#移除金鑰)

### 管理金鑰

在上一篇文章中我們建立了第一組的PGP 金鑰，要管理我們有哪些金鑰的話可以點擊瀏覽器上Mailvelope 擴充套件的符號，並點擊跳出視窗中的**鑰匙環**

![mailvelope2_01](/media/mailvelope2_01.png)

在密鑰管理頁面我們可以看到所有儲存在Mailvelope中的金鑰

![mailvelope2_02](/media/mailvelope2_02.png)

雖然說Mailvelope可以和Gmail整合，但這些鑰是存在我們的電腦上的擴充套件中，並不會與Gmail同步，如果我們將Mailvelope的擴充套件刪除，我們存在Mailvelope中的金鑰就會被刪除。

如果我們想要在別的電腦 / 瀏覽器也使用這組PGP金鑰的話，就會需要將金鑰匯出並重新匯入其他電腦 / 瀏覽器上。

即便不需要在別的電腦 / 瀏覽器上使用，我還是強烈建議大家將金鑰匯出以做備份，便免因為意外導致金鑰的遺失，匯出金鑰的方法可以參考[下方的教學](#匯出金鑰)。

當我們點開我們的金鑰以後，就可以看到關於此金鑰的各個細節與狀態

![mailvelope2_03](/media/mailvelope2_03.png)

### 自訂金鑰伺服器

Mailvelope預設使用的是Mailvelope的金鑰伺服器，以一般的情況來說使用Mailvelope的金鑰伺服器是沒有問題的，但如果想要使用其他的金鑰伺服器的話Mailvelope也支援其他幾個常見的金鑰伺服器。

要更改金鑰伺服器的話可以到**選項**頁面 > 選擇左側的**密鑰伺服器** > 接著在下拉式選單上選擇自己偏好的金鑰伺服器

![mailvelope2_04](/media/mailvelope2_04.png)

### 匯出金鑰

Mailvelope有兩種方式可以匯出金鑰，一個是匯出我們的Mailvelope中所有的金鑰，另一個是匯出單一個金鑰。

要匯出所有金鑰的話我們可以在**密鑰管理頁面**點選**匯出**

![mailvelope2_05](/media/mailvelope2_05.png)

只要匯出單一個金鑰的話，我們可以在**密鑰管理頁面**選擇我們要匯出的金鑰，在金鑰細節的頁面右上方點選**匯出**

![mailvelope2_06](/media/mailvelope2_06.png)

匯出時我們會有三個選項：只匯出公鑰、只匯出私鑰、匯出公鑰和私鑰

![mailvelope2_07](/media/mailvelope2_07.png)

* **只匯出公鑰**的選項適合當我們要把公鑰提供給他人的狀況

* **只匯出私鑰**和**匯出公鑰和私鑰** 的選項適合備份的時候用，這兩個選項都會包含我們的私鑰，因此大家要記得保護好匯出的檔案

匯出的金鑰會是asc格式，這是PGP金鑰的標準格式，我們可以將asc格式的金鑰檔匯入任何支援PGP的軟體/服務

### 匯入金鑰

如果需要匯入金鑰的話，可以在**密鑰管理**頁面上點選**匯入**

![mailvelope2_08](/media/mailvelope2_08.png)

Mailvelope提供了兩種方式讓我們匯入金鑰，分別是**透過檔案匯入**以及**貼上金鑰**。

* 透過**檔案匯入**支援asc以及gpg兩種格式
* 透過**貼上金鑰**來匯入時可以同時貼上多個金鑰，每個金鑰需要以 `-----BEGIN PGP PUBLIC KEY BLOCK----- `開頭和`-----END PGP PUBLIC KEY BLOCK-----` 結尾的格式

![mailvelope2_09](/media/mailvelope2_09.png)

### 撤銷金鑰

當我們不在需要使用某個金鑰、金鑰遺失或是遭竊，導致我們需要撤銷我們現有的金鑰的時候我們可以透過Mailvelope內建的撤銷功能

撤銷金鑰的話，我們會告訴金鑰伺服器這組金鑰被撤銷了，未來不會有辦法再用這組金鑰加密或簽署訊息，**這是一個不可逆的動作**，如果金鑰被撤銷了但我們還想要加密信件的話我們會需要重新產生一組新的金鑰並上傳至金鑰伺服器

要撤銷一組金鑰的話，首先在**密鑰管理**頁面選擇我們要撤銷的金鑰，接著在金鑰細節頁面的右上角點選**撤銷**

![mailvelope2_10](/media/mailvelope2_10.png)

Mailvelope會跳出一則確認訊息，告訴你**撤銷金鑰是不可逆的**，確定要撤銷的話再按下**是**
![mailvelope2_11](/media/mailvelope2_11.png)

接著我們會被要求輸入金鑰的密碼來撤銷金鑰，輸入密碼後即可按下Ok來撤銷金鑰

![mailvelope2_12](/media/mailvelope2_12.png)

接著我們就可以在金鑰細節頁面上看到金鑰已經從**有效**變為**已撤銷**

![mailvelope2_13](/media/mailvelope2_13.png)

### 移除金鑰

在撤銷金鑰以後，我們可以將這個金鑰從我們的Mailvelope中移除

**移除金鑰並不會執行撤銷的動作，只會將存在Mailvelope擴充套件中的金鑰資訊移除**

如果我們在撤銷金鑰之前就移除金鑰的話，其他人還是可以在金鑰伺服器中找到我們的公鑰資訊，如果他人擁有我們的金鑰資訊的話一樣可以使用這組金鑰

要移除金鑰，我們可以在**密鑰管理**頁面上點選垃圾桶標誌來移除

![q2BtKMaLJR](/media/mailvelope2_15.png)

或是可以在金鑰細節的頁面點選右上角的**移除**

![mailvelope2_16](/media/mailvelope2_16.png)

成功移除後我們就會看到這個金鑰已經從密鑰管理頁面中消失了

![mailvelope3_17](/media/mailvelope3_17.png)