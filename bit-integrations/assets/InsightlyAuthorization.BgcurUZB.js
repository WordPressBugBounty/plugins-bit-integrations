import{_ as t,j as l}from"./main.2.10.7.js";import{A as m}from"./AddNewConnection.CG4L4NdA.js";import{t as p}from"./TutorialLink.CEkST12p.js";import{A as g}from"./Authorization.CYT2dGty.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.CsXMJc5B.js";import"./Note.BTCbylpB.js";import"./SnackMsg.BiNmgEkT.js";import"./ConfirmModal.6ebrzmWw.js";import"./oauthHelper.Cyy1HwK5.js";import"./BackIcn.DJrGb9_v.js";import"./Integrations.CXYgDy-L.js";import"./Table.CT6ZfeMu.js";import"./index.Cj5suhk1.js";import"./InfoIcn.Bdx9y8ki.js";function T({insightlyConf:r,setInsightlyConf:e,step:o,setStep:s,isInfo:n}){var i;const a=`
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
