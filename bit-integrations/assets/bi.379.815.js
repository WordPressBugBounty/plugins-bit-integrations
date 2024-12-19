var A=Object.defineProperty;var F=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var w=(t,l,s)=>l in t?A(t,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[l]=s,m=(t,l)=>{for(var s in l||(l={}))$.call(l,s)&&w(t,s,l[s]);if(F)for(var s of F(l))V.call(l,s)&&w(t,s,l[s]);return t};import{r as N,j as e,L as T,f as I}from"./main-404.js";import{x as S}from"./bi.613.437.js";import{_ as n,e as R}from"./bi.51.0.js";import{a as L}from"./bi.964.9.js";import{b as p}from"./bi.484.11.js";import{g as y,a as q,e as U,b as _}from"./bi.58.814.js";import{a as z,h as G}from"./bi.488.3.js";import{T as P}from"./bi.841.674.js";function f({emailOctopusConf:t,setEmailOctopusConf:l,loading:s,setLoading:a}){var j,g,i;const[d,c]=N.useState({show:!1,action:()=>{}}),x=(r,b)=>{var v;const h=m({},t);b==="tag"&&((v=r.target)!=null&&v.checked?(y(t,l,a),h.actions.tags=!0):(c({show:!1}),delete h.actions.tags),c({show:"tag"})),b==="update"&&(r.target.checked?h.actions.update=!0:delete h.actions.update),b==="status"&&(r.target.checked?h.actions.status=!0:delete h.actions.status),l(m({},h))},u=()=>{c({show:!1})},o=r=>{const b=m({},t);b.selectedTags=r,l(m({},b))};return e.jsxs("div",{className:"pos-rel d-flx w-8",children:[e.jsx(p,{checked:(t==null?void 0:t.selectedTags.length)||!1,onChange:r=>x(r,"tag"),className:"wdt-200 mt-4 mr-2",value:"tags",title:n("Add Tags","bit - integrations"),subTitle:n("Selects tags for contact")}),e.jsx(p,{checked:((j=t.actions)==null?void 0:j.update)||!1,onChange:r=>x(r,"update"),className:"wdt-200 mt-4 mr-2",value:"update_contact",title:n("Update Contact","bit-integrations"),subTitle:n("Update an existing contact's info by responses.","bit-integrations")}),e.jsx(p,{checked:((g=t.actions)==null?void 0:g.status)||!1,onChange:r=>x(r,"status"),className:"wdt-200 mt-4 mr-2",value:"subscriber_status",title:n("Unsubscribe contact","bit-integrations"),subTitle:n('Set the contact status to "unsubscribed".',"bit-integrations")}),e.jsxs(L,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:n("Ok","bit-integrations"),show:d.show==="tag",close:u,action:u,title:n("Tags","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2",children:n("Select tags","bit-integrations")}),s.tags?e.jsx(T,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(S,{options:(i=t==null?void 0:t.tags)==null?void 0:i.map(r=>({label:r.name,value:r.name})),className:"msl-wrp-options",defaultValue:t==null?void 0:t.selectedTags,onChange:r=>o(r)}),e.jsx("button",{onClick:()=>y(t,l,a),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${n("Refresh Groups","bit-integrations")}'`},type:"button",children:"↻"})]})]})]})}const M=(t,l,s)=>{const a=m({},l);a.field_map.splice(t,0,{}),s(m({},a))},B=(t,l,s)=>{const a=m({},l);a.field_map.length>1&&a.field_map.splice(t,1),s(m({},a))},k=(t,l,s,a)=>{const d=m({},s);d.field_map[l][t.target.name]=t.target.value,t.target.value==="custom"&&(d.field_map[l].customValue=""),a(m({},d))};function H({i:t,formFields:l,field:s,emailOctopusConf:a,setEmailOctopusConf:d}){var j,g;const c=(a==null?void 0:a.emailOctopusFields.filter(i=>i.required===!0))||[],x=(a==null?void 0:a.emailOctopusFields.filter(i=>i.required===!1))||[];if(((j=a==null?void 0:a.field_map)==null?void 0:j.length)===1&&s.emailOctopusFormField===""){const i=m({},a),r=q(i);i.field_map=r,d(i)}const u=I(R),{isPro:o}=u;return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:s.formField||"",onChange:i=>k(i,t,a,d),children:[e.jsx("option",{value:"",children:n("Select Field","bit-integrations")}),e.jsx("optgroup",{label:n("Form Fields","bit-integrations"),children:l==null?void 0:l.map(i=>e.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`))}),e.jsx("option",{value:"custom",children:n("Custom...","bit-integrations")}),e.jsx("optgroup",{label:sprintf(n("General Smart Codes %s","bit-integrations"),o?"":`(${n("Pro","bit-integrations")})`),children:o&&((g=z)==null?void 0:g.map(i=>e.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`)))})]}),s.formField==="custom"&&e.jsx(P,{onChange:i=>G(i,t,a,d),label:n("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:s.customValue,placeholder:n("Custom Value","bit-integrations"),formFields:l}),e.jsxs("select",{className:"btcd-paper-inp",disabled:t<c.length,name:"emailOctopusFormField",value:t<c?c[t].label||"":s.emailOctopusFormField||"",onChange:i=>k(i,t,a,d),children:[e.jsx("option",{value:"",children:n("Select Field","bit-integrations")}),t<c.length?e.jsx("option",{value:c[t].key,children:c[t].label},c[t].key):x.map(({key:i,label:r})=>e.jsx("option",{value:i,children:r},i))]})]}),t>=c.length&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>M(t,a,d),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>B(t,a,d),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function C({formFields:t,handleInput:l,emailOctopusConf:s,setEmailOctopusConf:a,loading:d,setLoading:c,setSnackbar:x}){var r;const[u,o]=N.useState({name:"",auth_token:""}),[j,g]=N.useState(!1),i=b=>{const h=m({},s);h.selectedList=b,a(m({},h)),_(h,a,c)};return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsxs("div",{className:"flx",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:n("Select List:","bit-integrations")}),e.jsx(S,{singleSelect:!0,options:(r=s.lists)==null?void 0:r.map(b=>({label:b.name,value:b.id})),className:"msl-wrp-options",defaultValue:s==null?void 0:s.selectedList,onChange:b=>i(b)}),e.jsx("button",{onClick:()=>U(s,a,o,g,d,c,"refreshLists"),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${n("Refresh  Lists","bit-integrations")}'`},type:"button",disabled:d.lists,children:"↻"})]}),(d.lists||d.customFields)&&e.jsx(T,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),e.jsxs("div",{children:[e.jsx("br",{}),e.jsx("div",{className:"mt-5",children:e.jsxs("b",{className:"wdt-100",children:[n("Field Map","bit-integrations"),e.jsx("button",{onClick:()=>_(s,a,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${n("Refresh custom fields","bit-integrations")}'`},type:"button",disabled:d.customFields||!s.selectedList,children:"↻"})]})}),e.jsx("br",{}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:n("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:n("EmailOctopus Fields","bit-integrations")})})]}),d.emailOctopusFields&&e.jsxs("div",{children:[" ",s==null?void 0:s.field_map.map((b,h)=>e.jsx(H,{i:h,field:b,emailOctopusConf:s,formFields:t,setEmailOctopusConf:a,setSnackbar:x},`rp-m-${h+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>M(s.field_map.length,s,a),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:n("Utilities","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(f,{emailOctopusConf:s,setEmailOctopusConf:a,formFields:t,loading:d,setLoading:c})]})]})]})}export{C as E};
