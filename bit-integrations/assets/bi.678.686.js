var $=Object.defineProperty;var g=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var j=(t,a,e)=>a in t?$(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,c=(t,a)=>{for(var e in a||(a={}))M.call(a,e)&&j(t,e,a[e]);if(g)for(var e of g(a))T.call(a,e)&&j(t,e,a[e]);return t};import{i as w,j as l}from"./main-692.js";import{j as q,_ as o,k as C,T as S}from"./bi.751.13.js";import{T as V}from"./bi.588.657.js";const N=(t,a,e,s)=>{const i=c({},e);i[t].splice(a,0,{}),s(c({},i))},z=(t,a,e,s)=>{const i=c({},e);i[t].length>1&&i[t].splice(a,1),s(c({},i))},_=(t,a,e,s,i)=>{const r=c({},s);r[t][e][a.target.name]=a.target.value,i(c({},r))},A=t=>!((t!=null&&t.post_map?t.post_map.filter(e=>!e.formField&&e.postFormField&&e.required):[]).length>0),B=t=>!((t!=null&&t.pod_map?t.pod_map.filter(e=>!e.formField&&e.podFormField&&e.required):[]).length>0);function D({i:t,type:a,formFields:e,field:s,podsConf:i,setPodsConf:r,podFields:p,fieldType:v}){var d;const y={post:{propName:"post_map",fldName:"postFormField"},pod:{propName:"pod_field_map",fldName:"podField"},podFile:{propName:"pod_file_map",fldName:"podFile"}},{propName:m,fldName:u}=y[a],b=!!p.find(n=>n.key===s[u]&&n.required),F=w(q),{isPro:h}=F,f=(n,k)=>{const x=c({},i);x[m][k].customValue=n,r(x)};return l.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[l.jsxs("div",{className:"flx integ-fld-wrp",children:[l.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:s.formField||"",onChange:n=>_(m,n,t,i,r),children:[l.jsx("option",{value:"",children:o("Select Field","bit-integrations")}),v==="fields"?l.jsxs(l.Fragment,{children:[l.jsx("optgroup",{label:o("Form Fields","bit-integrations"),children:e==null?void 0:e.map(n=>n.type!=="file"&&l.jsx("option",{value:n.name,children:n.label},`ff-zhcrm-${n.name}`))}),l.jsx("option",{value:"custom",children:o("Custom...","bit-integrations")}),l.jsx("optgroup",{label:sprintf(o("General Smart Codes %s","bit-integrations"),h?"":`(${o("Pro","bit-integrations")})`),children:h&&((d=C)==null?void 0:d.map(n=>l.jsx("option",{value:n.name,children:n.label},`ff-zhcrm-${n.name}`)))})]}):e==null?void 0:e.map(n=>n.type==="file"&&l.jsx("option",{value:n.name,children:n.label},`ff-zhcrm-${n.name}`))]}),s.formField==="custom"&&l.jsx(V,{onChange:n=>f(n,t),label:o("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:s.customValue||"",placeholder:o("type # to use trigger field","bit-integrations"),formFields:e}),l.jsxs("select",{className:"btcd-paper-inp",name:u,value:s[u]||"",onChange:n=>_(m,n,t,i,r),disabled:b,children:[l.jsx("option",{value:"",children:o("Select Field","bit-integrations")}),p==null?void 0:p.map(n=>l.jsx("option",{value:n.key,children:`${n.name}`},`${n.key}-1`))]})]}),b?l.jsx("button",{onClick:()=>N(m,t,i,r),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}):l.jsxs(l.Fragment,{children:[l.jsx("button",{onClick:()=>N(m,t,i,r),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),l.jsx("button",{onClick:()=>z(m,t,i,r),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:l.jsx(S,{})})]})]})}export{D as P,N as a,B as b,A as c};
