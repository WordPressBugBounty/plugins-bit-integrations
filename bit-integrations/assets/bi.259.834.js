var u=Object.defineProperty;var h=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var c=(s,t,e)=>t in s?u(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,n=(s,t)=>{for(var e in t||(t={}))g.call(t,e)&&c(s,e,t[e]);if(h)for(var e of h(t))p.call(t,e)&&c(s,e,t[e]);return s};import{c as o,_ as d}from"./bi.317.0.js";const B=(s,t,e)=>{const a=n({},t);a.name=s.target.value,e(n({},a))},F=(s,t,e,a)=>{const l={api_secret:s.api_secret};o(l,"benchMark_lists").then(r=>{if(r&&r.success){const i=n({},s);r.data.benchMarkLists?(i.default||(i.default={}),i.default.benchMarkLists=r.data.benchMarkLists,a({show:!0,msg:d("Benchmark lists refreshed","bit-integrations")})):a({show:!0,msg:d("No Benchmark lists found. Try changing the header row number or try again","bit-integrations")}),t(n({},i))}else a({show:!0,msg:d("Benchmark lists refresh failed. please try again","bit-integrations")});e(!1)}).catch(()=>e(!1))},b=(s,t,e,a)=>{const l={api_secret:s.api_secret,list_id:s.listId};o(l,"benchMark_headers").then(r=>{if(r&&r.success){const i=n({},s);if(r.data.benchMarkField){i.default||(i.default={}),i.default.fields=r.data.benchMarkField;const{fields:m}=i.default;i.field_map=Object.values(m).filter(f=>f.required).map(f=>({formField:"",benchMarkField:f.fieldId,required:!0})),a({show:!0,msg:d("Benchmark fields refreshed","bit-integrations")})}else a({show:!0,msg:d("No Benchmark fields found. Try changing the header row number or try again","bit-integrations")});t(n({},i))}else a({show:!0,msg:d("Benchmark fields refresh failed. please try again","bit-integrations")});e(!1)}).catch(()=>e(!1))},k=s=>!((s!=null&&s.field_map?s.field_map.filter(e=>!e.formField&&e.benchMarkField&&e.required):[]).length>0);export{b as a,k as c,B as h,F as r};
