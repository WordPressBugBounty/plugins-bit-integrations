var w=Object.defineProperty;var S=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var v=(a,t,s)=>t in a?w(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,j=(a,t)=>{for(var s in t||(t={}))D.call(t,s)&&v(a,s,t[s]);if(S)for(var s of S(t))F.call(t,s)&&v(a,s,t[s]);return a};import{u as q,r as o,j as i}from"./main-252.js";import"./bi.269.440.js";import{_ as r,d as n}from"./bi.63.0.js";import{S as L}from"./bi.588.13.js";import{S as T}from"./bi.465.934.js";import{I as E,i as M}from"./bi.163.3.js";import z from"./bi.951.250.js";import{h as A,c as y}from"./bi.618.860.js";import{C as B}from"./bi.438.861.js";import"./bi.456.9.js";import"./bi.494.11.js";import"./bi.275.14.js";import"./bi.41.709.js";import"./bi.570.683.js";import"./bi.696.684.js";function se({formFields:a,setFlow:t,flow:s,allIntegURL:u}){const f=q(),[C,g]=o.useState(!1),[b,h]=o.useState({}),[c,x]=o.useState(1),[N,m]=o.useState({show:!1}),_=[{key:"name",label:r("Name","bit-integrations"),required:!0},{key:"description",label:r("Description","bit-integrations"),required:!1},{key:"start_date",label:r("Start Date","bit-integrations"),required:!1},{key:"due_date",label:r("Due Date","bit-integrations"),required:!1}],[e,l]=o.useState({name:"Clickup",type:"Clickup",api_key:"",field_map:[{formField:"",clickupFormField:""}],actionName:"",taskFields:_,actions:{}}),I=()=>{g(!0),M(s,t,u,e,f,"","",g).then(p=>{var k;p.success?(n.success((k=p.data)==null?void 0:k.msg),f(u)):n.error(p.data||p)})},P=d=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!y(e)){n.error(r("Please map mandatory fields","bit-integrations"));return}if(e.actionName==="task"){if(!e.selectedTeam){n.error(r("Please select a team","bit-integrations"));return}if(!e.selectedSpace){n.error(r("Please select a space","bit-integrations"));return}if(!e.selectedFolder){n.error(r("Please select a folder","bit-integrations"));return}if(!e.selectedList){n.error(r("Please select a list","bit-integrations"));return}}e.field_map.length>0&&x(d)};return i.jsxs("div",{children:[i.jsx(L,{snack:N,setSnackbar:m}),i.jsx("div",{className:"txt-center mt-2",children:i.jsx(T,{step:3,active:c})}),i.jsx(z,{clickupConf:e,setClickupConf:l,step:c,setStep:x,loading:b,setLoading:h,setSnackbar:m}),i.jsxs("div",{className:"btcd-stp-page",style:j({},c===2&&{width:900,height:"auto",overflow:"visible"}),children:[i.jsx(B,{formFields:a,handleInput:d=>A(d,e,l),clickupConf:e,setClickupConf:l,loading:b,setLoading:h,setSnackbar:m}),(e==null?void 0:e.actionName)&&i.jsxs("button",{onClick:()=>P(3),disabled:!y(e),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[r("Next","bit-integrations"),"  ",i.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(e==null?void 0:e.actionName)&&i.jsx(E,{step:c,saveConfig:()=>I(),isLoading:C,dataConf:e,setDataConf:l,formFields:a})]})}export{se as default};
