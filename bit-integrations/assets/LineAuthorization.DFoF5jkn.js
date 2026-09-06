import{j as a,_ as t}from"./main.2.10.4.js";import{A as l}from"./AddNewConnection.B2iullfe.js";import{t as p}from"./TutorialLink.Jph0Wyx1.js";import{A as m}from"./Authorization.CEG4BCsq.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.BAYnB26G.js";import"./Note.BlcqXpwI.js";import"./SnackMsg.CjV2AznC.js";import"./ConfirmModal.LX-d7pCX.js";import"./oauthHelper.DdIjK7ap.js";import"./BackIcn.C0X1dWEt.js";import"./Integrations.cQMbRc1e.js";import"./Table.CDoeMbPk.js";import"./index.Cj5suhk1.js";import"./InfoIcn.Bqjy485j.js";function x({lineConf:o,setLineConf:e,step:n,setstep:r,isInfo:s}){var i;return a.jsx(m,{config:o,setConfig:e,step:n,setStep:r,isInfo:s,tutorialTitle:"Line",tutorialLinks:((i=p)==null?void 0:i.line)||{},authDetails:{authType:l.BEARER_TOKEN,apiEndpoint:"https://api.line.me/v2/bot/info",method:"GET"},noteDetails:{note:u}})}const u=`<h2>${t("To get your Line access token:","bit-integrations")}</h2>
     <ul>
         <li>${t('Log in to the <a href="https://developers.line.biz/console/" target="_blank">Line Developers Console</a>.',"bit-integrations")}</li>
         <li>${t("Go to your provider and select the channel you want to use.","bit-integrations")}</li>
         <li>${t('Navigate to the "Messaging API" tab.',"bit-integrations")}</li>
         <li>${t('Scroll down to the "Channel access token (long-lived)" section.',"bit-integrations")}</li>
         <li>${t('Click the "issue" button to generate a new token.',"bit-integrations")}</li>
         <li>${t("Copy the generated token — this is your Line access token.","bit-integrations")}</li>
     </ul>`;export{x as default};
