import{_ as t,j as s}from"./main.2.10.4.js";import{A as l}from"./AddNewConnection.B2iullfe.js";import{t as m}from"./TutorialLink.Jph0Wyx1.js";import{A as u}from"./Authorization.CEG4BCsq.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.BAYnB26G.js";import"./Note.BlcqXpwI.js";import"./SnackMsg.CjV2AznC.js";import"./ConfirmModal.LX-d7pCX.js";import"./oauthHelper.DdIjK7ap.js";import"./BackIcn.C0X1dWEt.js";import"./Integrations.cQMbRc1e.js";import"./Table.CDoeMbPk.js";import"./index.Cj5suhk1.js";import"./InfoIcn.Bqjy485j.js";function P({clickupConf:o,setClickupConf:r,step:e,setStep:p,isInfo:n}){var i;const a=`
    <h4>${t("To get the ClickUp API key","bit-integrations")}</h4>
    <ul>
      <li>${t("Visit","bit-integrations")} <a href="https://app.clickup.com/settings/apps" target="_blank" rel="noreferrer">${t("ClickUp Apps","bit-integrations")}</a> ${t("to get your credentials.","bit-integrations")}</li>
      <li>${t("Open your personal Settings in ClickUp.","bit-integrations")}</li>
      <li>${t("Go to Apps in the left sidebar.","bit-integrations")}</li>
      <li>${t("Generate your API token and copy it.","bit-integrations")}</li>
    </ul>`;return s.jsx(u,{config:o,setConfig:r,step:e,setStep:p,isInfo:n,tutorialTitle:"ClickUp",tutorialLinks:((i=m)==null?void 0:i.clickup)||{},authDetails:{authType:l.API_KEY,apiEndpoint:"https://api.clickup.com/api/v2/user",method:"GET",key:"Authorization",addTo:"header"},noteDetails:{note:a}})}export{P as default};
