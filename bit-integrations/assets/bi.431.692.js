var i=Object.defineProperty;var u=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var p=(n,s,a)=>s in n?i(n,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[s]=a,l=(n,s)=>{for(var a in s||(s={}))j.call(s,a)&&p(n,a,s[a]);if(u)for(var a of u(s))h.call(s,a)&&p(n,a,s[a]);return n};import{r as N,j as t}from"./main-425.js";import{x as o}from"./bi.900.437.js";import{_ as x}from"./bi.107.0.js";import{f}from"./bi.25.3.js";function w({formFields:n,handleInput:s,twilioConf:a,setTwilioConf:c,isLoading:v,setIsLoading:y,setSnackbar:I}){const d=N.useRef(null),b=e=>{const r=l({},a);r[e.target.name]=e.target.value,c(r)},g=(e,r)=>{const m=l({},a);m[r]=e,c(l({},m))};return t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsxs("div",{className:"flx mt-4",children:[t.jsx("b",{className:"wdt-135 d-in-b",children:x("Select Number:","bit-integrations")}),t.jsx(o,{defaultValue:a==null?void 0:a.to,options:n.filter(e=>e.type!=="file").map(e=>({label:e.label,value:`\${${e.name}}`})),className:"btcd-paper-drpdwn wdt-400 ml-2",onChange:e=>g(e,"to"),customValue:!0,singleSelect:!0})]}),t.jsxs("div",{className:"flx mt-4",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:x("Messages:","bit-integrations")}),t.jsx("textarea",{ref:d,className:"w-7",onChange:b,name:"body",rows:"5",value:a.body}),t.jsx(o,{options:n.filter(e=>e.type!=="file").map(e=>({label:e.label,value:`\${${e.name}}`})),className:"btcd-paper-drpdwn wdt-400 ml-2",onChange:e=>f(e,c,d),singleSelect:!0,selectOnClose:!0})]}),t.jsx("br",{})]})}export{w as T};
