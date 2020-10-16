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

eval("// get base url\nvar getUrl = window.location,\n    baseUrl = getUrl.protocol + \"//\" + getUrl.host + \"/\" + getUrl.pathname.split('/')[1];\nconsole.log(\"this is a \" + baseUrl + \"verify_email\");\n$(\"form\").bind(\"keypress\", function (e) {\n  if (e.keyCode == 13) {\n    return false;\n  }\n}); // Validate for Registration form.\n\nvar register = document.getElementById('registration_form'),\n    condition = document.getElementById(\"condition_form\");\n$(register).validate({\n  rules: {\n    registration_code: \"required\",\n    student_code: \"required\",\n    student_email: \"required\"\n  }\n});\n$.validator.addMethod(\"studentCode\", function (student_code, element) {\n  student_code = student_code.replace(/\\s+/g, \"\");\n  return this.optional(element) || student_code.length > 9 && student_code.match(/^([4-6]{1}[0-9]{1}[0-9]{2}[0-9]{1}[0-9]{4}[0-9]{1})$/);\n}, \"รูปแบบรหัสนักศึกษาไม่ถูกต้อง\");\n$(condition).validate({\n  rules: {\n    student_code: {\n      required: true,\n      number: true,\n      minlength: 10,\n      maxlength: 10,\n      studentCode: true\n    },\n    student_email: {\n      required: true,\n      email: true\n    }\n  },\n  messages: {\n    student_code: {\n      required: \"กรุณาระบบรหัสนักศึกษา\",\n      number: \"รูปแบบรหัสนักศึกษาไม่ถูกต้อง\",\n      minlength: \"รูปแบบรหัสนักศึกษาไม่ถูกต้อง\",\n      maxlength: \"รูปแบบรหัสนักศึกษาไม่ถูกต้อง\"\n    },\n    student_email: {\n      required: \"กรุณาระบุที่อยู่อีเมล์\",\n      email: \"รูปแบบอีเมล์ไม่ถูกต้อง\"\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmFsaWRhdG9yLmpzPzUwNTMiXSwibmFtZXMiOlsiZ2V0VXJsIiwid2luZG93IiwibG9jYXRpb24iLCJiYXNlVXJsIiwicHJvdG9jb2wiLCJob3N0IiwicGF0aG5hbWUiLCJzcGxpdCIsImNvbnNvbGUiLCJsb2ciLCIkIiwiYmluZCIsImUiLCJrZXlDb2RlIiwicmVnaXN0ZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29uZGl0aW9uIiwidmFsaWRhdGUiLCJydWxlcyIsInJlZ2lzdHJhdGlvbl9jb2RlIiwic3R1ZGVudF9jb2RlIiwic3R1ZGVudF9lbWFpbCIsInZhbGlkYXRvciIsImFkZE1ldGhvZCIsImVsZW1lbnQiLCJyZXBsYWNlIiwib3B0aW9uYWwiLCJsZW5ndGgiLCJtYXRjaCIsInJlcXVpcmVkIiwibnVtYmVyIiwibWlubGVuZ3RoIiwibWF4bGVuZ3RoIiwic3R1ZGVudENvZGUiLCJlbWFpbCIsIm1lc3NhZ2VzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUlBLE1BQU0sR0FBR0MsTUFBTSxDQUFDQyxRQUFwQjtBQUFBLElBQ0lDLE9BQU8sR0FBR0gsTUFBTSxDQUFDSSxRQUFQLEdBQWtCLElBQWxCLEdBQXlCSixNQUFNLENBQUNLLElBQWhDLEdBQXVDLEdBQXZDLEdBQTZDTCxNQUFNLENBQUNNLFFBQVAsQ0FBZ0JDLEtBQWhCLENBQXNCLEdBQXRCLEVBQTJCLENBQTNCLENBRDNEO0FBRUFDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQWFOLE9BQWIsR0FBdUIsY0FBbkM7QUFHQU8sQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVQyxJQUFWLENBQWUsVUFBZixFQUEyQixVQUFTQyxDQUFULEVBQVc7QUFDckMsTUFBR0EsQ0FBQyxDQUFDQyxPQUFGLElBQWEsRUFBaEIsRUFBb0I7QUFDbkIsV0FBTyxLQUFQO0FBQ0E7QUFDRCxDQUpELEUsQ0FPQTs7QUFDQyxJQUFJQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixtQkFBeEIsQ0FBZjtBQUFBLElBQ0NDLFNBQVMsR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLGdCQUF4QixDQURiO0FBR0ROLENBQUMsQ0FBQ0ksUUFBRCxDQUFELENBQVlJLFFBQVosQ0FBcUI7QUFDakJDLE9BQUssRUFBRTtBQUNIQyxxQkFBaUIsRUFBRSxVQURoQjtBQUVIQyxnQkFBWSxFQUFFLFVBRlg7QUFHSEMsaUJBQWEsRUFBRTtBQUhaO0FBRFUsQ0FBckI7QUFVQVosQ0FBQyxDQUFDYSxTQUFGLENBQVlDLFNBQVosQ0FBc0IsYUFBdEIsRUFBcUMsVUFBU0gsWUFBVCxFQUF1QkksT0FBdkIsRUFBK0I7QUFDbkVKLGNBQVksR0FBR0EsWUFBWSxDQUFDSyxPQUFiLENBQXFCLE1BQXJCLEVBQTZCLEVBQTdCLENBQWY7QUFDQSxTQUFPLEtBQUtDLFFBQUwsQ0FBY0YsT0FBZCxLQUEwQkosWUFBWSxDQUFDTyxNQUFiLEdBQXNCLENBQXRCLElBQTJCUCxZQUFZLENBQUNRLEtBQWIsQ0FBbUIsc0RBQW5CLENBQTVEO0FBQ0EsQ0FIRCxFQUdHLDhCQUhIO0FBS0FuQixDQUFDLENBQUNPLFNBQUQsQ0FBRCxDQUFhQyxRQUFiLENBQXNCO0FBQ3JCQyxPQUFLLEVBQUU7QUFDTkUsZ0JBQVksRUFBRTtBQUNiUyxjQUFRLEVBQUUsSUFERztBQUViQyxZQUFNLEVBQUUsSUFGSztBQUdiQyxlQUFTLEVBQUUsRUFIRTtBQUliQyxlQUFTLEVBQUUsRUFKRTtBQUtiQyxpQkFBVyxFQUFFO0FBTEEsS0FEUjtBQVFOWixpQkFBYSxFQUFFO0FBQ2RRLGNBQVEsRUFBRSxJQURJO0FBRWRLLFdBQUssRUFBRTtBQUZPO0FBUlQsR0FEYztBQWNyQkMsVUFBUSxFQUFFO0FBQ1RmLGdCQUFZLEVBQUU7QUFDYlMsY0FBUSxFQUFFLHVCQURHO0FBRWJDLFlBQU0sRUFBRSw4QkFGSztBQUdiQyxlQUFTLEVBQUUsOEJBSEU7QUFJYkMsZUFBUyxFQUFFO0FBSkUsS0FETDtBQU9UWCxpQkFBYSxFQUFFO0FBQ2RRLGNBQVEsRUFBRSx3QkFESTtBQUVkSyxXQUFLLEVBQUU7QUFGTztBQVBOO0FBZFcsQ0FBdEIiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvdmFsaWRhdG9yLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2V0IGJhc2UgdXJsXHJcbmxldCBnZXRVcmwgPSB3aW5kb3cubG9jYXRpb24sXHJcbiAgICBiYXNlVXJsID0gZ2V0VXJsLnByb3RvY29sICsgXCIvL1wiICsgZ2V0VXJsLmhvc3QgKyBcIi9cIiArIGdldFVybC5wYXRobmFtZS5zcGxpdCgnLycpWzFdO1xyXG5jb25zb2xlLmxvZyhcInRoaXMgaXMgYSBcIitiYXNlVXJsICsgXCJ2ZXJpZnlfZW1haWxcIik7XHJcblxyXG5cclxuJChcImZvcm1cIikuYmluZChcImtleXByZXNzXCIsIGZ1bmN0aW9uKGUpe1xyXG5cdGlmKGUua2V5Q29kZSA9PSAxMykge1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxufSk7XHJcblxyXG5cclxuLy8gVmFsaWRhdGUgZm9yIFJlZ2lzdHJhdGlvbiBmb3JtLlxyXG4gbGV0IHJlZ2lzdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdHJhdGlvbl9mb3JtJyksXHJcbiBcdGNvbmRpdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29uZGl0aW9uX2Zvcm1cIik7XHJcblxyXG4kKHJlZ2lzdGVyKS52YWxpZGF0ZSh7XHJcbiAgICBydWxlczoge1xyXG4gICAgICAgIHJlZ2lzdHJhdGlvbl9jb2RlOiBcInJlcXVpcmVkXCIsXHJcbiAgICAgICAgc3R1ZGVudF9jb2RlOiBcInJlcXVpcmVkXCIsXHJcbiAgICAgICAgc3R1ZGVudF9lbWFpbDogXCJyZXF1aXJlZFwiLFxyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG5cclxuJC52YWxpZGF0b3IuYWRkTWV0aG9kKFwic3R1ZGVudENvZGVcIiwgZnVuY3Rpb24oc3R1ZGVudF9jb2RlLCBlbGVtZW50KXtcclxuXHRzdHVkZW50X2NvZGUgPSBzdHVkZW50X2NvZGUucmVwbGFjZSgvXFxzKy9nLCBcIlwiKTtcclxuXHRyZXR1cm4gdGhpcy5vcHRpb25hbChlbGVtZW50KSB8fCBzdHVkZW50X2NvZGUubGVuZ3RoID4gOSAmJiBzdHVkZW50X2NvZGUubWF0Y2goL14oWzQtNl17MX1bMC05XXsxfVswLTldezJ9WzAtOV17MX1bMC05XXs0fVswLTldezF9KSQvKTtcclxufSwgXCLguKPguLnguJvguYHguJrguJrguKPguKvguLHguKrguJnguLHguIHguKjguLbguIHguKnguLLguYTguKHguYjguJbguLnguIHguJXguYnguK3guIdcIik7XHJcblxyXG4kKGNvbmRpdGlvbikudmFsaWRhdGUoe1xyXG5cdHJ1bGVzOiB7XHJcblx0XHRzdHVkZW50X2NvZGU6IHtcclxuXHRcdFx0cmVxdWlyZWQ6IHRydWUsXHJcblx0XHRcdG51bWJlcjogdHJ1ZSxcclxuXHRcdFx0bWlubGVuZ3RoOiAxMCxcclxuXHRcdFx0bWF4bGVuZ3RoOiAxMCxcclxuXHRcdFx0c3R1ZGVudENvZGU6IHRydWUsXHJcblx0XHR9LFxyXG5cdFx0c3R1ZGVudF9lbWFpbDoge1xyXG5cdFx0XHRyZXF1aXJlZDogdHJ1ZSxcclxuXHRcdFx0ZW1haWw6IHRydWUsXHJcblx0XHR9XHJcblx0fSxcclxuXHRtZXNzYWdlczoge1xyXG5cdFx0c3R1ZGVudF9jb2RlOiB7XHJcblx0XHRcdHJlcXVpcmVkOiBcIuC4geC4o+C4uOC4k+C4suC4o+C4sOC4muC4muC4o+C4q+C4seC4quC4meC4seC4geC4qOC4tuC4geC4qeC4slwiLFxyXG5cdFx0XHRudW1iZXI6IFwi4Lij4Li54Lib4LmB4Lia4Lia4Lij4Lir4Lix4Liq4LiZ4Lix4LiB4Lio4Li24LiB4Lip4Liy4LmE4Lih4LmI4LiW4Li54LiB4LiV4LmJ4Lit4LiHXCIsXHJcblx0XHRcdG1pbmxlbmd0aDogXCLguKPguLnguJvguYHguJrguJrguKPguKvguLHguKrguJnguLHguIHguKjguLbguIHguKnguLLguYTguKHguYjguJbguLnguIHguJXguYnguK3guIdcIixcclxuXHRcdFx0bWF4bGVuZ3RoOiBcIuC4o+C4ueC4m+C5geC4muC4muC4o+C4q+C4seC4quC4meC4seC4geC4qOC4tuC4geC4qeC4suC5hOC4oeC5iOC4luC4ueC4geC4leC5ieC4reC4h1wiLFxyXG5cdFx0fSxcclxuXHRcdHN0dWRlbnRfZW1haWw6IHtcclxuXHRcdFx0cmVxdWlyZWQ6IFwi4LiB4Lij4Li44LiT4Liy4Lij4Liw4Lia4Li44LiX4Li14LmI4Lit4Lii4Li54LmI4Lit4Li14LmA4Lih4Lil4LmMXCIsXHJcblx0XHRcdGVtYWlsOiBcIuC4o+C4ueC4m+C5geC4muC4muC4reC4teC5gOC4oeC4peC5jOC5hOC4oeC5iOC4luC4ueC4geC4leC5ieC4reC4h1wiLFxyXG5cdFx0fSxcclxuXHR9LFxyXG59KTtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/validator.js\n");

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