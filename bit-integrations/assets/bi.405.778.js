var g=Object.defineProperty;var F=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var k=(e,s,t)=>s in e?g(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,f=(e,s)=>{for(var t in s||(s={}))p.call(s,t)&&k(e,t,s[t]);if(F)for(var t of F(s))b.call(s,t)&&k(e,t,s[t]);return e};import{_ as u,c as o,d as h}from"./bi.612.0.js";const A=(e,s,t,i,d,a)=>{var n,_;let l=f({},s);const{name:r}=e.target;switch(e.target.value!==""?l[r]=e.target.value:delete l[r],l[e.target.name]=e.target.value,e.target.name){case"listId":l.listId&&!((_=(n=l.default)==null?void 0:n.allFields)!=null&&_[l.listId])&&(l=y(a,l,t,i));break}t(f({},l))},y=(e,s,t,i,d)=>{const{listId:a}=s;if(!a)return;i(!0);const l={auth_token:s.auth_token,list_id:a};o(l,"acumbamail_refresh_fields").then(r=>{var n,_;if(r&&r.success){const c=f({},s);if(r.data){(n=c.default)!=null&&n.allFields||(c.default.allFields={}),(_=c.default.allFields)!=null&&_[a]||(c.default.allFields[a]={}),c.default.allFields[a].fields=r.data,c.default.allFields[a].required=["EMAIL"],t(f({},c)),i(!1),h.success(u("All list field fetched successfully","bit-integrations"));return}i(!1),h.error(u("Failed to fetch list fields","bit-integrations"))}}).catch(()=>i(!1))},S=(e,s,t,i)=>{t(!0);const d={auth_token:e.auth_token};o(d,"acumbamail_fetch_all_list").then(a=>{if(a&&a.success){const l=f({},e);l.default||(l.default={}),a.data&&(l.default.allLists=a.data),s(f({},l)),t(!1),h.success(u("Lists fetched successfully.","bit-integrations"));return}t(!1),h.error(u("Lists fetch failed. please try again","bit-integrations"))}).catch(()=>t(!1))},v=(e,s,t,i,d,a)=>{if(!e.auth_token){t({auth_token:e.auth_token?"":u("Api Key can't be empty","bit-integrations")});return}t({}),d(!0);const l={auth_token:e.auth_token};o(l,"acumbamail_authorization_and_fetch_subscriber_list").then(r=>{if(r&&r.success){const n=f({},e);s(n),i(!0),d(!1),h.success(u("Authorized Successfully","bit-integrations"));return}d(!1),h.error(u(r.data,"bit-integrations"))})},z=e=>!((e!=null&&e.field_map?e.field_map.filter(t=>{var i,d,a;return!t.formField&&t.acumbamailFormField&&((a=(d=(i=e==null?void 0:e.default)==null?void 0:i.allFields)==null?void 0:d[e.listId])==null?void 0:a.required.indexOf(t.acumbamailFormField))!==-1}):[]).length>0);export{v as a,z as c,S as f,A as h,y as r};
