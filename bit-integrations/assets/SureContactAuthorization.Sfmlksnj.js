import{j as s,_ as t}from"./main.2.10.4.js";import{A as p}from"./AddNewConnection.B2iullfe.js";import{t as m}from"./TutorialLink.Jph0Wyx1.js";import{A as l}from"./Authorization.CEG4BCsq.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.BAYnB26G.js";import"./Note.BlcqXpwI.js";import"./SnackMsg.CjV2AznC.js";import"./ConfirmModal.LX-d7pCX.js";import"./oauthHelper.DdIjK7ap.js";import"./BackIcn.C0X1dWEt.js";import"./Integrations.cQMbRc1e.js";import"./Table.CDoeMbPk.js";import"./index.Cj5suhk1.js";import"./InfoIcn.Bqjy485j.js";const c="https://app.surecontact.com/settings/api-keys",u=`
    <h4>${t("Steps to generate an API key:","bit-integrations")}</h4>
    <ul>
      <li>${t("Go to","bit-integrations")} <a href=${c} target="_blank" rel="noreferrer">${t("SureContact API Keys","bit-integrations")}</a></li>
      <li>${t("Create a key and copy it.","bit-integrations")}</li>
      <li>${t("Paste it into the <b>Bearer Token</b> field and click <b>Authorize</b>.","bit-integrations")}</li>
    </ul>
  `;function P({sureContactConf:o,setSureContactConf:r,step:e,setstep:a,isInfo:n}){var i;return s.jsx(l,{config:o,setConfig:r,step:e,setStep:a,isInfo:n,tutorialTitle:"SureContact",tutorialLinks:((i=m)==null?void 0:i.sureContact)||{},authDetails:{authType:p.BEARER_TOKEN,apiEndpoint:"https://api.surecontact.com/api/v1/public/lists",method:"GET",headers:{Accept:"application/json"}},noteDetails:{note:u}})}export{P as default};
