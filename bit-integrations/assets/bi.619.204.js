var L=Object.defineProperty;var x=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var g=(t,s,n)=>s in t?L(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,m=(t,s)=>{for(var n in s||(s={}))_.call(s,n)&&g(t,n,s[n]);if(x)for(var n of x(s))z.call(s,n)&&g(t,n,s[n]);return t};import{r as j,j as e}from"./main-579.js";import{_ as a,L as S}from"./bi.919.15.js";import{a as f}from"./bi.69.676.js";import{T as k,t as E}from"./bi.339.713.js";function B({twilioConf:t,setTwilioConf:s,step:n,setstep:N,isLoading:u,setIsLoading:v,setSnackbar:y,isInfo:i}){const[c,T]=j.useState(!1),[o,b]=j.useState({username:"",password:""}),{twilio:r}=E,A=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),N(2)},l=d=>{const h=m({},t),p=m({},o);p[d.target.name]="",h[d.target.name]=d.target.value,b(p),s(h)};return e.jsxs("div",{className:"btcd-stp-page",style:{width:n===1&&900,height:n===1&&"auto"},children:[(r==null?void 0:r.youTubeLink)&&e.jsx(k,{title:"Twilio",youTubeLink:r==null?void 0:r.youTubeLink}),(r==null?void 0:r.docLink)&&e.jsx(k,{title:"Twilio",docLink:r==null?void 0:r.docLink}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:a("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:l,name:"name",value:t.name,type:"text",placeholder:a("Integration Name...","bit-integrations"),disabled:i}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:a("Account SID:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:l,name:"sid",value:t.sid,type:"text",placeholder:a("Account SID...","bit-integrations"),disabled:i}),e.jsx("div",{style:{color:"red"},children:o.sid}),e.jsxs("small",{className:"d-blk mt-5",children:[a("To get Account SID and Auth Token , Please Visit","bit-integrations")," ",e.jsx("a",{className:"btcd-link",href:"https://console.twilio.com/",target:"_blank",rel:"noreferrer",children:a("Twilio Console","bit-integrations")})]}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:a("Auth Token:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:l,name:"token",value:t.token,type:"text",placeholder:a("Auth Token...","bit-integrations"),disabled:i}),e.jsx("div",{style:{color:"red"},children:o.token}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:a("From:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:l,name:"from_num",value:t.from_num,type:"text",placeholder:a("Phone Number...","bit-integrations"),disabled:i}),e.jsx("div",{style:{color:"red"},children:o.from_num}),!i&&e.jsxs("div",{children:[e.jsxs("button",{onClick:()=>f(t,s,b,T,v,y),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:c||u,children:[c?a("Authorized ✔","bit-integrations"):a("Authorize","bit-integrations"),u&&e.jsx(S,{size:"20",clr:"#022217",className:"ml-2"})]}),e.jsx("br",{}),e.jsxs("button",{onClick:A,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!c,children:[a("Next","bit-integrations"),e.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]})]})}export{B as default};
