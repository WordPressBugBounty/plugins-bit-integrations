var T=Object.defineProperty;var A=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var f=(n,e,i)=>e in n?T(n,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[e]=i,d=(n,e)=>{for(var i in e||(e={}))B.call(e,i)&&f(n,i,e[i]);if(A)for(var i of A(e))E.call(e,i)&&f(n,i,e[i]);return n};import{r as b,j as t}from"./main-794.js";import{B as K}from"./bi.944.743.js";import{_ as s,c as L}from"./bi.828.0.js";import{z as N,a9 as C}from"./bi.266.440.js";import{r as F}from"./bi.370.857.js";import{T as k,t as $}from"./bi.510.749.js";import"./bi.685.9.js";function Q({formID:n,benchMarkConf:e,setBenchMarkConf:i,step:x,setstep:I,setSnackbar:g,isInfo:u,isLoading:o,setIsLoading:p}){const{benchMark:r}=$,[l,S]=b.useState(!1),[h,j]=b.useState({name:"",api_secret:""}),[z,_]=b.useState(!1),v=()=>{const a=d({},e);if(!a.name||!a.api_secret){j({name:a.name?"":s("Integration name can't be empty","bit-integrations"),api_secret:a.api_secret?"":s("Access API Secret Key can't be empty","bit-integrations")});return}p("auth");const m={api_secret:a.api_secret};L(m,"benchMark_authorize").then(c=>{c!=null&&c.success&&(S(!0),g({show:!0,msg:s("Authorized Successfully","bit-integrations")})),_(!0),p(!1)})},y=a=>{const m=d({},e),c=d({},h);c[a.target.name]="",m[a.target.name]=a.target.value,j(c),i(m)},w=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),F(e,i,p,g),I(2)},P=`
            <h4>${s("Get api secret key","bit-integrations")}</h4>
            <ul>
                <li>${s("First go to your BenchMark dashboard.","bit-integrations")}</li>
                <li>${s('Click "Integrations", Then click "API Key"',"bit-integrations")}</li>
            </ul>`;return t.jsxs("div",{className:"btcd-stp-page",style:{width:x===1&&900,height:x===1&&"auto"},children:[(r==null?void 0:r.youTubeLink)&&t.jsx(k,{title:"Benchmark Email",youTubeLink:r==null?void 0:r.youTubeLink}),(r==null?void 0:r.docLink)&&t.jsx(k,{title:"Benchmark Email",docLink:r==null?void 0:r.docLink}),t.jsx("div",{className:"mt-3 wdt-200",children:t.jsx("b",{children:s("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:y,name:"name",value:e.name,type:"text",placeholder:s("Integration Name...","bit-integrations"),disabled:u}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:h.name}),t.jsx("div",{className:"mt-3 wdt-200",children:t.jsx("b",{children:s("Access API Secret Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:y,name:"api_secret",value:e.api_secret,type:"text",placeholder:s("Access API Secret Key...","bit-integrations"),disabled:u}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:h.api_secret}),t.jsxs("small",{className:"d-blk mt-3",children:[s("To Get API Secret Key, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://ui.benchmarkemail.com/Integrate#API",target:"_blank",rel:"noreferrer",children:s("BenchMark API Token","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),o==="auth"&&t.jsxs("div",{className:"flx mt-5",children:[t.jsx(N,{size:25,clr:"#022217",className:"mr-2"}),"Checking API Secret Key!!!"]}),z&&!l&&!o&&t.jsxs("div",{className:"flx mt-5",style:{color:"red"},children:[t.jsx("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),s("Sorry, API Secret key is invalid","bit-integrations")]}),!u&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{onClick:v,className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:l||o,children:[l?s("Authorized ✔","bit-integrations"):s("Authorize","bit-integrations"),o&&t.jsx(N,{size:20,clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:()=>w(),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!l,children:[s("Next","bit-integrations"),t.jsx(K,{className:"ml-1 rev-icn"})]})]}),t.jsx(C,{note:P})]})}export{Q as default};
