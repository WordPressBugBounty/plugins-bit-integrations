var I=Object.defineProperty;var j=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var N=(s,i,n)=>i in s?I(s,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[i]=n,m=(s,i)=>{for(var n in i||(i={}))T.call(i,n)&&N(s,n,i[n]);if(j)for(var n of j(i))C.call(i,n)&&N(s,n,i[n]);return s};import{r as y,f as E,j as t}from"./main-615.js";import{e as _,_ as e}from"./bi.394.0.js";import{B as O}from"./bi.560.697.js";import{a1 as v,y as P,a8 as U}from"./bi.991.437.js";import{a as Z,z as B}from"./bi.381.750.js";import{T as k,t as D}from"./bi.681.699.js";import"./bi.179.9.js";function Q({formID:s,zoomConf:i,setZoomConf:n,step:h,setStep:w,isLoading:$,setIsLoading:p,setSnackbar:l,redirectLocation:S,isInfo:r}){const[c,A]=y.useState(!1),[d,u]=y.useState({clientId:"",clientSecret:""}),R=E(_),{zoomMeeting:a}=D,o=b=>{const g=m({},i),x=m({},d);x[b.target.name]="",g[b.target.name]=b.target.value,u(x),n(g)},L=()=>{B(s,i,n,p,l),w(2)},f=`<h4>${e("Pro or higher plan only .","bit-integrations")}</h4>
  <h4>${e("Client Id and Client Secret generate with OAuth .","bit-integrations")}</h4>
  <h4>${e("Scope:","bit-integrations")}</h4>
  <ul>
      <li>${e("User:<b>'user:master, user:read:admin, user:write:admin'</b> ","bit-integrations")}</li>
      <li>${e("Meeting:<b>'meeting:master, meeting:read:admin, meeting:write:admin'</b> ","bit-integrations")}</li>
  </ul>
  <h4>${e("Redirect URIs add also in <b>'Add allow lists'</b>","bit-integrations")}</h4>
  <h4>${e("Zoom Settings :","bit-integrations")}</h4>
  <ul>
      <li>${e("Registration:<b>Required</b>","bit-integrations")}</li>
      <li>${e("Participant:<b>On</b>","bit-integrations")}</li>
  </ul>

  `;return t.jsxs("div",{className:"btcd-stp-page",style:{width:h===1&&900,height:h===1&&"100%"},children:[(a==null?void 0:a.youTubeLink)&&t.jsx(k,{title:"Zoom Meeting",youTubeLink:a==null?void 0:a.youTubeLink}),(a==null?void 0:a.docLink)&&t.jsx(k,{title:"Zoom Meeting",docLink:a==null?void 0:a.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:e("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"name",value:i.name,type:"text",placeholder:e("Integration Name...","bit-integrations"),disabled:r}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:e("Homepage URL:","bit-integrations")})}),t.jsx(v,{value:`${window.location.origin}`,className:"field-key-cpy w-6 ml-0",readOnly:r,setSnackbar:l}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:e("Authorized Redirect URIs:","bit-integrations")})}),t.jsx(v,{value:S||`${R.api.base}/redirect`,className:"field-key-cpy w-6 ml-0",readOnly:r,setSnackbar:l}),t.jsxs("small",{className:"d-blk mt-5",children:[e("To get Client ID and SECRET , Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://marketplace.zoom.us/develop/create",target:"_blank",rel:"noreferrer",children:e("Get Zoom client id and secret","bit-integrations")})]}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:e("Client id:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"clientId",value:i.clientId,type:"text",placeholder:e("client ID...","bit-integrations"),disabled:r}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:d.clientId}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:e("Client secret:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"clientSecret",value:i.clientSecret,type:"text",placeholder:e("client Secret...","bit-integrations"),disabled:r}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:d.clientSecret}),!r&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{onClick:()=>Z(i,n,u,A,p,l),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:c,children:[c?e("Authorized ✔","bit-integrations"):e("Authorize","bit-integrations"),$&&t.jsx(P,{size:20,clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:()=>L(),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!c,children:[e("Next","bit-integrations"),t.jsx(O,{className:"ml-1 rev-icn"})]})]}),t.jsx(U,{note:f})]})}export{Q as default};
