var F=Object.defineProperty;var x=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var j=(s,d,t)=>d in s?F(s,d,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[d]=t,c=(s,d)=>{for(var t in d||(d={}))v.call(d,t)&&j(s,t,d[t]);if(x)for(var t of x(d))_.call(d,t)&&j(s,t,d[t]);return s};import{f as w,j as e}from"./main-441.js";import{u as y}from"./bi.141.437.js";import{e as M,_ as l}from"./bi.452.0.js";import{g as V,a as $}from"./bi.219.732.js";import{a as k,h as S}from"./bi.73.3.js";import{T as q}from"./bi.768.673.js";const N=(s,d,t)=>{const n=c({},d);n.field_map.splice(s,0,{}),t(c({},n))},L=(s,d,t)=>{const n=c({},d);n.field_map.length>1&&n.field_map.splice(s,1),t(c({},n))},g=(s,d,t,n)=>{const i=c({},t);i.field_map[d][s.target.name]=s.target.value,s.target.value==="custom"&&(i.field_map[d].customValue=""),n(c({},i))};function R({i:s,formFields:d,field:t,elasticEmailConf:n,setElasticEmailConf:i}){var a,b;if(((a=n==null?void 0:n.field_map)==null?void 0:a.length)===1&&t.elasticEmailField===""){const r=c({},n),h=V(r);r.field_map=h,i(r)}const p=(n==null?void 0:n.elasticEmailFields.filter(r=>r.required===!0))||[],m=(n==null?void 0:n.elasticEmailFields.filter(r=>r.required===!1))||[],u=w(M),{isPro:o}=u;return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:t.formField||"",onChange:r=>g(r,s,n,i),children:[e.jsx("option",{value:"",children:l("Select Field","bit-integrations")}),e.jsx("optgroup",{label:l("Form Fields","bit-integrations"),children:d==null?void 0:d.map(r=>e.jsx("option",{value:r.name,children:r.label},`ff-rm-${r.name}`))}),e.jsx("option",{value:"custom",children:l("Custom...","bit-integrations")}),e.jsx("optgroup",{label:sprintf(l("General Smart Codes %s","bit-integrations"),o?"":`(${l("Pro","bit-integrations")})`),children:o&&((b=k)==null?void 0:b.map(r=>e.jsx("option",{value:r.name,children:r.label},`ff-rm-${r.name}`)))})]}),t.formField==="custom"&&e.jsx(q,{onChange:r=>S(r,s,n,i),label:l("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:t.customValue,placeholder:l("Custom Value","bit-integrations"),formFields:d}),e.jsxs("select",{className:"btcd-paper-inp",disabled:s<p.length,name:"elasticEmailField",value:s<p.length?p[s].label||"":t.elasticEmailField||"",onChange:r=>g(r,s,n,i),children:[e.jsx("option",{value:"",children:l("Select Field","bit-integrations")}),s<p.length?e.jsx("option",{value:p[s].key,children:p[s].label},p[s].key):m.map(({key:r,label:h})=>e.jsx("option",{value:r,children:h},r))]})]}),s>=p.length&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>N(s,n,i),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>L(s,n,i),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function D({formFields:s,handleInput:d,elasticEmailConf:t,setElasticEmailConf:n,isLoading:i,setIsLoading:p,setSnackbar:m}){var o;const u=a=>{const b=c({},t);b.list_id=a?a.split(","):[],n(c({},b))};return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsxs("div",{className:"flx",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:l("Lists:","bit-integrations")}),e.jsx(y,{defaultValue:t.list_id,className:"btcd-paper-drpdwn w-5",options:((o=t==null?void 0:t.default)==null?void 0:o.lists)&&t.default.lists.map(a=>({label:a.listName,value:a.listName.toString()})),onChange:a=>u(a)}),e.jsx("button",{onClick:()=>$(t,n,p),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Fetch All Recipients","bit-integrations")}'`},type:"button",disabled:i,children:"↻"})]}),e.jsx("br",{}),e.jsx("div",{className:"mt-5",children:e.jsx("b",{className:"wdt-100",children:l("Field Map","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:l("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:l("Elastic Email Fields","bit-integrations")})})]}),t.list_id&&(t==null?void 0:t.field_map.map((a,b)=>e.jsx(R,{i:b,field:a,elasticEmailConf:t,formFields:s,setElasticEmailConf:n,setSnackbar:m},`rp-m-${b+9}`))),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>N(t.field_map.length,t,n),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{})]})}export{D as E};
