var y=Object.defineProperty;var v=Object.getOwnPropertySymbols;var o=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var h=(s,l,e)=>l in s?y(s,l,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[l]=e,r=(s,l)=>{for(var e in l||(l={}))o.call(l,e)&&h(s,e,l[e]);if(v)for(var e of v(l))_.call(l,e)&&h(s,e,l[e]);return s};import{j as t,L as f}from"./main-404.js";import{x as N,a8 as L}from"./bi.613.437.js";import{c as F,d as A,_ as u}from"./bi.51.0.js";const E=(s,l,e,x,n,c)=>{const i=r({},l),{name:g,value:j}=s.target;s.target.value!==""?i[g]=j:delete i[g],i[g]=j,S(i,e,x)},S=(s,l,e,x)=>{e(!0),F(null,"fetch_all_paid_membership_pro_level").then(n=>{if(n&&n.success){const c=r({},s);if(c.default||(c.default={}),n.data)if(c.mainAction==="2"){const i={membershipId:"any",membershipTitle:"Any membership level"};c.default.allMemberShipLevel=[i,...n.data]}else c.default.allMemberShipLevel=n.data;l(c),e(!1),A.success(u("All Paid Membership pro level fetched successfully","bit-integrations"));return}e(!1),A.error(u("Paid Membership pro level fetch failed. please try again","bit-integrations"))}).catch(()=>e(!1))};function H({formFields:s,handleInput:l,paidMembershipProConf:e,setPaidMembershipProConf:x,isLoading:n,setIsLoading:c,setSnackbar:i,allIntegURL:g,isInfo:j,edit:I}){var d;const w=(a,m)=>{const b=r({},e);m==="selectedMembership"&&(a!==""?b[m]=a:delete b[m]),x(r({},b))};return t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("b",{className:"wdt-200 d-in-b",children:u("Actions:","bit-integrations")}),t.jsxs("select",{onChange:l,name:"mainAction",value:e==null?void 0:e.mainAction,className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"",children:u("Select Actions","bit-integrations")}),(e==null?void 0:e.allActions)&&e.allActions.map(({key:a,label:m})=>t.jsx("option",{value:a,children:m},a))]}),t.jsx("br",{}),["1","2"].includes(e==null?void 0:e.mainAction)&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsxs("div",{className:"flx mt-4",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:u("Select Membership:","bit-integrations")}),t.jsx(N,{className:"w-5",defaultValue:e==null?void 0:e.selectedMembership,options:((d=e==null?void 0:e.default)==null?void 0:d.allMemberShipLevel)&&e.default.allMemberShipLevel.map(a=>({label:a.membershipTitle,value:a.membershipId.toString()})),onChange:a=>w(a,"selectedMembership"),singleSelect:!0}),t.jsx("button",{onClick:()=>S(e,x,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${u("Fetch All Membership","bit-integrations")}'`},type:"button",disabled:n,children:"↻"})]})]}),t.jsx("br",{}),t.jsx("br",{}),n&&t.jsx(f,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),t.jsx("br",{}),t.jsx(L,{note:u("This integration will only work for logged-in users.","bit-integrations")})]})}export{H as P,E as h};
