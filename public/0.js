webpackJsonp([0,1],{

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(50),
  /* template */
  __webpack_require__(51),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\xampp\\htdocs\\blog\\resources\\assets\\js\\components\\Blog\\show.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] show.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-72938544", Component.options)
  } else {
    hotAPI.reload("data-v-72938544", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(52),
  /* template */
  __webpack_require__(58),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\xampp\\htdocs\\blog\\resources\\assets\\js\\components\\Blog\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-23ce2a1b", Component.options)
  } else {
    hotAPI.reload("data-v-23ce2a1b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {
        console.log('Component mounted.');
    }
});

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-md-8"
  }, [_c('h1', {
    staticClass: "page-header"
  }, [_vm._v("\n        Page Heading\n        "), _c('small', [_vm._v("Secondary Text")])]), _vm._v(" "), _c('h2', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Blog Post Title")])]), _vm._v(" "), _c('p', {
    staticClass: "lead"
  }, [_vm._v("\n        by "), _c('a', {
    attrs: {
      "href": "index.php"
    }
  }, [_vm._v("Start Bootstrap")])]), _vm._v(" "), _c('p', [_c('span', {
    staticClass: "glyphicon glyphicon-time"
  }), _vm._v(" Posted on August 28, 2013 at 10:00 PM")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": "http://placehold.it/900x300",
      "alt": ""
    }
  }), _vm._v(" "), _c('hr'), _vm._v(" "), _c('p', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, veritatis, tempora, necessitatibus\n        inventore nisi quam quia repellat ut tempore laborum possimus eum dicta id animi corrupti debitis\n        ipsum officiis rerum.")]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-primary",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Read More "), _c('span', {
    staticClass: "glyphicon glyphicon-chevron-right"
  })]), _vm._v(" "), _c('hr')])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-72938544", module.exports)
  }
}

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__show_vue__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__show_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__show_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list_vue__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__list_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        defaultComponent: __WEBPACK_IMPORTED_MODULE_0__show_vue___default.a,
        listsComponent: __WEBPACK_IMPORTED_MODULE_1__list_vue___default.a
    },
    data: function data() {
        return {
            toggleValue: true
        };
    },
    mounted: function mounted() {
        var vm = this;
        vm.fetchData();
    },

    computed: {
        dynamicComponent: function dynamicComponent() {
            var vm = this;
            if (vm.toggleValue) {
                return 'default-component';
            } else {
                return 'lists-component';
            }
        }
    },
    methods: {
        fetchData: function fetchData() {
            axios.get('api/blog').then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
        }
    }
});

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(54)
}
var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(56),
  /* template */
  __webpack_require__(57),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-520abb36",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\xampp\\htdocs\\blog\\resources\\assets\\js\\components\\Blog\\list.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] list.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-520abb36", Component.options)
  } else {
    hotAPI.reload("data-v-520abb36", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(55);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(10)("59259037", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-520abb36\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./list.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-520abb36\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./list.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(undefined);
// imports


// module
exports.push([module.i, "\n.bg[data-v-520abb36] {\n    background-color: #dfdfdf;\n}\n.rwrapper[data-v-520abb36] {\n    padding: 5px;\n}\n.rlisting[data-v-520abb36] {\n    background-color: #fff;\n    overflow: hidden;\n}\n.rlisting img[data-v-520abb36] {\n    width: 100%\n}\n.nopad[data-v-520abb36] {\n    padding: 0;\n}\n.rfooter[data-v-520abb36] {\n    background: #f1f3f5;\n    border-top: 1px #ebebeb solid;\n    width: 100%;\n    padding: 10px 15px\n}\n.rlisting h5[data-v-520abb36], .rlisting p[data-v-520abb36] {\n    padding: 0 15px;\n}\n", ""]);

// exports


/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {
        console.log('Component mounted.');
    }
});

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-xs-12 col-sm-6 col-md-3 rwrapper"
  }, [_c('div', {
    staticClass: "rlisting"
  }, [_c('div', {
    staticClass: "col-md-12 nopad"
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": "http://dummyimage.com/250x250"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-md-12 nopad"
  }, [_c('h5', [_vm._v("Ratting S")]), _vm._v(" "), _c('p', [_vm._v("Lorem Ipsum is simply dummy text o industry...")]), _vm._v(" "), _c('div', {
    staticClass: "rfooter"
  }, [_c('i', {
    staticClass: "fa fa-phone-square"
  }), _vm._v(" +3000000\n            ")])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-520abb36", module.exports)
  }
}

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "well well-sm"
  }, [_c('strong', [_vm._v("Category Title")]), _vm._v(" "), _c('div', {
    staticClass: "btn-group"
  }, [_c('a', {
    staticClass: "btn btn-default",
    on: {
      "click": function($event) {
        _vm.toggleValue = !_vm.toggleValue
      }
    }
  }, [_c('span', {
    staticClass: "glyphicon ",
    class: _vm.toggleValue ? 'glyphicon-th-list' : 'glyphicon-th',
    domProps: {
      "textContent": _vm._s(_vm.toggleValue ? ' List' : ' Grid')
    }
  })])])]), _vm._v(" "), _c(_vm.dynamicComponent, {
    tag: "component"
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-23ce2a1b", module.exports)
  }
}

/***/ })

});