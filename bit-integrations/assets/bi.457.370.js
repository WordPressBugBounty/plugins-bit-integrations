var F=Object.defineProperty;var k=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var v=(a,t,s)=>t in a?F(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,N=(a,t)=>{for(var s in t||(t={}))P.call(t,s)&&v(a,s,t[s]);if(k)for(var s of k(t))q.call(t,s)&&v(a,s,t[s]);return a};import{u as C,r as o,j as i}from"./main-80.js";import{_ as n,d as D,I as E,F as L,c as r}from"./bi.433.0.js";import{S as T}from"./bi.293.894.js";import M from"./bi.754.230.js";import{h as z,c as S}from"./bi.740.821.js";import{A as B}from"./bi.959.822.js";import"./bi.717.703.js";function W({formFields:a,setFlow:t,flow:s,allIntegURL:p}){const g=C(),[y,f]=o.useState(!1),[b,h]=o.useState({}),[c,x]=o.useState(1),[_,u]=o.useState({show:!1}),A=[{key:"name",label:n("Name","bit-integrations"),required:!0},{key:"due_at",label:n("Due At","bit-integrations"),required:!1},{key:"due_on",label:n("Due On","bit-integrations"),required:!1},{key:"notes",label:n("Notes","bit-integrations"),required:!1}],[e,l]=o.useState({name:"Asana",type:"Asana",api_key:"",field_map:[{formField:"",asanaFormField:""}],actionName:"",taskFields:A,actions:{}}),I=()=>{f(!0),L(s,t,p,e,g,"","",f).then(m=>{var j;m.success?(r.success((j=m.data)==null?void 0:j.msg),g(p)):r.error(m.data||m)})},w=d=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!S(e)){r.error(n("Please map mandatory fields","bit-integrations"));return}if(e.actionName==="task"){if(!e.selectedProject){r.error(n("Please select a project","bit-integrations"));return}if(!e.selectedSections&&e.actionName==="task"){r.error(n("Please select a Section","bit-integrations"));return}}e.field_map.length>0&&x(d)};return i.jsxs("div",{children:[i.jsx(D,{snack:_,setSnackbar:u}),i.jsx("div",{className:"txt-center mt-2",children:i.jsx(T,{step:3,active:c})}),i.jsx(M,{asanaConf:e,setAsanaConf:l,step:c,setStep:x,loading:b,setLoading:h,setSnackbar:u}),i.jsxs("div",{className:"btcd-stp-page",style:N({},c===2&&{width:900,height:"auto",overflow:"visible"}),children:[i.jsx(B,{formFields:a,handleInput:d=>z(d,e,l),asanaConf:e,setAsanaConf:l,loading:b,setLoading:h,setSnackbar:u}),(e==null?void 0:e.actionName)&&i.jsxs("button",{onClick:()=>w(3),disabled:!S(e),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[n("Next","bit-integrations"),"  ",i.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(e==null?void 0:e.actionName)&&i.jsx(E,{step:c,saveConfig:()=>I(),isLoading:y,dataConf:e,setDataConf:l,formFields:a})]})}export{W as default};
