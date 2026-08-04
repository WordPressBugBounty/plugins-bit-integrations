var A=Object.defineProperty,k=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var p=(t,i,e)=>i in t?A(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,d=(t,i)=>{for(var e in i||(i={}))_.call(i,e)&&p(t,e,i[e]);if(m)for(var e of m(i))S.call(i,e)&&p(t,e,i[e]);return t},g=(t,i)=>k(t,T(i));import{_ as a,j as x}from"./main.2.10.2.js";import{b as h}from"./react-router.DMwpH23k.js";import{A as D}from"./AddNewConnection.CKMdUmWP.js";import{A as E}from"./Authorization.7o7nffd8.js";import{g as I,a as P}from"./CompanyHubCommonFunc.BKWcb4G1.js";import{t as $}from"./TutorialLink.DGZkpRHA.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.CDDMGjAe.js";import"./Note.BxLRMTfj.js";import"./SnackMsg.jeQopGz7.js";import"./ConfirmModal.DWgUNXwM.js";import"./oauthHelper.-jy64Bib.js";import"./BackIcn.CkJ_lS8M.js";import"./Integrations.BtsIooDn.js";import"./Table.CbfGOCkC.js";import"./index.DpWdl9V1.js";import"./InfoIcn.DK8jtAK0.js";function O({companyHubConf:t,setCompanyHubConf:i,step:e,setStep:s,isInfo:u}){var l;const r=h.useCallback(o=>{const n=o?g(d({},t),{connection_id:o}):t;I(n,i,()=>{}),P(n,i,()=>{})},[t,i]),c=h.useCallback(o=>{o===2&&(!(t!=null&&t.companies)||!(t!=null&&t.contacts))&&r(),s(o)},[t,r,s]),b=`
      <h4>${a("To get Sub Domain & API Key","bit-integrations")}</h4>
      <ul>
          <li>${a("First go to your CompanyHub dashboard.","bit-integrations")}</li>
          <li>${a("Click Settings from the left-bottom corner.","bit-integrations")}</li>
          <li>${a("Then click Integrations and generate API key.","bit-integrations")}</li>
      </ul>
      <small class="d-blk mt-3">
        ${a("To get Sub Domain & API Key, please visit","bit-integrations")}
        <a class="btcd-link" href="https://app.companyhub.com/settings/integration" target="_blank">
          ${a(" CompanyHub Sub Domain & API Key","bit-integrations")}
        </a>
      </small>`;return x.jsx(E,{config:t,setConfig:i,step:e,setStep:c,isInfo:u,tutorialTitle:"CompanyHub",tutorialLinks:((l=$)==null?void 0:l.companyHub)||{},authDetails:{authType:D.API_KEY,apiEndpoint:"https://api.companyhub.com/v1/me",method:"GET",key:"X-BI-Auth",addTo:"header",headers:{Authorization:"{sub_domain} {api_key}","Content-Type":"application/json"},extraFields:[{name:"sub_domain",label:a("Sub Domain","bit-integrations"),required:!0,placeholder:a("your-sub-domain","bit-integrations")}]},noteDetails:{note:b},onConnectionSelected:r})}export{O as default};
