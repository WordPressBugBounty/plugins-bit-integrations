var $=Object.defineProperty;var N=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var y=(i,r,t)=>r in i?$(i,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[r]=t,j=(i,r)=>{for(var t in r||(r={}))f.call(r,t)&&y(i,t,r[t]);if(N)for(var t of N(r))k.call(r,t)&&y(i,t,r[t]);return i};import{r as w,j as e,f as S,L as I}from"./main-34.js";import{_ as l,e as A}from"./bi.671.0.js";import{a as T,h as q,b as L}from"./bi.633.3.js";import{b as M,T as O}from"./bi.22.11.js";import{f as R,r as V}from"./bi.276.758.js";import{T as D}from"./bi.623.673.js";import{a as _,b as E,c as P}from"./bi.226.703.js";function z({acumbamailConf:i,setAcumbamailConf:r,formFields:t}){var d;w.useState(!1);const n=(c,b)=>{const a=j({},i);b==="double_optin"&&(c.target.checked?a.actions.double_optin=!0:delete a.actions.double_optin),r(j({},a))};return e.jsx("div",{className:"pos-rel d-flx w-8",children:e.jsx(M,{checked:((d=i.actions)==null?void 0:d.double_optin)||!1,onChange:c=>n(c,"double_optin"),className:"wdt-200 mt-4 mr-2",value:"double_optin",title:l("Double Opt-in","bit-integrations"),subTitle:l("Double Opt-In for confirm subscription.","bit-integrations")})})}function B({i,formFields:r,field:t,acumbamailConf:n,setAcumbamailConf:d}){var p,m,u,g,F,v;const c=S(A),{isPro:b}=c,a=(p=n.default.allFields[n.listId].required)==null?void 0:p.includes(t.acumbamailFormField),x=Object.entries((u=(m=n.default.allFields)==null?void 0:m[n.listId])==null?void 0:u.fields).filter(s=>s[1].required===!0)||[],o=Object.entries((F=(g=n.default.allFields)==null?void 0:g[n.listId])==null?void 0:F.fields).filter(s=>s[1].required===!1)||[];return e.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:t.formField||"",onChange:s=>_(s,i,n,d),children:[e.jsx("option",{value:"",children:l("Select Field","bit-integrations")}),e.jsx("optgroup",{label:l("Form Fields","bit-integrations"),children:r.map(s=>s.type!=="file"&&e.jsx("option",{value:s.name,children:s.label},`ff-zhcrm-${s.name}`))}),e.jsx("option",{value:"custom",children:l("Custom...","bit-integrations")}),e.jsx("optgroup",{label:`${l("General Smart Codes","bit-integrations")} ${b?"":`(${l("Pro","bit-integrations")})`}`,children:b&&((v=T)==null?void 0:v.map(s=>e.jsx("option",{value:s.name,children:s.label},`ff-rm-${s.name}`)))})]}),t.formField==="custom"&&e.jsx(D,{onChange:s=>q(s,i,n,d),label:l("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:t.customValue,placeholder:l("Custom Value","bit-integrations"),formFields:r}),e.jsxs("select",{className:"btcd-paper-inp",name:"acumbamailFormField",disabled:i<1,value:t.acumbamailFormField||"",onChange:s=>_(s,i,n,d),children:[e.jsx("option",{value:"",children:l("Select Field","bit-integrations")}),a&&x.map((s,h)=>e.jsx("option",{value:s[1].key,children:s[1].label},`mchimp-${h*2}`)),!a&&o.map((s,h)=>e.jsx("option",{value:s[1].key,children:s[1].label},`mchimp-${h*2}`))]})]}),!a&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>E(i,n,d),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>P(i,n,d),className:"icn-btn sh-sm",type:"button","aria-label":"btn",children:e.jsx(O,{})})]})]})}function Y({formFields:i,handleInput:r,acumbamailConf:t,setAcumbamailConf:n,isLoading:d,setIsLoading:c,setSnackbar:b}){var a,x;return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:l("Actions:","bit-integrations")}),e.jsxs("select",{onChange:r,name:"mainAction",value:t.mainAction,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:l("Select Actions","bit-integrations")}),t.allActions&&t.allActions.map(({key:o,label:p})=>e.jsx("option",{value:o,children:p},o))]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:l("All List:","bit-integrations")}),e.jsxs("select",{onChange:r,name:"listId",value:t.listId,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:l("Select List","bit-integrations")}),((a=t==null?void 0:t.default)==null?void 0:a.allLists)&&Object.entries(t.default.allLists).map(o=>e.jsx("option",{value:o[0],children:o[1].name},o[0]))]}),e.jsx("button",{onClick:()=>R(t,n,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Fetch Subscriber List","bit-integrations")}'`},type:"button",disabled:d,children:"↻"}),e.jsx("br",{}),d&&e.jsx(I,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),e.jsxs("div",{className:"mt-4",children:[e.jsx("b",{className:"wdt-100",children:l("Map Fields","bit-integrations")}),e.jsx("button",{onClick:()=>V(null,t,n,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Refresh Acumbamail Fields","bit-integrations")}'`},type:"button",disabled:d,children:"↻"})]}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:l("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:l("Acumbamail Fields","bit-integrations")})})]}),((x=t.default)==null?void 0:x.allFields)&&e.jsxs(e.Fragment,{children:[t.field_map.map((o,p)=>e.jsx(B,{i:p,field:o,acumbamailConf:t,formFields:i,setAcumbamailConf:n},`sheet-m-${p+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>L(t.field_map.length,t,n),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{})]}),e.jsx("br",{}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:l("Utilities","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(z,{acumbamailConf:t,setAcumbamailConf:n,formFields:i})]})}export{Y as A};
