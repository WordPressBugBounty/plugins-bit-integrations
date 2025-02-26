var v=Object.defineProperty;var m=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var j=(l,i,t)=>i in l?v(l,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[i]=t,h=(l,i)=>{for(var t in i||(i={}))N.call(i,t)&&j(l,t,i[t]);if(m)for(var t of m(i))y.call(i,t)&&j(l,t,i[t]);return l};import{f as _,j as e,L as M}from"./main-586.js";import{e as w,_ as n}from"./bi.612.0.js";import{a as A,h as $,b as k}from"./bi.993.3.js";import"./bi.960.440.js";import{z as R,r as V}from"./bi.516.770.js";import{T as q}from"./bi.546.692.js";const S=(l,i,t)=>{const s=h({},i);s.field_map.splice(l,0,{}),t(h({},s))},T=(l,i,t)=>{const s=h({},i);s.field_map.length>1&&s.field_map.splice(l,1),t(h({},s))},g=(l,i,t,s)=>{const r=h({},t);r.field_map[i][l.target.name]=l.target.value,l.target.value==="custom"&&(r.field_map[i].customValue=""),s(h({},r))};function P({i:l,formFields:i,field:t,zoomConf:s,setZoomConf:r}){var d,u;if(((d=s==null?void 0:s.field_map)==null?void 0:d.length)===1&&t.zoomField===""){const a=h({},s);r(a)}const c=(s==null?void 0:s.zoomFields.filter(a=>a.required===!0))||[],b=(s==null?void 0:s.zoomFields.filter(a=>a.required===!1))||[],x=_(w),{isPro:p}=x;return e.jsx("div",{className:"flx mt-2 mr-1",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:t.formField||"",onChange:a=>g(a,l,s,r),children:[e.jsx("option",{value:"",children:n("Select Field","bit-integrations")}),e.jsx("optgroup",{label:n("Form Fields","bit-integrations"),children:i==null?void 0:i.map(a=>e.jsx("option",{value:a.name,children:a.label},`ff-rm-${a.name}`))}),e.jsx("option",{value:"custom",children:n("Custom...","bit-integrations")}),e.jsx("optgroup",{label:sprintf(n("General Smart Codes %s","bit-integrations"),p?"":`(${n("Pro","bit-integrations")})`),children:p&&((u=A)==null?void 0:u.map(a=>e.jsx("option",{value:a.name,children:a.label},`ff-rm-${a.name}`)))})]}),t.formField==="custom"&&e.jsx(q,{onChange:a=>$(a,l,s,r),label:n("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:t.customValue,placeholder:n("Custom Value","bit-integrations"),formFields:i}),e.jsxs("select",{className:"btcd-paper-inp",disabled:l<c.length,name:"zoomField",value:l<c.length?c[l].key||"":t.zoomField||"",onChange:a=>g(a,l,s,r),children:[e.jsx("option",{value:"",children:n("Select Field","bit-integrations")}),l<c.length?e.jsx("option",{value:c[l].key,children:c[l].label},c[l].key):b.map(({key:a,label:F})=>e.jsx("option",{value:a,children:F},a))]})]}),l>=c.length&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>S(l,s,r),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>T(l,s,r),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function K({formFields:l,handleInput:i,zoomConf:t,setZoomConf:s,isLoading:r,setIsLoading:c,setSnackbar:b}){var x;return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:n("All Meetings:","bit-integrations")}),e.jsxs("select",{onChange:i,name:"id",value:t.id,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:n("Select Meeting","bit-integrations")}),((x=t==null?void 0:t.default)==null?void 0:x.allMeeting)&&t.default.allMeeting.map(({id:p,topic:d})=>e.jsx("option",{value:p,children:d},p))]}),e.jsx("button",{onClick:()=>R(null,t,s,c,b),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${n("Fetch All Meeting","bit-integrations")}'`},type:"button",disabled:r,children:"↻"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:n("Action:","bit-integrations")}),e.jsxs("select",{onChange:i,name:"selectedActions",value:t.selectedActions,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:n("Select Action","bit-integrations")}),(t==null?void 0:t.allActions)&&t.allActions.map(({key:p,value:d})=>e.jsx("option",{value:d,children:d},p))]}),r&&e.jsx(M,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),t.id&&!r&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mt-5",children:[e.jsx("b",{className:"wdt-100",children:n("Field Map","bit-integrations")}),e.jsx("button",{onClick:()=>V(t,s,c,b),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${n("Refresh fields","bit-integrations")}'`},type:"button",disabled:r,children:"↻"})]}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-1",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:n("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:n("Zoom Fields","bit-integrations")})})]}),t==null?void 0:t.field_map.map((p,d)=>e.jsx(P,{i:d,field:p,zoomConf:t,formFields:l,setZoomConf:s,setSnackbar:b},`rp-m-${d+9}`)),e.jsx("div",{className:"txt-center  mt-2",style:{marginRight:85},children:e.jsx("button",{onClick:()=>k(t.field_map.length,t,s,!1),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{})]})]})}export{K as Z};
