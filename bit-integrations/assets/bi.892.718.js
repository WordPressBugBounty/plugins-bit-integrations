var u=Object.defineProperty;var l=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var o=(a,r,e)=>r in a?u(a,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[r]=e,i=(a,r)=>{for(var e in r||(r={}))g.call(r,e)&&o(a,e,r[e]);if(l)for(var e of l(r))m.call(r,e)&&o(a,e,r[e]);return a};import{c as p,_ as d}from"./bi.456.0.js";const y=(a,r,e)=>{const t=i({},r);t.name=a.target.value,e(i({},t))},E=(a,r,e,t)=>{const c={api_key:a.api_key},s=i({},a);p(c,"encharge_headers").then(f=>{if(f&&f.success){if(s.default||(s.default={}),f.data.enChargeFields){s.default.fields=f.data.enChargeFields;const{fields:h}=s.default;s.field_map=Object.values(h).filter(n=>n.required).map(n=>({formField:"",enChargeFields:n.fieldId,required:!0})),t({show:!0,msg:d("Encharge fields refreshed","bit-integrations")})}else t({show:!0,msg:d("No Encharge fields found. Try changing the header row number or try again","bit-integrations")});r(i({},s))}else t({show:!0,msg:d("Encharge fields refresh failed. please try again","bit-integrations")});e(!1)}).catch(()=>e(!1))},b=a=>!((a!=null&&a.field_map?a.field_map.filter(e=>!e.formField&&e.enChargeFields&&e.required):[]).length>0);export{b as c,y as h,E as r};
