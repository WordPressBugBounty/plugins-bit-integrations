var L=Object.defineProperty;var u=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var N=(t,s,l)=>s in t?L(t,s,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[s]=l,b=(t,s)=>{for(var l in s||(s={}))U.call(s,l)&&N(t,l,s[l]);if(u)for(var l of u(s))E.call(s,l)&&N(t,l,s[l]);return t};import{r as y,j as e}from"./main-404.js";import{B as S}from"./bi.250.698.js";import{_ as i}from"./bi.51.0.js";import{a1 as v,z as I}from"./bi.613.437.js";import{d as R,b as f}from"./bi.918.736.js";import{T as k,t as B}from"./bi.116.700.js";import"./bi.964.9.js";function H({mauticConf:t,setMauticConf:s,step:l,setstep:w,isLoading:p,setIsLoading:x,setSnackbar:r,redirectLocation:z,isInfo:a}){const[o,T]=y.useState(!1),[d,h]=y.useState({baseUrl:"",clientId:"",clientSecret:""}),{mautic:n}=B,A=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),w(2),f(t,s,x,r)},c=m=>{const g=b({},t),j=b({},d);j[m.target.name]="",g[m.target.name]=m.target.value,h(j),s(g)};return e.jsxs("div",{className:"btcd-stp-page",style:{width:l===1&&900,height:l===1&&"auto"},children:[(n==null?void 0:n.youTubeLink)&&e.jsx(k,{title:"Mautic",youTubeLink:n==null?void 0:n.youTubeLink}),(n==null?void 0:n.docLink)&&e.jsx(k,{title:"Mautic",docLink:n==null?void 0:n.docLink}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"name",value:t.name,type:"text",placeholder:i("Integration Name...","bit-integrations"),disabled:a}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Homepage URL:","bit-integrations")})}),e.jsx(v,{value:`${window.location.origin}`,className:"field-key-cpy w-6 ml-0",readOnly:a,setSnackbar:r}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Authorized Redirect URIs:","bit-integrations")})}),e.jsx(v,{value:z||`${window.location.href}`,className:"field-key-cpy w-6 ml-0",readOnly:a,setSnackbar:r}),e.jsxs("small",{className:"d-blk mt-5",children:[i("To get Client ID and SECRET , Please Visit","bit-integrations")," ",e.jsx("a",{className:"btcd-link",href:`${t.baseUrl}/s/credentials/s/credentials`,target:"_blank",rel:"noreferrer",children:i("Mautic API Console","bit-integrations")})]}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Mautic Base URL:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"baseUrl",value:t.baseUrl,type:"text",placeholder:i("User Name...","bit-integrations"),disabled:a}),e.jsx("div",{style:{color:"red"},children:d.baseUrl}),e.jsx("small",{className:"d-blk mt-3",children:i("Example: https://mautic.bit-integration.pro","bit-integrations")}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Client id:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"clientId",value:t.clientId,type:"text",placeholder:i("client ID...","bit-integrations"),disabled:a}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:d.clientId}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Client secret:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"clientSecret",value:t.clientSecret,type:"text",placeholder:i("client Secret...","bit-integrations"),disabled:a}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:d.clientSecret}),!a&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:()=>R("mautic",t,s,h,T,x,r),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:o||p,children:[o?i("Authorized ✔","bit-integrations"):i("Authorize","bit-integrations"),p&&e.jsx(I,{size:20,clr:"#022217",className:"ml-2"})]}),e.jsx("br",{}),e.jsxs("button",{onClick:A,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!o,children:[i("Next","bit-integrations"),e.jsx(S,{className:"ml-1 rev-icn"})]})]})]})}export{H as default};
