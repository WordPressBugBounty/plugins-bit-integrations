import{_ as t,j as p}from"./main.2.10.7.js";import{t as l}from"./TutorialLink.CEkST12p.js";import{A as m}from"./AddNewConnection.CG4L4NdA.js";import{A as g}from"./Authorization.CYT2dGty.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.CsXMJc5B.js";import"./Note.BTCbylpB.js";import"./SnackMsg.BiNmgEkT.js";import"./ConfirmModal.6ebrzmWw.js";import"./oauthHelper.Cyy1HwK5.js";import"./BackIcn.DJrGb9_v.js";import"./Integrations.CXYgDy-L.js";import"./Table.CT6ZfeMu.js";import"./index.Cj5suhk1.js";import"./InfoIcn.Bdx9y8ki.js";function C({systemeIOConf:o,setSystemeIOConf:e,step:r,setStep:s,isInfo:n}){var i;const a=`
            <h4>${t("To Get API Key & API Secret","bit-integrations")}</h4>
            <ul>
                <li>${t("Visit","bit-integrations")} <a href="https://systeme.io/dashboard/profile/public-api-settings" target="_blank" rel="noreferrer">${t("Systeme.io Public API Settings","bit-integrations")}</a> ${t("to get your credentials.","bit-integrations")}</li>
                <li>${t("First go to your SystemeIO dashboard.","bit-integrations")}</li>
                <li>${t('Click go to "Settings" from Right Top corner',"bit-integrations")}</li>
                <li>${t('Then Click "Public API Keys" from the "Settings Menu"',"bit-integrations")}</li>
                <li>${t('Then Click "Create Api key"',"bit-integrations")}</li>
                <li>${t('Then copy "API Token"',"bit-integrations")}</li>
            </ul>`;return p.jsx(g,{config:o,setConfig:e,step:r,setStep:s,isInfo:n,tutorialTitle:"SystemeIO",tutorialLinks:((i=l)==null?void 0:i.systemeIO)||{},authDetails:{authType:m.API_KEY,apiEndpoint:"https://api.systeme.io/api/contacts",method:"GET",key:"x-api-key"},noteDetails:{note:a}})}export{C as default};
