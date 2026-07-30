import{_ as r,j as m}from"./main.2.10.1.js";import{A as n}from"./AddNewConnection.Cg7SuMmE.js";import{t as l}from"./TutorialLink.7h569T9O.js";import{A as u}from"./Authorization.BlvzxFIu.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.ChZVS3S8.js";import"./Note.C35kKkP7.js";import"./SnackMsg.C9WJBVrt.js";import"./ConfirmModal.CDiTORwS.js";import"./oauthHelper.OhIQKmID.js";import"./BackIcn.BKNyOYwv.js";import"./Integrations.CKp7NfRF.js";import"./Table.pymT9y8u.js";import"./index.DpWdl9V1.js";import"./InfoIcn.BrKQmO96.js";function R({sureCartConf:o,setSureCartConf:i,step:e,setStep:a,isInfo:s}){var t;const p=`
    <small class="d-blk mt-5">
      ${r("To get bearer token, please visit","bit-integrations")}
      <a class="btcd-link" href="https://app.surecart.com/developer" target="_blank" rel="noreferrer">
        ${r(" SureCart developer settings","bit-integrations")}
      </a>
    </small>`;return m.jsx(u,{config:o,setConfig:i,step:e,setStep:a,isInfo:s,tutorialTitle:"SureCart",tutorialLinks:((t=l)==null?void 0:t.sureCart)||{},authDetails:{authType:n.BEARER_TOKEN,apiEndpoint:"https://api.surecart.com/v1/account",method:"GET"},noteDetails:{note:p}})}export{R as default};
