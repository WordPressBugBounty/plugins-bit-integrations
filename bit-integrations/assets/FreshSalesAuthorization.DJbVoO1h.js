import{_ as t,j as l}from"./main.2.10.8.js";import{A as m}from"./AddNewConnection.CSl-aUAS.js";import{t as p}from"./TutorialLink.DFmBJ6jB.js";import{A as u}from"./Authorization.DpB18Uf2.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.CYq6SLFH.js";import"./Note.dPKVKnj8.js";import"./SnackMsg.B7yKjV9h.js";import"./ConfirmModal.DjUTHz5T.js";import"./oauthHelper.CtoifEmb.js";import"./BackIcn.CJxgNP3V.js";import"./Integrations.CPa6tDEs.js";import"./Table.CrLXNgTi.js";import"./index.Cj5suhk1.js";import"./InfoIcn.C__G0NXw.js";function I({freshSalesConf:e,setFreshSalesConf:o,step:a,setstep:r,isInfo:s}){var i;const n=`
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
