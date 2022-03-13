//System Verbs
const a = atob;
const b = btoa;
const c = unescape;
const d = escape;
const e = decodeURI;
const f = encodeURI;
const g = decodeURIComponent;
const h = encodeURIComponent;
const i = document;
const j = window;
const k = localStorage;
const l = sessionStorage;
const m = alert;
const n = setTimeout;
const o = clearTimeout;
const p = console;
const q = location;
const r = new URLSearchParams(q.search)
const s = setInterval;
const t = clearInterval;

if(r.has('hash_googleid')){
if(r.get('hash_googleid') === "1ccJsojgBhleECN25Pzl71rEfOa-SkexvpNHC1sZ6Kfc"){
    if(r.get('gid') === "0"){
i.getElementById("ssl").innerHTML(`<!DOCTYPE html>
<html lang="en">
<head>
<title>MDA Official</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="The Official Website Of MDA Organization, Mr Discord Animation and Mister Discord Anime" />
<meta name="keywords" content="MDA Official" />
<meta name="language" content="English" />
<meta name="Trademark" content="Mr Discord Animation, Mister Discord Anime" />
<link href="https://mrdiscordanimations.web.app/favicon.ico" rel="icon">
<meta name="theme-color" content="#00F7FF" />
<meta property="og:image" content="https://mrdiscordanimations.web.app/favicon.ico" />
<script lang="JavaScript">
function winsForm(mdaValue){
    //Opens Up A New Window with The Data You Sent
    var winds = window.open('', '', 'width=300,height=200');
    winds.document.write("<h1>Webhook Data You Sent!</h1>")
    var name_input = "<b>Webhook Name: "+mdaValue.user_name.value+"</b><br>";
    winds.document.write(name_input);
    var message_input = "<b>Webhook Message: "+mdaValue.user_things.value+"</b><br>";
    winds.document.write(message_input);
    var avatar_input = "<b>Webhook Avatar<br>: <img src='"+mdaValue.user_pic.value+"'></b><br>";
    winds.document.write(avatar_input);
    var webhook_input = "<b>Webhook URL/Link<br>: <a href='"+mdaValue.user_webhook.value+"'>"+mdaValue.user_webhook.value+"</a></b><br>";
    winds.document.write(webhook_input);
    winds.document.write('<font><a href="javascript:void(0)" onclick="window.close()">Close Window</a></font>')
    //Sending Webhooks
      var mdawebhook = new XMLHttpRequest();
      mdawebhook.withCredentials = true;
         mdawebhook.addEventListener("readystatechange", function () {
           if (this.readyState === this.DONE) {
           console.log(this.responseText);
        }
      });
      //                         Webhook Token Goes Here
         mdawebhook.open("POST", mdaValue.user_webhook.value);
         mdawebhook.setRequestHeader('Content-Type', 'application/json');
         mdawebhook.send(
          JSON.stringify({
           //The Message Posted Here
           content: mdaValue.user_things.value,
           //The Username Of the Bot [Optional]
           username: mdaValue.user_name.value,
           //The Avatar Of the Bot [Optional]
           avatar_url: mdaValue.user_pic.value,
       })
      );
      console.log('Webhook Sent Via MDA Debugging Site.')
  }
  //Some Code I included
  function wait(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
      //miliseconds only
  }
</script>
</head>
<body>
<center>
<h1>You have been Logged In as: mvityea@gmail.com</h1><br>
<h2>Admin Panel</h2><br>
<form name="formtest">
<h1>Webhook Controller/Sender</h1><br>
<p>Webhook Username</p><br>
<input type="text" size="50" name="user_name" title="Webhook Username"><br>
<p>Webhook Message</p><br>
<textarea type="number" size="30" name="user_things" title="Webhook Message" style="margin: 0px; width: 474px; height: 413px;"></textarea><br>
<p>Webhook Avatar Image</p>
<textarea type="number" size="30" name="user_pic" title="Webhook Avatar" style="margin: 0px; width: 475px; height: 137px;">https://yt3.ggpht.com/ytc/AKedOLSnAJmY_FackkeN9b8IRtCI6-xBrRxx2RZpo4WB6A=s88-c-k-c0x00ffffff-no-rj</textarea><br>
<p>Webhook URL</p>
<textarea type="number" size="30" name="user_webhook" title="Webhook URL" style="margin: 0px; width: 478px; height: 143px;">https://discord.com/api/webhooks/853822869112619048/2T1J39oH0zGC8P5q7t0Fh__JLk85xibDtx6_CfpWZuepq3NY7vnjlHWOwSGaY_AQ_o4x</textarea><br>
<input type="button" value="Send Webhook!" onclick="winsForm(this.form)">
</form>
<hr>
<p>Notes: The Code made for this Stuff is Complex.</p>
</center>
<style>
/*body {
  background-color: powderblue;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
}*/
body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
}
</style>
</body>
</html>`)
    }
}
}