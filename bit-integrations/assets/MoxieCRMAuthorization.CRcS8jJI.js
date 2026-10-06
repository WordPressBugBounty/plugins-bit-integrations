import{_ as t,j as p}from"./main.2.10.7.js";import{A as m}from"./AddNewConnection.CG4L4NdA.js";import{t as l}from"./TutorialLink.CEkST12p.js";import{A as u}from"./Authorization.CYT2dGty.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.CsXMJc5B.js";import"./Note.BTCbylpB.js";import"./SnackMsg.BiNmgEkT.js";import"./ConfirmModal.6ebrzmWw.js";import"./oauthHelper.Cyy1HwK5.js";import"./BackIcn.DJrGb9_v.js";import"./Integrations.CXYgDy-L.js";import"./Table.CT6ZfeMu.js";import"./index.Cj5suhk1.js";import"./InfoIcn.Bdx9y8ki.js";function P({moxiecrmConf:o,setMoxieCRMConf:r,step:e,setStep:n,isInfo:a}){var i;const s=`
    <h4>${t("Get API Key","bit-integrations")}</h4>
    <ul>
      <li>${t("Go to your Moxie dashboard.","bit-integrations")}</li>
      <li>${t("Open Workspace Settings from the bottom-left corner.","bit-integrations")}</li>
      <li>${t("Go to Connected Apps, then Integrations.","bit-integrations")}</li>
      <li>${t("Open Custom Integrations and copy your API key.","bit-integrations")}</li>
    </ul>`;return p.jsx(u,{config:o,setConfig:r,step:e,setStep:n,isInfo:a,tutorialTitle:"MoxieCRM",tutorialLinks:((i=l)==null?void 0:i.moxiecrm)||{},authDetails:{authType:m.API_KEY,apiEndpoint:"https://{api_url}/api/public/action/users/list",method:"GET",key:"X-API-KEY",addTo:"header",extraFields:[{name:"api_url",label:t("Account Domain","bit-integrations"),required:!0,placeholder:t("your-account.withmoxie.com","bit-integrations")}]},noteDetails:{note:s}})}export{P as default};
