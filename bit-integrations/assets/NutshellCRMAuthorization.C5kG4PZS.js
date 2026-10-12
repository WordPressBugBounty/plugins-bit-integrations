import{_ as t,j as l}from"./main.2.10.8.js";import{A as p}from"./AddNewConnection.CSl-aUAS.js";import{t as m}from"./TutorialLink.DFmBJ6jB.js";import{A as u}from"./Authorization.DpB18Uf2.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.CYq6SLFH.js";import"./Note.dPKVKnj8.js";import"./SnackMsg.B7yKjV9h.js";import"./ConfirmModal.DjUTHz5T.js";import"./oauthHelper.CtoifEmb.js";import"./BackIcn.CJxgNP3V.js";import"./Integrations.CPa6tDEs.js";import"./Table.CrLXNgTi.js";import"./index.Cj5suhk1.js";import"./InfoIcn.C__G0NXw.js";function j({nutshellCRMConf:o,setNutshellCRMConf:e,step:r,setStep:s,isInfo:n}){var i;const a=`
    <h4>${t("Get API Token","bit-integrations")}</h4>
    <ul>
      <li>${t("Visit","bit-integrations")} <a href="https://app.nutshell.com/setup/api-key" target="_blank" rel="noreferrer">${t("Nutshell API Key","bit-integrations")}</a> ${t("to get your credentials.","bit-integrations")}</li>
      <li>${t("Go to your Nutshell CRM's user dashboard","bit-integrations")}</li>
      <li>${t('Then select "Settings"',"bit-integrations")}</li>
      <li>${t('Then go to "API Keys → Add API Key"',"bit-integrations")}</li>
      <li>${t("Use User Name as Username and API Token as Password in this form.","bit-integrations")}</li>
    </ul>`;return l.jsx(u,{config:o,setConfig:e,step:r,setStep:s,isInfo:n,tutorialTitle:"Nutshell CRM",tutorialLinks:((i=m)==null?void 0:i.nutshellCRM)||{},authDetails:{authType:p.BASIC_AUTH,apiEndpoint:"https://app.nutshell.com/api/v1/json",method:"POST",headers:{"Content-type":"application/json"},payload:'{"method":"getUser","id":"randomstring"}'},noteDetails:{note:a}})}export{j as default};
