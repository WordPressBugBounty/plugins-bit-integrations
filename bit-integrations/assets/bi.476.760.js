var D=Object.defineProperty;var U=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var P=(l,i,e)=>i in l?D(l,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[i]=e,g=(l,i)=>{for(var e in i||(i={}))H.call(i,e)&&P(l,e,i[e]);if(U)for(var e of U(i))O.call(i,e)&&P(l,e,i[e]);return l};import{r as I,j as t,L as E,i as W}from"./main-29.js";import{m as z,_ as m,e as J,n as k,b as M,c as w,j as K,k as Q,l as X,o as Y,N as Z}from"./bi.860.15.js";import{T as L}from"./bi.831.661.js";function s({buddyBossConf:l,setBuddyBossConf:i,formFields:e}){var A;const[c,r]=I.useState(!1),[x,n]=I.useState({show:!1,action:()=>{}}),j=(v,p)=>{var _,G;const F=g({},l);p==="privacy"&&((_=v.target)!=null&&_.checked?(F.actions.privacy=!0,n({show:"privacy"})):(n({show:!1}),delete F.actions.privacy)),p==="type"&&((G=v.target)!=null&&G.checked?(F.actions.type=!0,n({show:"type"})):(n({show:!1}),delete F.actions.type)),i(g({},F))},S=()=>{n({show:!1})},T=(v,p)=>{const F=g({},l);p==="privacyId"&&(v!==""?F[p]=v:delete F[p]),i(g({},F))};return t.jsxs("div",{className:"pos-rel d-flx w-8",children:[t.jsx(z,{checked:((A=l==null?void 0:l.actions)==null?void 0:A.privacy)||!1,onChange:v=>j(v,"privacy"),className:"wdt-200 mt-4 mr-2",value:"privacy",title:m("Add Privacy","bit-integrations"),subTitle:m("Add privacy of group","bit-integrations")}),t.jsxs(J,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:m("Ok","bit-integrations"),show:x.show==="privacy",close:S,action:S,title:m("Status","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:m("Select privacy of group","bit-integrations")}),c?t.jsx(E,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsx("div",{className:"flx flx-between mt-2",children:t.jsx(k,{className:"msl-wrp-options",defaultValue:l==null?void 0:l.privacyId,options:l==null?void 0:l.groupPrivacyOptions.map(v=>({label:v.label,value:v.key})),onChange:v=>T(v,"privacyId"),singleSelect:!0})})]})]})}const te=(l,i,e,c,r,x)=>{const n=g({},i),{name:j}=l.target;l.target.value!==""?n[j]=l.target.value:delete n[j],j==="mainAction"&&(n.field_map=[{formField:"",buddyBossFormField:""}]),n[l.target.name]=l.target.value,e(g({},n))},V=(l,i,e,c)=>{e(!0),M(null,"fetch_all_group").then(r=>{if(r&&r.success){i(x=>{const n=g({},x);if(n.default||(n.default={}),r.data)if(l.mainAction==="6"||l.mainAction==="14"){const S=[{id:"any",name:"Any"},...r.data];n.default.allGroup=S}else n.default.allGroup=r.data;return n}),e(!1),w.success(m("All Group fetched successfully","bit-integrations"));return}e(!1),w.error(m("Group fetch failed. please try again","bit-integrations"))}).catch(()=>e(!1))},$=(l,i,e,c)=>{e(!0),M(null,"fetch_all_user").then(r=>{if(r&&r.success){i(x=>{const n=g({},x);return n.default||(n.default={}),r.data&&(n.default.allUser=r.data),n}),e(!1),w.success(m("All User fetched successfully","bit-integrations"));return}e(!1),w.error(m("User fetch failed. please try again","bit-integrations"))}).catch(()=>e(!1))},R=(l,i,e,c)=>{e(!0),M(null,"fetch_all_forum").then(r=>{if(r&&r.success){const x=g({},l);x.default||(x.default={}),r.data&&(x.default.allForum=r.data),i(g({},x)),e(!1),w.success(m("All Forum fetched successfully","bit-integrations"));return}e(!1),w.error(m("Forum list fetch failed. please try again","bit-integrations"))}).catch(()=>e(!1))},u=(l,i,e,c)=>{e(!0);const r={forumID:l.forumId};M(r,"fetch_all_topic").then(x=>{if(x&&x.success){const n=g({},l);n.default||(n.default={}),x.data&&(n.default.allTopic=x.data),i(g({},n)),e(!1),w.success(m("All Topic fetched successfully","bit-integrations"));return}e(!1),w.error(m("Topic list fetch failed. please try again","bit-integrations"))}).catch(()=>e(!1))},f=(l,i)=>{let e=[];i==="1"?e=l==null?void 0:l.createGroupFields:i==="5"?e=l==null?void 0:l.topicInForumFields:i==="8"||i==="11"?e=l==null?void 0:l.sendAllUserNotificationFields:i==="9"||i==="10"?e=l==null?void 0:l.sendAllGroupPrivateMessageFields:i==="14"?e=l==null?void 0:l.addPostToGroupFields:i==="15"?e=l==null?void 0:l.addPostSiteWideActivityStreamFields:i==="17"&&(e=l==null?void 0:l.postReplyTopicForumFields);const c=e.filter(r=>r.required===!0);return c.length>0?c.map(r=>({formField:"",buddyBossFormField:r.key})):[{formField:"",buddyBossFormField:""}]},le=l=>!((l.field_map?l.field_map.filter(e=>!e.formField&&!e.buddyBossFormField):[]).length>0),b=(l,i,e)=>{const c=g({},i);c.field_map.splice(l,0,{}),e(g({},c))},y=(l,i,e)=>{const c=g({},i);c.field_map.length>1&&c.field_map.splice(l,1),e(g({},c))},q=(l,i,e,c)=>{const r=g({},e);r.field_map[i][l.target.name]=l.target.value,l.target.value==="custom"&&(r.field_map[i].customValue=""),c(g({},r))};function o({i:l,formFields:i,field:e,buddyBossConf:c,setBuddyBossConf:r,mainAction:x,buddyBossFields:n}){var v;I.useEffect(()=>{var p;if(((p=c==null?void 0:c.field_map)==null?void 0:p.length)===1&&e.buddyBossFormField===""){const F=g({},c),_=f(F,x);F.field_map=_,r(F)}},[x]);const j=n.filter(p=>p.required===!0)||[],S=n.filter(p=>p.required===!1)||[],T=W(K),{isPro:A}=T;return t.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:t.jsxs("div",{className:"pos-rel flx",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:e.formField||"",onChange:p=>q(p,l,c,r),children:[t.jsx("option",{value:"",children:m("Select Field","bit-integrations")}),t.jsx("optgroup",{label:m("Form Fields","bit-integrations"),children:i==null?void 0:i.map(p=>t.jsx("option",{value:p.name,children:p.label},`ff-rm-${p.name}`))}),t.jsx("option",{value:"custom",children:m("Custom...","bit-integrations")}),t.jsx("optgroup",{label:sprintf(m("General Smart Codes %s","bit-integrations"),A?"":`(${m("Pro","bit-integrations")})`),children:A&&((v=Q)==null?void 0:v.map(p=>t.jsx("option",{value:p.name,children:p.label},`ff-rm-${p.name}`)))})]}),e.formField==="custom"&&t.jsx(L,{onChange:p=>X(p,l,c,r),label:m("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:e.customValue,placeholder:m("Custom Value","bit-integrations"),formFields:i}),t.jsxs("select",{className:"btcd-paper-inp",disabled:l<j.length,name:"buddyBossFormField",value:l<(j==null?void 0:j.length)?j[l].key||"":e.buddyBossFormField||"",onChange:p=>q(p,l,c,r),children:[t.jsx("option",{value:"",children:m("Select Field","bit-integrations")}),l<j.length?t.jsx("option",{value:j[l].key,children:j[l].label},j[l].key):S.map(({key:p,label:F})=>t.jsx("option",{value:p,children:F},p))]})]}),l>=j.length&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>b(l,c,r),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),t.jsx("button",{onClick:()=>y(l,c,r),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:t.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function ie({formFields:l,handleInput:i,buddyBossConf:e,setBuddyBossConf:c,isLoading:r,setIsLoading:x,setSnackbar:n,allIntegURL:j,isInfo:S,edit:T}){var p,F,_,G;I.useEffect(()=>{["2","6","8","9"].includes(e==null?void 0:e.mainAction)&&V(e,c,x),["3","4","8","9","10","12","15","16"].includes(e==null?void 0:e.mainAction)&&$(e,c,x),["5","13","17"].includes(e==null?void 0:e.mainAction)&&R(e,c,x)},[e.mainAction]);const A=(a,h)=>{const N=g({},e);h==="groupId"&&(a!==""?N[h]=a:delete N[h]),h==="friendId"&&(a!==""?N[h]=a:delete N[h]),h==="forumId"&&(a!==""?N[h]=a:delete N[h]),h==="topicId"&&(a!==""?N[h]=a:delete N[h]),h==="userStatusId"&&(a!==""?N[h]=a:delete N[h]),c(g({},N))},v=a=>{let h=[];return(e==null?void 0:e.mainAction)==="1"?h=(e==null?void 0:e.createGroupFields)||[]:(e==null?void 0:e.mainAction)==="5"?h=(e==null?void 0:e.topicInForumFields)||[]:(e==null?void 0:e.mainAction)==="8"||(e==null?void 0:e.mainAction)==="11"?h=(e==null?void 0:e.sendAllUserNotificationFields)||[]:(e==null?void 0:e.mainAction)==="9"||(e==null?void 0:e.mainAction)==="10"?h=(e==null?void 0:e.sendAllGroupPrivateMessageFields)||[]:(e==null?void 0:e.mainAction)==="14"?h=(e==null?void 0:e.addPostToGroupFields)||[]:(e==null?void 0:e.mainAction)==="15"||(e==null?void 0:e.mainAction)==="16"?h=(e==null?void 0:e.addPostSiteWideActivityStreamFields)||[]:(e==null?void 0:e.mainAction)==="17"&&(h=(e==null?void 0:e.postReplyTopicForumFields)||[]),h};return t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("b",{className:"wdt-200 d-in-b",children:m("Actions:","bit-integrations")}),t.jsxs("select",{onChange:i,name:"mainAction",value:e==null?void 0:e.mainAction,className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"",children:m("Select Actions","bit-integrations")}),(e==null?void 0:e.allActions)&&e.allActions.map(({key:a,label:h})=>t.jsx("option",{value:a,children:h},a))]}),t.jsx("br",{}),t.jsx("br",{}),["2","6","8","9","14"].includes(e==null?void 0:e.mainAction)&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsxs("div",{className:"flx mt-4",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:m("Select group:","bit-integrations")}),t.jsx(k,{className:"w-5",defaultValue:e==null?void 0:e.groupId,options:((p=e==null?void 0:e.default)==null?void 0:p.allGroup)&&e.default.allGroup.map(a=>({label:a.name,value:a.id})),onChange:a=>A(a,"groupId"),singleSelect:!0}),t.jsx("button",{onClick:()=>V(e,c,x),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${m("Fetch All Groups","bit-integrations")}'`},type:"button",disabled:r,children:"↻"})]})]}),["3","4","7","8","9","10","12","14","15","16"].includes(e==null?void 0:e.mainAction)&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsxs("div",{className:"flx mt-4",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:m(`${e.mainAction==="8"?m("Sender User","bit-integrations"):m("Select User","bit-integrations")}`,"bit-integrations")}),t.jsx(k,{className:"w-5",defaultValue:e==null?void 0:e.friendId,options:((F=e==null?void 0:e.default)==null?void 0:F.allUser)&&e.default.allUser.map(a=>({label:a.display_name,value:a.ID})),onChange:a=>A(a,"friendId"),singleSelect:(e==null?void 0:e.mainAction)!=="12"}),t.jsx("button",{onClick:()=>$(e,c,x),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${m("Fetch All User","bit-integrations")}'`},type:"button",disabled:r,children:"↻"})]})]}),["5","13","17"].includes(e==null?void 0:e.mainAction)&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsxs("div",{className:"flx mt-4",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:m("Select Forum:","bit-integrations")}),t.jsx(k,{className:"w-5",defaultValue:e==null?void 0:e.forumId,options:((_=e==null?void 0:e.default)==null?void 0:_.allForum)&&e.default.allForum.map(a=>({label:a.forum_title,value:a.forum_id.toString()})),onChange:a=>A(a,"forumId"),singleSelect:(e==null?void 0:e.mainAction)!=="13"}),t.jsx("button",{onClick:()=>R(e,c,x),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${m("Fetch All Forum","bit-integrations")}'`},type:"button",disabled:r,children:"↻"})]})]}),(e==null?void 0:e.forumId)!==void 0&&["17"].includes(e==null?void 0:e.mainAction)&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsxs("div",{className:"flx mt-4",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:m("Select Topic:","bit-integrations")}),t.jsx(k,{className:"w-5",defaultValue:e==null?void 0:e.topicId,options:((G=e==null?void 0:e.default)==null?void 0:G.allTopic)&&e.default.allTopic.map(a=>({label:a.topic_title,value:a.topic_id.toString()})),onChange:a=>A(a,"topicId"),singleSelect:!0}),t.jsx("button",{onClick:()=>u(e,c,x),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${m("Fetch All Topic","bit-integrations")}'`},type:"button",disabled:r,children:"↻"})]})]}),["18"].includes(e==null?void 0:e.mainAction)&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsxs("div",{className:"flx mt-4",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:m("Select Status:","bit-integrations")}),t.jsx(k,{className:"w-5",defaultValue:e==null?void 0:e.userStatusId,options:e.userStatusOptions.map(a=>({label:a.label,value:a.key})),onChange:a=>A(a,"userStatusId"),singleSelect:!0})]})]}),t.jsx("br",{}),t.jsx("br",{}),r&&t.jsx(E,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),t.jsxs(t.Fragment,{children:[["1","5","8","9","10","11","14","15","16","17"].includes(e==null?void 0:e.mainAction)&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:m("Map Fields","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:m("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:m("BuddyBoss Fields","bit-integrations")})})]}),e.field_map.map((a,h)=>t.jsx(o,{i:h,field:a,buddyBossConf:e,formFields:l,setBuddyBossConf:c,setSnackbar:n,mainAction:e==null?void 0:e.mainAction,buddyBossFields:v()},`rp-m-${h+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>Y(e.field_map.length,e,c),className:"icn-btn sh-sm",type:"button",children:"+"})})]}),t.jsx("br",{}),t.jsx("br",{}),e.mainAction==="1"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:m("Utilities","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsx(s,{buddyBossConf:e,setBuddyBossConf:c,formFields:l})]})]}),t.jsx("br",{}),t.jsx(Z,{note:m("Some integrations will only work for logged-in users.","bit-integrations")})]})}export{ie as B,le as c,te as h};
