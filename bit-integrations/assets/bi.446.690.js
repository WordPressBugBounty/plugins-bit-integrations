var j=Object.defineProperty;var m=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;var b=(n,s,a)=>s in n?j(n,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[s]=a,l=(n,s)=>{for(var a in s||(s={}))h.call(s,a)&&b(n,a,s[a]);if(m)for(var a of m(s))i.call(s,a)&&b(n,a,s[a]);return n};import{j as t}from"./main-247.js";import{u as p}from"./bi.393.437.js";import{_ as o}from"./bi.456.0.js";function _({formFields:n,handleInput:s,twilioConf:a,setTwilioConf:d,isLoading:N,setIsLoading:y,setSnackbar:v}){const u=e=>{const r=l({},a);r.body=e,d(r)},x=e=>{const r=l({},a);r[e.target.name]=e.target.value,d(r)},g=(e,r)=>{const c=l({},a);c[r]=e,d(l({},c))};return t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsxs("div",{className:"flx mt-4",children:[t.jsx("b",{className:"wdt-135 d-in-b",children:o("Select Number:","bit-integrations")}),t.jsx(p,{defaultValue:a==null?void 0:a.to,options:n.filter(e=>e.type!=="file").map(e=>({label:e.label,value:`\${${e.name}}`})),className:"btcd-paper-drpdwn wdt-400 ml-2",onChange:e=>g(e,"to"),customValue:!0,singleSelect:!0})]}),t.jsxs("div",{className:"flx mt-4",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:o("Messages:","bit-integrations")}),t.jsx("textarea",{className:"w-7",onChange:x,name:"body",rows:"5",value:a.body}),t.jsx(p,{options:n.filter(e=>e.type!=="file").map(e=>({label:e.label,value:`\${${e.name}}`})),className:"btcd-paper-drpdwn wdt-400 ml-2",onChange:e=>u(e)})]}),t.jsx("br",{})]})}export{_ as T};