var k=Object.defineProperty;var S=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var j=(a,e,s)=>e in a?k(a,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[e]=s,F=(a,e)=>{for(var s in e||(e={}))P.call(e,s)&&j(a,s,e[s]);if(S)for(var s of S(e))T.call(e,s)&&j(a,s,e[s]);return a};import{u as C,r as o,j as i}from"./main-692.js";import{d as A,_ as r,I as E,F as L,c as n}from"./bi.751.13.js";import{S as O}from"./bi.579.899.js";import M from"./bi.909.258.js";import{h as z,c as N}from"./bi.922.859.js";import{F as B}from"./bi.245.860.js";import"./bi.719.710.js";function V({formFields:a,setFlow:e,flow:s,allIntegURL:g}){const f=C(),[b,u]=o.useState(!1),[h,x]=o.useState({}),[c,y]=o.useState(1),[w,m]=o.useState({show:!1}),[t,l]=o.useState({name:"Flowlu",type:"Flowlu",api_key:"",company_name:"",field_map:[{formField:"",flowluFormField:""}],actionName:"",actionId:"",flowluFields:[],actions:{}}),_=()=>{u(!0),L(s,e,g,t,f,"","",u).then(d=>{var v;d.success?(n.success((v=d.data)==null?void 0:v.msg),f(g)):n.error(d.data||d)})},I=p=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!N(t)){n.error(r("Please map mandatory fields","bit-integrations"));return}if(t.actionName==="account"&&!t.selectedAccountType){n.error(r("Please select an Account Type","bit-integrations"));return}if(t.actionName==="opportunity"){if(!t.selectedPipeline){n.error(r("Please select a Opportunity Pipeline","bit-integrations"));return}if(!t.selectedOpportunityStage){n.error(r("Please select a Opportunity Stage","bit-integrations"));return}}t.field_map.length>0&&y(p)};return i.jsxs("div",{children:[i.jsx(A,{snack:w,setSnackbar:m}),i.jsx("div",{className:"txt-center mt-2",children:i.jsx(O,{step:3,active:c})}),i.jsx(M,{flowluConf:t,setFlowluConf:l,step:c,setStep:y,loading:h,setLoading:x,setSnackbar:m}),i.jsxs("div",{className:"btcd-stp-page",style:F({},c===2&&{width:900,height:"auto",overflow:"visible"}),children:[i.jsx(B,{formFields:a,handleInput:p=>z(p,t,l),flowluConf:t,setFlowluConf:l,loading:h,setLoading:x,isLoading:b,setIsLoading:u,setSnackbar:m}),(t==null?void 0:t.actionName)&&i.jsxs("button",{onClick:()=>I(3),disabled:!N(t),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[r("Next","bit-integrations"),"  ",i.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(t==null?void 0:t.actionName)&&i.jsx(E,{step:c,saveConfig:()=>_(),isLoading:b,dataConf:t,setDataConf:l,formFields:a})]})}export{V as default};
