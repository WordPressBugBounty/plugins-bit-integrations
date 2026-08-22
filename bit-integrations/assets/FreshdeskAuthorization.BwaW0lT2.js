var P=Object.defineProperty,T=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var g=(t,i,o)=>i in t?P(t,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[i]=o,d=(t,i)=>{for(var o in i||(i={}))k.call(i,o)&&g(t,o,i[o]);if(u)for(var o of u(i))F.call(i,o)&&g(t,o,i[o]);return t},h=(t,i)=>T(t,_(i));import{_ as e,j as x}from"./main.2.10.3.js";import{b}from"./react-router.DMwpH23k.js";import{A as D}from"./AddNewConnection.BCtQJFwj.js";import{g as S}from"./FreshdeskCommonFunc.DNYAimnY.js";import{t as E}from"./TutorialLink.Cx9cwS8W.js";import{A as I}from"./Authorization.hFl5SniY.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.BRDXEvT3.js";import"./Note.CGYSFn76.js";import"./SnackMsg.CziG1LAl.js";import"./ConfirmModal.Bv5a6udM.js";import"./oauthHelper.B8KZ6m8n.js";import"./BackIcn.BNm9Wd7j.js";import"./Integrations.DwaOhg5C.js";import"./Table.CAuj7UWX.js";import"./index.DpWdl9V1.js";import"./InfoIcn.R6rudVDk.js";function M({freshdeskConf:t,setFreshdeskConf:i,step:o,setstep:p,setIsLoading:l,setSnackbar:s,isInfo:A}){var m,c;const r=b.useCallback(a=>{const n=a?h(d({},t),{connection_id:a}):t;S(n,i,l,s)},[t,i,l,s]),y=b.useCallback(a=>{var n;a===2&&!((n=t==null?void 0:t.ticketFields)!=null&&n.length)&&r(),p(a)},[(m=t==null?void 0:t.ticketFields)==null?void 0:m.length,r,p]),$=`
            <h4>${e("Locate Your App Domain","bit-integrations")}</h4>
            <ul>
                <li>${e("Access your Freshdesk account.","bit-integrations")}</li>
                <li>${e("Copy the URL displayed in your browser’s address bar","bit-integrations")} (e.g., https://domain.freshdesk.com/)</li>
                <li>${e("Paste the copied App Domain into the designated “App Domain” field within the integrations you’re setting up.","bit-integrations")}</li>
            </ul>
            <h4>${e("Retrieve Your App API Key","bit-integrations")}</h4>
            <ul>
                <li>${e("Within your Freshdesk account, click on your profile icon, situated in the top right corner.","bit-integrations")}</li>
                <li>${e("Select “Profile Settings” from the options that appear.","bit-integrations")}</li>
                <li>${e("Locate your App API key, prominently displayed on the top right side of the Profile Settings page.","bit-integrations")}</li>
                <li>${e("Copy this key.","bit-integrations")}</li>
                <li>${e("Paste the copied App API key into the designated “App API key” field within the integrations you’re configuring.","bit-integrations")}</li>
</ul>
<small className="d-blk mt-2">
            ${e("To get access Token , Please Visit","bit-integrations")} 
            <a
              className="btcd-link"
              href=${`${(t==null?void 0:t.app_domain)||"https://domain.freshdesk.com"}/a/profiles/72009210017/edit`}
              target="_blank"
              rel="noreferrer">
              ${e("FreshDesk Console","bit-integrations")}
            </a>
          </small>
`;return x.jsx(I,{config:t,setConfig:i,step:o,setStep:y,isInfo:A,tutorialTitle:"Freshdesk",tutorialLinks:((c=E)==null?void 0:c.freshdesk)||{},authDetails:{authType:D.API_KEY,apiEndpoint:"{app_domain}/api/v2/tickets",method:"GET",key:"X-BI-Auth",addTo:"header",headers:a=>({Authorization:btoa(`${a.api_key}`),"Content-Type":"application/json"}),extraFields:[{name:"app_domain",label:e("Your App Domain","bit-integrations"),required:!0,placeholder:e("https://domain.freshdesk.com","bit-integrations")}]},noteDetails:{note:$},onConnectionSelected:r})}export{M as default};
