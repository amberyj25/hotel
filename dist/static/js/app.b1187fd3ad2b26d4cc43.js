webpackJsonp([1],{"5Qg4":function(t,e){},"5TUR":function(t,e){},E6Pk:function(t,e){},MKCR:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),s=n("/ocq"),o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{staticClass:"li_img",attrs:{href:"##"},on:{click:function(e){return e.preventDefault(),t.updateUrl(t.item.id)}}},[n("img",{attrs:{src:t.item.imageUrl}})]),t._v(" "),n("div",{staticClass:"li_inner"},[n("a",{staticClass:"li_text",attrs:{href:"##"},on:{click:function(e){return e.preventDefault(),t.updateUrl(t.item.id)}}},[t._v(t._s(t.item.name))]),t._v(" "),n("p",[t._v("平日："+t._s(t.item.normalDayPrice)+"元 / 假日："+t._s(t.item.holidayPrice)+"元")]),t._v(" "),n("div",{staticClass:"more"},[n("a",{attrs:{href:"##"},on:{click:function(e){return e.preventDefault(),t.updateUrl(t.item.id)}}},[t._v("點擊看更多介紹")])])])])},staticRenderFns:[]};var i={name:"App",components:{Rooms:n("VU/8")({name:"Rooms",props:["item"],methods:{updateUrl:function(t){this.$router.push("/SingleRoom/"+t)}}},o,!1,function(t){n("RVFw")},"data-v-b708d3fa",null).exports},data:function(){return{rooms:"",isLoading:!1}},mounted:function(){var t=this;this.isLoading=!0,this.axios.get("https://challenge.thef2e.com/api/thef2e2019/stage6/rooms",{headers:{Authorization:"Bearer gXEmeg7d3PR517E9MXk9ApnsGVmHliQY1geCc0YbQMNTcsRvjEcDSf5RDSDd",accept:"application/json"}}).then(function(e){t.rooms=e.data.items,t.isLoading=!1})}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header",[n("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),t._v(" "),n("div",{staticClass:"header_content"},[n("h1",[n("router-link",{attrs:{to:"/"}},[t._v("Happy Space")])],1),t._v(" "),n("nav",[n("router-link",{attrs:{to:"/About"}},[t._v("關於我們")]),t._v(" "),n("a",{attrs:{href:"#rooms_ul"}},[t._v("房型介紹")]),t._v(" "),n("router-link",{attrs:{to:"/Sale"}},[t._v("優惠活動")]),t._v(" "),n("router-link",{attrs:{to:"/Login"}},[t._v("會員登入")])],1)])],1),t._v(" "),n("main",[t._m(0),t._v(" "),n("div",{staticClass:"main_content"},[n("ul",{attrs:{id:"rooms_ul"}},t._l(t.rooms,function(e,a){return n("Rooms",{key:t.index,attrs:{item:e}})}),1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner"},[e("div",{staticClass:"img"})])}]};var c=n("VU/8")(i,r,!1,function(t){n("5Qg4")},"data-v-dd2f562a",null).exports,u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header",[n("div",{staticClass:"header_content"},[n("h1",[n("router-link",{attrs:{to:{name:"App"}}},[t._v("Happy Space")])],1),t._v(" "),n("nav",[n("a",{attrs:{href:"##"}},[t._v("關於我們")]),t._v(" "),n("router-link",{attrs:{to:"/"}},[t._v("房型介紹")]),t._v(" "),n("router-link",{attrs:{to:"/Sale"}},[t._v("優惠活動")]),t._v(" "),n("router-link",{attrs:{to:"/"}},[t._v("首頁")]),t._v(" "),n("router-link",{attrs:{to:"/Login"}},[t._v("會員登入")])],1)])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("main",[e("div",{staticClass:"room_img"},[e("img",{attrs:{src:n("UhZ1"),alt:"img"}})]),this._v(" "),e("div",{staticClass:"aboutus"},[e("h2",[this._v("About Us")]),this._v(" "),e("p",[this._v("A wonderful vacation on dream.\n  The beach with the breeze, enjoying the sunset in summer, and bathing the stars at midnight.\n  What an amazing thing when you wake up in the morning with the view formed the sky, the mountains and the ocean in front of you. You can totally relax yourself with the bright and tidy room, the astonishing scene, and our sweet service.\n  Faraway from the noist city right now.")])])])}]};var v=n("VU/8")({name:"about"},u,!1,function(t){n("r4zc")},"data-v-6e83b0e4",null).exports,l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header",[n("div",{staticClass:"header_content"},[n("h1",[n("router-link",{attrs:{to:{name:"App"}}},[t._v("Happy Space")])],1),t._v(" "),n("nav",[n("router-link",{attrs:{to:"/About"}},[t._v("關於我們")]),t._v(" "),n("router-link",{attrs:{to:"/"}},[t._v("房型介紹")]),t._v(" "),n("a",{attrs:{href:"##"}},[t._v("優惠活動")]),t._v(" "),n("router-link",{attrs:{to:"/"}},[t._v("首頁")]),t._v(" "),n("router-link",{attrs:{to:"/Login"}},[t._v("會員登入")])],1)])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("main",[e("div",{staticClass:"room_img"},[e("img",{attrs:{src:n("ofUt"),alt:"img"}})]),this._v(" "),e("div",{staticClass:"aboutus"},[e("h2",[this._v("Sale")]),this._v(" "),e("p",[this._v("歡慶開幕")]),this._v(" "),e("p",[this._v("住一晚送一晚")])])])}]};var m=n("VU/8")({name:"Sale"},l,!1,function(t){n("MKCR")},"data-v-681466fd",null).exports,_={name:"Login",data:function(){return{user:{username:"",password:""},changeComponent:"form",answer:"",notSuccess:"",isLoading:!1}},methods:{signin:function(){var t=this;t.isLoading=!0,t.axios.post("https://vue-course-api.hexschool.io/signin",t.user).then(function(e){console.log(e.data.success),1==e.data.success?(t.changeComponent="result",t.answer="恭喜您成功登入",t.isLoading=!1):0==e.data.success&&(t.notSuccess="沒有登入成功")})},toSignout:function(){var t=this;t.axios.post("https://vue-course-api.hexschool.io/logout").then(function(e){t.changeComponent="",t.isLoading=!1})},toStart:function(){this.$router.push("/")}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form_outer"},[n("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),t._v(" "),"form"==t.changeComponent?n("form",[n("div",{staticClass:"form_inner"},[n("div",[n("label",{attrs:{for:"email"}},[t._v("登入信箱 ： ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],attrs:{type:"text",id:"email",placeholder:"請輸入登入信箱"},domProps:{value:t.user.username},on:{input:function(e){e.target.composing||t.$set(t.user,"username",e.target.value)}}})]),t._v(" "),n("div",[n("label",{attrs:{for:"password"}},[t._v("密碼 : ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],attrs:{type:"password",id:"password",placeholder:"請輸入密碼"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),t._v(" "),n("div",[n("button",{attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.signin(e)}}},[t._v("登入")]),t._v(" "),n("p",[t._v(t._s(t.notSuccess))])])])]):"result"==t.changeComponent?n("div",{staticClass:"result inner"},[n("h2",[t._v("恭喜您成功登入")]),t._v(" "),n("button",{staticClass:"btnResult",on:{click:t.toStart}},[t._v("回首頁")]),t._v(" "),n("p",{staticClass:"pResult"},[t._v("or")]),t._v(" "),n("button",{staticClass:"btnResult",on:{click:t.toSignout}},[t._v("登出")])]):n("div",{staticClass:"result loginout"},[n("h2",[t._v("已成功登出")]),t._v(" "),n("button",{staticClass:"btnResult",on:{click:t.toStart}},[t._v("回首頁")])])],1)},staticRenderFns:[]};var h=n("VU/8")(_,d,!1,function(t){n("E6Pk")},"data-v-31df96c6",null).exports,p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header",[n("div",{staticClass:"header_content"},[n("h1",[n("router-link",{attrs:{to:{name:"App"}}},[t._v("Happy Space")])],1),t._v(" "),n("nav",[n("router-link",{attrs:{to:"/About"}},[t._v("關於我們")]),t._v(" "),n("router-link",{attrs:{to:"/"}},[t._v("房型介紹")]),t._v(" "),n("router-link",{attrs:{to:"/Sale"}},[t._v("優惠活動")]),t._v(" "),n("router-link",{attrs:{to:"/"}},[t._v("首頁")]),t._v(" "),n("router-link",{attrs:{to:"/Login"}},[t._v("會員登入")])],1)])]),t._v(" "),n("main",[n("div",{staticClass:"room_img"},[n("div",{staticClass:"img"},[n("img",{attrs:{src:t.room.imageUrl[2]}})]),t._v(" "),n("div",{staticClass:"another_img"},[n("img",{attrs:{src:t.room.imageUrl[0]}}),t._v(" "),n("img",{attrs:{src:t.room.imageUrl[1]}})])]),t._v(" "),n("div",{staticClass:"room_feature"},[n("h2",[t._v(t._s(t.room.name))]),t._v(" "),n("p",[t._v("房客人數限制："+t._s(t.room.descriptionShort.GuestMax))]),t._v(" "),n("p",[t._v("床型："+t._s(t.room.descriptionShort.Bed[0]))]),t._v(" "),n("p",[t._v("CheckIn的時間 : "+t._s(t.room.checkInAndOut.checkInEarly))]),t._v(" "),n("p",[t._v("CheckOut的時間 : "+t._s(t.room.checkInAndOut.checkOut)+" ")]),t._v(" "),n("p",{staticStyle:{"text-align":"justify"}},[t._v(t._s(t.room.description))])])])])},staticRenderFns:[]};var f=n("VU/8")({name:"singleRoom",data:function(){return{room:""}},mounted:function(){var t=this,e=this.$route.params.id;this.axios.get("https://challenge.thef2e.com/api/thef2e2019/stage6/room/"+e,{headers:{Authorization:"Bearer gXEmeg7d3PR517E9MXk9ApnsGVmHliQY1geCc0YbQMNTcsRvjEcDSf5RDSDd",accept:"application/json"}}).then(function(e){t.room=e.data.room[0]})}},p,!1,function(t){n("5TUR")},"data-v-becd1e90",null).exports;a.a.use(s.a);var g=new s.a({routes:[{path:"/",name:"App",component:c},{path:"/About",name:"About",component:v},{path:"/Sale",name:"Sale",component:m},{path:"/Login",name:"Login",component:h},{path:"/SingleRoom/:id",name:"SingleRoom",component:f}]}),k=n("mtWM"),C=n.n(k),b=n("Rf8U"),S=n.n(b),R=n("ZZvs"),w=n.n(R);n("SYh3");a.a.use(S.a,C.a),a.a.config.productionTip=!1,a.a.component("Loading",w.a),new a.a({el:"#app",router:g,template:"<router-view></router-view>"})},RVFw:function(t,e){},SYh3:function(t,e){},UhZ1:function(t,e,n){t.exports=n.p+"static/img/aboutimg.91a45d5.jpg"},ofUt:function(t,e,n){t.exports=n.p+"static/img/sale.3a47c7f.jpg"},r4zc:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b1187fd3ad2b26d4cc43.js.map