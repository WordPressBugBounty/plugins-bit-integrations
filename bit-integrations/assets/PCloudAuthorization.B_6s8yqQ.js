import{_ as t,j as l}from"./main.2.11.1.js";import{A as s}from"./AddNewConnection.DPtZb5J7.js";import{t as u}from"./TutorialLink.DsgFZ1Xh.js";import{A as m}from"./Authorization.Bn9m3Lhj.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.CBwfMytR.js";import"./Note.BEwAesbJ.js";import"./SnackMsg.BvQ0dgIT.js";import"./ConfirmModal.S5sVlbDg.js";import"./oauthHelper.Dw_T_8bV.js";import"./BackIcn.CkBZ7Eo8.js";import"./Integrations.DUHcMnTT.js";import"./Table.acfqUtK9.js";import"./index.Cj5suhk1.js";import"./InfoIcn.BZ6L1wGR.js";function U({pCloudConf:i,setPCloudConf:r,step:e,setStep:a,isInfo:n}){var o;const p=`
    <h4>${t("PCloud OAuth setup","bit-integrations")}</h4>
    <ul>
      <li>${t("Visit","bit-integrations")} <a href="https://docs.pcloud.com/my_apps/" target="_blank" rel="noreferrer">${t("pCloud My Applications","bit-integrations")}</a> ${t("to get your credentials.","bit-integrations")}</li>
      <li>${t("Create an app from PCloud API apps.","bit-integrations")}</li>
      <li>${t("Set the redirect URI exactly as shown below.","bit-integrations")}</li>
      <li>${t("Use your app Client ID and Client Secret to authorize.","bit-integrations")}</li>
    </ul>
  `;return l.jsx(m,{config:i,setConfig:r,step:e,setStep:a,isInfo:n,tutorialTitle:"pCloud",tutorialLinks:((o=u)==null?void 0:o.pCloud)||{},authDetails:{authType:s.OAUTH2,grantType:"authorization_code",clientAuthentication:"body",authCodeEndpoint:{url:"https://my.pcloud.com/oauth2/authorize"},tokenEndpoint:{url:"https://api.pcloud.com/oauth2_token",method:"POST"},refreshTokenUrl:"https://api.pcloud.com/oauth2_token"},noteDetails:{note:p}})}export{U as default};
