require('source-map-support/register')
module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_DB__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_volleyball__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_volleyball___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_volleyball__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_index__ = __webpack_require__(7);





const { PORT } = process.env;
const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();

Object(__WEBPACK_IMPORTED_MODULE_1__config_DB__["a" /* connect */])();
app.use(__WEBPACK_IMPORTED_MODULE_2_volleyball___default.a);

app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.json());
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.urlencoded({ extended: true }));

app.use('/api', __WEBPACK_IMPORTED_MODULE_3__api_index__["a" /* restRouter */]);

app.get('/', (req, res) => {
	res.send('salut');
});

app.listen(PORT, () => {
	console.log(`on écoute le port ${PORT}`);
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dotenv_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dotenv_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_dotenv_config__);


const { DB_url } = process.env;

__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Promise = global.Promise;
const connect = () => {
	__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.connect(DB_url, { useNewUrlParser: true });
	console.log('mongo marche');
};
/* harmony export (immutable) */ __webpack_exports__["a"] = connect;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("dotenv/config");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("volleyball");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resources_meal_meal_router__ = __webpack_require__(8);



const restRouter = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();
/* harmony export (immutable) */ __webpack_exports__["a"] = restRouter;


restRouter.use('/meals', __WEBPACK_IMPORTED_MODULE_1__resources_meal_meal_router__["a" /* mealRouter */]);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__meal_meal_controller__ = __webpack_require__(9);



const mealRouter = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();
/* harmony export (immutable) */ __webpack_exports__["a"] = mealRouter;


mealRouter.route("/").post(__WEBPACK_IMPORTED_MODULE_1__meal_meal_controller__["a" /* default */].create);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_joi__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_joi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_joi__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__meal_model__ = __webpack_require__(11);



/* harmony default export */ __webpack_exports__["a"] = ({
    async create(req, res) {
        try {
            const schema = __WEBPACK_IMPORTED_MODULE_0_joi___default.a.object().keys({
                title: __WEBPACK_IMPORTED_MODULE_0_joi___default.a.string().required(),
                text: __WEBPACK_IMPORTED_MODULE_0_joi___default.a.string().required(),
                price: __WEBPACK_IMPORTED_MODULE_0_joi___default.a.number().precision(2).min(0).required()
            });
            const { value, error } = __WEBPACK_IMPORTED_MODULE_0_joi___default.a.validate(req.body, schema);
            if (error && error.details) {
                return res.status(400).json(error);
            }
            console.log('salut Julian');

            console.log('req.body my friend : ' + req.body);
            const meal = await __WEBPACK_IMPORTED_MODULE_1__meal_model__["a" /* default */].create(req.body);
            return res.json(meal);
        } catch (err) {
            console.error(err);
            return res.status(500).send(err);
        }
    }
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("joi");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);

//import mongoosePaginate from 'mongoose-paginate'

const { Schema } = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a;
const mealSchema = new Schema({
	title: {
		type: String,
		required: [true, "meal must have title"]
	},
	text: {
		type: String,
		required: [true, "meal must have text"]
	},
	price: {
		type: Number,
		default: 0,
		min: 0
	}
});

//mealSchema.plugin(mongoosePaginate)

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Meal', mealSchema));

/***/ })
/******/ ]);
//# sourceMappingURL=main.map