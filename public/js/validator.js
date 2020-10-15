/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/validator.js":
/*!***********************************!*\
  !*** ./resources/js/validator.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// get base url\nvar getUrl = window.location,\n    baseUrl = getUrl.protocol + \"//\" + getUrl.host + \"/\" + getUrl.pathname.split('/')[1];\nconsole.log(\"this is a \" + baseUrl + \"verify_email\"); // Validate for Registration form.\n\nvar register = document.getElementById('registration_form');\n$(register).validate({\n  rules: {\n    registration_code: \"required\",\n    student_code: \"required\",\n    student_email: \"required\"\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmFsaWRhdG9yLmpzPzUwNTMiXSwibmFtZXMiOlsiZ2V0VXJsIiwid2luZG93IiwibG9jYXRpb24iLCJiYXNlVXJsIiwicHJvdG9jb2wiLCJob3N0IiwicGF0aG5hbWUiLCJzcGxpdCIsImNvbnNvbGUiLCJsb2ciLCJyZWdpc3RlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCIkIiwidmFsaWRhdGUiLCJydWxlcyIsInJlZ2lzdHJhdGlvbl9jb2RlIiwic3R1ZGVudF9jb2RlIiwic3R1ZGVudF9lbWFpbCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxJQUFJQSxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBcEI7QUFBQSxJQUNJQyxPQUFPLEdBQUdILE1BQU0sQ0FBQ0ksUUFBUCxHQUFrQixJQUFsQixHQUF5QkosTUFBTSxDQUFDSyxJQUFoQyxHQUF1QyxHQUF2QyxHQUE2Q0wsTUFBTSxDQUFDTSxRQUFQLENBQWdCQyxLQUFoQixDQUFzQixHQUF0QixFQUEyQixDQUEzQixDQUQzRDtBQUVBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFhTixPQUFiLEdBQXVCLGNBQW5DLEUsQ0FLQTs7QUFDQyxJQUFJTyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixtQkFBeEIsQ0FBZjtBQUVEQyxDQUFDLENBQUNILFFBQUQsQ0FBRCxDQUFZSSxRQUFaLENBQXFCO0FBQ2pCQyxPQUFLLEVBQUU7QUFDSEMscUJBQWlCLEVBQUUsVUFEaEI7QUFFSEMsZ0JBQVksRUFBRSxVQUZYO0FBR0hDLGlCQUFhLEVBQUU7QUFIWjtBQURVLENBQXJCIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL3ZhbGlkYXRvci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdldCBiYXNlIHVybFxyXG5sZXQgZ2V0VXJsID0gd2luZG93LmxvY2F0aW9uLFxyXG4gICAgYmFzZVVybCA9IGdldFVybC5wcm90b2NvbCArIFwiLy9cIiArIGdldFVybC5ob3N0ICsgXCIvXCIgKyBnZXRVcmwucGF0aG5hbWUuc3BsaXQoJy8nKVsxXTtcclxuY29uc29sZS5sb2coXCJ0aGlzIGlzIGEgXCIrYmFzZVVybCArIFwidmVyaWZ5X2VtYWlsXCIpO1xyXG5cclxuXHJcblxyXG5cclxuLy8gVmFsaWRhdGUgZm9yIFJlZ2lzdHJhdGlvbiBmb3JtLlxyXG4gbGV0IHJlZ2lzdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdHJhdGlvbl9mb3JtJyk7XHJcblxyXG4kKHJlZ2lzdGVyKS52YWxpZGF0ZSh7XHJcbiAgICBydWxlczoge1xyXG4gICAgICAgIHJlZ2lzdHJhdGlvbl9jb2RlOiBcInJlcXVpcmVkXCIsXHJcbiAgICAgICAgc3R1ZGVudF9jb2RlOiBcInJlcXVpcmVkXCIsXHJcbiAgICAgICAgc3R1ZGVudF9lbWFpbDogXCJyZXF1aXJlZFwiLFxyXG4gICAgfVxyXG59KTtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/validator.js\n");

/***/ }),

/***/ 1:
/*!*****************************************!*\
  !*** multi ./resources/js/validator.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\laragon\www\Origin\resources\js\validator.js */"./resources/js/validator.js");


/***/ })

/******/ });