var P=Object.defineProperty;var k=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var S=(a,t,s)=>t in a?P(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,v=(a,t)=>{for(var s in t||(t={}))q.call(t,s)&&S(a,s,t[s]);if(k)for(var s of k(t))C.call(t,s)&&S(a,s,t[s]);return a};import{u as F,r as o,j as i}from"./main-425.js";import"./bi.900.437.js";import{_ as n,d as r}from"./bi.107.0.js";import{S as D}from"./bi.273.13.js";import{S as E}from"./bi.346.924.js";import{I as L,i as T}from"./bi.25.3.js";import M from"./bi.933.246.js";import{h as z,c as N}from"./bi.847.847.js";import{A as B}from"./bi.966.848.js";import"./bi.814.9.js";import"./bi.563.11.js";import"./bi.783.14.js";import"./bi.775.701.js";import"./bi.178.675.js";import"./bi.326.676.js";function se({formFields:a,setFlow:t,flow:s,allIntegURL:u}){const f=F(),[y,g]=o.useState(!1),[b,h]=o.useState({}),[c,x]=o.useState(1),[_,p]=o.useState({show:!1}),A=[{key:"name",label:n("Name","bit-integrations"),required:!0},{key:"due_at",label:n("Due At","bit-integrations"),required:!1},{key:"due_on",label:n("Due On","bit-integrations"),required:!1},{key:"notes",label:n("Notes","bit-integrations"),required:!1}],[e,l]=o.useState({name:"Asana",type:"Asana",api_key:"",field_map:[{formField:"",asanaFormField:""}],actionName:"",taskFields:A,actions:{}}),I=()=>{g(!0),T(s,t,u,e,f,"","",g).then(d=>{var j;d.success?(r.success((j=d.data)==null?void 0:j.msg),f(u)):r.error(d.data||d)})},w=m=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!N(e)){r.error(n("Please map mandatory fields","bit-integrations"));return}if(e.actionName==="task"){if(!e.selectedProject){r.error(n("Please select a project","bit-integrations"));return}if(!e.selectedSections&&e.actionName==="task"){r.error(n("Please select a Section","bit-integrations"));return}}e.field_map.length>0&&x(m)};return i.jsxs("div",{children:[i.jsx(D,{snack:_,setSnackbar:p}),i.jsx("div",{className:"txt-center mt-2",children:i.jsx(E,{step:3,active:c})}),i.jsx(M,{asanaConf:e,setAsanaConf:l,step:c,setStep:x,loading:b,setLoading:h,setSnackbar:p}),i.jsxs("div",{className:"btcd-stp-page",style:v({},c===2&&{width:900,height:"auto",overflow:"visible"}),children:[i.jsx(B,{formFields:a,handleInput:m=>z(m,e,l),asanaConf:e,setAsanaConf:l,loading:b,setLoading:h,setSnackbar:p}),(e==null?void 0:e.actionName)&&i.jsxs("button",{onClick:()=>w(3),disabled:!N(e),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[n("Next","bit-integrations"),"  ",i.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(e==null?void 0:e.actionName)&&i.jsx(L,{step:c,saveConfig:()=>I(),isLoading:y,dataConf:e,setDataConf:l,formFields:a})]})}export{se as default};
