var f=Object.defineProperty;var _=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var u=(l,a,c)=>a in l?f(l,a,{enumerable:!0,configurable:!0,writable:!0,value:c}):l[a]=c,r=(l,a)=>{for(var c in a||(a={}))N.call(a,c)&&u(l,c,a[c]);if(_)for(var c of _(a))y.call(a,c)&&u(l,c,a[c]);return l};import{f as w,j as e,L as k}from"./main-425.js";import"./bi.900.437.js";import{e as A,_ as m}from"./bi.107.0.js";import{a as I,h as M}from"./bi.25.3.js";import{g as S}from"./bi.16.821.js";import{T as V}from"./bi.178.675.js";const F=(l,a,c,i,n)=>{const t=r({},a);n?i?t.relatedlists[n-1].upload_field_map.splice(l,0,{}):t.relatedlists[n-1].field_map.splice(l,0,{}):i?t.upload_field_map.splice(l,0,{}):t.field_map.splice(l,0,{}),c(r({},t))},$=(l,a,c,i,n)=>{const t=r({},a);n?i?t.relatedlists[n-1].upload_field_map.length>1&&t.relatedlists[n-1].upload_field_map.splice(l,1):t.relatedlists[n-1].field_map.length>1&&t.relatedlists[n-1].field_map.splice(l,1):i?t.upload_field_map.length>1&&t.upload_field_map.splice(l,1):t.field_map.length>1&&t.field_map.splice(l,1),c(r({},t))},v=(l,a,c,i,n,t)=>{const o=r({},c);t?n?o.relatedlists[t-1].upload_field_map[a][l.target.name]=l.target.value:o.relatedlists[t-1].field_map[a][l.target.name]=l.target.value:n?o.upload_field_map[a][l.target.name]=l.target.value:o.field_map[a][l.target.name]=l.target.value,l.target.value==="custom"&&(t?o.relatedlists[t-1].field_map[a].customValue="":o.field_map[a].customValue=""),i(r({},o))};function q({i:l,field:a,formFields:c,sureCartConf:i,setSureCartConf:n}){var g,d,p,h;if(((g=i==null?void 0:i.field_map)==null?void 0:g.length)===1&&a.SureCartFormField===""){const s=r({},i),x=S(s);s.field_map=x,n(s)}const t=((d=i==null?void 0:i.customerFields)==null?void 0:d.filter(s=>s.required===!0))||[],o=((p=i==null?void 0:i.customerFields)==null?void 0:p.filter(s=>s.required===!1))||[],j=w(A),{isPro:b}=j;return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:a.formField||"",onChange:s=>v(s,l,i,n),children:[e.jsx("option",{value:"",children:m("Select Field","bit-integrations")}),e.jsx("optgroup",{label:m("Form Fields","bit-integrations"),children:c==null?void 0:c.map(s=>e.jsx("option",{value:s.name,children:s.label},`ff-rm-${s.name}`))}),e.jsx("option",{value:"custom",children:m("Custom...","bit-integrations")}),e.jsx("optgroup",{label:sprintf(m("General Smart Codes %s","bit-integrations"),b?"":`(${m("Pro","bit-integrations")})`),children:b&&((h=I)==null?void 0:h.map(s=>e.jsx("option",{value:s.name,children:s.label},`ff-rm-${s.name}`)))})]}),a.formField==="custom"&&e.jsx(V,{onChange:s=>M(s,l,i,n),label:m("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:a.customValue,placeholder:m("Custom Value","bit-integrations"),formFields:c}),e.jsxs("select",{className:"btcd-paper-inp",disabled:l<t.length,name:"SureCartFormField",value:l<t.length?t[l].key||"":a.SureCartFormField||"",onChange:s=>v(s,l,i,n),children:[e.jsx("option",{value:"",children:m("Select Field","bit-integrations")}),l<t.length?e.jsx("option",{value:t[l].key,children:t[l].label},t[l].key):o.map(({key:s,label:x})=>e.jsx("option",{value:s,children:x},s))]})]}),l>=t.length&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>F(l,i,n),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>$(l,i,n),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function H({formID:l,formFields:a,handleInput:c,sureCartConf:i,setSureCartConf:n,isLoading:t,setIsLoading:o,setSnackbar:j,a:b}){const g=d=>{const p=r({},i),{name:h}=d.target;d.target.value!==""?p[h]=d.target.value:delete p[h],p[d.target.name]=d.target.value,n(r({},p))};return e.jsxs(e.Fragment,{children:[t&&e.jsx(k,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:m("Actions:","bit-integrations")}),e.jsxs("select",{onChange:g,name:"mainAction",value:i==null?void 0:i.mainAction,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:m("Select Actions","bit-integrations")}),(i==null?void 0:i.allActions)&&i.allActions.map(({key:d,label:p})=>e.jsx("option",{value:d,children:p},d))]}),e.jsx("br",{}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:m("Map Fields","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:m("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:m("SureCart Fields","bit-integrations")})})]}),i.field_map.map((d,p)=>e.jsx(q,{i:p,field:d,formFields:a,sureCartConf:i,setSureCartConf:n},`keap-m-${p+9}`)),e.jsx("br",{}),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>F(i.field_map.length,i,n),className:"icn-btn sh-sm",type:"button",children:"+"})})]})]})}export{H as S};
