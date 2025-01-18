var f=Object.defineProperty;var g=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var x=(s,i,a)=>i in s?f(s,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[i]=a,b=(s,i)=>{for(var a in i||(i={}))P.call(i,a)&&x(s,a,i[a]);if(g)for(var a of g(i))z.call(i,a)&&x(s,a,i[a]);return s};import{r as y,j as t}from"./main-777.js";import{_ as e}from"./bi.157.0.js";import{z as I,a8 as L}from"./bi.463.440.js";import{h as v}from"./bi.487.792.js";import{T as j,t as T}from"./bi.805.709.js";import"./bi.681.9.js";import"./bi.644.3.js";import"./bi.309.13.js";import"./bi.677.11.js";import"./bi.181.14.js";function H({klaviyoConf:s,setKlaviyoConf:i,step:a,setStep:N,isInfo:r,loading:o,setLoading:k}){const[l,A]=y.useState(!1),[c,d]=y.useState({name:"",authKey:""}),{klaviyo:n}=T,u=m=>{const h=b({},s),p=b({},c);p[m.target.name]="",h[m.target.name]=m.target.value,d(p),i(h)},w=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),N(2)},K=`
  <h4>${e("Step of get API Key:","bit-integrations")}</h4>
  <ul>
    <li>${e("Goto Settings and click on","bit-integrations")} <a href="https://www.klaviyo.com/account#api-keys-tab" target='_blank'>${e("API Keys.","bit-integrations")}</a></li>
    <li>${e("Click on Create Private API key.","bit-integrations")}</li>
    <li>${e("Copy the <b>Private API Key</b> and paste into <b>API Key</b> field of your authorization form.","bit-integrations")}</li>
    <li>${e("Finally, click <b>Authorize</b> button.","bit-integrations")}</li>
</ul>
`;return t.jsxs("div",{className:"btcd-stp-page",style:{width:a===1&&900,height:a===1&&"auto"},children:[(n==null?void 0:n.youTubeLink)&&t.jsx(j,{title:"Klaviyo",youTubeLink:n==null?void 0:n.youTubeLink}),(n==null?void 0:n.docLink)&&t.jsx(j,{title:"Klaviyo",docLink:n==null?void 0:n.docLink}),t.jsxs("div",{className:"mt-2",children:[t.jsx("div",{className:"my-1",children:t.jsx("b",{children:e("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 my-1 mx-0",onChange:u,name:"name",value:s.name,type:"text",placeholder:e("Integration Name...","bit-integrations"),disabled:r}),t.jsx("div",{className:"my-1",children:t.jsx("b",{children:e("API Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 my-1 mx-0",onChange:u,name:"authKey",value:s.authKey,type:"text",placeholder:e("API Key...","bit-integrations"),disabled:r}),c.authKey&&t.jsx("div",{className:"mt-1 mb-2 error-msg",children:c.authKey}),t.jsxs("small",{className:"d-blk mt-1",children:[e("To get API key, please visit","bit-integrations"),t.jsx("a",{className:"btcd-link",href:"https://www.klaviyo.com/account#api-keys-tab",target:"_blank",rel:"noreferrer",children:e("here.","bit-integrations")})]}),!r&&t.jsxs("div",{className:"w-6 d-flx flx-between ",children:[t.jsxs("button",{onClick:()=>v(s,i,d,A,o,k),className:"btn btcd-btn-lg purple sh-sm",type:"button",disabled:l||o.auth,children:[l?e("Authorized ✔","bit-integrations"):e("Authorize","bit-integrations"),o.auth&&t.jsx(I,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:w,className:"btn btcd-btn-lg purple sh-sm",type:"button",disabled:!l,children:[e("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(L,{note:K})]})]})}export{H as default};
