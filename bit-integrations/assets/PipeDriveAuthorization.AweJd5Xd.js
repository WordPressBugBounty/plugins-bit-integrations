import{_ as t,j as s}from"./main.2.10.5.js";import{A as m}from"./AddNewConnection.ZSJpjktE.js";import{A as l}from"./Authorization.OdAOjA5a.js";import{t as u}from"./TutorialLink.CwM5Erkp.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.YC94EGca.js";import"./Note.B-17Qwzj.js";import"./SnackMsg.BDVvEnJN.js";import"./ConfirmModal.DTyqLZln.js";import"./oauthHelper.DUT-DMeg.js";import"./BackIcn.fWOyMwfe.js";import"./Integrations.-a67RnHI.js";import"./Table.mVtsKoRn.js";import"./index.Cj5suhk1.js";import"./InfoIcn.m5Eff8OI.js";function z({pipeDriveConf:o,setPipeDriveConf:e,step:r,setstep:p,isInfo:n}){var i;const a=`
    <h4>${t("Step of generate API token:","bit-integrations")}</h4>
    <ul>
      <li>${t("Goto","bit-integrations")} <a href="https://app.pipedrive.com/settings/api">${t("Generate API Token","bit-integrations")}</a></li>
      <li>${t("Copy the <b>Token</b> and paste into <b>API Token</b> field of your authorization form.","bit-integrations")}</li>
      <li>${t("Finally, click <b>Authorize</b> button.","bit-integrations")}</li>
  </ul>
  `;return s.jsx(l,{config:o,setConfig:e,step:r,setStep:p,isInfo:n,tutorialTitle:"Pipedrive",tutorialLinks:((i=u)==null?void 0:i.pipeDrive)||{},authDetails:{authType:m.API_KEY,apiEndpoint:"https://api.pipedrive.com/v1/persons",method:"GET",key:"api_token",addTo:"query"},noteDetails:{note:a}})}export{z as default};
