var _=Object.defineProperty,f=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var d=(e,s,t)=>s in e?_(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,l=(e,s)=>{for(var t in s||(s={}))F.call(s,t)&&d(e,t,s[t]);if(k)for(var t of k(s))w.call(s,t)&&d(e,t,s[t]);return e},u=(e,s)=>f(e,I(s));import{_ as o,c as b,d as c}from"./bi.422.0.js";import{u as y}from"./bi.1.443.js";const P=(e,s,t)=>{t(i=>y(i,r=>{const{name:a,value:n}=e.target;n!==""?r[a]=n:delete r[a]}))},q=e=>{const s=e==null?void 0:e.filter(t=>t.required===!0);return(s==null?void 0:s.length)>0?s.map(t=>({formField:"",smartSuiteFormField:t.key})):[{formField:"",smartSuiteFormField:""}]},N=e=>!((e!=null&&e.field_map?e.field_map.filter(t=>!t.formField||!t.smartSuiteFormField||t.formField==="custom"&&!t.customValue||t.smartSuiteFormField==="customFieldKey"&&!t.customFieldKey):[]).length>0),z=(e,s,t,i,r,a)=>{if(!e.workspaceId||!e.apiToken){t({workspaceId:e.workspaceId?"":o("Workspace ID can't be empty","bit-integrations"),apiToken:e.apiToken?"":o("API Token can't be empty","bit-integrations")});return}t({}),a(u(l({},r),{auth:!0}));const n={workspaceId:e.workspaceId,apiToken:e.apiToken};b(n,"smartSuite_authentication").then(h=>{if(h&&h.success){i(!0),a(u(l({},r),{auth:!1})),c.success(o("Authorized Successfully","bit-integrations"));return}a(u(l({},r),{auth:!1})),c.error(o("Authorized failed, "+h.data,"bit-integrations"))})},K=(e,s,t)=>{t(u(l({},t),{solution:!0})),e!=null&&e.selectedSolution&&(e==null||delete e.selectedSolution);const i={workspaceId:e.workspaceId,apiToken:e.apiToken};b(i,"smartSuite_fetch_all_solutions").then(r=>{if(r&&r.success){if(r.data){s(a=>(a.solutions=r.data,a)),t(u(l({},t),{solution:!1})),c.success(o("Solution fetched successfully","bit-integrations"));return}t(u(l({},t),{solution:!1})),c.error(o("Solution Not Found!","bit-integrations"));return}t(u(l({},t),{solution:!1})),c.error(o("Solution fetching failed","bit-integrations"))})},M=(e,s,t,i)=>{e!=null&&e.selectedTable&&(e==null||delete e.selectedTable),i(u(l({},i),{table:!0}));const r={workspaceId:e.workspaceId,apiToken:e.apiToken,solution_id:t};b(r,"smartSuite_fetch_all_tables").then(a=>{if(a&&a.success){if(a.data){s(n=>(n.tables=a.data,n)),i(u(l({},i),{table:!1})),c.success(o("Table fetched successfully","bit-integrations"));return}i(u(l({},i),{table:!1})),c.error(o("Table Not Found!","bit-integrations"));return}i(u(l({},i),{table:!1})),c.error(o("Table fetching failed","bit-integrations"))})},g=(e,s,t)=>{t(u(l({},t),{assignedUser:!0}));const i={workspaceId:e.workspaceId,apiToken:e.apiToken};b(i,"smartSuite_fetch_all_user").then(r=>{if(r&&r.success){if(r.data){s(a=>(a.assignedUser=r.data,a)),t(u(l({},t),{solution:!1})),c.success(o("User fetched successfully","bit-integrations"));return}t(u(l({},t),{solution:!1})),c.error(o("User Not Found!","bit-integrations"));return}t(u(l({},t),{solution:!1})),c.error(o("User fetching failed","bit-integrations"))})};export{K as a,M as b,N as c,q as d,g,P as h,z as s};
