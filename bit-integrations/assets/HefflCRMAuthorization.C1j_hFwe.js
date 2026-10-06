import{j as n,_ as t}from"./main.2.10.7.js";import{A as p}from"./AddNewConnection.CG4L4NdA.js";import{A as s}from"./Authorization.CYT2dGty.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.CsXMJc5B.js";import"./Note.BTCbylpB.js";import"./SnackMsg.BiNmgEkT.js";import"./ConfirmModal.6ebrzmWw.js";import"./oauthHelper.Cyy1HwK5.js";import"./BackIcn.DJrGb9_v.js";import"./TutorialLink.CEkST12p.js";import"./Integrations.CXYgDy-L.js";import"./Table.CT6ZfeMu.js";import"./index.Cj5suhk1.js";import"./InfoIcn.Bdx9y8ki.js";function _({hefflCRMConf:i,setHefflCRMConf:o,step:e,setStep:r,isInfo:a}){return n.jsx(s,{config:i,setConfig:o,step:e,setStep:r,isInfo:a,tutorialLinkKey:"hefflCRM",authDetails:{authType:p.API_KEY,apiEndpoint:"https://api.heffl.com/api/v1/leads?limit=1",method:"GET",key:"x-api-key",addTo:"header",headers:{Accept:"application/json"}},noteDetails:{note:m}})}const m=`
    <h4>${t("Steps to generate API Key:","bit-integrations")}</h4>
    <ul>
      <li>${t("Log in to your Heffl CRM account.","bit-integrations")}</li>
      <li>${t("Go to Settings → Developers / API Keys and generate a new key.","bit-integrations")}</li>
      <li>${t("Copy the API key and paste it into the field above, then click Authorize.","bit-integrations")}</li>
    </ul>
  `;export{_ as default};
