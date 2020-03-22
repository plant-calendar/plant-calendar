(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./client/components/Habitat/styled-components.ts":
/*!********************************************************!*\
  !*** ./client/components/Habitat/styled-components.ts ***!
  \********************************************************/
/*! exports provided: Container, Title, AllTilesContainer, SingleTileContainer, TitleAndBackContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllTilesContainer", function() { return AllTilesContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleTileContainer", function() { return SingleTileContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleAndBackContainer", function() { return TitleAndBackContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _style_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style-config */ "./client/components/style-config.ts");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};


var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding-left: 32px;\n  padding-right: 32px;\n"], ["\n  padding-left: 32px;\n  padding-right: 32px;\n"])));
var Title = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 24px;\n  color: ", ";\n"], ["\n  font-size: 24px;\n  color: ", ";\n"])), _style_config__WEBPACK_IMPORTED_MODULE_1__["COLORS"].darkGreen);
var AllTilesContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n"], ["\n"])));
var SingleTileContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin-top: 60px;\n"], ["\n  margin-top: 60px;\n"])));
var TitleAndBackContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    margin-top: 30px;\n    margin-bottom: 30px;\n    display: flex;\n    justify-content: space-between;\n"], ["\n    margin-top: 30px;\n    margin-bottom: 30px;\n    display: flex;\n    justify-content: space-between;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;


/***/ }),

/***/ "./client/components/TileDisplay/avatar.tsx":
/*!**************************************************!*\
  !*** ./client/components/TileDisplay/avatar.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _style_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style-config */ "./client/components/style-config.ts");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};



var AvatarImage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: ", "px;\n"], ["\n  height: ", "px;\n"])), _style_config__WEBPACK_IMPORTED_MODULE_2__["TILE_HEIGHT"] - 30);
var VerticalFlexer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"])));
var Avatar = function (props) {
    var style = "\n    height: " + (_style_config__WEBPACK_IMPORTED_MODULE_2__["TILE_HEIGHT"] - 10) + "px;\n    width: " + (_style_config__WEBPACK_IMPORTED_MODULE_2__["TILE_HEIGHT"] - 10) + "px;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n  ";
    if (props.borderColor) {
        style += "border: 2px solid " + props.borderColor + ";";
    }
    if (props.alert) {
        style += "border: 2px solid " + _style_config__WEBPACK_IMPORTED_MODULE_2__["COLORS"].notification + ";";
    }
    var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["", ""], ["", ""])), style);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(VerticalFlexer, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AvatarImage, { src: props.imageUrl }))));
};
/* harmony default export */ __webpack_exports__["default"] = (Avatar);
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./client/components/TileDisplay/index.tsx":
/*!*************************************************!*\
  !*** ./client/components/TileDisplay/index.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tile */ "./client/components/TileDisplay/tile.tsx");
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



var StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    margin-top: 20px;\n    \n    @media (min-width: 768px) {\n        display: flex;\n        justify-content: space-around;\n    }\n"], ["\n    margin-top: 20px;\n    \n    @media (min-width: 768px) {\n        display: flex;\n        justify-content: space-around;\n    }\n"])));
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledContainer, null, props.tiles.map(function (tile) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tile__WEBPACK_IMPORTED_MODULE_2__["default"], __assign({ key: "tile-" + tile.elementKey }, tile)); })));
});
var templateObject_1;


/***/ }),

/***/ "./client/components/TileDisplay/tag.tsx":
/*!***********************************************!*\
  !*** ./client/components/TileDisplay/tag.tsx ***!
  \***********************************************/
/*! exports provided: Tag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tag", function() { return Tag; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style-config */ "./client/components/style-config.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};



var Tag = function (props) {
    var text = props.text, backgroundColor = props.backgroundColor, color = props.color, elementKey = props.elementKey;
    var TileAlert = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: ", ";\n    margin-right: 5px;\n    color: ", ";\n    font-size: 9px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    padding-left: 3px;\n    padding-right: 3px;\n    opacity: 0.6;\n  "], ["\n    background-color: ", ";\n    margin-right: 5px;\n    color: ", ";\n    font-size: 9px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    padding-left: 3px;\n    padding-right: 3px;\n    opacity: 0.6;\n  "])), backgroundColor || _style_config__WEBPACK_IMPORTED_MODULE_1__["COLORS"].notification, color || _style_config__WEBPACK_IMPORTED_MODULE_1__["COLORS"].white);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TileAlert, { key: elementKey }, text);
};
var templateObject_1;


/***/ }),

/***/ "./client/components/TileDisplay/tile.tsx":
/*!************************************************!*\
  !*** ./client/components/TileDisplay/tile.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./avatar */ "./client/components/TileDisplay/avatar.tsx");
/* harmony import */ var _style_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../style-config */ "./client/components/style-config.ts");
/* harmony import */ var _common_Gear__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/Gear */ "./client/components/common/Gear.tsx");
/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tag */ "./client/components/TileDisplay/tag.tsx");
/* harmony import */ var _wrap_in_wave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wrap-in-wave */ "./client/components/TileDisplay/wrap-in-wave.tsx");
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








var StyledTile = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    float: left;\n    height: ", "px;\n    box-shadow: 2px 2px #e8e8e8;\n\n    width: 45%; \n    @media (max-width: 768px) {\n        width: 100%;\n    }\n    \n    padding-left: 10px;\n    margin-bottom: 5px;\n    position: relative;\n    cursor: pointer;\n"], ["\n    float: left;\n    height: ", "px;\n    box-shadow: 2px 2px #e8e8e8;\n\n    width: 45%; \n    @media (max-width: 768px) {\n        width: 100%;\n    }\n    \n    padding-left: 10px;\n    margin-bottom: 5px;\n    position: relative;\n    cursor: pointer;\n"])), _style_config__WEBPACK_IMPORTED_MODULE_4__["TILE_HEIGHT"]);
var HorizontalFlexer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    padding-top: 3px;\n"], ["\n    display: flex;\n    padding-top: 3px;\n"])));
var AvatarVerticalFlexer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n"], ["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n"])));
var TextVerticalFlexer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin-left: 1vw;\n    \n    width: 40%;\n    @media (max-width: 768px) {\n        width: 27vw;\n    }\n"], ["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin-left: 1vw;\n    \n    width: 40%;\n    @media (max-width: 768px) {\n        width: 27vw;\n    }\n"])));
var GearContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    position: absolute;\n    right: 2%;\n    top: 30%;\n    background: none;\n    border: none;\n    cursor: pointer;\n"], ["\n    position: absolute;\n    right: 2%;\n    top: 30%;\n    background: none;\n    border: none;\n    cursor: pointer;\n"])));
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    font-weight: 600;\n    color: ", ";\n"], ["\n    font-weight: 600;\n    color: ", ";\n"])), _style_config__WEBPACK_IMPORTED_MODULE_4__["COLORS"].darkGreen);
var Details = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    font-size: 14px;\n    color: ", ";\n"], ["\n    font-size: 14px;\n    color: ", ";\n"])), _style_config__WEBPACK_IMPORTED_MODULE_4__["COLORS"].primaryGreen);
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
    var gearId = "gear-" + props.elementKey;
    var gearContainerId = "gear-container-" + props.elementKey;
    // @ts-ignore
    var elementIdsForGear = Object(_common_Gear__WEBPACK_IMPORTED_MODULE_5__["getElementIds"])(props.elementKey).concat(gearContainerId);
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), isHover = _a[0], setIsHover = _a[1];
    var innerContents = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HorizontalFlexer, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AvatarVerticalFlexer, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_avatar__WEBPACK_IMPORTED_MODULE_3__["default"], { imageUrl: props.imageUrl })),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextVerticalFlexer, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, { style: __assign({}, (isHover ? { color: _style_config__WEBPACK_IMPORTED_MODULE_4__["COLORS"].primaryGreen } : {})) }, props.title),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Details, null, props.details || '')),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, (props.tags || []).map(function (tagProps) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tag__WEBPACK_IMPORTED_MODULE_6__["Tag"], __assign({}, tagProps)); })),
        props.hasSettings
            ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GearContainer, { id: gearContainerId, onClick: function (e) {
                    e.preventDefault();
                    // @ts-ignore
                    props.openSettings();
                } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Gear__WEBPACK_IMPORTED_MODULE_5__["Gear"], { color: isHover ? _style_config__WEBPACK_IMPORTED_MODULE_4__["COLORS"].primaryGreen : _style_config__WEBPACK_IMPORTED_MODULE_4__["COLORS"].darkGray, opacity: 1, elementIds: elementIdsForGear }))) : null));
    var contents = innerContents;
    if (props.linkTo) {
        contents = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { style: { textDecoration: 'none' }, to: props.linkTo }, innerContents);
    }
    else if (props.isWaterablePlant) {
        contents = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wrap_in_wave__WEBPACK_IMPORTED_MODULE_7__["default"], { elementIdKey: props.elementKey, onReachEnd: props.onReachEndOfWaveTransition ? props.onReachEndOfWaveTransition : function () { return undefined; }, suppressWaveForNodes: elementIdsForGear }, innerContents));
    }
    var addedStyle = __assign({}, (isHover ? { border: "1px solid " + _style_config__WEBPACK_IMPORTED_MODULE_4__["COLORS"].fadedPrimaryGreen } : {}), (props.containerStyle || {}));
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTile, { onClick: props.onClick || (function () { return undefined; }), onMouseOver: function () { return setIsHover(true); }, onMouseLeave: function () { return setIsHover(false); }, style: addedStyle, key: props.elementKey }, contents));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;


/***/ }),

/***/ "./client/components/TileDisplay/wrap-in-wave.tsx":
/*!********************************************************!*\
  !*** ./client/components/TileDisplay/wrap-in-wave.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};


var overlayPrimaryColor = 'rgba(0, 66, 100, .5)';
var TransitionOverlay = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: absolute;\n    bottom: 0;\n    left:0;\n    width:100%;\n    height:0%;\n    \n    background:\n      radial-gradient(circle at 100% 50%, transparent 20%, rgba(255,255,255,.3) 21%, rgba(255,255,255,.3) 34%, transparent 35%, transparent),\n      radial-gradient(circle at 0% 50%, transparent 20%, rgba(255,255,255,.3) 21%, rgba(255,255,255,.3) 34%, transparent 35%, transparent) 0 -50px;\n      background-color: ", ";\n      background-size:75px 100px;\n"], ["\n    position: absolute;\n    bottom: 0;\n    left:0;\n    width:100%;\n    height:0%;\n    \n    background:\n      radial-gradient(circle at 100% 50%, transparent 20%, rgba(255,255,255,.3) 21%, rgba(255,255,255,.3) 34%, transparent 35%, transparent),\n      radial-gradient(circle at 0% 50%, transparent 20%, rgba(255,255,255,.3) 21%, rgba(255,255,255,.3) 34%, transparent 35%, transparent) 0 -50px;\n      background-color: ", ";\n      background-size:75px 100px;\n"])), overlayPrimaryColor);
var Wave = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  display: none;\n  \n  &:before{\n    content: \"\";\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    background-repeat: repeat-x;\n    height: 10px;\n    background-size: 20px 20px;\n    background-image: radial-gradient(circle at 10px -5px, transparent 12px, ", " 13px);\n  }\n\n"], ["\n  position: relative;\n  display: none;\n  \n  &:before{\n    content: \"\";\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    background-repeat: repeat-x;\n    height: 10px;\n    background-size: 20px 20px;\n    background-image: radial-gradient(circle at 10px -5px, transparent 12px, ", " 13px);\n  }\n\n"])), overlayPrimaryColor);
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
    var children = props.children, onReachEnd = props.onReachEnd, elementIdKey = props.elementIdKey, suppressWaveForNodes = props.suppressWaveForNodes;
    console.log({ suppressWaveForNodes: suppressWaveForNodes });
    var timerId;
    var overlayElementId = "tile-transition-" + elementIdKey;
    var waveElementId = "wave-" + elementIdKey;
    var doTransition = function (currentHeight) {
        if (currentHeight === 0) {
            // @ts-ignore
            document.getElementById(waveElementId).style.display = 'block';
            // @ts-ignore
            document.getElementById(overlayElementId).style.display = 'block';
        }
        if (currentHeight === 100) {
            onReachEnd();
            return;
        }
        var newHeight = currentHeight + 5;
        // @ts-ignore
        document.getElementById(overlayElementId).style.height = newHeight + "%";
        timerId = setTimeout(function () { return doTransition(newHeight); }, 50);
    };
    var onHoldTile = function (e) {
        if (suppressWaveForNodes.includes(e.target.id)) {
            return;
        }
        e.preventDefault();
        doTransition(0);
    };
    var onUnHoldTile = function (e) {
        e.preventDefault();
        // @ts-ignore
        document.getElementById(overlayElementId).style.height = '0%';
        // @ts-ignore
        document.getElementById(waveElementId).style.display = 'none';
        clearTimeout(timerId);
    };
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { onTouchStart: onHoldTile, onTouchEnd: onHoldTile, onMouseDown: onHoldTile, onMouseUp: onUnHoldTile },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TransitionOverlay, { id: overlayElementId },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wave, { id: waveElementId })),
        children));
});
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./client/components/common/AddTile.tsx":
/*!**********************************************!*\
  !*** ./client/components/common/AddTile.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _PlusSign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlusSign */ "./client/components/common/PlusSign.tsx");
/* harmony import */ var _style_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style-config */ "./client/components/style-config.ts");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};




var HorizontalContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: 1px solid ", ";\n  display: flex;\n  color: ", ";\n  font-size: 16px;\n  height: 60px;\n  margin-top: 20px;\n  padding-left: 7%;\n  cursor: pointer;\n  opacity: 0.7;\n  box-shadow: 2px 2px #e8e8e8;\n"], ["\n  border: 1px solid ", ";\n  display: flex;\n  color: ", ";\n  font-size: 16px;\n  height: 60px;\n  margin-top: 20px;\n  padding-left: 7%;\n  cursor: pointer;\n  opacity: 0.7;\n  box-shadow: 2px 2px #e8e8e8;\n"])), _style_config__WEBPACK_IMPORTED_MODULE_3__["COLORS"].lightGray, _style_config__WEBPACK_IMPORTED_MODULE_3__["COLORS"].darkGray);
var VerticalContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"])));
var Message = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-left: 10px;\n"], ["\n  margin-left: 10px;\n"])));
var AddTile = function (props) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_style_config__WEBPACK_IMPORTED_MODULE_3__["COLORS"].lightGray), color = _a[0], setColor = _a[1];
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HorizontalContainer, { onMouseOver: function () { return setColor(_style_config__WEBPACK_IMPORTED_MODULE_3__["COLORS"].primaryGreen); }, onMouseLeave: function () { return setColor(_style_config__WEBPACK_IMPORTED_MODULE_3__["COLORS"].lightGray); }, onClick: props.onClick, style: { borderColor: color, color: color } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(VerticalContainer, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PlusSign__WEBPACK_IMPORTED_MODULE_2__["default"], { color: color, height: 30, width: 30 })),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(VerticalContainer, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Message, null, props.message))));
};
/* harmony default export */ __webpack_exports__["default"] = (AddTile);
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./client/components/common/CloseSign.tsx":
/*!************************************************!*\
  !*** ./client/components/common/CloseSign.tsx ***!
  \************************************************/
/*! exports provided: Close */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Close", function() { return Close; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};


var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    cursor: pointer;\n    background: none;\n    border: none;\n"], ["\n    cursor: pointer;\n    background: none;\n    border: none;\n"])));
var Close = function (_a) {
    var onClick = _a.onClick;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton, { onClick: onClick },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", { width: "28", height: "28", viewBox: "0 0 28 28", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M16.4764 14.3536L27.2929 25.17L25.17 27.2929L14.3536 16.4764L14 16.1229L13.6464 16.4764L2.83 27.2929L0.707106 25.17L11.5236 14.3536L11.8771 14L11.5236 13.6464L0.707107 2.83L2.83 0.707107L13.6464 11.5236L14 11.8771L14.3536 11.5236L25.17 0.707107L27.2929 2.83L16.4764 13.6464L16.1229 14L16.4764 14.3536Z", fill: "#999999", stroke: "black" }))));
};
var templateObject_1;


/***/ }),

/***/ "./client/components/common/CreateModal/display.tsx":
/*!**********************************************************!*\
  !*** ./client/components/common/CreateModal/display.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _CloseSign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CloseSign */ "./client/components/common/CloseSign.tsx");
/* harmony import */ var _SubmitButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SubmitButton */ "./client/components/common/SubmitButton.tsx");
/* harmony import */ var _forms_rendering_render_fields__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../forms/rendering/render-fields */ "./client/forms/rendering/render-fields.tsx");
/* harmony import */ var _arrows__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../arrows */ "./client/components/common/arrows.tsx");
/* harmony import */ var _style_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../style-config */ "./client/components/style-config.ts");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};








var Middle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    height: 80%;\n"], ["\n    display: flex;\n    height: 80%;\n"])));
var LeftArrowContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 33%;\n    justify-content: center;\n"], ["\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 33%;\n    justify-content: center;\n"])));
var RightArrowContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 33%;\n    justify-content: center;\n"], ["\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 33%;\n    justify-content: center;\n"])));
var LeftArrowSubContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    display: flex;\n"], ["\n    display: flex;\n"])));
var RightArrowSubContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    display: flex;\n    justify-content: flex-end;\n"], ["\n    display: flex;\n    justify-content: flex-end;\n"])));
var FieldContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n"], ["\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n"])));
var SubmitButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    display: flex;\n    justify-content: center;\n"], ["\n    display: flex;\n    justify-content: center;\n"])));
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_modal__WEBPACK_IMPORTED_MODULE_1___default.a, { isOpen: true, style: { content: _style_config__WEBPACK_IMPORTED_MODULE_7__["BASE_MODAL_STYLE"].CONTENT } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CloseSign__WEBPACK_IMPORTED_MODULE_3__["Close"], { onClick: props.close }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Middle, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LeftArrowContainer, null, props.canBack
                ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LeftArrowSubContainer, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_arrows__WEBPACK_IMPORTED_MODULE_6__["Arrow"], { onClick: props.onBack, size: "medium", direction: "left" }))) : null),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldContainer, null, (props.fields || [])
                .map(function (_a) {
                var field = _a.field, onChange = _a.onChange, value = _a.value, error = _a.error, clearError = _a.clearError, onLeave = _a.onLeave;
                return Object(_forms_rendering_render_fields__WEBPACK_IMPORTED_MODULE_5__["default"])(field, value, onChange, error, clearError, onLeave);
            })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RightArrowContainer, null, props.canForward
                ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RightArrowSubContainer, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_arrows__WEBPACK_IMPORTED_MODULE_6__["Arrow"], { onClick: props.onForward, size: "medium", direction: "right" }))) : null)),
        props.canSubmit ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubmitButtonContainer, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SubmitButton__WEBPACK_IMPORTED_MODULE_4__["SubmitButton"], { styles: { width: "50%" }, onClick: props.onSubmit, text: props.buttonText }))) : null,
        props.submissionError));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;


/***/ }),

/***/ "./client/components/common/CreateModal/index.tsx":
/*!********************************************************!*\
  !*** ./client/components/common/CreateModal/index.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ "./client/components/common/CreateModal/display.tsx");
/* harmony import */ var _forms_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../forms/validation */ "./client/forms/validation/index.ts");



/* harmony default export */ __webpack_exports__["default"] = (function (props) {
    var stages = props.stages;
    var states = stages.reduce(function (acc, _a) {
        var fields = _a.fields;
        fields.forEach(function (field) {
            var haveInitial = field.initial !== null && field.initial !== undefined;
            var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(haveInitial ? field.initial : ''), value = _a[0], setter = _a[1];
            var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''), error = _b[0], errorSetter = _b[1];
            acc[field.key] = { value: value, setter: setter, error: error, errorSetter: errorSetter };
        });
        return acc;
    }, {});
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''), submissionError = _a[0], setSubmissionError = _a[1];
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), currentStageIdx = _b[0], setCurrentStageIdx = _b[1];
    var onNext = function () {
        setCurrentStageIdx(currentStageIdx + 1);
    };
    var getFieldErrors = function (field) { return Object(_forms_validation__WEBPACK_IMPORTED_MODULE_2__["validateField"])(states[field.key].value, field.validators); };
    var onSubmit = function () {
        var haveError = false;
        var toSave = {};
        for (var _i = 0, stages_1 = stages; _i < stages_1.length; _i++) {
            var stage = stages_1[_i];
            for (var _a = 0, _b = stage.fields; _a < _b.length; _a++) {
                var field = _b[_a];
                var errors = getFieldErrors(field);
                if (errors.length) {
                    states[field.key].errorSetter(errors[0]);
                    haveError = true;
                }
                toSave[field.key] = field.getFinalValue
                    ? field.getFinalValue(states[field.key].value)
                    : states[field.key].value;
            }
        }
        if (haveError) {
            return;
        }
        console.log({ toSave: toSave });
        props.save(toSave, function (saved) { return props.afterSave(saved); });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_display__WEBPACK_IMPORTED_MODULE_1__["default"], { fields: stages[currentStageIdx].fields.map(function (field) {
            var _a = states[field.key], setter = _a.setter, value = _a.value, error = _a.error, errorSetter = _a.errorSetter;
            return {
                field: field,
                onChange: setter,
                value: value,
                error: error,
                onLeave: function () { return errorSetter(getFieldErrors(field)[0] || ''); },
                clearError: function () { return errorSetter(''); },
            };
        }), buttonText: props.submitButtonText, canSubmit: currentStageIdx === stages.length - 1, canBack: currentStageIdx > 0, canForward: currentStageIdx !== stages.length - 1, onBack: function () { return setCurrentStageIdx(currentStageIdx - 1); }, onForward: function () { return setCurrentStageIdx(currentStageIdx + 1); }, onSubmit: onSubmit, submissionError: submissionError, onClickForward: onNext, close: props.close }));
});


/***/ }),

/***/ "./client/components/common/Gear.tsx":
/*!*******************************************!*\
  !*** ./client/components/common/Gear.tsx ***!
  \*******************************************/
/*! exports provided: getElementIds, Gear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementIds", function() { return getElementIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gear", function() { return Gear; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var getElementIds = function (baseElementId) {
    return ["svg-" + baseElementId, "g-" + baseElementId, "path-" + baseElementId];
};
var Gear = function (props) {
    var _a = props.elementIds, svgId = _a[0], gId = _a[1], pathId = _a[2];
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", id: svgId },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", { id: gId },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { id: pathId, fillRule: "evenodd", clipRule: "evenodd", d: "M19.5022 12C19.5022 12.34 19.4722 12.66 19.4321 12.98L21.5421 14.63C21.7322 14.78 21.7821 15.05 21.6621 15.27L19.6621 18.73C19.5721 18.89 19.4021 18.98 19.2322 18.98C19.1721 18.98 19.1122 18.97 19.0521 18.95L16.5621 17.95C16.0421 18.34 15.4822 18.68 14.8722 18.93L14.4922 21.58C14.4622 21.82 14.2522 22 14.0022 22H10.0022C9.7522 22 9.54211 21.82 9.51221 21.58L9.1322 18.93C8.52222 18.68 7.96216 18.35 7.44214 17.95L4.95215 18.95C4.9021 18.97 4.84216 18.98 4.7821 18.98C4.60217 18.98 4.43213 18.89 4.34216 18.73L2.34216 15.27C2.22217 15.05 2.27222 14.78 2.46216 14.63L4.57214 12.98C4.5321 12.66 4.5022 12.33 4.5022 12C4.5022 11.67 4.5321 11.34 4.57214 11.02L2.46216 9.37C2.27222 9.22 2.21216 8.95001 2.34216 8.73001L4.34216 5.26999C4.43213 5.10999 4.60217 5.01999 4.77222 5.01999C4.83215 5.01999 4.89221 5.03 4.95215 5.04999L7.44214 6.04999C7.96216 5.66 8.52222 5.32001 9.1322 5.07001L9.51221 2.42001C9.54211 2.17999 9.7522 2 10.0022 2H14.0022C14.2522 2 14.4622 2.17999 14.4922 2.42001L14.8722 5.07001C15.4822 5.32001 16.0421 5.64999 16.5621 6.04999L19.0521 5.04999C19.1022 5.03 19.1621 5.01999 19.2222 5.01999C19.4021 5.01999 19.5721 5.10999 19.6621 5.26999L21.6621 8.73001C21.7821 8.95001 21.7322 9.22 21.5421 9.37L19.4321 11.02C19.4722 11.34 19.5022 11.66 19.5022 12ZM17.5022 12C17.5022 11.79 17.4922 11.58 17.4521 11.27L17.3121 10.14L18.2021 9.44L19.2722 8.59L18.5721 7.38L17.3021 7.89001L16.2422 8.32001L15.3322 7.62C14.9321 7.32001 14.5322 7.09 14.1022 6.91L13.0421 6.48001L12.8822 5.35001L12.6921 4H11.3021L11.1022 5.35001L10.9421 6.48001L9.8822 6.91C9.47217 7.07999 9.06213 7.32001 8.6322 7.64001L7.73218 8.32001L6.69214 7.89999L5.42212 7.39001L4.72217 8.60001L5.80212 9.44L6.69214 10.14L6.55212 11.27C6.52222 11.57 6.5022 11.8 6.5022 12C6.5022 12.2 6.52222 12.43 6.55212 12.74L6.69214 13.87L5.80212 14.57L4.72217 15.41L5.42212 16.62L6.69214 16.11L7.7522 15.68L8.66211 16.38C9.06213 16.68 9.46216 16.91 9.89221 17.09L10.9521 17.52L11.1122 18.65L11.3021 20H12.7021L12.9022 18.65L13.0621 17.52L14.1222 17.09C14.5322 16.92 14.9421 16.68 15.3722 16.36L16.2722 15.68L17.3121 16.1L18.5822 16.61L19.2822 15.4L18.2021 14.56L17.3121 13.86L17.4521 12.73C17.4822 12.43 17.5022 12.21 17.5022 12ZM12.0022 8C9.79224 8 8.0022 9.79001 8.0022 12C8.0022 14.21 9.79224 16 12.0022 16C14.2122 16 16.0022 14.21 16.0022 12C16.0022 9.79001 14.2122 8 12.0022 8ZM10.0022 12C10.0022 13.1 10.9022 14 12.0022 14C13.1022 14 14.0022 13.1 14.0022 12C14.0022 10.9 13.1022 10 12.0022 10C10.9022 10 10.0022 10.9 10.0022 12Z", fill: props.color || "black", fillOpacity: props.opacity || "0.54" }))));
};


/***/ }),

/***/ "./client/components/common/PlusSign.tsx":
/*!***********************************************!*\
  !*** ./client/components/common/PlusSign.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", { width: props.width, height: props.height, viewBox: "0 0 28 28", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M28 16H16V28H12V16H0V12H12V0H16V12H28V16Z", fill: props.color }))); });


/***/ }),

/***/ "./client/components/common/arrows.tsx":
/*!*********************************************!*\
  !*** ./client/components/common/arrows.tsx ***!
  \*********************************************/
/*! exports provided: Arrow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arrow", function() { return Arrow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _style_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style-config */ "./client/components/style-config.ts");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};



var sizes = {
    small: {
        width: 20,
        height: 40,
    },
    medium: {
        width: 40,
        height: 80,
    },
    large: {
        width: 50,
        height: 100,
    },
};
var StyledSvg = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].svg(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    cursor: pointer;\n"], ["\n    cursor: pointer;\n"])));
var Arrow = function (props) {
    var _a = props.strokeWidth, strokeWidth = _a === void 0 ? 10 : _a, _b = props.strokeColor, strokeColor = _b === void 0 ? _style_config__WEBPACK_IMPORTED_MODULE_2__["COLORS"].darkGray : _b, _c = props.fillColor, fillColor = _c === void 0 ? "none" : _c;
    var pathD = props.direction === 'left' ? "M43 2L3 70.5L43 131" : "M2.5 1.5L42.5 70L2.5 130.5";
    var _d = sizes[props.size], width = _d.width, height = _d.height;
    var _e = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), isHover = _e[0], setIsHover = _e[1];
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { onClick: props.onClick, onMouseOver: function () { return setIsHover(true); }, onMouseLeave: function () { return setIsHover(false); } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledSvg, { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 46 132", fill: fillColor },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: pathD, stroke: isHover ? _style_config__WEBPACK_IMPORTED_MODULE_2__["COLORS"].primaryGreen : strokeColor, strokeWidth: strokeWidth }))));
};
var templateObject_1;


/***/ })

}]);
//# sourceMappingURL=1.bundle.js.map