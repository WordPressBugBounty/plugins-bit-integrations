import{r as x,j as C}from"./main-29.js";/* empty css          */function k({id:d,value:m,formFields:n,SmartTagField:i,onChangeHandler:c,toolbarMnu:u,menubar:g,height:p,width:y,disabled:f,plugins:h}){const o=`${d}-settings`;x.useEffect(()=>{typeof tinymce!="undefined"?b():console.warn("TinyMCE is not loaded yet")},[]);const w=e=>e.type==="signature"?`<img width="250" src="\${${e.name}}" alt="${e.name}" />`:`\${${e.name}}`,b=()=>{window&&window.tinymce&&window.tinymce.init({selector:`textarea#${o}`,charset:"UTF-8",entity_encoding:"raw",menubar:g,height:p||150,width:y||"100%",branding:!1,resize:"verticle",convert_urls:!1,theme:"modern",plugins:h||"directionality fullscreen image link media charmap hr lists textcolor colorpicker wordpress",toolbar:u||"formatselect | fontsizeselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat toogleCode wp_code | addFormField | addSmartField",image_advtab:!0,default_link_target:"_blank",setup(e){e.on("Paste Change input Undo Redo",()=>{c(e.getContent())}),n&&e.addButton("addFormField",{text:"Form Fields ",tooltip:"Add Form Field Value in Message",type:"menubutton",icon:!1,menu:n==null?void 0:n.map(t=>!t.type.match(/^(file-up|recaptcha|section|divider|image|advanced-file-up|)$/)&&{text:t.name,onClick(){e.insertContent(w(t))}})}),i&&e.addButton("addSmartField",{text:"Smart Tag Fields",tooltip:"Add Smart Tag Field Value in Message",type:"menubutton",icon:!1,menu:i==null?void 0:i.map(t=>({text:t.label,onClick(){e.insertContent(`\${${t.name}}`)}}))}),e.addButton("toogleCode",{text:"</>",tooltip:"Toggle preview",icon:!1,onclick(t){const{$:l}=t.control,a=l(`#${o}`),s=l(e.iframeElement);if(a.value=e.getContent({source_view:!0}),s.toggleClass("btcd-mce-tinymce-hidden"),a.toggleClass("btcd-mce-tinymce-visible"),console.log("clicked",a,s),l("iframe.btcd-mce-tinymce-hidden").length>0)a.prependTo(".mce-edit-area");else{const r=document.getElementById(o);r instanceof HTMLTextAreaElement&&e.setContent(r.value)}}})}})};return C.jsx("textarea",{id:o,className:"btcd-paper-inp mt-1 w-10",rows:5,value:m,onChange:e=>c(e.target.value),style:{width:"95.5%",height:"auto"},disabled:f})}export{k as T};
