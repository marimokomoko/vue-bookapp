(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{501:function(t,e,o){"use strict";o.r(e);var l=o(91),n={data:function(){return{email:"",password:""}},methods:{login:function(){var t=Object(l.b)(this.$firebase);Object(l.d)(t,this.email,this.password).then((function(t){console.log(t.user),console.log("ユーザー登録ok!")})).catch((function(t){alert(t.message),console.error("error:",t)}))}}},r=o(62),c=o(80),v=o.n(c),d=o(213),w=o(490),f=o(491),m=o(485),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._v("\n  ログイン\n  "),o("v-row",[o("v-col",{attrs:{cols:"6"}},[o("v-text-field",{attrs:{label:"メールアドレス"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),o("v-text-field",{attrs:{label:"パスワード"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),o("v-row",[o("v-col",{attrs:{cols:"3"}},[o("v-btn",{staticClass:"mb-3",attrs:{color:"primary"},on:{click:t.login}},[t._v("ログイン")])],1),t._v(" "),o("v-col",{attrs:{cols:"3"}},[o("v-btn",{attrs:{text:"",to:"./register"}},[t._v("ユーザー登録")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:d.a,VCol:w.a,VRow:f.a,VTextField:m.a})}}]);