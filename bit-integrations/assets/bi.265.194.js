var A=Object.defineProperty;var N=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var y=(a,t,i)=>t in a?A(a,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[t]=i,m=(a,t)=>{for(var i in t||(t={}))_.call(t,i)&&y(a,i,t[i]);if(N)for(var i of N(t))f.call(t,i)&&y(a,i,t[i]);return a};import{r as g,i as G,j as e}from"./main-80.js";import{j as E,_ as s,Y as v,L as R}from"./bi.433.0.js";import{a as P}from"./bi.276.750.js";import{T as k,t as $}from"./bi.717.703.js";function H({flowID:a,googleContactsConf:t,setGoogleContactsConf:i,step:b,setStep:w,isLoading:p,setIsLoading:L,setSnackbar:h,redirectLocation:I,isInfo:r}){const[l,S]=g.useState(!1),[c,x]=g.useState({clientId:"",clientSecret:""}),T=G(E),{googleContacts:n}=$,z=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),w(2)},d=o=>{const u=m({},t),j=m({},c);j[o.target.name]="",u[o.target.name]=o.target.value,x(j),i(u)};return e.jsxs("div",{className:"btcd-stp-page",style:{width:b===1&&900,height:b===1&&"auto"},children:[(n==null?void 0:n.youTubeLink)&&e.jsx(k,{title:"Google Contacts",youTubeLink:n==null?void 0:n.youTubeLink}),(n==null?void 0:n.docLink)&&e.jsx(k,{title:"Google Contacts",docLink:n==null?void 0:n.docLink}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:s("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"name",value:t.name,type:"text",placeholder:s("Integration Name...","bit-integrations"),disabled:r}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:s("Homepage URL:","bit-integrations")})}),e.jsx(v,{value:`${window.location.origin}`,className:"field-key-cpy w-6 ml-0",readOnly:r,setSnackbar:h}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:s("Authorized Redirect URIs:","bit-integrations")})}),e.jsx(v,{value:I||`${T.api.base}/redirect`,className:"field-key-cpy w-6 ml-0",readOnly:r,setSnackbar:h}),e.jsxs("small",{className:"d-blk mt-3",children:[s("To Get Client Id & Secret, Please Visit","bit-integrations")," ",e.jsx("a",{className:"btcd-link",href:"https://console.developers.google.com/apis/credentials",target:"_blank",rel:"noreferrer",children:s("Google API Console","bit-integrations")})]}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:s("GoogleContacts Client id:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"clientId",value:t.clientId,type:"text",placeholder:s("client ID...","bit-integrations"),disabled:r}),e.jsx("div",{style:{color:"red"},children:c.clientId}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:s("GoogleContacts Client Secret:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"clientSecret",value:t.clientSecret,type:"text",placeholder:s("client Secret...","bit-integrations"),disabled:r}),e.jsx("div",{style:{color:"red"},children:c.clientSecret}),!r&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:()=>P(t,i,S,L,x),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:l||p,children:[l?s("Authorized ✔","bit-integrations"):s("Authorize","bit-integrations"),p&&e.jsx(R,{size:"20",clr:"#022217",className:"ml-2"})]}),e.jsx("br",{}),e.jsxs("button",{onClick:z,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!l,children:[s("Next","bit-integrations"),e.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]})]})}export{H as default};
