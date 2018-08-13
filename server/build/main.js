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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
/***/ (function(module, exports) {

module.exports = require("joi");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_DB__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_volleyball__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_volleyball___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_volleyball__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_index__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_cors__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_cors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_cors__);






const { PORT } = process.env;
const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();

Object(__WEBPACK_IMPORTED_MODULE_1__config_DB__["a" /* connect */])();
app.use(__WEBPACK_IMPORTED_MODULE_4_cors___default()());
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dotenv_config__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dotenv_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_dotenv_config__);


const { DB_url } = process.env;

__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Promise = global.Promise;
const connect = () => {
	__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.connect(DB_url, { useNewUrlParser: true });
	console.log('mongo marche');
};
/* harmony export (immutable) */ __webpack_exports__["a"] = connect;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("dotenv/config");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("volleyball");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resources_meal_meal_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resources_user_user_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resources_order_order_router__ = __webpack_require__(15);





const restRouter = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();
/* harmony export (immutable) */ __webpack_exports__["a"] = restRouter;


restRouter.use('/meals', __WEBPACK_IMPORTED_MODULE_1__resources_meal_meal_router__["a" /* mealRouter */]);
restRouter.use('/users', __WEBPACK_IMPORTED_MODULE_2__resources_user_user_router__["a" /* userRouter */]);
restRouter.use('/orders', __WEBPACK_IMPORTED_MODULE_3__resources_order_order_router__["a" /* orderRouter */]);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__meal_controller__ = __webpack_require__(10);



const mealRouter = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();
/* harmony export (immutable) */ __webpack_exports__["a"] = mealRouter;


mealRouter.route("/").post(__WEBPACK_IMPORTED_MODULE_1__meal_controller__["a" /* default */].create).get(__WEBPACK_IMPORTED_MODULE_1__meal_controller__["a" /* default */].findAll);
mealRouter.route("/:id").get(__WEBPACK_IMPORTED_MODULE_1__meal_controller__["a" /* default */].findOne).put(__WEBPACK_IMPORTED_MODULE_1__meal_controller__["a" /* default */].update).delete(__WEBPACK_IMPORTED_MODULE_1__meal_controller__["a" /* default */].delete);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_joi__ = __webpack_require__(2);
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

            const meal = await __WEBPACK_IMPORTED_MODULE_1__meal_model__["a" /* default */].create(value);
            return res.json(meal);
        } catch (err) {
            console.error(err);
            return res.status(500).send(err);
        }
    },

    async findAll(req, res) {
        try {
            const { page, perPage } = req.query;
            const options = {
                page: parseInt(page, 10) || 1,
                limit: parseInt(perPage, 10) || 10
            };
            const meals = await __WEBPACK_IMPORTED_MODULE_1__meal_model__["a" /* default */].find({});
            res.json(meals);
        } catch (e) {
            console.error(e);
            return res.status(500).send(e);
        }
    },

    async findOne(req, res) {
        try {
            const { id } = req.params;
            const meal = await __WEBPACK_IMPORTED_MODULE_1__meal_model__["a" /* default */].findById(id);
            if (!meal) {
                return res.status(404).json({ err: 'could not find meal' });
            }
            return res.json(meal);
        } catch (err) {
            console.error(err);
            return res.status(500).send(err);
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const schema = __WEBPACK_IMPORTED_MODULE_0_joi___default.a.object().keys({
                title: __WEBPACK_IMPORTED_MODULE_0_joi___default.a.string().required(),
                text: __WEBPACK_IMPORTED_MODULE_0_joi___default.a.string().required(),
                price: __WEBPACK_IMPORTED_MODULE_0_joi___default.a.number().precision(2).min(0).required()
            });
            const { value, error } = __WEBPACK_IMPORTED_MODULE_0_joi___default.a.validate(req.body, schema);
            if (error && error.details) {
                return res.status(400).json(error);
            }
            const meal = await __WEBPACK_IMPORTED_MODULE_1__meal_model__["a" /* default */].findOneAndUpdate({ _id: id }, value, { new: true });
            if (!meal) {
                return res.status(404).json({ err: 'could not find meal' });
            }
            return res.json(meal);
        } catch (err) {
            console.error(err);
            return res.status(500).send(err);
        }
    },
    async delete(req, res) {
        try {
            const { id } = req.params;
            const meal = await __WEBPACK_IMPORTED_MODULE_1__meal_model__["a" /* default */].findOneAndRemove({ _id: id });
            if (!meal) {
                return res.status(404).json({ err: 'could not found meal' });
            }
            res.json(meal);
        } catch (e) {
            console.error(e);
            return res.status(500).send(e);
        }
    }
});

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

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_controller__ = __webpack_require__(13);



const userRouter = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();
/* harmony export (immutable) */ __webpack_exports__["a"] = userRouter;


userRouter.route("/").post(__WEBPACK_IMPORTED_MODULE_1__user_controller__["a" /* default */].create).get(__WEBPACK_IMPORTED_MODULE_1__user_controller__["a" /* default */].findAll);
userRouter.route("/:id").get(__WEBPACK_IMPORTED_MODULE_1__user_controller__["a" /* default */].findOne).put(__WEBPACK_IMPORTED_MODULE_1__user_controller__["a" /* default */].update).delete(__WEBPACK_IMPORTED_MODULE_1__user_controller__["a" /* default */].delete);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_joi__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_joi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_joi__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_model__ = __webpack_require__(14);



/* harmony default export */ __webpack_exports__["a"] = ({
    async create(req, res) {
        try {
            const schema = __WEBPACK_IMPORTED_MODULE_0_joi___default.a.object().keys({
                username: __WEBPACK_IMPORTED_MODULE_0_joi___default.a.string().required(),
                password: __WEBPACK_IMPORTED_MODULE_0_joi___default.a.string().required(),
                name: __WEBPACK_IMPORTED_MODULE_0_joi___default.a.string().required(),
                address: __WEBPACK_IMPORTED_MODULE_0_joi___default.a.string().required(),
                email: __WEBPACK_IMPORTED_MODULE_0_joi___default.a.string().required(),
                phonenumber: __WEBPACK_IMPORTED_MODULE_0_joi___default.a.string().required(),
                notes: __WEBPACK_IMPORTED_MODULE_0_joi___default.a.string().optional()
            });
            const { value, error } = __WEBPACK_IMPORTED_MODULE_0_joi___default.a.validate(req.body, schema);
            if (error && error.details) {
                return res.status(400).json(error);
            }

            const user = await __WEBPACK_IMPORTED_MODULE_1__user_model__["a" /* default */].create(value);
            return res.json(user);
        } catch (err) {
            console.error(err);
            return res.status(500).send(err);
        }
    },

    async findAll(req, res) {
        try {
            const users = await __WEBPACK_IMPORTED_MODULE_1__user_model__["a" /* default */].find({});
            res.json(users);
        } catch (e) {
            console.error(e);
            return res.status(500).send(e);
        }
    },

    async findOne(req, res) {
        try {
            const { id } = req.params;
            const user = await __WEBPACK_IMPORTED_MODULE_1__user_model__["a" /* default */].findById(id);
            if (!user) {
                return res.status(404).json({ err: 'could not find user' });
            }
            return res.json(user);
        } catch (err) {
            console.error(err);
            return res.status(500).send(err);
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;

            const schema = __WEBPACK_IMPORTED_MODULE_0_joi___default.a.object().keys({
                username: __WEBPACK_IMPORTED_MODULE_0_joi___default.a.string().required(),
                password: __WEBPACK_IMPORTED_MODULE_0_joi___default.a.string().required(),
                name: __WEBPACK_IMPORTED_MODULE_0_joi___default.a.string().required(),
                address: __WEBPACK_IMPORTED_MODULE_0_joi___default.a.string().required(),
                email: __WEBPACK_IMPORTED_MODULE_0_joi___default.a.string().required(),
                phonenumber: __WEBPACK_IMPORTED_MODULE_0_joi___default.a.string().required(),
                notes: __WEBPACK_IMPORTED_MODULE_0_joi___default.a.string().optional()
            });
            const { value, error } = __WEBPACK_IMPORTED_MODULE_0_joi___default.a.validate(req.body, schema);
            if (error && error.details) {
                return res.status(400).json(error);
            }
            const user = await __WEBPACK_IMPORTED_MODULE_1__user_model__["a" /* default */].findOneAndUpdate({ _id: id }, value, { new: true });
            if (!user) {
                return res.status(404).json({ err: 'could not find user' });
            }
            return res.json(user);
        } catch (err) {
            console.error(err);
            return res.status(500).send(err);
        }
    },
    async delete(req, res) {
        try {
            const { id } = req.params;
            const user = await __WEBPACK_IMPORTED_MODULE_1__user_model__["a" /* default */].findOneAndRemove({ _id: id });
            if (!user) {
                return res.status(404).json({ err: 'could not found user' });
            }
            res.json(user);
        } catch (e) {
            console.error(e);
            return res.status(500).send(e);
        }
    }
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);

//import mongoosePaginate from 'mongoose-paginate'

const { Schema } = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a;
const userSchema = new Schema({
	username: {
		type: String,
		required: [true, "user must have a username"]
	},
	password: {
		type: String,
		required: [true, "user must have a password"]
	},
	name: {
		type: String,
		required: [true, "user must have name"]
	},
	address: {
		type: String,
		required: [true, "user must have address"]
	},
	email: {
		type: String,
		required: [true, "user must have email"]
	},
	phonenumber: {
		type: String,
		required: [true, "user must have a phone number"]
	},
	notes: {
		type: String
	}
});

//userSchema.plugin(mongoosePaginate)

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('User', userSchema));

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__order_controller__ = __webpack_require__(16);



const orderRouter = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();
/* harmony export (immutable) */ __webpack_exports__["a"] = orderRouter;


orderRouter.route("/").post(__WEBPACK_IMPORTED_MODULE_1__order_controller__["a" /* default */].create).get(__WEBPACK_IMPORTED_MODULE_1__order_controller__["a" /* default */].findAll);
orderRouter.route("/:id").get(__WEBPACK_IMPORTED_MODULE_1__order_controller__["a" /* default */].findOne).put(__WEBPACK_IMPORTED_MODULE_1__order_controller__["a" /* default */].update).delete(__WEBPACK_IMPORTED_MODULE_1__order_controller__["a" /* default */].delete);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_joi__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_joi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_joi__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__order_model__ = __webpack_require__(17);



/* harmony default export */ __webpack_exports__["a"] = ({
    async create(req, res) {
        try {
            // const schema = Joi.object().keys({
            //     user: Joi.string().required(),
            //     cart: Joi.string().required(),
            //     deliveryDate: Joi.string().required(),
            // });
            // const { value, error } = Joi.validate(req.body, schema);
            // if (error && error.details) {
            //     return res.status(400).json(error);
            // }

            const order = await __WEBPACK_IMPORTED_MODULE_1__order_model__["a" /* default */].create(req.body);
            return res.json(order);
        } catch (err) {
            console.error(err);
            return res.status(500).send(err);
        }
    },

    async findAll(req, res) {
        try {
            const orders = await __WEBPACK_IMPORTED_MODULE_1__order_model__["a" /* default */].find({});
            res.json(orders);
        } catch (e) {
            console.error(e);
            return res.status(500).send(e);
        }
    },

    async findOne(req, res) {
        try {
            const { id } = req.params;
            const order = await __WEBPACK_IMPORTED_MODULE_1__order_model__["a" /* default */].findById(id);
            if (!order) {
                return res.status(404).json({ err: 'could not find order' });
            }
            return res.json(order);
        } catch (err) {
            console.error(err);
            return res.status(500).send(err);
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;

            // const schema = Joi.object().keys({
            // 		name: Joi.string().required(),
            //     address: Joi.string().required(),
            //     email: Joi.string().required(),
            //     phoneNumber: Joi.string().required(),
            // });
            // const { value, error } = Joi.validate(req.body, schema);
            // if (error && error.details) {
            //     return res.status(400).json(error);
            // }
            const order = await __WEBPACK_IMPORTED_MODULE_1__order_model__["a" /* default */].findOneAndUpdate({ _id: id }, req.body, { new: true });
            if (!order) {
                return res.status(404).json({ err: 'could not find order' });
            }
            return res.json(order);
        } catch (err) {
            console.error(err);
            return res.status(500).send(err);
        }
    },
    async delete(req, res) {
        try {
            const { id } = req.params;
            const order = await __WEBPACK_IMPORTED_MODULE_1__order_model__["a" /* default */].findOneAndRemove({ _id: id });
            if (!order) {
                return res.status(404).json({ err: 'could not found order' });
            }
            res.json(order);
        } catch (e) {
            console.error(e);
            return res.status(500).send(e);
        }
    }
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);

//import mongoosePaginate from 'mongoose-paginate'

const { Schema } = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a;
const orderSchema = new Schema({
    user: {
        type: __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema.Types.ObjectId, ref: 'User'
    },
    cart: [{
        qty: { type: Number },
        meal: { type: __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema.Types.ObjectId, ref: 'Meal' }
    }],
    deliveryDate: {
        type: Date
    }
});

//orderSchema.plugin(mongoosePaginate)

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Order', orderSchema));

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map