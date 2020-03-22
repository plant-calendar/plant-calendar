(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./client/components/User/make-profile.tsx":
/*!*************************************************!*\
  !*** ./client/components/User/make-profile.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _forms_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../forms/validation */ "./client/forms/validation/index.ts");
/* harmony import */ var _store_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/user */ "./client/store/user/index.ts");
/* harmony import */ var _style_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style-config */ "./client/components/style-config.ts");
/* harmony import */ var _common_SubmitButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/SubmitButton */ "./client/components/common/SubmitButton.tsx");
/* harmony import */ var _common_GrowthBackground__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/GrowthBackground */ "./client/components/common/GrowthBackground/index.tsx");
/* harmony import */ var _forms_rendering_render_fields__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../forms/rendering/render-fields */ "./client/forms/rendering/render-fields.tsx");
/* harmony import */ var _forms_interfaces__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../forms/interfaces */ "./client/forms/interfaces.ts");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};











var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n"], ["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n"])));
var SecondContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    justify-content: center;\n    color: ", ";\n"], ["\n    display: flex;\n    justify-content: center;\n    color: ", ";\n"])), _style_config__WEBPACK_IMPORTED_MODULE_5__["COLORS"].darkGreen);
var TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: flex;\n    justify-content: center;\n    padding: 20px;\n"], ["\n    display: flex;\n    justify-content: center;\n    padding: 20px;\n"])));
var InputContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    display: flex;\n    justify-content: center;\n    padding: 10px;\n"], ["\n    display: flex;\n    justify-content: center;\n    padding: 10px;\n"])));
var HorizontalFlexer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    display: flex;\n    justify-content: center;\n"], ["\n    display: flex;\n    justify-content: center;\n"])));
var VerticalFlexer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n"], ["\n    display: flex;\n    flex-direction: column;\n"])));
var MAX_ALLOWED_LENGTH = 20;
var MIN_ALLOWED_LENGTH = 3;
var MakeProfile = function (props) {
    var allUserNames = props.allUserNames, fetchAllNames = props.fetchAllNames, updateName = props.updateName, history = props.history;
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''), name = _a[0], setName = _a[1];
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''), nameError = _b[0], setNameError = _b[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        fetchAllNames();
    }, []);
    var _c = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''), submissionErrorMessage = _c[0], setSubmissionErrorMessage = _c[1];
    var onSubmit = function () {
        var errorMessages = Object(_forms_validation__WEBPACK_IMPORTED_MODULE_3__["getFormErrorMessages"])([
            {
                label: 'Name',
                validators: [_forms_validation__WEBPACK_IMPORTED_MODULE_3__["validatorGetters"].isNotNil(), _forms_validation__WEBPACK_IMPORTED_MODULE_3__["validatorGetters"].isAtLeastLength(3)],
                key: 'name',
            },
        ], { name: name });
        if (errorMessages && errorMessages.length) {
            setSubmissionErrorMessage("There was a problem with your submission: \n" + errorMessages.join('\n'));
            return;
        }
        if (allUserNames.includes(name)) {
            setSubmissionErrorMessage("That name is already taken.  Try another?");
            return;
        }
        updateName(name, function (user) {
            history.push("/users/" + user.id + "/habitats");
        });
    };
    var onChangeInput = function (input) {
        setName(input);
        if (input.length > MAX_ALLOWED_LENGTH) {
            setNameError('too long!');
            return;
        }
        var uniqueInvalidCharacters = {};
        for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
            var char = input_1[_i];
            if (char === ' ') {
                setNameError('spaces not allowed');
                return;
            }
            if (!_forms_validation__WEBPACK_IMPORTED_MODULE_3__["ALLOWED_CHARACTERS"].includes(char)) {
                uniqueInvalidCharacters[char] = true;
            }
        }
        if (Object.keys(uniqueInvalidCharacters).length) {
            setNameError("invalid characters: \"" + Object.keys(uniqueInvalidCharacters).join('') + "\"");
            return;
        }
        setNameError('');
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_GrowthBackground__WEBPACK_IMPORTED_MODULE_7__["default"], { keyBase: "make-profile", yStart: 0.25 }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SecondContainer, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(VerticalFlexer, null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextContainer, null, "Looks like this is your first time here. What would you like to be called?"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputContainer, null, Object(_forms_rendering_render_fields__WEBPACK_IMPORTED_MODULE_8__["default"])({
                    type: _forms_interfaces__WEBPACK_IMPORTED_MODULE_9__["FieldTypes"].INPUT,
                    label: '',
                    key: 'make-profile-name',
                    validators: [],
                    lowerCase: true,
                }, name, onChangeInput, nameError, function () { return setNameError(''); }, function () { return undefined; })),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HorizontalFlexer, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_SubmitButton__WEBPACK_IMPORTED_MODULE_6__["SubmitButton"], { onClick: onSubmit, text: "Get started!", disabled: nameError.length > 0 || name.length < MIN_ALLOWED_LENGTH })),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HorizontalFlexer, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, submissionErrorMessage))))));
};
var mapStateToProps = function (state) { return ({
    allUserNames: _store_user__WEBPACK_IMPORTED_MODULE_4__["selectors"].getAllUserNames(state),
}); };
var mapDispatchToProps = function (dispatch) { return ({
    fetchAllNames: function () { return dispatch(_store_user__WEBPACK_IMPORTED_MODULE_4__["actions"].fetchAllNames()); },
    updateName: function (newName, callback) { return dispatch(_store_user__WEBPACK_IMPORTED_MODULE_4__["actions"].updateName(newName, callback)); },
}); };
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(MakeProfile));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;


/***/ }),

/***/ "./client/components/common/GrowthBackground/b-spline.tsx":
/*!****************************************************************!*\
  !*** ./client/components/common/GrowthBackground/b-spline.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
// adapted from https://github.com/Tagussan/BSpline
var BSpline = function (points, degree, copy) {
    if (copy) {
        this.points = [];
        for (var i = 0; i < points.length; i++) {
            this.points.push(points[i]);
        }
    }
    else {
        this.points = points;
    }
    this.degree = degree;
    this.dimension = points[0].length;
    if (degree == 2) {
        this.baseFunc = this.basisDeg2;
        this.baseFuncRangeInt = 2;
    }
    else if (degree == 3) {
        this.baseFunc = this.basisDeg3;
        this.baseFuncRangeInt = 2;
    }
    else if (degree == 4) {
        this.baseFunc = this.basisDeg4;
        this.baseFuncRangeInt = 3;
    }
    else if (degree == 5) {
        this.baseFunc = this.basisDeg5;
        this.baseFuncRangeInt = 3;
    }
};
BSpline.prototype.seqAt = function (dim) {
    var points = this.points;
    var margin = this.degree + 1;
    return function (n) {
        if (n < margin) {
            return points[0][dim];
        }
        else if (points.length + margin <= n) {
            return points[points.length - 1][dim];
        }
        else {
            return points[n - margin][dim];
        }
    };
};
BSpline.prototype.basisDeg2 = function (x) {
    if (-0.5 <= x && x < 0.5) {
        return 0.75 - x * x;
    }
    else if (0.5 <= x && x <= 1.5) {
        return 1.125 + (-1.5 + x / 2.0) * x;
    }
    else if (-1.5 <= x && x < -0.5) {
        return 1.125 + (1.5 + x / 2.0) * x;
    }
    else {
        return 0;
    }
};
BSpline.prototype.basisDeg3 = function (x) {
    if (-1 <= x && x < 0) {
        return 2.0 / 3.0 + (-1.0 - x / 2.0) * x * x;
    }
    else if (1 <= x && x <= 2) {
        return 4.0 / 3.0 + x * (-2.0 + (1.0 - x / 6.0) * x);
    }
    else if (-2 <= x && x < -1) {
        return 4.0 / 3.0 + x * (2.0 + (1.0 + x / 6.0) * x);
    }
    else if (0 <= x && x < 1) {
        return 2.0 / 3.0 + (-1.0 + x / 2.0) * x * x;
    }
    else {
        return 0;
    }
};
BSpline.prototype.basisDeg4 = function (x) {
    if (-1.5 <= x && x < -0.5) {
        return 55.0 / 96.0 + x * (-(5.0 / 24.0) + x * (-(5.0 / 4.0) + (-(5.0 / 6.0) - x / 6.0) * x));
    }
    else if (0.5 <= x && x < 1.5) {
        return 55.0 / 96.0 + x * (5.0 / 24.0 + x * (-(5.0 / 4.0) + (5.0 / 6.0 - x / 6.0) * x));
    }
    else if (1.5 <= x && x <= 2.5) {
        return 625.0 / 384.0 + x * (-(125.0 / 48.0) + x * (25.0 / 16.0 + (-(5.0 / 12.0) + x / 24.0) * x));
    }
    else if (-2.5 <= x && x <= -1.5) {
        return 625.0 / 384.0 + x * (125.0 / 48.0 + x * (25.0 / 16.0 + (5.0 / 12.0 + x / 24.0) * x));
    }
    else if (-1.5 <= x && x < 1.5) {
        return 115.0 / 192.0 + x * x * (-(5.0 / 8.0) + x * x / 4.0);
    }
    else {
        return 0;
    }
};
BSpline.prototype.basisDeg5 = function (x) {
    if (-2 <= x && x < -1) {
        return 17.0 / 40.0 + x * (-(5.0 / 8.0) + x * (-(7.0 / 4.0) + x * (-(5.0 / 4.0) + (-(3.0 / 8.0) - x / 24.0) * x)));
    }
    else if (0 <= x && x < 1) {
        return 11.0 / 20.0 + x * x * (-(1.0 / 2.0) + (1.0 / 4.0 - x / 12.0) * x * x);
    }
    else if (2 <= x && x <= 3) {
        return 81.0 / 40.0 + x * (-(27.0 / 8.0) + x * (9.0 / 4.0 + x * (-(3.0 / 4.0) + (1.0 / 8.0 - x / 120.0) * x)));
    }
    else if (-3 <= x && x < -2) {
        return 81.0 / 40.0 + x * (27.0 / 8.0 + x * (9.0 / 4.0 + x * (3.0 / 4.0 + (1.0 / 8.0 + x / 120.0) * x)));
    }
    else if (1 <= x && x < 2) {
        return 17.0 / 40.0 + x * (5.0 / 8.0 + x * (-(7.0 / 4.0) + x * (5.0 / 4.0 + (-(3.0 / 8.0) + x / 24.0) * x)));
    }
    else if (-1 <= x && x < 0) {
        return 11.0 / 20.0 + x * x * (-(1.0 / 2.0) + (1.0 / 4.0 + x / 12.0) * x * x);
    }
    else {
        return 0;
    }
};
BSpline.prototype.getInterpol = function (seq, t) {
    var f = this.baseFunc;
    var rangeInt = this.baseFuncRangeInt;
    var tInt = Math.floor(t);
    var result = 0;
    for (var i = tInt - rangeInt; i <= tInt + rangeInt; i++) {
        result += seq(i) * f(t - i);
    }
    return result;
};
BSpline.prototype.calcAt = function (t) {
    t = t * ((this.degree + 1) * 2 + this.points.length); //t must be in [0,1]
    if (this.dimension == 2) {
        return [this.getInterpol(this.seqAt(0), t), this.getInterpol(this.seqAt(1), t)];
    }
    else if (this.dimension == 3) {
        return [this.getInterpol(this.seqAt(0), t), this.getInterpol(this.seqAt(1), t), this.getInterpol(this.seqAt(2), t)];
    }
    else {
        var res = [];
        for (var i = 0; i < this.dimension; i++) {
            // @ts-ignore
            res.push(this.getInterpol(this.seqAt(i), t));
        }
        return res;
    }
};
/* harmony default export */ __webpack_exports__["default"] = (BSpline);


/***/ }),

/***/ "./client/components/common/GrowthBackground/draw.tsx":
/*!************************************************************!*\
  !*** ./client/components/common/GrowthBackground/draw.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _b_spline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./b-spline */ "./client/components/common/GrowthBackground/b-spline.tsx");

/* harmony default export */ __webpack_exports__["default"] = (function (configs, containerWidth, containerHeight, yStartPercent) {
    var degree = 2;
    var yStart = containerHeight * yStartPercent;
    var pts = [[0, yStart]];
    var start = null;
    var leaf = document.getElementById('spline-leaf');
    var rose = null;
    var leafSize = 15;
    var flowerSize = 0.5;
    var yFactor = 40;
    var xFactor = containerWidth < 770 ? 20 : 30;
    configs.forEach(function (_a) {
        var context = _a.context, canvas = _a.canvas;
        context.globalCompositeOperation = 'destination-over';
        context.lineWidth = 1;
        window.requestAnimationFrame(getStep(context, canvas));
    });
    console.log({ containerWidth: containerWidth });
    function getStep(ctx, canv) {
        return function step(timestamp) {
            if (!start)
                start = timestamp;
            var lastPoint = pts[pts.length - 1];
            var xx = Math.random() * xFactor;
            var yy = Math.random() * yFactor;
            putPoint(ctx, canv, lastPoint[0] + xx, yStart + yy, timestamp > 2000);
            console.log('working on growth background');
            if (lastPoint[0] < containerWidth) {
                window.requestAnimationFrame(step);
            }
        };
    }
    function putPoint(ctx, canv, x, y, shouldDrawFlowers) {
        pts.push([x, y]);
        drawSpline(ctx, canv, shouldDrawFlowers);
    }
    function drawSpline(ctx, canv, shouldDrawFlowers) {
        ctx.clearRect(0, 0, canv.width, canv.height);
        ctx.lineWidth += 0.002;
        leafSize += 0.1;
        //
        // if(pts.length == 0) {
        //     return;
        // }
        // tslint:disable-next-line:prefer-for-of
        for (var i = 0; i < pts.length; i++) {
            // ctx.beginPath();
            //
            // if (berriesAt[i]) {
            //     if (shouldDrawFlowers) {
            //         drawImage(ctx, rose, pts[i][0], pts[i][1], flowerSize, flowerSize);
            //         // ctx.arc(pts[i][0],pts[i][1],flowerSize,0,Math.PI*2,false);
            //         ctx.fill();
            //         flowerSize += 0.04;
            //     }
            // } else if (i % 2 === 0) {
            //     const angle = pts[i][1] < yStart + (yFactor / 2) ? 0 : 3;
            //     drawImage(ctx, leaf, pts[i][0], pts[i][1], leafSize, leafSize, angle);
            //     ctx.fill();
            // }
            var angle = pts[i][1] < yStart + (yFactor / 2) ? 0 : 3;
            drawImage(ctx, leaf, pts[i][0], pts[i][1], leafSize, leafSize, angle);
            ctx.fill();
            ctx.closePath();
        }
        var spline = new _b_spline__WEBPACK_IMPORTED_MODULE_0__["default"](pts, degree, true);
        ctx.beginPath();
        var x;
        var y;
        var oldx = spline.calcAt(0)[0];
        var oldy = spline.calcAt(0)[1];
        for (var t = 0; t <= 1; t += 0.0001) {
            ctx.moveTo(oldx, oldy);
            var interpol = spline.calcAt(t);
            x = interpol[0];
            y = interpol[1];
            ctx.lineTo(x, y);
            oldx = x;
            oldy = y;
        }
        ctx.stroke();
        ctx.closePath();
    }
});
function drawImage(ctx, image, x, y, width, height, angleInRadians) {
    if (angleInRadians === void 0) { angleInRadians = 0; }
    ctx.translate(x, y);
    ctx.rotate(angleInRadians);
    ctx.drawImage(image, -width / 2, -height / 2, width, height);
    ctx.rotate(-angleInRadians);
    ctx.translate(-x, -y);
}


/***/ }),

/***/ "./client/components/common/GrowthBackground/index.tsx":
/*!*************************************************************!*\
  !*** ./client/components/common/GrowthBackground/index.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _draw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./draw */ "./client/components/common/GrowthBackground/draw.tsx");
/* harmony import */ var _style_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../style-config */ "./client/components/style-config.ts");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};




var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    z-index: -1000;\n"], ["\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    z-index: -1000;\n"])));
var CONTAINER_BASE_ID = 'growth-container-id';
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
    var containerId = CONTAINER_BASE_ID + "-" + props.keyBase;
    // the percent down the canvas to start the vine: for example, 0.4 will start the vine
    // 40% of the way down the canvas
    var yStart = (props.yStart || props.yStart === 0) ? props.yStart : 0.4;
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var container = document.getElementById(containerId);
        var configs = [];
        for (var i = 0; i < 1; i += 1) {
            var canv = document.createElement('CANVAS');
            canv.width = window.innerWidth;
            canv.height = window.innerHeight;
            canv.style.zIndex = '-10000';
            canv.style.position = 'absolute';
            container.appendChild(canv);
            var context = canv.getContext('2d');
            context.strokeStyle = _style_config__WEBPACK_IMPORTED_MODULE_3__["COLORS"].darkGreen;
            configs.push({ canvas: canv, context: context });
        }
        Object(_draw__WEBPACK_IMPORTED_MODULE_2__["default"])(configs, window.innerWidth, window.innerHeight, yStart);
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, { id: containerId }));
});
var templateObject_1;


/***/ })

}]);
//# sourceMappingURL=7.bundle.js.map