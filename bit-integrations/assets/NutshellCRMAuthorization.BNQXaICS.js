import{_ as t,j as l}from"./main.2.10.7.js";import{A as p}from"./AddNewConnection.CG4L4NdA.js";import{t as m}from"./TutorialLink.CEkST12p.js";import{A as u}from"./Authorization.CYT2dGty.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.CsXMJc5B.js";import"./Note.BTCbylpB.js";import"./SnackMsg.BiNmgEkT.js";import"./ConfirmModal.6ebrzmWw.js";import"./oauthHelper.Cyy1HwK5.js";import"./BackIcn.DJrGb9_v.js";import"./Integrations.CXYgDy-L.js";import"./Table.CT6ZfeMu.js";import"./index.Cj5suhk1.js";import"./InfoIcn.Bdx9y8ki.js";function j({nutshellCRMConf:o,setNutshellCRMConf:e,step:r,setStep:s,isInfo:n}){var i;const a=`
    <h4>${t("Get API Token","bit-integrations")}</h4>
    <ul>
      <li>${t("Visit","bit-integrations")} <a href="https://app.nutshell.com/setup/api-key" target="_blank" rel="noreferrer">${t("Nutshell API Key","bit-integrations")}</a> ${t("to get your credentials.","bit-integrations")}</li>
      <li>${t("Go to your Nutshell CRM's user dashboard","bit-integrations")}</li>
      <li>${t('Then select "Settings"',"bit-integrations")}</li>
      <li>${t('Then go to "API Keys → Add API Key"',"bit-integrations")}</li>
      <li>${t("Use User Name as Username and API Token as Password in this form.","bit-integrations")}</li>
    </ul>`;return l.jsx(u,{config:o,setConfig:e,step:r,setStep:s,isInfo:n,tutorialTitle:"Nutshell CRM",tutorialLinks:((i=m)==null?void 0:i.nutshellCRM)||{},authDetails:{authType:p.BASIC_AUTH,apiEndpoint:"https://app.nutshell.com/api/v1/json",method:"POST",headers:{"Content-type":"application/json"},payload:'{"method":"getUser","id":"randomstring"}'},noteDetails:{note:a}})}export{j as default};
