import{_ as t,j as p}from"./main.2.10.9.js";import{A as m}from"./AddNewConnection.CW5LtuVJ.js";import{t as l}from"./TutorialLink.FqlDNemP.js";import{A as u}from"./Authorization.CAE17sQm.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.2qKQDb3H.js";import"./Note.D09Bk593.js";import"./SnackMsg.Bv9CCMgQ.js";import"./ConfirmModal.LxmhgP6x.js";import"./oauthHelper.Ddb7PxK6.js";import"./BackIcn.Ctoh3-IH.js";import"./Integrations.2tzEmbEQ.js";import"./Table.DRq56MJy.js";import"./index.Cj5suhk1.js";import"./InfoIcn.gBRzPobO.js";function P({moxiecrmConf:o,setMoxieCRMConf:r,step:e,setStep:n,isInfo:a}){var i;const s=`
    <h4>${t("Get API Key","bit-integrations")}</h4>
    <ul>
      <li>${t("Go to your Moxie dashboard.","bit-integrations")}</li>
      <li>${t("Open Workspace Settings from the bottom-left corner.","bit-integrations")}</li>
      <li>${t("Go to Connected Apps, then Integrations.","bit-integrations")}</li>
      <li>${t("Open Custom Integrations and copy your API key.","bit-integrations")}</li>
    </ul>`;return p.jsx(u,{config:o,setConfig:r,step:e,setStep:n,isInfo:a,tutorialTitle:"MoxieCRM",tutorialLinks:((i=l)==null?void 0:i.moxiecrm)||{},authDetails:{authType:m.API_KEY,apiEndpoint:"https://{api_url}/api/public/action/users/list",method:"GET",key:"X-API-KEY",addTo:"header",extraFields:[{name:"api_url",label:t("Account Domain","bit-integrations"),required:!0,placeholder:t("your-account.withmoxie.com","bit-integrations")}]},noteDetails:{note:s}})}export{P as default};
