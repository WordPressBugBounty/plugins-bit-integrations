import{_ as t,j as p}from"./main.2.10.1.js";import{t as l}from"./TutorialLink.7h569T9O.js";import{A as m}from"./AddNewConnection.Cg7SuMmE.js";import{A as g}from"./Authorization.BlvzxFIu.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.ChZVS3S8.js";import"./Note.C35kKkP7.js";import"./SnackMsg.C9WJBVrt.js";import"./ConfirmModal.CDiTORwS.js";import"./oauthHelper.OhIQKmID.js";import"./BackIcn.BKNyOYwv.js";import"./Integrations.CKp7NfRF.js";import"./Table.pymT9y8u.js";import"./index.DpWdl9V1.js";import"./InfoIcn.BrKQmO96.js";function C({systemeIOConf:o,setSystemeIOConf:e,step:r,setStep:s,isInfo:n}){var i;const a=`
            <h4>${t("To Get API Key & API Secret","bit-integrations")}</h4>
            <ul>
                <li>${t("Visit","bit-integrations")} <a href="https://systeme.io/dashboard/profile/public-api-settings" target="_blank" rel="noreferrer">${t("Systeme.io Public API Settings","bit-integrations")}</a> ${t("to get your credentials.","bit-integrations")}</li>
                <li>${t("First go to your SystemeIO dashboard.","bit-integrations")}</li>
                <li>${t('Click go to "Settings" from Right Top corner',"bit-integrations")}</li>
                <li>${t('Then Click "Public API Keys" from the "Settings Menu"',"bit-integrations")}</li>
                <li>${t('Then Click "Create Api key"',"bit-integrations")}</li>
                <li>${t('Then copy "API Token"',"bit-integrations")}</li>
            </ul>`;return p.jsx(g,{config:o,setConfig:e,step:r,setStep:s,isInfo:n,tutorialTitle:"SystemeIO",tutorialLinks:((i=l)==null?void 0:i.systemeIO)||{},authDetails:{authType:m.API_KEY,apiEndpoint:"https://api.systeme.io/api/contacts",method:"GET",key:"x-api-key"},noteDetails:{note:a}})}export{C as default};
