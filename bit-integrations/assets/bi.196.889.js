var M=Object.defineProperty;var y=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var _=(t,i,e)=>i in t?M(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,b=(t,i)=>{for(var e in i||(i={}))V.call(i,e)&&_(t,e,i[e]);if(y)for(var e of y(i))L.call(i,e)&&_(t,e,i[e]);return t};import{r as w,j as s,L as F,i as I}from"./main-692.js";import{m as j,_ as l,e as v,G as g,n as N,j as $,k as z,l as A}from"./bi.751.13.js";import{m as O,a as P,g as q,b as R}from"./bi.350.888.js";import{T as E}from"./bi.588.657.js";function G({mailsterConf:t,setMailsterConf:i,loading:e,setLoading:a}){const[n,r]=w.useState({show:!1}),m=(d,h)=>{const u=b({},t);h==="status"&&r({show:"status"}),h==="lists"&&(r({show:"lists"}),O(t,i,e,a)),h==="tags"&&(r({show:"tags"}),P(t,i,e,a)),i(b({},u))},o=()=>{r({show:!1})},p=(d,h)=>{const u=b({},t);u[h]=d,i(b({},u))};return s.jsxs("div",{className:"pos-rel d-flx w-8",children:[s.jsx(j,{checked:(t==null?void 0:t.selectedStatus)||!1,onChange:d=>m(d,"status"),className:"wdt-200 mt-4 mr-2",value:"status",title:l("Status","bit-integrations"),subTitle:l("Set the subscriber status","bit-integrations")}),s.jsx(j,{checked:t.selectedLists||!1,onChange:d=>m(d,"lists"),className:"wdt-200 mt-4 mr-2",value:"select_lists",title:l("Select Lists","bit-integrations"),subTitle:l("Choose which lists to add subscribers to.","bit-integrations")}),s.jsx(j,{checked:t.selectedTags||!1,onChange:d=>m(d,"tags"),className:"wdt-200 mt-4 mr-2",value:"select_tags",title:l("Select tags","bit-integrations"),subTitle:l("Choose which tags to add to subscribers.","bit-integrations")}),s.jsxs(v,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:l("Ok","bit-integrations"),show:n.show==="status",close:o,action:o,title:l("Status","bit-integrations"),children:[s.jsx("div",{className:"btcd-hr mt-2 mb-2"}),s.jsxs("div",{className:"mt-2 flx",children:[l("Select subscriber status","bit-integrations"),s.jsx(g,{width:250,icnSize:17,className:"ml-1",children:s.jsx("div",{className:"txt-body",children:'If omitted, the status will be set to "Subscribed".'})})]}),s.jsx("div",{className:"mt-2",children:s.jsx(N,{options:[{label:l("Pending","bit-integrations"),value:"0"},{label:l("Subscribed","bit-integrations"),value:"1"},{label:l("Unsubscribed","bit-integrations"),value:"2"},{label:l("Hardbounced","bit-integrations"),value:"3"}],className:"msl-wrp-options",defaultValue:t==null?void 0:t.selectedStatus,onChange:d=>p(d,"selectedStatus"),singleSelect:!0,style:{width:"100%"}})})]}),s.jsxs(v,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:l("Ok","bit-integrations"),show:n.show==="lists",close:o,action:o,title:l("Lists","bit-integrations"),children:[s.jsx("div",{className:"btcd-hr mt-2 mb-2"}),s.jsxs("div",{className:"mt-2 flx",children:[l("Select Lists","bit-integrations"),s.jsx(g,{width:250,icnSize:17,className:"ml-1",children:s.jsx("div",{className:"txt-body",children:l("Subscribers will be associated with the selected lists","bit-integrations")})})]}),e.lists?s.jsx(F,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):s.jsx("div",{className:"mt-2",children:s.jsx(N,{options:t.lists,className:"msl-wrp-options",defaultValue:t==null?void 0:t.selectedLists,onChange:d=>p(d,"selectedLists"),style:{width:"100%"}})})]}),s.jsxs(v,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:l("Ok","bit-integrations"),show:n.show==="tags",close:o,action:o,title:l("Tags","bit-integrations"),children:[s.jsx("div",{className:"btcd-hr mt-2 mb-2"}),s.jsxs("div",{className:"mt-2 flx",children:[l("Select tags","bit-integrations"),s.jsx(g,{width:300,icnSize:17,className:"ml-1",children:s.jsx("div",{className:"txt-body",children:l("Selected tags will be associated with the subscriber. You can also add custom tags by pressing enter or comma (,) after writing them","bit-integrations")})})]}),e.tags?s.jsx(F,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):s.jsx("div",{className:"mt-2",children:s.jsx(N,{options:t.tags,className:"msl-wrp-options",defaultValue:t==null?void 0:t.selectedTags,onChange:d=>p(d,"selectedTags"),style:{width:"100%"},customValue:!0})})]})]})}const T=(t,i,e)=>{const a=b({},i);a.field_map.splice(t,0,{}),e(b({},a))},H=(t,i,e)=>{const a=b({},i);a.field_map.length>1&&a.field_map.splice(t,1),e(b({},a))},k=(t,i,e,a)=>{const n=b({},e);n.field_map[i][t.target.name]=t.target.value,t.target.value==="custom"&&(n.field_map[i].customValue=""),a(b({},n))};function U({i:t,formFields:i,field:e,mailsterConf:a,setMailsterConf:n}){var h,u,S;const r=(a==null?void 0:a.mailsterFields.filter(c=>c.required===!0))||[],m=((h=a==null?void 0:a.mailsterFields)==null?void 0:h.filter(c=>c.required===!1))||[];if(((u=a==null?void 0:a.field_map)==null?void 0:u.length)===1&&e.mailsterFormField===""){const c=b({},a),x=q(c);c.field_map=x,n(c)}let o=[];if(e!=null&&e.mailsterFormField){const c=a.mailsterFields.filter(x=>x.key===(e==null?void 0:e.mailsterFormField));c.length&&c[0].hasOwnProperty("options")&&c[0].options.length&&(o=c[0].options)}const p=I($),{isPro:d}=p;return s.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:s.jsxs("div",{className:"pos-rel flx",children:[s.jsxs("div",{className:"flx integ-fld-wrp",children:[s.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:e.formField||"",onChange:c=>k(c,t,a,n),children:[s.jsx("option",{value:"",children:l("Select Field","bit-integrations")}),s.jsx("optgroup",{label:l("Form Fields","bit-integrations"),children:i==null?void 0:i.map(c=>s.jsx("option",{value:c.name,children:c.label},`ff-rm-${c.name}`))}),s.jsx("option",{value:"custom",children:l("Custom...","bit-integrations")}),s.jsx("optgroup",{label:sprintf(l("General Smart Codes %s","bit-integrations"),d?"":`(${l("Pro","bit-integrations")})`),children:d&&((S=z)==null?void 0:S.map(c=>s.jsx("option",{value:c.name,children:c.label},`ff-rm-${c.name}`)))})]}),e.formField==="custom"&&s.jsx(E,{onChange:c=>A(c,t,a,n),label:l("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:e.customValue,placeholder:l("Custom Value","bit-integrations"),formFields:i}),s.jsxs("select",{className:"btcd-paper-inp",disabled:t<r.length,name:"mailsterFormField",value:t<r?r[t].label||"":e.mailsterFormField||"",onChange:c=>k(c,t,a,n),children:[s.jsx("option",{value:"",children:l("Select Field","bit-integrations")}),t<r.length?s.jsx("option",{value:r[t].key,children:r[t].label},r[t].key):m.map(({key:c,label:x})=>s.jsx("option",{value:c,children:x},c))]})]}),s.jsxs("div",{className:"flx integ-fld-wrp",children:[o.length>0&&s.jsx("div",{children:s.jsx(g,{width:300,icnSize:17,className:"ml-2",children:s.jsxs("div",{className:"txt-body",children:[s.jsxs("p",{children:[l("Available values or options for the selected Mailster field","bit-integrations"),":"]}),o.map((c,x)=>s.jsx("li",{children:c},x))]})})}),t>=r.length&&s.jsxs(s.Fragment,{children:[s.jsx("button",{onClick:()=>T(t,a,n),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),s.jsx("button",{onClick:()=>H(t,a,n),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:s.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})]})})}function Q({formFields:t,mailsterConf:i,setMailsterConf:e,loading:a,setLoading:n,setSnackbar:r}){return w.useState({name:"",auth_token:""}),w.useState(!1),s.jsx(s.Fragment,{children:s.jsxs("div",{children:[s.jsx("br",{}),s.jsx("div",{className:"mt-5",children:s.jsxs("b",{className:"wdt-100",children:[l("Field Map","bit-integrations"),s.jsx("button",{onClick:()=>R(i,e,a,n),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Refresh fields","bit-integrations")}'`},type:"button",disabled:a.customFields,children:"↻"})]})}),a.fields&&s.jsx(F,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),s.jsx("br",{}),s.jsx("div",{className:"btcd-hr mt-1"}),s.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:l("Form Fields","bit-integrations")})}),s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:l("Mailster Fields","bit-integrations")})})]}),i.mailsterFields.length>0&&s.jsxs(s.Fragment,{children:[i==null?void 0:i.field_map.map((m,o)=>s.jsx(U,{i:o,field:m,mailsterConf:i,formFields:t,setMailsterConf:e,setSnackbar:r},`rp-m-${o+9}`)),s.jsxs("div",{children:[s.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:s.jsx("button",{onClick:()=>T(i.field_map.length,i,e),className:"icn-btn sh-sm",type:"button",children:"+"})}),s.jsx("br",{}),s.jsx("br",{}),s.jsx("div",{className:"mt-4",children:s.jsx("b",{className:"wdt-100",children:l("Utilities","bit-integrations")})}),s.jsx("div",{className:"btcd-hr mt-1"}),s.jsx(G,{mailsterConf:i,setMailsterConf:e,loading:a,setLoading:n})]})]})]})})}export{Q as M};
