var m=Object.defineProperty;var l=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var c=(t,s,e)=>s in t?m(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,n=(t,s)=>{for(var e in s||(s={}))u.call(s,e)&&c(t,e,s[e]);if(l)for(var e of l(s))p.call(s,e)&&c(t,e,s[e]);return t};import{c as h,_ as o}from"./bi.223.0.js";const w=(t,s,e)=>{const i=n({},s);i.name=t.target.value,e(n({},i))},F=(t,s,e,i)=>{const f={api_secret:t.api_secret};h(f,"convertKit_forms").then(a=>{if(a&&a.success){const r=n({},t);a.data.convertKitForms?(r.default||(r.default={}),r.default.convertKitForms=a.data.convertKitForms,i({show:!0,msg:o("Convert Kit forms refreshed","bit-integrations")})):i({show:!0,msg:o("No Convert Kit forms found. Try changing the header row number or try again","bit-integrations")}),s(n({},r))}else i({show:!0,msg:sprintf(o("%s forms refresh failed. please try again","bit-integrations"),"Kit(ConvertKit)")});e(!1)}).catch(()=>e(!1))},_=(t,s,e,i)=>{const f={api_secret:t.api_secret};h(f,"convertKit_tags").then(a=>{if(a&&a.success){const r=n({},t);a.data.convertKitTags?(r.default||(r.default={}),r.default.convertKitTags=a.data.convertKitTags,i({show:!0,msg:sprintf(o("%s tags refreshed","bit-integrations"),"Kit(ConvertKit)")})):i({show:!0,msg:sprintf(o("No %s tags found. Try changing the header row number or try again","bit-integrations"),"Kit(ConvertKit)")}),s(n({},r))}else i({show:!0,msg:sprintf(o("%s tags refresh failed. please try again","bit-integrations"),"Kit(ConvertKit)")});e(!1)}).catch(()=>e(!1))},b=(t,s,e,i)=>{const f={api_secret:t.api_secret};h(f,"convertKit_headers").then(a=>{if(a&&a.success){const r=n({},t);if(a.data.convertKitField){r.default||(r.default={}),r.default.fields=a.data.convertKitField;const{fields:g}=r.default;r.field_map=Object.values(g).filter(d=>d.required).map(d=>({formField:"",convertKitField:d.fieldId,required:!0})),i({show:!0,msg:sprintf(o("%s fields refreshed","bit-integrations"),"Kit(ConvertKit)")})}else i({show:!0,msg:sprintf(o("No %s fields found. Try changing the header row number or try again","bit-integrations"),"Kit(ConvertKit)")});s(n({},r))}else i({show:!0,msg:sprintf(o("%s fields refresh failed. please try again","bit-integrations"),"Kit(ConvertKit)")});e(!1)}).catch(()=>e(!1))},y=t=>!((t!=null&&t.field_map?t.field_map.filter(e=>!e.formField&&e.convertKitField&&e.required):[]).length>0);export{F as a,b,y as c,w as h,_ as r};
