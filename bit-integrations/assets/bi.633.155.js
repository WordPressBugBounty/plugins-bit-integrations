var I=Object.defineProperty;var N=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var y=(a,e,i)=>e in a?I(a,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[e]=i,m=(a,e)=>{for(var i in e||(e={}))_.call(e,i)&&y(a,i,e[i]);if(N)for(var i of N(e))G.call(e,i)&&y(a,i,e[i]);return a};import{r as g,i as E,j as t}from"./main-80.js";import{j as R,_ as s,Y as v,L as f}from"./bi.433.0.js";import{a as P,g as $}from"./bi.405.701.js";import{T as k,t as O}from"./bi.717.703.js";function V({flowID:a,googleCalendarConf:e,setGoogleCalendarConf:i,step:b,setStep:w,isLoading:p,setIsLoading:L,setSnackbar:h,redirectLocation:A,isInfo:r}){const[c,S]=g.useState(!1),[l,x]=g.useState({clientId:"",clientSecret:""}),T=E(R),{googleCalendar:n}=O,z=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),$(a,e,i),w(2)},d=o=>{const u=m({},e),j=m({},l);j[o.target.name]="",u[o.target.name]=o.target.value,x(j),i(u)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:b===1&&900,height:b===1&&"auto"},children:[(n==null?void 0:n.youTubeLink)&&t.jsx(k,{title:"Google Calendar",youTubeLink:n==null?void 0:n.youTubeLink}),(n==null?void 0:n.docLink)&&t.jsx(k,{title:"Google Calendar",docLink:n==null?void 0:n.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"name",value:e.name,type:"text",placeholder:s("Integration Name...","bit-integrations"),disabled:r}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("Homepage URL:","bit-integrations")})}),t.jsx(v,{value:`${window.location.origin}`,className:"field-key-cpy w-6 ml-0",readOnly:r,setSnackbar:h}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("Authorized Redirect URIs:","bit-integrations")})}),t.jsx(v,{value:A||`${T.api.base}/redirect`,className:"field-key-cpy w-6 ml-0",readOnly:r,setSnackbar:h}),t.jsxs("small",{className:"d-blk mt-3",children:[s("To Get Client Id & Secret, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://console.developers.google.com/apis/credentials",target:"_blank",rel:"noreferrer",children:s("Google API Console","bit-integrations")})]}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("GoogleCalendar Client id:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"clientId",value:e.clientId,type:"text",placeholder:s("client ID...","bit-integrations"),disabled:r}),t.jsx("div",{style:{color:"red"},children:l.clientId}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("GoogleCalendar Client Secret:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"clientSecret",value:e.clientSecret,type:"text",placeholder:s("client Secret...","bit-integrations"),disabled:r}),t.jsx("div",{style:{color:"red"},children:l.clientSecret}),!r&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{onClick:()=>P(e,i,S,L,x),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:c||p,children:[c?s("Authorized ✔","bit-integrations"):s("Authorize","bit-integrations"),p&&t.jsx(f,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:z,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!c,children:[s("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]})]})}export{V as default};
