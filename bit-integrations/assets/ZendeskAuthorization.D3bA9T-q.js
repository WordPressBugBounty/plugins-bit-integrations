import{_ as o,j as m}from"./main.2.10.0.js";import{A as p}from"./AddNewConnection.DCTHIFxq.js";import{t as l}from"./TutorialLink.BAPo3x0A.js";import{A as u}from"./Authorization.BmZ1lyOd.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.QyWx8Unk.js";import"./Note.Dyd4oGF7.js";import"./SnackMsg.dVUsvxBp.js";import"./ConfirmModal.BVwU3lxl.js";import"./oauthHelper.Bbf-wdGf.js";import"./BackIcn.B7f1heI_.js";function P({zendeskConf:i,setZendeskConf:e,step:s,setStep:r,isInfo:a}){var t;const n=`
    <small class="d-blk mt-3">
      ${o("To Get API Token, Please Visit","bit-integrations")}
      <a class="btcd-link" href="https://app.futuresimple.com/settings/oauth" target="_blank" rel="noreferrer">
        ${o("Zendesk API Token","bit-integrations")}
      </a>
    </small>`;return m.jsx(u,{config:i,setConfig:e,step:s,setStep:r,isInfo:a,tutorialTitle:"Zendesk",tutorialLinks:((t=l)==null?void 0:t.zendesk)||{},authDetails:{authType:p.BEARER_TOKEN,apiEndpoint:"https://api.getbase.com/v2/accounts/self",method:"GET"},noteDetails:{note:n}})}export{P as default};
