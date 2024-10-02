var T=Object.defineProperty;var j=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var N=(a,i,s)=>i in a?T(a,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[i]=s,m=(a,i)=>{for(var s in i||(i={}))f.call(i,s)&&N(a,s,i[s]);if(j)for(var s of j(i))C.call(i,s)&&N(a,s,i[s]);return a};import{r as y,i as E,j as t}from"./main-650.js";import{j as _,_ as e,X as v,L as O,N as P}from"./bi.541.15.js";import{B as U}from"./bi.912.697.js";import{a as Z,z as B}from"./bi.221.738.js";import{T as w,t as D}from"./bi.770.713.js";function X({formID:a,zoomWebinarConf:i,setZoomWebinarConf:s,step:h,setStep:k,isLoading:$,setIsLoading:u,setSnackbar:l,redirectLocation:S,isInfo:r}){const[c,A]=y.useState(!1),[d,p]=y.useState({clientId:"",clientSecret:""}),L=E(_),{zoomWebinar:n}=D,o=b=>{const g=m({},i),x=m({},d);x[b.target.name]="",g[b.target.name]=b.target.value,p(x),s(g)},R=()=>{B(a,i,s,u,l),k(2)},I=`<h4>${e("Pro or higher plan only .","bit-integrations")}</h4>
  <h4>${e("Client Id and Client Secret generate with OAuth .","bit-integrations")}</h4>
  <h4>${e("Scope:","bit-integrations")}</h4>
  <ul>
      <li>${e("User:<b>'user:master, user:read:admin, user:write:admin'</b> ","bit-integrations")}</li>
      <li>${e("Webinar:<b>'webinar:master, webinar:read:admin, webinar:write:admin'</b> ","bit-integrations")}</li>
  </ul>
  <h4>${e("Redirect URIs add also in <b>'Add allow lists'</b>","bit-integrations")}</h4>
  <h4>${e("Zoom Settings :","bit-integrations")}</h4>
  <ul>
      <li>${e("Registration:<b>Required</b>","bit-integrations")}</li>
      <li>${e("Participant:<b>On</b>","bit-integrations")}</li>
  </ul>
  `;return t.jsxs("div",{className:"btcd-stp-page",style:{width:h===1&&900,height:h===1&&"100%"},children:[(n==null?void 0:n.youTubeLink)&&t.jsx(w,{title:"Zoom Webinars",youTubeLink:n==null?void 0:n.youTubeLink}),(n==null?void 0:n.docLink)&&t.jsx(w,{title:"Zoom Webinars",docLink:n==null?void 0:n.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:e("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"name",value:i.name,type:"text",placeholder:e("Integration Name...","bit-integrations"),disabled:r}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:e("Homepage URL:","bit-integrations")})}),t.jsx(v,{value:`${window.location.origin}`,className:"field-key-cpy w-6 ml-0",readOnly:r,setSnackbar:l}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:e("Authorized Redirect URIs:","bit-integrations")})}),t.jsx(v,{value:S||`${L.api.base}/redirect`,className:"field-key-cpy w-6 ml-0",readOnly:r,setSnackbar:l}),t.jsxs("small",{className:"d-blk mt-5",children:[e("To get Client ID and SECRET , Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://marketplace.zoom.us/develop/create",target:"_blank",rel:"noreferrer",children:e("Get Zoom client id and secret","bit-integrations")})]}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:e("Client id:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"clientId",value:i.clientId,type:"text",placeholder:e("client ID...","bit-integrations"),disabled:r}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:d.clientId}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:e("Client secret:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"clientSecret",value:i.clientSecret,type:"text",placeholder:e("client Secret...","bit-integrations"),disabled:r}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:d.clientSecret}),!r&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{onClick:()=>Z(i,s,p,A,u,l),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:c,children:[c?e("Authorized ✔","bit-integrations"):e("Authorize","bit-integrations"),$&&t.jsx(O,{size:20,clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:()=>R(),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!c,children:[e("Next","bit-integrations"),t.jsx(U,{className:"ml-1 rev-icn"})]})]}),t.jsx(P,{note:I})]})}export{X as default};
