!function(t){function e(e){for(var a,r,s=e[0],l=e[1],c=e[2],d=0,f=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);for(u&&u(e);f.length;)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},o={index:0},i=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=a);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.src=function(t){return r.p+"static/js/"+{"chunk-2d21af88":"28823bbf","chunk-2d22fd60":"ba2a7dd1"}[t]+"."+{"chunk-2d21af88":"28823bbf9d2e055e6539","chunk-2d22fd60":"ba2a7dd1c33282fea206"}[t]+".js"}(t);var l=new Error;i=function(e){s.onerror=s.onload=null,clearTimeout(c);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,n[1](l)}o[t]=void 0}};var c=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(e)},r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r.oe=function(t){throw t};var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;i.push([0,"chunk-vendors"]),n()}({0:function(t,e,n){n("d014"),t.exports=n("9f45")},"0b69":function(t,e,n){"use strict";n("4de8")},"4de8":function(t,e,n){},5037:function(t,e,n){},"58a3":function(t,e,n){},"742b":function(t,e,n){"use strict";n("8bbe")},"86a8":function(t,e,n){"use strict";n("c5f8")},"8a9c":function(t,e,n){var a={"./group.js":["be7f","chunk-2d21af88"],"./web.js":["ea5c","chunk-2d22fd60"]};function o(t){if(!n.o(a,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=a[t],o=e[0];return n.e(e[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(a)},o.id="8a9c",t.exports=o},"8bbe":function(t,e,n){},a9d7:function(t,e,n){},aab6:function(t,e,n){"use strict";n("58a3")},b2ee:function(t,e,n){"use strict";n("fb14")},b987:function(t,e,n){},bdb0:function(t,e,n){"use strict";n("5037")},c5f8:function(t,e,n){},d014:function(t,e,n){"use strict";n.r(e);n("8a6c"),n("36c2"),n("e1bb"),n("143e");var a=n("c0a4"),o=n("5d22"),i=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)}),[],!1,null,null,null).exports,r=n("8aaf"),s=(n("58ed"),n("c934"),n("f523"),n("8811"),{name:"",props:["systemjs"],data:function(){return{isShowDevModal:!1,transition:["none","fade"],tabs:"project",project:{},group:{},server:{}}},components:{},filters:{},watch:{},computed:{title:function(){var t="";switch(this.tabs){case"project":t=this.project.title;break;case"server":t=this.server.title;break;default:t="开发平台"}return t},verCount:function(){var t=0,e=this[this.tabs];return this[this.tabs].info instanceof Array&&(t=e.info.length),t},bugCount:function(){var t=0,e=this[this.tabs];if(e.info instanceof Array)for(var n=0;n<e.info.length;n++){t+=e.info[n].content.length}return t}},created:function(){this.onAddListenerDebug()},beforeMount:function(){var t=this;n("8a9c")("./".concat(this.systemjs,".js")).then((function(e){t.project=e.default})),n.e("chunk-2d21af88").then(n.bind(null,"be7f")).then((function(e){t.group=e.default}))},mounted:function(){},methods:{onAddListenerDebug:function(){var t=this;document.onkeydown=function(e){var n=e.keyCode||e.which||e.charCode;(e.ctrlKey||e.metaKey)&&13==n&&(t.isShowDevModal=!0)}},handleClick:function(t,e){this.tab=t.name,this.tabs=t.name}}}),l=(n("86a8"),Object(o.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isShowDevModal?n("div",{staticClass:"hide-debug"},[n("el-dialog",{staticClass:"hide-debug-modal",attrs:{visible:t.isShowDevModal,width:"50%",title:"开发人员模式（版本信息）"},on:{"update:visible":function(e){t.isShowDevModal=e}}},[n("div",{staticClass:"debug-bg"}),n("el-tabs",{attrs:{"v-model":t.tabs,value:t.tabs},on:{"tab-click":t.handleClick}},["{}"!==JSON.stringify(t.project)?[n("el-tab-pane",{attrs:{label:t.project.title,icon:"md-notifications-outline",name:"project"}},t._l(t.project.info,(function(e,a){return n("div",{staticClass:"info-item"},[n("div",{staticClass:"info-title"},[n("h3",[t._v("版本号："+t._s(e.version))]),n("span",[t._v("更新于 "+t._s(e.date))])]),n("div",{staticClass:"info-content"},[n("ul",t._l(e.content,(function(e,a){return n("li",{attrs:{"data-index":"【"+(a+1)+"】、"}},[t._v(t._s(e.des))])})),0)])])})),0)]:t._e(),n("el-tab-pane",{attrs:{label:"平台版本",icon:"md-desktop",name:"group"}},t._l(t.group.info,(function(e,a){return n("div",{staticClass:"info-item"},[n("div",{staticClass:"info-title"},[n("h3",[t._v("版本号："+t._s(e.version))]),n("span",[t._v("更新于 "+t._s(e.date))])]),n("div",{staticClass:"info-content"},[n("ul",t._l(e.content,(function(e,a){return n("li",{attrs:{"data-index":"【"+(a+1)+"】、"}},[t._v(t._s(e.des))])})),0)])])})),0)],2),n("div",{staticClass:"debug-footer",attrs:{slot:"footer"},slot:"footer"},[n("p",[t._v("Tips：若未及时更新或版本信息描述不清，请第一时间与开发人员联系。")]),n("p",[n("span",[t._v(t._s(t.title))]),t._v(" 已进行 "),n("span",[t._v(t._s(t.verCount))]),t._v("次的版本迭代，共解决 "),n("span",[t._v(t._s(t.bugCount))]),t._v("个问题。 ")])])],1)],1):t._e()}),[],!1,null,"b4ac0076",null).exports),c={name:"Header",data:function(){return{active:"Home",username:"梁斯郎",navList:[{title:"首页",router:"Home"},{title:"笔记",router:"Note"},{title:"表格",router:"Table"},{title:"项目",router:"Project"},{title:"其他",url:"https://www.baidu.com"}]}},components:{},mounted:function(){this.active=this.$route.name},watch:{"$route.name":function(t){this.active=t}},methods:{a:function(t){this.active=t.router},logout:function(){this.$message.error("其实并没有做")}}},u=(n("de91"),{name:"Layout",data:function(){return{isDebug:!0}},components:{Header:Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("i",{staticClass:"logo"}),n("div",{staticClass:"nav"},[n("ul",t._l(t.navList,(function(e,a){return n("li",{key:a,class:{current:t.active==e.router}},[e.router?n("router-link",{attrs:{to:{name:e.router}},domProps:{textContent:t._s(e.title)},on:{click:function(n){t.active=e.router}}}):n("a",{attrs:{href:e.url,target:"_blank"},domProps:{textContent:t._s(e.title)}})],1)})),0)]),n("div",{staticClass:"user"},[n("i",{staticClass:"el-icon-bell"}),n("el-badge",{staticClass:"message",attrs:{value:7,max:99}},[n("i",{staticClass:"el-icon-message"})]),n("el-dropdown",{attrs:{size:"medium"}},[n("span",{staticClass:"el-dropdown-link"},[n("i",{staticClass:"el-icon-user"}),n("span",{staticClass:"username"},[t._v(t._s(t.username))])]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{nativeOn:{click:function(e){return t.logout(e)}}},[t._v("退出")])],1)],1)],1)])}),[],!1,null,"7498309f",null).exports,DevDubug:l},mounted:function(){}}),d=(n("0b69"),Object(o.a)(u,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"layout-app"},[e("div",{staticClass:"wrapper clearfix"},[e("div",{staticClass:"layout-header"},[e("Header")],1),e("transition",{attrs:{name:"fade"}},[e("router-view",{staticClass:"layout-container"})],1),this.isDebug?e("DevDubug",{attrs:{systemjs:"web"}}):this._e()],1)])}),[],!1,null,"6b8be46b",null).exports),f={name:"Home",data:function(){return{imgList:["今","日","无","事","发","生"],value:!0,drawer:!1}},components:{},mounted:function(){},methods:{server:function(){var t=this;this.$loading(),this.$axios.post(Huiyan.Login,{jsondt:{}}).then((function(e){"1"==e.zt?t.$message({message:"请求完了",type:"success"}):t.$message.error("请求失败了"),t.$loaded()}))},load:function(){var t=this;this.$loading(),setTimeout((function(){t.$loaded()}),2e3)},alert:function(){var t=this;this.$confirm("我只是个弹窗","弹窗",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(){t.$message({message:"我只是个成功消息",type:"success"})})).catch((function(){t.$message({message:"我只是个警告消息",type:"warning"})}))}}},p=(n("b2ee"),Object(o.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("el-carousel",{attrs:{"indicator-position":"outside",type:"card"}},t._l(t.imgList,(function(e,a){return n("el-carousel-item",{key:a},[n("div",{staticClass:"img"},[n("span",[t._v(t._s(e))])])])})),1),n("div",{staticClass:"test"},[n("p",[t._v("我只是个测试")]),n("el-divider"),n("el-button",{attrs:{type:"primary"},on:{click:t.server}},[t._v("服务测试")]),n("el-button",{attrs:{type:"primary"},on:{click:t.load}},[t._v("加载")]),n("el-button",{attrs:{type:"primary"},on:{click:t.alert}},[t._v("弹窗")]),n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.drawer=!0}}},[t._v("抽屉")]),n("el-switch",{attrs:{"inactive-color":"#ff4949"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),[n("el-drawer",{attrs:{title:"我只是个抽屉",visible:t.drawer,direction:"rtl"},on:{"update:visible":function(e){t.drawer=e}}},[n("span",[t._v("我只是个抽屉辣")])])]],2)}),[],!1,null,"3fe1f8cc",null).exports),m={name:"Note",data:function(){return{activeNames:["1"]}},components:{},mounted:function(){},methods:{handleChange:function(t){}}},h=(n("742b"),Object(o.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"note"},[n("el-collapse",{on:{change:t.handleChange},model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},[n("el-collapse-item",{attrs:{title:"一致性 Consistency",name:"1"}},[n("div",[t._v("与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；")]),n("div",[t._v("在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。")])]),n("el-collapse-item",{attrs:{title:"反馈 Feedback",name:"2"}},[n("div",[t._v("控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；")]),n("div",[t._v("页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。")])]),n("el-collapse-item",{attrs:{title:"效率 Efficiency",name:"3"}},[n("div",[t._v("简化流程：设计简洁直观的操作流程；")]),n("div",[t._v("清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；")]),n("div",[t._v("帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。")])]),n("el-collapse-item",{attrs:{title:"可控 Controllability",name:"4"}},[n("div",[t._v("用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；")]),n("div",[t._v("结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。")])])],1)],1)}),[],!1,null,"d1ee62f8",null).exports),v={name:"el-Table",props:{tableD:{type:Object},selection:{type:Boolean}},data:function(){return{activeNames:["1"]}},components:{},mounted:function(){},methods:{handleSelectionChange:function(t){this.$emit("selection-change",t)},currentChange:function(t){}}},b=(n("bdb0"),{name:"Table1",data:function(){return{tableD:{page:{Count:16,PageIndex:2,PageSize:10},columns:[{title:"序号",type:"index",width:50},{title:"姓名",key:"xm",width:100},{title:"证件类型",key:"zjlx",width:100},{title:"证件号码",key:"zjhm",width:200},{title:"操作",slot:"cz"}],datas:[{xh:"1",xm:"梁斯郎",zjlx:"身份证",zjhm:"888888888888888"},{xh:"2",xm:"梁斯郎",zjlx:"身份证",zjhm:"888888888888888"},{xh:"3",xm:"梁斯郎",zjlx:"身份证",zjhm:"888888888888888"},{xh:"4",xm:"梁斯郎",zjlx:"身份证",zjhm:"888888888888888"},{xh:"4",xm:"梁斯郎",zjlx:"身份证",zjhm:"888888888888888"},{xh:"4",xm:"梁斯郎",zjlx:"身份证",zjhm:"888888888888888"}]}}},components:{Table:Object(o.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-table",{attrs:{data:t.tableD.datas,border:"","empty-text":"暂无数据"},on:{"selection-change":t.handleSelectionChange}},[t.selection?n("el-table-column",{attrs:{type:"selection",width:"55"}}):t._e(),t._l(t.tableD.columns,(function(e,a){return[e.type&&"index"==e.type?n("el-table-column",{attrs:{label:e.title,width:e.width,type:"index"}}):t._e(),e.key?n("el-table-column",{attrs:{prop:e.key,label:e.title,width:e.width}}):t._e(),e.slot?n("el-table-column",{attrs:{label:e.title,width:e.width},scopedSlots:t._u([{key:"default",fn:function(n){return[t._t(e.slot,null,{row:n})]}}],null,!0)}):t._e()]}))],2),t.tableD.page?n("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","page-size":t.tableD.page.PageSize,"current-page":t.tableD.page.PageIndex,total:t.tableD.page.Count},on:{"current-change":t.currentChange}}):t._e()],1)}),[],!1,null,"0ed23034",null).exports},mounted:function(){},methods:{handleEdit:function(t){},onSelectionChange:function(t){}}}),g=(n("aab6"),Object(o.a)(b,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tableBox"},[n("h2",[t._v("表格测试：")]),n("Table",{attrs:{tableD:t.tableD,selection:!0},on:{"selection-change":t.onSelectionChange},scopedSlots:t._u([{key:"cz",fn:function(e){return[n("el-button",{on:{click:function(n){return t.handleEdit(e.row)}}},[t._v("编辑")])]}}])})],1)}),[],!1,null,"17ee7fa2",null).exports),_={name:"Project",data:function(){return{projectList:[{title:"云南省互联网+不动产登记平台",url:"http://39.108.58.158:8090/ynwwsq"},{title:"重庆外网申请",url:"http://39.108.58.158:8090/cqwwsq"},{title:"通用web定制平台",url:"http://39.108.58.158:8090/gtweb2"},{title:"福建省不动产登记网上申请系统",url:"http://39.108.58.158:8089/fjweb"},{title:"广州外网不动产申请系统",url:"http://39.108.58.158:8090/gzwwsqst"},{title:"Jenkins自动化部署平台",url:"http://39.108.58.158:8077/jenkins/"}]}},components:{},mounted:function(){},methods:{open:function(t){window.open(t)}}},y=(n("d668"),Object(o.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"project"},[n("div",{staticClass:"cardBox"},t._l(t.projectList,(function(e,a){return n("div",{key:a,staticClass:"card",on:{click:function(n){return t.open(e.url)}}},[n("img",{staticClass:"image",attrs:{src:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"}}),n("div",{staticStyle:{padding:"14px"}},[n("p",[t._v(t._s(e.title))])])])})),0)])}),[],!1,null,"44e3acaa",null).exports);a.default.use(r.a);var w=[{path:"/",name:"Layout",component:d,redirect:"/home",children:[{path:"/home",name:"Home",component:p},{path:"/note",name:"Note",component:h},{path:"/table",name:"Table",component:g},{path:"/project",name:"Project",component:y}]}],j=new r.a({routes:w}),x=n("7736");a.default.use(x.a);var C=new x.a.Store({state:{},mutations:{},actions:{},modules:{}}),k=n("2763"),O=n.n(k),$=(n("ccc1"),n("73ef")),D=n.n($);D.a.defaults.timeout=5e5,D.a.defaults.headers["Content-Type"]="text/plain",D.a.defaults.withCredentials=!0,D.a.interceptors.response.use((function(t){var e=t.data.hasOwnProperty("result");if(e){var n=t.data;if(e&&!1===n.result){return k.MessageBox.alert("用户权限已失效，请重新登录","登录过期",{confirmButtonText:"重新登录",callback:function(t){var e=window.location;e.href=e.origin+e.pathname}}),new Promise((function(){}))}return n.result_object}return CONSOLELOG("非公司接口规范格式","HUIYAN Warning"),t}),(function(t){var e="Network Error"==t.message?"请求地址丢失":t.message;return CONSOLELOG(e),Promise.reject(t)}));var P,S=D.a;n("a9d7");a.default.config.productionTip=!1,a.default.use(O.a),a.default.prototype.$axios=S,a.default.prototype.$loading=function(t){P=k.Loading.service({lock:!t||!t.hasOwnProperty("lock")||t.lock,target:t&&t.target||document.body,text:t&&t.text||"拼命加载中",spinner:t&&t.spinner||"",background:t&&t.background||"rgba(0, 0, 0, 0.7)"})},a.default.prototype.$loaded=function(){P.close()},new a.default({router:j,store:C,render:function(t){return t(i)}}).$mount("#app")},d668:function(t,e,n){"use strict";n("dfa0")},de91:function(t,e,n){"use strict";n("b987")},dfa0:function(t,e,n){},fb14:function(t,e,n){}});