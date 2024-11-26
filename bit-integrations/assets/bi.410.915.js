var S=Object.defineProperty;var o=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var j=(c,i,t)=>i in c?S(c,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):c[i]=t,d=(c,i)=>{for(var t in i||(i={}))w.call(i,t)&&j(c,t,i[t]);if(o)for(var t of o(i))y.call(i,t)&&j(c,t,i[t]);return c};import{j as s,L as h}from"./main-615.js";import{u as g}from"./bi.991.437.js";import{_ as p}from"./bi.394.0.js";import{a as T,T as N,g as F,t as k}from"./bi.129.916.js";import{a as M,h as V}from"./bi.819.3.js";import{T as A}from"./bi.178.673.js";const _=(c,i,t)=>{const e=d({},i);e.field_map.splice(c,0,{}),t(d({},e))},I=(c,i,t)=>{const e=d({},i);e.field_map.length>1&&e.field_map.splice(c,1),t(d({},e))},n=(c,i,t,e)=>{const a=d({},t);a.field_map[i][c.target.name]=c.target.value,c.target.value==="custom"&&(a.field_map[i].customValue=""),e(d({},a))};function L({i:c,formFields:i,field:t,theEventsCalendarConf:e,setTheEventsCalendarConf:a}){var x,m;const r=(e==null?void 0:e.staticFields.filter(l=>l.required===!0))||[],u=((x=e==null?void 0:e.staticFields)==null?void 0:x.filter(l=>l.required===!1))||[];return s.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:s.jsxs("div",{className:"pos-rel flx",children:[s.jsxs("div",{className:"flx integ-fld-wrp",children:[s.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:t.formField||"",onChange:l=>n(l,c,e,a),children:[s.jsx("option",{value:"",children:p("Select Field","bit-integrations")}),s.jsx("optgroup",{label:p("Form Fields","bit-integrations"),children:i==null?void 0:i.map(l=>s.jsx("option",{value:l.name,children:l.label},`ff-rm-${l.name}`))}),s.jsx("option",{value:"custom",children:p("Custom...","bit-integrations")}),s.jsx("optgroup",{label:"General Smart Codes",children:(m=M)==null?void 0:m.map(l=>s.jsx("option",{value:l.name,children:l.label},`ff-rm-${l.name}`))})]}),t.formField==="custom"&&s.jsx(A,{onChange:l=>V(l,c,e,a),label:p("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:t.customValue,placeholder:p("Custom Value","bit-integrations"),formFields:i}),s.jsxs("select",{className:"btcd-paper-inp",disabled:c<r.length,name:"theEventsCalendarField",value:c<r?r[c].label||"":t.theEventsCalendarField||"",onChange:l=>n(l,c,e,a),children:[s.jsx("option",{value:"",children:p("Select Field","bit-integrations")}),c<r.length?s.jsx("option",{value:r[c].key,children:r[c].label},r[c].key):u.map(({key:l,label:b})=>s.jsx("option",{value:l,children:b},l))]})]}),s.jsx("div",{className:"flx integ-fld-wrp",children:c>=r.length&&s.jsxs(s.Fragment,{children:[s.jsx("button",{onClick:()=>_(c,e,a),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),s.jsx("button",{onClick:()=>I(c,e,a),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:s.jsx("span",{className:"btcd-icn icn-trash-2"})})]})})]})})}function U({formFields:c,theEventsCalendarConf:i,setTheEventsCalendarConf:t,loading:e,setLoading:a,setSnackbar:r}){const u=m=>{const l=d({},i);if(l.selectedTask=m,l.selectedEvent="",m){const b=k(m);l.staticFields=b.staticFields,l.field_map=b.fieldMap,m===N.NEW_ATTENDEE&&F(l,t,e,a)}else l.staticFields=[],l.field_map=[];t(d({},l))},x=(m,l)=>{const b=d({},i);b[l]=m,t(d({},b))};return s.jsx(s.Fragment,{children:s.jsxs("div",{children:[s.jsxs("div",{className:"flx mt-3 mb-4",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:p("Select Task:","bit-integrations")}),s.jsx(g,{style:{width:"450px"},options:T,className:"msl-wrp-options",defaultValue:i==null?void 0:i.selectedTask,onChange:m=>u(m),singleSelect:!0})]}),i.selectedTask===N.NEW_ATTENDEE&&s.jsxs("div",{className:"flx mt-3 mb-4",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:p("Select Event:","bit-integrations")}),s.jsx(g,{style:{width:"450px"},options:i==null?void 0:i.events,className:"msl-wrp-options",defaultValue:i==null?void 0:i.selectedEvent,onChange:m=>x(m,"selectedEvent"),disabled:e.events,singleSelect:!0}),s.jsx("button",{onClick:()=>F(i,t,e,a),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${p("Refresh events","bit-integrations")}'`},disabled:e.events,type:"button",children:"↻"})]}),e.events&&s.jsx(h,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}),s.jsx("div",{className:"mt-5",children:s.jsx("b",{className:"wdt-100",children:p("Field Map","bit-integrations")})}),s.jsx("br",{}),s.jsx("div",{className:"btcd-hr mt-1"}),s.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:p("Form Fields","bit-integrations")})}),s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:p("The Events Calendar Fields","bit-integrations")})})]}),i.selectedTask&&(i==null?void 0:i.field_map.map((m,l)=>s.jsx(L,{i:l,field:m,theEventsCalendarConf:i,formFields:c,setTheEventsCalendarConf:t,setSnackbar:r},`rp-m-${l+9}`))),(i==null?void 0:i.selectedTask)&&s.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:s.jsx("button",{onClick:()=>_(i.field_map.length,i,t),className:"icn-btn sh-sm",type:"button",children:"+"})})]})})}export{U as T};
