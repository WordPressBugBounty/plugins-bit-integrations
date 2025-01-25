var _=Object.defineProperty;var j=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var v=(i,s,a)=>s in i?_(i,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[s]=a,p=(i,s)=>{for(var a in s||(s={}))A.call(s,a)&&v(i,a,s[a]);if(j)for(var a of j(s))M.call(s,a)&&v(i,a,s[a]);return i};import{f as S,j as e,r as N}from"./main-252.js";import"./bi.269.440.js";import{e as y,_ as r}from"./bi.63.0.js";import{a as k,h as T}from"./bi.163.3.js";import{g as f}from"./bi.558.785.js";import{T as V}from"./bi.570.683.js";import{a as $}from"./bi.456.9.js";import{b as q}from"./bi.494.11.js";const F=(i,s,a)=>{const t=p({},s);t.field_map.splice(i,0,{}),a(p({},t))},P=(i,s,a)=>{const t=p({},s);t.field_map.length>1&&t.field_map.splice(i,1),a(p({},t))},w=(i,s,a,t)=>{const c=p({},a);c.field_map[s][i.target.name]=i.target.value,i.target.value==="custom"&&(c.field_map[s].customValue=""),t(p({},c))};function I({i,formFields:s,field:a,googleContactsConf:t,setGoogleContactsConf:c}){var h,x;if(((h=t==null?void 0:t.field_map)==null?void 0:h.length)===1&&a.googleContactsFormField===""){const l=p({},t),u=f(l);l.field_map=u,c(l)}const n=(t==null?void 0:t.default.filter(l=>l.required===!0))||[],m=(t==null?void 0:t.default.filter(l=>l.required===!1))||[],d=S(y),{isPro:b}=d;return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:a.formField||"",onChange:l=>w(l,i,t,c),children:[e.jsx("option",{value:"",children:r("Select Field","bit-integrations")}),e.jsx("optgroup",{label:r("Form Fields","bit-integrations"),children:s==null?void 0:s.map(l=>e.jsx("option",{value:l.name,children:l.label},`ff-rm-${l.name}`))}),e.jsx("option",{value:"custom",children:r("Custom...","bit-integrations")}),e.jsx("optgroup",{label:sprintf(r("General Smart Codes %s","bit-integrations"),b?"":`(${r("Pro","bit-integrations")})`),children:b&&((x=k)==null?void 0:x.map(l=>e.jsx("option",{value:l.name,children:l.label},`ff-rm-${l.name}`)))})]}),a.formField==="custom"&&e.jsx(V,{onChange:l=>T(l,i,t,c),label:r("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:a.customValue,placeholder:r("Custom Value","bit-integrations"),formFields:s}),e.jsxs("select",{className:"btcd-paper-inp",disabled:i<n.length,name:"googleContactsFormField",value:i<n.length?n[i].key||"":a.googleContactsFormField||"",onChange:l=>w(l,i,t,c),children:[e.jsx("option",{value:"",children:r("Select Field","bit-integrations")}),i<n.length?e.jsx("option",{value:n[i].key,children:n[i].label},n[i].key):m.map(({key:l,label:u})=>e.jsx("option",{value:l,children:u},l))]})]}),i>=n.length&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>F(i,t,c),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>P(i,t,c),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function R({googleContactsConf:i,setGoogleContactsConf:s,formFields:a}){var m;N.useState(!1);const[t,c]=N.useState({show:!1,action:()=>{}}),n=(d,b)=>{const h=p({},i);b==="Attachments"&&(d.target.value!==""?h.actions.attachments=d.target.value:delete h.actions.attachments),s(p({},h))};return e.jsx("div",{className:"d-flx wdt-200",children:e.jsxs("div",{className:"pos-rel d-flx w-8l",children:[e.jsx("div",{className:"d-flx flx-wrp",children:e.jsx(q,{onChange:()=>c({show:"attachments"}),checked:"attachments"in i.actions,className:"wdt-200 mt-4 mr-2",value:"Attachment",title:r("Photo","bit-integrations"),subTitle:r("Add picture on google contact account.","bit-integrations")})}),e.jsxs($,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:"Ok",show:t.show==="attachments",close:()=>c({show:!1}),action:()=>c({show:!1}),title:r("Select Attachment","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2"}),e.jsx("div",{className:"mt-2",children:r("Please select file upload fields","bit-integrations")}),e.jsxs("select",{onChange:d=>n(d,"Attachments"),name:"attachments",value:(m=i.actions)==null?void 0:m.attachments,className:"btcd-paper-inp w-10 mt-2",children:[e.jsx("option",{value:"",children:r("Select file upload field","bit-integrations")}),a==null?void 0:a.filter(d=>d.type==="file").map(d=>e.jsx("option",{value:d.name,children:d.label},d.name+1))]})]})]})})}function K({flowID:i,formFields:s,googleContactsConf:a,setGoogleContactsConf:t}){const c=n=>{const m=p({},a),{name:d}=n.target;n.target.value!==""?m[d]=n.target.value:delete m[d],m[n.target.name]=n.target.value,t(p({},m))};return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:r("Actions:","bit-integrations")}),e.jsxs("select",{onChange:c,name:"mainAction",value:a==null?void 0:a.mainAction,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:r("Select Actions","bit-integrations")}),(a==null?void 0:a.allActions)&&a.allActions.map(({key:n,label:m})=>e.jsx("option",{value:n,children:m},n))]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"mt-5",children:e.jsx("b",{className:"wdt-100",children:r("Field Map","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:r("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:r("Google Contacts Fields","bit-integrations")})})]}),a==null?void 0:a.field_map.map((n,m)=>e.jsx(I,{i:m,field:n,formFields:s,googleContactsConf:a,setGoogleContactsConf:t},`rp-m-${m+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>F(a.field_map.length,a,t),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:r("Utilities","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(R,{googleContactsConf:a,setGoogleContactsConf:t,formFields:s})]})}export{K as G};
