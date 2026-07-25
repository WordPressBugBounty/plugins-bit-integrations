import{j as s,_ as t}from"./main.2.10.0.js";import{A as p}from"./AddNewConnection.DCTHIFxq.js";import{t as l}from"./TutorialLink.BAPo3x0A.js";import{A as m}from"./Authorization.BmZ1lyOd.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.QyWx8Unk.js";import"./Note.Dyd4oGF7.js";import"./SnackMsg.dVUsvxBp.js";import"./ConfirmModal.BVwU3lxl.js";import"./oauthHelper.Bbf-wdGf.js";import"./BackIcn.B7f1heI_.js";const u="https://app.sender.net/settings/tokens",c=`
    <h4>${t("Steps to generate an API access token:","bit-integrations")}</h4>
    <ul>
      <li>${t("Go to","bit-integrations")} <a href=${u} target="_blank" rel="noreferrer">${t("Sender API Access Tokens","bit-integrations")}</a></li>
      <li>${t("Create a token and copy it.","bit-integrations")}</li>
      <li>${t("Paste it into the <b>Bearer Token</b> field and click <b>Authorize</b>.","bit-integrations")}</li>
    </ul>
  `;function j({senderConf:i,setSenderConf:o,step:r,setstep:n,isInfo:a}){var e;return s.jsx(m,{config:i,setConfig:o,step:r,setStep:n,isInfo:a,tutorialTitle:"Sender",tutorialLinks:((e=l)==null?void 0:e.sender)||{},authDetails:{authType:p.BEARER_TOKEN,apiEndpoint:"https://api.sender.net/v2/groups",method:"GET",headers:{Accept:"application/json"}},noteDetails:{note:c}})}export{j as default};
