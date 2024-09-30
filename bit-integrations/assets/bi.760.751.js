var V=Object.defineProperty;var q=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var T=(r,s,i)=>s in r?V(r,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[s]=i,M=(r,s)=>{for(var i in s||(s={}))B.call(s,i)&&T(r,i,s[i]);if(q)for(var i of q(s))K.call(s,i)&&T(r,i,s[i]);return r};import{i as W,j as e,l as L,L as D}from"./main-692.js";import{j as E,_ as t,k as z,n as k,N as Y,A as Z}from"./bi.751.13.js";import{T as G}from"./bi.859.697.js";import{a as $,b as U,d as R,e as J,g as O,f as Q}from"./bi.952.750.js";import{T as X}from"./bi.588.657.js";function v({key:r,i:s,field:i,whatsAppFields:c,whatsAppConf:b,formFields:u,setWhatsAppConf:m,setSnackbar:F,mapKey:g}){var j,N;const d=c.filter(a=>a.required===!0)||[],h=c.filter(a=>a.required===!1)||[],x=W(E),{isPro:y}=x;return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:i.formField||"",onChange:a=>$(a,s,b,m,g),children:[e.jsx("option",{value:"",children:t("Select Field","bit-integrations")}),e.jsx("optgroup",{label:t("Form Fields","bit-integrations"),children:u==null?void 0:u.map(a=>e.jsx("option",{value:a.name,children:a.label},`ff-rm-${a.name}`))}),e.jsx("option",{value:"custom",children:t("Custom...","bit-integrations")}),e.jsx("optgroup",{label:sprintf(t("General Smart Codes %s","bit-integrations"),y?"":`(${t("Pro","bit-integrations")})`),children:y&&((j=z)==null?void 0:j.map(a=>e.jsx("option",{value:a.name,children:a.label},`ff-rm-${a.name}`)))})]}),i.formField==="custom"&&e.jsx(X,{onChange:a=>U(a,s,b,m,!1,g),label:t("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:i.customValue,placeholder:t("Custom Value","bit-integrations"),formFields:u}),e.jsxs("select",{className:"btcd-paper-inp",disabled:s<d.length,name:"whatsAppFormField",value:s<d.length?d[s].key||"":i.whatsAppFormField||"",onChange:a=>$(a,s,b,m,g),children:[e.jsx("option",{value:"",children:t("Select Field","bit-integrations")}),s<d.length?e.jsx("option",{value:d[s].key,children:d[s].label},d[s].key):h.map(({key:a,label:_})=>e.jsx("option",{value:a,children:_},a))]})]}),((N=d[0])==null?void 0:N.key)!=="phone"&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>R(s,b,m,g),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>J(s,b,m,g),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function le({formFields:r,handleInput:s,whatsAppConf:i,setWhatsAppConf:c,isLoading:b,setIsLoading:u,setSnackbar:m}){var y,j,N,a,_;const{id:F}=L(),g=W(E),{isPro:d}=g,h=l=>{const n=M({},i);n.body=l,c(n)},x=(l,n)=>{c(I=>Z(I,o=>{o[n]=l,d&&(n==="messageType"&&l==="text"?o.taskNote=H:n==="messageType"&&l==="media"?(o.taskNote=f,o.media_field_map=[{formField:"",whatsAppFormField:""}],o.media_fields=[{key:"caption",label:"Caption",required:!1},{key:"filename",label:"FileName",required:!1}]):n==="messageType"&&l==="contact"?(o.taskNote=H,o.contact_field_map=Q(S),o.contact_fields=S):n==="messageType"&&(o==null||delete o.taskNote))})),n==="messageType"&&l==="template"&&O(i,c,u,m)};return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsxs("div",{className:"flx",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:t("Message Type:","bit-integrations")}),e.jsx(k,{defaultValue:i==null?void 0:i.messageType,className:"mt-2 w-5",onChange:l=>x(l,"messageType"),options:(y=i==null?void 0:i.messageTypes)==null?void 0:y.map(l=>({label:P(d,l.is_pro)?l.label:p(l.label),value:l.name,disabled:!P(d,l.is_pro)})),singleSelect:!0,closeOnSelect:!0})]}),i.messageType==="template"&&(i==null?void 0:i.allTemplates)&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsxs("div",{className:"flx",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:t("Select Template:","bit-integrations")}),e.jsx(k,{defaultValue:i==null?void 0:i.templateName,className:"mt-2 w-5",onChange:l=>x(l,"templateName"),options:(j=i==null?void 0:i.allTemplates)==null?void 0:j.map(l=>({label:l,value:l})),singleSelect:!0,closeOnSelect:!0}),e.jsx("button",{onClick:()=>O(i,c,u,m),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${t("Refresh Template","bit-integrations")}'`},type:"button",disabled:b,children:"↻"})]})]}),i.messageType==="media"&&d&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsxs("div",{className:"flx",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:t("Select upload fields:","bit-integrations")}),e.jsx(k,{defaultValue:i==null?void 0:i.upload_field,className:"mt-2 w-5",onChange:l=>x(l,"upload_field"),options:r.filter(l=>l.type==="file").map(l=>({label:l.label,value:l.name})),singleSelect:!0,closeOnSelect:!0})]}),e.jsxs("div",{className:"flx",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:t("Select type of media:","bit-integrations")}),e.jsx(k,{defaultValue:i==null?void 0:i.mediaType,className:"mt-2 w-5",onChange:l=>x(l,"mediaType"),options:(N=i==null?void 0:i.mediaTypes)==null?void 0:N.map(l=>({label:l,value:l})),singleSelect:!0,closeOnSelect:!0})]})]}),b&&e.jsx(D,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),e.jsx("br",{}),e.jsx("div",{className:"mt-5",children:e.jsx("b",{className:"wdt-100",children:t("Field Map","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:t("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:t("WhatsApp Fields","bit-integrations")})})]}),e.jsx("br",{}),i==null?void 0:i.field_map.map((l,n)=>e.jsx(v,{i:n,field:l,whatsAppConf:i,whatsAppFields:i.whatsAppFields,formFields:r,setWhatsAppConf:c,setSnackbar:m},`rp-m-${n+9}`)),i.messageType==="media"&&d&&(i==null?void 0:i.media_fields)&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("div",{className:"mt-5",children:e.jsx("b",{className:"wdt-100",children:t("Media Field Map","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:t("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:t("WhatsApp Fields","bit-integrations")})})]}),e.jsx("br",{}),(a=i==null?void 0:i.media_field_map)==null?void 0:a.map((l,n)=>e.jsx(v,{i:n,field:l,whatsAppConf:i,whatsAppFields:i.media_fields,formFields:r,setWhatsAppConf:c,setSnackbar:m,mapKey:"media_field_map"},`rp-m-${n+9}`))]}),i.messageType==="contact"&&d&&(i==null?void 0:i.contact_fields)&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("div",{className:"mt-5",children:e.jsx("b",{className:"wdt-100",children:t("Contact Field Map","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:t("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:t("WhatsApp Fields","bit-integrations")})})]}),e.jsx("br",{}),(_=i==null?void 0:i.contact_field_map)==null?void 0:_.map((l,n)=>e.jsx(v,{i:n,field:l,whatsAppConf:i,whatsAppFields:i.contact_fields,formFields:r,setWhatsAppConf:c,setSnackbar:m,mapKey:"contact_field_map"},`rp-m-${n+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>R(i.contact_field_map.length,i,c,"contact_field_map"),className:"icn-btn sh-sm",type:"button",children:"+"})})]}),(i==null?void 0:i.messageType)==="text"&&d&&e.jsxs("div",{children:[e.jsx("b",{className:"wdt-200 d-in-b mr-16 mb-4 mt-4",children:t("Message:","bit-integrations")}),e.jsx(G,{formFields:r,id:`whatsapp-message-${F}`,value:i.body,onChangeHandler:h,width:"100%",toolbarMnu:"bold italic underline strikethrough | link | code | addFormField | toggleCode"})]}),e.jsx("br",{}),(i==null?void 0:i.taskNote)&&e.jsx(Y,{note:i==null?void 0:i.taskNote})]})}const H=`<p>${t("To ensure successful message delivery using the WhatsApp Business API:","bit-integrations")}</p>
            <ul>
                <li><strong>${t("The conversation must be initiated by the user.","bit-integrations")}</strong></li>
                <li>${t("To begin, <strong>send a message from your WhatsApp number to the recipient's number.</strong>","bit-integrations")}</li>
                <li>${t("Once the user has started the conversation, you can continue to communicate with the recipient normally.","bit-integrations")}</li>
            </ul>`,f=`<p>${t("To ensure successful message delivery using the WhatsApp Business API:","bit-integrations")}</p>
            <ul>
                <li><strong>${t("The conversation must be initiated by the user.","bit-integrations")}</strong></li>
                <li>${t("To begin, <strong>send a message from your WhatsApp number to the recipient's number.</strong>","bit-integrations")}</li>
                <li>${t("Once the user has started the conversation, you can continue to communicate with the recipient normally.","bit-integrations")}</li>
            </ul>
            <h5>${t("Caption","bit-integrations")}</h5>
            <ul>
                <li>${t("Do not use with <strong>audio</strong> or <strong>sticker</strong> media.","bit-integrations")}</li>
                <li>${t("Media asset <strong>caption</strong>.","bit-integrations")}</li>
                <li>${t("<strong>Captions</strong> are currently not supported for <strong>document</strong> media","bit-integrations")}</li>
            </ul>
            <h5>${t("FileName","bit-integrations")}</h5>
            <ul>
                <li>${t("Use only with <strong>document media</strong>.","bit-integrations")}</li>
                <li>${t("Describes the <strong>FileName</strong> for the specific <strong>document</strong>.","bit-integrations")}</li>
                <li>${t("The extension of the filename will specify what format the document is displayed as in WhatsApp.","bit-integrations")}</li>
            </ul>`,S=[{key:"first_name",label:t("First Name","bit-integrations"),required:!0},{key:"last_name",label:t("Last Name","bit-integrations"),required:!1},{key:"middle_name",label:t("Middle Name","bit-integrations"),required:!1},{key:"suffix",label:t("Suffix","bit-integrations"),required:!1},{key:"prefix",label:t("Prefix","bit-integrations"),required:!1},{key:"birthday",label:t("Birthday (YEAR_MONTH_DAY)","bit-integrations"),required:!1},{key:"company",label:t("Company","bit-integrations"),required:!1},{key:"department",label:t("Department","bit-integrations"),required:!1},{key:"title",label:t("Business title","bit-integrations"),required:!1},{key:"HOME_email",label:t("Email (Home)","bit-integrations"),required:!1},{key:"WORK_email",label:t("Email (Work)","bit-integrations"),required:!1},{key:"CELL_phone",label:t("Phone Number (Cell)","bit-integrations"),required:!1},{key:"MAIN_phone",label:t("Phone Number (Main)","bit-integrations"),required:!1},{key:"IPHONE_phone",label:t("Phone Number (IPhone)","bit-integrations"),required:!1},{key:"HOME_phone",label:t("Phone Number (Home)","bit-integrations"),required:!1},{key:"WORK_phone",label:t("Phone Number (Work)","bit-integrations"),required:!1},{key:"HOME_street",label:t("Street (Home)","bit-integrations"),required:!1},{key:"HOME_city",label:t("City (Home)","bit-integrations"),required:!1},{key:"HOME_state",label:t("State (Home)","bit-integrations"),required:!1},{key:"HOME_zip",label:t("Zip (Home)","bit-integrations"),required:!1},{key:"HOME_country",label:t("Country (Home)","bit-integrations"),required:!1},{key:"HOME_country_code",label:t("Country Code (Home)","bit-integrations"),required:!1},{key:"WORK_street",label:t("Street (Work)","bit-integrations"),required:!1},{key:"WORK_city",label:t("City (Work)","bit-integrations"),required:!1},{key:"WORK_state",label:t("State (Work)","bit-integrations"),required:!1},{key:"WORK_zip",label:t("Zip (Work)","bit-integrations"),required:!1},{key:"WORK_country",label:t("Country (Work)","bit-integrations"),required:!1},{key:"WORK_country_code",label:t("Country Code (Work)","bit-integrations"),required:!1}],P=(r,s)=>!!(r||!s||r&&s),p=r=>e.jsxs("span",{children:[r," ",e.jsx("small",{className:"txt-purple",children:"(Pro)"})]});export{le as W};
