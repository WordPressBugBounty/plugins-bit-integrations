var f=Object.defineProperty;var N=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var y=(r,t,i)=>t in r?f(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i,m=(r,t)=>{for(var i in t||(t={}))A.call(t,i)&&y(r,i,t[i]);if(N)for(var i of N(t))_.call(t,i)&&y(r,i,t[i]);return r};import{r as g,f as G,j as e}from"./main-252.js";import{e as E,_ as s}from"./bi.63.0.js";import{a1 as v,z as R}from"./bi.269.440.js";import{a as P}from"./bi.558.785.js";import{T as k,t as $}from"./bi.41.709.js";import"./bi.456.9.js";function q({flowID:r,googleContactsConf:t,setGoogleContactsConf:i,step:b,setStep:w,isLoading:p,setIsLoading:z,setSnackbar:h,redirectLocation:I,isInfo:a}){const[l,L]=g.useState(!1),[c,x]=g.useState({clientId:"",clientSecret:""}),S=G(E),{googleContacts:n}=$,T=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),w(2)},d=o=>{const u=m({},t),j=m({},c);j[o.target.name]="",u[o.target.name]=o.target.value,x(j),i(u)};return e.jsxs("div",{className:"btcd-stp-page",style:{width:b===1&&900,height:b===1&&"auto"},children:[(n==null?void 0:n.youTubeLink)&&e.jsx(k,{title:"Google Contacts",youTubeLink:n==null?void 0:n.youTubeLink}),(n==null?void 0:n.docLink)&&e.jsx(k,{title:"Google Contacts",docLink:n==null?void 0:n.docLink}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:s("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"name",value:t.name,type:"text",placeholder:s("Integration Name...","bit-integrations"),disabled:a}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:s("Homepage URL:","bit-integrations")})}),e.jsx(v,{value:`${window.location.origin}`,className:"field-key-cpy w-6 ml-0",readOnly:a,setSnackbar:h}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:s("Authorized Redirect URIs:","bit-integrations")})}),e.jsx(v,{value:I||`${S.api.base}/redirect`,className:"field-key-cpy w-6 ml-0",readOnly:a,setSnackbar:h}),e.jsxs("small",{className:"d-blk mt-3",children:[s("To Get Client Id & Secret, Please Visit","bit-integrations")," ",e.jsx("a",{className:"btcd-link",href:"https://console.developers.google.com/apis/credentials",target:"_blank",rel:"noreferrer",children:s("Google API Console","bit-integrations")})]}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:s("GoogleContacts Client id:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"clientId",value:t.clientId,type:"text",placeholder:s("client ID...","bit-integrations"),disabled:a}),e.jsx("div",{style:{color:"red"},children:c.clientId}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:s("GoogleContacts Client Secret:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"clientSecret",value:t.clientSecret,type:"text",placeholder:s("client Secret...","bit-integrations"),disabled:a}),e.jsx("div",{style:{color:"red"},children:c.clientSecret}),!a&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:()=>P(t,i,L,z,x),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:l||p,children:[l?s("Authorized ✔","bit-integrations"):s("Authorize","bit-integrations"),p&&e.jsx(R,{size:"20",clr:"#022217",className:"ml-2"})]}),e.jsx("br",{}),e.jsxs("button",{onClick:T,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!l,children:[s("Next","bit-integrations"),e.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]})]})}export{q as default};
