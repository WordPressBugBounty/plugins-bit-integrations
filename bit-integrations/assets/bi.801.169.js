var A=Object.defineProperty;var x=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var j=(a,t,s)=>t in a?A(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,b=(a,t)=>{for(var s in t||(t={}))I.call(t,s)&&j(a,s,t[s]);if(x)for(var s of x(t))z.call(t,s)&&j(a,s,t[s]);return a};import{r as k,j as e}from"./main-556.js";import{_ as i}from"./bi.562.0.js";import{z as C}from"./bi.838.440.js";import{a as T,g as D}from"./bi.244.760.js";import{T as N,t as L}from"./bi.448.755.js";import"./bi.657.9.js";function $({flowID:a,dropboxConf:t,setDropboxConf:s,step:p,setStep:y,isLoading:h,setIsLoading:v,isInfo:c}){const[d,w]=k.useState(!1),[l,o]=k.useState({clientId:"",clientSecret:""}),{dropbox:n}=L,S=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),D(a,t,s),y(2)},r=m=>{const u=b({},t),g=b({},l);g[m.target.name]="",u[m.target.name]=m.target.value,o(g),s(u)},_=()=>{if(!t.clientId||!t.clientSecret){o({clientId:t.clientId?"":i("Client Id can't be empty","bit-integrations"),clientSecret:t.clientSecret?"":i("Client Secret can't be empty","bit-integrations")});return}window.open(`https://www.dropbox.com/oauth2/authorize?client_id=${t.clientId}&token_access_type=offline&response_type=code`,"_blank")};return e.jsxs("div",{className:"btcd-stp-page",style:{width:p===1&&900,height:p===1&&"auto"},children:[(n==null?void 0:n.youTubeLink)&&e.jsx(N,{title:"Dropbox",youTubeLink:n==null?void 0:n.youTubeLink}),(n==null?void 0:n.docLink)&&e.jsx(N,{title:"Dropbox",docLink:n==null?void 0:n.docLink}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:r,name:"name",value:t.name,type:"text",placeholder:i("Integration Name...","bit-integrations"),disabled:c}),e.jsxs("small",{className:"d-blk mt-3",children:[i("To Get Client Id & Secret, Please Visit","bit-integrations")," ",e.jsx("a",{className:"btcd-link",rel:"noreferrer",target:"_blank",href:"https://www.dropbox.com/developers/apps/create?_tk=pilot_lp&_ad=ctabtn1&_camp=create",children:i("Dropbox API Console","bit-integrations")})]}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Dropbox Client id:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:r,name:"clientId",value:t.clientId,type:"text",placeholder:i("client ID...","bit-integrations"),disabled:c}),e.jsx("div",{style:{color:"red"},children:l.clientId}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Dropbox Client Secret:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:r,name:"clientSecret",value:t.clientSecret,type:"text",placeholder:i("client Secret...","bit-integrations"),disabled:c}),e.jsx("div",{style:{color:"red"},children:l.clientSecret}),e.jsxs("small",{className:"d-blk mt-3",children:[i("To Get Access Code, Please Visit","bit-integrations")," ",e.jsx("span",{className:"btcd-link",style:{cursor:"pointer"},onClick:_,"aria-hidden":"true",children:i("Dropbox Access Code","bit-integrations")})]}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Dropbox Access Code:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:r,name:"accessCode",value:t.accessCode,type:"text",placeholder:i("Access Code...","bit-integrations"),disabled:c}),e.jsx("div",{style:{color:"red"},children:l.accessCode}),!c&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:()=>T(t,s,w,v,o),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:d||h,children:[d?i("Authorized ✔","bit-integrations"):i("Authorize","bit-integrations"),h&&e.jsx(C,{size:"20",clr:"#022217",className:"ml-2"})]}),e.jsx("br",{}),e.jsxs("button",{onClick:S,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!d,children:[i("Next","bit-integrations"),e.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]})]})}export{$ as default};
