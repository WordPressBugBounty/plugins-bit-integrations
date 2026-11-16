import{_ as t,j as l}from"./main.2.11.1.js";import{A as p}from"./AddNewConnection.DPtZb5J7.js";import{t as m}from"./TutorialLink.DsgFZ1Xh.js";import{A as u}from"./Authorization.Bn9m3Lhj.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.CBwfMytR.js";import"./Note.BEwAesbJ.js";import"./SnackMsg.BvQ0dgIT.js";import"./ConfirmModal.S5sVlbDg.js";import"./oauthHelper.Dw_T_8bV.js";import"./BackIcn.CkBZ7Eo8.js";import"./Integrations.DUHcMnTT.js";import"./Table.acfqUtK9.js";import"./index.Cj5suhk1.js";import"./InfoIcn.BZ6L1wGR.js";function P({bentoConf:e,setBentoConf:o,step:r,setStep:a,isInfo:n}){var i;const s=`
    <h4>${t("To get Publishable Key, Secret Key and Site UUID","bit-integrations")}</h4>
    <ul>
      <li>${t("Visit","bit-integrations")} <a href="https://app.bentonow.com/account/teams" target="_blank" rel="noreferrer">${t("Bento Team Dashboard","bit-integrations")}</a> ${t("to get your credentials.","bit-integrations")}</li>
      <li>${t("Open the Bento team dashboard.","bit-integrations")}</li>
      <li>${t("Go to Settings, then API Keys.","bit-integrations")}</li>
      <li>${t("Copy Publishable Key, Secret Key and Site UUID.","bit-integrations")}</li>
      <li>${t("Use Publishable Key as Username and Secret Key as Password.","bit-integrations")}</li>
    </ul>`;return l.jsx(u,{config:e,setConfig:o,step:r,setStep:a,isInfo:n,tutorialTitle:"Bento",tutorialLinks:((i=m)==null?void 0:i.bento)||{},authDetails:{authType:p.BASIC_AUTH,apiEndpoint:"https://app.bentonow.com/api/v1/fetch/tags?site_uuid={site_uuid}",method:"GET",extraFields:[{name:"site_uuid",label:t("Site UUID","bit-integrations"),required:!0,placeholder:t("Site UUID...","bit-integrations")}]},noteDetails:{note:s}})}export{P as default};
