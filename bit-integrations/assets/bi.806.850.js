var K=Object.defineProperty,b=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var p=(e,s,t)=>s in e?K(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,n=(e,s)=>{for(var t in s||(s={}))g.call(s,t)&&p(e,t,s[t]);if(o)for(var t of o(s))A.call(s,t)&&p(e,t,s[t]);return e},d=(e,s)=>b(e,P(s));var y=(e,s,t)=>new Promise((r,a)=>{var u=c=>{try{l(t.next(c))}catch(m){a(m)}},i=c=>{try{l(t.throw(c))}catch(m){a(m)}},l=c=>c.done?r(c.value):Promise.resolve(c.value).then(u,i);l((t=t.apply(e,s)).next())});import{_ as f,b as F,c as h,F as z,s as q}from"./bi.312.95.js";const I=(e,s,t,r,a)=>{const u=n({},s),i=n({},r);i[e.target.name]="",u[e.target.name]=e.target.value,a(i),t(u)},x=(e,s,t,r,a)=>{if(!e.authKey){s({authKey:e.authKey?"":f("API Key can't be empty")});return}s({}),a(d(n({},r),{auth:!0}));const u={authKey:e.authKey};F(u,"moosend_handle_authorize").then(i=>{if(i.data.Code===0){t(!0),a(d(n({},r),{auth:!1})),h.success(f("Authorized Successfully"));return}a(d(n({},r),{auth:!1})),h.error(f("Authorized failed"))})},M=(e,s,t,r)=>y(void 0,null,function*(){r&&r(d(n({},t),{list:!0}));const a={authKey:e.authKey},u=yield F(a,"moosend_handle_authorize");if(u.success&&u.data.Code===0){const{MailingLists:i}=u.data.Context,l=n({},e);return i&&(l.default||(l.default={}),l.default.lists=i,s(l),r&&(r(d(n({},t),{list:!1})),h.success(f("List refresh successfully")))),!0}return r&&(r(d(n({},t),{list:!1})),h.success(f("List refresh failed"))),!1}),k=e=>{const s=e==null?void 0:e.moosendFields.filter(t=>t.required===!0);return s.length>0?s.map(t=>({formFields:"",moosendFormFields:t.key})):[{formFields:"",moosendFormFields:""}]},_=e=>!((e!=null&&e.field_map?e.field_map.filter(t=>!t.formFields||!t.moosendFormFields||!t.formFields==="custom"&&!t.customValue):[]).length>0),T=(e,s,t)=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!e.listId&&e.method!=="0"&&h.error("Please select list"),!_(e)){h.error(f("Please map mandatory fields","bit-integrations"));return}e.field_map.length>0&&s(t)},B=(e,s,t,r,a,u)=>{u(!0),z(e,s,t,r,a,"","",u).then(l=>{var c;l.success?(h.success((c=l.data)==null?void 0:c.msg),a(t)):h.error(l.data||l)})},E=(e,s,t,r,a,u)=>{if(!_(t)){h.error(f("Please map mandatory fields","bit-integrations"));return}q({flow:e,allIntegURL:s,conf:t,navigate:r,edit:a,setIsLoading:u})};export{k as a,x as b,B as c,M as g,I as h,T as n,E as s};
