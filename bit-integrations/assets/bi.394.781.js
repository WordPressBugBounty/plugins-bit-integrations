var f=Object.defineProperty;var o=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var c=(s,t,e)=>t in s?f(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,r=(s,t)=>{for(var e in t||(t={}))u.call(t,e)&&c(s,e,t[e]);if(o)for(var e of o(t))d.call(t,e)&&c(s,e,t[e]);return s};import{c as g,_ as i,d as v}from"./bi.317.0.js";const p=(s,t,e)=>{const a=r({},t),{name:l}=s.target;s.target.value!==""?a[l]=s.target.value:delete a[l],e(r({},a))},b=(s,t,e)=>{e(!0);const a=g(null,"restrict_get_all_levels",null,"GET").then(l=>{if(l&&l.success){const n=r({},s);return n.default||(n.default={}),l.data.levellists&&(n.default.levellists=l.data.levellists),t(r({},n)),e(!1),i("Levels refreshed successfully","bit-integrations")}else return e(!1),i("Levels refresh failed. please try again","bit-integrations")});v.promise(a,{success:l=>l,error:i("Error Occurred","bit-integrations"),loading:i("Loading Levels...")})};export{b as g,p as h};
