import{u as j,l as S,r as i,j as e}from"./main-29.js";import{d as y,_ as c,I,F as v}from"./bi.860.15.js";import{B as M}from"./bi.22.698.js";import{S as _}from"./bi.885.903.js";import k from"./bi.905.251.js";import{c as N}from"./bi.681.845.js";import{M as w}from"./bi.16.846.js";import"./bi.244.714.js";function q({formFields:l,setFlow:p,flow:f,allIntegURL:u}){const g=j(),{formID:m}=S(),[n,o]=i.useState(!1),[s,d]=i.useState(1),[x,a]=i.useState({show:!1}),[t,r]=i.useState({name:"Sarbacane(Mailify)",type:"Sarbacane(Mailify)",account_id:"",api_key:"",field_map:[{formField:"",mailifyField:""}],actions:{}}),h=b=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),b===3){if(!N(t)){a({show:!0,msg:c("Please map all required fields to continue.","bit-integrations")});return}if(!(t!=null&&t.listId)){a({show:!0,msg:c("Please select list to continue.","bit-integrations")});return}t.name!==""&&t.field_map.length>0&&d(3)}};return e.jsxs("div",{children:[e.jsx(y,{snack:x,setSnackbar:a}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(_,{step:3,active:s})}),e.jsx(k,{formID:m,mailifyConf:t,setMailifyConf:r,step:s,setstep:d,isLoading:n,setIsLoading:o,setSnackbar:a}),e.jsxs("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"auto"},children:[e.jsx(w,{formID:m,formFields:l,mailifyConf:t,setMailifyConf:r,isLoading:n,setIsLoading:o,setSnackbar:a}),e.jsxs("button",{onClick:()=>h(3),disabled:!(t!=null&&t.listId)||t.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[c("Next","bit-integrations"),"  ",e.jsx(M,{className:"ml-1 rev-icn"})]})]}),e.jsx(I,{step:s,saveConfig:()=>v(f,p,u,t,g,"","",o),isLoading:n,dataConf:t,setDataConf:r,formFields:l})]})}export{q as default};
