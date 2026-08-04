var T=Object.defineProperty,_=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var c=(t,o,i)=>o in t?T(t,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[o]=i,n=(t,o)=>{for(var i in o||(o={}))x.call(o,i)&&c(t,i,o[i]);if(l)for(var i of l(o))E.call(o,i)&&c(t,i,o[i]);return t},b=(t,o)=>_(t,g(o));import{_ as h,j as f}from"./main.2.10.2.js";import{b as u}from"./react-router.DMwpH23k.js";import{A as L}from"./AddNewConnection.CKMdUmWP.js";import{A as S}from"./Authorization.7o7nffd8.js";import{a as v}from"./SendinBlueCommonFunc.DWsuyZ0q.js";import{t as P}from"./TutorialLink.DGZkpRHA.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.CDDMGjAe.js";import"./Note.BxLRMTfj.js";import"./SnackMsg.jeQopGz7.js";import"./ConfirmModal.DWgUNXwM.js";import"./oauthHelper.-jy64Bib.js";import"./BackIcn.CkJ_lS8M.js";import"./Integrations.BtsIooDn.js";import"./Table.CbfGOCkC.js";import"./index.DpWdl9V1.js";import"./InfoIcn.DK8jtAK0.js";function O({sendinBlueConf:t,setSendinBlueConf:o,step:i,setstep:e,setSnackbar:m,isInfo:d}){var p;const s=u.useCallback(r=>{const a=r?b(n({},t),{connection_id:r}):t;v(a,o,()=>{},m)},[t,o,m]),k=u.useCallback(r=>{var a;r===2&&!((a=t==null?void 0:t.default)!=null&&a.sblueList)&&s(),e(r)},[s,t,e]),A=`
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
