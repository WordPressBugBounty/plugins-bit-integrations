import{_ as t,j as s}from"./main.2.10.0.js";import{A as l}from"./AddNewConnection.DCTHIFxq.js";import{t as m}from"./TutorialLink.BAPo3x0A.js";import{A as c}from"./Authorization.BmZ1lyOd.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.QyWx8Unk.js";import"./Note.Dyd4oGF7.js";import"./SnackMsg.dVUsvxBp.js";import"./ConfirmModal.BVwU3lxl.js";import"./oauthHelper.Bbf-wdGf.js";import"./BackIcn.B7f1heI_.js";function k({copperCRMConf:o,setCopperCRMConf:e,step:r,setStep:a,isInfo:n}){var i;const p=`
    <h4>${t("Get API credentials","bit-integrations")}</h4>
    <ul>
      <li>${t("Go to your Copper dashboard.","bit-integrations")}</li>
      <li>${t("Open Settings > Integrations > API Keys.","bit-integrations")}</li>
      <li>${t("Copy your API key and account email, then authorize.","bit-integrations")}</li>
    </ul>
  `;return s.jsx(c,{config:o,setConfig:e,step:r,setStep:a,isInfo:n,tutorialTitle:"Copper CRM",tutorialLinks:((i=m)==null?void 0:i.coppercrm)||{},authDetails:{authType:l.API_KEY,apiEndpoint:"https://api.copper.com/developer_api/v1/account",method:"GET",key:"X-PW-AccessToken",addTo:"header",headers:{"X-PW-Application":"developer_api","X-PW-UserEmail":"{api_email}","X-PW-AccessToken":"{api_key}","Content-Type":"application/json"},extraFields:[{name:"api_email",label:t("Your API Email","bit-integrations"),required:!0,placeholder:t("john@company.com","bit-integrations")}]},noteDetails:{note:p}})}export{k as default};
