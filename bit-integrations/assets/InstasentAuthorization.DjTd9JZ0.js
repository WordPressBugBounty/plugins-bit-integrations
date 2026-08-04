import{_ as t,j as s}from"./main.2.10.2.js";import{A as p}from"./AddNewConnection.CKMdUmWP.js";import{A as m}from"./Authorization.7o7nffd8.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.CDDMGjAe.js";import"./Note.BxLRMTfj.js";import"./SnackMsg.jeQopGz7.js";import"./ConfirmModal.DWgUNXwM.js";import"./oauthHelper.-jy64Bib.js";import"./BackIcn.CkJ_lS8M.js";import"./TutorialLink.DGZkpRHA.js";import"./Integrations.BtsIooDn.js";import"./Table.CbfGOCkC.js";import"./index.DpWdl9V1.js";import"./InfoIcn.DK8jtAK0.js";function y({instasentConf:i,setInstasentConf:o,step:n,setstep:e,isInfo:a}){const r=`
    <h4>${t("Steps to generate an API token:","bit-integrations")}</h4>
    <ul>
      <li>${t("Go to the","bit-integrations")} <a href="https://app.instasent.com/" target="_blank" rel="noreferrer">${t("Instasent Dashboard","bit-integrations")}</a>.</li>
      <li>${t("Copy the <b>API Token</b> and paste it into the bearer token field.","bit-integrations")}</li>
      <li>${t("Finally, authorize and save the connection.","bit-integrations")}</li>
    </ul>`;return s.jsx(m,{config:i,setConfig:o,step:n,setStep:e,isInfo:a,tutorialLinkKey:"instasent",tutorialTitle:"Instasent",authDetails:{authType:p.BEARER_TOKEN,apiEndpoint:"https://api.instasent.com/organization/account",method:"GET"},noteDetails:{note:r}})}export{y as default};
