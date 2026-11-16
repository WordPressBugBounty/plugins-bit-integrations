import{_ as o,j as m}from"./main.2.11.1.js";import{A as p}from"./AddNewConnection.DPtZb5J7.js";import{t as l}from"./TutorialLink.DsgFZ1Xh.js";import{A as u}from"./Authorization.Bn9m3Lhj.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.CBwfMytR.js";import"./Note.BEwAesbJ.js";import"./SnackMsg.BvQ0dgIT.js";import"./ConfirmModal.S5sVlbDg.js";import"./oauthHelper.Dw_T_8bV.js";import"./BackIcn.CkBZ7Eo8.js";import"./Integrations.DUHcMnTT.js";import"./Table.acfqUtK9.js";import"./index.Cj5suhk1.js";import"./InfoIcn.BZ6L1wGR.js";function z({sendFoxConf:i,setSendFoxConf:r,step:e,setstep:s,isInfo:a}){var t;const n=`
    <small class="d-blk mt-3">
      ${o("To generate an access token, please visit","bit-integrations")}
      <a class="btcd-link" href="https://sendfox.com/account/oauth" target="_blank" rel="noreferrer">
        ${o(" SendFox OAuth settings","bit-integrations")}
      </a>
    </small>`;return m.jsx(u,{config:i,setConfig:r,step:e,setStep:s,isInfo:a,tutorialTitle:"SendFox",tutorialLinks:((t=l)==null?void 0:t.sendFox)||{},authDetails:{authType:p.BEARER_TOKEN,apiEndpoint:"https://api.sendfox.com/me",method:"GET"},noteDetails:{note:n}})}export{z as default};
