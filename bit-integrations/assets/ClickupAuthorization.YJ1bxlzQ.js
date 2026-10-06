import{_ as t,j as s}from"./main.2.10.7.js";import{A as l}from"./AddNewConnection.CG4L4NdA.js";import{t as m}from"./TutorialLink.CEkST12p.js";import{A as u}from"./Authorization.CYT2dGty.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.CsXMJc5B.js";import"./Note.BTCbylpB.js";import"./SnackMsg.BiNmgEkT.js";import"./ConfirmModal.6ebrzmWw.js";import"./oauthHelper.Cyy1HwK5.js";import"./BackIcn.DJrGb9_v.js";import"./Integrations.CXYgDy-L.js";import"./Table.CT6ZfeMu.js";import"./index.Cj5suhk1.js";import"./InfoIcn.Bdx9y8ki.js";function P({clickupConf:o,setClickupConf:r,step:e,setStep:p,isInfo:n}){var i;const a=`
    <h4>${t("To get the ClickUp API key","bit-integrations")}</h4>
    <ul>
      <li>${t("Visit","bit-integrations")} <a href="https://app.clickup.com/settings/apps" target="_blank" rel="noreferrer">${t("ClickUp Apps","bit-integrations")}</a> ${t("to get your credentials.","bit-integrations")}</li>
      <li>${t("Open your personal Settings in ClickUp.","bit-integrations")}</li>
      <li>${t("Go to Apps in the left sidebar.","bit-integrations")}</li>
      <li>${t("Generate your API token and copy it.","bit-integrations")}</li>
    </ul>`;return s.jsx(u,{config:o,setConfig:r,step:e,setStep:p,isInfo:n,tutorialTitle:"ClickUp",tutorialLinks:((i=m)==null?void 0:i.clickup)||{},authDetails:{authType:l.API_KEY,apiEndpoint:"https://api.clickup.com/api/v2/user",method:"GET",key:"Authorization",addTo:"header"},noteDetails:{note:a}})}export{P as default};
