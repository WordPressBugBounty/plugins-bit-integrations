import{_ as t,j as p}from"./main.2.11.0.js";import{A as s}from"./AddNewConnection.pNRNvRSd.js";import{A as l}from"./Authorization.BIchEf0K.js";import{t as u}from"./TutorialLink.u015MAgn.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.B4OSXcxp.js";import"./Note.NHlZiuVe.js";import"./SnackMsg.BZQz3MDI.js";import"./ConfirmModal.4VHPoM9g.js";import"./oauthHelper.BpU8usvP.js";import"./BackIcn.BmViP7Zj.js";import"./Integrations.DzOTQ6dT.js";import"./Table.DbgUlRk3.js";import"./index.Cj5suhk1.js";import"./InfoIcn.CLEAzlAd.js";function x({omniSendConf:o,setOmniSendConf:n,step:e,setstep:r,isInfo:a}){var i;const m=`
    <h4>${t("Step of generate API token:","bit-integrations")}</h4>
    <ul>
      <li>${t("Goto","bit-integrations")} <a href="https://app.omnisend.com/o/my-account/integrations/api-keys">${t("Generate API Token","bit-integrations")}</a></li>
      <li>${t("Copy the <b>Token</b> and paste into <b>API Token</b> field of your authorization form.","bit-integrations")}</li>
      <li>${t("Finally, click <b>Authorize</b> button.","bit-integrations")}</li>
  </ul>
  `;return p.jsx(l,{config:o,setConfig:n,step:e,setStep:r,isInfo:a,tutorialTitle:"Omnisend",tutorialLinks:((i=u)==null?void 0:i.omniSend)||{},authDetails:{authType:s.API_KEY,apiEndpoint:"https://api.omnisend.com/v3/contacts",method:"GET",key:"X-API-KEY",addTo:"header"},noteDetails:{note:m}})}export{x as default};
