var p=Object.defineProperty;var g=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var n=(e,t,s)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,h=(e,t)=>{for(var s in t||(t={}))_.call(t,s)&&n(e,s,t[s]);if(g)for(var s of g(t))F.call(t,s)&&n(e,s,t[s]);return e};import{c as o,_ as l}from"./bi.576.0.js";import{u as f}from"./bi.795.440.js";const y=(e,t,s)=>{const r=h({},t);r.name=e.target.value,s(h({},r))},q=(e,t,s,r)=>{const d={api_secret:e.api_secret};o(d,"convertKit_forms").then(i=>{i&&i.success?i.data.convertKitForms?(t(m=>f(m,a=>{a.default||(a.default={}),a.default.convertKitForms=i.data.convertKitForms})),K(e,t,s,r),r({show:!0,msg:l("Convert Kit forms refreshed","bit-integrations")})):r({show:!0,msg:l("No Convert Kit forms found. Try changing the header row number or try again","bit-integrations")}):r({show:!0,msg:sprintf(l("%s forms refresh failed. please try again","bit-integrations"),"Kit(ConvertKit)")}),s(!1)}).catch(()=>s(!1))},K=(e,t,s,r)=>{const d={api_secret:e.api_secret};o(d,"convertKit_tags").then(i=>{i&&i.success?i.data.convertKitTags?(t(m=>f(m,a=>{a.default||(a.default={}),a.default.convertKitTags=i.data.convertKitTags})),r({show:!0,msg:sprintf(l("%s tags refreshed","bit-integrations"),"Kit(ConvertKit)")})):r({show:!0,msg:sprintf(l("No %s tags found. Try changing the header row number or try again","bit-integrations"),"Kit(ConvertKit)")}):r({show:!0,msg:sprintf(l("%s tags refresh failed. please try again","bit-integrations"),"Kit(ConvertKit)")}),s(!1)}).catch(()=>s(!1))},T=(e,t,s,r)=>{if((e==null?void 0:e.module)==="add_tags_to_a_subscriber"||(e==null?void 0:e.module)==="remove_tags_to_a_subscriber")t(d=>f(d,i=>{i.default||(i.default={}),i.default.fields={Email:{fieldId:"email",fieldName:"Email",required:!0}},i.field_map=[{formField:"",convertKitField:"email",required:!0}]})),r({show:!0,msg:sprintf(l("%s fields refreshed","bit-integrations"),"Kit(ConvertKit)")});else{const d={api_secret:e.api_secret};o(d,"convertKit_headers").then(i=>{i&&i.success?i.data.convertKitField?(t(m=>f(m,a=>{a.default||(a.default={}),a.default.fields=i.data.convertKitField;const{fields:c}=a.default;a.field_map=Object.values(c).filter(u=>u.required).map(u=>({formField:"",convertKitField:u.fieldId,required:!0}))})),r({show:!0,msg:sprintf(l("%s fields refreshed","bit-integrations"),"Kit(ConvertKit)")})):r({show:!0,msg:sprintf(l("No %s fields found. Try changing the header row number or try again","bit-integrations"),"Kit(ConvertKit)")}):r({show:!0,msg:sprintf(l("%s fields refresh failed. please try again","bit-integrations"),"Kit(ConvertKit)")}),s(!1)}).catch(()=>s(!1))}},N=e=>!((e!=null&&e.field_map?e.field_map.filter(s=>!s.formField&&s.convertKitField&&s.required):[]).length>0);export{K as a,T as b,N as c,y as h,q as r};
