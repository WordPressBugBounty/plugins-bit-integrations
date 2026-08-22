import{_ as t,j as p}from"./main.2.10.3.js";import{A as l}from"./AddNewConnection.BCtQJFwj.js";import{t as m}from"./TutorialLink.Cx9cwS8W.js";import{A as d}from"./Authorization.hFl5SniY.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.BRDXEvT3.js";import"./Note.CGYSFn76.js";import"./SnackMsg.CziG1LAl.js";import"./ConfirmModal.Bv5a6udM.js";import"./oauthHelper.B8KZ6m8n.js";import"./BackIcn.BNm9Wd7j.js";import"./Integrations.DwaOhg5C.js";import"./Table.CAuj7UWX.js";import"./index.DpWdl9V1.js";import"./InfoIcn.R6rudVDk.js";function P({brilliantDirectoriesConf:e,setBrilliantDirectoriesConf:o,step:r,setstep:n,isInfo:a}){var i;const s=`
  <small class="d-blk mt-5">
    ${t("Generate an API key from your Brilliant Directories admin:","bit-integrations")}
    <b>${t("Developer Hub &gt; Generate API Key","bit-integrations")}</b>.
    ${t("Most endpoints also require the","bit-integrations")}
    <b>${t("Advanced Endpoints","bit-integrations")}</b>
    ${t("toggle to be enabled on that key.","bit-integrations")}
  </small>
  `;return p.jsx(d,{config:e,setConfig:o,step:r,setStep:n,isInfo:a,tutorialTitle:"Brilliant Directories",tutorialLinks:((i=m)==null?void 0:i.brilliantDirectories)||{},authDetails:{addTo:"header",apiEndpoint:"{endpoint_base}/api/v2/token/verify",extraFields:[{label:t("Site URL","bit-integrations"),name:"endpoint_base",placeholder:"https://your-directory.com",required:!0}],authType:l.API_KEY,key:"X-Api-Key",method:"GET"},noteDetails:{note:s}})}export{P as default};
