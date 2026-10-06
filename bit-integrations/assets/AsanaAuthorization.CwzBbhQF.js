import{_ as t,j as p}from"./main.2.10.7.js";import{A as m}from"./AddNewConnection.CG4L4NdA.js";import{t as l}from"./TutorialLink.CEkST12p.js";import{A as u}from"./Authorization.CYT2dGty.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.CsXMJc5B.js";import"./Note.BTCbylpB.js";import"./SnackMsg.BiNmgEkT.js";import"./ConfirmModal.6ebrzmWw.js";import"./oauthHelper.Cyy1HwK5.js";import"./BackIcn.DJrGb9_v.js";import"./Integrations.CXYgDy-L.js";import"./Table.CT6ZfeMu.js";import"./index.Cj5suhk1.js";import"./InfoIcn.Bdx9y8ki.js";function R({asanaConf:o,setAsanaConf:a,step:r,setStep:n,isInfo:e}){var i;const s=`
    <h4>${t("Get API token","bit-integrations")}</h4>
    <ul>
      <li>${t("Visit","bit-integrations")} <a href="https://app.asana.com/0/my-apps" target="_blank" rel="noreferrer">${t("Asana Developer Apps","bit-integrations")}</a> ${t("to get your credentials.","bit-integrations")}</li>
      <li>${t("Open your Asana account settings.","bit-integrations")}</li>
      <li>${t("Create a personal access token.","bit-integrations")}</li>
      <li>${t("Use that token for this connection.","bit-integrations")}</li>
    </ul>`;return p.jsx(u,{config:o,setConfig:a,step:r,setStep:n,isInfo:e,tutorialTitle:"Asana",tutorialLinks:((i=l)==null?void 0:i.asana)||{},authDetails:{authType:m.BEARER_TOKEN,apiEndpoint:"https://app.asana.com/api/1.0/users/me",method:"GET"},noteDetails:{note:s}})}export{R as default};
