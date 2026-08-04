import{j as n,_ as t}from"./main.2.10.2.js";import{A as p}from"./AddNewConnection.CKMdUmWP.js";import{A as s}from"./Authorization.7o7nffd8.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.CDDMGjAe.js";import"./Note.BxLRMTfj.js";import"./SnackMsg.jeQopGz7.js";import"./ConfirmModal.DWgUNXwM.js";import"./oauthHelper.-jy64Bib.js";import"./BackIcn.CkJ_lS8M.js";import"./TutorialLink.DGZkpRHA.js";import"./Integrations.BtsIooDn.js";import"./Table.CbfGOCkC.js";import"./index.DpWdl9V1.js";import"./InfoIcn.DK8jtAK0.js";function _({hefflCRMConf:i,setHefflCRMConf:o,step:e,setStep:r,isInfo:a}){return n.jsx(s,{config:i,setConfig:o,step:e,setStep:r,isInfo:a,tutorialLinkKey:"hefflCRM",authDetails:{authType:p.API_KEY,apiEndpoint:"https://api.heffl.com/api/v1/leads?limit=1",method:"GET",key:"x-api-key",addTo:"header",headers:{Accept:"application/json"}},noteDetails:{note:m}})}const m=`
    <h4>${t("Steps to generate API Key:","bit-integrations")}</h4>
    <ul>
      <li>${t("Log in to your Heffl CRM account.","bit-integrations")}</li>
      <li>${t("Go to Settings → Developers / API Keys and generate a new key.","bit-integrations")}</li>
      <li>${t("Copy the API key and paste it into the field above, then click Authorize.","bit-integrations")}</li>
    </ul>
  `;export{_ as default};
