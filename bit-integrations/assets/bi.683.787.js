var k=Object.defineProperty,S=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var y=(e,t,a)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))C.call(t,a)&&y(e,a,t[a]);if(I)for(var a of I(t))R.call(t,a)&&y(e,a,t[a]);return e},g=(e,t)=>S(e,q(t));import{_ as d,c as F,d as m}from"./bi.247.0.js";import{y as A}from"./bi.761.437.js";const M=(e,t,a,i,r,o,n,l,f)=>{let s=c({},t);if(n){const h=c({},l);h[e.target.name]="",f(c({},h))}switch(s[e.target.name]=e.target.value,e.target.name){case"source_type":s=v(s,a);break}a(c({},s))},W=e=>!((e!=null&&e.address_field?e.address_field.filter(a=>!a.formField&&a.constantContactAddressField&&a.required):[]).length>0),v=(e,t)=>{const a=A(e);return a.field_map=[{formField:"",constantContactFormField:""}],z(e,t),a},J=(e,t,a,i,r)=>{r(g(c({},i),{list:!0}));const o={integId:e,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails};F(o,"cContact_refresh_list").then(n=>{if(n&&n.success){const l=c({},t);n.data&&(l.lists=n.data.contactList),a(l),r(g(c({},i),{list:!1})),m.success(d("List fetch successfully","bit-integrations"));return}r(g(c({},i),{list:!1})),m.error(d("List fetch failed","bit-integrations"))})},z=(e,t)=>{const a={clientId:e.clientId,clientSecret:e.clientSecret,tokenDetails:e.tokenDetails};F(a,"cContact_custom_fields").then(i=>{if(i&&i.success){const r=c({},e);if(i.data){const o=r.default.constantContactFields.concat(i.data.customFields);r.default.constantContactFields=o}t(r)}})},N=(e,t,a,i,r)=>{r(g(c({},i),{tag:!0}));const o={integId:e,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails};F(o,"cContact_refresh_tags").then(n=>{if(n&&n.success){const l=c({},t);n.data&&(l.tags=n.data.contactTag),a(l),r(g(c({},i),{tag:!1})),m.success(d("Tags fetch successfully","bit-integrations"));return}r(g(c({},i),{tag:!1})),m.error(d("Tags fetch failed","bit-integrations"))})},O=e=>{const t={},i=window.location.href.replace(`${window.opener.location.href}`,"").split("&");i&&i.forEach(r=>{const o=r.split("=");o[1]&&(t[o[0]]=o[1])}),localStorage.setItem(`__${e}`,JSON.stringify(t)),window.close()},x=(e,t,a,i,r,o,n,l,f,s)=>{if(!i.clientId){o({clientId:i.clientId?"":d("Client Id can't be empty","bit-integrations"),clientSecret:i.clientSecret?"":d("Secret key can't be empty","bit-integrations")});return}l(!0);const h=`https://authz.constantcontact.com/oauth2/default/v1/authorize?scope=${a}&response_type=code&client_id=${i.clientId}&state=${encodeURIComponent(window.location.href)}/redirect&redirect_uri=${encodeURIComponent(`${s.api.base}`)}/redirect`,$=window.open(h,e,"width=400,height=609,toolbar=off"),b=setInterval(()=>{if($.closed){clearInterval(b);let u={},_=!1;const w=localStorage.getItem(`__${e}`);if(w&&(_=!0,u=JSON.parse(w),localStorage.removeItem(`__${e}`),u.code.search("#"))){const[p]=u.code.split("#");u.code=p}if(!u.code||u.error||!u||!_){const p=u.error?`Cause: ${u.error}`:"";f({show:!0,msg:`${d("Authorization failed","bit-integrations")} ${p}. ${d("please try again","bit-integrations")}`}),l(!1)}else{const p=c({},i);p.accountServer=u["accounts-server"],D(t,u,p,r,n,l,f,s)}}},500)},D=(e,t,a,i,r,o,n,l)=>{const f=c({},t);f.clientId=a.clientId,f.clientSecret=a.clientSecret,f.redirectURI=`${l.api.base}/redirect`,F(f,`${e}_generate_token`).then(s=>s).then(s=>{if(s&&s.success){const h=c({},a);h.tokenDetails=s.data,i(h),r(!0),n({show:!0,msg:d("Authorized Successfully","bit-integrations")})}else s&&s.data&&s.data.data||!s.success&&typeof s.data=="string"?n({show:!0,msg:`${d("Authorization failed Cause:","bit-integrations")}${s.data.data||s.data}. ${d("please try again","bit-integrations")}`}):n({show:!0,msg:d("Authorization failed. please try again","bit-integrations")});o(!1)})},G=e=>!((e.field_map?e.field_map.filter(a=>!a.formField&&!a.constantContactFormField):[]).length>0),H=e=>{var a;const t=(a=e==null?void 0:e.default)==null?void 0:a.constantContactFields.filter(i=>i.required===!0);return t.length>0?t.map(i=>({formField:"",constantContactFormField:i.key})):[{formField:"",constantContactFormField:""}]};export{J as a,N as b,x as c,W as d,G as e,H as g,M as h,O as s};
