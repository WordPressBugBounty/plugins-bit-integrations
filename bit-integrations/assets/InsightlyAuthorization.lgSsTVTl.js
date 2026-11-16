import{_ as t,j as l}from"./main.2.11.1.js";import{A as m}from"./AddNewConnection.DPtZb5J7.js";import{t as p}from"./TutorialLink.DsgFZ1Xh.js";import{A as g}from"./Authorization.Bn9m3Lhj.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.CBwfMytR.js";import"./Note.BEwAesbJ.js";import"./SnackMsg.BvQ0dgIT.js";import"./ConfirmModal.S5sVlbDg.js";import"./oauthHelper.Dw_T_8bV.js";import"./BackIcn.CkBZ7Eo8.js";import"./Integrations.DUHcMnTT.js";import"./Table.acfqUtK9.js";import"./index.Cj5suhk1.js";import"./InfoIcn.BZ6L1wGR.js";function T({insightlyConf:r,setInsightlyConf:e,step:o,setStep:s,isInfo:n}){var i;const a=`
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
