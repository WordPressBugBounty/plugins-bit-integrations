var h=Object.defineProperty;var g=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var F=(a,c,t)=>c in a?h(a,c,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[c]=t,o=(a,c)=>{for(var t in c||(c={}))b.call(c,t)&&F(a,t,c[t]);if(g)for(var t of g(c))D.call(c,t)&&F(a,t,c[t]);return a};import{_ as n,c as _,d as y,s as f}from"./bi.671.0.js";const M=(a,c,t,d,u,e,i,s,m)=>{let l=o({},c);if(i){const r=o({},s);r[a.target.name]="",m(o({},r))}switch(a.target.value!==""?a.target.name!=="module"?l.moduleData[a.target.name]=parseInt(a.target.value):(l.moduleData={},l.moduleData[a.target.name]=a.target.value):delete l.moduleData[a.target.name],a.target.name){case"module":l=v(d,l,t,u,e);break;case"contact_view_id":l=q(d,l,t,u,e);break;case"account_view_id":l=A(d,l,t,u,e);break}t(o({},l))},v=(a,c,t,d,u)=>{var s,m;const e=o({},c),i=e.moduleData.module;return e.actions={},e.field_map=[{formField:"",freshSalesFormField:""}],["Contact"].includes(i)&&!e.default.views&&k(e,t,d,u),["Deal"].includes(i)&&!e.default.views&&V(e,t,d,u),i!==""&&i!==void 0?setTimeout(()=>{p(i,e,t)},1e3):e.field_map=(m=(s=e.default.modules)==null?void 0:s[i])!=null&&m.requiredFields?w(e):[{formField:"",freshSalesFormField:""}],e},A=(a,c,t,d,u)=>{var s,m,l,r;const e=o({},c),i=e.moduleData.module;return e.actions={},e.field_map=[{formField:"",freshSalesFormField:""}],["Deal","Contact"].includes(i)&&(P(e,t,d,u),!((m=(s=e.default.modules)==null?void 0:s[i])!=null&&m.fields)&&i!==""&&i!==void 0?setTimeout(()=>{p(i,e,t)},1e3):e.field_map=(r=(l=e.default.modules)==null?void 0:l[i])!=null&&r.requiredFields?w(e):[{formField:"",freshSalesFormField:""}]),e},q=(a,c,t,d,u)=>{var s,m,l,r;const e=o({},c),i=e.moduleData.module;return e.actions={},e.field_map=[{formField:"",freshSalesFormField:""}],["Deal"].includes(i)&&(!e.default.contacts&&z(e,t,d,u),!((m=(s=e.default.modules)==null?void 0:s[i])!=null&&m.fields)&&i!==""&&i!==void 0?setTimeout(()=>{p(i,e,t)},1e3):e.field_map=(r=(l=e.default.modules)==null?void 0:l[i])!=null&&r.requiredFields?w(e):[{formField:"",freshSalesFormField:""}]),e},p=(a,c,t)=>{const d={api_key:c.api_key,bundle_alias:c.bundle_alias,module:a};_(d,"FreshSales_refresh_fields").then(u=>{var e,i;if(u&&u.success){const s=o({},c);s.default.modules[a].fields||(s.default.modules[a].fields={}),u.data&&(s.default.modules[a].fields=u.data,s.field_map=(i=(e=s.default.modules)==null?void 0:e[a])!=null&&i.requiredFields?w(s):[{formField:"",freshSalesFormField:""}]),t(o({},s))}})},k=(a,c,t,d)=>{t(!0);const u={api_key:a.api_key,bundle_alias:a.bundle_alias,module:"filters",type:"sales_accounts"};_(u,"FreshSales_fetch_meta_data").then(e=>{if(e&&e.success){const i=o({},a);i.default.accountViews||(i.default.accountViews={}),e.data&&(i.default.accountViews=e.data),c(o({},i)),d({show:!0,msg:n("Account views refreshed","bit-integrations")})}else e&&e.data&&e.data.data||!e.success&&typeof e.data=="string"?d({show:!0,msg:f(n("Account views refresh failed Cause: %s. please try again","bit-integrations"),e.data.data||e.data)}):d({show:!0,msg:n("Account views refresh failed. please try again","bit-integrations")});t(!1)}).catch(()=>t(!1))},V=(a,c,t,d)=>{t(!0);const u={api_key:a.api_key,bundle_alias:a.bundle_alias,module:"filters",type:"contacts"};_(u,"FreshSales_fetch_meta_data").then(e=>{if(e&&e.success){const i=o({},a);i.default.contactViews||(i.default.contactViews={}),e.data&&(i.default.contactViews=e.data),c(o({},i)),d({show:!0,msg:n("Contact views refreshed","bit-integrations")})}else e&&e.data&&e.data.data||!e.success&&typeof e.data=="string"?d({show:!0,msg:f(n("Contact views refresh failed Cause: %s. please try again","bit-integrations"),e.data.data||e.data)}):d({show:!0,msg:n("Contact views refresh failed. please try again","bit-integrations")});t(!1)}).catch(()=>t(!1))},P=(a,c,t,d)=>{t(!0);const u={api_key:a.api_key,bundle_alias:a.bundle_alias,account_view_id:a.moduleData.account_view_id,contact_view_id:a.moduleData.contact_view_id,module:"sales_accounts"};_(u,"FreshSales_fetch_meta_data").then(e=>{if(e&&e.success){const i=o({},a);i.default.accounts||(i.default.accounts={}),e.data&&(i.default.accounts=e.data),c(o({},i)),d({show:!0,msg:n("Accounts refreshed","bit-integrations")})}else e&&e.data&&e.data.data||!e.success&&typeof e.data=="string"?d({show:!0,msg:f(n("Accounts refresh failed Cause: %s. please try again","bit-integrations"),e.data.data||e.data)}):d({show:!0,msg:n("Accounts refresh failed. please try again","bit-integrations")});t(!1)}).catch(()=>t(!1))},z=(a,c,t,d)=>{t(!0);const u={api_key:a.api_key,bundle_alias:a.bundle_alias,contact_view_id:a.moduleData.contact_view_id,account_view_id:a.moduleData.account_view_id,module:"contacts"};_(u,"FreshSales_fetch_meta_data").then(e=>{if(e&&e.success){const i=o({},a);i.default.contacts||(i.default.contacts={}),e.data&&(i.default.contacts=e.data),c(o({},i)),d({show:!0,msg:n("Contacts refreshed","bit-integrations")})}else e&&e.data&&e.data.data||!e.success&&typeof e.data=="string"?d({show:!0,msg:f(n("Contacts refresh failed Cause: %s. please try again","bit-integrations"),e.data.data||e.data)}):d({show:!0,msg:n("Contacts refresh failed. please try again","bit-integrations")});t(!1)}).catch(()=>t(!1))},w=a=>{var d,u,e,i;const c=a.moduleData.module,t=(i=(e=(u=(d=a==null?void 0:a.default)==null?void 0:d.modules)==null?void 0:u[c])==null?void 0:e.fields)==null?void 0:i.filter(s=>s.required===!0);return(t==null?void 0:t.length)>0?t.map(s=>({formField:"",freshSalesFormField:s.key})):[{formField:"",freshSalesFormField:""}]},B=a=>!((a!=null&&a.field_map?a.field_map.filter(t=>{var d,u,e,i;return!t.formField&&t.freshSalesFormField&&((i=(e=(u=(d=a==null?void 0:a.default)==null?void 0:d.modules)==null?void 0:u[a.moduleData.module])==null?void 0:e.requiredFields)==null?void 0:i.indexOf(t.freshSalesFormField))!==-1}):[]).length>0),K=a=>{var c,t,d,u,e;return!(((c=a.moduleData)==null?void 0:c.module)!==""&&((u=(d=a.default.modules)==null?void 0:d[(t=a==null?void 0:a.moduleData)==null?void 0:t.module])!=null&&u.required)&&(["Leads","Deal","Activities","Notes"].includes(a.moduleData.module)&&a.moduleData.account_id===void 0&&((e=a.moduleData)==null?void 0:e.contact_id)===void 0||a.moduleData.module==="Contacts"&&a.moduleData.account_id===void 0))},N=(a,c,t,d)=>{if(!a.bundle_alias||!a.api_key){c({bundle_alias:a.bundle_alias?"":n("Bundle Alias (Account URL) can't be empty","bit-integrations"),api_key:a.api_key?"":n("API Key can't be empty","bit-integrations")});return}c({}),d(!0);const u={api_key:a.api_key,bundle_alias:a.bundle_alias,module:"filters"};_(u,"FreshSales_authorization").then(e=>{if(e&&e.success){t(!0),d(!1),y.success(n("Authorized Successfully","bit-integrations"));return}d(!1),y.error(n("Authorized failed","bit-integrations"))})};export{K as a,k as b,B as c,V as d,z as e,N as f,M as h,P as r};
