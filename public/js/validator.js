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

eval("// get base url\nvar getUrl = window.location,\n    baseUrl = getUrl.protocol + \"//\" + getUrl.host + \"/\" + getUrl.pathname.split(\"/\")[1];\nconsole.log(\"this is a \" + baseUrl + \"/verify_email\");\nconsole.log(\"http://\" + location.host + \"/auth/verify\"); // Set jQuery Validation default.\n\njQuery.validator.setDefaults({\n  onfocusout: function onfocusout(e) {\n    this.element(e);\n  },\n  onkeyup: false,\n  highlight: function highlight(element) {\n    jQuery(element).closest(\".form-control\").addClass(\"is-invalid\");\n  },\n  unhighlight: function unhighlight(element) {\n    jQuery(element).closest(\".form-control\").removeClass(\"is-invalid\");\n    jQuery(element).closest(\".form-control\").addClass(\"is-valid\");\n  },\n  errorElement: \"div\",\n  errorClass: \"invalid-feedback\",\n  errorPlacement: function errorPlacement(error, element) {\n    if (element.parent(\".input-group-prepend\").length) {\n      $(element).siblings(\".invalid-feedback\").append(error); //error.insertAfter(element.parent());\n    } else {\n      error.insertAfter(element);\n    }\n  }\n}); // Validate for Registration form.\n\nvar register = document.getElementById(\"registration_form\"),\n    login = document.getElementById(\"login_form\"),\n    condition = document.getElementById(\"condition_form\"),\n    registration = document.getElementById(\"verify_form\"); // Registration Validate.\n\n$(register).validate({\n  rules: {\n    registration_code: \"required\",\n    student_code: \"required\",\n    student_email: \"required\"\n  }\n}); // Verify Registration Code.\n\n$(registration).validate({\n  rules: {\n    registration_code: {\n      required: true,\n      remote: {\n        url: baseUrl + \"/verify\",\n        type: \"post\",\n        data: {\n          _token: function _token() {\n            return $('input[name=\"_token\"]').val();\n          }\n        }\n      }\n    }\n  },\n  messages: {\n    registration_code: {\n      remote: \"รหัสลงทะเบียนไม่ถูกต้อง\"\n    }\n  },\n  highlight: function highlight(element) {\n    jQuery(element).closest(\".form-control\").addClass(\"is-invalid\");\n  },\n  unhighlight: function unhighlight(element) {\n    jQuery(element).closest(\".form-control\").removeClass(\"is-invalid\");\n    jQuery(element).closest(\".form-control\").addClass(\"is-valid\");\n  }\n}); // Validate Login.\n\n$(login).validate({\n  rules: {\n    email: \"required\",\n    password: \"required\"\n  }\n});\n$.validator.addMethod(\"studentCode\", function (student_code, element) {\n  student_code = student_code.replace(/\\s+/g, \"\");\n  return this.optional(element) || student_code.length > 9 && student_code.match(/^([4-6]{1}[0-9]{1}[0-9]{2}[0-9]{1}[0-9]{4}[0-9]{1})$/);\n}, \"รูปแบบรหัสนักศึกษาไม่ถูกต้อง\"); // Get Registration Code Validate.\n\n$(condition).validate({\n  rules: {\n    student_code: {\n      required: true,\n      number: true,\n      minlength: 10,\n      maxlength: 10,\n      studentCode: true,\n      remote: {\n        url: baseUrl + \"/verify/is_valid\",\n        type: \"post\",\n        data: {\n          _token: function _token() {\n            return $('input[name=\"_token\"]').val();\n          }\n        }\n      }\n    },\n    student_email: {\n      required: true,\n      email: true\n    }\n  },\n  highlight: function highlight(element) {\n    jQuery(element).closest(\".form-control\").addClass(\"is-invalid\");\n  },\n  unhighlight: function unhighlight(element) {\n    jQuery(element).closest(\".form-control\").removeClass(\"is-invalid\");\n    jQuery(element).closest(\".form-control\").addClass(\"is-valid\");\n  },\n  messages: {\n    student_code: {\n      required: \"กรุณาระบบรหัสนักศึกษา\",\n      number: \"รูปแบบรหัสนักศึกษาไม่ถูกต้อง\",\n      minlength: \"รูปแบบรหัสนักศึกษาไม่ถูกต้อง\",\n      maxlength: \"รูปแบบรหัสนักศึกษาไม่ถูกต้อง\",\n      remote: \"รหัสนักศึกษานี้ได้ลงทะเบียนไว้แล้ว\"\n    },\n    student_email: {\n      required: \"กรุณาระบุที่อยู่อีเมล์\",\n      email: \"รูปแบบอีเมล์ไม่ถูกต้อง\"\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmFsaWRhdG9yLmpzPzUwNTMiXSwibmFtZXMiOlsiZ2V0VXJsIiwid2luZG93IiwibG9jYXRpb24iLCJiYXNlVXJsIiwicHJvdG9jb2wiLCJob3N0IiwicGF0aG5hbWUiLCJzcGxpdCIsImNvbnNvbGUiLCJsb2ciLCJqUXVlcnkiLCJ2YWxpZGF0b3IiLCJzZXREZWZhdWx0cyIsIm9uZm9jdXNvdXQiLCJlIiwiZWxlbWVudCIsIm9ua2V5dXAiLCJoaWdobGlnaHQiLCJjbG9zZXN0IiwiYWRkQ2xhc3MiLCJ1bmhpZ2hsaWdodCIsInJlbW92ZUNsYXNzIiwiZXJyb3JFbGVtZW50IiwiZXJyb3JDbGFzcyIsImVycm9yUGxhY2VtZW50IiwiZXJyb3IiLCJwYXJlbnQiLCJsZW5ndGgiLCIkIiwic2libGluZ3MiLCJhcHBlbmQiLCJpbnNlcnRBZnRlciIsInJlZ2lzdGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImxvZ2luIiwiY29uZGl0aW9uIiwicmVnaXN0cmF0aW9uIiwidmFsaWRhdGUiLCJydWxlcyIsInJlZ2lzdHJhdGlvbl9jb2RlIiwic3R1ZGVudF9jb2RlIiwic3R1ZGVudF9lbWFpbCIsInJlcXVpcmVkIiwicmVtb3RlIiwidXJsIiwidHlwZSIsImRhdGEiLCJfdG9rZW4iLCJ2YWwiLCJtZXNzYWdlcyIsImVtYWlsIiwicGFzc3dvcmQiLCJhZGRNZXRob2QiLCJyZXBsYWNlIiwib3B0aW9uYWwiLCJtYXRjaCIsIm51bWJlciIsIm1pbmxlbmd0aCIsIm1heGxlbmd0aCIsInN0dWRlbnRDb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUlBLE1BQU0sR0FBR0MsTUFBTSxDQUFDQyxRQUFwQjtBQUFBLElBQ0lDLE9BQU8sR0FDSEgsTUFBTSxDQUFDSSxRQUFQLEdBQ0EsSUFEQSxHQUVBSixNQUFNLENBQUNLLElBRlAsR0FHQSxHQUhBLEdBSUFMLE1BQU0sQ0FBQ00sUUFBUCxDQUFnQkMsS0FB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c0JBQUQsQ0FBRCxDQUEwQnFCLEdBQTFCLEVBQVA7QUFDSDtBQUhDO0FBSEY7QUFORSxLQURYO0FBaUJIUCxpQkFBYSxFQUFFO0FBQ1hDLGNBQVEsRUFBRSxJQURDO0FBRVhRLFdBQUssRUFBRTtBQUZJO0FBakJaLEdBRFc7QUF1QmxCbEMsV0FBUyxFQUFFLG1CQUFVRixPQUFWLEVBQW1CO0FBQzFCTCxVQUFNLENBQUNLLE9BQUQsQ0FBTixDQUNLRyxPQURMLENBQ2EsZUFEYixFQUVLQyxRQUZMLENBRWMsWUFGZDtBQUdILEdBM0JpQjtBQTRCbEJDLGFBQVcsRUFBRSxxQkFBVUwsT0FBVixFQUFtQjtBQUM1QkwsVUFBTSxDQUFDSyxPQUFELENBQU4sQ0FDS0csT0FETCxDQUNhLGVBRGIsRUFFS0csV0FGTCxDQUVpQixZQUZqQjtBQUdBWCxVQUFNLENBQUNLLE9BQUQsQ0FBTixDQUNLRyxPQURMLENBQ2EsZUFEYixFQUVLQyxRQUZMLENBRWMsVUFGZDtBQUdILEdBbkNpQjtBQW9DbEIrQixVQUFRLEVBQUU7QUFDTlQsZ0JBQVksRUFBRTtBQUNWRSxjQUFRLEVBQUUsdUJBREE7QUFFVmMsWUFBTSxFQUFFLDhCQUZFO0FBR1ZDLGVBQVMsRUFBRSw4QkFIRDtBQUlWQyxlQUFTLEVBQUUsOEJBSkQ7QUFLVmYsWUFBTSxFQUFFO0FBTEUsS0FEUjtBQVFORixpQkFBYSxFQUFFO0FBQ1hDLGNBQVEsRUFBRSx3QkFEQztBQUVYUSxXQUFLLEVBQUU7QUFGSTtBQVJUO0FBcENRLENBQXRCIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL3ZhbGlkYXRvci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdldCBiYXNlIHVybFxyXG5sZXQgZ2V0VXJsID0gd2luZG93LmxvY2F0aW9uLFxyXG4gICAgYmFzZVVybCA9XHJcbiAgICAgICAgZ2V0VXJsLnByb3RvY29sICtcclxuICAgICAgICBcIi8vXCIgK1xyXG4gICAgICAgIGdldFVybC5ob3N0ICtcclxuICAgICAgICBcIi9cIiArXHJcbiAgICAgICAgZ2V0VXJsLnBhdGhuYW1lLnNwbGl0KFwiL1wiKVsxXTtcclxuY29uc29sZS5sb2coXCJ0aGlzIGlzIGEgXCIgKyBiYXNlVXJsICsgXCIvdmVyaWZ5X2VtYWlsXCIpO1xyXG5jb25zb2xlLmxvZyhcImh0dHA6Ly9cIiArIGxvY2F0aW9uLmhvc3QgKyBcIi9hdXRoL3ZlcmlmeVwiKTtcclxuXHJcblxyXG4vLyBTZXQgalF1ZXJ5IFZhbGlkYXRpb24gZGVmYXVsdC5cclxualF1ZXJ5LnZhbGlkYXRvci5zZXREZWZhdWx0cyh7XHJcbiAgICBvbmZvY3Vzb3V0OiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudChlKTtcclxuICAgIH0sXHJcbiAgICBvbmtleXVwOiBmYWxzZSxcclxuXHJcbiAgICBoaWdobGlnaHQ6IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgalF1ZXJ5KGVsZW1lbnQpXHJcbiAgICAgICAgICAgIC5jbG9zZXN0KFwiLmZvcm0tY29udHJvbFwiKVxyXG4gICAgICAgICAgICAuYWRkQ2xhc3MoXCJpcy1pbnZhbGlkXCIpO1xyXG4gICAgfSxcclxuICAgIHVuaGlnaGxpZ2h0OiBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgIGpRdWVyeShlbGVtZW50KVxyXG4gICAgICAgICAgICAuY2xvc2VzdChcIi5mb3JtLWNvbnRyb2xcIilcclxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiaXMtaW52YWxpZFwiKTtcclxuICAgICAgICBqUXVlcnkoZWxlbWVudClcclxuICAgICAgICAgICAgLmNsb3Nlc3QoXCIuZm9ybS1jb250cm9sXCIpXHJcbiAgICAgICAgICAgIC5hZGRDbGFzcyhcImlzLXZhbGlkXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBlcnJvckVsZW1lbnQ6IFwiZGl2XCIsXHJcbiAgICBlcnJvckNsYXNzOiBcImludmFsaWQtZmVlZGJhY2tcIixcclxuICAgIGVycm9yUGxhY2VtZW50OiBmdW5jdGlvbiAoZXJyb3IsIGVsZW1lbnQpIHtcclxuICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnQoXCIuaW5wdXQtZ3JvdXAtcHJlcGVuZFwiKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgJChlbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgLnNpYmxpbmdzKFwiLmludmFsaWQtZmVlZGJhY2tcIilcclxuICAgICAgICAgICAgICAgIC5hcHBlbmQoZXJyb3IpO1xyXG4gICAgICAgICAgICAvL2Vycm9yLmluc2VydEFmdGVyKGVsZW1lbnQucGFyZW50KCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVycm9yLmluc2VydEFmdGVyKGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5cclxuLy8gVmFsaWRhdGUgZm9yIFJlZ2lzdHJhdGlvbiBmb3JtLlxyXG5sZXQgcmVnaXN0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlZ2lzdHJhdGlvbl9mb3JtXCIpLFxyXG4gICAgbG9naW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luX2Zvcm1cIiksXHJcbiAgICBjb25kaXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbmRpdGlvbl9mb3JtXCIpLFxyXG4gICAgcmVnaXN0cmF0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2ZXJpZnlfZm9ybVwiKTtcclxuXHJcblxyXG4vLyBSZWdpc3RyYXRpb24gVmFsaWRhdGUuXHJcbiQocmVnaXN0ZXIpLnZhbGlkYXRlKHtcclxuICAgIHJ1bGVzOiB7XHJcbiAgICAgICAgcmVnaXN0cmF0aW9uX2NvZGU6IFwicmVxdWlyZWRcIixcclxuICAgICAgICBzdHVkZW50X2NvZGU6IFwicmVxdWlyZWRcIixcclxuICAgICAgICBzdHVkZW50X2VtYWlsOiBcInJlcXVpcmVkXCJcclxuICAgIH1cclxufSk7XHJcblxyXG5cclxuLy8gVmVyaWZ5IFJlZ2lzdHJhdGlvbiBDb2RlLlxyXG4kKHJlZ2lzdHJhdGlvbikudmFsaWRhdGUoe1xyXG4gICAgcnVsZXM6IHtcclxuICAgICAgICByZWdpc3RyYXRpb25fY29kZToge1xyXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgcmVtb3RlOiB7XHJcbiAgICAgICAgICAgICAgICB1cmw6IGJhc2VVcmwgKyBcIi92ZXJpZnlcIixcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIF90b2tlbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCgnaW5wdXRbbmFtZT1cIl90b2tlblwiXScpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXNzYWdlczoge1xyXG4gICAgICAgIHJlZ2lzdHJhdGlvbl9jb2RlOiB7XHJcbiAgICAgICAgICAgIHJlbW90ZTogXCLguKPguKvguLHguKrguKXguIfguJfguLDguYDguJrguLXguKLguJnguYTguKHguYjguJbguLnguIHguJXguYnguK3guIdcIlxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBoaWdobGlnaHQ6IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgalF1ZXJ5KGVsZW1lbnQpXHJcbiAgICAgICAgICAgIC5jbG9zZXN0KFwiLmZvcm0tY29udHJvbFwiKVxyXG4gICAgICAgICAgICAuYWRkQ2xhc3MoXCJpcy1pbnZhbGlkXCIpO1xyXG4gICAgfSxcclxuICAgIHVuaGlnaGxpZ2h0OiBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgIGpRdWVyeShlbGVtZW50KVxyXG4gICAgICAgICAgICAuY2xvc2VzdChcIi5mb3JtLWNvbnRyb2xcIilcclxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiaXMtaW52YWxpZFwiKTtcclxuICAgICAgICBqUXVlcnkoZWxlbWVudClcclxuICAgICAgICAgICAgLmNsb3Nlc3QoXCIuZm9ybS1jb250cm9sXCIpXHJcbiAgICAgICAgICAgIC5hZGRDbGFzcyhcImlzLXZhbGlkXCIpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG4vLyBWYWxpZGF0ZSBMb2dpbi5cclxuJChsb2dpbikudmFsaWRhdGUoe1xyXG4gICAgcnVsZXM6IHtcclxuICAgICAgICBlbWFpbDogXCJyZXF1aXJlZFwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcInJlcXVpcmVkXCJcclxuICAgIH1cclxufSk7XHJcblxyXG5cclxuJC52YWxpZGF0b3IuYWRkTWV0aG9kKFxyXG4gICAgXCJzdHVkZW50Q29kZVwiLFxyXG4gICAgZnVuY3Rpb24gKHN0dWRlbnRfY29kZSwgZWxlbWVudCkge1xyXG4gICAgICAgIHN0dWRlbnRfY29kZSA9IHN0dWRlbnRfY29kZS5yZXBsYWNlKC9cXHMrL2csIFwiXCIpO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9uYWwoZWxlbWVudCkgfHxcclxuICAgICAgICAgICAgKHN0dWRlbnRfY29kZS5sZW5ndGggPiA5ICYmXHJcbiAgICAgICAgICAgICAgICBzdHVkZW50X2NvZGUubWF0Y2goXHJcbiAgICAgICAgICAgICAgICAgICAgL14oWzQtNl17MX1bMC05XXsxfVswLTldezJ9WzAtOV17MX1bMC05XXs0fVswLTldezF9KSQvXHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICk7XHJcbiAgICB9LFxyXG4gICAgXCLguKPguLnguJvguYHguJrguJrguKPguKvguLHguKrguJnguLHguIHguKjguLbguIHguKnguLLguYTguKHguYjguJbguLnguIHguJXguYnguK3guIdcIlxyXG4pO1xyXG5cclxuXHJcbi8vIEdldCBSZWdpc3RyYXRpb24gQ29kZSBWYWxpZGF0ZS5cclxuJChjb25kaXRpb24pLnZhbGlkYXRlKHtcclxuICAgIHJ1bGVzOiB7XHJcbiAgICAgICAgc3R1ZGVudF9jb2RlOiB7XHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICBudW1iZXI6IHRydWUsXHJcbiAgICAgICAgICAgIG1pbmxlbmd0aDogMTAsXHJcbiAgICAgICAgICAgIG1heGxlbmd0aDogMTAsXHJcbiAgICAgICAgICAgIHN0dWRlbnRDb2RlOiB0cnVlLFxyXG4gICAgICAgICAgICByZW1vdGU6IHtcclxuICAgICAgICAgICAgICAgIHVybDogYmFzZVVybCArIFwiL3ZlcmlmeS9pc192YWxpZFwiLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJwb3N0XCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3Rva2VuOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkKCdpbnB1dFtuYW1lPVwiX3Rva2VuXCJdJykudmFsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3R1ZGVudF9lbWFpbDoge1xyXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgZW1haWw6IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaGlnaGxpZ2h0OiBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgIGpRdWVyeShlbGVtZW50KVxyXG4gICAgICAgICAgICAuY2xvc2VzdChcIi5mb3JtLWNvbnRyb2xcIilcclxuICAgICAgICAgICAgLmFkZENsYXNzKFwiaXMtaW52YWxpZFwiKTtcclxuICAgIH0sXHJcbiAgICB1bmhpZ2hsaWdodDogZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICBqUXVlcnkoZWxlbWVudClcclxuICAgICAgICAgICAgLmNsb3Nlc3QoXCIuZm9ybS1jb250cm9sXCIpXHJcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImlzLWludmFsaWRcIik7XHJcbiAgICAgICAgalF1ZXJ5KGVsZW1lbnQpXHJcbiAgICAgICAgICAgIC5jbG9zZXN0KFwiLmZvcm0tY29udHJvbFwiKVxyXG4gICAgICAgICAgICAuYWRkQ2xhc3MoXCJpcy12YWxpZFwiKTtcclxuICAgIH0sXHJcbiAgICBtZXNzYWdlczoge1xyXG4gICAgICAgIHN0dWRlbnRfY29kZToge1xyXG4gICAgICAgICAgICByZXF1aXJlZDogXCLguIHguKPguLjguJPguLLguKPguLDguJrguJrguKPguKvguLHguKrguJnguLHguIHguKjguLbguIHguKnguLJcIixcclxuICAgICAgICAgICAgbnVtYmVyOiBcIuC4o+C4ueC4m+C5geC4muC4muC4o+C4q+C4seC4quC4meC4seC4geC4qOC4tuC4geC4qeC4suC5hOC4oeC5iOC4luC4ueC4geC4leC5ieC4reC4h1wiLFxyXG4gICAgICAgICAgICBtaW5sZW5ndGg6IFwi4Lij4Li54Lib4LmB4Lia4Lia4Lij4Lir4Lix4Liq4LiZ4Lix4LiB4Lio4Li24LiB4Lip4Liy4LmE4Lih4LmI4LiW4Li54LiB4LiV4LmJ4Lit4LiHXCIsXHJcbiAgICAgICAgICAgIG1heGxlbmd0aDogXCLguKPguLnguJvguYHguJrguJrguKPguKvguLHguKrguJnguLHguIHguKjguLbguIHguKnguLLguYTguKHguYjguJbguLnguIHguJXguYnguK3guIdcIixcclxuICAgICAgICAgICAgcmVtb3RlOiBcIuC4o+C4q+C4seC4quC4meC4seC4geC4qOC4tuC4geC4qeC4suC4meC4teC5ieC5hOC4lOC5ieC4peC4h+C4l+C4sOC5gOC4muC4teC4ouC4meC5hOC4p+C5ieC5geC4peC5ieC4p1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3R1ZGVudF9lbWFpbDoge1xyXG4gICAgICAgICAgICByZXF1aXJlZDogXCLguIHguKPguLjguJPguLLguKPguLDguJrguLjguJfguLXguYjguK3guKLguLnguYjguK3guLXguYDguKHguKXguYxcIixcclxuICAgICAgICAgICAgZW1haWw6IFwi4Lij4Li54Lib4LmB4Lia4Lia4Lit4Li14LmA4Lih4Lil4LmM4LmE4Lih4LmI4LiW4Li54LiB4LiV4LmJ4Lit4LiHXCJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxufSk7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/validator.js\n");

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