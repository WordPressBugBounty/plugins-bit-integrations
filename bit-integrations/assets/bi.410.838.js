var m=Object.defineProperty,F=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var p=(e,a,t)=>a in e?m(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,i=(e,a)=>{for(var t in a||(a={}))M.call(a,t)&&p(e,t,a[t]);if(f)for(var t of f(a))b.call(a,t)&&p(e,t,a[t]);return e},n=(e,a)=>F(e,k(a));import{_ as l,b as o,c as u}from"./bi.919.15.js";const z=(e,a,t)=>{const r=i({},a),{name:s}=e.target;e.target.value!==""?r[s]=e.target.value:delete r[s],t(i({},r))},R=e=>{let a=[];e.actionName==="organization"?a=e==null?void 0:e.organizationFields:e.actionName==="contact"?a=e==null?void 0:e.contactFields:e.actionName==="lead"&&(a=e==null?void 0:e.leadFields);const t=a==null?void 0:a.filter(r=>r.required===!0);return t.length>0?t.map(r=>({formField:"",clinchPadFormField:r.key})):[{formField:"",clinchPadFormField:""}]},A=e=>!((e!=null&&e.field_map?e.field_map.filter(t=>!t.formField||!t.clinchPadFormField||t.formField==="custom"&&!t.customValue||t.clinchPadFormField==="customFieldKey"&&!t.customFieldKey):[]).length>0),O=(e,a,t,r,s,c)=>{if(!e.api_key){t({api_key:e.api_key?"":l("API Key can't be empty","bit-integrations")});return}t({}),c(n(i({},s),{auth:!0}));const y={api_key:e.api_key};o(y,"clinchPad_authentication").then(_=>{if(_&&_.success){r(!0),c(n(i({},s),{auth:!1})),u.success(l("Authorized Successfully","bit-integrations"));return}c(n(i({},s),{auth:!1})),u.error(l("Authorized failed, Please enter valid API key","bit-integrations"))})},q=(e,a,t)=>{t(n(i({},t),{parentOrganizations:!0}));const r={api_key:e.api_key};o(r,"clinchPad_fetch_all_parentOrganizations").then(s=>{if(s&&s.success){const c=i({},e);s.data&&(c.parentOrganizations=s.data),a(c),t(n(i({},t),{parentOrganizations:!1})),u.success(l("ParentOrganizations fetched successfully","bit-integrations"));return}t(n(i({},t),{parentOrganizations:!1})),u.error(l("ParentOrganizations fetching failed","bit-integrations"))})},N=(e,a,t)=>{t(n(i({},t),{CRMPipelines:!0}));const r={api_key:e.api_key,action_name:e.actionName};o(r,"clinchPad_fetch_all_CRMPipelines").then(s=>{if(s&&s.success){const c=i({},e);s.data&&(c.CRMPipelines=s.data),a(c),t(n(i({},t),{CRMPipelines:!1})),u.success(l("Pipelines fetched successfully","bit-integrations"));return}t(n(i({},t),{CRMPipelines:!1})),u.error(l("Pipelines fetching failed","bit-integrations"))})},P=(e,a,t)=>{t(n(i({},t),{CRMContacts:!0}));const r={api_key:e.api_key,action_name:e.actionName};o(r,"clinchPad_fetch_all_CRMContacts").then(s=>{if(s&&s.success){const c=i({},e);s.data&&(c.CRMContacts=s.data),a(c),t(n(i({},t),{CRMContacts:!1})),u.success(l("Contacts fetched successfully","bit-integrations"));return}t(n(i({},t),{CRMContacts:!1})),u.error(l("Contacts fetching failed","bit-integrations"))})};export{P as a,R as b,A as c,N as d,O as e,q as g,z as h};
