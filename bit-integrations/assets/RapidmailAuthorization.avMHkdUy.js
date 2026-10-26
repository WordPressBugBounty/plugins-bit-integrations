import{_ as i,j as b}from"./main.2.10.9.js";import{b as h}from"./react-router.BiLdldC0.js";import{A as f}from"./AddNewConnection.CW5LtuVJ.js";import{t as c}from"./TutorialLink.FqlDNemP.js";import{A}from"./Authorization.CAE17sQm.js";import{a as y}from"./RapidmailCommonFunc.BAZpngHV.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.2qKQDb3H.js";import"./Note.D09Bk593.js";import"./SnackMsg.Bv9CCMgQ.js";import"./ConfirmModal.LxmhgP6x.js";import"./oauthHelper.Ddb7PxK6.js";import"./BackIcn.Ctoh3-IH.js";import"./Integrations.2tzEmbEQ.js";import"./Table.DRq56MJy.js";import"./index.Cj5suhk1.js";import"./InfoIcn.gBRzPobO.js";function H({rapidmailConf:t,setRapidmailConf:o,step:n,setstep:r,setIsLoading:e,setSnackbar:p,isInfo:m}){var a;const l=h.useCallback(s=>{s===2&&!(t!=null&&t.default)&&y(t,o,e),r(s)},[t,o,e,p,r]),u=`
    <h4>${i("Step of creating username and password:","bit-integrations")}</h4>
    <ul>
      <li>${i("Goto","bit-integrations")}Goto <a href="https://my.rapidmail.com/api/v3/userlist.html#/">Generate API User</a> and create an api user.</li>
      <li>${i("Copy the <b>Username</b> and paste into <b>Username</b> field of your authorization form.","bit-integrations")}</li>
      <li>${i("Copy the <b>Password</b> and paste into <b>Password</b> field of your authorization form.","bit-integrations")}</li>
      <li>${i("Finally, click <b>Authorize</b> button.","bit-integrations")}</li>
  </ul>
  `;return b.jsx(A,{config:t,setConfig:o,step:n,setStep:l,isInfo:m,tutorialTitle:"Rapidmail",tutorialLinks:((a=c)==null?void 0:a.rapidmail)||{},authDetails:{authType:f.BASIC_AUTH,apiEndpoint:"https://apiv3.emailsys.net/v1/apiusers",method:"GET",ssl_verify:!1},noteDetails:{note:u}})}export{H as default};
