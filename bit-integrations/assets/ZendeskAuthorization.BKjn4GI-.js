import{_ as o,j as m}from"./main.2.10.9.js";import{A as p}from"./AddNewConnection.CW5LtuVJ.js";import{t as l}from"./TutorialLink.FqlDNemP.js";import{A as u}from"./Authorization.CAE17sQm.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.2qKQDb3H.js";import"./Note.D09Bk593.js";import"./SnackMsg.Bv9CCMgQ.js";import"./ConfirmModal.LxmhgP6x.js";import"./oauthHelper.Ddb7PxK6.js";import"./BackIcn.Ctoh3-IH.js";import"./Integrations.2tzEmbEQ.js";import"./Table.DRq56MJy.js";import"./index.Cj5suhk1.js";import"./InfoIcn.gBRzPobO.js";function Z({zendeskConf:i,setZendeskConf:e,step:r,setStep:s,isInfo:a}){var t;const n=`
    <small class="d-blk mt-3">
      ${o("To Get API Token, Please Visit","bit-integrations")}
      <a class="btcd-link" href="https://app.futuresimple.com/settings/oauth" target="_blank" rel="noreferrer">
        ${o("Zendesk API Token","bit-integrations")}
      </a>
    </small>`;return m.jsx(u,{config:i,setConfig:e,step:r,setStep:s,isInfo:a,tutorialTitle:"Zendesk",tutorialLinks:((t=l)==null?void 0:t.zendesk)||{},authDetails:{authType:p.BEARER_TOKEN,apiEndpoint:"https://api.getbase.com/v2/accounts/self",method:"GET"},noteDetails:{note:n}})}export{Z as default};
