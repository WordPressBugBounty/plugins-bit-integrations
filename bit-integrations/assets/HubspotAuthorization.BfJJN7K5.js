import{_ as t,j as p}from"./main.2.10.7.js";import{A as m}from"./AddNewConnection.CG4L4NdA.js";import{A as c}from"./Authorization.CYT2dGty.js";import{t as l}from"./TutorialLink.CEkST12p.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.CsXMJc5B.js";import"./Note.BTCbylpB.js";import"./SnackMsg.BiNmgEkT.js";import"./ConfirmModal.6ebrzmWw.js";import"./oauthHelper.Cyy1HwK5.js";import"./BackIcn.DJrGb9_v.js";import"./Integrations.CXYgDy-L.js";import"./Table.CT6ZfeMu.js";import"./index.Cj5suhk1.js";import"./InfoIcn.Bdx9y8ki.js";function H({hubspotConf:o,setHubspotConf:n,step:e,setstep:r,isInfo:a}){var i;const s=`
    <h4>${t("Step of generating Access Token:","bit-integrations")}</h4>
    <ul>
      <li>${t("Login to your HubSpot account, click the <b>Settings</b> icon settings in the main navigation bar..","bit-integrations")}</li>
      <li>${t("In the left sidebar menu, navigate to <b>Integrations > Private App</b>.","bit-integrations")}</li>
      <li>${t("Give name and description and select all necessary scope.","bit-integrations")}</li>
      <li>${t("Then create Access token.","bit-integrations")}</li>
  </ul>
  `;return p.jsx(c,{config:o,setConfig:n,step:e,setStep:r,isInfo:a,tutorialTitle:"HubSpot",tutorialLinks:((i=l)==null?void 0:i.hubspot)||{},authDetails:{authType:m.BEARER_TOKEN,apiEndpoint:"https://api.hubapi.com/crm/v3/objects/contacts",method:"GET"},noteDetails:{note:s}})}export{H as default};
