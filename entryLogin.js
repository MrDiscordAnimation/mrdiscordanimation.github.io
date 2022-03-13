function checkUser(){
    var username = document.getElementById("usr").value;
    var password = document.getElementById("pwd").value;
    var capornotcap = document.getElementById("cpt").value;
    if ( username == "MDASQTCorp" && password == "MDA_Inc." && capornotcap == "digitalAssets"){
      document.getElementById("headerLogin").innerText = "MDA Control Center";
      document.getElementById("bodyLogin").innerHTML = `
      <p>Notes: MDAScript is currently Developing JS Impact. While, MDA Security Work on Encryption</p><br>

<form name="formtest">
<h1>Webhook Controller/Sender</h1><br>
<p>Webhook Username</p><br>
<input type="text" size="50" name="user_name" title="Webhook Username"><br>
<p>Webhook Message</p><br>
<textarea type="number" size="30" name="user_things" title="Webhook Message" style="margin: 0px; width: 474px; height: 413px;"></textarea><br>
<p>Webhook Avatar Image</p>
<textarea type="number" size="30" name="user_pic" title="Webhook Avatar" style="margin: 0px; width: 475px; height: 137px;">https://yt3.ggpht.com/ytc/AKedOLSnAJmY_FackkeN9b8IRtCI6-xBrRxx2RZpo4WB6A=s88-c-k-c0x00ffffff-no-rj</textarea><br>
<p>Webhook URL</p>
<textarea type="number" size="30" name="user_webhook" title="Webhook URL" style="margin: 0px; width: 478px; height: 143px;"></textarea><br>
<input type="button" value="Send Webhook!" onclick="winsForm(this.form)">
</form>
      `;
      console.log("Login Success! Current Data have been Displayed!")
    }
    else{
        document.getElementById("headerLogin").innerText = "Login Failed!";
        document.getElementById("bodyLogin").innerHTML = `<button onclick="location.reload()">Click Here to Retry</button>`;
        console.log("Login Failed! Access to Login must Be Refreshed!")
    }
    }
