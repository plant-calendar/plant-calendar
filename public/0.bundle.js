(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./client/components/common/SubmitButton.tsx":
/*!***************************************************!*\
  !*** ./client/components/common/SubmitButton.tsx ***!
  \***************************************************/
/*! exports provided: SubmitButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitButton", function() { return SubmitButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _style_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style-config */ "./client/components/style-config.ts");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background: ", ";\n    color: ", ";\n    height: 25px;\n    cursor: pointer;\n    border-radius: 8%;\n        \n    :focus {\n        border: none;\n    }\n    :active {\n        background: ", ";\n    }\n"], ["\n    background: ", ";\n    color: ", ";\n    height: 25px;\n    cursor: pointer;\n    border-radius: 8%;\n        \n    :focus {\n        border: none;\n    }\n    :active {\n        background: ", ";\n    }\n"])), _style_config__WEBPACK_IMPORTED_MODULE_2__["COLORS"].primaryGreen, _style_config__WEBPACK_IMPORTED_MODULE_2__["COLORS"].white, _style_config__WEBPACK_IMPORTED_MODULE_2__["COLORS"].darkGreen);
var DisabledButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    background: ", ";\n    color: ", ";\n    height: 25px;\n    \n    :focus {\n        border: none;\n    }\n    border-radius: 8%;\n"], ["\n    background: ", ";\n    color: ", ";\n    height: 25px;\n    \n    :focus {\n        border: none;\n    }\n    border-radius: 8%;\n"])), _style_config__WEBPACK_IMPORTED_MODULE_2__["COLORS"].fadedPrimaryGreen, _style_config__WEBPACK_IMPORTED_MODULE_2__["COLORS"].white);
var SubmitButton = function (props) {
    return props.disabled
        ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DisabledButton, { style: __assign({}, (props.styles || {})), onClick: function () { return undefined; } }, props.text)) : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton, { style: __assign({}, (props.styles || {})), onClick: props.onClick }, props.text));
};
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./client/forms/interfaces.ts":
/*!************************************!*\
  !*** ./client/forms/interfaces.ts ***!
  \************************************/
/*! exports provided: FieldTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldTypes", function() { return FieldTypes; });
var FieldTypes;
(function (FieldTypes) {
    FieldTypes["INPUT"] = "INPUT";
    FieldTypes["AVATAR"] = "AVATAR";
    FieldTypes["DROPDOWN"] = "DROPDOWN";
    FieldTypes["TOGGLE"] = "TOGGLE";
})(FieldTypes || (FieldTypes = {}));


/***/ }),

/***/ "./client/forms/rendering/avatars.tsx":
/*!********************************************!*\
  !*** ./client/forms/rendering/avatars.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_style_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/style-config */ "./client/components/style-config.ts");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};



var PicturesContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border: 1px solid ", ";\n    width: 100%;\n    height: 20vh;\n    margin-top: 2px;\n"], ["\n    border: 1px solid ", ";\n    width: 100%;\n    height: 20vh;\n    margin-top: 2px;\n"])), _components_style_config__WEBPACK_IMPORTED_MODULE_2__["COLORS"].darkGreen);
var PicturesContainerRow = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    height: 50%;\n"], ["\n    display: flex;\n    height: 50%;\n"])));
var SinglePictureContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    border: 1px solid ", ";\n    width: 25%;\n    height: 100%;\n    background: none;\n    cursor: pointer;\n"], ["\n    border: 1px solid ", ";\n    width: 25%;\n    height: 100%;\n    background: none;\n    cursor: pointer;\n"])), _components_style_config__WEBPACK_IMPORTED_MODULE_2__["COLORS"].darkGreen);
var SelectableBox = function (props) {
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SinglePictureContainer, { style: props.selected ? { border: "4px solid " + _components_style_config__WEBPACK_IMPORTED_MODULE_2__["COLORS"].primaryGreen } : {}, onMouseDown: function (e) { return e.preventDefault(); }, onClick: props.onClick }, props.children));
};
var AvatarImage = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    height: 60%;\n"], ["\n    height: 60%;\n"])));
var Avatar = function (_a) {
    var imageUrl = _a.imageUrl;
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AvatarImage, { src: imageUrl }));
};
/* harmony default export */ __webpack_exports__["default"] = (function (imageUrls, selectedImageUrl, onSelectOne) {
    var getRow = function (imageUrlsForRow) {
        var boxes = [];
        var _loop_1 = function (i) {
            // we will make a box whether or not there is an image
            var avatar = imageUrlsForRow[i] ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Avatar, { imageUrl: imageUrlsForRow[i] }) : null;
            var boxClick = imageUrlsForRow[i] ? function () { return onSelectOne(imageUrlsForRow[i]); } : function () { return undefined; };
            boxes.push(
            // @ts-ignore
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SelectableBox, { selected: imageUrlsForRow[i] === selectedImageUrl, onClick: boxClick, key: "box-" + i }, avatar));
        };
        for (var i = 0; i < 4; i += 1) {
            _loop_1(i);
        }
        return boxes;
    };
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PicturesContainer, null,
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PicturesContainerRow, null, getRow(imageUrls.slice(0, 4))),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PicturesContainerRow, null, getRow(imageUrls.slice(4, 8)))));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "./client/forms/rendering/render-fields.tsx":
/*!**************************************************!*\
  !*** ./client/forms/rendering/render-fields.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _avatars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./avatars */ "./client/forms/rendering/avatars.tsx");
/* harmony import */ var _components_style_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/style-config */ "./client/components/style-config.ts");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../interfaces */ "./client/forms/interfaces.ts");
/* harmony import */ var _toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toggle */ "./client/forms/rendering/toggle.tsx");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var _a;






var StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].textarea(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    resize: none;\n    border: 1px solid ", ";\n    width: 95%;\n    color: ", ";\n    text-decoration: none;\n"], ["\n    resize: none;\n    border: 1px solid ", ";\n    width: 95%;\n    color: ", ";\n    text-decoration: none;\n"])), _components_style_config__WEBPACK_IMPORTED_MODULE_3__["COLORS"].darkGreen, _components_style_config__WEBPACK_IMPORTED_MODULE_3__["COLORS"].darkGreen);
var StyledDropdown = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].select(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    background: ", ";\n    border: 1px solid ", ";\n    width: 100%;\n    color:  ", ";\n"], ["\n    background: ", ";\n    border: 1px solid ", ";\n    width: 100%;\n    color:  ", ";\n"])), _components_style_config__WEBPACK_IMPORTED_MODULE_3__["COLORS"].white, _components_style_config__WEBPACK_IMPORTED_MODULE_3__["COLORS"].darkGreen, _components_style_config__WEBPACK_IMPORTED_MODULE_3__["COLORS"].darkGreen);
var StyledLabel = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    color: ", ";\n"], ["\n    color: ", ";\n"])), _components_style_config__WEBPACK_IMPORTED_MODULE_3__["COLORS"].darkGreen);
var StyledError = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    color: ", ";\n    font-size: small;\n    height: 20px;\n"], ["\n    color: ", ";\n    font-size: small;\n    height: 20px;\n"])), _components_style_config__WEBPACK_IMPORTED_MODULE_3__["COLORS"].notification);
var fieldGetters = (_a = {},
    _a[_interfaces__WEBPACK_IMPORTED_MODULE_4__["FieldTypes"].INPUT] = function (_a, value, onChange, error, clearError, onLeave) {
        var label = _a.label, lowerCase = _a.lowerCase;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { key: "create-" + label + "-1" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLabel, null, label),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledInput, { onFocus: clearError, onBlur: onLeave, value: value, onChange: function (event) { return onChange(lowerCase ? event.target.value.toLowerCase() : event.target.value); }, spellCheck: false }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledError, null, error)));
    },
    _a[_interfaces__WEBPACK_IMPORTED_MODULE_4__["FieldTypes"].AVATAR] = function (_a, value, onChange, error) {
        var key = _a.key, imageUrls = _a.imageUrls, label = _a.label;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { key: key },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLabel, null, label),
            Object(_avatars__WEBPACK_IMPORTED_MODULE_2__["default"])(imageUrls, value, onChange),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledError, null, error)));
    },
    _a[_interfaces__WEBPACK_IMPORTED_MODULE_4__["FieldTypes"].DROPDOWN] = function (_a, value, onChange, error, clearError, onLeave) {
        var key = _a.key, options = _a.options, label = _a.label;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { key: key },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLabel, null, label),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledDropdown, { onFocus: clearError, onBlur: onLeave, value: value, onChange: function (event) { return onChange(event.target.value); } }, options.map(function (option) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { key: key + "-" + option.value, value: option.value }, option.label)); })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledError, null, error)));
    },
    _a[_interfaces__WEBPACK_IMPORTED_MODULE_4__["FieldTypes"].TOGGLE] = function (_a, value, onChange) {
        var key = _a.key, label = _a.label;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { key: key },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLabel, null, label),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_toggle__WEBPACK_IMPORTED_MODULE_5__["default"], { value: value, onChange: onChange })));
    },
    _a);
/* harmony default export */ __webpack_exports__["default"] = (function (field, value, onChange, error, clearError, onLeave) {
    // @ts-ignore
    return fieldGetters[field.type || _interfaces__WEBPACK_IMPORTED_MODULE_4__["FieldTypes"].INPUT](field, value, onChange, error, clearError, onLeave);
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "./client/forms/rendering/toggle.tsx":
/*!*******************************************!*\
  !*** ./client/forms/rendering/toggle.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_style_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/style-config */ "./client/components/style-config.ts");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};



var StyledSvg = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].svg(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    cursor: pointer;\n"], ["\n    cursor: pointer;\n"])));
/* harmony default export */ __webpack_exports__["default"] = (function (_a) {
    var _b = _a.size, size = _b === void 0 ? 55 : _b, value = _a.value, onChange = _a.onChange;
    var toggleValue = function () { return onChange(!value); };
    var path = value
        ? "M43.9167 15.5H18.0834C9.53254 15.5 2.58337 22.4492 2.58337 31C2.58337 39.5508 9.53254 46.5 18.0834 46.5H43.9167C52.4675 46.5 59.4167 39.5508 59.4167 31C59.4167 22.4492 52.4675 15.5 43.9167 15.5ZM43.9167 41.3334H18.0834C12.3742 41.3334 7.75004 36.7092 7.75004 31C7.75004 25.2908 12.3742 20.6667 18.0834 20.6667H43.9167C49.6259 20.6667 54.25 25.2908 54.25 31C54.25 36.7092 49.6259 41.3334 43.9167 41.3334ZM36.1667 31C36.1667 26.7117 39.6284 23.25 43.9167 23.25C48.205 23.25 51.6667 26.7117 51.6667 31C51.6667 35.2883 48.205 38.75 43.9167 38.75C39.6284 38.75 36.1667 35.2883 36.1667 31Z"
        : "M43.9167 15.5H18.0834C9.53254 15.5 2.58337 22.4492 2.58337 31C2.58337 39.5508 9.53254 46.5 18.0834 46.5H43.9167C52.4675 46.5 59.4167 39.5508 59.4167 31C59.4167 22.4492 52.4675 15.5 43.9167 15.5ZM43.9167 41.3333H18.0834C12.3742 41.3333 7.75004 36.7092 7.75004 31C7.75004 25.2908 12.3742 20.6667 18.0834 20.6667H43.9167C49.6259 20.6667 54.25 25.2908 54.25 31C54.25 36.7092 49.6259 41.3333 43.9167 41.3333ZM10.3334 31C10.3334 26.7117 13.795 23.25 18.0834 23.25C22.3717 23.25 25.8334 26.7117 25.8334 31C25.8334 35.2883 22.3717 38.75 18.0834 38.75C13.795 38.75 10.3334 35.2883 10.3334 31Z";
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledSvg, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 62 62", fill: "none", onClick: toggleValue },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: path, fill: value ? _components_style_config__WEBPACK_IMPORTED_MODULE_2__["COLORS"].primaryGreen : _components_style_config__WEBPACK_IMPORTED_MODULE_2__["COLORS"].lightGray, fillOpacity: "1" }))));
});
var templateObject_1;


/***/ }),

/***/ "./client/forms/validation/index.ts":
/*!******************************************!*\
  !*** ./client/forms/validation/index.ts ***!
  \******************************************/
/*! exports provided: ALLOWED_CHARACTERS, validatorGetters, validateField, getFormErrorMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALLOWED_CHARACTERS", function() { return ALLOWED_CHARACTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatorGetters", function() { return validatorGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateField", function() { return validateField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormErrorMessages", function() { return getFormErrorMessages; });
var ALLOWED_CHARACTERS = 'abcdefghijklmnopqrstuvwxyz0123456789-';
var validatorGetters = {
    isDate: function () { return ({
        validate: function () { return function (val) { return true; }; },
        getMessage: function () { return "must be a date"; },
    }); },
    isNotNil: function () { return ({
        validate: function (val) { return !!val || val === 0; },
        getMessage: function () { return "cannot be blank"; },
    }); },
    isNumber: function () { return ({
        validate: function (val) { return !isNaN(parseFloat(val)); },
        getMessage: function () { return "must be a number"; },
    }); },
    isAtLeastLength: function (length) { return ({
        validate: function (val) { return val && val.length >= length; },
        getMessage: function () { return "must be at least " + length + " characters long"; },
    }); },
    isAtMostLength: function (length) { return ({
        validate: function (val) { return val && val.length <= length; },
        getMessage: function () { return "cannot be more than " + length + " characters long"; },
    }); },
    isOfGenericAllowedCharacters: function () {
        var uniqueInvalidCharacters = {};
        return {
            validate: function (input) {
                uniqueInvalidCharacters = {};
                for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
                    var char = input_1[_i];
                    if (!ALLOWED_CHARACTERS.includes(char)) {
                        uniqueInvalidCharacters[char] = true;
                    }
                }
                return !Object.keys(uniqueInvalidCharacters).length;
            },
            getMessage: function () {
                return "invalid characters: \"" + Object.keys(uniqueInvalidCharacters).join('') + "\"";
            },
        };
    },
};
var validateField = function (value, validatorsForField) {
    return validatorsForField.reduce(function (errorMessages, validator) {
        if (!validator.validate(value)) {
            errorMessages.push(validator.getMessage());
        }
        return errorMessages;
    }, []);
};
var getFormErrorMessages = function (fields, values) {
    return fields.reduce(function (allErrors, _a) {
        var validators = _a.validators, label = _a.label, key = _a.key;
        var value = values[key];
        if (validators && validators.length) {
            var errorsForField = validateField(value, validators);
            // @ts-ignore
            return allErrors.concat(errorsForField);
        }
        return allErrors;
    }, []);
};


/***/ })

}]);
//# sourceMappingURL=0.bundle.js.map