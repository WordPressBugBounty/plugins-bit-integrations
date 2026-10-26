import{_ as t,j as l}from"./main.2.10.9.js";import{A as m}from"./AddNewConnection.CW5LtuVJ.js";import{t as u}from"./TutorialLink.FqlDNemP.js";import{A as p}from"./Authorization.CAE17sQm.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.2qKQDb3H.js";import"./Note.D09Bk593.js";import"./SnackMsg.Bv9CCMgQ.js";import"./ConfirmModal.LxmhgP6x.js";import"./oauthHelper.Ddb7PxK6.js";import"./BackIcn.Ctoh3-IH.js";import"./Integrations.2tzEmbEQ.js";import"./Table.DRq56MJy.js";import"./index.Cj5suhk1.js";import"./InfoIcn.gBRzPobO.js";function L({zoomConf:i,setZoomConf:o,step:n,setStep:r,isInfo:a}){var e;const s=`<h4>${t("Requires a Zoom Pro plan or higher.","bit-integrations")}</h4>
  <ul>
      <li>${t("Visit","bit-integrations")} <a href="https://marketplace.zoom.us/develop/create" target="_blank" rel="noreferrer">${t("Zoom App Marketplace","bit-integrations")}</a>, ${t("build a General App (OAuth) and copy its Client ID and Client Secret here.","bit-integrations")}</li>
      <li>${t("Add the Callback / Redirect URL above as the OAuth Redirect URL and to the OAuth Allow List.","bit-integrations")}</li>
      <li>${t("Create User and Delete User need an Admin-managed app. A User-managed app works for the attendee actions.","bit-integrations")}</li>
  </ul>
  <h4>${t("Scopes:","bit-integrations")}</h4>
  <ul>
      <li>${t("Attendee actions:","bit-integrations")} <b>meeting:read:list_meetings, meeting:read:list_registration_questions, meeting:write:registrant, meeting:read:list_registrants, meeting:delete:registrant</b></li>
      <li>${t("User actions:","bit-integrations")} <b>user:write:user:admin, user:read:list_users:admin, user:delete:user:admin</b></li>
      <li>${t("In an Admin-managed app, choose the attendee scopes that end in :admin.","bit-integrations")}</li>
  </ul>
  <h4>${t("Zoom meeting settings:","bit-integrations")}</h4>
  <ul>
      <li>${t("Registration:","bit-integrations")} <b>${t("Required","bit-integrations")}</b></li>
      <li>${t("Create User and Delete User do not use the meeting, but one must still be selected.","bit-integrations")}</li>
  </ul>
  `;return l.jsx(p,{config:i,setConfig:o,step:n,setStep:r,isInfo:a,tutorialTitle:"Zoom Meeting",tutorialLinks:((e=u)==null?void 0:e.zoomMeeting)||{},authDetails:{authType:m.OAUTH2,grantType:"authorization_code",clientAuthentication:"header",authCodeEndpoint:{url:"https://zoom.us/oauth/authorize"},tokenEndpoint:{url:"https://zoom.us/oauth/token",method:"POST"},refreshTokenUrl:"https://zoom.us/oauth/token"},noteDetails:{note:s}})}export{L as default};
