var I=Object.defineProperty;var _=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var y=(l,r,a)=>r in l?I(l,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[r]=a,o=(l,r)=>{for(var a in r||(r={}))M.call(r,a)&&y(l,a,r[a]);if(_)for(var a of _(r))k.call(r,a)&&y(l,a,r[a]);return l};import{f as w,j as e}from"./main-494.js";import{e as T,_ as d}from"./bi.185.0.js";import{a as L,h as S,b as U}from"./bi.104.3.js";import{T as V}from"./bi.617.11.js";import{T as q}from"./bi.378.675.js";const D=(l,r,a,i)=>{const m=o({},r);m.name=l.target.value,a(o({},m))},H=l=>!((l!=null&&l.field_map?l.field_map.filter(a=>!a.formField||!a.getgistFormField||!a.formField==="custom"&&!a.customValue):[]).length>0),$=l=>{const r=l==null?void 0:l.gistFields.filter(a=>a.required===!0);return r.length>0?r.map(a=>({formField:"",getgistFormField:a.key})):[{formField:"",getgistFormField:""}]};function R({i:l,formFields:r,field:a,getgistConf:i,setGetgistConf:m}){var u,c,N;const v=w(T),{isPro:h}=v;if(((u=i==null?void 0:i.field_map)==null?void 0:u.length)===1&&(a==null?void 0:a.getgistFormField)===""){const s=o({},i),t=$(s);s.field_map=t,m(s)}const x=s=>{const t=o({},i);t.field_map.splice(s,0,{}),m(t)},j=s=>{const t=o({},i);t.field_map.length>1&&t.field_map.splice(s,1),m(t)},b=(s,t)=>{const F=o({},i);F.field_map[t][s.target.name]=s.target.value,s.target.value==="custom"&&(F.field_map[t].customValue=""),m(F)},n=(i==null?void 0:i.gistFields.filter(s=>s.required===!0))||[],p=(i==null?void 0:i.gistFields.filter(s=>s.required===!1))||[];return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:a.formField||"",onChange:s=>b(s,l),children:[e.jsx("option",{value:"",children:d("Select Field","bit-integrations")}),e.jsx("optgroup",{label:d("Form Fields","bit-integrations"),children:r.map(s=>s.type!=="file"&&e.jsx("option",{value:s.name,children:s.label},`ff-getgist-${s.name}`))}),e.jsx("option",{value:"custom",children:d("Custom...","bit-integrations")}),e.jsx("optgroup",{label:sprintf(d("General Smart Codes %s","bit-integrations"),h?"":`(${d("Pro","bit-integrations")})`),children:h&&((c=L)==null?void 0:c.map(s=>e.jsx("option",{value:s.name,children:s.label},`ff-rm-${s.name}`)))})]}),a.formField==="custom"&&e.jsx(q,{onChange:s=>S(s,l,i,m),label:d("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:a.customValue,placeholder:d("Custom Value","bit-integrations"),formFields:r}),e.jsxs("select",{className:"btcd-paper-inp",disabled:l<n.length,name:"getgistFormField",value:l<n.length?((N=n[l])==null?void 0:N.key)||"":a.getgistFormField||"",onChange:s=>b(s,l),children:[e.jsx("option",{value:"",children:d("Select Field","bit-integrations")}),l<n.length?e.jsx("option",{value:n[l].key,children:n[l].label},n[l].key):p.map(({key:s,label:t})=>e.jsx("option",{value:s,children:t},s))]})]}),l>=(n==null?void 0:n.length)&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>x(l),className:"icn-btn sh-sm ml-2",type:"button",children:"+"}),e.jsx("button",{onClick:()=>j(l),className:"icn-btn sh-sm ml-2",type:"button","aria-label":"btn",children:e.jsx(V,{})})]})]})})}function J({formFields:l,getgistConf:r,setGetgistConf:a,isLoading:i,setIsLoading:m,error:v,setError:h}){const x=[{key:"User",label:"User"},{key:"Lead",label:"Lead"}],j=()=>Math.floor((1+Math.random())*4294967296).toString(16).substring(1),b=n=>{const{name:p,value:u}=n.target,c=o({},r);c[p]=u,u==="User"?u==="User"&&(c.userId=j()):c!=null&&c.userId&&delete c.userId,a(o({},c))};return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:d("User Type:","bit-integrations")}),e.jsxs("select",{onChange:b,name:"user_type",value:r==null?void 0:r.user_type,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:d("Select User Type","bit-integrations")}),x.map(({key:n,label:p})=>e.jsx("option",{value:n,children:p},n))]}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:d("Map Fields","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:d("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:d("Gist Fields","bit-integrations")})})]}),r==null?void 0:r.field_map.map((n,p)=>e.jsx(R,{i:p,field:n,getgistConf:r,formFields:l,setGetgistConf:a},`getgist-m-${p+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>U(r.field_map.length,r,a),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{})]})}export{J as G,H as c,D as h};
