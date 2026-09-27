import{_ as t,j as p}from"./main.2.10.6.js";import{A as l}from"./AddNewConnection.hKxiu-to.js";import{t as m}from"./TutorialLink.ncpc8QXW.js";import{A as u}from"./Authorization.DlgvbGol.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.FxPjCsMi.js";import"./Note.BsYUdR7w.js";import"./SnackMsg.BrXUpNxZ.js";import"./ConfirmModal.AfAanEBl.js";import"./oauthHelper.DJJ2i8px.js";import"./BackIcn.CYKCF9tX.js";import"./Integrations.DmnW9IBG.js";import"./Table.Ce2z5dAi.js";import"./index.Cj5suhk1.js";import"./InfoIcn.lRS02cun.js";function z({lionDeskConf:o,setLionDeskConf:e,step:r,setStep:n,isInfo:a}){var i;const s=`
    <h4>${t("Get Redirect URI, Client ID and Client Secret","bit-integrations")}</h4>
    <ul>
      <li>${t("Visit","bit-integrations")} <a href="https://developers.liondesk.com/account/apps" target="_blank" rel="noreferrer">${t("LionDesk Apps","bit-integrations")}</a> ${t("to get your credentials.","bit-integrations")}</li>
      <li>${t("Go to LionDesk Developer Center Apps.","bit-integrations")}</li>
      <li>${t("Create a new app and set redirect URI from this form.","bit-integrations")}</li>
      <li>${t("Copy client ID and client secret from LionDesk app.","bit-integrations")}</li>
      <li>${t("Authorize to complete connection.","bit-integrations")}</li>
    </ul>
  `;return p.jsx(u,{config:o,setConfig:e,step:r,setStep:n,isInfo:a,tutorialTitle:"LionDesk",tutorialLinks:((i=m)==null?void 0:i.lionDesk)||{},authDetails:{authType:l.OAUTH2,grantType:"authorization_code",clientAuthentication:"body",authCodeEndpoint:{url:"https://api-v2.liondesk.com/oauth2/authorize",queryParams:{scope:"write read"}},tokenEndpoint:{url:"https://api-v2.liondesk.com/oauth2/token",method:"POST"},refreshTokenUrl:"https://api-v2.liondesk.com/oauth2/token"},noteDetails:{note:s}})}export{z as default};
