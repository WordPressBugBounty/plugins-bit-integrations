import{_ as t,j as l}from"./main.2.11.1.js";import{A as m}from"./AddNewConnection.DPtZb5J7.js";import{t as p}from"./TutorialLink.DsgFZ1Xh.js";import{A as u}from"./Authorization.Bn9m3Lhj.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.CBwfMytR.js";import"./Note.BEwAesbJ.js";import"./SnackMsg.BvQ0dgIT.js";import"./ConfirmModal.S5sVlbDg.js";import"./oauthHelper.Dw_T_8bV.js";import"./BackIcn.CkBZ7Eo8.js";import"./Integrations.DUHcMnTT.js";import"./Table.acfqUtK9.js";import"./index.Cj5suhk1.js";import"./InfoIcn.BZ6L1wGR.js";function I({freshSalesConf:e,setFreshSalesConf:o,step:a,setstep:r,isInfo:s}){var i;const n=`
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
