import{j as s,_ as t}from"./main.2.10.7.js";import{A as p}from"./AddNewConnection.CG4L4NdA.js";import{t as m}from"./TutorialLink.CEkST12p.js";import{A as l}from"./Authorization.CYT2dGty.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.CsXMJc5B.js";import"./Note.BTCbylpB.js";import"./SnackMsg.BiNmgEkT.js";import"./ConfirmModal.6ebrzmWw.js";import"./oauthHelper.Cyy1HwK5.js";import"./BackIcn.DJrGb9_v.js";import"./Integrations.CXYgDy-L.js";import"./Table.CT6ZfeMu.js";import"./index.Cj5suhk1.js";import"./InfoIcn.Bdx9y8ki.js";const u="https://app.sender.net/settings/tokens",c=`
    <h4>${t("Steps to generate an API access token:","bit-integrations")}</h4>
    <ul>
      <li>${t("Go to","bit-integrations")} <a href=${u} target="_blank" rel="noreferrer">${t("Sender API Access Tokens","bit-integrations")}</a></li>
      <li>${t("Create a token and copy it.","bit-integrations")}</li>
      <li>${t("Paste it into the <b>Bearer Token</b> field and click <b>Authorize</b>.","bit-integrations")}</li>
    </ul>
  `;function R({senderConf:e,setSenderConf:o,step:r,setstep:n,isInfo:a}){var i;return s.jsx(l,{config:e,setConfig:o,step:r,setStep:n,isInfo:a,tutorialTitle:"Sender",tutorialLinks:((i=m)==null?void 0:i.sender)||{},authDetails:{authType:p.BEARER_TOKEN,apiEndpoint:"https://api.sender.net/v2/groups",method:"GET",headers:{Accept:"application/json"}},noteDetails:{note:c}})}export{R as default};
