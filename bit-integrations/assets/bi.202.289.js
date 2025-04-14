var _=Object.defineProperty;var x=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var g=(t,a,s)=>a in t?_(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,b=(t,a)=>{for(var s in a||(a={}))K.call(a,s)&&g(t,s,a[s]);if(x)for(var s of x(a))w.call(a,s)&&g(t,s,a[s]);return t};import{r as y,j as e}from"./main-246.js";import{_ as i}from"./bi.560.0.js";import{T as j,t as z}from"./bi.142.765.js";import{z as U,a9 as L}from"./bi.675.443.js";import{b as T}from"./bi.811.973.js";import"./bi.947.9.js";function G({bentoConf:t,setBentoConf:a,step:s,setStep:k,loading:o,setLoading:N,isInfo:l}){const[d,v]=y.useState(!1),{bento:r}=z,[n,m]=y.useState({publishable_key:"",secret_key:""}),S=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),t!=null&&t.default,k(2)},c=u=>{const h=b({},t),p=b({},n);p[u.target.name]="",h[u.target.name]=u.target.value,m(p),a(h)};return e.jsxs("div",{className:"btcd-stp-page",style:{width:s===1&&900,height:s===1&&"auto"},children:[(r==null?void 0:r.youTubeLink)&&e.jsx(j,{title:"Bento",youTubeLink:r==null?void 0:r.youTubeLink}),(r==null?void 0:r.docLink)&&e.jsx(j,{title:"Bento",docLink:r==null?void 0:r.docLink}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"name",value:t.name,type:"text",placeholder:i("Integration Name...","bit-integrations"),disabled:l}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Publishable Key:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"publishable_key",value:t.publishable_key,type:"text",placeholder:i("Publishable Key...","bit-integrations"),disabled:l}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:n.publishable_key}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Secret Key:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"secret_key",value:t.secret_key,type:"text",placeholder:i("Secret Key...","bit-integrations"),disabled:l}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:n.secret_key}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Site UUID:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"site_uuid",value:t.site_uuid,type:"text",placeholder:i("Site UUID...","bit-integrations"),disabled:l}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:n.site_uuid}),e.jsxs("small",{className:"d-blk mt-3",children:[i("To Get Publishable Key, Secret Key & Site UUID, Please Visit","bit-integrations")," ",e.jsx("a",{className:"btcd-link",href:"https://app.bentonow.com/account/teams",target:"_blank",children:i("Bento team dashboard","bit-integrations")})]}),e.jsx("br",{}),!l&&e.jsxs("div",{children:[e.jsxs("button",{onClick:()=>T(t,m,v,o,N),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:d||o.auth,children:[d?i("Authorized ✔","bit-integrations"):i("Authorize","bit-integrations"),o.auth&&e.jsx(U,{size:"20",clr:"#022217",className:"ml-2"})]}),e.jsx("br",{}),e.jsxs("button",{onClick:S,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!d,children:[i("Next","bit-integrations"),e.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),e.jsx(L,{note:P})]})}const P=`
            <h4>${i("To Get Publishable Key, Secret Key & Site UUID","bit-integrations")}</h4>
            <ul>
                <li>${i("Navigate to the Bento team dashboard,.","bit-integrations")}</li>
                <li>${i('go to "Settings" and then "API Keys"',"bit-integrations")}</li>
                <li>${i("where you'll find your Publishable Key, Secret Key & Site UUID","bit-integrations")}</li>
            </ul>`;export{G as default};
