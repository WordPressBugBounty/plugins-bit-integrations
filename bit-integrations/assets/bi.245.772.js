var g=Object.defineProperty;var h=Object.getOwnPropertySymbols;var o=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var j=(l,s,a)=>s in l?g(l,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[s]=a,d=(l,s)=>{for(var a in s||(s={}))o.call(s,a)&&j(l,a,s[a]);if(h)for(var a of h(s))v.call(s,a)&&j(l,a,s[a]);return l};import{f as N,j as e,L as y}from"./main-320.js";import{e as _,_ as n}from"./bi.576.0.js";import{a as $,h as M,b as w}from"./bi.337.3.js";import{f as S}from"./bi.591.771.js";import{T as k}from"./bi.440.11.js";import{T}from"./bi.468.689.js";const V=(l,s,a)=>{const i=d({},s);i.field_map.splice(l,0,{}),a(d({},i))},f=(l,s,a)=>{const i=d({},s);i.field_map.length>1&&i.field_map.splice(l,1),a(d({},i))},b=(l,s,a,i)=>{const c=d({},a);c.field_map[s][l.target.name]=l.target.value,l.target.value==="custom"&&(c.field_map[s].customValue=""),i(d({},c))};function I({i:l,field:s,formFields:a,bitFormConf:i,setBitFormConf:c}){var p,m;const u=N(_),{isPro:x}=u;return e.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:s.formField||"",onChange:t=>b(t,l,i,c),children:[e.jsx("option",{value:"",children:n("Select Field","bit-integrations")}),e.jsx("optgroup",{label:n("Form Fields","bit-integrations"),children:a.map(t=>t.type!=="file"&&e.jsx("option",{value:t.name,children:t.label},`ff-zhcrm-${t.name}`))}),e.jsx("option",{value:"custom",children:n("Custom...","bit-integrations")}),e.jsx("optgroup",{label:`${n("General Smart Codes","bit-integrations")} ${x?"":`(${n("Pro","bit-integrations")})`}`,children:x&&((p=$)==null?void 0:p.map(t=>e.jsx("option",{value:t.name,children:t.label},`ff-rm-${t.name}`)))})]}),s.formField==="custom"&&e.jsx(T,{onChange:t=>M(t,l,i,c),label:n("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:s.customValue,placeholder:n("Custom Value","bit-integrations"),formFields:a}),e.jsxs("select",{className:"btcd-paper-inp",name:"BitFormMapField",value:s.BitFormMapField||"",onChange:t=>b(t,l,i,c),children:[e.jsx("option",{value:"",children:n("Select Field","bit-integrations")}),((m=i==null?void 0:i.default)==null?void 0:m.fields)&&Object.entries(i.default.fields).map((t,r)=>t[1].typ!=="button"&&e.jsx("option",{value:t[0],children:t[1].lbl},`bitform-${r*2}`))]})]}),e.jsx("button",{onClick:()=>V(l,i,c),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>f(l,i,c),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx(k,{})})]})}function O({formFields:l,handleInput:s,bitFormConf:a,setBitFormConf:i,isLoading:c,setIsLoading:u,setSnackbar:x}){var p,m;return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:n("Forms:","bit-integrations")}),e.jsxs("select",{onChange:s,name:"id",value:a.id,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:n("Select Form","bit-integrations")}),((p=a==null?void 0:a.default)==null?void 0:p.forms)&&a.default.forms.map(({id:t,form_name:r})=>e.jsx("option",{value:t,children:r},t))]}),e.jsx("button",{onClick:()=>S(a,i,u),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${n("Fetch All Form","bit-integrations")}'`},type:"button",disabled:c,children:"↻"}),e.jsx("br",{}),c&&e.jsx(y,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),(a==null?void 0:a.id)&&((m=a.default)==null?void 0:m.fields)&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:n("Map Fields","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:n("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:n("Bit Form Fields","bit-integrations")})})]}),(a==null?void 0:a.id)&&(a==null?void 0:a.field_map.map((t,r)=>e.jsx(I,{i:r,field:t,formFields:l,bitFormConf:a,setBitFormConf:i},`sheet-m-${r+9}`))),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>w(a.field_map.length,a,i),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{})]}),e.jsx("br",{}),e.jsx("br",{})]})}export{O as B};
