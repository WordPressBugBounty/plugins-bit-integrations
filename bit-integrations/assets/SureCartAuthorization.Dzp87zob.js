import{_ as r,j as m}from"./main.2.10.7.js";import{A as n}from"./AddNewConnection.CG4L4NdA.js";import{t as l}from"./TutorialLink.CEkST12p.js";import{A as u}from"./Authorization.CYT2dGty.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.CsXMJc5B.js";import"./Note.BTCbylpB.js";import"./SnackMsg.BiNmgEkT.js";import"./ConfirmModal.6ebrzmWw.js";import"./oauthHelper.Cyy1HwK5.js";import"./BackIcn.DJrGb9_v.js";import"./Integrations.CXYgDy-L.js";import"./Table.CT6ZfeMu.js";import"./index.Cj5suhk1.js";import"./InfoIcn.Bdx9y8ki.js";function R({sureCartConf:o,setSureCartConf:i,step:e,setStep:a,isInfo:s}){var t;const p=`
    <small class="d-blk mt-5">
      ${r("To get bearer token, please visit","bit-integrations")}
      <a class="btcd-link" href="https://app.surecart.com/developer" target="_blank" rel="noreferrer">
        ${r(" SureCart developer settings","bit-integrations")}
      </a>
    </small>`;return m.jsx(u,{config:o,setConfig:i,step:e,setStep:a,isInfo:s,tutorialTitle:"SureCart",tutorialLinks:((t=l)==null?void 0:t.sureCart)||{},authDetails:{authType:n.BEARER_TOKEN,apiEndpoint:"https://api.surecart.com/v1/account",method:"GET"},noteDetails:{note:p}})}export{R as default};
