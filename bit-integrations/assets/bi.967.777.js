var F=Object.defineProperty,b=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var p=(e,s,t)=>s in e?F(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,i=(e,s)=>{for(var t in s||(s={}))y.call(s,t)&&p(e,t,s[t]);if(m)for(var t of m(s))K.call(s,t)&&p(e,t,s[t]);return e},f=(e,s)=>b(e,_(s));import{_ as d,c as g,d as l}from"./bi.4.0.js";import{g as w,s as A}from"./bi.826.3.js";const M=(e,s,t)=>{const r=i({},s),{name:a}=e.target;e.target.value!==""?r[a]=e.target.value:delete r[a],t(i({},r))},v=(e,s,t,r,a,n)=>{if(!e.authKey){t({authKey:e.authKey?"":d("API Key can't be empty","bit-integrations")});return}t({}),n(f(i({},a),{auth:!0}));const c={authKey:e.authKey};g(c,"klaviyo_handle_authorize").then(u=>{if(u&&u.success){const o=i({},e);u.data&&(o.default||(o.default={}),o.default.lists=u.data),s(o),r(!0),n(f(i({},a),{auth:!1})),l.success(d("Authorized Successfully","bit-integrations"));return}n(f(i({},a),{auth:!1})),l.error(d("Authorized failed","bit-integrations"))})},x=(e,s,t,r)=>{r(f(i({},t),{list:!0}));const a={authKey:e.authKey};g(a,"klaviyo_handle_authorize").then(n=>{if(n&&n.success){const c=i({},e);n.data&&(c.default||(c.default={}),c.default.lists=n.data),s(c),r(f(i({},t),{list:!1})),l.success(d("List refresh successfully","bit-integrations"));return}r(f(i({},t),{list:!1})),l.error(d("List refresh failed","bit-integrations"))})},I=e=>{const s=e==null?void 0:e.klaviyoFields.filter(t=>t.required===!0);return s.length>0?s.map(t=>({formField:"",klaviyoFormField:t.key})):[{formField:"",klaviyoFormField:""}]},h=e=>!((e!=null&&e.field_map?e.field_map.filter(t=>!t.formField||!t.klaviyoFormField||!t.formField==="custom"&&!t.customValue):[]).length>0),T=(e,s,t)=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!h(e)){l.error(d("Please map mandatory fields","bit-integrations"));return}e.field_map.length>0&&s(t)},B=(e,s,t,r,a,n)=>{n(!0),w(e,s,t,r,a,"","",n).then(u=>{var o;u.success?(l.success((o=u.data)==null?void 0:o.msg),a(t)):l.error(u.data||u)})},H=(e,s,t,r,a,n)=>{if(!h(t)){l.error(d("Please map mandatory fields","bit-integrations"));return}if(h(t)==="required"){l.error(d("You must select email or phone in klaviyo fields","bit-integrations"));return}A({flow:e,allIntegURL:s,conf:t,navigate:r,edit:a,setIsLoading:n})},S=(e,s,t,r)=>{const a=i({},s);a[r]||(a[r]=[]),a[r].splice(e,0,{}),t(i({},a))},V=(e,s,t,r)=>{const a=i({},s);a[r].length>1&&a[r].splice(e,1),t(i({},a))};export{S as a,I as b,B as c,V as d,M as e,x as g,v as h,T as n,H as s};