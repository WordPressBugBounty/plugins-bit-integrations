var _=Object.defineProperty;var N=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var v=(r,t,l)=>t in r?_(r,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):r[t]=l,k=(r,t)=>{for(var l in t||(t={}))A.call(t,l)&&v(r,l,t[l]);if(N)for(var l of N(t))D.call(t,l)&&v(r,l,t[l]);return r};var x=(r,t,l)=>new Promise((e,d)=>{var a=i=>{try{n(l.next(i))}catch(c){d(c)}},h=i=>{try{n(l.throw(i))}catch(c){d(c)}},n=i=>i.done?e(i.value):Promise.resolve(i.value).then(a,h);n((l=l.apply(r,t)).next())});import{f as $,j as s,L as z}from"./main-246.js";import{c as f,_ as m,s as S,d as W}from"./bi.560.0.js";import{h as I,a as U,b as F,d as H}from"./bi.834.745.js";import{y as O}from"./bi.675.443.js";import{h as M}from"./bi.135.746.js";import{T as E}from"./bi.975.11.js";import{a as P}from"./bi.545.3.js";import{T as G}from"./bi.300.720.js";const ae=(r,t,l,e,d,a,h,n,i)=>{let c=k({},t);if(h){const p=k({},n);p[r.target.name]="",i(k({},p))}switch(c[r.target.name]=r.target.value,r.target.name){case"spreadsheetId":c=q(c,e,l,d,a);break;case"worksheetName":c=V(c,e,l,d,a);break}l(k({},c))},q=(r,t,l,e,d)=>{var h,n,i,c,p,u,o,g,b;const a=O(r);return a.worksheetName="",a.headerRow="A1",a.field_map=[{formField:"",googleSheetField:""}],(n=(h=a==null?void 0:a.default)==null?void 0:h.worksheets)!=null&&n[r.spreadsheetId]?Object.keys((c=(i=a==null?void 0:a.default)==null?void 0:i.worksheets)==null?void 0:c[r.spreadsheetId]).length===1&&(a.worksheetName=(u=(p=a==null?void 0:a.default)==null?void 0:p.worksheets)==null?void 0:u[r.spreadsheetId][0].properties.title,(b=(g=(o=a==null?void 0:a.default)==null?void 0:o.worksheets)==null?void 0:g.headers)!=null&&b[a.worksheetName]||j(t,a,l,e,d)):R(t,a,l,e,d),a},V=(r,t,l,e,d)=>{var h,n,i;const a=k({},r);return a.headerRow="A1",a.field_map=[{formField:"",googleSheetField:""}],(i=(n=(h=a==null?void 0:a.default)==null?void 0:h.worksheets)==null?void 0:n.headers)!=null&&i[r.worksheetName]||j(t,a,l,e,d),a},B=(r,t,l,e,d)=>{var n;const a=!((n=t.tokenDetails)!=null&&n.selectedAuthType)||t.tokenDetails.selectedAuthType==="Custom Authorization",h={formID:r,id:t.id,clientId:a?t.clientId:t.oneClickAuthCredentials.clientId,clientSecret:a?t.clientSecret:t.oneClickAuthCredentials.clientSecret,tokenDetails:t.tokenDetails,ownerEmail:t.ownerEmail};e(!0),f(h,"gsheet_refresh_spreadsheets").then(i=>{if(i&&i.success){const c=k({},t);c.default||(c.default={}),i.data.spreadsheets&&(c.default.spreadsheets=i.data.spreadsheets),i.data.tokenDetails&&(c.tokenDetails=i.data.tokenDetails),d({show:!0,msg:m("Spreadsheet refreshed","bit-integrations")}),l(k({},c))}else i&&i.data&&i.data.data||!i.success&&typeof i.data=="string"?d({show:!0,msg:S(m("Spreadsheet refresh failed Cause: %s. please try again","bit-integrations"),i.data.data||i.data)}):d({show:!0,msg:m("Spreadsheet refresh failed. please try again","bit-integrations")});e(!1)}).catch(()=>e(!1))},R=(r,t,l,e,d)=>{const{spreadsheetId:a}=t;if(!a)return;e(!0);const h={formID:r,spreadsheetId:a,tokenDetails:t.tokenDetails};f(h,"gsheet_refresh_worksheets").then(n=>{if(n&&n.success){const i=k({},t);n.data.worksheets&&(i.default.worksheets||(i.default.worksheets={}),i.default.worksheets[a]=n.data.worksheets),n.data.tokenDetails&&(i.tokenDetails=n.data.tokenDetails),d({show:!0,msg:m("Worksheets refreshed","bit-integrations")}),l(k({},i))}else d({show:!0,msg:m("Worksheets refresh failed. please try again","bit-integrations")});e(!1)}).catch(()=>e(!1))},j=(r,t,l,e,d)=>{var u;const{spreadsheetId:a,worksheetName:h,header:n,headerRow:i}=t;if(!a&&!h&&!n&&!i)return;e(!0);const c=!((u=t.tokenDetails)!=null&&u.selectedAuthType)||t.tokenDetails.selectedAuthType==="Custom Authorization",p={formID:r,spreadsheetId:a,worksheetName:h,header:n,headerRow:i,clientId:c?t.clientId:t.oneClickAuthCredentials.clientId,clientSecret:c?t.clientSecret:t.oneClickAuthCredentials.clientSecret,tokenDetails:t.tokenDetails};f(p,"gsheet_refresh_worksheet_headers").then(o=>{var g;if(o&&o.success){const b=k({},t);((g=o.data.worksheet_headers)==null?void 0:g.length)>0?(b.default.headers||(b.default.headers={}),b.default.headers[a]||(b.default.headers[a]={}),b.default.headers[a][h]||(b.default.headers[a][h]={}),b.default.headers[a][h][i]=o.data.worksheet_headers,o.data.tokenDetails&&(b.tokenDetails=o.data.tokenDetails),d({show:!0,msg:m("Worksheet Headers refreshed","bit-integrations")})):d({show:!0,msg:m("No Worksheet headers found. Try changing the header row number or try again","bit-integrations")}),o.data.tokenDetails&&(b.tokenDetails=o.data.tokenDetails),l(k({},b))}else d({show:!0,msg:m("Worksheet Headers refresh failed. please try again","bit-integrations")});e(!1)}).catch(()=>e(!1))},se=(r,t,l,e)=>{let d="";if(t==="One Click Authorization")d=r.oneClickAuthCredentials.clientId;else if(t==="Custom Authorization"){if(!r.clientId||!r.clientSecret){l({clientId:r.clientId?"":m("Client Id can't be empty","bit-integrations"),clientSecret:r.clientSecret?"":m("Secret key can't be empty","bit-integrations")});return}d=r.clientId}e(!0);const a="https://www.googleapis.com/auth/drive",n=t==="One Click Authorization"?"https://auth-apps.bitapps.pro/redirect/v2":`${btcbi.api.base}/redirect`,{href:i,hash:c}=window.location,p=c?i.replace(c,"#/auth-response/"):`${i}#/auth-response/`,u=`https://accounts.google.com/o/oauth2/v2/auth?scope=${a}&access_type=offline&prompt=consent&response_type=code&state=${encodeURIComponent(p)}&redirect_uri=${encodeURIComponent(n)}&client_id=${d}`,o=window.open(u,"googleSheet","width=400,height=609,toolbar=off");if(t==="Custom Authorization"){const g=setInterval(()=>{o.closed&&(clearInterval(g),e(!1))},500)}},ie=(r,t,l,e,d,a,h,n)=>x(void 0,null,function*(){if(!e)return;const i={};i.code=r.code||"",i.clientId=e==="One Click Authorization"?t.oneClickAuthCredentials.clientId:t.clientId,i.clientSecret=e==="One Click Authorization"?t.oneClickAuthCredentials.clientSecret:t.clientSecret;const c="https://auth-apps.bitapps.pro/redirect/v2";i.redirectURI=e==="One Click Authorization"?c:`${btcbi.api.base}/redirect`,h(!0),yield f(i,"gsheet_generate_token").then(p=>p).then(p=>x(void 0,null,function*(){if(p&&p.success){const u=yield J(p.data);if(u){const o=k({},t);p.data.selectedAuthType=e,yield M(o.type,p.data,u,a),o.setisAuthorized=!0,l(o),n({show:!0,msg:m("Authorized Successfully","bigt-integrations")})}}else p&&p.data&&p.data.data||!p.success&&typeof p.data=="string"?n({show:!0,msg:`${m("Authorization failed Cause:","bit-integrations")}${p.data.data||p.data}. ${m("please try again","bit-integrations")}`}):n({show:!0,msg:m("Authorization failed. please try again","bit-integrations")});h(!1)}))}),re=r=>!((r.field_map?r.field_map.filter(l=>!l.formField&&!l.googleSheetField):[]).length>0);function J(r){return x(this,null,function*(){const t=r.access_token;try{return yield(yield fetch("https://www.googleapis.com/drive/v3/about?fields=user",{headers:{Authorization:`Bearer ${t}`}})).json()}catch(l){console.error("Error fetching user info:",l)}})}function K({i:r,formFields:t,field:l,sheetConf:e,setSheetConf:d}){var n,i,c,p,u;const a=$(W),{isPro:h}=a;return s.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[s.jsxs("div",{className:"flx integ-fld-wrp",children:[s.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:l.formField||"",onChange:o=>I(o,r,e,d),children:[s.jsx("option",{value:"",children:m("Select Field","bit-integrations")}),s.jsx("optgroup",{label:m("Form Fields","bit-integrations"),children:t.map(o=>s.jsx("option",{value:o.name,children:o.label},`ff-zhcrm-${o.name}`))}),s.jsx("option",{value:"custom",children:m("Custom...","bit-integrations")}),s.jsx("optgroup",{label:`${m("General Smart Codes","bit-integrations")} ${h?"":`(${m("Pro","bit-integrations")})`}`,children:h&&((n=P)==null?void 0:n.map(o=>s.jsx("option",{value:o.name,children:o.label},`ff-rm-${o.name}`)))})]}),l.formField==="custom"&&s.jsx(G,{onChange:o=>U(o,r,e,d),label:m("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:l.customValue||"",placeholder:m("Custom Value","bit-integrations"),formFields:t}),s.jsxs("select",{className:"btcd-paper-inp",name:"googleSheetField",value:l.googleSheetField||"",onChange:o=>I(o,r,e,d),children:[s.jsx("option",{value:"",children:m("Select Field","bit-integrations")}),((u=(p=(c=(i=e.default)==null?void 0:i.headers)==null?void 0:c[e.spreadsheetId])==null?void 0:p[e.worksheetName])==null?void 0:u[e.headerRow])&&Object.values(e.default.headers[e.spreadsheetId][e.worksheetName][e.headerRow]).map((o,g)=>s.jsx("option",{value:o,children:o.replace(`_${g}`,"")},`gsheet-${g*2}`))]})]}),s.jsx("button",{onClick:()=>F(r,e,d),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),s.jsx("button",{onClick:()=>H(r,e,d),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:s.jsx(E,{})})]})}function le({formID:r,formFields:t,handleInput:l,sheetConf:e,setSheetConf:d,isLoading:a,setIsLoading:h,setSnackbar:n}){var i,c,p,u,o,g,b;return s.jsxs(s.Fragment,{children:[s.jsx("br",{}),s.jsx("b",{className:"wdt-200 d-in-b",children:m("Spreadsheets:","bit-integrations")}),s.jsxs("select",{onChange:l,name:"spreadsheetId",value:e.spreadsheetId,className:"btcd-paper-inp w-5",children:[s.jsx("option",{value:"",children:m("Select Spreadsheet","bit-integrations")}),((i=e==null?void 0:e.default)==null?void 0:i.spreadsheets)&&Object.keys(e.default.spreadsheets).map(w=>s.jsx("option",{value:e.default.spreadsheets[w].spreadsheetId,children:e.default.spreadsheets[w].spreadsheetName},w))]}),s.jsx("button",{onClick:()=>B(r,e,d,h,n),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Spreadsheet"'},type:"button",disabled:a,children:"↻"}),s.jsx("br",{}),s.jsx("br",{}),e.spreadsheetId&&s.jsxs(s.Fragment,{children:[s.jsx("b",{className:"wdt-200 d-in-b",children:"Worksheet:"}),s.jsxs("select",{onChange:l,name:"worksheetName",value:e.worksheetName,className:"btcd-paper-inp w-5",children:[s.jsx("option",{value:"",children:m("Select Worksheet","bit-integrations")}),((p=(c=e==null?void 0:e.default)==null?void 0:c.worksheets)==null?void 0:p[e.spreadsheetId])&&e.default.worksheets[e.spreadsheetId].map(w=>s.jsx("option",{value:w.properties.title,children:w.properties.title},w.properties.sheetId))]}),s.jsx("button",{onClick:()=>R(r,e,d,h,n),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Sheet Worksheets"'},type:"button",disabled:a,children:"↻"})]}),s.jsx("br",{}),s.jsx("br",{}),e.spreadsheetId&&e.worksheetName&&s.jsxs(s.Fragment,{children:[s.jsx("b",{className:"wdt-200 d-in-b",children:m("Header Row:","bit-integrations")}),s.jsx("input",{type:"text",min:"1",className:"btcd-paper-inp w-5",placeholder:"Header Row",onChange:l,value:e.headerRow,name:"headerRow"}),s.jsx("button",{onClick:()=>j(r,e,d,h,n),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Worksheet Headers"'},type:"button",disabled:a,children:"↻"}),s.jsx("br",{}),s.jsx("small",{className:"mt-3 d-blk w-5",style:{marginLeft:200,lineHeight:1.8,textAlign:"justify"},children:m("By default, first row of the worksheet is considered as header row. This can be used if tabular data starts from any row other than the first row.","bit-integrations")})]}),a&&s.jsx(z,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),((b=(g=(o=(u=e.default)==null?void 0:u.headers)==null?void 0:o[e.spreadsheetId])==null?void 0:g[e.worksheetName])==null?void 0:b[e.headerRow])&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"mt-4",children:s.jsx("b",{className:"wdt-100",children:m("Map Fields","bit-integrations")})}),s.jsx("div",{className:"btcd-hr mt-1"}),s.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:m("Form Fields","bit-integrations")})}),s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:m("Google Fields","bit-integrations")})})]}),e.field_map.map((w,y)=>s.jsx(K,{i:y,field:w,sheetConf:e,formFields:t,setSheetConf:d},`sheet-m-${y+9}`)),s.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:s.jsx("button",{onClick:()=>F(e.field_map.length,e,d),className:"icn-btn sh-sm",type:"button",children:"+"})}),s.jsx("br",{}),s.jsx("br",{})]})]})}export{le as G,se as a,re as c,ae as h,B as r,ie as t};
