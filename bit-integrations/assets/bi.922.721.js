var w=Object.defineProperty;var N=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var g=(a,l,s)=>l in a?w(a,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[l]=s,p=(a,l)=>{for(var s in l||(l={}))y.call(l,s)&&g(a,s,l[s]);if(N)for(var s of N(l))I.call(l,s)&&g(a,s,l[s]);return a};import{f as T,j as t}from"./main-920.js";import{e as $,_ as d}from"./bi.247.0.js";import{ag as M}from"./bi.761.437.js";import{a as S,h as V,b as q}from"./bi.658.3.js";import{T as R}from"./bi.941.11.js";import{T as k}from"./bi.722.674.js";function z({i:a,formFields:l,field:s,enchargeConf:e,setEnchargeConf:c}){var j,v,F,h;const n=s.required,r=((j=e==null?void 0:e.default)==null?void 0:j.fields)&&Object.values((v=e==null?void 0:e.default)==null?void 0:v.fields).filter(i=>!i.required),o=i=>{const m=p({},e);m.field_map.splice(i,0,{}),c(m)},_=i=>{const m=p({},e);m.field_map.length>1&&m.field_map.splice(i,1),c(m)},u=(i,m)=>{const b=p({},e);b.field_map[m][i.target.name]=i.target.value,i.target.value==="custom"&&(b.field_map[m].customValue=""),c(b)},f=T($),{isPro:x}=f;return t.jsxs("div",{className:n?"mt-2 mr-1 flx w-9":"flx mt-2 mb-2 btcbi-field-map",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:s.formField||"",onChange:i=>u(i,a),children:[t.jsxs("optgroup",{label:d("Form Fields","bit-integrations"),children:[t.jsx("option",{value:"",children:d("Select Field","bit-integrations")}),l.map(i=>i.type!=="file"&&t.jsx("option",{value:i.name,children:i.label},`ff-zhcrm-${i.name}`))]}),t.jsx("option",{value:"custom",children:d("Custom...","bit-integrations")}),t.jsx("optgroup",{label:sprintf(d("General Smart Codes %s","bit-integrations"),x?"":`(${d("Pro","bit-integrations")})`),children:x&&((F=S)==null?void 0:F.map(i=>t.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`)))})]}),s.formField==="custom"&&t.jsx(k,{onChange:i=>V(i,a,e,c),label:d("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:s.customValue,placeholder:d("Custom Value","bit-integrations"),formFields:l}),t.jsxs("select",{className:"btcd-paper-inp",name:"enChargeFields",value:s.enChargeFields,onChange:i=>u(i,a),disabled:n,children:[t.jsx("option",{value:"",children:d("Select Field","bit-integrations")}),n?((h=e==null?void 0:e.default)==null?void 0:h.fields)&&Object.values(e.default.fields).map(i=>t.jsx("option",{value:i.fieldId,children:i.fieldName},`${i.fieldId}-1`)):r&&r.map(i=>t.jsx("option",{value:i.fieldId,children:i.fieldName},`${i.fieldId}-1`))]}),!n&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>o(a),className:"icn-btn sh-sm ml-2",type:"button",children:"+"}),t.jsx("button",{onClick:()=>_(a),className:"icn-btn sh-sm ml-2",type:"button","aria-label":"btn",children:t.jsx(R,{})})]})]})}function E({formID:a,formFields:l,enchargeConf:s,setEnchargeConf:e}){var n;const c=r=>{const o=p({},s);o[r.target.name]=r.target.value,e(o)};return t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsxs("div",{className:"flx",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:d("Tags:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5 mt-1",onChange:c,name:"tags",value:s.tags||"",type:"text",placeholder:d("tag-1, tag-2","bit-integrations")}),t.jsx(M,{width:250,icnSize:17,className:"ml-2",children:t.jsx("div",{className:"txt-body",children:d("Tags separate with comma","bit-integrations")})})]}),((n=s==null?void 0:s.default)==null?void 0:n.fields)!==0&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:d("Map Fields","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:d("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:d("Encharge Fields","bit-integrations")})})]}),s.field_map.map((r,o)=>t.jsx(z,{i:o,field:r,enchargeConf:s,formFields:l,setEnchargeConf:e},`sendinblue-m-${o+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>q(s.field_map.length,s,e),className:"icn-btn sh-sm",type:"button",children:"+"})}),t.jsx("br",{}),t.jsx("br",{})]})]})}export{E};
