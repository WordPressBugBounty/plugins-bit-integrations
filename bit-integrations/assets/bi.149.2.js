var P=Object.defineProperty;var E=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var v=(i,n,c)=>n in i?P(i,n,{enumerable:!0,configurable:!0,writable:!0,value:c}):i[n]=c,p=(i,n)=>{for(var c in n||(n={}))V.call(n,c)&&v(i,c,n[c]);if(E)for(var c of E(n))Z.call(n,c)&&v(i,c,n[c]);return i};import{j as t,r as u,l as y,_ as q,e as L,L as G}from"./main-288.js";import{_ as s,u as J,$ as K,b as Q,c as j,d as w}from"./bi.4.0.js";import{C as U,a as X}from"./bi.627.9.js";import{E as Y}from"./bi.179.10.js";import{T as tt,a as et}from"./bi.147.11.js";import{S as M}from"./bi.544.12.js";import{S as st}from"./bi.470.13.js";import"./bi.223.14.js";function nt({size:i=30,stroke:n=2}){return t.jsxs("svg",{width:i,height:i,viewBox:"0 0 30 30",children:[t.jsx("ellipse",{className:"svg-icn",strokeWidth:n,strokeMiterlimit:"10",cx:"15",cy:"15",rx:"11",ry:"11.09"}),t.jsx("ellipse",{className:"svg-icn",strokeWidth:2,strokeMiterlimit:"10",cx:"15",cy:"11",rx:"1",ry:"1"}),t.jsx("line",{className:"svg-icn",strokeWidth:n-.5,strokeLinecap:"round",strokeLinejoin:"round",x1:"15",y1:"18",x2:"15",y2:"21.72"})]})}function it({size:i}){return t.jsxs("svg",{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 215 215",children:[t.jsx("rect",{className:"cls-1",fill:"none",strokeWidth:"16",stroke:"currentColor",strokeMiterlimit:"10",x:"19.91",y:"20.9",width:"174",height:"174",rx:"85"}),t.jsx("path",{fill:"currentColor",className:"cls-2",stroke:"currentColor",strokeMiterlimit:"10",strokeWidth:"4",d:"M138.3,151.06,99.23,113.52a6,6,0,0,1-1.85-4.34V56.47a6,6,0,0,1,6-6h0a6,6,0,0,1,6,6v47.59a6,6,0,0,0,1.85,4.33l35.37,34a6,6,0,0,1,.17,8.51h0A6,6,0,0,1,138.3,151.06Z"})]})}function ot(i){const n=u.useRef(null),c=u.useRef(null),[b,d]=u.useState(!1),g=x=>{b&&n.current&&!n.current.contains(x.target)&&!c.current.contains(x.target)&&d(!1)};u.useEffect(()=>(c.current.parentNode.parentNode.parentNode.style.zIndex=b?"10":"auto",b?document.addEventListener("click",g):document.removeEventListener("click",g),()=>{document.removeEventListener("click",g)}),[b]);const k=b?`${n.current.clientHeight}px`:"auto";return t.jsxs("div",{className:"btcd-menu",children:[t.jsx("button",{ref:c,className:"btcd-menu-btn btcd-mnu sh-sm",onClick:()=>d(x=>!x),"aria-label":"toggle menu",type:"button"}),t.jsxs("div",{ref:n,className:`btcd-menu-list ${b?"btcd-m-a":""}`,style:{height:k},children:[t.jsxs(y,{to:`/flow/action/info/${i.id}/${i.name}`,type:"button",className:"flx","aria-label":"actions",children:[t.jsx(nt,{size:16})," ",s("Info","bit-integrations")]}),t.jsxs(y,{to:`/flow/action/log/${i.id}/${i.name}`,type:"button",className:"flx","aria-label":"actions",children:[t.jsx(it,{size:16})," ",s("Timeline","bit-integrations")]}),t.jsxs(y,{to:`/flow/action/edit/${i.id}`,type:"button",className:"flx","aria-label":"actions",children:[t.jsx(Y,{size:16})," ",s("Edit","bit-integrations")]}),i.isValidUser&&t.jsxs("button",{type:"button","aria-label":"actions",className:"flx",onClick:i.dup,children:[t.jsx(U,{size:16})," ",s("Clone","bit-integrations")]}),t.jsxs("button",{type:"button","aria-label":"actions",className:"flx",onClick:i.del,children:[t.jsx(tt,{size:16})," ",s("Delete","bit-integrations")]})]})]})}const at=u.lazy(()=>q(()=>import("./bi.550.8.js"),["./bi.550.8.js","./main-288.js","./bi.4.0.js","./App.css.901.922.css"],import.meta.url));function rt({isValidUser:i}){var T;const{data:n,isLoading:c,mutate:b}=J({payload:{},action:"flow/list",method:"get"}),[d,g]=u.useState(!c&&n.success&&((T=n==null?void 0:n.data)!=null&&T.integrations)?n.data.integrations:[]),[k,x]=u.useState({show:!1}),[o,C]=u.useState({show:!1,btnTxt:""}),[ct,D]=L(K),[lt,W]=L(Q);u.useEffect(()=>{W(1),D({})},[]);const[N,_]=u.useState([{width:250,minWidth:80,Header:s("Trigger","bit-integrations"),accessor:"triggered_entity"},{width:250,minWidth:80,Header:s("Action Name","bit-integrations"),accessor:"name"},{width:200,minWidth:200,Header:s("Created At","bit-integrations"),accessor:"created_at"},{width:70,minWidth:60,Header:s("Status","bit-integrations"),accessor:"status",Cell:a=>t.jsx(M,{className:"flx",action:e=>S(e,a.row.original.id),checked:Number(a.row.original.status)===1})}]);u.useEffect(()=>{!c&&g(n.success?n.data.integrations:[])},[n]),u.useEffect(()=>{const a=N.filter(e=>e.accessor!=="t_action"&&e.accessor!=="status");a.push({width:70,minWidth:60,Header:s("Status","bit-integrations"),accessor:"status",Cell:e=>t.jsx(M,{className:"flx",action:l=>S(l,e.row.original.id),checked:Number(e.row.original.status)===1})}),a.push({sticky:"right",width:100,minWidth:60,Header:s("Actions","bit-integrations"),accessor:"t_action",Cell:e=>t.jsx(ot,{isValidUser:i,id:e.row.original.id,name:e.row.original.name,index:e.row.id,del:()=>O(e.row.original.id,e.row.index),dup:()=>z(e.row.original.id,e.row.index)})}),_([...a])},[d]);const S=(a,e)=>{const l=a.target.checked,m=[...d],r=m.find(h=>h.id===e);r.status=l===!0?"1":"0",g(m),j({id:e,status:l},"flow/toggleStatus").then(h=>{w.success(s(h.data,"bit-integrations"))}).catch(()=>{w.error(s("Something went wrong","bit-integrations"))})},$=(a,e)=>{const l=[...d],m=j({id:a},"flow/delete").then(r=>r.success?(l.splice(e,1),b(l),g(l),s("Integration deleted successfully","bit-integrations")):r.data);w.promise(m,{success:r=>r,error:s("Error Occurred","bit-integrations"),loading:s("delete...")})},A=a=>{const e=j({id:a},"flow/clone").then(l=>{if(l.success){const m=l.data,r=[...d],f=r.find(R=>R.id===a),h={id:m.id,name:`duplicate of ${f.name}`,triggered_entity:f.triggered_entity,status:f.status,created_at:m.created_at};return r.push(h),g(r),s("Integration clone successfully","bit-integrations")}return l.data});w.promise(e,{success:l=>l,error:s("Error Occurred","bit-integrations"),loading:s("cloning...")})},H=u.useCallback(a=>{const e=[],l=[];for(let r=0;r<a.length;r+=1)e.push(a[r].id),l.push(a[r].original.id);const m=j({flowID:l},"flow/bulk-delete").then(r=>{if(r.success){const f=[...d];for(let h=e.length-1;h>=0;h-=1)f.splice(Number(e[h]),1);return g(f),s("Integration Deleted Successfully","bit-integrations")}return r.data});w.promise(m,{success:r=>r,error:s("Error Occurred","bit-integrations"),loading:s("delete...")})},[d]),F=u.useCallback(a=>{_(a)},[]),I=()=>{o.show=!1,C(p({},o))},O=(a,e)=>{o.action=()=>{$(a,e),I()},o.btnTxt=s("Delete","bit-integrations"),o.btn2Txt=null,o.btnClass="",o.body=s("Are you sure to delete this Integration?","bit-integrations"),o.show=!0,C(p({},o))},z=a=>{o.action=()=>{A(a),I()},o.btnTxt=s("Clone","bit-integration"),o.btn2Txt=null,o.btnClass="purple",o.body=s("Are you sure to clone this Integration ?","bitform"),o.show=!0,C(p({},o))},B={display:"flex",height:"82vh",justifyContent:"center",alignItems:"center"};return c?t.jsx(G,{style:B}):t.jsxs("div",{id:"all-forms",children:[t.jsx(st,{snack:k,setSnackbar:x}),t.jsx(X,{show:o.show,body:o.body,action:o.action,close:I,btnTxt:o.btnTxt,btn2Txt:o.btn2Txt,btn2Action:o.btn2Action,btnClass:o.btnClass}),d&&(d!=null&&d.length)?t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"af-header flx flx-between",children:[t.jsx("h2",{children:s("Integrations","bit-integrations")}),t.jsx(y,{to:"/flow/new",className:"btn round btcd-btn-lg purple purple-sh",children:s("Create Integration","bit-integrations")})]}),t.jsx("div",{className:"forms",children:t.jsx(et,{className:"f-table btcd-all-frm",height:500,columns:N,data:d,rowSeletable:!0,resizable:!0,columnHidable:!0,setTableCols:F,setBulkDelete:H,search:!0})})]}):t.jsx(at,{isValidUser:i,integrations:d})]})}var pt=u.memo(rt);export{pt as default};
