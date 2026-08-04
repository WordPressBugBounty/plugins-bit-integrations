import{_ as t,j as s}from"./main.2.10.2.js";import{A as m}from"./AddNewConnection.CKMdUmWP.js";import{A as l}from"./Authorization.7o7nffd8.js";import{t as u}from"./TutorialLink.DGZkpRHA.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.CDDMGjAe.js";import"./Note.BxLRMTfj.js";import"./SnackMsg.jeQopGz7.js";import"./ConfirmModal.DWgUNXwM.js";import"./oauthHelper.-jy64Bib.js";import"./BackIcn.CkJ_lS8M.js";import"./Integrations.BtsIooDn.js";import"./Table.CbfGOCkC.js";import"./index.DpWdl9V1.js";import"./InfoIcn.DK8jtAK0.js";function z({pipeDriveConf:o,setPipeDriveConf:e,step:r,setstep:p,isInfo:n}){var i;const a=`
    <h4>${t("Step of generate API token:","bit-integrations")}</h4>
    <ul>
      <li>${t("Goto","bit-integrations")} <a href="https://app.pipedrive.com/settings/api">${t("Generate API Token","bit-integrations")}</a></li>
      <li>${t("Copy the <b>Token</b> and paste into <b>API Token</b> field of your authorization form.","bit-integrations")}</li>
      <li>${t("Finally, click <b>Authorize</b> button.","bit-integrations")}</li>
  </ul>
  `;return s.jsx(l,{config:o,setConfig:e,step:r,setStep:p,isInfo:n,tutorialTitle:"Pipedrive",tutorialLinks:((i=u)==null?void 0:i.pipeDrive)||{},authDetails:{authType:m.API_KEY,apiEndpoint:"https://api.pipedrive.com/v1/persons",method:"GET",key:"api_token",addTo:"query"},noteDetails:{note:a}})}export{z as default};
