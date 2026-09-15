var A=Object.defineProperty,P=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var c=(t,i,o)=>i in t?A(t,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[i]=o,u=(t,i)=>{for(var o in i||(i={}))T.call(i,o)&&c(t,o,i[o]);if(m)for(var o of m(i))_.call(i,o)&&c(t,o,i[o]);return t},h=(t,i)=>P(t,y(i));import{_ as r,j as x}from"./main.2.10.5.js";import{b}from"./react-router.BiLdldC0.js";import{A as $}from"./AddNewConnection.ZSJpjktE.js";import{A as f}from"./Authorization.OdAOjA5a.js";import{a as E}from"./ZagoMailCommonFunc.CjeLUV3Y.js";import{t as L}from"./TutorialLink.CwM5Erkp.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.YC94EGca.js";import"./Note.B-17Qwzj.js";import"./SnackMsg.BDVvEnJN.js";import"./ConfirmModal.DTyqLZln.js";import"./oauthHelper.DUT-DMeg.js";import"./BackIcn.fWOyMwfe.js";import"./Integrations.-a67RnHI.js";import"./Table.mVtsKoRn.js";import"./index.Cj5suhk1.js";import"./InfoIcn.m5Eff8OI.js";function N({zagoMailConf:t,setZagoMailConf:i,step:o,setstep:l,setSnackbar:p,isInfo:d}){var n;const a=b.useCallback(e=>{const s=e?h(u({},t),{connection_id:e}):t;E(s,i,()=>{},p)},[p,i,t]),k=b.useCallback(e=>{var s;e===2&&!((s=t==null?void 0:t.default)!=null&&s.zagoMailLists)&&a(),l(e)},[a,l,t]),g=`
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
