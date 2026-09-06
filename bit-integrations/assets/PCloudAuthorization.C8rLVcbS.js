import{_ as t,j as l}from"./main.2.10.4.js";import{A as s}from"./AddNewConnection.B2iullfe.js";import{t as u}from"./TutorialLink.Jph0Wyx1.js";import{A as m}from"./Authorization.CEG4BCsq.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.BAYnB26G.js";import"./Note.BlcqXpwI.js";import"./SnackMsg.CjV2AznC.js";import"./ConfirmModal.LX-d7pCX.js";import"./oauthHelper.DdIjK7ap.js";import"./BackIcn.C0X1dWEt.js";import"./Integrations.cQMbRc1e.js";import"./Table.CDoeMbPk.js";import"./index.Cj5suhk1.js";import"./InfoIcn.Bqjy485j.js";function U({pCloudConf:i,setPCloudConf:r,step:e,setStep:a,isInfo:n}){var o;const p=`
    <h4>${t("PCloud OAuth setup","bit-integrations")}</h4>
    <ul>
      <li>${t("Visit","bit-integrations")} <a href="https://docs.pcloud.com/my_apps/" target="_blank" rel="noreferrer">${t("pCloud My Applications","bit-integrations")}</a> ${t("to get your credentials.","bit-integrations")}</li>
      <li>${t("Create an app from PCloud API apps.","bit-integrations")}</li>
      <li>${t("Set the redirect URI exactly as shown below.","bit-integrations")}</li>
      <li>${t("Use your app Client ID and Client Secret to authorize.","bit-integrations")}</li>
    </ul>
  `;return l.jsx(m,{config:i,setConfig:r,step:e,setStep:a,isInfo:n,tutorialTitle:"pCloud",tutorialLinks:((o=u)==null?void 0:o.pCloud)||{},authDetails:{authType:s.OAUTH2,grantType:"authorization_code",clientAuthentication:"body",authCodeEndpoint:{url:"https://my.pcloud.com/oauth2/authorize"},tokenEndpoint:{url:"https://api.pcloud.com/oauth2_token",method:"POST"},refreshTokenUrl:"https://api.pcloud.com/oauth2_token"},noteDetails:{note:p}})}export{U as default};
