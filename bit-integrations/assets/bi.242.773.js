var v=Object.defineProperty;var p=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var x=(n,l,e)=>l in n?v(n,l,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[l]=e,b=(n,l)=>{for(var e in l||(l={}))g.call(l,e)&&x(n,e,l[e]);if(p)for(var e of p(l))u.call(l,e)&&x(n,e,l[e]);return n};import{j as a}from"./main-404.js";import{_ as s}from"./bi.51.0.js";import{g as r}from"./bi.201.772.js";import"./bi.488.3.js";import"./bi.75.675.js";import{ag as N,a8 as w}from"./bi.613.437.js";function R({formFields:n,handleInput:l,restrictConf:e,setRestrictConf:m,isLoading:j,setIsLoading:c,setSnackbar:y}){var d;const h=i=>{const t=b({},e),{name:o,value:L}=i.target;i.target.value!==""?t[o]=i.target.value:delete t[o],m(t)};return a.jsxs(a.Fragment,{children:[a.jsx("br",{}),a.jsx("b",{className:"wdt-200 d-in-b",children:s("Action:","bit-integrations")}),a.jsxs("select",{onChange:h,name:"actionName",value:e==null?void 0:e.actionName,className:"btcd-paper-inp w-5",children:[a.jsx("option",{value:"",children:s("Select Action","bit-integrations")}),(e==null?void 0:e.actionLists)&&e.actionLists.map(({key:i,label:t})=>a.jsx("option",{value:i,children:t},i))]}),a.jsx("br",{}),a.jsx("br",{}),(e==null?void 0:e.actionName)&&a.jsxs(a.Fragment,{children:[a.jsx("b",{className:"wdt-200 d-in-b",children:s("Membership Level:","bit-integrations")}),a.jsxs("select",{onChange:l,name:"level_id",value:e.level_id,className:"btcd-paper-inp w-5",children:[a.jsx("option",{value:"",children:s("Select Level","bit-integrations")}),e.actionName==="remove-member-level"&&a.jsx("option",{value:"all",children:s("All memberships","bit-integrations")}),((d=e==null?void 0:e.default)==null?void 0:d.levellists)&&e.default.levellists.map(({id:i,name:t})=>a.jsx("option",{value:i,children:t},i))]}),a.jsx("button",{onClick:()=>r(e,m,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${s("Fetch All Level","bit-integrations")}'`},type:"button",disabled:j,children:"↻"})]}),a.jsx("br",{}),a.jsx("br",{}),e.actionName==="add-member-level"&&a.jsxs("div",{className:"flx",children:[a.jsx("b",{className:"wdt-200 d-in-b",children:s("Expiry Date:","bit-integrations")}),a.jsx("input",{className:"btcd-paper-inp w-5 mt-1",onChange:l,name:"exp_date",value:e.exp_date||"",type:"date",placeholder:s("Expiry Date","bit-integrations")}),a.jsx(N,{width:250,icnSize:17,className:"ml-2",children:a.jsx("div",{className:"txt-body",children:"Leave it empty for never-expired"})})]}),a.jsx("br",{}),a.jsx("br",{}),a.jsx(w,{note:s("This integration will only work for logged-in users.","bit-integrations")})]})}export{R};
