import{_ as t,j as n}from"./main.2.10.6.js";import{A as p}from"./AddNewConnection.hKxiu-to.js";import{t as m}from"./TutorialLink.ncpc8QXW.js";import{A as f}from"./Authorization.DlgvbGol.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.FxPjCsMi.js";import"./Note.BsYUdR7w.js";import"./SnackMsg.BrXUpNxZ.js";import"./ConfirmModal.AfAanEBl.js";import"./oauthHelper.DJJ2i8px.js";import"./BackIcn.CYKCF9tX.js";import"./Integrations.DmnW9IBG.js";import"./Table.Ce2z5dAi.js";import"./index.Cj5suhk1.js";import"./InfoIcn.lRS02cun.js";function I({salesflareConf:e,setSalesflareConf:o,step:r,setStep:a,isInfo:s}){var i;const l=`
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
