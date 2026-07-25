import{_ as t,j as s}from"./main.2.10.0.js";import{A as p}from"./AddNewConnection.DCTHIFxq.js";import{A as l}from"./Authorization.BmZ1lyOd.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.QyWx8Unk.js";import"./Note.Dyd4oGF7.js";import"./SnackMsg.dVUsvxBp.js";import"./ConfirmModal.BVwU3lxl.js";import"./oauthHelper.Bbf-wdGf.js";import"./BackIcn.B7f1heI_.js";import"./TutorialLink.BAPo3x0A.js";function k({instasentConf:i,setInstasentConf:o,step:n,setstep:e,isInfo:a}){const r=`
    <h4>${t("Steps to generate an API token:","bit-integrations")}</h4>
    <ul>
      <li>${t("Go to the","bit-integrations")} <a href="https://app.instasent.com/" target="_blank" rel="noreferrer">${t("Instasent Dashboard","bit-integrations")}</a>.</li>
      <li>${t("Copy the <b>API Token</b> and paste it into the bearer token field.","bit-integrations")}</li>
      <li>${t("Finally, authorize and save the connection.","bit-integrations")}</li>
    </ul>`;return s.jsx(l,{config:i,setConfig:o,step:n,setStep:e,isInfo:a,tutorialLinkKey:"instasent",tutorialTitle:"Instasent",authDetails:{authType:p.BEARER_TOKEN,apiEndpoint:"https://api.instasent.com/organization/account",method:"GET"},noteDetails:{note:r}})}export{k as default};
