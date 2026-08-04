import{_ as t,j as p}from"./main.2.10.2.js";import{A as l}from"./AddNewConnection.CKMdUmWP.js";import{t as m}from"./TutorialLink.DGZkpRHA.js";import{A as u}from"./Authorization.7o7nffd8.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.CDDMGjAe.js";import"./Note.BxLRMTfj.js";import"./SnackMsg.jeQopGz7.js";import"./ConfirmModal.DWgUNXwM.js";import"./oauthHelper.-jy64Bib.js";import"./BackIcn.CkJ_lS8M.js";import"./Integrations.BtsIooDn.js";import"./Table.CbfGOCkC.js";import"./index.DpWdl9V1.js";import"./InfoIcn.DK8jtAK0.js";function z({lionDeskConf:o,setLionDeskConf:e,step:r,setStep:n,isInfo:a}){var i;const s=`
    <h4>${t("Get Redirect URI, Client ID and Client Secret","bit-integrations")}</h4>
    <ul>
      <li>${t("Visit","bit-integrations")} <a href="https://developers.liondesk.com/account/apps" target="_blank" rel="noreferrer">${t("LionDesk Apps","bit-integrations")}</a> ${t("to get your credentials.","bit-integrations")}</li>
      <li>${t("Go to LionDesk Developer Center Apps.","bit-integrations")}</li>
      <li>${t("Create a new app and set redirect URI from this form.","bit-integrations")}</li>
      <li>${t("Copy client ID and client secret from LionDesk app.","bit-integrations")}</li>
      <li>${t("Authorize to complete connection.","bit-integrations")}</li>
    </ul>
  `;return p.jsx(u,{config:o,setConfig:e,step:r,setStep:n,isInfo:a,tutorialTitle:"LionDesk",tutorialLinks:((i=m)==null?void 0:i.lionDesk)||{},authDetails:{authType:l.OAUTH2,grantType:"authorization_code",clientAuthentication:"body",authCodeEndpoint:{url:"https://api-v2.liondesk.com/oauth2/authorize",queryParams:{scope:"write read"}},tokenEndpoint:{url:"https://api-v2.liondesk.com/oauth2/token",method:"POST"},refreshTokenUrl:"https://api-v2.liondesk.com/oauth2/token"},noteDetails:{note:s}})}export{z as default};
