var k=Object.defineProperty,_=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var u=(t,i,o)=>i in t?k(t,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[i]=o,c=(t,i)=>{for(var o in i||(i={}))x.call(i,o)&&u(t,o,i[o]);if(n)for(var o of n(i))P.call(i,o)&&u(t,o,i[o]);return t},d=(t,i)=>_(t,b(i));import{_ as E,j as S}from"./main.2.10.7.js";import{b as f}from"./react-router.BiLdldC0.js";import{A as j}from"./AddNewConnection.CG4L4NdA.js";import{A as g}from"./Authorization.CYT2dGty.js";import{r as y}from"./EnchargeCommonFunc.BXSO6XVX.js";import{t as z}from"./TutorialLink.CEkST12p.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.CsXMJc5B.js";import"./Note.BTCbylpB.js";import"./SnackMsg.BiNmgEkT.js";import"./ConfirmModal.6ebrzmWw.js";import"./oauthHelper.Cyy1HwK5.js";import"./BackIcn.DJrGb9_v.js";import"./Integrations.CXYgDy-L.js";import"./Table.CT6ZfeMu.js";import"./index.Cj5suhk1.js";import"./InfoIcn.Bdx9y8ki.js";function N({enchargeConf:t,setEnchargeConf:i,step:o,setstep:s,setSnackbar:p,isInfo:h,setIsLoading:m}){var l;const e=f.useCallback(r=>{const a=r?d(c({},t),{connection_id:r}):t;y(a,i,m,p)},[t,i,m,p]),A=f.useCallback(r=>{var a;r===2&&!((a=t==null?void 0:t.default)!=null&&a.fields)&&e(),s(r)},[t,e,s]),T=`
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
