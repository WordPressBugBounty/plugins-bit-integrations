import{j as n,_ as t}from"./main.2.10.9.js";import{A as p}from"./AddNewConnection.CW5LtuVJ.js";import{A as s}from"./Authorization.CAE17sQm.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.2qKQDb3H.js";import"./Note.D09Bk593.js";import"./SnackMsg.Bv9CCMgQ.js";import"./ConfirmModal.LxmhgP6x.js";import"./oauthHelper.Ddb7PxK6.js";import"./BackIcn.Ctoh3-IH.js";import"./TutorialLink.FqlDNemP.js";import"./Integrations.2tzEmbEQ.js";import"./Table.DRq56MJy.js";import"./index.Cj5suhk1.js";import"./InfoIcn.gBRzPobO.js";function _({hefflCRMConf:i,setHefflCRMConf:o,step:e,setStep:r,isInfo:a}){return n.jsx(s,{config:i,setConfig:o,step:e,setStep:r,isInfo:a,tutorialLinkKey:"hefflCRM",authDetails:{authType:p.API_KEY,apiEndpoint:"https://api.heffl.com/api/v1/leads?limit=1",method:"GET",key:"x-api-key",addTo:"header",headers:{Accept:"application/json"}},noteDetails:{note:m}})}const m=`
    <h4>${t("Steps to generate API Key:","bit-integrations")}</h4>
    <ul>
      <li>${t("Log in to your Heffl CRM account.","bit-integrations")}</li>
      <li>${t("Go to Settings → Developers / API Keys and generate a new key.","bit-integrations")}</li>
      <li>${t("Copy the API key and paste it into the field above, then click Authorize.","bit-integrations")}</li>
    </ul>
  `;export{_ as default};
