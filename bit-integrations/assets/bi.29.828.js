var g=Object.defineProperty;var f=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var h=(e,i,t)=>i in e?g(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,l=(e,i)=>{for(var t in i||(i={}))m.call(i,t)&&h(e,t,i[t]);if(f)for(var t of f(i))_.call(i,t)&&h(e,t,i[t]);return e};import{c as o,_ as d}from"./bi.185.0.js";const D=(e,i,t)=>{const r=l({},i);r.name=e.target.value,t(l({},r))},F=(e,i,t,r)=>{const c={client_id:e.client_id,client_secret:e.client_secret};o(c,"directIq_lists").then(a=>{if(a&&a.success){const s=l({},e);a.data.directIqLists?(s.default||(s.default={}),s.default.directIqLists=a.data.directIqLists,r({show:!0,msg:d("DirectIQ lists refreshed","bit-integrations")})):r({show:!0,msg:d("No DirectIQ lists found. Try changing the header row number or try again","bit-integrations")}),i(l({},s))}else r({show:!0,msg:d("DirectIQ lists refresh failed. please try again","bit-integrations")});t(!1)}).catch(()=>t(!1))},I=(e,i,t,r)=>{const c={client_id:e.client_id,client_secret:e.client_secret,list_id:e.listId};o(c,"directIq_headers").then(a=>{if(a&&a.success){const s=l({},e);if(a.data.directIqField){s.default||(s.default={}),s.default.fields=a.data.directIqField;const{fields:u}=s.default;s.field_map=Object.values(u).filter(n=>n.required).map(n=>({formField:"",directIqField:n.fieldId,required:!0})),r({show:!0,msg:d("DirectIQ fields refreshed","bit-integrations")})}else r({show:!0,msg:d("No DirectIQ fields found. Try changing the header row number or try again","bit-integrations")});i(l({},s))}else r({show:!0,msg:d("DirectIQ fields refresh failed. please try again","bit-integrations")});t(!1)}).catch(()=>t(!1))},b=e=>!((e!=null&&e.field_map?e.field_map.filter(t=>!t.formField&&t.directIqField&&t.required):[]).length>0);export{I as a,b as c,D as h,F as r};
