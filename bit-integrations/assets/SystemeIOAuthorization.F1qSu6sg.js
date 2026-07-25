import{_ as t,j as l}from"./main.2.10.0.js";import{t as p}from"./TutorialLink.BAPo3x0A.js";import{A as m}from"./AddNewConnection.DCTHIFxq.js";import{A as g}from"./Authorization.BmZ1lyOd.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.QyWx8Unk.js";import"./Note.Dyd4oGF7.js";import"./SnackMsg.dVUsvxBp.js";import"./ConfirmModal.BVwU3lxl.js";import"./oauthHelper.Bbf-wdGf.js";import"./BackIcn.B7f1heI_.js";function $({systemeIOConf:e,setSystemeIOConf:o,step:r,setStep:s,isInfo:n}){var i;const a=`
            <h4>${t("To Get API Key & API Secret","bit-integrations")}</h4>
            <ul>
                <li>${t("Visit","bit-integrations")} <a href="https://systeme.io/dashboard/profile/public-api-settings" target="_blank" rel="noreferrer">${t("Systeme.io Public API Settings","bit-integrations")}</a> ${t("to get your credentials.","bit-integrations")}</li>
                <li>${t("First go to your SystemeIO dashboard.","bit-integrations")}</li>
                <li>${t('Click go to "Settings" from Right Top corner',"bit-integrations")}</li>
                <li>${t('Then Click "Public API Keys" from the "Settings Menu"',"bit-integrations")}</li>
                <li>${t('Then Click "Create Api key"',"bit-integrations")}</li>
                <li>${t('Then copy "API Token"',"bit-integrations")}</li>
            </ul>`;return l.jsx(g,{config:e,setConfig:o,step:r,setStep:s,isInfo:n,tutorialTitle:"SystemeIO",tutorialLinks:((i=p)==null?void 0:i.systemeIO)||{},authDetails:{authType:m.API_KEY,apiEndpoint:"https://api.systeme.io/api/contacts",method:"GET",key:"x-api-key"},noteDetails:{note:a}})}export{$ as default};
