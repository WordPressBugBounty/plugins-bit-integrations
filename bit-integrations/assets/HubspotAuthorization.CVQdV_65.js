import{_ as t,j as p}from"./main.2.10.2.js";import{A as m}from"./AddNewConnection.CKMdUmWP.js";import{A as c}from"./Authorization.7o7nffd8.js";import{t as l}from"./TutorialLink.DGZkpRHA.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.CDDMGjAe.js";import"./Note.BxLRMTfj.js";import"./SnackMsg.jeQopGz7.js";import"./ConfirmModal.DWgUNXwM.js";import"./oauthHelper.-jy64Bib.js";import"./BackIcn.CkJ_lS8M.js";import"./Integrations.BtsIooDn.js";import"./Table.CbfGOCkC.js";import"./index.DpWdl9V1.js";import"./InfoIcn.DK8jtAK0.js";function H({hubspotConf:o,setHubspotConf:n,step:e,setstep:r,isInfo:a}){var i;const s=`
    <h4>${t("Step of generating Access Token:","bit-integrations")}</h4>
    <ul>
      <li>${t("Login to your HubSpot account, click the <b>Settings</b> icon settings in the main navigation bar..","bit-integrations")}</li>
      <li>${t("In the left sidebar menu, navigate to <b>Integrations > Private App</b>.","bit-integrations")}</li>
      <li>${t("Give name and description and select all necessary scope.","bit-integrations")}</li>
      <li>${t("Then create Access token.","bit-integrations")}</li>
  </ul>
  `;return p.jsx(c,{config:o,setConfig:n,step:e,setStep:r,isInfo:a,tutorialTitle:"HubSpot",tutorialLinks:((i=l)==null?void 0:i.hubspot)||{},authDetails:{authType:m.BEARER_TOKEN,apiEndpoint:"https://api.hubapi.com/crm/v3/objects/contacts",method:"GET"},noteDetails:{note:s}})}export{H as default};
