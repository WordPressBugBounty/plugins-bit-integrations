var E=Object.defineProperty;var P=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var $=(t,a,d)=>a in t?E(t,a,{enumerable:!0,configurable:!0,writable:!0,value:d}):t[a]=d,h=(t,a)=>{for(var d in a||(a={}))B.call(a,d)&&$(t,d,a[d]);if(P)for(var d of P(a))G.call(a,d)&&$(t,d,a[d]);return t};import{c as p,_ as g,s as A}from"./bi.717.0.js";const V=(t,a,d,o,n,l,e,i,s,u)=>{let f=h({},d);if(a===0){if(i){const F=h({},s);F[t.target.name]="",u(h({},F))}f[t.target.name]=t.target.value}else f.relatedlists||(f.relatedlists=[]),f.relatedlists[a-1][t.target.name]=t.target.value;switch(t.target.name){case"module":f=H(a,n,f,o,l,e);break;case"layout":f=x(a,n,f,o,l,e);break}o(h({},f))},W=(t,a,d,o,n,l,e)=>{var i,s;t&&!((s=(i=o.default)==null?void 0:i.relatedlists)!=null&&s[o.module])&&K(d,o,n,l,e),a(t)},H=(t,a,d,o,n,l)=>{var s,u;let e=h({},d);const i=t===0?e.module:e.relatedlists[t-1].module;if(e.relatedlists[t-1]||(e.relatedlists[t-1]={}),t===0?(e.layout="",e.actions={},e.field_map=[{formField:"",zohoFormField:""}],e.upload_field_map=[{formField:"",zohoFormField:""}],e.relatedlists=[]):(e.relatedlists[t-1].layout="",e.relatedlists[t-1].actions={},e.relatedlists[t-1].field_map=[{formField:"",zohoFormField:""}],e.relatedlists[t-1].upload_field_map=[{formField:"",zohoFormField:""}]),!((s=e.default.layouts)!=null&&s[i]))J(t,a,e,o,n,l);else{const f=Object.keys((u=e.default.layouts)==null?void 0:u[i]);f.length===1&&(t===0?[e.layout]=f:[e.relatedlists[t-1].layout]=f,e=x(t,a,e,o,n,l))}return e},x=(t,a,d,o,n,l)=>{var u,f,F,m,r,_,D,k,z,w,c,R,q,O,U,M,j;const e=h({},d),i=t===0?e.module:e.relatedlists[t-1].module,s=t===0?e.layout:e.relatedlists[t-1].layout;return t===0?(e.actions={},e.field_map=(m=(F=(f=(u=e==null?void 0:e.default)==null?void 0:u.layouts)==null?void 0:f[i])==null?void 0:F[s])!=null&&m.required?y(t,e):[{formField:"",zohoFormField:""}],e.upload_field_map=(k=(D=(_=(r=e==null?void 0:e.default)==null?void 0:r.layouts)==null?void 0:_[i])==null?void 0:D[s])!=null&&k.requiredFileUploadFields&&Object.keys(e.default.layouts[i][s].requiredFileUploadFields).length>0?y(t,e,!0):[{formField:"",zohoFormField:""}]):(e.relatedlists[t-1].actions={},e.relatedlists[t-1].field_map=(R=(c=(w=(z=e==null?void 0:e.default)==null?void 0:z.layouts)==null?void 0:w[i])==null?void 0:c[s])!=null&&R.required?y(t,e):[{formField:"",zohoFormField:""}],e.relatedlists[t-1].upload_field_map=(M=(U=(O=(q=e==null?void 0:e.default)==null?void 0:q.layouts)==null?void 0:O[i])==null?void 0:U[s])!=null&&M.requiredFileUploadFields&&Object.keys(e.default.layouts[i][s].requiredFileUploadFields).length>0?y(t,e,!0):[{formField:"",zohoFormField:""}]),!((j=e.default.tags)!=null&&j[i])&&v(t,a,e,o,n,l),e},X=(t,a,d,o,n)=>{o(!0);const l={formID:t,id:a.id,dataCenter:a.dataCenter,clientId:a.clientId,clientSecret:a.clientSecret,tokenDetails:a.tokenDetails};p(l,"zcrm_refresh_modules").then(e=>{if(e&&e.success){const i=h({},a);i.default||(i.default={}),e.data.modules&&(i.default.modules=e.data.modules),e.data.tokenDetails&&(i.tokenDetails=e.data.tokenDetails),d(h({},i)),n({show:!0,msg:g("Modules refreshed","bit-integrations")})}else e&&e.data&&e.data.data||!e.success&&typeof e.data=="string"?n({show:!0,msg:A(g("Modules refresh failed Cause: %s. please try again","bit-integrations"),e.data.data||e.data)}):n({show:!0,msg:g("Modules refresh failed. please try again","bit-integrations")});o(!1)}).catch(()=>o(!1))},J=(t,a,d,o,n,l)=>{const e=h({},d),i=t===0?e.module:e.relatedlists[t-1].module;if(!i)return;n(!0);const s={formID:a,module:i,dataCenter:e.dataCenter,clientId:e.clientId,clientSecret:e.clientSecret,tokenDetails:e.tokenDetails};p(s,"zcrm_refresh_layouts").then(u=>{var f,F;if(u&&u.success){if(u.data.layouts){e.default.layouts||(e.default.layouts={}),e.default.layouts[i]=u.data.layouts;const m=[...Object.keys(u.data.layouts)];m.length===1&&(t===0?([e.layout]=m,e.field_map=y(t,e),Object.keys(u.data.layouts[m].fileUploadFields).length>0&&(e.upload_field_map=y(t,e,!0))):([e.relatedlists[t-1].layout]=m,e.relatedlists[t-1].field_map=y(t,e),Object.keys(u.data.layouts[m].fileUploadFields).length>0&&(e.relatedlists[t-1].upload_field_map=y(t,e,!0))),(f=e.default.tags)!=null&&f[i]||v(t,a,e,o,n,l))}u.data.tokenDetails&&(e.tokenDetails=u.data.tokenDetails),o(h({},e)),l({show:!0,msg:g("Layouts refreshed","bit-integrations")})}else(F=u==null?void 0:u.data)!=null&&F.data||!u.success&&typeof u.data=="string"?l({show:!0,msg:A(g("Layouts refresh failed Cause: %s. please try again","bit-integrations"),u.data.data||u.data)}):l({show:!0,msg:g("Layouts refresh failed. please try again","bit-integrations")});n(!1)}).catch(()=>n(!1))},K=(t,a,d,o,n)=>{if(!a.module)return;o(!0);const l={formID:t,module:a.module,dataCenter:a.dataCenter,clientId:a.clientId,clientSecret:a.clientSecret,tokenDetails:a.tokenDetails};p(l,"zcrm_get_related_lists").then(e=>{var i;if(e&&e.success){const s=h({},a);e.data.relatedLists&&(s.default.relatedlists||(s.default.relatedlists={}),s.default.relatedlists[s.module]=h({},e.data.relatedLists)),e.data.tokenDetails&&(s.tokenDetails=e.data.tokenDetails),d(h({},s)),n({show:!0,msg:g("RelatedLists refreshed","bit-integrations")})}else(i=e==null?void 0:e.data)!=null&&i.data||!e.success&&typeof e.data=="string"?n({show:!0,msg:`${g("RelatedLists refresh failed Cause:")}${e.data.data||e.data}. ${g("please try again","bit-integrations")}`}):n({show:!0,msg:g("RelatedLists refresh failed. please try again","bit-integrations")});o(!1)}).catch(()=>o(!1))},v=(t,a,d,o,n,l)=>{const e=t===0?d.module:d.relatedlists[t-1].module;if(!e)return;n(!0);const i={formID:a,module:e,dataCenter:d.dataCenter,clientId:d.clientId,clientSecret:d.clientSecret,tokenDetails:d.tokenDetails};p(i,"zcrm_get_tags").then(s=>{var u;if(s!=null&&s.success){const f=h({},d);s.data.tags&&(f.default.tags||(f.default.tags={}),f.default.tags[e]=h({},s.data.tags)),s.data.tokenDetails&&(f.tokenDetails=s.data.tokenDetails),o(h({},f)),l({show:!0,msg:g("Tags refreshed","bit-integrations")})}else(u=s==null?void 0:s.data)!=null&&u.data||!s.success&&typeof s.data=="string"?l({show:!0,msg:`${g("Tags refresh failed Cause:","bit-integrations")}${s.data.data||s.data}. ${g("please try again","bit-integrations")}`}):l({show:!0,msg:g("Tags refresh failed. please try again","bit-integrations")});n(!1)}).catch(()=>n(!1))},Y=(t,a,d,o,n)=>{o(!0);const l={formID:t,dataCenter:a.dataCenter,clientId:a.clientId,clientSecret:a.clientSecret,tokenDetails:a.tokenDetails};p(l,"zcrm_get_users").then(e=>{if(e!=null&&e.success){const i=h({},a);i.default.crmOwner=e.data.users,e.data.tokenDetails&&(i.tokenDetails=e.data.tokenDetails),d(h({},i)),n({show:!0,msg:g("Owners refreshed","bit-integrations")})}else n({show:!0,msg:g("Owners refresh failed. please try again","bit-integrations")});o(!1)}).catch(()=>o(!1))},Z=(t,a,d,o,n)=>{const l=t===0?a.module:a.relatedlists[t-1].module;if(!l)return;o(!0);const e={module:l,dataCenter:a.dataCenter,clientId:a.clientId,clientSecret:a.clientSecret,tokenDetails:a.tokenDetails};p(e,"zcrm_get_assignment_rules").then(i=>{if(i!=null&&i.success){const s=h({},a);s.default.assignmentRules||(s.default.assignmentRules={}),i.data.tokenDetails&&(s.tokenDetails=i.data.tokenDetails),s.default.assignmentRules[l]=h({},i.data.assignmentRules),d(h({},s)),n({show:!0,msg:g("Assignment Rules refreshed","bit-integrations")})}else n({show:!0,msg:g("Assignment Rules refresh failed. please try again","bit-integrations")});o(!1)}).catch(()=>o(!1))},y=(t,a,d)=>{const o=t===0?a.module:a.relatedlists[t-1].module,n=t===0?a.layout:a.relatedlists[t-1].layout;return d?a.default.layouts[o][n].requiredFileUploadFields.length>0?a.default.layouts[o][n].requiredFileUploadFields.map(l=>({formField:"",zohoFormField:l})):[{formField:"",zohoFormField:""}]:a.default.layouts[o][n].required.length>0?a.default.layouts[o][n].required.map(l=>({formField:"",zohoFormField:l})):[{formField:"",zohoFormField:""}]},S=t=>{const a=t!=null&&t.field_map?t.field_map.filter(l=>{var e,i,s,u;return!l.formField&&l.zohoFormField&&((u=(s=(i=(e=t==null?void 0:t.default)==null?void 0:e.layouts)==null?void 0:i[t.module])==null?void 0:s[t.layout])==null?void 0:u.required.indexOf(l.zohoFormField))!==-1}):[],d=t!=null&&t.upload_field_map?t.upload_field_map.filter(l=>!l.formField&&l.zohoFormField&&t.default.layouts[t.module][t.layout].requiredFileUploadFields.indexOf(l.zohoFormField)!==-1):[],o=t.relatedlists.map(l=>l.field_map.filter(e=>!e.formField&&e.zohoFormField)),n=t.relatedlists.map(l=>l.upload_field_map.filter(e=>!e.formField&&e.zohoFormField));return!(a.length>0||d.length>0||o.some(l=>l.length)||n.some(l=>l.length))};export{v as a,Y as b,S as c,W as d,J as e,K as f,X as g,V as h,Z as r};
