var k=Object.defineProperty;var u=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var y=(a,t,l)=>t in a?k(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l,n=(a,t)=>{for(var l in t||(t={}))z.call(t,l)&&y(a,l,t[l]);if(u)for(var l of u(t))w.call(t,l)&&y(a,l,t[l]);return a};import{c as g,_ as h,s as _}from"./bi.612.0.js";const j=(a,t,l,i,m,d,e,s,o,f)=>{let F=n({},l);if(t===0){if(s){const D=n({},o);D[a.target.name]="",f(n({},D))}F[a.target.name]=a.target.value}else F.relatedlists[t-1][a.target.name]=a.target.value;switch(a.target.name){case"module":F=q(t,F,m,i,d,e);break}i(n({},F))},N=(a,t,l,i,m,d,e)=>{var s,o;a&&!((o=(s=l==null?void 0:l.default)==null?void 0:s.relatedlists)!=null&&o[l.module])&&R(m,l,i,d,e),t(a)},q=(a,t,l,i,m,d)=>{var o,f;const e=n({},t),s=a===0?e.module:e.relatedlists[a-1].module;return a===0?(e.actions={},e.field_map=[{formField:"",zohoFormField:""}],e.upload_field_map=[{formField:"",zohoFormField:""}],a&&(e.relatedlists[a-1]={})):(e.relatedlists[a-1].field_map=[{formField:"",zohoFormField:""}],e.relatedlists[a-1].upload_field_map=[{formField:"",zohoFormField:""}],e.relatedlists[a-1].actions={}),(f=(o=e.default)==null?void 0:o.moduleData)!=null&&f[s]?a===0?(e.field_map=p(a,e),Object.keys(e.default.moduleData[s].fileUploadFields).length>0&&(e.upload_field_map=p(a,e,!0))):(e.relatedlists[a-1].field_map=p(a,e),Object.keys(e.default.moduleData[s].fileUploadFields).length>0&&(e.relatedlists[a-1].upload_field_map=p(a,e,!0))):U(a,l,e,i,m,d),e},P=(a,t,l,i,m)=>{i(!0);const d={formID:a,id:t.id,dataCenter:t.dataCenter,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails};g(d,"zrecruit_refresh_modules").then(e=>{if(e&&e.success){const s=n({},t);s.default||(s.default={}),e.data.modules&&(s.default.modules=e.data.modules),e.data.tokenDetails&&(s.tokenDetails=e.data.tokenDetails),l(n({},s)),m({show:!0,msg:h("Modules refreshed","bit-integrations")})}else e&&e.data&&e.data.data||!e.success&&typeof e.data=="string"?m({show:!0,msg:_(h("Modules refresh failed Cause: %s. please try again","bit-integrations"),e.data.data||e.data)}):m({show:!0,msg:h("Modules refresh failed. please try again","bit-integrations")});i(!1)}).catch(()=>i(!1))},x=(a,t,l,i,m)=>{i(!0);const d={formID:a,id:t.id,dataCenter:t.dataCenter,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails};g(d,"zrecruit_refresh_notetypes").then(e=>{if(e&&e.success){const s=n({},t);s.default||(s.default={}),e.data.noteTypes&&(s.default.noteTypes=e.data.noteTypes),e.data.tokenDetails&&(s.tokenDetails=e.data.tokenDetails),l(n({},s)),m({show:!0,msg:h("Note Types refreshed","bit-integrations")})}else e&&e.data&&e.data.data||!e.success&&typeof e.data=="string"?m({show:!0,msg:_(h("Note Types refresh failed Cause: %s. please try again","bit-integrations"),e.data.data||e.data)}):m({show:!0,msg:h("Note Types refresh failed. please try again","bit-integrations")});i(!1)}).catch(()=>i(!1))},R=(a,t,l,i,m)=>{if(!t.module)return;i(!0);const d={formID:a,module:t.module,dataCenter:t.dataCenter,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails};g(d,"zrecruit_refresh_related_lists").then(e=>{var s;if(e&&e.success){const o=n({},t);e.data.related_modules&&(o.default.relatedlists||(o.default.relatedlists={}),o.default.relatedlists[o.module]=e.data.related_modules),e.data.tokenDetails&&(o.tokenDetails=e.data.tokenDetails),l(n({},o)),m({show:!0,msg:h("RelatedLists refreshed","bit-integrations")})}else(s=e==null?void 0:e.data)!=null&&s.data||!e.success&&typeof e.data=="string"?m({show:!0,msg:_(h("RelatedLists refresh failed Cause: %s. please try again","bit-integrations"),e.data.data||e.data)}):m({show:!0,msg:h("RelatedLists refresh failed. please try again","bit-integrations")});i(!1)}).catch(()=>i(!1))},U=(a,t,l,i,m,d)=>{const e=a===0?l.module:l.relatedlists[a-1].module;if(!e)return;m(!0);const s={formID:t,module:e,dataCenter:l.dataCenter,clientId:l.clientId,clientSecret:l.clientSecret,tokenDetails:l.tokenDetails};g(s,"zrecruit_get_fields").then(o=>{if(o&&o.success){const f=n({},l);o.data.fieldDetails&&(f.default.moduleData||(f.default.moduleData={}),f.default.moduleData[e]=o.data.fieldDetails,a===0?(f.field_map=p(a,f),Object.keys(f.default.moduleData[e].fileUploadFields).length>0&&(f.upload_field_map=p(a,f,!0))):(f.relatedlists[a-1].field_map=p(a,f),Object.keys(f.default.moduleData[e].fileUploadFields).length>0&&(f.relatedlists[a-1].upload_field_map=p(a,f,!0)))),o.data.tokenDetails&&(f.tokenDetails=o.data.tokenDetails),i(n({},f))}else d({show:!0,msg:h("Fields refresh failed. please try again","bit-integrations")});m(!1)}).catch(()=>m(!1))},p=(a,t,l)=>{var m,d;const i=a===0?t.module:t.relatedlists[a-1].module;return l?t.default.moduleData[i].requiredFileUploadFields.length>0?(m=t.default.moduleData[i].requiredFileUploadFields)==null?void 0:m.map(e=>({formField:"",zohoFormField:e})):[{formField:"",zohoFormField:""}]:t.default.moduleData[i].required.length>0?(d=t.default.moduleData[i].required)==null?void 0:d.map(e=>({formField:"",zohoFormField:e})):[{formField:"",zohoFormField:""}]},v=a=>{const t=a!=null&&a.field_map?a.field_map.filter(d=>{var e,s,o;return!d.formField&&d.zohoFormField&&((o=(s=(e=a==null?void 0:a.default)==null?void 0:e.moduleData)==null?void 0:s[a.module])==null?void 0:o.required.indexOf(d.zohoFormField))!==-1}):[],l=a!=null&&a.upload_field_map?a.upload_field_map.filter(d=>{var e,s,o;return!d.formField&&d.zohoFormField&&((o=(s=(e=a==null?void 0:a.default)==null?void 0:e.moduleData)==null?void 0:s[a.module])==null?void 0:o.requiredFileUploadFields.indexOf(d.zohoFormField))!==-1}):[],i=a.relatedlists.map(d=>d.field_map.filter(e=>!e.formField&&e.zohoFormField)),m=a.relatedlists.map(d=>d.upload_field_map.filter(e=>!e.formField&&e.zohoFormField));return!(t.length>0||l.length>0||i.some(d=>d.length)||m.some(d=>d.length))};export{N as a,R as b,v as c,P as d,j as h,x as r};
