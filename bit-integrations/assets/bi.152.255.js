var R=Object.defineProperty;var j=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var N=(i,s,n)=>s in i?R(i,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[s]=n,m=(i,s)=>{for(var n in s||(s={}))w.call(s,n)&&N(i,n,s[n]);if(j)for(var n of j(s))C.call(s,n)&&N(i,n,s[n]);return i};import{r as v,f as S,j as t}from"./main-441.js";import{e as k,_ as e}from"./bi.452.0.js";import{a1 as z,y as _,a8 as $}from"./bi.141.437.js";import{d as f}from"./bi.956.862.js";import{T as y,t as U}from"./bi.292.699.js";import"./bi.663.9.js";function H({lionDeskConf:i,setLionDeskConf:s,step:n,setStep:T,setSnackbar:b,isLoading:p,setIsLoading:L,isInfo:r}){const[l,E]=v.useState(!1),[c,h]=v.useState({session_token:""}),u=S(k),{lionDesk:a}=U,I=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),i!=null&&i.default,T(2)},d=o=>{const x=m({},i),g=m({},c);g[o.target.name]="",x[o.target.name]=o.target.value,h(g),s(x)},A=`
            <h4>${e("Get the Redirect URI, Client Id and Client Secret","bit-integrations")}</h4>
            <ul>
                <li>${e("First go to your Lion Desk Developer Center Apps.","bit-integrations")}</li>
                <li>${e('Then Click "New App+" from Right in the middle',"bit-integrations")}</li>
                <li>${e('Then input the "Name and Redirect URI" then save',"bit-integrations")}</li>
                <li>${e('Then click "REVEAL CLIENT ID" and "REVEAL CLIENT SECRET", Then Copied',"bit-integrations")}</li>
            </ul>`;return t.jsxs("div",{className:"btcd-stp-page",style:{width:n===1&&900,height:n===1&&"auto"},children:[(a==null?void 0:a.youTubeLink)&&t.jsx(y,{title:"LionDesk",youTubeLink:a==null?void 0:a.youTubeLink}),(a==null?void 0:a.docLink)&&t.jsx(y,{title:"LionDesk",docLink:a==null?void 0:a.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:e("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"name",value:i.name,type:"text",placeholder:e("Integration Name...","bit-integrations"),disabled:r}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:e("Authorized Redirect URIs:","bit-integrations")})}),t.jsx(z,{value:`${u.api.base}/redirect`,setSnackbar:b,className:"field-key-cpy w-6 ml-0",readOnly:r}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:e("Client id:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"clientId",value:i.clientId,type:"text",placeholder:e("client ID...","bit-integrations"),disabled:r}),t.jsx("div",{style:{color:"red"},children:c.clientId}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:e("Client secret:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"clientSecret",value:i.clientSecret,type:"text",placeholder:e("client Secret...","bit-integrations"),disabled:r}),t.jsx("div",{style:{color:"red"},children:c.clientSecret}),t.jsxs("small",{className:"d-blk mt-3",children:[e("To get Client ID and SECRET , Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"http://developers.liondesk.com/account/apps",target:"_blank",rel:"noreferrer",children:e("Lion Desk Apps","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!r&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>f("lionDesk","lionDesk",i,s,h,E,L,b,u),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:l||p,children:[l?e("Authorized ✔","bit-integrations"):e("Authorize","bit-integrations"),p&&t.jsx(_,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:I,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!l,children:[e("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx($,{note:A})]})}export{H as default};
