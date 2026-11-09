import{_ as t,j as p}from"./main.2.11.0.js";import{A as m}from"./AddNewConnection.pNRNvRSd.js";import{t as l}from"./TutorialLink.u015MAgn.js";import{A as u}from"./Authorization.BIchEf0K.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.B4OSXcxp.js";import"./Note.NHlZiuVe.js";import"./SnackMsg.BZQz3MDI.js";import"./ConfirmModal.4VHPoM9g.js";import"./oauthHelper.BpU8usvP.js";import"./BackIcn.BmViP7Zj.js";import"./Integrations.DzOTQ6dT.js";import"./Table.DbgUlRk3.js";import"./index.Cj5suhk1.js";import"./InfoIcn.CLEAzlAd.js";function P({moxiecrmConf:o,setMoxieCRMConf:r,step:e,setStep:n,isInfo:a}){var i;const s=`
    <h4>${t("Get API Key","bit-integrations")}</h4>
    <ul>
      <li>${t("Go to your Moxie dashboard.","bit-integrations")}</li>
      <li>${t("Open Workspace Settings from the bottom-left corner.","bit-integrations")}</li>
      <li>${t("Go to Connected Apps, then Integrations.","bit-integrations")}</li>
      <li>${t("Open Custom Integrations and copy your API key.","bit-integrations")}</li>
    </ul>`;return p.jsx(u,{config:o,setConfig:r,step:e,setStep:n,isInfo:a,tutorialTitle:"MoxieCRM",tutorialLinks:((i=l)==null?void 0:i.moxiecrm)||{},authDetails:{authType:m.API_KEY,apiEndpoint:"https://{api_url}/api/public/action/users/list",method:"GET",key:"X-API-KEY",addTo:"header",extraFields:[{name:"api_url",label:t("Account Domain","bit-integrations"),required:!0,placeholder:t("your-account.withmoxie.com","bit-integrations")}]},noteDetails:{note:s}})}export{P as default};
