import{_ as t,j as p}from"./main.2.10.3.js";import{A as m}from"./AddNewConnection.BCtQJFwj.js";import{t as l}from"./TutorialLink.Cx9cwS8W.js";import{A as u}from"./Authorization.hFl5SniY.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.BRDXEvT3.js";import"./Note.CGYSFn76.js";import"./SnackMsg.CziG1LAl.js";import"./ConfirmModal.Bv5a6udM.js";import"./oauthHelper.B8KZ6m8n.js";import"./BackIcn.BNm9Wd7j.js";import"./Integrations.DwaOhg5C.js";import"./Table.CAuj7UWX.js";import"./index.DpWdl9V1.js";import"./InfoIcn.R6rudVDk.js";function P({moxiecrmConf:o,setMoxieCRMConf:r,step:e,setStep:n,isInfo:a}){var i;const s=`
    <h4>${t("Get API Key","bit-integrations")}</h4>
    <ul>
      <li>${t("Go to your Moxie dashboard.","bit-integrations")}</li>
      <li>${t("Open Workspace Settings from the bottom-left corner.","bit-integrations")}</li>
      <li>${t("Go to Connected Apps, then Integrations.","bit-integrations")}</li>
      <li>${t("Open Custom Integrations and copy your API key.","bit-integrations")}</li>
    </ul>`;return p.jsx(u,{config:o,setConfig:r,step:e,setStep:n,isInfo:a,tutorialTitle:"MoxieCRM",tutorialLinks:((i=l)==null?void 0:i.moxiecrm)||{},authDetails:{authType:m.API_KEY,apiEndpoint:"https://{api_url}/api/public/action/users/list",method:"GET",key:"X-API-KEY",addTo:"header",extraFields:[{name:"api_url",label:t("Account Domain","bit-integrations"),required:!0,placeholder:t("your-account.withmoxie.com","bit-integrations")}]},noteDetails:{note:s}})}export{P as default};
