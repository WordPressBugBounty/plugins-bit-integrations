var I=Object.defineProperty;var y=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var S=(s,e,t)=>e in s?I(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,v=(s,e)=>{for(var t in e||(e={}))N.call(e,t)&&S(s,t,e[t]);if(y)for(var t of y(e))w.call(e,t)&&S(s,t,e[t]);return s};import{u as E,r as l,j as a}from"./main-80.js";import{_ as p,d as F,I as T,F as q,c as f}from"./bi.433.0.js";import{S as L}from"./bi.293.894.js";import M from"./bi.321.181.js";import{S as P,h as z,c as A}from"./bi.475.720.js";import"./bi.29.687.js";import"./bi.717.703.js";import"./bi.895.650.js";import"./bi.194.651.js";function W({formFields:s,setFlow:e,flow:t,allIntegURL:g}){const b=E(),[m,i]=l.useState(!1),[o,h]=l.useState(1),[j,u]=l.useState({show:!1}),k=[{key:"email",label:p("Email","bit-integrations"),required:!0},{key:"name",label:p("Name","bit-integrations"),required:!1}],[n,r]=l.useState({name:"Sendy",type:"Sendy",api_key:"",sendy_url:"",field_map:[{formField:"",sendyField:""}],subscriberFields:k,actions:{}}),_=()=>{i(!0),q(t,e,g,n,b,"","",i).then(d=>{var x;d.success?(f.success((x=d.data)==null?void 0:x.msg),b(g)):f.error(d.data||d)})},C=c=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!A(n)){f.error(p("Please map mandatory fields","bit-integrations"));return}n.field_map.length>0&&h(c)};return a.jsxs("div",{children:[a.jsx(F,{snack:j,setSnackbar:u}),a.jsx("div",{className:"txt-center mt-2",children:a.jsx(L,{step:3,active:o})}),a.jsx(M,{sendyConf:n,setSendyConf:r,step:o,setstep:h,isLoading:m,setIsLoading:i,setSnackbar:u}),a.jsxs("div",{className:"btcd-stp-page",style:v({},o===2&&{width:900,height:"auto",overflow:"visible"}),children:[a.jsx(P,{formFields:s,handleInput:c=>z(c,n,r),sendyConf:n,setSendyConf:r,isLoading:m,setIsLoading:i,setSnackbar:u}),a.jsxs("button",{onClick:()=>C(3),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[p("Next","bit-integrations"),"  ",a.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),a.jsx(T,{step:o,saveConfig:()=>_(),isLoading:m,dataConf:n,setDataConf:r,formFields:s})]})}export{W as default};
