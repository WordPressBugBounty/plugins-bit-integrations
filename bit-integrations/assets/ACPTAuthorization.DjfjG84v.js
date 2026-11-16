import{_ as t,j as p}from"./main.2.11.1.js";import{A as l}from"./AddNewConnection.DPtZb5J7.js";import{t as m}from"./TutorialLink.DsgFZ1Xh.js";import{A as u}from"./Authorization.Bn9m3Lhj.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.CBwfMytR.js";import"./Note.BEwAesbJ.js";import"./SnackMsg.BvQ0dgIT.js";import"./ConfirmModal.S5sVlbDg.js";import"./oauthHelper.Dw_T_8bV.js";import"./BackIcn.CkBZ7Eo8.js";import"./Integrations.DUHcMnTT.js";import"./Table.acfqUtK9.js";import"./index.Cj5suhk1.js";import"./InfoIcn.BZ6L1wGR.js";function C({acptConf:i,setAcptConf:o,step:r,setStep:a,isInfo:n}){var e;const s=`
    <b>${t("Please note","bit-integrations")}</b>
    <p>${t("The secret key will no longer be displayed, so please take note of it. Eventually, you can regenerate your API keys.","bit-integrations")}</p>
    <h4>${t("To get API key-secret","bit-integrations")}</h4>
    <ul>
      <li>${t("Go to the ACPT dashboard.","bit-integrations")}</li>
      <li>${t("Open Tools, then go to API dashboard.","bit-integrations")}</li>
      <li>${t("Open REST API and generate an API key if needed.","bit-integrations")}</li>
      <li>${t("Copy the generated key-secret pair.","bit-integrations")}</li>
    </ul>`;return p.jsx(u,{config:i,setConfig:o,step:r,setStep:a,isInfo:n,tutorialTitle:"ACPT",tutorialLinks:((e=m)==null?void 0:e.acpt)||{},authDetails:{authType:l.API_KEY,apiEndpoint:"{base_url}/wp-json/acpt/v1/taxonomy",method:"GET",key:"acpt-api-key",addTo:"header",extraFields:[{name:"base_url",label:t("Homepage URL","bit-integrations"),required:!0,placeholder:t("https://example.com","bit-integrations")}]},noteDetails:{note:s}})}export{C as default};
