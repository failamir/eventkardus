(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"8SLP":function(t,e,r){"use strict";r.r(e);var a=r("L2JU");function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function n(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var c={data:function(){return{}},beforeDestroy:function(){this.resetState()},computed:n({},Object(a.c)("PendaftarsSingle",["entry"])),watch:{"$route.params.id":{immediate:!0,handler:function(){this.resetState(),this.fetchShowData(this.$route.params.id)}}},methods:n({},Object(a.b)("PendaftarsSingle",["fetchShowData","resetState"]))},d=r("KHd+"),o=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header card-header-danger card-header-icon"},[t._m(0),t._v(" "),e("h4",{staticClass:"card-title"},[t._v("\n              "+t._s(t.$t("global.view"))+"\n              "),e("strong",[t._v(t._s(t.$t("cruds.pendaftar.title_singular")))])])]),t._v(" "),e("div",{staticClass:"card-body"},[e("back-button")],1),t._v(" "),e("div",{staticClass:"card-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"table-responsive"},[e("div",{staticClass:"table"},[e("tbody",[e("tr",[e("td",{staticClass:"text-primary"},[t._v("\n                          "+t._s(t.$t("cruds.pendaftar.fields.id"))+"\n                        ")]),t._v(" "),e("td",[t._v("\n                          "+t._s(t.entry.id)+"\n                        ")])]),t._v(" "),e("tr",[e("td",{staticClass:"text-primary"},[t._v("\n                          "+t._s(t.$t("cruds.pendaftar.fields.nama"))+"\n                        ")]),t._v(" "),e("td",[t._v("\n                          "+t._s(t.entry.nama)+"\n                        ")])]),t._v(" "),e("tr",[e("td",{staticClass:"text-primary"},[t._v("\n                          "+t._s(t.$t("cruds.pendaftar.fields.nik"))+"\n                        ")]),t._v(" "),e("td",[t._v("\n                          "+t._s(t.entry.nik)+"\n                        ")])]),t._v(" "),e("tr",[e("td",{staticClass:"text-primary"},[t._v("\n                          "+t._s(t.$t("cruds.pendaftar.fields.email"))+"\n                        ")]),t._v(" "),e("td",[t._v("\n                          "+t._s(t.entry.email)+"\n                        ")])]),t._v(" "),e("tr",[e("td",{staticClass:"text-primary"},[t._v("\n                          "+t._s(t.$t("cruds.pendaftar.fields.no_hp"))+"\n                        ")]),t._v(" "),e("td",[t._v("\n                          "+t._s(t.entry.no_hp)+"\n                        ")])])])])])])])])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"card-icon"},[t("i",{staticClass:"material-icons"},[this._v("remove_red_eye")])])}],!1,null,null,null);e.default=o.exports}}]);