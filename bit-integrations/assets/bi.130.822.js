var g=Object.defineProperty;var x=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var h=(s,i,t)=>i in s?g(s,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[i]=t,c=(s,i)=>{for(var t in i||(i={}))f.call(i,t)&&h(s,t,i[t]);if(x)for(var t of x(i))u.call(i,t)&&h(s,t,i[t]);return s};import{f as F,j as e}from"./main-252.js";import{e as N,_ as n}from"./bi.63.0.js";import{a9 as v}from"./bi.269.440.js";import{a as _}from"./bi.163.3.js";import{b as w}from"./bi.494.11.js";import{g as y}from"./bi.593.821.js";const j=(s,i,t)=>{const l=c({},i);l.field_map.splice(s,0,{}),t(c({},l))},k=(s,i,t)=>{const l=c({},i);l.field_map.length>1&&l.field_map.splice(s,1),t(c({},l))};function $({i:s,formFields:i,field:t,pCloudConf:l,setPCloudConf:r}){var b;const{isPro:m}=F(N),d=(a,o)=>{const p=c({},l);p.field_map[o][a.target.name]=a.target.value,r(c({},p))};return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:t.formField||"",onChange:a=>d(a,s),children:[e.jsx("option",{value:"",children:n("Select Field","bit-integrations")}),e.jsx("optgroup",{label:n("Form Fields","bit-integrations"),children:i==null?void 0:i.filter(a=>a.type==="file").map(a=>e.jsx("option",{value:a.name,children:a.label},`ff-rm-${a.name}`))}),e.jsx("optgroup",{label:sprintf(n("General Smart Codes %s","bit-integrations"),m?"":`(${n("Pro","bit-integrations")})`),children:m&&((b=_)==null?void 0:b.map(a=>e.jsx("option",{value:a.name,children:a.label},`ff-rm-${a.name}`)))})]}),e.jsxs("select",{className:"btcd-paper-inp",name:"pCloudFormField",value:t.pCloudFormField,onChange:a=>d(a,s),children:[e.jsx("option",{value:"",children:n("Select Folder","bit-integrations")}),e.jsx("option",{value:"0",children:n("Root Folder","bit-integrations")}),v(l.foldersList,"name","ASC").map(({name:a,id:o})=>e.jsx("option",{value:o,children:a},o))]})]}),e.jsx("button",{onClick:()=>j(s,l,r),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>k(s,l,r),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})})}function M({pCloudConf:s,setPCloudConf:i}){var l;const t=(r,m)=>{const d=c({},s);m==="deleteFile"&&(r.target.checked?d.actions.delete_from_wp=!0:delete d.actions.delete_from_wp),i(c({},d))};return e.jsx("div",{className:"pos-rel d-flx w-8",children:e.jsx(w,{checked:((l=s.actions)==null?void 0:l.delete_from_wp)||!1,onChange:r=>t(r,"deleteFile"),className:"mt-4 mr-2",value:"delete_from_wp",title:n("Delete File From Wordpress","bit-integrations"),subTitle:n("Delete file from Wordpress after upload in PCloud","bit-integrations")})})}function B({flowID:s,formFields:i,pCloudConf:t,setPCloudConf:l}){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mt-5",children:[e.jsx("b",{className:"wdt-100",children:n("Field Map","bit-integrations")}),e.jsx("button",{onClick:()=>y(t,l,"refresh"),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${n("Fetch All PCloud Folders","bit-integrations")}'`},type:"button",children:"↻"})]}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:n("File Input","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:n("PCloud Folder","bit-integrations")})})]}),t==null?void 0:t.field_map.map((r,m)=>e.jsx($,{i:m,field:r,formFields:i,pCloudConf:t,setPCloudConf:l},`rp-m-${m+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>j(t.field_map.length,t,l),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:n("Utilities","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(M,{pCloudConf:t,setPCloudConf:l})]})}export{B as P};
