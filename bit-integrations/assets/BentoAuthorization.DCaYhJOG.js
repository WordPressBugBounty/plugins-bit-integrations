import{_ as t,j as l}from"./main.2.10.5.js";import{A as p}from"./AddNewConnection.ZSJpjktE.js";import{t as m}from"./TutorialLink.CwM5Erkp.js";import{A as u}from"./Authorization.OdAOjA5a.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.YC94EGca.js";import"./Note.B-17Qwzj.js";import"./SnackMsg.BDVvEnJN.js";import"./ConfirmModal.DTyqLZln.js";import"./oauthHelper.DUT-DMeg.js";import"./BackIcn.fWOyMwfe.js";import"./Integrations.-a67RnHI.js";import"./Table.mVtsKoRn.js";import"./index.Cj5suhk1.js";import"./InfoIcn.m5Eff8OI.js";function P({bentoConf:e,setBentoConf:o,step:r,setStep:a,isInfo:n}){var i;const s=`
    <h4>${t("To get Publishable Key, Secret Key and Site UUID","bit-integrations")}</h4>
    <ul>
      <li>${t("Visit","bit-integrations")} <a href="https://app.bentonow.com/account/teams" target="_blank" rel="noreferrer">${t("Bento Team Dashboard","bit-integrations")}</a> ${t("to get your credentials.","bit-integrations")}</li>
      <li>${t("Open the Bento team dashboard.","bit-integrations")}</li>
      <li>${t("Go to Settings, then API Keys.","bit-integrations")}</li>
      <li>${t("Copy Publishable Key, Secret Key and Site UUID.","bit-integrations")}</li>
      <li>${t("Use Publishable Key as Username and Secret Key as Password.","bit-integrations")}</li>
    </ul>`;return l.jsx(u,{config:e,setConfig:o,step:r,setStep:a,isInfo:n,tutorialTitle:"Bento",tutorialLinks:((i=m)==null?void 0:i.bento)||{},authDetails:{authType:p.BASIC_AUTH,apiEndpoint:"https://app.bentonow.com/api/v1/fetch/tags?site_uuid={site_uuid}",method:"GET",extraFields:[{name:"site_uuid",label:t("Site UUID","bit-integrations"),required:!0,placeholder:t("Site UUID...","bit-integrations")}]},noteDetails:{note:s}})}export{P as default};
