var g=Object.defineProperty,A=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var K=(t,s,e)=>s in t?g(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,l=(t,s)=>{for(var e in s||(s={}))q.call(s,e)&&K(t,e,s[e]);if(_)for(var e of _(s))b.call(s,e)&&K(t,e,s[e]);return t},d=(t,s)=>A(t,P(s));var h=(t,s,e)=>new Promise((a,c)=>{var r=f=>{try{u(e.next(f))}catch(m){c(m)}},i=f=>{try{u(e.throw(f))}catch(m){c(m)}},u=f=>f.done?a(f.value):Promise.resolve(f.value).then(r,i);u((e=e.apply(t,s)).next())});import{_ as o,c as y,d as n}from"./bi.223.0.js";import{g as T,s as z}from"./bi.864.3.js";const x=(t,s,e,a,c)=>{const r=l({},s),i=l({},a);i[t.target.name]="",r[t.target.name]=t.target.value,c(i),e(r)},C=(t,s,e,a,c,r)=>{if(!t.authKey){e({authKey:t.authKey?"":o("API Key can't be empty")});return}e({}),r(d(l({},c),{auth:!0}));const i={authKey:t.authKey};y(i,"selzy_handle_authorize").then(u=>{var f;if(u.success&&u.data){const m=l({},t);if(u.data){m.default||(m.default={});const w=(f=u.data.result)==null?void 0:f.map(F=>d(l({},F),{id:String(F.id)}));m.default.lists=w}k(m,s,c,r),s(m),a(!0),r(d(l({},c),{auth:!1})),n.success(o("Authorized Successfully"));return}r(d(l({},c),{auth:!1})),n.error(o("Authorized failed"))})},M=(t,s,e,a)=>h(void 0,null,function*(){var i;a(d(l({},e),{list:!0}));const c={authKey:t.authKey},r=yield y(c,"selzy_handle_authorize");if(r.success){const u=(i=r.data.result)==null?void 0:i.map(m=>d(l({},m),{id:String(m.id)})),f=l({},t);if(u){f.default||(f.default={}),f.default.lists=u,s(f),a(d(l({},e),{list:!1})),n.success(o("List refresh successfully"));return}}a(d(l({},e),{list:!1})),n.success(o("List refresh failed"))}),B=(t,s,e,a)=>h(void 0,null,function*(){a&&a(d(l({},e),{tag:!0}));const c={authKey:t.authKey},r=yield y(c,"selzy_get_all_tags");if(r.success){const i=r.data.result,u=l({},t);return i&&(u.default||(u.default={}),u.default.tags=i,s(u),a&&(a(d(l({},e),{tag:!1})),n.success(o("Tag refresh successfully")))),!0}return a&&(a(d(l({},e),{tag:!1})),n.success(o("Tag refresh failed"))),!1}),k=(t,s,e,a)=>h(void 0,null,function*(){a&&a(d(l({},e),{customFields:!0}));const c={authKey:t.authKey},r=yield y(c,"selzy_get_all_custom_fields");if(r.success){const i=l({},t);return r.data&&(i.default||(i.default={}),i.default.customFields=r.data,s(i),a&&(a(d(l({},e),{customFields:!1})),n.success(o("Custom fileds fetched successfully")))),!0}return a&&(a(d(l({},e),{customFields:!1})),n.success(o("Custom fileds fetching failed"))),!1}),E=t=>{const s=t==null?void 0:t.selzyFields.filter(e=>e.required===!0);return s.length>0?s.map(e=>({formField:"",selzyFormField:e.key})):[{formField:"",selzyFormField:""}]},p=t=>!((t!=null&&t.field_map?t.field_map.filter(e=>!e.formField||!e.selzyFormField||!e.formField==="custom"&&!e.customValue):[]).length>0),V=(t,s,e)=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!p(t)){n.error(o("Please map mandatory fields","bit-integrations"));return}t.field_map.length>0&&s(e)},Y=(t,s,e,a,c,r)=>{r(!0),T(t,s,e,a,c,"","",r).then(u=>{var f;u.success?(n.success((f=u.data)==null?void 0:f.msg),c(e)):n.error(u.data||u)})},j=(t,s,e,a,c,r)=>{if(!p(e)){n.error(o("Please map mandatory fields","bit-integrations"));return}if(p(e)==="required"){n.error("You must select email or phone in klaviyo fields");return}z({flow:t,allIntegURL:s,conf:e,navigate:a,edit:c,setIsLoading:r})};export{M as a,B as b,k as c,C as d,Y as e,E as g,x as h,V as n,j as s};
