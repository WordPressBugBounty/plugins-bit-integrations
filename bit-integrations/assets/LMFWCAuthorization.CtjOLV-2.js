import{_ as e,j as p}from"./main.2.10.2.js";import{A as a}from"./AddNewConnection.CKMdUmWP.js";import{t as c}from"./TutorialLink.DGZkpRHA.js";import{A as b}from"./Authorization.7o7nffd8.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.CDDMGjAe.js";import"./Note.BxLRMTfj.js";import"./SnackMsg.jeQopGz7.js";import"./ConfirmModal.DWgUNXwM.js";import"./oauthHelper.-jy64Bib.js";import"./BackIcn.CkJ_lS8M.js";import"./Integrations.BtsIooDn.js";import"./Table.CbfGOCkC.js";import"./index.DpWdl9V1.js";import"./InfoIcn.DK8jtAK0.js";function j({licenseManagerConf:o,setLicenseManagerConf:r,step:n,setStep:s,isInfo:l}){var t;const m=`
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
            </ul>`;return p.jsx(b,{config:o,setConfig:r,step:n,setStep:s,isInfo:l,tutorialTitle:"License Manager For WooCommerce",tutorialLinks:((t=c)==null?void 0:t.lmfwc)||{},authDetails:{authType:a.API_KEY,apiEndpoint:"{base_url}/wp-json/lmfwc/v2/licenses",method:"GET",key:"X-BI-Auth",addTo:"header",headers:i=>({Authorization:`Basic ${btoa(`${(i==null?void 0:i.api_key)||""}:${(i==null?void 0:i.api_secret)||""}`)}`,"Content-Type":"application/json"}),extraFields:[{name:"base_url",label:e("Homepage URL","bit-integrations"),required:!0,placeholder:e("Homepage URL...","bit-integrations")},{name:"api_secret",label:e("Consumer Secret","bit-integrations"),required:!0,placeholder:e("Consumer secret...","bit-integrations")}],encryptKeys:["value","api_secret"]},noteDetails:{note:m}})}export{j as default};
