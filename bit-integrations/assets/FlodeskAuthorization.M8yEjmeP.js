import{_ as t,j as p}from"./main.2.10.7.js";import{A as m}from"./AddNewConnection.CG4L4NdA.js";import{t as l}from"./TutorialLink.CEkST12p.js";import{A as d}from"./Authorization.CYT2dGty.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.CsXMJc5B.js";import"./Note.BTCbylpB.js";import"./SnackMsg.BiNmgEkT.js";import"./ConfirmModal.6ebrzmWw.js";import"./oauthHelper.Cyy1HwK5.js";import"./BackIcn.DJrGb9_v.js";import"./Integrations.CXYgDy-L.js";import"./Table.CT6ZfeMu.js";import"./index.Cj5suhk1.js";import"./InfoIcn.Bdx9y8ki.js";function $({flodeskConf:o,setFlodeskConf:e,step:s,setstep:r,isInfo:a}){var i;const n=`
  <small class="d-blk mt-5">
    ${t("Generate an API key in Flodesk:","bit-integrations")}
    <b>${t("Account &gt; Integrations &gt; Flodesk API","bit-integrations")}</b>.
    ${t("Copy the API key and paste it in the username field.","bit-integrations")}
  </small>
  <p><b>${t("API access requires a paid Flodesk plan.","bit-integrations")}</b></p>
  `;return p.jsx(d,{config:o,setConfig:e,step:s,setStep:r,isInfo:a,tutorialTitle:"Flodesk",tutorialLinks:((i=l)==null?void 0:i.flodesk)||{},authDetails:{authType:m.BASIC_AUTH,apiEndpoint:"https://api.flodesk.com/v1/segments",method:"GET",allowEmptyPassword:!0},noteDetails:{note:n}})}export{$ as default};
