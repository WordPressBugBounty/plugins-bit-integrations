import{_ as i,j as b}from"./main.2.10.0.js";import{b as h}from"./react-router.DMwpH23k.js";import{A as f}from"./AddNewConnection.DCTHIFxq.js";import{t as c}from"./TutorialLink.BAPo3x0A.js";import{A}from"./Authorization.BmZ1lyOd.js";import{a as y}from"./RapidmailCommonFunc.CEdwd1OS.js";import"./react-vendor.P7K3d6op.js";import"./connectionApi.QyWx8Unk.js";import"./Note.Dyd4oGF7.js";import"./SnackMsg.dVUsvxBp.js";import"./ConfirmModal.BVwU3lxl.js";import"./oauthHelper.Bbf-wdGf.js";import"./BackIcn.B7f1heI_.js";function j({rapidmailConf:t,setRapidmailConf:o,step:n,setstep:r,setIsLoading:e,setSnackbar:p,isInfo:l}){var a;const m=h.useCallback(s=>{s===2&&!(t!=null&&t.default)&&y(t,o,e),r(s)},[t,o,e,p,r]),u=`
    <h4>${i("Step of creating username and password:","bit-integrations")}</h4>
    <ul>
      <li>${i("Goto","bit-integrations")}Goto <a href="https://my.rapidmail.com/api/v3/userlist.html#/">Generate API User</a> and create an api user.</li>
      <li>${i("Copy the <b>Username</b> and paste into <b>Username</b> field of your authorization form.","bit-integrations")}</li>
      <li>${i("Copy the <b>Password</b> and paste into <b>Password</b> field of your authorization form.","bit-integrations")}</li>
      <li>${i("Finally, click <b>Authorize</b> button.","bit-integrations")}</li>
  </ul>
  `;return b.jsx(A,{config:t,setConfig:o,step:n,setStep:m,isInfo:l,tutorialTitle:"Rapidmail",tutorialLinks:((a=c)==null?void 0:a.rapidmail)||{},authDetails:{authType:f.BASIC_AUTH,apiEndpoint:"https://apiv3.emailsys.net/v1/apiusers",method:"GET",ssl_verify:!1},noteDetails:{note:u}})}export{j as default};
