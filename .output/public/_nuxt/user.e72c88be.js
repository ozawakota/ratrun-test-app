import{n as m,o as a,c as l,B as $,a as d,t as f,C,_ as B,D as S,E as D,F,G as w,u as p,b as _,H as v}from"./entry.a0788f03.js";import{P as y}from"./api.5ce6cc8e.js";const q=["type","placeholder","value"],G=m({__name:"BasicInput",props:{type:{type:String,default:"text"},placeholder:{type:String,default:""},value:{type:String,default:""}},setup(e){return(r,t)=>(a(),l("input",{type:e.type,placeholder:e.placeholder,value:e.value,onInput:t[0]||(t[0]=i=>r.$emit("updateInput",i))},null,40,q))}}),k=["disabled"],N=m({__name:"BasicButton",props:{text:{type:String,default:"クリック"},color:{type:String,default:""},backGround:{type:String,default:""},isButtonDisabled:{type:Boolean,default:!0}},setup(e){return $(r=>({"2a6a5dee":e.backGround,"2d4776c8":e.color})),(r,t)=>(a(),l("button",{type:"button",onClick:t[0]||(t[0]=i=>r.$emit("clickButton",i)),class:C(["c-btn"]),disabled:e.isButtonDisabled},[d("span",null,f(e.text),1)],8,k))}});const T=B(N,[["__scopeId","data-v-3da89ce8"]]),E={class:"signup_form"},L={class:"form_input"},P=["onClick"],R={key:0,class:"error"},U={class:"form-btn signup_form-btn"},j=m({__name:"BasicForm",props:{btnText:{type:String,default:"ボタンテキスト"}},emits:["updateInput","formSubmitted"],setup(e,{emit:r}){const t=S("formDataKey",null),i=r,g=e,h=(o,n)=>{i("updateInput",{value:o,key:n})},x=(o,n)=>{t[n].validate(o)?(t[n].isValid=!0,t[n].error=""):(t[n].isValid=!1,t[n].error=`${t[n].label}を正しく入力してください。${t[n].required?"必須項目です。":""}`)},I=o=>{t[o].type=t[o].type==="password"?"text":"password"},V=()=>!(t[0].validate(t[0].value)&&t[1].validate(t[1].value));return(o,n)=>{const b=D("font-awesome-icon");return a(),l("form",E,[(a(!0),l(F,null,w(p(t),(s,u)=>(a(),l("fieldset",{class:"c-fieldset",key:u},[d("legend",null,f(s.label),1),d("div",L,[_(p(G),{type:s.type,placeholder:s.placeholder,value:s.value,onUpdateInput:c=>h(c.target.value,u),onBlur:c=>x(c.target.value,u),required:s.required},null,8,["type","placeholder","value","onUpdateInput","onBlur","required"]),s.isVisibleIcon?(a(),l("button",{key:0,type:"button",id:"icon_eye",onClick:c=>I(u)},[_(b,{icon:s.type!=="password"?["fas","eye"]:["fas","eye-slash"]},null,8,["icon"])],8,P)):v("",!0)]),s.isValid?v("",!0):(a(),l("div",R,f(s.error),1))]))),128)),d("div",U,[_(p(T),{text:g.btnText,color:"#fff",backGround:"#F86986",onClickButton:n[0]||(n[0]=s=>o.$emit("formSubmitted")),isButtonDisabled:V()},null,8,["text","isButtonDisabled"])])])}}});const H=B(j,[["__scopeId","data-v-ffca65b7"]]),K=e=>y(e,"/AuthResource"),J=e=>y(e,"/registration");export{H as B,J as a,K as p};