var V=Object.defineProperty;var _=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var E=(i,s,d)=>s in i?V(i,s,{enumerable:!0,configurable:!0,writable:!0,value:d}):i[s]=d,u=(i,s)=>{for(var d in s||(s={}))M.call(s,d)&&E(i,d,s[d]);if(_)for(var d of _(s))$.call(s,d)&&E(i,d,s[d]);return i};import{i as D,j as t,r as O,L as Y}from"./main-650.js";import{j as K,_ as n,k as q,l as z,T as B,m as S,e as G,G as W,n as j,o as Z}from"./bi.541.15.js";import{T as c,g as y,a as J,b as w,d as R,e as U,f as I,i as Q,O as X,j as F,k as H}from"./bi.989.899.js";import{T as f}from"./bi.619.660.js";function g({i,formFields:s,field:d,highLevelConf:e,setHighLevelConf:m}){var A,P;const T=(e==null?void 0:e.highLevelFields.filter(l=>l.required===!0))||[],b=((A=e==null?void 0:e.highLevelFields)==null?void 0:A.filter(l=>l.required===!1))||[],N=D(K),{isPro:a}=N,r=l=>{const p=u({},e);p.field_map.splice(l,0,{}),m(p)},o=l=>{const p=u({},e);p.field_map.length>1&&p.field_map.splice(l,1),m(p)},k=(l,p)=>{const x=u({},e);x.field_map[p][l.target.name]=l.target.value,l.target.value==="custom"&&(x.field_map[p].customValue=""),m(x)};return t.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:d.formField||"",onChange:l=>k(l,i),children:[t.jsx("option",{value:"",children:n("Select Field","bit-integrations")}),t.jsx("optgroup",{label:"Campaign Fields",children:s==null?void 0:s.map(l=>t.jsx("option",{value:l.name,children:l.label},`ff-rm-${l.name}`))}),t.jsx("option",{value:"custom",children:n("Custom...","bit-integrations")}),t.jsx("optgroup",{label:`General Smart Codes ${a?"":"(PRO)"}`,children:a&&((P=q)==null?void 0:P.map(l=>t.jsx("option",{value:l.name,children:l.label},`ff-rm-${l.name}`)))})]}),d.formField==="custom"&&t.jsx(f,{onChange:l=>z(l,i,e,m),label:n("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:d.customValue,placeholder:n("Custom Value","bit-integrations"),formFields:s}),t.jsxs("select",{className:"btcd-paper-inp",name:"highLevelField",value:i<T?T[i].label||"":d.highLevelField||"",onChange:l=>k(l,i),disabled:i<T.length,children:[t.jsx("option",{value:"",children:n("Select Field","bit-integrations")}),i<T.length?t.jsx("option",{value:T[i].key,children:T[i].label},T[i].key):b.map(({key:l,label:p})=>t.jsx("option",{value:l,children:p},l))]})]}),i>=T.length&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>r(i),className:"icn-btn sh-sm ml-2",type:"button",children:"+"}),t.jsx("button",{onClick:()=>o(i),className:"icn-btn sh-sm ml-2",type:"button","aria-label":"btn",children:t.jsx(B,{})})]})]})}function C({highLevelConf:i,setHighLevelConf:s,loading:d,setLoading:e}){var P;const[m,T]=O.useState({show:!1}),b=D(K),{isPro:N}=b,[a,r]=O.useState({}),o=(l,p)=>{const x=u({},i);p==="checkbox"?l.target.checked?x.actions[l.target.value]=!0:delete x.actions[l.target.value]:p==="contactTags"&&(y("high_level_contact_tags",i,a,r,p,d,e,"Tags"),T({show:p})),s(u({},x))},k=()=>{T({show:!1})},A=(l,p)=>{const x=u({},i);x[p]=l,s(u({},x))};return t.jsxs(t.Fragment,{children:[!N&&t.jsx("div",{className:"pt-2",children:t.jsx("span",{className:"actions-note",children:"The Bit Integrations Pro plugin needs to be installed and activated to utilize these features."})}),t.jsxs("div",{className:"pos-rel d-flx w-8",children:[(i.selectedTask===c.CREATE_CONTACT||i.selectedTask===c.UPDATE_CONTACT)&&t.jsx(S,{checked:((P=i.actions)==null?void 0:P.dnd)||!1,onChange:l=>o(l,"checkbox"),className:"wdt-200 mt-4 mr-2",value:"dnd",title:n("Do Not Disturb","bit-integrations"),subTitle:n("Enable do not disturb for contact.","bit-integrations"),isInfo:!N}),(i.selectedTask===c.CREATE_CONTACT||i.selectedTask===c.UPDATE_CONTACT||i.selectedTask===c.CREATE_OPPORTUNITY||i.selectedTask===c.UPDATE_OPPORTUNITY)&&t.jsxs(t.Fragment,{children:[t.jsx(S,{checked:i.selectedTags||!1,onChange:l=>o(l,"contactTags"),className:"wdt-200 mt-4 mr-2",value:"select_menu_post_type",title:n("Select Tags","bit-integrations"),subTitle:n("Select tags and assign them to the contact.","bit-integrations"),isInfo:!N}),t.jsxs(G,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:n("Ok","bit-integrations"),show:m.show==="contactTags",close:k,action:k,title:n("Post Types","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsxs("div",{className:"mt-2 flx",children:[n("Select Tags","bit-integrations"),t.jsx(W,{width:350,icnSize:17,className:"ml-1",children:t.jsx("div",{className:"txt-body",children:n("Choose from the existing tags, or create and add new ones by typing them and pressing enter or comma (,).","bit-integrations")})})]}),d.options?t.jsx(Y,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsx(j,{options:a==null?void 0:a.contactTags,className:"msl-wrp-options",defaultValue:i==null?void 0:i.selectedTags,onChange:l=>A(l,"selectedTags"),style:{width:"100%"},customValue:!0}),t.jsx("button",{onClick:()=>y("high_level_contact_tags",i,a,r,"contactTags",d,e,"Tags"),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${n("Refresh Tags","bit-integrations")}'`},type:"button",children:"↻"})]})]})]})]})]})}function et({formFields:i,highLevelConf:s,setHighLevelConf:d,loading:e,setLoading:m}){const T=a=>{const r=s;if(r.selectedTask=a,a){const o=H(a);r.highLevelFields=o.staticFields,r.field_map=o.fieldMap,a===c.CREATE_CONTACT?F(r,d,e,m):a===c.UPDATE_CONTACT||a===c.CREATE_TASK||a===c.UPDATE_TASK?U(r,d,e,m):(a===c.CREATE_OPPORTUNITY||a===c.UPDATE_OPPORTUNITY)&&w(r,d,e,m)}else r.highLevelFields=[],r.field_map=[];d(u({},r))},b=(a,r)=>{const o=u({},s);if(o[r]=a,a&&o.selectedTask===c.UPDATE_TASK&&r==="selectedContact"&&I(o,d,e,m),a&&r==="selectedPipeline"){o.selectedStage="",o.selectedOpportunity="";const k=o.stages[a].map(A=>({label:A.name,value:A.id}));o.currentStages=k,s.selectedTask===c.UPDATE_OPPORTUNITY&&R(o,d,e,m)}!a&&r==="selectedPipeline"&&(o.selectedStage="",o.selectedOpportunity=""),d(u({},o))},N=()=>s.selectedTask===c.CREATE_TASK||s.selectedTask===c.UPDATE_TASK?[{label:"Incompleted",value:"incompleted"},{label:"Completed",value:"completed"}]:[{label:"Open",value:"open"},{label:"Won",value:"won"},{label:"Lost",value:"lost"},{label:"Abandoned",value:"abandoned"}];return t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsxs("div",{className:"flx mt-3 mb-4",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:n("Select Task:","bit-integrations")}),t.jsx(j,{style:{width:"450px"},options:J,className:`msl-wrp-options ${s.selectedTask?"":"height-s"}`,defaultValue:s==null?void 0:s.selectedTask,onChange:a=>T(a),singleSelect:!0})]}),(s.selectedTask===c.CREATE_OPPORTUNITY||s.selectedTask===c.UPDATE_OPPORTUNITY)&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"flx mt-3 mb-4",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:n("Select Pipeline:","bit-integrations")}),t.jsx(j,{style:{width:"450px"},options:s.pipelines,className:"msl-wrp-options",defaultValue:s==null?void 0:s.selectedPipeline,onChange:a=>b(a,"selectedPipeline"),disabled:e.pipelines||e.contacts||e.users,singleSelect:!0}),t.jsx("button",{onClick:()=>w(s,d,e,m),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${n("Refresh pipeline list","bit-integrations")}'`},disabled:e.contacts||e.pipelines,type:"button",children:"↻"})]}),t.jsxs("div",{className:"flx mt-3 mb-4",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:n("Select Stage:","bit-integrations")}),t.jsx(j,{style:{width:"450px"},options:s.currentStages,className:"msl-wrp-options",defaultValue:s==null?void 0:s.selectedStage,onChange:a=>b(a,"selectedStage"),disabled:!s.selectedPipeline,singleSelect:!0})]})]}),s.selectedTask===c.UPDATE_OPPORTUNITY&&t.jsxs("div",{className:"flx mt-3 mb-4",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:n("Select Opportunity:","bit-integrations")}),t.jsx(j,{style:{width:"450px"},options:s.opportunities,className:"msl-wrp-options",defaultValue:s==null?void 0:s.selectedOpportunity,onChange:a=>b(a,"selectedOpportunity"),disabled:!s.selectedPipeline||e.opportunities,singleSelect:!0}),t.jsx("button",{onClick:()=>R(s,d,e,m),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${n("Refresh opportunity list","bit-integrations")}'`},disabled:!s.selectedPipeline||e.contacts||e.pipelines||e.opportunities,type:"button",children:"↻"})]}),(s.selectedTask===c.UPDATE_CONTACT||s.selectedTask===c.CREATE_TASK||s.selectedTask===c.UPDATE_TASK||s.selectedTask===c.CREATE_OPPORTUNITY||s.selectedTask===c.UPDATE_OPPORTUNITY)&&t.jsxs("div",{className:"flx mt-3 mb-4",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:n("Select Contact:","bit-integrations")}),t.jsx(j,{style:{width:"450px"},options:s.contacts,className:"msl-wrp-options",defaultValue:s==null?void 0:s.selectedContact,onChange:a=>b(a,"selectedContact"),singleSelect:!0}),t.jsx("button",{onClick:()=>U(s,d,e,m),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${n("Refresh contact list","bit-integrations")}'`},disabled:e.contacts,type:"button",children:"↻"})]}),s.selectedTask===c.UPDATE_TASK&&t.jsxs("div",{className:"flx mt-3 mb-4",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:n("Select Task:","bit-integrations")}),t.jsx(j,{style:{width:"450px"},options:s.hlTasks,className:"msl-wrp-options",defaultValue:s==null?void 0:s.updateTaskId,onChange:a=>b(a,"updateTaskId"),disabled:!s.selectedContact||e.contacts||e.hlTasks,singleSelect:!0}),t.jsx("button",{onClick:()=>I(s,d,e,m),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${n("Refresh task list","bit-integrations")}'`},disabled:!s.selectedContact||e.contacts||e.users||e.hlTasks,type:"button",children:"↻"})]}),(s.selectedTask===c.CREATE_TASK||s.selectedTask===c.UPDATE_TASK||s.selectedTask===c.CREATE_OPPORTUNITY||s.selectedTask===c.UPDATE_OPPORTUNITY)&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"flx mt-3 mb-4",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:n("Select Assignee:","bit-integrations")}),t.jsx(j,{style:{width:"450px"},options:s.users,className:"msl-wrp-options",defaultValue:s==null?void 0:s.selectedUser,onChange:a=>b(a,"selectedUser"),singleSelect:!0}),t.jsx("button",{onClick:()=>Q(s,d,e,m),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${n("Refresh assignee list","bit-integrations")}'`},disabled:e.contacts||e.users,type:"button",children:"↻"})]}),t.jsxs("div",{className:"flx mt-3 mb-4",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:n("Select Status:","bit-integrations")}),t.jsx(j,{style:{width:"450px"},options:N(),className:"msl-wrp-options",defaultValue:s==null?void 0:s.selectedTaskStatus,onChange:a=>b(a,"selectedTaskStatus"),singleSelect:!0})]})]}),(e.accounts||e.customFields||e.contacts||e.users||e.hlTasks||e.pipelines||e.opportunities)&&t.jsx(Y,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}),X.includes(s.selectedTask)&&t.jsx(t.Fragment,{children:t.jsx("span",{className:"action-delete-task-note",children:n("To update, you can select from the list above, or you can map fields. If not selected, ID field mapping is required.","bit-integrations")})}),s.selectedTask===c.CREATE_TASK&&t.jsx("span",{className:"action-delete-task-note",children:n('To create, you can select contact from the list above, or you can map fields. If not selected, "Contact ID" field mapping is required.',"bit-integrations")}),(s.selectedTask===c.CREATE_OPPORTUNITY||s.selectedTask===c.UPDATE_OPPORTUNITY)&&t.jsx("span",{className:"action-delete-task-note",children:n("Either a Select Contact, Email, or Phone Number is required. For Contact you can select from the list above, or you can map field (Contact ID).","bit-integrations")}),s.selectedTask===c.UPDATE_OPPORTUNITY&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("br",{}),t.jsx("span",{className:"action-delete-task-note",children:n('To update, you can select opportunity from the list above, or you can map field.  If not selected, "Opportunity ID" field mapping is required.',"bit-integrations")})]}),s.selectedTask===c.UPDATE_TASK&&t.jsxs(t.Fragment,{children:[t.jsx("span",{className:"action-delete-task-note",children:n('To update, you can select contact from the list above, or you can map fields. If not selected, "Contact ID" field mapping is required.',"bit-integrations")}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("span",{className:"action-delete-task-note",children:n('You can select task from the list above, or you can map fields. If not selected, "Task ID" field mapping is required. To enable task selection, choose a contact first.',"bit-integrations")})]}),t.jsx("br",{}),t.jsxs("div",{className:"mt-4",children:[t.jsx("b",{className:"wdt-100",children:n("Map Fields","bit-integrations")}),((s==null?void 0:s.selectedTask)===c.CREATE_CONTACT||(s==null?void 0:s.selectedTask)===c.UPDATE_CONTACT)&&t.jsx("button",{onClick:()=>F(s,d,e,m),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${n("Refresh custom fields","bit-integrations")}'`},type:"button",disabled:e.customFields||e.contacts,children:"↻"})]}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:n("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:n("HighLevel Fields","bit-integrations")})})]}),(s==null?void 0:s.selectedTask)&&t.jsxs(t.Fragment,{children:[s.field_map.map((a,r)=>t.jsx(g,{i:r,field:a,highLevelConf:s,formFields:i,setHighLevelConf:d},`HighLevel-m-${r+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>Z(s.field_map.length,s,d),className:"icn-btn sh-sm",type:"button",children:"+"})})]}),(s.selectedTask===c.CREATE_TASK||s.selectedTask===c.UPDATE_TASK)&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("br",{}),t.jsx("span",{className:"action-delete-task-note",children:n('The "Due Date" field must be a date and time with timezone offset. e.g. 2024-10-25T10:00:00Z.',"bit-integrations")})]}),(s.selectedTask===c.CREATE_CONTACT||s.selectedTask===c.UPDATE_CONTACT||s.selectedTask===c.CREATE_OPPORTUNITY||s.selectedTask===c.UPDATE_OPPORTUNITY)&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("br",{}),t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:n("Utilities","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsx(C,{highLevelConf:s,setHighLevelConf:d,loading:e,setLoading:m})]})]})}export{et as H};
