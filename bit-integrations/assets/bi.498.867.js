var h=Object.defineProperty,d=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var b=(t,a,e)=>a in t?h(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,i=(t,a)=>{for(var e in a||(a={}))p.call(a,e)&&b(t,e,a[e]);if(_)for(var e of _(a))F.call(a,e)&&b(t,e,a[e]);return t},r=(t,a)=>d(t,y(a));import{_ as n,c as l,d as o}from"./bi.4.0.js";const P=(t,a,e)=>{const c=i({},a),{name:s}=t.target;t.target.value!==""?c[s]=t.target.value:delete c[s],e(i({},c))},q=t=>{const a=t.filter(e=>e.required===!0);return a.length>0?a.map(e=>({formField:"",companyHubFormField:e.key})):[{formField:"",companyHubFormField:""}]},K=t=>!((t!=null&&t.field_map?t.field_map.filter(e=>!e.formField||!e.companyHubFormField||e.formField==="custom"&&!e.customValue||e.companyHubFormField==="customFieldKey"&&!e.customFieldKey):[]).length>0),g=(t,a,e,c,s,u)=>{if(!t.sub_domain||!t.api_key){e({sub_domain:t.sub_domain?"":n("Sub Domain can't be empty","bit-integrations"),api_key:t.api_key?"":n("API Key can't be empty","bit-integrations")});return}e({}),u(r(i({},s),{auth:!0}));const f={sub_domain:t.sub_domain,api_key:t.api_key};l(f,"company_hub_authentication").then(m=>{if(m&&m.success){c(!0),u(r(i({},s),{auth:!1})),o.success(n("Authorized Successfully","bit-integrations"));return}u(r(i({},s),{auth:!1})),o.error(n("Authorized failed, Please enter valid Sub Domain & API Key","bit-integrations"))})},C=(t,a,e)=>{e(r(i({},e),{companies:!0}));const c={sub_domain:t.sub_domain,api_key:t.api_key};l(c,"company_hub_fetch_all_companies").then(s=>{if(s&&s.success){if(s.data){a(u=>(u.companies=s.data,u)),e(r(i({},e),{companies:!1})),o.success(n("Companies fetched successfully","bit-integrations"));return}e(r(i({},e),{companies:!1})),o.error(n("Companies Not Found!","bit-integrations"));return}e(r(i({},e),{companies:!1})),o.error(n("Companies fetching failed","bit-integrations"))})},I=(t,a,e)=>{e(r(i({},e),{contact:!0}));const c={sub_domain:t.sub_domain,api_key:t.api_key};l(c,"company_hub_fetch_all_contacts").then(s=>{if(s&&s.success){if(s.data){a(u=>(u.contacts=s.data,u)),e(r(i({},e),{contact:!1})),o.success(n("Contacts fetched successfully","bit-integrations"));return}e(r(i({},e),{contact:!1})),o.error(n("Contacts not found!","bit-integrations"));return}e(r(i({},e),{contact:!1})),o.error(n("Contacts fetching failed","bit-integrations"))})};export{I as a,q as b,K as c,g as d,C as g,P as h};
