var h=Object.defineProperty,p=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var f=(t,s,e)=>s in t?h(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,i=(t,s)=>{for(var e in s||(s={}))b.call(s,e)&&f(t,e,s[e]);if(l)for(var e of l(s))_.call(s,e)&&f(t,e,s[e]);return t},n=(t,s)=>p(t,g(s));import{_ as c,c as m,d as o}from"./bi.562.0.js";import{u as d}from"./bi.838.440.js";const S=(t,s,e)=>{const a=d(s,r=>{const{name:u}=t.target;t.target.value!==""?r[u]=t.target.value:delete r[u]});e(a)},v=t=>!((t!=null&&t.field_map?t.field_map.filter(e=>!e.formField||!e.sureMembersField||!e.formField==="custom"&&!e.customValue):[]).length>0),k=(t,s,e,a,r)=>{if(!t.name){s({name:t.name?"":c("Name can't be empty","bit-integrations")});return}r(n(i({},a),{auth:!0})),m({},"sureMembers_authentication").then(u=>{if(u.success){e(!0),o.success(c("Connected Successfully","bit-integrations")),r(n(i({},a),{auth:!1}));return}r(n(i({},a),{auth:!1})),o.error(c("Connection failed: install and active SureMembers plugin first!","bit-integrations"))})},G=(t,s,e)=>{e(n(i({},e),{groups:!0})),m({},"sureMembers_fetch_groups").then(a=>{if(a&&a.success){const r=i({},t);a.data&&(r.groups=a.data),s(r),e(n(i({},e),{groups:!1})),o.success(c("Groups fetch successfully","bit-integrations"));return}e(n(i({},e),{groups:!1})),o.error(c(a!=null&&a.data?a.data:"Something went wrong!","bit-integrations"))})},M=[{key:"email",label:c("User Email","bit-integrations"),required:!0}];export{M as a,v as c,G as g,S as h,k as s};
