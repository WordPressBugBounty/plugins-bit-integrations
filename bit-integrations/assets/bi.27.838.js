var g=Object.defineProperty;var c=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var h=(e,s,t)=>s in e?g(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,l=(e,s)=>{for(var t in s||(s={}))m.call(s,t)&&h(e,t,s[t]);if(c)for(var t of c(s))_.call(s,t)&&h(e,t,s[t]);return e};import{c as o,_ as d}from"./bi.317.0.js";const F=(e,s,t)=>{const a=l({},s);a.name=e.target.value,t(l({},a))},b=(e,s,t,a)=>{const n={client_id:e.client_id,client_secret:e.client_secret,tokenDetails:e.tokenDetails};o(n,"sendPulse_lists").then(r=>{if(r&&r.success){const i=l({},e);r.data?(i.default||(i.default={}),i.default.sendPulseLists=r.data,a({show:!0,msg:d("SendPulse lists refreshed","bit-integrations")})):a({show:!0,msg:d("No SendPulse lists found. Try changing the header row number or try again","bit-integrations")}),s(l({},i))}else a({show:!0,msg:d("SendPulse lists refresh failed. please try again","bit-integrations")});t(!1)}).catch(()=>t(!1))},y=(e,s,t,a)=>{const n={client_id:e.client_id,client_secret:e.client_secret,list_id:e.listId,tokenDetails:e.tokenDetails};o(n,"sendPulse_headers").then(r=>{if(r&&r.success){const i=l({},e);if(r.data.sendPulseField){i.default||(i.default={}),i.default.fields=r.data.sendPulseField;const{fields:u}=i.default;i.field_map=Object.values(u).filter(f=>f.required).map(f=>({formField:"",sendPulseField:f.fieldValue,required:!0})),a({show:!0,msg:d("SendPulse fields refreshed","bit-integrations")})}else a({show:!0,msg:d("No SendPulse fields found. Try changing the header row number or try again","bit-integrations")});s(l({},i))}else a({show:!0,msg:d("SendPulse fields refresh failed. please try again","bit-integrations")});t(!1)}).catch(()=>t(!1))},q=e=>!((e!=null&&e.field_map?e.field_map.filter(t=>!t.formField&&t.sendPulseField&&t.required):[]).length>0);export{y as a,q as c,F as h,b as r};
