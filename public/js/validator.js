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

eval("// get base url\nvar getUrl = window.location,\n    baseUrl = getUrl.protocol + \"//\" + getUrl.host + \"/\" + getUrl.pathname.split(\"/\")[1];\nconsole.log(\"this is a \" + baseUrl + \"/verify_email\");\nconsole.log(\"http://\" + location.host + \"/auth/verify\"); // Set jQuery Validation default.\n\njQuery.validator.setDefaults({\n  onfocusout: function onfocusout(e) {\n    this.element(e);\n  },\n  onkeyup: false,\n  highlight: function highlight(element) {\n    jQuery(element).closest(\".form-control\").addClass(\"is-invalid\");\n  },\n  unhighlight: function unhighlight(element) {\n    jQuery(element).closest(\".form-control\").removeClass(\"is-invalid\");\n    jQuery(element).closest(\".form-control\").addClass(\"is-valid\");\n  },\n  errorElement: \"div\",\n  errorClass: \"invalid-feedback\",\n  errorPlacement: function errorPlacement(error, element) {\n    if (element.parent(\".input-group-prepend\").length) {\n      $(element).siblings(\".invalid-feedback\").append(error); //error.insertAfter(element.parent());\n    } else {\n      error.insertAfter(element);\n    }\n  }\n}); // Validate for Registration form.\n\nvar register = document.getElementById(\"registration_form\"),\n    login = document.getElementById(\"login_form\"),\n    condition = document.getElementById(\"condition_form\"),\n    registration = document.getElementById(\"verify_form\"); // Registration Validate.\n\n$(register).validate({\n  rules: {\n    registration_code: \"required\",\n    student_code: \"required\",\n    student_email: \"required\"\n  }\n}); // Verify Registration Code.\n\n$(registration).validate({\n  rules: {\n    registration_code: {\n      required: true,\n      remote: {\n        url: baseUrl + \"/verify\",\n        type: \"post\",\n        data: {\n          _token: function _token() {\n            return $('input[name=\"_token\"]').val();\n          }\n        }\n      }\n    }\n  },\n  messages: {\n    registration_code: {\n      remote: \"รหัสลงทะเบียนไม่ถูกต้อง\"\n    }\n  },\n  highlight: function highlight(element) {\n    jQuery(element).closest(\".form-control\").addClass(\"is-invalid\");\n  },\n  unhighlight: function unhighlight(element) {\n    jQuery(element).closest(\".form-control\").removeClass(\"is-invalid\");\n    jQuery(element).closest(\".form-control\").addClass(\"is-valid\");\n  }\n}); // Validate Login.\n\n$(login).validate({\n  rules: {\n    email: \"required\",\n    password: \"required\"\n  }\n});\n$.validator.addMethod(\"studentCode\", function (student_code, element) {\n  student_code = student_code.replace(/\\s+/g, \"\");\n  return this.optional(element) || student_code.length > 9 && student_code.match(/^([4-6]{1}[0-9]{1}[0-9]{2}[0-9]{1}[0-9]{4}[0-9]{1})$/);\n}, \"รูปแบบรหัสนักศึกษาไม่ถูกต้อง\"); // Get Registration Code Validate.\n\n$(condition).validate({\n  rules: {\n    student_code: {\n      required: true,\n      number: true,\n      minlength: 10,\n      maxlength: 10,\n      studentCode: true,\n      remote: {\n        url: baseUrl + \"/verify/is_valid\",\n        type: \"post\",\n        data: {\n          _token: function _token() {\n            return $('input[name=\"_token\"]').val();\n          }\n        }\n      }\n    },\n    student_email: {\n      required: true,\n      email: true\n    }\n  },\n  highlight: function highlight(element) {\n    jQuery(element).closest(\".form-control\").addClass(\"is-invalid\");\n  },\n  unhighlight: function unhighlight(element) {\n    jQuery(element).closest(\".form-control\").removeClass(\"is-invalid\");\n    jQuery(element).closest(\".form-control\").addClass(\"is-valid\");\n  },\n  messages: {\n    student_code: {\n      required: \"กรุณาระบบรหัสนักศึกษา\",\n      number: \"รูปแบบรหัสนักศึกษาไม่ถูกต้อง\",\n      minlength: \"รูปแบบรหัสนักศึกษาไม่ถูกต้อง\",\n      maxlength: \"รูปแบบรหัสนักศึกษาไม่ถูกต้อง\",\n      remote: \"รหัสนักศึกษานี้ได้ลงทะเบียนไว้แล้ว\"\n    },\n    student_email: {\n      required: \"กรุณาระบุที่อยู่อีเมล์\",\n      email: \"รูปแบบอีเมล์ไม่ถูกต้อง\"\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmFsaWRhdG9yLmpzPzUwNTMiXSwibmFtZXMiOlsiZ2V0VXJsIiwid2luZG93IiwibG9jYXRpb24iLCJiYXNlVXJsIiwicHJvdG9jb2wiLCJob3N0IiwicGF0aG5hbWUiLCJzcGxpdCIsImNvbnNvbGUiLCJsb2ciLCJqUXVlcnkiLCJ2YWxpZGF0b3IiLCJzZXREZWZhdWx0cyIsIm9uZm9jdXNvdXQiLCJlIiwiZWxlbWVudCIsIm9ua2V5dXAiLCJoaWdobGlnaHQiLCJjbG9zZXN0IiwiYWRkQ2xhc3MiLCJ1bmhpZ2hsaWdodCIsInJlbW92ZUNsYXNzIiwiZXJyb3JFbGVtZW50IiwiZXJyb3JDbGFzcyIsImVycm9yUGxhY2VtZW50IiwiZXJyb3IiLCJwYXJlbnQiLCJsZW5ndGgiLCIkIiwic2libGluZ3MiLCJhcHBlbmQiLCJpbnNlcnRBZnRlciIsInJlZ2lzdGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImxvZ2luIiwiY29uZGl0aW9uIiwicmVnaXN0cmF0aW9uIiwidmFsaWRhdGUiLCJydWxlcyIsInJlZ2lzdHJhdGlvbl9jb2RlIiwic3R1ZGVudF9jb2RlIiwic3R1ZGVudF9lbWFpbCIsInJlcXVpcmVkIiwicmVtb3RlIiwidXJsIiwidHlwZSIsImRhdGEiLCJfdG9rZW4iLCJ2YWwiLCJtZXNzYWdlcyIsImVtYWlsIiwicGFzc3dvcmQiLCJhZGRNZXRob2QiLCJyZXBsYWNlIiwib3B0aW9uYWwiLCJtYXRjaCIsIm51bWJlciIsIm1pbmxlbmd0aCIsIm1heGxlbmd0aCIsInN0dWRlbnRDb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUlBLE1BQU0sR0FBR0MsTUFBTSxDQUFDQyxRQUFwQjtBQUFBLElBQ0lDLE9BQU8sR0FDSEgsTUFBTSxDQUFDSSxRQUFQLEdBQ0EsSUFEQSxHQUVBSixNQUFNLENBQUNLLElBRlAsR0FHQSxHQUhBLEdBSUFMLE1BQU0sQ0FBQ00sUUFBUCxDQUFnQkMsS0FB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c0JBQUQsQ0FBRCxDQUEwQnFCLEdBQTFCLEVBQVA7QUFDSDtBQUhDO0FBSEY7QUFORSxLQURYO0FBaUJIUCxpQkFBYSxFQUFFO0FBQ1hDLGNBQVEsRUFBRSxJQURDO0FBRVhRLFdBQUssRUFBRTtBQUZJO0FBakJaLEdBRFc7QUF1QmxCbEMsV0FBUyxFQUFFLG1CQUFVRixPQUFWLEVBQW1CO0FBQzFCTCxVQUFNLENBQUNLLE9BQUQsQ0FBTixDQUNLRyxPQURMLENBQ2EsZUFEYixFQUVLQyxRQUZMLENBRWMsWUFGZDtBQUdILEdBM0JpQjtBQTRCbEJDLGFBQVcsRUFBRSxxQkFBVUwsT0FBVixFQUFtQjtBQUM1QkwsVUFBTSxDQUFDSyxPQUFELENBQU4sQ0FDS0csT0FETCxDQUNhLGVBRGIsRUFFS0csV0FGTCxDQUVpQixZQUZqQjtBQUdBWCxVQUFNLENBQUNLLE9BQUQsQ0FBTixDQUNLRyxPQURMLENBQ2EsZUFEYixFQUVLQyxRQUZMLENBRWMsVUFGZDtBQUdILEdBbkNpQjtBQW9DbEIrQixVQUFRLEVBQUU7QUFDTlQsZ0JBQVksRUFBRTtBQUNWRSxjQUFRLEVBQUUsdUJBREE7QUFFVmMsWUFBTSxFQUFFLDhCQUZFO0FBR1ZDLGVBQVMsRUFBRSw4QkFIRDtBQUlWQyxlQUFTLEVBQUUsOEJBSkQ7QUFLVmYsWUFBTSxFQUFFO0FBTEUsS0FEUjtBQVFORixpQkFBYSxFQUFFO0FBQ1hDLGNBQVEsRUFBRSx3QkFEQztBQUVYUSxXQUFLLEVBQUU7QUFGSTtBQVJUO0FBcENRLENBQXRCIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL3ZhbGlkYXRvci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdldCBiYXNlIHVybFxubGV0IGdldFVybCA9IHdpbmRvdy5sb2NhdGlvbixcbiAgICBiYXNlVXJsID1cbiAgICAgICAgZ2V0VXJsLnByb3RvY29sICtcbiAgICAgICAgXCIvL1wiICtcbiAgICAgICAgZ2V0VXJsLmhvc3QgK1xuICAgICAgICBcIi9cIiArXG4gICAgICAgIGdldFVybC5wYXRobmFtZS5zcGxpdChcIi9cIilbMV07XG5jb25zb2xlLmxvZyhcInRoaXMgaXMgYSBcIiArIGJhc2VVcmwgKyBcIi92ZXJpZnlfZW1haWxcIik7XG5jb25zb2xlLmxvZyhcImh0dHA6Ly9cIiArIGxvY2F0aW9uLmhvc3QgKyBcIi9hdXRoL3ZlcmlmeVwiKTtcblxuXG4vLyBTZXQgalF1ZXJ5IFZhbGlkYXRpb24gZGVmYXVsdC5cbmpRdWVyeS52YWxpZGF0b3Iuc2V0RGVmYXVsdHMoe1xuICAgIG9uZm9jdXNvdXQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudChlKTtcbiAgICB9LFxuICAgIG9ua2V5dXA6IGZhbHNlLFxuXG4gICAgaGlnaGxpZ2h0OiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBqUXVlcnkoZWxlbWVudClcbiAgICAgICAgICAgIC5jbG9zZXN0KFwiLmZvcm0tY29udHJvbFwiKVxuICAgICAgICAgICAgLmFkZENsYXNzKFwiaXMtaW52YWxpZFwiKTtcbiAgICB9LFxuICAgIHVuaGlnaGxpZ2h0OiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBqUXVlcnkoZWxlbWVudClcbiAgICAgICAgICAgIC5jbG9zZXN0KFwiLmZvcm0tY29udHJvbFwiKVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiaXMtaW52YWxpZFwiKTtcbiAgICAgICAgalF1ZXJ5KGVsZW1lbnQpXG4gICAgICAgICAgICAuY2xvc2VzdChcIi5mb3JtLWNvbnRyb2xcIilcbiAgICAgICAgICAgIC5hZGRDbGFzcyhcImlzLXZhbGlkXCIpO1xuICAgIH0sXG5cbiAgICBlcnJvckVsZW1lbnQ6IFwiZGl2XCIsXG4gICAgZXJyb3JDbGFzczogXCJpbnZhbGlkLWZlZWRiYWNrXCIsXG4gICAgZXJyb3JQbGFjZW1lbnQ6IGZ1bmN0aW9uIChlcnJvciwgZWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnQoXCIuaW5wdXQtZ3JvdXAtcHJlcGVuZFwiKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICQoZWxlbWVudClcbiAgICAgICAgICAgICAgICAuc2libGluZ3MoXCIuaW52YWxpZC1mZWVkYmFja1wiKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoZXJyb3IpO1xuICAgICAgICAgICAgLy9lcnJvci5pbnNlcnRBZnRlcihlbGVtZW50LnBhcmVudCgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yLmluc2VydEFmdGVyKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cblxuLy8gVmFsaWRhdGUgZm9yIFJlZ2lzdHJhdGlvbiBmb3JtLlxubGV0IHJlZ2lzdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWdpc3RyYXRpb25fZm9ybVwiKSxcbiAgICBsb2dpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW5fZm9ybVwiKSxcbiAgICBjb25kaXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbmRpdGlvbl9mb3JtXCIpLFxuICAgIHJlZ2lzdHJhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmVyaWZ5X2Zvcm1cIik7XG5cblxuLy8gUmVnaXN0cmF0aW9uIFZhbGlkYXRlLlxuJChyZWdpc3RlcikudmFsaWRhdGUoe1xuICAgIHJ1bGVzOiB7XG4gICAgICAgIHJlZ2lzdHJhdGlvbl9jb2RlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgIHN0dWRlbnRfY29kZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICBzdHVkZW50X2VtYWlsOiBcInJlcXVpcmVkXCJcbiAgICB9XG59KTtcblxuXG4vLyBWZXJpZnkgUmVnaXN0cmF0aW9uIENvZGUuXG4kKHJlZ2lzdHJhdGlvbikudmFsaWRhdGUoe1xuICAgIHJ1bGVzOiB7XG4gICAgICAgIHJlZ2lzdHJhdGlvbl9jb2RlOiB7XG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIHJlbW90ZToge1xuICAgICAgICAgICAgICAgIHVybDogYmFzZVVybCArIFwiL3ZlcmlmeVwiLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgX3Rva2VuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCgnaW5wdXRbbmFtZT1cIl90b2tlblwiXScpLnZhbCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXNzYWdlczoge1xuICAgICAgICByZWdpc3RyYXRpb25fY29kZToge1xuICAgICAgICAgICAgcmVtb3RlOiBcIuC4o+C4q+C4seC4quC4peC4h+C4l+C4sOC5gOC4muC4teC4ouC4meC5hOC4oeC5iOC4luC4ueC4geC4leC5ieC4reC4h1wiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGhpZ2hsaWdodDogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgalF1ZXJ5KGVsZW1lbnQpXG4gICAgICAgICAgICAuY2xvc2VzdChcIi5mb3JtLWNvbnRyb2xcIilcbiAgICAgICAgICAgIC5hZGRDbGFzcyhcImlzLWludmFsaWRcIik7XG4gICAgfSxcbiAgICB1bmhpZ2hsaWdodDogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgalF1ZXJ5KGVsZW1lbnQpXG4gICAgICAgICAgICAuY2xvc2VzdChcIi5mb3JtLWNvbnRyb2xcIilcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImlzLWludmFsaWRcIik7XG4gICAgICAgIGpRdWVyeShlbGVtZW50KVxuICAgICAgICAgICAgLmNsb3Nlc3QoXCIuZm9ybS1jb250cm9sXCIpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoXCJpcy12YWxpZFwiKTtcbiAgICB9XG59KTtcblxuXG4vLyBWYWxpZGF0ZSBMb2dpbi5cbiQobG9naW4pLnZhbGlkYXRlKHtcbiAgICBydWxlczoge1xuICAgICAgICBlbWFpbDogXCJyZXF1aXJlZFwiLFxuICAgICAgICBwYXNzd29yZDogXCJyZXF1aXJlZFwiXG4gICAgfVxufSk7XG5cblxuJC52YWxpZGF0b3IuYWRkTWV0aG9kKFxuICAgIFwic3R1ZGVudENvZGVcIixcbiAgICBmdW5jdGlvbiAoc3R1ZGVudF9jb2RlLCBlbGVtZW50KSB7XG4gICAgICAgIHN0dWRlbnRfY29kZSA9IHN0dWRlbnRfY29kZS5yZXBsYWNlKC9cXHMrL2csIFwiXCIpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgdGhpcy5vcHRpb25hbChlbGVtZW50KSB8fFxuICAgICAgICAgICAgKHN0dWRlbnRfY29kZS5sZW5ndGggPiA5ICYmXG4gICAgICAgICAgICAgICAgc3R1ZGVudF9jb2RlLm1hdGNoKFxuICAgICAgICAgICAgICAgICAgICAvXihbNC02XXsxfVswLTldezF9WzAtOV17Mn1bMC05XXsxfVswLTldezR9WzAtOV17MX0pJC9cbiAgICAgICAgICAgICAgICApKVxuICAgICAgICApO1xuICAgIH0sXG4gICAgXCLguKPguLnguJvguYHguJrguJrguKPguKvguLHguKrguJnguLHguIHguKjguLbguIHguKnguLLguYTguKHguYjguJbguLnguIHguJXguYnguK3guIdcIlxuKTtcblxuXG4vLyBHZXQgUmVnaXN0cmF0aW9uIENvZGUgVmFsaWRhdGUuXG4kKGNvbmRpdGlvbikudmFsaWRhdGUoe1xuICAgIHJ1bGVzOiB7XG4gICAgICAgIHN0dWRlbnRfY29kZToge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICBudW1iZXI6IHRydWUsXG4gICAgICAgICAgICBtaW5sZW5ndGg6IDEwLFxuICAgICAgICAgICAgbWF4bGVuZ3RoOiAxMCxcbiAgICAgICAgICAgIHN0dWRlbnRDb2RlOiB0cnVlLFxuICAgICAgICAgICAgcmVtb3RlOiB7XG4gICAgICAgICAgICAgICAgdXJsOiBiYXNlVXJsICsgXCIvdmVyaWZ5L2lzX3ZhbGlkXCIsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJwb3N0XCIsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBfdG9rZW46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkKCdpbnB1dFtuYW1lPVwiX3Rva2VuXCJdJykudmFsKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBzdHVkZW50X2VtYWlsOiB7XG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIGVtYWlsOiB0cnVlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGhpZ2hsaWdodDogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgalF1ZXJ5KGVsZW1lbnQpXG4gICAgICAgICAgICAuY2xvc2VzdChcIi5mb3JtLWNvbnRyb2xcIilcbiAgICAgICAgICAgIC5hZGRDbGFzcyhcImlzLWludmFsaWRcIik7XG4gICAgfSxcbiAgICB1bmhpZ2hsaWdodDogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgalF1ZXJ5KGVsZW1lbnQpXG4gICAgICAgICAgICAuY2xvc2VzdChcIi5mb3JtLWNvbnRyb2xcIilcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImlzLWludmFsaWRcIik7XG4gICAgICAgIGpRdWVyeShlbGVtZW50KVxuICAgICAgICAgICAgLmNsb3Nlc3QoXCIuZm9ybS1jb250cm9sXCIpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoXCJpcy12YWxpZFwiKTtcbiAgICB9LFxuICAgIG1lc3NhZ2VzOiB7XG4gICAgICAgIHN0dWRlbnRfY29kZToge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IFwi4LiB4Lij4Li44LiT4Liy4Lij4Liw4Lia4Lia4Lij4Lir4Lix4Liq4LiZ4Lix4LiB4Lio4Li24LiB4Lip4LiyXCIsXG4gICAgICAgICAgICBudW1iZXI6IFwi4Lij4Li54Lib4LmB4Lia4Lia4Lij4Lir4Lix4Liq4LiZ4Lix4LiB4Lio4Li24LiB4Lip4Liy4LmE4Lih4LmI4LiW4Li54LiB4LiV4LmJ4Lit4LiHXCIsXG4gICAgICAgICAgICBtaW5sZW5ndGg6IFwi4Lij4Li54Lib4LmB4Lia4Lia4Lij4Lir4Lix4Liq4LiZ4Lix4LiB4Lio4Li24LiB4Lip4Liy4LmE4Lih4LmI4LiW4Li54LiB4LiV4LmJ4Lit4LiHXCIsXG4gICAgICAgICAgICBtYXhsZW5ndGg6IFwi4Lij4Li54Lib4LmB4Lia4Lia4Lij4Lir4Lix4Liq4LiZ4Lix4LiB4Lio4Li24LiB4Lip4Liy4LmE4Lih4LmI4LiW4Li54LiB4LiV4LmJ4Lit4LiHXCIsXG4gICAgICAgICAgICByZW1vdGU6IFwi4Lij4Lir4Lix4Liq4LiZ4Lix4LiB4Lio4Li24LiB4Lip4Liy4LiZ4Li14LmJ4LmE4LiU4LmJ4Lil4LiH4LiX4Liw4LmA4Lia4Li14Lii4LiZ4LmE4Lin4LmJ4LmB4Lil4LmJ4LinXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHN0dWRlbnRfZW1haWw6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiBcIuC4geC4o+C4uOC4k+C4suC4o+C4sOC4muC4uOC4l+C4teC5iOC4reC4ouC4ueC5iOC4reC4teC5gOC4oeC4peC5jFwiLFxuICAgICAgICAgICAgZW1haWw6IFwi4Lij4Li54Lib4LmB4Lia4Lia4Lit4Li14LmA4Lih4Lil4LmM4LmE4Lih4LmI4LiW4Li54LiB4LiV4LmJ4Lit4LiHXCJcbiAgICAgICAgfVxuICAgIH0sXG5cbn0pO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/validator.js\n");

/***/ }),

/***/ 1:
/*!*****************************************!*\
  !*** multi ./resources/js/validator.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Studio3/Desktop/Origin/resources/js/validator.js */"./resources/js/validator.js");


/***/ })

/******/ });