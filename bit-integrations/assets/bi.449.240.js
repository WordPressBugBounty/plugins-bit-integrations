var I=Object.defineProperty;var g=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var v=(t,a,s)=>a in t?I(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,b=(t,a)=>{for(var s in a||(a={}))_.call(a,s)&&v(t,s,a[s]);if(g)for(var s of g(a))R.call(a,s)&&v(t,s,a[s]);return t};import{r as N,f as $,j as e}from"./main-920.js";import{e as C,_ as i}from"./bi.247.0.js";import{a1 as h,z as D}from"./bi.761.437.js";import{d as P}from"./bi.468.834.js";import{T as y,t as Z}from"./bi.898.700.js";import"./bi.140.9.js";function G({zohoSheetConf:t,setZohoSheetConf:a,step:s,setStep:k,loading:d,setLoading:w,isInfo:r,setSnackbar:p,redirectLocation:L}){const[m,T]=N.useState(!1),[l,x]=N.useState({dataCenter:"",clientId:"",clientSecret:""}),A=$(C),{zohoSheet:n}=Z,E=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),t!=null&&t.default,k(2)},c=o=>{const u=b({},t),j=b({},l);j[o.target.name]="",u[o.target.name]=o.target.value,x(j),a(u)};return e.jsxs("div",{className:"btcd-stp-page",style:{width:s===1&&900,height:s===1&&"auto"},children:[(n==null?void 0:n.youTubeLink)&&e.jsx(y,{title:"Zoho Sheet",youTubeLink:n==null?void 0:n.youTubeLink}),(n==null?void 0:n.docLink)&&e.jsx(y,{title:"Zoho Sheet",docLink:n==null?void 0:n.docLink}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"name",value:t.name,type:"text",placeholder:i("Integration Name...","bit-integrations"),disabled:r}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Data Center:","bit-integrations")})}),e.jsxs("select",{onChange:c,name:"dataCenter",value:t.dataCenter,className:"btcd-paper-inp w-6 mt-1",disabled:r,children:[e.jsx("option",{value:"",children:i("Select a data center")}),e.jsx("option",{value:"com",children:"zoho.com"}),e.jsx("option",{value:"eu",children:"zoho.eu"}),e.jsx("option",{value:"com.cn",children:"zoho.com.cn"}),e.jsx("option",{value:"in",children:"zoho.in"}),e.jsx("option",{value:"com.au",children:"zoho.com.au"})]}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:l.dataCenter}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Homepage URL:","bit-integrations")})}),e.jsx(h,{value:`${window.location.origin}`,className:"field-key-cpy w-6 ml-0",readOnly:r,setSnackbar:p}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Authorized Redirect URIs:","bit-integrations")})}),e.jsx(h,{value:L||`${A.api.base}/redirect`,className:"field-key-cpy w-6 ml-0",readOnly:r,setSnackbar:p}),e.jsxs("small",{className:"d-blk mt-5",children:[i("To get Client ID and SECRET , Please Visit","bit-integrations")," ",e.jsx("a",{className:"btcd-link",href:`https://api-console.zoho.${(t==null?void 0:t.dataCenter)||"com"}/`,target:"_blank",rel:"noreferrer",children:i("Zoho API Console","bit-integrations")})]}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Client id:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"clientId",value:t.clientId,type:"text",placeholder:i("client ID...","bit-integrations"),disabled:r}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:l.clientId}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Client secret:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"clientSecret",value:t.clientSecret,type:"text",placeholder:i("client Secret...","bit-integrations"),disabled:r}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:l.clientSecret}),e.jsx("br",{}),e.jsx("br",{}),!r&&e.jsxs("div",{children:[e.jsxs("button",{onClick:()=>P(t,a,x,T,d,w),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:m||d.auth,children:[m?i("Authorized ✔","bit-integrations"):i("Authorize","bit-integrations"),d.auth&&e.jsx(D,{size:"20",clr:"#022217",className:"ml-2"})]}),e.jsx("br",{}),e.jsxs("button",{onClick:E,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!m,children:[i("Next","bit-integrations"),e.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]})]})}export{G as default};
