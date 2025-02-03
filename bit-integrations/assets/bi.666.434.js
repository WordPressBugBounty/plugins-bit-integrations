var j=Object.defineProperty;var b=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var y=(r,s,a)=>s in r?j(r,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[s]=a,L=(r,s)=>{for(var a in s||(s={}))S.call(s,a)&&y(r,a,s[a]);if(b)for(var a of b(s))N.call(s,a)&&y(r,a,s[a]);return r};import{u as R,r as n,j as o}from"./main-814.js";import"./bi.8.440.js";import{_ as l,d as t}from"./bi.317.0.js";import{S as v}from"./bi.610.13.js";import{S as D}from"./bi.731.934.js";import{I,i as M}from"./bi.59.3.js";import{D as F,c,T as i}from"./bi.994.922.js";import{J as Y}from"./bi.608.921.js";import J from"./bi.115.282.js";import"./bi.765.9.js";import"./bi.672.11.js";import"./bi.478.14.js";import"./bi.321.683.js";import"./bi.904.684.js";import"./bi.492.709.js";function se({formFields:r,setFlow:s,flow:a,allIntegURL:E}){const m=R(),[k,u]=n.useState(!1),[g,P]=n.useState({auth:!1,cptOptions:!1,relationTypes:!1,cptList:!1,cctList:!1,taxList:!1,relationList:!1}),[d,x]=n.useState(1),[C,T]=n.useState({show:!1}),[e,f]=n.useState({name:"JetEngine",type:"JetEngine",field_map:[],staticFields:[],selectedTask:"",actions:{},deleteVendorFieldMap:!1,selectedMenuPosition:"",selectedMenuIcon:"",selectedSupports:"",selectedTaxPostTypes:"",allRelationTypes:[],relOptions:{parentObject:"",childObject:"",selectedRelationType:"",selectedRelationForEdit:""},cptList:[],selectedCPT:"",cctList:[],selectedCCT:"",taxList:[],selectedTaxForEdit:"",relationList:[],deleteFieldMap:{deletePostType:!1,deleteContentType:!1,deleteTaxonomy:!1,deleteRelation:!1}}),A=()=>{u(!0),M(a,s,E,e,m,"","",u).then(p=>{var _;p.success?(t.success((_=p.data)==null?void 0:_.msg),m(E)):t.error(p.data||p)})},h=O=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!e.selectedTask){t.error(l("Please select a task!","bit-integrations"));return}if(!F.includes(e.selectedTask)&&!c(e)){t.error(l("Please map mandatory fields!","bit-integrations"));return}if((e.selectedTask===i.CREATE_TAXONOMY||e.selectedTask===i.UPDATE_TAXONOMY)&&!e.selectedTaxPostTypes){t.error(l("Please select post type(s)!","bit-integrations"));return}if(e.selectedTask===i.CREATE_RELATION||e.selectedTask===i.UPDATE_RELATION){if(!e.relOptions.parentObject){t.error(l("Please select a parent object!","bit-integrations"));return}if(!e.relOptions.childObject){t.error(l("Please select a child object!","bit-integrations"));return}if(!e.relOptions.selectedRelationType){t.error(l("Please select a relation type!","bit-integrations"));return}}if(e.selectedTask===i.UPDATE_POST_TYPE&&!e.selectedCPT){t.error("Please select a custom post type!");return}if(e.selectedTask===i.UPDATE_CONTENT_TYPE&&!e.selectedCCT){t.error("Please select a custom content type!");return}if(e.selectedTask===i.UPDATE_TAXONOMY&&!e.selectedTaxForEdit){t.error("Please select a taxonomy!");return}if(e.selectedTask===i.UPDATE_RELATION&&!e.relOptions.selectedRelationForEdit){t.error("Please select a relation!");return}if(e.selectedTask===i.DELETE_POST_TYPE&&!e.selectedCPT&&!c(e)){t.error("Please select a custom post type or map fields!");return}if(e.selectedTask===i.DELETE_CONTENT_TYPE&&!e.selectedCCT&&!c(e)){t.error("Please select a custom content type or map fields!");return}if(e.selectedTask===i.DELETE_TAXONOMY&&!e.selectedTaxForEdit&&!c(e)){t.error("Please select a taxonomy or map fields!");return}if(e.selectedTask===i.DELETE_RELATION&&!e.relOptions.selectedRelationForEdit&&!c(e)){t.error("Please select a relation or map fields!");return}e.field_map.length>0&&x(O)};return o.jsxs("div",{children:[o.jsx(v,{snack:C,setSnackbar:T}),o.jsx("div",{className:"txt-center mt-2",children:o.jsx(D,{step:3,active:d})}),o.jsx(J,{jetEngineConf:e,setJetEngineConf:f,step:d,setStep:x,loading:g,setLoading:P,setSnackbar:T}),o.jsxs("div",{className:"btcd-stp-page",style:L({},d===2&&{width:900,height:"auto",overflow:"visible"}),children:[o.jsx(Y,{formFields:r,jetEngineConf:e,setJetEngineConf:f,loading:g,setLoading:P,setSnackbar:T}),o.jsxs("button",{onClick:()=>h(3),disabled:!1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[l("Next","bit-integrations"),"  ",o.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),o.jsx(I,{step:d,saveConfig:()=>A(),isLoading:k,dataConf:e,setDataConf:f,formFields:r})]})}export{se as default};
