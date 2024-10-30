var _=Object.defineProperty;var h=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var j=(t,a,s)=>a in t?_(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,d=(t,a)=>{for(var s in a||(a={}))w.call(a,s)&&j(t,s,a[s]);if(h)for(var s of h(a))M.call(a,s)&&j(t,s,a[s]);return t};import{j as e,f as k,r as g}from"./main-955.js";import{_ as c,e as f}from"./bi.223.0.js";import{b as K}from"./bi.300.11.js";import"./bi.326.431.js";import{M as $,a as q}from"./bi.864.3.js";import{g as S}from"./bi.198.804.js";function V({smailyConf:t,setSmailyConf:a}){var i;const s=(l,r)=>{const o=d({},t);r==="unsubscribe"&&(l.target.checked?o.actions.unsubscribe=!0:delete o.actions.unsubscribe),a(d({},o))};return e.jsx("div",{className:"pos-rel d-flx w-8",children:e.jsx(K,{checked:((i=t.actions)==null?void 0:i.unsubscribe)||!1,onChange:l=>s(l,"unsubscribe"),className:"wdt-200 mt-4 mr-2",value:"update_subscriber",title:c("unsubscribe subscriber","bit-integrations"),subTitle:c("Set the subscriber's status as unsubscribed.","bit-integrations")})})}const N=(t,a,s)=>{const i=d({},a);i.field_map.splice(t,0,{}),s(d({},i))},I=(t,a,s)=>{const i=d({},a);i.field_map.length>1&&i.field_map.splice(t,1),s(d({},i))},F=(t,a,s,i)=>{const l=d({},s);l.field_map[a][t.target.name]=t.target.value,t.target.value==="custom"&&(l.field_map[a].customValue=""),t.target.value==="customFieldKey"&&(l.field_map[a].customFieldKey=""),i(d({},l))},L=(t,a,s,i,l)=>{const r=d({},s);r.field_map[a][l]=t.target.value,i(d({},r))};function v({field:t,index:a,smailyConf:s,setSmailyConf:i,fieldValue:l,fieldLabel:r,className:o}){return e.jsx($,{onChange:u=>L(u,a,s,i,l),label:c(r,"bit-integrations"),className:o,type:"text",value:t[l],placeholder:c(r,"bit-integrations")})}function R({i:t,formFields:a,field:s,smailyConf:i,setSmailyConf:l}){var p,x;const r=(i==null?void 0:i.staticFields.filter(n=>n.required===!0))||[],o=(i==null?void 0:i.staticFields.filter(n=>n.required===!1))||[];if(((p=i==null?void 0:i.field_map)==null?void 0:p.length)===1&&s.smailyFormField===""){const n=d({},i),m=S(n);n.field_map=m,l(n)}const u=k(f),{isPro:b}=u;return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:s.formField||"",onChange:n=>F(n,t,i,l),children:[e.jsx("option",{value:"",children:c("Select Field","bit-integrations")}),e.jsx("optgroup",{label:c("Form Fields","bit-integrations"),children:a==null?void 0:a.map(n=>e.jsx("option",{value:n.name,children:n.label},`ff-rm-${n.name}`))}),e.jsx("option",{value:"custom",children:c("Custom...","bit-integrations")}),e.jsx("optgroup",{label:sprintf(c("General Smart Codes %s","bit-integrations"),b?"":`(${c("Pro","bit-integrations")})`),children:b&&((x=q)==null?void 0:x.map(n=>e.jsx("option",{value:n.name,children:n.label},`ff-rm-${n.name}`)))})]}),s.formField==="custom"&&e.jsx(v,{field:s,index:t,smailyConf:i,setSmailyConf:l,fieldValue:"customValue",fieldLabel:"Custom Value",className:"mr-2"}),e.jsxs("select",{className:"btcd-paper-inp",disabled:t<r.length,name:"smailyFormField",value:t<r?r[t].label||"":s.smailyFormField||"",onChange:n=>F(n,t,i,l),children:[e.jsx("option",{value:"",children:c("Select Field","bit-integrations")}),t<r.length?e.jsx("option",{value:r[t].key,children:r[t].label},r[t].key):o.map(({key:n,label:m})=>e.jsx("option",{value:n,children:m},n)),e.jsx("option",{value:"customFieldKey",children:c("Custom Field","bit-integrations")})]}),s.smailyFormField==="customFieldKey"&&e.jsx(v,{field:s,index:t,smailyConf:i,setSmailyConf:l,fieldValue:"customFieldKey",fieldLabel:"Custom Field Key",className:"ml-2"})]}),t>=r.length&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>N(t,i,l),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>I(t,i,l),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function U({formFields:t,handleInput:a,smailyConf:s,setSmailyConf:i,loading:l,setLoading:r,setSnackbar:o}){return g.useState({name:"",api_user_name:""}),g.useState(!1),e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsxs("div",{children:[e.jsx("br",{}),e.jsx("div",{className:"mt-5",children:e.jsx("b",{className:"wdt-100",children:c("Field Map","bit-integrations")})}),e.jsx("br",{}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:c("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:c("Smaily Fields","bit-integrations")})})]}),s==null?void 0:s.field_map.map((u,b)=>e.jsx(R,{i:b,field:u,smailyConf:s,formFields:t,setSmailyConf:i,setSnackbar:o},`rp-m-${b+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>N(s.field_map.length,s,i),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:c("Utilities","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(V,{smailyConf:s,setSmailyConf:i,formFields:t})]})]})}export{U as S};
