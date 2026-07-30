import{_ as t,j as p}from"./main.2.10.1.js";import{A as l}from"./AddNewConnection.Cg7SuMmE.js";import{t as m}from"./TutorialLink.7h569T9O.js";import{A as u}from"./Authorization.BlvzxFIu.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.ChZVS3S8.js";import"./Note.C35kKkP7.js";import"./SnackMsg.C9WJBVrt.js";import"./ConfirmModal.CDiTORwS.js";import"./oauthHelper.OhIQKmID.js";import"./BackIcn.BKNyOYwv.js";import"./Integrations.CKp7NfRF.js";import"./Table.pymT9y8u.js";import"./index.DpWdl9V1.js";import"./InfoIcn.BrKQmO96.js";function z({lionDeskConf:o,setLionDeskConf:e,step:r,setStep:n,isInfo:a}){var i;const s=`
    <h4>${t("Get Redirect URI, Client ID and Client Secret","bit-integrations")}</h4>
    <ul>
      <li>${t("Visit","bit-integrations")} <a href="https://developers.liondesk.com/account/apps" target="_blank" rel="noreferrer">${t("LionDesk Apps","bit-integrations")}</a> ${t("to get your credentials.","bit-integrations")}</li>
      <li>${t("Go to LionDesk Developer Center Apps.","bit-integrations")}</li>
      <li>${t("Create a new app and set redirect URI from this form.","bit-integrations")}</li>
      <li>${t("Copy client ID and client secret from LionDesk app.","bit-integrations")}</li>
      <li>${t("Authorize to complete connection.","bit-integrations")}</li>
    </ul>
  `;return p.jsx(u,{config:o,setConfig:e,step:r,setStep:n,isInfo:a,tutorialTitle:"LionDesk",tutorialLinks:((i=m)==null?void 0:i.lionDesk)||{},authDetails:{authType:l.OAUTH2,grantType:"authorization_code",clientAuthentication:"body",authCodeEndpoint:{url:"https://api-v2.liondesk.com/oauth2/authorize",queryParams:{scope:"write read"}},tokenEndpoint:{url:"https://api-v2.liondesk.com/oauth2/token",method:"POST"},refreshTokenUrl:"https://api-v2.liondesk.com/oauth2/token"},noteDetails:{note:s}})}export{z as default};
