var $=Object.defineProperty;var g=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var j=(t,l,e)=>l in t?$(t,l,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[l]=e,o=(t,l)=>{for(var e in l||(l={}))M.call(l,e)&&j(t,e,l[e]);if(g)for(var e of g(l))T.call(l,e)&&j(t,e,l[e]);return t};import{f as w,j as a}from"./main-34.js";import{e as q,_ as c}from"./bi.671.0.js";import{T as C}from"./bi.22.11.js";import{a as S}from"./bi.633.3.js";import{T as V}from"./bi.623.673.js";const N=(t,l,e,s)=>{const i=o({},e);i[t].splice(l,0,{}),s(o({},i))},z=(t,l,e,s)=>{const i=o({},e);i[t].length>1&&i[t].splice(l,1),s(o({},i))},_=(t,l,e,s,i)=>{const r=o({},s);r[t][e][l.target.name]=l.target.value,i(o({},r))},D=t=>!((t!=null&&t.post_map?t.post_map.filter(e=>!e.formField&&e.postFormField&&e.required):[]).length>0),H=t=>!((t!=null&&t.pod_map?t.pod_map.filter(e=>!e.formField&&e.podFormField&&e.required):[]).length>0);function J({i:t,type:l,formFields:e,field:s,podsConf:i,setPodsConf:r,podFields:p,fieldType:f}){var d;const v={post:{propName:"post_map",fldName:"postFormField"},pod:{propName:"pod_field_map",fldName:"podField"},podFile:{propName:"pod_file_map",fldName:"podFile"}},{propName:m,fldName:u}=v[l],b=!!p.find(n=>n.key===s[u]&&n.required),y=w(q),{isPro:h}=y,F=(n,k)=>{const x=o({},i);x[m][k].customValue=n,r(x)};return a.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[a.jsxs("div",{className:"flx integ-fld-wrp",children:[a.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:s.formField||"",onChange:n=>_(m,n,t,i,r),children:[a.jsx("option",{value:"",children:c("Select Field","bit-integrations")}),f==="fields"?a.jsxs(a.Fragment,{children:[a.jsx("optgroup",{label:c("Form Fields","bit-integrations"),children:e==null?void 0:e.map(n=>n.type!=="file"&&a.jsx("option",{value:n.name,children:n.label},`ff-zhcrm-${n.name}`))}),a.jsx("option",{value:"custom",children:c("Custom...","bit-integrations")}),a.jsx("optgroup",{label:sprintf(c("General Smart Codes %s","bit-integrations"),h?"":`(${c("Pro","bit-integrations")})`),children:h&&((d=S)==null?void 0:d.map(n=>a.jsx("option",{value:n.name,children:n.label},`ff-zhcrm-${n.name}`)))})]}):e==null?void 0:e.map(n=>n.type==="file"&&a.jsx("option",{value:n.name,children:n.label},`ff-zhcrm-${n.name}`))]}),s.formField==="custom"&&a.jsx(V,{onChange:n=>F(n,t),label:c("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:s.customValue||"",placeholder:c("type # to use trigger field","bit-integrations"),formFields:e}),a.jsxs("select",{className:"btcd-paper-inp",name:u,value:s[u]||"",onChange:n=>_(m,n,t,i,r),disabled:b,children:[a.jsx("option",{value:"",children:c("Select Field","bit-integrations")}),p==null?void 0:p.map(n=>a.jsx("option",{value:n.key,children:`${n.name}`},`${n.key}-1`))]})]}),b?a.jsx("button",{onClick:()=>N(m,t,i,r),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}):a.jsxs(a.Fragment,{children:[a.jsx("button",{onClick:()=>N(m,t,i,r),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),a.jsx("button",{onClick:()=>z(m,t,i,r),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:a.jsx(C,{})})]})]})}export{J as P,N as a,H as b,D as c};