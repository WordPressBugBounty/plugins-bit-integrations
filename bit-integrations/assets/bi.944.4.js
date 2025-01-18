var k=Object.defineProperty;var u=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var p=(t,c,a)=>c in t?k(t,c,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[c]=a,r=(t,c)=>{for(var a in c||(c={}))A.call(c,a)&&p(t,a,c[a]);if(u)for(var a of u(c))O.call(c,a)&&p(t,a,c[a]);return t};import{r as o,j as s}from"./main-777.js";import{c as b,_ as i,d as m}from"./bi.157.0.js";import{r as j}from"./bi.181.14.js";import{S as h}from"./bi.468.12.js";import{S as T}from"./bi.309.13.js";function G(){const[t,c]=o.useState({}),[a,g]=o.useState([]),[y,N]=o.useState({show:!1});o.useEffect(()=>{const n=b({},"analytics/check","","GET").then(e=>{g(e.data)}),l=b({},"get/config",null,"GET").then(e=>("success"in e&&e.success&&c(e.data),e!=null&&e.success?i("Successfully fetched","bit-integrations"):"Error"));Promise.all([n,l]).catch(e=>{console.error(e)}),m.promise(l,{success:e=>e,error:i("Error Occurred","bit-integrations"),loading:i("Fetching...")})},[]);const v=n=>{const l=r({},t),e=b({data:l},"app/config").then(d=>{if("success"in d&&d.success)return i("Save successfully done","bit-integrations");delete l[n],c(r({},l))}).catch(()=>i("Failed to save","bit-integrations"));m.promise(e,{success:d=>d,error:i("Error Occurred","bit-integrations"),loading:i("Updating...")})},w=n=>{b({isChecked:n},"analytics/optIn").then(l=>{m.success(i("Opt-in status updated","bit-integrations"))}).catch(()=>{m.error(i("Failed to save","bit-integrations"))})},x=j.useAsyncDebounce(v,500),S=j.useAsyncDebounce(w,500),f=({target:{name:n,checked:l}})=>{const e=r({},t);l?e[n]=!0:delete e[n],c(e),x(n)},_=({target:{name:n,value:l}})=>{const e=r({},t);l?e[n]=l:delete e[n],c(e),x(n)},E=()=>{const n=!a;g(n),S(n)};return s.jsxs("div",{className:"btcd-f-settings",children:[s.jsx(T,{snack:y,setSnackbar:N}),s.jsxs("div",{id:"btcd-settings-wrp",className:"btcd-s-wrp",children:[s.jsxs("div",{className:"w-6 mt-3",children:[s.jsxs("div",{className:"flx flx-between sh-sm br-10 btcd-setting-opt",children:[s.jsx("div",{children:s.jsxs("b",{children:[s.jsx("span",{className:"btcd-icn  icn-trash-fill mr-2"}),i("Erase all data of this plugin in deletion","bit-integrations")]})}),s.jsx(h,{action:f,name:"erase_db",checked:t==null?void 0:t.erase_db,className:"flx"})]}),s.jsx("br",{})]}),s.jsxs("div",{className:"w-6 mt-3",children:[s.jsxs("div",{className:"flx flx-between sh-sm br-10 btcd-setting-opt",children:[s.jsxs("div",{className:"flx flx-start",children:[s.jsx("span",{className:"btcd-icn  icn-trash-fill mr-2"}),s.jsxs("div",{children:[s.jsx("b",{children:i("Opt In Telemetry Data","bit-integrations")}),s.jsx("br",{}),s.jsx("small",{children:i("If you turn off, Bit Integrations will no longer collect any telemetry data","bit-integrations")})]})]}),s.jsx(h,{action:E,name:"erase_db",checked:a,className:"flx"})]}),s.jsx("br",{})]}),s.jsx("div",{className:"w-6 mt-3",children:s.jsxs("div",{className:"flx flx-between sh-sm br-10 btcd-setting-opt",children:[s.jsx("div",{className:"",children:s.jsxs("b",{children:[s.jsx("span",{className:"btcd-icn icn-trash-fill mr-2"}),i("Specify after how many days  old log will be deleted","bit-integrations")]})}),s.jsxs("div",{className:"flx",children:[s.jsx("input",{onChange:_,name:"day",value:t==null?void 0:t.day,disabled:!t.enable_log_del,className:"btcd-paper-inp mr-2 wdt-100",placeholder:"Day",type:"number",min:"1"}),s.jsx(h,{action:f,name:"enable_log_del",checked:t==null?void 0:t.enable_log_del,className:"flx"})]})]})}),s.jsx("div",{className:"mb-50"})]})]})}export{G as default};
