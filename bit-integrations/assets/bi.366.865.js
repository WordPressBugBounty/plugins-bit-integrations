var y=Object.defineProperty;var m=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var g=(s,e,l)=>e in s?y(s,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):s[e]=l,r=(s,e)=>{for(var l in e||(e={}))_.call(e,l)&&g(s,l,e[l]);if(m)for(var l of m(e))E.call(e,l)&&g(s,l,e[l]);return s};import{j as t,i as $,L as k}from"./main-830.js";import{H as I,_ as p,j as M,k as R,n as F}from"./bi.597.15.js";import{g as V,a as N,b as q}from"./bi.378.864.js";const w=(s,e,l)=>{const a=r({},e);a.field_map.splice(s,0,{}),l(r({},a))},A=(s,e,l)=>{const a=r({},e);a.field_map.length>1&&a.field_map.splice(s,1),l(r({},a))},S=(s,e,l,a)=>{const i=r({},l);i.field_map[e][s.target.name]=s.target.value,s.target.value==="custom"&&(i.field_map[e].customValue=""),a(r({},i))},O=(s,e,l,a,i)=>{const d=r({},l);d.field_map[e][i]=s.target.value,a(r({},d))};function P({field:s,index:e,conf:l,setConf:a,fieldValue:i,fieldLabel:d,className:h}){return t.jsx(I,{onChange:x=>O(x,e,l,a,i),label:p(d,"bit-integrations"),className:h,type:"text",value:s[i],placeholder:p(d,"bit-integrations")})}function G({i:s,formFields:e,field:l,livestormConf:a,setLivestormConf:i}){var c;const d=(a==null?void 0:a.allFields)&&a.allFields.filter(n=>n.eventId===a.selectedEvent&&n.required===!0)||[],h=(a==null?void 0:a.allFields)&&a.allFields.filter(n=>n.eventId===a.selectedEvent&&n.required===!1)||[],x=$(M),{isPro:u}=x;return t.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:t.jsxs("div",{className:"pos-rel flx",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:l.formField||"",onChange:n=>S(n,s,a,i),children:[t.jsx("option",{value:"",children:p("Select Field","bit-integrations")}),t.jsx("optgroup",{label:p("Form Fields","bit-integrations"),children:e==null?void 0:e.map(n=>t.jsx("option",{value:n.name,children:n.label},`ff-rm-${n.name}`))}),t.jsx("option",{value:"custom",children:p("Custom...","bit-integrations")}),t.jsx("optgroup",{label:sprintf(p("General Smart Codes %s","bit-integrations"),u?"":`(${p("Pro","bit-integrations")})`),children:u&&((c=R)==null?void 0:c.map(n=>t.jsx("option",{value:n.name,children:n.label},`ff-rm-${n.name}`)))})]}),l.formField==="custom"&&t.jsx(P,{field:l,index:s,conf:a,setConf:i,fieldValue:"customValue",fieldLabel:"Custom Value",className:"mr-2"}),t.jsxs("select",{className:"btcd-paper-inp",disabled:s<d.length,name:"livestormFormField",value:s<d.length?d[s].key||"":l.livestormFormField||"",onChange:n=>S(n,s,a,i),children:[t.jsx("option",{value:"",children:p("Select Field","bit-integrations")}),s<d.length?t.jsx("option",{value:d[s].key,children:d[s].label},d[s].key):h.map(({key:n,label:j})=>t.jsx("option",{value:n,children:j},n))]})]}),s>=d.length&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>w(s,a,i),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),t.jsx("button",{onClick:()=>A(s,a,i),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:t.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function D({formFields:s,livestormConf:e,setLivestormConf:l,loading:a,setLoading:i,isLoading:d,setIsLoading:h,setSnackbar:x}){const u=(c,n)=>{n==="selectedEvent"&&c!==""&&N(e,l,c,i),l(j=>{const b=r({},j);return b[n]=c,n==="selectedEvent"&&(b.field_map=q(b.allFields.filter(o=>o.eventId===c)),delete b.selectedSession,delete b.sessions),b})};return t.jsxs(t.Fragment,{children:[e.actionName&&!a.event&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("br",{}),t.jsxs("div",{className:"flx",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:p("Select Event:","bit-integrations")}),t.jsx(F,{options:(e==null?void 0:e.events)&&e.events.map(c=>({label:c.name,value:`${c.id}`})),className:"msl-wrp-options dropdown-custom-width",defaultValue:e==null?void 0:e.selectedEvent,onChange:c=>u(c,"selectedEvent"),singleSelect:!0,closeOnSelect:!0}),t.jsx("button",{onClick:()=>V(e,l,i),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${p("Refresh Events","bit-integrations")}'`},type:"button",disabled:a.event,children:"↻"})]})]}),e.actionName&&e.selectedEvent&&!a.session&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("br",{}),t.jsxs("div",{className:"flx",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:p("Select Session:","bit-integrations")}),t.jsx(F,{options:(e==null?void 0:e.sessions)&&e.sessions.map(c=>({label:c.datetime,value:`${c.id}`})),className:"msl-wrp-options dropdown-custom-width",defaultValue:e==null?void 0:e.selectedSession,onChange:c=>u(c,"selectedSession"),singleSelect:!0,closeOnSelect:!0}),t.jsx("button",{onClick:()=>N(e,l,e.selectedEvent,i),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${p("Refresh Sessions","bit-integrations")}'`},type:"button",disabled:a.event,children:"↻"})]})]}),(d||a.event||a.session)&&t.jsx(k,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),e.actionName&&e.selectedEvent&&e.selectedSession&&!d&&t.jsxs("div",{children:[t.jsx("br",{}),t.jsx("div",{className:"mt-5",children:t.jsx("b",{className:"wdt-100",children:p("Field Map","bit-integrations")})}),t.jsx("br",{}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:p("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:p("Livestorm Fields","bit-integrations")})})]}),e==null?void 0:e.field_map.map((c,n)=>t.jsx(G,{i:n,field:c,livestormConf:e,formFields:s,setLivestormConf:l,setSnackbar:x},`rp-m-${n+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>w(e.field_map.length,e,l),className:"icn-btn sh-sm",type:"button",children:"+"})}),t.jsx("br",{}),t.jsx("br",{})]})]})}export{D as L};
