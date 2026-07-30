import{_ as t,j as l}from"./main.2.10.1.js";import{A as m}from"./AddNewConnection.Cg7SuMmE.js";import{t as p}from"./TutorialLink.7h569T9O.js";import{A as u}from"./Authorization.BlvzxFIu.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.ChZVS3S8.js";import"./Note.C35kKkP7.js";import"./SnackMsg.C9WJBVrt.js";import"./ConfirmModal.CDiTORwS.js";import"./oauthHelper.OhIQKmID.js";import"./BackIcn.BKNyOYwv.js";import"./Integrations.CKp7NfRF.js";import"./Table.pymT9y8u.js";import"./index.DpWdl9V1.js";import"./InfoIcn.BrKQmO96.js";function z({notionConf:o,setNotionConf:n,step:e,setStep:r,isInfo:a}){var i;const s=`
  <h4>${t("Step of get Client Id & Client Secret","bit-integrations")}</h4>
  <ul>
    <li>${t("Goto","bit-integrations")}Goto <a href="https://www.notion.so/my-integrations" target='_blank'>My integrations.</a></li>
    <li>${t("Click new integration.","bit-integrations")}</li>
    <li>${t("Name to identify your integration to users.","bit-integrations")}</li>
    <li>${t("<b>User Capabilities</b> always select read user information including email addresses","bit-integrations")}</li>
    <li><b>${t("Submit","bit-integrations")}</b></li>
    <li>${t("Select <b>Integration type</b> Public","bit-integrations")}</li>
    <li>${t("Fill up <b>OAuth Domain & URIs</b> information","bit-integrations")}</li>
    <li>${t("Homepage & Redirect URIs copy from Integration Settings","bit-integrations")}</li>
    <li>${t("Finally, click <b>Authorize</b> button.","bit-integrations")}</li>
</ul>
`;return l.jsx(u,{config:o,setConfig:n,step:e,setStep:r,isInfo:a,tutorialTitle:"Notion",tutorialLinks:((i=p)==null?void 0:i.notion)||{},authDetails:{authType:m.OAUTH2,grantType:"authorization_code",clientAuthentication:"header",authCodeEndpoint:{url:"https://api.notion.com/v1/oauth/authorize",queryParams:{owner:"user"}},tokenEndpoint:{url:"https://api.notion.com/v1/oauth/token",method:"POST"},refreshTokenUrl:"https://api.notion.com/v1/oauth/token"},noteDetails:{note:s}})}export{z as default};
