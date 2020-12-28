---
template: post
title: 加密工具 VeraCrypt
slug: patches_veracrypt
socialImage: /media/veracrypt_cover.png
draft: false
date: 2020-12-19T02:00:07.562Z
description: 今天要來跟各位介紹一個強大多變的加密工具
  VeraCrypt。VeraCrypt是個免費、開源、且跨平台支援的好用工具。適合用來保護我們的外接硬碟與隨身碟裡保護的資料。
category: Patches
tags:
  - encryption
  - tool
  - VeraCrypt
---
## 目錄

[VeraCrypt介紹](#veracrypt介紹)

[下載安裝](#下載安裝)

[建立新的加密](#建立新的加密)

* [創建檔案加密卷](#創建檔案加密卷)
* [加密非系統分區/設備](#加密非系統分區設備)

[解密檔案](#解密檔案)

[加密檔案](#加密檔案)

[永久解密](#永久解密) 

[密碼文件生成器](#密碼文件生成器)

## VeraCrypt介紹

​    *VeraCrypt 官網：https://www.veracrypt.fr/en/Home.html*

​    *VeraCrypt 官方英文教學：https://www.veracrypt.fr/en/Beginner%27s%20Tutorial.html*

VeraCrypt 是一款開源的磁碟加密軟體，有許多人在使用，且從2013年推出後一直有在維護更新，在加密硬碟和檔案上是非常好用且安全的。

VeraCrypt 特點：

* 跨平台支援，包含Windows、macOS、Linux等
* 可以在檔案、資料夾上建立加密的虛擬磁碟
* 可以加密整個磁碟、USB隨身碟、行動硬碟等裝置
* 加密過程是自動、即時、透明的
* 支援CPU 硬體加速
* 支援繁體中文

詳細的文件和說明可以參考 [VeraCrypt的官方說明](https://www.veracrypt.fr/en/Documentation.html)

## 下載安裝

VeraCrypt 官方下載連結：https://www.veracrypt.fr/en/Downloads.html

在官網上下載你使用的作業系統所對應的版本

![](/media/VeraCrypt_download.png)

Mac的用戶除了要下載安裝VeraCrupt以外，還要多安裝 [macFuse (舊名OSXFuse）](https://osxfuse.github.io/)才能正常運作。

下載後就可以進行安裝，安裝的第一步可以選繁體中文比較好理解，剩餘步驟與大多數軟體差不多，VeraCrypt 沒有夾帶惡意軟體，可以放心的點選下一步。

安裝的最後一步會問你願不願意贊助 VeraCrypt團隊，如果有餘力不妨支持一下這些免費開源的好軟體。

## 建立新的加密

第一次開啟 VeraCrypt時，視窗上半部的區塊應該都是空白的，因為我們還沒建立任何加密的磁碟或檔案

如果開啟後是英文，想要改成繁體中文的話請點選視窗上方工具列的 **Setting** > **Language**，選擇 **繁體中文** 後按下 **OK**

我們可以點 **創建加密卷** 建立一個新的加密

![](/media/VeraCrypt_Home.png)

這裡會有三個選項：創建檔案加密卷、加密非系統分區/設備、加密系統分區或者整個系統所在硬碟

![4gGQWy49FW](/media/VeraCrypt_Create.png)

三者適合使用的時機不太一樣

* 創建檔案加密卷

  * 建立一個看似是檔案的加密區塊
  * 當我們沒有要加密整個磁碟，而是只要加密其中的一部分時適合使用這個方法
* 加密非系統分區/設備

  * 加密一整個磁碟區
  * 適合加密整個隨身碟、行動硬碟等情況
* 加密系統分區或者整個系統所在硬碟

  * 加密系統所在的磁碟
  * 我比較不推薦使用這個功能，要加密系統硬碟的話建議用作業系統內建的功能，像是Windows BitLocker、Mac FileVault 等功能，整合性會較佳

本文會針對前兩個功能做詳細的介紹

#### 隱藏的加密

**創建檔案加密卷** 和 **加密非系統分區/設備** 都可以選擇建立一般的加密或是隱藏的加密。隱藏的加密，顧名思義，在加密後或將該區塊隱藏，這個功能可以避免別人在看到我們有加密的檔案後強迫我們交出加密的密碼，增加隱匿性和安全性。

使用方法與一般模式差不多，這邊就不多作介紹了。

### 創建檔案加密卷

第一步會要選擇要建立一般的加密還是隱藏的加密，這邊以一般的加密做舉例

![VeraCrypt_EncryptFile_1](/media/VeraCrypt_EncryptFile_1.png)

第二步會問加密檔案要放在哪裡。

我們可以透過點擊 **選擇檔** 按鈕，到我們指定的資料夾下，輸入我們想到建立的檔案名稱

以下圖為例，我們要在 C:\infosecdecompress 這個資料夾底下建立一個名為 TestEncryptFolder的加密檔案

![VeraCrypt_EncryptFile_2](/media/VeraCrypt_EncryptFile_2.png)

第三步要選擇我們要使用的加密演算法和雜湊函數方法

預設的AES 和 SHA512 都是很好的演算法，可以保留預設值不做更改

![VeraCrypt_EncryptFile_3](/media/VeraCrypt_EncryptFile_3.png)

第四步我們要選擇建立多大的加密分區

這邊可以自由輸入想要的大小，只要不超過該硬碟上有的剩餘空間基本上不會有什麼問題。這邊以建立 2GB 加密分區為例

![VeraCrypt_EncryptFile_4](/media/VeraCrypt_EncryptFile_4.png)

第五步我們要輸入加密解密用的密碼

可以選擇直接輸入一組密碼，或是使用密碼檔

* 使用密碼的話使用越複雜、越長的密碼越好。VeraCrypt 建議使用20個字元以上的密碼
* 使用密碼檔的話，可以透過 VeraCrypt 的密碼文件生成器來產生，教學會在文章[最後](#密碼文件生成器)

這個密碼 / 密碼檔 會在未來每次加密解密時都會用到，因此要保存好

![VeraCrypt_EncryptFile_5](/media/VeraCrypt_EncryptFile_5.png)

第六步會要生成隨機的加密金鑰。將滑鼠隨機的在視窗內移動，來增加金鑰的隨機性

建議大家起碼要隨機移動滑鼠直到下方的進度條變綠色的

當完成後即可按下 **格式化** 按鈕，VeraCrypt 即會開始建立新的檔案加密卷。需要的時間會因為你設定的空間大小、電腦效能等等不同的因素而有差異

![](/media/VeraCrypt_EncryptFile_6.png)

完成後就會看到通知顯示**加密卷已成功創建**

![VeraCrypt_EncryptFile_7](/media/VeraCrypt_EncryptFile_7.png)

完成後即可按下**退出**來結束。如果還要創建另一個加密卷可以按**下一步**

![VeraCrypt_EncryptFile_8](/media/VeraCrypt_EncryptFile_8.png)

我們可以在選擇的資料夾下看到一個新的加密檔案，檔案會是先前選擇的大小

![VeraCrypt_EncryptFile_9](/media/VeraCrypt_EncryptFile_9.png)

### 加密非系統分區/設備

第一步會要選擇要建立一般的加密還是隱藏的加密，這邊以一般的加密做舉例

![VeraCrypt_EncryptFile_1](/media/VeraCrypt_EncryptFile_1.png)

第二步會要選擇加密的磁碟

點擊 選擇設備 後會跳出一個視窗讓我們選擇要加密的分區、磁碟或設備

這邊將以加密隨身碟為例，我們會選擇**移動硬碟2**

![VeraCrypt_EncryptDisk_1](/media/VeraCrypt_EncryptDisk_1.png)

第三步要決定我們要的模式

* 創建加密卷並格式化

  * 這個模式會將分區格式化後再做加密，因此原本分區上的資料都會被抹除
  * 速度較快
* 就地加密分區

  * 這個模式會將分區內原本的資料保留並加密
  * 速度較慢

這邊我們以 **創建加密卷並格式化** 為示範

![VeraCrypt_EncryptDisk_2](/media/VeraCrypt_EncryptDisk_2.png)

第四步要選擇我們要使用的加密演算法和雜湊函數方法

預設的AES 和 SHA512 都是很好的演算法，可以保留預設值不做更改

![VeraCrypt_EncryptFile_3](/media/VeraCrypt_EncryptFile_3.png)

第五步我們會要確認加密卷的大小

因為我們選擇的是加密整個分區，因此大小就是該分區的容量，我們無法選擇

我們可以趁這個機會比對分區大小，檢查一下是不是選擇正確的分區，避免不小心格式化重要資料的情況發生

![VeraCrypt_EncryptDisk_3](/media/VeraCrypt_EncryptDisk_3.png)

第六步我們要輸入加密解密用的密碼

我們可以選擇直接輸入一組密碼，或是使用密碼檔

* 使用密碼的話使用越複雜、越長的密碼越好。VeraCrypt 建議使用20個字元以上的密碼
* 使用密碼檔的話，可以透過 VeraCrypt 的密碼文件生成器來產生，教學會在文章[最後](#密碼文件生成器)

這個密碼 / 密碼檔 會在未來每次加密解密時都會用到，因此要保存好

![VeraCrypt_EncryptFile_5](/media/VeraCrypt_EncryptFile_5.png)

第七步要確認是否會存放大文件

是否存放大文件會關係到 VeraCrypt所使用的格式化方法

這個部分可以依照自己的需求做選擇

![VeraCrypt_EncryptDisk_4](/media/VeraCrypt_EncryptDisk_4.png)

第八步要生成隨機的加密金鑰。將滑鼠隨機的在視窗內移動，來增加金鑰的隨機性

建議大家起碼要隨機移動滑鼠直到下方的進度條變綠色的

當完成後即可按下 **格式化** 按鈕，VeraCrypt 即會開始建立新的檔案加密卷。需要的時間會因為你設定的空間大小、電腦效能等等不同的因素而有差異

![](/media/VeraCrypt_EncryptFile_6.png)

完成後就會看到通知顯示**加密卷已成功創建**

![VeraCrypt_EncryptFile_7](/media/VeraCrypt_EncryptFile_7.png)

完成後即可按下**退出**來結束。如果還要創建另一個加密卷可以按**下一步**

![VeraCrypt_EncryptFile_8](/media/VeraCrypt_EncryptFile_8.png)

我們可以看到加密的分區沒有任何空間可以使用

如果嘗試打開他，系統會顯示錯誤或是叫我們將分區格式化，**記得不要格式化**，系統無法正確讀取是因為他被加密了

![VeraCrypt_EncryptDisk_5](/media/VeraCrypt_EncryptDisk_5.png)

## 解密檔案

要解密檔案時，第一步是在視窗上半部選擇一個要掛載的磁碟位置，因為當我們將一個檔案或是磁碟解密以後，VeraCrypt 會將解密的內容以一個新的磁碟的模式掛載在我們的電腦上

接著要選擇要解密的檔案或磁碟

* 透過 [創建檔案加密卷](#創建檔案加密卷) 創立加密檔案的話要請點選 **選擇檔**
* 透過 [加密非系統分區/設備](#加密非系統分區/設備) 創立加密磁碟的話請點選 **選擇設備**

這邊以選擇先前加密的 TestEncryptionFolder 並掛載在Z: 為例

選擇好磁碟位置和加密卷後，點選左下角的 載入 來開始解密

![VeraCrypt_Decrypt_1](/media/VeraCrypt_Decrypt_1.png)

第二步， VeraCrypt會問你加密的密碼

* 加密時使用的是密碼的話，請在 **密碼** 欄位輸入密碼
* 加密時使用的是密碼檔的話，請點選 **密鑰文件** 並加入透過[密碼文件生成器](#密碼文件生成器)生成的密碼檔

![VeraCrypt_Decrypt_2](/media/VeraCrypt_Decrypt_2.png)

解密會需要花一點時間，所需的時間會受到電腦效能、檔案大小和加密方法等不同因素影響

![VeraCrypt_Decrypt_3](/media/VeraCrypt_Decrypt_3.png)

成功解密後就可以看到加密的檔案已經掛載在 Z槽上，這時就可以開啟 Z槽自由的存放或讀取檔案

![VeraCrypt_Decrypt_4](/media/VeraCrypt_Decrypt_4.png)

## 加密檔案

當我們要將 檔案/磁碟 加密時，只要在視窗上半部選擇要加密的 檔案/磁碟 (這邊以選擇 Z槽為例) ，接著按下視窗左下角的 **卸載**，就可以加密 檔案/磁碟 

如果要同時加密許多 檔案/磁碟 的話，可以點視窗下排右二的 **全部卸載** 來加密所有 檔案/磁碟 

![VeraCrypt_Decrypt_4](/media/VeraCrypt_Decrypt_4.png)

成功加密並卸載的話，該磁碟就會從視窗上半部消失

## 永久解密

不再需要一個加密檔案或磁碟時，可以將它永久解密

第一步，先在主視窗點選**選擇檔**或**選擇設備**來選擇我們要永久解密的檔案或設備

![VeraCrypt_Decrypt_5](/media/VeraCrypt_Decrypt_5.png)

第二步，點選**加密卷工具**，並點選單中的**永久解密**

![VeraCrypt_Decrypt_6](/media/VeraCrypt_Decrypt_6.png)

VeraCrypt會連續跳出兩個警告，提醒我們永久解密可能帶來的影響，確定要解密的話可以快速按過去

接著會請我們提供加密的密碼或密碼檔

* 加密時使用的是密碼的話，請在 **密碼** 欄位輸入密碼
* 加密時使用的是密碼檔的話，請點選 **密鑰文件** 並加入透過[密碼文件生成器](#密碼文件生成器)生成的密碼檔

輸入後按下**下一步**來解密

![VeraCrypt_Decrypt_7](/media/VeraCrypt_Decrypt_7.png)

如果輸入的密碼正確，就會回到解密頁面，這時就可以按下**解密**按鈕開始解密，他會跳出三個提醒

1. 第一個提醒會告知我們如果解密的過程被打斷 (如電腦斷電、系統當機等因素)，導致解密失敗的話檔案可能會無法回復，保險起見會建議大家先將加密過的檔案進行備份，以防萬一
2. 第二個提醒會告知我們解密的過程中我們會無法讀取該磁碟或資料夾下的認得檔案
3. 第三個是詢問我們有沒有[隱藏的加密](#隱藏的加密)卷在內，如果有的話請先將隱藏的加密單獨解密

![VeraCrypt_Decrypt_8](/media/VeraCrypt_Decrypt_8.png)

都確認過後就會開始解密，解密會需要花一點時間，所需的時間會受到電腦效能、檔案大小和加密方法等不同因素影響

![VeraCrypt_Decrypt_9](/media/VeraCrypt_Decrypt_9.png)

完成後會挑出通知，之後就可以正常使用這些檔案夾或磁碟了

![VeraCrypt_Decrypt_10](media/VeraCrypt_Decrypt_10.png)

## 密碼文件生成器

VeraCrypt 有內建的密碼文件生成器，可以生成安全且隨機的密碼檔來加密解密。

密碼文件產生器在 **VeraCrypt 工具列** > 工具 >**密碼文件生成器**

![VeraCrypt_Keygen_1](/media/VeraCrypt_Keygen_1.png)

密碼文件生成器 會透過我們的滑鼠在視窗內隨機移動，來產生隨機的密碼，移動時間越長，隨機性越高，理論上安全性也會越高。

建議大家起碼要隨機移動滑鼠直到中間的進度條變綠色的。

最後在 **Keyfiles base name** 欄位輸入密碼文件的名稱，並按 **生成並保存密鑰檔** 即可。

如果要使用密鑰檔加密和解密的話，記得要把檔案保存好，檔案遺失的話是無法復原的，加密的檔案就會再也無法解密。

![VeraCrypt_Keygen_2](/media/VeraCrypt_Keygen_2.png)