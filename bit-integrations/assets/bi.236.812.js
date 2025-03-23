var B=Object.defineProperty;var Z=Object.getOwnPropertySymbols;var ee=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable;var L=(t,l,e)=>l in t?B(t,l,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[l]=e,x=(t,l)=>{for(var e in l||(l={}))ee.call(l,e)&&L(t,e,l[e]);if(Z)for(var e of Z(l))te.call(l,e)&&L(t,e,l[e]);return t};import{r as G,j as a,L as d,f as ae}from"./main-556.js";import{x as O,a9 as le}from"./bi.838.440.js";import{c as D,d as A,_ as i,e as ie}from"./bi.562.0.js";import{a as re,h as ce,b as ne}from"./bi.308.3.js";import{a as me}from"./bi.657.9.js";import{b as pe}from"./bi.510.11.js";import{T as se}from"./bi.587.710.js";const he=(t,l,e)=>{const c=x({},l);c.field_map.splice(t,0,{}),e(x({},c))},xe=(t,l,e)=>{const c=x({},l);c.field_map.length>1&&c.field_map.splice(t,1),e(x({},c))},o=(t,l,e,c)=>{const n=x({},e);n.field_map[l][t.target.name]=t.target.value,t.target.value==="custom"&&(n.field_map[l].customValue=""),c(x({},n))},Ge=t=>{switch(Number(t.mainAction)){case E:return t.privacyId===void 0;case Q:return t.groupId===void 0;case z:return t.friendId===void 0;case J:return t.friendId===void 0;case T:return t.forumId===void 0;case V:return t.groupId===void 0;case y:return t.friendId===void 0;case v:return t.groupId===void 0||t.friendId===void 0;case S:return t.groupId===void 0||t.friendId===void 0;case N:return t.friendId===void 0;case H:return t.friendId===void 0;case W:return t.forumId===void 0;case R:return t.groupId===void 0||t.friendId===void 0;case U:return t.friendId===void 0;case k:return t.friendId===void 0;case I:return t.topicId===void 0||t.forumId===void 0;case C:return t.userStatusId===void 0;default:return!1}},E=1,Q=2,z=3,J=4,T=5,V=6,y=7,v=8,S=9,N=10,$=11,H=12,W=13,R=14,U=15,k=16,I=17,C=18,De=(t,l,e,c,n,s)=>{const m=x({},l),{name:j}=t.target;t.target.value!==""?m[j]=t.target.value:delete m[j],j==="mainAction"&&(m.field_map=[{formField:"",buddyBossFormField:""}]),m[t.target.name]=t.target.value,e(x({},m))},b=(t,l,e,c)=>{e(!0),D(null,"fetch_all_group").then(n=>{if(n&&n.success){l(s=>{const m=x({},s);if(m.default||(m.default={}),n.data)if(Number(t.mainAction)===V||Number(t.mainAction)===R){const w=[{id:"any",name:"Any"},...n.data];m.default.allGroup=w}else m.default.allGroup=n.data;return m}),e(!1),A.success(i("All Group fetched successfully","bit-integrations"));return}e(!1),A.error(i("Group fetch failed. please try again","bit-integrations"))}).catch(()=>e(!1))},Y=(t,l,e,c)=>{e(!0),D(null,"fetch_all_user").then(n=>{if(n&&n.success){l(s=>{const m=x({},s);return m.default||(m.default={}),n.data&&(m.default.allUser=n.data),m}),e(!1),A.success(i("All User fetched successfully","bit-integrations"));return}e(!1),A.error(i("User fetch failed. please try again","bit-integrations"))}).catch(()=>e(!1))},f=(t,l,e,c)=>{e(!0),D(null,"fetch_all_forum").then(n=>{if(n&&n.success){const s=x({},t);s.default||(s.default={}),n.data&&(s.default.allForum=n.data),l(x({},s)),e(!1),A.success(i("All Forum fetched successfully","bit-integrations"));return}e(!1),A.error(i("Forum list fetch failed. please try again","bit-integrations"))}).catch(()=>e(!1))},ge=(t,l,e,c)=>{e(!0);const n={forumID:t.forumId};D(n,"fetch_all_topic").then(s=>{if(s&&s.success){const m=x({},t);m.default||(m.default={}),s.data&&(m.default.allTopic=s.data),l(x({},m)),e(!1),A.success(i("All Topic fetched successfully","bit-integrations"));return}e(!1),A.error(i("Topic list fetch failed. please try again","bit-integrations"))}).catch(()=>e(!1))},je=t=>{var l=[];switch(Number(t.mainAction)){case E:l=t==null?void 0:t.createGroupFields;break;case T:l=t==null?void 0:t.topicInForumFields;break;case v:case $:l=t==null?void 0:t.sendAllUserNotificationFields;break;case S:case N:l=t==null?void 0:t.sendAllGroupPrivateMessageFields;break;case R:l=t==null?void 0:t.addPostToGroupFields;break;case U:l=t==null?void 0:t.addPostSiteWideActivityStreamFields;break;case I:l=t==null?void 0:t.postReplyTopicForumFields;break}const e=l.filter(c=>c.required===!0);return e.length>0?e.map(c=>({formField:"",buddyBossFormField:c.key})):[{formField:"",buddyBossFormField:""}]},Ve=t=>[E,T,v,S,N,$,R,U,k,I].includes(t.mainAction)?!((t.field_map?t.field_map.filter(e=>!e.formField&&!e.buddyBossFormField):[]).length>0):!0;function _e({buddyBossConf:t,setBuddyBossConf:l,formFields:e}){var g;const[c,n]=G.useState(!1),[s,m]=G.useState({show:!1,action:()=>{}}),j=(h,p)=>{var P,u;const _=x({},t);p==="privacy"&&((P=h.target)!=null&&P.checked?(_.actions.privacy=!0,m({show:"privacy"})):(m({show:!1}),delete _.actions.privacy)),p==="type"&&((u=h.target)!=null&&u.checked?(_.actions.type=!0,m({show:"type"})):(m({show:!1}),delete _.actions.type)),l(x({},_))},w=()=>{m({show:!1})},M=(h,p)=>{const _=x({},t);p==="privacyId"&&(h!==""?_[p]=h:delete _[p]),l(x({},_))};return a.jsxs("div",{className:"pos-rel d-flx w-8",children:[a.jsx(pe,{checked:((g=t==null?void 0:t.actions)==null?void 0:g.privacy)||!1,onChange:h=>j(h,"privacy"),className:"wdt-200 mt-4 mr-2",value:"privacy",title:i("Add Privacy","bit-integrations"),subTitle:i("Add privacy of group","bit-integrations")}),a.jsxs(me,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:i("Ok","bit-integrations"),show:s.show==="privacy",close:w,action:w,title:i("Status","bit-integrations"),children:[a.jsx("div",{className:"btcd-hr mt-2 mb-2"}),a.jsx("div",{className:"mt-2",children:i("Select privacy of group","bit-integrations")}),c?a.jsx(d,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):a.jsx("div",{className:"flx flx-between mt-2",children:a.jsx(O,{className:"msl-wrp-options",defaultValue:t==null?void 0:t.privacyId,options:t==null?void 0:t.groupPrivacyOptions.map(h=>({label:h.label,value:h.key})),onChange:h=>M(h,"privacyId"),singleSelect:!0})})]})]})}function Fe({i:t,formFields:l,field:e,buddyBossConf:c,setBuddyBossConf:n,mainAction:s,buddyBossFields:m}){var h;G.useEffect(()=>{var p;if(((p=c==null?void 0:c.field_map)==null?void 0:p.length)===1&&e.buddyBossFormField===""){const _=x({},c),P=je(_);_.field_map=P,n(_)}},[s]);const j=m.filter(p=>p.required===!0)||[],w=m.filter(p=>p.required===!1)||[],M=ae(ie),{isPro:g}=M;return a.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:a.jsxs("div",{className:"pos-rel flx",children:[a.jsxs("div",{className:"flx integ-fld-wrp",children:[a.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:e.formField||"",onChange:p=>o(p,t,c,n),children:[a.jsx("option",{value:"",children:i("Select Field","bit-integrations")}),a.jsx("optgroup",{label:i("Form Fields","bit-integrations"),children:l==null?void 0:l.map(p=>a.jsx("option",{value:p.name,children:p.label},`ff-rm-${p.name}`))}),a.jsx("option",{value:"custom",children:i("Custom...","bit-integrations")}),a.jsx("optgroup",{label:sprintf(i("General Smart Codes %s","bit-integrations"),g?"":`(${i("Pro","bit-integrations")})`),children:g&&((h=re)==null?void 0:h.map(p=>a.jsx("option",{value:p.name,children:p.label},`ff-rm-${p.name}`)))})]}),e.formField==="custom"&&a.jsx(se,{onChange:p=>ce(p,t,c,n),label:i("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:e.customValue,placeholder:i("Custom Value","bit-integrations"),formFields:l}),a.jsxs("select",{className:"btcd-paper-inp",disabled:t<j.length,name:"buddyBossFormField",value:t<(j==null?void 0:j.length)?j[t].key||"":e.buddyBossFormField||"",onChange:p=>o(p,t,c,n),children:[a.jsx("option",{value:"",children:i("Select Field","bit-integrations")}),t<j.length?a.jsx("option",{value:j[t].key,children:j[t].label},j[t].key):w.map(({key:p,label:_})=>a.jsx("option",{value:p,children:_},p))]})]}),t>=j.length&&a.jsxs(a.Fragment,{children:[a.jsx("button",{onClick:()=>he(t,c,n),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),a.jsx("button",{onClick:()=>xe(t,c,n),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:a.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function $e({formFields:t,handleInput:l,buddyBossConf:e,setBuddyBossConf:c,isLoading:n,setIsLoading:s,setSnackbar:m,allIntegURL:j,isInfo:w,edit:M}){var _,P,u,K,X;const g=Number(e==null?void 0:e.mainAction);G.useEffect(()=>{ve.includes(g)&&b(e,c,s),Ne.includes(g)&&Y(e,c,s),Re.includes(g)&&f(e,c,s)},[g]);const h=(r,F)=>{const q=x({},e);r!==""?q[F]=r:delete q[F],c(x({},q))},p=r=>{let F;switch(g){case E:F=(e==null?void 0:e.createGroupFields)||[];break;case T:F=(e==null?void 0:e.topicInForumFields)||[];break;case v:case $:F=(e==null?void 0:e.sendAllUserNotificationFields)||[];break;case S:case N:F=(e==null?void 0:e.sendAllGroupPrivateMessageFields)||[];break;case R:F=(e==null?void 0:e.addPostToGroupFields)||[];break;case U:case k:F=(e==null?void 0:e.addPostSiteWideActivityStreamFields)||[];break;case I:F=(e==null?void 0:e.postReplyTopicForumFields)||[];break;default:F=[]}return F};return a.jsxs(a.Fragment,{children:[a.jsx("br",{}),a.jsx("b",{className:"wdt-200 d-in-b",children:i("Actions:","bit-integrations")}),a.jsxs("select",{onChange:l,name:"mainAction",value:e==null?void 0:e.mainAction,className:"btcd-paper-inp w-5",children:[a.jsx("option",{value:"",children:i("Select Actions","bit-integrations")}),(e==null?void 0:e.allActions)&&e.allActions.map(({key:r,label:F})=>a.jsx("option",{value:r,children:F},r))]}),a.jsx("br",{}),a.jsx("br",{}),Se.includes(g)&&a.jsxs(a.Fragment,{children:[a.jsx("br",{}),a.jsxs("div",{className:"flx mt-4",children:[a.jsx("b",{className:"wdt-200 d-in-b",children:i("Select group:","bit-integrations")}),a.jsx(O,{className:"w-5",defaultValue:e==null?void 0:e.groupId,options:((_=e==null?void 0:e.default)==null?void 0:_.allGroup)&&e.default.allGroup.map(r=>({label:r.name,value:r.id})),onChange:r=>h(r,"groupId"),singleSelect:!0}),a.jsx("button",{onClick:()=>b(e,c,s),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${i("Fetch All Groups","bit-integrations")}'`},type:"button",disabled:n,children:"↻"})]})]}),Ae.includes(g)&&a.jsxs(a.Fragment,{children:[a.jsx("br",{}),a.jsxs("div",{className:"flx mt-4",children:[a.jsx("b",{className:"wdt-200 d-in-b",children:`${Number(e.mainAction)===v||Number(e.mainAction)===N?i("Sender User","bit-integrations"):i("Select User","bit-integrations")}`}),a.jsx(O,{className:"w-5",defaultValue:e==null?void 0:e.friendId,options:((P=e==null?void 0:e.default)==null?void 0:P.allUser)&&e.default.allUser.map(r=>({label:r.display_name,value:r.ID})),onChange:r=>h(r,"friendId"),singleSelect:g!==H}),a.jsx("button",{onClick:()=>Y(e,c,s),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${i("Fetch All User","bit-integrations")}'`},type:"button",disabled:n,children:"↻"})]})]}),g===N&&a.jsx(a.Fragment,{children:a.jsxs("div",{className:"flx mt-4",children:[a.jsx("b",{className:"wdt-200 d-in-b",children:i("Recipient User","bit-integrations")}),a.jsxs("select",{className:"btcd-paper-inp w-5",name:"formField",value:(e==null?void 0:e.recipientUserId)||"",onChange:r=>h(r.target.value,"recipientUserId"),children:[a.jsx("option",{value:"",children:i("Select User","bit-integrations")}),a.jsx("optgroup",{label:i("Logged In User","bit-integrations"),children:a.jsx("option",{value:"loggedInUser",children:i("Logged In User","bit-integrations")})}),a.jsx("optgroup",{label:i("All User","bit-integrations"),children:((u=e==null?void 0:e.default)==null?void 0:u.allUser)&&e.default.allUser.map(r=>a.jsx("option",{value:r.ID,children:r.display_name},`ff-rm-${r.ID}`))}),a.jsx("optgroup",{label:i("Select user id from Form Fields","bit-integrations"),children:t==null?void 0:t.map(r=>a.jsx("option",{value:"${"+r.name+"}",children:r.label},`ff-rm-${r.name}`))})]}),a.jsx("button",{onClick:()=>Y(e,c,s),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${i("Fetch All User","bit-integrations")}'`},type:"button",disabled:n,children:"↻"})]})}),we.includes(g)&&a.jsxs(a.Fragment,{children:[a.jsx("br",{}),a.jsxs("div",{className:"flx mt-4",children:[a.jsx("b",{className:"wdt-200 d-in-b",children:i("Select Forum:","bit-integrations")}),a.jsx(O,{className:"w-5",defaultValue:e==null?void 0:e.forumId,options:((K=e==null?void 0:e.default)==null?void 0:K.allForum)&&e.default.allForum.map(r=>({label:r.forum_title,value:r.forum_id.toString()})),onChange:r=>h(r,"forumId"),singleSelect:g!==W}),a.jsx("button",{onClick:()=>f(e,c,s),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${i("Fetch All Forum","bit-integrations")}'`},type:"button",disabled:n,children:"↻"})]})]}),(e==null?void 0:e.forumId)!==void 0&&g===I&&a.jsxs(a.Fragment,{children:[a.jsx("br",{}),a.jsxs("div",{className:"flx mt-4",children:[a.jsx("b",{className:"wdt-200 d-in-b",children:i("Select Topic:","bit-integrations")}),a.jsx(O,{className:"w-5",defaultValue:e==null?void 0:e.topicId,options:((X=e==null?void 0:e.default)==null?void 0:X.allTopic)&&e.default.allTopic.map(r=>({label:r.topic_title,value:r.topic_id.toString()})),onChange:r=>h(r,"topicId"),singleSelect:!0}),a.jsx("button",{onClick:()=>ge(e,c,s),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${i("Fetch All Topic","bit-integrations")}'`},type:"button",disabled:n,children:"↻"})]})]}),g===C&&a.jsxs(a.Fragment,{children:[a.jsx("br",{}),a.jsxs("div",{className:"flx mt-4",children:[a.jsx("b",{className:"wdt-200 d-in-b",children:i("Select Status:","bit-integrations")}),a.jsx(O,{className:"w-5",defaultValue:e==null?void 0:e.userStatusId,options:e.userStatusOptions.map(r=>({label:r.label,value:r.key})),onChange:r=>h(r,"userStatusId"),singleSelect:!0})]})]}),a.jsx("br",{}),a.jsx("br",{}),n&&a.jsx(d,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),a.jsxs(a.Fragment,{children:[Ie.includes(g)&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"mt-4",children:a.jsx("b",{className:"wdt-100",children:i("Map Fields","bit-integrations")})}),a.jsx("div",{className:"btcd-hr mt-1"}),a.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[a.jsx("div",{className:"txt-dp",children:a.jsx("b",{children:i("Form Fields","bit-integrations")})}),a.jsx("div",{className:"txt-dp",children:a.jsx("b",{children:i("BuddyBoss Fields","bit-integrations")})})]}),e.field_map.map((r,F)=>a.jsx(Fe,{i:F,field:r,buddyBossConf:e,formFields:t,setBuddyBossConf:c,setSnackbar:m,mainAction:e==null?void 0:e.mainAction,buddyBossFields:p()},`rp-m-${F+9}`)),a.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:a.jsx("button",{onClick:()=>ne(e.field_map.length,e,c),className:"icn-btn sh-sm",type:"button",children:"+"})})]}),a.jsx("br",{}),a.jsx("br",{}),Number(e.mainAction)===E&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"mt-4",children:a.jsx("b",{className:"wdt-100",children:i("Utilities","bit-integrations")})}),a.jsx("div",{className:"btcd-hr mt-1"}),a.jsx(_e,{buddyBossConf:e,setBuddyBossConf:c,formFields:t})]})]}),a.jsx("br",{}),a.jsx(le,{note:i("Some integrations will only work for logged-in users.","bit-integrations")})]})}const ve=[Q,V,v,S],Ne=[z,J,v,S,N,H,U,k],Se=[Q,V,v,S,R],Ae=[z,J,y,v,S,N,H,R,U,k],Ie=[E,T,v,S,N,$,R,U,k,I],Re=[T,W,I],we=[T,W,I];export{Q as A,$e as B,E as C,z as E,J as F,T as P,V as R,y as S,v as a,S as b,Ve as c,N as d,$ as e,H as f,W as g,De as h,Ge as i,R as j,U as k,k as l,I as m,C as n};
