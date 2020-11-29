---
template: page
title: Form
slug: form
socialImage: /media/icon.jpeg
draft: true
---
<style>
label{
  padding:10px;
  margin: -5px;
}
input[type=text] {
  width: 100%;
  padding: 10px 10px;
  margin: 4px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
}

input[type=email] {
  width: 100%;
  padding: 10px 10px;
  margin: 4px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
}
textarea {
  width: 100%;
  height: 100px;
  margin: 4px 0;
  padding: 10px 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
}
button[type=submit] {
  padding: 0 24px;
  width: 100%;
  line-height: 18px;
  text-align: center;
  color: #222;
  background-color:rgba(255,255,255);
  border: 1px solid rgba(0, 0, 0, .23);
  border-radius: 20px;
  padding: 14px 20px;
  cursor: pointer;
}

button[type=submit]:hover,focus {
  color: #5d93ff ;
  border-color:#5d93ff;
}
</style>

也歡迎透過下面的表單傳送訊息給我們。 <br/><br/>

[](https://twitter.com/InfoSec_zip)<h2>傳送訊息</h2>

<form name="Contact Form" method="POST" data-netlify="true" action="/pages/success">
  <p>
    <label>如何稱呼您？</label><input type="text" name="name"/>
  </p>
  <p>
    <label>您的E-mail（方便我們回覆您的訊息，非必要）：</label><input type="email" name="email" />
  </p>
    <label>想說的話：</label><textarea name="message"></textarea>
  </p>
  <p>
    <button type="submit">傳送</button>
  </p>
</form>