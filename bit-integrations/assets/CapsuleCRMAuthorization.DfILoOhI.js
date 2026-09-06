import{_ as t,j as p}from"./main.2.10.4.js";import{A as l}from"./AddNewConnection.B2iullfe.js";import{t as m}from"./TutorialLink.Jph0Wyx1.js";import{A as u}from"./Authorization.CEG4BCsq.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.BAYnB26G.js";import"./Note.BlcqXpwI.js";import"./SnackMsg.CjV2AznC.js";import"./ConfirmModal.LX-d7pCX.js";import"./oauthHelper.DdIjK7ap.js";import"./BackIcn.C0X1dWEt.js";import"./Integrations.cQMbRc1e.js";import"./Table.CDoeMbPk.js";import"./index.Cj5suhk1.js";import"./InfoIcn.Bqjy485j.js";function x({capsulecrmConf:o,setCapsuleCRMConf:e,step:r,setStep:n,isInfo:a}){var i;const s=`
    <h4>${t("Get API Token","bit-integrations")}</h4>
    <ul>
      <li>${t("Visit","bit-integrations")} <a href="https://app.capsulecrm.com/preferences/tokens" target="_blank" rel="noreferrer">${t("Capsule API Tokens","bit-integrations")}</a> ${t("to get your credentials.","bit-integrations")}</li>
      <li>${t("Sign in to your CapsuleCRM account.","bit-integrations")}</li>
      <li>${t("Open My Preferences, then API Authentication Tokens.","bit-integrations")}</li>
      <li>${t("Create and copy your API token.","bit-integrations")}</li>
      <li>${t("For reference, your account domain looks like {name}.capsulecrm.com.","bit-integrations")}</li>
    </ul>`;return p.jsx(u,{config:o,setConfig:e,step:r,setStep:n,isInfo:a,tutorialTitle:"Capsule CRM",tutorialLinks:((i=m)==null?void 0:i.capsulecrm)||{},authDetails:{authType:l.BEARER_TOKEN,apiEndpoint:"https://api.capsulecrm.com/api/v2/users",method:"GET",extraFields:[{name:"api_url",label:t("Account Domain","bit-integrations"),required:!0,placeholder:t("your-org.capsulecrm.com","bit-integrations")}]},noteDetails:{note:s}})}export{x as default};
