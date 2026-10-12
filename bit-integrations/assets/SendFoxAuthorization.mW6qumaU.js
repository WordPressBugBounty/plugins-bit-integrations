import{_ as o,j as m}from"./main.2.10.8.js";import{A as p}from"./AddNewConnection.CSl-aUAS.js";import{t as l}from"./TutorialLink.DFmBJ6jB.js";import{A as u}from"./Authorization.DpB18Uf2.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.CYq6SLFH.js";import"./Note.dPKVKnj8.js";import"./SnackMsg.B7yKjV9h.js";import"./ConfirmModal.DjUTHz5T.js";import"./oauthHelper.CtoifEmb.js";import"./BackIcn.CJxgNP3V.js";import"./Integrations.CPa6tDEs.js";import"./Table.CrLXNgTi.js";import"./index.Cj5suhk1.js";import"./InfoIcn.C__G0NXw.js";function z({sendFoxConf:i,setSendFoxConf:r,step:e,setstep:s,isInfo:a}){var t;const n=`
    <small class="d-blk mt-3">
      ${o("To generate an access token, please visit","bit-integrations")}
      <a class="btcd-link" href="https://sendfox.com/account/oauth" target="_blank" rel="noreferrer">
        ${o(" SendFox OAuth settings","bit-integrations")}
      </a>
    </small>`;return m.jsx(u,{config:i,setConfig:r,step:e,setStep:s,isInfo:a,tutorialTitle:"SendFox",tutorialLinks:((t=l)==null?void 0:t.sendFox)||{},authDetails:{authType:p.BEARER_TOKEN,apiEndpoint:"https://api.sendfox.com/me",method:"GET"},noteDetails:{note:n}})}export{z as default};
