var O=Object.defineProperty;var k=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var T=(s,a,t)=>a in s?O(s,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[a]=t,c=(s,a)=>{for(var t in a||(a={}))M.call(a,t)&&T(s,t,a[t]);if(k)for(var t of k(a))q.call(a,t)&&T(s,t,a[t]);return s};import{r as v,j as e,L as u,f as L}from"./main-252.js";import{_ as n,e as E}from"./bi.63.0.js";import{x as _}from"./bi.269.440.js";import{a as f}from"./bi.456.9.js";import{b as S}from"./bi.494.11.js";import{g as R,a as V,b as P}from"./bi.666.745.js";import{a as U,h as B}from"./bi.163.3.js";import{T as G}from"./bi.570.683.js";const I=(s,a,t)=>{const l=c({},a);l.field_map.splice(s,0,{}),t(c({},l))},H=(s,a,t)=>{const l=c({},a);l.field_map.length>1&&l.field_map.splice(s,1),t(c({},l))},$=(s,a,t,l)=>{const r=c({},t);r.field_map[a][s.target.name]=s.target.value,s.target.value==="custom"&&(r.field_map[a].customValue=""),l(c({},r))};function z({mauticConf:s,setMauticConf:a,formFields:t}){var i,N,y,F,A;const[l,r]=v.useState(!1),[o,p]=v.useState({show:!1,action:()=>{}}),[w,b]=v.useState({show:!1}),m=(d,x)=>{const j=c({},s);x==="tag"?R(s,a,r,b):x==="owner"&&V(s,a,r,b),p({show:x}),a(c({},j))},h=()=>{p({show:!1})},g=(d,x)=>{const j=c({},s);x==="tag"?j.tag=d?d.split(","):[]:x==="owner"&&(j.owner=d),a(c({},j))};return e.jsxs("div",{className:"pos-rel d-flx w-8",children:[e.jsx(S,{checked:((i=s==null?void 0:s.tag)==null?void 0:i.length)>0||!1,onChange:d=>m(d,"tag"),className:"wdt-200 mt-4 mr-2",value:"tag",title:n("Add Tag","bit-integrations"),subTitle:n("Add tag to mautic contact","bit-integrations")}),e.jsx(S,{checked:(s==null?void 0:s.owner)||!1,onChange:d=>m(d,"owner"),className:"wdt-200 mt-4 mr-2",value:"owner",title:n("Add Contact Owner","bit-integrations"),subTitle:n("Add a Owner to mautic contact","bit-integrations")}),e.jsxs(f,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:n("Ok","bit-integrations"),show:o.show==="tag",close:h,action:h,title:n("Tag Records","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("small",{children:n("Add a tag to contacts","bit-integrations")}),l?e.jsx(u,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(_,{className:"msl-wrp-options",defaultValue:s==null?void 0:s.tag,options:(y=(N=s.default)==null?void 0:N.tags)==null?void 0:y.map(d=>({label:d.tagName,value:d.tagName.toString()})),onChange:d=>g(d,"tag"),customValue:!0}),e.jsx("button",{onClick:()=>R(s,a,r,b),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${n("Refresh CRM Tags","bit-integrations")}'`},type:"button",disabled:l,children:"↻"})]})]}),e.jsxs(f,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:n("Ok","bit-integrations"),show:o.show==="owner",close:h,action:h,title:n("Contact Owner","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("small",{children:n("Add a owner to contacts","bit-integrations")}),l?e.jsx(u,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(_,{className:"msl-wrp-options",defaultValue:s==null?void 0:s.owner,options:(A=(F=s==null?void 0:s.default)==null?void 0:F.users)==null?void 0:A.map(d=>({label:d.label,value:d.id.toString()})),onChange:d=>g(d,"owner"),singleSelect:!0,selectOnClose:!0}),e.jsx("button",{onClick:()=>V(s,a,r,b),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${n("Refresh Contact Owner","bit-integrations")}'`},type:"button",disabled:l,children:"↻"})]})]})]})}function D({i:s,formFields:a,field:t,mauticConf:l,setMauticConf:r}){var m,h,g;const o=((m=l==null?void 0:l.default)==null?void 0:m.fields)&&l.default.fields.filter(i=>i.required===!0)||[],p=((h=l==null?void 0:l.default)==null?void 0:h.fields)&&l.default.fields.filter(i=>i.required===!1)||[],w=L(E),{isPro:b}=w;return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:t.formField||"",onChange:i=>$(i,s,l,r),children:[e.jsx("option",{value:"",children:n("Select Field","bit-integrations")}),e.jsx("optgroup",{label:n("Form Fields","bit-integrations"),children:a==null?void 0:a.map(i=>i.type!=="file"&&e.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`))}),e.jsx("option",{value:"custom",children:n("Custom...","bit-integrations")}),e.jsx("optgroup",{label:sprintf(n("General Smart Codes %s","bit-integrations"),b?"":`(${n("Pro","bit-integrations")})`),children:b&&((g=U)==null?void 0:g.map(i=>e.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`)))})]}),t.formField==="custom"&&e.jsx(G,{onChange:i=>B(i,s,l,r),label:n("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:t.customValue,placeholder:n("Custom Value","bit-integrations"),formFields:a}),e.jsxs("select",{className:"btcd-paper-inp",disabled:s<o.length,name:"mauticField",value:s<o.length?o[s].fieldAlias||"":t.mauticField||"",onChange:i=>$(i,s,l,r),children:[e.jsx("option",{value:"",children:n("Select Field","bit-integrations")}),s<o.length?e.jsx("option",{value:o[s].fieldAlias,children:o[s].fieldName},o[s].fieldAlias):p.map(({fieldAlias:i,fieldName:N})=>e.jsx("option",{value:i,children:N},i))]})]}),e.jsx("button",{onClick:()=>I(s,l,r),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>H(s,l,r),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})})}function se({formFields:s,handleInput:a,mauticConf:t,setMauticConf:l,isLoading:r,setIsLoading:o,setSnackbar:p,a:w}){var b;return e.jsxs(e.Fragment,{children:[r&&e.jsx(u,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),!r&&((b=t==null?void 0:t.default)==null?void 0:b.fields)&&e.jsxs("div",{children:[e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"mt-4",children:[e.jsx("b",{className:"wdt-100",children:n("Map Fields","bit-integrations")}),e.jsx("button",{onClick:()=>P(t,l,o,p),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${n("Refresh Mautic Fields","bit-integrations")}'`},type:"button",disabled:r,children:"↻"})]}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:n("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:n("Mautic Fields","bit-integrations")})})]}),t==null?void 0:t.field_map.map((m,h)=>e.jsx(D,{i:h,field:m,mauticConf:t,formFields:s,setMauticConf:l,setSnackbar:p},`rp-m-${h+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>I(t.field_map.length,t,l),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:n("Utilities","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(z,{mauticConf:t,setMauticConf:l,formFields:s})]})]})}export{se as M};
