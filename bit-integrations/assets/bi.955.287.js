import{r as u,j as t}from"./main-270.js";import{_ as e}from"./bi.340.0.js";import{z as A,a9 as w,u as x}from"./bi.88.440.js";import{s as L}from"./bi.872.947.js";import{T as k,t as P}from"./bi.104.742.js";import"./bi.724.9.js";function E({smartSuiteConf:s,setSmartSuiteConf:d,step:p,setStep:g,loading:a,setLoading:j,isInfo:n}){const[o,T]=u.useState(!1),{smartSuite:i}=P,[b,h]=u.useState({workspaceId:"",apiToken:""}),I=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),s!=null&&s.default,g(2)},r=N=>{const{name:m,value:v}=N.target;h(l=>x(l,c=>{c[m]=""})),d(l=>x(l,c=>{c[m]=v}))},y=`
            <h4>${e("To Get Workspace ID & API Token","bit-integrations")}</h4>
            <ul>
                <li>${e("First go to your SmartSuite dashboard.","bit-integrations")}</li>
                <li>${e("Click go to Profile Icon from Right Top corner.","bit-integrations")}</li>
                <li>${e('Then Click "API Key" from the "My Profile Menu".',"bit-integrations")}</li>
                <li>${e('Then Click and Copy the "Hidden Api Token".',"bit-integrations")}</li>
                <li>${e("Your Workspace Id is the 8 characters that follow https://app.smartsuite.com/ in the SmartSuite URL when you’re logged in.","bit-integrations")}</li>

            </ul>`;return t.jsxs("div",{className:"btcd-stp-page",style:{width:p===1&&900,height:p===1&&"auto"},children:[(i==null?void 0:i.youTubeLink)&&t.jsx(k,{title:"SmartSuite",youTubeLink:i==null?void 0:i.youTubeLink}),(i==null?void 0:i.docLink)&&t.jsx(k,{title:"SmartSuite",docLink:i==null?void 0:i.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:e("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:r,name:"name",value:s.name,type:"text",placeholder:e("Integration Name...","bit-integrations"),disabled:n}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:e("Workspace ID:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:r,name:"workspaceId",value:s.workspaceId,type:"text",placeholder:e("Workspace ID...","bit-integrations"),disabled:n}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:b.workspaceId}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:e("API Token:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:r,name:"apiToken",value:s.apiToken,type:"text",placeholder:e("API Token...","bit-integrations"),disabled:n}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:b.apiToken}),t.jsxs("small",{className:"d-blk mt-3",children:[e("To Get API Token & Workspace ID, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://app.smartsuite.com/",target:"_blank",children:e("SmartSuite API Token & Workspace ID","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!n&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>L(s,d,h,T,a,j),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:o||a.auth,children:[o?e("Authorized ✔","bit-integrations"):e("Authorize","bit-integrations"),a.auth&&t.jsx(A,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:I,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!o,children:[e("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(w,{note:y})]})}export{E as default};
