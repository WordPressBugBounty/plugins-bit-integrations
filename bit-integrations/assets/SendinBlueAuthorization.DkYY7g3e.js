var T=Object.defineProperty,_=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var c=(t,o,i)=>o in t?T(t,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[o]=i,n=(t,o)=>{for(var i in o||(o={}))x.call(o,i)&&c(t,i,o[i]);if(l)for(var i of l(o))E.call(o,i)&&c(t,i,o[i]);return t},b=(t,o)=>_(t,g(o));import{_ as h,j as f}from"./main.2.10.3.js";import{b as u}from"./react-router.DMwpH23k.js";import{A as L}from"./AddNewConnection.BCtQJFwj.js";import{A as S}from"./Authorization.hFl5SniY.js";import{a as v}from"./SendinBlueCommonFunc.3t5wL2B8.js";import{t as P}from"./TutorialLink.Cx9cwS8W.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.BRDXEvT3.js";import"./Note.CGYSFn76.js";import"./SnackMsg.CziG1LAl.js";import"./ConfirmModal.Bv5a6udM.js";import"./oauthHelper.B8KZ6m8n.js";import"./BackIcn.BNm9Wd7j.js";import"./Integrations.DwaOhg5C.js";import"./Table.CAuj7UWX.js";import"./index.DpWdl9V1.js";import"./InfoIcn.R6rudVDk.js";function O({sendinBlueConf:t,setSendinBlueConf:o,step:i,setstep:e,setSnackbar:m,isInfo:d}){var p;const s=u.useCallback(r=>{const a=r?b(n({},t),{connection_id:r}):t;v(a,o,()=>{},m)},[t,o,m]),k=u.useCallback(r=>{var a;r===2&&!((a=t==null?void 0:t.default)!=null&&a.sblueList)&&s(),e(r)},[s,t,e]),A=`
      <small class="d-blk mt-5">
        ${h("To get API, please visit","bit-integrations")}
        <a
          class="btcd-link"
          href="https://account.sendinblue.com/advanced/api"
          target="_blank"
          rel="noreferrer">
          ${h(" Brevo(Sendinblue) API Console","bit-integrations")}
        </a>
      </small>`;return f.jsx(S,{config:t,setConfig:o,step:i,setStep:k,isInfo:d,tutorialTitle:"Brevo (Sendinblue)",tutorialLinks:((p=P)==null?void 0:p.sendinBlue)||{},authDetails:{authType:L.API_KEY,apiEndpoint:"https://api.sendinblue.com/v3/account",method:"GET",key:"api-key",addTo:"header"},noteDetails:{note:A},onConnectionSelected:s})}export{O as default};
