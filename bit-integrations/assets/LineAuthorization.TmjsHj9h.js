import{j as a,_ as t}from"./main.2.10.9.js";import{A as l}from"./AddNewConnection.CW5LtuVJ.js";import{t as p}from"./TutorialLink.FqlDNemP.js";import{A as m}from"./Authorization.CAE17sQm.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.2qKQDb3H.js";import"./Note.D09Bk593.js";import"./SnackMsg.Bv9CCMgQ.js";import"./ConfirmModal.LxmhgP6x.js";import"./oauthHelper.Ddb7PxK6.js";import"./BackIcn.Ctoh3-IH.js";import"./Integrations.2tzEmbEQ.js";import"./Table.DRq56MJy.js";import"./index.Cj5suhk1.js";import"./InfoIcn.gBRzPobO.js";function x({lineConf:o,setLineConf:e,step:n,setstep:r,isInfo:s}){var i;return a.jsx(m,{config:o,setConfig:e,step:n,setStep:r,isInfo:s,tutorialTitle:"Line",tutorialLinks:((i=p)==null?void 0:i.line)||{},authDetails:{authType:l.BEARER_TOKEN,apiEndpoint:"https://api.line.me/v2/bot/info",method:"GET"},noteDetails:{note:u}})}const u=`<h2>${t("To get your Line access token:","bit-integrations")}</h2>
     <ul>
         <li>${t('Log in to the <a href="https://developers.line.biz/console/" target="_blank">Line Developers Console</a>.',"bit-integrations")}</li>
         <li>${t("Go to your provider and select the channel you want to use.","bit-integrations")}</li>
         <li>${t('Navigate to the "Messaging API" tab.',"bit-integrations")}</li>
         <li>${t('Scroll down to the "Channel access token (long-lived)" section.',"bit-integrations")}</li>
         <li>${t('Click the "issue" button to generate a new token.',"bit-integrations")}</li>
         <li>${t("Copy the generated token — this is your Line access token.","bit-integrations")}</li>
     </ul>`;export{x as default};
