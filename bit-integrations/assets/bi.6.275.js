var S=Object.defineProperty;var k=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var _=(r,i,s)=>i in r?S(r,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[i]=s,b=(r,i)=>{for(var s in i||(i={}))z.call(i,s)&&_(r,s,i[s]);if(k)for(var s of k(i))E.call(i,s)&&_(r,s,i[s]);return r};import{r as h,j as t}from"./main-270.js";import{B as L}from"./bi.448.736.js";import{_ as e,c as Z}from"./bi.340.0.js";import{z as f,a9 as $}from"./bi.88.440.js";import{a as B}from"./bi.522.925.js";import{T as A,t as C}from"./bi.104.742.js";import"./bi.724.9.js";function O({formID:r,zagoMailConf:i,setZagoMailConf:s,step:x,setstep:N,setSnackbar:y,isInfo:u,isLoading:l,setIsLoading:p}){const{zagoMail:n}=C,[o,P]=h.useState(!1),[d,g]=h.useState({name:"",api_public_key:""}),[v,I]=h.useState(!1),w=()=>{const a=b({},i);if(!a.name||!a.api_public_key){g({name:a.name?"":e("Integration name can't be empty","bit-integrations"),api_public_key:a.api_public_key?"":e("API Public Key can't be empty","bit-integrations")});return}p("auth");const m={api_public_key:a.api_public_key};Z(m,"zagoMail_authorize").then(c=>{c!=null&&c.success&&(P(!0),y({show:!0,msg:e("Authorized Successfully","bit-integrations")})),I(!0),p(!1)})},j=a=>{const m=b({},i),c=b({},d);c[a.target.name]="",m[a.target.name]=a.target.value,g(c),s(m)},K=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),B(i,s,p,y),N(2)},T=`
            <h4>${e("Get API Public Key","bit-integrations")}</h4>
            <ul>
                <li>${e("First go to your ZagoMail dashboard.","bit-integrations")}</li>
                <li>${e("Click on the top top right corner","bit-integrations")}</li>
                <li>${e("Then click on API","bit-integrations")}</li>
            </ul>`;return t.jsxs("div",{className:"btcd-stp-page",style:{width:x===1&&900,height:x===1&&"auto"},children:[(n==null?void 0:n.youTubeLink)&&t.jsx(A,{title:"Zago Mail",youTubeLink:n==null?void 0:n.youTubeLink}),(n==null?void 0:n.docLink)&&t.jsx(A,{title:"Zago Mail",docLink:n==null?void 0:n.docLink}),t.jsx("div",{className:"mt-3 wdt-200",children:t.jsx("b",{children:e("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:j,name:"name",value:i.name,type:"text",placeholder:e("Integration Name...","bit-integrations"),disabled:u}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:d.name}),t.jsx("div",{className:"mt-3 wdt-200",children:t.jsx("b",{children:e("Access API Public Key Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:j,name:"api_public_key",value:i.api_public_key,type:"text",placeholder:e("Access API Public Key Key...","bit-integrations"),disabled:u}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:d.api_public_key}),t.jsxs("small",{className:"d-blk mt-3",children:[e("To Get API Public Key Key, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://app.zagomail.com/user/api-keys/index",target:"_blank",rel:"noreferrer",children:e("ZagoMail API Token","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),l==="auth"&&t.jsxs("div",{className:"flx mt-5",children:[t.jsx(f,{size:25,clr:"#022217",className:"mr-2"}),e("Checking API Public Key Key!!!","bit-integrations")]}),v&&!o&&!l&&t.jsxs("div",{className:"flx mt-5",style:{color:"red"},children:[t.jsx("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),e("Sorry, API Public Key key is invalid","bit-integrations")]}),!u&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{onClick:w,className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:o||l,children:[o?e("Authorized ✔","bit-integrations"):e("Authorize","bit-integrations"),l&&t.jsx(f,{size:20,clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:()=>K(),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!o,children:[e("Next","bit-integrations"),t.jsx(L,{className:"ml-1 rev-icn"})]})]}),t.jsx($,{note:T})]})}export{O as default};
