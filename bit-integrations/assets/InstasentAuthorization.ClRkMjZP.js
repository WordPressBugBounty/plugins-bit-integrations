import{_ as t,j as s}from"./main.2.10.4.js";import{A as p}from"./AddNewConnection.B2iullfe.js";import{A as m}from"./Authorization.CEG4BCsq.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.BAYnB26G.js";import"./Note.BlcqXpwI.js";import"./SnackMsg.CjV2AznC.js";import"./ConfirmModal.LX-d7pCX.js";import"./oauthHelper.DdIjK7ap.js";import"./BackIcn.C0X1dWEt.js";import"./TutorialLink.Jph0Wyx1.js";import"./Integrations.cQMbRc1e.js";import"./Table.CDoeMbPk.js";import"./index.Cj5suhk1.js";import"./InfoIcn.Bqjy485j.js";function y({instasentConf:i,setInstasentConf:o,step:n,setstep:e,isInfo:a}){const r=`
    <h4>${t("Steps to generate an API token:","bit-integrations")}</h4>
    <ul>
      <li>${t("Go to the","bit-integrations")} <a href="https://app.instasent.com/" target="_blank" rel="noreferrer">${t("Instasent Dashboard","bit-integrations")}</a>.</li>
      <li>${t("Copy the <b>API Token</b> and paste it into the bearer token field.","bit-integrations")}</li>
      <li>${t("Finally, authorize and save the connection.","bit-integrations")}</li>
    </ul>`;return s.jsx(m,{config:i,setConfig:o,step:n,setStep:e,isInfo:a,tutorialLinkKey:"instasent",tutorialTitle:"Instasent",authDetails:{authType:p.BEARER_TOKEN,apiEndpoint:"https://api.instasent.com/organization/account",method:"GET"},noteDetails:{note:r}})}export{y as default};
