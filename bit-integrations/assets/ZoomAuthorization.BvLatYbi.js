import{_ as t,j as m}from"./main.2.10.3.js";import{A as l}from"./AddNewConnection.BCtQJFwj.js";import{t as p}from"./TutorialLink.Cx9cwS8W.js";import{A as u}from"./Authorization.hFl5SniY.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.BRDXEvT3.js";import"./Note.CGYSFn76.js";import"./SnackMsg.CziG1LAl.js";import"./ConfirmModal.Bv5a6udM.js";import"./oauthHelper.B8KZ6m8n.js";import"./BackIcn.BNm9Wd7j.js";import"./Integrations.DwaOhg5C.js";import"./Table.CAuj7UWX.js";import"./index.DpWdl9V1.js";import"./InfoIcn.R6rudVDk.js";function x({zoomConf:e,setZoomConf:o,step:r,setStep:n,isInfo:a}){var i;const s=`<h4>${t("Pro or higher plan only .","bit-integrations")}</h4>
  <h4>${t("Client Id and Client Secret generate with OAuth .","bit-integrations")}</h4>
  <h4>${t("Scope:","bit-integrations")}</h4>
  <ul>
      <li>${t("Visit","bit-integrations")} <a href="https://marketplace.zoom.us/develop/create" target="_blank" rel="noreferrer">${t("Zoom App Marketplace","bit-integrations")}</a> ${t("to get your credentials.","bit-integrations")}</li>
      <li>${t("User:<b>'user:master, user:read:admin, user:write:admin'</b> ","bit-integrations")}</li>
      <li>${t("Meeting:<b>'meeting:master, meeting:read:admin, meeting:write:admin'</b> ","bit-integrations")}</li>
  </ul>
  <h4>${t("Redirect URIs add also in <b>'Add allow lists'</b>","bit-integrations")}</h4>
  <h4>${t("Zoom Settings :","bit-integrations")}</h4>
  <ul>
      <li>${t("Registration:<b>Required</b>","bit-integrations")}</li>
      <li>${t("Participant:<b>On</b>","bit-integrations")}</li>
  </ul>

  `;return m.jsx(u,{config:e,setConfig:o,step:r,setStep:n,isInfo:a,tutorialTitle:"Zoom Meeting",tutorialLinks:((i=p)==null?void 0:i.zoomMeeting)||{},authDetails:{authType:l.OAUTH2,grantType:"authorization_code",clientAuthentication:"header",authCodeEndpoint:{url:"https://zoom.us/oauth/authorize"},tokenEndpoint:{url:"https://zoom.us/oauth/token",method:"POST"},refreshTokenUrl:"https://zoom.us/oauth/token"},noteDetails:{note:s}})}export{x as default};
