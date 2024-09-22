var y=Object.defineProperty;var n=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var g=(e,a,r)=>a in e?y(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r,u=(e,a)=>{for(var r in a||(a={}))k.call(a,r)&&g(e,r,a[r]);if(n)for(var r of n(a))_.call(a,r)&&g(e,r,a[r]);return e};import{i as I,j as l,L}from"./main-165.js";import{j as w,_ as s,k as S,l as M,L as $}from"./bi.312.95.js";import{h as v,a as N,d as q}from"./bi.97.843.js";import{g as V,a as F}from"./bi.806.850.js";import{T as R}from"./bi.953.732.js";function T({i:e,field:a,formFields:r,moosendConf:i,setMoosendConf:m}){var d;const x=I(w),{isPro:h}=x,p=(i==null?void 0:i.moosendFields.filter(t=>t.required===!0))||[],c=(i==null?void 0:i.moosendFields.filter(t=>t.required===!1))||[];return l.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:l.jsxs("div",{className:"pos-rel flx",children:[l.jsxs("div",{className:"flx integ-fld-wrp",children:[l.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formFields",onChange:t=>{v(t,e,i,m)},value:a.formFields||"",children:[l.jsx("option",{value:"",children:s("Select Field")}),l.jsx("optgroup",{label:s("Form Fields","bit-integrations"),children:r==null?void 0:r.map(t=>l.jsx("option",{value:t.name,children:t.label},`ff-rm-${t.name}`))}),l.jsx("option",{value:"custom",children:s("Custom...")}),l.jsx("optgroup",{label:sprintf(s("General Smart Codes %s","bit-integrations"),h?"":`(${s("Pro","bit-integrations")})`),children:h&&((d=S)==null?void 0:d.map(t=>l.jsx("option",{value:t.name,children:t.label},`ff-rm-${t.name}`)))})]}),a.formField==="custom"&&l.jsx(R,{onChange:t=>M(t,e,i,m),label:s("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:a.customValue,placeholder:s("Custom Value","bit-integrations"),formFields:r}),l.jsxs("select",{className:"btcd-paper-inp",disabled:e<p.length,name:"moosendFormFields",onChange:t=>{v(t,e,i,m)},value:e<p.length?p[e].key||"":a.moosendFormFields||"",children:[l.jsx("option",{value:"",children:s("Select Field")}),e<p.length?l.jsx("option",{value:p[e].key,children:p[e].label},p[e].key):c.map(({key:t,label:b})=>l.jsx("option",{value:t,children:b},t))]})]}),(i==null?void 0:i.method)==="1"&&l.jsxs(l.Fragment,{children:[l.jsx("button",{onClick:()=>N(e,i,m),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),l.jsx("button",{onClick:()=>q(e,i,m),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:l.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function G({moosendConf:e,setMoosendConf:a,formFields:r,loading:i,setLoading:m}){var p;const x=[{key:"1",name:s("Subscribe","bit-integrations")},{key:"0",name:s("Unsubscribe","bit-integrations")},{key:"2",name:s("Unsubscribe from list","bit-integrations")}],h=c=>{let d;const t=u({},e),{name:b,value:j}=c.target;switch(j!==""?t[b]=j:delete t[b],b){case"listId":t.field_map=[{formFields:"",moosendFormFields:""}],d=F(t),t.field_map=d;break;case"method":t.listId="",t.field_map=[{formFields:"",moosendFormFields:""}],d=F(t),t.field_map=d;break}a(u({},t))};return l.jsxs("div",{className:"mt-2",children:[!i.page&&l.jsxs("div",{className:"flx mt-2",children:[l.jsx("b",{className:"wdt-200 d-in-b ",children:s("Method:")}),l.jsxs("select",{onChange:h,name:"method",value:e==null?void 0:e.method,className:"btcd-paper-inp w-5 mx-0",children:[l.jsx("option",{value:"",children:s("Select Method")}),x.map(c=>l.jsx("option",{value:c.key,children:c.name},c.key))]})]}),e.method&&e.method!=="0"&&l.jsxs("div",{className:"flx mt-2",children:[l.jsx("b",{className:"wdt-200 d-in-b ",children:s("List:")}),l.jsxs("select",{onChange:h,name:"listId",value:e==null?void 0:e.listId,className:"btcd-paper-inp w-5 mx-0",children:[l.jsx("option",{value:"",children:s("Select List")}),((p=e==null?void 0:e.default)==null?void 0:p.lists)&&e.default.lists.map(c=>l.jsx("option",{value:c.ID,children:c.Name},c.ID))]}),l.jsx("button",{onClick:()=>V(e,a,i,m),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh list"'},type:"button",disabled:i.list,children:"↻"}),i.list&&l.jsx($,{size:"20",clr:"#022217",className:"ml-2"})]}),(e==null?void 0:e.method)&&l.jsxs("div",{className:"mt-5",children:[l.jsx("b",{className:"wdt-100",children:s("Field Map")}),l.jsx("div",{className:"btcd-hr mt-2 mb-4"}),l.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[l.jsx("div",{className:"txt-dp",children:l.jsx("b",{children:s("Form Fields")})}),l.jsx("div",{className:"txt-dp",children:l.jsx("b",{children:s("Moosend Fields")})})]}),e==null?void 0:e.field_map.map((c,d)=>l.jsx(T,{i:d,field:c,formFields:r,moosendConf:e,setMoosendConf:a},`ko-m-${d+8}`)),(e==null?void 0:e.method)==="1"&&l.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:l.jsx("button",{onClick:()=>N(e.field_map.length,e,a),className:"icn-btn sh-sm",type:"button",children:"+"})})]}),i.page&&l.jsx(L,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}})]})}export{G as M};
