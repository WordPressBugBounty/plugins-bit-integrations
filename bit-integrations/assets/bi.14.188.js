var w=Object.defineProperty;var k=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var f=(r,e,i)=>e in r?w(r,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[e]=i,d=(r,e)=>{for(var i in e||(e={}))E.call(e,i)&&f(r,i,e[i]);if(k)for(var i of k(e))T.call(e,i)&&f(r,i,e[i]);return r};import{r as p,j as t}from"./main-814.js";import{B as P}from"./bi.739.707.js";import{_ as s,c as B}from"./bi.317.0.js";import{z as N}from"./bi.8.440.js";import{r as C}from"./bi.462.729.js";import{T as A,t as K}from"./bi.492.709.js";import"./bi.765.9.js";function J({formID:r,enchargeConf:e,setEnchargeConf:i,step:x,setstep:z,setSnackbar:g,isInfo:u}){const[l,_]=p.useState(!1),[b,y]=p.useState({name:"",api_key:""}),[v,I]=p.useState(!1),[c,h]=p.useState(!1),{encharge:a}=K,L=()=>{const n=d({},e);if(!n.name||!n.api_key){y({name:n.name?"":s("Integration name can't be empty","bit-integrations"),api_key:n.api_key?"":s("API Key can't be empty","bit-integrations")});return}h("auth");const m={api_key:n.api_key};B(m,"encharge_authorize").then(o=>{o!=null&&o.success&&(_(!0),g({show:!0,msg:s("Authorized Successfully","bit-integrations")})),I(!0),h(!1)})},j=n=>{const m=d({},e),o=d({},b);o[n.target.name]="",m[n.target.name]=n.target.value,y(o),i(m)},S=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),z(2),C(e,i,h,g)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:x===1&&900,height:x===1&&"auto"},children:[(a==null?void 0:a.youTubeLink)&&t.jsx(A,{title:"Encharge",youTubeLink:a==null?void 0:a.youTubeLink}),(a==null?void 0:a.docLink)&&t.jsx(A,{title:"Encharge",docLink:a==null?void 0:a.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:j,name:"name",value:e.name,type:"text",placeholder:s("Integration Name...","bit-integrations"),disabled:u}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:b.name}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("API Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:j,name:"api_key",value:e.api_key,type:"text",placeholder:s("API key","bit-integrations"),disabled:u}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:b.api_key}),t.jsxs("small",{className:"d-blk mt-5",children:[s("To get API , Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://app.encharge.io/account/info",target:"_blank",rel:"noreferrer",children:s("Encharge API Console","bit-integrations")})]}),c==="auth"&&t.jsxs("div",{className:"flx mt-5",children:[t.jsx(N,{size:25,clr:"#022217",className:"mr-2"}),s("Checking API Key!!!","bit-integrations")]}),v&&!l&&!c&&t.jsxs("div",{className:"flx mt-5",style:{color:"red"},children:[t.jsx("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),s("Sorry, Api key is invalid","bit-integrations")]}),!u&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{onClick:L,className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:l||c,children:[l?s("Authorized ✔","bit-integrations"):s("Authorize","bit-integrations"),c&&t.jsx(N,{size:20,clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:()=>S(),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!l,children:[s("Next","bit-integrations"),t.jsx(P,{className:"ml-1 rev-icn"})]})]})]})}export{J as default};
