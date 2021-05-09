---
template: post
title: EP46 - Pretty Good Privacy｜蠻好的隱私？
slug: ep46_pretty_good_privacy
socialImage: /media/ep46_cover.png
draft: false
date: 2021-05-09T20:24:34.019Z
description: 今天的主角是Pretty Good
  Privacy，先不要因為他白話到不行的名字而小看它，PGP可是能做到連國安局都無法破解的安全性！早在1991年就被開發出來的PGP到底是怎麼做到高規格的安全性、經過這麼多年還可以存活下來，而身為一般民眾又可以怎麼利用這份技術呢？
category: Episodes
tags:
  - PGP
  - PKI
  - public key
  - digital signature
---
## Podcast連結

* Apple Podcast
* Spotify Podcast
* [Firstory Podcast](https://open.firstory.me/story/ckohmxldp1sf408344yypud0g)

- - -

### 什麼是PGP？

PGP（Pretty Good Privacy）在1991年由Phil Zimmermann開發的一款加密工具，他可以被用來加密文字、email、檔案以及用來進行數位簽章。

Phil Zimmermann希望讓所有想要可以安全的傳送訊息的人都可以有一個安全的工具來保護自己，因此開發了PGP，並把程式跟原始碼免費提供給所有非商業用途的人。

後來Phil Zimmermann跟幾位夥伴為了PGP成立了一家公司，這家公司也在接下來的幾年間被幾家不同的公司收購跟轉手，在這些過程中PGP變成了一套需要付費購買才能用的私人的軟體。

Phil Zimmermann跟夥伴在成立了公司不久之後就與專門制定開放標準的組織IETF一起推出了一套以PGP為基礎的標準，這套標準叫做[OpenPGP](https://www.openpgp.org/)。只要是遵守這套標準，任何人都可以寫出跟PGP通用的軟體，換句話說就是即使PGP現在是一套付費的軟體，他的技術已經被公開讓大家都可以使用了。

現在被最廣泛使用的一套遵守OpenPGP軟體是免費和開源的 [GnuPG(簡稱GPG)](https://gnupg.org/)

![PGP_example](/media/PGP_example.png)

圖：使用PGP加密的訊息

#### 有趣的小故事

Phil Zimmermann在1993年被美國政府調查，原因是根據美國出口管理法案中的定義像是PGP這類型的加密系統會被認為是軍用品，而Phil Zimmermann在網路上免費提供PGP的過程中，PGP有被分享到美國以外的網站上，因此Phil Zimmermann可以算是非法出口軍用品。

後來Phil Zimmermann用了一個很有趣的方式應對，他把PGP的原始碼完整的寫成一本書再把這本書出版並且銷售到世界各地。根據美國憲法第一修正案中規定，因為言論自由的關係，美國政府不能管制書本的出口，因此利用這種方式就可以把原本不能公開分享的PGP變成可以被合法出口的產品了。任何拿到這本書的人只要把書中的程式碼透過一些免費公開的軟體編譯過就可以執行了。

#### PGP的應用實例

Edward Snowden曾經為美國的中央情報局CIA和國家安全局NSA工作過，他在2013年向媒體揭發了美國國安局的網路監視監聽計畫，在這之後，Snowden就被美國和英國政府通緝，而直到今天，Snowden仍然在俄羅斯流亡。當年Snowden為了確保安全性也為了避免走漏風聲，就特別跟媒體記者要求要使用一款叫做PGP的加密軟體。事後證明使用PGP保護email，是連美國國安局都無法破解跟知道email內容的。

![PGP_edwardsnowden](/media/pgp_edwardsnowden.png)

### PGP運作原理

> 前情提要：[密碼學](/posts/ep20_have_you_heard_of_cryptography)、[對稱式加密](/posts/ep21_public_key_encryption#對稱式加密)、[非對稱式加密/公開金鑰](/posts/ep21_public_key_encryption#非對稱式加密)

透過結合對稱式與非對稱式的兩種加密方法PGP可以做到安全性與效率。

非對稱式演算法的速度通常比較慢，因此檔案大小通常比較大的訊息本體我們就交給加密速度比較快的對稱式加密。

使用對稱式加密時，金鑰不知道怎麼安全的交給收件者的這個問題，就交給非對稱式加密來解決。

這些過程中使用者是可以選擇要用哪一種對稱式加密跟非對稱式加密，最多人用的GPG就支援了超過六種不同的非對稱式加密演算法跟對稱式加密演算法。

#### 透過PGP加密訊息

![PGP_encrypt](/media/PGP_encrypt.png)

1. 生成一組一次性的金鑰（用來透過對稱式加密來加密訊息）
2. 用朋友的公鑰透過非對稱式加密剛剛的一次性金鑰
3. 要將加密後的訊息、加密後的金鑰兩個一起傳給收件者

#### 透過PGP解密訊息

![PGP_decrypt](/media/PGP_decrypt.png)

1. 收件者透過自己有的私鑰解密被加密的金鑰
2. 利用這把金鑰，透過對稱式加密的方式把被我們加密的訊息解密

#### 透過PGP進行數位簽章

>  複習：[數位簽章 Digital Signature](/posts/ep21_public_key_encryption#數位簽章-digital-signature) 

![](/media/pgp_digitalsignature.png)

PGP透過非對稱式加密來做到簽章

假設我今天想要透過PGP來簽署一則要給朋友的訊息，我會把訊息用我的私鑰加密，接著把加密以後的內容連同沒有加密的訊息兩個一起寄給朋友。

當朋友收到想要確認這是不是真的是我傳的訊息的時候，可以透過我的公鑰把加密的訊息解密，接著拿解密以後的內容比對他收到沒有加密的訊息。

因為我的私鑰應該只有我有，因此如果可以成功用我的公鑰把訊息解密，而且解密以後的內容跟沒有加密的內容互相吻合的話，就代表這個訊息真的是我傳的。

#### 金鑰伺服器Keyserver

為了解決金鑰傳遞的問題，一些比較有公信力的組織架設了金鑰伺服器，這些金鑰伺服器就像一個個的資料庫，儲存了很多使用者的公開金鑰。

當我們使用PGP的時候，可以把自己的公開金鑰和一些像是姓名、Email等等的資料上傳到這些金鑰伺服器。

如果我們要傳訊息給一個不認識的人的話，我們就可以到這些金鑰伺服器上面搜尋他的名字或是Email，看看上面有沒有他的公開金鑰，如果有的話我們就可以用那些資訊來加密要傳送給他的訊息。

#### 金鑰保管的問題

我們前面有提到PGP的加密解密和數位簽章都會用到我們的公鑰和私鑰，有時候還會用到收件者的公鑰，那麼在管理金鑰上就是很重要的一件事了。

如果遺失了私鑰，我們就會沒有辦法解密任何傳送給我們的訊息，也會沒有辦法繼續進行數位簽章了。

如果私鑰被駭客竊取，駭客就會有辦法解密過去我們收到的每一則訊息，而且還可以假冒我們的名義傳送訊息或是進行數位簽章。

當上述的情況發生，我們都會需要產生一對新的公鑰和私鑰，並撤銷我們原本在用的金鑰。我們也會需要透過金鑰伺服器，來讓其他人知道不要再繼續使用舊的金鑰了，要改成用新的。

現在的主流Email服務都沒有內建PGP的功能，這些種種的因素都讓PGP不是那麼容易的可以被大眾使用。

### Mailvelope

一款採用OpenPGP標準的開放原始碼軟體，提供一般非商業的用戶免費使用。

他可以透過瀏覽器擴充套件的形式跟Gmail整合，讓我們可以簡單地用Gmail來傳送被PGP加密或是簽署的Email。

教學連結：[Mailvelope使用教學](/posts/patches_how_to_use_mailvelope)