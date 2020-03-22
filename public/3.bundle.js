(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./client/components/CreateHabitatModal/index.tsx":
/*!********************************************************!*\
  !*** ./client/components/CreateHabitatModal/index.tsx ***!
  \********************************************************/
/*! exports provided: CreateHabitat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateHabitat", function() { return CreateHabitat; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_habitat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/habitat */ "./client/store/habitat/index.ts");
/* harmony import */ var _common_CreateModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/CreateModal */ "./client/components/common/CreateModal/index.tsx");
/* harmony import */ var _forms_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../forms/validation */ "./client/forms/validation/index.ts");
/* harmony import */ var _forms_interfaces__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../forms/interfaces */ "./client/forms/interfaces.ts");






var getStages = function (existingHabitat) {
    var _a = (existingHabitat || {}), _b = _a.name, name = _b === void 0 ? '' : _b, _c = _a.imageUrl, imageUrl = _c === void 0 ? '/habitat-avatars/habitat1.png' : _c;
    return [
        {
            fields: [
                {
                    key: 'name',
                    label: 'what do you want to call this habitat?',
                    lowerCase: true,
                    validators: [
                        _forms_validation__WEBPACK_IMPORTED_MODULE_4__["validatorGetters"].isNotNil(),
                        _forms_validation__WEBPACK_IMPORTED_MODULE_4__["validatorGetters"].isAtLeastLength(3),
                        _forms_validation__WEBPACK_IMPORTED_MODULE_4__["validatorGetters"].isOfGenericAllowedCharacters(),
                    ],
                    initial: name,
                    type: _forms_interfaces__WEBPACK_IMPORTED_MODULE_5__["FieldTypes"].INPUT,
                },
                {
                    key: 'imageUrl',
                    label: 'pick an avatar for this habitat .',
                    validators: [],
                    type: _forms_interfaces__WEBPACK_IMPORTED_MODULE_5__["FieldTypes"].AVATAR,
                    imageUrls: [
                        '/habitat-avatars/habitat1.png',
                        '/habitat-avatars/habitat2.png',
                        '/habitat-avatars/habitat3.png',
                        '/habitat-avatars/habitat4.png',
                        '/habitat-avatars/habitat5.png',
                        '/habitat-avatars/habitat6.png',
                        '/habitat-avatars/habitat7.png',
                        '/habitat-avatars/habitat8.png',
                    ],
                    initial: imageUrl,
                },
            ],
        },
    ];
};
var Component = function (props) {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_CreateModal__WEBPACK_IMPORTED_MODULE_3__["default"], { stages: getStages(), save: props.create, afterSave: props.afterCreate, close: props.onCancel, submitButtonText: "create!" }));
};
var mapDispatchToProps = function (dispatch) { return ({
    create: function (habitat, callback) { return dispatch(_store_habitat__WEBPACK_IMPORTED_MODULE_2__["actions"].createOne(habitat, callback)); },
}); };
var CreateHabitat = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, mapDispatchToProps)(Component);



/***/ }),

/***/ "./client/components/Logout/index.tsx":
/*!********************************************!*\
  !*** ./client/components/Logout/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _style_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style-config */ "./client/components/style-config.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./client/config.ts");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};




var StyledLogout = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background: ", ";\n    border-radius: 5px;\n    padding: 1px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n    width: 75px;\n\n    &:hover {\n        background: ", ";\n    }\n    &:active {\n        background: ", ";\n    }\n    text-decoration: none;\n    color: ", ";\n"], ["\n    background: ", ";\n    border-radius: 5px;\n    padding: 1px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n    width: 75px;\n\n    &:hover {\n        background: ", ";\n    }\n    &:active {\n        background: ", ";\n    }\n    text-decoration: none;\n    color: ", ";\n"])), _style_config__WEBPACK_IMPORTED_MODULE_2__["COLORS"].lightGray, _style_config__WEBPACK_IMPORTED_MODULE_2__["COLORS"].darkGray, _style_config__WEBPACK_IMPORTED_MODULE_2__["COLORS"].darkGray, _style_config__WEBPACK_IMPORTED_MODULE_2__["COLORS"].white);
/* harmony default export */ __webpack_exports__["default"] = (function () { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLogout, { href: _config__WEBPACK_IMPORTED_MODULE_3__["apiBaseUrl"] + "/auth/logout" }, "logout")); });
var templateObject_1;


/***/ }),

/***/ "./client/components/User/AcceptSubscriptionsModal/index.tsx":
/*!*******************************************************************!*\
  !*** ./client/components/User/AcceptSubscriptionsModal/index.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _style_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../style-config */ "./client/components/style-config.ts");
/* harmony import */ var _common_CloseSign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/CloseSign */ "./client/components/common/CloseSign.tsx");
/* harmony import */ var _common_SubmitButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/SubmitButton */ "./client/components/common/SubmitButton.tsx");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};







var StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    margin-top: 40px;\n"], ["\n    margin-top: 40px;\n"])));
var StyledRequest = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    height: ", "px;\n    box-shadow: 2px 2px #e8e8e8;\n    width: 100%;\n    margin-bottom: 10px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n"], ["\n    height: ", "px;\n    box-shadow: 2px 2px #e8e8e8;\n    width: 100%;\n    margin-bottom: 10px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n"])), _style_config__WEBPACK_IMPORTED_MODULE_3__["TILE_HEIGHT"] + 20);
var StyledRequestText = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    color: ", ";\n    padding-top: 15px;\n"], ["\n    color: ", ";\n    padding-top: 15px;\n"])), _style_config__WEBPACK_IMPORTED_MODULE_3__["COLORS"].darkGreen);
var StyledButtonsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    display: flex;\n    justify-content: flex-end;\n    margin-right: 30px;\n    margin-bottom: 16px;\n"], ["\n    display: flex;\n    justify-content: flex-end;\n    margin-right: 30px;\n    margin-bottom: 16px;\n"])));
var StyledEmphasizedText = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n   color: ", ";\n"], ["\n   color: ", ";\n"])), _style_config__WEBPACK_IMPORTED_MODULE_3__["COLORS"].notification);
var StyledNoMoreRequests = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    text-align: center;\n    color: ", ";\n"], ["\n    text-align: center;\n    color: ", ";\n"])), _style_config__WEBPACK_IMPORTED_MODULE_3__["COLORS"].lightGray);
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
    var contents = !props.requests.length
        ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledNoMoreRequests, null, "you responded to all requests")
        : props.requests.map(function (request) {
            var buttonWidth = '60px';
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledRequest, null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledRequestText, null,
                    "User",
                    ' ',
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledEmphasizedText, null, request.userName),
                    ' ',
                    "wants to subscribe to your habitat ",
                    request.habitatName),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButtonsContainer, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_SubmitButton__WEBPACK_IMPORTED_MODULE_5__["SubmitButton"], { onClick: function () { return props.accept(request); }, text: 'accept', styles: { width: buttonWidth } }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_SubmitButton__WEBPACK_IMPORTED_MODULE_5__["SubmitButton"], { onClick: function () { return props.reject(request); }, text: 'decline', styles: {
                            width: buttonWidth,
                            marginLeft: '10px',
                            background: _style_config__WEBPACK_IMPORTED_MODULE_3__["COLORS"].notification,
                        } }))));
        });
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_modal__WEBPACK_IMPORTED_MODULE_1___default.a, { isOpen: true, style: { content: _style_config__WEBPACK_IMPORTED_MODULE_3__["BASE_MODAL_STYLE"].CONTENT } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_CloseSign__WEBPACK_IMPORTED_MODULE_4__["Close"], { onClick: props.close }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledContainer, null, contents)));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;


/***/ }),

/***/ "./client/components/User/SubscribeModal/Confirm/index.tsx":
/*!*****************************************************************!*\
  !*** ./client/components/User/SubscribeModal/Confirm/index.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _common_SubmitButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/SubmitButton */ "./client/components/common/SubmitButton.tsx");
/* harmony import */ var _style_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../style-config */ "./client/components/style-config.ts");
/* harmony import */ var _TileDisplay_avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../TileDisplay/avatar */ "./client/components/TileDisplay/avatar.tsx");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};





var StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    margin-top: 40%;\n"], ["\n    display: flex;\n    flex-direction: column;\n    margin-top: 40%;\n"])));
var StyledMessage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    color: ", ";\n    text-align: center;\n    margin-bottom: 20px;\n"], ["\n    color: ", ";\n    text-align: center;\n    margin-bottom: 20px;\n"])), _style_config__WEBPACK_IMPORTED_MODULE_3__["COLORS"].darkGreen);
var StyledButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: flex;\n    justify-content: center;\n"], ["\n    display: flex;\n    justify-content: center;\n"])));
var StyledAvatarContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    display: flex;\n    justify-content: center;\n    margin-bottom: 15px;\n"], ["\n    display: flex;\n    justify-content: center;\n    margin-bottom: 15px;\n"])));
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledContainer, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledAvatarContainer, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TileDisplay_avatar__WEBPACK_IMPORTED_MODULE_4__["default"], { imageUrl: props.habitat.imageUrl, borderColor: _style_config__WEBPACK_IMPORTED_MODULE_3__["COLORS"].primaryGreen })),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledMessage, null,
            "Request to subscribe to ",
            props.habitat.name,
            "?"),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButtonContainer, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_SubmitButton__WEBPACK_IMPORTED_MODULE_2__["SubmitButton"], { onClick: function () { return props.onConfirm(props.habitat.id); }, text: "request!", styles: { width: "50%", maxWidth: "200px", minWidth: "80px" } }))));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "./client/components/User/SubscribeModal/Select/index.tsx":
/*!****************************************************************!*\
  !*** ./client/components/User/SubscribeModal/Select/index.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _TileDisplay_tile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../TileDisplay/tile */ "./client/components/TileDisplay/tile.tsx");
/* harmony import */ var _search_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-bar */ "./client/components/User/SubscribeModal/Select/search-bar.tsx");
/* harmony import */ var _style_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../style-config */ "./client/components/style-config.ts");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};





var StyledTileContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n"], ["\n"])));
var StyledNoHabitatsMessage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    text-align: center;\n    color: ", ";\n"], ["\n    text-align: center;\n    color: ", ";\n"])), _style_config__WEBPACK_IMPORTED_MODULE_4__["COLORS"].lightGray);
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
    var habitats = props.habitats, searchHabitats = props.searchHabitats, onClickHabitat = props.onClickHabitat;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_search_bar__WEBPACK_IMPORTED_MODULE_3__["default"], { onSearch: function (searchString) { return searchHabitats(searchString); } }),
        habitats.length === 0
            ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledNoHabitatsMessage, null, "no matching habitats found"))
            : null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTileContainer, null, habitats.map(function (habitat) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TileDisplay_tile__WEBPACK_IMPORTED_MODULE_2__["default"], { title: habitat.name, details: '', elementKey: habitat.id, imageUrl: habitat.imageUrl, containerStyle: { width: '100%' }, onClick: function () { return onClickHabitat(habitat); } })); }))));
});
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./client/components/User/SubscribeModal/Select/search-bar.tsx":
/*!*********************************************************************!*\
  !*** ./client/components/User/SubscribeModal/Select/search-bar.tsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _style_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../style-config */ "./client/components/style-config.ts");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};



var StyledBar = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    margin-top: 30px;\n    margin-bottom: 30px;\n    display: flex;\n    justify-content: center;\n    color: ", ";\n"], ["\n    margin-top: 30px;\n    margin-bottom: 30px;\n    display: flex;\n    justify-content: center;\n    color: ", ";\n"])), _style_config__WEBPACK_IMPORTED_MODULE_2__["COLORS"].darkGreen);
var VerticalFlexer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    width: 50%;\n"], ["\n    display: flex;\n    flex-direction: column;\n    width: 50%;\n"])));
var StyledTextArea = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].textarea(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    resize: none;\n    width: 100%;\n    height: 30px;\n    color: ", ";\n    border: 1px solid ", ";\n    text-decoration: none;\n"], ["\n    resize: none;\n    width: 100%;\n    height: 30px;\n    color: ", ";\n    border: 1px solid ", ";\n    text-decoration: none;\n"])), _style_config__WEBPACK_IMPORTED_MODULE_2__["COLORS"].darkGreen, _style_config__WEBPACK_IMPORTED_MODULE_2__["COLORS"].darkGreen);
var StyledLabel = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    margin-top: 5px;\n    width: 100%;\n    text-align: center;\n"], ["\n    margin-top: 5px;\n    width: 100%;\n    text-align: center;\n"])));
var Component = function (_a) {
    var debouncedSearch = _a.debouncedSearch;
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''), searchString = _b[0], setSearchString = _b[1];
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledBar, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(VerticalFlexer, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTextArea, { value: searchString, onChange: function (event) {
                    var searched = event.target.value.toLowerCase();
                    setSearchString(searched);
                    if (searched.length > 2) {
                        debouncedSearch(searched);
                    }
                }, spellCheck: false }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLabel, null, "search for habitats"))));
};
var debounce = function (func, delay) {
    var timerId;
    return function (searchStr) {
        clearTimeout(timerId);
        timerId = setTimeout(function () { return func(searchStr); }, delay);
    };
};
// we must have a wrapper component to define our debounced function b/c, if we were
// to put the definition in the child component, it would be redefined each time state
// changed, at which point the timerId in the debouncer would be lost.
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
    var debouncedSearch = debounce(function (str) {
        props.onSearch(str);
        // console.log(str)
    }, 500);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, { debouncedSearch: debouncedSearch });
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "./client/components/User/SubscribeModal/index.tsx":
/*!*********************************************************!*\
  !*** ./client/components/User/SubscribeModal/index.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _style_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../style-config */ "./client/components/style-config.ts");
/* harmony import */ var _Confirm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Confirm */ "./client/components/User/SubscribeModal/Confirm/index.tsx");
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Select */ "./client/components/User/SubscribeModal/Select/index.tsx");
/* harmony import */ var _common_CloseSign__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/CloseSign */ "./client/components/common/CloseSign.tsx");
/* harmony import */ var _store_habitat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../store/habitat */ "./client/store/habitat/index.ts");








var Component = function (props) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null), habitatToConfirm = _a[0], setToConfirm = _a[1];
    var onConfirmSubscriptionRequest = function (habitatId) {
        props.requestSubscription(habitatId, function () { return props.close(); });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_modal__WEBPACK_IMPORTED_MODULE_1___default.a, { isOpen: true, style: { content: _style_config__WEBPACK_IMPORTED_MODULE_3__["BASE_MODAL_STYLE"].CONTENT } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_CloseSign__WEBPACK_IMPORTED_MODULE_6__["Close"], { onClick: props.close }),
        habitatToConfirm
            ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Confirm__WEBPACK_IMPORTED_MODULE_4__["default"], { habitat: habitatToConfirm, onConfirm: onConfirmSubscriptionRequest })
            : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Select__WEBPACK_IMPORTED_MODULE_5__["default"], { searchHabitats: props.searchHabitats, habitats: props.habitats, onClickHabitat: function (selected) { return setToConfirm(selected); } })));
};
var mapDispatchToProps = function (dispatch) { return ({
    searchHabitats: function (searchString) { return dispatch(_store_habitat__WEBPACK_IMPORTED_MODULE_7__["actions"].habitatSearch(searchString)); },
    requestSubscription: function (habitatId, callback) { return dispatch(_store_habitat__WEBPACK_IMPORTED_MODULE_7__["actions"].requestSubscription(habitatId, callback)); },
}); };
var mapStateToProps = function (state) { return ({
    habitats: _store_habitat__WEBPACK_IMPORTED_MODULE_7__["selectors"].queriedHabitats(state),
}); };
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Component));


/***/ }),

/***/ "./client/components/User/get-habitat-tile-data.tsx":
/*!**********************************************************!*\
  !*** ./client/components/User/get-habitat-tile-data.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_db_interfaces_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/db-interfaces/types */ "./common/db-interfaces/types.ts");
/* harmony import */ var _style_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style-config */ "./client/components/style-config.ts");


var getTags = function (props, isSubscribed) {
    return isSubscribed ? [] : [
        {
            text: "subscription " + (props.subscription || {}).status,
            elementKey: "tag-" + props.id + "-status",
            backgroundColor: _style_config__WEBPACK_IMPORTED_MODULE_1__["COLORS"].darkGray,
            color: _style_config__WEBPACK_IMPORTED_MODULE_1__["COLORS"].white,
        },
    ];
};
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
    // we expect the subscription property to always exist in the data that we actually care about.  However,
    // there is problem where the single Habitat page is using the same habitats property in the redux state
    // as UserHabitats page, which is the page that calls this method. That single Habitat page fills the habitats
    // property with a single habitat that does NOT have the subscription property and, before the UserHabitats
    // page is able to overwrite the habitats property to an array of habitats where each does have a subscription
    // property, the page is rendered and this method is called.
    // @ts-ignore
    var isSubscribed = (props.subscription || {}).status === _common_db_interfaces_types__WEBPACK_IMPORTED_MODULE_0__["SUBSCRIPTION_STATUSES"].ACTIVE;
    return {
        elementKey: props.id,
        title: props.name,
        details: isSubscribed ? props.plants.length + " plants" : undefined,
        imageUrl: props.imageUrl,
        linkTo: isSubscribed ? "/habitats/" + props.id : undefined,
        tags: getTags(props, isSubscribed),
    };
});


/***/ }),

/***/ "./client/components/User/index.tsx":
/*!******************************************!*\
  !*** ./client/components/User/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Habitat_styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Habitat/styled-components */ "./client/components/Habitat/styled-components.ts");
/* harmony import */ var _store_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/user */ "./client/store/user/index.ts");
/* harmony import */ var _store_habitat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/habitat */ "./client/store/habitat/index.ts");
/* harmony import */ var _common_AddTile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/AddTile */ "./client/components/common/AddTile.tsx");
/* harmony import */ var _CreateHabitatModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../CreateHabitatModal */ "./client/components/CreateHabitatModal/index.tsx");
/* harmony import */ var _TileDisplay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../TileDisplay */ "./client/components/TileDisplay/index.tsx");
/* harmony import */ var _SubscribeModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SubscribeModal */ "./client/components/User/SubscribeModal/index.tsx");
/* harmony import */ var _common_Notification__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/Notification */ "./client/components/common/Notification.tsx");
/* harmony import */ var _AcceptSubscriptionsModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AcceptSubscriptionsModal */ "./client/components/User/AcceptSubscriptionsModal/index.tsx");
/* harmony import */ var _get_habitat_tile_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./get-habitat-tile-data */ "./client/components/User/get-habitat-tile-data.tsx");
/* harmony import */ var _Logout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Logout */ "./client/components/Logout/index.tsx");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};














var StyledNotificationAndLogoutContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    justify-content: space-between;\n    width: 125px;\n"], ["\n    display: flex;\n    justify-content: space-between;\n    width: 125px;\n"])));
var UserHabitatsComponent = function (props) {
    var user = props.user, _a = props.habitats, habitats = _a === void 0 ? [] : _a, match = props.match, fetchUser = props.fetchUser, fetchUserSubscribedHabitats = props.fetchUserSubscribedHabitats, subscriptionRequests = props.subscriptionRequests, fetchSubscriptionRequests = props.fetchSubscriptionRequests, acceptSubscriptionRequest = props.acceptSubscriptionRequest, rejectSubscriptionRequest = props.rejectSubscriptionRequest, setSubscriptionRequests = props.setSubscriptionRequests;
    var userId = +match.params.id;
    if (!user) {
        fetchUser(userId);
        return null;
    }
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), addHabitatOpen = _b[0], setAddHabitatOpen = _b[1];
    var _c = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), subscribeToNewHabitatOpen = _c[0], setSubscribeToNewHabitatOpen = _c[1];
    var _d = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), subscriptionRequestModalOpen = _d[0], setSubscriptionRequestModalOpen = _d[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        fetchUserSubscribedHabitats(userId);
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        fetchSubscriptionRequests();
    }, []);
    var getSubscriptionRequestDecisionCallback = function (requestId) { return function () {
        setSubscriptionRequests(subscriptionRequests.filter(function (request) { return request.id !== requestId; }));
    }; };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
        addHabitatOpen
            ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CreateHabitatModal__WEBPACK_IMPORTED_MODULE_7__["CreateHabitat"], { afterCreate: function (createdHabitat) {
                    setAddHabitatOpen(false);
                    props.history.push("/habitats/" + createdHabitat.id);
                }, onCancel: function () { return setAddHabitatOpen(false); } })
            : null,
        subscribeToNewHabitatOpen
            ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SubscribeModal__WEBPACK_IMPORTED_MODULE_9__["default"], { close: function () { return setSubscribeToNewHabitatOpen(false); } })
            : null,
        subscriptionRequestModalOpen
            ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AcceptSubscriptionsModal__WEBPACK_IMPORTED_MODULE_11__["default"], { close: function () { return setSubscriptionRequestModalOpen(false); }, accept: function (request) { return acceptSubscriptionRequest(request, getSubscriptionRequestDecisionCallback(request.id)); }, reject: function (request) { return rejectSubscriptionRequest(request, getSubscriptionRequestDecisionCallback(request.id)); }, requests: subscriptionRequests })) : null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Habitat_styled_components__WEBPACK_IMPORTED_MODULE_3__["Container"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Habitat_styled_components__WEBPACK_IMPORTED_MODULE_3__["TitleAndBackContainer"], null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledNotificationAndLogoutContainer, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Logout__WEBPACK_IMPORTED_MODULE_13__["default"], null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Notification__WEBPACK_IMPORTED_MODULE_10__["default"], { active: !!subscriptionRequests.length, onClick: !!subscriptionRequests.length
                            ? function () { return setSubscriptionRequestModalOpen(true); }
                            : function () { return undefined; } })),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Habitat_styled_components__WEBPACK_IMPORTED_MODULE_3__["Title"], null,
                    "@",
                    user.name)),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_AddTile__WEBPACK_IMPORTED_MODULE_6__["default"], { message: "Create new habitat", onClick: function () { return setAddHabitatOpen(true); } }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_AddTile__WEBPACK_IMPORTED_MODULE_6__["default"], { message: "Subscribe to habitat", onClick: function () { return setSubscribeToNewHabitatOpen(true); } }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TileDisplay__WEBPACK_IMPORTED_MODULE_8__["default"], { tiles: habitats.map(_get_habitat_tile_data__WEBPACK_IMPORTED_MODULE_12__["default"]) }))));
};
var mapStateToProps = function (state) { return ({
    user: _store_user__WEBPACK_IMPORTED_MODULE_4__["selectors"].getUser(state),
    habitats: _store_habitat__WEBPACK_IMPORTED_MODULE_5__["selectors"].habitats(state),
    subscriptionRequests: _store_user__WEBPACK_IMPORTED_MODULE_4__["selectors"].getSubscriptionRequests(state),
}); };
var mapDispatchToProps = function (dispatch) { return ({
    fetchUserSubscribedHabitats: function (userId, callback) {
        return dispatch(_store_habitat__WEBPACK_IMPORTED_MODULE_5__["actions"].fetchUserSubscribedHabitats(userId, callback));
    },
    fetchUser: function (userId) { return dispatch(_store_user__WEBPACK_IMPORTED_MODULE_4__["actions"].fetchUserById(userId)); },
    fetchSubscriptionRequests: function (callback) { return dispatch(_store_user__WEBPACK_IMPORTED_MODULE_4__["actions"].fetchSubscriptionRequests(callback)); },
    acceptSubscriptionRequest: function (request, callback) {
        return dispatch(_store_user__WEBPACK_IMPORTED_MODULE_4__["actions"].acceptSubscriptionRequest(request, callback));
    },
    rejectSubscriptionRequest: function (request, callback) {
        return dispatch(_store_user__WEBPACK_IMPORTED_MODULE_4__["actions"].rejectSubscriptionRequest(request, callback));
    },
    setSubscriptionRequests: function (requests) { return dispatch(_store_user__WEBPACK_IMPORTED_MODULE_4__["actions"].setSubscriptionRequests(requests)); },
}); };
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(UserHabitatsComponent));
var templateObject_1;


/***/ }),

/***/ "./client/components/common/Notification.tsx":
/*!***************************************************!*\
  !*** ./client/components/common/Notification.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style-config */ "./client/components/style-config.ts");


var Active = function (_a) {
    var onClick = _a.onClick;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", style: { cursor: 'pointer' }, onClick: onClick },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", { id: "notifications_24px" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18 15.75V10.75C18 7.68 16.37 5.11 13.5 4.43V3.75C13.5 2.92 12.83 2.25 12 2.25C11.17 2.25 10.5 2.92 10.5 3.75V4.43C7.64003 5.11 6.00003 7.67 6.00003 10.75V15.75L4.00003 17.75V18.75H20V17.75L18 15.75ZM12 21.75C13.1 21.75 14 20.85 14 19.75H10C10 20.85 10.9 21.75 12 21.75ZM8.00003 16.75H16V10.75C16 8.27 14.49 6.25 12 6.25C9.51003 6.25 8.00003 8.27 8.00003 10.75V16.75ZM7.58003 3.83L6.15003 2.4C3.75003 4.23 2.17003 7.05 2.03003 10.25H4.03003C4.18003 7.6 5.54003 5.28 7.58003 3.83ZM21.97 10.25H19.97C19.82 7.6 18.45 5.28 16.43 3.83L17.85 2.4C20.24 4.23 21.82 7.05 21.97 10.25Z", fill: _style_config__WEBPACK_IMPORTED_MODULE_1__["COLORS"].notification, fillOpacity: "0.8" }))));
};
var Inactive = function () {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 24 24", fill: "none" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", { id: "notifications_24px" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { id: "icon/social/notifications_24px", fillRule: "evenodd", clipRule: "evenodd", d: "M18 15.75V10.75C18 7.68 16.37 5.11 13.5 4.43V3.75C13.5 2.92 12.83 2.25 12 2.25C11.17 2.25 10.5 2.92 10.5 3.75V4.43C7.64 5.11 6 7.67 6 10.75V15.75L4 17.75V18.75H20V17.75L18 15.75ZM12 21.75C13.1 21.75 14 20.85 14 19.75H10C10 20.85 10.9 21.75 12 21.75ZM8 16.75H16V10.75C16 8.27 14.49 6.25 12 6.25C9.51 6.25 8 8.27 8 10.75V16.75Z", fill: _style_config__WEBPACK_IMPORTED_MODULE_1__["COLORS"].darkGray, fillOpacity: "1" }))));
};
/* harmony default export */ __webpack_exports__["default"] = (function (props) { return props.active ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Active, { onClick: props.onClick }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Inactive, null); });


/***/ }),

/***/ "./client/config.ts":
/*!**************************!*\
  !*** ./client/config.ts ***!
  \**************************/
/*! exports provided: apiBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiBaseUrl", function() { return apiBaseUrl; });
var apiBaseUrl = "http://localhost:3000";


/***/ }),

/***/ "./common/db-interfaces/types.ts":
/*!***************************************!*\
  !*** ./common/db-interfaces/types.ts ***!
  \***************************************/
/*! exports provided: SUBSCRIPTION_STATUSES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBSCRIPTION_STATUSES", function() { return SUBSCRIPTION_STATUSES; });
var SUBSCRIPTION_STATUSES;
(function (SUBSCRIPTION_STATUSES) {
    SUBSCRIPTION_STATUSES["REJECTED"] = "rejected";
    SUBSCRIPTION_STATUSES["PENDING"] = "pending";
    SUBSCRIPTION_STATUSES["ACTIVE"] = "active";
    SUBSCRIPTION_STATUSES["INACTIVE"] = "inactive";
})(SUBSCRIPTION_STATUSES || (SUBSCRIPTION_STATUSES = {}));


/***/ })

}]);
//# sourceMappingURL=3.bundle.js.map