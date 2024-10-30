var M=Object.defineProperty;var g=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var F=(i,c,t)=>c in i?M(i,c,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[c]=t,p=(i,c)=>{for(var t in c||(c={}))R.call(c,t)&&F(i,t,c[t]);if(g)for(var t of g(c))$.call(c,t)&&F(i,t,c[t]);return i};import{j as e,f as q,L as N}from"./main-955.js";import{u as v}from"./bi.326.431.js";import{_ as m,e as I}from"./bi.223.0.js";import{g as K,a as y,b as S,d as w}from"./bi.128.833.js";import{M as V,a as T}from"./bi.864.3.js";const P=(i,c,t)=>{const l=p({},c);l.field_map.splice(i,0,{}),t(p({},l))},E=(i,c,t)=>{const l=p({},c);l.field_map.length>1&&l.field_map.splice(i,1),t(p({},l))},_=(i,c,t,l)=>{const r=p({},t);r.field_map[c][i.target.name]=i.target.value,i.target.value==="custom"&&(r.field_map[c].customValue=""),i.target.value==="customFieldKey"&&(r.field_map[c].customFieldKey=""),l(p({},r))},G=(i,c,t,l,r)=>{const o=p({},t);o.field_map[c][r]=i.target.value,l(p({},o))};function k({field:i,index:c,conf:t,setConf:l,fieldValue:r,fieldLabel:o,className:b}){return e.jsx(V,{onChange:x=>G(x,c,t,l,r),label:m(o,"bit-integrations"),className:b,type:"text",value:i[r],placeholder:m(o,"bit-integrations")})}function z({i,formFields:c,field:t,asanaConf:l,setAsanaConf:r}){var d,n;let o=[];l.actionName==="task"&&(o=l==null?void 0:l.taskFields);const b=o.filter(s=>s.required===!0)||[],h=[...o.filter(s=>s.required===!1)||[],...(l==null?void 0:l.customFields)||[]];if(((d=l==null?void 0:l.field_map)==null?void 0:d.length)===1&&t.asanaFormField===""){const s=p({},l),a=K(s);s.field_map=a,r(s)}const j=q(I),{isPro:u}=j;return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:t.formField||"",onChange:s=>_(s,i,l,r),children:[e.jsx("option",{value:"",children:m("Select Field","bit-integrations")}),e.jsx("optgroup",{label:m("Form Fields","bit-integrations"),children:c==null?void 0:c.map(s=>e.jsx("option",{value:s.name,children:s.label},`ff-rm-${s.name}`))}),e.jsx("option",{value:"custom",children:m("Custom...","bit-integrations")}),e.jsx("optgroup",{label:sprintf(m("General Smart Codes %s","bit-integrations"),u?"":`(${m("Pro","bit-integrations")})`),children:u&&((n=T)==null?void 0:n.map(s=>e.jsx("option",{value:s.name,children:s.label},`ff-rm-${s.name}`)))})]}),t.formField==="custom"&&e.jsx(k,{field:t,index:i,conf:l,setConf:r,fieldValue:"customValue",fieldLabel:"Custom Value",className:"mr-2"}),e.jsxs("select",{className:"btcd-paper-inp",disabled:i<b.length,name:"asanaFormField",value:i<b?b[i].label||"":t.asanaFormField||"",onChange:s=>_(s,i,l,r),children:[e.jsx("option",{value:"",children:m("Select Field","bit-integrations")}),i<b.length?e.jsx("option",{value:b[i].key,children:b[i].label},b[i].key):h.map(({key:s,label:a})=>e.jsx("option",{value:s,children:a},s)),l.actionName==="task"&&e.jsx("option",{value:"customFieldKey",children:m("Custom Field","bit-integrations")})]}),t.asanaFormField==="customFieldKey"&&e.jsx(k,{field:t,index:i,conf:l,setConf:r,fieldValue:"customFieldKey",fieldLabel:"Custom Field Key",className:"ml-2"})]}),i>=b.length&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>P(i,l,r),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>E(i,l,r),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function U({formFields:i,handleInput:c,asanaConf:t,setAsanaConf:l,loading:r,setLoading:o,setSnackbar:b}){var j,u;const x=d=>{const n=p({},t);n.field_map=[{formField:"",asanaFormField:""}];const{name:s}=d.target;d.target.value!==""?(n[s]=d.target.value,d.target.value==="task"&&y(n,l,o)):delete n[s],l(p({},n))},h=(d,n)=>{const s=p({},t);s[n]=d,n==="selectedProject"&&d!==""&&t.actionName==="task"&&(s.selectedSections="",S(s,l,o),w(s,l,o)),l(p({},s))};return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:m("Select Action:","bit-integrations")}),e.jsxs("select",{onChange:x,name:"actionName",value:t.actionName,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:m("Select an action","bit-integrations")}),e.jsx("option",{value:"task",children:m("Create Task","bit-integrations")})]}),(r.Projects||r.Sections)&&e.jsx(N,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),t.actionName==="task"&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"flx",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:m("Select Project:","bit-integrations")}),e.jsx(v,{options:(j=t==null?void 0:t.Projects)==null?void 0:j.map(d=>({label:d.name,value:d.id})),className:"msl-wrp-options dropdown-custom-width",defaultValue:t==null?void 0:t.selectedProject,onChange:d=>h(d,"selectedProject"),disabled:r.Projects,singleSelect:!0}),e.jsx("button",{onClick:()=>y(t,l,o),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${m("Refresh projects","bit-integrations")}'`},type:"button",disabled:r.Projects,children:"↻"})]})]}),t.actionName==="task"&&t.selectedProject&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"flx",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:m("Select Section:","bit-integrations")}),e.jsx(v,{options:(u=t==null?void 0:t.Sections)==null?void 0:u.map(d=>({label:d.name,value:d.id})),className:"msl-wrp-options dropdown-custom-width",defaultValue:t==null?void 0:t.selectedSections,onChange:d=>h(d,"selectedSections"),disabled:r.Sections,singleSelect:!0}),e.jsx("button",{onClick:()=>S(t,l,o),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${m("Refresh Sections","bit-integrations")}'`},type:"button",disabled:r.Sections,children:"↻"})]})]}),r.customFields&&e.jsx(N,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),t.actionName&&e.jsxs("div",{children:[e.jsx("br",{}),e.jsxs("div",{className:"mt-5",children:[e.jsx("b",{className:"wdt-100",children:m("Field Map","bit-integrations")}),e.jsx("button",{onClick:()=>w(t,l,o),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${m("Refresh fields","bit-integrations")}'`},type:"button",disabled:r.Sections,children:"↻"})]}),e.jsx("br",{}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:m("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:m("Asana Fields","bit-integrations")})})]}),t==null?void 0:t.field_map.map((d,n)=>e.jsx(z,{i:n,field:d,asanaConf:t,formFields:i,setAsanaConf:l,setSnackbar:b},`rp-m-${n+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>P(t.field_map.length,t,l),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{})]})]})}export{U as A};
