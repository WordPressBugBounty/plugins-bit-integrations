var k=Object.defineProperty;var m=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var _=(e,a,t)=>a in e?k(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,d=(e,a)=>{for(var t in a||(a={}))w.call(a,t)&&_(e,t,a[t]);if(m)for(var t of m(a))b.call(a,t)&&_(e,t,a[t]);return e};import{_ as o,c as p,s as y}from"./bi.452.0.js";import{z as M}from"./bi.141.437.js";const D=(e,a,t,l,c,r,n,i,h)=>{let s=d({},a);if(n){const g=d({},i);g[e.target.name]="",h(d({},g))}switch(s[e.target.name]=e.target.value,e.target.name==="id"&&I(s,t,c,r),e.target.name){case"spreadsheetId":s=spreadSheetChange(s,l,t,c,r);break;case"worksheetName":s=worksheetChange(s,l,t,c,r);break}t(d({},s))},v=(e,a,t,l,c)=>{l(!0);const r={formID:e,clientId:a.clientId,accessToken:a.tokenDetails.access_token,clientSecret:a.clientSecret,refreshToken:a.tokenDetails.refresh_token,tokenDetails:a.tokenDetails};p(r,"zoom_fetch_all_meetings").then(n=>{if(n&&n.success){const i=d({},a);i.default||(i.default={}),n.data.allMeeting&&(i.default.allMeeting=n.data.allMeeting),c({show:!0,msg:o("Meeting list refreshed","bit-integrations")}),t(d({},i))}else n&&n.data&&n.data.data||!n.success&&typeof n.data=="string"?c({show:!0,msg:y(o("All Meeting list refresh failed Cause: %s. please try again","bit-integrations"),n.data.data||n.data)}):c({show:!0,msg:o("All Meeting list failed. please try again","bit-integrations")});l(!1)}).catch(()=>l(!1))},I=(e,a,t,l)=>{t(!0);const c={meetingId:e.id,clientId:e.clientId,accessToken:e.tokenDetails.access_token,clientSecret:e.clientSecret,refreshToken:e.tokenDetails.refresh_token,tokenDetails:e.tokenDetails};p(c,"zoom_fetch_all_fields").then(r=>{r&&r.success&&(a(n=>M(n,i=>{i.zoomFields=r.data,i.field_map=F(i.zoomFields)})),l({show:!0,msg:o("Zoom fields refreshed","bit-integrations")})),t(!1)}).catch(()=>t(!1))},z=(e,a,t,l,c,r)=>{if(!e.clientId||!e.clientSecret){t({clientId:e.clientId?"":o("Client Id can't be empty","bit-integrations"),clientSecret:e.clientSecret?"":o("Secret key can't be empty","bit-integrations")});return}c(!0);const n=`https://zoom.us/oauth/authorize?response_type=code&client_id=${e.clientId}&state=${encodeURIComponent(window.location.href)}/redirect&redirect_uri=${encodeURIComponent(`${btcbi.api.base}/redirect`)}`,i=window.open(n,"zoom","width=400,height=609,toolbar=off"),h=setInterval(()=>{if(i.closed){clearInterval(h);let s={},g=!1;const u=localStorage.getItem("__zoom");if(u&&(g=!0,s=JSON.parse(u),localStorage.removeItem("__zoom")),!s.code||s.error||!s||!g){const f=s.error?`Cause: ${s.error}`:"";r({show:!0,msg:`${o("Authorization failed","bit-integrations")} ${f}. ${o("please try again","bit-integrations")}`}),c(!1)}else{const f=d({},e);f.accountServer=s["accounts-server"],$(s,f,a,l,c,r)}}},500)},$=(e,a,t,l,c,r)=>{const n=d({},e);n.clientId=a.clientId,n.clientSecret=a.clientSecret,n.redirectURI=`${btcbi.api.base}/redirect`,p(n,"zoom_generate_token").then(i=>i).then(i=>{if(i&&i.success){const h=d({},a);h.tokenDetails=i.data,t(h),l(!0),r({show:!0,msg:o("Authorized Successfully","bit-integrations")})}else i&&i.data&&i.data.data||!i.success&&typeof i.data=="string"?r({show:!0,msg:`${o("Authorization failed Cause:","bit-integrations")}${i.data.data||i.data}. ${o("please try again","bit-integrations")}`}):r({show:!0,msg:o("Authorization failed. please try again","bit-integrations")});c(!1)})},q=e=>!((e.field_map?e.field_map.filter(t=>!t.formField&&!t.zoomConf):[]).length>0),F=(e=[])=>{const a=e==null?void 0:e.filter(t=>t.required===!0);return a.length>0?a.map(t=>({formField:"",zoomField:t.key})):[{formField:"",zoomField:""}]};export{z as a,q as c,D as h,I as r,v as z};
