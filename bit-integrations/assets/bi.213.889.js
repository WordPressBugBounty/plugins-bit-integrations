var h=Object.defineProperty,p=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var f=(t,s,e)=>s in t?h(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,i=(t,s)=>{for(var e in s||(s={}))g.call(s,e)&&f(t,e,s[e]);if(l)for(var e of l(s))_.call(s,e)&&f(t,e,s[e]);return t},n=(t,s)=>p(t,b(s));import{_ as c,b as m,c as o,A as d}from"./bi.597.15.js";const y=(t,s,e)=>{const a=d(s,r=>{const{name:u}=t.target;t.target.value!==""?r[u]=t.target.value:delete r[u]});e(a)},S=t=>!((t!=null&&t.field_map?t.field_map.filter(e=>!e.formField||!e.sureMembersField||!e.formField==="custom"&&!e.customValue):[]).length>0),v=(t,s,e,a,r)=>{if(!t.name){s({name:t.name?"":c("Name can't be empty","bit-integrations")});return}r(n(i({},a),{auth:!0})),m({},"sureMembers_authentication").then(u=>{if(u.success){e(!0),o.success(c("Connected Successfully","bit-integrations")),r(n(i({},a),{auth:!1}));return}r(n(i({},a),{auth:!1})),o.error(c("Connection failed: install and active SureMembers plugin first!","bit-integrations"))})},k=(t,s,e)=>{e(n(i({},e),{groups:!0})),m({},"sureMembers_fetch_groups").then(a=>{if(a&&a.success){const r=i({},t);a.data&&(r.groups=a.data),s(r),e(n(i({},e),{groups:!1})),o.success(c("Groups fetch successfully","bit-integrations"));return}e(n(i({},e),{groups:!1})),o.error(c(a!=null&&a.data?a.data:"Something went wrong!","bit-integrations"))})},A=[{key:"email",label:c("User Email","bit-integrations"),required:!0}];export{A as a,S as c,k as g,y as h,v as s};
