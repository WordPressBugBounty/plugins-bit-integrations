import{u as w,o as C,r as i,j as t}from"./main-441.js";import"./bi.141.437.js";import{B as j}from"./bi.766.697.js";import{_ as b}from"./bi.452.0.js";import{S}from"./bi.239.13.js";import{S as P}from"./bi.290.922.js";import{I as v,s as W}from"./bi.73.3.js";import I from"./bi.869.190.js";import{W as N,g as y}from"./bi.358.734.js";import"./bi.663.9.js";import"./bi.866.11.js";import"./bi.655.14.js";import"./bi.292.699.js";function R({formFields:c,setFlow:f,flow:d,allIntegURL:g}){const x=w(),{formID:m}=C(),[p,n]=i.useState(!1),[e,u]=i.useState(1),[h,o]=i.useState({show:!1}),[s,a]=i.useState({name:"WP Courseware",type:"WP Courseware",field_map:[{formField:"",wpCoursewareField:""}],default:{},action:"",course:[],actions:{}}),l=r=>{r===2&&s.name!==""?(y(s,a),u(r)):r===3&&s.action!==""&&s.course.length>0&&u(r),document.getElementById("btcd-settings-wrp").scrollTop=0};return t.jsxs("div",{children:[t.jsx(S,{snack:h,setSnackbar:o}),t.jsx("div",{className:"txt-center mt-2",children:t.jsx(P,{step:3,active:e})}),t.jsx(I,{formID:m,wpCoursewareConf:s,setWPCoursewareConf:a,step:e,nextPage:l,isLoading:p,setIsLoading:n,setSnackbar:o}),t.jsx("div",{className:"btcd-stp-page",style:{overflow:e===2&&"initial",width:e===2&&900,height:e===2&&"auto",minHeight:e===2&&"200px"},children:t.jsx(N,{formID:m,formFields:c,wpCoursewareConf:s,setWPCoursewareConf:a,setIsLoading:n,setSnackbar:o})}),t.jsx(v,{step:e,saveConfig:()=>W({flow:d,setFlow:f,allIntegURL:g,conf:s,navigate:x,setIsLoading:n,setSnackbar:o}),isLoading:p,dataConf:s,setDataConf:a,formFields:c}),t.jsx("div",{className:"btcd-stp-page",style:{width:e===2&&900,height:e===2&&"auto",minHeight:e===2&&"200px"},children:t.jsxs("button",{onClick:()=>l(3),disabled:s.action===""||s.course.length===0,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[b("Next","bit-integrations"),t.jsx(j,{className:"ml-1 rev-icn"})]})})]})}export{R as default};