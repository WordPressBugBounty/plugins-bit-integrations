var T=Object.defineProperty;var x=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var j=(i,s,n)=>s in i?T(i,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[s]=n,b=(i,s)=>{for(var n in s||(s={}))z.call(s,n)&&j(i,n,s[n]);if(x)for(var n of x(s))L.call(s,n)&&j(i,n,s[n]);return i};import{r as k,j as t}from"./main-34.js";import{_ as e}from"./bi.671.0.js";import{z as w,a8 as E}from"./bi.188.437.js";import{g as v}from"./bi.495.870.js";import{T as y,t as G}from"./bi.379.699.js";import"./bi.914.9.js";function F({gravitecConf:i,setGravitecConf:s,step:n,setStep:g,loading:p,setLoading:N,isInfo:r}){const[c,S]=k.useState(!1),[l,m]=k.useState({site_url:"",app_key:"",app_secret:""}),{gravitec:a}=G,A=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),i!=null&&i.default,g(2)},o=d=>{const u=b({},i),h=b({},l);h[d.target.name]="",u[d.target.name]=d.target.value,m(h),s(u)},_=`
            <h4>${e("To Get App key & App Secret","bit-integrations")}</h4>
            <ul>
                <li>${e("First go to your Gravitec dashboard.","bit-integrations")}</li>
                <li>${e('Click go to your "YOUR SITES" from left SideBar',"bit-integrations")}</li>
                <li>${e('Then click "Settings"',"bit-integrations")}</li>
                <li>${e('Then Click "REST API"',"bit-integrations")}</li>
            </ul>`;return t.jsxs("div",{className:"btcd-stp-page",style:{width:n===1&&900,height:n===1&&"auto"},children:[(a==null?void 0:a.youTubeLink)&&t.jsx(y,{title:"Gravitec",youTubeLink:a==null?void 0:a.youTubeLink}),(a==null?void 0:a.docLink)&&t.jsx(y,{title:"Gravitec",docLink:a==null?void 0:a.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:e("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"name",value:i.name,type:"text",placeholder:e("Integration Name...","bit-integrations"),disabled:r}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:e("Site Url:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"site_url",value:i.site_url,type:"text",placeholder:e("Site Url...","bit-integrations"),disabled:r}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:l.site_url}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:e("App key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"app_key",value:i.app_key,type:"text",placeholder:e("App key...","bit-integrations"),disabled:r}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:l.app_key}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:e("App Secret:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"app_secret",value:i.app_secret,type:"text",placeholder:e("App Secret...","bit-integrations"),disabled:r}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:l.app_secret}),t.jsxs("small",{className:"d-blk mt-3",children:[e("To Get App key & App Secret, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://push.gravitec.net/push/1767754253528465408/settings/api",target:"_blank",children:e("Gravitec App key & Secret","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!r&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>v(i,s,m,S,p,N),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:c||p.auth,children:[c?e("Authorized ✔","bit-integrations"):e("Authorize","bit-integrations"),p.auth&&t.jsx(w,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:A,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!c,children:[e("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(E,{note:_})]})}export{F as default};
