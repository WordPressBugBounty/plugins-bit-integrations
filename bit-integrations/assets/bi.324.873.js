var _=Object.defineProperty;var N=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var F=(e,s,i)=>s in e?_(e,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[s]=i,m=(e,s)=>{for(var i in s||(s={}))g.call(s,i)&&F(e,i,s[i]);if(N)for(var i of N(s))T.call(s,i)&&F(e,i,s[i]);return e};import{r as y,j as t,f as L,L as M}from"./main-494.js";import"./bi.23.437.js";import{_ as a,e as R}from"./bi.185.0.js";import{a as k}from"./bi.170.9.js";import{b as A}from"./bi.617.11.js";import{a as U}from"./bi.104.3.js";import{T as S}from"./bi.378.675.js";function V({gravitecConf:e,setGravitecConf:s,loading:i,setLoading:l}){var r,n;const[d,o]=y.useState({show:!1,action:()=>{}}),x=(c,j)=>{var h;const u=m({},e);j==="button"&&((h=c.target)!=null&&h.checked?(u.selectedButtonTitle===void 0&&(u.selectedButtonTitle=""),u.selectedButtonURL===void 0&&(u.selectedButtonURL=""),u.actions.button=!0):(o({show:!1}),delete u.actions.button)),o({show:j}),s(u)},p=()=>{o({show:!1})},b=(c,j)=>{s(u=>{const h=m({},u);return h[j]=c,h})};return t.jsxs("div",{className:"pos-rel d-flx flx-wrp",children:[e.actionName==="notification"&&t.jsx(A,{checked:((r=e==null?void 0:e.selectedButtonTitle)==null?void 0:r.length)&&((n=e==null?void 0:e.selectedButtonURL)==null?void 0:n.length)||!1,onChange:c=>x(c,"button"),className:"wdt-200 mt-4 mr-2",value:"button",title:a("Add Button","bit - integrations"),subTitle:a("Add Button")}),t.jsxs(k,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:a("Ok","bit-integrations"),show:d.show==="button",close:p,action:p,title:a("Add Button","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:a("Button Title:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp mt-1",onChange:c=>b(c.target.value,"selectedButtonTitle"),name:"button_title",value:e.selectedButtonTitle,type:"text",placeholder:a("Button Title...","bit-integrations")}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:a("Button URL:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp mt-1",onChange:c=>b(c.target.value,"selectedButtonURL"),name:"button_url",value:e.selectedButtonURL,type:"text",placeholder:a("Button URL...","bit-integrations")})]})]})}const B=(e,s,i)=>{const l=m({},s);l.field_map.splice(e,0,{}),i(m({},l))},I=(e,s,i)=>{const l=m({},s);l.field_map.length>1&&l.field_map.splice(e,1),i(m({},l))},w=(e,s,i,l)=>{const d=m({},i);d.field_map[s][e.target.name]=e.target.value,e.target.value==="custom"&&(d.field_map[s].customValue=""),l(m({},d))},$=(e,s,i,l)=>{var o;const d=m({},i);d.field_map[s].customValue=((o=e==null?void 0:e.target)==null?void 0:o.value)||e,l(m({},d))};function f({i:e,formFields:s,field:i,gravitecConf:l,setGravitecConf:d}){var r;const o=(l==null?void 0:l.notificationFields)&&(l==null?void 0:l.notificationFields.filter(n=>n.required===!0))||[],x=(l==null?void 0:l.notificationFields)&&(l==null?void 0:l.notificationFields.filter(n=>n.required===!1))||[],p=L(R),{isPro:b}=p;return t.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:t.jsxs("div",{className:"pos-rel flx",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:i.formField||"",onChange:n=>w(n,e,l,d),children:[t.jsx("option",{value:"",children:a("Select Field","bit-integrations")}),t.jsx("optgroup",{label:a("Form Fields","bit-integrations"),children:s==null?void 0:s.map(n=>t.jsx("option",{value:n.name,children:n.label},`ff-rm-${n.name}`))}),t.jsx("option",{value:"custom",children:a("Custom...","bit-integrations")}),t.jsx("optgroup",{label:sprintf(a("General Smart Codes %s","bit-integrations"),b?"":`(${a("Pro","bit-integrations")})`),children:b&&((r=U)==null?void 0:r.map(n=>t.jsx("option",{value:n.name,children:n.label},`ff-rm-${n.name}`)))})]}),i.formField==="custom"&&t.jsx(S,{onChange:n=>$(n,e,l,d),label:a("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:i.customValue||"",placeholder:a("Custom Value","bit-integrations"),formFields:s}),t.jsxs("select",{className:"btcd-paper-inp",disabled:e<o.length,name:"gravitecFormField",value:e<o.length?o[e].key||"":i.gravitecFormField||"",onChange:n=>w(n,e,l,d),children:[t.jsx("option",{value:"",children:a("Select Field","bit-integrations")}),e<o.length?t.jsx("option",{value:o[e].key,children:o[e].label},o[e].key):x.map(({key:n,label:c})=>t.jsx("option",{value:n,children:c},n))]})]}),e>=o.length&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>B(e,l,d),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),t.jsx("button",{onClick:()=>I(e,l,d),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:t.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function K({formFields:e,gravitecConf:s,setGravitecConf:i,loading:l,setLoading:d,isLoading:o,setIsLoading:x,setSnackbar:p}){const b=r=>{const n=m({},s),{name:c}=r.target;r.target.value!==""?n[c]=r.target.value:delete n[c],i(n)};return t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("b",{className:"wdt-200 d-in-b",children:a("Select Action:","bit-integrations")}),t.jsxs("select",{onChange:b,name:"actionName",value:s.actionName,className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"",children:a("Select an action","bit-integrations")}),t.jsx("option",{value:"notification","data-action_name":"notification",children:a("Push Notification","bit-integrations")})]}),o&&t.jsx(M,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),s.actionName&&!o&&t.jsxs("div",{children:[t.jsx("br",{}),t.jsx("div",{className:"mt-5",children:t.jsx("b",{className:"wdt-100",children:a("Field Map","bit-integrations")})}),t.jsx("br",{}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:a("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:a("Gravitec Fields","bit-integrations")})})]}),s==null?void 0:s.field_map.map((r,n)=>t.jsx(f,{i:n,field:r,gravitecConf:s,formFields:e,setGravitecConf:i,setSnackbar:p},`rp-m-${n+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>B(s.field_map.length,s,i),className:"icn-btn sh-sm",type:"button",children:"+"})}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:a("Utilities","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsx(V,{gravitecConf:s,setGravitecConf:i,formFields:e,loading:l,setLoading:d})]})]})}export{K as G};
