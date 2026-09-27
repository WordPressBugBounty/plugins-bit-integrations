import{_ as t,j as p}from"./main.2.10.6.js";import{A as m}from"./AddNewConnection.hKxiu-to.js";import{t as h}from"./TutorialLink.ncpc8QXW.js";import{A as c}from"./Authorization.DlgvbGol.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.FxPjCsMi.js";import"./Note.BsYUdR7w.js";import"./SnackMsg.BrXUpNxZ.js";import"./ConfirmModal.AfAanEBl.js";import"./oauthHelper.DJJ2i8px.js";import"./BackIcn.CYKCF9tX.js";import"./Integrations.DmnW9IBG.js";import"./Table.Ce2z5dAi.js";import"./index.Cj5suhk1.js";import"./InfoIcn.lRS02cun.js";function z({clinchPadConf:o,setClinchPadConf:a,step:n,setStep:e,isInfo:r}){var i;const s=`
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
