var A=Object.defineProperty;var h=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var v=(a,t,s)=>t in a?A(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,_=(a,t)=>{for(var s in t||(t={}))N.call(t,s)&&v(a,s,t[s]);if(h)for(var s of h(t))O.call(t,s)&&v(a,s,t[s]);return a};import{u as V,r as n,j as o}from"./main-586.js";import"./bi.960.440.js";import{_ as r,d as i}from"./bi.612.0.js";import{S as I}from"./bi.733.13.js";import{S as w}from"./bi.692.945.js";import{I as L,i as D}from"./bi.993.3.js";import{c as k,T as p,P as F}from"./bi.580.941.js";import{V as K}from"./bi.655.940.js";import M from"./bi.944.286.js";import"./bi.175.9.js";import"./bi.980.11.js";import"./bi.520.14.js";import"./bi.546.692.js";import"./bi.203.693.js";import"./bi.453.737.js";function se({formFields:a,setFlow:t,flow:s,allIntegURL:f}){const u=V(),[j,g]=n.useState(!1),[T,x]=n.useState({auth:!1,postTypes:!1,postFields:!1,posts:!1}),[l,P]=n.useState(1),[y,d]=n.useState({show:!1}),[e,m]=n.useState({name:"Voxel",type:"Voxel",field_map:[],selectedTask:"",postTypes:[],selectedPostType:"",selectedPostStatus:"",voxelFields:[],actions:{},posts:[],selectedPost:""}),C=()=>{g(!0),D(s,t,f,e,u,"","",g).then(c=>{var b;c.success?(i.success((b=c.data)==null?void 0:b.msg),u(f)):i.error(c.data||c)})},E=S=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!e.selectedTask){i.error(r("Please select a task!","bit-integrations"));return}if((e.selectedTask===p.NEW_POST||e.selectedTask===p.UPDATE_POST)&&!e.selectedPostType){i.error(r("Please select a post type!","bit-integrations"));return}if(F.includes(e.selectedTask)&&!e.selectedPostStatus){i.error(r("Please select a post status!","bit-integrations"));return}if((e.selectedTask===p.UPDATE_POST||e.selectedTask===p.UPDATE_COLLECTION_POST)&&!e.selectedPost){i.error(r("Please select a post!","bit-integrations"));return}if(!k(e)){i.error(r("Please map mandatory fields!","bit-integrations"));return}e.field_map.length>0&&P(S)};return o.jsxs("div",{children:[o.jsx(I,{snack:y,setSnackbar:d}),o.jsx("div",{className:"txt-center mt-2",children:o.jsx(w,{step:3,active:l})}),o.jsx(M,{voxelConf:e,setVoxelConf:m,step:l,setStep:P,loading:T,setLoading:x,setSnackbar:d}),o.jsxs("div",{className:"btcd-stp-page",style:_({},l===2&&{width:900,height:"auto",overflow:"visible"}),children:[o.jsx(K,{formFields:a,voxelConf:e,setVoxelConf:m,loading:T,setLoading:x,setSnackbar:d}),o.jsxs("button",{onClick:()=>E(3),disabled:!k(e),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[r("Next","bit-integrations"),"  ",o.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),o.jsx(L,{step:l,saveConfig:()=>C(),isLoading:j,dataConf:e,setDataConf:m,formFields:a})]})}export{se as default};
