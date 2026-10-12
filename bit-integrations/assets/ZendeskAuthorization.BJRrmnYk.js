import{_ as o,j as m}from"./main.2.10.8.js";import{A as p}from"./AddNewConnection.CSl-aUAS.js";import{t as l}from"./TutorialLink.DFmBJ6jB.js";import{A as u}from"./Authorization.DpB18Uf2.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.CYq6SLFH.js";import"./Note.dPKVKnj8.js";import"./SnackMsg.B7yKjV9h.js";import"./ConfirmModal.DjUTHz5T.js";import"./oauthHelper.CtoifEmb.js";import"./BackIcn.CJxgNP3V.js";import"./Integrations.CPa6tDEs.js";import"./Table.CrLXNgTi.js";import"./index.Cj5suhk1.js";import"./InfoIcn.C__G0NXw.js";function Z({zendeskConf:i,setZendeskConf:e,step:r,setStep:s,isInfo:a}){var t;const n=`
    <small class="d-blk mt-3">
      ${o("To Get API Token, Please Visit","bit-integrations")}
      <a class="btcd-link" href="https://app.futuresimple.com/settings/oauth" target="_blank" rel="noreferrer">
        ${o("Zendesk API Token","bit-integrations")}
      </a>
    </small>`;return m.jsx(u,{config:i,setConfig:e,step:r,setStep:s,isInfo:a,tutorialTitle:"Zendesk",tutorialLinks:((t=l)==null?void 0:t.zendesk)||{},authDetails:{authType:p.BEARER_TOKEN,apiEndpoint:"https://api.getbase.com/v2/accounts/self",method:"GET"},noteDetails:{note:n}})}export{Z as default};
