import{j as s,_ as t}from"./main.2.10.4.js";import{A as p}from"./AddNewConnection.B2iullfe.js";import{t as m}from"./TutorialLink.Jph0Wyx1.js";import{A as l}from"./Authorization.CEG4BCsq.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.BAYnB26G.js";import"./Note.BlcqXpwI.js";import"./SnackMsg.CjV2AznC.js";import"./ConfirmModal.LX-d7pCX.js";import"./oauthHelper.DdIjK7ap.js";import"./BackIcn.C0X1dWEt.js";import"./Integrations.cQMbRc1e.js";import"./Table.CDoeMbPk.js";import"./index.Cj5suhk1.js";import"./InfoIcn.Bqjy485j.js";const u="https://app.sender.net/settings/tokens",c=`
    <h4>${t("Steps to generate an API access token:","bit-integrations")}</h4>
    <ul>
      <li>${t("Go to","bit-integrations")} <a href=${u} target="_blank" rel="noreferrer">${t("Sender API Access Tokens","bit-integrations")}</a></li>
      <li>${t("Create a token and copy it.","bit-integrations")}</li>
      <li>${t("Paste it into the <b>Bearer Token</b> field and click <b>Authorize</b>.","bit-integrations")}</li>
    </ul>
  `;function R({senderConf:e,setSenderConf:o,step:r,setstep:n,isInfo:a}){var i;return s.jsx(l,{config:e,setConfig:o,step:r,setStep:n,isInfo:a,tutorialTitle:"Sender",tutorialLinks:((i=m)==null?void 0:i.sender)||{},authDetails:{authType:p.BEARER_TOKEN,apiEndpoint:"https://api.sender.net/v2/groups",method:"GET",headers:{Accept:"application/json"}},noteDetails:{note:c}})}export{R as default};
