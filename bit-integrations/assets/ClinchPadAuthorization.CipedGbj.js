import{_ as t,j as p}from"./main.2.10.4.js";import{A as m}from"./AddNewConnection.B2iullfe.js";import{t as h}from"./TutorialLink.Jph0Wyx1.js";import{A as c}from"./Authorization.CEG4BCsq.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.BAYnB26G.js";import"./Note.BlcqXpwI.js";import"./SnackMsg.CjV2AznC.js";import"./ConfirmModal.LX-d7pCX.js";import"./oauthHelper.DdIjK7ap.js";import"./BackIcn.C0X1dWEt.js";import"./Integrations.cQMbRc1e.js";import"./Table.CDoeMbPk.js";import"./index.Cj5suhk1.js";import"./InfoIcn.Bqjy485j.js";function z({clinchPadConf:o,setClinchPadConf:a,step:n,setStep:e,isInfo:r}){var i;const s=`
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
