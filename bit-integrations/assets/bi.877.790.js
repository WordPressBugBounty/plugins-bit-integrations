var u=Object.defineProperty;var m=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var j=(s,i,t)=>i in s?u(s,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[i]=t,b=(s,i)=>{for(var t in i||(i={}))v.call(i,t)&&j(s,t,i[t]);if(m)for(var t of m(i))N.call(i,t)&&j(s,t,i[t]);return s};import{j as e,i as F,L as y}from"./main-29.js";import{m as w,_ as n,j as _,k,l as I,G as $,o as A}from"./bi.860.15.js";import{f as G,a as O,b as S}from"./bi.493.791.js";import{T}from"./bi.831.661.js";function V({mailupConf:s,setMailupConf:i}){var l;const t=c=>{const r=b({},s);c.target.checked?r.actions.doubleOptIn=!0:delete r.actions.doubleOptIn,i(b({},r))};return e.jsx("div",{className:"pos-rel d-flx w-8",children:e.jsx(w,{checked:((l=s.actions)==null?void 0:l.doubleOptIn)||!1,onChange:c=>t(c),className:"wdt-200 mt-4 mr-2",value:"doubleOptIn",title:n("Double Opt-in","bit-integrations"),subTitle:n("Add Double Opt-in","bit-integrations")})})}const q=(s,i,t)=>{const l=b({},i);l.field_map.splice(s,0,{}),t(b({},l))},L=(s,i,t)=>{const l=b({},i);l.field_map.length>1&&l.field_map.splice(s,1),t(b({},l))},g=(s,i,t,l)=>{const c=b({},t);c.field_map[i][s.target.name]=s.target.value,s.target.value==="custom"&&(c.field_map[i].customValue=""),l(b({},c))};function R({i:s,formFields:i,field:t,mailupConf:l,setMailupConf:c}){var x;const r=(l==null?void 0:l.staticFields.filter(a=>a.required===!0))||[],h=(l==null?void 0:l.staticFields.filter(a=>a.required===!1))||[],d=F(_),{isPro:o}=d;return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:t.formField||"",onChange:a=>g(a,s,l,c),children:[e.jsx("option",{value:"",children:n("Select Field","bit-integrations")}),e.jsx("optgroup",{label:n("Form Fields","bit-integrations"),children:i==null?void 0:i.map(a=>e.jsx("option",{value:a.name,children:a.label},`ff-rm-${a.name}`))}),e.jsx("option",{value:"custom",children:n("Custom...","bit-integrations")}),e.jsx("optgroup",{label:sprintf(n("General Smart Codes %s","bit-integrations"),o?"":`(${n("Pro","bit-integrations")})`),children:o&&((x=k)==null?void 0:x.map(a=>e.jsx("option",{value:a.name,children:a.label},`ff-rm-${a.name}`)))})]}),t.formField==="custom"&&e.jsx(T,{onChange:a=>I(a,s,l,c),label:n("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:t.customValue,placeholder:n("Custom Value","bit-integrations"),formFields:i}),e.jsxs("select",{className:"btcd-paper-inp",disabled:s<r.length,name:"mailupFormField",value:s<r.length?r[s].key||"":t.mailupFormField||"",onChange:a=>g(a,s,l,c),children:[e.jsx("option",{value:"",children:n("Select Field","bit-integrations")}),s<r.length?e.jsx("option",{value:r[s].key,children:r[s].label},r[s].key):h.map(({key:a,label:p})=>e.jsx("option",{value:a,children:p},a))]})]}),s>=r.length&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>q(s,l,c),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>L(s,l,c),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function E({formFields:s,handleInput:i,mailupConf:t,setMailupConf:l,isLoading:c,setIsLoading:r,setSnackbar:h}){return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:n("Select List:","bit-integrations")}),e.jsxs("select",{onChange:i,name:"listId",value:t.listId,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:n("Select List","bit-integrations")}),(t==null?void 0:t.allList)&&t.allList.map(({idList:d,name:o})=>e.jsx("option",{value:d,children:o},d))]}),e.jsx("button",{onClick:()=>G(t,l,r,h),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${n("Fetch All List","bit-integrations")}'`},type:"button",disabled:c,children:"↻"}),e.jsx("br",{}),c&&e.jsx(y,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),(t==null?void 0:t.listId)&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsxs("b",{className:"wdt-200 d-in-b",children:[n("Groups:","bit-integrations"),e.jsx($,{width:250,icnSize:17,className:"ml-2",children:e.jsxs("div",{className:"txt-body",children:[n("If you want to assign a subscriber to a group then select a group otherwise leave it blank","bit-integrations"),e.jsx("br",{})]})})]}),e.jsxs("select",{onChange:i,name:"groupId",value:t.groupId,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:n("Select group","bit-integrations")}),(t==null?void 0:t.allGroup)&&t.allGroup.map(({idGroup:d,name:o})=>e.jsx("option",{value:d,children:o},d))]}),e.jsx("button",{onClick:()=>O(t,l,r,h),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${n("Fetch All Groups","bit-integrations")}'`},type:"button",disabled:c,children:"↻"}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"mt-5",children:[e.jsx("b",{className:"wdt-100",children:n("Field Map","bit-integrations")}),e.jsx("button",{onClick:()=>S(t,l,r,h),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${n("Fetch All Fields","bit-integrations")}'`},type:"button",disabled:c,children:"↻"})]}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:n("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:n("Mailup Fields","bit-integrations")})})]}),t==null?void 0:t.field_map.map((d,o)=>e.jsx(R,{i:o,field:d,mailupConf:t,formFields:s,setMailupConf:l,setSnackbar:h},`rp-m-${o+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>A(t.field_map.length,t,l,!1),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:n("Utilities","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(V,{mailupConf:t,setMailupConf:l,formFields:s})]})]})}export{E as M};
