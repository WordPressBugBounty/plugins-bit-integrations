var h=Object.defineProperty;var o=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var m=(a,e,t)=>e in a?h(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,n=(a,e)=>{for(var t in e||(e={}))_.call(e,t)&&m(a,t,e[t]);if(o)for(var t of o(e))g.call(e,t)&&m(a,t,e[t]);return a};import{c as u,d as c,_ as f}from"./bi.107.0.js";const M=(a,e,t,r,i,s)=>{const l=n({},e),{name:d}=a.target;a.target.value!==""?(l[d]=a.target.value,b(l,t,r)):delete l[d],l[a.target.name]=a.target.value,t(n({},l))},b=(a,e,t,r)=>{t(!0),u(null,"fetch_all_mail_mint_custom_fields").then(i=>{if(i&&i.success){e(s=>{const l=n({},s);return l.default||(l.default={}),i.data&&(l.mailMintContactFields=i.data),l}),t(!1),c.success(f("All custom field fetched successfully","bit-integrations"));return}t(!1),c.error(f("Mail Mint custom field fetch failed. please try again","bit-integrations"))}).catch(()=>t(!1))},y=(a,e,t,r)=>{t(!0),u(null,"fetch_all_mail_mint_list").then(i=>{if(i&&i.success){e(s=>{const l=n({},s);return l.default||(l.default={}),i.data&&(l.default.allLists=i.data),l}),t(!1),c.success(f("All list fetched successfully","bit-integrations"));return}t(!1),c.error(f("Mail mint list fetch failed. please try again","bit-integrations"))}).catch(()=>t(!1))},k=(a,e,t,r)=>{t(!0),u(null,"fetch_all_mail_mint_tags").then(i=>{if(i&&i.success){e(s=>{const l=n({},s);return l.default||(l.default={}),i.data&&(l.default.allTags=i.data),l}),t(!1),c.success(f("All tags fetched successfully","bit-integrations"));return}t(!1),c.error(f("Mail Mint fetch failed. please try again","bit-integrations"))}).catch(()=>t(!1))},A=a=>{const e=a==null?void 0:a.mailMintContactFields.filter(t=>t.required===!0);return e.length>0?e.map(t=>({formField:"",mailMintFormField:t.key})):[{formField:"",mailMintFormField:""}]};export{y as a,k as b,A as g,M as h,b as m};
