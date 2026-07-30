import{_ as i,j as b}from"./main.2.10.1.js";import{b as h}from"./react-router.DMwpH23k.js";import{A as f}from"./AddNewConnection.Cg7SuMmE.js";import{t as c}from"./TutorialLink.7h569T9O.js";import{A}from"./Authorization.BlvzxFIu.js";import{a as y}from"./RapidmailCommonFunc.AkGbBtQZ.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.ChZVS3S8.js";import"./Note.C35kKkP7.js";import"./SnackMsg.C9WJBVrt.js";import"./ConfirmModal.CDiTORwS.js";import"./oauthHelper.OhIQKmID.js";import"./BackIcn.BKNyOYwv.js";import"./Integrations.CKp7NfRF.js";import"./Table.pymT9y8u.js";import"./index.DpWdl9V1.js";import"./InfoIcn.BrKQmO96.js";function H({rapidmailConf:t,setRapidmailConf:o,step:n,setstep:r,setIsLoading:e,setSnackbar:p,isInfo:m}){var a;const l=h.useCallback(s=>{s===2&&!(t!=null&&t.default)&&y(t,o,e),r(s)},[t,o,e,p,r]),u=`
    <h4>${i("Step of creating username and password:","bit-integrations")}</h4>
    <ul>
      <li>${i("Goto","bit-integrations")}Goto <a href="https://my.rapidmail.com/api/v3/userlist.html#/">Generate API User</a> and create an api user.</li>
      <li>${i("Copy the <b>Username</b> and paste into <b>Username</b> field of your authorization form.","bit-integrations")}</li>
      <li>${i("Copy the <b>Password</b> and paste into <b>Password</b> field of your authorization form.","bit-integrations")}</li>
      <li>${i("Finally, click <b>Authorize</b> button.","bit-integrations")}</li>
  </ul>
  `;return b.jsx(A,{config:t,setConfig:o,step:n,setStep:l,isInfo:m,tutorialTitle:"Rapidmail",tutorialLinks:((a=c)==null?void 0:a.rapidmail)||{},authDetails:{authType:f.BASIC_AUTH,apiEndpoint:"https://apiv3.emailsys.net/v1/apiusers",method:"GET",ssl_verify:!1},noteDetails:{note:u}})}export{H as default};
