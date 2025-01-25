var R=Object.defineProperty;var w=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var y=(l,d,t)=>d in l?R(l,d,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[d]=t,o=(l,d)=>{for(var t in d||(d={}))V.call(d,t)&&y(l,t,d[t]);if(w)for(var t of w(d))$.call(d,t)&&y(l,t,d[t]);return l};import{j as e,f as q,r as I,L as K}from"./main-252.js";import{x as v}from"./bi.269.440.js";import{_ as r,e as L}from"./bi.63.0.js";import{g as E,a as S,b as p,d as T,e as _,f as M}from"./bi.618.860.js";import{M as O,a as P,h as B}from"./bi.163.3.js";import{T as G}from"./bi.570.683.js";import{a as U}from"./bi.456.9.js";import{b as z}from"./bi.494.11.js";const u=(l,d,t)=>{const a=o({},d);a.field_map.splice(l,0,{}),t(o({},a))},D=(l,d,t)=>{const a=o({},d);a.field_map.length>1&&a.field_map.splice(l,1),t(o({},a))},A=(l,d,t,a)=>{const i=o({},t);i.field_map[d][l.target.name]=l.target.value,l.target.value==="custom"&&(i.field_map[d].customValue=""),l.target.value==="customFieldKey"&&(i.field_map[d].customFieldKey=""),a(o({},i))},H=(l,d,t,a,i)=>{const m=o({},t);m.field_map[d][i]=l.target.value,a(o({},m))};function J({field:l,index:d,conf:t,setConf:a,fieldValue:i,fieldLabel:m,className:b}){return e.jsx(O,{onChange:c=>H(c,d,t,a,i),label:r(m,"bit-integrations"),className:b,type:"text",value:l[i],placeholder:r(m,"bit-integrations")})}function Q({i:l,formFields:d,field:t,clickupConf:a,setClickupConf:i}){var g,F;let m=[];a.actionName==="task"&&(m=a==null?void 0:a.taskFields);const b=m.filter(s=>s.required===!0)||[],j=[...m.filter(s=>s.required===!1)||[],...(a==null?void 0:a.customFields)||[]];if(((g=a==null?void 0:a.field_map)==null?void 0:g.length)===1&&t.clickupFormField===""){const s=o({},a),n=E(s);s.field_map=n,i(s)}const h=q(L),{isPro:N}=h;return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:t.formField||"",onChange:s=>A(s,l,a,i),children:[e.jsx("option",{value:"",children:r("Select Field","bit-integrations")}),e.jsx("optgroup",{label:r("Form Fields","bit-integrations"),children:d==null?void 0:d.map(s=>e.jsx("option",{value:s.name,children:s.label},`ff-rm-${s.name}`))}),e.jsx("option",{value:"custom",children:r("Custom...","bit-integrations")}),e.jsx("optgroup",{label:sprintf(r("General Smart Codes %s","bit-integrations"),N?"":`(${r("Pro","bit-integrations")})`),children:N&&((F=P)==null?void 0:F.map(s=>e.jsx("option",{value:s.name,children:s.label},`ff-rm-${s.name}`)))})]}),t.formField==="custom"&&e.jsx(G,{onChange:s=>B(s,l,a,i),label:r("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:t.customValue,placeholder:r("Custom Value","bit-integrations"),formFields:d}),e.jsxs("select",{className:"btcd-paper-inp",disabled:l<b.length,name:"clickupFormField",value:l<b?b[l].label||"":t.clickupFormField||"",onChange:s=>A(s,l,a,i),children:[e.jsx("option",{value:"",children:r("Select Field","bit-integrations")}),l<b.length?e.jsx("option",{value:b[l].key,children:b[l].label},b[l].key):j.map(({key:s,label:n})=>e.jsx("option",{value:s,children:n},s)),a.actionName==="task"&&e.jsx("option",{value:"customFieldKey",children:r("Custom Field","bit-integrations")})]}),t.clickupFormField==="customFieldKey"&&e.jsx(J,{field:t,index:l,conf:a,setConf:i,fieldValue:"customFieldKey",fieldLabel:"Custom Field Key",className:"ml-2"})]}),l>=b.length&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>u(l,a,i),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>D(l,a,i),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function W({clickupConf:l,setClickupConf:d,formFields:t,loading:a,setLoading:i}){const[m,b]=I.useState({show:!1,action:()=>{}}),c=()=>{b({show:!1})},j=(h,N)=>{const g=o({},l);g[N]=h,d(o({},g))};return e.jsxs("div",{className:"pos-rel d-flx flx-wrp",children:[e.jsx(z,{checked:(l==null?void 0:l.attachment)||!1,onChange:()=>b({show:"attachment"}),className:"wdt-200 mt-4 mr-2",value:"attachment",title:r("Add Attachment","bit - integrations"),subTitle:r("Add attachment in the task")}),e.jsxs(U,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:r("Ok","bit-integrations"),show:m.show==="attachment",close:c,action:c,title:r("Select file upload field","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2"}),e.jsx("div",{className:"mt-2",children:r("Select file upload field","bit-integrations")}),e.jsx(v,{defaultValue:l==null?void 0:l.attachment,className:"mt-2 w-9",onChange:h=>j(h,"attachment"),options:t.filter(h=>h.type==="file").map(h=>({label:h.label,value:h.name})),closeOnSelect:!0})]})]})}function ae({formFields:l,handleInput:d,clickupConf:t,setClickupConf:a,loading:i,setLoading:m,setSnackbar:b}){var h,N,g,F;const c=s=>{const n=o({},t);n.field_map=[{formField:"",clickupFormField:""}];const{name:x}=s.target;s.target.value!==""?(n[x]=s.target.value,s.target.value==="task"&&(n.selectedTeam!=""||n.selectedTeam!=null)&&S(n,a,m)):delete n[x],a(o({},n))},j=(s,n)=>{const x=o({},t);x[n]=s,n==="selectedList"&&s!==""&&t.actionName==="task"?M(x,a,m):n==="selectedFolder"&&s!==""&&t.actionName==="task"?_(x,a,m):n==="selectedSpace"&&s!==""&&t.actionName==="task"?T(x,a,m):n==="selectedTeam"&&s!==""&&t.actionName==="task"&&p(x,a,m),a(o({},x))};return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:r("Select Action:","bit-integrations")}),e.jsxs("select",{onChange:c,name:"actionName",value:t.actionName,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:r("Select an action","bit-integrations")}),e.jsx("option",{value:"task",children:r("Create Task","bit-integrations")})]}),t.actionName==="task"&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"flx",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:r("Select Team:","bit-integrations")}),e.jsx(v,{options:(h=t==null?void 0:t.Teams)==null?void 0:h.map(s=>({label:s.name,value:s.id})),className:"msl-wrp-options dropdown-custom-width",defaultValue:t==null?void 0:t.selectedTeam,onChange:s=>j(s,"selectedTeam"),disabled:i.Teams,singleSelect:!0}),e.jsx("button",{onClick:()=>S(t,a,m),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${r("Refresh teams","bit-integrations")}'`},type:"button",disabled:i.Teams,children:"↻"})]})]}),t.actionName==="task"&&t.selectedTeam&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"flx",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:r("Select Space:","bit-integrations")}),e.jsx(v,{options:(N=t==null?void 0:t.Spaces)==null?void 0:N.map(s=>({label:s.name,value:s.id})),className:"msl-wrp-options dropdown-custom-width",defaultValue:t==null?void 0:t.selectedSpace,onChange:s=>j(s,"selectedSpace"),disabled:i.Spaces,singleSelect:!0}),e.jsx("button",{onClick:()=>p(t,a,m),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${r("Refresh spaces","bit-integrations")}'`},type:"button",disabled:i.Spaces,children:"↻"})]})]}),t.actionName==="task"&&t.selectedSpace&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"flx",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:r("Select Folder:","bit-integrations")}),e.jsx(v,{options:(g=t==null?void 0:t.Folders)==null?void 0:g.map(s=>({label:s.name,value:s.id})),className:"msl-wrp-options dropdown-custom-width",defaultValue:t==null?void 0:t.selectedFolder,onChange:s=>j(s,"selectedFolder"),disabled:i.Folders,singleSelect:!0}),e.jsx("button",{onClick:()=>T(t,a,m),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${r("Refresh folders","bit-integrations")}'`},type:"button",disabled:i.Folders,children:"↻"})]})]}),t.actionName==="task"&&t.selectedFolder&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"flx",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:r("Select List:","bit-integrations")}),e.jsx(v,{options:(F=t==null?void 0:t.Lists)==null?void 0:F.map(s=>({label:s.name,value:s.id})),className:"msl-wrp-options dropdown-custom-width",defaultValue:t==null?void 0:t.selectedList,onChange:s=>j(s,"selectedList"),disabled:i.Lists,singleSelect:!0}),e.jsx("button",{onClick:()=>_(t,a,m),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${r("Refresh Lists","bit-integrations")}'`},type:"button",disabled:i.Lists,children:"↻"})]})]}),(i.Teams||i.Spaces||i.Folders||i.Lists||i.customFields)&&e.jsx(K,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),t.actionName==="task"&&e.jsxs("div",{children:[e.jsx("br",{}),e.jsxs("div",{className:"mt-5",children:[e.jsx("b",{className:"wdt-100",children:r("Field Map","bit-integrations")}),e.jsx("button",{onClick:()=>M(t,a,m),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${r("Refresh fields","bit-integrations")}'`},type:"button",disabled:i.Lists,children:"↻"})]}),e.jsx("br",{}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:r("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:r("Clickup Fields","bit-integrations")})})]}),t==null?void 0:t.field_map.map((s,n)=>e.jsx(Q,{i:n,field:s,clickupConf:t,formFields:l,setClickupConf:a,setSnackbar:b},`rp-m-${n+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>u(t.field_map.length,t,a),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:r("Utilities","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(W,{clickupConf:t,setClickupConf:a,formFields:l,loading:i,setLoading:m})]})]})}export{ae as C};
