var K=Object.defineProperty,b=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var F=(s,t,e)=>t in s?K(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,c=(s,t)=>{for(var e in t||(t={}))P.call(t,e)&&F(s,e,t[e]);if(p)for(var e of p(t))w.call(t,e)&&F(s,e,t[e]);return s},n=(s,t)=>b(s,A(t));var o=(s,t,e)=>new Promise((r,u)=>{var l=i=>{try{a(e.next(i))}catch(m){u(m)}},f=i=>{try{a(e.throw(i))}catch(m){u(m)}},a=i=>i.done?r(i.value):Promise.resolve(i.value).then(l,f);a((e=e.apply(s,t)).next())});import{_ as d,b as y,c as h,F as T,s as g}from"./bi.751.13.js";const z=(s,t,e,r,u)=>{const l=c({},t),f=c({},r);f[s.target.name]="",l[s.target.name]=s.target.value,u(f),e(l)},I=(s,t,e,r,u)=>{if(!s.authKey){t({authKey:s.authKey?"":d("API Key can't be empty")});return}t({}),u(n(c({},r),{auth:!0}));const l={authKey:s.authKey};y(l,"mailercloud_handle_authorize").then(f=>{if(!f.data.errors){e(!0),u(n(c({},r),{auth:!1})),h.success(d("Authorized Successfully"));return}u(n(c({},r),{auth:!1})),h.error(d("Authorized failed"))})},k=(s,t,e,r)=>o(void 0,null,function*(){r&&r(n(c({},e),{list:!0}));const u={authKey:s.authKey},l=yield y(u,"mailercloud_get_all_lists");if(l.success){const{data:f}=l.data,a=c({},s);return f&&(a.default||(a.default={}),a.default.lists=f,t(a),r&&(r(n(c({},e),{list:!1})),h.success(d("Tag refresh successfully")))),!0}return r&&(r(n(c({},e),{list:!1})),h.success(d("Tag refresh failed"))),!1}),x=(s,t,e,r)=>o(void 0,null,function*(){r&&r(n(c({},e),{field:!0}));const u={authKey:s.authKey},l=yield y(u,"mailercloud_get_all_fields");if(l.success){const{data:f}=l,a=c({},s);return f&&(a.default||(a.default={}),a.default.fields=f,t(a),r&&(r(n(c({},e),{field:!1})),h.success(d("Tag refresh successfully")))),!0}return r&&(r(n(c({},e),{field:!1})),h.success(d("Tag refresh failed"))),!1}),M=s=>{var e;const t=(e=s==null?void 0:s.default)==null?void 0:e.fields.filter(r=>r.required===!0);return t.length>0?t.map(r=>({formField:"",mailercloudFormField:r.key})):[{formField:"",mailercloudFormField:""}]},_=s=>!((s!=null&&s.field_map?s.field_map.filter(e=>!e.formField||!e.mailercloudFormField||!e.formField==="custom"&&!e.customValue):[]).length>0),B=(s,t,e)=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!_(s)){h.error(d("Please map mandatory fields","bit-integrations"));return}s.field_map.length>0&&t(e)},E=(s,t,e,r,u,l)=>{l(!0),T(s,t,e,r,u,"","",l).then(a=>{var i;a.success?(h.success((i=a.data)==null?void 0:i.msg),u(e)):h.error(a.data||a)})},S=(s,t,e,r,u,l)=>{if(!_(e)){h.error(d("Please map mandatory fields","bit-integrations"));return}g({flow:s,allIntegURL:t,conf:e,navigate:r,edit:u,setIsLoading:l})};export{k as a,x as b,I as c,E as d,M as g,z as h,B as n,S as s};
