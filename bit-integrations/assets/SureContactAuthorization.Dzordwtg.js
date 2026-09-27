import{j as s,_ as t}from"./main.2.10.6.js";import{A as p}from"./AddNewConnection.hKxiu-to.js";import{t as m}from"./TutorialLink.ncpc8QXW.js";import{A as l}from"./Authorization.DlgvbGol.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.FxPjCsMi.js";import"./Note.BsYUdR7w.js";import"./SnackMsg.BrXUpNxZ.js";import"./ConfirmModal.AfAanEBl.js";import"./oauthHelper.DJJ2i8px.js";import"./BackIcn.CYKCF9tX.js";import"./Integrations.DmnW9IBG.js";import"./Table.Ce2z5dAi.js";import"./index.Cj5suhk1.js";import"./InfoIcn.lRS02cun.js";const c="https://app.surecontact.com/settings/api-keys",u=`
    <h4>${t("Steps to generate an API key:","bit-integrations")}</h4>
    <ul>
      <li>${t("Go to","bit-integrations")} <a href=${c} target="_blank" rel="noreferrer">${t("SureContact API Keys","bit-integrations")}</a></li>
      <li>${t("Create a key and copy it.","bit-integrations")}</li>
      <li>${t("Paste it into the <b>Bearer Token</b> field and click <b>Authorize</b>.","bit-integrations")}</li>
    </ul>
  `;function P({sureContactConf:o,setSureContactConf:r,step:e,setstep:a,isInfo:n}){var i;return s.jsx(l,{config:o,setConfig:r,step:e,setStep:a,isInfo:n,tutorialTitle:"SureContact",tutorialLinks:((i=m)==null?void 0:i.sureContact)||{},authDetails:{authType:p.BEARER_TOKEN,apiEndpoint:"https://api.surecontact.com/api/v1/public/lists",method:"GET",headers:{Accept:"application/json"}},noteDetails:{note:u}})}export{P as default};
