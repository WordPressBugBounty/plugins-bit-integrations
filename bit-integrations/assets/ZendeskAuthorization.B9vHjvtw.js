import{_ as o,j as m}from"./main.2.10.4.js";import{A as p}from"./AddNewConnection.B2iullfe.js";import{t as l}from"./TutorialLink.Jph0Wyx1.js";import{A as u}from"./Authorization.CEG4BCsq.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.BAYnB26G.js";import"./Note.BlcqXpwI.js";import"./SnackMsg.CjV2AznC.js";import"./ConfirmModal.LX-d7pCX.js";import"./oauthHelper.DdIjK7ap.js";import"./BackIcn.C0X1dWEt.js";import"./Integrations.cQMbRc1e.js";import"./Table.CDoeMbPk.js";import"./index.Cj5suhk1.js";import"./InfoIcn.Bqjy485j.js";function Z({zendeskConf:i,setZendeskConf:e,step:r,setStep:s,isInfo:a}){var t;const n=`
    <small class="d-blk mt-3">
      ${o("To Get API Token, Please Visit","bit-integrations")}
      <a class="btcd-link" href="https://app.futuresimple.com/settings/oauth" target="_blank" rel="noreferrer">
        ${o("Zendesk API Token","bit-integrations")}
      </a>
    </small>`;return m.jsx(u,{config:i,setConfig:e,step:r,setStep:s,isInfo:a,tutorialTitle:"Zendesk",tutorialLinks:((t=l)==null?void 0:t.zendesk)||{},authDetails:{authType:p.BEARER_TOKEN,apiEndpoint:"https://api.getbase.com/v2/accounts/self",method:"GET"},noteDetails:{note:n}})}export{Z as default};
