import{r as C,j as v}from"./main-556.js";import"./bi.562.0.js";/* empty css          */function _({id:m,value:u,formFields:i,SmartTagField:o,onChangeHandler:s,toolbarMnu:g,menubar:p,height:y,width:f,disabled:w,plugins:h,show:l=!0}){const n=`${m}-settings`;C.useEffect(()=>{var e;!l&&((e=window==null?void 0:window.tinymce)!=null&&e.get(n))?window.tinymce.get(n).remove():typeof tinymce!="undefined"?x():console.warn("TinyMCE is not loaded yet")},[l]);const b=e=>e.type==="signature"?`<img width="250" src="\${${e.name}}" alt="${e.name}" />`:`\${${e.name}}`,x=()=>{window&&window.tinymce&&window.tinymce.init({selector:`textarea#${n}`,charset:"UTF-8",entity_encoding:"raw",menubar:p,height:y||150,width:f||"100%",branding:!1,resize:"verticle",convert_urls:!1,theme:"modern",plugins:h||"directionality fullscreen image link media charmap hr lists textcolor colorpicker wordpress",toolbar:g||"formatselect | fontsizeselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat toogleCode wp_code | addFormField | addSmartField",image_advtab:!0,default_link_target:"_blank",setup(e){e.on("Paste Change input Undo Redo",()=>{s(e.getContent())}),i&&e.addButton("addFormField",{text:"Form Fields ",tooltip:"Add Form Field Value in Message",type:"menubutton",icon:!1,menu:i==null?void 0:i.map(t=>!t.type.match(/^(file-up|recaptcha|section|divider|image|advanced-file-up|)$/)&&{text:t.name,onClick(){e.insertContent(b(t))}})}),o&&e.addButton("addSmartField",{text:"Smart Tag Fields",tooltip:"Add Smart Tag Field Value in Message",type:"menubutton",icon:!1,menu:o==null?void 0:o.map(t=>({text:t.label,onClick(){e.insertContent(`\${${t.name}}`)}}))}),e.addButton("toogleCode",{text:"</>",tooltip:"Toggle preview",icon:!1,onclick(t){const{$:c}=t.control,a=c(`#${n}`),r=c(e.iframeElement);if(a.value=e.getContent({source_view:!0}),r.toggleClass("btcd-mce-tinymce-hidden"),a.toggleClass("btcd-mce-tinymce-visible"),console.log("clicked",a,r),c("iframe.btcd-mce-tinymce-hidden").length>0)a.prependTo(".mce-edit-area");else{const d=document.getElementById(n);d instanceof HTMLTextAreaElement&&e.setContent(d.value)}}})}})};return l&&v.jsx("textarea",{id:n,className:"btcd-paper-inp mt-1 w-10",rows:5,value:u,onChange:e=>s(e.target.value),style:{width:"95.5%",height:"auto"},disabled:w})}export{_ as T};
