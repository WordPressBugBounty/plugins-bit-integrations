import{_ as t,j as p}from"./main.2.10.1.js";import{A as m}from"./AddNewConnection.Cg7SuMmE.js";import{t as l}from"./TutorialLink.7h569T9O.js";import{A as u}from"./Authorization.BlvzxFIu.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.ChZVS3S8.js";import"./Note.C35kKkP7.js";import"./SnackMsg.C9WJBVrt.js";import"./ConfirmModal.CDiTORwS.js";import"./oauthHelper.OhIQKmID.js";import"./BackIcn.BKNyOYwv.js";import"./Integrations.CKp7NfRF.js";import"./Table.pymT9y8u.js";import"./index.DpWdl9V1.js";import"./InfoIcn.BrKQmO96.js";function R({asanaConf:o,setAsanaConf:a,step:r,setStep:n,isInfo:e}){var i;const s=`
    <h4>${t("Get API token","bit-integrations")}</h4>
    <ul>
      <li>${t("Visit","bit-integrations")} <a href="https://app.asana.com/0/my-apps" target="_blank" rel="noreferrer">${t("Asana Developer Apps","bit-integrations")}</a> ${t("to get your credentials.","bit-integrations")}</li>
      <li>${t("Open your Asana account settings.","bit-integrations")}</li>
      <li>${t("Create a personal access token.","bit-integrations")}</li>
      <li>${t("Use that token for this connection.","bit-integrations")}</li>
    </ul>`;return p.jsx(u,{config:o,setConfig:a,step:r,setStep:n,isInfo:e,tutorialTitle:"Asana",tutorialLinks:((i=l)==null?void 0:i.asana)||{},authDetails:{authType:m.BEARER_TOKEN,apiEndpoint:"https://app.asana.com/api/1.0/users/me",method:"GET"},noteDetails:{note:s}})}export{R as default};
