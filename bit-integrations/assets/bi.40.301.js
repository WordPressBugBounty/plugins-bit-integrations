import{u as I,o as v,r as i,j as t}from"./main-441.js";import"./bi.141.437.js";import{B}from"./bi.766.697.js";import{_ as a}from"./bi.452.0.js";import{S as y}from"./bi.239.13.js";import{S as k}from"./bi.290.922.js";import{I as C,g as _}from"./bi.73.3.js";import N from"./bi.626.181.js";import{c as w}from"./bi.26.707.js";import{S as E}from"./bi.194.708.js";import"./bi.663.9.js";import"./bi.866.11.js";import"./bi.655.14.js";import"./bi.292.699.js";import"./bi.768.673.js";import"./bi.410.674.js";function Q({formFields:l,setFlow:u,flow:f,allIntegURL:g}){const x=I(),{formID:p}=v(),[r,o]=i.useState(!1),[s,c]=i.useState(1),[S,n]=i.useState({show:!1}),[b,d]=i.useState({templateId:"",RedirectionUrl:""}),[e,m]=i.useState({name:"Brevo(Sendinblue)",type:"Brevo(Sendinblue)",lists:[],api_key:"",field_map:[{formField:"",sendinBlueField:""}],actions:{}}),h=j=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),j===3){if(e.templateId===""||e.redirectionUrl===""){d({templateId:e.templateId?"":a("Template name can't be empty","bit-integrations"),redirectionUrl:e.redirectionUrl?"":a("Redirection url name can't be empty","bit-integrations")});return}if(!w(e)){n({show:!0,msg:a("Please map all required fields to continue.","bit-integrations")});return}e.name!==""&&e.field_map.length>0&&c(3)}};return t.jsxs("div",{children:[t.jsx(y,{snack:S,setSnackbar:n}),t.jsx("div",{className:"txt-center mt-2",children:t.jsx(k,{step:3,active:s})}),t.jsx(N,{formID:p,sendinBlueConf:e,setSendinBlueConf:m,step:s,setstep:c,isLoading:r,setIsLoading:o,setSnackbar:n}),t.jsxs("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"auto"},children:[t.jsx(E,{formID:p,formFields:l,sendinBlueConf:e,setSendinBlueConf:m,isLoading:r,setIsLoading:o,setSnackbar:n,error:b,setError:d}),t.jsxs("button",{onClick:()=>h(3),disabled:e.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[a("Next","bit-integrations"),t.jsx(B,{className:"ml-1 rev-icn"})]})]}),t.jsx(C,{step:s,saveConfig:()=>_(f,u,g,e,x,"","",o),isLoading:r,dataConf:e,setDataConf:m,formFields:l})]})}export{Q as default};
