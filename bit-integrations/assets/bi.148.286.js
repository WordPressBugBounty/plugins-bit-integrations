var T=Object.defineProperty;var g=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var b=(i,s,t)=>s in i?T(i,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[s]=t,c=(i,s)=>{for(var t in s||(s={}))V.call(s,t)&&b(i,t,s[t]);if(g)for(var t of g(s))E.call(s,t)&&b(i,t,s[t]);return i};import{g as F,u as I,r,j as e}from"./main-119.js";import{_ as u}from"./bi.686.0.js";import{S as _}from"./bi.725.13.js";import{S as $}from"./bi.36.924.js";import{i as M}from"./bi.316.3.js";import{c as z,C as B}from"./bi.583.817.js";import P from"./bi.934.230.js";import{T as f,t as D}from"./bi.606.701.js";import{z as H}from"./bi.276.437.js";import"./bi.301.11.js";import"./bi.900.9.js";import"./bi.744.14.js";function K(){const i=["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];let s=[];for(let t=0;t<36;t++)t===8||t===13||t===18||t===23?s[t]="-":s[t]=i[Math.ceil(Math.random()*i.length-1)];return s.join("")}var R=K,q=F(R);const at=({formFields:i,setFlow:s,flow:t,allIntegURL:x})=>{const h=I(),[l,v]=r.useState(1),[j,y]=r.useState(!1),[o,N]=r.useState({}),[k,C]=r.useState({show:!1}),S=q(),{customAction:n}=D,[a,m]=r.useState({name:"Custom Action",type:"CustomAction",randomFileName:S,defaultValue:`<?php if (!defined('ABSPATH')) {exit;} 
    
  function yourFunctionName($trigger){
    $trigger['yourKey'];
    //write here your custom function
  }  
  yourFunctionName($trigger);`,value:""});r.useEffect(()=>{const d=c({},a);delete d.isValid,m(c({},d))},[a==null?void 0:a.value]);const L=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),v(2)},w=d=>{const p=c({},a);p[d.target.name]=d.target.value,m(p)};return e.jsxs("div",{children:[e.jsx(_,{snack:k,setSnackbar:C}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx($,{step:2,active:l})}),e.jsxs("div",{className:"btcd-stp-page",style:c({},l===1&&{width:"70%",height:"auto",overflow:"visible"}),children:[(n==null?void 0:n.youTubeLink)&&e.jsx(f,{title:"Custom Action",youTubeLink:n==null?void 0:n.youTubeLink}),(n==null?void 0:n.docLink)&&e.jsx(f,{title:"Custom Action",docLink:n==null?void 0:n.docLink}),e.jsxs("div",{className:"d-flx my-3",children:[e.jsx("div",{className:"wdt-200 d-in-b mt-3",children:e.jsx("b",{children:u("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp mt-1",onChange:w,name:"name",value:a.name,type:"text",placeholder:u("Integration Name...","bit-integrations")})]}),e.jsx(P,{customActionConf:a,setCustomActionConf:m,formFields:i}),e.jsxs("button",{onClick:()=>z(a,m,o,N),disabled:!a.value||(o==null?void 0:o.validate),className:"btn f-left btcd-btn-lg purple sh-sm flx mt-5",type:"button",children:[a!=null&&a.isValid?u("Validated ✔","bit-integrations"):u("Validated","bit-integrations"),(o==null?void 0:o.validate)&&e.jsx(H,{size:"20",clr:"#022217",className:"ml-2"})]}),e.jsxs("button",{onClick:()=>L(),disabled:!a.isValid,className:"btn f-right btcd-btn-lg purple sh-sm flx mt-5",type:"button",children:[u("Next","bit-integrations"),"  ",e.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),e.jsx("div",{className:"btcd-stp-page",style:{width:l===2&&"100%",height:l===2&&"auto"},children:e.jsx(B,{step:l,saveConfig:()=>M(t,s,x,a,h,"","",y),isLoading:j})})]})};export{at as default};