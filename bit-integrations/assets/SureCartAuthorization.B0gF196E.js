import{_ as r,j as m}from"./main.2.10.2.js";import{A as n}from"./AddNewConnection.CKMdUmWP.js";import{t as l}from"./TutorialLink.DGZkpRHA.js";import{A as u}from"./Authorization.7o7nffd8.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.CDDMGjAe.js";import"./Note.BxLRMTfj.js";import"./SnackMsg.jeQopGz7.js";import"./ConfirmModal.DWgUNXwM.js";import"./oauthHelper.-jy64Bib.js";import"./BackIcn.CkJ_lS8M.js";import"./Integrations.BtsIooDn.js";import"./Table.CbfGOCkC.js";import"./index.DpWdl9V1.js";import"./InfoIcn.DK8jtAK0.js";function R({sureCartConf:o,setSureCartConf:i,step:e,setStep:a,isInfo:s}){var t;const p=`
    <small class="d-blk mt-5">
      ${r("To get bearer token, please visit","bit-integrations")}
      <a class="btcd-link" href="https://app.surecart.com/developer" target="_blank" rel="noreferrer">
        ${r(" SureCart developer settings","bit-integrations")}
      </a>
    </small>`;return m.jsx(u,{config:o,setConfig:i,step:e,setStep:a,isInfo:s,tutorialTitle:"SureCart",tutorialLinks:((t=l)==null?void 0:t.sureCart)||{},authDetails:{authType:n.BEARER_TOKEN,apiEndpoint:"https://api.surecart.com/v1/account",method:"GET"},noteDetails:{note:p}})}export{R as default};
