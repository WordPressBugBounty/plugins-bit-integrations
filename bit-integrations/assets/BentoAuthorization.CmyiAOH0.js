import{_ as t,j as l}from"./main.2.10.8.js";import{A as p}from"./AddNewConnection.CSl-aUAS.js";import{t as m}from"./TutorialLink.DFmBJ6jB.js";import{A as u}from"./Authorization.DpB18Uf2.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.CYq6SLFH.js";import"./Note.dPKVKnj8.js";import"./SnackMsg.B7yKjV9h.js";import"./ConfirmModal.DjUTHz5T.js";import"./oauthHelper.CtoifEmb.js";import"./BackIcn.CJxgNP3V.js";import"./Integrations.CPa6tDEs.js";import"./Table.CrLXNgTi.js";import"./index.Cj5suhk1.js";import"./InfoIcn.C__G0NXw.js";function P({bentoConf:e,setBentoConf:o,step:r,setStep:a,isInfo:n}){var i;const s=`
    <h4>${t("To get Publishable Key, Secret Key and Site UUID","bit-integrations")}</h4>
    <ul>
      <li>${t("Visit","bit-integrations")} <a href="https://app.bentonow.com/account/teams" target="_blank" rel="noreferrer">${t("Bento Team Dashboard","bit-integrations")}</a> ${t("to get your credentials.","bit-integrations")}</li>
      <li>${t("Open the Bento team dashboard.","bit-integrations")}</li>
      <li>${t("Go to Settings, then API Keys.","bit-integrations")}</li>
      <li>${t("Copy Publishable Key, Secret Key and Site UUID.","bit-integrations")}</li>
      <li>${t("Use Publishable Key as Username and Secret Key as Password.","bit-integrations")}</li>
    </ul>`;return l.jsx(u,{config:e,setConfig:o,step:r,setStep:a,isInfo:n,tutorialTitle:"Bento",tutorialLinks:((i=m)==null?void 0:i.bento)||{},authDetails:{authType:p.BASIC_AUTH,apiEndpoint:"https://app.bentonow.com/api/v1/fetch/tags?site_uuid={site_uuid}",method:"GET",extraFields:[{name:"site_uuid",label:t("Site UUID","bit-integrations"),required:!0,placeholder:t("Site UUID...","bit-integrations")}]},noteDetails:{note:s}})}export{P as default};
