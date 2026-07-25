import{_ as t,j as l}from"./main.2.10.0.js";import{A as p}from"./AddNewConnection.DCTHIFxq.js";import{t as m}from"./TutorialLink.BAPo3x0A.js";import{A as u}from"./Authorization.BmZ1lyOd.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.QyWx8Unk.js";import"./Note.Dyd4oGF7.js";import"./SnackMsg.dVUsvxBp.js";import"./ConfirmModal.BVwU3lxl.js";import"./oauthHelper.Bbf-wdGf.js";import"./BackIcn.B7f1heI_.js";function k({nutshellCRMConf:o,setNutshellCRMConf:e,step:s,setStep:r,isInfo:n}){var i;const a=`
    <h4>${t("Get API Token","bit-integrations")}</h4>
    <ul>
      <li>${t("Visit","bit-integrations")} <a href="https://app.nutshell.com/setup/api-key" target="_blank" rel="noreferrer">${t("Nutshell API Key","bit-integrations")}</a> ${t("to get your credentials.","bit-integrations")}</li>
      <li>${t("Go to your Nutshell CRM's user dashboard","bit-integrations")}</li>
      <li>${t('Then select "Settings"',"bit-integrations")}</li>
      <li>${t('Then go to "API Keys → Add API Key"',"bit-integrations")}</li>
      <li>${t("Use User Name as Username and API Token as Password in this form.","bit-integrations")}</li>
    </ul>`;return l.jsx(u,{config:o,setConfig:e,step:s,setStep:r,isInfo:n,tutorialTitle:"Nutshell CRM",tutorialLinks:((i=m)==null?void 0:i.nutshellCRM)||{},authDetails:{authType:p.BASIC_AUTH,apiEndpoint:"https://app.nutshell.com/api/v1/json",method:"POST",headers:{"Content-type":"application/json"},payload:'{"method":"getUser","id":"randomstring"}'},noteDetails:{note:a}})}export{k as default};
