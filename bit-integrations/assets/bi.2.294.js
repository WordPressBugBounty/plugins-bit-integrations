import{u as j,l as S,r as a,j as e}from"./main-579.js";import{d as M,_ as d,I as v,s as k}from"./bi.919.15.js";import{B as w}from"./bi.367.697.js";import{S as N}from"./bi.655.902.js";import _ from"./bi.360.177.js";import{s as y,h as L,f as E,c as P}from"./bi.852.685.js";import{M as T}from"./bi.695.686.js";import"./bi.339.713.js";import"./bi.464.687.js";import"./bi.850.660.js";import"./bi.517.661.js";function O({formFields:c,setFlow:h,flow:g,allIntegURL:x}){const C=j(),{formID:l}=S(),[m,n]=a.useState(!1),[p,u]=a.useState({}),[i,f]=a.useState(1),[I,s]=a.useState({show:!1}),[t,o]=a.useState({name:"Mail Chimp",type:"Mail Chimp",clientId:"",clientSecret:"",listId:"",listName:"",tags:"",field_map:[{formField:"",mailChimpField:""}],address_field:[],module:"",actions:{},moduleLists:[]});a.useEffect(()=>{window.opener&&y("mailChimp")},[]);const b=()=>{var r;if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),(r=t.actions)!=null&&r.address&&!E(t)){s({show:!0,msg:d("Please map address required fields to continue.","bit-integrations")});return}if(!P(t)){s({show:!0,msg:d("Please map fields to continue.","bit-integrations")});return}t.listId!==""&&f(3)};return e.jsxs("div",{children:[e.jsx(M,{snack:I,setSnackbar:s}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(N,{step:3,active:i})}),e.jsx(_,{formID:l,mailChimpConf:t,setMailChimpConf:o,step:i,setstep:f,isLoading:m,setIsLoading:n,setSnackbar:s}),e.jsxs("div",{className:"btcd-stp-page",style:{width:i===2&&900,height:i===2&&"auto"},children:[e.jsx(T,{formID:l,formFields:c,handleInput:r=>L(r,t,o,l,p,u,s,n),mailChimpConf:t,setMailChimpConf:o,isLoading:m,setIsLoading:n,setSnackbar:s,loading:p,setLoading:u}),e.jsxs("button",{onClick:()=>b(),disabled:!t.listId||t.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[d("Next","bit-integrations"),e.jsx(w,{className:"ml-1 rev-icn"})]})]}),e.jsx(v,{step:i,saveConfig:()=>k({flow:g,setFlow:h,allIntegURL:x,navigate:C,conf:t,setIsLoading:n,setSnackbar:s}),isLoading:m,dataConf:t,setDataConf:o,formFields:c})]})}export{O as default};
