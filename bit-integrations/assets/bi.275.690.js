var _=Object.defineProperty;var N=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var I=(i,t,r)=>t in i?_(i,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[t]=r,g=(i,t)=>{for(var r in t||(t={}))A.call(t,r)&&I(i,r,t[r]);if(N)for(var r of N(t))D.call(t,r)&&I(i,r,t[r]);return i};var x=(i,t,r)=>new Promise((e,o)=>{var a=n=>{try{d(r.next(n))}catch(m){o(m)}},l=n=>{try{d(r.throw(n))}catch(m){o(m)}},d=n=>n.done?e(n.value):Promise.resolve(n.value).then(a,l);d((r=r.apply(i,t)).next())});import{f as $,j as s,L as z}from"./main-263.js";import{c as f,_ as p,s as S,e as W}from"./bi.924.0.js";import{h as v,a as U,b as F,d as H}from"./bi.628.691.js";import{x as M}from"./bi.361.434.js";import{h as O}from"./bi.201.692.js";import{T as E}from"./bi.929.11.js";import{a as P}from"./bi.317.3.js";import{T as G}from"./bi.885.668.js";const ae=(i,t,r,e,o,a,l,d,n)=>{let m=g({},t);if(l){const c=g({},d);c[i.target.name]="",n(g({},c))}switch(m[i.target.name]=i.target.value,i.target.name){case"spreadsheetId":m=q(m,e,r,o,a);break;case"worksheetName":m=V(m,e,r,o,a);break}r(g({},m))},q=(i,t,r,e,o)=>{var l,d,n,m,c,u,h,b,w;const a=M(i);return a.worksheetName="",a.headerRow="A1",a.field_map=[{formField:"",googleSheetField:""}],(d=(l=a==null?void 0:a.default)==null?void 0:l.worksheets)!=null&&d[i.spreadsheetId]?Object.keys((m=(n=a==null?void 0:a.default)==null?void 0:n.worksheets)==null?void 0:m[i.spreadsheetId]).length===1&&(a.worksheetName=(u=(c=a==null?void 0:a.default)==null?void 0:c.worksheets)==null?void 0:u[i.spreadsheetId][0].properties.title,(w=(b=(h=a==null?void 0:a.default)==null?void 0:h.worksheets)==null?void 0:b.headers)!=null&&w[a.worksheetName]||j(t,a,r,e,o)):R(t,a,r,e,o),a},V=(i,t,r,e,o)=>{var l,d,n;const a=g({},i);return a.headerRow="A1",a.field_map=[{formField:"",googleSheetField:""}],(n=(d=(l=a==null?void 0:a.default)==null?void 0:l.worksheets)==null?void 0:d.headers)!=null&&n[i.worksheetName]||j(t,a,r,e,o),a},B=(i,t,r,e,o)=>{const a={formID:i,id:t.id,clientId:t.tokenDetails.selectedAuthType==="Custom Authorization"?t.clientId:t.oneClickAuthCredentials.clientId,clientSecret:t.tokenDetails.selectedAuthType==="Custom Authorization"?t.clientSecret:t.oneClickAuthCredentials.clientSecret,tokenDetails:t.tokenDetails,ownerEmail:t.ownerEmail};e(!0),f(a,"gsheet_refresh_spreadsheets").then(l=>{if(l&&l.success){const d=g({},t);d.default||(d.default={}),l.data.spreadsheets&&(d.default.spreadsheets=l.data.spreadsheets),l.data.tokenDetails&&(d.tokenDetails=l.data.tokenDetails),o({show:!0,msg:p("Spreadsheet refreshed","bit-integrations")}),r(g({},d))}else l&&l.data&&l.data.data||!l.success&&typeof l.data=="string"?o({show:!0,msg:S(p("Spreadsheet refresh failed Cause: %s. please try again","bit-integrations"),l.data.data||l.data)}):o({show:!0,msg:p("Spreadsheet refresh failed. please try again","bit-integrations")});e(!1)}).catch(()=>e(!1))},R=(i,t,r,e,o)=>{const{spreadsheetId:a}=t;if(!a)return;e(!0);const l={formID:i,spreadsheetId:a,tokenDetails:t.tokenDetails};f(l,"gsheet_refresh_worksheets").then(d=>{if(d&&d.success){const n=g({},t);d.data.worksheets&&(n.default.worksheets||(n.default.worksheets={}),n.default.worksheets[a]=d.data.worksheets),d.data.tokenDetails&&(n.tokenDetails=d.data.tokenDetails),o({show:!0,msg:p("Worksheets refreshed","bit-integrations")}),r(g({},n))}else o({show:!0,msg:p("Worksheets refresh failed. please try again","bit-integrations")});e(!1)}).catch(()=>e(!1))},j=(i,t,r,e,o)=>{const{spreadsheetId:a,worksheetName:l,header:d,headerRow:n}=t;if(!a&&!l&&!d&&!n)return;e(!0);const m={formID:i,spreadsheetId:a,worksheetName:l,header:d,headerRow:n,clientId:t.tokenDetails.selectedAuthType==="Custom Authorization"?t.clientId:t.oneClickAuthCredentials.clientId,clientSecret:t.tokenDetails.selectedAuthType==="Custom Authorization"?t.clientSecret:t.oneClickAuthCredentials.clientSecret,tokenDetails:t.tokenDetails};f(m,"gsheet_refresh_worksheet_headers").then(c=>{var u;if(c&&c.success){const h=g({},t);((u=c.data.worksheet_headers)==null?void 0:u.length)>0?(h.default.headers||(h.default.headers={}),h.default.headers[a]||(h.default.headers[a]={}),h.default.headers[a][l]||(h.default.headers[a][l]={}),h.default.headers[a][l][n]=c.data.worksheet_headers,c.data.tokenDetails&&(h.tokenDetails=c.data.tokenDetails),o({show:!0,msg:p("Worksheet Headers refreshed","bit-integrations")})):o({show:!0,msg:p("No Worksheet headers found. Try changing the header row number or try again","bit-integrations")}),c.data.tokenDetails&&(h.tokenDetails=c.data.tokenDetails),r(g({},h))}else o({show:!0,msg:p("Worksheet Headers refresh failed. please try again","bit-integrations")});e(!1)}).catch(()=>e(!1))},se=(i,t,r,e)=>{let o="";if(t==="One Click Authorization")o=i.oneClickAuthCredentials.clientId;else if(t==="Custom Authorization"){if(!i.clientId||!i.clientSecret){r({clientId:i.clientId?"":p("Client Id can't be empty","bit-integrations"),clientSecret:i.clientSecret?"":p("Secret key can't be empty","bit-integrations")});return}o=i.clientId}e(!0);const a="https://www.googleapis.com/auth/drive",d=t==="One Click Authorization"?"https://auth-apps.bitapps.pro/redirect/v2":`${btcbi.api.base}/redirect`,{href:n,hash:m}=window.location,c=m?n.replace(m,"#/auth-response/"):`${n}#/auth-response/`,u=`https://accounts.google.com/o/oauth2/v2/auth?scope=${a}&access_type=offline&prompt=consent&response_type=code&state=${encodeURIComponent(c)}&redirect_uri=${encodeURIComponent(d)}&client_id=${o}`,h=window.open(u,"googleSheet","width=400,height=609,toolbar=off");if(t==="Custom Authorization"){const b=setInterval(()=>{h.closed&&(clearInterval(b),e(!1))},500)}},ie=(i,t,r,e,o,a,l,d)=>x(void 0,null,function*(){if(!e)return;const n={};n.code=i.code||"",n.clientId=e==="One Click Authorization"?t.oneClickAuthCredentials.clientId:t.clientId,n.clientSecret=e==="One Click Authorization"?t.oneClickAuthCredentials.clientSecret:t.clientSecret;const m="https://auth-apps.bitapps.pro/redirect/v2";n.redirectURI=e==="One Click Authorization"?m:`${btcbi.api.base}/redirect`,l(!0),yield f(n,"gsheet_generate_token").then(c=>c).then(c=>x(void 0,null,function*(){if(c&&c.success){const u=yield J(c.data),h=o.some(b=>b.userInfo.user.emailAddress===u.user.emailAddress);if(u&&!h){const b=g({},t);c.data.selectedAuthType=e,yield O(b.type,c.data,u,a),b.authData=[...o,{tokenDetails:c.data,userInfo:u}],b.setisAuthorized=!0,r(b),d({show:!0,msg:p("Authorized Successfully","bit-integrations")})}else d({show:!0,msg:p("This account is already on the list.","bit-integrations")})}else c&&c.data&&c.data.data||!c.success&&typeof c.data=="string"?d({show:!0,msg:`${p("Authorization failed Cause:","bit-integrations")}${c.data.data||c.data}. ${p("please try again","bit-integrations")}`}):d({show:!0,msg:p("Authorization failed. please try again","bit-integrations")});l(!1)}))}),re=i=>!((i.field_map?i.field_map.filter(r=>!r.formField&&!r.googleSheetField):[]).length>0);function J(i){return x(this,null,function*(){const t=i.access_token;try{return yield(yield fetch("https://www.googleapis.com/drive/v3/about?fields=user",{headers:{Authorization:`Bearer ${t}`}})).json()}catch(r){console.error("Error fetching user info:",r)}})}function K({i,formFields:t,field:r,sheetConf:e,setSheetConf:o}){var d,n,m,c,u;const a=$(W),{isPro:l}=a;return s.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[s.jsxs("div",{className:"flx integ-fld-wrp",children:[s.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:r.formField||"",onChange:h=>v(h,i,e,o),children:[s.jsx("option",{value:"",children:p("Select Field","bit-integrations")}),s.jsx("optgroup",{label:p("Form Fields","bit-integrations"),children:t.map(h=>s.jsx("option",{value:h.name,children:h.label},`ff-zhcrm-${h.name}`))}),s.jsx("option",{value:"custom",children:p("Custom...","bit-integrations")}),s.jsx("optgroup",{label:`${p("General Smart Codes","bit-integrations")} ${l?"":`(${p("Pro","bit-integrations")})`}`,children:l&&((d=P)==null?void 0:d.map(h=>s.jsx("option",{value:h.name,children:h.label},`ff-rm-${h.name}`)))})]}),r.formField==="custom"&&s.jsx(G,{onChange:h=>U(h,i,e,o),label:p("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:r.customValue||"",placeholder:p("Custom Value","bit-integrations"),formFields:t}),s.jsxs("select",{className:"btcd-paper-inp",name:"googleSheetField",value:r.googleSheetField||"",onChange:h=>v(h,i,e,o),children:[s.jsx("option",{value:"",children:p("Select Field","bit-integrations")}),((u=(c=(m=(n=e.default)==null?void 0:n.headers)==null?void 0:m[e.spreadsheetId])==null?void 0:c[e.worksheetName])==null?void 0:u[e.headerRow])&&Object.values(e.default.headers[e.spreadsheetId][e.worksheetName][e.headerRow]).map((h,b)=>s.jsx("option",{value:h,children:h},`gsheet-${b*2}`))]})]}),s.jsx("button",{onClick:()=>F(i,e,o),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),s.jsx("button",{onClick:()=>H(i,e,o),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:s.jsx(E,{})})]})}function le({formID:i,formFields:t,handleInput:r,sheetConf:e,setSheetConf:o,isLoading:a,setIsLoading:l,setSnackbar:d}){var n,m,c,u,h,b,w;return s.jsxs(s.Fragment,{children:[s.jsx("br",{}),s.jsx("b",{className:"wdt-200 d-in-b",children:p("Spreadsheets:","bit-integrations")}),s.jsxs("select",{onChange:r,name:"spreadsheetId",value:e.spreadsheetId,className:"btcd-paper-inp w-5",children:[s.jsx("option",{value:"",children:p("Select Spreadsheet","bit-integrations")}),((n=e==null?void 0:e.default)==null?void 0:n.spreadsheets)&&Object.keys(e.default.spreadsheets).map(k=>s.jsx("option",{value:e.default.spreadsheets[k].spreadsheetId,children:e.default.spreadsheets[k].spreadsheetName},k))]}),s.jsx("button",{onClick:()=>B(i,e,o,l,d),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Spreadsheet"'},type:"button",disabled:a,children:"↻"}),s.jsx("br",{}),s.jsx("br",{}),e.spreadsheetId&&s.jsxs(s.Fragment,{children:[s.jsx("b",{className:"wdt-200 d-in-b",children:"Worksheet:"}),s.jsxs("select",{onChange:r,name:"worksheetName",value:e.worksheetName,className:"btcd-paper-inp w-5",children:[s.jsx("option",{value:"",children:p("Select Worksheet","bit-integrations")}),((c=(m=e==null?void 0:e.default)==null?void 0:m.worksheets)==null?void 0:c[e.spreadsheetId])&&e.default.worksheets[e.spreadsheetId].map(k=>s.jsx("option",{value:k.properties.title,children:k.properties.title},k.properties.sheetId))]}),s.jsx("button",{onClick:()=>R(i,e,o,l,d),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Sheet Worksheets"'},type:"button",disabled:a,children:"↻"})]}),s.jsx("br",{}),s.jsx("br",{}),e.spreadsheetId&&e.worksheetName&&s.jsxs(s.Fragment,{children:[s.jsx("b",{className:"wdt-200 d-in-b",children:p("Header Row:","bit-integrations")}),s.jsx("input",{type:"text",min:"1",className:"btcd-paper-inp w-5",placeholder:"Header Row",onChange:r,value:e.headerRow,name:"headerRow"}),s.jsx("button",{onClick:()=>j(i,e,o,l,d),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Worksheet Headers"'},type:"button",disabled:a,children:"↻"}),s.jsx("br",{}),s.jsx("small",{className:"mt-3 d-blk w-5",style:{marginLeft:200,lineHeight:1.8,textAlign:"justify"},children:p("By default, first row of the worksheet is considered as header row. This can be used if tabular data starts from any row other than the first row.","bit-integrations")})]}),a&&s.jsx(z,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),((w=(b=(h=(u=e.default)==null?void 0:u.headers)==null?void 0:h[e.spreadsheetId])==null?void 0:b[e.worksheetName])==null?void 0:w[e.headerRow])&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"mt-4",children:s.jsx("b",{className:"wdt-100",children:p("Map Fields","bit-integrations")})}),s.jsx("div",{className:"btcd-hr mt-1"}),s.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:p("Form Fields","bit-integrations")})}),s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:p("Google Fields","bit-integrations")})})]}),e.field_map.map((k,y)=>s.jsx(K,{i:y,field:k,sheetConf:e,formFields:t,setSheetConf:o},`sheet-m-${y+9}`)),s.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:s.jsx("button",{onClick:()=>F(e.field_map.length,e,o),className:"icn-btn sh-sm",type:"button",children:"+"})}),s.jsx("br",{}),s.jsx("br",{})]})]})}export{le as G,se as a,re as c,ae as h,B as r,ie as t};