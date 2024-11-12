var $=Object.defineProperty;var k=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var N=(c,i,n)=>i in c?$(c,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):c[i]=n,l=(c,i)=>{for(var n in i||(i={}))E.call(i,n)&&N(c,n,i[n]);if(k)for(var n of k(i))L.call(i,n)&&N(c,n,i[n]);return c};import{r as x,j as t}from"./main-288.js";import{_ as e,c as B,n as u}from"./bi.4.0.js";import{B as D}from"./bi.684.706.js";import{y as S,a8 as F}from"./bi.197.434.js";import{r as G}from"./bi.951.823.js";import{T as _,t as M}from"./bi.255.712.js";import"./bi.627.9.js";function W({formID:c,sendPulseConf:i,setSendPulseConf:n,step:y,setstep:A,setSnackbar:v,isInfo:o,isLoading:d,setIsLoading:p}){const[m,z]=x.useState(!1),[b,j]=x.useState({name:"",client_secret:""}),[w,C]=x.useState(!1),{sendPulse:a}=M,T=()=>{const r=l({},i);if(!r.name||!r.client_secret){j({name:r.name?"":e("Integration name can't be empty","bit-integrations"),client_id:r.client_id?"":e("Access Client Id can't be empty","bit-integrations"),client_secret:r.client_secret?"":e("Access Client Secret Key can't be empty","bit-integrations")});return}p("auth");const h={client_id:r.client_id,client_secret:r.client_secret};B(h,"sendPulse_authorize").then(s=>{if(s&&s.success){const f=l({},i);f.tokenDetails=s.data,n(f),z(!0),u.success(e("Authorized Successfully","bit-integrations"))}else s&&s.data&&s.data.data||!s.success&&typeof s.data=="string"?u.error(`${e("Authorization failed Cause:","bit-integrations")}${s.data.data||s.data}. ${e("please try again","bit-integrations")}`):u.error(e("Authorization failed. please try again","bit-integrations"));C(!0),p(!1)})},g=r=>{const h=l({},i),s=l({},b);s[r.target.name]="",h[r.target.name]=r.target.value,j(s),n(h)},I=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),G(i,n,p,v),A(2)},K=`
            <h4>${e("Get client id and client secret key","bit-integrations")}</h4>
            <ul>
                <li>${e("First go to your SendPulse dashboard.","bit-integrations")}</li>
                <li>${e('Click "Integrations", Then click "API Keys"',"bit-integrations")}</li>
            </ul>`;return t.jsxs("div",{className:"btcd-stp-page",style:{width:y===1&&900,height:y===1&&"auto"},children:[(a==null?void 0:a.youTubeLink)&&t.jsx(_,{title:"SendPulse",youTubeLink:a==null?void 0:a.youTubeLink}),(a==null?void 0:a.docLink)&&t.jsx(_,{title:"SendPulse",docLink:a==null?void 0:a.docLink}),t.jsx("div",{className:"mt-3 wdt-200",children:t.jsx("b",{children:e("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:g,name:"name",value:i.name,type:"text",placeholder:e("Integration Name...","bit-integrations"),disabled:o}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:b.name}),t.jsx("div",{className:"mt-3 wdt-200",children:t.jsx("b",{children:e("Access Client id:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:g,name:"client_id",value:i.client_id,type:"text",placeholder:e("Access client ID...","bit-integrations"),disabled:o}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:b.client_id}),t.jsx("div",{className:"mt-3 wdt-250",children:t.jsx("b",{children:e("Access Client Secret Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:g,name:"client_secret",value:i.client_secret,type:"text",placeholder:e("Access Client Secret Key...","bit-integrations"),disabled:o}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:b.client_secret}),t.jsxs("small",{className:"d-blk mt-3",children:[e("To Get Client Id and Client Secret Key, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://login.sendpulse.com/settings/#api",target:"_blank",rel:"noreferrer",children:e("Send Pulse API Token","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),d==="auth"&&t.jsxs("div",{className:"flx mt-5",children:[t.jsx(S,{size:25,clr:"#022217",className:"mr-2"}),"Checking Client Secret Key!!!"]}),w&&!m&&!d&&t.jsxs("div",{className:"flx mt-5",style:{color:"red"},children:[t.jsx("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),e("Sorry, Client Secret key is invalid","bit-integrations")]}),!o&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{onClick:T,className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:m||d,children:[m?e("Authorized ✔","bit-integrations"):e("Authorize","bit-integrations"),d&&t.jsx(S,{size:20,clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:()=>I(),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!m,children:[e("Next","bit-integrations"),t.jsx(D,{className:"ml-1 rev-icn"})]})]}),t.jsx(F,{note:K})]})}export{W as default};
