var b=Object.defineProperty,k=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var m=(t,s,e)=>s in t?b(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,i=(t,s)=>{for(var e in s||(s={}))g.call(s,e)&&m(t,e,s[e]);if(f)for(var e of f(s))A.call(s,e)&&m(t,e,s[e]);return t},r=(t,s)=>k(t,p(s));import{_ as o,b as F,c as d}from"./bi.860.15.js";const v=(t,s,e)=>{const n=i({},s),{name:a}=t.target;t.target.value!==""?n[a]=t.target.value:delete n[a],e(i({},n))},w=t=>{const s=t==null?void 0:t.staticFields.filter(e=>e.required===!0);return s.length>0?s.map(e=>({formField:"",mailRelayFormField:e.key})):[{formField:"",mailRelayFormField:""}]},G=t=>!((t!=null&&t.field_map?t.field_map.filter(e=>!e.formField||!e.mailRelayFormField||!e.formField==="custom"&&!e.customValue):[]).length>0),y=(t,s,e,n,a,u,h)=>{if(!t.domain){e({domain:t.domain?"":o("Account Name can't be empty","bit-integrations")});return}if(!t.auth_token){e({auth_token:t.auth_token?"":o("Api Key can't be empty","bit-integrations")});return}e({}),h==="authentication"&&u(r(i({},a),{auth:!0})),h==="refreshCustomFields"&&u(r(i({},a),{customFields:!0}));const _={auth_token:t.auth_token,domain:t.domain};F(_,"mailRelay_authentication").then(c=>{if(c&&c.success){const l=i({},t);c.data&&(l.campaigns=c.data),s(l),n(!0),h==="authentication"?(c.data&&(l.customFields=c.data),u(r(i({},a),{auth:!1})),d.success(o("Authorized Successfully","bit-integrations"))):h==="refreshCustomFields"&&(c.data&&(l.customFields=c.data),u(r(i({},a),{customFields:!1})),d.success(o("Custom fields fectched successfully","bit-integrations")));return}u(r(i({},a),{auth:!1})),d.error(o("Authorized failed, Please enter valid domain name & API key","bit-integrations"))})},z=(t,s,e)=>{e(r(i({},e),{groups:!0}));const n={auth_token:t.auth_token,domain:t.domain};F(n,"mailRelay_fetch_all_groups").then(a=>{if(a&&a.success){const u=i({},t);a.data&&(u.groups=a.data),s(u),e(r(i({},e),{groups:!1})),d.success(o("Groups fetch successfully","bit-integrations"));return}e(r(i({},e),{groups:!1})),d.error(o("Groups fetch failed","bit-integrations"))})};export{w as a,G as c,z as g,v as h,y as m};