import{r as a,j as t}from"./main-34.js";import{B as N}from"./bi.886.697.js";import{_ as i,s as k,c as y}from"./bi.671.0.js";import{z as L,y as v}from"./bi.188.437.js";import{T as u,t as z}from"./bi.379.699.js";import"./bi.914.9.js";function B({formID:I,wcConf:o,setWcConf:d,step:r,setStep:h,setSnackbar:p}){const[n,b]=a.useState(!1),[c,l]=a.useState(!1),[g,x]=a.useState(!1),{wooCommerce:s}=z,f=()=>{l("auth"),y({},"wc_authorize").then(e=>{e!=null&&e.success&&(b(!0),p({show:!0,msg:i("Connected with WooCommerce Successfully","bit-integrations")})),l(!1),x(!0)})},j=e=>{const m=v(o);m[e.target.name]=e.target.value,d(m)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:r===1&&900,height:r===1&&"auto"},children:[(s==null?void 0:s.youTubeLink)&&t.jsx(u,{title:"WooCommerce",youTubeLink:s==null?void 0:s.youTubeLink}),(s==null?void 0:s.docLink)&&t.jsx(u,{title:"WooCommerce",docLink:s==null?void 0:s.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:j,name:"name",value:o.name,type:"text",placeholder:i("Integration Name...","bit-integrations")}),c==="auth"&&t.jsxs("div",{className:"flx mt-5",children:[t.jsx(L,{size:25,clr:"#022217",className:"mr-2"}),"Checking if WooCommerce is active!!!"]}),g&&!n&&!c&&t.jsxs("div",{className:"flx mt-5",style:{color:"red"},children:[t.jsx("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),k(i("%s plugin must be activated to integrate with Bit Integrations","bit-integrations"),"WooCommerce")]}),!n&&t.jsx("button",{onClick:f,className:"btn btcd-btn-lg purple sh-sm flx mt-5",type:"button",children:i("Connect","bit-integrations")}),n&&t.jsxs("button",{onClick:()=>h(2),className:"btn btcd-btn-lg purple sh-sm flx mt-5",type:"button",disabled:!n,children:[i("Next","bit-integrations"),t.jsx(N,{className:"ml-1 rev-icn"})]})]})}export{B as default};
