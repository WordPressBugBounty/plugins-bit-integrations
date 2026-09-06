import{_ as t,j as p}from"./main.2.10.4.js";import{t as l}from"./TutorialLink.Jph0Wyx1.js";import{A as m}from"./AddNewConnection.B2iullfe.js";import{A as g}from"./Authorization.CEG4BCsq.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.BAYnB26G.js";import"./Note.BlcqXpwI.js";import"./SnackMsg.CjV2AznC.js";import"./ConfirmModal.LX-d7pCX.js";import"./oauthHelper.DdIjK7ap.js";import"./BackIcn.C0X1dWEt.js";import"./Integrations.cQMbRc1e.js";import"./Table.CDoeMbPk.js";import"./index.Cj5suhk1.js";import"./InfoIcn.Bqjy485j.js";function C({systemeIOConf:o,setSystemeIOConf:e,step:r,setStep:s,isInfo:n}){var i;const a=`
            <h4>${t("To Get API Key & API Secret","bit-integrations")}</h4>
            <ul>
                <li>${t("Visit","bit-integrations")} <a href="https://systeme.io/dashboard/profile/public-api-settings" target="_blank" rel="noreferrer">${t("Systeme.io Public API Settings","bit-integrations")}</a> ${t("to get your credentials.","bit-integrations")}</li>
                <li>${t("First go to your SystemeIO dashboard.","bit-integrations")}</li>
                <li>${t('Click go to "Settings" from Right Top corner',"bit-integrations")}</li>
                <li>${t('Then Click "Public API Keys" from the "Settings Menu"',"bit-integrations")}</li>
                <li>${t('Then Click "Create Api key"',"bit-integrations")}</li>
                <li>${t('Then copy "API Token"',"bit-integrations")}</li>
            </ul>`;return p.jsx(g,{config:o,setConfig:e,step:r,setStep:s,isInfo:n,tutorialTitle:"SystemeIO",tutorialLinks:((i=l)==null?void 0:i.systemeIO)||{},authDetails:{authType:m.API_KEY,apiEndpoint:"https://api.systeme.io/api/contacts",method:"GET",key:"x-api-key"},noteDetails:{note:a}})}export{C as default};
