/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/ClassStore.js":
/*!***********************************!*\
  !*** ./src/modules/ClassStore.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tasks)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/* eslint-disable eqeqeq */
var Tasks = /*#__PURE__*/function () {
  function Tasks() {
    _classCallCheck(this, Tasks);

    this.tasksArray = JSON.parse(localStorage.getItem('tasks')) || [];
  }

  _createClass(Tasks, [{
    key: "displayTasks",
    value: function displayTasks() {
      var _this = this;

      var taskDiv = document.querySelector('.todo-tasks');
      taskDiv.innerHTML = '';
      this.tasksArray.sort(function (taskOne, taskTwo) {
        return taskOne.index - taskTwo.index;
      }).forEach(function (task) {
        var taskElement = document.createElement('div');
        taskElement.classList.add('task');
        taskDiv.appendChild(taskElement);
        taskElement.innerHTML = "\n        <input class=\"checkbox\" type=\"checkbox\" id=\"".concat(task.index, "\" />\n        <textarea class=\"textarea\" for=\"").concat(task.index, "\">").concat(task.description, "</textarea>\n        <span class=\"delete\"><i class=\"fa-solid fa-trash-can\"></i></span>\n       ");
      });
      var deleteBtn = document.querySelectorAll('.delete');
      deleteBtn.forEach(function (btn, index) {
        btn.addEventListener('click', function () {
          _this.removeTask(index);
        });
      });
      var textareaEvent = document.querySelectorAll('.textarea');

      for (var i = 0; i < textareaEvent.length; i += 1) {
        textareaEvent[i].addEventListener('focusout', function (e) {
          e.target.parentElement.style.background = '#fff';

          if (e.target.value) {
            _this.updateTask(e.target.parentElement.firstElementChild.id, e.target.value);
          }

          if (e.target.previousElementSibling.checked) {
            e.target.style.textDecoration = 'line-through';
          }
        });
        textareaEvent[i].addEventListener('focusin', function (e) {
          e.target.parentElement.style.background = '#E9E4F0';
          e.target.style.background = 'transparent';
          e.target.style.textDecoration = 'none';
        });
      }

      var checkboxInputs = document.querySelectorAll('input[type=checkbox]');

      for (var _i = 0; _i < checkboxInputs.length; _i += 1) {
        checkboxInputs[_i].addEventListener('change', function (e) {
          var _iterator = _createForOfIteratorHelper(_this.tasksArray),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var task = _step.value;

              //eslint-disable-line
              if (task.index == e.target.id) {
                if (e.target.checked) {
                  task.complete = true;
                  e.target.nextElementSibling.style.textDecoration = 'line-through';
                } else {
                  task.complete = false;
                  e.target.nextElementSibling.style.textDecoration = 'none';
                }
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          localStorage.setItem('tasks', JSON.stringify(_this.tasksArray));
        });
      }

      document.addEventListener('DOMContentLoaded', function () {
        var checkedBoxs = document.querySelectorAll('.checkbox');

        for (var _i2 = 0; _i2 < checkedBoxs.length; _i2 += 1) {
          var _iterator2 = _createForOfIteratorHelper(_this.tasksArray),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var task = _step2.value;

              //eslint-disable-line
              if (checkedBoxs[_i2].id == task.index) {
                if (task.complete == true) {
                  checkedBoxs[_i2].checked = true;
                } else {
                  checkedBoxs[_i2].checked = false;
                }
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      });
    }
  }, {
    key: "addTask",
    value: function addTask(description) {
      var task = {
        description: description,
        index: Date.now().toString(),
        complete: false
      };
      this.tasksArray.push(task);
      localStorage.setItem('tasks', JSON.stringify(this.tasksArray));
      this.displayTasks();
    }
  }, {
    key: "removeTask",
    value: function removeTask(index) {
      this.tasksArray.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(this.tasksArray));
      this.displayTasks();
    }
  }, {
    key: "updateTask",
    value: function updateTask(index, newdescription) {
      var _iterator3 = _createForOfIteratorHelper(this.tasksArray),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var task = _step3.value;

          //eslint-disable-line
          if (task.index == index) {
            task.description = newdescription;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      localStorage.setItem('tasks', JSON.stringify(this.tasksArray));
    }
  }]);

  return Tasks;
}();



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nul {\n  list-style: none;\n}\n\nbody {\n  color: #7b7b7b;\n  background-color: #ddd;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 100;\n  font-size: 20px;\n}\n\ntextarea {\n  border: none;\n  width: 100%;\n  height: 1.5em;\n  resize: none;\n  outline: none;\n  font-size: 1rem;\n  padding-top: 2px;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 300;\n  color: #333;\n}\n\n[type=checkbox]:checked + textarea {\n  opacity: 0.5;\n  text-decoration: line-through;\n}\n\n.container {\n  margin: auto;\n  margin-top: 10%;\n  width: 30%;\n  display: flex;\n  flex-direction: column;\n  background-color: #fff;\n  box-shadow: 0 5px 20px #333;\n}\n.container .todo-header {\n  position: relative;\n}\n.container .todo-header h6 {\n  margin-top: 10px;\n  margin-left: 5px;\n  margin-bottom: 2%;\n}\n.container .todo-header i {\n  position: absolute;\n  top: 10px;\n  right: 5px;\n  font-size: 14px;\n}\n.container button {\n  display: block;\n  padding: 10px 10px;\n  text-align: center;\n  border: none;\n  color: #7b7b7b;\n  width: 100%;\n  cursor: pointer;\n}\n.container button:hover {\n  text-decoration: underline;\n}\n.container .adding-task {\n  position: relative;\n}\n.container .adding-task button {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n  width: 0;\n  height: 0;\n  background: transparent;\n  font-size: 15px;\n  color: #7b7b7b;\n  font-weight: 400;\n}\n.container .adding-task input {\n  padding: 15px 10px;\n  width: 100%;\n  border: none;\n  border-top: 1px solid #333;\n  border-bottom: 1px solid #333;\n}\n.container .adding-task input:focus {\n  outline: none;\n}\n.container .todo-tasks {\n  display: flex;\n  flex-direction: column;\n}\n.container .todo-tasks .task {\n  padding: 2px 10px;\n  font-size: 15px;\n  font-weight: 300;\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n.container .todo-tasks .task label {\n  color: #333;\n}\n.container .todo-tasks .task input {\n  margin-right: 10px;\n}\n.container .todo-tasks .task span {\n  position: absolute;\n  top: 5px;\n  right: 20px;\n  font-size: 10px;\n}\n.container .todo-tasks .task span:hover {\n  color: #333;\n  cursor: pointer;\n}\n.container .todo-tasks .task small {\n  margin-top: 15px;\n  padding-right: 8px;\n  font-size: 15px;\n}\n.container .todo-tasks .task small:hover {\n  color: #333;\n  cursor: move;\n}\n.container .todo-tasks .draggable {\n  cursor: move;\n}\n.container .todo-tasks .draggable.dragging {\n  background: #7b7b7b;\n}\n.container .todo-tasks .draggable.dragging textarea {\n  background: transparent;\n  color: white;\n}\n.container .todo-tasks .task:last-child {\n  margin-bottom: 0;\n}\n.container .todo-tasks .task::after {\n  position: absolute;\n  content: \"\";\n  right: 0;\n  left: 0;\n  bottom: -1%;\n  height: 1px;\n  background: #333;\n  opacity: 0.2;\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"AAAA;EACE,sBAAA;EACA,SAAA;EACA,UAAA;AACF;;AAEA;EACE,gBAAA;AACF;;AAEA;EACE,cAAA;EACA,sBAAA;EACA,iCAAA;EACA,gBAAA;EACA,eAAA;AACF;;AAEA;EACE,YAAA;EACA,WAAA;EACA,aAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,gBAAA;EACA,iCAAA;EACA,gBAAA;EACA,WAAA;AACF;;AAEA;EACE,YAAA;EACA,6BAAA;AACF;;AAEA;EACE,YAAA;EACA,eAAA;EACA,UAAA;EACA,aAAA;EACA,sBAAA;EACA,sBAAA;EACA,2BAAA;AACF;AACE;EACE,kBAAA;AACJ;AACI;EACE,gBAAA;EACA,gBAAA;EACA,iBAAA;AACN;AAEI;EACE,kBAAA;EACA,SAAA;EACA,UAAA;EACA,eAAA;AAAN;AAIE;EACE,cAAA;EACA,kBAAA;EACA,kBAAA;EACA,YAAA;EACA,cAAA;EACA,WAAA;EACA,eAAA;AAFJ;AAKE;EACE,0BAAA;AAHJ;AAME;EACE,kBAAA;AAJJ;AAMI;EACE,kBAAA;EACA,QAAA;EACA,WAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,eAAA;EACA,cAAA;EACA,gBAAA;AAJN;AAQE;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,0BAAA;EACA,6BAAA;AANJ;AASE;EACE,aAAA;AAPJ;AAUE;EACE,aAAA;EACA,sBAAA;AARJ;AAUI;EACE,iBAAA;EACA,eAAA;EACA,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;AARN;AAUM;EACE,WAAA;AARR;AAWM;EACE,kBAAA;AATR;AAYM;EACE,kBAAA;EACA,QAAA;EACA,WAAA;EACA,eAAA;AAVR;AAaM;EACE,WAAA;EACA,eAAA;AAXR;AAcM;EACE,gBAAA;EACA,kBAAA;EACA,eAAA;AAZR;AAeM;EACE,WAAA;EACA,YAAA;AAbR;AAiBI;EACE,YAAA;AAfN;AAkBI;EACE,mBAAA;AAhBN;AAmBI;EACE,uBAAA;EACA,YAAA;AAjBN;AAoBI;EACE,gBAAA;AAlBN;AAqBI;EACE,kBAAA;EACA,WAAA;EACA,QAAA;EACA,OAAA;EACA,WAAA;EACA,WAAA;EACA,gBAAA;EACA,YAAA;AAnBN","sourcesContent":["* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nul {\n  list-style: none;\n}\n\nbody {\n  color: #7b7b7b;\n  background-color: #ddd;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 100;\n  font-size: 20px;\n}\n\ntextarea {\n  border: none;\n  width: 100%;\n  height: 1.5em;\n  resize: none;\n  outline: none;\n  font-size: 1rem;\n  padding-top: 2px;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 300;\n  color: #333;\n}\n\n[type=\"checkbox\"]:checked + textarea {\n  opacity: 0.5;\n  text-decoration: line-through;\n}\n\n.container {\n  margin: auto;\n  margin-top: 10%;\n  width: 30%;\n  display: flex;\n  flex-direction: column;\n  background-color: #fff;\n  box-shadow: 0 5px 20px #333;\n\n  .todo-header {\n    position: relative;\n\n    h6 {\n      margin-top: 10px;\n      margin-left: 5px;\n      margin-bottom: 2%;\n    }\n\n    i {\n      position: absolute;\n      top: 10px;\n      right: 5px;\n      font-size: 14px;\n    }\n  }\n\n  button {\n    display: block;\n    padding: 10px 10px;\n    text-align: center;\n    border: none;\n    color: #7b7b7b;\n    width: 100%;\n    cursor: pointer;\n  }\n\n  button:hover {\n    text-decoration: underline;\n  }\n\n  .adding-task {\n    position: relative;\n\n    button {\n      position: absolute;\n      top: 5px;\n      right: 10px;\n      width: 0;\n      height: 0;\n      background: transparent;\n      font-size: 15px;\n      color: #7b7b7b;\n      font-weight: 400;\n    }\n  }\n\n  .adding-task input {\n    padding: 15px 10px;\n    width: 100%;\n    border: none;\n    border-top: 1px solid #333;\n    border-bottom: 1px solid #333;\n  }\n\n  .adding-task input:focus {\n    outline: none;\n  }\n\n  .todo-tasks {\n    display: flex;\n    flex-direction: column;\n\n    .task {\n      padding: 2px 10px;\n      font-size: 15px;\n      font-weight: 300;\n      display: flex;\n      align-items: center;\n      position: relative;\n\n      label {\n        color: #333;\n      }\n\n      input {\n        margin-right: 10px;\n      }\n\n      span {\n        position: absolute;\n        top: 5px;\n        right: 20px;\n        font-size: 10px;\n      }\n\n      span:hover {\n        color: #333;\n        cursor: pointer;\n      }\n\n      small {\n        margin-top: 15px;\n        padding-right: 8px;\n        font-size: 15px;\n      }\n\n      small:hover {\n        color: #333;\n        cursor: move;\n      }\n    }\n\n    .draggable {\n      cursor: move;\n    }\n\n    .draggable.dragging {\n      background: #7b7b7b;\n    }\n\n    .draggable.dragging textarea {\n      background: transparent;\n      color: white;\n    }\n\n    .task:last-child {\n      margin-bottom: 0;\n    }\n\n    .task::after {\n      position: absolute;\n      content: '';\n      right: 0;\n      left: 0;\n      bottom: -1%;\n      height: 1px;\n      background: #333;\n      opacity: 0.2;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _modules_ClassStore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ClassStore.js */ "./src/modules/ClassStore.js");


var addForm = document.querySelector('#add-task');
var tasksCollection = new _modules_ClassStore_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
tasksCollection.displayTasks();
addForm.addEventListener('submit', function (e) {
  e.preventDefault();
  var inputTaskValue = document.querySelector('#input-add-task').value;
  if (inputTaskValue === null || inputTaskValue === '') return;
  tasksCollection.addTask(inputTaskValue);
  document.querySelector('#input-add-task').value = '';
});
document.querySelector('.reflesh').addEventListener('click', function () {
  tasksCollection.tasksArray = [];
  localStorage.setItem('tasks', JSON.stringify(tasksCollection.tasksArray));
  tasksCollection.displayTasks();
});
document.querySelector('.clear-completed').addEventListener('click', function () {
  tasksCollection.tasksArray = tasksCollection.tasksArray.filter(function (task) {
    return !task.complete;
  });
  localStorage.setItem('tasks', JSON.stringify(tasksCollection.tasksArray));
  tasksCollection.displayTasks();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map