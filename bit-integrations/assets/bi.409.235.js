var P=Object.defineProperty;var f=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var A=(n,s,i)=>s in n?P(n,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[s]=i,d=(n,s)=>{for(var i in s||(s={}))C.call(s,i)&&A(n,i,s[i]);if(f)for(var i of f(s))E.call(s,i)&&A(n,i,s[i]);return n};import{r as u,j as t}from"./main-777.js";import{B as F}from"./bi.361.707.js";import{_ as e,c as L}from"./bi.157.0.js";import{z as k,a8 as B}from"./bi.463.440.js";import{r as $}from"./bi.736.832.js";import{T as N,t as G}from"./bi.805.709.js";import"./bi.681.9.js";function O({formID:n,convertKitConf:s,setConvertKitConf:i,step:x,setstep:S,setSnackbar:g,isInfo:p,isLoading:o,setIsLoading:h}){const{convertKit:a}=G,[l,_]=u.useState(!1),[b,j]=u.useState({name:"",api_secret:""}),[z,v]=u.useState(!1),w=()=>{const r=d({},s);if(!r.name||!r.api_secret){j({name:r.name?"":e("Integration name can't be empty","bit-integrations"),api_secret:r.api_secret?"":e("Access API Secret Key can't be empty","bit-integrations")});return}h("auth");const m={api_secret:r.api_secret};L(m,"convertKit_authorize").then(c=>{c!=null&&c.success&&(_(!0),g({show:!0,msg:e("Authorized Successfully","bit-integrations")})),v(!0),h(!1)})},y=r=>{const m=d({},s),c=d({},b);c[r.target.name]="",m[r.target.name]=r.target.value,j(c),i(m)},I=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),$(s,i,h,g),S(2)},T=`
            <h4>${e("Get api secret key","bit-integrations")}</h4>
            <ul>
                <li>${sprintf(e("First go to your %s dashboard.","bit-integrations"),"Kit(ConvertKit)")}</li>
                <li>${e('Click "Settings", Then click "Advanced"',"bit-integrations")}</li>
            </ul>`;return t.jsxs("div",{className:"btcd-stp-page",style:{width:x===1&&900,height:x===1&&"auto"},children:[(a==null?void 0:a.youTubeLink)&&t.jsx(N,{title:"ConvertKit",youTubeLink:a==null?void 0:a.youTubeLink}),(a==null?void 0:a.docLink)&&t.jsx(N,{title:"ConvertKit",docLink:a==null?void 0:a.docLink}),t.jsx("div",{className:"mt-3 wdt-200",children:t.jsx("b",{children:e("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:y,name:"name",value:s.name,type:"text",placeholder:e("Integration Name...","bit-integrations"),disabled:p}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:b.name}),t.jsx("div",{className:"mt-3 wdt-200",children:t.jsx("b",{children:e("Access API Secret Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:y,name:"api_secret",value:s.api_secret,type:"text",placeholder:e("Access API Secret Key...","bit-integrations"),disabled:p}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:b.api_secret}),t.jsxs("small",{className:"d-blk mt-3",children:[e("To Get API Secret Key, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://app.convertkit.com/account_settings/advanced_settings",target:"_blank",rel:"noreferrer",children:sprintf(e("%s API Token","bit-integrations"),"Kit(ConvertKit)")})]}),t.jsx("br",{}),t.jsx("br",{}),o==="auth"&&t.jsxs("div",{className:"flx mt-5",children:[t.jsx(k,{size:25,clr:"#022217",className:"mr-2"}),e("Checking API Secret Key","bit-integrations"),"!!!"]}),z&&!l&&!o&&t.jsxs("div",{className:"flx mt-5",style:{color:"red"},children:[t.jsx("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),e("Sorry, API Secret key is invalid","bit-integrations")]}),!p&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{onClick:w,className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:l||o,children:[l?e("Authorized ✔","bit-integrations"):e("Authorize","bit-integrations"),o&&t.jsx(k,{size:20,clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:()=>I(),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!l,children:[e("Next","bit-integrations"),t.jsx(F,{className:"ml-1 rev-icn"})]})]}),t.jsx(B,{note:T})]})}export{O as default};
