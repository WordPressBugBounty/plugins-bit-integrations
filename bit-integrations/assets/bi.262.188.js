var L=Object.defineProperty;var g=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var j=(i,a,t)=>a in i?L(i,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[a]=t,d=(i,a)=>{for(var t in a||(a={}))S.call(a,t)&&j(i,t,a[t]);if(g)for(var t of g(a))T.call(a,t)&&j(i,t,a[t]);return i};import{r as p,j as e}from"./main-247.js";import{B as w}from"./bi.50.710.js";import{_ as s,c as P}from"./bi.456.0.js";import{y as k}from"./bi.393.437.js";import{T as f,t as G}from"./bi.30.716.js";import"./bi.712.9.js";function V({getgistConf:i,setGetgistConf:a,step:t,setstep:N,isInfo:h}){const[l,A]=p.useState(!1),[b,u]=p.useState({name:"",api_key:""}),[_,z]=p.useState(!1),[c,x]=p.useState(!1),{getgist:n}=G,v=()=>{const r=d({},i);if(!r.name||!r.api_key){u({name:r.name?"":s("Integration name can't be empty","bit-integrations"),api_key:r.api_key?"":s("API Key can't be empty","bit-integrations")});return}x("auth");const m={api_key:r.api_key};P(m,"getgist_authorize").then(o=>{o!=null&&o.success&&A(!0),z(!0),x(!1)})},y=r=>{const m=d({},i),o=d({},b);o[r.target.name]="",m[r.target.name]=r.target.value,u(o),a(m)},I=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),N(2)};return e.jsxs("div",{className:"btcd-stp-page",style:{width:t===1&&900,height:t===1&&"auto"},children:[(n==null?void 0:n.youTubeLink)&&e.jsx(f,{title:"GetGist",youTubeLink:n==null?void 0:n.youTubeLink}),(n==null?void 0:n.docLink)&&e.jsx(f,{title:"GetGist",docLink:n==null?void 0:n.docLink}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:s("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:y,name:"name",value:i.name,type:"text",placeholder:s("Integration Name...","bit-integrations"),disabled:h}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:b.name}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:s("API Key:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:y,name:"api_key",value:i.api_key,type:"text",placeholder:s("Integration Name...","bit-integrations"),disabled:h}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:b.api_key}),e.jsxs("small",{className:"d-blk mt-5",children:[s("To get API , Please Visit","bit-integrations")," ",e.jsx("a",{className:"btcd-link",href:"https://app.getgist.com/projects/jgmmrszy/settings/api-key",target:"_blank",rel:"noreferrer",children:s("Getgist API Console","bit-integrations")})]}),c==="auth"&&e.jsxs("div",{className:"flx mt-5",children:[e.jsx(k,{size:25,clr:"#022217",className:"mr-2"}),s("Checking API Key!!!","bit-integrations")]}),_&&!l&&!c&&e.jsxs("div",{className:"flx mt-5",style:{color:"red"},children:[e.jsx("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),s("Sorry, Api key is invalid","bit-integrations")]}),!h&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:v,className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:l||c,children:[l?s("Authorized ✔","bit-integrations"):s("Authorize","bit-integrations"),c&&e.jsx(k,{size:20,clr:"#022217",className:"ml-2"})]}),e.jsx("br",{}),e.jsxs("button",{onClick:()=>I(),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!l,children:[s("Next","bit-integrations"),e.jsx(w,{className:"ml-1 rev-icn"})]})]})]})}export{V as default};
