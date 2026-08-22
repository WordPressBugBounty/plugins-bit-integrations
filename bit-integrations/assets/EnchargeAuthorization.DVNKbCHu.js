var k=Object.defineProperty,_=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var u=(t,i,o)=>i in t?k(t,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[i]=o,c=(t,i)=>{for(var o in i||(i={}))x.call(i,o)&&u(t,o,i[o]);if(n)for(var o of n(i))P.call(i,o)&&u(t,o,i[o]);return t},d=(t,i)=>_(t,b(i));import{_ as E,j as S}from"./main.2.10.3.js";import{b as f}from"./react-router.DMwpH23k.js";import{A as j}from"./AddNewConnection.BCtQJFwj.js";import{A as g}from"./Authorization.hFl5SniY.js";import{r as y}from"./EnchargeCommonFunc.B04r1jKP.js";import{t as z}from"./TutorialLink.Cx9cwS8W.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.BRDXEvT3.js";import"./Note.CGYSFn76.js";import"./SnackMsg.CziG1LAl.js";import"./ConfirmModal.Bv5a6udM.js";import"./oauthHelper.B8KZ6m8n.js";import"./BackIcn.BNm9Wd7j.js";import"./Integrations.DwaOhg5C.js";import"./Table.CAuj7UWX.js";import"./index.DpWdl9V1.js";import"./InfoIcn.R6rudVDk.js";function N({enchargeConf:t,setEnchargeConf:i,step:o,setstep:s,setSnackbar:p,isInfo:h,setIsLoading:m}){var l;const e=f.useCallback(r=>{const a=r?d(c({},t),{connection_id:r}):t;y(a,i,m,p)},[t,i,m,p]),A=f.useCallback(r=>{var a;r===2&&!((a=t==null?void 0:t.default)!=null&&a.fields)&&e(),s(r)},[t,e,s]),T=`
      <small>
        ${E("To get API, please visit","bit-integrations")}
        <a
          class="btcd-link"
          href="https://app.encharge.io/account/info"
          target="_blank"
          rel="noreferrer">
          ${E(" Encharge API Console","bit-integrations")}
        </a>
      </small>`;return S.jsx(g,{config:t,setConfig:i,step:o,setStep:A,isInfo:h,tutorialTitle:"Encharge",tutorialLinks:((l=z)==null?void 0:l.encharge)||{},authDetails:{authType:j.API_KEY,apiEndpoint:"https://api.encharge.io/v1/accounts/info",method:"GET",key:"X-Encharge-Token",addTo:"header"},noteDetails:{note:T},onConnectionSelected:e})}export{N as default};
