import{_ as t,j as n}from"./main.2.10.0.js";import{A as p}from"./AddNewConnection.DCTHIFxq.js";import{t as m}from"./TutorialLink.BAPo3x0A.js";import{A as f}from"./Authorization.BmZ1lyOd.js";import"./react-router.DMwpH23k.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.QyWx8Unk.js";import"./Note.Dyd4oGF7.js";import"./SnackMsg.dVUsvxBp.js";import"./ConfirmModal.BVwU3lxl.js";import"./oauthHelper.Bbf-wdGf.js";import"./BackIcn.B7f1heI_.js";function _({salesflareConf:e,setSalesflareConf:a,step:o,setStep:r,isInfo:s}){var i;const l=`
    <h4>${t("Get API Key","bit-integrations")}</h4>
    <ul>
      <li>${t("Go to your Salesflare user dashboard.","bit-integrations")}</li>
      <li>${t("Open Settings.","bit-integrations")}</li>
      <li>${t("Open API Keys, then generate/copy your key.","bit-integrations")}</li>
    </ul>
    <small class="d-blk mt-3">
      ${t("To get API key, please visit","bit-integrations")}
      <a class="btcd-link" href="https://app.salesflare.com/#/settings/apikeys" target="_blank" rel="noreferrer">
        ${t("Salesflare API Key","bit-integrations")}
      </a>
    </small>`;return n.jsx(f,{config:e,setConfig:a,step:o,setStep:r,isInfo:s,tutorialTitle:"Salesflare",tutorialLinks:((i=m)==null?void 0:i.salesflare)||{},authDetails:{authType:p.BEARER_TOKEN,apiEndpoint:"https://api.salesflare.com/accounts",method:"GET"},noteDetails:{note:l}})}export{_ as default};
