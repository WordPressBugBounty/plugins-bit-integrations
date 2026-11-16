import{_ as t,j as p}from"./main.2.11.1.js";import{t as l}from"./TutorialLink.DsgFZ1Xh.js";import{A as m}from"./AddNewConnection.DPtZb5J7.js";import{A as g}from"./Authorization.Bn9m3Lhj.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.CBwfMytR.js";import"./Note.BEwAesbJ.js";import"./SnackMsg.BvQ0dgIT.js";import"./ConfirmModal.S5sVlbDg.js";import"./oauthHelper.Dw_T_8bV.js";import"./BackIcn.CkBZ7Eo8.js";import"./Integrations.DUHcMnTT.js";import"./Table.acfqUtK9.js";import"./index.Cj5suhk1.js";import"./InfoIcn.BZ6L1wGR.js";function C({systemeIOConf:o,setSystemeIOConf:e,step:r,setStep:s,isInfo:n}){var i;const a=`
            <h4>${t("To Get API Key & API Secret","bit-integrations")}</h4>
            <ul>
                <li>${t("Visit","bit-integrations")} <a href="https://systeme.io/dashboard/profile/public-api-settings" target="_blank" rel="noreferrer">${t("Systeme.io Public API Settings","bit-integrations")}</a> ${t("to get your credentials.","bit-integrations")}</li>
                <li>${t("First go to your SystemeIO dashboard.","bit-integrations")}</li>
                <li>${t('Click go to "Settings" from Right Top corner',"bit-integrations")}</li>
                <li>${t('Then Click "Public API Keys" from the "Settings Menu"',"bit-integrations")}</li>
                <li>${t('Then Click "Create Api key"',"bit-integrations")}</li>
                <li>${t('Then copy "API Token"',"bit-integrations")}</li>
            </ul>`;return p.jsx(g,{config:o,setConfig:e,step:r,setStep:s,isInfo:n,tutorialTitle:"SystemeIO",tutorialLinks:((i=l)==null?void 0:i.systemeIO)||{},authDetails:{authType:m.API_KEY,apiEndpoint:"https://api.systeme.io/api/contacts",method:"GET",key:"x-api-key"},noteDetails:{note:a}})}export{C as default};
