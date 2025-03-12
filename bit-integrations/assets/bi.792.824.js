var k=Object.defineProperty;var F=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var g=(t,i,n)=>i in t?k(t,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[i]=n,x=(t,i)=>{for(var n in i||(i={}))w.call(i,n)&&g(t,n,i[n]);if(F)for(var n of F(i))I.call(i,n)&&g(t,n,i[n]);return t};import{f as L,j as s,L as S}from"./main-794.js";import{e as T,_ as l}from"./bi.828.0.js";import{a as y,b as _,d as $}from"./bi.950.730.js";import{a as q,h as R}from"./bi.499.3.js";import{T as V}from"./bi.257.704.js";import{g as z,a as A,b as u}from"./bi.313.823.js";import{z as P}from"./bi.266.440.js";function E({i:t,field:i,formFields:n,mailercloudConf:e,setMailercloudConf:r}){var c,b,h,N;const j=L(T),{isPro:d}=j;if(((c=e==null?void 0:e.field_map)==null?void 0:c.length)===1&&i.mailercloudFormField===""){const a=x({},e),v=z(a);a.field_map=v,r(a)}const m=((b=e==null?void 0:e.default)==null?void 0:b.fields.filter(a=>a.required===!0))||[],p=((h=e==null?void 0:e.default)==null?void 0:h.fields.filter(a=>a.required===!1))||[];return s.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:s.jsxs("div",{className:"pos-rel flx",children:[s.jsxs("div",{className:"flx integ-fld-wrp",children:[s.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",onChange:a=>{y(a,t,e,r)},value:i.formField||"",children:[s.jsx("option",{value:"",children:l("Select Field")}),s.jsx("optgroup",{label:l("Form Fields","bit-integrations"),children:n==null?void 0:n.map(a=>s.jsx("option",{value:a.name,children:a.label},`ff-rm-${a.name}`))}),s.jsx("option",{value:"custom",children:l("Custom...")}),s.jsx("optgroup",{label:sprintf(l("General Smart Codes %s","bit-integrations"),d?"":`(${l("Pro","bit-integrations")})`),children:d&&((N=q)==null?void 0:N.map(a=>s.jsx("option",{value:a.name,children:a.label},`ff-rm-${a.name}`)))})]}),i.formField==="custom"&&s.jsx(V,{onChange:a=>R(a,t,e,r),label:l("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:i.customValue,placeholder:l("Custom Value","bit-integrations"),formFields:n}),s.jsxs("select",{className:"btcd-paper-inp",disabled:t<m.length,name:"mailercloudFormField",onChange:a=>{y(a,t,e,r)},value:t<m.length?m[t].key||"":i.mailercloudFormField||"",children:[s.jsx("option",{value:"",children:l("Select Field")}),t<m.length?s.jsx("option",{value:m[t].key,children:m[t].label},m[t].key):p.map(({key:a,label:v})=>s.jsx("option",{value:a,children:v},a))]})]}),s.jsx("button",{onClick:()=>_(t,e,r),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),s.jsx("button",{onClick:()=>$(t,e,r),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:s.jsx("span",{className:"btcd-icn icn-trash-2"})})]})})}function O({mailercloudConf:t,setMailercloudConf:i,formFields:n,loading:e,setLoading:r}){var m;const j=["active","bounce","abuse","unsubscribe","suppressed","spam complaints"],d=p=>{const c=x({},t),{name:b,value:h}=p.target;switch(h!==""?c[b]=h:delete c[b],b){case"listId":c.field_map=[{formField:"",mailercloudFormField:""}],c.contactType="";break}u(c,i,e,r),i(x({},c))};return s.jsxs("div",{className:"mt-2",children:[!e.page&&s.jsxs("div",{className:"flx mt-2",children:[s.jsx("b",{className:"wdt-200 d-in-b ",children:l("List:")}),s.jsxs("select",{onChange:d,name:"listId",value:t==null?void 0:t.listId,className:"btcd-paper-inp w-5 mx-0",children:[s.jsx("option",{value:"",children:l("Select List")}),((m=t==null?void 0:t.default)==null?void 0:m.lists)&&t.default.lists.map(p=>s.jsx("option",{value:p.id,children:p.name},p.id))]}),s.jsx("button",{onClick:()=>A(t,i,e,r),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh list"'},type:"button",disabled:e.list,children:"↻"}),e.list&&s.jsx(P,{size:"20",clr:"#022217",className:"ml-2"})]}),t.listId&&s.jsxs("div",{className:"flx mt-2",children:[s.jsx("b",{className:"wdt-200 d-in-b ",children:l("Contact type:")}),s.jsxs("select",{onChange:d,name:"contactType",value:t==null?void 0:t.contactType,className:"btcd-paper-inp w-5 mx-0",children:[s.jsx("option",{value:"",children:l("Select type")}),j.map(p=>s.jsx("option",{value:p,children:p.toUpperCase()},p))]})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx("b",{className:"wdt-100",children:l("Map Fields","bit-integrations")}),s.jsx("button",{onClick:()=>u(t,i,e,r),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Refresh Mailer Cloud Field","bit-integrations")}'`},type:"button",disabled:e.field,children:"↻"})]}),s.jsx("div",{className:"btcd-hr mt-2 mb-4"}),(e.page||e.field)&&s.jsx(S,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),(t==null?void 0:t.listId)&&t.default.fields&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:l("Form Fields")})}),s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:l("Mailercloud Fields")})})]}),t==null?void 0:t.field_map.map((p,c)=>s.jsx(E,{i:c,field:p,formFields:n,mailercloudConf:t,setMailercloudConf:i},`ko-m-${c+8}`)),s.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:s.jsx("button",{onClick:()=>_(t.field_map.length,t,i),className:"icn-btn sh-sm",type:"button",children:"+"})})]})]})}export{O as M};
