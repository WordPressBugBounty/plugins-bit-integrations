var T=Object.defineProperty,_=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var c=(t,o,i)=>o in t?T(t,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[o]=i,n=(t,o)=>{for(var i in o||(o={}))x.call(o,i)&&c(t,i,o[i]);if(l)for(var i of l(o))E.call(o,i)&&c(t,i,o[i]);return t},b=(t,o)=>_(t,g(o));import{_ as h,j as f}from"./main.2.10.4.js";import{b as u}from"./react-router.BiLdldC0.js";import{A as L}from"./AddNewConnection.B2iullfe.js";import{A as S}from"./Authorization.CEG4BCsq.js";import{a as v}from"./SendinBlueCommonFunc.C9sdOZjC.js";import{t as P}from"./TutorialLink.Jph0Wyx1.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.BAYnB26G.js";import"./Note.BlcqXpwI.js";import"./SnackMsg.CjV2AznC.js";import"./ConfirmModal.LX-d7pCX.js";import"./oauthHelper.DdIjK7ap.js";import"./BackIcn.C0X1dWEt.js";import"./Integrations.cQMbRc1e.js";import"./Table.CDoeMbPk.js";import"./index.Cj5suhk1.js";import"./InfoIcn.Bqjy485j.js";function O({sendinBlueConf:t,setSendinBlueConf:o,step:i,setstep:e,setSnackbar:m,isInfo:d}){var p;const s=u.useCallback(r=>{const a=r?b(n({},t),{connection_id:r}):t;v(a,o,()=>{},m)},[t,o,m]),k=u.useCallback(r=>{var a;r===2&&!((a=t==null?void 0:t.default)!=null&&a.sblueList)&&s(),e(r)},[s,t,e]),A=`
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
