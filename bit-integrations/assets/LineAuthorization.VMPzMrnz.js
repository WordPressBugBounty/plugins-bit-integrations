import{j as a,_ as t}from"./main.2.10.0.js";import{A as l}from"./AddNewConnection.DCTHIFxq.js";import{t as p}from"./TutorialLink.BAPo3x0A.js";import{A as u}from"./Authorization.BmZ1lyOd.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.QyWx8Unk.js";import"./Note.Dyd4oGF7.js";import"./SnackMsg.dVUsvxBp.js";import"./ConfirmModal.BVwU3lxl.js";import"./oauthHelper.Bbf-wdGf.js";import"./BackIcn.B7f1heI_.js";function v({lineConf:e,setLineConf:o,step:n,setstep:s,isInfo:r}){var i;return a.jsx(u,{config:e,setConfig:o,step:n,setStep:s,isInfo:r,tutorialTitle:"Line",tutorialLinks:((i=p)==null?void 0:i.line)||{},authDetails:{authType:l.BEARER_TOKEN,apiEndpoint:"https://api.line.me/v2/bot/info",method:"GET"},noteDetails:{note:h}})}const h=`<h2>${t("To get your Line access token:","bit-integrations")}</h2>
     <ul>
         <li>${t('Log in to the <a href="https://developers.line.biz/console/" target="_blank">Line Developers Console</a>.',"bit-integrations")}</li>
         <li>${t("Go to your provider and select the channel you want to use.","bit-integrations")}</li>
         <li>${t('Navigate to the "Messaging API" tab.',"bit-integrations")}</li>
         <li>${t('Scroll down to the "Channel access token (long-lived)" section.',"bit-integrations")}</li>
         <li>${t('Click the "issue" button to generate a new token.',"bit-integrations")}</li>
         <li>${t("Copy the generated token — this is your Line access token.","bit-integrations")}</li>
     </ul>`;export{v as default};
