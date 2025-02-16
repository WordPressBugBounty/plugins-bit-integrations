var F=Object.defineProperty;var g=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var b=(l,i,e)=>i in l?F(l,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[i]=e,h=(l,i)=>{for(var e in i||(i={}))N.call(i,e)&&b(l,e,i[e]);if(g)for(var e of g(i))_.call(i,e)&&b(l,e,i[e]);return l};import{f as y,j as t}from"./main-320.js";import{e as w,_ as c}from"./bi.576.0.js";import{a as A,h as M,b as $}from"./bi.337.3.js";import{g as k,z as R}from"./bi.82.768.js";import{T as S}from"./bi.468.689.js";const V=(l,i,e)=>{const s=h({},i);s.field_map.splice(l,0,{}),e(h({},s))},q=(l,i,e)=>{const s=h({},i);s.field_map.length>1&&s.field_map.splice(l,1),e(h({},s))},v=(l,i,e,s)=>{const d=h({},e);d.field_map[i][l.target.name]=l.target.value,l.target.value==="custom"&&(d.field_map[i].customValue=""),s(h({},d))};function T({i:l,formFields:i,field:e,zoomWebinarConf:s,setZoomWebinarConf:d}){var r,j;if(((r=s==null?void 0:s.field_map)==null?void 0:r.length)===1&&e.zoomField===""){const a=h({},s),u=k(a);a.field_map=u,d(a)}const n=(s==null?void 0:s.zoomWebinarFields.filter(a=>a.required===!0))||[],x=(s==null?void 0:s.zoomWebinarFields.filter(a=>a.required===!1))||[],m=y(w),{isPro:p}=m;return t.jsx("div",{className:"flx mt-2 mr-1",children:t.jsxs("div",{className:"pos-rel flx",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:e.formField||"",onChange:a=>v(a,l,s,d),children:[t.jsx("option",{value:"",children:c("Select Field","bit-integrations")}),t.jsx("optgroup",{label:c("Form Fields","bit-integrations"),children:i==null?void 0:i.map(a=>t.jsx("option",{value:a.name,children:a.label},`ff-rm-${a.name}`))}),t.jsx("option",{value:"custom",children:c("Custom...","bit-integrations")}),t.jsx("optgroup",{label:sprintf(c("General Smart Codes %s","bit-integrations"),p?"":`(${c("Pro","bit-integrations")})`),children:p&&((j=A)==null?void 0:j.map(a=>t.jsx("option",{value:a.name,children:a.label},`ff-rm-${a.name}`)))})]}),e.formField==="custom"&&t.jsx(S,{onChange:a=>M(a,l,biginConf,setBiginConf),label:c("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:e.customValue,placeholder:c("Custom Value","bit-integrations"),formFields:i}),t.jsxs("select",{className:"btcd-paper-inp",disabled:l<n.length,name:"zoomField",value:l<n.length?n[l].key||"":e.zoomField||"",onChange:a=>v(a,l,s,d),children:[t.jsx("option",{value:"",children:c("Select Field","bit-integrations")}),l<n.length?t.jsx("option",{value:n[l].key,children:n[l].label},n[l].key):x.map(({key:a,label:u})=>t.jsx("option",{value:a,children:u},a))]})]}),l>=n.length&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>V(l,s,d),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),t.jsx("button",{onClick:()=>q(l,s,d),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:t.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function D({formFields:l,handleInput:i,zoomWebinarConf:e,setZoomWebinarConf:s,isLoading:d,setIsLoading:n,setSnackbar:x}){var m;return t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("b",{className:"wdt-200 d-in-b",children:c("All Webinars:","bit-integrations")}),t.jsxs("select",{onChange:i,name:"id",value:e.id,className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"",children:c("Select Webinar","bit-integrations")}),((m=e==null?void 0:e.default)==null?void 0:m.allWebinar)&&e.default.allWebinar.map(({id:p,topic:r})=>t.jsx("option",{value:p,children:r},p))]}),t.jsx("button",{onClick:()=>R(null,e,s,n,x),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${c("Fetch All Recipients","bit-integrations")}'`},type:"button",disabled:d,children:"↻"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("b",{className:"wdt-200 d-in-b",children:c("Action:","bit-integrations")}),t.jsxs("select",{onChange:i,name:"selectedActions",value:e.selectedActions,className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"",children:c("Select Action","bit-integrations")}),(e==null?void 0:e.allActions)&&e.allActions.map(({key:p,value:r})=>t.jsx("option",{value:r,children:r},p))]}),t.jsx("div",{className:"mt-5",children:t.jsx("b",{className:"wdt-100",children:c("Field Map","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-1",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:c("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:c("ZoomWebinar Fields","bit-integrations")})})]}),e==null?void 0:e.field_map.map((p,r)=>t.jsx(T,{i:r,field:p,zoomWebinarConf:e,formFields:l,setZoomWebinarConf:s,setSnackbar:x},`rp-m-${r+9}`)),t.jsx("div",{className:"txt-center  mt-2",style:{marginRight:85},children:t.jsx("button",{onClick:()=>$(e.field_map.length,e,s,!1),className:"icn-btn sh-sm",type:"button",children:"+"})}),t.jsx("br",{}),t.jsx("br",{})]})}export{D as Z};
