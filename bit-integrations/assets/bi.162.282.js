var w=Object.defineProperty;var y=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var h=(a,e,i)=>e in a?w(a,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[e]=i,d=(a,e)=>{for(var i in e||(e={}))z.call(e,i)&&h(a,i,e[i]);if(y)for(var i of y(e))T.call(e,i)&&h(a,i,e[i]);return a};import{r as j,j as t}from"./main-247.js";import{B as P}from"./bi.50.710.js";import{_ as n}from"./bi.456.0.js";import{y as _,a8 as H}from"./bi.393.437.js";import{l as L}from"./bi.375.912.js";import{T as k,t as S}from"./bi.30.716.js";import"./bi.712.9.js";function R({formID:a,highLevelConf:e,setHighLevelConf:i,step:u,setstep:A,isInfo:o,loading:r,setLoading:N}){const{highLevel:s}=S,[l,f]=j.useState(!1),[c,p]=j.useState({name:"",api_key:""}),b=m=>{const g=d({},e),x=d({},c);x[m.target.name]="",g[m.target.name]=m.target.value,p(x),i(g)},I=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),A(2)},v=`
            <h4>${n("Get GoHighLevel Api Key","bit-integrations")}</h4>
            <ul>
                <li>${n("First go to your GoHighLevel sub account settings then business profile tab","bit-integrations")}.</li>
                <li>${n("Copy the the API key.","bit-integrations")}</li>
                <li>${n("You can also get the API key from Agency view. Navigate to settings then API keys tab.","bit-integrations")}</li>
            </ul>`;return t.jsxs("div",{className:"btcd-stp-page",style:{width:u===1&&900,height:u===1&&"auto"},children:[(s==null?void 0:s.youTubeLink)&&t.jsx(k,{title:"HighLevel",youTubeLink:s==null?void 0:s.youTubeLink}),(s==null?void 0:s.docLink)&&t.jsx(k,{title:"HighLevel",docLink:s==null?void 0:s.docLink}),t.jsx("div",{className:"mt-3 wdt-200",children:t.jsx("b",{children:n("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:b,name:"name",value:e.name,type:"text",placeholder:n("Integration Name...","bit-integrations"),disabled:o}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:c.name}),t.jsx("div",{className:"mt-3 wdt-250",children:t.jsx("b",{children:n("GoHighLevel Api Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:b,name:"api_key",value:e.api_key,type:"text",placeholder:n("GoHighLevel Api Key...","bit-integrations"),disabled:o}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:c.api_key}),t.jsx("small",{className:"d-blk mt-3",children:n("To get API key, go to Settings > Business Profile and copy the API Key from there.","bit-integrations")}),t.jsx("br",{}),!o&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{onClick:()=>L(e,i,p,f,r,N),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:l||r.auth,children:[l?n("Authorized ✔","bit-integrations"):n("Authorize","bit-integrations"),r.auth&&t.jsx(_,{size:20,clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:()=>I(),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!l,children:[n("Next","bit-integrations"),t.jsx(P,{className:"ml-1 rev-icn"})]})]}),t.jsx(H,{note:v})]})}export{R as default};
