var P=Object.defineProperty;var k=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var A=(i,s,n)=>s in i?P(i,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[s]=n,o=(i,s)=>{for(var n in s||(s={}))$.call(s,n)&&A(i,n,s[n]);if(k)for(var n of k(s))K.call(s,n)&&A(i,n,s[n]);return i};import{r as x,j as t}from"./main-212.js";import{_ as e,c as E,n as g}from"./bi.717.0.js";import{B as L}from"./bi.873.731.js";import{z as f,a9 as B}from"./bi.894.440.js";import{r as F}from"./bi.1.885.js";import{T as _,t as D}from"./bi.600.737.js";import"./bi.303.9.js";function Q({campaignMonitorConf:i,setCampaignMonitorConf:s,step:n,setstep:N,setSnackbar:z,isInfo:c,isLoading:d,setIsLoading:p}){const[m,v]=x.useState(!1),[b,y]=x.useState({name:"",api_key:""}),[w,C]=x.useState(!1),{campaignMonitor:a}=D,I=()=>{const r=o({},i);if(!r.name||!r.client_id||!r.api_key){y({name:r.name?"":e("Integration name can't be empty","bit-integrations"),client_id:r.client_id?"":e("Client Id can't be empty","bit-integrations"),api_key:r.api_key?"":e("Access Api Key can't be empty","bit-integrations")});return}p("auth");const h={api_key:r.api_key,client_id:r.client_id};E(h,"campaign_monitor_authorize").then(l=>{if(l&&l.success){const j=o({},i);j.tokenDetails=l.data,s(j),v(!0),g.success(e("Authorized Successfully","bit-integrations"))}else l&&l.data||!l.success&&typeof l.data.Message=="string"?g.error(`${e("Authorization failed Cause:","bit-integrations")}${l.data.Message}. ${e("please try again","bit-integrations")}`):g.error(e("Authorization failed. please try again","bit-integrations"));C(!0),p(!1)})},u=r=>{const h=o({},i),l=o({},b);l[r.target.name]="",h[r.target.name]=r.target.value,y(l),s(h)},S=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),F(i,s,p,z),N(2)},T=`
            <h4>${e("Get Client Id & Api key","bit-integrations")}</h4>
            <ul>
                <li>${e("First go to your CampaignMonitor dashboard.","bit-integrations")}</li>
                <li>${e('Click on Your "Profile Image" at the top right',"bit-integrations")}</li>
                <li>${e('Click on the "Account Settings"',"bit-integrations")}</li>
                <li>${e('Then Click "API keys"',"bit-integrations")}</li>
            </ul>`;return t.jsxs("div",{className:"btcd-stp-page",style:{width:n===1&&900,height:n===1&&"auto"},children:[(a==null?void 0:a.youTubeLink)&&t.jsx(_,{title:"Campaign Monitor",youTubeLink:a==null?void 0:a.youTubeLink}),(a==null?void 0:a.docLink)&&t.jsx(_,{title:"Campaign Monitor",docLink:a==null?void 0:a.docLink}),t.jsx("div",{className:"mt-3 wdt-200",children:t.jsx("b",{children:e("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:u,name:"name",value:i.name,type:"text",placeholder:e("Integration Name...","bit-integrations"),disabled:c}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:b.name}),t.jsx("div",{className:"mt-3 wdt-250",children:t.jsx("b",{children:e("Client id:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:u,name:"client_id",value:i.client_id,type:"text",placeholder:e("client ID...","bit-integrations"),disabled:c}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:b.client_id}),t.jsx("div",{className:"mt-3 wdt-250",children:t.jsx("b",{children:e("Access API Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:u,name:"api_key",value:i.api_key,type:"text",placeholder:e("Access API Key...","bit-integrations"),disabled:c}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:b.api_key}),t.jsxs("small",{className:"d-blk mt-3",children:[e("To Get Client Id & Api Key, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://bitcode2.createsend.com/account/apikeys",target:"_blank",rel:"noreferrer",children:e("Campaign Monitor API Key","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),d==="auth"&&t.jsxs("div",{className:"flx mt-5",children:[t.jsx(f,{size:25,clr:"#022217",className:"mr-2"}),e("Checking API Key!!!","bit-integrations")]}),w&&!m&&!d&&t.jsxs("div",{className:"flx mt-5",style:{color:"red"},children:[t.jsx("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),e("Sorry, Api key is invalid","bit-integrations")]}),!c&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{onClick:I,className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:m||d,children:[m?e("Authorized ✔","bit-integrations"):e("Authorize","bit-integrations"),d&&t.jsx(f,{size:20,clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:()=>S(),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!m,children:[e("Next","bit-integrations"),t.jsx(L,{className:"ml-1 rev-icn"})]})]}),t.jsx(B,{note:T})]})}export{Q as default};
