---
template: post
title: 密碼管理器搬家教學 - LastPass to Bitwarden
slug: patches_password_manager_transfer_tutorial
socialImage: /media/PasswordManagerTransfer_11.png
draft: false
date: 2021-02-22T23:07:04.953Z
description: 不久前
  LastPass公告了他們即將調整免費方案，三月以後只能選擇在一種裝置上存取密碼，因此在這個情況下我開始研究LastPass的付費方案和其他密碼管理器。在比較過後，我決定搬家到另一個密碼管理器Bitwarden
category: Patches
tags:
  - password manager
  - password vault
  - password
---
## 目錄

[前言](#前言)

[Bitwarden介紹](#bitwarden介紹)

[從LastPass匯出](#從lastpass匯出)

[匯入Bitwarden](#匯入bitwarden)

[刪除LastPass帳號](#刪除lastpass帳號)

[在Bitwarden開啟多因素認證](#在bitwarden開啟多因素認證)

[將Bitwarden改為繁體中文](#將bitwarden改為繁體中文)

### 前言

在過去幾年，我一直都是密碼管理器 LastPass的重度使用者，但不久前 LastPass公告了他們即將調整免費方案，三月以後免費的用戶只能選擇在一種裝置上存取密碼

> LastPass官網公告：[Changes to LastPass Free](https://blog.lastpass.com/2021/02/changes-to-lastpass-free/)

我一直都會在電腦和手機上同時使用密碼管理器，因此在這個情況下我開始研究LastPass的付費方案和其他密碼管理器

在比較過一些選項和價格以後，我決定搬家到另一個密碼管理器Bitwarden並付費購買他們的家庭方案

### Bitwarden介紹

Bitwarden 是一個開源的密碼管理器，讓使用者可以安全的保護管理器中所儲存的帳號密碼等等的資訊。他支援了各大作業系、瀏覽器套件和手機。

Bitwarden官方網站：<https://bitwarden.com/>

![PasswordManagerTransfer_11](/media/PasswordManagerTransfer_11.png)

我選擇 Bitwarden的主要原因：

* 開放原始碼
* 在社群上評價好
* 介面與LastPass相似，轉移過程較無痛
* 支援各大作業系統和瀏覽器
* 可以很簡單的將LastPass所有資料匯入
* 家庭方案價格較便宜

除此之外Bitwarden也支援Self-Hosting，也就是說你可以下載Bitwarden並安裝在自己的伺服器上，不需要透過Bitwarden的伺服器，如此一來可以有更高的隱私和安全性

而會選擇付費的主要原因是我想要透過[實體金鑰](/posts/ep28_why_you_shouldnt_use_sms_as_2FA#u2f-實體金鑰)來保護我的帳號，畢竟密碼管理器保存了我所有的密碼，我會想要用最多的安全措施來保護他，而這是一個付費會員才有的功能

[](https://bitwarden.com/)Bitwarden軟體和擴充套件下載連結：<https://bitwarden.com/download/>

## [](https://bitwarden.com/download/)教學

在開始以前建議大家在一台確定安全沒有中毒的電腦上操作，如果可以的話盡量在無痕模式中進行

### 從LastPass匯出

首先我們需要登入[LastPass網頁版](https://lastpass.com/?ac=1)，登入後點選左邊選單倒數第二個的**Advacned Options**，接著點**Export**

![PasswordManagerTransfer_01](/media/PasswordManagerTransfer_01.png)

LastPass會開啟一個新的分頁並請你輸入密碼

![PasswordManagerTransfer_02](/media/PasswordManagerTransfer_02.png)

輸入密碼以後LastPass就會將你所有儲存的資訊以未加密的方式顯示在網頁上

![PasswordManagerTransfer_03](/media/PasswordManagerTransfer_03.png)

請將這個頁面保持開啟，等一下會用到

### 匯入Bitwarden

首先，登入[Bitwarden網頁版](https://vault.bitwarden.com/#/)，如果還沒有Bitwarden帳號的可以先[註冊一個](https://vault.bitwarden.com/#/register)

>  如果登入後希望將介面改為繁體中文的話可以參考[文末的教學](#將Bitwarden改為繁體中文)

登入後點選上方的**工具**，接著選擇左方選單中的匯入資料

在檔案格式的欄位中選擇**LastPass (csv)**，

接著回到剛剛LastPass匯出頁面，將所有內容全選 (Ctrl + A)並複製

在Bitwarden匯入資料頁面中下方空白的區域 (下圖中的4)貼上，並按下**匯入資料**

![PasswordManagerTransfer_04](/media/PasswordManagerTransfer_04.png)

完成匯入後我們就可以看到Bitwarden我的密碼庫中有我們原本儲存在LastPass的密碼了

![PasswordManagerTransfer_05](/media/PasswordManagerTransfer_05.png)

大部分的密碼、資料夾和資訊都會自動匯入Bitwarden中，如果有不支援的欄位Bitwarden會以**自訂欄位**的方式儲存這些資訊，不會不見大家不用擔心

完成匯入以後強烈建議大家開啟Bitwarden的多因素認證來確保帳號的安全性

> 教學：[在Bitwarden開啟多因素認證](#在Bitwarden開啟多因素認證)

### 刪除LastPass帳號

建議大家在將資料匯入Bitwarden，並**使用了一段時間確認沒問題後**，將LastPass帳號刪除

刪除方法為進入LastPass網頁版，在左側工具列選擇**Advance Settings**

在Account Informations區中點選**My Account**

![PasswordManagerTransfer_06](/media/PasswordManagerTransfer_06.png)

你會被帶到LastPass的帳號管理頁面，點選倒數第二個**Delete Or Reset Account**

![PasswordManagerTransfer_07](/media/PasswordManagerTransfer_07.png)

在Delete Your Account頁面點選第二個按鈕**Delete**，LastPass會接著問你你的LastPass密碼，輸入以後就可以刪除你的LastPass帳號了

**這個動作是不可逆的，**在刪除以前請確保你的資料有**正確的匯入其他密碼管理器**或是**有適當的備份**

![PasswordManagerTransfer_08](/media/PasswordManagerTransfer_08.png)

### 在Bitwarden開啟多因素認證

在Bitwarden網頁版上，點選畫面上方的**設定**，並選擇左邊選單的**兩步驟登入**

免費的用戶只能選擇**驗證器應用程式**或是**電子郵件**，在安全性上驗證器應用程式 (也就是之前和大家介紹過像是Google Authenticator這類型[基於時間的一次性密碼產生器](/posts/ep28_why_you_shouldnt_use_sms_as_2FA#totp密碼產生器))是比較安全的，因此建議大家一定要設定

如果和我一樣有[實體金鑰](/posts/ep28_why_you_shouldnt_use_sms_as_2FA#u2f-實體金鑰)且願意付費購買進階會員的人也建議要使用實體金鑰做為雙因素認證來確保最好的安全性

![PasswordManagerTransfer_09](/media/PasswordManagerTransfer_09.png)

### 將Bitwarden改為繁體中文

Bitwarden有支援繁體中文的介面，想要更改介面語言的用戶可以到頁面上方的**Settings**，選擇左側的Options，並在**Language**選單選擇 **zh-TW - 中文 (台灣)** ，最後按下下方的**Save**來更改語言

![PasswordManagerTransfer_10](/media/PasswordManagerTransfer_10.png)