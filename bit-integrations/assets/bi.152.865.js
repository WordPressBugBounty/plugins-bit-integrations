var p=Object.defineProperty,x=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var o=(s,t,e)=>t in s?p(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,i=(s,t)=>{for(var e in t||(t={}))j.call(t,e)&&o(s,e,t[e]);if(m)for(var e of m(t))v.call(t,e)&&o(s,e,t[e]);return s},d=(s,t)=>x(s,f(t));import{j as c}from"./main-623.js";import{_ as l,c as N,d as b}from"./bi.422.0.js";import{z as u}from"./bi.1.443.js";function g({saveConfig:s,edit:t,disabled:e,isLoading:a}){return t?c.jsx("div",{className:"txt-right w-9 mt-3",children:c.jsxs("button",{onClick:s,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:e||a,children:[l("Save","bit-integrations"),a&&c.jsx(u,{size:20,clr:"#022217",className:"ml-2"})]})}):c.jsxs("div",{className:"txt-center",children:[c.jsx("h2",{className:"ml-3",children:l("Successfully Integrated","bit-integrations")}),c.jsxs("button",{onClick:s,className:"btn btcd-btn-lg purple sh-sm",type:"button",disabled:a,children:[l("Finish & Save","bit-integrations"),"✔",a&&c.jsx(u,{size:20,clr:"#022217",className:"ml-2"})]})]})}const w=(s,t,e,a)=>{const h=s.value,r=i({},s);a(d(i({},e),{validate:!0})),N(h,"checking_function_validity",null,"POST").then(n=>{if(n&&n.success){n.data&&(r.isValid=!0),t(i({},r)),a(d(i({},e),{validate:!1})),b.success(l(`${n.data}, You can proceed`,"bit-integrations"));return}delete r.isValid,t(i({},r)),a(d(i({},e),{validate:!1})),b.error(l(`${n.data}`,"bit-integrations"))})};export{g as C,w as c};
