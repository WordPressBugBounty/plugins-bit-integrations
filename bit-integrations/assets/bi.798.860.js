var C=Object.defineProperty,h=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var d=(s,t,e)=>t in s?C(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,i=(s,t)=>{for(var e in t||(t={}))R.call(t,e)&&d(s,e,t[e]);if(m)for(var e of m(t))y.call(t,e)&&d(s,e,t[e]);return s},l=(s,t)=>h(s,k(t));import{_ as o,c as _,d as c}from"./bi.924.0.js";const p=(s,t,e)=>{const n=i({},t),{name:a}=s.target;s.target.value!==""?n[a]=s.target.value:delete n[a],e(i({},n))},F=(s,t,e,n)=>{const a={session_token:s.session_token,link_name:s.link_name,action_id:s.actionId};_(a,"Salesmate_fields").then(r=>{r&&r.success?(t(f=>{const u=i({},f);return u.field_map=[{formField:"",salesmateFormField:""}],r.data&&(u.salesmateFields=r.data,u.field_map=g(u)),u}),n({show:!0,msg:o("Salesmate fields refreshed","bit-integrations")})):n({show:!0,msg:o("Salesmate fields refresh failed. please try again","bit-integrations")}),e(!1)}).catch(()=>e(!1))},g=s=>{const t=(s==null?void 0:s.salesmateFields)&&(s==null?void 0:s.salesmateFields.filter(e=>e.required===!0&&e.key!=="owner"&&e.key!=="pipeline"));return t.length>0?t.map(e=>({formField:"",salesmateFormField:e.key})):[{formField:"",salesmateFormField:""}]},P=s=>!((s!=null&&s.field_map?s.field_map.filter(e=>!e.formField||!e.salesmateFormField||e.formField==="custom"&&!e.customValue||e.salesmateFormField==="customFieldKey"&&!e.customFieldKey):[]).length>0),w=(s,t,e,n,a,r)=>{if(!s.session_token||!s.link_name){e({session_token:s.session_token?"":o("Session Token can't be empty","bit-integrations"),link_name:s.link_name?"":o("Link Name can't be empty","bit-integrations")});return}e({}),r(l(i({},a),{auth:!0}));const f={session_token:s.session_token,link_name:s.link_name};_(f,"salesmate_authentication").then(u=>{if(u&&u.success){n(!0),r(l(i({},a),{auth:!1})),c.success(o("Authorized Successfully","bit-integrations"));return}r(l(i({},a),{auth:!1})),c.error(o("Authorized failed, Please enter valid Session Token or Link Name","bit-integrations"))})},A=(s,t,e)=>{e(l(i({},e),{tags:!0}));const n={session_token:s.session_token,link_name:s.link_name};_(n,"salesmate_fetch_all_tags").then(a=>{if(a&&a.success){const r=i({},s);a.data&&(r.tags=a.data),t(r),e(l(i({},e),{tags:!1})),c.success(o("Tags fetched successfully","bit-integrations"));return}e(l(i({},e),{tags:!1})),c.error(o("Tags fetching failed","bit-integrations"))})},O=s=>{const t=["Customer","Lead","Vendor","Partner","Competitor","Reseller","Other"];return s(e=>{const n=i({},e);return n.types=t,n}),c.success(o("Types fetched successfully","bit-integrations")),t},q=s=>{const t=["No Reason","Need","Timing","Price","Competition","Feature","Poor Qualification"];return s(e=>{const n=i({},e);return n.lostReasons=t,n}),c.success(o("Lost Reason fetched successfully","bit-integrations")),t},S=s=>{const t=["Ads","Referrals","Website","Word of mouth"];return s(e=>{const n=i({},e);return n.sources=t,n}),c.success(o("Source fetched successfully","bit-integrations")),t},N=s=>{const t=["Open","Won","Lost"];return s(e=>{const n=i({},e);return n.statuses=t,n}),c.success(o("Status fetched successfully","bit-integrations")),t},v=s=>{const t=["High","Medium","Low"];return s(e=>{const n=i({},e);return n.priorities=t,n}),c.success(o("Priority fetched successfully","bit-integrations")),t},W=(s,t,e)=>{e(l(i({},e),{CRMCurrency:!0}));const n={session_token:s.session_token,link_name:s.link_name};_(n,"salesmate_fetch_all_currencies").then(a=>{if(a&&a.success){const r=i({},s);a.data&&(r.currencies=a.data),t(r),e(l(i({},e),{CRMCurrency:!1})),c.success(o("Currencies fetched successfully","bit-integrations"));return}e(l(i({},e),{CRMCurrency:!1})),c.error(o("Currencies fetching failed","bit-integrations"))})},z=(s,t,e)=>{e(l(i({},e),{CRMCompany:!0}));const n={session_token:s.session_token,link_name:s.link_name};_(n,"salesmate_fetch_all_CRMCompanies").then(a=>{if(a&&a.success){if(!a.data){e(l(i({},e),{CRMCompany:!1})),c.error(o("Companies Not Found!","bit-integrations"));return}t(r=>{const f=i({},r);return a.data&&(f.companies=a.data),f}),e(l(i({},e),{CRMCompany:!1})),c.success(o("Companies fetched successfully","bit-integrations"));return}e(l(i({},e),{CRMCompany:!1})),c.error(o("Companies fetching failed","bit-integrations"))})},K=(s,t,e,n)=>{n(l(i({},e),{CRMPipelines:!0}));const a={session_token:s.session_token,link_name:s.link_name};_(a,"salesmate_fetch_all_CRMPipelines").then(r=>{if(n(l(i({},e),{CRMPipelines:!1})),r&&r.success){t(f=>{const u=i({},f);return r.data&&(u.CRMPipelines=r.data),u}),c.success(o("Pipelines fetched successfully","bit-integrations"));return}c.error(o("Pipelines fetching failed","bit-integrations"))})},V=(s,t,e,n)=>{n(l(i({},e),{CRMContacts:!0}));const a={session_token:s.session_token,link_name:s.link_name};_(a,"salesmate_fetch_all_CRMContacts").then(r=>{if(n(l(i({},e),{CRMContacts:!1})),r&&r.success){if(!r.data){c.error(o("Contacts not found!","bit-integrations"));return}t(f=>{const u=i({},f);return r.data&&(u.CRMContacts=r.data),u}),c.success(o("Contacts fetched successfully","bit-integrations"));return}c.error(o("Contacts fetching failed","bit-integrations"))})},j=(s,t,e,n)=>{n(l(i({},e),{CRMOwners:!0}));const a={session_token:s.session_token,link_name:s.link_name};_(a,"salesmate_fetch_all_CRMOwners").then(r=>{if(n(l(i({},e),{CRMOwners:!1})),r&&r.success){t(f=>{const u=i({},f);return r.data&&(u.CRMOwners=r.data),u}),c.success(o("Owner fetched successfully","bit-integrations"));return}c.error(o("Owner fetching failed","bit-integrations"))})};export{O as a,q as b,P as c,S as d,N as e,v as f,A as g,p as h,W as i,z as j,V as k,j as l,K as m,F as r,w as s};