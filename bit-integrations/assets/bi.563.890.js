var N=Object.defineProperty;var h=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var j=(e,t,i)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,o=(e,t)=>{for(var i in t||(t={}))v.call(t,i)&&j(e,i,t[i]);if(h)for(var i of h(t))_.call(t,i)&&j(e,i,t[i]);return e};import{j as l,f as w,L as $}from"./main-263.js";import{u as k}from"./bi.361.434.js";import{_ as c,e as M}from"./bi.924.0.js";import{g as R,a as T}from"./bi.453.889.js";import{M as q,a as V}from"./bi.317.3.js";const F=(e,t,i)=>{const a=o({},t);a.field_map.splice(e,0,{}),i(o({},a))},S=(e,t,i)=>{const a=o({},t);a.field_map.length>1&&a.field_map.splice(e,1),i(o({},a))},g=(e,t,i,a)=>{const s=o({},i);s.field_map[t][e.target.name]=e.target.value,e.target.value==="custom"&&(s.field_map[t].customValue=""),a(o({},s))},A=(e,t,i,a,s)=>{const r=o({},i);r.field_map[t][s]=e.target.value,a(o({},r))};function L({field:e,index:t,conf:i,setConf:a,fieldValue:s,fieldLabel:r,className:b}){return l.jsx(q,{onChange:p=>A(p,t,i,a,s),label:c(r,"bit-integrations"),className:b,type:"text",value:e[s],placeholder:c(r,"bit-integrations")})}function P({i:e,formFields:t,field:i,systemeIOConf:a,setSystemeIOConf:s}){var d;const r=(a==null?void 0:a.systemeIOFields)&&a.systemeIOFields.filter(n=>n.required===!0)||[],b=(a==null?void 0:a.systemeIOFields)&&a.systemeIOFields.filter(n=>n.required===!1)||[],p=w(M),{isPro:m}=p;return l.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:l.jsxs("div",{className:"pos-rel flx",children:[l.jsxs("div",{className:"flx integ-fld-wrp",children:[l.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:i.formField||"",onChange:n=>g(n,e,a,s),children:[l.jsx("option",{value:"",children:c("Select Field","bit-integrations")}),l.jsx("optgroup",{label:c("Form Fields","bit-integrations"),children:t==null?void 0:t.map(n=>l.jsx("option",{value:n.name,children:n.label},`ff-rm-${n.name}`))}),l.jsx("option",{value:"custom",children:c("Custom...","bit-integrations")}),l.jsx("optgroup",{label:sprintf(c("General Smart Codes %s","bit-integrations"),m?"":`(${c("Pro","bit-integrations")})`),children:m&&((d=V)==null?void 0:d.map(n=>l.jsx("option",{value:n.name,children:n.label},`ff-rm-${n.name}`)))})]}),i.formField==="custom"&&l.jsx(L,{field:i,index:e,conf:a,setConf:s,fieldValue:"customValue",fieldLabel:"Custom Value",className:"mr-2"}),l.jsxs("select",{className:"btcd-paper-inp",disabled:e<r.length,name:"systemeIOFormField",value:e<r.length?r[e].key||"":i.systemeIOFormField||"",onChange:n=>g(n,e,a,s),children:[l.jsx("option",{value:"",children:c("Select Field","bit-integrations")}),e<r.length?l.jsx("option",{value:r[e].key,children:r[e].label},r[e].key):b.map(({key:n,label:x})=>l.jsx("option",{value:n,children:x},n))]})]}),e>=r.length&&l.jsxs(l.Fragment,{children:[l.jsx("button",{onClick:()=>F(e,a,s),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),l.jsx("button",{onClick:()=>S(e,a,s),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:l.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function H({formFields:e,systemeIOConf:t,setSystemeIOConf:i,loading:a,setLoading:s,isLoading:r,setIsLoading:b,setSnackbar:p}){const m=(d,n)=>{i(x=>{const u=o({},x);return u[n]=d,u})};return l.jsxs(l.Fragment,{children:[(r||a.tag||a.session||a.fields)&&l.jsx($,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),t.actionName&&!a.tag&&!a.fields&&l.jsxs(l.Fragment,{children:[l.jsx("br",{}),l.jsx("br",{}),l.jsxs("div",{className:"flx",children:[l.jsx("b",{className:"wdt-200 d-in-b",children:c("Select tag:","bit-integrations")}),l.jsx(k,{options:(t==null?void 0:t.tags)&&t.tags.map(d=>({label:d.name,value:`${d.id}`})),className:"msl-wrp-options dropdown-custom-width",defaultValue:t==null?void 0:t.selectedTag,onChange:d=>m(d,"selectedTag"),singleSelect:!0,closeOnSelect:!0}),l.jsx("button",{onClick:()=>R(t,i,s),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${c("Refresh Tags","bit-integrations")}'`},type:"button",disabled:a.tag,children:"↻"})]})]}),t.actionName&&!r&&l.jsxs("div",{children:[l.jsx("br",{}),l.jsxs("div",{className:"mt-5",children:[l.jsx("b",{className:"wdt-100",children:c("Field Map","bit-integrations")}),l.jsx("button",{onClick:()=>T(t,i,s),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${c("Refresh Contact Fields","bit-integrations")}'`},type:"button",disabled:a.fields,children:"↻"})]}),l.jsx("br",{}),l.jsx("div",{className:"btcd-hr mt-1"}),l.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[l.jsx("div",{className:"txt-dp",children:l.jsx("b",{children:c("Form Fields","bit-integrations")})}),l.jsx("div",{className:"txt-dp",children:l.jsx("b",{children:c("SystemeIO Fields","bit-integrations")})})]}),t==null?void 0:t.field_map.map((d,n)=>l.jsx(P,{i:n,field:d,systemeIOConf:t,formFields:e,setSystemeIOConf:i,setSnackbar:p},`rp-m-${n+9}`)),l.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:l.jsx("button",{onClick:()=>F(t.field_map.length,t,i),className:"icn-btn sh-sm",type:"button",children:"+"})}),l.jsx("br",{}),l.jsx("br",{})]})]})}export{H as S};