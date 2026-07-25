import{_ as t,j as c}from"./main.2.10.0.js";import{A as p}from"./AddNewConnection.DCTHIFxq.js";import{t as l}from"./TutorialLink.BAPo3x0A.js";import{A as u}from"./Authorization.BmZ1lyOd.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.QyWx8Unk.js";import"./Note.Dyd4oGF7.js";import"./SnackMsg.dVUsvxBp.js";import"./ConfirmModal.BVwU3lxl.js";import"./oauthHelper.Bbf-wdGf.js";import"./BackIcn.B7f1heI_.js";function $({constantContactConf:a,setConstantContactConf:n,step:i,setstep:e,isInfo:r}){var o;const s=`
  <h4>${t("Steps to get Client ID and Client Secret","bit-integrations")}</h4>
  <ul>
    <li>${t("Visit","bit-integrations")} <a href="https://app.constantcontact.com/pages/dma/portal/" target="_blank" rel="noreferrer">${t("Constant Contact My Applications","bit-integrations")}</a> ${t("to get your credentials.","bit-integrations")}</li>
    <li>${t("Go to Constant Contact developer portal and create app.","bit-integrations")}</li>
    <li>${t("Enable Authorization Code flow and refresh token support.","bit-integrations")}</li>
    <li>${t("Copy redirect URI from this form and add it to app configuration.","bit-integrations")}</li>
    <li>${t("Copy client ID and client secret, then click Authorize.","bit-integrations")}</li>
  </ul>
`;return c.jsx(u,{config:a,setConfig:n,step:i,setStep:e,isInfo:r,tutorialTitle:"Constant Contact",tutorialLinks:((o=l)==null?void 0:o.constantContact)||{},authDetails:{authType:p.OAUTH2,grantType:"authorization_code",clientAuthentication:"header",authCodeEndpoint:{url:"https://authz.constantcontact.com/oauth2/default/v1/authorize",queryParams:{scope:"account_read account_update contact_data offline_access campaign_data"}},tokenEndpoint:{url:"https://authz.constantcontact.com/oauth2/default/v1/token",method:"POST"},refreshTokenUrl:"https://authz.constantcontact.com/oauth2/default/v1/token"},noteDetails:{note:s}})}export{$ as default};
