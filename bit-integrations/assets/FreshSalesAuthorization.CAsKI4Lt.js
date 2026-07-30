import{_ as t,j as l}from"./main.2.10.1.js";import{A as m}from"./AddNewConnection.Cg7SuMmE.js";import{t as p}from"./TutorialLink.7h569T9O.js";import{A as u}from"./Authorization.BlvzxFIu.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.ChZVS3S8.js";import"./Note.C35kKkP7.js";import"./SnackMsg.C9WJBVrt.js";import"./ConfirmModal.CDiTORwS.js";import"./oauthHelper.OhIQKmID.js";import"./BackIcn.BKNyOYwv.js";import"./Integrations.CKp7NfRF.js";import"./Table.pymT9y8u.js";import"./index.DpWdl9V1.js";import"./InfoIcn.BrKQmO96.js";function I({freshSalesConf:e,setFreshSalesConf:o,step:a,setstep:r,isInfo:s}){var i;const n=`
    <h4>${t("Step of generate API token:","bit-integrations")}</h4>
    <ul>
      <li>${t("Goto","bit-integrations")} <a href="https://www.myfreshworks.com/crm/sales/personal-settings/api-settings">${t("Generate API Token","bit-integrations")}</a></li>
      <li>${t("Copy the <b>Token</b> and paste into <b>API Token</b> field of your authorization form.","bit-integrations")}</li>
      <li>${t("Finally, click <b>Authorize</b> button.","bit-integrations")}</li>
  </ul>
  <small className="d-blk mt-3">
    ${t("Example: name.myfreshworks.com/crm/sales","bit-integrations")}
  </small>
  `;return l.jsx(u,{config:e,setConfig:o,step:a,setStep:r,isInfo:s,tutorialTitle:"Freshsales",tutorialLinks:((i=p)==null?void 0:i.freshSales)||{},authDetails:{authType:m.API_KEY,apiEndpoint:"https://{bundle_alias}/api/settings/sales_accounts/fields",method:"GET",key:"X-BI-Auth",addTo:"header",headers:{Authorization:"Token token={api_key}"},extraFields:[{name:"bundle_alias",label:t("Bundle Alias(Your Account URL)","bit-integrations"),required:!0,placeholder:t("name.myfreshworks.com/crm/sales","bit-integrations")}]},noteDetails:{note:n}})}export{I as default};
