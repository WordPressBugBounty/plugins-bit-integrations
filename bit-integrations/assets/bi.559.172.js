var I=Object.defineProperty;var N=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var y=(r,e,i)=>e in r?I(r,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[e]=i,m=(r,e)=>{for(var i in e||(e={}))_.call(e,i)&&y(r,i,e[i]);if(N)for(var i of N(e))G.call(e,i)&&y(r,i,e[i]);return r};import{r as g,f,j as t}from"./main-814.js";import{e as E,_ as s}from"./bi.317.0.js";import{a1 as v,z as R}from"./bi.8.440.js";import{a as P,g as $}from"./bi.707.736.js";import{T as k,t as O}from"./bi.492.709.js";import"./bi.765.9.js";function J({flowID:r,googleCalendarConf:e,setGoogleCalendarConf:i,step:b,setStep:w,isLoading:p,setIsLoading:L,setSnackbar:h,redirectLocation:z,isInfo:a}){const[c,A]=g.useState(!1),[l,x]=g.useState({clientId:"",clientSecret:""}),S=f(E),{googleCalendar:n}=O,T=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),$(r,e,i),w(2)},d=o=>{const u=m({},e),j=m({},l);j[o.target.name]="",u[o.target.name]=o.target.value,x(j),i(u)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:b===1&&900,height:b===1&&"auto"},children:[(n==null?void 0:n.youTubeLink)&&t.jsx(k,{title:"Google Calendar",youTubeLink:n==null?void 0:n.youTubeLink}),(n==null?void 0:n.docLink)&&t.jsx(k,{title:"Google Calendar",docLink:n==null?void 0:n.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"name",value:e.name,type:"text",placeholder:s("Integration Name...","bit-integrations"),disabled:a}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("Homepage URL:","bit-integrations")})}),t.jsx(v,{value:`${window.location.origin}`,className:"field-key-cpy w-6 ml-0",readOnly:a,setSnackbar:h}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("Authorized Redirect URIs:","bit-integrations")})}),t.jsx(v,{value:z||`${S.api.base}/redirect`,className:"field-key-cpy w-6 ml-0",readOnly:a,setSnackbar:h}),t.jsxs("small",{className:"d-blk mt-3",children:[s("To Get Client Id & Secret, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://console.developers.google.com/apis/credentials",target:"_blank",rel:"noreferrer",children:s("Google API Console","bit-integrations")})]}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("GoogleCalendar Client id:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"clientId",value:e.clientId,type:"text",placeholder:s("client ID...","bit-integrations"),disabled:a}),t.jsx("div",{style:{color:"red"},children:l.clientId}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("GoogleCalendar Client Secret:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"clientSecret",value:e.clientSecret,type:"text",placeholder:s("client Secret...","bit-integrations"),disabled:a}),t.jsx("div",{style:{color:"red"},children:l.clientSecret}),!a&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{onClick:()=>P(e,i,A,L,x),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:c||p,children:[c?s("Authorized ✔","bit-integrations"):s("Authorize","bit-integrations"),p&&t.jsx(R,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:T,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!c,children:[s("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]})]})}export{J as default};
