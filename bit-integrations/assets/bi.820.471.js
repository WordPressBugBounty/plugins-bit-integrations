var w=Object.defineProperty;var j=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var C=(a,t,s)=>t in a?w(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,N=(a,t)=>{for(var s in t||(t={}))y.call(t,s)&&C(a,s,t[s]);if(j)for(var s of j(t))M.call(t,s)&&C(a,s,t[s]);return a};import{u as F,r as o,j as i}from"./main-165.js";import{d as R,_ as r,I as E,F as L,c as n}from"./bi.312.95.js";import{S as T}from"./bi.354.971.js";import O from"./bi.956.334.js";import{h as z,c as I}from"./bi.63.924.js";import{S as A}from"./bi.749.925.js";import"./bi.40.785.js";function V({formFields:a,setFlow:t,flow:s,allIntegURL:g}){const f=F(),[b,p]=o.useState(!1),[S,h]=o.useState({}),[c,x]=o.useState(1),[_,u]=o.useState({show:!1}),[e,l]=o.useState({name:"Salesmate",type:"Salesmate",session_token:"",link_name:"",field_map:[{formField:"",salesmateFormField:""}],actionName:"",actionId:"",salesmateFields:[],actions:{}}),k=()=>{p(!0),L(s,t,g,e,f,"","",p).then(m=>{var v;m.success?(n.success((v=m.data)==null?void 0:v.msg),f(g)):n.error(m.data||m)})},P=d=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!I(e)){n.error(r("Please map mandatory fields","bit-integrations"));return}if(!e.selectedCRMOwner){n.error(r("Please select a Owner","bit-integrations"));return}if(Number(e.actionId)===4){if(!e.selectedCRMContact){n.error(r("Please select a Contact","bit-integrations"));return}if(!e.selectedCRMPipeline){n.error(r("Please select a Pipeline","bit-integrations"));return}if(!e.selectedCRMStage){n.error(r("Please select a Stage","bit-integrations"));return}}e.field_map.length>0&&x(d)};return i.jsxs("div",{children:[i.jsx(R,{snack:_,setSnackbar:u}),i.jsx("div",{className:"txt-center mt-2",children:i.jsx(T,{step:3,active:c})}),i.jsx(O,{salesmateConf:e,setSalesmateConf:l,step:c,setStep:x,loading:S,setLoading:h,setSnackbar:u}),i.jsxs("div",{className:"btcd-stp-page",style:N({},c===2&&{width:900,height:"auto",overflow:"visible"}),children:[i.jsx(A,{formFields:a,handleInput:d=>z(d,e,l),salesmateConf:e,setSalesmateConf:l,loading:S,setLoading:h,isLoading:b,setIsLoading:p,setSnackbar:u}),(e==null?void 0:e.actionName)&&i.jsxs("button",{onClick:()=>P(3),disabled:!I(e),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[r("Next","bit-integrations"),"  ",i.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(e==null?void 0:e.actionName)&&i.jsx(E,{step:c,saveConfig:()=>k(),isLoading:b,dataConf:e,setDataConf:l,formFields:a})]})}export{V as default};
