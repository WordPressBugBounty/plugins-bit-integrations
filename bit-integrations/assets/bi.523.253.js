var K=Object.defineProperty;var k=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var N=(c,i,a)=>i in c?K(c,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):c[i]=a,o=(c,i)=>{for(var a in i||(i={}))M.call(i,a)&&N(c,a,i[a]);if(k)for(var a of k(i))P.call(i,a)&&N(c,a,i[a]);return c};import{r as g,j as t}from"./main-615.js";import{_ as e,c as E,n as x}from"./bi.394.0.js";import{B as L}from"./bi.560.697.js";import{y as _,a8 as C}from"./bi.991.437.js";import{r as B}from"./bi.820.858.js";import{T as f,t as F}from"./bi.681.699.js";import"./bi.179.9.js";function U({formID:c,mailifyConf:i,setMailifyConf:a,step:y,setstep:v,setSnackbar:z,isInfo:l,isLoading:d,setIsLoading:h}){const{mailify:s}=F,[p,w]=g.useState(!1),[m,A]=g.useState({name:"",api_key:""}),[S,T]=g.useState(!1),I=()=>{const r=o({},i);if(!r.name||!r.api_key){A({name:r.name?"":e("Integration name can't be empty","bit-integrations"),account_id:r.account_id?"":e("Access Account ID can't be empty","bit-integrations"),api_key:r.api_key?"":e("Access Api Key can't be empty","bit-integrations")});return}h("auth");const b={account_id:r.account_id,api_key:r.api_key};E(b,"mailify_authorize").then(n=>{if(n&&n.success){const j=o({},i);j.tokenDetails=n.data,a(j),w(!0),x.success(e("Authorized Successfully","bit-integrations"))}else n&&n.data&&n.data.data||!n.success&&typeof n.data=="string"?x.error(`${e("Authorization failed Cause:","bit-integrations")}${n.data.data||n.data}. ${e("please try again","bit-integrations")}`):x.error(e("Authorization failed. please try again","bit-integrations"));T(!0),h(!1)})},u=r=>{const b=o({},i),n=o({},m);n[r.target.name]="",b[r.target.name]=r.target.value,A(n),a(b)},$=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),B(i,a,h,z),v(2)},D=`
            <h4>${e("Get Account Id and Api key","bit-integrations")}</h4>
            <ul>
                <li>${e("First go to your Mailify dashboard.","bit-integrations")}</li>
                <li>${e('Click on the "Settings" from Top-Right corner dropdown',"bit-integrations")}</li>
                <li>${e('Then Click "Developers", Then click "Add an Api Key"',"bit-integrations")}</li>
            </ul>`;return t.jsxs("div",{className:"btcd-stp-page",style:{width:y===1&&900,height:y===1&&"auto"},children:[(s==null?void 0:s.youTubeLink)&&t.jsx(f,{title:"Mailify (Sarbacane)",youTubeLink:s==null?void 0:s.youTubeLink}),(s==null?void 0:s.docLink)&&t.jsx(f,{title:"Mailify (Sarbacane)",docLink:s==null?void 0:s.docLink}),t.jsx("div",{className:"mt-3 wdt-200",children:t.jsx("b",{children:e("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:u,name:"name",value:i.name,type:"text",placeholder:e("Integration Name...","bit-integrations"),disabled:l}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:m.name}),t.jsx("div",{className:"mt-3 wdt-200",children:t.jsx("b",{children:e("Access Account ID:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:u,name:"account_id",value:i.account_id,type:"text",placeholder:e("Access Account ID...","bit-integrations"),disabled:l}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:m.account_id}),t.jsx("div",{className:"mt-3 wdt-250",children:t.jsx("b",{children:e("Access API Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:u,name:"api_key",value:i.api_key,type:"text",placeholder:e("Access API Key...","bit-integrations"),disabled:l}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:m.api_key}),t.jsxs("small",{className:"d-blk mt-3",children:[e("To Get Account Id and Api Key, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://app.mailify.com/#!/p/home",target:"_blank",rel:"noreferrer",children:e("Mailify API Token","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),d==="auth"&&t.jsxs("div",{className:"flx mt-5",children:[t.jsx(_,{size:25,clr:"#022217",className:"mr-2"}),e("Checking API Key!!!","bit-integrations")]}),S&&!p&&!d&&t.jsxs("div",{className:"flx mt-5",style:{color:"red"},children:[t.jsx("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),e("Sorry, Api key is invalid","bit-integrations")]}),!l&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{onClick:I,className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:p||d,children:[p?e("Authorized ✔","bit-integrations"):e("Authorize","bit-integrations"),d&&t.jsx(_,{size:20,clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:()=>$(),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!p,children:[e("Next","bit-integrations"),t.jsx(L,{className:"ml-1 rev-icn"})]})]}),t.jsx(C,{note:D})]})}export{U as default};
