import{j as s,_ as t}from"./main.2.10.8.js";import{A as p}from"./AddNewConnection.CSl-aUAS.js";import{t as m}from"./TutorialLink.DFmBJ6jB.js";import{A as l}from"./Authorization.DpB18Uf2.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.CYq6SLFH.js";import"./Note.dPKVKnj8.js";import"./SnackMsg.B7yKjV9h.js";import"./ConfirmModal.DjUTHz5T.js";import"./oauthHelper.CtoifEmb.js";import"./BackIcn.CJxgNP3V.js";import"./Integrations.CPa6tDEs.js";import"./Table.CrLXNgTi.js";import"./index.Cj5suhk1.js";import"./InfoIcn.C__G0NXw.js";const c="https://app.surecontact.com/settings/api-keys",u=`
    <h4>${t("Steps to generate an API key:","bit-integrations")}</h4>
    <ul>
      <li>${t("Go to","bit-integrations")} <a href=${c} target="_blank" rel="noreferrer">${t("SureContact API Keys","bit-integrations")}</a></li>
      <li>${t("Create a key and copy it.","bit-integrations")}</li>
      <li>${t("Paste it into the <b>Bearer Token</b> field and click <b>Authorize</b>.","bit-integrations")}</li>
    </ul>
  `;function P({sureContactConf:o,setSureContactConf:r,step:e,setstep:a,isInfo:n}){var i;return s.jsx(l,{config:o,setConfig:r,step:e,setStep:a,isInfo:n,tutorialTitle:"SureContact",tutorialLinks:((i=m)==null?void 0:i.sureContact)||{},authDetails:{authType:p.BEARER_TOKEN,apiEndpoint:"https://api.surecontact.com/api/v1/public/lists",method:"GET",headers:{Accept:"application/json"}},noteDetails:{note:u}})}export{P as default};
