var T=Object.defineProperty;var k=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var I=(e,a,s)=>a in e?T(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s,c=(e,a)=>{for(var s in a||(a={}))f.call(a,s)&&I(e,s,a[s]);if(k)for(var s of k(a))L.call(a,s)&&I(e,s,a[s]);return e};import{r as F,j as t,L as y,i as V}from"./main-80.js";import{_ as n,m as S,e as _,n as A,j as q,k as $,l as R,o as P,N as E}from"./bi.433.0.js";import{T as U}from"./bi.895.650.js";function H({sliceWpConf:e,setSliceWpConf:a,formFields:s}){var p,v;const[l,d]=F.useState(!1),[m,o]=F.useState({show:!1,action:()=>{}}),g=[{key:"pending",label:n("Pending","bit-integrations")},{key:"paid",label:n("Paid","bit-integrations")},{key:"unpaid",label:n("Unpaid","bit-integrations")},{key:"rejected",label:n("Rejected","bit-integrations")}],j=[{key:"sale",label:n("Sale","bit-integrations")},{key:"subscription",label:n("Subscription","bit-integrations")}],x=(r,h)=>{var w,N;const b=c({},e);h==="status"&&((w=r.target)!=null&&w.checked?(b.actions.status=!0,o({show:"status"})):(o({show:!1}),delete b.actions.status)),h==="types"&&((N=r.target)!=null&&N.checked?(b.actions.types=!0,o({show:"types"})):(o({show:!1}),delete b.actions.types)),a(c({},b))},i=()=>{o({show:!1})},u=(r,h)=>{const b=c({},e);h==="statusId"&&(r!==""?b[h]=r:delete b[h]),h==="typeId"&&(r!==""?b[h]=r:delete b[h]),a(c({},b))};return t.jsxs("div",{className:"pos-rel d-flx w-8",children:[t.jsx(S,{checked:((p=e==null?void 0:e.actions)==null?void 0:p.status)||!1,onChange:r=>x(r,"status"),className:"wdt-200 mt-4 mr-2",value:"status",title:n("Add Status","bit-integrations"),subTitle:n("Add status of SliceWp","bit-integrations")}),t.jsxs(_,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:n("Ok","bit-integrations"),show:m.show==="status",close:i,action:i,title:n("Status","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:n("Select Status","bit-integrations")}),l?t.jsx(y,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsx("div",{className:"flx flx-between mt-2",children:t.jsx(A,{className:"msl-wrp-options",defaultValue:e==null?void 0:e.statusId,options:g.map(r=>({label:r.label,value:r.key})),onChange:r=>u(r,"statusId"),singleSelect:!0})})]}),t.jsx(S,{checked:((v=e==null?void 0:e.actions)==null?void 0:v.types)||!1,onChange:r=>x(r,"types"),className:"wdt-200 mt-4 mr-2",value:"types",title:n("Add Type","bit-integrations"),subTitle:n("Add Type","bit-integrations")}),t.jsxs(_,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:n("Ok","bit-integrations"),show:m.show==="types",close:i,action:i,title:n("Type","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:n("Select type","bit-integrations")}),l?t.jsx(y,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsx("div",{className:"flx flx-between mt-2",children:t.jsx(A,{className:"msl-wrp-options",defaultValue:e==null?void 0:e.typeId,options:j.map(r=>({label:r.label,value:r.key})),onChange:r=>u(r,"typeId"),singleSelect:!0})})]})]})}const X=(e,a,s,l,d,m)=>{const o=c({},a),{name:g}=e.target;e.target.value!==""?o[g]=e.target.value:delete o[g],o[e.target.name]=e.target.value,s(c({},o))},O=e=>{const a=e==null?void 0:e.sliceWpFields.filter(s=>s.required===!0);return a.length>0?a.map(s=>({formField:"",slicewpFormField:s.key})):[{formField:"",slicewpFormField:""}]},Y=e=>!((e.field_map?e.field_map.filter(s=>!s.formField||!s.slicewpFormField):[]).length>0),B=(e,a,s)=>{const l=c({},a);l.field_map.splice(e,0,{}),s(c({},l))},D=(e,a,s)=>{const l=c({},a);l.field_map.length>1&&l.field_map.splice(e,1),s(c({},l))},M=(e,a,s,l)=>{const d=c({},s);d.field_map[a][e.target.name]=e.target.value,e.target.value==="custom"&&(d.field_map[a].customValue=""),l(c({},d))};function G({i:e,formFields:a,field:s,sliceWpConf:l,setSliceWpConf:d}){var x;F.useEffect(()=>{var i;if(((i=l==null?void 0:l.field_map)==null?void 0:i.length)===1&&s.slicewpFormField===""){const u=c({},l),p=O(u);u.field_map=p,d(u)}},[]);const m=(l==null?void 0:l.sliceWpFields.filter(i=>i.required===!0))||[],o=(l==null?void 0:l.sliceWpFields.filter(i=>i.required===!1))||[],g=V(q),{isPro:j}=g;return t.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:t.jsxs("div",{className:"pos-rel flx",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:s.formField||"",onChange:i=>M(i,e,l,d),children:[t.jsx("option",{value:"",children:n("Select Field","bit-integrations")}),t.jsx("optgroup",{label:n("Form Fields","bit-integrations"),children:a==null?void 0:a.map(i=>t.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`))}),t.jsx("option",{value:"custom",children:n("Custom...","bit-integrations")}),t.jsx("optgroup",{label:sprintf(n("General Smart Codes %s","bit-integrations"),j?"":`(${n("Pro","bit-integrations")})`),children:j&&((x=$)==null?void 0:x.map(i=>t.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`)))})]}),s.formField==="custom"&&t.jsx(U,{onChange:i=>R(i,e,l,d),label:n("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:s.customValue,placeholder:n("Custom Value","bit-integrations"),formFields:a}),t.jsxs("select",{className:"btcd-paper-inp",disabled:e<m.length,name:"slicewpFormField",value:e<m.length?m[e].key||"":s.slicewpFormField||"",onChange:i=>M(i,e,l,d),children:[t.jsx("option",{value:"",children:n("Select Field","bit-integrations")}),e<m.length?t.jsx("option",{value:m[e].key,children:m[e].label},m[e].key):o.map(({key:i,label:u})=>t.jsx("option",{value:i,children:u},i))]})]}),e>=m.length&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>B(e,l,d),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),t.jsx("button",{onClick:()=>D(e,l,d),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:t.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function Z({formFields:e,handleInput:a,sliceWpConf:s,setSliceWpConf:l,isLoading:d,setIsLoading:m,setSnackbar:o,allIntegURL:g,isInfo:j,edit:x}){return t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("b",{className:"wdt-200 d-in-b",children:n("Actions:","bit-integrations")}),t.jsxs("select",{onChange:a,name:"mainAction",value:s==null?void 0:s.mainAction,className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"",children:n("Select Actions","bit-integrations")}),(s==null?void 0:s.allActions)&&s.allActions.map(({key:i,label:u})=>t.jsx("option",{value:i,children:u},i))]}),t.jsx("br",{}),t.jsx("br",{}),d&&t.jsx(y,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),t.jsxs(t.Fragment,{children:[["1"].includes(s==null?void 0:s.mainAction)&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:n("Map Fields","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:n("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:n("SliceWp Fields","bit-integrations")})})]}),s.field_map.map((i,u)=>t.jsx(G,{i:u,field:i,sliceWpConf:s,formFields:e,setSliceWpConf:l},`dash-m-${u+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>P(s.field_map.length,s,l),className:"icn-btn sh-sm",type:"button",children:"+"})})]}),t.jsx("br",{}),t.jsx("br",{}),s.mainAction==="1"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:n("Utilities","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsx(H,{sliceWpConf:s,setSliceWpConf:l,formFields:e})]})]}),t.jsx("br",{}),t.jsx(E,{note:n("Some integrations will only work for logged-in users.","bit-integrations")})]})}export{Z as S,Y as c,X as h};