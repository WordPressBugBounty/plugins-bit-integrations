import{_ as t,j as l}from"./main.2.11.0.js";import{A as p}from"./AddNewConnection.pNRNvRSd.js";import{t as m}from"./TutorialLink.u015MAgn.js";import{A as u}from"./Authorization.BIchEf0K.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.B4OSXcxp.js";import"./Note.NHlZiuVe.js";import"./SnackMsg.BZQz3MDI.js";import"./ConfirmModal.4VHPoM9g.js";import"./oauthHelper.BpU8usvP.js";import"./BackIcn.BmViP7Zj.js";import"./Integrations.DzOTQ6dT.js";import"./Table.DbgUlRk3.js";import"./index.Cj5suhk1.js";import"./InfoIcn.CLEAzlAd.js";function P({bentoConf:e,setBentoConf:o,step:r,setStep:a,isInfo:n}){var i;const s=`
    <h4>${t("To get Publishable Key, Secret Key and Site UUID","bit-integrations")}</h4>
    <ul>
      <li>${t("Visit","bit-integrations")} <a href="https://app.bentonow.com/account/teams" target="_blank" rel="noreferrer">${t("Bento Team Dashboard","bit-integrations")}</a> ${t("to get your credentials.","bit-integrations")}</li>
      <li>${t("Open the Bento team dashboard.","bit-integrations")}</li>
      <li>${t("Go to Settings, then API Keys.","bit-integrations")}</li>
      <li>${t("Copy Publishable Key, Secret Key and Site UUID.","bit-integrations")}</li>
      <li>${t("Use Publishable Key as Username and Secret Key as Password.","bit-integrations")}</li>
    </ul>`;return l.jsx(u,{config:e,setConfig:o,step:r,setStep:a,isInfo:n,tutorialTitle:"Bento",tutorialLinks:((i=m)==null?void 0:i.bento)||{},authDetails:{authType:p.BASIC_AUTH,apiEndpoint:"https://app.bentonow.com/api/v1/fetch/tags?site_uuid={site_uuid}",method:"GET",extraFields:[{name:"site_uuid",label:t("Site UUID","bit-integrations"),required:!0,placeholder:t("Site UUID...","bit-integrations")}]},noteDetails:{note:s}})}export{P as default};
