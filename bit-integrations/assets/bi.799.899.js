var o=Object.defineProperty;var m=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var u=(a,i,e)=>i in a?o(a,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[i]=e,l=(a,i)=>{for(var e in i||(i={}))c.call(i,e)&&u(a,e,i[e]);if(m)for(var e of m(i))g.call(i,e)&&u(a,e,i[e]);return a};import{c as h,i as s}from"./bi.562.0.js";const b=(a,i,e)=>{const r=l({},i);r.name=a.target.value,e(l({},r))},_=(a,i,e,r)=>{const n={account_id:a.account_id,api_key:a.api_key};h(n,"lemlist_campaigns").then(t=>{if(t&&t.success){const d=l({},a);t.data?(d.default||(d.default={}),d.default.lemlistCampaigns=t.data,r({show:!0,msg:s("Lemlist Campaigns refreshed","bit-integrations")})):r({show:!0,msg:s("No Lemlist campaigns found. Try changing the header row number or try again","bit-integrations")}),i(l({},d))}else r({show:!0,msg:s("Lemlist campaigns refresh failed. please try again","bit-integrations")});e(!1)}).catch(()=>e(!1))},q=(a,i,e,r)=>{const n=[{fieldValue:"email",fieldName:s("Email","bit-integrations"),required:!0},{fieldValue:"firstName",fieldName:s("First Name","bit-integrations"),required:!1},{fieldValue:"lastName",fieldName:s("Last Name","bit-integrations"),required:!1},{fieldValue:"companyName",fieldName:s("Company Name","bit-integrations"),required:!1},{fieldValue:"phone",fieldName:s("Phone","bit-integrations"),required:!1}],t=l({},a);t.default||(t.default={}),t.default.fields=n;const{fields:d}=t.default;t.field_map=Object.values(d).filter(f=>f.required).map(f=>({formField:"",lemlistField:f.fieldValue,required:!0})),r({show:!0,msg:s("Lemlist fields refreshed","bit-integrations")}),i(l({},t)),e(!1)},w=a=>!((a!=null&&a.field_map?a.field_map.filter(e=>!e.formField&&e.lemlistField&&e.required):[]).length>0);export{q as a,w as c,b as h,_ as r};
