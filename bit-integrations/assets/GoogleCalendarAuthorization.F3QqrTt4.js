import{_ as t,j as s}from"./main.2.10.0.js";import{A as p}from"./AddNewConnection.DCTHIFxq.js";import{t as g}from"./TutorialLink.BAPo3x0A.js";import{A as u}from"./Authorization.BmZ1lyOd.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.QyWx8Unk.js";import"./Note.Dyd4oGF7.js";import"./SnackMsg.dVUsvxBp.js";import"./ConfirmModal.BVwU3lxl.js";import"./oauthHelper.Bbf-wdGf.js";import"./BackIcn.B7f1heI_.js";function $({googleCalendarConf:e,setGoogleCalendarConf:i,step:a,setStep:r,isInfo:n}){var o;const l=`
    <h4>${t("Google Calendar OAuth setup","bit-integrations")}</h4>
    <ul>
      <li>${t("Visit","bit-integrations")} <a href="https://console.developers.google.com/apis/credentials" target="_blank" rel="noreferrer">${t("Google API Console","bit-integrations")}</a> ${t("to get your credentials.","bit-integrations")}</li>
      <li>${t("Create OAuth client in Google API Console.","bit-integrations")}</li>
      <li>${t("Set homepage and redirect URI exactly from integration settings.","bit-integrations")}</li>
      <li>${t("Enable Google Calendar API and authorize with required scope.","bit-integrations")}</li>
    </ul>
  `;return s.jsx(u,{config:e,setConfig:i,step:a,setStep:r,isInfo:n,tutorialTitle:"Google Calendar",tutorialLinks:((o=g)==null?void 0:o.googleCalendar)||{},authDetails:{authType:p.OAUTH2,grantType:"authorization_code",clientAuthentication:"body",authCodeEndpoint:{url:"https://accounts.google.com/o/oauth2/v2/auth",queryParams:{access_type:"offline",prompt:"consent",scope:"https://www.googleapis.com/auth/calendar"}},tokenEndpoint:{url:"https://oauth2.googleapis.com/token",method:"POST"},refreshTokenUrl:"https://oauth2.googleapis.com/token"},noteDetails:{note:l}})}export{$ as default};
