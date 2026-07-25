import{_ as t,j as s}from"./main.2.10.0.js";import{A as l}from"./AddNewConnection.DCTHIFxq.js";import{t as u}from"./TutorialLink.BAPo3x0A.js";import{A as m}from"./Authorization.BmZ1lyOd.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.QyWx8Unk.js";import"./Note.Dyd4oGF7.js";import"./SnackMsg.dVUsvxBp.js";import"./ConfirmModal.BVwU3lxl.js";import"./oauthHelper.Bbf-wdGf.js";import"./BackIcn.B7f1heI_.js";function w({dropboxConf:i,setDropboxConf:r,step:e,setStep:n,isInfo:a}){var o;const p=`
    <h4>${t("Dropbox OAuth setup","bit-integrations")}</h4>
    <ul>
      <li>${t("Visit","bit-integrations")} <a href="https://www.dropbox.com/developers/apps/create" target="_blank" rel="noreferrer">${t("Dropbox App Console","bit-integrations")}</a> ${t("to get your credentials.","bit-integrations")}</li>
      <li>${t("Create app in Dropbox API Console.","bit-integrations")}</li>
      <li>${t("Add redirect URI from integration settings and keep offline token access enabled.","bit-integrations")}</li>
    </ul>
  `;return s.jsx(m,{config:i,setConfig:r,step:e,setStep:n,isInfo:a,tutorialTitle:"Dropbox",tutorialLinks:((o=u)==null?void 0:o.dropbox)||{},authDetails:{authType:l.OAUTH2,grantType:"authorization_code",clientAuthentication:"body",authCodeEndpoint:{url:"https://www.dropbox.com/oauth2/authorize",queryParams:{token_access_type:"offline"}},tokenEndpoint:{url:"https://api.dropboxapi.com/oauth2/token",method:"POST"},refreshTokenUrl:"https://api.dropboxapi.com/oauth2/token"},noteDetails:{note:p}})}export{w as default};
