var $=Object.defineProperty;var N=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var v=(t,i,s)=>i in t?$(t,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[i]=s,r=(t,i)=>{for(var s in i||(i={}))V.call(i,s)&&v(t,s,i[s]);if(N)for(var s of N(i))I.call(i,s)&&v(t,s,i[s]);return t};import{f as R,j as e,r as y,L as w}from"./main-556.js";import{x as _}from"./bi.838.440.js";import{e as M,_ as d}from"./bi.562.0.js";import{a as q,g as T,b as S}from"./bi.833.870.js";import{a as E,h as z}from"./bi.308.3.js";import{T as P}from"./bi.587.710.js";const B=(t,i,s)=>{const l=r({},i);l.field_map.splice(t,0,{}),s(r({},l))},G=(t,i,s)=>{const l=r({},i);l.field_map.length>1&&l.field_map.splice(t,1),s(r({},l))},k=(t,i,s,l)=>{const c=r({},s);c.field_map[i][t.target.name]=t.target.value,t.target.value==="custom"&&(c.field_map[i].customValue=""),l(r({},c))};function D({i:t,formFields:i,field:s,airtableConf:l,setAirtableConf:c}){var g,x,o;const m=((g=l==null?void 0:l.airtableFields)==null?void 0:g.filter(n=>n.required===!0))||[],b=((x=l==null?void 0:l.airtableFields)==null?void 0:x.filter(n=>n.required===!1))||[],F=R(M),{isPro:u}=F;return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:s.formField||"",onChange:n=>k(n,t,l,c),children:[e.jsx("option",{value:"",children:d("Select Field","bit-integrations")}),e.jsx("optgroup",{label:d("Form Fields","bit-integrations"),children:i==null?void 0:i.map(n=>e.jsx("option",{value:n.name,children:n.label},`ff-rm-${n.name}`))}),e.jsx("option",{value:"custom",children:d("Custom...","bit-integrations")}),e.jsx("optgroup",{label:sprintf(d("General Smart Codes %s","bit-integrations"),u?"":`(${d("Pro","bit-integrations")})`),children:u&&((o=E)==null?void 0:o.map(n=>e.jsx("option",{value:n.name,children:n.label},`ff-rm-${n.name}`)))})]}),s.formField==="custom"&&e.jsx(P,{onChange:n=>z(n,t,l,c),label:d("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:s.customValue,placeholder:d("Custom Value","bit-integrations"),formFields:i}),e.jsxs("select",{className:"btcd-paper-inp",disabled:t<m.length,name:"airtableFormField",value:t<m?m[t].label||"":s.airtableFormField||"",onChange:n=>k(n,t,l,c),children:[e.jsx("option",{value:"",children:d("Select Field","bit-integrations")}),t<m.length?e.jsx("option",{value:m[t].key,children:m[t].label},m[t].key):b.map(({key:n,label:j})=>e.jsx("option",{value:n,children:j},n))]})]}),t>=m.length&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>B(t,l,c),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>G(t,l,c),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function X({formFields:t,handleInput:i,airtableConf:s,setAirtableConf:l,loading:c,setLoading:m,setSnackbar:b}){var n,j;const[F,u]=y.useState({name:"",auth_token:""}),[g,x]=y.useState(!1),o=(a,p)=>{const h=r({},s);h[p]=a,p==="selectedBase"?(h.selectedTable="",a!==""&&T(h,l,c,m)):p==="selectedTable"&&a!==""&&S(h,l,c,m,"fetch"),l(r({},h))};return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsxs("div",{className:"flx",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:d("Select Base:","bit-integrations")}),e.jsx(_,{singleSelect:!0,options:(n=s.bases)==null?void 0:n.map(a=>({label:a.name,value:a.id})),className:"msl-wrp-options dropdown-custom-width",defaultValue:s==null?void 0:s.selectedBase,onChange:a=>o(a,"selectedBase")}),e.jsx("button",{onClick:()=>q(s,l,u,x,c,m,"refreshBases"),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${d("Refresh  Bases","bit-integrations")}'`},type:"button",disabled:c.bases,children:"↻"})]}),e.jsx("br",{}),e.jsxs("div",{className:"flx",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:d("Select Table:","bit-integrations")}),e.jsx(_,{singleSelect:!0,options:(j=s==null?void 0:s.tables)==null?void 0:j.map(a=>({label:a.name,value:a.id})),className:"msl-wrp-options dropdown-custom-width",defaultValue:s==null?void 0:s.selectedTable,onChange:a=>o(a,"selectedTable"),disabled:!s.selectedBase||c.tables}),e.jsx("button",{onClick:()=>T(s,l,c,m),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${d("Refresh  Tables","bit-integrations")}'`},type:"button",disabled:c.tables||c.bases||!s.selectedBase,children:"↻"})]}),(c.bases||c.tables)&&e.jsx(w,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),e.jsxs("div",{children:[e.jsx("br",{}),e.jsx("div",{className:"mt-5",children:e.jsxs("b",{className:"wdt-100",children:[d("Field Map","bit-integrations"),c.airtableFields&&s.selectedTable&&e.jsx("button",{onClick:()=>S(s,l,c,m,"refresh"),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${d("Refresh fields","bit-integrations")}'`},type:"button",disabled:c.customFields,children:"↻"})]})}),e.jsx("br",{}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx("br",{}),c.customFields&&e.jsx(w,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:d("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:d("Airtable Fields","bit-integrations")})})]}),c.airtableFields&&s.selectedTable&&e.jsxs("div",{children:[" ",s==null?void 0:s.field_map.map((a,p)=>e.jsx(D,{i:p,field:a,airtableConf:s,formFields:t,setAirtableConf:l,setSnackbar:b},`rp-m-${p+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>B(s.field_map.length,s,l),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{})]})]})]})}export{X as A};
