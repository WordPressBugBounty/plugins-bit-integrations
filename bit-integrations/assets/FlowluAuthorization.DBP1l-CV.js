import{_ as t,j as m}from"./main.2.10.2.js";import{A as p}from"./AddNewConnection.CKMdUmWP.js";import{t as s}from"./TutorialLink.DGZkpRHA.js";import{A as u}from"./Authorization.7o7nffd8.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.CDDMGjAe.js";import"./Note.BxLRMTfj.js";import"./SnackMsg.jeQopGz7.js";import"./ConfirmModal.DWgUNXwM.js";import"./oauthHelper.-jy64Bib.js";import"./BackIcn.CkJ_lS8M.js";import"./Integrations.BtsIooDn.js";import"./Table.CbfGOCkC.js";import"./index.DpWdl9V1.js";import"./InfoIcn.DK8jtAK0.js";function F({flowluConf:o,setFlowluConf:r,step:e,setStep:a,isInfo:n}){var i;const l=`
    <h4>${t("Get the API Key","bit-integrations")}</h4>
    <ul>
      <li>${t("First go to your Flowlu dashboard.","bit-integrations")}</li>
      <li>${t("Open Profile from the top-right corner.","bit-integrations")}</li>
      <li>${t("Open Portal Settings, then API Settings.","bit-integrations")}</li>
      <li>${t("Create and copy your API key.","bit-integrations")}</li>
      <li>${t("Use your workspace subdomain as Company Name.","bit-integrations")}</li>
    </ul>`;return m.jsx(u,{config:o,setConfig:r,step:e,setStep:a,isInfo:n,tutorialTitle:"Flowlu",tutorialLinks:((i=s)==null?void 0:i.flowlu)||{},authDetails:{authType:p.API_KEY,apiEndpoint:"https://{company_name}.flowlu.com/api/v1/module/crm/account",method:"GET",key:"api_key",addTo:"query",extraFields:[{name:"company_name",label:t("Company Name","bit-integrations"),required:!0,placeholder:t("your-company","bit-integrations")}]},noteDetails:{note:l}})}export{F as default};
