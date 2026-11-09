import{_ as t,j as p}from"./main.2.11.0.js";import{A as m}from"./AddNewConnection.pNRNvRSd.js";import{t as l}from"./TutorialLink.u015MAgn.js";import{A as d}from"./Authorization.BIchEf0K.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.B4OSXcxp.js";import"./Note.NHlZiuVe.js";import"./SnackMsg.BZQz3MDI.js";import"./ConfirmModal.4VHPoM9g.js";import"./oauthHelper.BpU8usvP.js";import"./BackIcn.BmViP7Zj.js";import"./Integrations.DzOTQ6dT.js";import"./Table.DbgUlRk3.js";import"./index.Cj5suhk1.js";import"./InfoIcn.CLEAzlAd.js";function $({flodeskConf:o,setFlodeskConf:e,step:s,setstep:r,isInfo:a}){var i;const n=`
  <small class="d-blk mt-5">
    ${t("Generate an API key in Flodesk:","bit-integrations")}
    <b>${t("Account &gt; Integrations &gt; Flodesk API","bit-integrations")}</b>.
    ${t("Copy the API key and paste it in the username field.","bit-integrations")}
  </small>
  <p><b>${t("API access requires a paid Flodesk plan.","bit-integrations")}</b></p>
  `;return p.jsx(d,{config:o,setConfig:e,step:s,setStep:r,isInfo:a,tutorialTitle:"Flodesk",tutorialLinks:((i=l)==null?void 0:i.flodesk)||{},authDetails:{authType:m.BASIC_AUTH,apiEndpoint:"https://api.flodesk.com/v1/segments",method:"GET",allowEmptyPassword:!0},noteDetails:{note:n}})}export{$ as default};
