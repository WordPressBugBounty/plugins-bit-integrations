var x=Object.defineProperty,p=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var m=(s,t,e)=>t in s?x(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,i=(s,t)=>{for(var e in t||(t={}))j.call(t,e)&&m(s,e,t[e]);if(b)for(var e of b(t))v.call(t,e)&&m(s,e,t[e]);return s},d=(s,t)=>p(s,f(t));import{j as c}from"./main-579.js";import{_ as l,L as o,b as N,c as u}from"./bi.919.15.js";function k({saveConfig:s,edit:t,disabled:e,isLoading:a}){return t?c.jsx("div",{className:"txt-right w-9 mt-3",children:c.jsxs("button",{onClick:s,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:e||a,children:[l("Save","bit-integrations"),a&&c.jsx(o,{size:20,clr:"#022217",className:"ml-2"})]})}):c.jsxs("div",{className:"txt-center",children:[c.jsx("h2",{className:"ml-3",children:l("Successfully Integrated","bit-integrations")}),c.jsxs("button",{onClick:s,className:"btn btcd-btn-lg purple sh-sm",type:"button",disabled:a,children:[l("Finish & Save","bit-integrations"),"✔",a&&c.jsx(o,{size:20,clr:"#022217",className:"ml-2"})]})]})}const g=(s,t,e,a)=>{const h=s.value,r=i({},s);a(d(i({},e),{validate:!0})),N(h,"checking_function_validity",null,"POST").then(n=>{if(n&&n.success){n.data&&(r.isValid=!0),t(i({},r)),a(d(i({},e),{validate:!1})),u.success(l(`${n.data}, You can proceed`,"bit-integrations"));return}delete r.isValid,t(i({},r)),a(d(i({},e),{validate:!1})),u.error(l(`${n.data}`,"bit-integrations"))})};export{k as C,g as c};
