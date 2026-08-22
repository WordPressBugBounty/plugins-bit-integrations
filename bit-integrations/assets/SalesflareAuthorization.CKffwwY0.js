import{_ as t,j as n}from"./main.2.10.3.js";import{A as p}from"./AddNewConnection.BCtQJFwj.js";import{t as m}from"./TutorialLink.Cx9cwS8W.js";import{A as f}from"./Authorization.hFl5SniY.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.BRDXEvT3.js";import"./Note.CGYSFn76.js";import"./SnackMsg.CziG1LAl.js";import"./ConfirmModal.Bv5a6udM.js";import"./oauthHelper.B8KZ6m8n.js";import"./BackIcn.BNm9Wd7j.js";import"./Integrations.DwaOhg5C.js";import"./Table.CAuj7UWX.js";import"./index.DpWdl9V1.js";import"./InfoIcn.R6rudVDk.js";function I({salesflareConf:e,setSalesflareConf:o,step:r,setStep:a,isInfo:s}){var i;const l=`
    <h4>${t("Get API Key","bit-integrations")}</h4>
    <ul>
      <li>${t("Go to your Salesflare user dashboard.","bit-integrations")}</li>
      <li>${t("Open Settings.","bit-integrations")}</li>
      <li>${t("Open API Keys, then generate/copy your key.","bit-integrations")}</li>
    </ul>
    <small class="d-blk mt-3">
      ${t("To get API key, please visit","bit-integrations")}
      <a class="btcd-link" href="https://app.salesflare.com/#/settings/apikeys" target="_blank" rel="noreferrer">
        ${t("Salesflare API Key","bit-integrations")}
      </a>
    </small>`;return n.jsx(f,{config:e,setConfig:o,step:r,setStep:a,isInfo:s,tutorialTitle:"Salesflare",tutorialLinks:((i=m)==null?void 0:i.salesflare)||{},authDetails:{authType:p.BEARER_TOKEN,apiEndpoint:"https://api.salesflare.com/accounts",method:"GET"},noteDetails:{note:l}})}export{I as default};
