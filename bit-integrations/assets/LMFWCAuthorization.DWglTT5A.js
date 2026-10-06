import{_ as e,j as p}from"./main.2.10.7.js";import{A as a}from"./AddNewConnection.CG4L4NdA.js";import{t as c}from"./TutorialLink.CEkST12p.js";import{A as b}from"./Authorization.CYT2dGty.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.CsXMJc5B.js";import"./Note.BTCbylpB.js";import"./SnackMsg.BiNmgEkT.js";import"./ConfirmModal.6ebrzmWw.js";import"./oauthHelper.Cyy1HwK5.js";import"./BackIcn.DJrGb9_v.js";import"./Integrations.CXYgDy-L.js";import"./Table.CT6ZfeMu.js";import"./index.Cj5suhk1.js";import"./InfoIcn.Bdx9y8ki.js";function j({licenseManagerConf:o,setLicenseManagerConf:r,step:n,setStep:s,isInfo:l}){var t;const m=`
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
