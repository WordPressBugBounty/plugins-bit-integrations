var v=Object.defineProperty;var x=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var j=(a,e,s)=>e in a?v(a,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[e]=s,l=(a,e)=>{for(var s in e||(e={}))z.call(e,s)&&j(a,s,e[s]);if(x)for(var s of x(e))S.call(e,s)&&j(a,s,e[s]);return a};import{r as k,j as t}from"./main-692.js";import{_ as i,L as _,N as E}from"./bi.751.13.js";import{a as I}from"./bi.194.714.js";import{T,t as $}from"./bi.719.710.js";function O({formID:a,slackConf:e,setSlackConf:s,step:d,setstep:N,isLoading:b,setIsLoading:A,setSnackbar:f,redirectLocation:C,isInfo:r}){const[o,w]=k.useState(!1),[m,p]=k.useState({accessToken:""}),{slack:n}=$,y=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),N(2)},u=c=>{const h=l({},e),g=l({},m);g[c.target.name]="",h[c.target.name]=c.target.value,p(g),s(h)},L=`
            <h4>${i("Get Access Token few step","bit-integrations")}</h4>
            <ul>
                <li>${i("First create app.","bit-integrations")}</li>
                <li>${i("Add an OAuth Scope <b>'channels:read, channels:write, chat:write, files:read, files:write'</b>.","bit-integrations")}</li>
                <li>${i("Generate Access Token clicking <b> 'install to Workspace'</b>.","bit-integrations")}</li>
            </ul>`;return t.jsxs("div",{className:"btcd-stp-page",style:{width:d===1&&900,height:d===1&&"auto"},children:[(n==null?void 0:n.youTubeLink)&&t.jsx(T,{title:"Slack",youTubeLink:n==null?void 0:n.youTubeLink}),(n==null?void 0:n.docLink)&&t.jsx(T,{title:"Slack",docLink:n==null?void 0:n.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:u,name:"name",value:e.name,type:"text",placeholder:i("Integration Name...","bit-integrations"),disabled:r}),t.jsxs("small",{className:"d-blk mt-5",children:[i("To get access Token , Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://api.slack.com/apps?new_app=1/",target:"_blank",rel:"noreferrer",children:i("Slack Console","bit-integrations")})]}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("Access Token:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:u,name:"accessToken",value:e.accessToken,type:"text",placeholder:i("Access Token...","bit-integrations"),disabled:r}),t.jsx("div",{style:{color:"red"},children:m.accessToken}),!r&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{onClick:()=>I(e,s,p,w,A,f),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:o||b,children:[o?i("Authorized ✔","bit-integrations"):i("Authorize","bit-integrations"),b&&t.jsx(_,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:y,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!o,children:[i("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(E,{note:L})]})}export{O as default};
