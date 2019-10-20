"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
var path = require('path');
var express = require('express');
var morgan = require('morgan');
var compression = require('compression');
// const db = require('./db')
var PORT = process.env.PORT || 8080;
var app = express();
module.exports = app;
var createApp = function () {
    // logging middleware
    app.use(morgan('dev'));
    // body parsing middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    // compression middleware
    app.use(compression());
    // app.use('/auth', require('./auth'))
    // app.use('/api', require('./api'));
    app.use(express.static(path.join(__dirname, '..', 'public')));
    app.use(function (req, res, next) {
        if (path.extname(req.path).length) {
            console.log('this is the req path that is giving us problems: ', req.path);
            var err = new Error('Not found');
            // @ts-ignore
            err.status = 404;
            next(err);
        }
        else {
            next();
        }
    });
    app.use('*', function (req, res) {
        res.sendFile(path.join(__dirname, '..', 'public/index.html'));
    });
    app.use(function (err, req, res, next) {
        console.error(err);
        console.error(err.stack);
        res.status(err.status || 500).send(err.message || 'Internal server error.');
    });
};
var startListening = function () {
    // start listening (and create a 'server' object representing our server)
    var server = app.listen(PORT, function () {
        return console.log("Mixing it up on port " + PORT);
    });
};
function bootApp() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, createApp()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, startListening()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
bootApp();
//# sourceMappingURL=main.js.map