var K=Object.defineProperty,A=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var _=(t,s,e)=>s in t?K(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,f=(t,s)=>{for(var e in s||(s={}))b.call(s,e)&&_(t,e,s[e]);if(p)for(var e of p(s))w.call(s,e)&&_(t,e,s[e]);return t},n=(t,s)=>A(t,P(s));var o=(t,s,e)=>new Promise((r,u)=>{var l=i=>{try{a(e.next(i))}catch(m){u(m)}},c=i=>{try{a(e.throw(i))}catch(m){u(m)}},a=i=>i.done?r(i.value):Promise.resolve(i.value).then(l,c);a((e=e.apply(t,s)).next())});import{_ as h,c as y,d}from"./bi.686.0.js";import{i as T,s as g}from"./bi.316.3.js";const I=(t,s,e,r,u)=>{const l=f({},s),c=f({},r);c[t.target.name]="",l[t.target.name]=t.target.value,u(c),e(l)},k=(t,s,e,r,u)=>{if(!t.authKey){s({authKey:t.authKey?"":h("API Key can't be empty")});return}s({}),u(n(f({},r),{auth:!0}));const l={authKey:t.authKey};y(l,"mailercloud_handle_authorize").then(c=>{if(!c.data.errors){e(!0),u(n(f({},r),{auth:!1})),d.success(h("Authorized Successfully"));return}u(n(f({},r),{auth:!1})),d.error(h("Authorized failed"))})},x=(t,s,e,r)=>o(void 0,null,function*(){r&&r(n(f({},e),{list:!0}));const u={authKey:t.authKey},l=yield y(u,"mailercloud_get_all_lists");if(l.success){const{data:c}=l.data,a=f({},t);return c&&(a.default||(a.default={}),a.default.lists=c,s(a),r&&(r(n(f({},e),{list:!1})),d.success(h("Tag refresh successfully")))),!0}return r&&(r(n(f({},e),{list:!1})),d.success(h("Tag refresh failed"))),!1}),M=(t,s,e,r)=>o(void 0,null,function*(){r&&r(n(f({},e),{field:!0}));const u={authKey:t.authKey},l=yield y(u,"mailercloud_get_all_fields");if(l.success){const{data:c}=l,a=f({},t);return c&&(a.default||(a.default={}),a.default.fields=c,s(a),r&&(r(n(f({},e),{field:!1})),d.success(h("Tag refresh successfully")))),!0}return r&&(r(n(f({},e),{field:!1})),d.success(h("Tag refresh failed"))),!1}),B=t=>{var e;const s=(e=t==null?void 0:t.default)==null?void 0:e.fields.filter(r=>r.required===!0);return s.length>0?s.map(r=>({formField:"",mailercloudFormField:r.key})):[{formField:"",mailercloudFormField:""}]},F=t=>!((t!=null&&t.field_map?t.field_map.filter(e=>!e.formField||!e.mailercloudFormField||!e.formField==="custom"&&!e.customValue):[]).length>0),E=(t,s,e)=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!F(t)){d.error(h("Please map mandatory fields","bit-integrations"));return}t.field_map.length>0&&s(e)},S=(t,s,e,r,u,l)=>{l(!0),T(t,s,e,r,u,"","",l).then(a=>{var i;a.success?(d.success((i=a.data)==null?void 0:i.msg),u(e)):d.error(a.data||a)})},V=(t,s,e,r,u,l)=>{if(!F(e)){d.error(h("Please map mandatory fields","bit-integrations"));return}g({flow:t,allIntegURL:s,conf:e,navigate:r,edit:u,setIsLoading:l})};export{x as a,M as b,k as c,S as d,B as g,I as h,E as n,V as s};
