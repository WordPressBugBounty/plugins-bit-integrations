import{_ as t,j as p}from"./main.2.11.1.js";import{A as l}from"./AddNewConnection.DPtZb5J7.js";import{t as m}from"./TutorialLink.DsgFZ1Xh.js";import{A as u}from"./Authorization.Bn9m3Lhj.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.CBwfMytR.js";import"./Note.BEwAesbJ.js";import"./SnackMsg.BvQ0dgIT.js";import"./ConfirmModal.S5sVlbDg.js";import"./oauthHelper.Dw_T_8bV.js";import"./BackIcn.CkBZ7Eo8.js";import"./Integrations.DUHcMnTT.js";import"./Table.acfqUtK9.js";import"./index.Cj5suhk1.js";import"./InfoIcn.BZ6L1wGR.js";function z({lionDeskConf:o,setLionDeskConf:e,step:r,setStep:n,isInfo:a}){var i;const s=`
    <h4>${t("Get Redirect URI, Client ID and Client Secret","bit-integrations")}</h4>
    <ul>
      <li>${t("Visit","bit-integrations")} <a href="https://developers.liondesk.com/account/apps" target="_blank" rel="noreferrer">${t("LionDesk Apps","bit-integrations")}</a> ${t("to get your credentials.","bit-integrations")}</li>
      <li>${t("Go to LionDesk Developer Center Apps.","bit-integrations")}</li>
      <li>${t("Create a new app and set redirect URI from this form.","bit-integrations")}</li>
      <li>${t("Copy client ID and client secret from LionDesk app.","bit-integrations")}</li>
      <li>${t("Authorize to complete connection.","bit-integrations")}</li>
    </ul>
  `;return p.jsx(u,{config:o,setConfig:e,step:r,setStep:n,isInfo:a,tutorialTitle:"LionDesk",tutorialLinks:((i=m)==null?void 0:i.lionDesk)||{},authDetails:{authType:l.OAUTH2,grantType:"authorization_code",clientAuthentication:"body",authCodeEndpoint:{url:"https://api-v2.liondesk.com/oauth2/authorize",queryParams:{scope:"write read"}},tokenEndpoint:{url:"https://api-v2.liondesk.com/oauth2/token",method:"POST"},refreshTokenUrl:"https://api-v2.liondesk.com/oauth2/token"},noteDetails:{note:s}})}export{z as default};
