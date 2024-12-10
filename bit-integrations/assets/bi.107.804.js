var u=Object.defineProperty;var m=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var j=(s,i,t)=>i in s?u(s,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[i]=t,b=(s,i)=>{for(var t in i||(i={}))v.call(i,t)&&j(s,t,i[t]);if(m)for(var t of m(i))N.call(i,t)&&j(s,t,i[t]);return s};import{j as e,f as F,L as y}from"./main-920.js";import{_ as a,e as w}from"./bi.247.0.js";import{ag as _}from"./bi.761.437.js";import{a as I,h as k,b as $}from"./bi.658.3.js";import{b as A}from"./bi.941.11.js";import{f as O,a as G,b as S}from"./bi.367.805.js";import{T}from"./bi.722.674.js";function V({mailupConf:s,setMailupConf:i}){var l;const t=r=>{const c=b({},s);r.target.checked?c.actions.doubleOptIn=!0:delete c.actions.doubleOptIn,i(b({},c))};return e.jsx("div",{className:"pos-rel d-flx w-8",children:e.jsx(A,{checked:((l=s.actions)==null?void 0:l.doubleOptIn)||!1,onChange:r=>t(r),className:"wdt-200 mt-4 mr-2",value:"doubleOptIn",title:a("Double Opt-in","bit-integrations"),subTitle:a("Add Double Opt-in","bit-integrations")})})}const q=(s,i,t)=>{const l=b({},i);l.field_map.splice(s,0,{}),t(b({},l))},L=(s,i,t)=>{const l=b({},i);l.field_map.length>1&&l.field_map.splice(s,1),t(b({},l))},g=(s,i,t,l)=>{const r=b({},t);r.field_map[i][s.target.name]=s.target.value,s.target.value==="custom"&&(r.field_map[i].customValue=""),l(b({},r))};function R({i:s,formFields:i,field:t,mailupConf:l,setMailupConf:r}){var x;const c=(l==null?void 0:l.staticFields.filter(n=>n.required===!0))||[],h=(l==null?void 0:l.staticFields.filter(n=>n.required===!1))||[],d=F(w),{isPro:o}=d;return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:t.formField||"",onChange:n=>g(n,s,l,r),children:[e.jsx("option",{value:"",children:a("Select Field","bit-integrations")}),e.jsx("optgroup",{label:a("Form Fields","bit-integrations"),children:i==null?void 0:i.map(n=>e.jsx("option",{value:n.name,children:n.label},`ff-rm-${n.name}`))}),e.jsx("option",{value:"custom",children:a("Custom...","bit-integrations")}),e.jsx("optgroup",{label:sprintf(a("General Smart Codes %s","bit-integrations"),o?"":`(${a("Pro","bit-integrations")})`),children:o&&((x=I)==null?void 0:x.map(n=>e.jsx("option",{value:n.name,children:n.label},`ff-rm-${n.name}`)))})]}),t.formField==="custom"&&e.jsx(T,{onChange:n=>k(n,s,l,r),label:a("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:t.customValue,placeholder:a("Custom Value","bit-integrations"),formFields:i}),e.jsxs("select",{className:"btcd-paper-inp",disabled:s<c.length,name:"mailupFormField",value:s<c.length?c[s].key||"":t.mailupFormField||"",onChange:n=>g(n,s,l,r),children:[e.jsx("option",{value:"",children:a("Select Field","bit-integrations")}),s<c.length?e.jsx("option",{value:c[s].key,children:c[s].label},c[s].key):h.map(({key:n,label:p})=>e.jsx("option",{value:n,children:p},n))]})]}),s>=c.length&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>q(s,l,r),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>L(s,l,r),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function J({formFields:s,handleInput:i,mailupConf:t,setMailupConf:l,isLoading:r,setIsLoading:c,setSnackbar:h}){return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:a("Select List:","bit-integrations")}),e.jsxs("select",{onChange:i,name:"listId",value:t.listId,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:a("Select List","bit-integrations")}),(t==null?void 0:t.allList)&&t.allList.map(({idList:d,name:o})=>e.jsx("option",{value:d,children:o},d))]}),e.jsx("button",{onClick:()=>O(t,l,c,h),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Fetch All List","bit-integrations")}'`},type:"button",disabled:r,children:"↻"}),e.jsx("br",{}),r&&e.jsx(y,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),(t==null?void 0:t.listId)&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsxs("b",{className:"wdt-200 d-in-b",children:[a("Groups:","bit-integrations"),e.jsx(_,{width:250,icnSize:17,className:"ml-2",children:e.jsxs("div",{className:"txt-body",children:[a("If you want to assign a subscriber to a group then select a group otherwise leave it blank","bit-integrations"),e.jsx("br",{})]})})]}),e.jsxs("select",{onChange:i,name:"groupId",value:t.groupId,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:a("Select group","bit-integrations")}),(t==null?void 0:t.allGroup)&&t.allGroup.map(({idGroup:d,name:o})=>e.jsx("option",{value:d,children:o},d))]}),e.jsx("button",{onClick:()=>G(t,l,c,h),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Fetch All Groups","bit-integrations")}'`},type:"button",disabled:r,children:"↻"}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"mt-5",children:[e.jsx("b",{className:"wdt-100",children:a("Field Map","bit-integrations")}),e.jsx("button",{onClick:()=>S(t,l,c,h),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Fetch All Fields","bit-integrations")}'`},type:"button",disabled:r,children:"↻"})]}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("Mailup Fields","bit-integrations")})})]}),t==null?void 0:t.field_map.map((d,o)=>e.jsx(R,{i:o,field:d,mailupConf:t,formFields:s,setMailupConf:l,setSnackbar:h},`rp-m-${o+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>$(t.field_map.length,t,l,!1),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:a("Utilities","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(V,{mailupConf:t,setMailupConf:l,formFields:s})]})]})}export{J as M};
