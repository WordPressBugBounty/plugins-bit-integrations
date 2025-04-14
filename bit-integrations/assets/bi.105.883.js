var y=Object.defineProperty,$=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var I=(e,a,t)=>a in e?y(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,o=(e,a)=>{for(var t in a||(a={}))W.call(a,t)&&I(e,t,a[t]);if(S)for(var t of S(a))p.call(a,t)&&I(e,t,a[t]);return e},d=(e,a)=>$(e,g(a));import{_ as i,V as h,c as b}from"./bi.560.0.js";const v=(e,a,t)=>{const s=o({},a),{name:n}=e.target;e.target.value!==""?s[n]=e.target.value:delete s[n],t(o({},s))},P=e=>!((e!=null&&e.field_map?e.field_map.filter(t=>!t.formField||!t.zohoSheetFormField||t.formField==="custom"&&!t.customValue):[]).length>0),R=(e,a,t,s)=>{s(d(o({},t),{workbooks:!0}));const n={tokenDetails:e.tokenDetails,clientId:e.clientId,clientSecret:e.clientSecret,dataCenter:e.dataCenter};b(n,"zohoSheet_fetch_all_work_books").then(r=>{if(r&&r.success){const c=o({},e);r.data&&(c.workbooks=r.data),a(c),s(d(o({},t),{workbooks:!1})),h.success(i("Workbooks fetched successfully","bit-integrations"));return}s(d(o({},t),{workbooks:!1})),h.error(i("Workbooks fetching failed","bit-integrations"))})},F=(e,a,t,s)=>{s(d(o({},t),{worksheets:!0}));const n={tokenDetails:e.tokenDetails,clientId:e.clientId,clientSecret:e.clientSecret,dataCenter:e.dataCenter,workbook:e.selectedWorkbook};b(n,"zohoSheet_fetch_all_work_sheets").then(r=>{if(r&&r.success){const c=o({},e);r.data&&(c.worksheets=r.data),a(c),s(d(o({},t),{worksheets:!1})),h.success(i("Worksheets fetched successfully","bit-integrations"));return}s(d(o({},t),{worksheets:!1})),h.error(i("Worksheets fetching failed","bit-integrations"))})},H=(e,a,t,s)=>{s(d(o({},t),{header:!0,workSheetHeaders:!1}));const n={tokenDetails:e.tokenDetails,clientId:e.clientId,clientSecret:e.clientSecret,dataCenter:e.dataCenter,workbook:e.selectedWorkbook,worksheet:e.selectedWorksheet,headerRow:e.headerRow};b(n,"zohoSheet_fetch_all_work_sheet_header").then(r=>{if(r&&r.success){const c=o({},e);r.data&&(c.workSheetHeaders=r.data),a(c),s(d(o({},t),{header:!1,workSheetHeaders:!0})),h.success(i("Worksheet headers fetched successfully","bit-integrations"));return}s(d(o({},t),{header:!1,workSheetHeaders:!1})),h.error(i(`${r.data}`,"bit-integrations"))})},q=e=>{const a={},s=window.location.href.replace(`${window.opener.location.href}/redirect`,"").split("&");s&&s.forEach(n=>{const r=n.split("=");r[1]&&(a[r[0]]=r[1])}),localStorage.setItem(`__${e}`,JSON.stringify(a)),window.close()},U=(e,a,t,s,n,r)=>{if(!e.dataCenter||!e.clientId||!e.clientSecret){t({dataCenter:e.dataCenter?"":i("Data center can't be empty"),clientId:e.clientId?"":i("Client ID can't be empty"),clientSecret:e.clientSecret?"":i("Secret key can't be empty")});return}r(d(o({},n),{auth:!0}));const c="ZohoSheet.dataAPI.READ,ZohoSheet.dataAPI.UPDATE",l=`https://accounts.zoho.${e.dataCenter}/oauth/v2/auth?scope=${c}&response_type=code&client_id=${e.clientId}&prompt=Consent&access_type=offline&state=${encodeURIComponent(window.location.href)}/redirect&redirect_uri=${encodeURIComponent(`${btcbi.api.base}/redirect`)}`,u=window.open(l,"__zohoSheet","width=400,height=609,toolbar=off"),C=setInterval(()=>{if(u.closed){clearInterval(C);let k={},f=!1;const _=localStorage.getItem("__zohoSheet");if(_&&(f=!0,k=JSON.parse(_),localStorage.removeItem("__zohoSheet")),!k.code||k.error||!k||!f){const w=k.error?`Cause: ${k.error}`:"";h.error(i(`${i("Authorization Failed")} ${w}. ${i("please try again")}`,"bit-integrations")),r(d(o({},n),{auth:!1}))}else{const w=o({},e);w.accountServer=k["accounts-server"],A(k,w,a,s,n,r)}}},500)},A=(e,a,t,s,n,r)=>{const c=o({},e);c.dataCenter=a.dataCenter,c.clientId=a.clientId,c.clientSecret=a.clientSecret,c.redirectURI=`${btcbi.api.base}/redirect`,b(c,"zohoSheet_generate_token").then(l=>l).then(l=>{if(l&&l.success){const u=o({},a);u.tokenDetails=l.data,t(u),s(!0),h.success(i("Authorized Successfully","bit-integrations")),R(u,t,n,r)}else l&&l.data&&l.data.data||!l.success&&typeof l.data=="string"?h.error(i(`${i("Authorization failed Cause:")}${l.data.data||l.data}. ${i("please try again")}`,"bit-integrations")):h.error(i("Authorization failed. please try again","bit-integrations"));r(d(o({},n),{auth:!1}))})};export{F as a,H as b,P as c,U as d,R as g,v as h,q as s};
