var z=Object.defineProperty;var g=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var j=(r,e,s)=>e in r?z(r,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[e]=s,p=(r,e)=>{for(var s in e||(e={}))L.call(e,s)&&j(r,s,e[s]);if(g)for(var s of g(e))_.call(e,s)&&j(r,s,e[s]);return r};import{r as k,j as t}from"./main-794.js";import{B as D}from"./bi.944.743.js";import{_ as i}from"./bi.828.0.js";import{z as N,a9 as I}from"./bi.266.440.js";import{d as S}from"./bi.280.889.js";import{T as f,t as E}from"./bi.510.749.js";import"./bi.685.9.js";function R({formID:r,dripConf:e,setDripConf:s,step:u,setstep:y,isInfo:o,loading:a,setLoading:A}){const{drip:n}=E,[l,T]=k.useState(!1),[c,b]=k.useState({name:"",api_token:""}),d=m=>{const h=p({},e),x=p({},c);x[m.target.name]="",h[m.target.name]=m.target.value,b(x),s(h)},w=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),y(2)},v=`
            <h4>${i("Get Drip Api Token","bit-integrations")}</h4>
            <ul>
                <li>${i("First go to your","bit-integrations")} <a href="https://www.getdrip.com/user/edit" target="_blank">${i("Drip user settings","bit-integrations")}</a>.</li>
                <li>${i('Copy the the API Token from "User Info"',"bit-integrations")}</li>
            </ul>`;return t.jsxs("div",{className:"btcd-stp-page",style:{width:u===1&&900,height:u===1&&"auto"},children:[(n==null?void 0:n.youTubeLink)&&t.jsx(f,{title:"Drip",youTubeLink:n==null?void 0:n.youTubeLink}),(n==null?void 0:n.docLink)&&t.jsx(f,{title:"Drip",docLink:n==null?void 0:n.docLink}),t.jsx("div",{className:"mt-3 wdt-200",children:t.jsx("b",{children:i("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"name",value:e.name,type:"text",placeholder:i("Integration Name...","bit-integrations"),disabled:o}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:c.name}),t.jsx("div",{className:"mt-3 wdt-250",children:t.jsx("b",{children:i("Drip Api Token:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"api_token",value:e.api_token,type:"text",placeholder:i("Access Api Token Key...","bit-integrations"),disabled:o}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:c.api_token}),t.jsxs("small",{className:"d-blk mt-3",children:[i("To Get Drip Api Token, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://www.getdrip.com/user/edit",target:"_blank",rel:"noreferrer",children:i("Drip User Settings","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),(a==null?void 0:a.auth)&&t.jsxs("div",{className:"flx mt-5",children:[t.jsx(N,{size:25,clr:"#022217",className:"mr-2"}),"Checking Api Token Key!!!"]}),!o&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{onClick:()=>S(e,s,b,T,a,A),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:l||a.auth,children:[l?i("Authorized ✔","bit-integrations"):i("Authorize","bit-integrations"),a.auth&&t.jsx(N,{size:20,clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:()=>w(),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!l,children:[i("Next","bit-integrations"),t.jsx(D,{className:"ml-1 rev-icn"})]})]}),t.jsx(I,{note:v})]})}export{R as default};
