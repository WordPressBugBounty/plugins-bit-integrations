var b=Object.defineProperty,k=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var m=(t,o,i)=>o in t?b(t,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[o]=i,l=(t,o)=>{for(var i in o||(o={}))_.call(o,i)&&m(t,i,o[i]);if(p)for(var i of p(o))x.call(o,i)&&m(t,i,o[i]);return t},c=(t,o)=>k(t,T(o));import{_ as u,j as S}from"./main.2.10.0.js";import{b as d}from"./react-router.DMwpH23k.js";import{A as f}from"./AddNewConnection.DCTHIFxq.js";import{A as L}from"./Authorization.BmZ1lyOd.js";import{a as P}from"./ElasticEmailCommonFunc.BHuk_Ru_.js";import{t as j}from"./TutorialLink.BAPo3x0A.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.QyWx8Unk.js";import"./Note.Dyd4oGF7.js";import"./SnackMsg.dVUsvxBp.js";import"./ConfirmModal.BVwU3lxl.js";import"./oauthHelper.Bbf-wdGf.js";import"./BackIcn.B7f1heI_.js";function X({elasticEmailConf:t,setElasticEmailConf:o,step:i,setstep:e,isInfo:h}){var n;const a=d.useCallback(r=>{const s=r?c(l({},t),{connection_id:r}):t;P(s,o,()=>{})},[t,o]),A=d.useCallback(r=>{var s;r===2&&!((s=t==null?void 0:t.default)!=null&&s.lists)&&a(),e(r)},[t,a,e]),g=`
      <small class="d-blk mt-5">
        ${u("To get API, please visit","bit-integrations")}
        <a
          class="btcd-link"
          href="https://elasticemail.com/account#/settings/new/manage-api"
          target="_blank"
          rel="noreferrer">
          ${u(" Elastic Email API Console","bit-integrations")}
        </a>
      </small>`;return S.jsx(L,{config:t,setConfig:o,step:i,setStep:A,isInfo:h,tutorialTitle:"Elastic Email",tutorialLinks:((n=j)==null?void 0:n.elasticEmail)||{},authDetails:{authType:f.API_KEY,apiEndpoint:"https://api.elasticemail.com/v4/lists",method:"GET",key:"X-ElasticEmail-ApiKey",addTo:"header"},noteDetails:{note:g},onConnectionSelected:a})}export{X as default};
