var T=Object.defineProperty,_=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var c=(t,o,i)=>o in t?T(t,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[o]=i,n=(t,o)=>{for(var i in o||(o={}))x.call(o,i)&&c(t,i,o[i]);if(l)for(var i of l(o))E.call(o,i)&&c(t,i,o[i]);return t},b=(t,o)=>_(t,g(o));import{_ as h,j as f}from"./main.2.10.9.js";import{b as u}from"./react-router.BiLdldC0.js";import{A as L}from"./AddNewConnection.CW5LtuVJ.js";import{A as S}from"./Authorization.CAE17sQm.js";import{a as v}from"./SendinBlueCommonFunc.BXDB0Ucd.js";import{t as P}from"./TutorialLink.FqlDNemP.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.2qKQDb3H.js";import"./Note.D09Bk593.js";import"./SnackMsg.Bv9CCMgQ.js";import"./ConfirmModal.LxmhgP6x.js";import"./oauthHelper.Ddb7PxK6.js";import"./BackIcn.Ctoh3-IH.js";import"./Integrations.2tzEmbEQ.js";import"./Table.DRq56MJy.js";import"./index.Cj5suhk1.js";import"./InfoIcn.gBRzPobO.js";function O({sendinBlueConf:t,setSendinBlueConf:o,step:i,setstep:e,setSnackbar:m,isInfo:d}){var p;const s=u.useCallback(r=>{const a=r?b(n({},t),{connection_id:r}):t;v(a,o,()=>{},m)},[t,o,m]),k=u.useCallback(r=>{var a;r===2&&!((a=t==null?void 0:t.default)!=null&&a.sblueList)&&s(),e(r)},[s,t,e]),A=`
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
