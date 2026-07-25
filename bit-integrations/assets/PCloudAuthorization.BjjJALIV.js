import{_ as t,j as l}from"./main.2.10.0.js";import{A as s}from"./AddNewConnection.DCTHIFxq.js";import{t as u}from"./TutorialLink.BAPo3x0A.js";import{A as m}from"./Authorization.BmZ1lyOd.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.QyWx8Unk.js";import"./Note.Dyd4oGF7.js";import"./SnackMsg.dVUsvxBp.js";import"./ConfirmModal.BVwU3lxl.js";import"./oauthHelper.Bbf-wdGf.js";import"./BackIcn.B7f1heI_.js";function $({pCloudConf:i,setPCloudConf:r,step:e,setStep:a,isInfo:n}){var o;const p=`
    <h4>${t("PCloud OAuth setup","bit-integrations")}</h4>
    <ul>
      <li>${t("Visit","bit-integrations")} <a href="https://docs.pcloud.com/my_apps/" target="_blank" rel="noreferrer">${t("pCloud My Applications","bit-integrations")}</a> ${t("to get your credentials.","bit-integrations")}</li>
      <li>${t("Create an app from PCloud API apps.","bit-integrations")}</li>
      <li>${t("Set the redirect URI exactly as shown below.","bit-integrations")}</li>
      <li>${t("Use your app Client ID and Client Secret to authorize.","bit-integrations")}</li>
    </ul>
  `;return l.jsx(m,{config:i,setConfig:r,step:e,setStep:a,isInfo:n,tutorialTitle:"pCloud",tutorialLinks:((o=u)==null?void 0:o.pCloud)||{},authDetails:{authType:s.OAUTH2,grantType:"authorization_code",clientAuthentication:"body",authCodeEndpoint:{url:"https://my.pcloud.com/oauth2/authorize"},tokenEndpoint:{url:"https://api.pcloud.com/oauth2_token",method:"POST"},refreshTokenUrl:"https://api.pcloud.com/oauth2_token"},noteDetails:{note:p}})}export{$ as default};
