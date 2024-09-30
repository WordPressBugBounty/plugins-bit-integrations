var j=Object.defineProperty;var b=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var y=(r,s,a)=>s in r?j(r,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[s]=a,L=(r,s)=>{for(var a in s||(s={}))N.call(s,a)&&y(r,a,s[a]);if(b)for(var a of b(s))S.call(s,a)&&y(r,a,s[a]);return r};import{u as R,r as o,j as l}from"./main-692.js";import{d as v,_ as n,I as D,F as I,c as t}from"./bi.751.13.js";import{S as F}from"./bi.579.899.js";import{D as M,c,T as i}from"./bi.257.895.js";import{J as Y}from"./bi.383.894.js";import J from"./bi.174.277.js";import"./bi.588.657.js";import"./bi.294.658.js";import"./bi.719.710.js";function Q({formFields:r,setFlow:s,flow:a,allIntegURL:E}){const u=R(),[k,m]=o.useState(!1),[g,P]=o.useState({auth:!1,cptOptions:!1,relationTypes:!1,cptList:!1,cctList:!1,taxList:!1,relationList:!1}),[d,x]=o.useState(1),[C,p]=o.useState({show:!1}),[e,f]=o.useState({name:"JetEngine",type:"JetEngine",field_map:[],staticFields:[],selectedTask:"",actions:{},deleteVendorFieldMap:!1,selectedMenuPosition:"",selectedMenuIcon:"",selectedSupports:"",selectedTaxPostTypes:"",allRelationTypes:[],relOptions:{parentObject:"",childObject:"",selectedRelationType:"",selectedRelationForEdit:""},cptList:[],selectedCPT:"",cctList:[],selectedCCT:"",taxList:[],selectedTaxForEdit:"",relationList:[],deleteFieldMap:{deletePostType:!1,deleteContentType:!1,deleteTaxonomy:!1,deleteRelation:!1}}),A=()=>{m(!0),I(a,s,E,e,u,"","",m).then(T=>{var _;T.success?(t.success((_=T.data)==null?void 0:_.msg),u(E)):t.error(T.data||T)})},h=O=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!e.selectedTask){t.error(n("Please select a task!","bit-integrations"));return}if(!M.includes(e.selectedTask)&&!c(e)){t.error(n("Please map mandatory fields!","bit-integrations"));return}if((e.selectedTask===i.CREATE_TAXONOMY||e.selectedTask===i.UPDATE_TAXONOMY)&&!e.selectedTaxPostTypes){t.error(n("Please select post type(s)!","bit-integrations"));return}if(e.selectedTask===i.CREATE_RELATION||e.selectedTask===i.UPDATE_RELATION){if(!e.relOptions.parentObject){t.error(n("Please select a parent object!","bit-integrations"));return}if(!e.relOptions.childObject){t.error(n("Please select a child object!","bit-integrations"));return}if(!e.relOptions.selectedRelationType){t.error(n("Please select a relation type!","bit-integrations"));return}}if(e.selectedTask===i.UPDATE_POST_TYPE&&!e.selectedCPT){t.error("Please select a custom post type!");return}if(e.selectedTask===i.UPDATE_CONTENT_TYPE&&!e.selectedCCT){t.error("Please select a custom content type!");return}if(e.selectedTask===i.UPDATE_TAXONOMY&&!e.selectedTaxForEdit){t.error("Please select a taxonomy!");return}if(e.selectedTask===i.UPDATE_RELATION&&!e.relOptions.selectedRelationForEdit){t.error("Please select a relation!");return}if(e.selectedTask===i.DELETE_POST_TYPE&&!e.selectedCPT&&!c(e)){t.error("Please select a custom post type or map fields!");return}if(e.selectedTask===i.DELETE_CONTENT_TYPE&&!e.selectedCCT&&!c(e)){t.error("Please select a custom content type or map fields!");return}if(e.selectedTask===i.DELETE_TAXONOMY&&!e.selectedTaxForEdit&&!c(e)){t.error("Please select a taxonomy or map fields!");return}if(e.selectedTask===i.DELETE_RELATION&&!e.relOptions.selectedRelationForEdit&&!c(e)){t.error("Please select a relation or map fields!");return}e.field_map.length>0&&x(O)};return l.jsxs("div",{children:[l.jsx(v,{snack:C,setSnackbar:p}),l.jsx("div",{className:"txt-center mt-2",children:l.jsx(F,{step:3,active:d})}),l.jsx(J,{jetEngineConf:e,setJetEngineConf:f,step:d,setStep:x,loading:g,setLoading:P,setSnackbar:p}),l.jsxs("div",{className:"btcd-stp-page",style:L({},d===2&&{width:900,height:"auto",overflow:"visible"}),children:[l.jsx(Y,{formFields:r,jetEngineConf:e,setJetEngineConf:f,loading:g,setLoading:P,setSnackbar:p}),l.jsxs("button",{onClick:()=>h(3),disabled:!1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[n("Next","bit-integrations"),"  ",l.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),l.jsx(D,{step:d,saveConfig:()=>A(),isLoading:k,dataConf:e,setDataConf:f,formFields:r})]})}export{Q as default};
