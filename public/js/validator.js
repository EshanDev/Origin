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

eval("// get base url\nvar getUrl = window.location,\n    baseUrl = getUrl.protocol + \"//\" + getUrl.host + \"/\" + getUrl.pathname.split('/')[1];\nconsole.log(\"this is a \" + baseUrl + \"verify_email\");\n$(\"form\").bind(\"keypress\", function (e) {\n  if (e.keyCode == 13) {\n    return false;\n  }\n}); // Validate for Registration form.\n\nvar register = document.getElementById('registration_form'),\n    condition = document.getElementById(\"condition_form\");\n$(register).validate({\n  rules: {\n    registration_code: \"required\",\n    student_code: \"required\",\n    student_email: \"required\"\n  }\n});\n$.validator.addMethod(\"studentCode\", function (student_code, element) {\n  student_code = student_code.replace(/\\s+/g, \"\");\n  return this.optional(element) || student_code.length > 9 && student_code.match(/^([4-6]{1}[0-9]{1}[0-9]{2}[0-9]{1}[0-9]{4}[0-9]{1})$/);\n}, \"รูปแบบรหัสนักศึกษาไม่ถูกต้อง\");\n$(condition).validate({\n  rules: {\n    student_code: {\n      required: true,\n      number: true,\n      minlength: 10,\n      maxlength: 10,\n      studentCode: true\n    },\n    student_email: {\n      required: true,\n      email: true\n    }\n  },\n  messages: {\n    student_code: {\n      required: \"กรุณาระบบรหัสนักศึกษา\",\n      number: \"รูปแบบรหัสนักศึกษาไม่ถูกต้อง\",\n      minlength: \"รูปแบบรหัสนักศึกษาไม่ถูกต้อง\",\n      maxlength: \"รูปแบบรหัสนักศึกษาไม่ถูกต้อง\"\n    },\n    student_email: {\n      required: \"กรุณาระบุที่อยู่อีเมล์\",\n      email: \"รูปแบบอีเมล์ไม่ถูกต้อง\"\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmFsaWRhdG9yLmpzPzUwNTMiXSwibmFtZXMiOlsiZ2V0VXJsIiwid2luZG93IiwibG9jYXRpb24iLCJiYXNlVXJsIiwicHJvdG9jb2wiLCJob3N0IiwicGF0aG5hbWUiLCJzcGxpdCIsImNvbnNvbGUiLCJsb2ciLCIkIiwiYmluZCIsImUiLCJrZXlDb2RlIiwicmVnaXN0ZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29uZGl0aW9uIiwidmFsaWRhdGUiLCJydWxlcyIsInJlZ2lzdHJhdGlvbl9jb2RlIiwic3R1ZGVudF9jb2RlIiwic3R1ZGVudF9lbWFpbCIsInZhbGlkYXRvciIsImFkZE1ldGhvZCIsImVsZW1lbnQiLCJyZXBsYWNlIiwib3B0aW9uYWwiLCJsZW5ndGgiLCJtYXRjaCIsInJlcXVpcmVkIiwibnVtYmVyIiwibWlubGVuZ3RoIiwibWF4bGVuZ3RoIiwic3R1ZGVudENvZGUiLCJlbWFpbCIsIm1lc3NhZ2VzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUlBLE1BQU0sR0FBR0MsTUFBTSxDQUFDQyxRQUFwQjtBQUFBLElBQ0lDLE9BQU8sR0FBR0gsTUFBTSxDQUFDSSxRQUFQLEdBQWtCLElBQWxCLEdBQXlCSixNQUFNLENBQUNLLElBQWhDLEdBQXVDLEdBQXZDLEdBQTZDTCxNQUFNLENBQUNNLFFBQVAsQ0FBZ0JDLEtBQWhCLENBQXNCLEdBQXRCLEVBQTJCLENBQTNCLENBRDNEO0FBRUFDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQWFOLE9BQWIsR0FBdUIsY0FBbkM7QUFHQU8sQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVQyxJQUFWLENBQWUsVUFBZixFQUEyQixVQUFTQyxDQUFULEVBQVc7QUFDckMsTUFBR0EsQ0FBQyxDQUFDQyxPQUFGLElBQWEsRUFBaEIsRUFBb0I7QUFDbkIsV0FBTyxLQUFQO0FBQ0E7QUFDRCxDQUpELEUsQ0FPQTs7QUFDQyxJQUFJQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixtQkFBeEIsQ0FBZjtBQUFBLElBQ0NDLFNBQVMsR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLGdCQUF4QixDQURiO0FBR0ROLENBQUMsQ0FBQ0ksUUFBRCxDQUFELENBQVlJLFFBQVosQ0FBcUI7QUFDakJDLE9BQUssRUFBRTtBQUNIQyxxQkFBaUIsRUFBRSxVQURoQjtBQUVIQyxnQkFBWSxFQUFFLFVBRlg7QUFHSEMsaUJBQWEsRUFBRTtBQUhaO0FBRFUsQ0FBckI7QUFVQVosQ0FBQyxDQUFDYSxTQUFGLENBQVlDLFNBQVosQ0FBc0IsYUFBdEIsRUFBcUMsVUFBU0gsWUFBVCxFQUF1QkksT0FBdkIsRUFBK0I7QUFDbkVKLGNBQVksR0FBR0EsWUFBWSxDQUFDSyxPQUFiLENBQXFCLE1BQXJCLEVBQTZCLEVBQTdCLENBQWY7QUFDQSxTQUFPLEtBQUtDLFFBQUwsQ0FBY0YsT0FBZCxLQUEwQkosWUFBWSxDQUFDTyxNQUFiLEdBQXNCLENBQXRCLElBQTJCUCxZQUFZLENBQUNRLEtBQWIsQ0FBbUIsc0RBQW5CLENBQTVEO0FBQ0EsQ0FIRCxFQUdHLDhCQUhIO0FBS0FuQixDQUFDLENBQUNPLFNBQUQsQ0FBRCxDQUFhQyxRQUFiLENBQXNCO0FBQ3JCQyxPQUFLLEVBQUU7QUFDTkUsZ0JBQVksRUFBRTtBQUNiUyxjQUFRLEVBQUUsSUFERztBQUViQyxZQUFNLEVBQUUsSUFGSztBQUdiQyxlQUFTLEVBQUUsRUFIRTtBQUliQyxlQUFTLEVBQUUsRUFKRTtBQUtiQyxpQkFBVyxFQUFFO0FBTEEsS0FEUjtBQVFOWixpQkFBYSxFQUFFO0FBQ2RRLGNBQVEsRUFBRSxJQURJO0FBRWRLLFdBQUssRUFBRTtBQUZPO0FBUlQsR0FEYztBQWNyQkMsVUFBUSxFQUFFO0FBQ1RmLGdCQUFZLEVBQUU7QUFDYlMsY0FBUSxFQUFFLHVCQURHO0FBRWJDLFlBQU0sRUFBRSw4QkFGSztBQUdiQyxlQUFTLEVBQUUsOEJBSEU7QUFJYkMsZUFBUyxFQUFFO0FBSkUsS0FETDtBQU9UWCxpQkFBYSxFQUFFO0FBQ2RRLGNBQVEsRUFBRSx3QkFESTtBQUVkSyxXQUFLLEVBQUU7QUFGTztBQVBOO0FBZFcsQ0FBdEIiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvdmFsaWRhdG9yLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2V0IGJhc2UgdXJsXG5sZXQgZ2V0VXJsID0gd2luZG93LmxvY2F0aW9uLFxuICAgIGJhc2VVcmwgPSBnZXRVcmwucHJvdG9jb2wgKyBcIi8vXCIgKyBnZXRVcmwuaG9zdCArIFwiL1wiICsgZ2V0VXJsLnBhdGhuYW1lLnNwbGl0KCcvJylbMV07XG5jb25zb2xlLmxvZyhcInRoaXMgaXMgYSBcIitiYXNlVXJsICsgXCJ2ZXJpZnlfZW1haWxcIik7XG5cblxuJChcImZvcm1cIikuYmluZChcImtleXByZXNzXCIsIGZ1bmN0aW9uKGUpe1xuXHRpZihlLmtleUNvZGUgPT0gMTMpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn0pO1xuXG5cbi8vIFZhbGlkYXRlIGZvciBSZWdpc3RyYXRpb24gZm9ybS5cbiBsZXQgcmVnaXN0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0cmF0aW9uX2Zvcm0nKSxcbiBcdGNvbmRpdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29uZGl0aW9uX2Zvcm1cIik7XG5cbiQocmVnaXN0ZXIpLnZhbGlkYXRlKHtcbiAgICBydWxlczoge1xuICAgICAgICByZWdpc3RyYXRpb25fY29kZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICBzdHVkZW50X2NvZGU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgc3R1ZGVudF9lbWFpbDogXCJyZXF1aXJlZFwiLFxuICAgIH1cbn0pO1xuXG5cblxuJC52YWxpZGF0b3IuYWRkTWV0aG9kKFwic3R1ZGVudENvZGVcIiwgZnVuY3Rpb24oc3R1ZGVudF9jb2RlLCBlbGVtZW50KXtcblx0c3R1ZGVudF9jb2RlID0gc3R1ZGVudF9jb2RlLnJlcGxhY2UoL1xccysvZywgXCJcIik7XG5cdHJldHVybiB0aGlzLm9wdGlvbmFsKGVsZW1lbnQpIHx8IHN0dWRlbnRfY29kZS5sZW5ndGggPiA5ICYmIHN0dWRlbnRfY29kZS5tYXRjaCgvXihbNC02XXsxfVswLTldezF9WzAtOV17Mn1bMC05XXsxfVswLTldezR9WzAtOV17MX0pJC8pO1xufSwgXCLguKPguLnguJvguYHguJrguJrguKPguKvguLHguKrguJnguLHguIHguKjguLbguIHguKnguLLguYTguKHguYjguJbguLnguIHguJXguYnguK3guIdcIik7XG5cbiQoY29uZGl0aW9uKS52YWxpZGF0ZSh7XG5cdHJ1bGVzOiB7XG5cdFx0c3R1ZGVudF9jb2RlOiB7XG5cdFx0XHRyZXF1aXJlZDogdHJ1ZSxcblx0XHRcdG51bWJlcjogdHJ1ZSxcblx0XHRcdG1pbmxlbmd0aDogMTAsXG5cdFx0XHRtYXhsZW5ndGg6IDEwLFxuXHRcdFx0c3R1ZGVudENvZGU6IHRydWUsXG5cdFx0fSxcblx0XHRzdHVkZW50X2VtYWlsOiB7XG5cdFx0XHRyZXF1aXJlZDogdHJ1ZSxcblx0XHRcdGVtYWlsOiB0cnVlLFxuXHRcdH1cblx0fSxcblx0bWVzc2FnZXM6IHtcblx0XHRzdHVkZW50X2NvZGU6IHtcblx0XHRcdHJlcXVpcmVkOiBcIuC4geC4o+C4uOC4k+C4suC4o+C4sOC4muC4muC4o+C4q+C4seC4quC4meC4seC4geC4qOC4tuC4geC4qeC4slwiLFxuXHRcdFx0bnVtYmVyOiBcIuC4o+C4ueC4m+C5geC4muC4muC4o+C4q+C4seC4quC4meC4seC4geC4qOC4tuC4geC4qeC4suC5hOC4oeC5iOC4luC4ueC4geC4leC5ieC4reC4h1wiLFxuXHRcdFx0bWlubGVuZ3RoOiBcIuC4o+C4ueC4m+C5geC4muC4muC4o+C4q+C4seC4quC4meC4seC4geC4qOC4tuC4geC4qeC4suC5hOC4oeC5iOC4luC4ueC4geC4leC5ieC4reC4h1wiLFxuXHRcdFx0bWF4bGVuZ3RoOiBcIuC4o+C4ueC4m+C5geC4muC4muC4o+C4q+C4seC4quC4meC4seC4geC4qOC4tuC4geC4qeC4suC5hOC4oeC5iOC4luC4ueC4geC4leC5ieC4reC4h1wiLFxuXHRcdH0sXG5cdFx0c3R1ZGVudF9lbWFpbDoge1xuXHRcdFx0cmVxdWlyZWQ6IFwi4LiB4Lij4Li44LiT4Liy4Lij4Liw4Lia4Li44LiX4Li14LmI4Lit4Lii4Li54LmI4Lit4Li14LmA4Lih4Lil4LmMXCIsXG5cdFx0XHRlbWFpbDogXCLguKPguLnguJvguYHguJrguJrguK3guLXguYDguKHguKXguYzguYTguKHguYjguJbguLnguIHguJXguYnguK3guIdcIixcblx0XHR9LFxuXHR9LFxufSk7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/validator.js\n");

/***/ }),

/***/ 1:
/*!*****************************************!*\
  !*** multi ./resources/js/validator.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Studio3/Dev/Origin/resources/js/validator.js */"./resources/js/validator.js");


/***/ })

/******/ });