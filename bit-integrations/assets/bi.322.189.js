var I=Object.defineProperty;var y=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var j=(e,s,n)=>s in e?I(e,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[s]=n,m=(e,s)=>{for(var n in s||(s={}))S.call(s,n)&&j(e,n,s[n]);if(y)for(var n of y(s))w.call(s,n)&&j(e,n,s[n]);return e};import{r as p,j as t}from"./main-119.js";import{B as T}from"./bi.13.699.js";import{_ as i,c as P}from"./bi.686.0.js";import{z as k}from"./bi.276.437.js";import{a as B}from"./bi.233.734.js";import{T as N,t as K}from"./bi.606.701.js";import"./bi.900.9.js";function J({elasticEmailConf:e,setElasticEmailConf:s,step:n,setstep:f,isInfo:h}){const[c,A]=p.useState(!1),[b,g]=p.useState({name:"",api_key:""}),[_,z]=p.useState(!1),[l,u]=p.useState(!1),{elasticEmail:a}=K,v=()=>{const r=m({},e);if(!r.name||!r.api_key){g({name:r.name?"":i("Integration name can't be empty","bit-integrations"),api_key:r.api_key?"":i("API Key can't be empty","bit-integrations")});return}u("auth");const d={api_key:r.api_key};P(d,"elasticemail_authorize").then(o=>{o!=null&&o.success&&A(!0),z(!0),u(!1)})},x=r=>{const d=m({},e),o=m({},b);o[r.target.name]="",d[r.target.name]=r.target.value,g(o),s(d)},L=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!(e!=null&&e.default)&&B(e,s,u),f(2)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:n===1&&900,height:n===1&&"auto"},children:[(a==null?void 0:a.youTubeLink)&&t.jsx(N,{title:"Elastic Email",youTubeLink:a==null?void 0:a.youTubeLink}),(a==null?void 0:a.docLink)&&t.jsx(N,{title:"Elastic Email",docLink:a==null?void 0:a.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:x,name:"name",value:e.name,type:"text",placeholder:i("Integration Name...","bit-integrations"),disabled:h}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:b.name}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("API Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:x,name:"api_key",value:e.api_key,type:"text",placeholder:i("Integration Name...","bit-integrations"),disabled:h}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:b.api_key}),t.jsxs("small",{className:"d-blk mt-5",children:[i("To get API , Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://elasticemail.com/account#/settings/new/manage-api",target:"_blank",rel:"noreferrer",children:i("Elastic Email API Console","bit-integrations")})]}),l==="auth"&&t.jsxs("div",{className:"flx mt-5",children:[t.jsx(k,{size:25,clr:"#022217",className:"mr-2"}),i("Checking API Key!!!","bit-integrations")]}),_&&!c&&!l&&t.jsxs("div",{className:"flx mt-5",style:{color:"red"},children:[t.jsx("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),i("Sorry, Api key is invalid","bit-integrations")]}),!h&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{onClick:v,className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:c||l,children:[c?i("Authorized ✔","bit-integrations"):i("Authorize","bit-integrations"),l&&t.jsx(k,{size:20,clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:()=>L(),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!c,children:[i("Next","bit-integrations"),t.jsx(T,{className:"ml-1 rev-icn"})]})]})]})}export{J as default};