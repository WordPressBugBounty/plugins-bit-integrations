var m=Object.defineProperty,k=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var _=(e,s,t)=>s in e?m(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,i=(e,s)=>{for(var t in s||(s={}))V.call(s,t)&&_(e,t,s[t]);if(o)for(var t of o(s))p.call(s,t)&&_(e,t,s[t]);return e},c=(e,s)=>k(e,b(s));import{_ as n,c as h,d as f}from"./bi.63.0.js";import{u as y}from"./bi.269.440.js";const P=(e,s,t)=>{t(a=>y(a,u=>{const{name:r}=e.target;e.target.value!==""?u[r]=e.target.value:delete u[r]}))},q=e=>{const s=e==null?void 0:e.VboutFields.filter(t=>t.required===!0);return s.length>0?s.map(t=>({formField:"",VboutFormField:t.key})):[{formField:"",VboutFormField:""}]},g=e=>!((e!=null&&e.field_map?e.field_map.filter(t=>!t.formField||!t.VboutFormField||!t.formField==="custom"&&!t.customValue):[]).length>0),M=(e,s,t,a,u,r)=>{if(!e.auth_token){t({auth_token:e.auth_token?"":n("Api Key can't be empty","bit-integrations")});return}t({}),r(c(i({},u),{auth:!0}));const l={auth_token:e.auth_token};h(l,"vbout_handle_authorize").then(d=>{if(d&&d.success){const F=i({},e);s(F),a(!0),r(c(i({},u),{auth:!1})),f.success(n("Authorized Successfully","bit-integrations"));return}r(c(i({},u),{auth:!1})),f.error(n("Authorized failed","bit-integrations"))})},x=(e,s,t,a)=>{a(c(i({},t),{field:!0}));const u={auth_token:e.auth_token,list_id:e.list_id};h(u,"vbout_refresh_fields").then(r=>{if(r&&r.success){const l=i({},e);r.data&&(l.VboutFields=r.data),l.field_map=q(l),s(l),a(c(i({},t),{field:!1})),f.success(n("Fields refresh successfully","bit-integrations"));return}a(c(i({},t),{field:!1})),f.error(n("Fields refresh failed","bit-integrations"))})},I=(e,s,t,a)=>{a(c(i({},t),{list:!0}));const u={auth_token:e.auth_token};h(u,"vbout_fetch_all_lists").then(r=>{if(r&&r.success){const l=i({},e);r.data&&(l.default||(l.default={}),l.default.lists=r.data),s(l),a(c(i({},t),{list:!1})),f.success(n("List refresh successfully","bit-integrations"));return}a(c(i({},t),{list:!1})),f.error(n("List refresh failed","bit-integrations"))})};export{x as V,M as a,g as c,I as g,P as h};
