var u=Object.defineProperty;var g=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var b=(e,t,a)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))y.call(t,a)&&b(e,a,t[a]);if(g)for(var a of g(t))C.call(t,a)&&b(e,a,t[a]);return e};import{_ as s,b as h,c as d}from"./bi.541.15.js";const _=(e,t,a)=>{const r=c({},t),{name:o}=e.target;e.target.value!==""?r[o]=e.target.value:delete r[o],a(c({},r))},F=(e,t,a)=>{const r={flowID:e!=null?e:null,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails},o=h(r,"dropbox_get_all_folders").then(n=>{if(n&&n.success){const i=c({},t);return n.data.dropboxFoldersList&&(i.foldersList=n.data.dropboxFoldersList,i.tokenDetails=n.data.tokenDetails),a(i),s("Dropbox Folders List refreshed successfully","bit-integrations")}else return s("Dropbox Folders List refresh failed. please try again","bit-integrations")});d.promise(o,{success:n=>n,error:s("Error Occurred","bit-integrations"),loading:s("Loading Dropbox Folders List...","bit-integrations")})},f=(e,t,a,r,o)=>{if(!e.accessCode||!e.clientId||!e.clientSecret){o({clientId:e.clientId?"":s("Client Id can't be empty","bit-integrations"),clientSecret:e.clientSecret?"":s("Client Secret can't be empty","bit-integrations"),accessCode:e.accessCode?"":s("Access Code can't be empty","bit-integrations")});return}r(!0);const n={clientId:e.clientId,clientSecret:e.clientSecret,accessCode:e.accessCode};h(n,"dropbox_authorization").then(i=>i).then(i=>{if(i&&i.success){const l=c({},e);l.tokenDetails=i.data,t(l),a(!0),d.success(s("Authorized Successfully","bit-integrations"))}else i&&i.data&&i.data.data||!i.success&&typeof i.data=="string"?d.error(`${s("Authorization failed Cause:","bit-integrations")} ${i.data.data||i.data} ${s("please try again","bit-integrations")}`):d.error(s("Authorization failed. please try again","bit-integrations"));r(!1)})};export{f as a,F as g,_ as h};
