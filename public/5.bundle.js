(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./client/components/CreatePlantModal/index.tsx":
/*!******************************************************!*\
  !*** ./client/components/CreatePlantModal/index.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _forms_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../forms/validation */ "./client/forms/validation/index.ts");
/* harmony import */ var _common_CreateModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/CreateModal */ "./client/components/common/CreateModal/index.tsx");
/* harmony import */ var _forms_interfaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../forms/interfaces */ "./client/forms/interfaces.ts");
/* harmony import */ var _store_plant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/plant */ "./client/store/plant/index.ts");
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






var timeOptions = [
    { value: 2, label: 'two days' },
    { value: 3, label: 'three days' },
    { value: 4, label: 'four days' },
    { value: 5, label: 'five days' },
    { value: 6, label: 'six days' },
    { value: 7, label: 'seven days' },
    { value: 8, label: 'eight days' },
    { value: 9, label: 'nine days' },
    { value: 10, label: 'ten days' },
    { value: 14, label: 'two weeks' },
    { value: 21, label: 'three weeks' },
    { value: 30, label: 'one month' },
];
var waterIntervalOptions = [{ value: 1, label: 'everyday' }].concat(timeOptions.map(function (option) { return ({ value: option.value, label: "every " + option.label }); }));
var lastWateredOptions = [
    { value: 0, label: 'today' },
    { value: 1, label: 'yesterday' },
].concat(timeOptions.map(function (option) { return ({ value: option.value, label: option.label + " ago" }); }));
var millisecondsInADay = 1000 * 60 * 60 * 24;
var convertDaysAgoToDate = function (daysAgo) {
    return new Date(new Date().getTime() - (daysAgo * millisecondsInADay)).toUTCString();
};
var getStages = function (augmentedPlant) {
    var _a = (augmentedPlant || {}), _b = _a.plant, plant = _b === void 0 ? {
        // if there is no plant (i.e. we are creating oe for the first time, set default values)
        name: '',
        imageUrl: '/plant-avatars/plant1.png',
        waterInterval: waterIntervalOptions[0].value,
    } : _b, _c = _a.subscribed, subscribed = _c === void 0 ? true : _c;
    return [
        {
            fields: [
                {
                    key: 'subscribed',
                    label: 'do you want to subscribe to this plant?',
                    type: _forms_interfaces__WEBPACK_IMPORTED_MODULE_4__["FieldTypes"].TOGGLE,
                    validators: [],
                    initial: subscribed,
                },
                {
                    key: 'name',
                    label: "what is this plant's name?",
                    validators: [
                        _forms_validation__WEBPACK_IMPORTED_MODULE_2__["validatorGetters"].isNotNil(),
                        _forms_validation__WEBPACK_IMPORTED_MODULE_2__["validatorGetters"].isAtLeastLength(3),
                        _forms_validation__WEBPACK_IMPORTED_MODULE_2__["validatorGetters"].isAtMostLength(20),
                        _forms_validation__WEBPACK_IMPORTED_MODULE_2__["validatorGetters"].isOfGenericAllowedCharacters(),
                    ],
                    type: _forms_interfaces__WEBPACK_IMPORTED_MODULE_4__["FieldTypes"].INPUT,
                    initial: plant.name,
                    lowerCase: true,
                },
            ],
        },
        {
            fields: [
                {
                    key: 'waterInterval',
                    label: 'how often should you water it?',
                    validators: [],
                    type: _forms_interfaces__WEBPACK_IMPORTED_MODULE_4__["FieldTypes"].DROPDOWN,
                    options: waterIntervalOptions,
                    initial: plant.waterInterval,
                }
            ].concat((augmentedPlant ? [] : [{
                    key: 'lastWatered',
                    label: 'how long ago did you last water it?',
                    validators: [],
                    type: _forms_interfaces__WEBPACK_IMPORTED_MODULE_4__["FieldTypes"].DROPDOWN,
                    options: lastWateredOptions,
                    initial: 0,
                }]), [
                {
                    key: 'imageUrl',
                    label: 'pick an avatar for this plant.',
                    validators: [],
                    type: _forms_interfaces__WEBPACK_IMPORTED_MODULE_4__["FieldTypes"].AVATAR,
                    imageUrls: [
                        '/plant-avatars/plant1.png',
                        '/plant-avatars/plant2.png',
                        '/plant-avatars/plant3.png',
                        '/plant-avatars/plant4.png',
                        '/plant-avatars/plant5.png',
                        '/plant-avatars/plant6.png',
                        '/plant-avatars/plant7.png',
                        '/plant-avatars/plant8.png',
                    ],
                    initial: plant.imageUrl,
                },
            ]),
        },
    ];
};
var Component = function (props) {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_CreateModal__WEBPACK_IMPORTED_MODULE_3__["default"], { stages: getStages(props.augmentedPlant), close: props.onCancel, save: props.isCreate
            ? function (toCreate, callback) {
                props.create(__assign({}, toCreate, { lastWatered: convertDaysAgoToDate(toCreate.lastWatered), waterInterval: +toCreate.waterInterval }), callback);
            } : function (updates, callback) {
            // if this is an update, we know the augmentedPlant prop will exist
            var existingPlant = props.augmentedPlant.plant;
            props.update(__assign({}, updates, { id: existingPlant.id }), callback);
        }, afterSave: props.afterSave, submitButtonText: props.isCreate ? 'create' : 'update' }));
};
var mapDispatchToProps = function (dispatch, ownProps) { return ({
    create: function (plantData, callback) { return dispatch(_store_plant__WEBPACK_IMPORTED_MODULE_5__["actions"].createOne(__assign({}, plantData, { habitatId: ownProps.habitatId }), callback)); },
    update: function (plantData, callback) { return dispatch(_store_plant__WEBPACK_IMPORTED_MODULE_5__["actions"].updateOne(plantData, callback)); },
}); };
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, mapDispatchToProps)(Component));


/***/ }),

/***/ "./client/components/Habitat/get-plant-tile-data.tsx":
/*!***********************************************************!*\
  !*** ./client/components/Habitat/get-plant-tile-data.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_data_accessors_plant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/data-accessors/plant */ "./common/data-accessors/plant.ts");
/* harmony import */ var _style_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style-config */ "./client/components/style-config.ts");


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
    var plant = props.plant, subscribed = props.subscribed, daysOverdueForWater = props.daysOverdueForWater, onReachEndOfWaveTransition = props.onReachEndOfWaveTransition;
    var tags = [];
    var details = '';
    var title = plant.name;
    var hasSettings = true;
    var isWaterablePlant = true;
    var imageUrl = plant.imageUrl;
    var containerStyle = {};
    if (props.justWatered) {
        title = 'Watered!';
        hasSettings = false;
        isWaterablePlant = false;
        imageUrl = '/check_circle.png';
        containerStyle = { border: "1px solid " + _style_config__WEBPACK_IMPORTED_MODULE_1__["COLORS"].fadedPrimaryGreen };
    }
    else {
        tags = (daysOverdueForWater > 0
            ? [
                {
                    text: 'needs water',
                    backgroundColor: _style_config__WEBPACK_IMPORTED_MODULE_1__["COLORS"].notification,
                    color: _style_config__WEBPACK_IMPORTED_MODULE_1__["COLORS"].white,
                    elementKey: plant.id + "-needs-water",
                }
            ]
            : []).concat((subscribed
            ? []
            : [{
                    text: 'not subscribed',
                    backgroundColor: _style_config__WEBPACK_IMPORTED_MODULE_1__["COLORS"].darkGray,
                    color: _style_config__WEBPACK_IMPORTED_MODULE_1__["COLORS"].white,
                    elementKey: plant.id + "-not-subscribed",
                }]));
        var numOfDaysSinceWatered = _common_data_accessors_plant__WEBPACK_IMPORTED_MODULE_0__["plantDataAccessors"].daysSinceWatered(plant);
        var lastWateredVerbage = numOfDaysSinceWatered === 0
            ? "today"
            : numOfDaysSinceWatered + " days ago";
        details = "Last watered " + lastWateredVerbage;
    }
    return {
        elementKey: plant.id,
        title: title,
        details: details,
        imageUrl: imageUrl,
        isWaterablePlant: isWaterablePlant,
        hasSettings: hasSettings,
        openSettings: props.openSettings,
        tags: tags,
        onReachEndOfWaveTransition: onReachEndOfWaveTransition,
        containerStyle: containerStyle,
    };
});


/***/ }),

/***/ "./client/components/Habitat/index.tsx":
/*!*********************************************!*\
  !*** ./client/components/Habitat/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_habitat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/habitat */ "./client/store/habitat/index.ts");
/* harmony import */ var _store_plant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/plant */ "./client/store/plant/index.ts");
/* harmony import */ var _TileDisplay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../TileDisplay */ "./client/components/TileDisplay/index.tsx");
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styled-components */ "./client/components/Habitat/styled-components.ts");
/* harmony import */ var _common_AddTile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/AddTile */ "./client/components/common/AddTile.tsx");
/* harmony import */ var _get_plant_tile_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./get-plant-tile-data */ "./client/components/Habitat/get-plant-tile-data.tsx");
/* harmony import */ var _CreatePlantModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../CreatePlantModal */ "./client/components/CreatePlantModal/index.tsx");
/* harmony import */ var _common_back_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/back-button */ "./client/components/common/back-button.tsx");
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










var Habitat = function (props) {
    var habitatId = +props.match.params.id;
    var name = props.name, plantData = props.plantData, fetchHabitat = props.fetchHabitat, waterPlantsByIds = props.waterPlantsByIds;
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        fetchHabitat(habitatId);
    }, []);
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), createPlantOpen = _a[0], setCreatePlantOpen = _a[1];
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null), plantWithSettingsOpen = _b[0], setPlantWithSettingsOpen = _b[1];
    var _c = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), justWateredPlantId = _c[0], setJustWateredPlantId = _c[1];
    var onCreatePlant = function () {
        setCreatePlantOpen(false);
        props.fetchHabitat(habitatId);
    };
    var onUpdatePlant = function () {
        setPlantWithSettingsOpen(null);
        props.fetchHabitat(habitatId);
    };
    var waterPlant = function (plantId) {
        waterPlantsByIds([plantId], function () {
            setJustWateredPlantId(plantId);
            setTimeout(function () {
                setJustWateredPlantId(0);
                props.fetchHabitat(habitatId);
            }, 2000);
        });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
        createPlantOpen
            ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CreatePlantModal__WEBPACK_IMPORTED_MODULE_8__["default"], { isCreate: true, habitatId: habitatId, afterSave: onCreatePlant, onCancel: function () { return setCreatePlantOpen(false); } })
            : null,
        plantWithSettingsOpen
            ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CreatePlantModal__WEBPACK_IMPORTED_MODULE_8__["default"], { isCreate: false, habitatId: habitatId, augmentedPlant: props.plantData.find(function (augmentedPlant) { return augmentedPlant.plant.id === plantWithSettingsOpen; }), afterSave: onUpdatePlant, onCancel: function () { return setPlantWithSettingsOpen(null); } })
            : null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_components__WEBPACK_IMPORTED_MODULE_5__["Container"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_components__WEBPACK_IMPORTED_MODULE_5__["TitleAndBackContainer"], null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_back_button__WEBPACK_IMPORTED_MODULE_9__["default"], { onClick: function () { return props.history.goBack(); } }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_components__WEBPACK_IMPORTED_MODULE_5__["Title"], null,
                    "@",
                    name)),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_AddTile__WEBPACK_IMPORTED_MODULE_6__["default"], { message: "Add a plant", onClick: function () { return setCreatePlantOpen(true); } }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TileDisplay__WEBPACK_IMPORTED_MODULE_4__["default"], { tiles: plantData.map(function (augmentedPlant) { return Object(_get_plant_tile_data__WEBPACK_IMPORTED_MODULE_7__["default"])(__assign({}, augmentedPlant, { 
                    // @ts-ignore
                    openSettings: function () { return setPlantWithSettingsOpen(augmentedPlant.plant.id); }, justWatered: augmentedPlant.plant.id === justWateredPlantId, onReachEndOfWaveTransition: function () { return waterPlant(augmentedPlant.plant.id); } })); }) }))));
};
var mapStateToProps = function (state, ownProps) { return ({
    name: _store_habitat__WEBPACK_IMPORTED_MODULE_2__["selectors"].habitatById(state, ownProps).name,
    plantData: _store_habitat__WEBPACK_IMPORTED_MODULE_2__["selectors"].getPlantDataForDisplayInHabitat(state, ownProps),
}); };
var mapDispatchToProps = function (dispatch) { return ({
    fetchHabitat: function (habitatId) { return dispatch(_store_habitat__WEBPACK_IMPORTED_MODULE_2__["actions"].fetchHabitatsByIds([habitatId])); },
    waterPlantsByIds: function (plantIds, callback) { return dispatch(_store_plant__WEBPACK_IMPORTED_MODULE_3__["actions"].waterByIds(plantIds, callback)); },
}); };
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Habitat));


/***/ }),

/***/ "./client/components/common/back-button.tsx":
/*!**************************************************!*\
  !*** ./client/components/common/back-button.tsx ***!
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



var StyledSvg = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].svg(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    cursor: pointer;\n"], ["\n    cursor: pointer;\n"])));
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), isHover = _a[0], setIsHover = _a[1];
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledSvg, { onMouseOver: function () { return setIsHover(true); }, onMouseLeave: function () { return setIsHover(false); }, onClick: props.onClick, xmlns: "http://www.w3.org/2000/svg", width: "45", height: "45", viewBox: "0 0 25 25", fill: "none" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", { id: "arrow_back_24px" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { id: "icon/navigation/arrow_back_24px", d: "M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z", fill: isHover ? _style_config__WEBPACK_IMPORTED_MODULE_2__["COLORS"].primaryGreen : _style_config__WEBPACK_IMPORTED_MODULE_2__["COLORS"].darkGray, fillOpacity: "1" }))));
});
var templateObject_1;


/***/ }),

/***/ "./client/store/plant/actions.ts":
/*!***************************************!*\
  !*** ./client/store/plant/actions.ts ***!
  \***************************************/
/*! exports provided: waterByIds, createOne, updateOne */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waterByIds", function() { return waterByIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOne", function() { return createOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateOne", function() { return updateOne; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./client/store/plant/types.ts");

function waterByIds(plantIds, callback) {
    return { type: _types__WEBPACK_IMPORTED_MODULE_0__["default"].PLANTS_WATER_BY_IDS_REQUESTED, ids: plantIds, callback: callback };
}
function createOne(plant, callback) {
    return { type: _types__WEBPACK_IMPORTED_MODULE_0__["default"].PLANTS_CREATE_ONE_REQUESTED, plant: plant, callback: callback };
}
function updateOne(plant, callback) {
    return { type: _types__WEBPACK_IMPORTED_MODULE_0__["default"].PLANTS_UPDATE_ONE_REQUESTED, plant: plant, callback: callback };
}


/***/ }),

/***/ "./client/store/plant/index.ts":
/*!*************************************!*\
  !*** ./client/store/plant/index.ts ***!
  \*************************************/
/*! exports provided: actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./client/store/plant/actions.ts");

var actions = { waterByIds: _actions__WEBPACK_IMPORTED_MODULE_0__["waterByIds"], createOne: _actions__WEBPACK_IMPORTED_MODULE_0__["createOne"], updateOne: _actions__WEBPACK_IMPORTED_MODULE_0__["updateOne"] };



/***/ }),

/***/ "./client/store/plant/types.ts":
/*!*************************************!*\
  !*** ./client/store/plant/types.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var types;
(function (types) {
    types["PLANTS_WATER_BY_IDS_REQUESTED"] = "PLANTS/WATER_BY_IDS_REQUESTED";
    types["PLANTS_CREATE_ONE_REQUESTED"] = "PLANTS/CREATE_ONE_REQUESTED";
    types["PLANTS_UPDATE_ONE_REQUESTED"] = "PLANTS/UPDATE_ONE_REQUESTED";
})(types || (types = {}));
/* harmony default export */ __webpack_exports__["default"] = (types);


/***/ })

}]);
//# sourceMappingURL=5.bundle.js.map