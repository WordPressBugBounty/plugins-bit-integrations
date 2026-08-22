import{_ as t,j as s}from"./main.2.10.3.js";import{A as p}from"./AddNewConnection.BCtQJFwj.js";import{A as m}from"./Authorization.hFl5SniY.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.BRDXEvT3.js";import"./Note.CGYSFn76.js";import"./SnackMsg.CziG1LAl.js";import"./ConfirmModal.Bv5a6udM.js";import"./oauthHelper.B8KZ6m8n.js";import"./BackIcn.BNm9Wd7j.js";import"./TutorialLink.Cx9cwS8W.js";import"./Integrations.DwaOhg5C.js";import"./Table.CAuj7UWX.js";import"./index.DpWdl9V1.js";import"./InfoIcn.R6rudVDk.js";function y({instasentConf:i,setInstasentConf:o,step:n,setstep:e,isInfo:a}){const r=`
    <h4>${t("Steps to generate an API token:","bit-integrations")}</h4>
    <ul>
      <li>${t("Go to the","bit-integrations")} <a href="https://app.instasent.com/" target="_blank" rel="noreferrer">${t("Instasent Dashboard","bit-integrations")}</a>.</li>
      <li>${t("Copy the <b>API Token</b> and paste it into the bearer token field.","bit-integrations")}</li>
      <li>${t("Finally, authorize and save the connection.","bit-integrations")}</li>
    </ul>`;return s.jsx(m,{config:i,setConfig:o,step:n,setStep:e,isInfo:a,tutorialLinkKey:"instasent",tutorialTitle:"Instasent",authDetails:{authType:p.BEARER_TOKEN,apiEndpoint:"https://api.instasent.com/organization/account",method:"GET"},noteDetails:{note:r}})}export{y as default};
