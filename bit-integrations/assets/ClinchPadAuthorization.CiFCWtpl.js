import{_ as t,j as p}from"./main.2.10.1.js";import{A as m}from"./AddNewConnection.Cg7SuMmE.js";import{t as h}from"./TutorialLink.7h569T9O.js";import{A as c}from"./Authorization.BlvzxFIu.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.ChZVS3S8.js";import"./Note.C35kKkP7.js";import"./SnackMsg.C9WJBVrt.js";import"./ConfirmModal.CDiTORwS.js";import"./oauthHelper.OhIQKmID.js";import"./BackIcn.BKNyOYwv.js";import"./Integrations.CKp7NfRF.js";import"./Table.pymT9y8u.js";import"./index.DpWdl9V1.js";import"./InfoIcn.BrKQmO96.js";function z({clinchPadConf:o,setClinchPadConf:a,step:n,setStep:e,isInfo:r}){var i;const s=`
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
