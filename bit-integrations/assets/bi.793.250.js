var $=Object.defineProperty;var j=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var A=(i,a,s)=>a in i?$(i,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[a]=s,c=(i,a)=>{for(var s in a||(a={}))P.call(a,s)&&A(i,s,a[s]);if(j)for(var s of j(a))C.call(a,s)&&A(i,s,a[s]);return i};import{r as g,j as t}from"./main-692.js";import{_ as e,L as f,N as E,b as K,W as u}from"./bi.751.13.js";import{B}from"./bi.244.694.js";import{r as F}from"./bi.298.843.js";import{T as N,t as G}from"./bi.719.710.js";function H({lemlistConf:i,setLemlistConf:a,step:s,setstep:z,setSnackbar:_,isInfo:b,isLoading:l,setIsLoading:p}){const[d,v]=g.useState(!1),[h,x]=g.useState({name:"",api_key:""}),[T,w]=g.useState(!1),{lemlist:r}=G,S=()=>{const o=c({},i);if(!o.name||!o.api_key){x({name:o.name?"":e("Integration name can't be empty","bit-integrations"),api_key:o.api_key?"":e("Access Api Key can't be empty","bit-integrations")});return}p("auth");const m={api_key:o.api_key};K(m,"lemlist_authorize").then(n=>{if(n&&n.success){const k=c({},i);k.tokenDetails=n.data,a(k),v(!0),u.success(e("Authorized Successfully","bit-integrations"))}else n&&n.data&&n.data.data||!n.success&&typeof n.data=="string"?u.error(`${e("Authorization failed Cause:","bit-integrations")}${n.data.data||n.data}. ${e("please try again","bit-integrations")}`):u.error(e("Authorization failed. please try again","bit-integrations"));w(!0),p(!1)})},y=o=>{const m=c({},i),n=c({},h);n[o.target.name]="",m[o.target.name]=o.target.value,x(n),a(m)},I=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),F(i,a,p,_),z(2)},L=`
            <h4>${e("Get Api key","bit-integrations")}</h4>
            <ul>
                <li>${e("First go to your Lemlist dashboard.","bit-integrations")}</li>
                <li>${e('Click on the "Team Setting" from sidebar',"bit-integrations")}</li>
                <li>${e('Then Click "Integrations"',"bit-integrations")}</li>
                <li>${e('Then click "Api", Then click "Generate Api Key"',"bit-integrations")}</li>
            </ul>`;return t.jsxs("div",{className:"btcd-stp-page",style:{width:s===1&&900,height:s===1&&"auto"},children:[(r==null?void 0:r.youTubeLink)&&t.jsx(N,{title:"Lemlist",youTubeLink:r==null?void 0:r.youTubeLink}),(r==null?void 0:r.docLink)&&t.jsx(N,{title:"Lemlist",docLink:r==null?void 0:r.docLink}),t.jsx("div",{className:"mt-3 wdt-200",children:t.jsx("b",{children:e("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:y,name:"name",value:i.name,type:"text",placeholder:e("Integration Name...","bit-integrations"),disabled:b}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:h.name}),t.jsx("div",{className:"mt-3 wdt-250",children:t.jsx("b",{children:e("Access API Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:y,name:"api_key",value:i.api_key,type:"text",placeholder:e("Access API Key...","bit-integrations"),disabled:b}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:h.api_key}),t.jsxs("small",{className:"d-blk mt-3",children:[e("To get API key, please visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://api.lemlist.com/teams/tea_beEpCu2irsJfn3PJr/settings/integrations#api",target:"_blank",rel:"noreferrer",children:e("Lemlist API Token","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),l==="auth"&&t.jsxs("div",{className:"flx mt-5",children:[t.jsx(f,{size:25,clr:"#022217",className:"mr-2"}),e("Checking API Key!!!","bit-integrations")]}),T&&!d&&!l&&t.jsxs("div",{className:"flx mt-5",style:{color:"red"},children:[t.jsx("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),e("Sorry, Api key is invalid","bit-integrations")]}),!b&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{onClick:S,className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:d||l,children:[d?e("Authorized ✔","bit-integrations"):e("Authorize","bit-integrations"),l&&t.jsx(f,{size:20,clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:()=>I(),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!d,children:[e("Next","bit-integrations"),t.jsx(B,{className:"ml-1 rev-icn"})]})]}),t.jsx(E,{note:L})]})}export{H as default};
