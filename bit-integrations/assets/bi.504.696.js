var Z=Object.defineProperty,L=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var W=Object.getOwnPropertySymbols;var ee=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable;var T=(i,a,n)=>a in i?Z(i,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[a]=n,k=(i,a)=>{for(var n in a||(a={}))ee.call(a,n)&&T(i,n,a[n]);if(W)for(var n of W(a))te.call(a,n)&&T(i,n,a[n]);return i},D=(i,a)=>L(i,C(a));var v=(i,a,n)=>new Promise((t,c)=>{var s=r=>{try{o(n.next(r))}catch(u){c(u)}},h=r=>{try{o(n.throw(r))}catch(u){c(u)}},o=r=>r.done?t(r.value):Promise.resolve(r.value).then(s,h);o((n=n.apply(i,a)).next())});import{f as M,j as e,L as V,r as y,e as ae}from"./main-920.js";import{c as I,_ as l,s as se,e as q,a as ie}from"./bi.247.0.js";import{h as G,a as re,b as B,d as ne}from"./bi.502.697.js";import{T as le}from"./bi.941.11.js";import{a as oe}from"./bi.658.3.js";import{T as de}from"./bi.722.674.js";import{B as ce}from"./bi.306.698.js";import{y as he,a1 as H,z as O}from"./bi.761.437.js";import{h as ue}from"./bi.815.699.js";import{T as P,t as me}from"./bi.898.700.js";import{A as pe}from"./bi.981.701.js";const Ee=(i,a,n,t,c,s,h,o,r)=>{let u=k({},a);if(h){const m=k({},o);m[i.target.name]="",r(k({},m))}switch(u[i.target.name]=i.target.value,i.target.name){case"spreadsheetId":u=be(u,t,n,c,s);break;case"worksheetName":u=ge(u,t,n,c,s);break}n(k({},u))},be=(i,a,n,t,c)=>{var h,o,r,u,m,x,d,j,g;const s=he(i);return s.worksheetName="",s.headerRow="A1",s.field_map=[{formField:"",googleSheetField:""}],(o=(h=s==null?void 0:s.default)==null?void 0:h.worksheets)!=null&&o[i.spreadsheetId]?Object.keys((u=(r=s==null?void 0:s.default)==null?void 0:r.worksheets)==null?void 0:u[i.spreadsheetId]).length===1&&(s.worksheetName=(x=(m=s==null?void 0:s.default)==null?void 0:m.worksheets)==null?void 0:x[i.spreadsheetId][0].properties.title,(g=(j=(d=s==null?void 0:s.default)==null?void 0:d.worksheets)==null?void 0:j.headers)!=null&&g[s.worksheetName]||$(a,s,n,t,c)):K(a,s,n,t,c),s},ge=(i,a,n,t,c)=>{var h,o,r;const s=k({},i);return s.headerRow="A1",s.field_map=[{formField:"",googleSheetField:""}],(r=(o=(h=s==null?void 0:s.default)==null?void 0:h.worksheets)==null?void 0:o.headers)!=null&&r[i.worksheetName]||$(a,s,n,t,c),s},J=(i,a,n,t,c)=>{var o;const s=!((o=a.tokenDetails)!=null&&o.selectedAuthType)||a.tokenDetails.selectedAuthType==="Custom Authorization",h={formID:i,id:a.id,clientId:s?a.clientId:a.oneClickAuthCredentials.clientId,clientSecret:s?a.clientSecret:a.oneClickAuthCredentials.clientSecret,tokenDetails:a.tokenDetails,ownerEmail:a.ownerEmail};t(!0),I(h,"gsheet_refresh_spreadsheets").then(r=>{if(r&&r.success){const u=k({},a);u.default||(u.default={}),r.data.spreadsheets&&(u.default.spreadsheets=r.data.spreadsheets),r.data.tokenDetails&&(u.tokenDetails=r.data.tokenDetails),c({show:!0,msg:l("Spreadsheet refreshed","bit-integrations")}),n(k({},u))}else r&&r.data&&r.data.data||!r.success&&typeof r.data=="string"?c({show:!0,msg:se(l("Spreadsheet refresh failed Cause: %s. please try again","bit-integrations"),r.data.data||r.data)}):c({show:!0,msg:l("Spreadsheet refresh failed. please try again","bit-integrations")});t(!1)}).catch(()=>t(!1))},K=(i,a,n,t,c)=>{const{spreadsheetId:s}=a;if(!s)return;t(!0);const h={formID:i,spreadsheetId:s,tokenDetails:a.tokenDetails};I(h,"gsheet_refresh_worksheets").then(o=>{if(o&&o.success){const r=k({},a);o.data.worksheets&&(r.default.worksheets||(r.default.worksheets={}),r.default.worksheets[s]=o.data.worksheets),o.data.tokenDetails&&(r.tokenDetails=o.data.tokenDetails),c({show:!0,msg:l("Worksheets refreshed","bit-integrations")}),n(k({},r))}else c({show:!0,msg:l("Worksheets refresh failed. please try again","bit-integrations")});t(!1)}).catch(()=>t(!1))},$=(i,a,n,t,c)=>{var x;const{spreadsheetId:s,worksheetName:h,header:o,headerRow:r}=a;if(!s&&!h&&!o&&!r)return;t(!0);const u=!((x=a.tokenDetails)!=null&&x.selectedAuthType)||a.tokenDetails.selectedAuthType==="Custom Authorization",m={formID:i,spreadsheetId:s,worksheetName:h,header:o,headerRow:r,clientId:u?a.clientId:a.oneClickAuthCredentials.clientId,clientSecret:u?a.clientSecret:a.oneClickAuthCredentials.clientSecret,tokenDetails:a.tokenDetails};I(m,"gsheet_refresh_worksheet_headers").then(d=>{var j;if(d&&d.success){const g=k({},a);((j=d.data.worksheet_headers)==null?void 0:j.length)>0?(g.default.headers||(g.default.headers={}),g.default.headers[s]||(g.default.headers[s]={}),g.default.headers[s][h]||(g.default.headers[s][h]={}),g.default.headers[s][h][r]=d.data.worksheet_headers,d.data.tokenDetails&&(g.tokenDetails=d.data.tokenDetails),c({show:!0,msg:l("Worksheet Headers refreshed","bit-integrations")})):c({show:!0,msg:l("No Worksheet headers found. Try changing the header row number or try again","bit-integrations")}),d.data.tokenDetails&&(g.tokenDetails=d.data.tokenDetails),n(k({},g))}else c({show:!0,msg:l("Worksheet Headers refresh failed. please try again","bit-integrations")});t(!1)}).catch(()=>t(!1))},xe=(i,a,n,t)=>{let c="";if(a==="One Click Authorization")c=i.oneClickAuthCredentials.clientId;else if(a==="Custom Authorization"){if(!i.clientId||!i.clientSecret){n({clientId:i.clientId?"":l("Client Id can't be empty","bit-integrations"),clientSecret:i.clientSecret?"":l("Secret key can't be empty","bit-integrations")});return}c=i.clientId}t(!0);const s="https://www.googleapis.com/auth/drive",o=a==="One Click Authorization"?"https://auth-apps.bitapps.pro/redirect/v2":`${btcbi.api.base}/redirect`,{href:r,hash:u}=window.location,m=u?r.replace(u,"#/auth-response/"):`${r}#/auth-response/`,x=`https://accounts.google.com/o/oauth2/v2/auth?scope=${s}&access_type=offline&prompt=consent&response_type=code&state=${encodeURIComponent(m)}&redirect_uri=${encodeURIComponent(o)}&client_id=${c}`,d=window.open(x,"googleSheet","width=400,height=609,toolbar=off");if(a==="Custom Authorization"){const j=setInterval(()=>{d.closed&&(clearInterval(j),t(!1))},500)}},ke=(i,a,n,t,c,s,h,o)=>v(void 0,null,function*(){if(!t)return;const r={};r.code=i.code||"",r.clientId=t==="One Click Authorization"?a.oneClickAuthCredentials.clientId:a.clientId,r.clientSecret=t==="One Click Authorization"?a.oneClickAuthCredentials.clientSecret:a.clientSecret;const u="https://auth-apps.bitapps.pro/redirect/v2";r.redirectURI=t==="One Click Authorization"?u:`${btcbi.api.base}/redirect`,h(!0),yield I(r,"gsheet_generate_token").then(m=>m).then(m=>v(void 0,null,function*(){if(m&&m.success){const x=yield je(m.data);if(x){const d=k({},a);m.data.selectedAuthType=t,yield ue(d.type,m.data,x,s),d.setisAuthorized=!0,n(d),o({show:!0,msg:l("Authorized Successfully","bigt-integrations")})}}else m&&m.data&&m.data.data||!m.success&&typeof m.data=="string"?o({show:!0,msg:`${l("Authorization failed Cause:","bit-integrations")}${m.data.data||m.data}. ${l("please try again","bit-integrations")}`}):o({show:!0,msg:l("Authorization failed. please try again","bit-integrations")});h(!1)}))}),Ue=i=>!((i.field_map?i.field_map.filter(n=>!n.formField&&!n.googleSheetField):[]).length>0);function je(i){return v(this,null,function*(){const a=i.access_token;try{return yield(yield fetch("https://www.googleapis.com/drive/v3/about?fields=user",{headers:{Authorization:`Bearer ${a}`}})).json()}catch(n){console.error("Error fetching user info:",n)}})}function we({i,formFields:a,field:n,sheetConf:t,setSheetConf:c}){var o,r,u,m,x;const s=M(q),{isPro:h}=s;return e.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:n.formField||"",onChange:d=>G(d,i,t,c),children:[e.jsx("option",{value:"",children:l("Select Field","bit-integrations")}),e.jsx("optgroup",{label:l("Form Fields","bit-integrations"),children:a.map(d=>e.jsx("option",{value:d.name,children:d.label},`ff-zhcrm-${d.name}`))}),e.jsx("option",{value:"custom",children:l("Custom...","bit-integrations")}),e.jsx("optgroup",{label:`${l("General Smart Codes","bit-integrations")} ${h?"":`(${l("Pro","bit-integrations")})`}`,children:h&&((o=oe)==null?void 0:o.map(d=>e.jsx("option",{value:d.name,children:d.label},`ff-rm-${d.name}`)))})]}),n.formField==="custom"&&e.jsx(de,{onChange:d=>re(d,i,t,c),label:l("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:n.customValue||"",placeholder:l("Custom Value","bit-integrations"),formFields:a}),e.jsxs("select",{className:"btcd-paper-inp",name:"googleSheetField",value:n.googleSheetField||"",onChange:d=>G(d,i,t,c),children:[e.jsx("option",{value:"",children:l("Select Field","bit-integrations")}),((x=(m=(u=(r=t.default)==null?void 0:r.headers)==null?void 0:u[t.spreadsheetId])==null?void 0:m[t.worksheetName])==null?void 0:x[t.headerRow])&&Object.values(t.default.headers[t.spreadsheetId][t.worksheetName][t.headerRow]).map((d,j)=>e.jsx("option",{value:d,children:d},`gsheet-${j*2}`))]})]}),e.jsx("button",{onClick:()=>B(i,t,c),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>ne(i,t,c),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx(le,{})})]})}function We({formID:i,formFields:a,handleInput:n,sheetConf:t,setSheetConf:c,isLoading:s,setIsLoading:h,setSnackbar:o}){var r,u,m,x,d,j,g;return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:l("Spreadsheets:","bit-integrations")}),e.jsxs("select",{onChange:n,name:"spreadsheetId",value:t.spreadsheetId,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:l("Select Spreadsheet","bit-integrations")}),((r=t==null?void 0:t.default)==null?void 0:r.spreadsheets)&&Object.keys(t.default.spreadsheets).map(p=>e.jsx("option",{value:t.default.spreadsheets[p].spreadsheetId,children:t.default.spreadsheets[p].spreadsheetName},p))]}),e.jsx("button",{onClick:()=>J(i,t,c,h,o),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Spreadsheet"'},type:"button",disabled:s,children:"↻"}),e.jsx("br",{}),e.jsx("br",{}),t.spreadsheetId&&e.jsxs(e.Fragment,{children:[e.jsx("b",{className:"wdt-200 d-in-b",children:"Worksheet:"}),e.jsxs("select",{onChange:n,name:"worksheetName",value:t.worksheetName,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:l("Select Worksheet","bit-integrations")}),((m=(u=t==null?void 0:t.default)==null?void 0:u.worksheets)==null?void 0:m[t.spreadsheetId])&&t.default.worksheets[t.spreadsheetId].map(p=>e.jsx("option",{value:p.properties.title,children:p.properties.title},p.properties.sheetId))]}),e.jsx("button",{onClick:()=>K(i,t,c,h,o),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Sheet Worksheets"'},type:"button",disabled:s,children:"↻"})]}),e.jsx("br",{}),e.jsx("br",{}),t.spreadsheetId&&t.worksheetName&&e.jsxs(e.Fragment,{children:[e.jsx("b",{className:"wdt-200 d-in-b",children:l("Header Row:","bit-integrations")}),e.jsx("input",{type:"text",min:"1",className:"btcd-paper-inp w-5",placeholder:"Header Row",onChange:n,value:t.headerRow,name:"headerRow"}),e.jsx("button",{onClick:()=>$(i,t,c,h,o),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Worksheet Headers"'},type:"button",disabled:s,children:"↻"}),e.jsx("br",{}),e.jsx("small",{className:"mt-3 d-blk w-5",style:{marginLeft:200,lineHeight:1.8,textAlign:"justify"},children:l("By default, first row of the worksheet is considered as header row. This can be used if tabular data starts from any row other than the first row.","bit-integrations")})]}),s&&e.jsx(V,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),((g=(j=(d=(x=t.default)==null?void 0:x.headers)==null?void 0:d[t.spreadsheetId])==null?void 0:j[t.worksheetName])==null?void 0:g[t.headerRow])&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:l("Map Fields","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:l("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:l("Google Fields","bit-integrations")})})]}),t.field_map.map((p,f)=>e.jsx(we,{i:f,field:p,sheetConf:t,formFields:a,setSheetConf:c},`sheet-m-${f+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>B(t.field_map.length,t,c),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{})]})]})}function Te({formID:i,sheetConf:a,setSheetConf:n,step:t,setstep:c,isLoading:s,setIsLoading:h,setSnackbar:o,redirectLocation:r,isEdit:u}){const[m,x]=y.useState(!1),[d,j]=y.useState({clientId:"",clientSecret:""}),g=M(q),{googleSheet:p}=me,[f,z]=y.useState([]),[A,Q]=ae(ie),[N,fe]=y.useState("Custom Authorization"),[R,F]=y.useState(null),S=b=>{xe(a,b,j,h)},E=()=>{h(!0);const b={actionName:a.type};I(null,"auth/get",b,"GET").then(w=>{w.success&&w.data.data.length>0&&z(w.data.data),h(!1)})};y.useEffect(()=>{t===1&&E()},[]),y.useEffect(()=>{if(t===1&&u){const b=f.find(w=>w.id===a.authId);F(b?a.authId:null)}},[f]);const X=b=>v(this,null,function*(){yield ke(b,a,n,N,f,z,h,o),Q(void 0),E()});y.useEffect(()=>{!A||Object.keys(A).length===0||X(A)},[A]);const _=b=>{const w=k({},a),U=k({},d);U[b.target.name]="",w[b.target.name]=b.target.value,j(U),n(w)},Y=()=>{const b=f.find(w=>w.id===R);n(w=>D(k({},w),{tokenDetails:b?b.tokenDetails:"",authId:b?b.id:""})),setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),c(2),J(i,D(k({},a),{tokenDetails:b?b.tokenDetails:"",authId:b?b.id:""}),n,h,o)};return e.jsxs("div",{className:"btcd-stp-page",style:{width:t===1&&900,height:t===1&&"auto"},children:[(p==null?void 0:p.youTubeLink)&&e.jsx(P,{title:"Google Sheets",youTubeLink:p==null?void 0:p.youTubeLink}),(p==null?void 0:p.docLink)&&e.jsx(P,{title:"Google Sheets",docLink:p==null?void 0:p.docLink}),N==="Custom Authorization"&&e.jsxs("div",{children:[e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:l("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:_,name:"name",value:a.name,type:"text",placeholder:l("Integration Name...","bit-integrations")}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:l("Homepage URL:","bit-integrations")})}),e.jsx(H,{value:`${window.location.origin}`,className:"field-key-cpy w-6 ml-0",setSnackbar:o}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:l("Authorized Redirect URIs:","bit-integrations")})}),e.jsx(H,{value:r||`${g.api.base}/redirect`,className:"field-key-cpy w-6 ml-0",setSnackbar:o}),e.jsxs("small",{className:"d-blk mt-5",children:[l("To get Client ID and SECRET , Please Visit","bit-integrations")," ",e.jsx("a",{className:"btcd-link",href:"https://console.developers.google.com/apis/credentials",target:"_blank",rel:"noreferrer",children:l("Google API Console","bit-integrations")})]}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:l("Client id:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:_,name:"clientId",value:a.clientId,type:"text",placeholder:l("Client id...","bit-integrations")}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:d.clientId}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:l("Client secret:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:_,name:"clientSecret",value:a.clientSecret,type:"text",placeholder:l("Client secret...","bit-integrations")}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:d.clientSecret}),e.jsxs("button",{onClick:()=>S(N),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:s,children:[m?l("Authorized ✔","bit-integrations"):l("Authorize","bit-integrations"),s&&e.jsx(O,{size:20,clr:"#022217",className:"ml-2"})]}),e.jsx("br",{})]}),s&&N!=="Custom Authorization"&&e.jsx(V,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),f.length>0&&e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Choose your connected account"}),e.jsx(pe,{authData:f,setAuthData:z,selectedUserId:R,setSelectedUserId:F,setIsLoading:h,isEdit:u})]}),m&&N==="One Click Authorization"&&e.jsxs("button",{onClick:()=>S(),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:s,children:[m?l("Authorized ✔","bit-integrations"):l("Authorize","bit-integrations"),s&&e.jsx(O,{size:20,clr:"#022217",className:"ml-2"})]}),e.jsx("br",{}),e.jsxs("button",{onClick:()=>Y(),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!R||f.length===0,children:[l("Next","bit-integrations"),e.jsx(ce,{className:"ml-1 rev-icn"})]})]})}export{Te as G,We as a,Ue as c,Ee as h};
