import{_ as t,j as n}from"./main.2.10.5.js";import{A as p}from"./AddNewConnection.ZSJpjktE.js";import{t as m}from"./TutorialLink.CwM5Erkp.js";import{A as f}from"./Authorization.OdAOjA5a.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.YC94EGca.js";import"./Note.B-17Qwzj.js";import"./SnackMsg.BDVvEnJN.js";import"./ConfirmModal.DTyqLZln.js";import"./oauthHelper.DUT-DMeg.js";import"./BackIcn.fWOyMwfe.js";import"./Integrations.-a67RnHI.js";import"./Table.mVtsKoRn.js";import"./index.Cj5suhk1.js";import"./InfoIcn.m5Eff8OI.js";function I({salesflareConf:e,setSalesflareConf:o,step:r,setStep:a,isInfo:s}){var i;const l=`
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
