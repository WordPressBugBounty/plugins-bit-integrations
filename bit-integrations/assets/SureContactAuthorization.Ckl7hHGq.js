import{j as s,_ as t}from"./main.2.10.9.js";import{A as p}from"./AddNewConnection.CW5LtuVJ.js";import{t as m}from"./TutorialLink.FqlDNemP.js";import{A as l}from"./Authorization.CAE17sQm.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.2qKQDb3H.js";import"./Note.D09Bk593.js";import"./SnackMsg.Bv9CCMgQ.js";import"./ConfirmModal.LxmhgP6x.js";import"./oauthHelper.Ddb7PxK6.js";import"./BackIcn.Ctoh3-IH.js";import"./Integrations.2tzEmbEQ.js";import"./Table.DRq56MJy.js";import"./index.Cj5suhk1.js";import"./InfoIcn.gBRzPobO.js";const c="https://app.surecontact.com/settings/api-keys",u=`
    <h4>${t("Steps to generate an API key:","bit-integrations")}</h4>
    <ul>
      <li>${t("Go to","bit-integrations")} <a href=${c} target="_blank" rel="noreferrer">${t("SureContact API Keys","bit-integrations")}</a></li>
      <li>${t("Create a key and copy it.","bit-integrations")}</li>
      <li>${t("Paste it into the <b>Bearer Token</b> field and click <b>Authorize</b>.","bit-integrations")}</li>
    </ul>
  `;function P({sureContactConf:o,setSureContactConf:r,step:e,setstep:a,isInfo:n}){var i;return s.jsx(l,{config:o,setConfig:r,step:e,setStep:a,isInfo:n,tutorialTitle:"SureContact",tutorialLinks:((i=m)==null?void 0:i.sureContact)||{},authDetails:{authType:p.BEARER_TOKEN,apiEndpoint:"https://api.surecontact.com/api/v1/public/lists",method:"GET",headers:{Accept:"application/json"}},noteDetails:{note:u}})}export{P as default};
