var o=Object.defineProperty,F=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var d=(t,s,e)=>s in t?o(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,r=(t,s)=>{for(var e in s||(s={}))g.call(s,e)&&d(t,e,s[e]);if(m)for(var e of m(s))_.call(s,e)&&d(t,e,s[e]);return t},l=(t,s)=>F(t,b(s));import{_ as n,c as f,d as u}from"./bi.422.0.js";import{u as p}from"./bi.1.443.js";const k=(t,s,e)=>{const c=p(s,i=>{const{name:a}=t.target;t.target.value!==""?i[a]=t.target.value:delete i[a]});e(c)},q=t=>{const s=t==null?void 0:t.mailsterFields.filter(e=>e.required===!0);return s.length>0?s.map(e=>({formField:"",mailsterFormField:e.key})):[{formField:"",mailsterFormField:""}]},x=t=>!((t!=null&&t.field_map?t.field_map.filter(e=>!e.formField||!e.mailsterFormField||!e.formField==="custom"&&!e.customValue):[]).length>0),A=(t,s,e,c,i,a)=>{if(!t.name){e({name:t.name?"":n("Name can't be empty","bit-integrations")});return}a(l(r({},i),{auth:!0})),f({},"mailster_authentication").then(h=>{if(h.success){c(!0),u.success(n("Connected Successfully","bit-integrations")),a(l(r({},i),{auth:!1})),y(t,s,i,a);return}a(l(r({},i),{auth:!1})),u.error(n("Connection failed: install and active Mailster plugin first!","bit-integrations"))})},y=(t,s,e,c)=>{c(l(r({},e),{fields:!0})),f({},"mailster_fields").then(i=>{if(i.success&&i.data){const a=r({},t);a.mailsterFields=i.data,s(a),u.success(n("Fields fetched successfully.","bit-integrations")),c(l(r({},e),{fields:!1}));return}c(l(r({},e),{fields:!1})),u.error(n("Fields fetching failed!","bit-integrations"))})},I=(t,s,e,c)=>{c(l(r({},e),{lists:!0})),f({},"mailster_lists").then(i=>{if(i.success&&i.data){const a=r({},t);a.lists=i.data,s(a),u.success(n("Lists fetched successfully.","bit-integrations")),c(l(r({},e),{lists:!1}));return}c(l(r({},e),{lists:!1})),u.error(n("Lists fetching failed!","bit-integrations"))})},N=(t,s,e,c)=>{c(l(r({},e),{tags:!0})),f({},"mailster_tags").then(i=>{if(i.success&&i.data){const a=r({},t);a.tags=i.data,s(a),u.success(n("Tags fetched successfully.","bit-integrations")),c(l(r({},e),{tags:!1}));return}c(l(r({},e),{tags:!1})),u.error(n("Tags fetching failed!","bit-integrations"))})};export{N as a,y as b,x as c,A as d,q as g,k as h,I as m};
