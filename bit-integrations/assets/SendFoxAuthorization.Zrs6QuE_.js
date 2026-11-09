import{_ as o,j as m}from"./main.2.11.0.js";import{A as p}from"./AddNewConnection.pNRNvRSd.js";import{t as l}from"./TutorialLink.u015MAgn.js";import{A as u}from"./Authorization.BIchEf0K.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.B4OSXcxp.js";import"./Note.NHlZiuVe.js";import"./SnackMsg.BZQz3MDI.js";import"./ConfirmModal.4VHPoM9g.js";import"./oauthHelper.BpU8usvP.js";import"./BackIcn.BmViP7Zj.js";import"./Integrations.DzOTQ6dT.js";import"./Table.DbgUlRk3.js";import"./index.Cj5suhk1.js";import"./InfoIcn.CLEAzlAd.js";function z({sendFoxConf:i,setSendFoxConf:r,step:e,setstep:s,isInfo:a}){var t;const n=`
    <small class="d-blk mt-3">
      ${o("To generate an access token, please visit","bit-integrations")}
      <a class="btcd-link" href="https://sendfox.com/account/oauth" target="_blank" rel="noreferrer">
        ${o(" SendFox OAuth settings","bit-integrations")}
      </a>
    </small>`;return m.jsx(u,{config:i,setConfig:r,step:e,setStep:s,isInfo:a,tutorialTitle:"SendFox",tutorialLinks:((t=l)==null?void 0:t.sendFox)||{},authDetails:{authType:p.BEARER_TOKEN,apiEndpoint:"https://api.sendfox.com/me",method:"GET"},noteDetails:{note:n}})}export{z as default};
