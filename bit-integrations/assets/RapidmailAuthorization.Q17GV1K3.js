import{_ as i,j as b}from"./main.2.10.7.js";import{b as h}from"./react-router.BiLdldC0.js";import{A as f}from"./AddNewConnection.CG4L4NdA.js";import{t as c}from"./TutorialLink.CEkST12p.js";import{A}from"./Authorization.CYT2dGty.js";import{a as y}from"./RapidmailCommonFunc.DchMS5xg.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.CsXMJc5B.js";import"./Note.BTCbylpB.js";import"./SnackMsg.BiNmgEkT.js";import"./ConfirmModal.6ebrzmWw.js";import"./oauthHelper.Cyy1HwK5.js";import"./BackIcn.DJrGb9_v.js";import"./Integrations.CXYgDy-L.js";import"./Table.CT6ZfeMu.js";import"./index.Cj5suhk1.js";import"./InfoIcn.Bdx9y8ki.js";function H({rapidmailConf:t,setRapidmailConf:o,step:n,setstep:r,setIsLoading:e,setSnackbar:p,isInfo:m}){var a;const l=h.useCallback(s=>{s===2&&!(t!=null&&t.default)&&y(t,o,e),r(s)},[t,o,e,p,r]),u=`
    <h4>${i("Step of creating username and password:","bit-integrations")}</h4>
    <ul>
      <li>${i("Goto","bit-integrations")}Goto <a href="https://my.rapidmail.com/api/v3/userlist.html#/">Generate API User</a> and create an api user.</li>
      <li>${i("Copy the <b>Username</b> and paste into <b>Username</b> field of your authorization form.","bit-integrations")}</li>
      <li>${i("Copy the <b>Password</b> and paste into <b>Password</b> field of your authorization form.","bit-integrations")}</li>
      <li>${i("Finally, click <b>Authorize</b> button.","bit-integrations")}</li>
  </ul>
  `;return b.jsx(A,{config:t,setConfig:o,step:n,setStep:l,isInfo:m,tutorialTitle:"Rapidmail",tutorialLinks:((a=c)==null?void 0:a.rapidmail)||{},authDetails:{authType:f.BASIC_AUTH,apiEndpoint:"https://apiv3.emailsys.net/v1/apiusers",method:"GET",ssl_verify:!1},noteDetails:{note:u}})}export{H as default};
