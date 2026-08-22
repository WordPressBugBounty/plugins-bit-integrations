import{_ as t,j as p}from"./main.2.10.3.js";import{A as m}from"./AddNewConnection.BCtQJFwj.js";import{t as l}from"./TutorialLink.Cx9cwS8W.js";import{A as u}from"./Authorization.hFl5SniY.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.BRDXEvT3.js";import"./Note.CGYSFn76.js";import"./SnackMsg.CziG1LAl.js";import"./ConfirmModal.Bv5a6udM.js";import"./oauthHelper.B8KZ6m8n.js";import"./BackIcn.BNm9Wd7j.js";import"./Integrations.DwaOhg5C.js";import"./Table.CAuj7UWX.js";import"./index.DpWdl9V1.js";import"./InfoIcn.R6rudVDk.js";function R({asanaConf:o,setAsanaConf:a,step:r,setStep:n,isInfo:e}){var i;const s=`
    <h4>${t("Get API token","bit-integrations")}</h4>
    <ul>
      <li>${t("Visit","bit-integrations")} <a href="https://app.asana.com/0/my-apps" target="_blank" rel="noreferrer">${t("Asana Developer Apps","bit-integrations")}</a> ${t("to get your credentials.","bit-integrations")}</li>
      <li>${t("Open your Asana account settings.","bit-integrations")}</li>
      <li>${t("Create a personal access token.","bit-integrations")}</li>
      <li>${t("Use that token for this connection.","bit-integrations")}</li>
    </ul>`;return p.jsx(u,{config:o,setConfig:a,step:r,setStep:n,isInfo:e,tutorialTitle:"Asana",tutorialLinks:((i=l)==null?void 0:i.asana)||{},authDetails:{authType:m.BEARER_TOKEN,apiEndpoint:"https://app.asana.com/api/1.0/users/me",method:"GET"},noteDetails:{note:s}})}export{R as default};
