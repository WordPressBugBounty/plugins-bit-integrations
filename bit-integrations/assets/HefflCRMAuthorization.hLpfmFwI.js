import{j as n,_ as t}from"./main.2.10.4.js";import{A as p}from"./AddNewConnection.B2iullfe.js";import{A as s}from"./Authorization.CEG4BCsq.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.BAYnB26G.js";import"./Note.BlcqXpwI.js";import"./SnackMsg.CjV2AznC.js";import"./ConfirmModal.LX-d7pCX.js";import"./oauthHelper.DdIjK7ap.js";import"./BackIcn.C0X1dWEt.js";import"./TutorialLink.Jph0Wyx1.js";import"./Integrations.cQMbRc1e.js";import"./Table.CDoeMbPk.js";import"./index.Cj5suhk1.js";import"./InfoIcn.Bqjy485j.js";function _({hefflCRMConf:i,setHefflCRMConf:o,step:e,setStep:r,isInfo:a}){return n.jsx(s,{config:i,setConfig:o,step:e,setStep:r,isInfo:a,tutorialLinkKey:"hefflCRM",authDetails:{authType:p.API_KEY,apiEndpoint:"https://api.heffl.com/api/v1/leads?limit=1",method:"GET",key:"x-api-key",addTo:"header",headers:{Accept:"application/json"}},noteDetails:{note:m}})}const m=`
    <h4>${t("Steps to generate API Key:","bit-integrations")}</h4>
    <ul>
      <li>${t("Log in to your Heffl CRM account.","bit-integrations")}</li>
      <li>${t("Go to Settings → Developers / API Keys and generate a new key.","bit-integrations")}</li>
      <li>${t("Copy the API key and paste it into the field above, then click Authorize.","bit-integrations")}</li>
    </ul>
  `;export{_ as default};
