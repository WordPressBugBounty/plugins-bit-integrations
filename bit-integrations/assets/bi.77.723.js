var k=Object.defineProperty;var D=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var F=(t,a,l)=>a in t?k(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,m=(t,a)=>{for(var l in a||(a={}))y.call(a,l)&&F(t,l,a[l]);if(D)for(var l of D(a))w.call(a,l)&&F(t,l,a[l]);return t};import{c,_ as u,s as _}from"./bi.422.0.js";const g=(t,a,l,s,d,r,e,i,o,f)=>{let n=m({},l);if(a===0){if(i){const p=m({},o);p[t.target.name]="",f(m({},p))}n[t.target.name]=t.target.value}else n.relatedlists[a-1][t.target.name]=t.target.value;switch(t.target.name){case"module":n=z(a,n,d,s,r,e);break}s(m({},n))},M=(t,a,l,s,d,r,e)=>{var i,o;t&&!((o=(i=l==null?void 0:l.default)==null?void 0:i.relatedlists)!=null&&o[l.module])&&q(d,l,s,r,e),a(t)},z=(t,a,l,s,d,r)=>{var o,f;const e=m({},a),i=t===0?e.module:e.relatedlists[t-1].module;return t===0?(e.actions={},e.field_map=[{formField:"",zohoFormField:""}],e.upload_field_map=[{formField:"",zohoFormField:""}],t&&(e.relatedlists[t-1]={})):(e.relatedlists[t-1].field_map=[{formField:"",zohoFormField:""}],e.relatedlists[t-1].upload_field_map=[{formField:"",zohoFormField:""}],e.relatedlists[t-1].actions={}),(f=(o=e.default)==null?void 0:o.moduleData)!=null&&f[i]?t===0?(e.field_map=h(t,e),Object.keys(e.default.moduleData[i].fileUploadFields).length>0&&(e.upload_field_map=h(t,e,!0))):(e.relatedlists[t-1].field_map=h(t,e),Object.keys(e.default.moduleData[i].fileUploadFields).length>0&&(e.relatedlists[t-1].upload_field_map=h(t,e,!0))):R(t,l,e,s,d,r),e},O=(t,a,l,s,d)=>{s(!0);const r={formID:t,id:a.id,dataCenter:a.dataCenter,clientId:a.clientId,clientSecret:a.clientSecret,tokenDetails:a.tokenDetails};c(r,"zbigin_refresh_modules").then(e=>{if(e&&e.success){const i=m({},a);i.default||(i.default={}),e.data.modules&&(i.default.modules=e.data.modules),e.data.tokenDetails&&(i.tokenDetails=e.data.tokenDetails),l(m({},i)),d({show:!0,msg:u("Modules refreshed","bit-integrations")})}else e&&e.data&&e.data.data||!e.success&&typeof e.data=="string"?d({show:!0,msg:_(u("Modules refresh failed Cause: %s. please try again","bit-integrations"),e.data.data||e.data)}):d({show:!0,msg:u("Modules refresh failed. please try again","bit-integrations")});s(!1)}).catch(()=>s(!1))},j=(t,a,l,s,d)=>{s(!0);const r={formID:t,id:a.id,dataCenter:a.dataCenter,clientId:a.clientId,clientSecret:a.clientSecret,tokenDetails:a.tokenDetails};c(r,"zbigin_refresh_playouts").then(e=>{if(e&&e.success){const i=m({},a);i.default||(i.default={}),e.data.pLayouts&&(i.default.pLayouts=e.data.pLayouts),e.data.tokenDetails&&(i.tokenDetails=e.data.tokenDetails),l(m({},i)),d({show:!0,msg:u("Pipeline Layouts refreshed","bit-integrations")})}else e&&e.data&&e.data.data||!e.success&&typeof e.data=="string"?d({show:!0,msg:_(u("Pipeline Layouts refresh failed Cause: %s. please try again","bit-integrations"),e.data.data||e.data)}):d({show:!0,msg:u("Pipeline Layouts refresh failed. please try again","bit-integrations")});s(!1)}).catch(()=>s(!1))},q=(t,a,l,s,d)=>{if(!a.module)return;s(!0);const r={formID:t,module:a.module,dataCenter:a.dataCenter,clientId:a.clientId,clientSecret:a.clientSecret,tokenDetails:a.tokenDetails};c(r,"zbigin_refresh_related_lists").then(e=>{var i;if(e&&e.success){const o=m({},a);e.data.related_modules&&(o.default.relatedlists||(o.default.relatedlists={}),o.default.relatedlists[o.module]=e.data.related_modules),e.data.tokenDetails&&(o.tokenDetails=e.data.tokenDetails),l(m({},o)),d({show:!0,msg:u("RelatedLists refreshed","bit-integrations")})}else(i=e==null?void 0:e.data)!=null&&i.data||!e.success&&typeof e.data=="string"?d({show:!0,msg:`${u("RelatedLists refresh failed Cause:","bit-integrations")}${e.data.data||e.data}. ${u("please try again","bit-integrations")}`}):d({show:!0,msg:u("RelatedLists refresh failed. please try again","bit-integrations")});s(!1)}).catch(()=>s(!1))},R=(t,a,l,s,d,r)=>{const e=t===0?l.module:l.relatedlists[t-1].module;if(!e)return;d(!0);const i={formID:a,module:e,dataCenter:l.dataCenter,clientId:l.clientId,clientSecret:l.clientSecret,tokenDetails:l.tokenDetails};c(i,"zbigin_refresh_fields").then(o=>{if(o&&o.success){const f=m({},l);o.data.fieldDetails&&(f.default.moduleData||(f.default.moduleData={}),f.default.moduleData[e]=o.data.fieldDetails,t===0?(f.field_map=h(t,f),Object.keys(f.default.moduleData[e].fileUploadFields).length>0&&(f.upload_field_map=h(t,f,!0))):(f.relatedlists[t-1].field_map=h(t,f),Object.keys(f.default.moduleData[e].fileUploadFields).length>0&&(f.relatedlists[t-1].upload_field_map=h(t,f,!0)))),o.data.tokenDetails&&(f.tokenDetails=o.data.tokenDetails),s(m({},f))}else r({show:!0,msg:u("Fields refresh failed. please try again","bit-integrations")});d(!1)}).catch(()=>d(!1))},S=(t,a,l,s,d,r)=>{const e=t===0?l.module:l.relatedlists[t-1].module;if(!e)return;d(!0);const i={formID:a,module:e,dataCenter:l.dataCenter,clientId:l.clientId,clientSecret:l.clientSecret,tokenDetails:l.tokenDetails};c(i,"zbigin_refresh_tags").then(o=>{if(o&&o.success){const f=m({},l);o.data.tags&&(f.default.moduleData||(f.default.moduleData={}),f.default.moduleData[e].tags=o.data.tags,r({show:!0,msg:u("Tags refreshed","bit-integrations")})),o.data.tokenDetails&&(f.tokenDetails=o.data.tokenDetails),s(m({},f))}else r({show:!0,msg:u("Tags refresh failed. please try again","bit-integrations")});d(!1)}).catch(()=>d(!1))},$=(t,a,l,s,d)=>{s(!0);const r={formID:t,dataCenter:a.dataCenter,clientId:a.clientId,clientSecret:a.clientSecret,tokenDetails:a.tokenDetails};c(r,"zbigin_refresh_users").then(e=>{if(e&&e.success){const i=m({},a);e.data.users&&(i.default||(i.default={}),i.default.users=e.data.users,d({show:!0,msg:u("Users refreshed","bit-integrations")})),e.data.tokenDetails&&(i.tokenDetails=e.data.tokenDetails),l(m({},i))}else d({show:!0,msg:u("Users refresh failed. please try again","bit-integrations")});s(!1)}).catch(()=>s(!1))},h=(t,a,l)=>{var d,r;const s=t===0?a.module:a.relatedlists[t-1].module;return l?a.default.moduleData[s].requiredFileUploadFields.length>0?(d=a.default.moduleData[s].requiredFileUploadFields)==null?void 0:d.map(e=>({formField:"",zohoFormField:e})):[{formField:"",zohoFormField:""}]:a.default.moduleData[s].required.length>0?(r=a.default.moduleData[s].required)==null?void 0:r.map(e=>({formField:"",zohoFormField:e})):[{formField:"",zohoFormField:""}]},v=t=>{const a=t!=null&&t.field_map?t.field_map.filter(s=>{var d,r,e;return!s.formField&&s.zohoFormField&&((e=(r=(d=t==null?void 0:t.default)==null?void 0:d.moduleData)==null?void 0:r[t.module])==null?void 0:e.required.indexOf(s.zohoFormField))!==-1}):[],l=t.relatedlists.map(s=>s.field_map.filter(d=>!d.formField&&d.zohoFormField));return!(a.length>0||l.find(s=>s.length))};export{S as a,M as b,v as c,O as d,j as e,R as g,g as h,$ as r};
