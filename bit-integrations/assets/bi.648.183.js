var L=Object.defineProperty;var A=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var k=(a,e,i)=>e in a?L(a,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[e]=i,h=(a,e)=>{for(var i in e||(e={}))P.call(e,i)&&k(a,i,e[i]);if(A)for(var i of A(e))E.call(e,i)&&k(a,i,e[i]);return a};import{r as y,j as t}from"./main-404.js";import{B as K}from"./bi.250.698.js";import{_ as s,c as R}from"./bi.51.0.js";import{z as _,a8 as B}from"./bi.613.437.js";import{c as F,a as U}from"./bi.658.711.js";import{T as N,t as $}from"./bi.116.700.js";import"./bi.964.9.js";function V({formID:a,activeCampaingConf:e,setActiveCampaingConf:i,step:g,setstep:f,setSnackbar:b,isInfo:o,isLoading:c,setIsLoading:d}){const{activeCampaign:r}=$,[m,z]=y.useState(!1),[p,j]=y.useState({name:"",api_key:""}),[w,S]=y.useState(!1),T=()=>{const n=h({},e);if(!n.name||!n.api_key||!n.api_url){j({name:n.name?"":s("Integration name can't be empty","bit-integrations"),api_key:n.api_key?"":s("Access Api Key can't be empty","bit-integrations"),api_url:n.api_url?"":s("Access API URL can't be empty","bit-integrations")});return}d("auth");const u={api_key:n.api_key,api_url:n.api_url};R(u,"aCampaign_authorize").then(l=>{l!=null&&l.success&&(z(!0),b({show:!0,msg:s("Authorized Successfully","bit-integrations")})),S(!0),d(!1)})},x=n=>{const u=h({},e),l=h({},p);l[n.target.name]="",u[n.target.name]=n.target.value,j(l),i(u)},v=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),F(e,i,d,b),U(e,i,d,b),f(2)},I=`
            <h4>${s("Get api url and api key","bit-integrations")}</h4>
            <ul>
                <li>${s("First go to activeCampaign your dashboard.","bit-integrations")}</li>
                <li>${s("Click Settings, Then click Developer","bit-integrations")}"</li>
            </ul>`;return t.jsxs("div",{className:"btcd-stp-page",style:{width:g===1&&900,height:g===1&&"auto"},children:[(r==null?void 0:r.youTubeLink)&&t.jsx(N,{title:"ActiveCampaign",youTubeLink:r==null?void 0:r.youTubeLink}),(r==null?void 0:r.docLink)&&t.jsx(N,{title:"ActiveCampaign",docLink:r==null?void 0:r.docLink}),t.jsx("div",{className:"mt-3 wdt-200",children:t.jsx("b",{children:s("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:x,name:"name",value:e.name,type:"text",placeholder:s("Integration Name...","bit-integrations"),disabled:o}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:p.name}),t.jsx("div",{className:"mt-3 wdt-200",children:t.jsx("b",{children:s("Access API URL:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:x,name:"api_url",value:e.api_url,type:"text",placeholder:s("Access API URL...","bit-integrations"),disabled:o}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:p.api_url}),t.jsx("div",{className:"mt-3 wdt-200",children:t.jsx("b",{children:s("Access API Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:x,name:"api_key",value:e.api_key,type:"text",placeholder:s("Access API Key...","bit-integrations"),disabled:o}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:p.api_key}),c==="auth"&&t.jsxs("div",{className:"flx mt-5",children:[t.jsx(_,{size:25,clr:"#022217",className:"mr-2"}),s("Checking API Key!!!","bit-integrations")]}),w&&!m&&!c&&t.jsxs("div",{className:"flx mt-5",style:{color:"red"},children:[t.jsx("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),s("Sorry, Api key is invalid","bit-integrations")]}),!o&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{onClick:T,className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:m||c,children:[m?s("Authorized ✔","bit-integrations"):s("Authorize","bit-integrations"),c&&t.jsx(_,{size:20,clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:()=>v(),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!m,children:[s("Next","bit-integrations"),t.jsx(K,{className:"ml-1 rev-icn"})]})]}),t.jsx(B,{note:I})]})}export{V as default};
