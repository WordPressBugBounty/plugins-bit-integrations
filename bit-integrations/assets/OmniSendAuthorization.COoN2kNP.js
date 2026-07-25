import{_ as t,j as m}from"./main.2.10.0.js";import{A as p}from"./AddNewConnection.DCTHIFxq.js";import{A as l}from"./Authorization.BmZ1lyOd.js";import{t as u}from"./TutorialLink.BAPo3x0A.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.QyWx8Unk.js";import"./Note.Dyd4oGF7.js";import"./SnackMsg.dVUsvxBp.js";import"./ConfirmModal.BVwU3lxl.js";import"./oauthHelper.Bbf-wdGf.js";import"./BackIcn.B7f1heI_.js";function I({omniSendConf:o,setOmniSendConf:n,step:e,setstep:a,isInfo:r}){var i;const s=`
    <h4>${t("Step of generate API token:","bit-integrations")}</h4>
    <ul>
      <li>${t("Goto","bit-integrations")} <a href="https://app.omnisend.com/o/my-account/integrations/api-keys">${t("Generate API Token","bit-integrations")}</a></li>
      <li>${t("Copy the <b>Token</b> and paste into <b>API Token</b> field of your authorization form.","bit-integrations")}</li>
      <li>${t("Finally, click <b>Authorize</b> button.","bit-integrations")}</li>
  </ul>
  `;return m.jsx(l,{config:o,setConfig:n,step:e,setStep:a,isInfo:r,tutorialTitle:"Omnisend",tutorialLinks:((i=u)==null?void 0:i.omniSend)||{},authDetails:{authType:p.API_KEY,apiEndpoint:"https://api.omnisend.com/v3/contacts",method:"GET",key:"X-API-KEY",addTo:"header"},noteDetails:{note:s}})}export{I as default};
