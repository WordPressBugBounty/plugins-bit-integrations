import{_ as o,j as m}from"./main.2.10.5.js";import{A as p}from"./AddNewConnection.ZSJpjktE.js";import{t as l}from"./TutorialLink.CwM5Erkp.js";import{A as u}from"./Authorization.OdAOjA5a.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.YC94EGca.js";import"./Note.B-17Qwzj.js";import"./SnackMsg.BDVvEnJN.js";import"./ConfirmModal.DTyqLZln.js";import"./oauthHelper.DUT-DMeg.js";import"./BackIcn.fWOyMwfe.js";import"./Integrations.-a67RnHI.js";import"./Table.mVtsKoRn.js";import"./index.Cj5suhk1.js";import"./InfoIcn.m5Eff8OI.js";function z({sendFoxConf:i,setSendFoxConf:r,step:e,setstep:s,isInfo:a}){var t;const n=`
    <small class="d-blk mt-3">
      ${o("To generate an access token, please visit","bit-integrations")}
      <a class="btcd-link" href="https://sendfox.com/account/oauth" target="_blank" rel="noreferrer">
        ${o(" SendFox OAuth settings","bit-integrations")}
      </a>
    </small>`;return m.jsx(u,{config:i,setConfig:r,step:e,setStep:s,isInfo:a,tutorialTitle:"SendFox",tutorialLinks:((t=l)==null?void 0:t.sendFox)||{},authDetails:{authType:p.BEARER_TOKEN,apiEndpoint:"https://api.sendfox.com/me",method:"GET"},noteDetails:{note:n}})}export{z as default};
