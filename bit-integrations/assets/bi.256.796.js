var b=Object.defineProperty,k=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var F=(e,s,t)=>s in e?b(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,a=(e,s)=>{for(var t in s||(s={}))q.call(s,t)&&F(e,t,s[t]);if(_)for(var t of _(s))w.call(s,t)&&F(e,t,s[t]);return e},c=(e,s)=>k(e,g(s));import{_ as f,c as d,d as h}from"./bi.671.0.js";const y=(e,s,t,l,r,i,u,m)=>{const n=a({},s),{name:o}=e.target;e.target.value!==""?n[o]=e.target.value:delete n[o],t(a({},n))},P=e=>{const s=e==null?void 0:e.contactsFields.filter(t=>t.required===!0);return s.length>0?s.map(t=>({formField:"",getResponseFormField:t.key})):[{formField:"",getResponseFormField:""}]},v=e=>!((e!=null&&e.field_map?e.field_map.filter(t=>!t.formField||!t.getResponseFormField||!t.formField==="custom"&&!t.customValue):[]).length>0),z=(e,s,t,l,r,i,u)=>{if(!e.auth_token){t({auth_token:e.auth_token?"":f("Api Key can't be empty","bit-integrations")});return}t({}),u==="authentication"&&i(c(a({},r),{auth:!0})),u==="refreshCampaigns"&&i(c(a({},r),{customFields:!0}));const m={auth_token:e.auth_token};d(m,"getresponse_authentication").then(n=>{if(n&&n.success){const o=a({},e);n.data&&(o.campaigns=n.data),s(o),l(!0),u==="authentication"?(i(c(a({},r),{auth:!1})),h.success(f("Authorized Successfully","bit-integrations"))):u==="refreshCampaigns"&&(i(c(a({},r),{customFields:!1})),h.success(f("Campaigns fectched successfully","bit-integrations")));return}i(c(a({},r),{auth:!1})),h.error(f("Authorized failed","bit-integrations"))})},M=(e,s,t)=>{t(c(a({},t),{tags:!0}));const l={auth_token:e.auth_token};d(l,"getresponse_fetch_all_tags").then(r=>{if(r&&r.success){const i=a({},e);r.data&&(i.tags=r.data),s(i),t(c(a({},t),{tags:!1})),h.success(f("Tags fetch successfully","bit-integrations"));return}t(c(a({},t),{tags:!1})),h.error(f("Tags fetch failed","bit-integrations"))})},S=(e,s,t,l)=>{l==="manual"&&t(c(a({},t),{field:!0}));const r={auth_token:e.auth_token};d(r,"getresponse_fetch_custom_fields").then(i=>{if(i&&i.success){const u=a({},e);i.data&&(u.contactsFields=[...u.contactsFields,...i.data]),s(u),l==="manual"&&(t(c(a({},t),{field:!1})),h.success(f("Custom fields fetched successfully","bit-integrations")));return}h.error(f("Custom fields fetch failed","bit-integrations"))})};export{P as a,z as b,v as c,S as f,M as g,y as h};
