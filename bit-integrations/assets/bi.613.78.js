import{u as x,o as j,e as u,f as b,r as c,j as t}from"./main-288.js";import{f as h,$ as y,g as w,_ as f}from"./bi.4.0.js";import{S as C}from"./bi.470.13.js";import"./bi.197.434.js";import{S,I as B,s as _}from"./bi.826.3.js";import{h as m,B as N}from"./bi.831.769.js";import"./bi.627.9.js";import"./bi.147.11.js";import"./bi.223.14.js";import"./bi.294.669.js";import"./bi.335.670.js";function z({allIntegURL:p}){const I=x(),{formID:v}=j(),[e,s]=u(h),[i,E]=u(y),a=b(w),[o,d]=c.useState(!1),[l,r]=c.useState({show:!1});function g(){switch(e.mainAction){case"1":return e.privacyId===void 0;case"2":return e.groupId===void 0;case"3":return e.friendId===void 0;case"4":return e.friendId===void 0;case"5":return e.forumId===void 0;case"6":return e.groupId===void 0;case"7":return e.friendId===void 0;case"8":return e.groupId===void 0||e.friendId===void 0;case"9":return e.groupId===void 0||e.friendId===void 0;case"10":return e.friendId===void 0;case"12":return e.friendId===void 0;case"13":return e.forumId===void 0;case"14":return e.groupId===void 0||e.friendId===void 0;case"15":return e.friendId===void 0;case"16":return e.friendId===void 0;case"17":return e.topicId===void 0||e.forumId===void 0;case"18":return e.userStatusId===void 0;default:return!1}}return t.jsxs("div",{style:{width:900},children:[t.jsx(C,{snack:l,setSnackbar:r}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:f("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:n=>m(n,e,s),name:"name",value:e.name,type:"text",placeholder:f("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(S,{entity:i.triggered_entity,setSnackbar:r}),t.jsx(N,{formID:v,formFields:a,handleInput:n=>m(n,e,s),buddyBossConf:e,setBuddyBossConf:s,isLoading:o,setIsLoading:d,setSnackbar:r}),t.jsx(B,{edit:!0,saveConfig:()=>_({flow:i,allIntegURL:p,conf:e,navigate:I,edit:1,setIsLoading:d,setSnackbar:r}),disabled:!e.mainAction||o||g(),isLoading:o,dataConf:e,setDataConf:s,formFields:a}),t.jsx("br",{})]})}export{z as default};
