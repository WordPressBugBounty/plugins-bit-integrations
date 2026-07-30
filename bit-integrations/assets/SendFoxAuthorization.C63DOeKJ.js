import{_ as o,j as m}from"./main.2.10.1.js";import{A as p}from"./AddNewConnection.Cg7SuMmE.js";import{t as l}from"./TutorialLink.7h569T9O.js";import{A as u}from"./Authorization.BlvzxFIu.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.ChZVS3S8.js";import"./Note.C35kKkP7.js";import"./SnackMsg.C9WJBVrt.js";import"./ConfirmModal.CDiTORwS.js";import"./oauthHelper.OhIQKmID.js";import"./BackIcn.BKNyOYwv.js";import"./Integrations.CKp7NfRF.js";import"./Table.pymT9y8u.js";import"./index.DpWdl9V1.js";import"./InfoIcn.BrKQmO96.js";function z({sendFoxConf:i,setSendFoxConf:r,step:e,setstep:s,isInfo:a}){var t;const n=`
    <small class="d-blk mt-3">
      ${o("To generate an access token, please visit","bit-integrations")}
      <a class="btcd-link" href="https://sendfox.com/account/oauth" target="_blank" rel="noreferrer">
        ${o(" SendFox OAuth settings","bit-integrations")}
      </a>
    </small>`;return m.jsx(u,{config:i,setConfig:r,step:e,setStep:s,isInfo:a,tutorialTitle:"SendFox",tutorialLinks:((t=l)==null?void 0:t.sendFox)||{},authDetails:{authType:p.BEARER_TOKEN,apiEndpoint:"https://api.sendfox.com/me",method:"GET"},noteDetails:{note:n}})}export{z as default};
