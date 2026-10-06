var P=Object.defineProperty,T=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var g=(t,i,o)=>i in t?P(t,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[i]=o,d=(t,i)=>{for(var o in i||(i={}))k.call(i,o)&&g(t,o,i[o]);if(u)for(var o of u(i))F.call(i,o)&&g(t,o,i[o]);return t},h=(t,i)=>T(t,_(i));import{_ as e,j as x}from"./main.2.10.7.js";import{b}from"./react-router.BiLdldC0.js";import{A as D}from"./AddNewConnection.CG4L4NdA.js";import{g as S}from"./FreshdeskCommonFunc.CUUjiOKy.js";import{t as E}from"./TutorialLink.CEkST12p.js";import{A as I}from"./Authorization.CYT2dGty.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.CsXMJc5B.js";import"./Note.BTCbylpB.js";import"./SnackMsg.BiNmgEkT.js";import"./ConfirmModal.6ebrzmWw.js";import"./oauthHelper.Cyy1HwK5.js";import"./BackIcn.DJrGb9_v.js";import"./Integrations.CXYgDy-L.js";import"./Table.CT6ZfeMu.js";import"./index.Cj5suhk1.js";import"./InfoIcn.Bdx9y8ki.js";function M({freshdeskConf:t,setFreshdeskConf:i,step:o,setstep:p,setIsLoading:l,setSnackbar:s,isInfo:A}){var m,c;const r=b.useCallback(a=>{const n=a?h(d({},t),{connection_id:a}):t;S(n,i,l,s)},[t,i,l,s]),y=b.useCallback(a=>{var n;a===2&&!((n=t==null?void 0:t.ticketFields)!=null&&n.length)&&r(),p(a)},[(m=t==null?void 0:t.ticketFields)==null?void 0:m.length,r,p]),$=`
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
