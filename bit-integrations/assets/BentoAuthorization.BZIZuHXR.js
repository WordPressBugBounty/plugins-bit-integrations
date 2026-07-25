import{_ as t,j as l}from"./main.2.10.0.js";import{A as p}from"./AddNewConnection.DCTHIFxq.js";import{t as u}from"./TutorialLink.BAPo3x0A.js";import{A as m}from"./Authorization.BmZ1lyOd.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.QyWx8Unk.js";import"./Note.Dyd4oGF7.js";import"./SnackMsg.dVUsvxBp.js";import"./ConfirmModal.BVwU3lxl.js";import"./oauthHelper.Bbf-wdGf.js";import"./BackIcn.B7f1heI_.js";function $({bentoConf:e,setBentoConf:o,step:a,setStep:n,isInfo:r}){var i;const s=`
    <h4>${t("To get Publishable Key, Secret Key and Site UUID","bit-integrations")}</h4>
    <ul>
      <li>${t("Visit","bit-integrations")} <a href="https://app.bentonow.com/account/teams" target="_blank" rel="noreferrer">${t("Bento Team Dashboard","bit-integrations")}</a> ${t("to get your credentials.","bit-integrations")}</li>
      <li>${t("Open the Bento team dashboard.","bit-integrations")}</li>
      <li>${t("Go to Settings, then API Keys.","bit-integrations")}</li>
      <li>${t("Copy Publishable Key, Secret Key and Site UUID.","bit-integrations")}</li>
      <li>${t("Use Publishable Key as Username and Secret Key as Password.","bit-integrations")}</li>
    </ul>`;return l.jsx(m,{config:e,setConfig:o,step:a,setStep:n,isInfo:r,tutorialTitle:"Bento",tutorialLinks:((i=u)==null?void 0:i.bento)||{},authDetails:{authType:p.BASIC_AUTH,apiEndpoint:"https://app.bentonow.com/api/v1/fetch/tags?site_uuid={site_uuid}",method:"GET",extraFields:[{name:"site_uuid",label:t("Site UUID","bit-integrations"),required:!0,placeholder:t("Site UUID...","bit-integrations")}]},noteDetails:{note:s}})}export{$ as default};
