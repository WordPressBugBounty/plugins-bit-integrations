var _=Object.defineProperty,b=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var m=(e,s,t)=>s in e?_(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,a=(e,s)=>{for(var t in s||(s={}))K.call(s,t)&&m(e,t,s[t]);if(F)for(var t of F(s))q.call(s,t)&&m(e,t,s[t]);return e},c=(e,s)=>b(e,p(s));import{_ as f,b as d,c as n}from"./bi.541.15.js";const w=(e,s,t)=>{const u=a({},s),{name:i}=e.target;e.target.value!==""?u[i]=e.target.value:delete u[i],t(a({},u))},P=e=>{const s=e==null?void 0:e.staticFields.filter(t=>t.required===!0);return s.length>0?s.map(t=>({formField:"",sendGridFormField:t.key})):[{formField:"",sendGridFormField:""}]},g=e=>!((e!=null&&e.field_map?e.field_map.filter(t=>!t.formField||!t.sendGridFormField||!t.formField==="custom"&&!t.customValue):[]).length>0),v=(e,s,t,u,i,r,h)=>{if(!e.apiKey){t({apiKey:e.apiKey?"":f("API key can't be empty","bit-integrations")});return}t({}),h==="authentication"&&r(c(a({},i),{auth:!0})),h==="refreshLists"&&r(c(a({},i),{customFields:!0}));const y={apiKey:e.apiKey};d(y,"sendGrid_authentication").then(l=>{if(l&&l.success){const o=a({},e);u(!0),h==="authentication"?(l.data&&(o.customFields=l.data),s(o),r(c(a({},i),{auth:!1})),n.success(f("Authorized Successfully","bit-integrations"))):h==="refreshLists"&&(l.data&&(o.customFields=l.data,s(o)),r(c(a({},i),{customFields:!1})),n.success(f("Custom fields fetched successfully","bit-integrations")));return}r(c(a({},i),{auth:!1})),n.error(f("Authorization Failed","bit-integrations"))})},z=(e,s,t)=>{t(c(a({},t),{lists:!0}));const u={apiKey:e.apiKey};d(u,"sendGrid_fetch_all_lists").then(i=>{if(i&&i.success){const r=a({},e);i.data&&(r.lists=i.data),s(r),t(c(a({},t),{lists:!1})),n.success(f("Lists fetched successfully.","bit-integrations"));return}t(c(a({},t),{lists:!1})),n.error(f("Lists fetching failed","bit-integrations"))})};export{P as a,g as c,z as g,w as h,v as s};
