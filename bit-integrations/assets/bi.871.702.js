import{r,j as i}from"./main-119.js";import{c as A}from"./bi.686.0.js";import{T as C}from"./bi.301.11.js";const k=({authData:e,setAuthData:j,selectedUserId:t,setSelectedUserId:o,setIsLoading:m,isEdit:v,isInfo:h})=>{const[p,l]=r.useState(null),d=r.useRef(null),N=n=>{m(!0),A(n,"auth/account/delete").then(s=>{s.success&&(j(c=>c.filter(a=>a.id!==n)),t===n&&o(null),m(!1))}),l(null)},b=n=>{o(n)};return r.useEffect(()=>{const n=s=>{d.current&&!d.current.contains(s.target)&&l(null)};return document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}},[]),r.useEffect(()=>{h||v||(e.length===1?o(e[0].id):!t&&e.length>0&&o(e[e.length-1].id))},[e]),i.jsx("div",{className:"user-radio-input",children:i.jsx("div",{className:"auth-list",children:e.map(n=>{var s,c,a,u,f,x;return i.jsxs("div",{className:`auth-item ${t===n.id?"active":""}`,children:[i.jsxs("label",{className:"auth-label",children:[i.jsx("input",{type:"radio",name:"auth",value:n.id,checked:t===n.id,onChange:()=>b(n.id),className:"radio-input"}),i.jsxs("div",{className:"auth-info",children:[i.jsx("img",{src:(c=(s=n==null?void 0:n.userInfo)==null?void 0:s.user)==null?void 0:c.photoLink,alt:"User Avatar",className:"user-avatar"}),i.jsxs("div",{children:[i.jsx("div",{className:"user-name",children:(u=(a=n==null?void 0:n.userInfo)==null?void 0:a.user)==null?void 0:u.displayName}),i.jsx("div",{className:"user-email",children:(x=(f=n==null?void 0:n.userInfo)==null?void 0:f.user)==null?void 0:x.emailAddress})]})]})]}),!h&&i.jsx("div",{className:"delete-section",children:p===n.id?i.jsxs("div",{className:"confirmation-popover",ref:d,children:[i.jsx("p",{children:"Are you sure?"}),i.jsx("button",{className:"confirm-button",onClick:()=>N(n.id),children:"Yes"}),i.jsx("button",{className:"cancel-button",onClick:()=>l(null),children:"No"})]}):i.jsx("button",{className:"delete-button",onClick:()=>l(n.id),children:i.jsx(C,{})})})]},n.id)})})})};var L=k;export{L as A};
