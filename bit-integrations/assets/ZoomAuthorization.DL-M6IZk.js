import{_ as t,j as m}from"./main.2.10.6.js";import{A as l}from"./AddNewConnection.hKxiu-to.js";import{t as p}from"./TutorialLink.ncpc8QXW.js";import{A as u}from"./Authorization.DlgvbGol.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.FxPjCsMi.js";import"./Note.BsYUdR7w.js";import"./SnackMsg.BrXUpNxZ.js";import"./ConfirmModal.AfAanEBl.js";import"./oauthHelper.DJJ2i8px.js";import"./BackIcn.CYKCF9tX.js";import"./Integrations.DmnW9IBG.js";import"./Table.Ce2z5dAi.js";import"./index.Cj5suhk1.js";import"./InfoIcn.lRS02cun.js";function x({zoomConf:e,setZoomConf:o,step:r,setStep:n,isInfo:a}){var i;const s=`<h4>${t("Pro or higher plan only .","bit-integrations")}</h4>
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
