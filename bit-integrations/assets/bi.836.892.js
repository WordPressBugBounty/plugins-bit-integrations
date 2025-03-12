var V=Object.defineProperty;var w=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var _=(d,t,l)=>t in d?V(d,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):d[t]=l,b=(d,t)=>{for(var l in t||(t={}))I.call(t,l)&&_(d,l,t[l]);if(w)for(var l of w(t))L.call(t,l)&&_(d,l,t[l]);return d};import{f as k,j as e,L as R}from"./main-794.js";import{e as T,_ as i}from"./bi.828.0.js";import{a as q,M as O,b as S}from"./bi.499.3.js";import{r as U,a as M}from"./bi.766.891.js";import{T as H,b as P}from"./bi.690.11.js";function A({i:d,formFields:t,field:l,mailifyConf:a,setMailifyConf:n}){var g,v,N,F;const r=l.required,p=((g=a==null?void 0:a.default)==null?void 0:g.fields)&&Object.values((v=a==null?void 0:a.default)==null?void 0:v.fields).filter(s=>!s.required),j=k(T),{isPro:x}=j,u=s=>{const c=b({},a);c.field_map.splice(s,0,{}),n(c)},o=s=>{const c=b({},a);c.field_map.length>1&&c.field_map.splice(s,1),n(c)},m=(s,c)=>{const h=b({},a);h.field_map[c][s.target.name]=s.target.value,s.target.value==="custom"&&(h.field_map[c].customValue=""),n(h)},$=(s,c)=>{const h=b({},a);h.field_map[c].customValue=s.target.value,n(h)};return e.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:l.formField||"",onChange:s=>m(s,d),children:[e.jsx("option",{value:"",children:i("Select Field","bit-integrations")}),e.jsx("optgroup",{label:i("List Fields","bit-integrations"),children:t==null?void 0:t.map(s=>e.jsx("option",{value:s.name,children:s.label},`ff-rm-${s.name}`))}),e.jsx("option",{value:"custom",children:i("Custom...","bit-integrations")}),e.jsx("optgroup",{label:`${i("General Smart Codes","bit-integrations")} ${x?"":`(${i("Pro","bit-integrations")})`}`,children:x&&((N=q)==null?void 0:N.map(s=>e.jsx("option",{value:s.name,children:s.label},`ff-rm-${s.name}`)))})]}),l.formField==="custom"&&e.jsx(O,{onChange:s=>$(s,d),label:i("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:l.customValue,placeholder:i("Custom Value","bit-integrations")}),e.jsxs("select",{className:"btcd-paper-inp",name:"mailifyField",value:l.mailifyField||"",onChange:s=>m(s,d),disabled:r,children:[e.jsx("option",{value:"",children:i("Select Field","bit-integrations")}),r?((F=a==null?void 0:a.default)==null?void 0:F.fields)&&Object.values(a.default.fields).map(s=>e.jsx("option",{value:s.fieldValue,children:s.fieldName},`${s.fieldValue}`)):p&&p.map(s=>e.jsx("option",{value:s.fieldValue,children:s.fieldName},`${s.fieldValue}`))]})]}),!r&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>u(d),className:"icn-btn sh-sm ml-2",type:"button",children:"+"}),e.jsx("button",{onClick:()=>o(d),className:"icn-btn sh-sm ml-2",type:"button","aria-label":"btn",children:e.jsx(H,{})})]})]})}function B({mailifyConf:d,setMailifyConf:t}){var a;const l=(n,r)=>{const p=b({},d);r==="update"&&(n.target.checked?p.actions.update=!0:delete p.actions.update),t(b({},p))};return e.jsx("div",{className:"pos-rel d-flx w-8",children:e.jsx(P,{checked:((a=d.actions)==null?void 0:a.update)||!1,onChange:n=>l(n,"update"),className:"wdt-200 mt-4 mr-2",value:"user_share",title:i("Update Mailify","bit-integrations"),subTitle:i("Update Responses with Mailify existing email?","bit-integrations")})})}function Q({formFields:d,mailifyConf:t,setMailifyConf:l,isLoading:a,setIsLoading:n,setSnackbar:r}){var j,x;const p=u=>{const o=u.target.value,m=b({},t);o&&(m.listId=o),M(m,l,n,r)};return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:i("List:","bit-integrations")}),e.jsxs("select",{value:t==null?void 0:t.listId,name:"listId",id:"",className:"btcd-paper-inp w-5",onChange:p,children:[e.jsx("option",{value:"",children:i("Select List","bit-integrations")}),((j=t==null?void 0:t.default)==null?void 0:j.mailifyLists)&&Object.keys(t.default.mailifyLists).map(u=>e.jsx("option",{value:t.default.mailifyLists[u].listId,children:t.default.mailifyLists[u].listName},`${u+1}`))]}),e.jsx("button",{onClick:()=>U(t,l,n,r),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Mailify list"'},type:"button",disabled:a,children:"↻"}),e.jsx("br",{}),e.jsx("br",{}),a&&e.jsx(R,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,translist:"scale(0.7)"}}),e.jsxs("div",{className:"mt-4",children:[e.jsx("b",{className:"wdt-100",children:i("Map Fields","bit-integrations")}),e.jsx("button",{onClick:()=>M(t,l,n,r),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${i("Refresh Mailify Field","bit-integrations")}'`},type:"button",disabled:a,children:"↻"})]}),((t==null?void 0:t.listId)||((x=t==null?void 0:t.default)==null?void 0:x.fields))&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:i("List Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:i("Mailify Fields","bit-integrations")})})]}),t.field_map.map((u,o)=>e.jsx(A,{i:o,field:u,mailifyConf:t,formFields:d,setMailifyConf:l},`Mailify-m-${o+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>S(t.field_map.length,t,l),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:i("Utilities","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(B,{mailifyConf:t,setMailifyConf:l})]})]})}export{Q as M};
