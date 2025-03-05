var _=Object.defineProperty;var w=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var g=(r,e,l)=>e in r?_(r,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):r[e]=l,p=(r,e)=>{for(var l in e||(e={}))R.call(e,l)&&g(r,l,e[l]);if(w)for(var l of w(e))$.call(e,l)&&g(r,l,e[l]);return r};import{f as H,j as s,L as N}from"./main-270.js";import{x as v}from"./bi.88.440.js";import{e as V,_ as c}from"./bi.340.0.js";import{g as I,a as y,b as k}from"./bi.374.859.js";import{a as M,h as q}from"./bi.155.3.js";import{T}from"./bi.125.697.js";const o=(r,e,l)=>{const t=p({},e);t.field_map.splice(r,0,{}),l(p({},t))},A=(r,e,l)=>{const t=p({},e);t.field_map.length>1&&t.field_map.splice(r,1),l(p({},t))},F=(r,e,l,t)=>{const d=p({},l);d.field_map[e][r.target.name]=r.target.value,r.target.value==="custom"&&(d.field_map[e].customValue=""),t(p({},d))};function P({i:r,formFields:e,field:l,zohoSheetConf:t,setZohoSheetConf:d}){var a,n,b;const m=((a=t==null?void 0:t.workSheetHeaders)==null?void 0:a.filter(i=>i.required===!0))||[],j=((n=t==null?void 0:t.workSheetHeaders)==null?void 0:n.filter(i=>i.required===!1))||[],u=H(V),{isPro:x}=u;return s.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:s.jsxs("div",{className:"pos-rel flx",children:[s.jsxs("div",{className:"flx integ-fld-wrp",children:[s.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:l.formField||"",onChange:i=>F(i,r,t,d),children:[s.jsx("option",{value:"",children:c("Select Field","bit-integrations")}),s.jsx("optgroup",{label:c("Form Fields","bit-integrations"),children:e==null?void 0:e.map(i=>s.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`))}),s.jsx("option",{value:"custom",children:c("Custom...","bit-integrations")}),s.jsx("optgroup",{label:sprintf(c("General Smart Codes %s","bit-integrations"),x?"":`(${c("Pro","bit-integrations")})`),children:x&&((b=M)==null?void 0:b.map(i=>s.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`)))})]}),l.formField==="custom"&&s.jsx(T,{onChange:i=>q(i,r,t,d),label:c("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:l.customValue,placeholder:c("Custom Value","bit-integrations"),formFields:e}),s.jsxs("select",{className:"btcd-paper-inp",disabled:r<m.length,name:"zohoSheetFormField",value:r<m?m[r].label||"":l.zohoSheetFormField||"",onChange:i=>F(i,r,t,d),children:[s.jsx("option",{value:"",children:c("Select Field","bit-integrations")}),r<m.length?s.jsx("option",{value:m[r].key,children:m[r].label},m[r].key):j.map(({key:i,label:W})=>s.jsx("option",{value:i,children:W},i))]})]}),r>=m.length&&s.jsxs(s.Fragment,{children:[s.jsx("button",{onClick:()=>o(r,t,d),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),s.jsx("button",{onClick:()=>A(r,t,d),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:s.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function Q({formFields:r,zohoSheetConf:e,setZohoSheetConf:l,loading:t,setLoading:d}){var u,x;const m=(a,n)=>{const b=p({},e);b[n]=a,n==="selectedWorkbook"?(b.selectedWorksheet="",a!==""&&y(b,l,t,d)):n==="selectedWorksheet"&&a!==""&&k(b,l,t,d),l(p({},b))},j=a=>{const n=p({},e),{name:b}=a.target;a.target.value!==""?(n[b]=a.target.value,k(n,l,t,d)):delete n[b],l(p({},n))};return s.jsxs(s.Fragment,{children:[s.jsx("br",{}),s.jsxs("div",{className:"flx",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:c("Select workbook:","bit-integrations")}),s.jsx(v,{singleSelect:!0,options:(u=e.workbooks)==null?void 0:u.map(a=>({label:a.name,value:a.id})),className:"msl-wrp-options dropdown-custom-width",defaultValue:e==null?void 0:e.selectedWorkbook,onChange:a=>m(a,"selectedWorkbook")}),s.jsx("button",{onClick:()=>I(e,l,t,d),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${c("Refresh  workbooks","bit-integrations")}'`},type:"button",disabled:t.workbooks,children:"↻"})]}),s.jsx("br",{}),s.jsxs("div",{className:"flx",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:c("Select worksheet:","bit-integrations")}),s.jsx(v,{singleSelect:!0,options:(x=e==null?void 0:e.worksheets)==null?void 0:x.map(a=>({label:a.name,value:a.id})),className:"msl-wrp-options dropdown-custom-width",defaultValue:e==null?void 0:e.selectedWorksheet,onChange:a=>m(a,"selectedWorksheet"),disabled:!e.selectedWorkbook||t.worksheets}),s.jsx("button",{onClick:()=>y(e,l,t,d),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${c("Refresh  worksheets","bit-integrations")}'`},type:"button",disabled:t.worksheets||t.workbooks||!e.selectedWorkbook,children:"↻"})]}),s.jsx("br",{}),s.jsxs("div",{className:"flx",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:c("Header Row:","bit-integrations")}),s.jsx("input",{type:"number",min:"1",className:"btcd-paper-inp w-5",placeholder:"Header Row",onChange:a=>j(a),value:e.headerRow,name:"headerRow",disabled:t.worksheets||t.workbooks||!e.selectedWorkbook||!e.selectedWorksheet}),s.jsx("button",{onClick:()=>k(e,l,t,d),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${c("Refresh  worksheet headers","bit-integrations")}'`},type:"button",disabled:t.worksheets||t.workbooks||!e.selectedWorkbook||!e.selectedWorksheet||t.header,children:"↻"})]}),(t.workbooks||t.worksheets)&&s.jsx(N,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),s.jsxs("div",{children:[s.jsx("br",{}),s.jsx("div",{className:"mt-5",children:s.jsx("b",{className:"wdt-100",children:c("Field Map","bit-integrations")})}),s.jsx("br",{}),s.jsx("div",{className:"btcd-hr mt-1"}),s.jsx("br",{}),t.header&&s.jsx(N,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),s.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:c("Form Fields","bit-integrations")})}),s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:c("ZohoSheet Fields","bit-integrations")})})]}),t.workSheetHeaders&&e.selectedWorksheet&&s.jsxs("div",{children:[" ",e==null?void 0:e.field_map.map((a,n)=>s.jsx(P,{i:n,field:a,zohoSheetConf:e,formFields:r,setZohoSheetConf:l},`rp-m-${n+9}`)),s.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:s.jsx("button",{onClick:()=>o(e.field_map.length,e,l),className:"icn-btn sh-sm",type:"button",children:"+"})}),s.jsx("br",{}),s.jsx("br",{})]})]})]})}export{Q as Z};
