var m=Object.defineProperty,y=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var _=(t,a,i)=>a in t?m(t,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[a]=i,d=(t,a)=>{for(var i in a||(a={}))R.call(a,i)&&_(t,i,a[i]);if(f)for(var i of f(a))g.call(a,i)&&_(t,i,a[i]);return t},o=(t,a)=>y(t,k(a));import{_ as e,c as b,d as u}from"./bi.576.0.js";import{u as F}from"./bi.795.440.js";const r={CREATE_VENDOR:"createVendor",UPDATE_VENDOR:"updateVendor",DELETE_VENDOR:"deleteVendor",WITHDRAW_REQUEST:"withdrawRequest",REFUND_REQUEST:"refundRequest"},N=[{label:e("Create A New Vendor","bit-integrations"),value:r.CREATE_VENDOR},{label:e("Update A Vendor","bit-integrations"),value:r.UPDATE_VENDOR},{label:e("Delete A Vendor","bit-integrations"),value:r.DELETE_VENDOR},{label:e("Request A Withdraw","bit-integrations"),value:r.WITHDRAW_REQUEST},{label:e("Request A Refund (Dokan pro feature)","bit-integrations"),value:r.REFUND_REQUEST}],V=(t,a,i)=>{const s=F(a,n=>{const{name:l}=t.target;t.target.value!==""?n[l]=t.target.value:delete n[l]});i(s)},h=t=>!((t!=null&&t.field_map?t.field_map.filter(i=>!i.formField||!i.dokanField||!i.formField==="custom"&&!i.customValue):[]).length>0),S=(t,a,i,s,n)=>{if(!t.name){a({name:t.name?"":e("Name can't be empty","bit-integrations")});return}n(o(d({},s),{auth:!0})),b({},"dokan_authentication").then(l=>{if(l.success){i(!0),u.success(e("Connected Successfully","bit-integrations")),n(o(d({},s),{auth:!1}));return}n(o(d({},s),{auth:!1})),u.error(e("Connection failed: install and active Dokan plugin first!","bit-integrations"))})},c=(t,a,i,s)=>{s(o(d({},i),{vendors:!0})),b({},"dokan_fetch_vendors").then(n=>{if(n.success&&n.data){const l=d({},t);l.vendors=n.data,a(l),s(o(d({},i),{vendors:!1})),u.success(e("Vendors fetched successfully","bit-integrations"));return}s(o(d({},i),{vendors:!1})),u.error(e(n!=null&&n.data?n.data:"Something went wrong!","bit-integrations"))})},T=(t,a,i,s)=>{u.success("Fields fetched successfully."),s(o(d({},i),{euFields:!0})),b({},"dokan_fetch_eu_fields").then(n=>{if(n.success&&n.data){const l=d({},t);if(l.staticFields){const E=l.staticFields.concat(n.data);l.staticFields=E}t.selectedTask===r.UPDATE_VENDOR&&c(l,a,i,s),a(l),s(o(d({},i),{euFields:!1})),u.success(e("EU Compliance Fields fetched successfully","bit-integrations"));return}t.selectedTask===r.UPDATE_VENDOR&&c(t,a,i,s),s(o(d({},i),{euFields:!1})),u.error(n!=null&&n.data?n.data:e("Something went wrong!","bit-integrations"))})},U=t=>t===r.CREATE_VENDOR||t===r.UPDATE_VENDOR?{staticFields:[{key:"email",label:e("Email","bit-integrations"),required:t===r.CREATE_VENDOR},{key:"user_login",label:e("Username","bit-integrations"),required:t===r.CREATE_VENDOR},{key:"store_name",label:e("Store Name","bit-integrations"),required:t===r.CREATE_VENDOR},{key:"first_name",label:e("First Name","bit-integrations"),required:!1},{key:"last_name",label:e("Last Name","bit-integrations"),required:!1},{key:"phone",label:e("Phone","bit-integrations"),required:!1},{key:"payment_bank_ac_name",label:e("Account Name","bit-integrations"),required:!1},{key:"payment_bank_ac_type",label:e("Account Type","bit-integrations"),required:!1},{key:"payment_bank_ac_number",label:e("Account Number","bit-integrations"),required:!1},{key:"payment_bank_bank_name",label:e("Bank Name","bit-integrations"),required:!1},{key:"payment_bank_bank_addr",label:e("Bank Address","bit-integrations"),required:!1},{key:"payment_bank_routing_number",label:e("Routing Number","bit-integrations"),required:!1},{key:"payment_bank_iban",label:e("IBAN","bit-integrations"),required:!1},{key:"payment_bank_swift",label:e("Swift","bit-integrations"),required:!1},{key:"payment_paypal_email",label:e("PayPal Email","bit-integrations"),required:!1},{key:"street_1",label:e("Street 1","bit-integrations"),required:!1},{key:"street_2",label:e("Street 2","bit-integrations"),required:!1},{key:"city",label:e("City","bit-integrations"),required:!1},{key:"zip",label:e("Zip","bit-integrations"),required:!1},{key:"state",label:e("State","bit-integrations"),required:!1},{key:"country",label:e("Country","bit-integrations"),required:!1}],fieldMap:t===r.CREATE_VENDOR?[{formField:"",dokanField:"email"},{formField:"",dokanField:"user_login"},{formField:"",dokanField:"store_name"}]:[{formField:"",dokanField:""}]}:t===r.DELETE_VENDOR?{staticFields:[{key:"vendor_email",label:e("Vendor Email","bit-integrations"),required:!0},{key:"reassign_email",label:e("Reassign (Email)","bit-integrations"),required:!1}],fieldMap:[{formField:"",dokanField:"vendor_email"}]}:t===r.WITHDRAW_REQUEST?{staticFields:[{key:"amount",label:e("Amount","bit-integrations"),required:!0},{key:"note",label:e("Note","bit-integrations"),required:!1}],fieldMap:[{formField:"",dokanField:"amount"}]}:t===r.REFUND_REQUEST?{staticFields:[{key:"order_id",label:e("Order ID","bit-integrations"),required:!0},{key:"refund_amount",label:e("Refund Amount","bit-integrations"),required:!0},{key:"refund_reason",label:e("Refund Reason","bit-integrations"),required:!1}],fieldMap:[{formField:"",dokanField:"order_id"},{formField:"",dokanField:"refund_amount"}]}:{staticFields:[],fieldMap:[]};export{r as T,N as a,T as b,h as c,U as d,S as e,c as g,V as h};
