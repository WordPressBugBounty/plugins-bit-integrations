import{_ as t,j as p}from"./main.2.10.5.js";import{A as m}from"./AddNewConnection.ZSJpjktE.js";import{t as h}from"./TutorialLink.CwM5Erkp.js";import{A as c}from"./Authorization.OdAOjA5a.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.YC94EGca.js";import"./Note.B-17Qwzj.js";import"./SnackMsg.BDVvEnJN.js";import"./ConfirmModal.DTyqLZln.js";import"./oauthHelper.DUT-DMeg.js";import"./BackIcn.fWOyMwfe.js";import"./Integrations.-a67RnHI.js";import"./Table.mVtsKoRn.js";import"./index.Cj5suhk1.js";import"./InfoIcn.m5Eff8OI.js";function z({clinchPadConf:o,setClinchPadConf:a,step:n,setStep:e,isInfo:r}){var i;const s=`
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
  `;return p.jsx(c,{config:o,setConfig:a,step:n,setStep:e,isInfo:r,tutorialTitle:"ClinchPad",tutorialLinks:((i=h)==null?void 0:i.clinchPad)||{},authDetails:{authType:m.API_KEY,apiEndpoint:"https://www.clinchpad.com/api/v1/users",method:"GET",key:"X-BI-Auth",addTo:"header",headers:l=>({Authorization:`Basic ${btoa(`api-key:${l.api_key||""}`)}`})},noteDetails:{note:s}})}export{z as default};
