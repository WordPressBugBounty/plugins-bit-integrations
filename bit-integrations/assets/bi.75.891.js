var p=Object.defineProperty,g=Object.defineProperties;var d=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var F=(e,a,t)=>a in e?p(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,i=(e,a)=>{for(var t in a||(a={}))f.call(a,t)&&F(e,t,a[t]);if(y)for(var t of y(a))A.call(a,t)&&F(e,t,a[t]);return e},c=(e,a)=>g(e,d(a));import{_ as u,c as _,d as m}from"./bi.671.0.js";const o=(e,a,t)=>{const s=i({},a),{name:r}=e.target;e.target.value!==""?s[r]=e.target.value:delete s[r],t(i({},s))},P=e=>{const a=(e==null?void 0:e.woodpeckerAllFields)&&(e==null?void 0:e.woodpeckerAllFields.filter(t=>t.required===!0&&t.key!=="owner"&&t.key!=="pipeline"));return a.length>0?a.map(t=>({formField:"",woodpeckerFormField:t.key})):[{formField:"",woodpeckerFormField:""}]},q=e=>!((e!=null&&e.field_map?e.field_map.filter(t=>!t.formField||!t.woodpeckerFormField||t.formField==="custom"&&!t.customValue||t.woodpeckerFormField==="customFieldKey"&&!t.customFieldKey):[]).length>0),K=(e,a,t,s,r)=>{if(!e.api_key){a({api_key:e.api_key?"":u("API Key can't be empty","bit-integrations")});return}a({}),r(c(i({},s),{auth:!0}));const l={api_key:e.api_key};_(l,"woodpecker_authentication").then(n=>{if(n&&n.success){t(!0),r(c(i({},s),{auth:!1})),m.success(u("Authorized Successfully","bit-integrations"));return}r(c(i({},s),{auth:!1})),m.error(u("Authorized failed, Please enter valid API Key","bit-integrations"))})},v=(e,a,t,s)=>{s(c(i({},t),{campaign:!0}));const r={api_key:e.api_key};_(r,"woodpecker_fetch_all_campaigns").then(l=>{if(l&&l.success){a(n=>{const h=i({},n);return h.campaigns=l.data,h}),m.success(u("Campaigns fetched successfully","bit-integrations")),s(c(i({},t),{campaign:!1}));return}s(c(i({},t),{campaign:!1})),m.error(u("Campaigns fetching failed","bit-integrations"))})};export{P as a,q as c,v as g,o as h,K as w};
