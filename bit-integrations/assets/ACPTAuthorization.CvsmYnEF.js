import{_ as t,j as p}from"./main.2.10.3.js";import{A as l}from"./AddNewConnection.BCtQJFwj.js";import{t as m}from"./TutorialLink.Cx9cwS8W.js";import{A as u}from"./Authorization.hFl5SniY.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.BRDXEvT3.js";import"./Note.CGYSFn76.js";import"./SnackMsg.CziG1LAl.js";import"./ConfirmModal.Bv5a6udM.js";import"./oauthHelper.B8KZ6m8n.js";import"./BackIcn.BNm9Wd7j.js";import"./Integrations.DwaOhg5C.js";import"./Table.CAuj7UWX.js";import"./index.DpWdl9V1.js";import"./InfoIcn.R6rudVDk.js";function C({acptConf:i,setAcptConf:o,step:r,setStep:a,isInfo:n}){var e;const s=`
    <b>${t("Please note","bit-integrations")}</b>
    <p>${t("The secret key will no longer be displayed, so please take note of it. Eventually, you can regenerate your API keys.","bit-integrations")}</p>
    <h4>${t("To get API key-secret","bit-integrations")}</h4>
    <ul>
      <li>${t("Go to the ACPT dashboard.","bit-integrations")}</li>
      <li>${t("Open Tools, then go to API dashboard.","bit-integrations")}</li>
      <li>${t("Open REST API and generate an API key if needed.","bit-integrations")}</li>
      <li>${t("Copy the generated key-secret pair.","bit-integrations")}</li>
    </ul>`;return p.jsx(u,{config:i,setConfig:o,step:r,setStep:a,isInfo:n,tutorialTitle:"ACPT",tutorialLinks:((e=m)==null?void 0:e.acpt)||{},authDetails:{authType:l.API_KEY,apiEndpoint:"{base_url}/wp-json/acpt/v1/taxonomy",method:"GET",key:"acpt-api-key",addTo:"header",extraFields:[{name:"base_url",label:t("Homepage URL","bit-integrations"),required:!0,placeholder:t("https://example.com","bit-integrations")}]},noteDetails:{note:s}})}export{C as default};
