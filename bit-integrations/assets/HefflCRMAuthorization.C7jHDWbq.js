import{j as n,_ as t}from"./main.2.10.1.js";import{A as p}from"./AddNewConnection.Cg7SuMmE.js";import{A as s}from"./Authorization.BlvzxFIu.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.ChZVS3S8.js";import"./Note.C35kKkP7.js";import"./SnackMsg.C9WJBVrt.js";import"./ConfirmModal.CDiTORwS.js";import"./oauthHelper.OhIQKmID.js";import"./BackIcn.BKNyOYwv.js";import"./TutorialLink.7h569T9O.js";import"./Integrations.CKp7NfRF.js";import"./Table.pymT9y8u.js";import"./index.DpWdl9V1.js";import"./InfoIcn.BrKQmO96.js";function _({hefflCRMConf:i,setHefflCRMConf:o,step:e,setStep:r,isInfo:a}){return n.jsx(s,{config:i,setConfig:o,step:e,setStep:r,isInfo:a,tutorialLinkKey:"hefflCRM",authDetails:{authType:p.API_KEY,apiEndpoint:"https://api.heffl.com/api/v1/leads?limit=1",method:"GET",key:"x-api-key",addTo:"header",headers:{Accept:"application/json"}},noteDetails:{note:m}})}const m=`
    <h4>${t("Steps to generate API Key:","bit-integrations")}</h4>
    <ul>
      <li>${t("Log in to your Heffl CRM account.","bit-integrations")}</li>
      <li>${t("Go to Settings → Developers / API Keys and generate a new key.","bit-integrations")}</li>
      <li>${t("Copy the API key and paste it into the field above, then click Authorize.","bit-integrations")}</li>
    </ul>
  `;export{_ as default};
