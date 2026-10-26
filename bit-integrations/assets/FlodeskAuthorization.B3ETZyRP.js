import{_ as t,j as p}from"./main.2.10.9.js";import{A as m}from"./AddNewConnection.CW5LtuVJ.js";import{t as l}from"./TutorialLink.FqlDNemP.js";import{A as d}from"./Authorization.CAE17sQm.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.2qKQDb3H.js";import"./Note.D09Bk593.js";import"./SnackMsg.Bv9CCMgQ.js";import"./ConfirmModal.LxmhgP6x.js";import"./oauthHelper.Ddb7PxK6.js";import"./BackIcn.Ctoh3-IH.js";import"./Integrations.2tzEmbEQ.js";import"./Table.DRq56MJy.js";import"./index.Cj5suhk1.js";import"./InfoIcn.gBRzPobO.js";function $({flodeskConf:o,setFlodeskConf:e,step:s,setstep:r,isInfo:a}){var i;const n=`
  <small class="d-blk mt-5">
    ${t("Generate an API key in Flodesk:","bit-integrations")}
    <b>${t("Account &gt; Integrations &gt; Flodesk API","bit-integrations")}</b>.
    ${t("Copy the API key and paste it in the username field.","bit-integrations")}
  </small>
  <p><b>${t("API access requires a paid Flodesk plan.","bit-integrations")}</b></p>
  `;return p.jsx(d,{config:o,setConfig:e,step:s,setStep:r,isInfo:a,tutorialTitle:"Flodesk",tutorialLinks:((i=l)==null?void 0:i.flodesk)||{},authDetails:{authType:m.BASIC_AUTH,apiEndpoint:"https://api.flodesk.com/v1/segments",method:"GET",allowEmptyPassword:!0},noteDetails:{note:n}})}export{$ as default};
