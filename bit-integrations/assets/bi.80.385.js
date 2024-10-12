var P=Object.defineProperty;var v=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var S=(a,t,s)=>t in a?P(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,j=(a,t)=>{for(var s in t||(t={}))w.call(t,s)&&S(a,s,t[s]);if(v)for(var s of v(t))D.call(t,s)&&S(a,s,t[s]);return a};import{u as q,r as o,j as i}from"./main-579.js";import{_ as r,d as L,I as T,F as E,c as n}from"./bi.919.15.js";import{S as M}from"./bi.655.902.js";import z from"./bi.539.247.js";import{h as A,c as y}from"./bi.356.836.js";import{C as B}from"./bi.566.837.js";import"./bi.339.713.js";import"./bi.850.660.js";import"./bi.517.661.js";function Y({formFields:a,setFlow:t,flow:s,allIntegURL:u}){const g=q(),[C,f]=o.useState(!1),[b,h]=o.useState({}),[c,x]=o.useState(1),[N,m]=o.useState({show:!1}),_=[{key:"name",label:r("Name","bit-integrations"),required:!0},{key:"description",label:r("Description","bit-integrations"),required:!1},{key:"start_date",label:r("Start Date","bit-integrations"),required:!1},{key:"due_date",label:r("Due Date","bit-integrations"),required:!1}],[e,l]=o.useState({name:"Clickup",type:"Clickup",api_key:"",field_map:[{formField:"",clickupFormField:""}],actionName:"",taskFields:_,actions:{}}),I=()=>{f(!0),E(s,t,u,e,g,"","",f).then(p=>{var k;p.success?(n.success((k=p.data)==null?void 0:k.msg),g(u)):n.error(p.data||p)})},F=d=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!y(e)){n.error(r("Please map mandatory fields","bit-integrations"));return}if(e.actionName==="task"){if(!e.selectedTeam){n.error(r("Please select a team","bit-integrations"));return}if(!e.selectedSpace){n.error(r("Please select a space","bit-integrations"));return}if(!e.selectedFolder){n.error(r("Please select a folder","bit-integrations"));return}if(!e.selectedList){n.error(r("Please select a list","bit-integrations"));return}}e.field_map.length>0&&x(d)};return i.jsxs("div",{children:[i.jsx(L,{snack:N,setSnackbar:m}),i.jsx("div",{className:"txt-center mt-2",children:i.jsx(M,{step:3,active:c})}),i.jsx(z,{clickupConf:e,setClickupConf:l,step:c,setStep:x,loading:b,setLoading:h,setSnackbar:m}),i.jsxs("div",{className:"btcd-stp-page",style:j({},c===2&&{width:900,height:"auto",overflow:"visible"}),children:[i.jsx(B,{formFields:a,handleInput:d=>A(d,e,l),clickupConf:e,setClickupConf:l,loading:b,setLoading:h,setSnackbar:m}),(e==null?void 0:e.actionName)&&i.jsxs("button",{onClick:()=>F(3),disabled:!y(e),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[r("Next","bit-integrations"),"  ",i.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(e==null?void 0:e.actionName)&&i.jsx(T,{step:c,saveConfig:()=>I(),isLoading:C,dataConf:e,setDataConf:l,formFields:a})]})}export{Y as default};
