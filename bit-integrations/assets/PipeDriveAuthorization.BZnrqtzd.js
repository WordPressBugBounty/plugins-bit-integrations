import{_ as t,j as s}from"./main.2.10.4.js";import{A as m}from"./AddNewConnection.B2iullfe.js";import{A as l}from"./Authorization.CEG4BCsq.js";import{t as u}from"./TutorialLink.Jph0Wyx1.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.BAYnB26G.js";import"./Note.BlcqXpwI.js";import"./SnackMsg.CjV2AznC.js";import"./ConfirmModal.LX-d7pCX.js";import"./oauthHelper.DdIjK7ap.js";import"./BackIcn.C0X1dWEt.js";import"./Integrations.cQMbRc1e.js";import"./Table.CDoeMbPk.js";import"./index.Cj5suhk1.js";import"./InfoIcn.Bqjy485j.js";function z({pipeDriveConf:o,setPipeDriveConf:e,step:r,setstep:p,isInfo:n}){var i;const a=`
    <h4>${t("Step of generate API token:","bit-integrations")}</h4>
    <ul>
      <li>${t("Goto","bit-integrations")} <a href="https://app.pipedrive.com/settings/api">${t("Generate API Token","bit-integrations")}</a></li>
      <li>${t("Copy the <b>Token</b> and paste into <b>API Token</b> field of your authorization form.","bit-integrations")}</li>
      <li>${t("Finally, click <b>Authorize</b> button.","bit-integrations")}</li>
  </ul>
  `;return s.jsx(l,{config:o,setConfig:e,step:r,setStep:p,isInfo:n,tutorialTitle:"Pipedrive",tutorialLinks:((i=u)==null?void 0:i.pipeDrive)||{},authDetails:{authType:m.API_KEY,apiEndpoint:"https://api.pipedrive.com/v1/persons",method:"GET",key:"api_token",addTo:"query"},noteDetails:{note:a}})}export{z as default};
