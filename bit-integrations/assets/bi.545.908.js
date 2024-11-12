var k=Object.defineProperty,m=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var b=(e,i,a)=>i in e?k(e,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[i]=a,l=(e,i)=>{for(var a in i||(i={}))C.call(i,a)&&b(e,a,i[a]);if(_)for(var a of _(i))E.call(i,a)&&b(e,a,i[a]);return e},n=(e,i)=>m(e,A(i));import{_ as c,c as u,d}from"./bi.4.0.js";import"./main-288.js";const o={CREATE_CONTACT:"createContact",UPDATE_CONTACT:"updateContact",CREATE_TASK:"createTask",UPDATE_TASK:"updateTask",CREATE_OPPORTUNITY:"createOpportunity",UPDATE_OPPORTUNITY:"updateOpportunity"},D=[{label:c("Create Contact","bit-integrations"),value:o.CREATE_CONTACT},{label:c("Update Contact","bit-integrations"),value:o.UPDATE_CONTACT},{label:c("Create Task","bit-integrations"),value:o.CREATE_TASK},{label:c("Update Task","bit-integrations"),value:o.UPDATE_TASK},{label:c("Create Opportunity","bit-integrations"),value:o.CREATE_OPPORTUNITY},{label:c("Update Opportunity","bit-integrations"),value:o.UPDATE_OPPORTUNITY}],U=[o.UPDATE_CONTACT],I=(e,i,a)=>{const r=l({},i);r.name=e.target.value,a(l({},r))},R=(e,i,a,r,t,s)=>{s(n(l({},t),{auth:!0}));const f=l({},e);if(!f.name||!f.api_key){a({name:f.name?"":c("Integration name can't be empty","bit-integrations"),api_key:f.api_key?"":c("Access Api Token Key can't be empty","bit-integrations")});return}u({api_key:f.api_key},"highLevel_authorization").then(y=>{y!=null&&y.success?(r(!0),d.success("Authorized Successfully")):d.error("Authorization Failed"),s(n(l({},t),{auth:!1,accounts:!1}))})},S=e=>!((e!=null&&e.field_map?e.field_map.filter(a=>!a.formField||!a.highLevelField||!a.formField==="custom"&&!a.customValue):[]).length>0),O=(e,i,a,r)=>{r(n(l({},a),{customFields:!0})),u({api_key:e.api_key},"get_highLevel_contact_custom_fields").then(t=>{if(t.success&&t.data){const s=l({},e),f=T(e.selectedTask);s.highLevelFields=[...f,...t.data],i(s),r(n(l({},a),{customFields:!1})),d.success(c("Custom fields fetch successfully","bit-integrations"));return}r(n(l({},a),{customFields:!1})),d.error(t!=null&&t.data?t.data:c("Something went wrong!","bit-integrations"))})},P=(e,i,a,r)=>{r(n(l({},a),{contacts:!0})),u({api_key:e.api_key},"get_highLevel_contacts").then(t=>{if(t.success&&t.data){const s=l({},e);s.contacts=t.data,i(s),r(n(l({},a),{contacts:!1})),d.success(c("Contacts fetched successfully","bit-integrations")),s.selectedTask===o.UPDATE_CONTACT&&O(s,i,a,r),(s.selectedTask===o.CREATE_TASK||s.selectedTask===o.UPDATE_TASK||s.selectedTask===o.CREATE_OPPORTUNITY)&&q(s,i,a,r);return}r(n(l({},a),{contacts:!1})),d.error(t!=null&&t.data?t.data:c("Something went wrong!","bit-integrations"))})},q=(e,i,a,r)=>{r(n(l({},a),{users:!0})),u({api_key:e.api_key},"get_highLevel_users").then(t=>{if(t.success&&t.data){const s=l({},e);s.users=t.data,i(s),r(n(l({},a),{users:!1})),d.success(c("Users fetched successfully","bit-integrations"));return}r(n(l({},a),{users:!1})),d.error(t!=null&&t.data?t.data:c("Something went wrong!","bit-integrations"))})},v=(e,i,a,r)=>{r(n(l({},a),{hlTasks:!0})),u({api_key:e.api_key,contact_id:e.selectedContact},"get_highLevel_tasks").then(t=>{if(t.success&&t.data){const s=l({},e);s.hlTasks=t.data,i(s),r(n(l({},a),{hlTasks:!1})),d.success(c("Task fetched successfully","bit-integrations"));return}r(n(l({},a),{hlTasks:!1})),d.error(t!=null&&t.data?t.data:c("Something went wrong!","bit-integrations"))})},w=(e,i,a,r)=>{r(n(l({},a),{pipelines:!0})),u({api_key:e.api_key},"get_highLevel_pipelines").then(t=>{if(t.success&&t.data){const s=l({},e);s.pipelines=t.data.pipelineList,s.stages=t.data.stages,i(s),r(n(l({},a),{pipelines:!1})),d.success(c("Pipelines fetched successfully","bit-integrations")),(s.selectedTask===o.CREATE_OPPORTUNITY||s.selectedTask===o.UPDATE_OPPORTUNITY)&&P(s,i,a,r);return}r(n(l({},a),{pipelines:!1})),d.error(t!=null&&t.data?t.data:c("Something went wrong!","bit-integrations"))})},K=(e,i,a,r)=>{r(n(l({},a),{opportunities:!0})),u({api_key:e.api_key,pipeline_id:e.selectedPipeline},"get_highLevel_opportunities").then(t=>{if(t.success&&t.data){const s=l({},e);s.opportunities=t.data,i(s),r(n(l({},a),{opportunities:!1})),d.success(c("Opportunities fetched successfully","bit-integrations"));return}r(n(l({},a),{opportunities:!1})),d.error(t!=null&&t.data?t.data:c("Something went wrong!","bit-integrations"))})},M=(e,i,a,r,t,s,f,y="")=>{e&&(f(n(l({},s),{options:!0})),u({api_key:i.api_key},e).then(p=>{if(p.success&&p.data){const h=l({},a);h[t]=p.data,r(h),f(n(l({},s),{options:!1})),d.success(c(`${y} fetched successfully`,"bit-integrations"));return}f(n(l({},s),{options:!1})),d.error(p!=null&&p.data?p.data:c("Something went wrong!","bit-integrations"))}))},T=e=>{const i=[{key:"email",label:"Email",required:e===o.CREATE_CONTACT},{key:"firstName",label:"First Name",required:!1},{key:"lastName",label:"Last Name",required:!1},{key:"name",label:"Full Name",required:!1},{key:"phone",label:"Phone",required:!1},{key:"dateOfBirth",label:"Date of Birth",required:!1},{key:"address1",label:"Address 1",required:!1},{key:"city",label:"City",required:!1},{key:"state",label:"State",required:!1},{key:"country",label:"Country",required:!1},{key:"postalCode",label:"postalCode (Zip)",required:!1},{key:"companyName",label:"Company Name",required:!1},{key:"website",label:"Website",required:!1}];return e===o.UPDATE_CONTACT&&i.unshift({key:"id",label:"ID",required:!1}),i},Y=e=>{if(e===o.CREATE_CONTACT)return{staticFields:T(e),fieldMap:[{formField:"",highLevelField:"email"}]};if(e===o.UPDATE_CONTACT)return{staticFields:T(e),fieldMap:[{formField:"",highLevelField:""}]};if(e===o.CREATE_TASK)return{staticFields:[{key:"title",label:"Title",required:!0},{key:"dueDate",label:"Due Date",required:!0},{key:"description",label:"Description",required:!1},{key:"contactId",label:"Contact ID",required:!1}],fieldMap:[{formField:"",highLevelField:"title"},{formField:"",highLevelField:"dueDate"}]};if(e===o.UPDATE_TASK)return{staticFields:[{key:"title",label:"Title",required:!0},{key:"dueDate",label:"Due Date",required:!0},{key:"taskId",label:"Task ID",required:!1},{key:"description",label:"Description",required:!1},{key:"contactId",label:"Contact ID",required:!1}],fieldMap:[{formField:"",highLevelField:"title"},{formField:"",highLevelField:"dueDate"}]};if(e===o.CREATE_OPPORTUNITY)return{staticFields:[{key:"title",label:"Title",required:!0},{key:"name",label:"Name",required:!1},{key:"email",label:"Email",required:!1},{key:"phone",label:"Phone Number",required:!1},{key:"companyName",label:"Company Name",required:!1},{key:"monetaryValue",label:"Monetary Value",required:!1},{key:"contactId",label:"Contact ID",required:!1}],fieldMap:[{formField:"",highLevelField:"title"}]};if(e===o.UPDATE_OPPORTUNITY)return{staticFields:[{key:"title",label:"Title",required:!0},{key:"name",label:"Name",required:!1},{key:"email",label:"Email",required:!1},{key:"phone",label:"Phone Number",required:!1},{key:"companyName",label:"Company Name",required:!1},{key:"monetaryValue",label:"Monetary Value",required:!1},{key:"opportunityId",label:"Opportunity ID",required:!1},{key:"contactId",label:"Contact ID",required:!1}],fieldMap:[{formField:"",highLevelField:"title"}]}};export{U as O,o as T,D as a,w as b,S as c,K as d,P as e,v as f,M as g,I as h,q as i,O as j,Y as k,R as l};
