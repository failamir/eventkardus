(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"3aEs":function(t,s,e){"use strict";var n={props:["title"]},a=e("KHd+"),i=Object(a.a)(n,(function(){return(0,this._self._c)("span",[this._v("\n    "+this._s(this.$t(this.title))+"\n  ")])}),[],!1,null,null,null);s.a=i.exports},LbIQ:function(t,s,e){"use strict";e("gtrO")},PMYq:function(t,s,e){"use strict";var n={name:"HeaderSettings",props:["columns"],methods:{isColVisible:function(t){return void 0===t.visible||""+t.visible=="true"},handleChange:function(t){this.$set(t,"visible",!this.isColVisible(t))}}},a=(e("LbIQ"),e("KHd+")),i=Object(a.a)(n,(function(){var t=this,s=t._self._c;return s("div",{attrs:{name:"HeaderSettings"}},[t._m(0),t._v(" "),s("div",{staticClass:"dropdown-menu p-2 mr-5"},[s("h5",{staticClass:"ml-2 mb-1"},[t._v("\n        "+t._s(t.$t("global.datatables.colvis"))+"\n      ")]),t._v(" "),s("hr",{staticClass:"my-1"}),t._v(" "),t._l(t.columns,(function(e,n){return s("div",{key:e.title+n},[s("div",{staticClass:"dropdown-item px-2 mt-0 mb-1",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.handleChange(e)}}},[t.isColVisible(e)?s("i",{staticClass:"material-icons text-success mr-2"},[t._v("\n            done\n          ")]):s("i",{staticClass:"material-icons text-rose mr-2"},[t._v("close")]),t._v("\n          "+t._s(t.$t(e.title))+"\n        ")])])})),t._v(" "),s("hr",{staticClass:"my-1"}),t._v(" "),s("button",{staticClass:"btn btn-default btn-sm pull-right",attrs:{type:"button"}},[t._v("\n        "+t._s(t.$t("global.close"))+"\n      ")])],2)])}),[function(){var t=this._self._c;return t("button",{staticClass:"btn btn-default dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown"}},[t("i",{staticClass:"fa fa-cog"}),this._v(" "),t("span",{staticClass:"caret"})])}],!1,null,"b03a5c46",null);s.a=i.exports},PQI8:function(t,s,e){"use strict";var n={props:{query:{type:Object,require:!0}},data:function(){return{focus:!1}},methods:{debounceSearch:_.debounce((function(t){this.query.s=t,this.query.offset=0}),300)}},a=e("KHd+"),i=Object(a.a)(n,(function(){var t=this,s=t._self._c;return s("div",{staticClass:"form-group bmd-form-group",class:{"has-items":t.query.s,"is-focused":t.focus}},[s("label",{staticClass:"bmd-label-floating"},[t._v("\n      "+t._s(t.$t("global.search"))+"\n    ")]),t._v(" "),s("div",{staticClass:"input-group"},[s("input",{staticClass:"form-control",attrs:{type:"text",name:"search"},domProps:{value:t.query.s},on:{input:function(s){return t.debounceSearch(s.target.value)},focus:function(s){t.focus=!0},blur:function(s){t.focus=!1}}}),t._v(" "),0!==t.query.s.length?s("div",{staticClass:"btn btn-just-icon btn-round btn-link text-dark d-inline-block input-group-append m-0",staticStyle:{height:"36px"},on:{click:function(s){t.query.s=""}}},[s("i",{staticClass:"material-icons"},[t._v("clear")])]):t._e()])])}),[],!1,null,null,null);s.a=i.exports},dqDz:function(t,s,e){(t.exports=e("I1BE")(!1)).push([t.i,".dropdown-menu .dropdown-item[data-v-b03a5c46]:focus,.dropdown-menu .dropdown-item[data-v-b03a5c46]:hover{box-shadow:none;background-color:#f4f4f4;color:#000;cursor:pointer!important}",""])},gtrO:function(t,s,e){var n=e("dqDz");"string"==typeof n&&(n=[[t.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(n,a);n.locals&&(t.exports=n.locals)},jWWX:function(t,s,e){"use strict";e.r(s);var n=e("L2JU"),a=e("qM1Y"),i=e("3aEs"),r=e("PMYq");function o(t,s){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);s&&(n=n.filter((function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var s=1;s<arguments.length;s++){var e=null!=arguments[s]?arguments[s]:{};s%2?o(Object(e),!0).forEach((function(s){c(t,s,e[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(e,s))}))}return t}function c(t,s,e){return s in t?Object.defineProperty(t,s,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[s]=e,t}var u={components:{GlobalSearch:e("PQI8").a,HeaderSettings:r.a},data:function(){return{columns:[{title:"cruds.permission.fields.id",field:"id",thComp:i.a,sortable:!0,colStyle:"width: 100px;"},{title:"cruds.permission.fields.title",field:"title",thComp:i.a,sortable:!0},{title:"global.actions",thComp:i.a,tdComp:a.a,visible:!0,thClass:"text-right",tdClass:"text-right td-actions",colStyle:"width: 150px;"}],query:{sort:"id",order:"desc",limit:100,s:""},xprops:{module:"PermissionsIndex",route:"permissions",permission_prefix:"permission_"}}},beforeDestroy:function(){this.resetState()},computed:l({},Object(n.c)("PermissionsIndex",["data","total","loading"])),watch:{query:{handler:function(t){this.setQuery(t),this.fetchIndexData()},deep:!0}},methods:l({},Object(n.b)("PermissionsIndex",["fetchIndexData","setQuery","resetState"]))},d=e("KHd+"),p=Object(d.a)(u,(function(){var t=this,s=t._self._c;return s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header card-header-danger card-header-icon"},[t._m(0),t._v(" "),s("h4",{staticClass:"card-title"},[t._v("\n              "+t._s(t.$t("global.table"))+"\n              "),s("strong",[t._v(t._s(t.$t("cruds.permission.title")))])])]),t._v(" "),s("div",{staticClass:"card-body"},[t.$can(t.xprops.permission_prefix+"create")?s("router-link",{staticClass:"btn btn-danger",attrs:{to:{name:t.xprops.route+".create"}}},[s("i",{staticClass:"material-icons"},[t._v("\n                add\n              ")]),t._v("\n              "+t._s(t.$t("global.add"))+"\n            ")]):t._e(),t._v(" "),s("button",{staticClass:"btn btn-default",class:{disabled:t.loading},attrs:{type:"button",disabled:t.loading},on:{click:t.fetchIndexData}},[s("i",{staticClass:"material-icons",class:{"fa-spin":t.loading}},[t._v("\n                refresh\n              ")]),t._v("\n              "+t._s(t.$t("global.refresh"))+"\n            ")])],1),t._v(" "),s("div",{staticClass:"card-body"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"table-overlay"},[s("div",{staticClass:"table-overlay-container"},[s("material-spinner"),t._v(" "),s("span",[t._v("Loading...")])],1)]),t._v(" "),s("datatable",{attrs:{columns:t.columns,data:t.data,total:t.total,query:t.query,xprops:t.xprops,HeaderSettings:!1,pageSizeOptions:[10,25,50,100]}},[s("global-search",{staticClass:"pull-left",attrs:{query:t.query}}),t._v(" "),s("header-settings",{staticClass:"pull-right",attrs:{columns:t.columns}})],1)],1)])])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"card-icon"},[t("i",{staticClass:"material-icons"},[this._v("assignment")])])}],!1,null,null,null);s.default=p.exports},qM1Y:function(t,s,e){"use strict";var n={props:["row","xprops"],data:function(){return{}},created:function(){},methods:{destroyData:function(t){var s=this;this.$swal({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonText:"Delete",confirmButtonColor:"#dd4b39",focusCancel:!0,reverseButtons:!0}).then((function(e){e.value&&s.$store.dispatch(s.xprops.module+"/destroyData",t).then((function(t){s.$eventHub.$emit("delete-success")}))}))}}},a=e("KHd+"),i=Object(a.a)(n,(function(){var t=this,s=t._self._c;return s("div",{staticClass:"dt-action-container"},[t.$can(t.xprops.permission_prefix+"show")?s("router-link",{staticClass:"btn btn-just-icon btn-round btn-link text-azure",attrs:{to:{name:t.xprops.route+".show",params:{id:t.row.id}}}},[s("i",{staticClass:"material-icons"},[t._v("remove_red_eye")])]):t._e(),t._v(" "),t.$can(t.xprops.permission_prefix+"edit")?s("router-link",{staticClass:"btn btn-just-icon btn-round btn-link text-success",attrs:{to:{name:t.xprops.route+".edit",params:{id:t.row.id}}}},[s("i",{staticClass:"material-icons"},[t._v("edit")])]):t._e(),t._v(" "),t.$can(t.xprops.permission_prefix+"delete")?s("a",{staticClass:"btn btn-just-icon btn-round btn-link text-rose",attrs:{href:"#",type:"button"},on:{click:function(s){return s.preventDefault(),t.destroyData(t.row.id)}}},[s("i",{staticClass:"material-icons"},[t._v("delete")])]):t._e()],1)}),[],!1,null,null,null);s.a=i.exports}}]);