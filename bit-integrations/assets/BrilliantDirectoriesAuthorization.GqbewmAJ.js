import{_ as t,j as p}from"./main.2.10.6.js";import{A as l}from"./AddNewConnection.hKxiu-to.js";import{t as m}from"./TutorialLink.ncpc8QXW.js";import{A as d}from"./Authorization.DlgvbGol.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.FxPjCsMi.js";import"./Note.BsYUdR7w.js";import"./SnackMsg.BrXUpNxZ.js";import"./ConfirmModal.AfAanEBl.js";import"./oauthHelper.DJJ2i8px.js";import"./BackIcn.CYKCF9tX.js";import"./Integrations.DmnW9IBG.js";import"./Table.Ce2z5dAi.js";import"./index.Cj5suhk1.js";import"./InfoIcn.lRS02cun.js";function P({brilliantDirectoriesConf:e,setBrilliantDirectoriesConf:o,step:r,setstep:n,isInfo:a}){var i;const s=`
  <small class="d-blk mt-5">
    ${t("Generate an API key from your Brilliant Directories admin:","bit-integrations")}
    <b>${t("Developer Hub &gt; Generate API Key","bit-integrations")}</b>.
    ${t("Most endpoints also require the","bit-integrations")}
    <b>${t("Advanced Endpoints","bit-integrations")}</b>
    ${t("toggle to be enabled on that key.","bit-integrations")}
  </small>
  `;return p.jsx(d,{config:e,setConfig:o,step:r,setStep:n,isInfo:a,tutorialTitle:"Brilliant Directories",tutorialLinks:((i=m)==null?void 0:i.brilliantDirectories)||{},authDetails:{addTo:"header",apiEndpoint:"{endpoint_base}/api/v2/token/verify",extraFields:[{label:t("Site URL","bit-integrations"),name:"endpoint_base",placeholder:"https://your-directory.com",required:!0}],authType:l.API_KEY,key:"X-Api-Key",method:"GET"},noteDetails:{note:s}})}export{P as default};
