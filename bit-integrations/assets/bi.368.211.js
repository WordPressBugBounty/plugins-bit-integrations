var f=Object.defineProperty;var g=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var x=(a,i,s)=>i in a?f(a,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[i]=s,d=(a,i)=>{for(var s in i||(i={}))P.call(i,s)&&x(a,s,i[s]);if(g)for(var s of g(i))I.call(i,s)&&x(a,s,i[s]);return a};import{r as y,j as t}from"./main-29.js";import{_ as e,L,N as z}from"./bi.860.15.js";import{h as v}from"./bi.679.768.js";import{T as j,t as T}from"./bi.244.714.js";function B({klaviyoConf:a,setKlaviyoConf:i,step:s,setStep:N,isInfo:r,loading:o,setLoading:k}){const[l,A]=y.useState(!1),[c,m]=y.useState({name:"",authKey:""}),{klaviyo:n}=T,u=b=>{const h=d({},a),p=d({},c);p[b.target.name]="",h[b.target.name]=b.target.value,m(p),i(h)},w=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),N(2)},K=`
  <h4>${e("Step of get API Key:","bit-integrations")}</h4>
  <ul>
    <li>${e("Goto Settings and click on","bit-integrations")} <a href="https://www.klaviyo.com/account#api-keys-tab" target='_blank'>${e("API Keys.","bit-integrations")}</a></li>
    <li>${e("Click on Create Private API key.","bit-integrations")}</li>
    <li>${e("Copy the <b>Private API Key</b> and paste into <b>API Key</b> field of your authorization form.","bit-integrations")}</li>
    <li>${e("Finally, click <b>Authorize</b> button.","bit-integrations")}</li>
</ul>
`;return t.jsxs("div",{className:"btcd-stp-page",style:{width:s===1&&900,height:s===1&&"auto"},children:[(n==null?void 0:n.youTubeLink)&&t.jsx(j,{title:"Klaviyo",youTubeLink:n==null?void 0:n.youTubeLink}),(n==null?void 0:n.docLink)&&t.jsx(j,{title:"Klaviyo",docLink:n==null?void 0:n.docLink}),t.jsxs("div",{className:"mt-2",children:[t.jsx("div",{className:"my-1",children:t.jsx("b",{children:e("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 my-1 mx-0",onChange:u,name:"name",value:a.name,type:"text",placeholder:e("Integration Name...","bit-integrations"),disabled:r}),t.jsx("div",{className:"my-1",children:t.jsx("b",{children:e("API Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 my-1 mx-0",onChange:u,name:"authKey",value:a.authKey,type:"text",placeholder:e("API Key...","bit-integrations"),disabled:r}),c.authKey&&t.jsx("div",{className:"mt-1 mb-2 error-msg",children:c.authKey}),t.jsxs("small",{className:"d-blk mt-1",children:[e("To get API key, please visit","bit-integrations"),t.jsx("a",{className:"btcd-link",href:"https://www.klaviyo.com/account#api-keys-tab",target:"_blank",rel:"noreferrer",children:e("here.","bit-integrations")})]}),!r&&t.jsxs("div",{className:"w-6 d-flx flx-between ",children:[t.jsxs("button",{onClick:()=>v(a,i,m,A,o,k),className:"btn btcd-btn-lg purple sh-sm",type:"button",disabled:l||o.auth,children:[l?e("Authorized ✔","bit-integrations"):e("Authorize","bit-integrations"),o.auth&&t.jsx(L,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:w,className:"btn btcd-btn-lg purple sh-sm",type:"button",disabled:!l,children:[e("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(z,{note:K})]})]})}export{B as default};
