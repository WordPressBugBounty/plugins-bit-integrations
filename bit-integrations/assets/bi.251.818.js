var _=Object.defineProperty;var c=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var i=(e,r,t)=>r in e?_(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,s=(e,r)=>{for(var t in r||(r={}))g.call(r,t)&&i(e,t,r[t]);if(c)for(var t of c(r))y.call(r,t)&&i(e,t,r[t]);return e};import{_ as u,c as k,d as l}from"./bi.456.0.js";const w=(e,r,t)=>{const n=s({},r),{name:a}=e.target;e.target.value!==""?n[a]=e.target.value:delete n[a],t(s({},n))},z=(e,r,t,n,a,b)=>{if(!e.api_key){t({api_key:e.api_key?"":u("Api Key can't be empty","bit-integrations")});return}t({}),a(!0);const F=window.location.origin,h={api_key:e.api_key,auth_url:F};k(h,"sureCart_authorization").then(o=>{if(o&&o.success){const d=s({},e);r(d),n(!0),a(!1),l.success(u("Authorized Successfully","bit-integrations"));return}l.error(u("Authorization Failed","bit-integrations")),a(!1)})},A=e=>!((e?e==null?void 0:e.filter(t=>!t.formField||!t.SureCartFormField):[]).length>0),q=e=>{const r=e==null?void 0:e.customerFields.filter(t=>t.required===!0);return r.length>0?r.map(t=>({formField:"",SureCartFormField:t.key})):[{formField:"",SureCartFormField:""}]};export{z as a,A as c,q as g,w as h};
