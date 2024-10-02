var _=Object.defineProperty;var w=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var g=(a,e,l)=>e in a?_(a,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[e]=l,p=(a,e)=>{for(var l in e||(e={}))R.call(e,l)&&g(a,l,e[l]);if(w)for(var l of w(e))$.call(e,l)&&g(a,l,e[l]);return a};import{i as H,j as s,L as N}from"./main-650.js";import{j as V,_ as c,k as I,l as M,n as v}from"./bi.541.15.js";import{g as q,a as y,b as k}from"./bi.491.819.js";import{T}from"./bi.619.660.js";const W=(a,e,l)=>{const t=p({},e);t.field_map.splice(a,0,{}),l(p({},t))},A=(a,e,l)=>{const t=p({},e);t.field_map.length>1&&t.field_map.splice(a,1),l(p({},t))},F=(a,e,l,t)=>{const d=p({},l);d.field_map[e][a.target.name]=a.target.value,a.target.value==="custom"&&(d.field_map[e].customValue=""),t(p({},d))};function P({i:a,formFields:e,field:l,zohoSheetConf:t,setZohoSheetConf:d}){var r,n,b;const m=((r=t==null?void 0:t.workSheetHeaders)==null?void 0:r.filter(i=>i.required===!0))||[],j=((n=t==null?void 0:t.workSheetHeaders)==null?void 0:n.filter(i=>i.required===!1))||[],u=H(V),{isPro:x}=u;return s.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:s.jsxs("div",{className:"pos-rel flx",children:[s.jsxs("div",{className:"flx integ-fld-wrp",children:[s.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:l.formField||"",onChange:i=>F(i,a,t,d),children:[s.jsx("option",{value:"",children:c("Select Field","bit-integrations")}),s.jsx("optgroup",{label:c("Form Fields","bit-integrations"),children:e==null?void 0:e.map(i=>s.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`))}),s.jsx("option",{value:"custom",children:c("Custom...","bit-integrations")}),s.jsx("optgroup",{label:sprintf(c("General Smart Codes %s","bit-integrations"),x?"":`(${c("Pro","bit-integrations")})`),children:x&&((b=I)==null?void 0:b.map(i=>s.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`)))})]}),l.formField==="custom"&&s.jsx(T,{onChange:i=>M(i,a,t,d),label:c("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:l.customValue,placeholder:c("Custom Value","bit-integrations"),formFields:e}),s.jsxs("select",{className:"btcd-paper-inp",disabled:a<m.length,name:"zohoSheetFormField",value:a<m?m[a].label||"":l.zohoSheetFormField||"",onChange:i=>F(i,a,t,d),children:[s.jsx("option",{value:"",children:c("Select Field","bit-integrations")}),a<m.length?s.jsx("option",{value:m[a].key,children:m[a].label},m[a].key):j.map(({key:i,label:o})=>s.jsx("option",{value:i,children:o},i))]})]}),a>=m.length&&s.jsxs(s.Fragment,{children:[s.jsx("button",{onClick:()=>W(a,t,d),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),s.jsx("button",{onClick:()=>A(a,t,d),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:s.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function K({formFields:a,zohoSheetConf:e,setZohoSheetConf:l,loading:t,setLoading:d}){var u,x;const m=(r,n)=>{const b=p({},e);b[n]=r,n==="selectedWorkbook"?(b.selectedWorksheet="",r!==""&&y(b,l,t,d)):n==="selectedWorksheet"&&r!==""&&k(b,l,t,d),l(p({},b))},j=r=>{const n=p({},e),{name:b}=r.target;r.target.value!==""?(n[b]=r.target.value,k(n,l,t,d)):delete n[b],l(p({},n))};return s.jsxs(s.Fragment,{children:[s.jsx("br",{}),s.jsxs("div",{className:"flx",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:c("Select workbook:","bit-integrations")}),s.jsx(v,{singleSelect:!0,options:(u=e.workbooks)==null?void 0:u.map(r=>({label:r.name,value:r.id})),className:"msl-wrp-options dropdown-custom-width",defaultValue:e==null?void 0:e.selectedWorkbook,onChange:r=>m(r,"selectedWorkbook")}),s.jsx("button",{onClick:()=>q(e,l,t,d),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${c("Refresh  workbooks","bit-integrations")}'`},type:"button",disabled:t.workbooks,children:"↻"})]}),s.jsx("br",{}),s.jsxs("div",{className:"flx",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:c("Select worksheet:","bit-integrations")}),s.jsx(v,{singleSelect:!0,options:(x=e==null?void 0:e.worksheets)==null?void 0:x.map(r=>({label:r.name,value:r.id})),className:"msl-wrp-options dropdown-custom-width",defaultValue:e==null?void 0:e.selectedWorksheet,onChange:r=>m(r,"selectedWorksheet"),disabled:!e.selectedWorkbook||t.worksheets}),s.jsx("button",{onClick:()=>y(e,l,t,d),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${c("Refresh  worksheets","bit-integrations")}'`},type:"button",disabled:t.worksheets||t.workbooks||!e.selectedWorkbook,children:"↻"})]}),s.jsx("br",{}),s.jsxs("div",{className:"flx",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:c("Header Row:","bit-integrations")}),s.jsx("input",{type:"number",min:"1",className:"btcd-paper-inp w-5",placeholder:"Header Row",onChange:r=>j(r),value:e.headerRow,name:"headerRow",disabled:t.worksheets||t.workbooks||!e.selectedWorkbook||!e.selectedWorksheet}),s.jsx("button",{onClick:()=>k(e,l,t,d),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${c("Refresh  worksheet headers","bit-integrations")}'`},type:"button",disabled:t.worksheets||t.workbooks||!e.selectedWorkbook||!e.selectedWorksheet||t.header,children:"↻"})]}),(t.workbooks||t.worksheets)&&s.jsx(N,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),s.jsxs("div",{children:[s.jsx("br",{}),s.jsx("div",{className:"mt-5",children:s.jsx("b",{className:"wdt-100",children:c("Field Map","bit-integrations")})}),s.jsx("br",{}),s.jsx("div",{className:"btcd-hr mt-1"}),s.jsx("br",{}),t.header&&s.jsx(N,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),s.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:c("Form Fields","bit-integrations")})}),s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:c("ZohoSheet Fields","bit-integrations")})})]}),t.workSheetHeaders&&e.selectedWorksheet&&s.jsxs("div",{children:[" ",e==null?void 0:e.field_map.map((r,n)=>s.jsx(P,{i:n,field:r,zohoSheetConf:e,formFields:a,setZohoSheetConf:l},`rp-m-${n+9}`)),s.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:s.jsx("button",{onClick:()=>W(e.field_map.length,e,l),className:"icn-btn sh-sm",type:"button",children:"+"})}),s.jsx("br",{}),s.jsx("br",{})]})]})]})}export{K as Z};