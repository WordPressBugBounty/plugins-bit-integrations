import{_ as r,j as m}from"./main.2.10.4.js";import{A as n}from"./AddNewConnection.B2iullfe.js";import{t as l}from"./TutorialLink.Jph0Wyx1.js";import{A as u}from"./Authorization.CEG4BCsq.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.BAYnB26G.js";import"./Note.BlcqXpwI.js";import"./SnackMsg.CjV2AznC.js";import"./ConfirmModal.LX-d7pCX.js";import"./oauthHelper.DdIjK7ap.js";import"./BackIcn.C0X1dWEt.js";import"./Integrations.cQMbRc1e.js";import"./Table.CDoeMbPk.js";import"./index.Cj5suhk1.js";import"./InfoIcn.Bqjy485j.js";function R({sureCartConf:o,setSureCartConf:i,step:e,setStep:a,isInfo:s}){var t;const p=`
    <small class="d-blk mt-5">
      ${r("To get bearer token, please visit","bit-integrations")}
      <a class="btcd-link" href="https://app.surecart.com/developer" target="_blank" rel="noreferrer">
        ${r(" SureCart developer settings","bit-integrations")}
      </a>
    </small>`;return m.jsx(u,{config:o,setConfig:i,step:e,setStep:a,isInfo:s,tutorialTitle:"SureCart",tutorialLinks:((t=l)==null?void 0:t.sureCart)||{},authDetails:{authType:n.BEARER_TOKEN,apiEndpoint:"https://api.surecart.com/v1/account",method:"GET"},noteDetails:{note:p}})}export{R as default};
