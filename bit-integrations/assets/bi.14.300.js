var H=Object.defineProperty,M=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var D=(o,e,s)=>e in o?H(o,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[e]=s,y=(o,e)=>{for(var s in e||(e={}))W.call(e,s)&&D(o,s,e[s]);if(_)for(var s of _(e))J.call(e,s)&&D(o,s,e[s]);return o},v=(o,e)=>M(o,V(e));var P=(o,e,s)=>new Promise((b,j)=>{var h=r=>{try{c(s.next(r))}catch(p){j(p)}},m=r=>{try{c(s.throw(r))}catch(p){j(p)}},c=r=>r.done?b(r.value):Promise.resolve(r.value).then(h,m);c((s=s.apply(o,e)).next())});import{r as d,f as K,e as Q,j as t,L as X,u as Y,o as Z}from"./main-212.js";import{a2 as R,z as L}from"./bi.894.440.js";import{B as F}from"./bi.873.731.js";import{e as tt,a as et,_ as n,c as U}from"./bi.717.0.js";import{S as st}from"./bi.954.13.js";import{S as it}from"./bi.787.945.js";import{I as at,s as nt}from"./bi.164.3.js";import{a as ot,t as rt,r as lt,G as ct,h as dt,c as mt}from"./bi.517.715.js";import{T as B,t as ut}from"./bi.600.737.js";import{A as ht}from"./bi.404.716.js";import"./bi.303.9.js";import"./bi.830.11.js";import"./bi.914.14.js";import"./bi.640.717.js";import"./bi.324.718.js";import"./bi.870.692.js";import"./bi.323.693.js";function pt({formID:o,sheetConf:e,setSheetConf:s,step:b,setstep:j,isLoading:h,setIsLoading:m,setSnackbar:c,redirectLocation:r,isEdit:p}){const[N,g]=d.useState(!1),[a,f]=d.useState({clientId:"",clientSecret:""}),S=K(tt),{googleSheet:l}=ut,[x,k]=d.useState([]),[A,q]=Q(et),[I,xt]=d.useState("Custom Authorization"),[C,w]=d.useState(null),T=i=>{ot(e,i,f,m)},E=()=>{m(!0);const i={actionName:e.type};U(null,"auth/get",i,"GET").then(u=>{u.success&&u.data.data.length>0&&k(u.data.data),m(!1)})};d.useEffect(()=>{b===1&&E()},[]),d.useEffect(()=>{if(b===1&&p){const i=x.find(u=>u.id===e.authId);w(i?e.authId:null)}},[x]);const O=i=>P(this,null,function*(){yield rt(i,e,s,I,x,k,m,c),q(void 0),E()});d.useEffect(()=>{!A||Object.keys(A).length===0||O(A)},[A]);const z=i=>{const u=y({},e),G=y({},a);G[i.target.name]="",u[i.target.name]=i.target.value,f(G),s(u)},$=()=>{const i=x.find(u=>u.id===C);s(u=>v(y({},u),{tokenDetails:i?i.tokenDetails:"",authId:i?i.id:""})),setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),j(2),lt(o,v(y({},e),{tokenDetails:i?i.tokenDetails:"",authId:i?i.id:""}),s,m,c)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:b===1&&900,height:b===1&&"auto"},children:[(l==null?void 0:l.youTubeLink)&&t.jsx(B,{title:"Google Sheets",youTubeLink:l==null?void 0:l.youTubeLink}),(l==null?void 0:l.docLink)&&t.jsx(B,{title:"Google Sheets",docLink:l==null?void 0:l.docLink}),I==="Custom Authorization"&&t.jsxs("div",{children:[t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:z,name:"name",value:e.name,type:"text",placeholder:n("Integration Name...","bit-integrations")}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("Homepage URL:","bit-integrations")})}),t.jsx(R,{value:`${window.location.origin}`,className:"field-key-cpy w-6 ml-0",setSnackbar:c}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("Authorized Redirect URIs:","bit-integrations")})}),t.jsx(R,{value:r||`${S.api.base}/redirect`,className:"field-key-cpy w-6 ml-0",setSnackbar:c}),t.jsxs("small",{className:"d-blk mt-5",children:[n("To get Client ID and SECRET , Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://console.developers.google.com/apis/credentials",target:"_blank",rel:"noreferrer",children:n("Google API Console","bit-integrations")})]}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("Client id:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:z,name:"clientId",value:e.clientId,type:"text",placeholder:n("Client id...","bit-integrations")}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:a.clientId}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("Client secret:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:z,name:"clientSecret",value:e.clientSecret,type:"text",placeholder:n("Client secret...","bit-integrations")}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:a.clientSecret}),t.jsxs("button",{onClick:()=>T(I),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:h,children:[N?n("Authorized ✔","bit-integrations"):n("Authorize","bit-integrations"),h&&t.jsx(L,{size:20,clr:"#022217",className:"ml-2"})]}),t.jsx("br",{})]}),h&&I!=="Custom Authorization"&&t.jsx(X,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),x.length>0&&t.jsxs(t.Fragment,{children:[t.jsx("h2",{children:"Choose your connected account"}),t.jsx(ht,{authData:x,setAuthData:k,selectedUserId:C,setSelectedUserId:w,setIsLoading:m,isEdit:p})]}),N&&I==="One Click Authorization"&&t.jsxs("button",{onClick:()=>T(),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:h,children:[N?n("Authorized ✔","bit-integrations"):n("Authorize","bit-integrations"),h&&t.jsx(L,{size:20,clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:()=>$(),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!C||x.length===0,children:[n("Next","bit-integrations"),t.jsx(F,{className:"ml-1 rev-icn"})]})]})}function Dt({formFields:o,setFlow:e,flow:s,allIntegURL:b}){const j=Y(),{formID:h}=Z(),[m,c]=d.useState(!1),[r,p]=d.useState(1),[N,g]=d.useState({show:!1}),[a,f]=d.useState({name:"Google Sheet",type:"Google Sheet",clientId:"",clientSecret:"",spreadsheetId:"",worksheetName:"",field_map:[{formField:"",googleSheetField:""}],header:"ROWS",headerRow:"A1",actions:{}});d.useEffect(()=>{a.oneClickAuthCredentials===void 0&&U(null,"get/credentials",{actionName:"googleSheet"},"Get").then(x=>{f(k=>v(y({},k),{oneClickAuthCredentials:x.data}))})},[]);const S=()=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!mt(a)){g({show:!0,msg:n("Please map fields to continue.","bit-integrations")});return}a.spreadsheetId!==""&&a.worksheetName!==""&&a.field_map.length>0&&p(3)};return t.jsxs("div",{children:[t.jsx(st,{snack:N,setSnackbar:g}),t.jsx("div",{className:"txt-center mt-2",children:t.jsx(it,{step:3,active:r})}),t.jsx(pt,{formID:h,sheetConf:a,setSheetConf:f,step:r,setstep:p,setSnackbar:g,isLoading:m,setIsLoading:c}),t.jsxs("div",{className:"btcd-stp-page",style:{width:r===2&&900,height:r===2&&"auto"},children:[t.jsx(ct,{formID:h,formFields:o,handleInput:l=>dt(l,a,f,h,c,g),sheetConf:a,setSheetConf:f,isLoading:m,setIsLoading:c,setSnackbar:g}),t.jsxs("button",{onClick:()=>S(),disabled:!a.spreadsheetId||!a.worksheetName||a.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[n("Next","bit-integrations"),t.jsx(F,{className:"ml-1 rev-icn"})]})]}),t.jsx(at,{step:r,saveConfig:()=>nt({flow:s,setFlow:e,allIntegURL:b,conf:a,navigate:j,setIsLoading:c,setSnackbar:g}),isLoading:m,dataConf:a,setDataConf:f,formFields:o})]})}export{Dt as default};
