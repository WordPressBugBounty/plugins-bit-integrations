import{_ as t,j as s}from"./main.2.10.6.js";import{A as p}from"./AddNewConnection.hKxiu-to.js";import{A as m}from"./Authorization.DlgvbGol.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.FxPjCsMi.js";import"./Note.BsYUdR7w.js";import"./SnackMsg.BrXUpNxZ.js";import"./ConfirmModal.AfAanEBl.js";import"./oauthHelper.DJJ2i8px.js";import"./BackIcn.CYKCF9tX.js";import"./TutorialLink.ncpc8QXW.js";import"./Integrations.DmnW9IBG.js";import"./Table.Ce2z5dAi.js";import"./index.Cj5suhk1.js";import"./InfoIcn.lRS02cun.js";function y({instasentConf:i,setInstasentConf:o,step:n,setstep:e,isInfo:a}){const r=`
    <h4>${t("Steps to generate an API token:","bit-integrations")}</h4>
    <ul>
      <li>${t("Go to the","bit-integrations")} <a href="https://app.instasent.com/" target="_blank" rel="noreferrer">${t("Instasent Dashboard","bit-integrations")}</a>.</li>
      <li>${t("Copy the <b>API Token</b> and paste it into the bearer token field.","bit-integrations")}</li>
      <li>${t("Finally, authorize and save the connection.","bit-integrations")}</li>
    </ul>`;return s.jsx(m,{config:i,setConfig:o,step:n,setStep:e,isInfo:a,tutorialLinkKey:"instasent",tutorialTitle:"Instasent",authDetails:{authType:p.BEARER_TOKEN,apiEndpoint:"https://api.instasent.com/organization/account",method:"GET"},noteDetails:{note:r}})}export{y as default};
