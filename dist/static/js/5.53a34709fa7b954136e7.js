webpackJsonp([5],{S8BB:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=t("BTaQ"),l=[{name:"startDev",color:"green",time:"2018年6月1日",des:"开始编写本项目,主要来讲还是给自己留一个copy",href:"/",hrefName:"进入框架",icon:"timeline-icon ivu-icon ivu-icon-trophy",imgUrl:"",children:[]},{name:"frameDev",color:"green",time:"2018年6月10日",des:"开始搭建开发框架,基于vue-cli2.0,修改大量的webpack配置",href:"/",hrefName:"进入框架",icon:"",imgUrl:"",children:[]}],r={name:"welcome",components:{Timeline:n.Timeline,TimelineItem:n.TimelineItem},data:function(){return{timelines:l}}},s={render:function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"timeline"},[t("Timeline",[e._l(e.timelines,function(i,n){return t("TimelineItem",{key:n,attrs:{color:i.color}},[i.icon?t("i",{class:i.icon,attrs:{slot:"dot"},slot:"dot"}):e._e(),e._v(" "),t("span",{staticClass:"timeline-font"},[e._v(e._s(i.time))]),e._v(" "),t("p",{staticClass:"timeline-des"},[e._v(e._s(i.des))]),e._v(" "),i.imgUrl?t("div",{staticClass:"timeline-img"},[t("img",{attrs:{src:"",alt:""}})]):e._e(),e._v(" "),t("div",{staticClass:"timeline-link"},[t("router-link",{attrs:{to:i.href}},[e._v(e._s(i.hrefName))])],1)])}),e._v(" "),t("TimelineItem",{attrs:{color:"green"}},[e._v("完成开发的搭建")])],2)],1)},staticRenderFns:[]};var o=t("VU/8")(r,s,!1,function(e){t("g3uH")},null,null);i.default=o.exports},g3uH:function(e,i){}});