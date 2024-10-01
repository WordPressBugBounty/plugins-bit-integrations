var u=Object.defineProperty;var x=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var h=(l,s,t)=>s in l?u(l,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[s]=t,r=(l,s)=>{for(var t in s||(s={}))F.call(s,t)&&h(l,t,s[t]);if(x)for(var t of x(s))N.call(s,t)&&h(l,t,s[t]);return l};import{i as f,j as e}from"./main-830.js";import{j as _,_ as n,k as w,Q as v,m as g}from"./bi.597.15.js";import{g as k}from"./bi.801.709.js";const j=(l,s,t)=>{const i=r({},s);i.field_map.splice(l,0,{}),t(r({},i))},y=(l,s,t)=>{const i=r({},s);i.field_map.length>1&&i.field_map.splice(l,1),t(r({},i))};function $({i:l,formFields:s,field:t,googleDriveConf:i,setGoogleDriveConf:c}){var p;const{isPro:d}=f(_),m=(a,o)=>{const b=r({},i);b.field_map[o][a.target.name]=a.target.value,c(r({},b))};return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:t.formField||"",onChange:a=>m(a,l),children:[e.jsx("option",{value:"",children:n("Select Field","bit-integrations")}),e.jsx("optgroup",{label:n("Form Fields","bit-integrations"),children:s==null?void 0:s.filter(a=>a.type==="file").map(a=>e.jsx("option",{value:a.name,children:a.label},`ff-rm-${a.name}`))}),e.jsx("optgroup",{label:sprintf(n("General Smart Codes %s","bit-integrations"),d?"":`(${n("Pro","bit-integrations")})`),children:d&&((p=w)==null?void 0:p.map(a=>e.jsx("option",{value:a.name,children:a.label},`ff-rm-${a.name}`)))})]}),e.jsxs("select",{className:"btcd-paper-inp",name:"googleDriveFormField",value:t.googleDriveFormField,onChange:a=>m(a,l),children:[e.jsx("option",{value:"",children:n("Select Folder","bit-integrations")}),v(i.foldersList,"name","ASC").map(({name:a,id:o})=>e.jsx("option",{value:o,children:a},o))]})]}),e.jsx("button",{onClick:()=>j(l,i,c),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>y(l,i,c),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})})}function M({googleDriveConf:l,setGoogleDriveConf:s}){var i;const t=(c,d)=>{const m=r({},l);d==="deleteFile"&&(c.target.checked?m.actions.delete_from_wp=!0:delete m.actions.delete_from_wp),s(r({},m))};return e.jsx("div",{className:"pos-rel d-flx w-8",children:e.jsx(g,{checked:((i=l.actions)==null?void 0:i.delete_from_wp)||!1,onChange:c=>t(c,"deleteFile"),className:"mt-4 mr-2",value:"delete_from_wp",title:n("Delete File From Wordpress","bit-integrations"),subTitle:n("Delete file from Wordpress after upload in GoogleDrive","bit-integrations")})})}function B({flowID:l,formFields:s,googleDriveConf:t,setGoogleDriveConf:i}){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mt-5",children:[e.jsx("b",{className:"wdt-100",children:n("Field Map","bit-integrations")}),e.jsx("button",{onClick:()=>k(l,t,i),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${n("Fetch All GoogleDrive Folders","bit-integrations")}'`},type:"button",children:"↻"})]}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:n("File Input","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:n("GoogleDrive Folder","bit-integrations")})})]}),t==null?void 0:t.field_map.map((c,d)=>e.jsx($,{i:d,field:c,formFields:s,googleDriveConf:t,setGoogleDriveConf:i},`rp-m-${d+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>j(t.field_map.length,t,i),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:n("Utilities","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(M,{googleDriveConf:t,setGoogleDriveConf:i})]})}export{B as G};
