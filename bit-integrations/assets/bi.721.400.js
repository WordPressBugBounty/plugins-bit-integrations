var k=Object.defineProperty;var v=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var j=(a,e,s)=>e in a?k(a,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[e]=s,F=(a,e)=>{for(var s in e||(e={}))P.call(e,s)&&j(a,s,e[s]);if(v)for(var s of v(e))T.call(e,s)&&j(a,s,e[s]);return a};import{u as C,r as n,j as i}from"./main-955.js";import{_ as r,d as o}from"./bi.223.0.js";import"./bi.326.431.js";import{S as A}from"./bi.951.13.js";import{S as E}from"./bi.496.907.js";import{I as L,g as O}from"./bi.864.3.js";import M from"./bi.994.260.js";import{h as z,c as N}from"./bi.604.864.js";import{F as B}from"./bi.831.865.js";import"./bi.696.9.js";import"./bi.300.11.js";import"./bi.283.14.js";import"./bi.701.706.js";function U({formFields:a,setFlow:e,flow:s,allIntegURL:g}){const f=C(),[b,d]=n.useState(!1),[h,x]=n.useState({}),[c,y]=n.useState(1),[w,u]=n.useState({show:!1}),[t,l]=n.useState({name:"Flowlu",type:"Flowlu",api_key:"",company_name:"",field_map:[{formField:"",flowluFormField:""}],actionName:"",actionId:"",flowluFields:[],actions:{}}),_=()=>{d(!0),O(s,e,g,t,f,"","",d).then(m=>{var S;m.success?(o.success((S=m.data)==null?void 0:S.msg),f(g)):o.error(m.data||m)})},I=p=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!N(t)){o.error(r("Please map mandatory fields","bit-integrations"));return}if(t.actionName==="account"&&!t.selectedAccountType){o.error(r("Please select an Account Type","bit-integrations"));return}if(t.actionName==="opportunity"){if(!t.selectedPipeline){o.error(r("Please select a Opportunity Pipeline","bit-integrations"));return}if(!t.selectedOpportunityStage){o.error(r("Please select a Opportunity Stage","bit-integrations"));return}}t.field_map.length>0&&y(p)};return i.jsxs("div",{children:[i.jsx(A,{snack:w,setSnackbar:u}),i.jsx("div",{className:"txt-center mt-2",children:i.jsx(E,{step:3,active:c})}),i.jsx(M,{flowluConf:t,setFlowluConf:l,step:c,setStep:y,loading:h,setLoading:x,setSnackbar:u}),i.jsxs("div",{className:"btcd-stp-page",style:F({},c===2&&{width:900,height:"auto",overflow:"visible"}),children:[i.jsx(B,{formFields:a,handleInput:p=>z(p,t,l),flowluConf:t,setFlowluConf:l,loading:h,setLoading:x,isLoading:b,setIsLoading:d,setSnackbar:u}),(t==null?void 0:t.actionName)&&i.jsxs("button",{onClick:()=>I(3),disabled:!N(t),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[r("Next","bit-integrations"),"  ",i.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(t==null?void 0:t.actionName)&&i.jsx(L,{step:c,saveConfig:()=>_(),isLoading:b,dataConf:t,setDataConf:l,formFields:a})]})}export{U as default};
