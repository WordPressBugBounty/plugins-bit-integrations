var P=Object.defineProperty;var F=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var N=(t,i,r)=>i in t?P(t,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[i]=r,x=(t,i)=>{for(var r in i||(i={}))$.call(i,r)&&N(t,r,i[r]);if(F)for(var r of F(i))L.call(i,r)&&N(t,r,i[r]);return t};import{f as I,j as e,L as M}from"./main-920.js";import{e as w,_ as l,s as S}from"./bi.247.0.js";import{a as g,d as q,g as T,b as V}from"./bi.768.783.js";import{a as R,h as A}from"./bi.658.3.js";import{T as B}from"./bi.722.674.js";function _({i:t,field:i,formFields:r,klaviyoConf:d,setKlaviyoConf:b,type:m}){var n;const p=I(w),{isPro:h}=p,c=(d==null?void 0:d.klaviyoFields.filter(s=>s.required===!0))||[],u=(d==null?void 0:d.klaviyoFields.filter(s=>s.required===!1))||[],a=(s,j)=>{const o=x({},d);o[m][j][s.target.name]=s.target.value,b(o)};return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",onChange:s=>{a(s,t)},value:i.formField||"",children:[e.jsx("option",{value:"",children:l("Select Field","bit-integrations")}),e.jsx("optgroup",{label:l("Form Fields","bit-integrations"),children:r==null?void 0:r.map(s=>e.jsx("option",{value:s.name,children:s.label},`ff-rm-${s.name}`))}),e.jsx("option",{value:"custom",children:l("Custom...","bit-integrations")}),e.jsx("optgroup",{label:sprintf(l("General Smart Codes %s","bit-integrations"),h?"":`(${l("Pro","bit-integrations")})`),children:h&&((n=R)==null?void 0:n.map(s=>e.jsx("option",{value:s.name,children:s.label},`ff-rm-${s.name}`)))})]}),i.formField==="custom"&&e.jsx(B,{onChange:s=>A(s,t),label:l("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:i.customValue,placeholder:l("Custom Value","bit-integrations"),formFields:r}),m==="field_map"?e.jsxs("select",{className:"btcd-paper-inp",disabled:t<c.length,name:"klaviyoFormField",onChange:s=>{a(s,t)},value:t<c.length?c[t].key||"":i.klaviyoFormField||"",children:[e.jsx("option",{value:"",children:l("Select Field","bit-integrations")}),t<c.length?e.jsx("option",{value:c[t].key,children:c[t].label},c[t].key):u.map(({key:s,label:j})=>e.jsx("option",{value:s,children:j},s))]}):e.jsx("input",{className:"btcd-paper-inp",name:"klaviyoFormField",value:i.klaviyoFormField||"",onChange:s=>{a(s,t)},type:"text"})]}),e.jsx("button",{onClick:()=>g(t,d,b,m),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>q(t,d,b,m),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})})}function O({klaviyoConf:t,setKlaviyoConf:i,formFields:r,loading:d,setLoading:b}){var c,u;const m=I(w),{isPro:p}=m,h=a=>{const n=x({},t),{name:s}=a.target;switch(a.target.value!==""?n[s]=a.target.value:delete n[s],n[a.target.name]=a.target.value,a.target.name){case"listId":n.field_map=V(n),n.custom_field_map=[{formField:"",klaviyoFormField:""}];break}i(x({},n))};return e.jsxs("div",{children:[e.jsx("b",{className:"wdt-200 d-in-b mt-2",children:l("List:","bit-integrations")}),e.jsxs("select",{name:"listId",value:t.listId,onChange:h,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:l("Select List","bit-integrations")}),((c=t==null?void 0:t.default)==null?void 0:c.lists)&&t.default.lists.map((a,n)=>{var s;return e.jsx("option",{value:a==null?void 0:a.id,children:(s=a==null?void 0:a.attributes)==null?void 0:s.name},n)})]}),e.jsx("button",{onClick:()=>T(t,i,d,b),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh list"'},type:"button",disabled:d.list,children:"↻"}),d.list&&e.jsx(M,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),(t==null?void 0:t.listId)&&e.jsxs("div",{className:"mt-5",children:[e.jsx("b",{className:"wdt-100",children:l("Field Map","bit-integrations")}),e.jsx("div",{className:"btcd-hr mt-2 mb-4"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:l("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:l("Klaviyo Fields","bit-integrations")})})]}),t==null?void 0:t.field_map.map((a,n)=>e.jsx(_,{i:n,field:a,formFields:r,klaviyoConf:t,setKlaviyoConf:i,type:"field_map"},`ko-m-${n+8}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>g(t.field_map.length,t,i,"field_map"),className:"icn-btn sh-sm",type:"button",children:"+"})})]}),(t==null?void 0:t.listId)&&e.jsxs("div",{className:"mt-5",children:[e.jsxs("b",{className:"wdt-100",children:[l("Custom Properties","bit-integrations")," ",p?"":`(${l("Pro","bit-integrations")})`]}),e.jsx("div",{className:"btcd-hr mt-2 mb-4"}),p?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:l("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:l("Klaviyo Property name","bit-integrations")})})]}),(u=t==null?void 0:t.custom_field_map)==null?void 0:u.map((a,n)=>e.jsx(_,{i:n,field:a,formFields:r,klaviyoConf:t,setKlaviyoConf:i,type:"custom_field_map"},`ko-m-${n+8}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>{var a;return g((a=t==null?void 0:t.custom_field_map)==null?void 0:a.length,t,i,"custom_field_map")},className:"icn-btn sh-sm",type:"button",children:"+"})})]}):e.jsx("p",{children:S(l("The Bit Integration Pro v(%s) plugin needs to be installed and activated to enable the %s feature","bit-integrations"),"2.2.2",l("Custom Properties","bit-integrations"))})]})]})}export{O as K};
