(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{15:function(t,e,n){n("8Vax"),t.exports=n("Vtdi")},"1Wvj":function(t,e,n){var i={"./components.js":"cWbO","./dashboard.js":"wcv7","./index.js":"a64x","./login.js":"a2xP","./richtext.js":"7OKw"};function r(t){var e=o(t);return n(e)}function o(t){var e=i[t];if(!(e+1)){var n=new Error('Cannot find module "'+t+'".');throw n.code="MODULE_NOT_FOUND",n}return e}r.keys=function(){return Object.keys(i)},r.resolve=o,t.exports=r,r.id="1Wvj"},"4i17":function(t,e,n){},"7OKw":function(t,e,n){"use strict";n.r(e);var i=n("4d7F"),r=n.n(i);function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}e.default=[{path:"/richtext",noDropdown:!0,name:"Richtext",hidden:!1,icon:"",redirect:"/richtext",component:function(){return r.a.resolve().then(function(){return o(n("TU6a"))})},children:[{path:"",component:function(){return r.a.resolve().then(function(){return o(n("khiK"))})}}]}]},"7eQH":function(t,e,n){"use strict";n.r(e);var i=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo-group"},[e("img",{attrs:{height:"120",width:"120",src:n("zwU1"),alt:""}})])}],r=n("8+Sn"),o={name:"login",data:function(){return{loginPara:{userName:"admin",password:"123456",remember:!0}}},methods:{doLogin:function(){Object(r.c)((new Date).getDate()),this.$router.push({path:"/welcome"})}},created:function(){},mounted:function(){}},a=(n("okjK"),n("KHd+")),s=Object(a.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-layer"},[n("canvas",{attrs:{id:"login-canvas"}}),t._v(" "),n("div",{staticClass:"login-content animated"},[t._m(0),t._v(" "),n("div",{staticClass:"login-form"},[n("div",[n("Input",{attrs:{size:"default",icon:"person",placeholder:"请输入用户名"},model:{value:t.loginPara.userName,callback:function(e){t.$set(t.loginPara,"userName",e)},expression:"loginPara.userName"}})],1),t._v(" "),n("div",{staticClass:"login-item"},[n("Input",{attrs:{size:"default",type:"password",icon:"key",placeholder:"请输入密码"},model:{value:t.loginPara.password,callback:function(e){t.$set(t.loginPara,"password",e)},expression:"loginPara.password"}})],1),t._v(" "),n("div",{staticClass:"login-item"}),t._v(" "),n("Button",{staticClass:"btn-login",attrs:{type:"success",long:""},on:{click:t.doLogin}},[t._v("登陆")])],1)])])},i,!1,null,null,null);s.options.__file="Login.vue",e.default=s.exports},"8+Sn":function(t,e,n){"use strict";n.d(e,"c",function(){return a}),n.d(e,"b",function(){return s}),n.d(e,"a",function(){return c});var i=n("p46w"),r=n.n(i),o="base-key";function a(t){!function(t,e){r.a.set(t,e)}(o,t)}function s(t,e){return function(t){return r.a.get(t)}(o)}function c(){var t;t=o,r.a.remove(t)}},"8Vax":function(t,e){t.exports=window},"9nHl":function(t,e,n){},"A0++":function(t,e,n){"use strict";var i=n("MX27");n.n(i).a},AOTY:function(t,e){t.exports=vendor_library},L2JU:function(t,e,n){t.exports=n("AOTY")("./node_modules/vuex/dist/vuex.esm.js")},LlZN:function(t,e,n){"use strict";var i=n("xIqt");n.n(i).a},MKmS:function(t,e,n){},MX27:function(t,e,n){},MZ2e:function(t,e,n){},"N/kD":function(t,e,n){"use strict";n.r(e);var i=(n("cMjy"),n("KHd+")),r=Object(i.a)({name:"index",data:function(){return{value:""}}},function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"index"},[this._v("\n  I am index \n")])},[],!1,null,null,null);r.options.__file="index.vue",e.default=r.exports},N3Mv:function(t,e,n){"use strict";var i=n("ZZY7");n.n(i).a},Nt7e:function(t,e,n){"use strict";var i=n("g9om");n.n(i).a},Ode1:function(t,e,n){},SYI6:function(t,e,n){},TU6a:function(t,e,n){"use strict";n.r(e);var i=n("Zg8/"),r={name:"Frame",components:{FrameHeader:i.c,FrameSide:i.d,FrameContent:i.a,FrameFooter:i.b}},o=(n("a+by"),n("KHd+")),a=Object(o.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"frame"},[e("FrameHeader"),this._v(" "),e("section",{staticClass:"frame-container"},[e("FrameSide"),this._v(" "),e("FrameContent",{attrs:{id:"content"}}),this._v(" "),e("FrameFooter")],1)],1)},[],!1,null,null,null);a.options.__file="Frame.vue",e.default=a.exports},URgk:function(t,e,n){t.exports=n("AOTY")("./node_modules/timers-browserify/main.js")},VLUk:function(t,e,n){"use strict";var i=n("MZ2e");n.n(i).a},Vtdi:function(t,e,n){"use strict";n.r(e);var i=n("i7/w"),r=n.n(i),o=(n("A0++"),n("KHd+")),a=Object(o.a)({name:"App",data:function(){return{}},beforeCreate:function(){}},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},[],!1,null,null,null);a.options.__file="App.vue";var s=a.exports,c=n("m1cH"),l=n.n(c),u=n("jE9Z"),d=n("a64x"),f=n("4d7F"),m=n.n(f);function h(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}var v=[{path:"/",name:"Home",redirect:"/index",noDropdown:!0,component:function(){return m.a.resolve().then(function(){return h(n("TU6a"))})},children:[{path:"",component:function(){return m.a.resolve().then(function(){return h(n("N/kD"))})}}]}];function p(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}var g=[{path:"/welcome",name:"welcome",redirect:"/welcome",hidden:!0,component:function(){return m.a.resolve().then(function(){return p(n("buOB"))})},children:[{path:"",component:function(){return m.a.resolve().then(function(){return p(n("cMMr"))})}}]}];r.a.use(u.default);var b=new u.default({mode:"history",base:"/",scrollBehavior:function(){return{y:0}},routes:[].concat(l()(v),l()(d.default),l()(g))}),w=n("L2JU"),y=n("8+Sn"),k={state:{userId:"",userToken:"",userName:""},mutations:{Set_userId:function(t,e){t.userId=e},Set_userToken:function(t,e){t.userToken=e},Set_userName:function(t,e){t.userName=e}},actions:{loginByStore:function(t,e){return t.commit,new m.a(function(t,e){t()})},logout:function(t){return t.commit,new m.a(function(t,e){Object(y.a)(),t()})}}};r.a.use(w.default);var I=new w.default.Store({modules:{user:k},getters:{userId:function(t){return t.user.userId},userToken:function(t){return t.user.userToken},userName:function(t){return t.user.userName}},strict:!1}),C=n("gDS+"),x=n.n(C),E=n("iCc5"),N=n.n(E),O=n("V7oC"),S=n.n(O),R=function(){function t(){N()(this,t),this.getStorage=function(t){var e=void 0;return e="local"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"local")?window.localStorage:window.sessionStorage,JSON.parse(e.getItem(t))},this.removeStorage=function(t){return("local"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"local")?window.localStorage:window.sessionStorage).removeItem(t)},this.clearStorage=function(){return("local"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"local")?window.localStorage:window.sessionStorage).clear()}}return S()(t,[{key:"replaceStr",value:function(e,n,i){e=t.isString(e)?e:e.toString();var r=new RegExp(n,"g");return e.replace(r,i)}},{key:"setStorage",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"local";if(function(){if(!window.storage)throw new Error("浏览器不支持localStorage");return!0}){var i=x()(e);("local"===n?window.localStorage:window.sessionStorage).setItem(t,i)}}},{key:"getIeVersion",value:function(){var t=navigator.appName,e=navigator.appVersion.split(";"),n=e[1]?e[1].replace(/[ ]/g,""):"";return"Microsoft Internet Explorer"===t?parseInt(n.substr(4,1)):0}},{key:"addEvent",value:function(t,e,n){var i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];t.addEventListener?t.addEventListener(e,n,i):t.attachEvent?t.attachEvent(e,n,i):t["on"+e]=null}}]),t}();R._debance=function(t,e){var n=null;return function(){var i=this,r=arguments;n&&(clearTimeout(n),n=null),n=setTimeout(function(){t.apply(i,r)},e)}},R._throttle=function(t,e){var n=null;return function(){var i=new Date;(i-n>e||!n)&&(t(),n=i)}};var j=new R,Z=(n("Ode1"),n("4GmL")),U=n.n(Z);r.a.use(U.a,{transfer:!0,size:"large"}),r.a.prototype.$util=j,U.a.LoadingBar.config({color:"#5cb85c",failedColor:"#f0ad4e",height:2});var W=["/login"];b.beforeEach(function(t,e,n){U.a.LoadingBar.start(),Object(y.b)()?"/login"===t.path?n({path:"/welcome"}):n():-1!==W.indexOf(t.path)?n():n({path:"/login"})}),b.afterEach(function(){U.a.LoadingBar.finish()}),r.a.config.productionTip=!1,new r.a({el:"#app",router:b,store:I,components:{App:s},template:"<App/>",beforeCreate:function(){var t=this.$util.getIeVersion(),e=document.querySelector(".skeleton");e.style.opacity="0";var n=!0;0!==t&&t<=9?setTimeout(function(){document.body.removeChild(e)},0):this.$util.addEvent(e,"transitionend",function(t){t.target===e&&n&&(n=!1,e.style.displpay="none",setTimeout(function(){document.body.removeChild(e)},0))}),setTimeout(function(){e&&document.body.removeChild(e)},200)}})},Wk1s:function(t,e,n){"use strict";var i=n("MKmS");n.n(i).a},Xc2Y:function(t,e,n){"use strict";n.r(e);var i=(n("roGA"),n("KHd+")),r=Object(i.a)({name:"dashboard",data:function(){return{}}},function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"dashboard"},[this._v("\n    dashboard\n")])},[],!1,null,null,null);r.options.__file="DashBoard.vue",e.default=r.exports},ZZY7:function(t,e,n){},"Zg8/":function(t,e,n){"use strict";var i=n("QbLZ"),r=n.n(i),o=n("L2JU"),a={name:"FrameHeader",props:{center:{type:Boolean,default:!1}},methods:r()({},Object(o.mapActions)({doLogout:"logout"}),{logout:function(){var t=this;this.doLogout().then(function(e){t.$router.push({path:"/login"})}).catch(function(t){})},dropOut:function(t){this[t]()}})},s=(n("Wk1s"),n("KHd+")),c=Object(s.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"frame-header"},[i("img",{class:{"center-logo":t.center},attrs:{src:n("zwU1"),alt:"",height:"50px"}}),t._v(" "),t.center?t._e():i("ul",{staticClass:"user-panel"},[i("li",{staticClass:"panel-item"},[i("Dropdown",{attrs:{trigger:"click"},on:{"on-click":t.dropOut}},[i("a",{attrs:{href:"javascript:void(0)"}},[t._v("\n            Mark\n            "),i("Icon",{attrs:{type:"ios-arrow-down"}})],1),t._v(" "),i("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[i("DropdownItem",{attrs:{name:"logout"}},[t._v("退出登录")])],1)],1)],1)])])},[],!1,null,null,null);c.options.__file="FrameHeader.vue";var l=c.exports,u=(n("Nt7e"),Object(s.a)({name:"FrameContent"},function(){var t=this.$createElement,e=this._self._c||t;return e("main",{staticClass:"frame-content"},[e("div",{staticClass:"content-fluid"},[e("transition",{staticClass:"animated",attrs:{"enter-active-class":"fadeIn","leave-active-class":"fadeOut",mode:"out-in"}},[e("router-view")],1)],1)])},[],!1,null,null,null));u.options.__file="FrameContent.vue";var d=u.exports,f=(n("h8aa"),Object(s.a)({name:"FrameSide",data:function(){return{routers:this.$router.options.routes,showCol:!1}},computed:{currentPath:function(){return this.$router.currentRoute.fullPath}},created:function(){}},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"frame-side"},[n("div",{staticClass:"frame-side-inner"},[n("Menu",{attrs:{width:"auto","active-name":t.currentPath}},[t._l(t.routers,function(e){return[!e.hidden&&e.noDropdown?[n("MenuItem",{key:e.path,attrs:{to:e.path,name:e.path}},[n("i",{key:e.path,class:e.icon}),t._v("\n                "+t._s(e.name)+"\n              ")])]:t._e(),t._v(" "),e.hidden||e.noDropdown?t._e():[n("Submenu",{key:e.path,attrs:{name:e.name}},[n("template",{attrs:{slot:"title"},slot:"title"},[n("Icon",{attrs:{type:"ios-paper"}}),t._v("\n                      "+t._s(e.name)+"\n                  ")],1),t._v(" "),n("MenuItem",{attrs:{name:"2-1"}},[t._v("新增用户")])],2)]]})],2)],1),t._v(" "),t.showCol?n("div",{staticClass:"side-colspan"},[n("i",{staticClass:"colspan-icon ivu-icon ivu-icon-ios-rewind"})]):t._e()])},[],!1,null,null,null));f.options.__file="FrameSide.vue";var m=f.exports,h=(n("hZKX"),Object(s.a)({name:"FrameFooter"},function(){var t=this.$createElement;return(this._self._c||t)("footer",{staticClass:"frame-footer"})},[],!1,null,null,null));h.options.__file="FrameFooter.vue";var v=h.exports;n.d(e,"c",function(){return l}),n.d(e,"a",function(){return d}),n.d(e,"d",function(){return m}),n.d(e,"b",function(){return v})},"a+by":function(t,e,n){"use strict";var i=n("fQqL");n.n(i).a},a2xP:function(t,e,n){"use strict";n.r(e);var i=n("4d7F"),r=n.n(i);e.default=[{path:"/login",name:"Login",noDropdown:!0,hidden:!0,icon:"",component:function(){return r.a.resolve().then(function(){return function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n("7eQH"))})}}]},a64x:function(t,e,n){"use strict";n.r(e);var i=n("1Wvj"),r=[];i.keys().forEach(function(t){"./index.js"!==t&&(r=r.concat(i(t).default))}),e.default=r},buOB:function(t,e,n){"use strict";n.r(e);var i=n("Zg8/"),r={name:"Frame",components:{FrameHeader:i.c,FrameContent:i.a,FrameFooter:i.b}},o=(n("VLUk"),n("KHd+")),a=Object(o.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"frame"},[e("FrameHeader",{attrs:{center:""}}),this._v(" "),e("section",{staticClass:"frame-container"},[e("FrameContent",{attrs:{id:"content"}}),this._v(" "),e("FrameFooter")],1)],1)},[],!1,null,null,null);a.options.__file="FrameNoSide.vue",e.default=a.exports},cMMr:function(t,e,n){"use strict";n.r(e);var i=n("4GmL"),r=[{name:"startDev",color:"green",time:"2018年6月1日",des:"开始编写本项目,主要来讲还是给自己留一个copy",href:"/",hrefName:"进入框架",icon:"timeline-icon ivu-icon ivu-icon-trophy",imgUrl:"",children:[]},{name:"frameDev",color:"green",time:"2018年6月10日",des:"开始搭建开发框架,基于vue-cli2.0,修改大量的webpack配置",href:"/",hrefName:"进入框架",icon:"",imgUrl:"",children:[]},{name:"webpackUpdate",color:"red",time:"2018年8月21日",des:"重大更新：webpackV4.0升级",href:"/",hrefName:"进入框架",icon:"",imgUrl:"",children:[]},{name:"tinymce",color:"green",time:"2018年8月28日",des:"新增一个基于tinymce的富文本组件",href:"/",hrefName:"查看富文本",icon:"",imgUrl:"",children:[]},{name:"tinymce",color:"green",time:"2018年9月7日",des:"修改整体风格, 增加dashBoard",href:"/dashboard",hrefName:"dashboard",imgUrl:"",children:[]}],o={name:"welcome",components:{Timeline:i.Timeline,TimelineItem:i.TimelineItem},data:function(){return{timelines:r}}},a=(n("LlZN"),n("KHd+")),s=Object(a.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"timeline"},[n("Timeline",t._l(t.timelines,function(e,i){return n("TimelineItem",{key:i,attrs:{color:e.color}},[e.icon?n("i",{class:e.icon,attrs:{slot:"dot"},slot:"dot"}):t._e(),t._v(" "),n("span",{staticClass:"timeline-font"},[t._v(t._s(e.time))]),t._v(" "),n("p",{staticClass:"timeline-des"},[t._v(t._s(e.des))]),t._v(" "),e.imgUrl?n("div",{staticClass:"timeline-img"},[n("img",{attrs:{src:"",alt:""}})]):t._e(),t._v(" "),n("div",{staticClass:"timeline-link"},[n("router-link",{attrs:{to:e.href}},[t._v(t._s(e.hrefName))])],1)])}))],1)},[],!1,null,null,null);s.options.__file="Welcome.vue",e.default=s.exports},cMjy:function(t,e,n){"use strict";var i=n("xS7T");n.n(i).a},cWbO:function(t,e,n){"use strict";n.r(e);var i=n("4d7F"),r=n.n(i);e.default=[{path:"/components",name:"组件示例",component:function(){return r.a.resolve().then(function(){return function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n("TU6a"))})},noDropdown:!1,icon:"",hidden:!1,children:[]}]},fQqL:function(t,e,n){},g9om:function(t,e,n){},h8aa:function(t,e,n){"use strict";var i=n("4i17");n.n(i).a},hZKX:function(t,e,n){"use strict";var i=n("wV2z");n.n(i).a},"i7/w":function(t,e){t.exports=Vue},jE9Z:function(t,e,n){t.exports=n("AOTY")("./node_modules/vue-router/dist/vue-router.esm.js")},khiK:function(t,e,n){"use strict";n.r(e);var i=n("P2sY"),r=n.n(i),o=n("5WJX"),a=n.n(o),s=(n("eROu"),n("vFQT"),n("Qjfq"),n("Tqh3"),n("MVQK"),n("LTPx"),n("NN4D"),{name:"Editor",props:{id:{type:String,default:"editor"},value:{type:String,required:!0},height:{type:Number,default:300},showImmediate:{type:Boolean,default:!1},setting:{type:Object,default:function(){return{}}},plugins:{type:String|Array,default:function(){return["link","image","fullscreen","colorpicker","textcolor"]}},toolbar:{type:String|Array,default:"bold italic underline strikethrough | fontsizeselect | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat moticons forecolor backcolor | fullscreen"}},watch:{value:{deep:!0,handler:function(t,e){var n=this;!this.change&&this.hasInstance&&this.$nextTick(function(){return a.a.get(n.id).setContent(t||"")})}}},data:function(){return{hasInstance:!1,fullscreen:!1,change:!1}},methods:{initTinymce:function(){var t=this,e={selector:"#"+this.id,height:this.height,theme:"modern",body_class:"panel-body ",object_resizing:!1,skin_url:"static/tinymce/skins/lightgray",end_container_on_empty_block:!0,powerpaste_word_import:"clean",code_dialog_height:450,code_dialog_width:1e3,advlist_bullet_styles:"square",advlist_number_styles:"default",default_link_target:"_blank",link_title:!1,branding:!1,nonbreaking_force_tab:!0,init_instance_callback:function(e){t.hasInstance=!0,t.value&&e.setContent(t.value),e.on("NodeChange Change KeyUp SetContent",function(){t.change=!0;var n=e.getContent();t.$emit("input",n)})},setup:function(t){var e=this;t.on("FullscreenStateChanged",function(t){e.fullscreen=t.state})},toolbar:this.toolbar,plugins:this.plugins};r()(e,this.setting),a.a.init(e)},setContent:function(t){a.a.get(this.id).setContent(t)}},mounted:function(){this.initTinymce()},destroyed:function(){a.a.get(this.id)&&a.a.get(this.id).destroy()}}),c=(n("sWo8"),n("KHd+")),l=Object(c.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tinymce-wrap"},[t._t("beforeEditor"),t._v(" "),n("textarea",{attrs:{id:t.id}}),t._v(" "),t.showImmediate?n("div",{staticClass:"show-input"},[n("div",{domProps:{innerHTML:t._s(t.value)}})]):t._e(),t._v(" "),t._t("afterEditor")],2)},[],!1,null,null,null);l.options.__file="Editor.vue";var u={components:{Editor:l.exports},name:"RichText",data:function(){return{value:'<h1><span style="background-color: #ffffff; color: #0000ff;">Vue-base-template</span></h1>\n<p style="word-spacing: 0.05em; line-height: 1.6em; margin: 1.2em 0px -1.2em; padding-bottom: 1.2em; position: relative; z-index: 1; color: #34495e; font-family: \'Source Sans Pro\', \'Helvetica Neue\', Arial, sans-serif; font-size: 15px;">Vue (读音 /vjuː/，类似于&nbsp;<span style="font-weight: 600; color: #2c3e50;">view</span>) 是一套用于构建用户界面的<span style="font-weight: 600; color: #2c3e50;">渐进式框架</span>。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与<a style="text-decoration-line: none; color: #42b983; font-weight: 600;" href="https://cn.vuejs.org/v2/guide/single-file-components.html">现代化的工具链</a>以及各种<a style="text-decoration-line: none; color: #42b983; font-weight: 600;" href="https://github.com/vuejs/awesome-vue#libraries--plugins" target="_blank" rel="noopener">支持类库</a>结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。</p>\n<p style="word-spacing: 0.05em; line-height: 1.6em; margin: 1.2em 0px -1.2em; padding-bottom: 1.2em; position: relative; z-index: 1; color: #34495e; font-family: \'Source Sans Pro\', \'Helvetica Neue\', Arial, sans-serif; font-size: 15px;">如果你想在深入学习 Vue 之前对它有更多了解，我们<a id="modal-player" style="text-decoration-line: none; color: #42b983; font-weight: 600;" href="https://cn.vuejs.org/v2/guide/">制作了一个视频</a>，带您了解其核心概念和一个示例工程。</p>\n<p style="word-spacing: 0.05em; line-height: 1.6em; margin: 1.2em 0px -1.2em; padding-bottom: 1.2em; position: relative; z-index: 1; color: #34495e; font-family: \'Source Sans Pro\', \'Helvetica Neue\', Arial, sans-serif; font-size: 15px;">如果你已经是有经验的前端开发者，想知道 Vue 与其它库/框架有哪些区别，请查看<a style="text-decoration-line: none; color: #42b983; font-weight: 600;" href="https://cn.vuejs.org/v2/guide/comparison.html">对比其它框架</a>。</p>\n<p>&nbsp;</p>'}},watch:{value:function(t){}}},d=(n("N3Mv"),Object(c.a)(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"editor"},[n("Editor",{attrs:{id:"demo",height:200,setting:{},"show-immediate":""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)},[],!1,null,null,null));d.options.__file="ReachText.vue",e.default=d.exports},okjK:function(t,e,n){"use strict";var i=n("9nHl");n.n(i).a},p46w:function(t,e,n){t.exports=n("AOTY")("./node_modules/js-cookie/src/js.cookie.js")},pwD8:function(t,e,n){},roGA:function(t,e,n){"use strict";var i=n("pwD8");n.n(i).a},sWo8:function(t,e,n){"use strict";var i=n("SYI6");n.n(i).a},wV2z:function(t,e,n){},wcv7:function(t,e,n){"use strict";n.r(e);var i=n("4d7F"),r=n.n(i);function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}e.default=[{path:"/dashboard",name:"Dashboard",noDropdown:!0,hidden:!1,icon:"",redirect:"/richtext",component:function(){return r.a.resolve().then(function(){return o(n("TU6a"))})},children:[{path:"",component:function(){return r.a.resolve().then(function(){return o(n("Xc2Y"))})}}]}]},xIqt:function(t,e,n){},xS7T:function(t,e,n){},zwU1:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd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"}},[[15,0,1,2]]]);