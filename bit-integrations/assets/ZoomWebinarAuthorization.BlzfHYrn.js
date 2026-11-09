import{_ as t,j as l}from"./main.2.11.0.js";import{A as m}from"./AddNewConnection.pNRNvRSd.js";import{t as p}from"./TutorialLink.u015MAgn.js";import{A as u}from"./Authorization.BIchEf0K.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.B4OSXcxp.js";import"./Note.NHlZiuVe.js";import"./SnackMsg.BZQz3MDI.js";import"./ConfirmModal.4VHPoM9g.js";import"./oauthHelper.BpU8usvP.js";import"./BackIcn.BmViP7Zj.js";import"./Integrations.DzOTQ6dT.js";import"./Table.DbgUlRk3.js";import"./index.Cj5suhk1.js";import"./InfoIcn.CLEAzlAd.js";function x({zoomWebinarConf:o,setZoomWebinarConf:r,step:e,setStep:n,isInfo:a}){var i;const s=`<h4>${t("Pro or higher plan only .","bit-integrations")}</h4>
  <h4>${t("Client Id and Client Secret generate with OAuth .","bit-integrations")}</h4>
  <h4>${t("Scope:","bit-integrations")}</h4>
  <ul>
      <li>${t("Visit","bit-integrations")} <a href="https://marketplace.zoom.us/develop/create" target="_blank" rel="noreferrer">${t("Zoom App Marketplace","bit-integrations")}</a> ${t("to get your credentials.","bit-integrations")}</li>
      <li>${t("User:<b>'user:master, user:read:admin, user:write:admin'</b> ","bit-integrations")}</li>
      <li>${t("Webinar:<b>'webinar:master, webinar:read:admin, webinar:write:admin'</b> ","bit-integrations")}</li>
  </ul>
  <h4>${t("Redirect URIs add also in <b>'Add allow lists'</b>","bit-integrations")}</h4>
  <h4>${t("Zoom Settings :","bit-integrations")}</h4>
  <ul>
      <li>${t("Registration:<b>Required</b>","bit-integrations")}</li>
      <li>${t("Participant:<b>On</b>","bit-integrations")}</li>
  </ul>
  `;return l.jsx(u,{config:o,setConfig:r,step:e,setStep:n,isInfo:a,tutorialTitle:"Zoom Webinars",tutorialLinks:((i=p)==null?void 0:i.zoomWebinar)||{},authDetails:{authType:m.OAUTH2,grantType:"authorization_code",clientAuthentication:"header",authCodeEndpoint:{url:"https://zoom.us/oauth/authorize"},tokenEndpoint:{url:"https://zoom.us/oauth/token",method:"POST"},refreshTokenUrl:"https://zoom.us/oauth/token"},noteDetails:{note:s}})}export{x as default};
