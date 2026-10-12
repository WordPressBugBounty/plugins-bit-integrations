import{_ as t,j as p}from"./main.2.10.8.js";import{A as l}from"./AddNewConnection.CSl-aUAS.js";import{t as m}from"./TutorialLink.DFmBJ6jB.js";import{A as u}from"./Authorization.DpB18Uf2.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.CYq6SLFH.js";import"./Note.dPKVKnj8.js";import"./SnackMsg.B7yKjV9h.js";import"./ConfirmModal.DjUTHz5T.js";import"./oauthHelper.CtoifEmb.js";import"./BackIcn.CJxgNP3V.js";import"./Integrations.CPa6tDEs.js";import"./Table.CrLXNgTi.js";import"./index.Cj5suhk1.js";import"./InfoIcn.C__G0NXw.js";function C({acptConf:i,setAcptConf:o,step:r,setStep:a,isInfo:n}){var e;const s=`
    <b>${t("Please note","bit-integrations")}</b>
    <p>${t("The secret key will no longer be displayed, so please take note of it. Eventually, you can regenerate your API keys.","bit-integrations")}</p>
    <h4>${t("To get API key-secret","bit-integrations")}</h4>
    <ul>
      <li>${t("Go to the ACPT dashboard.","bit-integrations")}</li>
      <li>${t("Open Tools, then go to API dashboard.","bit-integrations")}</li>
      <li>${t("Open REST API and generate an API key if needed.","bit-integrations")}</li>
      <li>${t("Copy the generated key-secret pair.","bit-integrations")}</li>
    </ul>`;return p.jsx(u,{config:i,setConfig:o,step:r,setStep:a,isInfo:n,tutorialTitle:"ACPT",tutorialLinks:((e=m)==null?void 0:e.acpt)||{},authDetails:{authType:l.API_KEY,apiEndpoint:"{base_url}/wp-json/acpt/v1/taxonomy",method:"GET",key:"acpt-api-key",addTo:"header",extraFields:[{name:"base_url",label:t("Homepage URL","bit-integrations"),required:!0,placeholder:t("https://example.com","bit-integrations")}]},noteDetails:{note:s}})}export{C as default};
