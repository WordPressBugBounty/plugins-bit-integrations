import{_ as t,j as p}from"./main.2.10.0.js";import{A as l}from"./AddNewConnection.DCTHIFxq.js";import{t as m}from"./TutorialLink.BAPo3x0A.js";import{A as u}from"./Authorization.BmZ1lyOd.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.QyWx8Unk.js";import"./Note.Dyd4oGF7.js";import"./SnackMsg.dVUsvxBp.js";import"./ConfirmModal.BVwU3lxl.js";import"./oauthHelper.Bbf-wdGf.js";import"./BackIcn.B7f1heI_.js";function x({asanaConf:a,setAsanaConf:o,step:n,setStep:r,isInfo:e}){var i;const s=`
    <h4>${t("Get API token","bit-integrations")}</h4>
    <ul>
      <li>${t("Visit","bit-integrations")} <a href="https://app.asana.com/0/my-apps" target="_blank" rel="noreferrer">${t("Asana Developer Apps","bit-integrations")}</a> ${t("to get your credentials.","bit-integrations")}</li>
      <li>${t("Open your Asana account settings.","bit-integrations")}</li>
      <li>${t("Create a personal access token.","bit-integrations")}</li>
      <li>${t("Use that token for this connection.","bit-integrations")}</li>
    </ul>`;return p.jsx(u,{config:a,setConfig:o,step:n,setStep:r,isInfo:e,tutorialTitle:"Asana",tutorialLinks:((i=m)==null?void 0:i.asana)||{},authDetails:{authType:l.BEARER_TOKEN,apiEndpoint:"https://app.asana.com/api/1.0/users/me",method:"GET"},noteDetails:{note:s}})}export{x as default};
