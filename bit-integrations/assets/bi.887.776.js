var W=Object.defineProperty;var w=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var M=(e,i,a)=>i in e?W(e,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[i]=a,h=(e,i)=>{for(var a in i||(i={}))$.call(i,a)&&M(e,a,i[a]);if(w)for(var a of w(i))A.call(i,a)&&M(e,a,i[a]);return e};import{f as V,r as j,j as t,L as E}from"./main-246.js";import{c as L,d as I,_ as s}from"./bi.560.0.js";import{x as O,u as f}from"./bi.675.443.js";import{S as z}from"./bi.222.13.js";import{T as B,b as _}from"./bi.975.11.js";import{a as G}from"./bi.545.3.js";import{T as D}from"./bi.300.720.js";import{a as H}from"./bi.947.9.js";const v=(e,i,a,m)=>{const n=h({},a);n[e].splice(i,0,{}),m(h({},n))},K=(e,i,a,m)=>{const n=h({},a);n[e].length>1&&n[e].splice(i,1),m(h({},n))},y=(e,i,a,m,n)=>{const d=h({},m);d[e][a][i.target.name]=i.target.value,n(d)},ae=e=>{var a;return!((e?(a=e==null?void 0:e.user_map)==null?void 0:a.filter(m=>!m.formField&&m.required):[]).length>0)},R=(e,i)=>{e(!0),L({},"role/list",null,"GET").then(a=>{a!=null&&a.success&&a!==void 0?(e(!1),i(Object.values(a==null?void 0:a.data))):e(!1)})};function S({i:e,type:i,formFields:a,field:m,userConf:n,setUserConf:d,customFields:r,setSnackbar:x}){var k;const p={user:{propName:"user_map",fldName:"userField"},meta:{propName:"meta_map",fldName:"metaField"}},{propName:b,fldName:u}=p[i],c=V(I),{isPro:g}=c,o=j.useMemo(()=>r.filter(l=>l.required),[r]),q=j.useMemo(()=>r.filter(l=>!l.required),[r]),T=(l,N,U,P)=>{const F=h({},U);F[b][N].customValue=l,P(h({},F))};return t.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:m.formField||"",onChange:l=>y(b,l,e,n,d),children:[t.jsx("option",{value:"",children:s("Select Field","bit-integrations")}),t.jsx("optgroup",{label:s("Form Fields","bit-integrations"),children:a==null?void 0:a.map(l=>l.type!=="file"&&t.jsx("option",{value:l.name,children:l.label},`ff-zhcrm-${l==null?void 0:l.name}`))}),t.jsx("option",{value:"custom",children:s("Custom...","bit-integrations")}),t.jsx("optgroup",{label:`${s("General Smart Codes","bit-integrations")} ${g?"":`(${s("Pro","bit-integrations")})`}`,children:g&&((k=G)==null?void 0:k.map(l=>t.jsx("option",{value:l.name,children:l.label},`ff-zhcrm-${l.name}`)))})]}),m.formField==="custom"&&t.jsx(D,{onChange:l=>T(l,e,n,d),label:s("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:m.customValue||"",placeholder:s("Custom Value","bit-integrations"),formFields:a}),i!=="meta"?t.jsxs("select",{className:"btcd-paper-inp",name:u,value:m[u]||"",onChange:l=>y(b,l,e,n,d),disabled:e<o.length,children:[t.jsx("option",{children:s("Select Field","bit-integrations")}),e<o.length?t.jsx("option",{value:o[e].key,children:o[e].name},`${o[e].key}-1`):q.map(({key:l,name:N})=>t.jsx("option",{value:l,children:N},l))]}):t.jsx("input",{className:"btcd-paper-inp",name:u,value:m[u]||"",onChange:l=>y(b,l,e,n,d),type:"text"})]}),e>=o.length&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>v(b,e,n,d),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),t.jsx("button",{onClick:()=>K(b,e,n,d),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:t.jsx(B,{})})]})]})}function se({formFields:e,userConf:i,setUserConf:a,roles:m,userFields:n}){var x;const[d,r]=j.useState({show:!1});return t.jsxs(t.Fragment,{children:[t.jsx(z,{snack:d,setSnackbar:r}),t.jsx("div",{children:t.jsxs("div",{children:[t.jsxs("div",{children:[t.jsx("div",{className:"mt-3 mb-1",children:t.jsx("b",{children:s("Field Mappping","bit-integrations")})}),t.jsx("div",{className:"btcd-hr"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:s("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:s("User Fields","bit-integrations")})})]})]}),(x=i==null?void 0:i.user_map)==null?void 0:x.map((p,b)=>t.jsx(S,{i:b,type:"user",field:p,formFields:e,userConf:i,setUserConf:a,customFields:n,setSnackbar:r},`analytics-m-${b+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>{var p;return v("user_map",(p=i==null?void 0:i.user_map)==null?void 0:p.length,i,a)},className:"icn-btn sh-sm",type:"button",children:"+"})})]})})]})}function le({formFields:e,userConf:i,setUserConf:a}){var d;const[m,n]=j.useState([]);return t.jsxs("div",{children:[t.jsxs("div",{children:[t.jsx("div",{className:"mt-3 mb-1",children:t.jsx("b",{children:s("User Meta Field Mappping","bit-integrations")})}),t.jsx("div",{className:"btcd-hr"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:s("Meta Value","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:s("Meta Key","bit-integrations")})})]})]}),(d=i==null?void 0:i.meta_map)==null?void 0:d.map((r,x)=>t.jsx(S,{i:x,type:"meta",field:r,formFields:e,userConf:i,setUserConf:a,customFields:m,fieldType:"meta"},`analytics-m-${x+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>{var r;return v("meta_map",(r=i==null?void 0:i.meta_map)==null?void 0:r.length,i,a)},className:"icn-btn sh-sm",type:"button",children:"+"})})]})}const ne=[{key:"user_email",name:s("Email","bit-integrations"),required:!0},{key:"user_login",name:s("Username","bit-integrations"),required:!1},{key:"nickname",name:s("Nickname","bit-integrations"),required:!1},{key:"display_name",name:s("Display Name","bit-integrations"),required:!1},{key:"first_name",name:s("First Name","bit-integrations"),required:!1},{key:"last_name",name:s("Last Name","bit-integrations"),required:!1},{key:"user_pass",name:s("Password","bit-integrations"),required:!1},{key:"user_url",name:s("Website","bit-integrations"),required:!1},{key:"description",name:s("Biographical Info","bit-integrations"),required:!1}];function ce({userConf:e,setUserConf:i}){const[a,m]=j.useState({show:!1,action:()=>{}}),[n,d]=j.useState(),[r,x]=j.useState(!1),p=(c,g)=>{const o=h({},e);g==="user_role"?(n||R(x,d),m({show:"user_role"})):c.target.checked?o[g]=!0:delete o[g],i(h({},o))},b=c=>{i(g=>f(g,o=>{c?o.user_role=c:delete o.user_role}))},u=()=>{m({show:!1})};return t.jsxs("div",{className:"pos-rel d-flx w-8",children:[(e==null?void 0:e.action_type)!=="updated_user"&&t.jsxs(t.Fragment,{children:[t.jsx(_,{checked:(e==null?void 0:e.user_notify)||!1,onChange:c=>p(c,"user_notify"),className:"wdt-200 mt-4 mr-2",value:"user_notify",title:s("User Email Notification","bit-integrations"),subTitle:s("When this option is enabled, a welcome email will be sent from WordPress after registration.","bit-integrations")}),t.jsx(_,{checked:(e==null?void 0:e.admin_notify)||!1,onChange:c=>p(c,"admin_notify"),className:"wdt-200 mt-4 mr-2",value:"admin_notify",title:s("Admin Email Notification","bit-integrations"),subTitle:s("If this option is enabled, e-mail will be sent from WordPress to admin.","bit-integrations")}),t.jsx(_,{checked:(e==null?void 0:e.auto_login)||!1,onChange:c=>p(c,"auto_login"),className:"wdt-200 mt-4 mr-2",value:"auto_login",title:s("Auto Login After Registration","bit-integrations"),subTitle:s("if checked Auto Login, the user login automatically after registration.","bit-integrations")})]}),t.jsx(_,{checked:(e==null?void 0:e.user_role)||!1,onChange:c=>p(c,"user_role"),className:"wdt-200 mt-4 mr-2",value:"user_role",title:(e==null?void 0:e.action_type)!=="updated_user"?s("Add WP User Role","bit-integrations"):s("Update WP User Role","bit-integrations"),subTitle:(e==null?void 0:e.action_type)!=="updated_user"?s("Add WP User Role","bit-integrations"):s("Update WP User Role","bit-integrations")}),t.jsxs(H,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:s("Ok","bit-integrations"),show:a.show==="user_role",close:u,action:u,title:(e==null?void 0:e.action_type)!=="updated_user"?s("WP User Role","bit-integrations"):s("Update WP User Role","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:s("Select User Role","bit-integrations")}),r?t.jsx(E,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsx(t.Fragment,{children:t.jsxs("div",{className:"flx mt-2",children:[t.jsx(O,{options:n==null?void 0:n.map(c=>({label:c==null?void 0:c.name,value:c==null?void 0:c.key})),className:"msl-wrp-options",defaultValue:e==null?void 0:e.user_role,onChange:c=>b(c),singleSelect:!0,closeOnSelect:!0}),t.jsx("button",{onClick:()=>R(x,d),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${s("Refresh Roles","bit-integrations")}'`},type:"button",children:"↻"})]})})]})]})}export{le as C,ce as R,se as U,ae as c,ne as u};
