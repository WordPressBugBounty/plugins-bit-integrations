var K=Object.defineProperty,P=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var p=(e,s,t)=>s in e?K(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,n=(e,s)=>{for(var t in s||(s={}))g.call(s,t)&&p(e,t,s[t]);if(o)for(var t of o(s))A.call(s,t)&&p(e,t,s[t]);return e},f=(e,s)=>P(e,b(s));var y=(e,s,t)=>new Promise((r,a)=>{var u=c=>{try{i(t.next(c))}catch(m){a(m)}},l=c=>{try{i(t.throw(c))}catch(m){a(m)}},i=c=>c.done?r(c.value):Promise.resolve(c.value).then(u,l);i((t=t.apply(e,s)).next())});import{_ as h,c as F,d}from"./bi.63.0.js";import{i as z,s as q}from"./bi.163.3.js";const x=(e,s,t,r,a)=>{const u=n({},s),l=n({},r);l[e.target.name]="",u[e.target.name]=e.target.value,a(l),t(u)},M=(e,s,t,r,a)=>{if(!e.authKey){s({authKey:e.authKey?"":h("API Key can't be empty")});return}s({}),a(f(n({},r),{auth:!0}));const u={authKey:e.authKey};F(u,"moosend_handle_authorize").then(l=>{if(l.data.Code===0){t(!0),a(f(n({},r),{auth:!1})),d.success(h("Authorized Successfully"));return}a(f(n({},r),{auth:!1})),d.error(h("Authorized failed"))})},k=(e,s,t,r)=>y(void 0,null,function*(){r&&r(f(n({},t),{list:!0}));const a={authKey:e.authKey},u=yield F(a,"moosend_handle_authorize");if(u.success&&u.data.Code===0){const{MailingLists:l}=u.data.Context,i=n({},e);return l&&(i.default||(i.default={}),i.default.lists=l,s(i),r&&(r(f(n({},t),{list:!1})),d.success(h("List refresh successfully")))),!0}return r&&(r(f(n({},t),{list:!1})),d.success(h("List refresh failed"))),!1}),T=e=>{const s=e==null?void 0:e.moosendFields.filter(t=>t.required===!0);return s.length>0?s.map(t=>({formFields:"",moosendFormFields:t.key})):[{formFields:"",moosendFormFields:""}]},_=e=>!((e!=null&&e.field_map?e.field_map.filter(t=>!t.formFields||!t.moosendFormFields||!t.formFields==="custom"&&!t.customValue):[]).length>0),B=(e,s,t)=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!e.listId&&e.method!=="0"&&d.error("Please select list"),!_(e)){d.error(h("Please map mandatory fields","bit-integrations"));return}e.field_map.length>0&&s(t)},E=(e,s,t,r,a,u)=>{u(!0),z(e,s,t,r,a,"","",u).then(i=>{var c;i.success?(d.success((c=i.data)==null?void 0:c.msg),a(t)):d.error(i.data||i)})},S=(e,s,t,r,a,u)=>{if(!_(t)){d.error(h("Please map mandatory fields","bit-integrations"));return}q({flow:e,allIntegURL:s,conf:t,navigate:r,edit:a,setIsLoading:u})};export{T as a,M as b,E as c,k as g,x as h,B as n,S as s};
