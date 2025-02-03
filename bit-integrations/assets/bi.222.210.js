var T=Object.defineProperty;var j=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var A=(o,e,n)=>e in o?T(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n,d=(o,e)=>{for(var n in e||(e={}))w.call(e,n)&&A(o,n,e[n]);if(j)for(var n of j(e))P.call(e,n)&&A(o,n,e[n]);return o};import{r as k,j as t}from"./main-814.js";import{_ as i}from"./bi.317.0.js";import{z,a8 as D}from"./bi.8.440.js";import{d as E,g as F}from"./bi.453.758.js";import{T as N,t as I}from"./bi.492.709.js";import"./bi.765.9.js";function q({formID:o,freshdeskConf:e,setFreshdeskConf:n,step:m,setstep:v,isLoading:b,setIsLoading:u,setSnackbar:g,redirectLocation:S,isInfo:s}){const[r,_]=k.useState(!1),[l,h]=k.useState({api_key:""}),{freshdesk:a}=I,$=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),F(e,n,u,g),v(2)},p=c=>{const x=d({},e),y=d({},l);y[c.target.name]="",x[c.target.name]=c.target.value,h(y),n(x)},L=`
            <h4>${i("Locate Your App Domain","bit-integrations")}</h4>
            <ul>
                <li>${i("Access your Freshdesk account.","bit-integrations")}</li>
                <li>${i("Copy the URL displayed in your browser’s address bar","bit-integrations")} (e.g., https://domain.freshdesk.com/)</li>
                <li>${i("Paste the copied App Domain into the designated “App Domain” field within the integrations you’re setting up.","bit-integrations")}</li>
            </ul>
            <h4>${i("Retrieve Your App API Key","bit-integrations")}</h4>
            <ul>
                <li>${i("Within your Freshdesk account, click on your profile icon, situated in the top right corner.","bit-integrations")}</li>
                <li>${i("Select “Profile Settings” from the options that appear.","bit-integrations")}</li>
                <li>${i("Locate your App API key, prominently displayed on the top right side of the Profile Settings page.","bit-integrations")}</li>
                <li>${i("Copy this key.","bit-integrations")}</li>
                <li>${i("Paste the copied App API key into the designated “App API key” field within the integrations you’re configuring.","bit-integrations")}</li>
            </ul>`;return t.jsxs("div",{className:"btcd-stp-page",style:{width:m===1&&900,height:m===1&&"auto"},children:[(a==null?void 0:a.youTubeLink)&&t.jsx(N,{title:"Freshdesk",youTubeLink:a==null?void 0:a.youTubeLink}),(a==null?void 0:a.docLink)&&t.jsx(N,{title:"Freshdesk",docLink:a==null?void 0:a.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:p,name:"name",value:e.name,type:"text",placeholder:i("Integration Name...","bit-integrations"),disabled:s}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("Your App Domain:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:p,name:"app_domain",value:e.app_domain,type:"text",placeholder:i("App Domain...","bit-integrations"),disabled:s}),t.jsx("small",{className:"d-blk mt-2",children:`${i("App Domain Example","bit-integrations")}: https://domain.freshdesk.com`}),t.jsx("div",{style:{color:"red"},children:l.app_domain}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("App api key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:p,name:"api_key",value:e.api_key,type:"text",placeholder:i("Access Token...","bit-integrations"),disabled:s}),t.jsxs("small",{className:"d-blk mt-2",children:[i("To get access Token , Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:`${(e==null?void 0:e.app_domain)||"https://domain.freshdesk.com"}/a/profiles/72009210017/edit`,target:"_blank",rel:"noreferrer",children:i("FreshDesk Console","bit-integrations")})]}),t.jsx("div",{style:{color:"red"},children:l.api_key}),!s&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{onClick:()=>E(e,n,h,_,u,g),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:r||b,children:[r?i("Authorized ✔","bit-integrations"):i("Authorize","bit-integrations"),b&&t.jsx(z,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:$,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!r,children:[i("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(D,{note:L})]})}export{q as default};
