import{_ as t,j as p}from"./main.2.10.2.js";import{A as m}from"./AddNewConnection.CKMdUmWP.js";import{t as l}from"./TutorialLink.DGZkpRHA.js";import{A as u}from"./Authorization.7o7nffd8.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.CDDMGjAe.js";import"./Note.BxLRMTfj.js";import"./SnackMsg.jeQopGz7.js";import"./ConfirmModal.DWgUNXwM.js";import"./oauthHelper.-jy64Bib.js";import"./BackIcn.CkJ_lS8M.js";import"./Integrations.BtsIooDn.js";import"./Table.CbfGOCkC.js";import"./index.DpWdl9V1.js";import"./InfoIcn.DK8jtAK0.js";function P({moxiecrmConf:o,setMoxieCRMConf:r,step:e,setStep:n,isInfo:a}){var i;const s=`
    <h4>${t("Get API Key","bit-integrations")}</h4>
    <ul>
      <li>${t("Go to your Moxie dashboard.","bit-integrations")}</li>
      <li>${t("Open Workspace Settings from the bottom-left corner.","bit-integrations")}</li>
      <li>${t("Go to Connected Apps, then Integrations.","bit-integrations")}</li>
      <li>${t("Open Custom Integrations and copy your API key.","bit-integrations")}</li>
    </ul>`;return p.jsx(u,{config:o,setConfig:r,step:e,setStep:n,isInfo:a,tutorialTitle:"MoxieCRM",tutorialLinks:((i=l)==null?void 0:i.moxiecrm)||{},authDetails:{authType:m.API_KEY,apiEndpoint:"https://{api_url}/api/public/action/users/list",method:"GET",key:"X-API-KEY",addTo:"header",extraFields:[{name:"api_url",label:t("Account Domain","bit-integrations"),required:!0,placeholder:t("your-account.withmoxie.com","bit-integrations")}]},noteDetails:{note:s}})}export{P as default};
