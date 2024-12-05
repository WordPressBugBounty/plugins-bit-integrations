var y=Object.defineProperty;var g=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var w=(s,a,t)=>a in s?y(s,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[a]=t,b=(s,a)=>{for(var t in a||(a={}))M.call(a,t)&&w(s,t,a[t]);if(g)for(var t of g(a))T.call(a,t)&&w(s,t,a[t]);return s};import{r as N,j as e,L as k}from"./main-34.js";import{_ as c}from"./bi.671.0.js";import{x as S}from"./bi.188.437.js";import{b as F}from"./bi.22.11.js";import{a as R}from"./bi.914.9.js";import{h as _,g as U,a as E}from"./bi.987.679.js";function L({oneDriveConf:s,setOneDriveConf:a,formFields:t,formID:p,setSnackbar:u}){var x;s.folderMap?s.folderMap[0]:s.folder,N.useState(!1);const[r,d]=N.useState({show:!1}),j=(l,n,o)=>{const h=b({},s);n==="create_folder"?l.target.checked?h.actions.create_folder={name:"",suffix:!1}:(delete h.actions.create_folder,delete h.actions.share.folder):n==="attachments"&&(l!==""?h.actions.attachments=l:(delete h.actions.attachments,delete h.actions.share.file)),a(b({},h))},i=(l,n)=>{const o=b({},s);n==="deleteFile"&&(l.target.checked?o.actions.delete_from_wp=!0:delete o.actions.delete_from_wp),a(b({},o))},m=()=>{var l,n,o;(l=s.actions)!=null&&l.share||(s.actions.share={}),(o=(n=s.actions)==null?void 0:n.share)!=null&&o.file||(s.actions.share.file={permissions:[{email:"",access:"34",accessLabel:"View"},{email:"",access:"5",accessLabel:"Edit"},{email:"",access:"4",accessLabel:"Share"},{email:"",access:"6",accessLabel:"View and Comment"}],mail:"false"}),d({show:"attachments"})},f=()=>t.filter(l=>l.type==="file").map(l=>({label:l.label,value:l.name}));return e.jsxs("div",{className:"pos-rel d-flx w-5",children:[e.jsxs("div",{className:"pos-rel d-flx flx-col w-8",children:[e.jsx(F,{onChange:m,checked:"attachments"in s.actions,className:"wdt-200 mt-4 mr-2",value:"Attachment",title:c("Upload Files","bit-integration-pro"),subTitle:c("Add attachments from Bit-integration-pro to OneDrive folder.","bit-integration-pro")}),e.jsx("small",{style:{marginLeft:30,marginTop:10,color:"red",fontWeight:"bold"},children:c("This Required","bit-integrations")})]}),e.jsx(R,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:"Ok",show:r.show==="attachments",close:()=>d({show:!1}),action:()=>d({show:!1}),title:c("Select Attachment","bitform"),children:e.jsxs("div",{style:{height:"95%"},children:[e.jsx("div",{className:"mt-2",children:c("Select File Upload Fields","bitform")}),e.jsx(S,{defaultValue:s.actions.attachments,className:"mt-2 w-10 mb-25",options:f(),onChange:l=>j(l,"attachments"),height:300})]})}),e.jsx("div",{className:"pos-rel d-flx flx-col w-8",children:e.jsx(F,{checked:((x=s.actions)==null?void 0:x.delete_from_wp)||!1,onChange:l=>i(l,"deleteFile"),className:"mt-4 mr-2",value:"delete_from_wp",title:c("Delete File From Wordpress","bit-integrations"),subTitle:c("Delete file from Wordpress after upload in OneDrive","bit-integrations")})})]})}function q({formID:s,formFields:a,oneDriveConf:t,setOneDriveConf:p,isLoading:u,setIsLoading:r,setSnackbar:d}){var j;return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-100 d-in-b",children:"Folder:"}),e.jsxs("select",{onChange:i=>_(i,t,p,s,r,d),name:"folder",value:t.folderMap[0]||t.folder,className:"btcd-paper-inp w-7",children:[e.jsx("option",{value:"",children:c("Select Folder","bit-integrations")}),((j=t==null?void 0:t.default)==null?void 0:j.rootFolders)&&t.default.rootFolders.map(i=>e.jsx("option",{value:i.id,children:i.name},i.id))]}),e.jsx("button",{onClick:()=>U(s,t,p,r),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${c("Refresh  Folders","bit-integrations")}'`},type:"button",disabled:u,children:"↻"}),e.jsx("br",{}),t.folderMap.map((i,m)=>{var f,x;return e.jsxs("div",{children:[e.jsx("br",{}),e.jsxs("div",{className:"flx",children:[e.jsx("b",{className:"wdt-100 d-in-b"}),e.jsx("div",{className:"d-in-b",style:{width:(m+1)*10,marginLeft:1,marginRight:2,height:58,marginTop:-60},children:e.jsx("div",{className:"sub-tree"})}),e.jsxs("div",{className:"flx sub-folder w-7",children:[e.jsxs("select",{onChange:l=>_(l,t,p,s,r,d,m+1),name:"folder",value:t.folderMap[m+1]||t.folder,className:"btcd-paper-inp",children:[e.jsx("option",{value:t.folderMap[m],children:"/ root"}),((x=(f=t==null?void 0:t.default)==null?void 0:f.folders)==null?void 0:x[i])&&t.default.folders[i].map(l=>e.jsx("option",{value:l.id,children:l.name},l.id))]}),e.jsx("button",{onClick:()=>E(s,t,p,r,d,m),className:"d-non icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${c("Refresh Sub Folders","bit-integrations")}'`},type:"button",disabled:u,children:"↻"})]})]})]},i)}),e.jsx("br",{}),e.jsx("br",{}),u&&e.jsx(k,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),t.folder&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:c("Utilities","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(L,{oneDriveConf:t,setOneDriveConf:p,formFields:a,formID:s,setIsLoading:r,setSnackbar:d})]})]})}export{q as O};
