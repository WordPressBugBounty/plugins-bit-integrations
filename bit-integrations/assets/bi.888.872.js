var y=Object.defineProperty,p=Object.defineProperties;var o=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var n=(e,i,t)=>i in e?y(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,a=(e,i)=>{for(var t in i||(i={}))b.call(i,t)&&n(e,t,i[t]);if(m)for(var t of m(i))h.call(i,t)&&n(e,t,i[t]);return e},u=(e,i)=>p(e,o(i));import{_ as c,c as k,d as F}from"./bi.223.0.js";const P=(e,i,t)=>{const s=a({},i),{name:r}=e.target;e.target.value!==""?s[r]=e.target.value:delete s[r],t(a({},s))},I=e=>{const i=(e==null?void 0:e.oneHashCRMFields)&&(e==null?void 0:e.oneHashCRMFields.filter(t=>t.required===!0&&t.key!=="owner"&&t.key!=="pipeline"));return i.length>0?i.map(t=>({formField:"",oneHashCRMFormField:t.key})):[{formField:"",oneHashCRMFormField:""}]},K=e=>!((e!=null&&e.field_map?e.field_map.filter(t=>!t.formField||!t.oneHashCRMFormField||t.formField==="custom"&&!t.customValue||t.oneHashCRMFormField==="customFieldKey"&&!t.customFieldKey):[]).length>0),q=(e,i,t,s,r,l)=>{if(!e.api_key||!e.api_secret||!e.domain){t({api_key:e.api_key?"":c("API Key can't be empty","bit-integrations"),api_secret:e.api_secret?"":c("Api Secret can't be empty","bit-integrations"),domain:e.domain?"":c("API URL can't be empty","bit-integrations")});return}t({}),l(u(a({},r),{auth:!0}));const _={api_key:e.api_key,api_secret:e.api_secret,domain:e.domain};k(_,"onehashcrm_authentication").then(d=>{if(d&&d.success){s(!0),l(u(a({},r),{auth:!1})),F.success(c("Authorized Successfully","bit-integrations"));return}l(u(a({},r),{auth:!1})),F.error(c("Authorized failed, Please enter valid API Key & Secret or Access Api URL","bit-integrations"))})};export{K as c,I as g,P as h,q as o};
