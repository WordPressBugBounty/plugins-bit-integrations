import{_ as t,j as p}from"./main.2.10.4.js";import{A as m}from"./AddNewConnection.B2iullfe.js";import{A as c}from"./Authorization.CEG4BCsq.js";import{t as l}from"./TutorialLink.Jph0Wyx1.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.BAYnB26G.js";import"./Note.BlcqXpwI.js";import"./SnackMsg.CjV2AznC.js";import"./ConfirmModal.LX-d7pCX.js";import"./oauthHelper.DdIjK7ap.js";import"./BackIcn.C0X1dWEt.js";import"./Integrations.cQMbRc1e.js";import"./Table.CDoeMbPk.js";import"./index.Cj5suhk1.js";import"./InfoIcn.Bqjy485j.js";function H({hubspotConf:o,setHubspotConf:n,step:e,setstep:r,isInfo:a}){var i;const s=`
    <h4>${t("Step of generating Access Token:","bit-integrations")}</h4>
    <ul>
      <li>${t("Login to your HubSpot account, click the <b>Settings</b> icon settings in the main navigation bar..","bit-integrations")}</li>
      <li>${t("In the left sidebar menu, navigate to <b>Integrations > Private App</b>.","bit-integrations")}</li>
      <li>${t("Give name and description and select all necessary scope.","bit-integrations")}</li>
      <li>${t("Then create Access token.","bit-integrations")}</li>
  </ul>
  `;return p.jsx(c,{config:o,setConfig:n,step:e,setStep:r,isInfo:a,tutorialTitle:"HubSpot",tutorialLinks:((i=l)==null?void 0:i.hubspot)||{},authDetails:{authType:m.BEARER_TOKEN,apiEndpoint:"https://api.hubapi.com/crm/v3/objects/contacts",method:"GET"},noteDetails:{note:s}})}export{H as default};
