var _=Object.defineProperty;var g=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var h=(i,n,r)=>n in i?_(i,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[n]=r,m=(i,n)=>{for(var r in n||(n={}))A.call(n,r)&&h(i,r,n[r]);if(g)for(var r of g(n))z.call(n,r)&&h(i,r,n[r]);return i};import{r as j,j as t}from"./main-556.js";import{_ as e}from"./bi.562.0.js";import{z as I,a9 as L}from"./bi.838.440.js";import{s as P}from"./bi.347.907.js";import{T as y,t as w}from"./bi.448.755.js";import"./bi.657.9.js";function F({suiteDashConf:i,setSuiteDashConf:n,step:r,setStep:k,loading:l,setLoading:N,isInfo:a}){const[o,S]=j.useState(!1),[c,p]=j.useState({session_token:""}),{suiteDash:s}=w,v=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),i!=null&&i.default,k(2)},d=b=>{const u=m({},i),x=m({},c);x[b.target.name]="",u[b.target.name]=b.target.value,p(x),n(u)},T=`
            <h4>${e("To Get Public Id & Secret Key","bit-integrations")}</h4>
            <ul>
                <li>${e("First go to your SuiteDash dashboard.","bit-integrations")}</li>
                <li>${e('Click go to your "Profile" from Right top corner',"bit-integrations")}</li>
                <li>${e('Then Click "Integrations"',"bit-integrations")}</li>
                <li>${e('Then Click "Secure Api"',"bit-integrations")}</li>
                <li>${e('Then copy "API Authorization Credentials"',"bit-integrations")}</li>
            </ul>`;return t.jsxs("div",{className:"btcd-stp-page",style:{width:r===1&&900,height:r===1&&"auto"},children:[(s==null?void 0:s.youTubeLink)&&t.jsx(y,{title:"SuiteDash",youTubeLink:s==null?void 0:s.youTubeLink}),(s==null?void 0:s.docLink)&&t.jsx(y,{title:"SuiteDash",docLink:s==null?void 0:s.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:e("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"name",value:i.name,type:"text",placeholder:e("Integration Name...","bit-integrations"),disabled:a}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:e("Public Id:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"public_id",value:i.public_id,type:"text",placeholder:e("Public Id...","bit-integrations"),disabled:a}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:c.public_id}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:e("Secret Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"secret_key",value:i.secret_key,type:"text",placeholder:e("Secret Key...","bit-integrations"),disabled:a}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:c.secret_key}),t.jsxs("small",{className:"d-blk mt-3",children:[e("To Get Public Id & Secret Key, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://app.suitedash.com/integrations/publicApi?t=authentication",target:"_blank",children:e("SuiteDash Public Id & Secret Key","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!a&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>P(i,n,p,S,l,N),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:o||l.auth,children:[o?e("Authorized ✔","bit-integrations"):e("Authorize","bit-integrations"),l.auth&&t.jsx(I,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:v,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!o,children:[e("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(L,{note:T})]})}export{F as default};
