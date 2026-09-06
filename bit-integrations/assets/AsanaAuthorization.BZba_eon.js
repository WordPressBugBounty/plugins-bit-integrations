import{_ as t,j as p}from"./main.2.10.4.js";import{A as m}from"./AddNewConnection.B2iullfe.js";import{t as l}from"./TutorialLink.Jph0Wyx1.js";import{A as u}from"./Authorization.CEG4BCsq.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.BAYnB26G.js";import"./Note.BlcqXpwI.js";import"./SnackMsg.CjV2AznC.js";import"./ConfirmModal.LX-d7pCX.js";import"./oauthHelper.DdIjK7ap.js";import"./BackIcn.C0X1dWEt.js";import"./Integrations.cQMbRc1e.js";import"./Table.CDoeMbPk.js";import"./index.Cj5suhk1.js";import"./InfoIcn.Bqjy485j.js";function R({asanaConf:o,setAsanaConf:a,step:r,setStep:n,isInfo:e}){var i;const s=`
    <h4>${t("Get API token","bit-integrations")}</h4>
    <ul>
      <li>${t("Visit","bit-integrations")} <a href="https://app.asana.com/0/my-apps" target="_blank" rel="noreferrer">${t("Asana Developer Apps","bit-integrations")}</a> ${t("to get your credentials.","bit-integrations")}</li>
      <li>${t("Open your Asana account settings.","bit-integrations")}</li>
      <li>${t("Create a personal access token.","bit-integrations")}</li>
      <li>${t("Use that token for this connection.","bit-integrations")}</li>
    </ul>`;return p.jsx(u,{config:o,setConfig:a,step:r,setStep:n,isInfo:e,tutorialTitle:"Asana",tutorialLinks:((i=l)==null?void 0:i.asana)||{},authDetails:{authType:m.BEARER_TOKEN,apiEndpoint:"https://app.asana.com/api/1.0/users/me",method:"GET"},noteDetails:{note:s}})}export{R as default};
