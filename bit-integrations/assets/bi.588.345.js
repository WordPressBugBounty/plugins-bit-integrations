var y=Object.defineProperty;var v=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var j=(e,t,s)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,S=(e,t)=>{for(var s in t||(t={}))N.call(t,s)&&j(e,s,t[s]);if(v)for(var s of v(t))w.call(t,s)&&j(e,s,t[s]);return e};import{u as F,r as i,j as a}from"./main-615.js";import"./bi.991.437.js";import{_,d}from"./bi.394.0.js";import{S as E}from"./bi.700.13.js";import{S as L}from"./bi.440.922.js";import{I as T,g as M}from"./bi.819.3.js";import P from"./bi.83.208.js";import{h as z,c as A}from"./bi.271.765.js";import{V as B}from"./bi.29.766.js";import"./bi.179.9.js";import"./bi.405.11.js";import"./bi.1.14.js";import"./bi.681.699.js";import"./bi.178.673.js";import"./bi.985.674.js";function st({formFields:e,setFlow:t,flow:s,allIntegURL:l}){const u=F(),[V,f]=i.useState(!1),[g,b]=i.useState({list:!1,field:!1,auth:!1}),[n,h]=i.useState(1),[C,p]=i.useState({show:!1}),[o,r]=i.useState({name:"Vbout",type:"Vbout",auth_token:"",field_map:[{formField:"",VboutFormField:""}],VboutFields:[],list_id:"",contact_status:"",actions:{}}),k=()=>{f(!0),M(s,t,l,o,u,"","",f).then(m=>{var x;m.success?(d.success((x=m.data)==null?void 0:x.msg),u(l)):d.error(m.data||m)})},I=c=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!A(o)){d.error(_("Please map mandatory fields","bit-integrations"));return}o.field_map.length>0&&h(c)};return a.jsxs("div",{children:[a.jsx(E,{snack:C,setSnackbar:p}),a.jsx("div",{className:"txt-center mt-2",children:a.jsx(L,{step:3,active:n})}),a.jsx(P,{vboutConf:o,setVboutConf:r,step:n,setstep:h,loading:g,setLoading:b,setSnackbar:p}),a.jsxs("div",{className:"btcd-stp-page",style:S({},n===2&&{width:900,height:"auto",overflow:"visible"}),children:[a.jsx(B,{formFields:e,handleInput:c=>z(c,o,r),vboutConf:o,setVboutConf:r,loading:g,setLoading:b,setSnackbar:p}),a.jsxs("button",{onClick:()=>I(3),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[_("Next","bit-integrations"),"  ",a.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),a.jsx(T,{step:n,saveConfig:()=>k(),isLoading:V,dataConf:o,setDataConf:r,formFields:e})]})}export{st as default};
