import{_ as t,j as p}from"./main.2.10.3.js";import{A as m}from"./AddNewConnection.BCtQJFwj.js";import{A as c}from"./Authorization.hFl5SniY.js";import{t as l}from"./TutorialLink.Cx9cwS8W.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.BRDXEvT3.js";import"./Note.CGYSFn76.js";import"./SnackMsg.CziG1LAl.js";import"./ConfirmModal.Bv5a6udM.js";import"./oauthHelper.B8KZ6m8n.js";import"./BackIcn.BNm9Wd7j.js";import"./Integrations.DwaOhg5C.js";import"./Table.CAuj7UWX.js";import"./index.DpWdl9V1.js";import"./InfoIcn.R6rudVDk.js";function H({hubspotConf:o,setHubspotConf:n,step:e,setstep:r,isInfo:a}){var i;const s=`
    <h4>${t("Step of generating Access Token:","bit-integrations")}</h4>
    <ul>
      <li>${t("Login to your HubSpot account, click the <b>Settings</b> icon settings in the main navigation bar..","bit-integrations")}</li>
      <li>${t("In the left sidebar menu, navigate to <b>Integrations > Private App</b>.","bit-integrations")}</li>
      <li>${t("Give name and description and select all necessary scope.","bit-integrations")}</li>
      <li>${t("Then create Access token.","bit-integrations")}</li>
  </ul>
  `;return p.jsx(c,{config:o,setConfig:n,step:e,setStep:r,isInfo:a,tutorialTitle:"HubSpot",tutorialLinks:((i=l)==null?void 0:i.hubspot)||{},authDetails:{authType:m.BEARER_TOKEN,apiEndpoint:"https://api.hubapi.com/crm/v3/objects/contacts",method:"GET"},noteDetails:{note:s}})}export{H as default};
