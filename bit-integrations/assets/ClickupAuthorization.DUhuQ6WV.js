import{_ as t,j as s}from"./main.2.10.8.js";import{A as l}from"./AddNewConnection.CSl-aUAS.js";import{t as m}from"./TutorialLink.DFmBJ6jB.js";import{A as u}from"./Authorization.DpB18Uf2.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.CYq6SLFH.js";import"./Note.dPKVKnj8.js";import"./SnackMsg.B7yKjV9h.js";import"./ConfirmModal.DjUTHz5T.js";import"./oauthHelper.CtoifEmb.js";import"./BackIcn.CJxgNP3V.js";import"./Integrations.CPa6tDEs.js";import"./Table.CrLXNgTi.js";import"./index.Cj5suhk1.js";import"./InfoIcn.C__G0NXw.js";function P({clickupConf:o,setClickupConf:r,step:e,setStep:p,isInfo:n}){var i;const a=`
    <h4>${t("To get the ClickUp API key","bit-integrations")}</h4>
    <ul>
      <li>${t("Visit","bit-integrations")} <a href="https://app.clickup.com/settings/apps" target="_blank" rel="noreferrer">${t("ClickUp Apps","bit-integrations")}</a> ${t("to get your credentials.","bit-integrations")}</li>
      <li>${t("Open your personal Settings in ClickUp.","bit-integrations")}</li>
      <li>${t("Go to Apps in the left sidebar.","bit-integrations")}</li>
      <li>${t("Generate your API token and copy it.","bit-integrations")}</li>
    </ul>`;return s.jsx(u,{config:o,setConfig:r,step:e,setStep:p,isInfo:n,tutorialTitle:"ClickUp",tutorialLinks:((i=m)==null?void 0:i.clickup)||{},authDetails:{authType:l.API_KEY,apiEndpoint:"https://api.clickup.com/api/v2/user",method:"GET",key:"Authorization",addTo:"header"},noteDetails:{note:a}})}export{P as default};
