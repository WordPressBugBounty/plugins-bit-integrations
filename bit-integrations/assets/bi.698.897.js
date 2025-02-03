var k=Object.defineProperty;var v=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var F=(e,s,i)=>s in e?k(e,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[s]=i,u=(e,s)=>{for(var i in s||(s={}))S.call(s,i)&&F(e,i,s[i]);if(v)for(var i of v(s))$.call(s,i)&&F(e,i,s[i]);return e};import{r as P,j as t,L as N,f as R}from"./main-814.js";import{x as j,u as V}from"./bi.8.440.js";import{_ as p,e as I}from"./bi.317.0.js";import{a as O}from"./bi.765.9.js";import{b as q}from"./bi.672.11.js";import{g as w,a as y,b as A,s as _}from"./bi.178.896.js";import{M as E,a as K}from"./bi.59.3.js";const T=(e,s,i)=>{const c=u({},s);c.field_map.splice(e,0,{}),i(u({},c))},B=(e,s,i)=>{const c=u({},s);c.field_map.length>1&&c.field_map.splice(e,1),i(u({},c))},M=(e,s,i,c)=>{const d=u({},i);d.field_map[s][e.target.name]=e.target.value,e.target.value==="custom"&&(d.field_map[s].customValue=""),e.target.value==="customFieldKey"&&(d.field_map[s].customFieldKey=""),c(u({},d))},G=(e,s,i,c,d)=>{const o=u({},i);o.field_map[s][d]=e.target.value,c(u({},o))};function H({salesflareConf:e,setSalesflareConf:s,loading:i,setLoading:c}){var r;const[d,o]=P.useState({show:!1,action:()=>{}}),b=(n,m)=>{var l;const a=u({},e);m==="tags"&&((l=n.target)!=null&&l.checked?(a.actions.tags=!0,w(e,s,c)):(o({show:!1}),delete a.actions.tags)),o({show:m}),s(u({},a))},h=()=>{o({show:!1})},x=(n,m)=>{const a=u({},e);a[m]=n,s(u({},a))};return t.jsxs("div",{className:"pos-rel d-flx flx-wrp",children:[e.actionName&&t.jsx(q,{checked:(e==null?void 0:e.selectedTags)||!1,onChange:n=>b(n,"tags"),className:"wdt-200 mt-4 mr-2",value:"tags",title:p("Add Tags","bit-integrations"),subTitle:p("Add Tags","bit-integrations")}),t.jsxs(O,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:p("Ok","bit-integrations"),show:d.show==="tags",close:h,action:h,title:p("Add Tags","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:p("Select tags","bit-integrations")}),i.tags?t.jsx(N,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsx(j,{options:(r=e==null?void 0:e.tags)==null?void 0:r.map(n=>({label:n,value:n})),className:"msl-wrp-options",defaultValue:e==null?void 0:e.selectedTags,onChange:n=>x(n,"selectedTags")}),t.jsx("button",{onClick:()=>w(e,s,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${p("Refresh Tags","bit-integrations")}'`},type:"button",children:"↻"})]})]})]})}function U({field:e,index:s,conf:i,setConf:c,fieldValue:d,fieldLabel:o,className:b}){return t.jsx(E,{onChange:h=>G(h,s,i,c,d),label:p(o,"bit-integrations"),className:b,type:"text",value:e[d],placeholder:p(o,"bit-integrations")})}function z({i:e,formFields:s,field:i,salesflareConf:c,setSalesflareConf:d}){var r;const o=(c==null?void 0:c.salesflareAllFields)&&(c==null?void 0:c.salesflareAllFields.filter(n=>n.required===!0))||[],b=(c==null?void 0:c.salesflareAllFields)&&(c==null?void 0:c.salesflareAllFields.filter(n=>n.required===!1))||[],h=R(I),{isPro:x}=h;return t.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:t.jsxs("div",{className:"pos-rel flx",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:i.formField||"",onChange:n=>M(n,e,c,d),children:[t.jsx("option",{value:"",children:p("Select Field","bit-integrations")}),t.jsx("optgroup",{label:p("Form Fields","bit-integrations"),children:s==null?void 0:s.map(n=>t.jsx("option",{value:n.name,children:n.label},`ff-rm-${n.name}`))}),t.jsx("option",{value:"custom",children:p("Custom...","bit-integrations")}),t.jsx("optgroup",{label:sprintf(p("General Smart Codes %s","bit-integrations"),x?"":`(${p("Pro","bit-integrations")})`),children:x&&((r=K)==null?void 0:r.map(n=>t.jsx("option",{value:n.name,children:n.label},`ff-rm-${n.name}`)))})]}),i.formField==="custom"&&t.jsx(U,{field:i,index:e,conf:c,setConf:d,fieldValue:"customValue",fieldLabel:"Custom Value",className:"mr-2"}),t.jsxs("select",{className:"btcd-paper-inp",disabled:e<o.length,name:"salesflareFormField",value:e<o.length?o[e].key||"":i.salesflareFormField||"",onChange:n=>M(n,e,c,d),children:[t.jsx("option",{value:"",children:p("Select Field","bit-integrations")}),e<o.length?t.jsx("option",{value:o[e].key,children:o[e].label},o[e].key):b.map(({key:n,label:m})=>t.jsx("option",{value:n,children:m},n))]})]}),e>=o.length&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>T(e,c,d),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),t.jsx("button",{onClick:()=>B(e,c,d),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:t.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function C({formFields:e,handleInput:s,salesflareConf:i,setSalesflareConf:c,loading:d,setLoading:o,isLoading:b,setIsLoading:h,setSnackbar:x}){const r=m=>{c(a=>V(a,l=>{const{name:g}=m.target;m.target.value!==""?(l.actionName=m.target.value,l.actionName==="accounts"?l.salesflareFields=l.accountFields:l.actionName==="contacts"?l.salesflareFields=l.contactFields:l.actionName==="opportunities"&&(l.salesflareFields=l.opportunitiyFields,y(l,c,d,o),A(l,c,d,o)),_(l,c,h,x)):delete l[g]}))},n=(m,a)=>{const l=u({},i);l[a]=m,a==="selectedPipeline"&&(i==null||i.pipelines.forEach(g=>{g.id.toString()===m&&(l.stages=g.stages)})),c(u({},l))};return t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("b",{className:"wdt-200 d-in-b",children:p("Select Action:","bit-integrations")}),t.jsxs("select",{onChange:r,name:"actionName",value:i.actionName,className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"",children:p("Select an action","bit-integrations")}),t.jsx("option",{value:"accounts","data-action_name":"accounts",children:p("Create Account","bit-integrations")}),t.jsx("option",{value:"contacts","data-action_name":"contacts",children:p("Create Contact","bit-integrations")}),t.jsx("option",{value:"opportunities","data-action_name":"opportunities",children:p("Create Opportunity","bit-integrations")})]}),t.jsx("br",{}),(d.account||d.pipeline)&&t.jsx(N,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),i.actionName==="opportunities"&&(i==null?void 0:i.accounts)&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsxs("div",{className:"flx",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:p("Select Account:","bit-integrations")}),t.jsx(j,{options:i==null?void 0:i.accounts.map(m=>({label:m.name,value:m.id.toString()})),className:"msl-wrp-options dropdown-custom-width",defaultValue:i==null?void 0:i.selectedAccount,onChange:m=>n(m,"selectedAccount"),disabled:d.account,singleSelect:!0,closeOnSelect:!0}),t.jsx("button",{onClick:()=>y(i,c,d,o),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${p("Refresh Stages","bit-integrations")}'`},type:"button",disabled:d.account,children:"↻"})]})]}),i.actionName==="opportunities"&&(i==null?void 0:i.pipelines)&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsxs("div",{className:"flx",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:p("Select Pipeline:","bit-integrations")}),t.jsx(j,{options:i==null?void 0:i.pipelines.map(m=>({label:m.name,value:m.id.toString()})),className:"msl-wrp-options dropdown-custom-width",defaultValue:i==null?void 0:i.selectedPipeline,onChange:m=>n(m,"selectedPipeline"),disabled:d.pipeline,singleSelect:!0,closeOnSelect:!0}),t.jsx("button",{onClick:()=>A(i,c,d,o),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${p("Refresh pipelines","bit-integrations")}'`},type:"button",disabled:d.pipeline,children:"↻"})]})]}),i.actionName==="opportunities"&&(i==null?void 0:i.stages)&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsxs("div",{className:"flx",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:p("Select Stage:","bit-integrations")}),t.jsx(j,{options:i==null?void 0:i.stages.map(m=>({label:m.name,value:m.id.toString()})),className:"msl-wrp-options dropdown-custom-width",defaultValue:i==null?void 0:i.selectedStage,onChange:m=>n(m,"selectedStage"),disabled:d.stage,singleSelect:!0,closeOnSelect:!0})]})]}),b&&t.jsx(N,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),i.actionName&&!b&&t.jsxs("div",{children:[t.jsx("br",{}),t.jsxs("div",{className:"mt-5",children:[t.jsx("b",{className:"wdt-100",children:p("Field Map","bit-integrations")}),t.jsx("button",{onClick:()=>_(i,c,h,x),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${p("Refresh custom fields","bit-integrations")}'`},type:"button",disabled:b,children:"↻"})]}),t.jsx("br",{}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:p("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:p("Salesflare Fields","bit-integrations")})})]}),i==null?void 0:i.field_map.map((m,a)=>t.jsx(z,{i:a,field:m,salesflareConf:i,formFields:e,setSalesflareConf:c,setSnackbar:x},`rp-m-${a+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>T(i.field_map.length,i,c),className:"icn-btn sh-sm",type:"button",children:"+"})}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:p("Utilities","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsx(H,{salesflareConf:i,setSalesflareConf:c,formFields:e,loading:d,setLoading:o})]})]})}export{C as S};
