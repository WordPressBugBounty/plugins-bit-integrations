var I=Object.defineProperty;var f=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var k=(r,e,i)=>e in r?I(r,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[e]=i,p=(r,e)=>{for(var i in e||(e={}))E.call(e,i)&&k(r,i,e[i]);if(f)for(var i of f(e))S.call(e,i)&&k(r,i,e[i]);return r};import{r as b,j as t}from"./main-263.js";import{B as P}from"./bi.638.705.js";import{_ as a,c as B}from"./bi.924.0.js";import{y as N}from"./bi.361.434.js";import{r as F}from"./bi.775.706.js";import{T as z,t as K}from"./bi.372.711.js";import"./bi.402.9.js";function J({formID:r,telegramConf:e,setTelegramConf:i,step:y,setstep:A,setSnackbar:h,isInfo:u}){const[c,j]=b.useState(!1),[l,x]=b.useState({name:"",bot_api_key:"",apiError:""}),[T,v]=b.useState(!1),[d,g]=b.useState(!1),{telegram:s}=K,L=()=>{const n=p({},e);if(!n.name||!n.bot_api_key){x({name:n.name?"":a("Integration name can't be empty","bit-integrations"),bot_api_key:n.bot_api_key?"":a("API Key can't be empty","bit-integrations")});return}g("auth");const m={bot_api_key:n.bot_api_key};B(m,"telegram_authorize").then(o=>{o!=null&&o.success?(j(!0),h({show:!0,msg:a("Authorized Successfully","bit-integrations")})):(j(!1),x({apiError:o==null?void 0:o.data.description}),h({show:!0,msg:a("Authorized Filled","bit-integrations")})),v(!0),g(!1)})},_=n=>{const m=p({},e),o=p({},l);o[n.target.name]="",m[n.target.name]=n.target.value,x(o),i(m)},w=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),F(e,i,g,h),A(2)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:y===1&&900,height:y===1&&"auto"},children:[(s==null?void 0:s.youTubeLink)&&t.jsx(z,{title:"Telegram",youTubeLink:s==null?void 0:s.youTubeLink}),(s==null?void 0:s.docLink)&&t.jsx(z,{title:"Telegram",docLink:s==null?void 0:s.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:a("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:_,name:"name",value:e.name,type:"text",placeholder:a("Integration Name...","bit-integrations"),disabled:u}),t.jsx("div",{style:{color:"red",fontSize:"15px",marginTop:"5px"},children:l.name}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:a("Bot API Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:_,name:"bot_api_key",value:e.bot_api_key,type:"text",placeholder:a("Integration Name...","bit-integrations"),disabled:u}),t.jsx("div",{style:{color:"red",fontSize:"15px",marginTop:"5px"},children:l.bot_api_key}),d==="auth"&&t.jsxs("div",{className:"flx mt-5",children:[t.jsx(N,{size:25,clr:"#022217",className:"mr-2"}),a("Checking API Key!!!","bit-integrations")]}),T&&!c&&!d&&t.jsxs("div",{className:"flx mt-5",style:{color:"red"},children:[t.jsx("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),l.apiError]}),!u&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{onClick:L,className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:c||d,children:[c?a("Authorized ✔","bit-integrations"):a("Authorize","bit-integrations"),d&&t.jsx(N,{size:20,clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:()=>w(),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!c,children:[a("Next","bit-integrations"),t.jsx(P,{className:"ml-1 rev-icn"})]})]})]})}export{J as default};
