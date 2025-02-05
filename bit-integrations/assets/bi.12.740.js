var u=Object.defineProperty;var x=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var h=(i,s,t)=>s in i?u(i,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[s]=t,c=(i,s)=>{for(var t in s||(s={}))f.call(s,t)&&h(i,t,s[t]);if(x)for(var t of x(s))F.call(s,t)&&h(i,t,s[t]);return i};import{f as N,j as e}from"./main-183.js";import{e as _,_ as n}from"./bi.430.0.js";import{a9 as w}from"./bi.554.440.js";import{a as v}from"./bi.159.3.js";import{b as g}from"./bi.12.11.js";import{g as y}from"./bi.944.739.js";const j=(i,s,t)=>{const l=c({},s);l.field_map.splice(i,0,{}),t(c({},l))},k=(i,s,t)=>{const l=c({},s);l.field_map.length>1&&l.field_map.splice(i,1),t(c({},l))};function $({i,formFields:s,field:t,googleDriveConf:l,setGoogleDriveConf:r}){var p;const{isPro:d}=N(_),m=(a,o)=>{const b=c({},l);b.field_map[o][a.target.name]=a.target.value,r(c({},b))};return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:t.formField||"",onChange:a=>m(a,i),children:[e.jsx("option",{value:"",children:n("Select Field","bit-integrations")}),e.jsx("optgroup",{label:n("Form Fields","bit-integrations"),children:s==null?void 0:s.filter(a=>a.type==="file").map(a=>e.jsx("option",{value:a.name,children:a.label},`ff-rm-${a.name}`))}),e.jsx("optgroup",{label:sprintf(n("General Smart Codes %s","bit-integrations"),d?"":`(${n("Pro","bit-integrations")})`),children:d&&((p=v)==null?void 0:p.map(a=>e.jsx("option",{value:a.name,children:a.label},`ff-rm-${a.name}`)))})]}),e.jsxs("select",{className:"btcd-paper-inp",name:"googleDriveFormField",value:t.googleDriveFormField,onChange:a=>m(a,i),children:[e.jsx("option",{value:"",children:n("Select Folder","bit-integrations")}),w(l.foldersList,"name","ASC").map(({name:a,id:o})=>e.jsx("option",{value:o,children:a},o))]})]}),e.jsx("button",{onClick:()=>j(i,l,r),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>k(i,l,r),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})})}function M({googleDriveConf:i,setGoogleDriveConf:s}){var l;const t=(r,d)=>{const m=c({},i);d==="deleteFile"&&(r.target.checked?m.actions.delete_from_wp=!0:delete m.actions.delete_from_wp),s(c({},m))};return e.jsx("div",{className:"pos-rel d-flx w-8",children:e.jsx(g,{checked:((l=i.actions)==null?void 0:l.delete_from_wp)||!1,onChange:r=>t(r,"deleteFile"),className:"mt-4 mr-2",value:"delete_from_wp",title:n("Delete File From Wordpress","bit-integrations"),subTitle:n("Delete file from Wordpress after upload in GoogleDrive","bit-integrations")})})}function P({flowID:i,formFields:s,googleDriveConf:t,setGoogleDriveConf:l}){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mt-5",children:[e.jsx("b",{className:"wdt-100",children:n("Field Map","bit-integrations")}),e.jsx("button",{onClick:()=>y(i,t,l),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${n("Fetch All GoogleDrive Folders","bit-integrations")}'`},type:"button",children:"↻"})]}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:n("File Input","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:n("GoogleDrive Folder","bit-integrations")})})]}),t==null?void 0:t.field_map.map((r,d)=>e.jsx($,{i:d,field:r,formFields:s,googleDriveConf:t,setGoogleDriveConf:l},`rp-m-${d+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>j(t.field_map.length,t,l),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:n("Utilities","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(M,{googleDriveConf:t,setGoogleDriveConf:l})]})}export{P as G};
