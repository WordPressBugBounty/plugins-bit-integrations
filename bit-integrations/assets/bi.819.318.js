import{u as w,l as C,r,j as e}from"./main-650.js";import{d as j,I as b,s as S,_ as P}from"./bi.541.15.js";import{B as v}from"./bi.912.697.js";import{S as W}from"./bi.326.902.js";import I from"./bi.379.188.js";import{W as N,g as y}from"./bi.221.720.js";import"./bi.770.713.js";function H({formFields:c,setFlow:d,flow:f,allIntegURL:g}){const x=w(),{formID:u}=C(),[m,i]=r.useState(!1),[t,l]=r.useState(1),[h,a]=r.useState({show:!1}),[s,o]=r.useState({name:"WP Courseware",type:"WP Courseware",field_map:[{formField:"",wpCoursewareField:""}],default:{},action:"",course:[],actions:{}}),p=n=>{n===2&&s.name!==""?(y(s,o),l(n)):n===3&&s.action!==""&&s.course.length>0&&l(n),document.getElementById("btcd-settings-wrp").scrollTop=0};return e.jsxs("div",{children:[e.jsx(j,{snack:h,setSnackbar:a}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(W,{step:3,active:t})}),e.jsx(I,{formID:u,wpCoursewareConf:s,setWPCoursewareConf:o,step:t,nextPage:p,isLoading:m,setIsLoading:i,setSnackbar:a}),e.jsx("div",{className:"btcd-stp-page",style:{overflow:t===2&&"initial",width:t===2&&900,height:t===2&&"auto",minHeight:t===2&&"200px"},children:e.jsx(N,{formID:u,formFields:c,wpCoursewareConf:s,setWPCoursewareConf:o,setIsLoading:i,setSnackbar:a})}),e.jsx(b,{step:t,saveConfig:()=>S({flow:f,setFlow:d,allIntegURL:g,conf:s,navigate:x,setIsLoading:i,setSnackbar:a}),isLoading:m,dataConf:s,setDataConf:o,formFields:c}),e.jsx("div",{className:"btcd-stp-page",style:{width:t===2&&900,height:t===2&&"auto",minHeight:t===2&&"200px"},children:e.jsxs("button",{onClick:()=>p(3),disabled:s.action===""||s.course.length===0,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[P("Next","bit-integrations"),e.jsx(v,{className:"ml-1 rev-icn"})]})})]})}export{H as default};