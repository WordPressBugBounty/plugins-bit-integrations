var A=Object.defineProperty;var F=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var f=(s,a,t)=>a in s?A(s,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[a]=t,o=(s,a)=>{for(var t in a||(a={}))S.call(a,t)&&f(s,t,a[t]);if(F)for(var t of F(a))M.call(a,t)&&f(s,t,a[t]);return s};import{r as v,j as e,L as _,i as R}from"./main-692.js";import{m as V,_ as n,e as $,n as I,j as q,k as L,l as E}from"./bi.751.13.js";import{g as y,a as P}from"./bi.291.718.js";import{T as B}from"./bi.588.657.js";const k=(s,a,t)=>{const l=o({},a);l.field_map.splice(s,0,{}),t(o({},l))},G=(s,a,t)=>{const l=o({},a);l.field_map.length>1&&l.field_map.splice(s,1),t(o({},l))},T=(s,a,t,l)=>{const r=o({},t);r.field_map[a][s.target.name]=s.target.value,s.target.value==="custom"&&(r.field_map[a].customValue=""),l(o({},r))};function H({mauticConf:s,setMauticConf:a,formFields:t}){var i,g,w;const[l,r]=v.useState(!1),[d,m]=v.useState({show:!1,action:()=>{}}),[u,b]=v.useState({show:!1}),h=(c,j)=>{const N=o({},s);j==="tag"&&(c.target.checked?(y(s,a,r,b),N.actions.tag=!0,m({show:"tag"})):(m({show:!1}),delete N.actions.tag)),a(o({},N))},p=()=>{m({show:!1})},x=c=>{const j=o({},s);j.tag=c?c.split(","):[],a(o({},j))};return e.jsxs("div",{className:"pos-rel d-flx w-8",children:[e.jsx(V,{checked:((i=s.actions)==null?void 0:i.tag)||!1,onChange:c=>h(c,"tag"),className:"wdt-200 mt-4 mr-2",value:"tag",title:n("Add Tag","bit-integrations"),subTitle:n("Add tag to mautic contact","bit-integrations")}),e.jsxs($,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:n("Ok","bit-integrations"),show:d.show==="tag",close:p,action:p,title:n("Tag Records","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("small",{children:n("Add a tag to contacts","bit-integrations")}),e.jsx("div",{className:"mt-2",children:n("Tag Name","bit-integrations")}),l?e.jsx(_,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(I,{className:"msl-wrp-options",defaultValue:s==null?void 0:s.tag,options:(w=(g=s.default)==null?void 0:g.tags)==null?void 0:w.map(c=>({label:c.tagName,value:c.tagName.toString()})),onChange:c=>x(c),customValue:!0}),e.jsx("button",{onClick:()=>y(s,a,r,b),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${n("Refresh CRM Tags","bit-integrations")}'`},type:"button",disabled:l,children:"↻"})]})]})]})}function O({i:s,formFields:a,field:t,mauticConf:l,setMauticConf:r}){var h,p,x;const d=((h=l==null?void 0:l.default)==null?void 0:h.fields)&&l.default.fields.filter(i=>i.required===!0)||[],m=((p=l==null?void 0:l.default)==null?void 0:p.fields)&&l.default.fields.filter(i=>i.required===!1)||[],u=R(q),{isPro:b}=u;return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:t.formField||"",onChange:i=>T(i,s,l,r),children:[e.jsx("option",{value:"",children:n("Select Field","bit-integrations")}),e.jsx("optgroup",{label:n("Form Fields","bit-integrations"),children:a==null?void 0:a.map(i=>i.type!=="file"&&e.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`))}),e.jsx("option",{value:"custom",children:n("Custom...","bit-integrations")}),e.jsx("optgroup",{label:sprintf(n("General Smart Codes %s","bit-integrations"),b?"":`(${n("Pro","bit-integrations")})`),children:b&&((x=L)==null?void 0:x.map(i=>e.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`)))})]}),t.formField==="custom"&&e.jsx(B,{onChange:i=>E(i,s,l,r),label:n("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:t.customValue,placeholder:n("Custom Value","bit-integrations"),formFields:a}),e.jsxs("select",{className:"btcd-paper-inp",disabled:s<d.length,name:"mauticField",value:s<d.length?d[s].fieldAlias||"":t.mauticField||"",onChange:i=>T(i,s,l,r),children:[e.jsx("option",{value:"",children:n("Select Field","bit-integrations")}),s<d.length?e.jsx("option",{value:d[s].fieldAlias,children:d[s].fieldName},d[s].fieldAlias):m.map(({fieldAlias:i,fieldName:g})=>e.jsx("option",{value:i,children:g},i))]})]}),e.jsx("button",{onClick:()=>k(s,l,r),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>G(s,l,r),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})})}function Q({formFields:s,handleInput:a,mauticConf:t,setMauticConf:l,isLoading:r,setIsLoading:d,setSnackbar:m,a:u}){var b;return e.jsxs(e.Fragment,{children:[r&&e.jsx(_,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),!r&&((b=t==null?void 0:t.default)==null?void 0:b.fields)&&e.jsxs("div",{children:[e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"mt-4",children:[e.jsx("b",{className:"wdt-100",children:n("Map Fields","bit-integrations")}),e.jsx("button",{onClick:()=>P(t,l,d,m),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${n("Refresh Mautic Fields","bit-integrations")}'`},type:"button",disabled:r,children:"↻"})]}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:n("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:n("Mautic Fields","bit-integrations")})})]}),t==null?void 0:t.field_map.map((h,p)=>e.jsx(O,{i:p,field:h,mauticConf:t,formFields:s,setMauticConf:l,setSnackbar:m},`rp-m-${p+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>k(t.field_map.length,t,l),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:n("Utilities","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(H,{mauticConf:t,setMauticConf:l,formFields:s})]})]})}export{Q as M};