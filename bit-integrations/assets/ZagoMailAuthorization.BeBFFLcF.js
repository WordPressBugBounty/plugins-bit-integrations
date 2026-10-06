var A=Object.defineProperty,P=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var c=(t,i,o)=>i in t?A(t,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[i]=o,u=(t,i)=>{for(var o in i||(i={}))T.call(i,o)&&c(t,o,i[o]);if(m)for(var o of m(i))_.call(i,o)&&c(t,o,i[o]);return t},h=(t,i)=>P(t,y(i));import{_ as r,j as x}from"./main.2.10.7.js";import{b}from"./react-router.BiLdldC0.js";import{A as $}from"./AddNewConnection.CG4L4NdA.js";import{A as f}from"./Authorization.CYT2dGty.js";import{a as E}from"./ZagoMailCommonFunc.b96xGjIU.js";import{t as L}from"./TutorialLink.CEkST12p.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.CsXMJc5B.js";import"./Note.BTCbylpB.js";import"./SnackMsg.BiNmgEkT.js";import"./ConfirmModal.6ebrzmWw.js";import"./oauthHelper.Cyy1HwK5.js";import"./BackIcn.DJrGb9_v.js";import"./Integrations.CXYgDy-L.js";import"./Table.CT6ZfeMu.js";import"./index.Cj5suhk1.js";import"./InfoIcn.Bdx9y8ki.js";function N({zagoMailConf:t,setZagoMailConf:i,step:o,setstep:l,setSnackbar:p,isInfo:d}){var n;const a=b.useCallback(e=>{const s=e?h(u({},t),{connection_id:e}):t;E(s,i,()=>{},p)},[p,i,t]),k=b.useCallback(e=>{var s;e===2&&!((s=t==null?void 0:t.default)!=null&&s.zagoMailLists)&&a(),l(e)},[a,l,t]),g=`
      <h4>${r("Get API Public Key","bit-integrations")}</h4>
      <ul>
          <li>${r("First go to your ZagoMail dashboard.","bit-integrations")}</li>
          <li>${r("Click on the top top right corner","bit-integrations")}</li>
          <li>${r("Then click on API","bit-integrations")}</li>
      </ul>
      <small class="d-blk mt-3">
        ${r("To get API Public Key, please visit","bit-integrations")}
        <a
          class="btcd-link"
          href="https://app.zagomail.com/user/api-keys/index"
          target="_blank"
          rel="noreferrer">
          ${r(" ZagoMail API Token","bit-integrations")}
        </a>
      </small>`;return x.jsx(f,{config:t,setConfig:i,step:o,setStep:k,isInfo:d,tutorialTitle:"Zago Mail",tutorialLinks:((n=L)==null?void 0:n.zagoMail)||{},authDetails:{authType:$.API_KEY,apiEndpoint:"https://api.zagomail.com/lists/all-lists",method:"POST",payload:{publicKey:"{api_key}"}},noteDetails:{note:g},onConnectionSelected:a})}export{N as default};
