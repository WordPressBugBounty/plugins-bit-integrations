import{_ as t,j as m}from"./main.2.10.5.js";import{A as p}from"./AddNewConnection.ZSJpjktE.js";import{t as s}from"./TutorialLink.CwM5Erkp.js";import{A as u}from"./Authorization.OdAOjA5a.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.YC94EGca.js";import"./Note.B-17Qwzj.js";import"./SnackMsg.BDVvEnJN.js";import"./ConfirmModal.DTyqLZln.js";import"./oauthHelper.DUT-DMeg.js";import"./BackIcn.fWOyMwfe.js";import"./Integrations.-a67RnHI.js";import"./Table.mVtsKoRn.js";import"./index.Cj5suhk1.js";import"./InfoIcn.m5Eff8OI.js";function F({flowluConf:o,setFlowluConf:r,step:e,setStep:a,isInfo:n}){var i;const l=`
    <h4>${t("Get the API Key","bit-integrations")}</h4>
    <ul>
      <li>${t("First go to your Flowlu dashboard.","bit-integrations")}</li>
      <li>${t("Open Profile from the top-right corner.","bit-integrations")}</li>
      <li>${t("Open Portal Settings, then API Settings.","bit-integrations")}</li>
      <li>${t("Create and copy your API key.","bit-integrations")}</li>
      <li>${t("Use your workspace subdomain as Company Name.","bit-integrations")}</li>
    </ul>`;return m.jsx(u,{config:o,setConfig:r,step:e,setStep:a,isInfo:n,tutorialTitle:"Flowlu",tutorialLinks:((i=s)==null?void 0:i.flowlu)||{},authDetails:{authType:p.API_KEY,apiEndpoint:"https://{company_name}.flowlu.com/api/v1/module/crm/account",method:"GET",key:"api_key",addTo:"query",extraFields:[{name:"company_name",label:t("Company Name","bit-integrations"),required:!0,placeholder:t("your-company","bit-integrations")}]},noteDetails:{note:l}})}export{F as default};
