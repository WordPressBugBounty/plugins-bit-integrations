import{j as s,_ as t}from"./main.2.10.5.js";import{A as p}from"./AddNewConnection.ZSJpjktE.js";import{t as m}from"./TutorialLink.CwM5Erkp.js";import{A as l}from"./Authorization.OdAOjA5a.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.YC94EGca.js";import"./Note.B-17Qwzj.js";import"./SnackMsg.BDVvEnJN.js";import"./ConfirmModal.DTyqLZln.js";import"./oauthHelper.DUT-DMeg.js";import"./BackIcn.fWOyMwfe.js";import"./Integrations.-a67RnHI.js";import"./Table.mVtsKoRn.js";import"./index.Cj5suhk1.js";import"./InfoIcn.m5Eff8OI.js";const c="https://app.surecontact.com/settings/api-keys",u=`
    <h4>${t("Steps to generate an API key:","bit-integrations")}</h4>
    <ul>
      <li>${t("Go to","bit-integrations")} <a href=${c} target="_blank" rel="noreferrer">${t("SureContact API Keys","bit-integrations")}</a></li>
      <li>${t("Create a key and copy it.","bit-integrations")}</li>
      <li>${t("Paste it into the <b>Bearer Token</b> field and click <b>Authorize</b>.","bit-integrations")}</li>
    </ul>
  `;function P({sureContactConf:o,setSureContactConf:r,step:e,setstep:a,isInfo:n}){var i;return s.jsx(l,{config:o,setConfig:r,step:e,setStep:a,isInfo:n,tutorialTitle:"SureContact",tutorialLinks:((i=m)==null?void 0:i.sureContact)||{},authDetails:{authType:p.BEARER_TOKEN,apiEndpoint:"https://api.surecontact.com/api/v1/public/lists",method:"GET",headers:{Accept:"application/json"}},noteDetails:{note:u}})}export{P as default};
