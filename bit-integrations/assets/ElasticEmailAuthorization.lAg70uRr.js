var b=Object.defineProperty,k=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var n=(t,o,i)=>o in t?b(t,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[o]=i,l=(t,o)=>{for(var i in o||(o={}))_.call(o,i)&&n(t,i,o[i]);if(m)for(var i of m(o))x.call(o,i)&&n(t,i,o[i]);return t},c=(t,o)=>k(t,T(o));import{_ as u,j as S}from"./main.2.10.4.js";import{b as d}from"./react-router.BiLdldC0.js";import{A as f}from"./AddNewConnection.B2iullfe.js";import{A as L}from"./Authorization.CEG4BCsq.js";import{a as P}from"./ElasticEmailCommonFunc.CCv-r4vG.js";import{t as j}from"./TutorialLink.Jph0Wyx1.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.BAYnB26G.js";import"./Note.BlcqXpwI.js";import"./SnackMsg.CjV2AznC.js";import"./ConfirmModal.LX-d7pCX.js";import"./oauthHelper.DdIjK7ap.js";import"./BackIcn.C0X1dWEt.js";import"./Integrations.cQMbRc1e.js";import"./Table.CDoeMbPk.js";import"./index.Cj5suhk1.js";import"./InfoIcn.Bqjy485j.js";function J({elasticEmailConf:t,setElasticEmailConf:o,step:i,setstep:e,isInfo:h}){var p;const a=d.useCallback(r=>{const s=r?c(l({},t),{connection_id:r}):t;P(s,o,()=>{})},[t,o]),A=d.useCallback(r=>{var s;r===2&&!((s=t==null?void 0:t.default)!=null&&s.lists)&&a(),e(r)},[t,a,e]),g=`
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
