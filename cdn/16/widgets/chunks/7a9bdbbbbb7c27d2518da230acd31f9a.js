"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_arcgis_core_layers_support_labelFormatUtils_js"],{

/***/ "./node_modules/@arcgis/core/layers/support/labelFormatUtils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/labelFormatUtils.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLabelFunction": () => (/* binding */ p),
/* harmony export */   "formatField": () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _intl_date_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../intl/date.js */ "./node_modules/@arcgis/core/intl/date.js");
/* harmony import */ var _intl_number_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../intl/number.js */ "./node_modules/@arcgis/core/intl/number.js");
/* harmony import */ var _fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fieldUtils.js */ "./node_modules/@arcgis/core/layers/support/fieldUtils.js");
/* harmony import */ var _labelUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./labelUtils.js */ "./node_modules/@arcgis/core/layers/support/labelUtils.js");
/* harmony import */ var _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../support/arcadeOnDemand.js */ "./node_modules/@arcgis/core/support/arcadeOnDemand.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const s=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.layers.support.labelFormatUtils"),c={type:"simple",evaluate:()=>null},f={getAttribute:(e,r)=>e.field(r)};async function p(r,t,n){if(!r||!r.symbol||!t)return c;const a=r.where,o=(0,_labelUtils_js__WEBPACK_IMPORTED_MODULE_5__.getLabelExpression)(r),p=a?await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../core/sql/WhereClause.js */ "./node_modules/@arcgis/core/core/sql/WhereClause.js")):null;let m;if("arcade"===o.type){const r=await (0,_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_6__.createLabelExpression)(o.expression,n,t);if(null==r)return c;m={type:"arcade",evaluate(t){try{const e=r.evaluate({$feature:"attributes"in t?r.repurposeFeature(t):t},r.services);if(null!=e)return e.toString()}catch(n){s.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("arcade-expression-error","Encountered an error when evaluating label expression for feature",{error:n,feature:t,expression:o}))}return null},needsHydrationToEvaluate:()=>null==(0,_labelUtils_js__WEBPACK_IMPORTED_MODULE_5__.getSingleFieldArcadeExpression)(o.expression)}}else m={type:"simple",evaluate:e=>o.expression.replaceAll(/{[^}]*}/g,(r=>{const n=r.slice(1,-1),a=t.get(n);if(!a)return r;let o=null;if("attributes"in e){e&&e.attributes&&(o=e.attributes[a.name])}else o=e.field(a.name);return null==o?"":d(o,a)}))};if(a){let r;try{r=p.WhereClause.create(a,t)}catch(g){return s.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("bad-where-clause","Encountered an error when evaluating where clause, ignoring",{where:a,error:g})),c}const n=m.evaluate;m.evaluate=t=>{const o="attributes"in t?void 0:f;try{if(r.testFeature(t,o))return n(t)}catch(g){s.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("bad-where-clause","Encountered an error when evaluating where clause for feature",{where:a,feature:t,error:g}))}return null}}return m}function d(e,r){if(null==e)return"";const l=r.domain;if(l)if("codedValue"===l.type||"coded-value"===l.type){const r=e;for(const e of l.codedValues)if(e.code===r)return e.name}else if("range"===l.type){const r=+e,t="range"in l?l.range[0]:l.minValue,n="range"in l?l.range[1]:l.maxValue;if(t<=r&&r<=n)return l.name}let i=e;return"date"===r.type||"esriFieldTypeDate"===r.type?i=(0,_intl_date_js__WEBPACK_IMPORTED_MODULE_2__.formatDate)(i,(0,_intl_date_js__WEBPACK_IMPORTED_MODULE_2__.convertDateFormatToIntlOptions)("short-date")):(0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__.isNumericField)(r)&&(i=(0,_intl_number_js__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(+i)),i||""}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvN2E5YmRiYmJiYjdjMjdkMjUxOGRhMjMwYWNkMzFmOWEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDaWEsUUFBUSxpRUFBVyw0Q0FBNEMsZ0NBQWdDLElBQUksZ0NBQWdDLHdCQUF3Qiw4QkFBOEIsa0JBQWtCLGtFQUFDLGNBQWMsZ0xBQXVDLE1BQU0sTUFBTSxzQkFBc0IsY0FBYyxpRkFBQyxtQkFBbUIsb0JBQW9CLEdBQUcsMEJBQTBCLElBQUksb0JBQW9CLGtEQUFrRCxhQUFhLCtCQUErQixTQUFTLFlBQVksc0RBQUMsZ0dBQWdHLCtCQUErQixHQUFHLFlBQVksb0NBQW9DLDhFQUFDLGdCQUFnQixRQUFRLG9EQUFvRCxHQUFHLEdBQUcsUUFBUSxpQ0FBaUMsZUFBZSxXQUFXLHFCQUFxQiwwQ0FBMEMsdUJBQXVCLHlCQUF5QixJQUFJLE1BQU0sTUFBTSxJQUFJLDRCQUE0QixTQUFTLG1CQUFtQixzREFBQyxtRkFBbUYsZ0JBQWdCLEtBQUssbUJBQW1CLGVBQWUsa0NBQWtDLElBQUksa0NBQWtDLFNBQVMsWUFBWSxzREFBQyxxRkFBcUYsMEJBQTBCLEdBQUcsYUFBYSxTQUFTLGdCQUFnQixvQkFBb0IsaUJBQWlCLHVEQUF1RCxVQUFVLHlEQUF5RCwwQkFBMEIsbUZBQW1GLDRCQUE0QixRQUFRLHNEQUFzRCx5REFBQyxHQUFHLDZFQUFDLGdCQUFnQiw4REFBQyxRQUFRLDZEQUFDLFlBQThEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AYXJjZ2lzL2NvcmUvbGF5ZXJzL3N1cHBvcnQvbGFiZWxGb3JtYXRVdGlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cblNlZSBodHRwczovL2pzLmFyY2dpcy5jb20vNC4yNy9lc3JpL2NvcHlyaWdodC50eHQgZm9yIGRldGFpbHMuXG4qL1xuaW1wb3J0IGUgZnJvbVwiLi4vLi4vY29yZS9FcnJvci5qc1wiO2ltcG9ydCByIGZyb21cIi4uLy4uL2NvcmUvTG9nZ2VyLmpzXCI7aW1wb3J0e2Zvcm1hdERhdGUgYXMgdCxjb252ZXJ0RGF0ZUZvcm1hdFRvSW50bE9wdGlvbnMgYXMgbn1mcm9tXCIuLi8uLi9pbnRsL2RhdGUuanNcIjtpbXBvcnR7Zm9ybWF0TnVtYmVyIGFzIGF9ZnJvbVwiLi4vLi4vaW50bC9udW1iZXIuanNcIjtpbXBvcnR7aXNOdW1lcmljRmllbGQgYXMgb31mcm9tXCIuL2ZpZWxkVXRpbHMuanNcIjtpbXBvcnR7Z2V0TGFiZWxFeHByZXNzaW9uIGFzIGwsZ2V0U2luZ2xlRmllbGRBcmNhZGVFeHByZXNzaW9uIGFzIGl9ZnJvbVwiLi9sYWJlbFV0aWxzLmpzXCI7aW1wb3J0e2NyZWF0ZUxhYmVsRXhwcmVzc2lvbiBhcyB1fWZyb21cIi4uLy4uL3N1cHBvcnQvYXJjYWRlT25EZW1hbmQuanNcIjtjb25zdCBzPXIuZ2V0TG9nZ2VyKFwiZXNyaS5sYXllcnMuc3VwcG9ydC5sYWJlbEZvcm1hdFV0aWxzXCIpLGM9e3R5cGU6XCJzaW1wbGVcIixldmFsdWF0ZTooKT0+bnVsbH0sZj17Z2V0QXR0cmlidXRlOihlLHIpPT5lLmZpZWxkKHIpfTthc3luYyBmdW5jdGlvbiBwKHIsdCxuKXtpZighcnx8IXIuc3ltYm9sfHwhdClyZXR1cm4gYztjb25zdCBhPXIud2hlcmUsbz1sKHIpLHA9YT9hd2FpdCBpbXBvcnQoXCIuLi8uLi9jb3JlL3NxbC9XaGVyZUNsYXVzZS5qc1wiKTpudWxsO2xldCBtO2lmKFwiYXJjYWRlXCI9PT1vLnR5cGUpe2NvbnN0IHI9YXdhaXQgdShvLmV4cHJlc3Npb24sbix0KTtpZihudWxsPT1yKXJldHVybiBjO209e3R5cGU6XCJhcmNhZGVcIixldmFsdWF0ZSh0KXt0cnl7Y29uc3QgZT1yLmV2YWx1YXRlKHskZmVhdHVyZTpcImF0dHJpYnV0ZXNcImluIHQ/ci5yZXB1cnBvc2VGZWF0dXJlKHQpOnR9LHIuc2VydmljZXMpO2lmKG51bGwhPWUpcmV0dXJuIGUudG9TdHJpbmcoKX1jYXRjaChuKXtzLmVycm9yKG5ldyBlKFwiYXJjYWRlLWV4cHJlc3Npb24tZXJyb3JcIixcIkVuY291bnRlcmVkIGFuIGVycm9yIHdoZW4gZXZhbHVhdGluZyBsYWJlbCBleHByZXNzaW9uIGZvciBmZWF0dXJlXCIse2Vycm9yOm4sZmVhdHVyZTp0LGV4cHJlc3Npb246b30pKX1yZXR1cm4gbnVsbH0sbmVlZHNIeWRyYXRpb25Ub0V2YWx1YXRlOigpPT5udWxsPT1pKG8uZXhwcmVzc2lvbil9fWVsc2UgbT17dHlwZTpcInNpbXBsZVwiLGV2YWx1YXRlOmU9Pm8uZXhwcmVzc2lvbi5yZXBsYWNlQWxsKC97W159XSp9L2csKHI9Pntjb25zdCBuPXIuc2xpY2UoMSwtMSksYT10LmdldChuKTtpZighYSlyZXR1cm4gcjtsZXQgbz1udWxsO2lmKFwiYXR0cmlidXRlc1wiaW4gZSl7ZSYmZS5hdHRyaWJ1dGVzJiYobz1lLmF0dHJpYnV0ZXNbYS5uYW1lXSl9ZWxzZSBvPWUuZmllbGQoYS5uYW1lKTtyZXR1cm4gbnVsbD09bz9cIlwiOmQobyxhKX0pKX07aWYoYSl7bGV0IHI7dHJ5e3I9cC5XaGVyZUNsYXVzZS5jcmVhdGUoYSx0KX1jYXRjaChnKXtyZXR1cm4gcy5lcnJvcihuZXcgZShcImJhZC13aGVyZS1jbGF1c2VcIixcIkVuY291bnRlcmVkIGFuIGVycm9yIHdoZW4gZXZhbHVhdGluZyB3aGVyZSBjbGF1c2UsIGlnbm9yaW5nXCIse3doZXJlOmEsZXJyb3I6Z30pKSxjfWNvbnN0IG49bS5ldmFsdWF0ZTttLmV2YWx1YXRlPXQ9Pntjb25zdCBvPVwiYXR0cmlidXRlc1wiaW4gdD92b2lkIDA6Zjt0cnl7aWYoci50ZXN0RmVhdHVyZSh0LG8pKXJldHVybiBuKHQpfWNhdGNoKGcpe3MuZXJyb3IobmV3IGUoXCJiYWQtd2hlcmUtY2xhdXNlXCIsXCJFbmNvdW50ZXJlZCBhbiBlcnJvciB3aGVuIGV2YWx1YXRpbmcgd2hlcmUgY2xhdXNlIGZvciBmZWF0dXJlXCIse3doZXJlOmEsZmVhdHVyZTp0LGVycm9yOmd9KSl9cmV0dXJuIG51bGx9fXJldHVybiBtfWZ1bmN0aW9uIGQoZSxyKXtpZihudWxsPT1lKXJldHVyblwiXCI7Y29uc3QgbD1yLmRvbWFpbjtpZihsKWlmKFwiY29kZWRWYWx1ZVwiPT09bC50eXBlfHxcImNvZGVkLXZhbHVlXCI9PT1sLnR5cGUpe2NvbnN0IHI9ZTtmb3IoY29uc3QgZSBvZiBsLmNvZGVkVmFsdWVzKWlmKGUuY29kZT09PXIpcmV0dXJuIGUubmFtZX1lbHNlIGlmKFwicmFuZ2VcIj09PWwudHlwZSl7Y29uc3Qgcj0rZSx0PVwicmFuZ2VcImluIGw/bC5yYW5nZVswXTpsLm1pblZhbHVlLG49XCJyYW5nZVwiaW4gbD9sLnJhbmdlWzFdOmwubWF4VmFsdWU7aWYodDw9ciYmcjw9bilyZXR1cm4gbC5uYW1lfWxldCBpPWU7cmV0dXJuXCJkYXRlXCI9PT1yLnR5cGV8fFwiZXNyaUZpZWxkVHlwZURhdGVcIj09PXIudHlwZT9pPXQoaSxuKFwic2hvcnQtZGF0ZVwiKSk6byhyKSYmKGk9YSgraSkpLGl8fFwiXCJ9ZXhwb3J0e3AgYXMgY3JlYXRlTGFiZWxGdW5jdGlvbixkIGFzIGZvcm1hdEZpZWxkfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==