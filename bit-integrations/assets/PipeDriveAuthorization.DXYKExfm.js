import{_ as t,j as s}from"./main.2.10.6.js";import{A as m}from"./AddNewConnection.hKxiu-to.js";import{A as l}from"./Authorization.DlgvbGol.js";import{t as u}from"./TutorialLink.ncpc8QXW.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.FxPjCsMi.js";import"./Note.BsYUdR7w.js";import"./SnackMsg.BrXUpNxZ.js";import"./ConfirmModal.AfAanEBl.js";import"./oauthHelper.DJJ2i8px.js";import"./BackIcn.CYKCF9tX.js";import"./Integrations.DmnW9IBG.js";import"./Table.Ce2z5dAi.js";import"./index.Cj5suhk1.js";import"./InfoIcn.lRS02cun.js";function z({pipeDriveConf:o,setPipeDriveConf:e,step:r,setstep:p,isInfo:n}){var i;const a=`
    <h4>${t("Step of generate API token:","bit-integrations")}</h4>
    <ul>
      <li>${t("Goto","bit-integrations")} <a href="https://app.pipedrive.com/settings/api">${t("Generate API Token","bit-integrations")}</a></li>
      <li>${t("Copy the <b>Token</b> and paste into <b>API Token</b> field of your authorization form.","bit-integrations")}</li>
      <li>${t("Finally, click <b>Authorize</b> button.","bit-integrations")}</li>
  </ul>
  `;return s.jsx(l,{config:o,setConfig:e,step:r,setStep:p,isInfo:n,tutorialTitle:"Pipedrive",tutorialLinks:((i=u)==null?void 0:i.pipeDrive)||{},authDetails:{authType:m.API_KEY,apiEndpoint:"https://api.pipedrive.com/v1/persons",method:"GET",key:"api_token",addTo:"query"},noteDetails:{note:a}})}export{z as default};
