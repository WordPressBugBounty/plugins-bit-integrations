var T=Object.defineProperty,_=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var c=(t,o,a)=>o in t?T(t,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[o]=a,n=(t,o)=>{for(var a in o||(o={}))x.call(o,a)&&c(t,a,o[a]);if(l)for(var a of l(o))E.call(o,a)&&c(t,a,o[a]);return t},b=(t,o)=>_(t,g(o));import{_ as h,j as f}from"./main.2.10.0.js";import{b as u}from"./react-router.DMwpH23k.js";import{A as L}from"./AddNewConnection.DCTHIFxq.js";import{A as S}from"./Authorization.BmZ1lyOd.js";import{a as v}from"./SendinBlueCommonFunc.CmKQyEc_.js";import{t as P}from"./TutorialLink.BAPo3x0A.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.QyWx8Unk.js";import"./Note.Dyd4oGF7.js";import"./SnackMsg.dVUsvxBp.js";import"./ConfirmModal.BVwU3lxl.js";import"./oauthHelper.Bbf-wdGf.js";import"./BackIcn.B7f1heI_.js";function F({sendinBlueConf:t,setSendinBlueConf:o,step:a,setstep:e,setSnackbar:m,isInfo:d}){var p;const s=u.useCallback(i=>{const r=i?b(n({},t),{connection_id:i}):t;v(r,o,()=>{},m)},[t,o,m]),k=u.useCallback(i=>{var r;i===2&&!((r=t==null?void 0:t.default)!=null&&r.sblueList)&&s(),e(i)},[s,t,e]),A=`
      <small class="d-blk mt-5">
        ${h("To get API, please visit","bit-integrations")}
        <a
          class="btcd-link"
          href="https://account.sendinblue.com/advanced/api"
          target="_blank"
          rel="noreferrer">
          ${h(" Brevo(Sendinblue) API Console","bit-integrations")}
        </a>
      </small>`;return f.jsx(S,{config:t,setConfig:o,step:a,setStep:k,isInfo:d,tutorialTitle:"Brevo (Sendinblue)",tutorialLinks:((p=P)==null?void 0:p.sendinBlue)||{},authDetails:{authType:L.API_KEY,apiEndpoint:"https://api.sendinblue.com/v3/account",method:"GET",key:"api-key",addTo:"header"},noteDetails:{note:A},onConnectionSelected:s})}export{F as default};
