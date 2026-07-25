import{_ as e,j as m}from"./main.2.10.0.js";import{A as p}from"./AddNewConnection.DCTHIFxq.js";import{t as c}from"./TutorialLink.BAPo3x0A.js";import{A as b}from"./Authorization.BmZ1lyOd.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.QyWx8Unk.js";import"./Note.Dyd4oGF7.js";import"./SnackMsg.dVUsvxBp.js";import"./ConfirmModal.BVwU3lxl.js";import"./oauthHelper.Bbf-wdGf.js";import"./BackIcn.B7f1heI_.js";function L({licenseManagerConf:o,setLicenseManagerConf:r,step:n,setStep:s,isInfo:l}){var t;const a=`
            <b>${e("Requirements","bit-integrations")}</b>
            <p>${e("WordPress permalinks must be enabled at","bit-integrations")}: <b>${e("Settings","bit-integrations")}</b> > <b>${e("Permalinks","bit-integrations")}</b></p>
            <h4>${e("To Get Consumer key & Consumer secret","bit-integrations")}</h4>
            <ul>
                <li>${e('First go to "WooCommerce"',"bit-integrations")}</li>
                <li>${e('Then go to "Settings" page',"bit-integrations")}</li>
                <li>${e('Click on "License Manager " from right top corner menu',"bit-integrations")}</li>
                <li>${e('Then click "REST API" from the top sub menu',"bit-integrations")}</li>
                <li>${e('Then click "Add key" button at the top of the page',"bit-integrations")}</li>
                <li>${e('FIll the form & click "Generate API Key"',"bit-integrations")}</li>
            </ul>`;return m.jsx(b,{config:o,setConfig:r,step:n,setStep:s,isInfo:l,tutorialTitle:"License Manager For WooCommerce",tutorialLinks:((t=c)==null?void 0:t.lmfwc)||{},authDetails:{authType:p.API_KEY,apiEndpoint:"{base_url}/wp-json/lmfwc/v2/licenses",method:"GET",key:"X-BI-Auth",addTo:"header",headers:i=>({Authorization:`Basic ${btoa(`${(i==null?void 0:i.api_key)||""}:${(i==null?void 0:i.api_secret)||""}`)}`,"Content-Type":"application/json"}),extraFields:[{name:"base_url",label:e("Homepage URL","bit-integrations"),required:!0,placeholder:e("Homepage URL...","bit-integrations")},{name:"api_secret",label:e("Consumer Secret","bit-integrations"),required:!0,placeholder:e("Consumer secret...","bit-integrations")}],encryptKeys:["value","api_secret"]},noteDetails:{note:a}})}export{L as default};
