import{u as j,o as I,r,j as e}from"./main-270.js";import{_ as i}from"./bi.340.0.js";import"./bi.88.440.js";import{B as S}from"./bi.448.736.js";import{S as w}from"./bi.218.13.js";import{S as k}from"./bi.337.950.js";import{I as v,i as N}from"./bi.155.3.js";import P from"./bi.203.235.js";import{c}from"./bi.940.848.js";import{C as y}from"./bi.701.849.js";import"./bi.724.9.js";import"./bi.209.11.js";import"./bi.117.14.js";import"./bi.104.742.js";function J({formFields:l,setFlow:p,flow:g,allIntegURL:f}){const b=j(),{formID:u}=I(),[o,m]=r.useState(!1),[a,d]=r.useState(1),[h,s]=r.useState({show:!1}),[t,n]=r.useState({name:"Kit(ConvertKit)",type:"Kit(ConvertKit)",api_secret:"",field_map:[{formField:"",convertKitField:""}],actions:{},module:""}),x=_=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),_===3){if(!c(t)){s({show:!0,msg:i("Please map all required fields to continue.","bit-integrations")});return}if(!(t!=null&&t.module)){s({show:!0,msg:i("Please select module to continue.","bit-integrations")});return}if((t==null?void 0:t.module)==="add_subscriber_to_a_form"&&!(t!=null&&t.formId)){s({show:!0,msg:i("Please select form to continue.","bit-integrations")});return}if(((t==null?void 0:t.module)==="add_tags_to_a_subscriber"||(t==null?void 0:t.module)==="remove_tags_to_a_subscriber")&&!(t!=null&&t.tagIds)){s({show:!0,msg:i("Please select tag continue.","bit-integrations")});return}t.name!==""&&t.field_map.length>0&&d(3)}};return e.jsxs("div",{children:[e.jsx(w,{snack:h,setSnackbar:s}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(k,{step:3,active:a})}),e.jsx(P,{formID:u,convertKitConf:t,setConvertKitConf:n,step:a,setstep:d,isLoading:o,setIsLoading:m,setSnackbar:s}),e.jsxs("div",{className:"btcd-stp-page",style:{width:a===2&&900,height:a===2&&"auto"},children:[e.jsx(y,{formID:u,formFields:l,convertKitConf:t,setConvertKitConf:n,isLoading:o,setIsLoading:m,setSnackbar:s}),e.jsxs("button",{onClick:()=>x(3),disabled:!c(t),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[i("Next","bit-integrations"),"  ",e.jsx(S,{className:"ml-1 rev-icn"})]})]}),e.jsx(v,{step:a,saveConfig:()=>N(g,p,f,t,b,"","",m),isLoading:o,dataConf:t,setDataConf:n,formFields:l})]})}export{J as default};
