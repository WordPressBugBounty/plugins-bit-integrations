var _=Object.defineProperty;var M=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var k=(i,c,e)=>c in i?_(i,c,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[c]=e,n=(i,c)=>{for(var e in c||(c={}))P.call(c,e)&&k(i,e,c[e]);if(M)for(var e of M(c))y.call(c,e)&&k(i,e,c[e]);return i};import{f as x,j as a,r as S}from"./main-494.js";import{x as N}from"./bi.23.437.js";import{e as j,_ as u,M as g,d as f}from"./bi.185.0.js";import{a as G,h as B}from"./bi.104.3.js";import{T as w}from"./bi.378.675.js";import{b as E}from"./bi.617.11.js";import{T as I}from"./bi.926.688.js";import{g as D}from"./bi.258.728.js";const T=(i,c,e)=>{const l=n({},c);l.field_map.splice(i,0,{}),e(n({},l))},R=(i,c,e)=>{const l=n({},c);l.field_map.length>1&&l.field_map.splice(i,1),e(n({},l))},F=(i,c,e)=>{if(c.reminder_field_map.length>=5)return;const l=n({},c);l.reminder_field_map.splice(i,0,{}),e(n({},l))},K=(i,c,e)=>{const l=n({},c);l.reminder_field_map.length>1&&l.reminder_field_map.splice(i,1),e(n({},l))};function L({i,formFields:c,field:e,googleCalendarConf:l,setGoogleCalendarConf:m}){var p,h;const b=e.required,t=(l==null?void 0:l.default)&&Object.values(l==null?void 0:l.default).filter(r=>!r.required),{isPro:s}=x(j),v=(r,A)=>{const o=n({},l);o.field_map[A][r.target.name]=r.target.value,r.target.value==="custom"&&(o.field_map[A].customValue=""),m(n({},o))};if(((p=l==null?void 0:l.field_map)==null?void 0:p.length)===1&&e.googleCalendarFormField===""){const r=n({},l);r.field_map=r.default.filter(A=>A.required).map(A=>({formField:"",googleCalendarFormField:A.key,required:!0})),m(r)}return a.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:a.jsxs("div",{className:"pos-rel flx",children:[a.jsxs("div",{className:"flx integ-fld-wrp",children:[a.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:e.formField||"",onChange:r=>v(r,i),children:[a.jsx("option",{value:"",children:u("Select Field","bit-integrations")}),a.jsxs("optgroup",{label:u("Form Fields","bit-integrations"),children:[c==null?void 0:c.map(r=>a.jsx("option",{value:r.name,children:r.label},`ff-rm-${r.name}`)),a.jsx("option",{value:"custom",children:u("Custom...","bit-integrations")})]}),a.jsx("optgroup",{label:sprintf(u("General Smart Codes %s","bit-integrations"),s?"":`(${u("Pro","bit-integrations")})`),children:s&&((h=G)==null?void 0:h.map(r=>a.jsx("option",{value:r.name,children:r.label},`ff-rm-${r.name}`)))})]}),e.formField==="custom"&&a.jsx(w,{onChange:r=>B(r,i,l,m),label:u("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:e.customValue,placeholder:u("Custom Value","bit-integrations"),formFields:c}),a.jsxs("select",{className:"btcd-paper-inp",name:"googleCalendarFormField",value:e.googleCalendarFormField,onChange:r=>v(r,i),disabled:b,children:[a.jsx("option",{value:"",children:u("Select Fields","bit-integrations")}),b?(l==null?void 0:l.default)&&Object.values(l.default).map(r=>a.jsx("option",{value:r.key,children:r.label},`${r.key}-1`)):t&&t.map(r=>a.jsx("option",{value:r.key,children:r.label},`${r.key}-1`))]})]}),!b&&a.jsxs(a.Fragment,{children:[a.jsx("button",{onClick:()=>T(i,l,m),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),a.jsx("button",{onClick:()=>R(i,l,m),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:a.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function H({rIndex:i,reminderField:c,googleCalendarConf:e,setGoogleCalendarConf:l}){const m=(b,t)=>{const s=n({},e);s.reminder_field_map[t][b.target.name]=b.target.value,l(n({},s))};return a.jsxs("div",{className:"flx mt-2",children:[a.jsxs("select",{className:"btcd-paper-inp mr-2",name:"method",value:c.method||"",onChange:b=>m(b,i),children:[a.jsx("option",{value:"",children:__("Select Notification Type","bit-integrations")}),a.jsx("option",{value:"popup",children:__("Notification","bit-integrations")}),a.jsx("option",{value:"email",children:__("Email","bit-integrations")})]}),a.jsx("input",{type:"number",className:"btcd-paper-inp",name:"minutes",placeholder:"minutes",value:c.minutes||"",onChange:b=>m(b,i)}),a.jsx("button",{onClick:()=>K(i,e,l),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:a.jsx("span",{className:"btcd-icn icn-trash-2"})})]})}function V({googleCalendarConf:i,setGoogleCalendarConf:c}){var s,v,p,h,r;const[e,l]=S.useState({show:!1,action:()=>{}}),m=(A,o)=>{const d=n({},i);A.target.checked?(d.actions[o]=!0,o==="reminders"&&l({show:"reminders"}),o==="allDayEvent"&&d.actions.skipIfSlotNotEmpty===!0&&(d.actions.allDayEvent=!1,f.error(u(`"skip if slot not free" can't be selected for this action.`,"bit-integrations"))),o==="skipIfSlotNotEmpty"&&d.actions.allDayEvent===!0&&(d.actions.skipIfSlotNotEmpty=!1,f.error(u('Slot checking only work for event with dateTime, please unselect "all day event".',"bit-integrations")))):delete d.actions[o],c(n({},d))},b=()=>{l({show:!1})},t=()=>{l({show:"reminders"})};return a.jsxs("div",{className:"pos-rel d-flx w-10",children:[a.jsx(E,{checked:((s=i.actions)==null?void 0:s.allDayEvent)||!1,onChange:A=>m(A,"allDayEvent"),className:`wdt-200 mt-4 mr-2 ${(v=i.actions)!=null&&v.skipIfSlotNotEmpty?"input-disable":""}`,value:"allDayEvent",title:u("All Day Event","bit-integrations"),subTitle:u("If checked, Events will create without time","bit-integrations")}),a.jsx(E,{checked:((p=i.actions)==null?void 0:p.skipIfSlotNotEmpty)||!1,onChange:A=>m(A,"skipIfSlotNotEmpty"),className:`wdt-200 mt-4 mr-2 ${(h=i.actions)!=null&&h.allDayEvent?"input-disable":""}`,value:"skipIfSlotNotEmpty",title:u("Skip If Slot Not Free","bit-integrations"),subTitle:u("If checked, Event create will skip if slot not free","bit-integrations")}),a.jsx(I,{action:t,children:a.jsx(E,{checked:((r=i.actions)==null?void 0:r.reminders)||!1,onChange:A=>m(A,"reminders"),className:"wdt-200 mt-4 mr-2",value:"reminders",title:u("Set Reminders","bit-integrations")})}),a.jsxs(g,{md:!0,show:e.show==="reminders",setModal:b,title:u("Set Reminders","bit-integrations"),children:[a.jsxs("div",{className:"flx flx-around mt-4 mb-2",style:{marginRight:40},children:[a.jsx("div",{className:"txt-dp",children:a.jsx("b",{children:u("Notification Type","bit-integrations")})}),a.jsx("div",{className:"txt-dp",children:a.jsx("b",{children:u("Minutes","bit-integrations")})})]}),i.reminder_field_map&&i.reminder_field_map.map((A,o)=>a.jsx(H,{rIndex:o,reminderField:A,googleCalendarConf:i,setGoogleCalendarConf:c},`r-fm-${o+9}`)),a.jsx("div",{className:"txt-center mt-2",style:{marginRight:28},children:a.jsx("button",{onClick:()=>F(i.reminder_field_map.length,i,c),className:"icn-btn sh-sm",type:"button",children:"+"})})]})]})}var q=[{label:"Africa/Abidjan",value:"Africa/Abidjan"},{label:"Africa/Accra",value:"Africa/Accra"},{label:"Africa/Algiers",value:"Africa/Algiers"},{label:"Africa/Bissau",value:"Africa/Bissau"},{label:"Africa/Cairo",value:"Africa/Cairo"},{label:"Africa/Casablanca",value:"Africa/Casablanca"},{label:"Africa/Ceuta",value:"Africa/Ceuta"},{label:"Africa/El_Aaiun",value:"Africa/El_Aaiun"},{label:"Africa/Johannesburg",value:"Africa/Johannesburg"},{label:"Africa/Juba",value:"Africa/Juba"},{label:"Africa/Khartoum",value:"Africa/Khartoum"},{label:"Africa/Lagos",value:"Africa/Lagos"},{label:"Africa/Maputo",value:"Africa/Maputo"},{label:"Africa/Monrovia",value:"Africa/Monrovia"},{label:"Africa/Nairobi",value:"Africa/Nairobi"},{label:"Africa/Ndjamena",value:"Africa/Ndjamena"},{label:"Africa/Sao_Tome",value:"Africa/Sao_Tome"},{label:"Africa/Tripoli",value:"Africa/Tripoli"},{label:"Africa/Tunis",value:"Africa/Tunis"},{label:"Africa/Windhoek",value:"Africa/Windhoek"},{label:"America/Adak",value:"America/Adak"},{label:"America/Anchorage",value:"America/Anchorage"},{label:"America/Araguaina",value:"America/Araguaina"},{label:"America/Argentina/Buenos_Aires",value:"America/Argentina/Buenos_Aires"},{label:"America/Argentina/Catamarca",value:"America/Argentina/Catamarca"},{label:"America/Argentina/Cordoba",value:"America/Argentina/Cordoba"},{label:"America/Argentina/Jujuy",value:"America/Argentina/Jujuy"},{label:"America/Argentina/La_Rioja",value:"America/Argentina/La_Rioja"},{label:"America/Argentina/Mendoza",value:"America/Argentina/Mendoza"},{label:"America/Argentina/Rio_Gallegos",value:"America/Argentina/Rio_Gallegos"},{label:"America/Argentina/Salta",value:"America/Argentina/Salta"},{label:"America/Argentina/San_Juan",value:"America/Argentina/San_Juan"},{label:"America/Argentina/San_Luis",value:"America/Argentina/San_Luis"},{label:"America/Argentina/Tucuman",value:"America/Argentina/Tucuman"},{label:"America/Argentina/Ushuaia",value:"America/Argentina/Ushuaia"},{label:"America/Asuncion",value:"America/Asuncion"},{label:"America/Atikokan",value:"America/Atikokan"},{label:"America/Bahia",value:"America/Bahia"},{label:"America/Bahia_Banderas",value:"America/Bahia_Banderas"},{label:"America/Barbados",value:"America/Barbados"},{label:"America/Belem",value:"America/Belem"},{label:"America/Belize",value:"America/Belize"},{label:"America/Blanc-Sablon",value:"America/Blanc-Sablon"},{label:"America/Boa_Vista",value:"America/Boa_Vista"},{label:"America/Bogota",value:"America/Bogota"},{label:"America/Boise",value:"America/Boise"},{label:"America/Cambridge_Bay",value:"America/Cambridge_Bay"},{label:"America/Campo_Grande",value:"America/Campo_Grande"},{label:"America/Cancun",value:"America/Cancun"},{label:"America/Caracas",value:"America/Caracas"},{label:"America/Cayenne",value:"America/Cayenne"},{label:"America/Chicago",value:"America/Chicago"},{label:"America/Chihuahua",value:"America/Chihuahua"},{label:"America/Costa_Rica",value:"America/Costa_Rica"},{label:"America/Creston",value:"America/Creston"},{label:"America/Cuiaba",value:"America/Cuiaba"},{label:"America/Curacao",value:"America/Curacao"},{label:"America/Danmarkshavn",value:"America/Danmarkshavn"},{label:"America/Dawson",value:"America/Dawson"},{label:"America/Dawson_Creek",value:"America/Dawson_Creek"},{label:"America/Denver",value:"America/Denver"},{label:"America/Detroit",value:"America/Detroit"},{label:"America/Edmonton",value:"America/Edmonton"},{label:"America/Eirunepe",value:"America/Eirunepe"},{label:"America/El_Salvador",value:"America/El_Salvador"},{label:"America/Fort_Nelson",value:"America/Fort_Nelson"},{label:"America/Fortaleza",value:"America/Fortaleza"},{label:"America/Glace_Bay",value:"America/Glace_Bay"},{label:"America/Goose_Bay",value:"America/Goose_Bay"},{label:"America/Grand_Turk",value:"America/Grand_Turk"},{label:"America/Guatemala",value:"America/Guatemala"},{label:"America/Guayaquil",value:"America/Guayaquil"},{label:"America/Guyana",value:"America/Guyana"},{label:"America/Halifax",value:"America/Halifax"},{label:"America/Havana",value:"America/Havana"},{label:"America/Hermosillo",value:"America/Hermosillo"},{label:"America/Indiana/Indianapolis",value:"America/Indiana/Indianapolis"},{label:"America/Indiana/Knox",value:"America/Indiana/Knox"},{label:"America/Indiana/Marengo",value:"America/Indiana/Marengo"},{label:"America/Indiana/Petersburg",value:"America/Indiana/Petersburg"},{label:"America/Indiana/Tell_City",value:"America/Indiana/Tell_City"},{label:"America/Indiana/Vevay",value:"America/Indiana/Vevay"},{label:"America/Indiana/Vincennes",value:"America/Indiana/Vincennes"},{label:"America/Indiana/Winamac",value:"America/Indiana/Winamac"},{label:"America/Inuvik",value:"America/Inuvik"},{label:"America/Iqaluit",value:"America/Iqaluit"},{label:"America/Jamaica",value:"America/Jamaica"},{label:"America/Juneau",value:"America/Juneau"},{label:"America/Kentucky/Louisville",value:"America/Kentucky/Louisville"},{label:"America/Kentucky/Monticello",value:"America/Kentucky/Monticello"},{label:"America/La_Paz",value:"America/La_Paz"},{label:"America/Lima",value:"America/Lima"},{label:"America/Los_Angeles",value:"America/Los_Angeles"},{label:"America/Maceio",value:"America/Maceio"},{label:"America/Managua",value:"America/Managua"},{label:"America/Manaus",value:"America/Manaus"},{label:"America/Martinique",value:"America/Martinique"},{label:"America/Matamoros",value:"America/Matamoros"},{label:"America/Mazatlan",value:"America/Mazatlan"},{label:"America/Menominee",value:"America/Menominee"},{label:"America/Merida",value:"America/Merida"},{label:"America/Metlakatla",value:"America/Metlakatla"},{label:"America/Mexico_City",value:"America/Mexico_City"},{label:"America/Miquelon",value:"America/Miquelon"},{label:"America/Moncton",value:"America/Moncton"},{label:"America/Monterrey",value:"America/Monterrey"},{label:"America/Montevideo",value:"America/Montevideo"},{label:"America/Nassau",value:"America/Nassau"},{label:"America/New_York",value:"America/New_York"},{label:"America/Nipigon",value:"America/Nipigon"},{label:"America/Nome",value:"America/Nome"},{label:"America/Noronha",value:"America/Noronha"},{label:"America/North_Dakota/Beulah",value:"America/North_Dakota/Beulah"},{label:"America/North_Dakota/Center",value:"America/North_Dakota/Center"},{label:"America/North_Dakota/New_Salem",value:"America/North_Dakota/New_Salem"},{label:"America/Nuuk",value:"America/Nuuk"},{label:"America/Ojinaga",value:"America/Ojinaga"},{label:"America/Panama",value:"America/Panama"},{label:"America/Pangnirtung",value:"America/Pangnirtung"},{label:"America/Paramaribo",value:"America/Paramaribo"},{label:"America/Phoenix",value:"America/Phoenix"},{label:"America/Port-au-Prince",value:"America/Port-au-Prince"},{label:"America/Port_of_Spain",value:"America/Port_of_Spain"},{label:"America/Porto_Velho",value:"America/Porto_Velho"},{label:"America/Puerto_Rico",value:"America/Puerto_Rico"},{label:"America/Punta_Arenas",value:"America/Punta_Arenas"},{label:"America/Rainy_River",value:"America/Rainy_River"},{label:"America/Rankin_Inlet",value:"America/Rankin_Inlet"},{label:"America/Recife",value:"America/Recife"},{label:"America/Regina",value:"America/Regina"},{label:"America/Resolute",value:"America/Resolute"},{label:"America/Rio_Branco",value:"America/Rio_Branco"},{label:"America/Santarem",value:"America/Santarem"},{label:"America/Santiago",value:"America/Santiago"},{label:"America/Santo_Domingo",value:"America/Santo_Domingo"},{label:"America/Sao_Paulo",value:"America/Sao_Paulo"},{label:"America/Scoresbysund",value:"America/Scoresbysund"},{label:"America/Sitka",value:"America/Sitka"},{label:"America/St_Johns",value:"America/St_Johns"},{label:"America/Swift_Current",value:"America/Swift_Current"},{label:"America/Tegucigalpa",value:"America/Tegucigalpa"},{label:"America/Thule",value:"America/Thule"},{label:"America/Thunder_Bay",value:"America/Thunder_Bay"},{label:"America/Tijuana",value:"America/Tijuana"},{label:"America/Toronto",value:"America/Toronto"},{label:"America/Vancouver",value:"America/Vancouver"},{label:"America/Whitehorse",value:"America/Whitehorse"},{label:"America/Winnipeg",value:"America/Winnipeg"},{label:"America/Yakutat",value:"America/Yakutat"},{label:"America/Yellowknife",value:"America/Yellowknife"},{label:"Antarctica/Casey",value:"Antarctica/Casey"},{label:"Antarctica/Davis",value:"Antarctica/Davis"},{label:"Antarctica/DumontDUrville",value:"Antarctica/DumontDUrville"},{label:"Antarctica/Macquarie",value:"Antarctica/Macquarie"},{label:"Antarctica/Mawson",value:"Antarctica/Mawson"},{label:"Antarctica/Palmer",value:"Antarctica/Palmer"},{label:"Antarctica/Rothera",value:"Antarctica/Rothera"},{label:"Antarctica/Syowa",value:"Antarctica/Syowa"},{label:"Antarctica/Troll",value:"Antarctica/Troll"},{label:"Antarctica/Vostok",value:"Antarctica/Vostok"},{label:"Asia/Almaty",value:"Asia/Almaty"},{label:"Asia/Amman",value:"Asia/Amman"},{label:"Asia/Anadyr",value:"Asia/Anadyr"},{label:"Asia/Aqtau",value:"Asia/Aqtau"},{label:"Asia/Aqtobe",value:"Asia/Aqtobe"},{label:"Asia/Ashgabat",value:"Asia/Ashgabat"},{label:"Asia/Atyrau",value:"Asia/Atyrau"},{label:"Asia/Baghdad",value:"Asia/Baghdad"},{label:"Asia/Baku",value:"Asia/Baku"},{label:"Asia/Bangkok",value:"Asia/Bangkok"},{label:"Asia/Barnaul",value:"Asia/Barnaul"},{label:"Asia/Beirut",value:"Asia/Beirut"},{label:"Asia/Bishkek",value:"Asia/Bishkek"},{label:"Asia/Brunei",value:"Asia/Brunei"},{label:"Asia/Chita",value:"Asia/Chita"},{label:"Asia/Choibalsan",value:"Asia/Choibalsan"},{label:"Asia/Colombo",value:"Asia/Colombo"},{label:"Asia/Damascus",value:"Asia/Damascus"},{label:"Asia/Dhaka",value:"Asia/Dhaka"},{label:"Asia/Dili",value:"Asia/Dili"},{label:"Asia/Dubai",value:"Asia/Dubai"},{label:"Asia/Dushanbe",value:"Asia/Dushanbe"},{label:"Asia/Famagusta",value:"Asia/Famagusta"},{label:"Asia/Gaza",value:"Asia/Gaza"},{label:"Asia/Hebron",value:"Asia/Hebron"},{label:"Asia/Ho_Chi_Minh",value:"Asia/Ho_Chi_Minh"},{label:"Asia/Hong_Kong",value:"Asia/Hong_Kong"},{label:"Asia/Hovd",value:"Asia/Hovd"},{label:"Asia/Irkutsk",value:"Asia/Irkutsk"},{label:"Asia/Jakarta",value:"Asia/Jakarta"},{label:"Asia/Jayapura",value:"Asia/Jayapura"},{label:"Asia/Jerusalem",value:"Asia/Jerusalem"},{label:"Asia/Kabul",value:"Asia/Kabul"},{label:"Asia/Kamchatka",value:"Asia/Kamchatka"},{label:"Asia/Karachi",value:"Asia/Karachi"},{label:"Asia/Kathmandu",value:"Asia/Kathmandu"},{label:"Asia/Khandyga",value:"Asia/Khandyga"},{label:"Asia/Kolkata",value:"Asia/Kolkata"},{label:"Asia/Krasnoyarsk",value:"Asia/Krasnoyarsk"},{label:"Asia/Kuala_Lumpur",value:"Asia/Kuala_Lumpur"},{label:"Asia/Kuching",value:"Asia/Kuching"},{label:"Asia/Macau",value:"Asia/Macau"},{label:"Asia/Magadan",value:"Asia/Magadan"},{label:"Asia/Makassar",value:"Asia/Makassar"},{label:"Asia/Manila",value:"Asia/Manila"},{label:"Asia/Nicosia",value:"Asia/Nicosia"},{label:"Asia/Novokuznetsk",value:"Asia/Novokuznetsk"},{label:"Asia/Novosibirsk",value:"Asia/Novosibirsk"},{label:"Asia/Omsk",value:"Asia/Omsk"},{label:"Asia/Oral",value:"Asia/Oral"},{label:"Asia/Pontianak",value:"Asia/Pontianak"},{label:"Asia/Pyongyang",value:"Asia/Pyongyang"},{label:"Asia/Qatar",value:"Asia/Qatar"},{label:"Asia/Qostanay",value:"Asia/Qostanay"},{label:"Asia/Qyzylorda",value:"Asia/Qyzylorda"},{label:"Asia/Riyadh",value:"Asia/Riyadh"},{label:"Asia/Sakhalin",value:"Asia/Sakhalin"},{label:"Asia/Samarkand",value:"Asia/Samarkand"},{label:"Asia/Seoul",value:"Asia/Seoul"},{label:"Asia/Shanghai",value:"Asia/Shanghai"},{label:"Asia/Singapore",value:"Asia/Singapore"},{label:"Asia/Srednekolymsk",value:"Asia/Srednekolymsk"},{label:"Asia/Taipei",value:"Asia/Taipei"},{label:"Asia/Tashkent",value:"Asia/Tashkent"},{label:"Asia/Tbilisi",value:"Asia/Tbilisi"},{label:"Asia/Tehran",value:"Asia/Tehran"},{label:"Asia/Thimphu",value:"Asia/Thimphu"},{label:"Asia/Tokyo",value:"Asia/Tokyo"},{label:"Asia/Tomsk",value:"Asia/Tomsk"},{label:"Asia/Ulaanbaatar",value:"Asia/Ulaanbaatar"},{label:"Asia/Urumqi",value:"Asia/Urumqi"},{label:"Asia/Ust-Nera",value:"Asia/Ust-Nera"},{label:"Asia/Vladivostok",value:"Asia/Vladivostok"},{label:"Asia/Yakutsk",value:"Asia/Yakutsk"},{label:"Asia/Yangon",value:"Asia/Yangon"},{label:"Asia/Yekaterinburg",value:"Asia/Yekaterinburg"},{label:"Asia/Yerevan",value:"Asia/Yerevan"},{label:"Atlantic/Azores",value:"Atlantic/Azores"},{label:"Atlantic/Bermuda",value:"Atlantic/Bermuda"},{label:"Atlantic/Canary",value:"Atlantic/Canary"},{label:"Atlantic/Cape_Verde",value:"Atlantic/Cape_Verde"},{label:"Atlantic/Faroe",value:"Atlantic/Faroe"},{label:"Atlantic/Madeira",value:"Atlantic/Madeira"},{label:"Atlantic/Reykjavik",value:"Atlantic/Reykjavik"},{label:"Atlantic/South_Georgia",value:"Atlantic/South_Georgia"},{label:"Atlantic/Stanley",value:"Atlantic/Stanley"},{label:"Australia/Adelaide",value:"Australia/Adelaide"},{label:"Australia/Brisbane",value:"Australia/Brisbane"},{label:"Australia/Broken_Hill",value:"Australia/Broken_Hill"},{label:"Australia/Darwin",value:"Australia/Darwin"},{label:"Australia/Eucla",value:"Australia/Eucla"},{label:"Australia/Hobart",value:"Australia/Hobart"},{label:"Australia/Lindeman",value:"Australia/Lindeman"},{label:"Australia/Lord_Howe",value:"Australia/Lord_Howe"},{label:"Australia/Melbourne",value:"Australia/Melbourne"},{label:"Australia/Perth",value:"Australia/Perth"},{label:"Australia/Sydney",value:"Australia/Sydney"},{label:"CET",value:"CET"},{label:"CST6CDT",value:"CST6CDT"},{label:"EET",value:"EET"},{label:"EST",value:"EST"},{label:"EST5EDT",value:"EST5EDT"},{label:"Etc/GMT",value:"Etc/GMT"},{label:"Etc/GMT+1",value:"Etc/GMT+1"},{label:"Etc/GMT+10",value:"Etc/GMT+10"},{label:"Etc/GMT+11",value:"Etc/GMT+11"},{label:"Etc/GMT+12",value:"Etc/GMT+12"},{label:"Etc/GMT+2",value:"Etc/GMT+2"},{label:"Etc/GMT+3",value:"Etc/GMT+3"},{label:"Etc/GMT+4",value:"Etc/GMT+4"},{label:"Etc/GMT+5",value:"Etc/GMT+5"},{label:"Etc/GMT+6",value:"Etc/GMT+6"},{label:"Etc/GMT+7",value:"Etc/GMT+7"},{label:"Etc/GMT+8",value:"Etc/GMT+8"},{label:"Etc/GMT+9",value:"Etc/GMT+9"},{label:"Etc/GMT-1",value:"Etc/GMT-1"},{label:"Etc/GMT-10",value:"Etc/GMT-10"},{label:"Etc/GMT-11",value:"Etc/GMT-11"},{label:"Etc/GMT-12",value:"Etc/GMT-12"},{label:"Etc/GMT-13",value:"Etc/GMT-13"},{label:"Etc/GMT-14",value:"Etc/GMT-14"},{label:"Etc/GMT-2",value:"Etc/GMT-2"},{label:"Etc/GMT-3",value:"Etc/GMT-3"},{label:"Etc/GMT-4",value:"Etc/GMT-4"},{label:"Etc/GMT-5",value:"Etc/GMT-5"},{label:"Etc/GMT-6",value:"Etc/GMT-6"},{label:"Etc/GMT-7",value:"Etc/GMT-7"},{label:"Etc/GMT-8",value:"Etc/GMT-8"},{label:"Etc/GMT-9",value:"Etc/GMT-9"},{label:"Etc/UTC",value:"Etc/UTC"},{label:"Europe/Amsterdam",value:"Europe/Amsterdam"},{label:"Europe/Andorra",value:"Europe/Andorra"},{label:"Europe/Astrakhan",value:"Europe/Astrakhan"},{label:"Europe/Athens",value:"Europe/Athens"},{label:"Europe/Belgrade",value:"Europe/Belgrade"},{label:"Europe/Berlin",value:"Europe/Berlin"},{label:"Europe/Brussels",value:"Europe/Brussels"},{label:"Europe/Bucharest",value:"Europe/Bucharest"},{label:"Europe/Budapest",value:"Europe/Budapest"},{label:"Europe/Chisinau",value:"Europe/Chisinau"},{label:"Europe/Copenhagen",value:"Europe/Copenhagen"},{label:"Europe/Dublin",value:"Europe/Dublin"},{label:"Europe/Gibraltar",value:"Europe/Gibraltar"},{label:"Europe/Helsinki",value:"Europe/Helsinki"},{label:"Europe/Istanbul",value:"Europe/Istanbul"},{label:"Europe/Kaliningrad",value:"Europe/Kaliningrad"},{label:"Europe/Kiev",value:"Europe/Kiev"},{label:"Europe/Kirov",value:"Europe/Kirov"},{label:"Europe/Lisbon",value:"Europe/Lisbon"},{label:"Europe/London",value:"Europe/London"},{label:"Europe/Luxembourg",value:"Europe/Luxembourg"},{label:"Europe/Madrid",value:"Europe/Madrid"},{label:"Europe/Malta",value:"Europe/Malta"},{label:"Europe/Minsk",value:"Europe/Minsk"},{label:"Europe/Monaco",value:"Europe/Monaco"},{label:"Europe/Moscow",value:"Europe/Moscow"},{label:"Europe/Oslo",value:"Europe/Oslo"},{label:"Europe/Paris",value:"Europe/Paris"},{label:"Europe/Prague",value:"Europe/Prague"},{label:"Europe/Riga",value:"Europe/Riga"},{label:"Europe/Rome",value:"Europe/Rome"},{label:"Europe/Samara",value:"Europe/Samara"},{label:"Europe/Saratov",value:"Europe/Saratov"},{label:"Europe/Simferopol",value:"Europe/Simferopol"},{label:"Europe/Sofia",value:"Europe/Sofia"},{label:"Europe/Stockholm",value:"Europe/Stockholm"},{label:"Europe/Tallinn",value:"Europe/Tallinn"},{label:"Europe/Tirane",value:"Europe/Tirane"},{label:"Europe/Ulyanovsk",value:"Europe/Ulyanovsk"},{label:"Europe/Uzhgorod",value:"Europe/Uzhgorod"},{label:"Europe/Vienna",value:"Europe/Vienna"},{label:"Europe/Vilnius",value:"Europe/Vilnius"},{label:"Europe/Volgograd",value:"Europe/Volgograd"},{label:"Europe/Warsaw",value:"Europe/Warsaw"},{label:"Europe/Zaporozhye",value:"Europe/Zaporozhye"},{label:"Europe/Zurich",value:"Europe/Zurich"},{label:"HST",value:"HST"},{label:"Indian/Chagos",value:"Indian/Chagos"},{label:"Indian/Christmas",value:"Indian/Christmas"},{label:"Indian/Cocos",value:"Indian/Cocos"},{label:"Indian/Kerguelen",value:"Indian/Kerguelen"},{label:"Indian/Mahe",value:"Indian/Mahe"},{label:"Indian/Maldives",value:"Indian/Maldives"},{label:"Indian/Mauritius",value:"Indian/Mauritius"},{label:"Indian/Reunion",value:"Indian/Reunion"},{label:"MET",value:"MET"},{label:"MST",value:"MST"},{label:"MST7MDT",value:"MST7MDT"},{label:"PST8PDT",value:"PST8PDT"},{label:"Pacific/Apia",value:"Pacific/Apia"},{label:"Pacific/Auckland",value:"Pacific/Auckland"},{label:"Pacific/Bougainville",value:"Pacific/Bougainville"},{label:"Pacific/Chatham",value:"Pacific/Chatham"},{label:"Pacific/Chuuk",value:"Pacific/Chuuk"},{label:"Pacific/Easter",value:"Pacific/Easter"},{label:"Pacific/Efate",value:"Pacific/Efate"},{label:"Pacific/Enderbury",value:"Pacific/Enderbury"},{label:"Pacific/Fakaofo",value:"Pacific/Fakaofo"},{label:"Pacific/Fiji",value:"Pacific/Fiji"},{label:"Pacific/Funafuti",value:"Pacific/Funafuti"},{label:"Pacific/Galapagos",value:"Pacific/Galapagos"},{label:"Pacific/Gambier",value:"Pacific/Gambier"},{label:"Pacific/Guadalcanal",value:"Pacific/Guadalcanal"},{label:"Pacific/Guam",value:"Pacific/Guam"},{label:"Pacific/Honolulu",value:"Pacific/Honolulu"},{label:"Pacific/Kiritimati",value:"Pacific/Kiritimati"},{label:"Pacific/Kosrae",value:"Pacific/Kosrae"},{label:"Pacific/Kwajalein",value:"Pacific/Kwajalein"},{label:"Pacific/Majuro",value:"Pacific/Majuro"},{label:"Pacific/Marquesas",value:"Pacific/Marquesas"},{label:"Pacific/Nauru",value:"Pacific/Nauru"},{label:"Pacific/Niue",value:"Pacific/Niue"},{label:"Pacific/Norfolk",value:"Pacific/Norfolk"},{label:"Pacific/Noumea",value:"Pacific/Noumea"},{label:"Pacific/Pago_Pago",value:"Pacific/Pago_Pago"},{label:"Pacific/Palau",value:"Pacific/Palau"},{label:"Pacific/Pitcairn",value:"Pacific/Pitcairn"},{label:"Pacific/Pohnpei",value:"Pacific/Pohnpei"},{label:"Pacific/Port_Moresby",value:"Pacific/Port_Moresby"},{label:"Pacific/Rarotonga",value:"Pacific/Rarotonga"},{label:"Pacific/Tahiti",value:"Pacific/Tahiti"},{label:"Pacific/Tarawa",value:"Pacific/Tarawa"},{label:"Pacific/Tongatapu",value:"Pacific/Tongatapu"},{label:"Pacific/Wake",value:"Pacific/Wake"},{label:"Pacific/Wallis",value:"Pacific/Wallis"},{label:"WET",value:"WET"}];function X({flowID:i,formFields:c,googleCalendarConf:e,setGoogleCalendarConf:l}){const m=t=>{const s=n({},e);s.calendarId=t.target.value,l(n({},s))},b=t=>{const s=n({},e);s.timeZone=t,l(n({},s))};return a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"flx mt-4",children:[a.jsx("b",{className:"wdt-200 d-in-b",children:u("Calendar Lists:","bit-integrations")}),a.jsxs("select",{onChange:t=>m(t),name:"calendarId",value:e.calendarId,className:"btcd-paper-inp w-5",children:[a.jsx("option",{value:"",children:u("Select Calendar","bit-integrations")}),(e==null?void 0:e.calendarLists)&&e.calendarLists.map(({id:t,name:s,accessRole:v})=>a.jsx("option",{value:t,children:`${s} (${v})`},t))]}),a.jsx("button",{onClick:()=>D(i,e,l),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${u("Fetch Calendar Lists","bit-integrations")}'`},type:"button",children:"↻"})]}),a.jsxs("div",{className:"flx mt-4",children:[a.jsx("b",{className:"wdt-200 d-in-b",children:u("Time Zone:","bit-integrations")}),a.jsx(N,{name:"timeZone",className:"w-5",defaultValue:e==null?void 0:e.timeZone,options:q.map(t=>({label:t.label,value:t.value})),onChange:t=>b(t),singleSelect:!0})]}),a.jsx("div",{className:"mt-5",children:a.jsx("b",{className:"wdt-100",children:u("Field Map","bit-integrations")})}),a.jsx("div",{className:"btcd-hr mt-1"}),a.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[a.jsx("div",{className:"txt-dp",children:a.jsx("b",{children:u("Form Fields","bit-integrations")})}),a.jsx("div",{className:"txt-dp",children:a.jsx("b",{children:u("Google Calendar Fields","bit-integrations")})})]}),e==null?void 0:e.field_map.map((t,s)=>a.jsx(L,{i:s,field:t,formFields:c,googleCalendarConf:e,setGoogleCalendarConf:l},`rp-m-${s+9}`)),a.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:a.jsx("button",{onClick:()=>T(e.field_map.length,e,l),className:"icn-btn sh-sm",type:"button",children:"+"})}),a.jsx("br",{}),a.jsx("div",{className:"mt-4",children:a.jsx("b",{className:"wdt-100",children:u("Utilities","bit-integrations")})}),a.jsx("div",{className:"btcd-hr mt-1"}),a.jsx(V,{googleCalendarConf:e,setGoogleCalendarConf:l})]})}export{X as G};
