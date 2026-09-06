import{_ as t,j as m}from"./main.2.10.4.js";import{A as p}from"./AddNewConnection.B2iullfe.js";import{t as s}from"./TutorialLink.Jph0Wyx1.js";import{A as u}from"./Authorization.CEG4BCsq.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.BAYnB26G.js";import"./Note.BlcqXpwI.js";import"./SnackMsg.CjV2AznC.js";import"./ConfirmModal.LX-d7pCX.js";import"./oauthHelper.DdIjK7ap.js";import"./BackIcn.C0X1dWEt.js";import"./Integrations.cQMbRc1e.js";import"./Table.CDoeMbPk.js";import"./index.Cj5suhk1.js";import"./InfoIcn.Bqjy485j.js";function F({flowluConf:o,setFlowluConf:r,step:e,setStep:a,isInfo:n}){var i;const l=`
    <h4>${t("Get the API Key","bit-integrations")}</h4>
    <ul>
      <li>${t("First go to your Flowlu dashboard.","bit-integrations")}</li>
      <li>${t("Open Profile from the top-right corner.","bit-integrations")}</li>
      <li>${t("Open Portal Settings, then API Settings.","bit-integrations")}</li>
      <li>${t("Create and copy your API key.","bit-integrations")}</li>
      <li>${t("Use your workspace subdomain as Company Name.","bit-integrations")}</li>
    </ul>`;return m.jsx(u,{config:o,setConfig:r,step:e,setStep:a,isInfo:n,tutorialTitle:"Flowlu",tutorialLinks:((i=s)==null?void 0:i.flowlu)||{},authDetails:{authType:p.API_KEY,apiEndpoint:"https://{company_name}.flowlu.com/api/v1/module/crm/account",method:"GET",key:"api_key",addTo:"query",extraFields:[{name:"company_name",label:t("Company Name","bit-integrations"),required:!0,placeholder:t("your-company","bit-integrations")}]},noteDetails:{note:l}})}export{F as default};
