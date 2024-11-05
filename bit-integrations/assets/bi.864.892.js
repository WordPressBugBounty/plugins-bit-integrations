var b=Object.defineProperty;var g=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var j=(a,l,i)=>l in a?b(a,l,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[l]=i,o=(a,l)=>{for(var i in l||(l={}))w.call(l,i)&&j(a,i,l[i]);if(g)for(var i of g(l))F.call(l,i)&&j(a,i,l[i]);return a};import{r as k,j as t,L as y}from"./main-955.js";import{ad as T,u}from"./bi.326.431.js";import{_ as e}from"./bi.223.0.js";import{a as _}from"./bi.696.9.js";import{b as S}from"./bi.300.11.js";import{g as A}from"./bi.65.891.js";import{a as G,h as V}from"./bi.864.3.js";import{T as q}from"./bi.991.663.js";function I({sureMembersConf:a,setSureMembersConf:l,loading:i,setLoading:c}){const[n,d]=k.useState({show:!1}),m=s=>{A(a,l,c);const x=o({},a);d({show:"group"}),l(o({},x))},p=()=>{d({show:!1})},h=(s,x)=>{const r=o({},a);r[x]=s,l(o({},r))};return t.jsxs("div",{className:"pos-rel d-flx w-8",children:[t.jsx(S,{checked:a.selectedGroup||!1,onChange:s=>m(),className:"wdt-200 mt-4 mr-2",value:"select_group",title:e("Select group","bit-integrations"),subTitle:e("Select a group to grant or revoke access.","bit-integrations")}),t.jsxs(_,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:e("Ok","bit-integrations"),show:n.show==="group",close:p,action:p,title:e("Groups","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsxs("div",{className:"mt-2 flx",children:[e("Select group","bit-integrations"),t.jsx(T,{width:250,icnSize:17,className:"ml-1",children:t.jsx("div",{className:"txt-body",children:e("The user will be added or removed from the selected group","bit-integrations")})})]}),i.groups?t.jsx(y,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsx("div",{className:"mt-2",children:t.jsx(u,{options:a.groups,className:"msl-wrp-options",defaultValue:a==null?void 0:a.selectedGroup,onChange:s=>h(s,"selectedGroup"),style:{width:"100%"},singleSelect:!0})})]})]})}const N=(a,l,i)=>{const c=o({},l);c.field_map.splice(a,0,{}),i(o({},c))},L=(a,l,i)=>{const c=o({},l);c.field_map.length>1&&c.field_map.splice(a,1),i(o({},c))},v=(a,l,i,c)=>{const n=o({},i);n.field_map[l][a.target.name]=a.target.value,a.target.value==="custom"&&(n.field_map[l].customValue=""),c(o({},n))};function U({i:a,formFields:l,field:i,sureMembersConf:c,setSureMembersConf:n}){var p,h;const d=(c==null?void 0:c.staticFields.filter(s=>s.required===!0))||[],m=((p=c==null?void 0:c.staticFields)==null?void 0:p.filter(s=>s.required===!1))||[];return t.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:t.jsxs("div",{className:"pos-rel flx",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:i.formField||"",onChange:s=>v(s,a,c,n),children:[t.jsx("option",{value:"",children:e("Select Field","bit-integrations")}),t.jsx("optgroup",{label:e("Form Fields","bit-integrations"),children:l==null?void 0:l.map(s=>t.jsx("option",{value:s.name,children:s.label},`ff-rm-${s.name}`))}),t.jsx("option",{value:"custom",children:e("Custom...","bit-integrations")}),t.jsx("optgroup",{label:"General Smart Codes",children:(h=G)==null?void 0:h.map(s=>t.jsx("option",{value:s.name,children:s.label},`ff-rm-${s.name}`))})]}),i.formField==="custom"&&t.jsx(q,{onChange:s=>V(s,a,c,n),label:e("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:i.customValue,placeholder:e("Custom Value","bit-integrations"),formFields:l}),t.jsxs("select",{className:"btcd-paper-inp",disabled:a<d.length,name:"sureMembersField",value:a<d?d[a].label||"":i.sureMembersField||"",onChange:s=>v(s,a,c,n),children:[t.jsx("option",{value:"",children:e("Select Field","bit-integrations")}),a<d.length?t.jsx("option",{value:d[a].key,children:d[a].label},d[a].key):m.map(({key:s,label:x})=>t.jsx("option",{value:s,children:x},s))]})]}),t.jsx("div",{className:"flx integ-fld-wrp",children:a>=d.length&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>N(a,c,n),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),t.jsx("button",{onClick:()=>L(a,c,n),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:t.jsx("span",{className:"btcd-icn icn-trash-2"})})]})})]})})}function K({formFields:a,sureMembersConf:l,setSureMembersConf:i,loading:c,setLoading:n,setSnackbar:d}){const m=p=>{const h=o({},l);h.selectedTask=p,i(o({},h))};return t.jsx(t.Fragment,{children:t.jsxs("div",{children:[t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:e("Select Task:","bit-integrations")}),t.jsx(u,{style:{width:"450px"},options:[{label:e("Add User to Access Group","bit-integrations"),value:"grantAccess"},{label:e("Remove User from Access Group","bit-integrations"),value:"revokeAccess"}],className:"msl-wrp-options",defaultValue:l==null?void 0:l.selectedTask,onChange:p=>m(p),singleSelect:!0})]}),t.jsx("br",{}),t.jsx("div",{className:"mt-5",children:t.jsx("b",{className:"wdt-100",children:e("Field Map","bit-integrations")})}),t.jsx("br",{}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:e("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:e("SureMembers Fields","bit-integrations")})})]}),(l==null?void 0:l.selectedTask)&&(l==null?void 0:l.field_map.map((p,h)=>t.jsx(U,{i:h,field:p,sureMembersConf:l,formFields:a,setSureMembersConf:i,setSnackbar:d},`rp-m-${h+9}`))),(l==null?void 0:l.selectedTask)&&t.jsxs("div",{children:[t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>N(l.field_map.length,l,i),className:"icn-btn sh-sm",type:"button",children:"+"})}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:e("Utilities","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsx(I,{sureMembersConf:l,setSureMembersConf:i,loading:c,setLoading:n})]})]})})}export{K as S};