var L=Object.defineProperty;var x=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var j=(a,e,i)=>e in a?L(a,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[e]=i,l=(a,e)=>{for(var i in e||(e={}))z.call(e,i)&&j(a,i,e[i]);if(x)for(var i of x(e))S.call(e,i)&&j(a,i,e[i]);return a};import{r as k,j as t}from"./main-119.js";import{_ as s}from"./bi.686.0.js";import{z as _,a8 as E}from"./bi.276.437.js";import{a as I}from"./bi.504.733.js";import{T,t as $}from"./bi.606.701.js";import"./bi.900.9.js";function V({formID:a,slackConf:e,setSlackConf:i,step:d,setstep:N,isLoading:m,setIsLoading:f,setSnackbar:A,redirectLocation:C,isInfo:r}){const[o,w]=k.useState(!1),[b,p]=k.useState({accessToken:""}),{slack:n}=$,y=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),N(2)},u=c=>{const h=l({},e),g=l({},b);g[c.target.name]="",h[c.target.name]=c.target.value,p(g),i(h)},v=`
            <h4>${s("Get Access Token few step","bit-integrations")}</h4>
            <ul>
                <li>${s("First create app.","bit-integrations")}</li>
                <li>${s("Add an OAuth Scope <b>'channels:read, channels:write, chat:write, files:read, files:write'</b>.","bit-integrations")}</li>
                <li>${s("Generate Access Token clicking <b> 'install to Workspace'</b>.","bit-integrations")}</li>
            </ul>`;return t.jsxs("div",{className:"btcd-stp-page",style:{width:d===1&&900,height:d===1&&"auto"},children:[(n==null?void 0:n.youTubeLink)&&t.jsx(T,{title:"Slack",youTubeLink:n==null?void 0:n.youTubeLink}),(n==null?void 0:n.docLink)&&t.jsx(T,{title:"Slack",docLink:n==null?void 0:n.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:u,name:"name",value:e.name,type:"text",placeholder:s("Integration Name...","bit-integrations"),disabled:r}),t.jsxs("small",{className:"d-blk mt-5",children:[s("To get access Token , Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://api.slack.com/apps?new_app=1/",target:"_blank",rel:"noreferrer",children:s("Slack Console","bit-integrations")})]}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("Access Token:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:u,name:"accessToken",value:e.accessToken,type:"text",placeholder:s("Access Token...","bit-integrations"),disabled:r}),t.jsx("div",{style:{color:"red"},children:b.accessToken}),!r&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{onClick:()=>I(e,i,p,w,f,A),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:o||m,children:[o?s("Authorized ✔","bit-integrations"):s("Authorize","bit-integrations"),m&&t.jsx(_,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:y,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!o,children:[s("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(E,{note:v})]})}export{V as default};
