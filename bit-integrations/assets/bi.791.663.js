var y=Object.defineProperty;var m=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var _=(t,e,s)=>e in t?y(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,f=(t,e)=>{for(var s in e||(e={}))S.call(e,s)&&_(t,s,e[s]);if(m)for(var s of m(e))F.call(e,s)&&_(t,s,e[s]);return t};import{_ as c,c as h,b,t as v}from"./bi.751.13.js";const I=(t,e,s,l,d,a,i=0)=>{let r=f({},e);const{name:o}=t.target;switch(t.target.value!==""?r[o]=t.target.value:delete r[o],r[t.target.name]=t.target.value,t.target.name){case"folder":r.folderMap=r.folderMap.slice(0,i),r=k(r,l,s,d,a);break}s(f({},r))},k=(t,e,s,l,d)=>{var i,r,o,n,u,p;const a=f({},t);return delete a.teamType,a.folder&&!((r=(i=a.default)==null?void 0:i.folders)!=null&&r[a.folder])?(((p=(u=(n=(o=a.default)==null?void 0:o.teamFolders)==null?void 0:n[a.team])==null?void 0:u[a.folder])==null?void 0:p.type)==="private"&&(a.teamType="private"),w(e,a,s,l,d)):a.folder&&a.folder!==a.folderMap[a.folderMap.length-1]&&a.folderMap.push(a.folder),a},O=(t,e,s,l,d)=>{l(!0);const a={flowID:t!=null?t:null,clientId:e.clientId,clientSecret:e.clientSecret,tokenDetails:e.tokenDetails},i=b(a,"oneDrive_get_all_folders").then(r=>{if(r&&r.success){const o=f({},e);return o.default||(o.default={}),r.data.oneDriveFoldersList&&(o.default.rootFolders=r.data.oneDriveFoldersList,o.tokenDetails=r.data.tokenDetails),s(o),l(!1),c("OneDrive Folders List refreshed successfully","bit-integrations")}else return l(!1),c("OneDrive Folders List refresh failed. please try again","bit-integrations")}).catch(()=>l(!1));h.promise(i,{success:r=>r,error:c("Error Occurred","bit-integrations"),loading:c("Loading OneDrive Folders List...","bit-integrations")})},w=(t,e,s,l,d,a)=>{const i=a?e.folderMap[a]:e.folder;l(!0);const r={formID:t,dataCenter:e.dataCenter,clientId:e.clientId,clientSecret:e.clientSecret,tokenDetails:e.tokenDetails,team:e.team,folder:i,teamType:"teamType"in e?"private":"team"};b(r,"oneDrive_get_single_folder").then(o=>{if(o&&o.success){const n=f({},e);o.data.folders?(n.default.folders||(n.default.folders={}),n.default.folders[i]=v(o.data.folders,"folderName"),n.folderMap.includes(i)||n.folderMap.push(i),d({show:!0,msg:c("Sub Folders refreshed","bitform")})):d({show:!0,msg:c("No Sub Folder Found","bitform")}),o.data.tokenDetails&&(n.tokenDetails=o.data.tokenDetails),s(f({},n))}else d({show:!0,msg:c("Sub Folders refresh failed. please try again","bitform")});l(!1)}).catch(()=>l(!1))},R=(t,e,s,l,d)=>{if(!t.clientId||!t.clientSecret){d({clientId:t.clientId?"":c("Client Id can't be empty","bit-integrations"),clientSecret:t.clientSecret?"":c("Client Secret can't be empty","bit-integrations")});return}l(!0);const a="onedrive.readwrite offline_access Files.ReadWrite.All",i=`https://login.live.com/oauth20_authorize.srf?client_id=${t.clientId}&scope=${a}&access_type=offline&prompt=consent&response_type=code&state=${encodeURIComponent(window.location.href)}/redirect&redirect_uri=${encodeURIComponent(`${btcbi.api.base}/redirect`)}`,r=window.open(i,"oneDrive","width=400,height=609,toolbar=off"),o=setInterval(()=>{if(r.closed){clearInterval(o);let n={},u=!1;const p=localStorage.getItem("__oneDrive");if(p&&(u=!0,n=JSON.parse(p),localStorage.removeItem("__oneDrive")),!n.code||n.error||!n||!u){const g=n.error?`Cause: ${n.error}`:"";h.error(`${c("Authorization Failed","bit-integrations")} ${g}. ${c("please try again","bit-integrations")}`),l(!1)}else{const g=f({},t);g.accountServer=n["accounts-server"],$(n,g,e,s,l)}}},500)},$=(t,e,s,l,d)=>{const a=f({},t);a.clientId=e.clientId,a.clientSecret=e.clientSecret,a.redirectURI=`${btcbi.api.base}/redirect`,b(a,"oneDrive_authorization").then(i=>{if(i&&i.success){const r=f({},e);r.tokenDetails=i.data,s(r),l(!0),h.success(c("Authorized Successfully","bit-integrations"))}else i&&i.data&&i.data.data||!i.success&&typeof i.data=="string"?h.error(`${c("Authorization failed Cause:","bit-integrations")}${i.data.data||i.data}. ${c("please try again","bit-integrations")}`):h.error(c("Authorization failed. please try again","bit-integrations"));d(!1)})};export{w as a,R as b,O as g,I as h};
