var L=Object.defineProperty;var k=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var N=(n,e,i)=>e in n?L(n,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[e]=i,b=(n,e)=>{for(var i in e||(e={}))S.call(e,i)&&N(n,i,e[i]);if(k)for(var i of k(e))f.call(e,i)&&N(n,i,e[i]);return n};import{r as y,j as t}from"./main-212.js";import{B as _}from"./bi.873.731.js";import{_ as a}from"./bi.717.0.js";import{z as E,a9 as G}from"./bi.894.440.js";import{a as P,f as B}from"./bi.529.779.js";import{T as v,t as I}from"./bi.600.737.js";import"./bi.303.9.js";function M({formID:n,groundhoggConf:e,setGroundhoggConf:i,step:d,setstep:T,isLoading:p,setIsLoading:u,setSnackbar:K,redirectLocation:$,isInfo:r}){const[c,z]=y.useState(!1),[o,x]=y.useState({token:"",public_key:"",domainName:""}),{groundhogg:s}=I,w=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),T(2),B(n,e,i,u)},l=m=>{const h=b({},e),j=b({},o);j[m.target.name]="",h[m.target.name]=m.target.value,x(j),i(h)},A=`
            <h4>${a("Get Public Key and Token few step","bit-integrations")}</h4>
            <ul>
                <li>${a("First install Groundhogg.","bit-integrations")}</li>
                <li>${a('Go to <b> "Setting -> Api" </b>.',"bit-integrations")}</li>
            </ul>`;return t.jsxs("div",{className:"btcd-stp-page",style:{width:d===1&&900,height:d===1&&"auto"},children:[(s==null?void 0:s.youTubeLink)&&t.jsx(v,{title:"Groundhogg",youTubeLink:s==null?void 0:s.youTubeLink}),(s==null?void 0:s.docLink)&&t.jsx(v,{title:"Groundhogg",docLink:s==null?void 0:s.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:a("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:l,name:"name",value:e.name,type:"text",placeholder:a("Integration Name...","bit-integrations"),disabled:r}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:a("Your Domain Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:l,name:"domainName",value:e.domainName,type:"text",placeholder:a("Integration Name...","bit-integrations"),disabled:"true"}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:a("Public Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:l,name:"public_key",value:e.public_key,type:"text",placeholder:a("Public Key...","bit-integrations"),disabled:r}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:a("Token:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:l,name:"token",value:e.token,type:"text",placeholder:a("Token...","bit-integrations"),disabled:r}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:o.api_key}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:o.clientSecret}),!r&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{onClick:()=>P(e,i,x,z,u),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:c||p,children:[c?a("Authorized ✔","bit-integrations"):a("Authorize","bit-integrations"),p&&t.jsx(E,{size:20,clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:w,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!c,children:[a("Next","bit-integrations"),t.jsx(_,{className:"ml-1 rev-icn"})]})]}),t.jsx(G,{note:A})]})}export{M as default};
