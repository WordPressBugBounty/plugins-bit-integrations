var m=Object.defineProperty,b=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var _=(e,s,t)=>s in e?m(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,a=(e,s)=>{for(var t in s||(s={}))V.call(s,t)&&_(e,t,s[t]);if(o)for(var t of o(s))y.call(s,t)&&_(e,t,s[t]);return e},c=(e,s)=>b(e,k(s));import{_ as n,b as f,c as h,A}from"./bi.433.0.js";const w=(e,s,t)=>{t(i=>A(i,u=>{const{name:r}=e.target;e.target.value!==""?u[r]=e.target.value:delete u[r]}))},p=e=>{const s=e==null?void 0:e.VboutFields.filter(t=>t.required===!0);return s.length>0?s.map(t=>({formField:"",VboutFormField:t.key})):[{formField:"",VboutFormField:""}]},P=e=>!((e!=null&&e.field_map?e.field_map.filter(t=>!t.formField||!t.VboutFormField||!t.formField==="custom"&&!t.customValue):[]).length>0),g=(e,s,t,i,u,r)=>{if(!e.auth_token){t({auth_token:e.auth_token?"":n("Api Key can't be empty","bit-integrations")});return}t({}),r(c(a({},u),{auth:!0}));const l={auth_token:e.auth_token};f(l,"vbout_handle_authorize").then(d=>{if(d&&d.success){const F=a({},e);s(F),i(!0),r(c(a({},u),{auth:!1})),h.success(n("Authorized Successfully","bit-integrations"));return}r(c(a({},u),{auth:!1})),h.error(n("Authorized failed","bit-integrations"))})},M=(e,s,t,i)=>{i(c(a({},t),{field:!0}));const u={auth_token:e.auth_token,list_id:e.list_id};f(u,"vbout_refresh_fields").then(r=>{if(r&&r.success){const l=a({},e);r.data&&(l.VboutFields=r.data),l.field_map=p(l),s(l),i(c(a({},t),{field:!1})),h.success(n("Fields refresh successfully","bit-integrations"));return}i(c(a({},t),{field:!1})),h.error(n("Fields refresh failed","bit-integrations"))})},x=(e,s,t,i)=>{i(c(a({},t),{list:!0}));const u={auth_token:e.auth_token};f(u,"vbout_fetch_all_lists").then(r=>{if(r&&r.success){const l=a({},e);r.data&&(l.default||(l.default={}),l.default.lists=r.data),s(l),i(c(a({},t),{list:!1})),h.success(n("List refresh successfully","bit-integrations"));return}i(c(a({},t),{list:!1})),h.error(n("List refresh failed","bit-integrations"))})};export{M as V,g as a,P as c,x as g,w as h};
