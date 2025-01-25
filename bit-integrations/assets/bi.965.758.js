var _=Object.defineProperty;var F=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var u=(e,a,t)=>a in e?_(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,d=(e,a)=>{for(var t in a||(a={}))g.call(a,t)&&u(e,t,a[t]);if(F)for(var t of F(a))k.call(a,t)&&u(e,t,a[t]);return e};import{_ as c,c as l}from"./bi.63.0.js";const b=(e,a,t)=>{const r=d({},a),{name:o}=e.target;e.target.value!==""?r[o]=e.target.value:delete r[o],t(d({},r))},w=(e,a,t,r,o,i)=>{if(!e.api_key){t({api_key:e.api_key?"":c("API Key can't be empty","bit-integrations")});return}t({}),o(!0);const s={app_domain:e.app_domain,api_key:e.api_key};l(s,"freshdesk_authorization_and_fetch_tickets").then(n=>n).then(n=>{if(n&&n.success){const h=d({},e);h.tokenDetails=n.data,a(h),r(!0),i({show:!0,msg:c("Authorized Successfully","bit-integrations")})}else n&&n.data&&n.data.data||!n.success&&typeof n.data=="string"?i({show:!0,msg:`${c("Authorization failed Cause:","bit-integrations")}${n.data.data||n.data}. ${c("please try again","bit-integrations")}`}):i({show:!0,msg:c("Authorization failed. please try again","bit-integrations")});o(!1)})},A=(e,a,t,r)=>{if(!e.api_key){setError({api_key:e.api_key?"":c("API Key can't be empty","bit-integrations")});return}t(!0);const o={app_domain:e.app_domain,api_key:e.api_key};l(o,"freshdesk_fetch_ticket_fields").then(i=>i).then(i=>{if(i&&i.success){const s=d({},e);s.ticketFields=i.data.ticketFields,s.agents=i.data.agents,s.groups=i.data.groups,s.products=i.data.products,s.sources=i.data.sources,s.ticketType=i.data.ticketType,s.field_map=y(s),a(s),r({show:!0,msg:c("Ticket fields fetch Successfully","bit-integrations")})}else r({show:!0,msg:c("Ticket field fetch failed. please try again","bit-integrations")});t(!1)})},q=(e,a,t,r)=>{if(!e.api_key){setError({api_key:e.api_key?"":c("API Key can't be empty","bit-integrations")});return}t(!0);const o={app_domain:e.app_domain,api_key:e.api_key};l(o,"freshdesk_fetch_Contact_fields").then(i=>i).then(i=>{if(i&&i.success){const s=d({},e);s.contactFields=i.data,s.field_map_contact=m(s),a(s),r({show:!0,msg:c("Contacts fields fetch Successfully","bit-integrations")})}else r({show:!0,msg:c("Contacts field fetch failed. please try again","bit-integrations")});t(!1)})},P=e=>!((e?e==null?void 0:e.filter(t=>!t.formField||!t.freshdeskFormField):[]).length>0),z=e=>!((e?e==null?void 0:e.filter(t=>!t.formField||!t.contactFreshdeskFormField):[]).length>0),y=e=>{const a=e==null?void 0:e.ticketFields.filter(t=>t.required===!0);return a.length>0?a.map(t=>({formField:"",freshdeskFormField:t.key})):[{formField:"",freshdeskFormField:""}]},m=e=>{const a=e==null?void 0:e.contactFields.filter(t=>t.required===!0);return a.length>0?a.map(t=>({formField:"",contactFreshdeskFormField:t.key})):[{formField:"",contactFreshdeskFormField:""}]};export{z as a,q as b,P as c,w as d,A as g,b as h};
