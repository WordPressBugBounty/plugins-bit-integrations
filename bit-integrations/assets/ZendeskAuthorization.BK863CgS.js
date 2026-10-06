import{_ as o,j as m}from"./main.2.10.7.js";import{A as p}from"./AddNewConnection.CG4L4NdA.js";import{t as l}from"./TutorialLink.CEkST12p.js";import{A as u}from"./Authorization.CYT2dGty.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.CsXMJc5B.js";import"./Note.BTCbylpB.js";import"./SnackMsg.BiNmgEkT.js";import"./ConfirmModal.6ebrzmWw.js";import"./oauthHelper.Cyy1HwK5.js";import"./BackIcn.DJrGb9_v.js";import"./Integrations.CXYgDy-L.js";import"./Table.CT6ZfeMu.js";import"./index.Cj5suhk1.js";import"./InfoIcn.Bdx9y8ki.js";function Z({zendeskConf:i,setZendeskConf:e,step:r,setStep:s,isInfo:a}){var t;const n=`
    <small class="d-blk mt-3">
      ${o("To Get API Token, Please Visit","bit-integrations")}
      <a class="btcd-link" href="https://app.futuresimple.com/settings/oauth" target="_blank" rel="noreferrer">
        ${o("Zendesk API Token","bit-integrations")}
      </a>
    </small>`;return m.jsx(u,{config:i,setConfig:e,step:r,setStep:s,isInfo:a,tutorialTitle:"Zendesk",tutorialLinks:((t=l)==null?void 0:t.zendesk)||{},authDetails:{authType:p.BEARER_TOKEN,apiEndpoint:"https://api.getbase.com/v2/accounts/self",method:"GET"},noteDetails:{note:n}})}export{Z as default};
