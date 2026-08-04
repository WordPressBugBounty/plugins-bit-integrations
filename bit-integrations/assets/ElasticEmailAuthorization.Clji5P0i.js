var b=Object.defineProperty,k=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var n=(t,o,i)=>o in t?b(t,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[o]=i,l=(t,o)=>{for(var i in o||(o={}))_.call(o,i)&&n(t,i,o[i]);if(m)for(var i of m(o))x.call(o,i)&&n(t,i,o[i]);return t},c=(t,o)=>k(t,T(o));import{_ as u,j as S}from"./main.2.10.2.js";import{b as d}from"./react-router.DMwpH23k.js";import{A as f}from"./AddNewConnection.CKMdUmWP.js";import{A as L}from"./Authorization.7o7nffd8.js";import{a as P}from"./ElasticEmailCommonFunc.pOWu-rDN.js";import{t as j}from"./TutorialLink.DGZkpRHA.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.CDDMGjAe.js";import"./Note.BxLRMTfj.js";import"./SnackMsg.jeQopGz7.js";import"./ConfirmModal.DWgUNXwM.js";import"./oauthHelper.-jy64Bib.js";import"./BackIcn.CkJ_lS8M.js";import"./Integrations.BtsIooDn.js";import"./Table.CbfGOCkC.js";import"./index.DpWdl9V1.js";import"./InfoIcn.DK8jtAK0.js";function J({elasticEmailConf:t,setElasticEmailConf:o,step:i,setstep:e,isInfo:h}){var p;const a=d.useCallback(r=>{const s=r?c(l({},t),{connection_id:r}):t;P(s,o,()=>{})},[t,o]),A=d.useCallback(r=>{var s;r===2&&!((s=t==null?void 0:t.default)!=null&&s.lists)&&a(),e(r)},[t,a,e]),g=`
      <small class="d-blk mt-5">
        ${u("To get API, please visit","bit-integrations")}
        <a
          class="btcd-link"
          href="https://elasticemail.com/account#/settings/new/manage-api"
          target="_blank"
          rel="noreferrer">
          ${u(" Elastic Email API Console","bit-integrations")}
        </a>
      </small>`;return S.jsx(L,{config:t,setConfig:o,step:i,setStep:A,isInfo:h,tutorialTitle:"Elastic Email",tutorialLinks:((p=j)==null?void 0:p.elasticEmail)||{},authDetails:{authType:f.API_KEY,apiEndpoint:"https://api.elasticemail.com/v4/lists",method:"GET",key:"X-ElasticEmail-ApiKey",addTo:"header"},noteDetails:{note:g},onConnectionSelected:a})}export{J as default};
