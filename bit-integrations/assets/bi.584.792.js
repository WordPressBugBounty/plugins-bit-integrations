var y=Object.defineProperty;var v=Object.getOwnPropertySymbols;var o=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var h=(s,l,e)=>l in s?y(s,l,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[l]=e,x=(s,l)=>{for(var e in l||(l={}))o.call(l,e)&&h(s,e,l[e]);if(v)for(var e of v(l))_.call(l,e)&&h(s,e,l[e]);return s};import{j as t,L as f}from"./main-263.js";import{u as N,a8 as L}from"./bi.361.434.js";import{c as F,d as A,_ as u}from"./bi.924.0.js";const E=(s,l,e,m,a,c)=>{const i=x({},l),{name:g,value:j}=s.target;s.target.value!==""?i[g]=j:delete i[g],i[g]=j,S(i,e,m)},S=(s,l,e,m)=>{e(!0),F(null,"fetch_all_paid_membership_pro_level").then(a=>{if(a&&a.success){const c=x({},s);if(c.default||(c.default={}),a.data)if(c.mainAction==="2"){const i={membershipId:"any",membershipTitle:"Any membership level"};c.default.allMemberShipLevel=[i,...a.data]}else c.default.allMemberShipLevel=a.data;l(c),e(!1),A.success(u("All Paid Membership pro level fetched successfully","bit-integrations"));return}e(!1),A.error(u("Paid Membership pro level fetch failed. please try again","bit-integrations"))}).catch(()=>e(!1))};function H({formFields:s,handleInput:l,paidMembershipProConf:e,setPaidMembershipProConf:m,isLoading:a,setIsLoading:c,setSnackbar:i,allIntegURL:g,isInfo:j,edit:I}){var d;const w=(n,r)=>{const b=x({},e);r==="selectedMembership"&&(n!==""?b[r]=n:delete b[r]),m(x({},b))};return t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("b",{className:"wdt-200 d-in-b",children:u("Actions:","bit-integrations")}),t.jsxs("select",{onChange:l,name:"mainAction",value:e==null?void 0:e.mainAction,className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"",children:u("Select Actions","bit-integrations")}),(e==null?void 0:e.allActions)&&e.allActions.map(({key:n,label:r})=>t.jsx("option",{value:n,children:r},n))]}),t.jsx("br",{}),["1","2"].includes(e==null?void 0:e.mainAction)&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsxs("div",{className:"flx mt-4",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:u("Select Membership:","bit-integrations")}),t.jsx(N,{className:"w-5",defaultValue:e==null?void 0:e.selectedMembership,options:((d=e==null?void 0:e.default)==null?void 0:d.allMemberShipLevel)&&e.default.allMemberShipLevel.map(n=>({label:n.membershipTitle,value:n.membershipId.toString()})),onChange:n=>w(n,"selectedMembership"),singleSelect:!0}),t.jsx("button",{onClick:()=>S(e,m,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${u("Fetch All Membership","bit-integrations")}'`},type:"button",disabled:a,children:"↻"})]})]}),t.jsx("br",{}),t.jsx("br",{}),a&&t.jsx(f,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),t.jsx("br",{}),t.jsx(L,{note:u("This integration will only work for logged-in users.","bit-integrations")})]})}export{H as P,E as h};