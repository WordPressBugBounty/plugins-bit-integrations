var p=Object.defineProperty;var o=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var m=(e,t,a)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))h.call(t,a)&&m(e,a,t[a]);if(o)for(var a of o(t))F.call(t,a)&&m(e,a,t[a]);return e};import{_ as n,c as u,d as f}from"./bi.4.0.js";import{x as k}from"./bi.197.434.js";const S=(e,t,a,l,d,r)=>{let i=c({},t);const{name:s}=e.target;switch(e.target.value!==""?i[s]=e.target.value:delete i[s],i[e.target.name]=e.target.value,e.target.name){case"id":i=y(i,l,a,d);break}a(c({},i))},y=(e,t,a,l,d)=>{var i,s;const r=k(e);return r.field_map=[{formField:"",BitFormMapField:""}],(s=(i=r==null?void 0:r.default)==null?void 0:i.fields)!=null&&s[r.id]||b(t,r,a,l),r},B=e=>!((e!=null&&e.address_field?e.address_field.filter(a=>!a.formField&&a.mailChimpAddressField&&a.required):[]).length>0),w=(e,t,a,l,d,r)=>{if(!e.api_key){a({api_key:e.api_key?"":n("Api Key can't be empty","bit-integrations")});return}a({}),d(!0);const i={app_domain:e.domainName,api_key:e.api_key};u(i,"bitForm_authorization_and_fetch_form_list").then(s=>{if(s&&s.success){const _=c({},e);t(_),l(!0),d(!1),f.success(n("Authorization Successful","bit-integrations"));return}d(!1),f.error(n("Authorization Failed","bit-integrations"))})},z=(e,t,a,l)=>{a(!0);const d={app_domain:e.domainName,api_key:e.api_key};u(d,"bitForm_all_form_list").then(r=>{if(r&&r.success){const i=c({},e);i.default||(i.default={}),r.data.forms&&(i.default.forms=r.data.forms),t(c({},i)),a(!1),f.success(n("BitForm list fetched successfully","bit-integrations"));return}a(!1),f.error(n("Failed to fetch BitForm list","bit-integrations"))}).catch(()=>a(!1))},b=(e,t,a,l,d)=>{l(!0);const r={app_domain:t.domainName,api_key:t.api_key,id:t.id};u(r,"bitForm_fetch_single_form_fields").then(i=>{if(i&&i.success){const s=c({},t);s.default||(s.default={}),i.data.fields&&(s.default.fields=i.data.fields),a(c({},s)),l(!1),f.success(n("BitForm fields fetched successfully","bit-integrations"));return}l(!1),f.error(n("Failed to fetch BitForm fields. please try again","bit-integrations"))}).catch(()=>l(!1))},M=e=>!((e.field_map?e.field_map.filter(a=>!a.formField&&!a.BitFormMapField):[]).length>0);export{w as a,M as b,B as c,z as f,S as h};
