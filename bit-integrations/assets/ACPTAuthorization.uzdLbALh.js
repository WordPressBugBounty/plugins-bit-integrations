import{_ as t,j as l}from"./main.2.10.0.js";import{A as p}from"./AddNewConnection.DCTHIFxq.js";import{t as m}from"./TutorialLink.BAPo3x0A.js";import{A as u}from"./Authorization.BmZ1lyOd.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.QyWx8Unk.js";import"./Note.Dyd4oGF7.js";import"./SnackMsg.dVUsvxBp.js";import"./ConfirmModal.BVwU3lxl.js";import"./oauthHelper.Bbf-wdGf.js";import"./BackIcn.B7f1heI_.js";function E({acptConf:i,setAcptConf:o,step:a,setStep:r,isInfo:n}){var e;const s=`
    <b>${t("Please note","bit-integrations")}</b>
    <p>${t("The secret key will no longer be displayed, so please take note of it. Eventually, you can regenerate your API keys.","bit-integrations")}</p>
    <h4>${t("To get API key-secret","bit-integrations")}</h4>
    <ul>
      <li>${t("Go to the ACPT dashboard.","bit-integrations")}</li>
      <li>${t("Open Tools, then go to API dashboard.","bit-integrations")}</li>
      <li>${t("Open REST API and generate an API key if needed.","bit-integrations")}</li>
      <li>${t("Copy the generated key-secret pair.","bit-integrations")}</li>
    </ul>`;return l.jsx(u,{config:i,setConfig:o,step:a,setStep:r,isInfo:n,tutorialTitle:"ACPT",tutorialLinks:((e=m)==null?void 0:e.acpt)||{},authDetails:{authType:p.API_KEY,apiEndpoint:"{base_url}/wp-json/acpt/v1/taxonomy",method:"GET",key:"acpt-api-key",addTo:"header",extraFields:[{name:"base_url",label:t("Homepage URL","bit-integrations"),required:!0,placeholder:t("https://example.com","bit-integrations")}]},noteDetails:{note:s}})}export{E as default};
