var k=Object.defineProperty,_=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var u=(t,i,o)=>i in t?k(t,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[i]=o,c=(t,i)=>{for(var o in i||(i={}))x.call(i,o)&&u(t,o,i[o]);if(n)for(var o of n(i))P.call(i,o)&&u(t,o,i[o]);return t},d=(t,i)=>_(t,b(i));import{_ as E,j as S}from"./main.2.10.0.js";import{b as f}from"./react-router.DMwpH23k.js";import{A as j}from"./AddNewConnection.DCTHIFxq.js";import{A as g}from"./Authorization.BmZ1lyOd.js";import{r as y}from"./EnchargeCommonFunc.B4D37DHT.js";import{t as z}from"./TutorialLink.BAPo3x0A.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.QyWx8Unk.js";import"./Note.Dyd4oGF7.js";import"./SnackMsg.dVUsvxBp.js";import"./ConfirmModal.BVwU3lxl.js";import"./oauthHelper.Bbf-wdGf.js";import"./BackIcn.B7f1heI_.js";function w({enchargeConf:t,setEnchargeConf:i,step:o,setstep:s,setSnackbar:l,isInfo:h,setIsLoading:p}){var m;const e=f.useCallback(r=>{const a=r?d(c({},t),{connection_id:r}):t;y(a,i,p,l)},[t,i,p,l]),A=f.useCallback(r=>{var a;r===2&&!((a=t==null?void 0:t.default)!=null&&a.fields)&&e(),s(r)},[t,e,s]),T=`
      <small>
        ${E("To get API, please visit","bit-integrations")}
        <a
          class="btcd-link"
          href="https://app.encharge.io/account/info"
          target="_blank"
          rel="noreferrer">
          ${E(" Encharge API Console","bit-integrations")}
        </a>
      </small>`;return S.jsx(g,{config:t,setConfig:i,step:o,setStep:A,isInfo:h,tutorialTitle:"Encharge",tutorialLinks:((m=z)==null?void 0:m.encharge)||{},authDetails:{authType:j.API_KEY,apiEndpoint:"https://api.encharge.io/v1/accounts/info",method:"GET",key:"X-Encharge-Token",addTo:"header"},noteDetails:{note:T},onConnectionSelected:e})}export{w as default};
