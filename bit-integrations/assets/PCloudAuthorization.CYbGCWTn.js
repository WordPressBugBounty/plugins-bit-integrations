import{_ as t,j as l}from"./main.2.11.0.js";import{A as s}from"./AddNewConnection.pNRNvRSd.js";import{t as u}from"./TutorialLink.u015MAgn.js";import{A as m}from"./Authorization.BIchEf0K.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.B4OSXcxp.js";import"./Note.NHlZiuVe.js";import"./SnackMsg.BZQz3MDI.js";import"./ConfirmModal.4VHPoM9g.js";import"./oauthHelper.BpU8usvP.js";import"./BackIcn.BmViP7Zj.js";import"./Integrations.DzOTQ6dT.js";import"./Table.DbgUlRk3.js";import"./index.Cj5suhk1.js";import"./InfoIcn.CLEAzlAd.js";function U({pCloudConf:i,setPCloudConf:r,step:e,setStep:a,isInfo:n}){var o;const p=`
    <h4>${t("PCloud OAuth setup","bit-integrations")}</h4>
    <ul>
      <li>${t("Visit","bit-integrations")} <a href="https://docs.pcloud.com/my_apps/" target="_blank" rel="noreferrer">${t("pCloud My Applications","bit-integrations")}</a> ${t("to get your credentials.","bit-integrations")}</li>
      <li>${t("Create an app from PCloud API apps.","bit-integrations")}</li>
      <li>${t("Set the redirect URI exactly as shown below.","bit-integrations")}</li>
      <li>${t("Use your app Client ID and Client Secret to authorize.","bit-integrations")}</li>
    </ul>
  `;return l.jsx(m,{config:i,setConfig:r,step:e,setStep:a,isInfo:n,tutorialTitle:"pCloud",tutorialLinks:((o=u)==null?void 0:o.pCloud)||{},authDetails:{authType:s.OAUTH2,grantType:"authorization_code",clientAuthentication:"body",authCodeEndpoint:{url:"https://my.pcloud.com/oauth2/authorize"},tokenEndpoint:{url:"https://api.pcloud.com/oauth2_token",method:"POST"},refreshTokenUrl:"https://api.pcloud.com/oauth2_token"},noteDetails:{note:p}})}export{U as default};
