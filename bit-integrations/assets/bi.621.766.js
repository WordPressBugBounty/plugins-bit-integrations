var o=Object.defineProperty;var b=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var N=(a,l,s)=>l in a?o(a,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[l]=s,d=(a,l)=>{for(var s in l||(l={}))w.call(l,s)&&N(a,s,l[s]);if(b)for(var s of b(l))k.call(l,s)&&N(a,s,l[s]);return a};import{f as S,j as e,L as F}from"./main-34.js";import{e as R,_ as r}from"./bi.671.0.js";import{a as V,h as L}from"./bi.633.3.js";import"./bi.188.437.js";import{T as M}from"./bi.623.673.js";import{b as T}from"./bi.22.11.js";import{g as $,V as u}from"./bi.903.765.js";const y=(a,l,s)=>{const i=d({},l);i.field_map.splice(a,0,{}),s(d({},i))},q=(a,l,s)=>{const i=d({},l);i.field_map.length>1&&i.field_map.splice(a,1),s(d({},i))},_=(a,l,s,i)=>{const c=d({},s);c.field_map[l][a.target.name]=a.target.value,a.target.value==="custom"&&(c.field_map[l].customValue=""),i(d({},c))};function I({i:a,formFields:l,field:s,vboutConf:i,setVboutConf:c}){var h;const n=(i==null?void 0:i.VboutFields.filter(t=>t.required===!0))||[],p=(i==null?void 0:i.VboutFields.filter(t=>t.required===!1))||[],j=S(R),{isPro:x}=j;return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:s.formField||"",onChange:t=>_(t,a,i,c),children:[e.jsx("option",{value:"",children:r("Select Field","bit-integrations")}),e.jsx("optgroup",{label:r("Form Fields","bit-integrations"),children:l==null?void 0:l.map(t=>e.jsx("option",{value:t.name,children:t.label},`ff-rm-${t.name}`))}),e.jsx("option",{value:"custom",children:r("Custom...","bit-integrations")}),e.jsx("optgroup",{label:sprintf(r("General Smart Codes %s","bit-integrations"),x?"":`(${r("Pro","bit-integrations")})`),children:x&&((h=V)==null?void 0:h.map(t=>e.jsx("option",{value:t.name,children:t.label},`ff-rm-${t.name}`)))})]}),s.formField==="custom"&&e.jsx(M,{onChange:t=>L(t,a,i,c),label:r("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:s.customValue,placeholder:r("Custom Value","bit-integrations"),formFields:l}),e.jsxs("select",{className:"btcd-paper-inp",disabled:a<n.length,name:"VboutFormField",value:a<n?n[a].label||"":s.VboutFormField||"",onChange:t=>_(t,a,i,c),children:[e.jsx("option",{value:"",children:r("Select Field","bit-integrations")}),a<n.length?e.jsx("option",{value:n[a].key,children:n[a].label},n[a].key):p.map(({key:t,label:m})=>e.jsx("option",{value:t,children:m},t))]})]}),a>=n.length&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>y(a,i,c),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>q(a,i,c),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function U({vboutConf:a,setVboutConf:l}){var i;const s=(c,n)=>{const p=d({},a);n==="update"&&(c.target.checked?p.actions.update=!0:delete p.actions.update),l(d({},p))};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"pos-rel d-flx w-8",children:e.jsx(T,{checked:((i=a.actions)==null?void 0:i.update)||!1,onChange:c=>s(c,"update"),className:"wdt-200 mt-4 mr-2",value:"update",title:r("Update Contact","bit-integrations"),subTitle:r("Update Responses with Vbout exist Contact?","bit-integrations")})})})}function J({handleInput:a,formFields:l,vboutConf:s,setVboutConf:i,loading:c,setLoading:n,setSnackbar:p}){var h;const j=t=>{const m=d({},s),{name:g}=t.target;t.target.value!==""?m[g]=t.target.value:delete m[g],t.target.value!==""&&u(m,i,c,n),i(d({},m))},x=[{label:r("Active","bit-integrations"),value:"active"},{label:r("Unconfirmed","bit-integrations"),value:"unconfirmed"}];return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:r("List:","bit-integrations")}),e.jsxs("select",{name:"list_id",value:s.list_id,className:"btcd-paper-inp w-5",onChange:j,children:[e.jsx("option",{value:"",children:r("Select List","bit-integrations")}),((h=s==null?void 0:s.default)==null?void 0:h.lists)&&s.default.lists.map(t=>e.jsx("option",{value:t.list_id,children:t.name},t.list_id))]}),e.jsx("button",{onClick:()=>$(s,i,c,n),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh list"'},type:"button",disabled:c.list,children:"↻"}),e.jsx("br",{}),e.jsx("br",{}),c.list&&e.jsx(F,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),(s==null?void 0:s.list_id)&&!c.field&&e.jsxs(e.Fragment,{children:[e.jsx("b",{className:"wdt-200 d-in-b",children:r("Contact Status:","bit-integrations")}),e.jsxs("select",{onChange:t=>a(t,s,i),name:"contact_status",value:s.contact_status,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:r("Select Status","bit-integrations")}),x.map(t=>e.jsx("option",{value:t.value,children:t.label},t.value))]})]}),c.field&&e.jsx(F,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),(s==null?void 0:s.list_id)&&(s==null?void 0:s.contact_status)&&!c.field&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-5",children:e.jsxs("b",{className:"wdt-100",children:[r("Field Map","bit-integrations"),e.jsx("button",{onClick:()=>u(s,i,c,n),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Fields"'},type:"button",disabled:c.field,children:"↻"})]})}),e.jsx("br",{}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:r("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:r("Vbout Fields","bit-integrations")})})]}),s==null?void 0:s.field_map.map((t,m)=>e.jsx(I,{i:m,field:t,vboutConf:s,formFields:l,setVboutConf:i,setSnackbar:p},`rp-m-${m+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>y(s.field_map.length,s,i),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{})]}),(s==null?void 0:s.list_id)&&(s==null?void 0:s.contact_status)&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:r("Utilities","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(U,{vboutConf:s,setVboutConf:i,formFields:l})]})]})}export{J as V};
