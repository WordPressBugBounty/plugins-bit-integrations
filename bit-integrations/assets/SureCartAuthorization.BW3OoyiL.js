import{_ as r,j as m}from"./main.2.10.3.js";import{A as n}from"./AddNewConnection.BCtQJFwj.js";import{t as l}from"./TutorialLink.Cx9cwS8W.js";import{A as u}from"./Authorization.hFl5SniY.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.BRDXEvT3.js";import"./Note.CGYSFn76.js";import"./SnackMsg.CziG1LAl.js";import"./ConfirmModal.Bv5a6udM.js";import"./oauthHelper.B8KZ6m8n.js";import"./BackIcn.BNm9Wd7j.js";import"./Integrations.DwaOhg5C.js";import"./Table.CAuj7UWX.js";import"./index.DpWdl9V1.js";import"./InfoIcn.R6rudVDk.js";function R({sureCartConf:o,setSureCartConf:i,step:e,setStep:a,isInfo:s}){var t;const p=`
    <small class="d-blk mt-5">
      ${r("To get bearer token, please visit","bit-integrations")}
      <a class="btcd-link" href="https://app.surecart.com/developer" target="_blank" rel="noreferrer">
        ${r(" SureCart developer settings","bit-integrations")}
      </a>
    </small>`;return m.jsx(u,{config:o,setConfig:i,step:e,setStep:a,isInfo:s,tutorialTitle:"SureCart",tutorialLinks:((t=l)==null?void 0:t.sureCart)||{},authDetails:{authType:n.BEARER_TOKEN,apiEndpoint:"https://api.surecart.com/v1/account",method:"GET"},noteDetails:{note:p}})}export{R as default};
