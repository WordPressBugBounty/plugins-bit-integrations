var K=Object.defineProperty,_=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var F=(e,s,t)=>s in e?K(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,a=(e,s)=>{for(var t in s||(s={}))p.call(s,t)&&F(e,t,s[t]);if(y)for(var t of y(s))A.call(s,t)&&F(e,t,s[t]);return e},c=(e,s)=>_(e,b(s));import{_ as u,c as m,d as n}from"./bi.430.0.js";import{u as k}from"./bi.554.440.js";const z=(e,s,t)=>{const f=k(s,i=>{const{name:r}=e.target;e.target.value!==""?i[r]=e.target.value:delete i[r]});t(f)},I=e=>{const s=e==null?void 0:e.staticFields.filter(t=>t.required===!0);return s.length>0?s.map(t=>({formField:"",mailjetFormField:t.key})):[{formField:"",mailjetFormField:""}]},M=e=>!((e!=null&&e.field_map?e.field_map.filter(t=>!t.formField||!t.mailjetFormField||!t.formField==="custom"&&!t.customValue):[]).length>0),S=(e,s,t,f,i,r,h)=>{if(!e.apiKey){t({apiKey:e.apiKey?"":u("API key can't be empty","bit-integrations")});return}if(!e.secretKey){t({secretKey:e.secretKey?"":u("Secret key can't be empty","bit-integrations")});return}t({}),h==="authentication"&&r(c(a({},i),{auth:!0})),h==="refreshLists"&&r(c(a({},i),{lists:!0}));const o={apiKey:e.apiKey,secretKey:e.secretKey};m(o,"mailjet_authentication").then(l=>{if(l&&l.success){const d=a({},e);f(!0),h==="authentication"?(l.data&&(d.lists=l.data),r(c(a({},i),{auth:!1})),n.success(u("Authorized Successfully","bit-integrations")),q(d,s,r)):h==="refreshLists"&&(l.data&&(d.lists=l.data,s(d)),r(c(a({},i),{lists:!1})),n.success(u("All lists fectched successfully","bit-integrations")));return}r(c(a({},i),{auth:!1})),n.error(u("Authorized failed","bit-integrations"))})},q=(e,s,t)=>{t(c(a({},t),{customFields:!0}));const f={apiKey:e.apiKey,secretKey:e.secretKey};m(f,"mailjet_fetch_all_custom_fields").then(i=>{if(i&&i.success){const r=a({},e);i.data&&(r.customFields=i.data),s(r),t(c(a({},t),{customFields:!1})),n.success(u("Custom fields fetch successfully","bit-integrations"));return}t(c(a({},t),{customFields:!1})),n.error(u("Custom fields fetch failed","bit-integrations"))})};export{q as a,M as c,I as g,z as h,S as m};
