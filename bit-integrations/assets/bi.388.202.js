var A=Object.defineProperty;var N=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var k=(n,e,i)=>e in n?A(n,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[e]=i,b=(n,e)=>{for(var i in e||(e={}))S.call(e,i)&&k(n,i,e[i]);if(N)for(var i of N(e))_.call(e,i)&&k(n,i,e[i]);return n};import{r as y,j as t}from"./main-29.js";import{B as f}from"./bi.22.698.js";import{_ as a,L as E,N as G}from"./bi.860.15.js";import{a as P,f as B}from"./bi.480.746.js";import{T as v,t as I}from"./bi.244.714.js";function H({formID:n,groundhoggConf:e,setGroundhoggConf:i,step:d,setstep:T,isLoading:p,setIsLoading:u,setSnackbar:K,redirectLocation:$,isInfo:l}){const[c,z]=y.useState(!1),[o,x]=y.useState({token:"",public_key:"",domainName:""}),{groundhogg:s}=I,L=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),T(2),B(n,e,i,u)},r=m=>{const h=b({},e),j=b({},o);j[m.target.name]="",h[m.target.name]=m.target.value,x(j),i(h)},w=`
            <h4>${a("Get Public Key and Token few step","bit-integrations")}</h4>
            <ul>
                <li>${a("First install Groundhogg.","bit-integrations")}</li>
                <li>${a('Go to <b> "Setting -> Api" </b>.',"bit-integrations")}</li>
            </ul>`;return t.jsxs("div",{className:"btcd-stp-page",style:{width:d===1&&900,height:d===1&&"auto"},children:[(s==null?void 0:s.youTubeLink)&&t.jsx(v,{title:"Groundhogg",youTubeLink:s==null?void 0:s.youTubeLink}),(s==null?void 0:s.docLink)&&t.jsx(v,{title:"Groundhogg",docLink:s==null?void 0:s.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:a("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:r,name:"name",value:e.name,type:"text",placeholder:a("Integration Name...","bit-integrations"),disabled:l}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:a("Your Domain Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:r,name:"domainName",value:e.domainName,type:"text",placeholder:a("Integration Name...","bit-integrations"),disabled:"true"}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:a("Public Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:r,name:"public_key",value:e.public_key,type:"text",placeholder:a("Public Key...","bit-integrations"),disabled:l}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:a("Token:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:r,name:"token",value:e.token,type:"text",placeholder:a("Token...","bit-integrations"),disabled:l}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:o.api_key}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:o.clientSecret}),!l&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{onClick:()=>P(e,i,x,z,u),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:c||p,children:[c?a("Authorized ✔","bit-integrations"):a("Authorize","bit-integrations"),p&&t.jsx(E,{size:20,clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:L,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!c,children:[a("Next","bit-integrations"),t.jsx(f,{className:"ml-1 rev-icn"})]})]}),t.jsx(G,{note:w})]})}export{H as default};