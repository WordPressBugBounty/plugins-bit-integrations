import{u as b,l as j,r as i,j as e}from"./main-29.js";import{d as C,_ as m,I,F as S}from"./bi.860.15.js";import{B as _}from"./bi.22.698.js";import{S as k}from"./bi.885.903.js";import K from"./bi.90.232.js";import{c as N}from"./bi.548.809.js";import{C as w}from"./bi.73.810.js";import"./bi.244.714.js";function M({formFields:c,setFlow:d,flow:f,allIntegURL:u}){const g=b(),{formID:l}=j(),[n,o]=i.useState(!1),[s,p]=i.useState(1),[x,a]=i.useState({show:!1}),[t,r]=i.useState({name:"Kit(ConvertKit)",type:"Kit(ConvertKit)",api_secret:"",field_map:[{formField:"",convertKitField:""}],actions:{}}),h=v=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),v===3){if(!N(t)){a({show:!0,msg:m("Please map all required fields to continue.","bit-integrations")});return}if(!(t!=null&&t.formId)){a({show:!0,msg:m("Please select form to continue.","bit-integrations")});return}t.name!==""&&t.field_map.length>0&&p(3)}};return e.jsxs("div",{children:[e.jsx(C,{snack:x,setSnackbar:a}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(k,{step:3,active:s})}),e.jsx(K,{formID:l,convertKitConf:t,setConvertKitConf:r,step:s,setstep:p,isLoading:n,setIsLoading:o,setSnackbar:a}),e.jsxs("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"auto"},children:[e.jsx(w,{formID:l,formFields:c,convertKitConf:t,setConvertKitConf:r,isLoading:n,setIsLoading:o,setSnackbar:a}),e.jsxs("button",{onClick:()=>h(3),disabled:!(t!=null&&t.formId)||t.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[m("Next","bit-integrations"),"  ",e.jsx(_,{className:"ml-1 rev-icn"})]})]}),e.jsx(I,{step:s,saveConfig:()=>S(f,d,u,t,g,"","",o),isLoading:n,dataConf:t,setDataConf:r,formFields:c})]})}export{M as default};
