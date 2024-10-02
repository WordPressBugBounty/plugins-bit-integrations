var y=Object.defineProperty;var j=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var g=(s,t,a)=>t in s?y(s,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[t]=a,b=(s,t)=>{for(var a in t||(t={}))S.call(t,a)&&g(s,a,t[a]);if(j)for(var a of j(t))w.call(t,a)&&g(s,a,t[a]);return s};import{j as e,i as _,L as $}from"./main-650.js";import{H as E,_ as d,j as k,k as M,n as v}from"./bi.541.15.js";import{g as R,a as o}from"./bi.876.860.js";const F=(s,t,a)=>{const l=b({},t);l.field_map.splice(s,0,{}),a(b({},l))},V=(s,t,a)=>{const l=b({},t);l.field_map.length>1&&l.field_map.splice(s,1),a(b({},l))},N=(s,t,a,l)=>{const i=b({},a);i.field_map[t][s.target.name]=s.target.value,s.target.value==="custom"&&(i.field_map[t].customValue=""),l(b({},i))},q=(s,t,a,l,i)=>{const r=b({},a);r.field_map[t][i]=s.target.value,l(b({},r))};function I({field:s,index:t,conf:a,setConf:l,fieldValue:i,fieldLabel:r,className:u}){return e.jsx(E,{onChange:p=>q(p,t,a,l,i),label:d(r,"bit-integrations"),className:u,type:"text",value:s[i],placeholder:d(r,"bit-integrations")})}function A({i:s,formFields:t,field:a,demioConf:l,setDemioConf:i}){var c;const r=(l==null?void 0:l.demioFields)&&l.demioFields.filter(n=>n.required===!0)||[],u=(l==null?void 0:l.demioFields)&&l.demioFields.filter(n=>n.required===!1)||[],p=_(k),{isPro:x}=p;return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:a.formField||"",onChange:n=>N(n,s,l,i),children:[e.jsx("option",{value:"",children:d("Select Field","bit-integrations")}),e.jsx("optgroup",{label:d("Form Fields","bit-integrations"),children:t==null?void 0:t.map(n=>e.jsx("option",{value:n.name,children:n.label},`ff-rm-${n.name}`))}),e.jsx("option",{value:"custom",children:d("Custom...","bit-integrations")}),e.jsx("optgroup",{label:sprintf(d("General Smart Codes %s","bit-integrations"),x?"":`(${d("Pro","bit-integrations")})`),children:x&&((c=M)==null?void 0:c.map(n=>e.jsx("option",{value:n.name,children:n.label},`ff-rm-${n.name}`)))})]}),a.formField==="custom"&&e.jsx(I,{field:a,index:s,conf:l,setConf:i,fieldValue:"customValue",fieldLabel:"Custom Value",className:"mr-2"}),e.jsxs("select",{className:"btcd-paper-inp",disabled:s<r.length,name:"demioFormField",value:s<r.length?r[s].key||"":a.demioFormField||"",onChange:n=>N(n,s,l,i),children:[e.jsx("option",{value:"",children:d("Select Field","bit-integrations")}),s<r.length?e.jsx("option",{value:r[s].key,children:r[s].label},r[s].key):u.map(({key:n,label:m})=>e.jsx("option",{value:n,children:m},n))]})]}),s>=r.length&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>F(s,l,i),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>V(s,l,i),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function L({formFields:s,demioConf:t,setDemioConf:a,loading:l,setLoading:i,isLoading:r,setIsLoading:u,setSnackbar:p}){const x=(c,n)=>{n==="selectedEvent"&&c!==""&&o(t,a,c,i),a(m=>{const h=b({},m);return h[n]=c,n==="selectedEvent"&&(delete h.selectedSession,delete h.sessions),h})};return e.jsxs(e.Fragment,{children:[(r||l.event||l.session)&&e.jsx($,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),t.actionName&&!l.event&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"flx",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:d("Select Event:","bit-integrations")}),e.jsx(v,{options:(t==null?void 0:t.events)&&t.events.map(c=>({label:c.name,value:`${c.id}`})),className:"msl-wrp-options dropdown-custom-width",defaultValue:t==null?void 0:t.selectedEvent,onChange:c=>x(c,"selectedEvent"),singleSelect:!0,closeOnSelect:!0}),e.jsx("button",{onClick:()=>R(t,a,i),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${d("Refresh Events","bit-integrations")}'`},type:"button",disabled:l.event,children:"↻"})]})]}),t.actionName&&t.selectedEvent&&!l.session&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"flx",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:d("Select Session:","bit-integrations")}),e.jsx(v,{options:(t==null?void 0:t.sessions)&&t.sessions.map(c=>({label:c.datetime,value:`${c.date_id}`})),className:"msl-wrp-options dropdown-custom-width",defaultValue:t==null?void 0:t.selectedSession,onChange:c=>x(c,"selectedSession"),singleSelect:!0,closeOnSelect:!0}),e.jsx("button",{onClick:()=>o(t,a,i),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${d("Refresh Sessions","bit-integrations")}'`},type:"button",disabled:l.event,children:"↻"})]})]}),t.actionName&&!r&&e.jsxs("div",{children:[e.jsx("br",{}),e.jsxs("div",{className:"mt-5",children:[e.jsx("b",{className:"wdt-100",children:d("Field Map","bit-integrations")}),e.jsx("button",{className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${d("Refresh fields","bit-integrations")}'`},type:"button",children:"↻"})]}),e.jsx("br",{}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:d("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:d("Demio Fields","bit-integrations")})})]}),t==null?void 0:t.field_map.map((c,n)=>e.jsx(A,{i:n,field:c,demioConf:t,formFields:s,setDemioConf:a,setSnackbar:p},`rp-m-${n+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>F(t.field_map.length,t,a),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{})]})]})}export{L as D};
