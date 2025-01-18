var g=Object.defineProperty;var w=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var F=(e,a,t)=>a in e?g(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,b=(e,a)=>{for(var t in a||(a={}))v.call(a,t)&&F(e,t,a[t]);if(w)for(var t of w(a))A.call(a,t)&&F(e,t,a[t]);return e};import{_ as m,c as o,d as k}from"./bi.157.0.js";import{u as n}from"./bi.463.440.js";const O=(e,a,t,u,c,i,d,l,_)=>{const s=e.target.name,r=e.target.value;if(d){const p=b({},l);p[s]="",_(b({},p))}switch(t(p=>n(p,y=>{if(r===""){delete y.moduleData[s];return}s!=="module"?y.moduleData[s]=parseInt(r):(y.moduleData={},y.moduleData[s]=r)})),s){case"module":q(r,a,t,c,i);break;case"contact_view_id":P(r,a,t,c,i);break;case"account_view_id":h(r,a,t,c,i);break}},q=(e,a,t,u,c)=>{t(i=>n(i,d=>{d.actions={},d.field_map=[{formField:"",freshSalesFormField:""}],["Contact"].includes(e)&&V(a,t,u,c),["Deal"].includes(e)&&z(a,t,u,c),e&&D(e,a,t,u,c)}))},h=(e,a,t,u,c)=>{var d;const i=a.moduleData.module;["Deal","Contact"].includes(i)&&R(e,a,t,u,c),["Deal","Contact"].includes(i)&&!((d=a.default.modules[i])!=null&&d.fields)&&D(i,a,t,u,c)},P=(e,a,t,u,c)=>{var d;const i=a.moduleData.module;["Deal"].includes(i)&&x(e,a,t,u,c),["Deal"].includes(i)&&!((d=a.default.modules[i])!=null&&d.fields)&&D(i,a,t,u,c)},D=(e,a,t,u,c)=>{const i={api_key:a.api_key,bundle_alias:a.bundle_alias,module:e};u(!0),o(i,"FreshSales_refresh_fields").then(d=>{if(u(!1),!d||!d.success){c({show:!1,msg:m("Fields refresh failed. please try again","bit-integrations")});return}t(l=>n(l,_=>{_.default.modules[e].fields||(_.default.modules[e].fields=[]),_.default.modules[e].fields=(d==null?void 0:d.data)||[],_.field_map=M(_),c({show:!0,msg:m("Fields refreshed","bit-integrations")})}))})},V=(e,a,t,u)=>{const c={api_key:e.api_key,bundle_alias:e.bundle_alias,module:"filters",type:"sales_accounts"};t(!0),o(c,"FreshSales_fetch_meta_data").then(i=>{if(t(!1),!i||!i.success){u({show:!1,msg:m("Account views refresh failed. please try again","bit-integrations")});return}a(d=>n(d,l=>{l.default.accountViews=i.data||[]}))}).catch(()=>t(!1))},z=(e,a,t,u)=>{const c={api_key:e.api_key,bundle_alias:e.bundle_alias,module:"filters",type:"contacts"};t(!0),o(c,"FreshSales_fetch_meta_data").then(i=>{if(t(!1),!i||!i.success){u({show:!1,msg:m("Contact views refresh failed. please try again","bit-integrations")});return}a(d=>n(d,l=>{l.default.contactViews=i.data||[]}))}).catch(()=>t(!1))},R=(e,a,t,u,c)=>{const i={api_key:a.api_key,bundle_alias:a.bundle_alias,account_view_id:e,contact_view_id:a.moduleData.contact_view_id,module:"sales_accounts"};u(!0),o(i,"FreshSales_fetch_meta_data").then(d=>{if(u(!1),!d||!d.success){c({show:!1,msg:m("Accounts refresh failed. please try again","bit-integrations")});return}t(l=>n(l,_=>{_.default.accounts=d.data||[]}))}).catch(()=>u(!1))},x=(e,a,t,u,c)=>{const i={api_key:a.api_key,bundle_alias:a.bundle_alias,contact_view_id:e,account_view_id:a.moduleData.account_view_id,module:"contacts"};u(!0),o(i,"FreshSales_fetch_meta_data").then(d=>{if(u(!1),!d||!d.success){c({show:!1,msg:m("Contacts refresh failed. please try again","bit-integrations")});return}t(l=>n(l,_=>{_.default.contacts=d.data||[]}))}).catch(()=>u(!1))},M=e=>{var u,c,i,d;const a=e.moduleData.module,t=(d=(i=(c=(u=e==null?void 0:e.default)==null?void 0:u.modules)==null?void 0:c[a])==null?void 0:i.fields)==null?void 0:d.filter(l=>l.required===!0);return(t==null?void 0:t.length)>0?t.map(l=>({formField:"",freshSalesFormField:l.key})):[{formField:"",freshSalesFormField:""}]},U=e=>!((e!=null&&e.field_map?e.field_map.filter(t=>{var u,c,i,d;return!t.formField&&t.freshSalesFormField&&((d=(i=(c=(u=e==null?void 0:e.default)==null?void 0:u.modules)==null?void 0:c[e.moduleData.module])==null?void 0:i.requiredFields)==null?void 0:d.indexOf(t.freshSalesFormField))!==-1}):[]).length>0),j=e=>{var a,t,u,c,i;return!(((a=e.moduleData)==null?void 0:a.module)!==""&&((c=(u=e.default.modules)==null?void 0:u[(t=e==null?void 0:e.moduleData)==null?void 0:t.module])!=null&&c.required)&&(["Leads","Deal","Activities","Notes"].includes(e.moduleData.module)&&e.moduleData.account_id===void 0&&((i=e.moduleData)==null?void 0:i.contact_id)===void 0||e.moduleData.module==="Contacts"&&e.moduleData.account_id===void 0))},E=(e,a,t,u)=>{if(!e.bundle_alias||!e.api_key){a({bundle_alias:e.bundle_alias?"":m("Bundle Alias (Account URL) can't be empty","bit-integrations"),api_key:e.api_key?"":m("API Key can't be empty","bit-integrations")});return}a({}),u(!0);const c={api_key:e.api_key,bundle_alias:e.bundle_alias,module:"filters"};o(c,"FreshSales_authorization").then(i=>{if(i&&i.success){t(!0),u(!1),k.success(m("Authorized Successfully","bit-integrations"));return}u(!1),k.error(m("Authorized failed","bit-integrations"))})};export{j as a,V as b,U as c,z as d,x as e,E as f,O as h,R as r};
