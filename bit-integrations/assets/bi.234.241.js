var _=Object.defineProperty;var x=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var k=(i,n,s)=>n in i?_(i,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[n]=s,u=(i,n)=>{for(var s in n||(n={}))w.call(n,s)&&k(i,s,n[s]);if(x)for(var s of x(n))z.call(n,s)&&k(i,s,n[s]);return i};import{r as g,j as t}from"./main-80.js";import{_ as e,L as A,N as $,X as E}from"./bi.433.0.js";import{s as R}from"./bi.712.842.js";import{T as j,t as I}from"./bi.717.703.js";function q({salesmateConf:i,setSalesmateConf:n,step:s,setStep:N,loading:a,setLoading:v,isInfo:r}){const[c,T]=g.useState(!1),[l,p]=g.useState({session_token:""}),{salesmate:o}=I,y=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),i!=null&&i.default,N(2)},d=b=>{const m=u({},i),h=u({},l);h[b.target.name]="",m[b.target.name]=b.target.value,p(h),n(m)},S=()=>{i.link_name?window.open(`https://${i.link_name}.salesmate.io/#/app/user/accesskey`,"_blank","noreferrer"):E.error(e("Link Name is required!","bit-integrations"))},L=`
            <h4>${e("Get Session Token","bit-integrations")}</h4>
            <ul>
                <li>${e("First go to your Salesmate dashboard.","bit-integrations")}</li>
                <li>${e('Click go to your "Profile" from Right top corner',"bit-integrations")}</li>
                <li>${e('Then Click "Access Key"',"bit-integrations")}</li>
                <li>${e('Then click "Session Key / Session Token", Then Copied',"bit-integrations")}</li>
            </ul>`;return t.jsxs("div",{className:"btcd-stp-page",style:{width:s===1&&900,height:s===1&&"auto"},children:[(o==null?void 0:o.youTubeLink)&&t.jsx(j,{title:"Salesmate CRM",youTubeLink:o==null?void 0:o.youTubeLink}),(o==null?void 0:o.docLink)&&t.jsx(j,{title:"Salesmate CRM",docLink:o==null?void 0:o.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:e("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"name",value:i.name,type:"text",placeholder:e("Integration Name...","bit-integrations"),disabled:r}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:e("Session Token:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"session_token",value:i.session_token,type:"text",placeholder:e("Session Token...","bit-integrations"),disabled:r}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:l.session_token}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:e("Link Name:","bit-integrations")})}),t.jsxs("div",{className:"btcd-input-group w-6 mt-1",children:[t.jsx("div",{className:"btcd-input-group-icon",children:"https://"}),t.jsx("div",{className:"btcd-input-group-area",children:t.jsx("input",{className:"btcd-paper-inp",onChange:d,name:"link_name",value:i.link_name,type:"text",placeholder:e("Link Name...","bit-integrations"),disabled:r})}),t.jsx("div",{className:"btcd-input-group-icon",children:".salesmate.io"})]}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:l.link_name}),t.jsxs("small",{className:"d-blk mt-3",children:[e("To Get Session Token, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",onClick:S,children:e("Salesmate Session Token","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!r&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>R(i,n,p,T,a,v),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:c||a.auth,children:[c?e("Authorized ✔","bit-integrations"):e("Authorize","bit-integrations"),a.auth&&t.jsx(A,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:y,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!c,children:[e("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx($,{note:L})]})}export{q as default};
