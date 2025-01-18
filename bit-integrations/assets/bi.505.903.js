var p=Object.defineProperty,y=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var f=(s,a,e)=>a in s?p(s,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[a]=e,c=(s,a)=>{for(var e in a||(a={}))b.call(a,e)&&f(s,e,a[e]);if(m)for(var e of m(a))d.call(a,e)&&f(s,e,a[e]);return s},r=(s,a)=>y(s,k(a));import{_ as u,c as l,d as o}from"./bi.157.0.js";const A=(s,a,e)=>{const i=c({},a),{name:t}=s.target;s.target.value!==""?i[t]=s.target.value:delete i[t],e(c({},i))},g=s=>{const a=(s==null?void 0:s.nutshellCRMFields)&&(s==null?void 0:s.nutshellCRMFields.filter(e=>e.required===!0&&e.key!=="owner"&&e.key!=="pipeline"));return a.length>0?a.map(e=>({formField:"",nutshellCRMFormField:e.key})):[{formField:"",nutshellCRMFormField:""}]},q=s=>!((s!=null&&s.field_map?s.field_map.filter(e=>!e.formField||!e.nutshellCRMFormField||e.formField==="custom"&&!e.customValue||e.nutshellCRMFormField==="customFieldKey"&&!e.customFieldKey):[]).length>0),w=(s,a,e,i,t,n)=>{if(!s.user_name||!s.api_token){e({user_name:s.user_name?"":u("User Name can't be empty","bit-integrations"),api_token:s.api_token?"":u("API Token can't be empty","bit-integrations")});return}e({}),n(r(c({},t),{auth:!0}));const h={user_name:s.user_name,api_token:s.api_token};l(h,"nutshellcrm_authentication").then(_=>{if(_&&_.success){i(!0),n(r(c({},t),{auth:!1})),o.success(u("Authorized Successfully","bit-integrations"));return}n(r(c({},t),{auth:!1})),o.error(u("Authorized failed, Please enter valid User Name & Api Token","bit-integrations"))})},S=(s,a,e)=>{e(r(c({},e),{companies:!0}));const i={user_name:s.user_name,api_token:s.api_token};l(i,"nutshellcrm_fetch_all_companies").then(t=>{if(t&&t.success){const n=c({},s);t.data&&(n.companies=t.data),a(n),e(r(c({},e),{companies:!1})),o.success(u("Companies fetched successfully","bit-integrations"));return}e(r(c({},e),{companies:!1})),o.error(u("Companies fetching failed","bit-integrations"))})},v=(s,a,e)=>{e(r(c({},e),{contacts:!0}));const i={user_name:s.user_name,api_token:s.api_token};l(i,"nutshellcrm_fetch_all_contacts").then(t=>{if(t&&t.success){const n=c({},s);t.data&&(n.contacts=t.data),a(n),e(r(c({},e),{contacts:!1})),o.success(u("Contacts fetched successfully","bit-integrations"));return}e(r(c({},e),{contacts:!1})),o.error(u("Contacts fetching failed","bit-integrations"))})},z=(s,a,e)=>{e(r(c({},e),{sources:!0}));const i={user_name:s.user_name,api_token:s.api_token};l(i,"nutshellcrm_fetch_all_sources").then(t=>{if(t&&t.success){const n=c({},s);t.data&&(n.sources=t.data),a(n),e(r(c({},e),{sources:!1})),o.success(u("Sources fetched successfully","bit-integrations"));return}e(r(c({},e),{sources:!1})),o.error(u("Sources fetching failed","bit-integrations"))})},I=(s,a,e)=>{e(r(c({},e),{tags:!0}));const i={user_name:s.user_name,api_token:s.api_token};l(i,"nutshellcrm_fetch_all_tags").then(t=>{if(t&&t.success){const n=c({},s);t.data&&(n.tags=t.data),a(n),e(r(c({},e),{tags:!1})),o.success(u("Tags fetched successfully","bit-integrations"));return}e(r(c({},e),{tags:!1})),o.error(u("Tags fetching failed","bit-integrations"))})},K=(s,a,e)=>{e(r(c({},e),{products:!0}));const i={user_name:s.user_name,api_token:s.api_token};l(i,"nutshellcrm_fetch_all_products").then(t=>{if(t&&t.success){const n=c({},s);t.data&&(n.products=t.data),a(n),e(r(c({},e),{products:!1})),o.success(u("Products fetched successfully","bit-integrations"));return}e(r(c({},e),{products:!1})),o.error(u("Products fetching failed","bit-integrations"))})},N=(s,a,e)=>{e(r(c({},e),{companyTypes:!0}));const i={user_name:s.user_name,api_token:s.api_token};l(i,"nutshellcrm_fetch_all_companytypes").then(t=>{if(t&&t.success){const n=c({},s);t.data&&(n.companyTypes=t.data),a(n),e(r(c({},e),{companyTypes:!1})),o.success(u("CompanyTypes fetched successfully","bit-integrations"));return}e(r(c({},e),{companyTypes:!1})),o.error(u("CompanyTypes fetching failed","bit-integrations"))})};export{K as a,z as b,q as c,I as d,S as e,N as f,v as g,A as h,g as i,w as n};
