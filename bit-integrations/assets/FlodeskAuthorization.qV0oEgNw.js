import{_ as t,j as p}from"./main.2.10.8.js";import{A as m}from"./AddNewConnection.CSl-aUAS.js";import{t as l}from"./TutorialLink.DFmBJ6jB.js";import{A as d}from"./Authorization.DpB18Uf2.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.CYq6SLFH.js";import"./Note.dPKVKnj8.js";import"./SnackMsg.B7yKjV9h.js";import"./ConfirmModal.DjUTHz5T.js";import"./oauthHelper.CtoifEmb.js";import"./BackIcn.CJxgNP3V.js";import"./Integrations.CPa6tDEs.js";import"./Table.CrLXNgTi.js";import"./index.Cj5suhk1.js";import"./InfoIcn.C__G0NXw.js";function $({flodeskConf:o,setFlodeskConf:e,step:s,setstep:r,isInfo:a}){var i;const n=`
  <small class="d-blk mt-5">
    ${t("Generate an API key in Flodesk:","bit-integrations")}
    <b>${t("Account &gt; Integrations &gt; Flodesk API","bit-integrations")}</b>.
    ${t("Copy the API key and paste it in the username field.","bit-integrations")}
  </small>
  <p><b>${t("API access requires a paid Flodesk plan.","bit-integrations")}</b></p>
  `;return p.jsx(d,{config:o,setConfig:e,step:s,setStep:r,isInfo:a,tutorialTitle:"Flodesk",tutorialLinks:((i=l)==null?void 0:i.flodesk)||{},authDetails:{authType:m.BASIC_AUTH,apiEndpoint:"https://api.flodesk.com/v1/segments",method:"GET",allowEmptyPassword:!0},noteDetails:{note:n}})}export{$ as default};
