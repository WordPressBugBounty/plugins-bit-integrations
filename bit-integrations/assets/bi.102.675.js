var A=Object.defineProperty,$=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var I=(e,t,a)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))R.call(t,a)&&I(e,a,t[a]);if(y)for(var a of y(t))q.call(t,a)&&I(e,a,t[a]);return e},p=(e,t)=>$(e,k(t));import{_ as l,b as F,A as m,p as b}from"./bi.433.0.js";const N=(e,t,a,r,n,c,i,d,s,h,g)=>{a(o=>m(o,f=>{if(s){const w=u({},h);w[e.target.name]="",g(u({},w))}f[e.target.name]=e.target.value,e.target.name==="module"&&e.target.value&&v(r,t,a,d,i),e.target.name==="listId"&&e.target.value||e.target.name==="module"&&e.target.value==="add_a_member_to_an_audience"?(D(r,f,a,i,n,c),S(r,f,a,i,n,c)):e.target.value||(f.field_map=[{formField:"",mailChimpField:""}])}))},O=e=>!((e!=null&&e.address_field?e.address_field.filter(a=>!a.formField&&a.mailChimpAddressField&&a.required):[]).length>0),U=(e,t,a)=>{t(!0),F(null,"mChimp_refresh_modules").then(r=>{r&&r.success?(e(n=>m(n,c=>{c.moduleLists=r.data})),a({show:!0,msg:l("Module list refreshed","bit-integrations")})):a({show:!0,msg:l("Module Not Found!","bit-integrations")}),t(!1)}).catch(r=>t(!1))},v=(e,t,a,r,n)=>{r(!0);const c={formID:e,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails};F(c,"mChimp_refresh_audience").then(i=>{i&&i.success?(a(d=>m(d,s=>{s.default||(s.default={}),i.data.audiencelist&&(s.default.audiencelist=i.data.audiencelist),i.data.tokenDetails&&(s.tokenDetails=i.data.tokenDetails)})),n({show:!0,msg:l("Audience list refreshed","bit-integrations")})):i&&i.data&&i.data.data||!i.success&&typeof i.data=="string"?n({show:!0,msg:b(l("Audience list refresh failed Cause: %s. please try again","bit-integrations"),i.data.data||i.data)}):n({show:!0,msg:l("Audience list failed. please try again","bit-integrations")}),r(!1)}).catch(()=>r(!1))},D=(e,t,a,r,n,c)=>{c(p(u({},n),{tags:!0}));const i={formID:e,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails,listId:t.listId};F(i,"mChimp_refresh_tags").then(d=>{d&&d.success?a(s=>m(s,h=>{d.data.audienceTags&&(h.default.audienceTags=d.data.audienceTags),r({show:!0,msg:l("Audience tags refreshed","bit-integrations")})})):d&&d.data&&d.data.data||!d.success&&typeof d.data=="string"?r({show:!0,msg:b(l("Audience tags refresh failed Cause: %s. please try again","bit-integrations"),d.data.data||d.data)}):r({show:!0,msg:l("Audience tags failed. please try again","bit-integrations")}),c(p(u({},n),{tags:!1}))}).catch(()=>c(p(u({},n),{tags:!1})))},S=(e,t,a,r,n,c)=>{const{listId:i}=t;if(!i)return;c(p(u({},n),{refreshFields:!0}));const d={formID:e,listId:i,module:t==null?void 0:t.module,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails};F(d,"mChimp_refresh_fields").then(s=>{s&&s.success?a(h=>m(h,g=>{s.data.audienceField&&(g.default.fields||(g.default.fields={}),g.default.fields[i]=s.data.audienceField,g.field_map=z(s.data.audienceField)),s.data.tokenDetails&&(g.tokenDetails=s.data.tokenDetails),r({show:!0,msg:l("Fields refreshed","bit-integrations")})})):r({show:!0,msg:l("Fields refresh failed. please try again","bit-integrations")}),c(p(u({},n),{refreshFields:!1}))}).catch(()=>c(p(u({},n),{refreshFields:!1})))},W=e=>{const t={},r=window.location.href.replace(`${window.opener.location.href}`,"").split("&");r&&r.forEach(n=>{const c=n.split("=");c[1]&&(t[c[0]]=c[1])}),localStorage.setItem(`__${e}`,JSON.stringify(t)),window.close()},J=(e,t,a,r,n,c,i,d)=>{if(!a.clientId||!a.clientSecret){n({clientId:a.clientId?"":l("Client Id can't be empty","bit-integrations"),clientSecret:a.clientSecret?"":l("Secret key can't be empty","bit-integrations")});return}i(!0);const s=`https://login.mailchimp.com/oauth2/authorize?client_id=${a.clientId}&redirect_uri=${encodeURIComponent(window.location.href)}&response_type=code`,h=window.open(s,e,"width=400,height=609,toolbar=off"),g=setInterval(()=>{if(h.closed){clearInterval(g);let o={},f=!1;const w=localStorage.getItem(`__${e}`);if(w&&(f=!0,o=JSON.parse(w),localStorage.removeItem(`__${e}`),o.code.search("#"))){const[_]=o.code.split("#");o.code=_}if(!o.code||o.error||!o||!f){const _=o.error?`Cause: ${o.error}`:"";d({show:!0,msg:`${l("Authorization failed","bit-integrations")} ${_}. ${l("please try again","bit-integrations")}`}),i(!1)}else{const _=u({},a);_.accountServer=o["accounts-server"],M(t,o,_,r,c,i,d)}}},500)},M=(e,t,a,r,n,c,i)=>{const d=u({},t);d.clientId=a.clientId,d.clientSecret=a.clientSecret,d.redirectURI=window.location.href,F(d,`${e}_generate_token`).then(s=>s).then(s=>{if(s&&s.success){const h=u({},a);h.tokenDetails=s.data,r(h),n(!0),i({show:!0,msg:l("Authorized Successfully","bit-integrations")})}else s&&s.data&&s.data.data||!s.success&&typeof s.data=="string"?i({show:!0,msg:`${l("Authorization failed Cause:","bit-integrations")}${s.data.data||s.data}. ${l("please try again","bit-integrations")}`}):i({show:!0,msg:l("Authorization failed. please try again","bit-integrations")});c(!1)})},j=e=>!((e.field_map?e.field_map.filter(a=>!a.formField||!a.mailChimpField):[]).length>0),z=e=>{const t=e&&Object.values(e).filter(a=>a.required===!0);return t.length>0?t.map(a=>({formField:"",mailChimpField:a.tag})):[{formField:"",mailChimpField:""}]};export{v as a,D as b,j as c,S as d,J as e,O as f,N as h,U as r,W as s};
