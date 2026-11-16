import{_ as t,j as l}from"./main.2.11.1.js";import{A as m}from"./AddNewConnection.DPtZb5J7.js";import{t as p}from"./TutorialLink.DsgFZ1Xh.js";import{A as u}from"./Authorization.Bn9m3Lhj.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.CBwfMytR.js";import"./Note.BEwAesbJ.js";import"./SnackMsg.BvQ0dgIT.js";import"./ConfirmModal.S5sVlbDg.js";import"./oauthHelper.Dw_T_8bV.js";import"./BackIcn.CkBZ7Eo8.js";import"./Integrations.DUHcMnTT.js";import"./Table.acfqUtK9.js";import"./index.Cj5suhk1.js";import"./InfoIcn.BZ6L1wGR.js";function z({notionConf:o,setNotionConf:n,step:e,setStep:r,isInfo:a}){var i;const s=`
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
