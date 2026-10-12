import{_ as i,j as b}from"./main.2.10.8.js";import{b as h}from"./react-router.BiLdldC0.js";import{A as f}from"./AddNewConnection.CSl-aUAS.js";import{t as c}from"./TutorialLink.DFmBJ6jB.js";import{A}from"./Authorization.DpB18Uf2.js";import{a as y}from"./RapidmailCommonFunc.DOu2WV_B.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.CYq6SLFH.js";import"./Note.dPKVKnj8.js";import"./SnackMsg.B7yKjV9h.js";import"./ConfirmModal.DjUTHz5T.js";import"./oauthHelper.CtoifEmb.js";import"./BackIcn.CJxgNP3V.js";import"./Integrations.CPa6tDEs.js";import"./Table.CrLXNgTi.js";import"./index.Cj5suhk1.js";import"./InfoIcn.C__G0NXw.js";function H({rapidmailConf:t,setRapidmailConf:o,step:n,setstep:r,setIsLoading:e,setSnackbar:p,isInfo:m}){var a;const l=h.useCallback(s=>{s===2&&!(t!=null&&t.default)&&y(t,o,e),r(s)},[t,o,e,p,r]),u=`
    <h4>${i("Step of creating username and password:","bit-integrations")}</h4>
    <ul>
      <li>${i("Goto","bit-integrations")}Goto <a href="https://my.rapidmail.com/api/v3/userlist.html#/">Generate API User</a> and create an api user.</li>
      <li>${i("Copy the <b>Username</b> and paste into <b>Username</b> field of your authorization form.","bit-integrations")}</li>
      <li>${i("Copy the <b>Password</b> and paste into <b>Password</b> field of your authorization form.","bit-integrations")}</li>
      <li>${i("Finally, click <b>Authorize</b> button.","bit-integrations")}</li>
  </ul>
  `;return b.jsx(A,{config:t,setConfig:o,step:n,setStep:l,isInfo:m,tutorialTitle:"Rapidmail",tutorialLinks:((a=c)==null?void 0:a.rapidmail)||{},authDetails:{authType:f.BASIC_AUTH,apiEndpoint:"https://apiv3.emailsys.net/v1/apiusers",method:"GET",ssl_verify:!1},noteDetails:{note:u}})}export{H as default};
