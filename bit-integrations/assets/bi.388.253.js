var L=Object.defineProperty;var x=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var j=(e,s,a)=>s in e?L(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a,b=(e,s)=>{for(var a in s||(s={}))T.call(s,a)&&j(e,a,s[a]);if(x)for(var a of x(s))w.call(s,a)&&j(e,a,s[a]);return e};import{r as m,j as t}from"./main-80.js";import{_ as i,L as z,N as I}from"./bi.433.0.js";import{m as S}from"./bi.611.865.js";import{T as k,t as E}from"./bi.717.703.js";function C({moxiecrmConf:e,setMoxieCRMConf:s,step:a,setStep:y,loading:r,setLoading:N,isInfo:l}){const[o,v]=m.useState(!1),[d,p]=m.useState({api_key:"",api_url:""}),{moxiecrm:n}=E,_=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),e!=null&&e.default,y(2)},c=u=>{const h=b({},e),g=b({},d);g[u.target.name]="",h[u.target.name]=u.target.value,p(g),s(h)},A=`
  <h4>${i("Get api secret key","bit-integrations")}</h4>
  <ul>
      <li>${i("First go to your Moxie dashboard.","bit-integrations")}</li>
      <li>${i("Then click Workspace Settings from bottom left corner.","bit-integrations")}</li>
      <li>${i('Click "Connneted Apps", Then click "Integrations"',"bit-integrations")}</li>
      <li>${i('Select "Custom Integrations"',"bit-integrations")}</li>
  </ul>`;return t.jsxs("div",{className:"btcd-stp-page",style:{width:a===1&&900,height:a===1&&"auto"},children:[(n==null?void 0:n.youTubeLink)&&t.jsx(k,{title:"MoxieCRM",youTubeLink:n==null?void 0:n.youTubeLink}),(n==null?void 0:n.docLink)&&t.jsx(k,{title:"MoxieCRM",docLink:n==null?void 0:n.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"name",value:e.name,type:"text",placeholder:i("Integration Name...","bit-integrations"),disabled:l}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("Your API URL:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"api_url",value:e.api_url,type:"text",placeholder:i("Your Client...","bit-integrations"),disabled:l}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:d.api_url}),t.jsx("small",{className:"d-blk mt-3",children:i("Example: {name}.withmoxie.com","bit-integrations")}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("API Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"api_key",value:e.api_key,type:"text",placeholder:i("API Token...","bit-integrations"),disabled:l}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:d.api_key}),t.jsx("br",{}),t.jsx("br",{}),!l&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>S(e,s,p,v,r,N),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:o||r.auth,children:[o?i("Authorized ✔","bit-integrations"):i("Authorize","bit-integrations"),r.auth&&t.jsx(z,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:_,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!o,children:[i("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(I,{note:A})]})}export{C as default};
