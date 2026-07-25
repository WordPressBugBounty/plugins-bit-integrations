import{_ as t,j as p}from"./main.2.10.0.js";import{A as l}from"./AddNewConnection.DCTHIFxq.js";import{t as u}from"./TutorialLink.BAPo3x0A.js";import{A as m}from"./Authorization.BmZ1lyOd.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.QyWx8Unk.js";import"./Note.Dyd4oGF7.js";import"./SnackMsg.dVUsvxBp.js";import"./ConfirmModal.BVwU3lxl.js";import"./oauthHelper.Bbf-wdGf.js";import"./BackIcn.B7f1heI_.js";function $({gravitecConf:e,setGravitecConf:r,step:o,setStep:a,isInfo:s}){var i;const n=`
    <h4>${t("To Get App key & App Secret","bit-integrations")}</h4>
    <ul>
      <li>${t("Visit","bit-integrations")} <a href="https://push.gravitec.net/" target="_blank" rel="noreferrer">${t("Gravitec Dashboard","bit-integrations")}</a> ${t("to get your credentials.","bit-integrations")}</li>
      <li>${t("First go to your Gravitec dashboard.","bit-integrations")}</li>
      <li>${t("Open your site from the left sidebar.","bit-integrations")}</li>
      <li>${t("Open Settings, then REST API.","bit-integrations")}</li>
      <li>${t("Use App key as Username and App secret as Password here.","bit-integrations")}</li>
    </ul>`;return p.jsx(m,{config:e,setConfig:r,step:o,setStep:a,isInfo:s,tutorialTitle:"Gravitec",tutorialLinks:((i=u)==null?void 0:i.gravitec)||{},authDetails:{authType:l.BASIC_AUTH,apiEndpoint:"https://uapi.gravitec.net/api/v3/push",method:"POST",headers:{"Content-Type":"application/json"},payload:'{"payload":{"title":"Authorization","message":"Authorized Successfully","icon":"{site_url}/favicon.ico","redirect_url":"{site_url}"}}',extraFields:[{name:"site_url",label:t("Site Url","bit-integrations"),required:!0,placeholder:t("https://example.com","bit-integrations")}]},noteDetails:{note:n}})}export{$ as default};
