import{_ as t,j as p}from"./main.2.10.1.js";import{A as l}from"./AddNewConnection.Cg7SuMmE.js";import{t as m}from"./TutorialLink.7h569T9O.js";import{A as u}from"./Authorization.BlvzxFIu.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.ChZVS3S8.js";import"./Note.C35kKkP7.js";import"./SnackMsg.C9WJBVrt.js";import"./ConfirmModal.CDiTORwS.js";import"./oauthHelper.OhIQKmID.js";import"./BackIcn.BKNyOYwv.js";import"./Integrations.CKp7NfRF.js";import"./Table.pymT9y8u.js";import"./index.DpWdl9V1.js";import"./InfoIcn.BrKQmO96.js";function C({acptConf:i,setAcptConf:o,step:r,setStep:a,isInfo:n}){var e;const s=`
    <b>${t("Please note","bit-integrations")}</b>
    <p>${t("The secret key will no longer be displayed, so please take note of it. Eventually, you can regenerate your API keys.","bit-integrations")}</p>
    <h4>${t("To get API key-secret","bit-integrations")}</h4>
    <ul>
      <li>${t("Go to the ACPT dashboard.","bit-integrations")}</li>
      <li>${t("Open Tools, then go to API dashboard.","bit-integrations")}</li>
      <li>${t("Open REST API and generate an API key if needed.","bit-integrations")}</li>
      <li>${t("Copy the generated key-secret pair.","bit-integrations")}</li>
    </ul>`;return p.jsx(u,{config:i,setConfig:o,step:r,setStep:a,isInfo:n,tutorialTitle:"ACPT",tutorialLinks:((e=m)==null?void 0:e.acpt)||{},authDetails:{authType:l.API_KEY,apiEndpoint:"{base_url}/wp-json/acpt/v1/taxonomy",method:"GET",key:"acpt-api-key",addTo:"header",extraFields:[{name:"base_url",label:t("Homepage URL","bit-integrations"),required:!0,placeholder:t("https://example.com","bit-integrations")}]},noteDetails:{note:s}})}export{C as default};
