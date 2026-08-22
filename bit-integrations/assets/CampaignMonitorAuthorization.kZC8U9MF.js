var k=Object.defineProperty,y=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var d=(t,i,e)=>i in t?k(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,u=(t,i)=>{for(var e in i||(i={}))I.call(i,e)&&d(t,e,i[e]);if(p)for(var e of p(i))f.call(i,e)&&d(t,e,i[e]);return t},c=(t,i)=>y(t,_(i));import{_ as r,j as x}from"./main.2.10.3.js";import{b as h}from"./react-router.DMwpH23k.js";import{A as T}from"./AddNewConnection.BCtQJFwj.js";import{A as $}from"./Authorization.hFl5SniY.js";import{r as E}from"./CampaignMonitorCommonFunc.tHH4lxXl.js";import{t as P}from"./TutorialLink.Cx9cwS8W.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.BRDXEvT3.js";import"./Note.CGYSFn76.js";import"./SnackMsg.CziG1LAl.js";import"./ConfirmModal.Bv5a6udM.js";import"./oauthHelper.B8KZ6m8n.js";import"./BackIcn.BNm9Wd7j.js";import"./Integrations.DwaOhg5C.js";import"./Table.CAuj7UWX.js";import"./index.DpWdl9V1.js";import"./InfoIcn.R6rudVDk.js";function N({campaignMonitorConf:t,setCampaignMonitorConf:i,step:e,setstep:a,setSnackbar:n,isInfo:b}){var m;const l=h.useCallback(o=>{const s=o?c(u({},t),{connection_id:o}):t;E(s,i,()=>{},n)},[t,i,n]),g=h.useCallback(o=>{var s;o===2&&!((s=t==null?void 0:t.default)!=null&&s.campaignMonitorLists)&&l(),a(o)},[t,l,a]),A=`
      <h4>${r("Get Client Id & Api key","bit-integrations")}</h4>
      <ul>
          <li>${r("First go to your CampaignMonitor dashboard.","bit-integrations")}</li>
          <li>${r("Click on your profile image at the top right.","bit-integrations")}</li>
          <li>${r("Click on Account Settings, then API keys.","bit-integrations")}</li>
          <li>${r("Use your API key in the Username field.","bit-integrations")}</li>
      </ul>
      <small class="d-blk mt-3">
        ${r("To get Client Id & API key, please visit","bit-integrations")}
        <a
          class="btcd-link"
          href="https://login.createsend.com/"
          target="_blank"
          rel="noreferrer">
          ${r(" Campaign Monitor API Key","bit-integrations")}
        </a>
      </small>`;return x.jsx($,{config:t,setConfig:i,step:e,setStep:g,isInfo:b,tutorialTitle:"Campaign Monitor",tutorialLinks:((m=P)==null?void 0:m.campaignMonitor)||{},authDetails:{authType:T.BASIC_AUTH,apiEndpoint:"https://api.createsend.com/api/v3.3/clients/{client_id}.json",method:"GET",allowEmptyPassword:!0,extraFields:[{name:"client_id",label:r("Client ID","bit-integrations"),required:!0,placeholder:r("Client ID...","bit-integrations")}]},noteDetails:{note:A},onConnectionSelected:l})}export{N as default};
