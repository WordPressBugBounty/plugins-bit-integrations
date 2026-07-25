import{_ as t,j as p}from"./main.2.10.0.js";import{A as h}from"./AddNewConnection.DCTHIFxq.js";import{t as c}from"./TutorialLink.BAPo3x0A.js";import{A as m}from"./Authorization.BmZ1lyOd.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.QyWx8Unk.js";import"./Note.Dyd4oGF7.js";import"./SnackMsg.dVUsvxBp.js";import"./ConfirmModal.BVwU3lxl.js";import"./oauthHelper.Bbf-wdGf.js";import"./BackIcn.B7f1heI_.js";function C({clinchPadConf:o,setClinchPadConf:a,step:n,setStep:e,isInfo:r}){var i;const s=`
    <h4>${t("Get API token","bit-integrations")}</h4>
    <ul>
      <li>${t("Go to your ClinchPad account settings.","bit-integrations")}</li>
      <li>${t("Open API token section and copy the token.","bit-integrations")}</li>
      <li>${t("Paste the token and authorize.","bit-integrations")}</li>
    </ul>
    <small class="d-blk mt-3">
      ${t("To get API token, visit","bit-integrations")}
      <a class="btcd-link" href="https://clinchpad.com/#settings" target="_blank" rel="noreferrer">
        ${t("ClinchPad Settings","bit-integrations")}
      </a>
    </small>
  `;return p.jsx(m,{config:o,setConfig:a,step:n,setStep:e,isInfo:r,tutorialTitle:"ClinchPad",tutorialLinks:((i=c)==null?void 0:i.clinchPad)||{},authDetails:{authType:h.API_KEY,apiEndpoint:"https://www.clinchpad.com/api/v1/users",method:"GET",key:"X-BI-Auth",addTo:"header",headers:l=>({Authorization:`Basic ${btoa(`api-key:${l.api_key||""}`)}`})},noteDetails:{note:s}})}export{C as default};
