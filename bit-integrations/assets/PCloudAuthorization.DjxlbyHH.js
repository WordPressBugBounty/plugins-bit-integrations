import{_ as t,j as l}from"./main.2.10.3.js";import{A as s}from"./AddNewConnection.BCtQJFwj.js";import{t as u}from"./TutorialLink.Cx9cwS8W.js";import{A as m}from"./Authorization.hFl5SniY.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.BRDXEvT3.js";import"./Note.CGYSFn76.js";import"./SnackMsg.CziG1LAl.js";import"./ConfirmModal.Bv5a6udM.js";import"./oauthHelper.B8KZ6m8n.js";import"./BackIcn.BNm9Wd7j.js";import"./Integrations.DwaOhg5C.js";import"./Table.CAuj7UWX.js";import"./index.DpWdl9V1.js";import"./InfoIcn.R6rudVDk.js";function U({pCloudConf:i,setPCloudConf:r,step:e,setStep:a,isInfo:n}){var o;const p=`
    <h4>${t("PCloud OAuth setup","bit-integrations")}</h4>
    <ul>
      <li>${t("Visit","bit-integrations")} <a href="https://docs.pcloud.com/my_apps/" target="_blank" rel="noreferrer">${t("pCloud My Applications","bit-integrations")}</a> ${t("to get your credentials.","bit-integrations")}</li>
      <li>${t("Create an app from PCloud API apps.","bit-integrations")}</li>
      <li>${t("Set the redirect URI exactly as shown below.","bit-integrations")}</li>
      <li>${t("Use your app Client ID and Client Secret to authorize.","bit-integrations")}</li>
    </ul>
  `;return l.jsx(m,{config:i,setConfig:r,step:e,setStep:a,isInfo:n,tutorialTitle:"pCloud",tutorialLinks:((o=u)==null?void 0:o.pCloud)||{},authDetails:{authType:s.OAUTH2,grantType:"authorization_code",clientAuthentication:"body",authCodeEndpoint:{url:"https://my.pcloud.com/oauth2/authorize"},tokenEndpoint:{url:"https://api.pcloud.com/oauth2_token",method:"POST"},refreshTokenUrl:"https://api.pcloud.com/oauth2_token"},noteDetails:{note:p}})}export{U as default};
