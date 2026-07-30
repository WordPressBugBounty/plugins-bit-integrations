import{_ as t,j as p}from"./main.2.10.1.js";import{A as s}from"./AddNewConnection.Cg7SuMmE.js";import{A as l}from"./Authorization.BlvzxFIu.js";import{t as u}from"./TutorialLink.7h569T9O.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.ChZVS3S8.js";import"./Note.C35kKkP7.js";import"./SnackMsg.C9WJBVrt.js";import"./ConfirmModal.CDiTORwS.js";import"./oauthHelper.OhIQKmID.js";import"./BackIcn.BKNyOYwv.js";import"./Integrations.CKp7NfRF.js";import"./Table.pymT9y8u.js";import"./index.DpWdl9V1.js";import"./InfoIcn.BrKQmO96.js";function x({omniSendConf:o,setOmniSendConf:n,step:e,setstep:r,isInfo:a}){var i;const m=`
    <h4>${t("Step of generate API token:","bit-integrations")}</h4>
    <ul>
      <li>${t("Goto","bit-integrations")} <a href="https://app.omnisend.com/o/my-account/integrations/api-keys">${t("Generate API Token","bit-integrations")}</a></li>
      <li>${t("Copy the <b>Token</b> and paste into <b>API Token</b> field of your authorization form.","bit-integrations")}</li>
      <li>${t("Finally, click <b>Authorize</b> button.","bit-integrations")}</li>
  </ul>
  `;return p.jsx(l,{config:o,setConfig:n,step:e,setStep:r,isInfo:a,tutorialTitle:"Omnisend",tutorialLinks:((i=u)==null?void 0:i.omniSend)||{},authDetails:{authType:s.API_KEY,apiEndpoint:"https://api.omnisend.com/v3/contacts",method:"GET",key:"X-API-KEY",addTo:"header"},noteDetails:{note:m}})}export{x as default};
