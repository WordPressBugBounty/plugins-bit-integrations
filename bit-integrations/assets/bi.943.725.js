var y=Object.defineProperty;var b=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var f=(e,t,i)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,l=(e,t)=>{for(var i in t||(t={}))S.call(t,i)&&f(e,i,t[i]);if(b)for(var i of b(t))$.call(t,i)&&f(e,i,t[i]);return e};import{_ as a,d,c as v}from"./bi.51.0.js";const w=(e,t,i)=>{const n=l({},t),{name:s}=e.target;e.target.value!==""?n[s]=e.target.value:delete n[s],i(l({},n))},k=(e,t,i)=>{const n={flowID:e!=null?e:null,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails},s=v(n,"googleDrive_get_all_folders").then(r=>{if(r&&r.success){const o=l({},t);return r.data.googleDriveFoldersList&&(o.foldersList=r.data.googleDriveFoldersList,o.tokenDetails=r.data.tokenDetails),i(o),a("GoogleDrive Folders List refreshed successfully","bit-integrations")}else return a("GoogleDrive Folders List refresh failed. please try again","bit-integrations")});d.promise(s,{success:r=>r,error:a("Error Occurred","bit-integrations"),loading:a("Loading GoogleDrive Folders List...","bit-integrations")})},C=(e,t,i,n,s)=>{if(!e.clientId||!e.clientSecret){s({clientId:e.clientId?"":a("Client Id can't be empty","bit-integrations"),clientSecret:e.clientSecret?"":a("Client Secret can't be empty","bit-integrations")});return}n(!0);const o=`https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/drive&access_type=offline&prompt=consent&response_type=code&state=${encodeURIComponent(window.location.href)}/redirect&redirect_uri=${encodeURIComponent(`${btcbi.api.base}/redirect`)}&client_id=${e.clientId}`,g=window.open(o,"googleDrive","width=400,height=609,toolbar=off"),_=setInterval(()=>{if(g.closed){clearInterval(_);let c={},u=!1;const h=localStorage.getItem("__googleDrive");if(h&&(u=!0,c=JSON.parse(h),localStorage.removeItem("__googleDrive")),!c.code||c.error||!c||!u){const p=c.error?`Cause: ${c.error}`:"";d.error(`${a("Authorization Failed","bit-integrations")} ${p}. ${a("please try again","bit-integrations")}`),n(!1)}else{const p=l({},e);p.accountServer=c["accounts-server"],I(c,p,t,i,n)}}},500)},I=(e,t,i,n,s)=>{const r=l({},e);r.clientId=t.clientId,r.clientSecret=t.clientSecret,r.redirectURI=`${btcbi.api.base}/redirect`,v(r,"googleDrive_authorization").then(o=>{if(o&&o.success){const g=l({},t);g.tokenDetails=o.data,i(g),n(!0),d.success(a("Authorized Successfully","bit-integrations"))}else o&&o.data&&o.data.data||!o.success&&typeof o.data=="string"?d.error(`${a("Authorization failed Cause:","bit-integrations")}${o.data.data||o.data}. ${a("please try again","bit-integrations")}`):d.error(a("Authorization failed. please try again","bit-integrations"));s(!1)})};export{C as a,k as g,w as h};
