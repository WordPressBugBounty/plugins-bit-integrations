import{u as x,l as h,e as u,i as j,r as c,j as s}from"./main-165.js";import{g as b,$ as y,h as w,d as C,_ as f,i as B,I as _,s as S}from"./bi.312.95.js";import{h as I,B as N}from"./bi.63.831.js";import"./bi.953.732.js";import"./bi.422.733.js";function L({allIntegURL:v}){const l=x(),{formID:m}=h(),[e,t]=u(b),[d,E]=u(y),i=j(w),[r,o]=c.useState(!1),[p,n]=c.useState({show:!1});function g(){switch(e.mainAction){case"1":return e.privacyId===void 0;case"2":return e.groupId===void 0;case"3":return e.friendId===void 0;case"4":return e.friendId===void 0;case"5":return e.forumId===void 0;case"6":return e.groupId===void 0;case"7":return e.friendId===void 0;case"8":return e.groupId===void 0||e.friendId===void 0;case"9":return e.groupId===void 0||e.friendId===void 0;case"10":return e.friendId===void 0;case"12":return e.friendId===void 0;case"13":return e.forumId===void 0;case"14":return e.groupId===void 0||e.friendId===void 0;case"15":return e.friendId===void 0;case"16":return e.friendId===void 0;case"17":return e.topicId===void 0||e.forumId===void 0;case"18":return e.userStatusId===void 0;default:return!1}}return s.jsxs("div",{style:{width:900},children:[s.jsx(C,{snack:p,setSnackbar:n}),s.jsxs("div",{className:"flx mt-3",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:f("Integration Name:","bit-integrations")}),s.jsx("input",{className:"btcd-paper-inp w-5",onChange:a=>I(a,e,t),name:"name",value:e.name,type:"text",placeholder:f("Integration Name...","bit-integrations")})]}),s.jsx("br",{}),s.jsx("br",{}),s.jsx(B,{entity:d.triggered_entity,setSnackbar:n}),s.jsx(N,{formID:m,formFields:i,handleInput:a=>I(a,e,t),buddyBossConf:e,setBuddyBossConf:t,isLoading:r,setIsLoading:o,setSnackbar:n}),s.jsx(_,{edit:!0,saveConfig:()=>S({flow:d,allIntegURL:v,conf:e,navigate:l,edit:1,setIsLoading:o,setSnackbar:n}),disabled:!e.mainAction||r||g(),isLoading:r,dataConf:e,setDataConf:t,formFields:i}),s.jsx("br",{})]})}export{L as default};
