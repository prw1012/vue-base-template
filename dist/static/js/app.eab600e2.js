(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("64a9"),o=n.n(a);o.a},4360:function(e,t,n){"use strict";var a=n("a026"),o=n("2f62"),r={userId:function(e){return e.user.userId},userToken:function(e){return e.user.userToken},userName:function(e){return e.user.userName}},i=n("f3e4"),c={state:{userId:"",userToken:"",userName:"",loginStatus:!1},mutations:{Set_userId:function(e,t){e.userId=t},Set_userToken:function(e,t){e.userToken=t},Set_userName:function(e,t){e.userName=t},Set_loginStatus:function(e,t){e.loginStatus=t}},actions:{loginByStore:function(e,t){var n=e.commit;return console.log(t),new Promise(function(e,t){n("Login");try{e()}catch(a){t(a)}})},logout:function(){return new Promise(function(e,t){try{Object(i["a"])(),e()}catch(n){t(n)}})}}},u=c;a["default"].use(o["a"]);var l=new o["a"].Store({modules:{user:u},getters:r,strict:!1});t["a"]=l},5584:function(e,t,n){"use strict";n.r(t),t["default"]=[{path:"/list",name:"表格",noDropdown:!0,sort:0,icon:"iconfont ",redirect:"/list",component:function(){return n.e("chunk-607aa761").then(n.bind(null,"4d4e"))},children:[{path:"",component:function(){return n.e("chunk-0cf901e5").then(n.bind(null,"f736"))},meta:{keepAlive:!0}}]}]},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("a026"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],i={name:"App",data:function(){return{}}},c=i,u=(n("034f"),n("2877")),l=Object(u["a"])(c,o,r,!1,null,null,null),s=l.exports,d=n("75fc"),f=n("8c4f"),h=n("6bae"),p=[{path:"/nopermission",name:"nopermission",hidden:!0,component:function(){return n.e("chunk-2d0e2c36").then(n.bind(null,"7fa2"))}},{path:"*",name:"lost",hidden:!0,component:function(){return n.e("chunk-2d0b309a").then(n.bind(null,"2754"))}}],m=[{path:"/",name:"Home",redirect:"/index",noDropdown:!0,component:function(){return n.e("chunk-607aa761").then(n.bind(null,"4d4e"))},children:[{path:"",component:function(){return n.e("chunk-2d0baaed").then(n.bind(null,"37f9"))}}]}];a["default"].use(f["a"]);var b=new f["a"]({scrollBehavior:function(){return{y:0}},routes:m.concat([].concat(Object(d["a"])(h["default"]),Object(d["a"])(p)))}),v=n("4360"),g=(n("28a5"),n("a481"),n("3b2b"),n("6b54"),n("d225")),y=n("b0b4"),w=n("bd86"),k=function(){var e=!1;if(!window.storage)throw new Error("浏览器不支持localStorage");return e=!0,e},_=function(){function e(){Object(g["a"])(this,e),Object(w["a"])(this,"getStorage",function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"local";return t="local"===n?window.localStorage:window.sessionStorage,JSON.parse(t.getItem(e))}),Object(w["a"])(this,"removeStorage",function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"local";return t="local"===n?window.localStorage:window.sessionStorage,t.removeItem(e)}),Object(w["a"])(this,"clearStorage",function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"local";return e="local"===t?window.localStorage:window.sessionStorage,e.clear()})}return Object(y["a"])(e,[{key:"replaceStr",value:function(t,n,a){t=e.isString(t)?t:t.toString();var o=new RegExp(n,"g");return t.replace(o,a)}},{key:"setStorage",value:function(e,t){var n,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"local";if(k){var o=JSON.stringify(t);n="local"===a?window.localStorage:window.sessionStorage,n.setItem(e,o)}}},{key:"getIeVersion",value:function(){var e=navigator.appName,t=navigator.appVersion,n=t.split(";"),a=n[1]?n[1].replace(/[ ]/g,""):"";return"Microsoft Internet Explorer"===e?parseInt(a.substr(4,1)):0}},{key:"addEvent",value:function(e,t,n){var a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];e.addEventListener?e.addEventListener(t,n,a):e.attachEvent?e.attachEvent(t,n,a):e["on"+t]=null}}]),e}();_._debance=function(e,t){var n=null;return function(){var a=this,o=arguments;n&&(clearTimeout(n),n=null),n=setTimeout(function(){e.apply(a,o)},t)}},_._throttle=function(e,t){var n=null;return function(){var a=new Date;(a-n>t||!n)&&(e(),n=a)}};var S=new _,C=n("5c96"),x=n.n(C),j=(n("a4b1"),n("63d2"),n("7f7f"),n("ac6a"),n("7e79"));j.keys().forEach(function(e){var t=j(e).default;a["default"].component(t.name,t)}),a["default"].use(x.a,{size:"small"}),a["default"].prototype.$util=S;var E=n("f3e4"),O=n("323e"),N=n.n(O),$=(n("a5d8"),["/login"]);b.beforeEach(function(e,t,n){N.a.start(),Object(E["b"])()?"/login"===e.path?n({path:"/"}):n():-1!==$.indexOf(e.path)?n():n({path:"/login?redirect=".concat(e.path)})}),b.afterEach(function(){N.a.done()}),a["default"].config.productionTip=!1,new a["default"]({el:"#app",router:b,store:v["a"],components:{App:s},template:"<App/>",beforeCreate:function(){var e=this.$util.getIeVersion(),t=document.querySelector(".skeleton");t.style.opacity="0";var n=!0;0!==e&&e<=9?(console.log("this is IE9"),t.style.displpay="none",document.body.removeChild(t)):this.$util.addEvent(t,"transitionend",function(e){e.target===t&&n&&(t.style.displpay="none",n=!1,document.body.removeChild(t))}),setTimeout(function(){t&&n&&(t.style.displpay="none",n=!1,document.body.removeChild(t))},500)}})},"63d2":function(e,t,n){},"64a9":function(e,t,n){},"6b6c":function(e,t,n){"use strict";n.r(t),t["default"]=[{path:"/login",name:"Login",noDropdown:!0,hidden:!0,icon:"",component:function(){return Promise.all([n.e("chunk-e6f30828"),n.e("chunk-6a6c74fa")]).then(n.bind(null,"dc3f"))}}]},"6bae":function(e,t,n){"use strict";n.r(t);n("ac6a");var a=n("7191"),o=[];a.keys().forEach(function(e){"./index.js"!==e&&(o=o.concat(a(e).default))}),t["default"]=o},7166:function(e,t,n){"use strict";n.r(t),t["default"]=[{path:"/components",name:"组件示例",component:function(){return n.e("chunk-607aa761").then(n.bind(null,"4d4e"))},noDropdown:!1,icon:"",hidden:!0,children:[]}]},7191:function(e,t,n){var a={"./components.js":"7166","./dashboard.js":"c1cb","./index.js":"6bae","./list.js":"5584","./login.js":"6b6c","./richtext.js":"ece2"};function o(e){var t=r(e);return n(t)}function r(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(a)},o.resolve=r,e.exports=o,o.id="7191"},7323:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-fluid",class:[e.contentClass]},[n("el-row",[n("el-col",{attrs:{span:24}},[n("div",{staticClass:"box"},[n("div",{staticClass:"box-body"},[e._t("default")],2)])])],1)],1)},o=[],r={name:"box-content",props:{noTitle:{type:Boolean,default:!1}},computed:{contentClass:function(){return this.noTitle?"content-notitle":"content"}}},i=r,c=n("2877"),u=Object(c["a"])(i,a,o,!1,null,null,null);t["default"]=u.exports},"7e79":function(e,t,n){var a={"./BaseTable.vue":"9e1f","./BoxContent.vue":"7323","./SearchForm.vue":"bf53","./SearchItem.vue":"c6b2"};function o(e){var t=r(e);return n(t)}function r(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(a)},o.resolve=r,e.exports=o,o.id="7e79"},"9d29":function(e,t,n){},"9e1f":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",[n("el-col",{staticClass:"m-b-10",attrs:{span:24}},[n("el-table",e._b({attrs:{data:e.list,border:"",size:"mini"},on:{"selection-change":e.handleSelectionChange}},"el-table",e.$attrs,!1),[e._l(e.columns,function(t,a){return[e._t("front-slot"),e._v(" "),"selection"===t.type?n("el-table-column",{key:a,attrs:{type:"selection",width:"55"}}):"index"===t.type?n("el-table-column",{key:a,attrs:{type:"index",width:"50",label:"序号"}}):n("el-table-column",{key:a,attrs:{align:"left",label:t.title,width:t.width},scopedSlots:e._u([{key:"default",fn:function(a){return[t.hidden?e._e():n("label",["operate"===t.type?n("label",e._l(t.operates,function(t,o){return n("a",{key:o,staticClass:"operate-button",attrs:{href:"javascript:void(0)"},on:{click:function(n){return e.handleClick(t,a.row)}}},[e._v("\n                  "+e._s(t.name)+"\n                    \n                ")])}),0):n("span",[e._v(e._s(a.row[t.key]))])]),e._v(" "),t.slot?n("label",[t.slot?e._t(t.slot,null,{scope:a}):e._e()],2):e._e()]}}],null,!0)})]}),e._v(" "),e._t("default")],2)],1),e._v(" "),e.hiddenPage?e._e():n("el-col",{staticClass:"page",attrs:{span:24}},[n("el-pagination",{staticClass:"float-right",attrs:{"current-page":e.pageNo,"page-sizes":e.pageSizes,"page-size":e.pageSize,layout:e.pageLayout,total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},o=[],r=(n("c5f6"),{name:"base-table",props:{list:{type:Array,default:function(){return[]}},columns:{type:Array,required:!0,default:function(){return[]}},hiddenPage:{type:Boolean,default:!1},pageNo:{type:Number,default:1},pageSize:{type:Number,default:15},totalCount:{type:Number,default:0}},data:function(){return{pageSizes:[15,20,25,30],pageLayout:"total, sizes, prev, pager, next, jumper"}},computed:{tableHeight:function(){return 400}},methods:{handleClick:function(e,t){this.$emit("".concat(e.emitKey),t)},handleSelectionChange:function(e){this.$emit("change-select",e)},handleSizeChange:function(e){this.$emit("change-size",e)},handleCurrentChange:function(e){this.$emit("change-page",e)}}}),i=r,c=n("2877"),u=Object(c["a"])(i,a,o,!1,null,null,null);t["default"]=u.exports},a4b1:function(e,t,n){},aa45:function(e,t,n){"use strict";var a=n("9d29"),o=n.n(a);o.a},bf53:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search-form",on:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.keyEnter(t)}}},[n("el-row",[e._t("default"),e._v(" "),n("el-col",{attrs:{span:1}},[e.hasSearch?n("div",{staticClass:"load-button text-center"},[n("el-button",{staticClass:"search-btn btn-green",attrs:{icon:"el-icon-search",size:"mini"},on:{click:e.search}})],1):e._e()])],2)],1)},o=[],r={name:"search-form",props:{hasSearch:{type:Boolean,default:!0}},methods:{keyEnter:function(e){this.$emit("search",e)},search:function(){this.$emit("search")}}},i=r,c=(n("aa45"),n("2877")),u=Object(c["a"])(i,a,o,!1,null,null,null);t["default"]=u.exports},c1cb:function(e,t,n){"use strict";n.r(t),t["default"]=[{path:"/dashboard",name:"Dashboard",noDropdown:!0,hidden:!1,icon:"",redirect:"/richtext",component:function(){return n.e("chunk-607aa761").then(n.bind(null,"4d4e"))},children:[{path:"",component:function(){return n.e("chunk-2d0d3c66").then(n.bind(null,"5dcd"))}}]}]},c6b2:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-col",{staticClass:"search-item"},[n("el-col",{staticClass:"label-wrap"},[n("label",{staticClass:"l-34 search-item-label",class:e.textAlign},[e._v(e._s(e.label)+"  "+e._s(e.label.length>=2?":":""))])]),e._v(" "),n("el-col",{staticClass:"search-input-wrap"},[e._t("default")],2)],1)},o=[],r={name:"search-item",props:{label:{type:String},textAlign:{type:String,default:"justify"}}},i=r,c=(n("f67c"),n("2877")),u=Object(c["a"])(i,a,o,!1,null,null,null);t["default"]=u.exports},d165:function(e,t,n){},ece2:function(e,t,n){"use strict";n.r(t),t["default"]=[{path:"/richtext",noDropdown:!0,name:"Richtext",hidden:!0,icon:"",redirect:"/richtext",component:function(){return n.e("chunk-607aa761").then(n.bind(null,"4d4e"))},children:[{path:"",component:function(){return Promise.all([n.e("chunk-2d225822"),n.e("chunk-26551620")]).then(n.bind(null,"9218"))}}]}]},f3e4:function(e,t,n){"use strict";n.d(t,"c",function(){return l}),n.d(t,"b",function(){return s}),n.d(t,"a",function(){return d});var a=n("a78e"),o=n.n(a),r="base-key";function i(e,t){o.a.set(e,t)}function c(e){return o.a.get(e)}function u(e){o.a.remove(e)}function l(e){i(r,e)}function s(){return c(r)}function d(){u(r)}},f67c:function(e,t,n){"use strict";var a=n("d165"),o=n.n(a);o.a}},[[0,"runtime","chunk-element","chunk-modules"]]]);