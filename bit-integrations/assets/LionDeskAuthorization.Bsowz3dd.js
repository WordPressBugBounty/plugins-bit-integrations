import{_ as t,j as p}from"./main.2.10.8.js";import{A as l}from"./AddNewConnection.CSl-aUAS.js";import{t as m}from"./TutorialLink.DFmBJ6jB.js";import{A as u}from"./Authorization.DpB18Uf2.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.CYq6SLFH.js";import"./Note.dPKVKnj8.js";import"./SnackMsg.B7yKjV9h.js";import"./ConfirmModal.DjUTHz5T.js";import"./oauthHelper.CtoifEmb.js";import"./BackIcn.CJxgNP3V.js";import"./Integrations.CPa6tDEs.js";import"./Table.CrLXNgTi.js";import"./index.Cj5suhk1.js";import"./InfoIcn.C__G0NXw.js";function z({lionDeskConf:o,setLionDeskConf:e,step:r,setStep:n,isInfo:a}){var i;const s=`
    <h4>${t("Get Redirect URI, Client ID and Client Secret","bit-integrations")}</h4>
    <ul>
      <li>${t("Visit","bit-integrations")} <a href="https://developers.liondesk.com/account/apps" target="_blank" rel="noreferrer">${t("LionDesk Apps","bit-integrations")}</a> ${t("to get your credentials.","bit-integrations")}</li>
      <li>${t("Go to LionDesk Developer Center Apps.","bit-integrations")}</li>
      <li>${t("Create a new app and set redirect URI from this form.","bit-integrations")}</li>
      <li>${t("Copy client ID and client secret from LionDesk app.","bit-integrations")}</li>
      <li>${t("Authorize to complete connection.","bit-integrations")}</li>
    </ul>
  `;return p.jsx(u,{config:o,setConfig:e,step:r,setStep:n,isInfo:a,tutorialTitle:"LionDesk",tutorialLinks:((i=m)==null?void 0:i.lionDesk)||{},authDetails:{authType:l.OAUTH2,grantType:"authorization_code",clientAuthentication:"body",authCodeEndpoint:{url:"https://api-v2.liondesk.com/oauth2/authorize",queryParams:{scope:"write read"}},tokenEndpoint:{url:"https://api-v2.liondesk.com/oauth2/token",method:"POST"},refreshTokenUrl:"https://api-v2.liondesk.com/oauth2/token"},noteDetails:{note:s}})}export{z as default};
