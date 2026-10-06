import{_ as t,j as l}from"./main.2.10.7.js";import{A as m}from"./AddNewConnection.CG4L4NdA.js";import{t as p}from"./TutorialLink.CEkST12p.js";import{A as u}from"./Authorization.CYT2dGty.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.CsXMJc5B.js";import"./Note.BTCbylpB.js";import"./SnackMsg.BiNmgEkT.js";import"./ConfirmModal.6ebrzmWw.js";import"./oauthHelper.Cyy1HwK5.js";import"./BackIcn.DJrGb9_v.js";import"./Integrations.CXYgDy-L.js";import"./Table.CT6ZfeMu.js";import"./index.Cj5suhk1.js";import"./InfoIcn.Bdx9y8ki.js";function I({freshSalesConf:e,setFreshSalesConf:o,step:a,setstep:r,isInfo:s}){var i;const n=`
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
