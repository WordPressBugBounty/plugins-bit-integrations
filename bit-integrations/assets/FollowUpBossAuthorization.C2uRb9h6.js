import{j as n,_ as t}from"./main.2.11.1.js";import{A as p}from"./AddNewConnection.DPtZb5J7.js";import{t as l}from"./TutorialLink.DsgFZ1Xh.js";import{A as m}from"./Authorization.Bn9m3Lhj.js";import"./react-router.BiLdldC0.js";import"./react-vendor.BZTAuXQx.js";import"./connectionApi.CBwfMytR.js";import"./Note.BEwAesbJ.js";import"./SnackMsg.BvQ0dgIT.js";import"./ConfirmModal.S5sVlbDg.js";import"./oauthHelper.Dw_T_8bV.js";import"./BackIcn.CkBZ7Eo8.js";import"./Integrations.DUHcMnTT.js";import"./Table.acfqUtK9.js";import"./index.Cj5suhk1.js";import"./InfoIcn.BZ6L1wGR.js";const u=`
    <h4>${t("Steps to connect Follow Up Boss:","bit-integrations")}</h4>
    <ul>
      <li>${t("In Follow Up Boss, go to <b>Admin</b> > <b>API</b>.","bit-integrations")}</li>
      <li>${t("Create an API key, or copy the key that you have.","bit-integrations")}</li>
      <li>${t("Paste the API key into <b>Username</b>. Keep <b>Password</b> empty.","bit-integrations")}</li>
      <li>${t("The API key has the same access as its user. Use the key of the account owner or an admin to use every action.","bit-integrations")}</li>
    </ul>
  `;function _({followUpBossConf:i,setFollowUpBossConf:e,step:s,setstep:r,isInfo:a}){var o;return n.jsx(m,{config:i,setConfig:e,step:s,setStep:r,isInfo:a,tutorialTitle:"Follow Up Boss",tutorialLinks:((o=l)==null?void 0:o.followUpBoss)||{},authDetails:{authType:p.BASIC_AUTH,apiEndpoint:"https://api.followupboss.com/v1/identity",method:"GET",allowEmptyPassword:!0},noteDetails:{note:u}})}export{_ as default};
