---
template: post
title: Mailvelope教學 - 在Gmail中使用PGP加密
slug: patches_how_to_use_mailvelope
socialImage: /media/mailvelope_02.png
draft: false
date: 2021-05-09T23:18:33.001Z
description: EP46中介紹了什麼是PGP，本文要介紹的是一款可以讓我們用PGP來加密我們的Gmail的工具Mailvelope
category: Patches
tags:
  - PGP
  - GPG
  - Mailvelope
  - public key
  - digital signature
---

## Mailvelope 簡介

我們在 EP46 中介紹了什麼是 PGP 以及簡單介紹他是怎麼運作的，今天要介紹的是一款可以讓我們用 PGP 來加密我們的 Email 的工具，Mailvelope。

Mailvelope 是一款採用 OpenPGP 標準的開放原始碼軟體，提供一般非商業的用戶免費使用。

他可以透過瀏覽器擴充套件的形式跟 Gmail 整合，讓我們可以簡單地用 Gmail 來傳送被 PGP 加密或是簽署的 Email。

Mailvelope 官網：<https://www.mailvelope.com/en>

Mailvelope 官方教學（也是本文中的圖片來源）：<https://www.mailvelope.com/en/help>

## 安裝

根據你使用的瀏覽器安裝對應的擴充套件

- [Google Chrome](https://chrome.google.com/webstore/detail/mailvelope/kajibbejlbohfaggdiogboambcijhkke)
- [Mozilla Firefox](https://addons.mozilla.org/en/firefox/addon/mailvelope/)
- [Microsoft Edge](https://microsoftedge.microsoft.com/addons/detail/mailvelope/dgcbddhdhjppfdfjpciagmmibadmoapc)

安裝完成以後你會看到 Mailvelope 的符號出現在瀏覽器擴充套件的欄位中，通常是在網址列的右側

![mailvelope_01](/media/mailvelope_01.png)

## 設定

第一次使用的時候我們需要先進行一些基本的設定，首先我們可以按下 Mailvelope 的符號，並點選跳出視窗中的"Let's start"

![mailvelope_02](/media/mailvelope_02.png)

我們會被帶到設定頁面，在這裡我們會需要設定我們的金鑰

我們可以選擇建立新的金鑰(Generate key)或是匯入現有的金鑰(Import Key)，如果是第一次使用 Mailvelope 和 PGP 的話我們要選擇建立新的金鑰(Generate key)。

![mailvelope_03](/media/mailvelope_03.png)

接著我們會需要提供一些基本資料，包含姓名跟 Email

姓名不需要是真實姓名，這會是未來顯示在公開金鑰上，讓別人可以搜尋你用的

除了基本資料以外我們還會需要設定一組密碼，這組密碼在未來每次我們解密訊息是會被用來驗證身份，建議大家要使用一組安全而且比較長的密碼，因為這組密碼會沒有辦法被更改。

當欄位都輸入完畢以後，我們就可以按下 Generate 按鈕來生成一對新的金鑰了。

![mailvelope_04](/media/mailvelope_04.png)

生成金鑰通常只會花幾秒鐘，完成後我們就會看到成功的通知

![mailvelope_05](/media/mailvelope_05.png)

這個時候我們應該會收到一封確認信件，我們會需要透過這封確認信件來證明我們剛剛填的 email 真的是我們的。

![mailvelope_06](/media/mailvelope_06.png)

當我們把這封 Email 打開時 Mailvelope 會自動辨識出他是一封加密後的訊息。

![mailvelope_07](/media/mailvelope_07.png)

要看到信件內容的話我們就會需要先輸入我們稍早設定的密碼來把加密的信件解密

![mailvelope_08](/media/mailvelope_08.png)

成功解密後我們就可以看到信件的內容了，這時我們只需要點擊信中的連結就可以完成驗證的步驟了。

![mailvelope_09](/media/mailvelope_09.png)

## 加密/簽署郵件

當我們要寫一封加密的郵件或是簽署一封郵件的時候，我們不能透過以往的方式寫郵件，我們會需要點擊 Gmail 網頁上 Mailvelope 的標誌。

![mailvelope_10](/media/mailvelope_10.png)

點擊了 Mailvelope 的標誌以後會跳出一個新的視窗，我們可以在這個視窗裡面草擬我們要傳送的加密訊息或是要簽署的訊息。

- 如果我們的收件人也有使用 Mailvelope 且他的公開金鑰有在 Mailvelope 的金鑰伺服器中的話，我們在輸入完他的 email 地址以後他會自動變成下圖中的綠色，如此一來我們就可以傳送加密後的訊息給他。
- 如果我們的收件人沒有在使用 Mailvelope 或是他的公開金鑰沒有在 Mailvelope 的金鑰伺服器中的話，我們會無法傳送加密訊息給他們，但我們還是可以簽署我們的郵件。

這邊要注意的是 Email 的主旨不會被加密，因此主旨中不要含有機密的訊息。

完成了以後我們就可以按下右下角紅色的送出

![mailvelope_11](/media/mailvelope_11.jpg)

## 解密訊息

加密後的訊息如果沒有透過 Mailvelope 來看的話會長這樣

![PGP_example](/media/PGP_example.png)

解密的過程與前面驗證 email 時的步驟一樣

當我們把這封 Email 打開時 Mailvelope 會自動辨識出他是一封加密後的訊息。

![mailvelope_07](/media/mailvelope_07.png)

要看到信件內容的話我們就會需要先輸入我們稍早設定的密碼來把加密的信件解密

![mailvelope_08](/media/mailvelope_08.png)

成功解密後我們就可以看到信件的內容了

![mailvelope_09](/media/mailvelope_09.png)
