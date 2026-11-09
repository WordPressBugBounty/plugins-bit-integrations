import{j as n,_ as t}from"./main.2.11.0.js";import{A as p}from"./AddNewConnection.pNRNvRSd.js";import{t as l}from"./TutorialLink.u015MAgn.js";import{A as m}from"./Authorization.BIchEf0K.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.B4OSXcxp.js";import"./Note.NHlZiuVe.js";import"./SnackMsg.BZQz3MDI.js";import"./ConfirmModal.4VHPoM9g.js";import"./oauthHelper.BpU8usvP.js";import"./BackIcn.BmViP7Zj.js";import"./Integrations.DzOTQ6dT.js";import"./Table.DbgUlRk3.js";import"./index.Cj5suhk1.js";import"./InfoIcn.CLEAzlAd.js";const u=`
    <h4>${t("Steps to connect Follow Up Boss:","bit-integrations")}</h4>
    <ul>
      <li>${t("In Follow Up Boss, go to <b>Admin</b> > <b>API</b>.","bit-integrations")}</li>
      <li>${t("Create an API key, or copy the key that you have.","bit-integrations")}</li>
      <li>${t("Paste the API key into <b>Username</b>. Keep <b>Password</b> empty.","bit-integrations")}</li>
      <li>${t("The API key has the same access as its user. Use the key of the account owner or an admin to use every action.","bit-integrations")}</li>
    </ul>
  `;function _({followUpBossConf:i,setFollowUpBossConf:e,step:s,setstep:r,isInfo:a}){var o;return n.jsx(m,{config:i,setConfig:e,step:s,setStep:r,isInfo:a,tutorialTitle:"Follow Up Boss",tutorialLinks:((o=l)==null?void 0:o.followUpBoss)||{},authDetails:{authType:p.BASIC_AUTH,apiEndpoint:"https://api.followupboss.com/v1/identity",method:"GET",allowEmptyPassword:!0},noteDetails:{note:u}})}export{_ as default};
