import{_ as t,j as l}from"./main.2.10.5.js";import{A as m}from"./AddNewConnection.ZSJpjktE.js";import{t as p}from"./TutorialLink.CwM5Erkp.js";import{A as g}from"./Authorization.OdAOjA5a.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.YC94EGca.js";import"./Note.B-17Qwzj.js";import"./SnackMsg.BDVvEnJN.js";import"./ConfirmModal.DTyqLZln.js";import"./oauthHelper.DUT-DMeg.js";import"./BackIcn.fWOyMwfe.js";import"./Integrations.-a67RnHI.js";import"./Table.mVtsKoRn.js";import"./index.Cj5suhk1.js";import"./InfoIcn.m5Eff8OI.js";function T({insightlyConf:r,setInsightlyConf:e,step:o,setStep:s,isInfo:n}){var i;const a=`
    <h4>${t("Get Insightly API credentials","bit-integrations")}</h4>
    <ul>
      <li>${t("Visit","bit-integrations")} <a href="https://crm.insightly.com/Users/UserSettings" target="_blank" rel="noreferrer">${t("Insightly User Settings","bit-integrations")}</a> ${t("to get your credentials.","bit-integrations")}</li>
      <li>${t("Open your Insightly account settings.","bit-integrations")}</li>
      <li>${t("Copy your API key and account host (without https://api.).","bit-integrations")}</li>
      <li>${t("Use API key in Username field, leave password empty, then authorize.","bit-integrations")}</li>
    </ul>
    <small class="d-blk mt-3">
      ${t("Example host:","bit-integrations")} <b>name.insightly.com</b>
    </small>
  `;return l.jsx(g,{config:r,setConfig:e,step:o,setStep:s,isInfo:n,tutorialTitle:"Insightly",tutorialLinks:((i=p)==null?void 0:i.insightly)||{},authDetails:{authType:m.BASIC_AUTH,apiEndpoint:"https://api.{api_url}/v3.1/Users",method:"GET",allowEmptyPassword:!0,extraFields:[{name:"api_url",label:t("API URL","bit-integrations"),required:!0,placeholder:t("name.insightly.com","bit-integrations")}]},noteDetails:{note:a}})}export{T as default};
