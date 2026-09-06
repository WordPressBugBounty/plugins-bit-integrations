import{_ as t,j as l}from"./main.2.10.4.js";import{A as p}from"./AddNewConnection.B2iullfe.js";import{t as m}from"./TutorialLink.Jph0Wyx1.js";import{A as u}from"./Authorization.CEG4BCsq.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.BAYnB26G.js";import"./Note.BlcqXpwI.js";import"./SnackMsg.CjV2AznC.js";import"./ConfirmModal.LX-d7pCX.js";import"./oauthHelper.DdIjK7ap.js";import"./BackIcn.C0X1dWEt.js";import"./Integrations.cQMbRc1e.js";import"./Table.CDoeMbPk.js";import"./index.Cj5suhk1.js";import"./InfoIcn.Bqjy485j.js";function j({nutshellCRMConf:o,setNutshellCRMConf:e,step:r,setStep:s,isInfo:n}){var i;const a=`
    <h4>${t("Get API Token","bit-integrations")}</h4>
    <ul>
      <li>${t("Visit","bit-integrations")} <a href="https://app.nutshell.com/setup/api-key" target="_blank" rel="noreferrer">${t("Nutshell API Key","bit-integrations")}</a> ${t("to get your credentials.","bit-integrations")}</li>
      <li>${t("Go to your Nutshell CRM's user dashboard","bit-integrations")}</li>
      <li>${t('Then select "Settings"',"bit-integrations")}</li>
      <li>${t('Then go to "API Keys → Add API Key"',"bit-integrations")}</li>
      <li>${t("Use User Name as Username and API Token as Password in this form.","bit-integrations")}</li>
    </ul>`;return l.jsx(u,{config:o,setConfig:e,step:r,setStep:s,isInfo:n,tutorialTitle:"Nutshell CRM",tutorialLinks:((i=m)==null?void 0:i.nutshellCRM)||{},authDetails:{authType:p.BASIC_AUTH,apiEndpoint:"https://app.nutshell.com/api/v1/json",method:"POST",headers:{"Content-type":"application/json"},payload:'{"method":"getUser","id":"randomstring"}'},noteDetails:{note:a}})}export{j as default};
