var w=Object.defineProperty;var k=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var f=(r,e,i)=>e in r?w(r,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[e]=i,d=(r,e)=>{for(var i in e||(e={}))T.call(e,i)&&f(r,i,e[i]);if(k)for(var i of k(e))P.call(e,i)&&f(r,i,e[i]);return r};import{r as p,j as t}from"./main-425.js";import{B as E}from"./bi.810.699.js";import{_ as s,c as K}from"./bi.107.0.js";import{z as N}from"./bi.900.437.js";import{a as C}from"./bi.447.709.js";import{T as v,t as F}from"./bi.775.701.js";import"./bi.814.9.js";function O({formID:r,sendinBlueConf:e,setSendinBlueConf:i,step:g,setstep:A,setSnackbar:x,isInfo:b}){const[c,z]=p.useState(!1),[h,y]=p.useState({name:"",api_key:""}),[_,S]=p.useState(!1),[l,u]=p.useState(!1),{sendinBlue:a}=F,I=()=>{const n=d({},e);if(!n.name||!n.api_key){y({name:n.name?"":s("Integration name can't be empty","bit-integrations"),api_key:n.api_key?"":s("API Key can't be empty","bit-integrations")});return}u("auth");const m={api_key:n.api_key};K(m,"sblue_authorize").then(o=>{o!=null&&o.success&&(z(!0),x({show:!0,msg:s("Authorized Successfully","bit-integrations")})),S(!0),u(!1)})},j=n=>{const m=d({},e),o=d({},h);o[n.target.name]="",m[n.target.name]=n.target.value,y(o),i(m)},L=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),A(2),C(e,i,u,x)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:g===1&&900,height:g===1&&"auto"},children:[(a==null?void 0:a.youTubeLink)&&t.jsx(v,{title:"Brevo (Sendinblue)",youTubeLink:a==null?void 0:a.youTubeLink}),(a==null?void 0:a.docLink)&&t.jsx(v,{title:"Brevo (Sendinblue)",docLink:a==null?void 0:a.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:j,name:"name",value:e.name,type:"text",placeholder:s("Integration Name...","bit-integrations"),disabled:b}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:h.name}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("API Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:j,name:"api_key",value:e.api_key,type:"text",placeholder:s("API Key...","bit-integrations"),disabled:b}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:h.api_key}),t.jsxs("small",{className:"d-blk mt-5",children:[s("To get API , Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://account.sendinblue.com/advanced/api",target:"_blank",rel:"noreferrer",children:s("Brevo(Sendinblue) API Console","bit-integrations")})]}),l==="auth"&&t.jsxs("div",{className:"flx mt-5",children:[t.jsx(N,{size:25,clr:"#022217",className:"mr-2"}),s("Checking API Key!!!","bit-integrations")]}),_&&!c&&!l&&t.jsxs("div",{className:"flx mt-5",style:{color:"red"},children:[t.jsx("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),s("Sorry, Api key is invalid","bit-integrations")]}),!b&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{onClick:I,className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:c||l,children:[c?s("Authorized ✔","bit-integrations"):s("Authorize","bit-integrations"),l&&t.jsx(N,{size:20,clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:()=>L(),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!c,children:[s("Next","bit-integrations"),t.jsx(E,{className:"ml-1 rev-icn"})]})]})]})}export{O as default};
