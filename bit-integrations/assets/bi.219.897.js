var d=Object.defineProperty,h=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var y=(t,s,e)=>s in t?d(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,i=(t,s)=>{for(var e in s||(s={}))g.call(s,e)&&y(t,e,s[e]);if(o)for(var e of o(s))b.call(s,e)&&y(t,e,s[e]);return t},l=(t,s)=>h(t,F(s));import{_ as u,c as f,d as n}from"./bi.185.0.js";const A=(t,s,e)=>{const c=i({},s),{name:a}=t.target;t.target.value!==""?c[a]=t.target.value:delete c[a],e(i({},c))},k=t=>{const s=t.filter(e=>e.required===!0);return s.length>0?s.map(e=>({formField:"",systemeIOFormField:e.key})):[{formField:"",systemeIOFormField:""}]},P=t=>!((t!=null&&t.field_map?t.field_map.filter(e=>!e.formField||!e.systemeIOFormField||e.formField==="custom"&&!e.customValue||e.systemeIOFormField==="customFieldKey"&&!e.customFieldKey):[]).length>0),q=(t,s,e,c,a,r)=>{if(!t.api_key){e({api_key:t.api_key?"":u("API Key can't be empty","bit-integrations")});return}e({}),r(l(i({},a),{auth:!0}));const _={api_key:t.api_key};f(_,"systemeIO_authentication").then(m=>{if(m&&m.success){c(!0),r(l(i({},a),{auth:!1})),n.success(u("Authorized Successfully","bit-integrations"));return}r(l(i({},a),{auth:!1})),n.error(u("Authorized failed, Please enter valid Sub Domain & API Key","bit-integrations"))})},O=(t,s,e)=>{e(l(i({},e),{tag:!0}));const c={api_key:t.api_key};f(c,"systemeIO_fetch_all_tags").then(a=>{if(a&&a.success){if(a.data){s(r=>(r.tags=a.data,r)),e(l(i({},e),{tag:!1})),n.success(u("Tags fetched successfully","bit-integrations"));return}e(l(i({},e),{tag:!1})),n.error(u("Tags Not Found!","bit-integrations"));return}e(l(i({},e),{tag:!1})),n.error(u("Tags fetching failed","bit-integrations"))})},K=(t,s,e)=>{e(l(i({},e),{fields:!0}));const c={api_key:t.api_key};f(c,"systemeIO_fetch_all_fields").then(a=>{if(a&&a.success){s(r=>(r.systemeIOFields=a.data,r.field_map=k(r.systemeIOFields),r)),e(l(i({},e),{fields:!1})),n.success(u("Contact Field fetched successfully","bit-integrations"));return}e(l(i({},e),{fields:!1})),n.error(u("Contact Field fetching failed","bit-integrations"))})};export{K as a,k as b,P as c,O as g,A as h,q as s};