var k=Object.defineProperty,_=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var c=(t,e,s)=>e in t?k(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,o=(t,e)=>{for(var s in e||(e={}))w.call(e,s)&&c(t,s,e[s]);if(n)for(var s of n(e))b.call(e,s)&&c(t,s,e[s]);return t},F=(t,e)=>_(t,u(e));import{b as D,_ as f}from"./bi.541.15.js";const m=(t,e,s,l,r,a)=>{let i=o({},s);switch(i[t.target.name]=t.target.value,t.target.name){case"list":i=z(i,e,l,r,a);break}l(o({},i))},z=(t,e,s,l,r)=>{var i,d;const a=o({},t);return a.field_map=[{formField:"",zohoFormField:"Contact Email"}],(d=(i=a==null?void 0:a.default)==null?void 0:i.fields)!=null&&d[a.list]||y(e,a,s,l,r),a},v=(t,e,s,l,r)=>{l(!0);const a={formID:t,id:e.id,dataCenter:e.dataCenter,clientId:e.clientId,clientSecret:e.clientSecret,tokenDetails:e.tokenDetails};D(a,"zcampaigns_refresh_lists").then(i=>{if(i&&i.success){const d=o({},e);i.data.lists&&(d.default=F(o({},d.default),{lists:i.data.lists})),i.data.tokenDetails&&(d.tokenDetails=i.data.tokenDetails),r({show:!0,msg:f("Lists refreshed","bit-integrations")}),s(o({},d))}else i&&i.data&&i.data.data||!i.success&&typeof i.data=="string"?r({show:!0,msg:`${f("Lists refresh failed Cause:","bit-integrations")}${i.data.data||i.data}. ${f("please try again","bit-integrations")}`}):r({show:!0,msg:f("Lists refresh failed. please try again","bit-integrations")});l(!1)}).catch(()=>l(!1))},y=(t,e,s,l,r)=>{const{list:a}=e;if(!a)return;l(!0);const i={formID:t,list:a,dataCenter:e.dataCenter,clientId:e.clientId,clientSecret:e.clientSecret,tokenDetails:e.tokenDetails};D(i,"zcampaigns_refresh_contact_fields").then(d=>{if(d&&d.success){const h=o({},e);d.data.fields?(h.default.fields||(h.default.fields={}),h.default.fields[a]=d.data,d.data.tokenDetails&&(h.tokenDetails=d.data.tokenDetails),r({show:!0,msg:f("Contact Fields refreshed","bit-integrations")})):r({show:!0,msg:f("Zoho didn't provide fields names for this list","bit-integrations")}),d.data.tokenDetails&&(h.tokenDetails=d.data.tokenDetails),s(o({},h))}else r({show:!0,msg:f("Contact Fields refresh failed. please try again","bit-integrations")});l(!1)}).catch(()=>l(!1))},x=t=>!((t!=null&&t.field_map?t.field_map.filter(s=>{var l,r,a;return!s.formField&&s.zohoFormField&&((a=(r=(l=t==null?void 0:t.default)==null?void 0:l.fields)==null?void 0:r[t.list])==null?void 0:a.required.indexOf(s.zohoFormField))!==-1}):[]).length>0);export{y as a,x as c,m as h,v as r};
