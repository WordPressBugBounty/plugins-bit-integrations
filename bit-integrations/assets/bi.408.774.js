var p=Object.defineProperty;var m=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var f=(e,a,t)=>a in e?p(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,c=(e,a)=>{for(var t in a||(a={}))F.call(a,t)&&f(e,t,a[t]);if(m)for(var t of m(a))b.call(a,t)&&f(e,t,a[t]);return e};import{_ as n,c as o,d}from"./bi.430.0.js";const y=(e,a,t)=>{const i=c({},a),{name:l}=e.target;e.target.value!==""?i[l]=e.target.value:delete i[l],t(c({},i))},M=e=>{const a=e==null?void 0:e.contactsFields.filter(t=>t.required===!0);return a.length>0?a.map(t=>({formField:"",GroundhoggMapField:t.key})):[{formField:"",GroundhoggMapField:""}]},N=e=>!((e.field_map?e.field_map.find(i=>!i.formField||!i.GroundhoggMapField):!1)||(e.field_map?e.field_map.filter(i=>!i.formField&&!i.GroundhoggMapField):[]).length>0),G=e=>!((e.field_map_meta?e.field_map_meta.find(i=>!i.formField||!i.GroundhoggMetaMapField):!1)||(e.field_map_meta?e.field_map_meta.filter(i=>!i.formField&&!i.GroundhoggMetaMapField):[]).length>0),S=(e,a,t,i,l,u)=>{if(!e.public_key){t({public_key:e.public_key?"":n("Public Key can't be empty","bit-integrations")});return}if(!e.token){t({token:e.token?"":n("token can't be empty","bit-integrations")});return}if(!e.domainName){t({domainName:e.domainName?"":n("Domain Name can't be empty","bit-integrations")});return}t({}),l(!0);const r={public_key:e.public_key,token:e.token,domainName:e.domainName};o(r,"groundhogg_authorization_and_fetch_contacts").then(s=>{if(s&&s.success){const _=c({},e);a(_),i(!0),l(!1),d.success(n("Authorization Successful","bit-integrations"));return}l(!1),d.error(n("Authorization Failed","bit-integrations"))})},v=(e,a,t,i,l)=>{i(!0);const u={public_key:a.public_key,token:a.token,domainName:a.domainName};o(u,"groundhogg_fetch_all_tags").then(r=>{if(r&&r.success){const s=c({},a);s.default||(s.default={}),r.data.tags&&(s.default.tags=r.data.tags),t(c({},s)),i(!1),d.success(n("Groundhogg all tag fetched successfully","bit-integrations"));return}i(!1),d.error(n("Failed to fetch groundhoggtag","bit-integrations"))}).catch(()=>i(!1))};export{S as a,G as b,N as c,v as f,M as g,y as h};
