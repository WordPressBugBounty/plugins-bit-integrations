var A=Object.defineProperty;var F=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var w=(t,i,s)=>i in t?A(t,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[i]=s,x=(t,i)=>{for(var s in i||(i={}))$.call(i,s)&&w(t,s,i[s]);if(F)for(var s of F(i))V.call(i,s)&&w(t,s,i[s]);return t};import{r as p,j as e,L as T,i as I}from"./main-830.js";import{m as N,_ as n,e as R,n as S,j as L,k as q,l as U}from"./bi.597.15.js";import{g as y,a as z,e as G,b as k}from"./bi.604.799.js";import{T as P}from"./bi.715.660.js";function B({emailOctopusConf:t,setEmailOctopusConf:i,loading:s,setLoading:a}){var o,g,l;const[d,c]=p.useState({show:!1,action:()=>{}}),m=(r,b)=>{var v;const h=x({},t);b==="tag"&&((v=r.target)!=null&&v.checked?(y(t,i,a),h.actions.tags=!0):(c({show:!1}),delete h.actions.tags),c({show:"tag"})),b==="update"&&(r.target.checked?h.actions.update=!0:delete h.actions.update),b==="status"&&(r.target.checked?h.actions.status=!0:delete h.actions.status),i(x({},h))},u=()=>{c({show:!1})},j=r=>{const b=x({},t);b.selectedTags=r,i(x({},b))};return e.jsxs("div",{className:"pos-rel d-flx w-8",children:[e.jsx(N,{checked:(t==null?void 0:t.selectedTags.length)||!1,onChange:r=>m(r,"tag"),className:"wdt-200 mt-4 mr-2",value:"tags",title:n("Add Tags","bit - integrations"),subTitle:n("Selects tags for contact")}),e.jsx(N,{checked:((o=t.actions)==null?void 0:o.update)||!1,onChange:r=>m(r,"update"),className:"wdt-200 mt-4 mr-2",value:"update_contact",title:n("Update Contact","bit-integrations"),subTitle:n("Update an existing contact's info by responses.","bit-integrations")}),e.jsx(N,{checked:((g=t.actions)==null?void 0:g.status)||!1,onChange:r=>m(r,"status"),className:"wdt-200 mt-4 mr-2",value:"subscriber_status",title:n("Unsubscribe contact","bit-integrations"),subTitle:n('Set the contact status to "unsubscribed".',"bit-integrations")}),e.jsxs(R,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:n("Ok","bit-integrations"),show:d.show==="tag",close:u,action:u,title:n("Tags","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2",children:n("Select tags","bit-integrations")}),s.tags?e.jsx(T,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(S,{options:(l=t==null?void 0:t.tags)==null?void 0:l.map(r=>({label:r.name,value:r.name})),className:"msl-wrp-options",defaultValue:t==null?void 0:t.selectedTags,onChange:r=>j(r)}),e.jsx("button",{onClick:()=>y(t,i,a),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${n("Refresh Groups","bit-integrations")}'`},type:"button",children:"↻"})]})]})]})}const M=(t,i,s)=>{const a=x({},i);a.field_map.splice(t,0,{}),s(x({},a))},H=(t,i,s)=>{const a=x({},i);a.field_map.length>1&&a.field_map.splice(t,1),s(x({},a))},_=(t,i,s,a)=>{const d=x({},s);d.field_map[i][t.target.name]=t.target.value,t.target.value==="custom"&&(d.field_map[i].customValue=""),a(x({},d))};function D({i:t,formFields:i,field:s,emailOctopusConf:a,setEmailOctopusConf:d}){var o,g;const c=(a==null?void 0:a.emailOctopusFields.filter(l=>l.required===!0))||[],m=(a==null?void 0:a.emailOctopusFields.filter(l=>l.required===!1))||[];if(((o=a==null?void 0:a.field_map)==null?void 0:o.length)===1&&s.emailOctopusFormField===""){const l=x({},a),r=z(l);l.field_map=r,d(l)}const u=I(L),{isPro:j}=u;return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:s.formField||"",onChange:l=>_(l,t,a,d),children:[e.jsx("option",{value:"",children:n("Select Field","bit-integrations")}),e.jsx("optgroup",{label:n("Form Fields","bit-integrations"),children:i==null?void 0:i.map(l=>e.jsx("option",{value:l.name,children:l.label},`ff-rm-${l.name}`))}),e.jsx("option",{value:"custom",children:n("Custom...","bit-integrations")}),e.jsx("optgroup",{label:sprintf(n("General Smart Codes %s","bit-integrations"),j?"":`(${n("Pro","bit-integrations")})`),children:j&&((g=q)==null?void 0:g.map(l=>e.jsx("option",{value:l.name,children:l.label},`ff-rm-${l.name}`)))})]}),s.formField==="custom"&&e.jsx(P,{onChange:l=>U(l,t,a,d),label:n("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:s.customValue,placeholder:n("Custom Value","bit-integrations"),formFields:i}),e.jsxs("select",{className:"btcd-paper-inp",disabled:t<c.length,name:"emailOctopusFormField",value:t<c?c[t].label||"":s.emailOctopusFormField||"",onChange:l=>_(l,t,a,d),children:[e.jsx("option",{value:"",children:n("Select Field","bit-integrations")}),t<c.length?e.jsx("option",{value:c[t].key,children:c[t].label},c[t].key):m.map(({key:l,label:r})=>e.jsx("option",{value:l,children:r},l))]})]}),t>=c.length&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>M(t,a,d),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>H(t,a,d),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function Y({formFields:t,handleInput:i,emailOctopusConf:s,setEmailOctopusConf:a,loading:d,setLoading:c,setSnackbar:m}){var r;const[u,j]=p.useState({name:"",auth_token:""}),[o,g]=p.useState(!1),l=b=>{const h=x({},s);h.selectedList=b,a(x({},h)),k(h,a,c)};return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsxs("div",{className:"flx",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:n("Select List:","bit-integrations")}),e.jsx(S,{singleSelect:!0,options:(r=s.lists)==null?void 0:r.map(b=>({label:b.name,value:b.id})),className:"msl-wrp-options",defaultValue:s==null?void 0:s.selectedList,onChange:b=>l(b)}),e.jsx("button",{onClick:()=>G(s,a,j,g,d,c,"refreshLists"),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${n("Refresh  Lists","bit-integrations")}'`},type:"button",disabled:d.lists,children:"↻"})]}),(d.lists||d.customFields)&&e.jsx(T,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),e.jsxs("div",{children:[e.jsx("br",{}),e.jsx("div",{className:"mt-5",children:e.jsxs("b",{className:"wdt-100",children:[n("Field Map","bit-integrations"),e.jsx("button",{onClick:()=>k(s,a,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${n("Refresh custom fields","bit-integrations")}'`},type:"button",disabled:d.customFields||!s.selectedList,children:"↻"})]})}),e.jsx("br",{}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:n("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:n("EmailOctopus Fields","bit-integrations")})})]}),d.emailOctopusFields&&e.jsxs("div",{children:[" ",s==null?void 0:s.field_map.map((b,h)=>e.jsx(D,{i:h,field:b,emailOctopusConf:s,formFields:t,setEmailOctopusConf:a,setSnackbar:m},`rp-m-${h+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>M(s.field_map.length,s,a),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:n("Utilities","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(B,{emailOctopusConf:s,setEmailOctopusConf:a,formFields:t,loading:d,setLoading:c})]})]})]})}export{Y as E};