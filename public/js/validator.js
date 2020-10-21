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

eval("// get base url\nvar getUrl = window.location,\n    baseUrl = getUrl.protocol + \"//\" + getUrl.host + \"/\" + getUrl.pathname.split(\"/\")[1];\nconsole.log(\"this is a \" + baseUrl + \"/verify_email\");\nconsole.log(\"http://\" + location.host + \"/auth/verify\"); // Set jQuery Validation default.\n\njQuery.validator.setDefaults({\n  onfocusout: function onfocusout(e) {\n    this.element(e);\n  },\n  onkeyup: false,\n  highlight: function highlight(element) {\n    jQuery(element).closest(\".form-control\").addClass(\"is-invalid\");\n  },\n  unhighlight: function unhighlight(element) {\n    jQuery(element).closest(\".form-control\").removeClass(\"is-invalid\");\n    jQuery(element).closest(\".form-control\").addClass(\"is-valid\");\n  },\n  errorElement: \"div\",\n  errorClass: \"invalid-feedback\",\n  errorPlacement: function errorPlacement(error, element) {\n    if (element.parent(\".input-group-prepend\").length) {\n      $(element).siblings(\".invalid-feedback\").append(error); //error.insertAfter(element.parent());\n    } else {\n      error.insertAfter(element);\n    }\n  }\n}); // Validate for Registration form.\n\nvar register = document.getElementById(\"registration_form\"),\n    login = document.getElementById(\"login_form\"),\n    condition = document.getElementById(\"condition_form\"),\n    registration = document.getElementById(\"verify_form\"); // Registration Validate.\n\n$(register).validate({\n  rules: {\n    registration_code: \"required\",\n    student_code: \"required\",\n    student_email: \"required\"\n  }\n}); // Verify Registration Code.\n\n$(registration).validate({\n  rules: {\n    registration_code: {\n      required: true,\n      remote: {\n        url: baseUrl + \"/verify\",\n        type: \"post\",\n        data: {\n          _token: function _token() {\n            return $('input[name=\"_token\"]').val();\n          }\n        }\n      }\n    }\n  },\n  messages: {\n    registration_code: {\n      remote: \"รหัสลงทะเบียนไม่ถูกต้อง\"\n    }\n  },\n  highlight: function highlight(element) {\n    jQuery(element).closest(\".form-control\").addClass(\"is-invalid\");\n  },\n  unhighlight: function unhighlight(element) {\n    jQuery(element).closest(\".form-control\").removeClass(\"is-invalid\");\n    jQuery(element).closest(\".form-control\").addClass(\"is-valid\");\n  }\n}); // Validate Login.\n\n$(login).validate({\n  rules: {\n    email: \"required\",\n    password: \"required\"\n  }\n});\n$.validator.addMethod(\"studentCode\", function (student_code, element) {\n  student_code = student_code.replace(/\\s+/g, \"\");\n  return this.optional(element) || student_code.length > 9 && student_code.match(/^([4-6]{1}[0-9]{1}[0-9]{2}[0-9]{1}[0-9]{4}[0-9]{1})$/);\n}, \"รูปแบบรหัสนักศึกษาไม่ถูกต้อง\"); // Get Registration Code Validate.\n\n$(condition).validate({\n  rules: {\n    student_code: {\n      required: true,\n      number: true,\n      minlength: 10,\n      maxlength: 10,\n      studentCode: true,\n      remote: {\n        url: baseUrl + \"/verify/is_valid\",\n        type: \"post\",\n        data: {\n          _token: function _token() {\n            return $('input[name=\"_token\"]').val();\n          }\n        }\n      }\n    },\n    student_email: {\n      required: true,\n      email: true\n    }\n  },\n  highlight: function highlight(element) {\n    jQuery(element).closest(\".form-control\").addClass(\"is-invalid\");\n  },\n  unhighlight: function unhighlight(element) {\n    jQuery(element).closest(\".form-control\").removeClass(\"is-invalid\");\n    jQuery(element).closest(\".form-control\").addClass(\"is-valid\");\n  },\n  messages: {\n    student_code: {\n      required: \"กรุณาระบบรหัสนักศึกษา\",\n      number: \"รูปแบบรหัสนักศึกษาไม่ถูกต้อง\",\n      minlength: \"รูปแบบรหัสนักศึกษาไม่ถูกต้อง\",\n      maxlength: \"รูปแบบรหัสนักศึกษาไม่ถูกต้อง\",\n      remote: \"รหัสนักศึกษานี้ได้ลงทะเบียนไว้แล้ว\"\n    },\n    student_email: {\n      required: \"กรุณาระบุที่อยู่อีเมล์\",\n      email: \"รูปแบบอีเมล์ไม่ถูกต้อง\"\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmFsaWRhdG9yLmpzPzUwNTMiXSwibmFtZXMiOlsiZ2V0VXJsIiwid2luZG93IiwibG9jYXRpb24iLCJiYXNlVXJsIiwicHJvdG9jb2wiLCJob3N0IiwicGF0aG5hbWUiLCJzcGxpdCIsImNvbnNvbGUiLCJsb2ciLCJqUXVlcnkiLCJ2YWxpZGF0b3IiLCJzZXREZWZhdWx0cyIsIm9uZm9jdXNvdXQiLCJlIiwiZWxlbWVudCIsIm9ua2V5dXAiLCJoaWdobGlnaHQiLCJjbG9zZXN0IiwiYWRkQ2xhc3MiLCJ1bmhpZ2hsaWdodCIsInJlbW92ZUNsYXNzIiwiZXJyb3JFbGVtZW50IiwiZXJyb3JDbGFzcyIsImVycm9yUGxhY2VtZW50IiwiZXJyb3IiLCJwYXJlbnQiLCJsZW5ndGgiLCIkIiwic2libGluZ3MiLCJhcHBlbmQiLCJpbnNlcnRBZnRlciIsInJlZ2lzdGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImxvZ2luIiwiY29uZGl0aW9uIiwicmVnaXN0cmF0aW9uIiwidmFsaWRhdGUiLCJydWxlcyIsInJlZ2lzdHJhdGlvbl9jb2RlIiwic3R1ZGVudF9jb2RlIiwic3R1ZGVudF9lbWFpbCIsInJlcXVpcmVkIiwicmVtb3RlIiwidXJsIiwidHlwZSIsImRhdGEiLCJfdG9rZW4iLCJ2YWwiLCJtZXNzYWdlcyIsImVtYWlsIiwicGFzc3dvcmQiLCJhZGRNZXRob2QiLCJyZXBsYWNlIiwib3B0aW9uYWwiLCJtYXRjaCIsIm51bWJlciIsIm1pbmxlbmd0aCIsIm1heGxlbmd0aCIsInN0dWRlbnRDb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUlBLE1BQU0sR0FBR0MsTUFBTSxDQUFDQyxRQUFwQjtBQUFBLElBQ0lDLE9BQU8sR0FDSEgsTUFBTSxDQUFDSSxRQUFQLEdBQ0EsSUFEQSxHQUVBSixNQUFNLENBQUNLLElBRlAsR0FHQSxHQUhBLEdBSUFMLE1BQU0sQ0FBQ00sUUFBUCxDQUFnQkMsS0FB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QUFELENBQUQsQ0FBMEJxQixHQUExQixFQUFQO0FBQ0g7QUFIQztBQUhGO0FBTkUsS0FEWDtBQWlCSFAsaUJBQWEsRUFBRTtBQUNYQyxjQUFRLEVBQUUsSUFEQztBQUVYUSxXQUFLLEVBQUU7QUFGSTtBQWpCWixHQURXO0FBdUJsQmxDLFdBQVMsRUFBRSxtQkFBU0YsT0FBVCxFQUFrQjtBQUN6QkwsVUFBTSxDQUFDSyxPQUFELENBQU4sQ0FDS0csT0FETCxDQUNhLGVBRGIsRUFFS0MsUUFGTCxDQUVjLFlBRmQ7QUFHSCxHQTNCaUI7QUE0QmxCQyxhQUFXLEVBQUUscUJBQVNMLE9BQVQsRUFBa0I7QUFDM0JMLFVBQU0sQ0FBQ0ssT0FBRCxDQUFOLENBQ0tHLE9BREwsQ0FDYSxlQURiLEVBRUtHLFdBRkwsQ0FFaUIsWUFGakI7QUFHQVgsVUFBTSxDQUFDSyxPQUFELENBQU4sQ0FDS0csT0FETCxDQUNhLGVBRGIsRUFFS0MsUUFGTCxDQUVjLFVBRmQ7QUFHSCxHQW5DaUI7QUFvQ2xCK0IsVUFBUSxFQUFFO0FBQ05ULGdCQUFZLEVBQUU7QUFDVkUsY0FBUSxFQUFFLHVCQURBO0FBRVZjLFlBQU0sRUFBRSw4QkFGRTtBQUdWQyxlQUFTLEVBQUUsOEJBSEQ7QUFJVkMsZUFBUyxFQUFFLDhCQUpEO0FBS1ZmLFlBQU0sRUFBRTtBQUxFLEtBRFI7QUFRTkYsaUJBQWEsRUFBRTtBQUNYQyxjQUFRLEVBQUUsd0JBREM7QUFFWFEsV0FBSyxFQUFFO0FBRkk7QUFSVDtBQXBDUSxDQUF0QiIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy92YWxpZGF0b3IuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZXQgYmFzZSB1cmxcbmxldCBnZXRVcmwgPSB3aW5kb3cubG9jYXRpb24sXG4gICAgYmFzZVVybCA9XG4gICAgICAgIGdldFVybC5wcm90b2NvbCArXG4gICAgICAgIFwiLy9cIiArXG4gICAgICAgIGdldFVybC5ob3N0ICtcbiAgICAgICAgXCIvXCIgK1xuICAgICAgICBnZXRVcmwucGF0aG5hbWUuc3BsaXQoXCIvXCIpWzFdO1xuY29uc29sZS5sb2coXCJ0aGlzIGlzIGEgXCIgKyBiYXNlVXJsICsgXCIvdmVyaWZ5X2VtYWlsXCIpO1xuY29uc29sZS5sb2coXCJodHRwOi8vXCIgKyBsb2NhdGlvbi5ob3N0ICsgXCIvYXV0aC92ZXJpZnlcIik7XG5cblxuLy8gU2V0IGpRdWVyeSBWYWxpZGF0aW9uIGRlZmF1bHQuXG5qUXVlcnkudmFsaWRhdG9yLnNldERlZmF1bHRzKHtcbiAgICBvbmZvY3Vzb3V0OiBmdW5jdGlvbihlKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudChlKTtcbiAgICB9LFxuICAgIG9ua2V5dXA6IGZhbHNlLFxuXG4gICAgaGlnaGxpZ2h0OiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGpRdWVyeShlbGVtZW50KVxuICAgICAgICAgICAgLmNsb3Nlc3QoXCIuZm9ybS1jb250cm9sXCIpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoXCJpcy1pbnZhbGlkXCIpO1xuICAgIH0sXG4gICAgdW5oaWdobGlnaHQ6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgalF1ZXJ5KGVsZW1lbnQpXG4gICAgICAgICAgICAuY2xvc2VzdChcIi5mb3JtLWNvbnRyb2xcIilcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImlzLWludmFsaWRcIik7XG4gICAgICAgIGpRdWVyeShlbGVtZW50KVxuICAgICAgICAgICAgLmNsb3Nlc3QoXCIuZm9ybS1jb250cm9sXCIpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoXCJpcy12YWxpZFwiKTtcbiAgICB9LFxuXG4gICAgZXJyb3JFbGVtZW50OiBcImRpdlwiLFxuICAgIGVycm9yQ2xhc3M6IFwiaW52YWxpZC1mZWVkYmFja1wiLFxuICAgIGVycm9yUGxhY2VtZW50OiBmdW5jdGlvbihlcnJvciwgZWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnQoXCIuaW5wdXQtZ3JvdXAtcHJlcGVuZFwiKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICQoZWxlbWVudClcbiAgICAgICAgICAgICAgICAuc2libGluZ3MoXCIuaW52YWxpZC1mZWVkYmFja1wiKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoZXJyb3IpO1xuICAgICAgICAgICAgLy9lcnJvci5pbnNlcnRBZnRlcihlbGVtZW50LnBhcmVudCgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yLmluc2VydEFmdGVyKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBWYWxpZGF0ZSBmb3IgUmVnaXN0cmF0aW9uIGZvcm0uXG5sZXQgcmVnaXN0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlZ2lzdHJhdGlvbl9mb3JtXCIpLFxuICAgIGxvZ2luID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpbl9mb3JtXCIpLFxuICAgIGNvbmRpdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29uZGl0aW9uX2Zvcm1cIiksXG4gICAgcmVnaXN0cmF0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2ZXJpZnlfZm9ybVwiKTtcblxuXG5cbi8vIFJlZ2lzdHJhdGlvbiBWYWxpZGF0ZS5cbiQocmVnaXN0ZXIpLnZhbGlkYXRlKHtcbiAgICBydWxlczoge1xuICAgICAgICByZWdpc3RyYXRpb25fY29kZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICBzdHVkZW50X2NvZGU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgc3R1ZGVudF9lbWFpbDogXCJyZXF1aXJlZFwiXG4gICAgfVxufSk7XG5cblxuXG5cblxuLy8gVmVyaWZ5IFJlZ2lzdHJhdGlvbiBDb2RlLlxuJChyZWdpc3RyYXRpb24pLnZhbGlkYXRlKHtcbiAgICBydWxlczoge1xuICAgICAgICByZWdpc3RyYXRpb25fY29kZToge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICByZW1vdGU6IHtcbiAgICAgICAgICAgICAgICB1cmw6IGJhc2VVcmwgKyBcIi92ZXJpZnlcIixcbiAgICAgICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIF90b2tlbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCgnaW5wdXRbbmFtZT1cIl90b2tlblwiXScpLnZhbCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXNzYWdlczoge1xuICAgICAgICByZWdpc3RyYXRpb25fY29kZToge1xuICAgICAgICAgICAgcmVtb3RlOiBcIuC4o+C4q+C4seC4quC4peC4h+C4l+C4sOC5gOC4muC4teC4ouC4meC5hOC4oeC5iOC4luC4ueC4geC4leC5ieC4reC4h1wiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGhpZ2hsaWdodDogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBqUXVlcnkoZWxlbWVudClcbiAgICAgICAgICAgIC5jbG9zZXN0KFwiLmZvcm0tY29udHJvbFwiKVxuICAgICAgICAgICAgLmFkZENsYXNzKFwiaXMtaW52YWxpZFwiKTtcbiAgICB9LFxuICAgIHVuaGlnaGxpZ2h0OiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGpRdWVyeShlbGVtZW50KVxuICAgICAgICAgICAgLmNsb3Nlc3QoXCIuZm9ybS1jb250cm9sXCIpXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJpcy1pbnZhbGlkXCIpO1xuICAgICAgICBqUXVlcnkoZWxlbWVudClcbiAgICAgICAgICAgIC5jbG9zZXN0KFwiLmZvcm0tY29udHJvbFwiKVxuICAgICAgICAgICAgLmFkZENsYXNzKFwiaXMtdmFsaWRcIik7XG4gICAgfVxufSk7XG5cblxuXG5cblxuXG4vLyBWYWxpZGF0ZSBMb2dpbi5cbiQobG9naW4pLnZhbGlkYXRlKHtcbiAgICBydWxlczoge1xuICAgICAgICBlbWFpbDogXCJyZXF1aXJlZFwiLFxuICAgICAgICBwYXNzd29yZDogXCJyZXF1aXJlZFwiXG4gICAgfVxufSk7XG5cblxuXG4kLnZhbGlkYXRvci5hZGRNZXRob2QoXG4gICAgXCJzdHVkZW50Q29kZVwiLFxuICAgIGZ1bmN0aW9uKHN0dWRlbnRfY29kZSwgZWxlbWVudCkge1xuICAgICAgICBzdHVkZW50X2NvZGUgPSBzdHVkZW50X2NvZGUucmVwbGFjZSgvXFxzKy9nLCBcIlwiKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHRoaXMub3B0aW9uYWwoZWxlbWVudCkgfHxcbiAgICAgICAgICAgIChzdHVkZW50X2NvZGUubGVuZ3RoID4gOSAmJlxuICAgICAgICAgICAgICAgIHN0dWRlbnRfY29kZS5tYXRjaChcbiAgICAgICAgICAgICAgICAgICAgL14oWzQtNl17MX1bMC05XXsxfVswLTldezJ9WzAtOV17MX1bMC05XXs0fVswLTldezF9KSQvXG4gICAgICAgICAgICAgICAgKSlcbiAgICAgICAgKTtcbiAgICB9LFxuICAgIFwi4Lij4Li54Lib4LmB4Lia4Lia4Lij4Lir4Lix4Liq4LiZ4Lix4LiB4Lio4Li24LiB4Lip4Liy4LmE4Lih4LmI4LiW4Li54LiB4LiV4LmJ4Lit4LiHXCJcbik7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBHZXQgUmVnaXN0cmF0aW9uIENvZGUgVmFsaWRhdGUuXG4kKGNvbmRpdGlvbikudmFsaWRhdGUoe1xuICAgIHJ1bGVzOiB7XG4gICAgICAgIHN0dWRlbnRfY29kZToge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICBudW1iZXI6IHRydWUsXG4gICAgICAgICAgICBtaW5sZW5ndGg6IDEwLFxuICAgICAgICAgICAgbWF4bGVuZ3RoOiAxMCxcbiAgICAgICAgICAgIHN0dWRlbnRDb2RlOiB0cnVlLFxuICAgICAgICAgICAgcmVtb3RlOiB7XG4gICAgICAgICAgICAgICAgdXJsOiBiYXNlVXJsICsgXCIvdmVyaWZ5L2lzX3ZhbGlkXCIsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJwb3N0XCIsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBfdG9rZW46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQoJ2lucHV0W25hbWU9XCJfdG9rZW5cIl0nKS52YWwoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHN0dWRlbnRfZW1haWw6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgZW1haWw6IHRydWVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgaGlnaGxpZ2h0OiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGpRdWVyeShlbGVtZW50KVxuICAgICAgICAgICAgLmNsb3Nlc3QoXCIuZm9ybS1jb250cm9sXCIpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoXCJpcy1pbnZhbGlkXCIpO1xuICAgIH0sXG4gICAgdW5oaWdobGlnaHQ6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgalF1ZXJ5KGVsZW1lbnQpXG4gICAgICAgICAgICAuY2xvc2VzdChcIi5mb3JtLWNvbnRyb2xcIilcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImlzLWludmFsaWRcIik7XG4gICAgICAgIGpRdWVyeShlbGVtZW50KVxuICAgICAgICAgICAgLmNsb3Nlc3QoXCIuZm9ybS1jb250cm9sXCIpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoXCJpcy12YWxpZFwiKTtcbiAgICB9LFxuICAgIG1lc3NhZ2VzOiB7XG4gICAgICAgIHN0dWRlbnRfY29kZToge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IFwi4LiB4Lij4Li44LiT4Liy4Lij4Liw4Lia4Lia4Lij4Lir4Lix4Liq4LiZ4Lix4LiB4Lio4Li24LiB4Lip4LiyXCIsXG4gICAgICAgICAgICBudW1iZXI6IFwi4Lij4Li54Lib4LmB4Lia4Lia4Lij4Lir4Lix4Liq4LiZ4Lix4LiB4Lio4Li24LiB4Lip4Liy4LmE4Lih4LmI4LiW4Li54LiB4LiV4LmJ4Lit4LiHXCIsXG4gICAgICAgICAgICBtaW5sZW5ndGg6IFwi4Lij4Li54Lib4LmB4Lia4Lia4Lij4Lir4Lix4Liq4LiZ4Lix4LiB4Lio4Li24LiB4Lip4Liy4LmE4Lih4LmI4LiW4Li54LiB4LiV4LmJ4Lit4LiHXCIsXG4gICAgICAgICAgICBtYXhsZW5ndGg6IFwi4Lij4Li54Lib4LmB4Lia4Lia4Lij4Lir4Lix4Liq4LiZ4Lix4LiB4Lio4Li24LiB4Lip4Liy4LmE4Lih4LmI4LiW4Li54LiB4LiV4LmJ4Lit4LiHXCIsXG4gICAgICAgICAgICByZW1vdGU6IFwi4Lij4Lir4Lix4Liq4LiZ4Lix4LiB4Lio4Li24LiB4Lip4Liy4LiZ4Li14LmJ4LmE4LiU4LmJ4Lil4LiH4LiX4Liw4LmA4Lia4Li14Lii4LiZ4LmE4Lin4LmJ4LmB4Lil4LmJ4LinXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHN0dWRlbnRfZW1haWw6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiBcIuC4geC4o+C4uOC4k+C4suC4o+C4sOC4muC4uOC4l+C4teC5iOC4reC4ouC4ueC5iOC4reC4teC5gOC4oeC4peC5jFwiLFxuICAgICAgICAgICAgZW1haWw6IFwi4Lij4Li54Lib4LmB4Lia4Lia4Lit4Li14LmA4Lih4Lil4LmM4LmE4Lih4LmI4LiW4Li54LiB4LiV4LmJ4Lit4LiHXCJcbiAgICAgICAgfVxuICAgIH0sXG5cbn0pO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/validator.js\n");

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