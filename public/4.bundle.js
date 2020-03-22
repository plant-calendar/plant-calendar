(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./client/api/habitat.ts":
/*!*******************************!*\
  !*** ./client/api/habitat.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = undefined;

/* harmony default export */ __webpack_exports__["default"] = (function (client) { return ({
    getByIds: {
        request: function (habitatIds) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, client.query({
                        query: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n                query GetHabitats($habitatIds: [Int]!) {\n                  getHabitats(id: $habitatIds) {\n                    id\n                    name\n                    imageUrl\n                    plants {\n                      id\n                      name\n                      habitatId\n                      imageUrl\n                      lastWatered\n                      waterInterval\n                      createdAt\n                      updatedAt\n                    }\n                    plantSubscriptions\n                  }\n                }\n            "], ["\n                query GetHabitats($habitatIds: [Int]!) {\n                  getHabitats(id: $habitatIds) {\n                    id\n                    name\n                    imageUrl\n                    plants {\n                      id\n                      name\n                      habitatId\n                      imageUrl\n                      lastWatered\n                      waterInterval\n                      createdAt\n                      updatedAt\n                    }\n                    plantSubscriptions\n                  }\n                }\n            "]))),
                        variables: { habitatIds: habitatIds },
                        fetchPolicy: 'no-cache',
                    })];
            });
        }); },
        response: function (res) { return res.data.getHabitats; },
    },
    getUserSubscribed: {
        request: function (userId) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, client.query({
                        query: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n                query GetUserSubscribedHabitats($id: Int!) {\n                    getUserSubscribedHabitats(id: $id) {\n                        id\n                        name\n                        imageUrl\n                        plants {\n                            id\n                            name\n                            habitatId\n                            imageUrl\n                            lastWatered\n                            waterInterval\n                            createdAt\n                            updatedAt\n                        }\n                        plantSubscriptions\n                        subscription {\n                            id\n                            userId\n                            habitatId\n                            status\n                        }\n                    }\n                }\n            "], ["\n                query GetUserSubscribedHabitats($id: Int!) {\n                    getUserSubscribedHabitats(id: $id) {\n                        id\n                        name\n                        imageUrl\n                        plants {\n                            id\n                            name\n                            habitatId\n                            imageUrl\n                            lastWatered\n                            waterInterval\n                            createdAt\n                            updatedAt\n                        }\n                        plantSubscriptions\n                        subscription {\n                            id\n                            userId\n                            habitatId\n                            status\n                        }\n                    }\n                }\n            "]))),
                        variables: { id: userId },
                        fetchPolicy: 'no-cache',
                    })];
            });
        }); },
        response: function (res) { return res.data.getUserSubscribedHabitats; },
    },
    createOne: {
        request: function (_a) {
            var name = _a.name, imageUrl = _a.imageUrl;
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    return [2 /*return*/, client.mutate({
                            mutation: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"])(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n                mutation CreateHabitat($name: String!, $imageUrl: String!) {\n                    createHabitat(name: $name, imageUrl: $imageUrl) {\n                        id\n                        name\n                        imageUrl\n                        plants {\n                          id\n                          name\n                          habitatId\n                          imageUrl\n                          lastWatered\n                          waterInterval\n                          createdAt\n                          updatedAt\n                        }\n                        plantSubscriptions\n                    }\n                }\n            "], ["\n                mutation CreateHabitat($name: String!, $imageUrl: String!) {\n                    createHabitat(name: $name, imageUrl: $imageUrl) {\n                        id\n                        name\n                        imageUrl\n                        plants {\n                          id\n                          name\n                          habitatId\n                          imageUrl\n                          lastWatered\n                          waterInterval\n                          createdAt\n                          updatedAt\n                        }\n                        plantSubscriptions\n                    }\n                }\n            "]))),
                            variables: { name: name, imageUrl: imageUrl },
                        })];
                });
            });
        },
        response: function (res) { return res.data.createHabitat; },
    },
    nameSearch: {
        request: function (searchedString) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, client.query({
                        query: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"])(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            query HabitatSearch($name: String!) {\n                searchHabitats(name: $name) {\n                    id\n                    name\n                    imageUrl\n                }\n            }\n        "], ["\n            query HabitatSearch($name: String!) {\n                searchHabitats(name: $name) {\n                    id\n                    name\n                    imageUrl\n                }\n            }\n        "]))),
                        variables: { name: searchedString },
                        fetchPolicy: 'no-cache',
                    })];
            });
        }); },
        response: function (res) { return res.data.searchHabitats; },
    },
    requestSubscription: {
        request: function (habitatId) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, client.mutate({
                        mutation: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"])(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n                mutation RequestSubscriptionToHabitat($habitatId: Int!) {\n                    requestSubscriptionToHabitat(habitatId: $habitatId)\n                }\n            "], ["\n                mutation RequestSubscriptionToHabitat($habitatId: Int!) {\n                    requestSubscriptionToHabitat(habitatId: $habitatId)\n                }\n            "]))),
                        variables: { habitatId: habitatId },
                    })];
            });
        }); },
        response: function (res) { return res.data.requestSubscriptionToHabitat; },
    },
}); });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;


/***/ }),

/***/ "./client/api/index.ts":
/*!*****************************!*\
  !*** ./client/api/index.ts ***!
  \*****************************/
/*! exports provided: apiHabitat, apiPlant, apiUser, haveCorrectUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiHabitat", function() { return apiHabitat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiPlant", function() { return apiPlant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiUser", function() { return apiUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "haveCorrectUser", function() { return haveCorrectUser; });
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./client/api/user.ts");
/* harmony import */ var _habitat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./habitat */ "./client/api/habitat.ts");
/* harmony import */ var _plant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plant */ "./client/api/plant.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = undefined;





// by default uses the /graphql endpoint on the server you are on
// can optionally provide uri param if that is not the endpoint you want
var client = new apollo_boost__WEBPACK_IMPORTED_MODULE_0__["default"]({});
var apiHabitat = Object(_habitat__WEBPACK_IMPORTED_MODULE_2__["default"])(client);
var apiPlant = Object(_plant__WEBPACK_IMPORTED_MODULE_3__["default"])(client);
var apiUser = Object(_user__WEBPACK_IMPORTED_MODULE_1__["default"])(client);
var haveCorrectUser = function (url) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('/auth/have-correct-user', { params: { url: url } })];
}); }); };


/***/ }),

/***/ "./client/api/plant.ts":
/*!*****************************!*\
  !*** ./client/api/plant.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = undefined;

/* harmony default export */ __webpack_exports__["default"] = (function (client) { return ({
    waterByIds: {
        request: function (ids) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, client.mutate({
                        mutation: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n                mutation WaterPlantsByIds($ids: [Int]!) {\n                    waterPlantsByIds(ids: $ids)\n                }\n            "], ["\n                mutation WaterPlantsByIds($ids: [Int]!) {\n                    waterPlantsByIds(ids: $ids)\n                }\n            "]))),
                        variables: { ids: ids },
                    })];
            });
        }); },
        response: function (res) { return res.data.waterPlantsByIds; },
    },
    createOne: {
        request: function (plant) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, client.mutate({
                        mutation: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n                mutation CreatePlant($name: String!, $lastWatered: String!, $waterInterval: Int!, $habitatId: Int!, $imageUrl: String!, $subscribed: Boolean!) {\n                  createPlant(name: $name, lastWatered: $lastWatered, waterInterval: $waterInterval, habitatId: $habitatId, imageUrl: $imageUrl, subscribed: $subscribed) {\n                    id\n                    name\n                    habitatId\n                    lastWatered\n                    waterInterval\n                    imageUrl\n                  }\n                }\n              "], ["\n                mutation CreatePlant($name: String!, $lastWatered: String!, $waterInterval: Int!, $habitatId: Int!, $imageUrl: String!, $subscribed: Boolean!) {\n                  createPlant(name: $name, lastWatered: $lastWatered, waterInterval: $waterInterval, habitatId: $habitatId, imageUrl: $imageUrl, subscribed: $subscribed) {\n                    id\n                    name\n                    habitatId\n                    lastWatered\n                    waterInterval\n                    imageUrl\n                  }\n                }\n              "]))),
                        variables: {
                            name: plant.name,
                            lastWatered: plant.lastWatered,
                            waterInterval: plant.waterInterval,
                            habitatId: plant.habitatId,
                            imageUrl: plant.imageUrl,
                            // @ts-ignore - we have added this property on create and update only
                            subscribed: plant.subscribed,
                        },
                    })];
            });
        }); },
        response: function (res) { return res.data.createPlant; },
    },
    updateOne: {
        request: function (plant) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, client.mutate({
                        mutation: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"])(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n                mutation UpdatePlant($id: Int!, $name: String, $lastWatered: String, $waterInterval: Int, $habitatId: Int, $imageUrl: String, $subscribed: Boolean) {\n                  updatePlant(id: $id, name: $name, lastWatered: $lastWatered, waterInterval: $waterInterval, habitatId: $habitatId, imageUrl: $imageUrl, subscribed: $subscribed) {\n                    id\n                    name\n                    habitatId\n                    lastWatered\n                    waterInterval\n                    imageUrl\n                  }\n                }\n              "], ["\n                mutation UpdatePlant($id: Int!, $name: String, $lastWatered: String, $waterInterval: Int, $habitatId: Int, $imageUrl: String, $subscribed: Boolean) {\n                  updatePlant(id: $id, name: $name, lastWatered: $lastWatered, waterInterval: $waterInterval, habitatId: $habitatId, imageUrl: $imageUrl, subscribed: $subscribed) {\n                    id\n                    name\n                    habitatId\n                    lastWatered\n                    waterInterval\n                    imageUrl\n                  }\n                }\n              "]))),
                        variables: {
                            id: plant.id,
                            name: plant.name,
                            lastWatered: plant.lastWatered,
                            waterInterval: plant.waterInterval,
                            habitatId: plant.habitatId,
                            imageUrl: plant.imageUrl,
                            // @ts-ignore - we have added this property on create and update only
                            subscribed: plant.subscribed,
                        },
                    })];
            });
        }); },
        response: function (res) { return res.data.updatePlant; },
    },
}); });
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./client/api/user.ts":
/*!****************************!*\
  !*** ./client/api/user.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = undefined;

/* harmony default export */ __webpack_exports__["default"] = (function (client) { return ({
    getById: {
        request: function (id) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, client.query({
                        query: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n                query GetUserById($id: Int!) {\n                    getUserById(id: $id) {\n                        id\n                        name\n                    }\n                }\n            "], ["\n                query GetUserById($id: Int!) {\n                    getUserById(id: $id) {\n                        id\n                        name\n                    }\n                }\n            "]))),
                        variables: { id: id },
                        fetchPolicy: 'no-cache',
                    })];
            });
        }); },
        response: function (res) { return res.data.getUserById; },
    },
    updateName: {
        request: function (name) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, client.mutate({
                        mutation: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n                mutation UpdateUserName($name: String!) {\n                    updateUserName(name: $name) {\n                        id\n                        name\n                    }\n                }\n            "], ["\n                mutation UpdateUserName($name: String!) {\n                    updateUserName(name: $name) {\n                        id\n                        name\n                    }\n                }\n            "]))),
                        variables: { name: name },
                    })];
            });
        }); },
        response: function (res) { return res.data.updateUserName; },
    },
    getAllNames: {
        request: function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, client.query({
                        query: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"])(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n                query GetAllNames {\n                    getAllNames\n                }\n           "], ["\n                query GetAllNames {\n                    getAllNames\n                }\n           "]))),
                        fetchPolicy: 'no-cache',
                    })];
            });
        }); },
        response: function (res) { return res.data.getAllNames; },
    },
    getSubscriptionRequests: {
        request: function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, client.query({
                        query: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"])(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n                query GetSubscriptionRequests {\n                  getSubscriptionRequests {\n                    id\n                    userId\n                    userName\n                    habitatId\n                    habitatName\n                    status\n                  }\n                }\n            "], ["\n                query GetSubscriptionRequests {\n                  getSubscriptionRequests {\n                    id\n                    userId\n                    userName\n                    habitatId\n                    habitatName\n                    status\n                  }\n                }\n            "]))),
                        fetchPolicy: 'no-cache',
                    })];
            });
        }); },
        response: function (res) { return res.data.getSubscriptionRequests; },
    },
    acceptSubscriptionRequest: {
        request: function (subscriptionId) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, client.mutate({
                        mutation: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"])(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n                mutation AcceptHabitatSubscriptionRequest($subscriptionId: Int!) {\n                    acceptHabitatSubscriptionRequest(subscriptionId: $subscriptionId)\n                }\n            "], ["\n                mutation AcceptHabitatSubscriptionRequest($subscriptionId: Int!) {\n                    acceptHabitatSubscriptionRequest(subscriptionId: $subscriptionId)\n                }\n            "]))),
                        variables: { subscriptionId: subscriptionId },
                    })];
            });
        }); },
        response: function (res) { return res.data.acceptHabitatSubscriptionRequest; },
    },
    rejectSubscriptionRequest: {
        request: function (subscriptionId) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, client.mutate({
                        mutation: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"])(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n                mutation RejectHabitatSubscriptionRequest($subscriptionId: Int!) {\n                    rejectHabitatSubscriptionRequest(subscriptionId: $subscriptionId)\n                }\n            "], ["\n                mutation RejectHabitatSubscriptionRequest($subscriptionId: Int!) {\n                    rejectHabitatSubscriptionRequest(subscriptionId: $subscriptionId)\n                }\n            "]))),
                        variables: { subscriptionId: subscriptionId },
                    })];
            });
        }); },
        response: function (res) { return res.data.acceptHabitatSubscriptionRequest; },
    },
}); });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;


/***/ }),

/***/ "./client/store/auth/sagas.ts":
/*!************************************!*\
  !*** ./client/store/auth/sagas.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api */ "./client/api/index.ts");
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redux-saga/core/effects */ "./node_modules/@redux-saga/core/dist/redux-saga-effects.esm.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./client/store/auth/actions.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./client/store/auth/types.ts");
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




function getHaveCorrectUser(_a) {
    var data;
    var url = _a.url;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_api__WEBPACK_IMPORTED_MODULE_0__["haveCorrectUser"], url)];
            case 1:
                data = (_b.sent()).data;
                return [4 /*yield*/, Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["setHaveCorrectUser"])(data))];
            case 2:
                _b.sent();
                return [2 /*return*/];
        }
    });
}
/* harmony default export */ __webpack_exports__["default"] = ([
    // @ts-ignore
    Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_types__WEBPACK_IMPORTED_MODULE_3__["default"].GET_HAVE_USER_REQUESTED, getHaveCorrectUser),
]);


/***/ }),

/***/ "./client/store/habitat/sagas.ts":
/*!***************************************!*\
  !*** ./client/store/habitat/sagas.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api */ "./client/api/index.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./client/store/habitat/actions.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./client/store/habitat/types.ts");
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




function fetchHabitatsByIds(_a) {
    var response;
    var habitatIds = _a.habitatIds;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_api__WEBPACK_IMPORTED_MODULE_1__["apiHabitat"].getByIds.request, habitatIds)];
            case 1:
                response = _b.sent();
                return [4 /*yield*/, Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["setHabitats"])(_api__WEBPACK_IMPORTED_MODULE_1__["apiHabitat"].getByIds.response(response)))];
            case 2:
                _b.sent();
                return [2 /*return*/];
        }
    });
}
function fetchUserSubscribedHabitats(_a) {
    var response, habitats;
    var userId = _a.userId, callback = _a.callback;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_api__WEBPACK_IMPORTED_MODULE_1__["apiHabitat"].getUserSubscribed.request, userId)];
            case 1:
                response = _b.sent();
                habitats = _api__WEBPACK_IMPORTED_MODULE_1__["apiHabitat"].getUserSubscribed.response(response);
                return [4 /*yield*/, Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["setHabitats"])(habitats))];
            case 2:
                _b.sent();
                callback(habitats);
                return [2 /*return*/];
        }
    });
}
function createOne(_a) {
    var res, created;
    var habitat = _a.habitat, callback = _a.callback;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_api__WEBPACK_IMPORTED_MODULE_1__["apiHabitat"].createOne.request, habitat)];
            case 1:
                res = _b.sent();
                return [4 /*yield*/, Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["createOneSucceeded"])())];
            case 2:
                _b.sent();
                created = _api__WEBPACK_IMPORTED_MODULE_1__["apiHabitat"].createOne.response(res);
                callback(created);
                return [2 /*return*/];
        }
    });
}
function searchHabitats(_a) {
    var res, found;
    var name = _a.name, callback = _a.callback;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_api__WEBPACK_IMPORTED_MODULE_1__["apiHabitat"].nameSearch.request, name)];
            case 1:
                res = _b.sent();
                found = _api__WEBPACK_IMPORTED_MODULE_1__["apiHabitat"].nameSearch.response(res);
                return [4 /*yield*/, Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["setQueriedHabitats"])(found))];
            case 2:
                _b.sent();
                callback(found);
                return [2 /*return*/];
        }
    });
}
function requestSubscription(_a) {
    var habitatId = _a.habitatId, callback = _a.callback;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                console.log({ habitatIdInSaga: habitatId });
                return [4 /*yield*/, Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_api__WEBPACK_IMPORTED_MODULE_1__["apiHabitat"].requestSubscription.request, habitatId)];
            case 1:
                _b.sent();
                callback();
                return [2 /*return*/];
        }
    });
}
/* harmony default export */ __webpack_exports__["default"] = ([
    // @ts-ignore
    Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_types__WEBPACK_IMPORTED_MODULE_3__["default"].HABITATS_FETCH_BY_IDS_REQUESTED, fetchHabitatsByIds),
    // @ts-ignore
    Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_types__WEBPACK_IMPORTED_MODULE_3__["default"].HABITATS_FETCH_USER_SUBSCRIBED_REQUESTED, fetchUserSubscribedHabitats),
    // @ts-ignore
    Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_types__WEBPACK_IMPORTED_MODULE_3__["default"].HABITATS_CREATE_ONE_REQUESTED, createOne),
    // @ts-ignore
    Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_types__WEBPACK_IMPORTED_MODULE_3__["default"].HABITATS_SEARCH_REQUESTED, searchHabitats),
    // @ts-ignore
    Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_types__WEBPACK_IMPORTED_MODULE_3__["default"].HABITATS_REQUEST_SUBSCRIPTION_REQUESTED, requestSubscription),
]);


/***/ }),

/***/ "./client/store/plant/sagas.ts":
/*!*************************************!*\
  !*** ./client/store/plant/sagas.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/core/effects */ "./node_modules/@redux-saga/core/dist/redux-saga-effects.esm.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api */ "./client/api/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./client/store/plant/types.ts");
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



function waterByIds(_a) {
    var response;
    var ids = _a.ids, _b = _a.callback, callback = _b === void 0 ? function (_) { return undefined; } : _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_api__WEBPACK_IMPORTED_MODULE_1__["apiPlant"].waterByIds.request, ids)];
            case 1:
                response = _c.sent();
                callback(_api__WEBPACK_IMPORTED_MODULE_1__["apiPlant"].waterByIds.response(response));
                return [2 /*return*/];
        }
    });
}
function createOne(_a) {
    var response;
    var plant = _a.plant, _b = _a.callback, callback = _b === void 0 ? function (_) { return undefined; } : _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_api__WEBPACK_IMPORTED_MODULE_1__["apiPlant"].createOne.request, plant)];
            case 1:
                response = _c.sent();
                callback(_api__WEBPACK_IMPORTED_MODULE_1__["apiPlant"].createOne.response(response));
                return [2 /*return*/];
        }
    });
}
function updateOne(_a) {
    var response;
    var plant = _a.plant, _b = _a.callback, callback = _b === void 0 ? function (_) { return undefined; } : _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_api__WEBPACK_IMPORTED_MODULE_1__["apiPlant"].updateOne.request, plant)];
            case 1:
                response = _c.sent();
                callback(_api__WEBPACK_IMPORTED_MODULE_1__["apiPlant"].updateOne.response(response));
                return [2 /*return*/];
        }
    });
}
/* harmony default export */ __webpack_exports__["default"] = ([
    // @ts-ignore
    Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_types__WEBPACK_IMPORTED_MODULE_2__["default"].PLANTS_WATER_BY_IDS_REQUESTED, waterByIds),
    // @ts-ignore
    Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_types__WEBPACK_IMPORTED_MODULE_2__["default"].PLANTS_CREATE_ONE_REQUESTED, createOne),
    // @ts-ignore
    Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_types__WEBPACK_IMPORTED_MODULE_2__["default"].PLANTS_UPDATE_ONE_REQUESTED, updateOne),
]);


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


/***/ }),

/***/ "./client/store/saga.ts":
/*!******************************!*\
  !*** ./client/store/saga.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _habitat_sagas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./habitat/sagas */ "./client/store/habitat/sagas.ts");
/* harmony import */ var _plant_sagas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plant/sagas */ "./client/store/plant/sagas.ts");
/* harmony import */ var _user_sagas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/sagas */ "./client/store/user/sagas.ts");
/* harmony import */ var _auth_sagas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/sagas */ "./client/store/auth/sagas.ts");
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





function rootSaga() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: 
            // Promise.all([
            //     import('./habitat/sagas'),
            //     import('./plant/sagas'),
            //     import('./user/sagas'),
            //     import('./auth/sagas'),
            // ]).then((a, b, c, d) => {
            //   console.log({ a, b, c, d});
            // });
            return [4 /*yield*/, Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])(_plant_sagas__WEBPACK_IMPORTED_MODULE_2__["default"].concat(_habitat_sagas__WEBPACK_IMPORTED_MODULE_1__["default"], _user_sagas__WEBPACK_IMPORTED_MODULE_3__["default"], _auth_sagas__WEBPACK_IMPORTED_MODULE_4__["default"]))];
            case 1:
                // Promise.all([
                //     import('./habitat/sagas'),
                //     import('./plant/sagas'),
                //     import('./user/sagas'),
                //     import('./auth/sagas'),
                // ]).then((a, b, c, d) => {
                //   console.log({ a, b, c, d});
                // });
                _a.sent();
                return [2 /*return*/];
        }
    });
}


/***/ }),

/***/ "./client/store/user/sagas.ts":
/*!************************************!*\
  !*** ./client/store/user/sagas.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/core/effects */ "./node_modules/@redux-saga/core/dist/redux-saga-effects.esm.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./client/store/user/types.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api */ "./client/api/index.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./client/store/user/actions.ts");
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




function fetchById(_a) {
    var response, user;
    var id = _a.id, callback = _a.callback;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_api__WEBPACK_IMPORTED_MODULE_2__["apiUser"].getById.request, id)];
            case 1:
                response = _b.sent();
                user = _api__WEBPACK_IMPORTED_MODULE_2__["apiUser"].getById.response(response);
                return [4 /*yield*/, Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["setUser"])(user))];
            case 2:
                _b.sent();
                callback(user);
                return [2 /*return*/];
        }
    });
}
function fetchAllNames() {
    var response, names;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_api__WEBPACK_IMPORTED_MODULE_2__["apiUser"].getAllNames.request)];
            case 1:
                response = _a.sent();
                names = _api__WEBPACK_IMPORTED_MODULE_2__["apiUser"].getAllNames.response(response);
                return [4 /*yield*/, Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["setAllNames"])(names))];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
function updateName(_a) {
    var response, updatedUser;
    var name = _a.name, callback = _a.callback;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_api__WEBPACK_IMPORTED_MODULE_2__["apiUser"].updateName.request, name)];
            case 1:
                response = _b.sent();
                updatedUser = _api__WEBPACK_IMPORTED_MODULE_2__["apiUser"].updateName.response(response);
                return [4 /*yield*/, Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["setUser"])(updatedUser))];
            case 2:
                _b.sent();
                callback(updatedUser);
                return [2 /*return*/];
        }
    });
}
function fetchSubscriptionRequests(_a) {
    var response, requests;
    var callback = _a.callback;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_api__WEBPACK_IMPORTED_MODULE_2__["apiUser"].getSubscriptionRequests.request)];
            case 1:
                response = _b.sent();
                requests = _api__WEBPACK_IMPORTED_MODULE_2__["apiUser"].getSubscriptionRequests.response(response);
                return [4 /*yield*/, Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["setSubscriptionRequests"])(requests))];
            case 2:
                _b.sent();
                callback(requests);
                return [2 /*return*/];
        }
    });
}
function acceptSubscriptionRequest(_a) {
    var response, resData;
    var request = _a.request, callback = _a.callback;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_api__WEBPACK_IMPORTED_MODULE_2__["apiUser"].acceptSubscriptionRequest.request, request.id)];
            case 1:
                response = _b.sent();
                resData = _api__WEBPACK_IMPORTED_MODULE_2__["apiUser"].acceptSubscriptionRequest.response(response);
                callback(resData);
                return [2 /*return*/];
        }
    });
}
function rejectSubscriptionRequest(_a) {
    var response, resData;
    var request = _a.request, callback = _a.callback;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_api__WEBPACK_IMPORTED_MODULE_2__["apiUser"].rejectSubscriptionRequest.request, request.id)];
            case 1:
                response = _b.sent();
                resData = _api__WEBPACK_IMPORTED_MODULE_2__["apiUser"].rejectSubscriptionRequest.response(response);
                callback(resData);
                return [2 /*return*/];
        }
    });
}
/* harmony default export */ __webpack_exports__["default"] = ([
    // @ts-ignore
    Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_types__WEBPACK_IMPORTED_MODULE_1__["default"].USER_FETCH_BY_ID_REQUESTED, fetchById),
    // @ts-ignore
    Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_types__WEBPACK_IMPORTED_MODULE_1__["default"].USER_FETCH_ALL_NAMES_REQUESTED, fetchAllNames),
    // @ts-ignore
    Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_types__WEBPACK_IMPORTED_MODULE_1__["default"].USER_UPDATE_NAME_REQUESTED, updateName),
    // @ts-ignore
    Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_types__WEBPACK_IMPORTED_MODULE_1__["default"].USER_FETCH_SUBSCRIPTION_REQUESTS_REQUESTED, fetchSubscriptionRequests),
    // @ts-ignore
    Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_types__WEBPACK_IMPORTED_MODULE_1__["default"].USER_ACCEPT_SUBSCRIPTION_REQUEST_REQUESTED, acceptSubscriptionRequest),
    // @ts-ignore
    Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_types__WEBPACK_IMPORTED_MODULE_1__["default"].USER_REJECT_SUBSCRIPTION_REQUEST_REQUESTED, rejectSubscriptionRequest),
]);


/***/ })

}]);
//# sourceMappingURL=4.bundle.js.map