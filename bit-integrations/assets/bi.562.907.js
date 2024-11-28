var O=Object.defineProperty;var k=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var F=(s,t,c)=>t in s?O(s,t,{enumerable:!0,configurable:!0,writable:!0,value:c}):s[t]=c,m=(s,t)=>{for(var c in t||(t={}))I.call(t,c)&&F(s,c,t[c]);if(k)for(var c of k(t))R.call(t,c)&&F(s,c,t[c]);return s};import{r as D,j as e,L as _}from"./main-441.js";import{af as N,u as p}from"./bi.141.437.js";import{_ as i,s as S}from"./bi.452.0.js";import{a as v}from"./bi.663.9.js";import{b as T}from"./bi.866.11.js";import{T as u,g as V,a as A,b as G,d as L,e as E,w as P}from"./bi.310.908.js";import{a as U,h as z}from"./bi.73.3.js";import{T as $}from"./bi.768.673.js";function q({wpforoConf:s,setWPForoConf:t,loading:c,setLoading:d}){var l;const[n,r]=D.useState({show:!1}),x=(a,b)=>{const j=m({},s);b==="reputations"?(V(s,t,d),r({show:"reputation"})):b==="groups"?(A(s,t,d),r({show:"group"})):b==="forums"?(G(s,t,d),r({show:"forum"})):b==="tags"?r({show:"tags"}):b==="privateTopic"&&(a.target.checked?j.actions.privateTopic=!0:delete j.actions.privateTopic),t(m({},j))},h=()=>{r({show:!1})},g=(a,b)=>{const j=m({},s);j[b]=a,t(m({},j))};return e.jsxs("div",{className:"pos-rel d-flx w-8",children:[s.selectedTask===u.USER_REPUTATION&&e.jsxs(e.Fragment,{children:[e.jsx(T,{checked:s.selectedReputation||!1,onChange:a=>x(a,"reputations"),className:"wdt-200 mt-4 mr-2",value:"select_reputation",title:i("Select Reputation","bit-integrations"),subTitle:i("Select a reputation to set it for the user.","bit-integrations")}),e.jsxs(v,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:i("Ok","bit-integrations"),show:n.show==="reputation",close:h,action:h,title:i("Reputations","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsxs("div",{className:"mt-2 flx",children:[i("Select Reputation","bit-integrations"),e.jsx(N,{width:250,icnSize:17,className:"ml-1",children:e.jsx("div",{className:"txt-body",children:i("Selected reputation will be set as user new reputation","bit-integrations")})})]}),c.reputation?e.jsx(_,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsx("div",{className:"mt-2",children:e.jsx(p,{options:s.reputations,className:"msl-wrp-options",defaultValue:s==null?void 0:s.selectedReputation,onChange:a=>g(a,"selectedReputation"),style:{width:"100%"},singleSelect:!0})})]})]}),(s.selectedTask===u.ADD_TO_GROUP||s.selectedTask===u.REMOVE_FROM_GROUP)&&e.jsxs(e.Fragment,{children:[e.jsx(T,{checked:s.selectedGroup||!1,onChange:a=>x(a,"groups"),className:"wdt-200 mt-4 mr-2",value:"select_group",title:i("Select group","bit-integrations"),subTitle:S(i("Select a group to %s","bit-integrations"),s.selectedTask===u.ADD_TO_GROUP?i("add a user to it","bit-integrations"):i("remove a user from it","bit-integrations"))}),e.jsxs(v,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:i("Ok","bit-integrations"),show:n.show==="group",close:h,action:h,title:i("Groups","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsxs("div",{className:"mt-2 flx",children:[i("Select group","bit-integrations"),e.jsx(N,{width:250,icnSize:17,className:"ml-1",children:e.jsx("div",{className:"txt-body",children:S(i("The user will be %s the selected group","bit-integrations"),s.selectedTask===u.ADD_TO_GROUP?i("added to","bit-integrations"):i("removed from","bit-integrations"))})})]}),c.groups?e.jsx(_,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsx("div",{className:"mt-2",children:e.jsx(p,{options:s.groups,className:"msl-wrp-options",defaultValue:s==null?void 0:s.selectedGroup,onChange:a=>g(a,"selectedGroup"),style:{width:"100%"},singleSelect:!0})})]})]}),s.selectedTask===u.CREATE_TOPIC&&e.jsxs(e.Fragment,{children:[e.jsx(T,{checked:s.selectedForum||!1,onChange:a=>x(a,"forums"),className:"wdt-200 mt-4 mr-2",value:"select_forum",title:i("Select Forum","bit-integrations"),subTitle:i("Select a forum to create a topic in it","bit-integrations")}),e.jsx(T,{checked:s.selectedTags||!1,onChange:a=>x(a,"tags"),className:"wdt-200 mt-4 mr-2",value:"select_tags",title:i("Select tags","bit-integrations"),subTitle:i("Add tags for the topic","bit-integrations")}),e.jsx(T,{checked:((l=s.actions)==null?void 0:l.privateTopic)||!1,onChange:a=>x(a,"privateTopic"),className:"wdt-200 mt-4 mr-2",value:"select_topic_is_private",title:i("Private Topic","bit-integrations"),subTitle:i("Make topic private","bit-integrations")}),e.jsxs(v,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:i("Ok","bit-integrations"),show:n.show==="forum",close:h,action:h,title:i("Forums","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsxs("div",{className:"mt-2 flx",children:[i("Select Forum","bit-integrations"),e.jsx(N,{width:250,icnSize:17,className:"ml-1",children:e.jsx("div",{className:"txt-body",children:i("Topics will be added to the selected forum","bit-integrations")})})]}),c.forums?e.jsx(_,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsx("div",{className:"mt-2",children:e.jsx(p,{options:s.forums,className:"msl-wrp-options",defaultValue:s==null?void 0:s.selectedForum,onChange:a=>g(a,"selectedForum"),style:{width:"100%"},singleSelect:!0})})]}),e.jsxs(v,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:i("Ok","bit-integrations"),show:n.show==="tags",close:h,action:h,title:i("Tags","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsxs("div",{className:"mt-2 flx",children:[i("Select tags","bit-integrations"),e.jsx(N,{width:250,icnSize:17,className:"ml-1",children:e.jsx("div",{className:"txt-body",children:i("Separate tags by pressing enter or comma (,) after writing them","bit-integrations")})})]}),e.jsx("div",{className:"mt-2",children:e.jsx(p,{options:s.tags,className:"msl-wrp-options",defaultValue:s==null?void 0:s.selectedTags,onChange:a=>g(a,"selectedTags"),style:{width:"100%"},customValue:!0})})]})]})]})}const M=(s,t,c)=>{const d=m({},t);d.field_map.splice(s,0,{}),c(m({},d))},K=(s,t,c)=>{const d=m({},t);d.field_map.length>1&&d.field_map.splice(s,1),c(m({},d))},y=(s,t,c,d)=>{const n=m({},c);n.field_map[t][s.target.name]=s.target.value,s.target.value==="custom"&&(n.field_map[t].customValue=""),d(m({},n))};function B({i:s,formFields:t,field:c,wpforoConf:d,setWPForoConf:n}){var h,g;const r=(d==null?void 0:d.staticFields.filter(l=>l.required===!0))||[],x=((h=d==null?void 0:d.staticFields)==null?void 0:h.filter(l=>l.required===!1))||[];return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:c.formField||"",onChange:l=>y(l,s,d,n),children:[e.jsx("option",{value:"",children:i("Select Field","bit-integrations")}),e.jsx("optgroup",{label:i("Form Fields","bit-integrations"),children:t==null?void 0:t.map(l=>e.jsx("option",{value:l.name,children:l.label},`ff-rm-${l.name}`))}),e.jsx("option",{value:"custom",children:i("Custom...","bit-integrations")}),e.jsx("optgroup",{label:"General Smart Codes",children:(g=U)==null?void 0:g.map(l=>e.jsx("option",{value:l.name,children:l.label},`ff-rm-${l.name}`))})]}),c.formField==="custom"&&e.jsx($,{onChange:l=>z(l,s,d,n),label:i("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:c.customValue,placeholder:i("Custom Value","bit-integrations"),formFields:t}),e.jsxs("select",{className:"btcd-paper-inp",disabled:s<r.length,name:"wpforoField",value:s<r?r[s].label||"":c.wpforoField||"",onChange:l=>y(l,s,d,n),children:[e.jsx("option",{value:"",children:i("Select Field","bit-integrations")}),s<r.length?e.jsx("option",{value:r[s].key,children:r[s].label},r[s].key):x.map(({key:l,label:a})=>e.jsx("option",{value:l,children:a},l))]})]}),e.jsx("div",{className:"flx integ-fld-wrp",children:s>=r.length&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>M(s,d,n),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>K(s,d,n),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})})]})})}function C({formFields:s,wpforoConf:t,setWPForoConf:c,loading:d,setLoading:n,setSnackbar:r}){const x=l=>{const a=m({},t);if(a.selectedTask=l,l){l===u.DELETE_TOPIC&&E(a,c,d,n);const b=P(l);a.staticFields=b.staticFields,a.field_map=b.fieldMap}else a.staticFields=[],a.field_map=[];c(m({},a))},h=l=>{const a=m({},t);a.selectedTopic=l,c(m({},a))},g=l=>{const a=m({},t);l.target.checked?a.deleteTopicFieldMap=!0:a.deleteTopicFieldMap=!1,c(m({},a))};return e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:i("Select Task:","bit-integrations")}),e.jsx(p,{style:{width:"450px"},options:L,className:"msl-wrp-options",defaultValue:t==null?void 0:t.selectedTask,onChange:l=>x(l),singleSelect:!0})]}),e.jsx("br",{}),t.selectedTask===u.DELETE_TOPIC&&e.jsxs(e.Fragment,{children:[d.topics&&e.jsx(_,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}),e.jsxs("div",{className:"flx mt-3 mb-4",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:i("Select Topic:","bit-integrations")}),e.jsx(p,{style:{width:"450px"},options:t==null?void 0:t.topics,className:"msl-wrp-options",defaultValue:t==null?void 0:t.selectedTopic,onChange:l=>h(l),singleSelect:!0}),e.jsx("button",{onClick:()=>E(t,c,d,n),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${i("Refresh topics","bit-integrations")}'`},type:"button",children:"↻"})]}),e.jsx("br",{}),e.jsxs("div",{className:"flx",children:[e.jsx("span",{className:"action-delete-task-note",children:i("To delete a topic, you can select a topic from the list above, or you can map fields","bit-integrations")}),e.jsx(T,{checked:t.deleteTopicFieldMap,onChange:l=>g(l),className:" ml-2",value:"select_group",title:i("Map Fields","bit-integrations")})]}),e.jsx("br",{})]}),(t.selectedTask!==u.DELETE_TOPIC||t.selectedTask===u.DELETE_TOPIC&&t.deleteTopicFieldMap)&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-5",children:e.jsx("b",{className:"wdt-100",children:i("Field Map","bit-integrations")})}),e.jsx("br",{}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:i("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:i("WPForo Fields","bit-integrations")})})]})]}),((t==null?void 0:t.selectedTask)&&(t==null?void 0:t.selectedTask)!==u.DELETE_TOPIC||t.selectedTask===u.DELETE_TOPIC&&t.deleteTopicFieldMap)&&(t==null?void 0:t.field_map.map((l,a)=>e.jsx(B,{i:a,field:l,wpforoConf:t,formFields:s,setWPForoConf:c,setSnackbar:r},`rp-m-${a+9}`))),((t==null?void 0:t.selectedTask)&&(t==null?void 0:t.selectedTask)!==u.DELETE_TOPIC||t.selectedTask===u.DELETE_TOPIC&&t.deleteTopicFieldMap)&&e.jsxs("div",{children:[e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>M(t.field_map.length,t,c),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:i("Utilities","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(q,{wpforoConf:t,setWPForoConf:c,loading:d,setLoading:n})]})]})})}export{C as W};
