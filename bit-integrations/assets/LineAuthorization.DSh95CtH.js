import{j as a,_ as t}from"./main.2.10.6.js";import{A as l}from"./AddNewConnection.hKxiu-to.js";import{t as p}from"./TutorialLink.ncpc8QXW.js";import{A as m}from"./Authorization.DlgvbGol.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.FxPjCsMi.js";import"./Note.BsYUdR7w.js";import"./SnackMsg.BrXUpNxZ.js";import"./ConfirmModal.AfAanEBl.js";import"./oauthHelper.DJJ2i8px.js";import"./BackIcn.CYKCF9tX.js";import"./Integrations.DmnW9IBG.js";import"./Table.Ce2z5dAi.js";import"./index.Cj5suhk1.js";import"./InfoIcn.lRS02cun.js";function x({lineConf:o,setLineConf:e,step:n,setstep:r,isInfo:s}){var i;return a.jsx(m,{config:o,setConfig:e,step:n,setStep:r,isInfo:s,tutorialTitle:"Line",tutorialLinks:((i=p)==null?void 0:i.line)||{},authDetails:{authType:l.BEARER_TOKEN,apiEndpoint:"https://api.line.me/v2/bot/info",method:"GET"},noteDetails:{note:u}})}const u=`<h2>${t("To get your Line access token:","bit-integrations")}</h2>
     <ul>
         <li>${t('Log in to the <a href="https://developers.line.biz/console/" target="_blank">Line Developers Console</a>.',"bit-integrations")}</li>
         <li>${t("Go to your provider and select the channel you want to use.","bit-integrations")}</li>
         <li>${t('Navigate to the "Messaging API" tab.',"bit-integrations")}</li>
         <li>${t('Scroll down to the "Channel access token (long-lived)" section.',"bit-integrations")}</li>
         <li>${t('Click the "issue" button to generate a new token.',"bit-integrations")}</li>
         <li>${t("Copy the generated token — this is your Line access token.","bit-integrations")}</li>
     </ul>`;export{x as default};
