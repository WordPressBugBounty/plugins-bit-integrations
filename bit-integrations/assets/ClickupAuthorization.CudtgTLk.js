import{_ as t,j as s}from"./main.2.10.3.js";import{A as l}from"./AddNewConnection.BCtQJFwj.js";import{t as m}from"./TutorialLink.Cx9cwS8W.js";import{A as u}from"./Authorization.hFl5SniY.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.BRDXEvT3.js";import"./Note.CGYSFn76.js";import"./SnackMsg.CziG1LAl.js";import"./ConfirmModal.Bv5a6udM.js";import"./oauthHelper.B8KZ6m8n.js";import"./BackIcn.BNm9Wd7j.js";import"./Integrations.DwaOhg5C.js";import"./Table.CAuj7UWX.js";import"./index.DpWdl9V1.js";import"./InfoIcn.R6rudVDk.js";function P({clickupConf:o,setClickupConf:r,step:e,setStep:p,isInfo:n}){var i;const a=`
    <h4>${t("To get the ClickUp API key","bit-integrations")}</h4>
    <ul>
      <li>${t("Visit","bit-integrations")} <a href="https://app.clickup.com/settings/apps" target="_blank" rel="noreferrer">${t("ClickUp Apps","bit-integrations")}</a> ${t("to get your credentials.","bit-integrations")}</li>
      <li>${t("Open your personal Settings in ClickUp.","bit-integrations")}</li>
      <li>${t("Go to Apps in the left sidebar.","bit-integrations")}</li>
      <li>${t("Generate your API token and copy it.","bit-integrations")}</li>
    </ul>`;return s.jsx(u,{config:o,setConfig:r,step:e,setStep:p,isInfo:n,tutorialTitle:"ClickUp",tutorialLinks:((i=m)==null?void 0:i.clickup)||{},authDetails:{authType:l.API_KEY,apiEndpoint:"https://api.clickup.com/api/v2/user",method:"GET",key:"Authorization",addTo:"header"},noteDetails:{note:a}})}export{P as default};
