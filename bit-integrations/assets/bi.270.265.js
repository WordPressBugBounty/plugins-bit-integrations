var I=Object.defineProperty;var g=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var k=(e,n,a)=>n in e?I(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,b=(e,n)=>{for(var a in n||(n={}))v.call(n,a)&&k(e,a,n[a]);if(g)for(var a of g(n))w.call(n,a)&&k(e,a,n[a]);return e};import{r as j,j as t}from"./main-247.js";import{_ as i,n as _}from"./bi.456.0.js";import{y as z,a8 as S}from"./bi.393.437.js";import{p as E}from"./bi.902.881.js";import{T as x,t as $}from"./bi.30.716.js";import"./bi.712.9.js";function O({perfexCRMConf:e,setPerfexCRMConf:n,step:a,setStep:A,loading:r,setLoading:y,isInfo:o}){const[l,N]=j.useState(!1),[c,u]=j.useState({api_token:""}),{perfexCRM:s}=$,P=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),e!=null&&e.default,A(2)},d=m=>{const h=b({},e),p=b({},c);p[m.target.name]="",h[m.target.name]=m.target.value,u(p),n(h)},T=()=>{e.domain?window.open(`${e.domain}/admin/api/api_management`,"_blank","noreferrer"):_.error(i("Access API URL is required!","bit-integrations"))},L=`
            <h4>${i("Get API Token","bit-integrations")}</h4>
            <ul>
                <li>${i("Go to your Perfex CRM's Admin area and select the following menu item: <b>SETUP → MODULES</b>.","bit-integrations")}</li>
                <li>${i("Select the extracted upload.zip at Module installation selection prompt and press <b>INSTALL</b>.","bit-integrations")}</li>
                <li>${i("Find the newly installed module in the list, press <b>ACTIVATE</b> and enter your license key.","bit-integrations")}</li>
                <li>${i("Go to your Perfex's CRM backend as an admin, go to <b>API → API Management</b>, and create a new token.","bit-integrations")}</li>
            </ul>`;return t.jsxs("div",{className:"btcd-stp-page",style:{width:a===1&&900,height:a===1&&"auto"},children:[(s==null?void 0:s.youTubeLink)&&t.jsx(x,{title:"Perfex CRM",youTubeLink:s==null?void 0:s.youTubeLink}),(s==null?void 0:s.docLink)&&t.jsx(x,{title:"Perfex CRM",docLink:s==null?void 0:s.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"name",value:e.name,type:"text",placeholder:i("Integration Name...","bit-integrations"),disabled:o}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("Access API URL:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"domain",value:e.domain,type:"text",placeholder:i("Access API URL...","bit-integrations"),disabled:o}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:c.domain}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("API Token:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"api_token",value:e.api_token,type:"text",placeholder:i("API Token...","bit-integrations"),disabled:o}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:c.api_token}),t.jsxs("small",{className:"d-blk mt-3",children:[i("To Get API Token, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",onClick:T,children:i("PerfexCRM API Token","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!o&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>E(e,n,u,N,r,y),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:l||r.auth,children:[l?i("Authorized ✔","bit-integrations"):i("Authorize","bit-integrations"),r.auth&&t.jsx(z,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:P,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!l,children:[i("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(S,{note:L})]})}export{O as default};
