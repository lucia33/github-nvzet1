(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/button.ts":
/*!***********************!*\
  !*** ./src/button.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* binding */ Button),
/* harmony export */   "buttonBasicStyles": () => (/* binding */ styles),
/* harmony export */   "cerButtonBasic": () => (/* binding */ cerButtonBasic)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/styles/css.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/components/attributes.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-foundation */ "./node_modules/@microsoft/fast-foundation/dist/esm/button/button.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/fast-foundation */ "./node_modules/@microsoft/fast-foundation/dist/esm/button/button.template.js");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var styles = (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    :host([appearance=\"accent\"]) button {\n        background: red;\n    }\n"], ["\n    :host([appearance=\"accent\"]) button {\n        background: red;\n    }\n"])));
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * The appearance the button should have.
         *
         * @public
         * @remarks
         * HTML Attribute: appearance
         */
        _this.appearance = 'neutral';
        return _this;
    }
    __decorate([
        _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr,
        __metadata("design:type", String)
    ], Button.prototype, "appearance", void 0);
    return Button;
}(_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_2__.Button));

var cerButtonBasic = Button.compose({
    baseName: 'button-basic',
    baseClass: _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_2__.Button,
    template: _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_3__.buttonTemplate,
    styles: styles,
    shadowOptions: {
        delegatesFocus: true,
    },
});

var templateObject_1;


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__values": () => (/* binding */ __values)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/components/attributes.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/components/attributes.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttributeDefinition": () => (/* binding */ AttributeDefinition),
/* harmony export */   "attr": () => (/* binding */ attr),
/* harmony export */   "booleanConverter": () => (/* binding */ booleanConverter),
/* harmony export */   "nullableNumberConverter": () => (/* binding */ nullableNumberConverter)
/* harmony export */ });
/* harmony import */ var _observation_observable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observation/observable.js */ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom.js */ "./node_modules/@microsoft/fast-element/dist/esm/dom.js");


/**
 * A {@link ValueConverter} that converts to and from `boolean` values.
 * @remarks
 * Used automatically when the `boolean` {@link AttributeMode} is selected.
 * @public
 */
const booleanConverter = {
    toView(value) {
        return value ? "true" : "false";
    },
    fromView(value) {
        if (value === null ||
            value === void 0 ||
            value === "false" ||
            value === false ||
            value === 0) {
            return false;
        }
        return true;
    },
};
/**
 * A {@link ValueConverter} that converts to and from `number` values.
 * @remarks
 * This converter allows for nullable numbers, returning `null` if the
 * input was `null`, `undefined`, or `NaN`.
 * @public
 */
const nullableNumberConverter = {
    toView(value) {
        if (value === null || value === undefined) {
            return null;
        }
        const number = value * 1;
        return isNaN(number) ? null : number.toString();
    },
    fromView(value) {
        if (value === null || value === undefined) {
            return null;
        }
        const number = value * 1;
        return isNaN(number) ? null : number;
    },
};
/**
 * An implementation of {@link Accessor} that supports reactivity,
 * change callbacks, attribute reflection, and type conversion for
 * custom elements.
 * @public
 */
class AttributeDefinition {
    /**
     * Creates an instance of AttributeDefinition.
     * @param Owner - The class constructor that owns this attribute.
     * @param name - The name of the property associated with the attribute.
     * @param attribute - The name of the attribute in HTML.
     * @param mode - The {@link AttributeMode} that describes the behavior of this attribute.
     * @param converter - A {@link ValueConverter} that integrates with the property getter/setter
     * to convert values to and from a DOM string.
     */
    constructor(Owner, name, attribute = name.toLowerCase(), mode = "reflect", converter) {
        this.guards = new Set();
        this.Owner = Owner;
        this.name = name;
        this.attribute = attribute;
        this.mode = mode;
        this.converter = converter;
        this.fieldName = `_${name}`;
        this.callbackName = `${name}Changed`;
        this.hasCallback = this.callbackName in Owner.prototype;
        if (mode === "boolean" && converter === void 0) {
            this.converter = booleanConverter;
        }
    }
    /**
     * Sets the value of the attribute/property on the source element.
     * @param source - The source element to access.
     * @param value - The value to set the attribute/property to.
     */
    setValue(source, newValue) {
        const oldValue = source[this.fieldName];
        const converter = this.converter;
        if (converter !== void 0) {
            newValue = converter.fromView(newValue);
        }
        if (oldValue !== newValue) {
            source[this.fieldName] = newValue;
            this.tryReflectToAttribute(source);
            if (this.hasCallback) {
                source[this.callbackName](oldValue, newValue);
            }
            source.$fastController.notify(this.name);
        }
    }
    /**
     * Gets the value of the attribute/property on the source element.
     * @param source - The source element to access.
     */
    getValue(source) {
        _observation_observable_js__WEBPACK_IMPORTED_MODULE_0__.Observable.track(source, this.name);
        return source[this.fieldName];
    }
    /** @internal */
    onAttributeChangedCallback(element, value) {
        if (this.guards.has(element)) {
            return;
        }
        this.guards.add(element);
        this.setValue(element, value);
        this.guards.delete(element);
    }
    tryReflectToAttribute(element) {
        const mode = this.mode;
        const guards = this.guards;
        if (guards.has(element) || mode === "fromView") {
            return;
        }
        _dom_js__WEBPACK_IMPORTED_MODULE_1__.DOM.queueUpdate(() => {
            guards.add(element);
            const latestValue = element[this.fieldName];
            switch (mode) {
                case "reflect":
                    const converter = this.converter;
                    _dom_js__WEBPACK_IMPORTED_MODULE_1__.DOM.setAttribute(element, this.attribute, converter !== void 0 ? converter.toView(latestValue) : latestValue);
                    break;
                case "boolean":
                    _dom_js__WEBPACK_IMPORTED_MODULE_1__.DOM.setBooleanAttribute(element, this.attribute, latestValue);
                    break;
            }
            guards.delete(element);
        });
    }
    /**
     * Collects all attribute definitions associated with the owner.
     * @param Owner - The class constructor to collect attribute for.
     * @param attributeLists - Any existing attributes to collect and merge with those associated with the owner.
     * @internal
     */
    static collect(Owner, ...attributeLists) {
        const attributes = [];
        attributeLists.push(Owner.attributes);
        for (let i = 0, ii = attributeLists.length; i < ii; ++i) {
            const list = attributeLists[i];
            if (list === void 0) {
                continue;
            }
            for (let j = 0, jj = list.length; j < jj; ++j) {
                const config = list[j];
                if (typeof config === "string") {
                    attributes.push(new AttributeDefinition(Owner, config));
                }
                else {
                    attributes.push(new AttributeDefinition(Owner, config.property, config.attribute, config.mode, config.converter));
                }
            }
        }
        return attributes;
    }
}
function attr(configOrTarget, prop) {
    let config;
    function decorator($target, $prop) {
        if (arguments.length > 1) {
            // Non invocation:
            // - @attr
            // Invocation with or w/o opts:
            // - @attr()
            // - @attr({...opts})
            config.property = $prop;
        }
        const attributes = $target.constructor.attributes ||
            ($target.constructor.attributes = []);
        attributes.push(config);
    }
    if (arguments.length > 1) {
        // Non invocation:
        // - @attr
        config = {};
        decorator(configOrTarget, prop);
        return;
    }
    // Invocation with or w/o opts:
    // - @attr()
    // - @attr({...opts})
    config = configOrTarget === void 0 ? {} : configOrTarget;
    return decorator;
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/components/controller.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/components/controller.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Controller": () => (/* binding */ Controller)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom.js */ "./node_modules/@microsoft/fast-element/dist/esm/dom.js");
/* harmony import */ var _observation_notifier_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observation/notifier.js */ "./node_modules/@microsoft/fast-element/dist/esm/observation/notifier.js");
/* harmony import */ var _observation_observable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observation/observable.js */ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _fast_definitions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fast-definitions.js */ "./node_modules/@microsoft/fast-element/dist/esm/components/fast-definitions.js");




const shadowRoots = new WeakMap();
const defaultEventOptions = {
    bubbles: true,
    composed: true,
    cancelable: true,
};
function getShadowRoot(element) {
    return element.shadowRoot || shadowRoots.get(element) || null;
}
/**
 * Controls the lifecycle and rendering of a `FASTElement`.
 * @public
 */
class Controller extends _observation_notifier_js__WEBPACK_IMPORTED_MODULE_0__.PropertyChangeNotifier {
    /**
     * Creates a Controller to control the specified element.
     * @param element - The element to be controlled by this controller.
     * @param definition - The element definition metadata that instructs this
     * controller in how to handle rendering and other platform integrations.
     * @internal
     */
    constructor(element, definition) {
        super(element);
        this.boundObservables = null;
        this.behaviors = null;
        this.needsInitialization = true;
        this._template = null;
        this._styles = null;
        this._isConnected = false;
        /**
         * This allows Observable.getNotifier(...) to return the Controller
         * when the notifier for the Controller itself is being requested. The
         * result is that the Observable system does not need to create a separate
         * instance of Notifier for observables on the Controller. The component and
         * the controller will now share the same notifier, removing one-object construct
         * per web component instance.
         */
        this.$fastController = this;
        /**
         * The view associated with the custom element.
         * @remarks
         * If `null` then the element is managing its own rendering.
         */
        this.view = null;
        this.element = element;
        this.definition = definition;
        const shadowOptions = definition.shadowOptions;
        if (shadowOptions !== void 0) {
            const shadowRoot = element.attachShadow(shadowOptions);
            if (shadowOptions.mode === "closed") {
                shadowRoots.set(element, shadowRoot);
            }
        }
        // Capture any observable values that were set by the binding engine before
        // the browser upgraded the element. Then delete the property since it will
        // shadow the getter/setter that is required to make the observable operate.
        // Later, in the connect callback, we'll re-apply the values.
        const accessors = _observation_observable_js__WEBPACK_IMPORTED_MODULE_1__.Observable.getAccessors(element);
        if (accessors.length > 0) {
            const boundObservables = (this.boundObservables = Object.create(null));
            for (let i = 0, ii = accessors.length; i < ii; ++i) {
                const propertyName = accessors[i].name;
                const value = element[propertyName];
                if (value !== void 0) {
                    delete element[propertyName];
                    boundObservables[propertyName] = value;
                }
            }
        }
    }
    /**
     * Indicates whether or not the custom element has been
     * connected to the document.
     */
    get isConnected() {
        _observation_observable_js__WEBPACK_IMPORTED_MODULE_1__.Observable.track(this, "isConnected");
        return this._isConnected;
    }
    setIsConnected(value) {
        this._isConnected = value;
        _observation_observable_js__WEBPACK_IMPORTED_MODULE_1__.Observable.notify(this, "isConnected");
    }
    /**
     * Gets/sets the template used to render the component.
     * @remarks
     * This value can only be accurately read after connect but can be set at any time.
     */
    get template() {
        return this._template;
    }
    set template(value) {
        if (this._template === value) {
            return;
        }
        this._template = value;
        if (!this.needsInitialization) {
            this.renderTemplate(value);
        }
    }
    /**
     * Gets/sets the primary styles used for the component.
     * @remarks
     * This value can only be accurately read after connect but can be set at any time.
     */
    get styles() {
        return this._styles;
    }
    set styles(value) {
        if (this._styles === value) {
            return;
        }
        if (this._styles !== null) {
            this.removeStyles(this._styles);
        }
        this._styles = value;
        if (!this.needsInitialization && value !== null) {
            this.addStyles(value);
        }
    }
    /**
     * Adds styles to this element. Providing an HTMLStyleElement will attach the element instance to the shadowRoot.
     * @param styles - The styles to add.
     */
    addStyles(styles) {
        const target = getShadowRoot(this.element) ||
            this.element.getRootNode();
        if (styles instanceof HTMLStyleElement) {
            target.append(styles);
        }
        else if (!styles.isAttachedTo(target)) {
            const sourceBehaviors = styles.behaviors;
            styles.addStylesTo(target);
            if (sourceBehaviors !== null) {
                this.addBehaviors(sourceBehaviors);
            }
        }
    }
    /**
     * Removes styles from this element. Providing an HTMLStyleElement will detach the element instance from the shadowRoot.
     * @param styles - the styles to remove.
     */
    removeStyles(styles) {
        const target = getShadowRoot(this.element) ||
            this.element.getRootNode();
        if (styles instanceof HTMLStyleElement) {
            target.removeChild(styles);
        }
        else if (styles.isAttachedTo(target)) {
            const sourceBehaviors = styles.behaviors;
            styles.removeStylesFrom(target);
            if (sourceBehaviors !== null) {
                this.removeBehaviors(sourceBehaviors);
            }
        }
    }
    /**
     * Adds behaviors to this element.
     * @param behaviors - The behaviors to add.
     */
    addBehaviors(behaviors) {
        const targetBehaviors = this.behaviors || (this.behaviors = new Map());
        const length = behaviors.length;
        const behaviorsToBind = [];
        for (let i = 0; i < length; ++i) {
            const behavior = behaviors[i];
            if (targetBehaviors.has(behavior)) {
                targetBehaviors.set(behavior, targetBehaviors.get(behavior) + 1);
            }
            else {
                targetBehaviors.set(behavior, 1);
                behaviorsToBind.push(behavior);
            }
        }
        if (this._isConnected) {
            const element = this.element;
            for (let i = 0; i < behaviorsToBind.length; ++i) {
                behaviorsToBind[i].bind(element, _observation_observable_js__WEBPACK_IMPORTED_MODULE_1__.defaultExecutionContext);
            }
        }
    }
    /**
     * Removes behaviors from this element.
     * @param behaviors - The behaviors to remove.
     * @param force - Forces unbinding of behaviors.
     */
    removeBehaviors(behaviors, force = false) {
        const targetBehaviors = this.behaviors;
        if (targetBehaviors === null) {
            return;
        }
        const length = behaviors.length;
        const behaviorsToUnbind = [];
        for (let i = 0; i < length; ++i) {
            const behavior = behaviors[i];
            if (targetBehaviors.has(behavior)) {
                const count = targetBehaviors.get(behavior) - 1;
                count === 0 || force
                    ? targetBehaviors.delete(behavior) && behaviorsToUnbind.push(behavior)
                    : targetBehaviors.set(behavior, count);
            }
        }
        if (this._isConnected) {
            const element = this.element;
            for (let i = 0; i < behaviorsToUnbind.length; ++i) {
                behaviorsToUnbind[i].unbind(element);
            }
        }
    }
    /**
     * Runs connected lifecycle behavior on the associated element.
     */
    onConnectedCallback() {
        if (this._isConnected) {
            return;
        }
        const element = this.element;
        if (this.needsInitialization) {
            this.finishInitialization();
        }
        else if (this.view !== null) {
            this.view.bind(element, _observation_observable_js__WEBPACK_IMPORTED_MODULE_1__.defaultExecutionContext);
        }
        const behaviors = this.behaviors;
        if (behaviors !== null) {
            for (const [behavior] of behaviors) {
                behavior.bind(element, _observation_observable_js__WEBPACK_IMPORTED_MODULE_1__.defaultExecutionContext);
            }
        }
        this.setIsConnected(true);
    }
    /**
     * Runs disconnected lifecycle behavior on the associated element.
     */
    onDisconnectedCallback() {
        if (!this._isConnected) {
            return;
        }
        this.setIsConnected(false);
        const view = this.view;
        if (view !== null) {
            view.unbind();
        }
        const behaviors = this.behaviors;
        if (behaviors !== null) {
            const element = this.element;
            for (const [behavior] of behaviors) {
                behavior.unbind(element);
            }
        }
    }
    /**
     * Runs the attribute changed callback for the associated element.
     * @param name - The name of the attribute that changed.
     * @param oldValue - The previous value of the attribute.
     * @param newValue - The new value of the attribute.
     */
    onAttributeChangedCallback(name, oldValue, newValue) {
        const attrDef = this.definition.attributeLookup[name];
        if (attrDef !== void 0) {
            attrDef.onAttributeChangedCallback(this.element, newValue);
        }
    }
    /**
     * Emits a custom HTML event.
     * @param type - The type name of the event.
     * @param detail - The event detail object to send with the event.
     * @param options - The event options. By default bubbles and composed.
     * @remarks
     * Only emits events if connected.
     */
    emit(type, detail, options) {
        if (this._isConnected) {
            return this.element.dispatchEvent(new CustomEvent(type, Object.assign(Object.assign({ detail }, defaultEventOptions), options)));
        }
        return false;
    }
    finishInitialization() {
        const element = this.element;
        const boundObservables = this.boundObservables;
        // If we have any observables that were bound, re-apply their values.
        if (boundObservables !== null) {
            const propertyNames = Object.keys(boundObservables);
            for (let i = 0, ii = propertyNames.length; i < ii; ++i) {
                const propertyName = propertyNames[i];
                element[propertyName] = boundObservables[propertyName];
            }
            this.boundObservables = null;
        }
        const definition = this.definition;
        // 1. Template overrides take top precedence.
        if (this._template === null) {
            if (this.element.resolveTemplate) {
                // 2. Allow for element instance overrides next.
                this._template = this.element.resolveTemplate();
            }
            else if (definition.template) {
                // 3. Default to the static definition.
                this._template = definition.template || null;
            }
        }
        // If we have a template after the above process, render it.
        // If there's no template, then the element author has opted into
        // custom rendering and they will managed the shadow root's content themselves.
        if (this._template !== null) {
            this.renderTemplate(this._template);
        }
        // 1. Styles overrides take top precedence.
        if (this._styles === null) {
            if (this.element.resolveStyles) {
                // 2. Allow for element instance overrides next.
                this._styles = this.element.resolveStyles();
            }
            else if (definition.styles) {
                // 3. Default to the static definition.
                this._styles = definition.styles || null;
            }
        }
        // If we have styles after the above process, add them.
        if (this._styles !== null) {
            this.addStyles(this._styles);
        }
        this.needsInitialization = false;
    }
    renderTemplate(template) {
        const element = this.element;
        // When getting the host to render to, we start by looking
        // up the shadow root. If there isn't one, then that means
        // we're doing a Light DOM render to the element's direct children.
        const host = getShadowRoot(element) || element;
        if (this.view !== null) {
            // If there's already a view, we need to unbind and remove through dispose.
            this.view.dispose();
            this.view = null;
        }
        else if (!this.needsInitialization) {
            // If there was previous custom rendering, we need to clear out the host.
            _dom_js__WEBPACK_IMPORTED_MODULE_2__.DOM.removeChildNodes(host);
        }
        if (template) {
            // If a new template was provided, render it.
            this.view = template.render(element, host, element);
        }
    }
    /**
     * Locates or creates a controller for the specified element.
     * @param element - The element to return the controller for.
     * @remarks
     * The specified element must have a {@link FASTElementDefinition}
     * registered either through the use of the {@link customElement}
     * decorator or a call to `FASTElement.define`.
     */
    static forCustomElement(element) {
        const controller = element.$fastController;
        if (controller !== void 0) {
            return controller;
        }
        const definition = _fast_definitions_js__WEBPACK_IMPORTED_MODULE_3__.FASTElementDefinition.forType(element.constructor);
        if (definition === void 0) {
            throw new Error("Missing FASTElement definition.");
        }
        return (element.$fastController = new Controller(element, definition));
    }
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/components/fast-definitions.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/components/fast-definitions.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FASTElementDefinition": () => (/* binding */ FASTElementDefinition)
/* harmony export */ });
/* harmony import */ var _platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../platform.js */ "./node_modules/@microsoft/fast-element/dist/esm/platform.js");
/* harmony import */ var _observation_observable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../observation/observable.js */ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _styles_element_styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/element-styles.js */ "./node_modules/@microsoft/fast-element/dist/esm/styles/element-styles.js");
/* harmony import */ var _attributes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes.js */ "./node_modules/@microsoft/fast-element/dist/esm/components/attributes.js");




const defaultShadowOptions = { mode: "open" };
const defaultElementOptions = {};
const fastRegistry = _platform_js__WEBPACK_IMPORTED_MODULE_0__.FAST.getById(4 /* elementRegistry */, () => {
    const typeToDefinition = new Map();
    return Object.freeze({
        register(definition) {
            if (typeToDefinition.has(definition.type)) {
                return false;
            }
            typeToDefinition.set(definition.type, definition);
            return true;
        },
        getByType(key) {
            return typeToDefinition.get(key);
        },
    });
});
/**
 * Defines metadata for a FASTElement.
 * @public
 */
class FASTElementDefinition {
    /**
     * Creates an instance of FASTElementDefinition.
     * @param type - The type this definition is being created for.
     * @param nameOrConfig - The name of the element to define or a config object
     * that describes the element to define.
     */
    constructor(type, nameOrConfig = type.definition) {
        if (typeof nameOrConfig === "string") {
            nameOrConfig = { name: nameOrConfig };
        }
        this.type = type;
        this.name = nameOrConfig.name;
        this.template = nameOrConfig.template;
        const attributes = _attributes_js__WEBPACK_IMPORTED_MODULE_1__.AttributeDefinition.collect(type, nameOrConfig.attributes);
        const observedAttributes = new Array(attributes.length);
        const propertyLookup = {};
        const attributeLookup = {};
        for (let i = 0, ii = attributes.length; i < ii; ++i) {
            const current = attributes[i];
            observedAttributes[i] = current.attribute;
            propertyLookup[current.name] = current;
            attributeLookup[current.attribute] = current;
        }
        this.attributes = attributes;
        this.observedAttributes = observedAttributes;
        this.propertyLookup = propertyLookup;
        this.attributeLookup = attributeLookup;
        this.shadowOptions =
            nameOrConfig.shadowOptions === void 0
                ? defaultShadowOptions
                : nameOrConfig.shadowOptions === null
                    ? void 0
                    : Object.assign(Object.assign({}, defaultShadowOptions), nameOrConfig.shadowOptions);
        this.elementOptions =
            nameOrConfig.elementOptions === void 0
                ? defaultElementOptions
                : Object.assign(Object.assign({}, defaultElementOptions), nameOrConfig.elementOptions);
        this.styles =
            nameOrConfig.styles === void 0
                ? void 0
                : Array.isArray(nameOrConfig.styles)
                    ? _styles_element_styles_js__WEBPACK_IMPORTED_MODULE_2__.ElementStyles.create(nameOrConfig.styles)
                    : nameOrConfig.styles instanceof _styles_element_styles_js__WEBPACK_IMPORTED_MODULE_2__.ElementStyles
                        ? nameOrConfig.styles
                        : _styles_element_styles_js__WEBPACK_IMPORTED_MODULE_2__.ElementStyles.create([nameOrConfig.styles]);
    }
    /**
     * Indicates if this element has been defined in at least one registry.
     */
    get isDefined() {
        return !!fastRegistry.getByType(this.type);
    }
    /**
     * Defines a custom element based on this definition.
     * @param registry - The element registry to define the element in.
     */
    define(registry = customElements) {
        const type = this.type;
        if (fastRegistry.register(this)) {
            const attributes = this.attributes;
            const proto = type.prototype;
            for (let i = 0, ii = attributes.length; i < ii; ++i) {
                _observation_observable_js__WEBPACK_IMPORTED_MODULE_3__.Observable.defineProperty(proto, attributes[i]);
            }
            Reflect.defineProperty(type, "observedAttributes", {
                value: this.observedAttributes,
                enumerable: true,
            });
        }
        if (!registry.get(this.name)) {
            registry.define(this.name, type, this.elementOptions);
        }
        return this;
    }
}
/**
 * Gets the element definition associated with the specified type.
 * @param type - The custom element type to retrieve the definition for.
 */
FASTElementDefinition.forType = fastRegistry.getByType;


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/components/fast-element.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/components/fast-element.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FASTElement": () => (/* binding */ FASTElement),
/* harmony export */   "customElement": () => (/* binding */ customElement)
/* harmony export */ });
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller.js */ "./node_modules/@microsoft/fast-element/dist/esm/components/controller.js");
/* harmony import */ var _fast_definitions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fast-definitions.js */ "./node_modules/@microsoft/fast-element/dist/esm/components/fast-definitions.js");


/* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */
function createFASTElement(BaseType) {
    return class extends BaseType {
        constructor() {
            /* eslint-disable-next-line */
            super();
            _controller_js__WEBPACK_IMPORTED_MODULE_0__.Controller.forCustomElement(this);
        }
        $emit(type, detail, options) {
            return this.$fastController.emit(type, detail, options);
        }
        connectedCallback() {
            this.$fastController.onConnectedCallback();
        }
        disconnectedCallback() {
            this.$fastController.onDisconnectedCallback();
        }
        attributeChangedCallback(name, oldValue, newValue) {
            this.$fastController.onAttributeChangedCallback(name, oldValue, newValue);
        }
    };
}
/**
 * A minimal base class for FASTElements that also provides
 * static helpers for working with FASTElements.
 * @public
 */
const FASTElement = Object.assign(createFASTElement(HTMLElement), {
    /**
     * Creates a new FASTElement base class inherited from the
     * provided base type.
     * @param BaseType - The base element type to inherit from.
     */
    from(BaseType) {
        return createFASTElement(BaseType);
    },
    /**
     * Defines a platform custom element based on the provided type and definition.
     * @param type - The custom element type to define.
     * @param nameOrDef - The name of the element to define or a definition object
     * that describes the element to define.
     */
    define(type, nameOrDef) {
        return new _fast_definitions_js__WEBPACK_IMPORTED_MODULE_1__.FASTElementDefinition(type, nameOrDef).define().type;
    },
});
/**
 * Decorator: Defines a platform custom element based on `FASTElement`.
 * @param nameOrDef - The name of the element to define or a definition object
 * that describes the element to define.
 * @public
 */
function customElement(nameOrDef) {
    /* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */
    return function (type) {
        new _fast_definitions_js__WEBPACK_IMPORTED_MODULE_1__.FASTElementDefinition(type, nameOrDef).define();
    };
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/dom.js":
/*!**************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/dom.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOM": () => (/* binding */ DOM),
/* harmony export */   "_interpolationEnd": () => (/* binding */ _interpolationEnd),
/* harmony export */   "_interpolationStart": () => (/* binding */ _interpolationStart)
/* harmony export */ });
/* harmony import */ var _platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./platform.js */ "./node_modules/@microsoft/fast-element/dist/esm/platform.js");

const updateQueue = _platform_js__WEBPACK_IMPORTED_MODULE_0__.$global.FAST.getById(1 /* updateQueue */, () => {
    const tasks = [];
    const pendingErrors = [];
    function throwFirstError() {
        if (pendingErrors.length) {
            throw pendingErrors.shift();
        }
    }
    function tryRunTask(task) {
        try {
            task.call();
        }
        catch (error) {
            pendingErrors.push(error);
            setTimeout(throwFirstError, 0);
        }
    }
    function process() {
        const capacity = 1024;
        let index = 0;
        while (index < tasks.length) {
            tryRunTask(tasks[index]);
            index++;
            // Prevent leaking memory for long chains of recursive calls to `DOM.queueUpdate`.
            // If we call `DOM.queueUpdate` within a task scheduled by `DOM.queueUpdate`, the queue will
            // grow, but to avoid an O(n) walk for every task we execute, we don't
            // shift tasks off the queue after they have been executed.
            // Instead, we periodically shift 1024 tasks off the queue.
            if (index > capacity) {
                // Manually shift all values starting at the index back to the
                // beginning of the queue.
                for (let scan = 0, newLength = tasks.length - index; scan < newLength; scan++) {
                    tasks[scan] = tasks[scan + index];
                }
                tasks.length -= index;
                index = 0;
            }
        }
        tasks.length = 0;
    }
    function enqueue(callable) {
        if (tasks.length < 1) {
            _platform_js__WEBPACK_IMPORTED_MODULE_0__.$global.requestAnimationFrame(process);
        }
        tasks.push(callable);
    }
    return Object.freeze({
        enqueue,
        process,
    });
});
/* eslint-disable */
const fastHTMLPolicy = _platform_js__WEBPACK_IMPORTED_MODULE_0__.$global.trustedTypes.createPolicy("fast-html", {
    createHTML: html => html,
});
/* eslint-enable */
let htmlPolicy = fastHTMLPolicy;
const marker = `fast-${Math.random().toString(36).substring(2, 8)}`;
/** @internal */
const _interpolationStart = `${marker}{`;
/** @internal */
const _interpolationEnd = `}${marker}`;
/**
 * Common DOM APIs.
 * @public
 */
const DOM = Object.freeze({
    /**
     * Indicates whether the DOM supports the adoptedStyleSheets feature.
     */
    supportsAdoptedStyleSheets: Array.isArray(document.adoptedStyleSheets) &&
        "replace" in CSSStyleSheet.prototype,
    /**
     * Sets the HTML trusted types policy used by the templating engine.
     * @param policy - The policy to set for HTML.
     * @remarks
     * This API can only be called once, for security reasons. It should be
     * called by the application developer at the start of their program.
     */
    setHTMLPolicy(policy) {
        if (htmlPolicy !== fastHTMLPolicy) {
            throw new Error("The HTML policy can only be set once.");
        }
        htmlPolicy = policy;
    },
    /**
     * Turns a string into trusted HTML using the configured trusted types policy.
     * @param html - The string to turn into trusted HTML.
     * @remarks
     * Used internally by the template engine when creating templates
     * and setting innerHTML.
     */
    createHTML(html) {
        return htmlPolicy.createHTML(html);
    },
    /**
     * Determines if the provided node is a template marker used by the runtime.
     * @param node - The node to test.
     */
    isMarker(node) {
        return node && node.nodeType === 8 && node.data.startsWith(marker);
    },
    /**
     * Given a marker node, extract the {@link HTMLDirective} index from the placeholder.
     * @param node - The marker node to extract the index from.
     */
    extractDirectiveIndexFromMarker(node) {
        return parseInt(node.data.replace(`${marker}:`, ""));
    },
    /**
     * Creates a placeholder string suitable for marking out a location *within*
     * an attribute value or HTML content.
     * @param index - The directive index to create the placeholder for.
     * @remarks
     * Used internally by binding directives.
     */
    createInterpolationPlaceholder(index) {
        return `${_interpolationStart}${index}${_interpolationEnd}`;
    },
    /**
     * Creates a placeholder that manifests itself as an attribute on an
     * element.
     * @param attributeName - The name of the custom attribute.
     * @param index - The directive index to create the placeholder for.
     * @remarks
     * Used internally by attribute directives such as `ref`, `slotted`, and `children`.
     */
    createCustomAttributePlaceholder(attributeName, index) {
        return `${attributeName}="${this.createInterpolationPlaceholder(index)}"`;
    },
    /**
     * Creates a placeholder that manifests itself as a marker within the DOM structure.
     * @param index - The directive index to create the placeholder for.
     * @remarks
     * Used internally by structural directives such as `repeat`.
     */
    createBlockPlaceholder(index) {
        return `<!--${marker}:${index}-->`;
    },
    /**
     * Schedules DOM update work in the next async batch.
     * @param callable - The callable function or object to queue.
     */
    queueUpdate: updateQueue.enqueue,
    /**
     * Immediately processes all work previously scheduled
     * through queueUpdate.
     * @remarks
     * This also forces nextUpdate promises
     * to resolve.
     */
    processUpdates: updateQueue.process,
    /**
     * Resolves with the next DOM update.
     */
    nextUpdate() {
        return new Promise(updateQueue.enqueue);
    },
    /**
     * Sets an attribute value on an element.
     * @param element - The element to set the attribute value on.
     * @param attributeName - The attribute name to set.
     * @param value - The value of the attribute to set.
     * @remarks
     * If the value is `null` or `undefined`, the attribute is removed, otherwise
     * it is set to the provided value using the standard `setAttribute` API.
     */
    setAttribute(element, attributeName, value) {
        if (value === null || value === undefined) {
            element.removeAttribute(attributeName);
        }
        else {
            element.setAttribute(attributeName, value);
        }
    },
    /**
     * Sets a boolean attribute value.
     * @param element - The element to set the boolean attribute value on.
     * @param attributeName - The attribute name to set.
     * @param value - The value of the attribute to set.
     * @remarks
     * If the value is true, the attribute is added; otherwise it is removed.
     */
    setBooleanAttribute(element, attributeName, value) {
        value
            ? element.setAttribute(attributeName, "")
            : element.removeAttribute(attributeName);
    },
    /**
     * Removes all the child nodes of the provided parent node.
     * @param parent - The node to remove the children from.
     */
    removeChildNodes(parent) {
        for (let child = parent.firstChild; child !== null; child = parent.firstChild) {
            parent.removeChild(child);
        }
    },
    /**
     * Creates a TreeWalker configured to walk a template fragment.
     * @param fragment - The fragment to walk.
     */
    createTemplateWalker(fragment) {
        return document.createTreeWalker(fragment, 133, // element, text, comment
        null, false);
    },
});


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/observation/notifier.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/observation/notifier.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertyChangeNotifier": () => (/* binding */ PropertyChangeNotifier),
/* harmony export */   "SubscriberSet": () => (/* binding */ SubscriberSet)
/* harmony export */ });
function spilloverSubscribe(subscriber) {
    const spillover = this.spillover;
    const index = spillover.indexOf(subscriber);
    if (index === -1) {
        spillover.push(subscriber);
    }
}
function spilloverUnsubscribe(subscriber) {
    const spillover = this.spillover;
    const index = spillover.indexOf(subscriber);
    if (index !== -1) {
        spillover.splice(index, 1);
    }
}
function spilloverNotifySubscribers(args) {
    const spillover = this.spillover;
    const source = this.source;
    for (let i = 0, ii = spillover.length; i < ii; ++i) {
        spillover[i].handleChange(source, args);
    }
}
function spilloverHas(subscriber) {
    return this.spillover.indexOf(subscriber) !== -1;
}
/**
 * An implementation of {@link Notifier} that efficiently keeps track of
 * subscribers interested in a specific change notification on an
 * observable source.
 *
 * @remarks
 * This set is optimized for the most common scenario of 1 or 2 subscribers.
 * With this in mind, it can store a subscriber in an internal field, allowing it to avoid Array#push operations.
 * If the set ever exceeds two subscribers, it upgrades to an array automatically.
 * @public
 */
class SubscriberSet {
    /**
     * Creates an instance of SubscriberSet for the specified source.
     * @param source - The object source that subscribers will receive notifications from.
     * @param initialSubscriber - An initial subscriber to changes.
     */
    constructor(source, initialSubscriber) {
        this.sub1 = void 0;
        this.sub2 = void 0;
        this.spillover = void 0;
        this.source = source;
        this.sub1 = initialSubscriber;
    }
    /**
     * Checks whether the provided subscriber has been added to this set.
     * @param subscriber - The subscriber to test for inclusion in this set.
     */
    has(subscriber) {
        return this.sub1 === subscriber || this.sub2 === subscriber;
    }
    /**
     * Subscribes to notification of changes in an object's state.
     * @param subscriber - The object that is subscribing for change notification.
     */
    subscribe(subscriber) {
        if (this.has(subscriber)) {
            return;
        }
        if (this.sub1 === void 0) {
            this.sub1 = subscriber;
            return;
        }
        if (this.sub2 === void 0) {
            this.sub2 = subscriber;
            return;
        }
        this.spillover = [this.sub1, this.sub2, subscriber];
        this.subscribe = spilloverSubscribe;
        this.unsubscribe = spilloverUnsubscribe;
        this.notify = spilloverNotifySubscribers;
        this.has = spilloverHas;
        this.sub1 = void 0;
        this.sub2 = void 0;
    }
    /**
     * Unsubscribes from notification of changes in an object's state.
     * @param subscriber - The object that is unsubscribing from change notification.
     */
    unsubscribe(subscriber) {
        if (this.sub1 === subscriber) {
            this.sub1 = void 0;
        }
        else if (this.sub2 === subscriber) {
            this.sub2 = void 0;
        }
    }
    /**
     * Notifies all subscribers.
     * @param args - Data passed along to subscribers during notification.
     */
    notify(args) {
        const sub1 = this.sub1;
        const sub2 = this.sub2;
        const source = this.source;
        if (sub1 !== void 0) {
            sub1.handleChange(source, args);
        }
        if (sub2 !== void 0) {
            sub2.handleChange(source, args);
        }
    }
}
/**
 * An implementation of Notifier that allows subscribers to be notified
 * of individual property changes on an object.
 * @public
 */
class PropertyChangeNotifier {
    /**
     * Creates an instance of PropertyChangeNotifier for the specified source.
     * @param source - The object source that subscribers will receive notifications from.
     */
    constructor(source) {
        this.subscribers = {};
        this.sourceSubscribers = null;
        this.source = source;
    }
    /**
     * Notifies all subscribers, based on the specified property.
     * @param propertyName - The property name, passed along to subscribers during notification.
     */
    notify(propertyName) {
        var _a;
        const subscribers = this.subscribers[propertyName];
        if (subscribers !== void 0) {
            subscribers.notify(propertyName);
        }
        (_a = this.sourceSubscribers) === null || _a === void 0 ? void 0 : _a.notify(propertyName);
    }
    /**
     * Subscribes to notification of changes in an object's state.
     * @param subscriber - The object that is subscribing for change notification.
     * @param propertyToWatch - The name of the property that the subscriber is interested in watching for changes.
     */
    subscribe(subscriber, propertyToWatch) {
        var _a;
        if (propertyToWatch) {
            let subscribers = this.subscribers[propertyToWatch];
            if (subscribers === void 0) {
                this.subscribers[propertyToWatch] = subscribers = new SubscriberSet(this.source);
            }
            subscribers.subscribe(subscriber);
        }
        else {
            this.sourceSubscribers = (_a = this.sourceSubscribers) !== null && _a !== void 0 ? _a : new SubscriberSet(this.source);
            this.sourceSubscribers.subscribe(subscriber);
        }
    }
    /**
     * Unsubscribes from notification of changes in an object's state.
     * @param subscriber - The object that is unsubscribing from change notification.
     * @param propertyToUnwatch - The name of the property that the subscriber is no longer interested in watching.
     */
    unsubscribe(subscriber, propertyToUnwatch) {
        var _a;
        if (propertyToUnwatch) {
            const subscribers = this.subscribers[propertyToUnwatch];
            if (subscribers !== void 0) {
                subscribers.unsubscribe(subscriber);
            }
        }
        else {
            (_a = this.sourceSubscribers) === null || _a === void 0 ? void 0 : _a.unsubscribe(subscriber);
        }
    }
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExecutionContext": () => (/* binding */ ExecutionContext),
/* harmony export */   "Observable": () => (/* binding */ Observable),
/* harmony export */   "defaultExecutionContext": () => (/* binding */ defaultExecutionContext),
/* harmony export */   "observable": () => (/* binding */ observable),
/* harmony export */   "volatile": () => (/* binding */ volatile)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom.js */ "./node_modules/@microsoft/fast-element/dist/esm/dom.js");
/* harmony import */ var _platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../platform.js */ "./node_modules/@microsoft/fast-element/dist/esm/platform.js");
/* harmony import */ var _notifier_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notifier.js */ "./node_modules/@microsoft/fast-element/dist/esm/observation/notifier.js");



/**
 * Common Observable APIs.
 * @public
 */
const Observable = _platform_js__WEBPACK_IMPORTED_MODULE_0__.FAST.getById(2 /* observable */, () => {
    const volatileRegex = /(:|&&|\|\||if)/;
    const notifierLookup = new WeakMap();
    const accessorLookup = new WeakMap();
    const queueUpdate = _dom_js__WEBPACK_IMPORTED_MODULE_1__.DOM.queueUpdate;
    let watcher = void 0;
    let createArrayObserver = (array) => {
        throw new Error("Must call enableArrayObservation before observing arrays.");
    };
    function getNotifier(source) {
        let found = source.$fastController || notifierLookup.get(source);
        if (found === void 0) {
            if (Array.isArray(source)) {
                found = createArrayObserver(source);
            }
            else {
                notifierLookup.set(source, (found = new _notifier_js__WEBPACK_IMPORTED_MODULE_2__.PropertyChangeNotifier(source)));
            }
        }
        return found;
    }
    function getAccessors(target) {
        let accessors = accessorLookup.get(target);
        if (accessors === void 0) {
            let currentTarget = Reflect.getPrototypeOf(target);
            while (accessors === void 0 && currentTarget !== null) {
                accessors = accessorLookup.get(currentTarget);
                currentTarget = Reflect.getPrototypeOf(currentTarget);
            }
            if (accessors === void 0) {
                accessors = [];
            }
            else {
                accessors = accessors.slice(0);
            }
            accessorLookup.set(target, accessors);
        }
        return accessors;
    }
    class DefaultObservableAccessor {
        constructor(name) {
            this.name = name;
            this.field = `_${name}`;
            this.callback = `${name}Changed`;
        }
        getValue(source) {
            if (watcher !== void 0) {
                watcher.watch(source, this.name);
            }
            return source[this.field];
        }
        setValue(source, newValue) {
            const field = this.field;
            const oldValue = source[field];
            if (oldValue !== newValue) {
                source[field] = newValue;
                const callback = source[this.callback];
                if (typeof callback === "function") {
                    callback.call(source, oldValue, newValue);
                }
                getNotifier(source).notify(this.name);
            }
        }
    }
    class BindingObserverImplementation extends _notifier_js__WEBPACK_IMPORTED_MODULE_2__.SubscriberSet {
        constructor(binding, initialSubscriber, isVolatileBinding = false) {
            super(binding, initialSubscriber);
            this.binding = binding;
            this.isVolatileBinding = isVolatileBinding;
            this.needsRefresh = true;
            this.needsQueue = true;
            this.first = this;
            this.last = null;
            this.propertySource = void 0;
            this.propertyName = void 0;
            this.notifier = void 0;
            this.next = void 0;
        }
        observe(source, context) {
            if (this.needsRefresh && this.last !== null) {
                this.disconnect();
            }
            const previousWatcher = watcher;
            watcher = this.needsRefresh ? this : void 0;
            this.needsRefresh = this.isVolatileBinding;
            const result = this.binding(source, context);
            watcher = previousWatcher;
            return result;
        }
        disconnect() {
            if (this.last !== null) {
                let current = this.first;
                while (current !== void 0) {
                    current.notifier.unsubscribe(this, current.propertyName);
                    current = current.next;
                }
                this.last = null;
                this.needsRefresh = this.needsQueue = true;
            }
        }
        watch(propertySource, propertyName) {
            const prev = this.last;
            const notifier = getNotifier(propertySource);
            const current = prev === null ? this.first : {};
            current.propertySource = propertySource;
            current.propertyName = propertyName;
            current.notifier = notifier;
            notifier.subscribe(this, propertyName);
            if (prev !== null) {
                if (!this.needsRefresh) {
                    // Declaring the variable prior to assignment below circumvents
                    // a bug in Angular's optimization process causing infinite recursion
                    // of this watch() method. Details https://github.com/microsoft/fast/issues/4969
                    let prevValue;
                    watcher = void 0;
                    /* eslint-disable-next-line */
                    prevValue = prev.propertySource[prev.propertyName];
                    watcher = this;
                    if (propertySource === prevValue) {
                        this.needsRefresh = true;
                    }
                }
                prev.next = current;
            }
            this.last = current;
        }
        handleChange() {
            if (this.needsQueue) {
                this.needsQueue = false;
                queueUpdate(this);
            }
        }
        call() {
            if (this.last !== null) {
                this.needsQueue = true;
                this.notify(this);
            }
        }
        records() {
            let next = this.first;
            return {
                next: () => {
                    const current = next;
                    if (current === undefined) {
                        return { value: void 0, done: true };
                    }
                    else {
                        next = next.next;
                        return {
                            value: current,
                            done: false,
                        };
                    }
                },
                [Symbol.iterator]: function () {
                    return this;
                },
            };
        }
    }
    return Object.freeze({
        /**
         * @internal
         * @param factory - The factory used to create array observers.
         */
        setArrayObserverFactory(factory) {
            createArrayObserver = factory;
        },
        /**
         * Gets a notifier for an object or Array.
         * @param source - The object or Array to get the notifier for.
         */
        getNotifier,
        /**
         * Records a property change for a source object.
         * @param source - The object to record the change against.
         * @param propertyName - The property to track as changed.
         */
        track(source, propertyName) {
            if (watcher !== void 0) {
                watcher.watch(source, propertyName);
            }
        },
        /**
         * Notifies watchers that the currently executing property getter or function is volatile
         * with respect to its observable dependencies.
         */
        trackVolatile() {
            if (watcher !== void 0) {
                watcher.needsRefresh = true;
            }
        },
        /**
         * Notifies subscribers of a source object of changes.
         * @param source - the object to notify of changes.
         * @param args - The change args to pass to subscribers.
         */
        notify(source, args) {
            getNotifier(source).notify(args);
        },
        /**
         * Defines an observable property on an object or prototype.
         * @param target - The target object to define the observable on.
         * @param nameOrAccessor - The name of the property to define as observable;
         * or a custom accessor that specifies the property name and accessor implementation.
         */
        defineProperty(target, nameOrAccessor) {
            if (typeof nameOrAccessor === "string") {
                nameOrAccessor = new DefaultObservableAccessor(nameOrAccessor);
            }
            getAccessors(target).push(nameOrAccessor);
            Reflect.defineProperty(target, nameOrAccessor.name, {
                enumerable: true,
                get: function () {
                    return nameOrAccessor.getValue(this);
                },
                set: function (newValue) {
                    nameOrAccessor.setValue(this, newValue);
                },
            });
        },
        /**
         * Finds all the observable accessors defined on the target,
         * including its prototype chain.
         * @param target - The target object to search for accessor on.
         */
        getAccessors,
        /**
         * Creates a {@link BindingObserver} that can watch the
         * provided {@link Binding} for changes.
         * @param binding - The binding to observe.
         * @param initialSubscriber - An initial subscriber to changes in the binding value.
         * @param isVolatileBinding - Indicates whether the binding's dependency list must be re-evaluated on every value evaluation.
         */
        binding(binding, initialSubscriber, isVolatileBinding = this.isVolatileBinding(binding)) {
            return new BindingObserverImplementation(binding, initialSubscriber, isVolatileBinding);
        },
        /**
         * Determines whether a binding expression is volatile and needs to have its dependency list re-evaluated
         * on every evaluation of the value.
         * @param binding - The binding to inspect.
         */
        isVolatileBinding(binding) {
            return volatileRegex.test(binding.toString());
        },
    });
});
/**
 * Decorator: Defines an observable property on the target.
 * @param target - The target to define the observable on.
 * @param nameOrAccessor - The property name or accessor to define the observable as.
 * @public
 */
function observable(target, nameOrAccessor) {
    Observable.defineProperty(target, nameOrAccessor);
}
/**
 * Decorator: Marks a property getter as having volatile observable dependencies.
 * @param target - The target that the property is defined on.
 * @param name - The property name.
 * @param name - The existing descriptor.
 * @public
 */
function volatile(target, name, descriptor) {
    return Object.assign({}, descriptor, {
        get: function () {
            Observable.trackVolatile();
            return descriptor.get.apply(this);
        },
    });
}
const contextEvent = _platform_js__WEBPACK_IMPORTED_MODULE_0__.FAST.getById(3 /* contextEvent */, () => {
    let current = null;
    return {
        get() {
            return current;
        },
        set(event) {
            current = event;
        },
    };
});
/**
 * Provides additional contextual information available to behaviors and expressions.
 * @public
 */
class ExecutionContext {
    constructor() {
        /**
         * The index of the current item within a repeat context.
         */
        this.index = 0;
        /**
         * The length of the current collection within a repeat context.
         */
        this.length = 0;
        /**
         * The parent data object within a repeat context.
         */
        this.parent = null;
        /**
         * The parent execution context when in nested context scenarios.
         */
        this.parentContext = null;
    }
    /**
     * The current event within an event handler.
     */
    get event() {
        return contextEvent.get();
    }
    /**
     * Indicates whether the current item within a repeat context
     * has an even index.
     */
    get isEven() {
        return this.index % 2 === 0;
    }
    /**
     * Indicates whether the current item within a repeat context
     * has an odd index.
     */
    get isOdd() {
        return this.index % 2 !== 0;
    }
    /**
     * Indicates whether the current item within a repeat context
     * is the first item in the collection.
     */
    get isFirst() {
        return this.index === 0;
    }
    /**
     * Indicates whether the current item within a repeat context
     * is somewhere in the middle of the collection.
     */
    get isInMiddle() {
        return !this.isFirst && !this.isLast;
    }
    /**
     * Indicates whether the current item within a repeat context
     * is the last item in the collection.
     */
    get isLast() {
        return this.index === this.length - 1;
    }
    /**
     * Sets the event for the current execution context.
     * @param event - The event to set.
     * @internal
     */
    static setEvent(event) {
        contextEvent.set(event);
    }
}
Observable.defineProperty(ExecutionContext.prototype, "index");
Observable.defineProperty(ExecutionContext.prototype, "length");
/**
 * The default execution context used in binding expressions.
 * @public
 */
const defaultExecutionContext = Object.seal(new ExecutionContext());


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/platform.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/platform.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$global": () => (/* binding */ $global),
/* harmony export */   "FAST": () => (/* binding */ FAST),
/* harmony export */   "emptyArray": () => (/* binding */ emptyArray)
/* harmony export */ });
/**
 * A reference to globalThis, with support
 * for browsers that don't yet support the spec.
 * @public
 */
const $global = (function () {
    if (typeof globalThis !== "undefined") {
        // We're running in a modern environment.
        return globalThis;
    }
    if (typeof global !== "undefined") {
        // We're running in NodeJS
        return global;
    }
    if (typeof self !== "undefined") {
        // We're running in a worker.
        return self;
    }
    if (typeof window !== "undefined") {
        // We're running in the browser's main thread.
        return window;
    }
    try {
        // Hopefully we never get here...
        // Not all environments allow eval and Function. Use only as a last resort:
        // eslint-disable-next-line no-new-func
        return new Function("return this")();
    }
    catch (_a) {
        // If all fails, give up and create an object.
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        return {};
    }
})();
// API-only Polyfill for trustedTypes
if ($global.trustedTypes === void 0) {
    $global.trustedTypes = { createPolicy: (n, r) => r };
}
const propConfig = {
    configurable: false,
    enumerable: false,
    writable: false,
};
if ($global.FAST === void 0) {
    Reflect.defineProperty($global, "FAST", Object.assign({ value: Object.create(null) }, propConfig));
}
/**
 * The FAST global.
 * @internal
 */
const FAST = $global.FAST;
if (FAST.getById === void 0) {
    const storage = Object.create(null);
    Reflect.defineProperty(FAST, "getById", Object.assign({ value(id, initialize) {
            let found = storage[id];
            if (found === void 0) {
                found = initialize ? (storage[id] = initialize()) : null;
            }
            return found;
        } }, propConfig));
}
/**
 * A readonly, empty array.
 * @remarks
 * Typically returned by APIs that return arrays when there are
 * no actual items to return.
 * @internal
 */
const emptyArray = Object.freeze([]);


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/styles/css-directive.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/styles/css-directive.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSSDirective": () => (/* binding */ CSSDirective)
/* harmony export */ });
/**
 * Directive for use in {@link css}.
 *
 * @public
 */
class CSSDirective {
    /**
     * Creates a CSS fragment to interpolate into the CSS document.
     * @returns - the string to interpolate into CSS
     */
    createCSS() {
        return "";
    }
    /**
     * Creates a behavior to bind to the host element.
     * @returns - the behavior to bind to the host element, or undefined.
     */
    createBehavior() {
        return undefined;
    }
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/styles/css.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/styles/css.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "css": () => (/* binding */ css),
/* harmony export */   "cssPartial": () => (/* binding */ cssPartial)
/* harmony export */ });
/* harmony import */ var _css_directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css-directive.js */ "./node_modules/@microsoft/fast-element/dist/esm/styles/css-directive.js");
/* harmony import */ var _element_styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element-styles.js */ "./node_modules/@microsoft/fast-element/dist/esm/styles/element-styles.js");


function collectStyles(strings, values) {
    const styles = [];
    let cssString = "";
    const behaviors = [];
    for (let i = 0, ii = strings.length - 1; i < ii; ++i) {
        cssString += strings[i];
        let value = values[i];
        if (value instanceof _css_directive_js__WEBPACK_IMPORTED_MODULE_0__.CSSDirective) {
            const behavior = value.createBehavior();
            value = value.createCSS();
            if (behavior) {
                behaviors.push(behavior);
            }
        }
        if (value instanceof _element_styles_js__WEBPACK_IMPORTED_MODULE_1__.ElementStyles || value instanceof CSSStyleSheet) {
            if (cssString.trim() !== "") {
                styles.push(cssString);
                cssString = "";
            }
            styles.push(value);
        }
        else {
            cssString += value;
        }
    }
    cssString += strings[strings.length - 1];
    if (cssString.trim() !== "") {
        styles.push(cssString);
    }
    return {
        styles,
        behaviors,
    };
}
/**
 * Transforms a template literal string into styles.
 * @param strings - The string fragments that are interpolated with the values.
 * @param values - The values that are interpolated with the string fragments.
 * @remarks
 * The css helper supports interpolation of strings and ElementStyle instances.
 * @public
 */
function css(strings, ...values) {
    const { styles, behaviors } = collectStyles(strings, values);
    const elementStyles = _element_styles_js__WEBPACK_IMPORTED_MODULE_1__.ElementStyles.create(styles);
    if (behaviors.length) {
        elementStyles.withBehaviors(...behaviors);
    }
    return elementStyles;
}
class CSSPartial extends _css_directive_js__WEBPACK_IMPORTED_MODULE_0__.CSSDirective {
    constructor(styles, behaviors) {
        super();
        this.behaviors = behaviors;
        this.css = "";
        const stylesheets = styles.reduce((accumulated, current) => {
            if (typeof current === "string") {
                this.css += current;
            }
            else {
                accumulated.push(current);
            }
            return accumulated;
        }, []);
        if (stylesheets.length) {
            this.styles = _element_styles_js__WEBPACK_IMPORTED_MODULE_1__.ElementStyles.create(stylesheets);
        }
    }
    createBehavior() {
        return this;
    }
    createCSS() {
        return this.css;
    }
    bind(el) {
        if (this.styles) {
            el.$fastController.addStyles(this.styles);
        }
        if (this.behaviors.length) {
            el.$fastController.addBehaviors(this.behaviors);
        }
    }
    unbind(el) {
        if (this.styles) {
            el.$fastController.removeStyles(this.styles);
        }
        if (this.behaviors.length) {
            el.$fastController.removeBehaviors(this.behaviors);
        }
    }
}
/**
 * Transforms a template literal string into partial CSS.
 * @param strings - The string fragments that are interpolated with the values.
 * @param values - The values that are interpolated with the string fragments.
 * @public
 */
function cssPartial(strings, ...values) {
    const { styles, behaviors } = collectStyles(strings, values);
    return new CSSPartial(styles, behaviors);
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/styles/element-styles.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/styles/element-styles.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdoptedStyleSheetsStyles": () => (/* binding */ AdoptedStyleSheetsStyles),
/* harmony export */   "ElementStyles": () => (/* binding */ ElementStyles),
/* harmony export */   "StyleElementStyles": () => (/* binding */ StyleElementStyles)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom.js */ "./node_modules/@microsoft/fast-element/dist/esm/dom.js");

/**
 * Represents styles that can be applied to a custom element.
 * @public
 */
class ElementStyles {
    constructor() {
        this.targets = new WeakSet();
        /** @internal */
        this.behaviors = null;
    }
    /** @internal */
    addStylesTo(target) {
        this.targets.add(target);
    }
    /** @internal */
    removeStylesFrom(target) {
        this.targets.delete(target);
    }
    /** @internal */
    isAttachedTo(target) {
        return this.targets.has(target);
    }
    /**
     * Associates behaviors with this set of styles.
     * @param behaviors - The behaviors to associate.
     */
    withBehaviors(...behaviors) {
        this.behaviors =
            this.behaviors === null ? behaviors : this.behaviors.concat(behaviors);
        return this;
    }
}
/**
 * Create ElementStyles from ComposableStyles.
 */
ElementStyles.create = (() => {
    if (_dom_js__WEBPACK_IMPORTED_MODULE_0__.DOM.supportsAdoptedStyleSheets) {
        const styleSheetCache = new Map();
        return (styles) => 
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        new AdoptedStyleSheetsStyles(styles, styleSheetCache);
    }
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return (styles) => new StyleElementStyles(styles);
})();
function reduceStyles(styles) {
    return styles
        .map((x) => x instanceof ElementStyles ? reduceStyles(x.styles) : [x])
        .reduce((prev, curr) => prev.concat(curr), []);
}
function reduceBehaviors(styles) {
    return styles
        .map((x) => (x instanceof ElementStyles ? x.behaviors : null))
        .reduce((prev, curr) => {
        if (curr === null) {
            return prev;
        }
        if (prev === null) {
            prev = [];
        }
        return prev.concat(curr);
    }, null);
}
/**
 * https://wicg.github.io/construct-stylesheets/
 * https://developers.google.com/web/updates/2019/02/constructable-stylesheets
 *
 * @internal
 */
class AdoptedStyleSheetsStyles extends ElementStyles {
    constructor(styles, styleSheetCache) {
        super();
        this.styles = styles;
        this.styleSheetCache = styleSheetCache;
        this._styleSheets = void 0;
        this.behaviors = reduceBehaviors(styles);
    }
    get styleSheets() {
        if (this._styleSheets === void 0) {
            const styles = this.styles;
            const styleSheetCache = this.styleSheetCache;
            this._styleSheets = reduceStyles(styles).map((x) => {
                if (x instanceof CSSStyleSheet) {
                    return x;
                }
                let sheet = styleSheetCache.get(x);
                if (sheet === void 0) {
                    sheet = new CSSStyleSheet();
                    sheet.replaceSync(x);
                    styleSheetCache.set(x, sheet);
                }
                return sheet;
            });
        }
        return this._styleSheets;
    }
    addStylesTo(target) {
        target.adoptedStyleSheets = [...target.adoptedStyleSheets, ...this.styleSheets];
        super.addStylesTo(target);
    }
    removeStylesFrom(target) {
        const sourceSheets = this.styleSheets;
        target.adoptedStyleSheets = target.adoptedStyleSheets.filter((x) => sourceSheets.indexOf(x) === -1);
        super.removeStylesFrom(target);
    }
}
let styleClassId = 0;
function getNextStyleClass() {
    return `fast-style-class-${++styleClassId}`;
}
/**
 * @internal
 */
class StyleElementStyles extends ElementStyles {
    constructor(styles) {
        super();
        this.styles = styles;
        this.behaviors = null;
        this.behaviors = reduceBehaviors(styles);
        this.styleSheets = reduceStyles(styles);
        this.styleClass = getNextStyleClass();
    }
    addStylesTo(target) {
        const styleSheets = this.styleSheets;
        const styleClass = this.styleClass;
        target = this.normalizeTarget(target);
        for (let i = 0; i < styleSheets.length; i++) {
            const element = document.createElement("style");
            element.innerHTML = styleSheets[i];
            element.className = styleClass;
            target.append(element);
        }
        super.addStylesTo(target);
    }
    removeStylesFrom(target) {
        target = this.normalizeTarget(target);
        const styles = target.querySelectorAll(`.${this.styleClass}`);
        for (let i = 0, ii = styles.length; i < ii; ++i) {
            target.removeChild(styles[i]);
        }
        super.removeStylesFrom(target);
    }
    isAttachedTo(target) {
        return super.isAttachedTo(this.normalizeTarget(target));
    }
    normalizeTarget(target) {
        return target === document ? document.body : target;
    }
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/templating/binding.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/templating/binding.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BindingBehavior": () => (/* binding */ BindingBehavior),
/* harmony export */   "HTMLBindingDirective": () => (/* binding */ HTMLBindingDirective)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom.js */ "./node_modules/@microsoft/fast-element/dist/esm/dom.js");
/* harmony import */ var _observation_observable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observation/observable.js */ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _html_directive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./html-directive.js */ "./node_modules/@microsoft/fast-element/dist/esm/templating/html-directive.js");



function normalBind(source, context) {
    this.source = source;
    this.context = context;
    if (this.bindingObserver === null) {
        this.bindingObserver = _observation_observable_js__WEBPACK_IMPORTED_MODULE_0__.Observable.binding(this.binding, this, this.isBindingVolatile);
    }
    this.updateTarget(this.bindingObserver.observe(source, context));
}
function triggerBind(source, context) {
    this.source = source;
    this.context = context;
    this.target.addEventListener(this.targetName, this);
}
function normalUnbind() {
    this.bindingObserver.disconnect();
    this.source = null;
    this.context = null;
}
function contentUnbind() {
    this.bindingObserver.disconnect();
    this.source = null;
    this.context = null;
    const view = this.target.$fastView;
    if (view !== void 0 && view.isComposed) {
        view.unbind();
        view.needsBindOnly = true;
    }
}
function triggerUnbind() {
    this.target.removeEventListener(this.targetName, this);
    this.source = null;
    this.context = null;
}
function updateAttributeTarget(value) {
    _dom_js__WEBPACK_IMPORTED_MODULE_1__.DOM.setAttribute(this.target, this.targetName, value);
}
function updateBooleanAttributeTarget(value) {
    _dom_js__WEBPACK_IMPORTED_MODULE_1__.DOM.setBooleanAttribute(this.target, this.targetName, value);
}
function updateContentTarget(value) {
    // If there's no actual value, then this equates to the
    // empty string for the purposes of content bindings.
    if (value === null || value === undefined) {
        value = "";
    }
    // If the value has a "create" method, then it's a template-like.
    if (value.create) {
        this.target.textContent = "";
        let view = this.target.$fastView;
        // If there's no previous view that we might be able to
        // reuse then create a new view from the template.
        if (view === void 0) {
            view = value.create();
        }
        else {
            // If there is a previous view, but it wasn't created
            // from the same template as the new value, then we
            // need to remove the old view if it's still in the DOM
            // and create a new view from the template.
            if (this.target.$fastTemplate !== value) {
                if (view.isComposed) {
                    view.remove();
                    view.unbind();
                }
                view = value.create();
            }
        }
        // It's possible that the value is the same as the previous template
        // and that there's actually no need to compose it.
        if (!view.isComposed) {
            view.isComposed = true;
            view.bind(this.source, this.context);
            view.insertBefore(this.target);
            this.target.$fastView = view;
            this.target.$fastTemplate = value;
        }
        else if (view.needsBindOnly) {
            view.needsBindOnly = false;
            view.bind(this.source, this.context);
        }
    }
    else {
        const view = this.target.$fastView;
        // If there is a view and it's currently composed into
        // the DOM, then we need to remove it.
        if (view !== void 0 && view.isComposed) {
            view.isComposed = false;
            view.remove();
            if (view.needsBindOnly) {
                view.needsBindOnly = false;
            }
            else {
                view.unbind();
            }
        }
        this.target.textContent = value;
    }
}
function updatePropertyTarget(value) {
    this.target[this.targetName] = value;
}
function updateClassTarget(value) {
    const classVersions = this.classVersions || Object.create(null);
    const target = this.target;
    let version = this.version || 0;
    // Add the classes, tracking the version at which they were added.
    if (value !== null && value !== undefined && value.length) {
        const names = value.split(/\s+/);
        for (let i = 0, ii = names.length; i < ii; ++i) {
            const currentName = names[i];
            if (currentName === "") {
                continue;
            }
            classVersions[currentName] = version;
            target.classList.add(currentName);
        }
    }
    this.classVersions = classVersions;
    this.version = version + 1;
    // If this is the first call to add classes, there's no need to remove old ones.
    if (version === 0) {
        return;
    }
    // Remove classes from the previous version.
    version -= 1;
    for (const name in classVersions) {
        if (classVersions[name] === version) {
            target.classList.remove(name);
        }
    }
}
/**
 * A directive that configures data binding to element content and attributes.
 * @public
 */
class HTMLBindingDirective extends _html_directive_js__WEBPACK_IMPORTED_MODULE_2__.TargetedHTMLDirective {
    /**
     * Creates an instance of BindingDirective.
     * @param binding - A binding that returns the data used to update the DOM.
     */
    constructor(binding) {
        super();
        this.binding = binding;
        this.bind = normalBind;
        this.unbind = normalUnbind;
        this.updateTarget = updateAttributeTarget;
        this.isBindingVolatile = _observation_observable_js__WEBPACK_IMPORTED_MODULE_0__.Observable.isVolatileBinding(this.binding);
    }
    /**
     * Gets/sets the name of the attribute or property that this
     * binding is targeting.
     */
    get targetName() {
        return this.originalTargetName;
    }
    set targetName(value) {
        this.originalTargetName = value;
        if (value === void 0) {
            return;
        }
        switch (value[0]) {
            case ":":
                this.cleanedTargetName = value.substr(1);
                this.updateTarget = updatePropertyTarget;
                if (this.cleanedTargetName === "innerHTML") {
                    const binding = this.binding;
                    this.binding = (s, c) => _dom_js__WEBPACK_IMPORTED_MODULE_1__.DOM.createHTML(binding(s, c));
                }
                break;
            case "?":
                this.cleanedTargetName = value.substr(1);
                this.updateTarget = updateBooleanAttributeTarget;
                break;
            case "@":
                this.cleanedTargetName = value.substr(1);
                this.bind = triggerBind;
                this.unbind = triggerUnbind;
                break;
            default:
                this.cleanedTargetName = value;
                if (value === "class") {
                    this.updateTarget = updateClassTarget;
                }
                break;
        }
    }
    /**
     * Makes this binding target the content of an element rather than
     * a particular attribute or property.
     */
    targetAtContent() {
        this.updateTarget = updateContentTarget;
        this.unbind = contentUnbind;
    }
    /**
     * Creates the runtime BindingBehavior instance based on the configuration
     * information stored in the BindingDirective.
     * @param target - The target node that the binding behavior should attach to.
     */
    createBehavior(target) {
        /* eslint-disable-next-line @typescript-eslint/no-use-before-define */
        return new BindingBehavior(target, this.binding, this.isBindingVolatile, this.bind, this.unbind, this.updateTarget, this.cleanedTargetName);
    }
}
/**
 * A behavior that updates content and attributes based on a configured
 * BindingDirective.
 * @public
 */
class BindingBehavior {
    /**
     * Creates an instance of BindingBehavior.
     * @param target - The target of the data updates.
     * @param binding - The binding that returns the latest value for an update.
     * @param isBindingVolatile - Indicates whether the binding has volatile dependencies.
     * @param bind - The operation to perform during binding.
     * @param unbind - The operation to perform during unbinding.
     * @param updateTarget - The operation to perform when updating.
     * @param targetName - The name of the target attribute or property to update.
     */
    constructor(target, binding, isBindingVolatile, bind, unbind, updateTarget, targetName) {
        /** @internal */
        this.source = null;
        /** @internal */
        this.context = null;
        /** @internal */
        this.bindingObserver = null;
        this.target = target;
        this.binding = binding;
        this.isBindingVolatile = isBindingVolatile;
        this.bind = bind;
        this.unbind = unbind;
        this.updateTarget = updateTarget;
        this.targetName = targetName;
    }
    /** @internal */
    handleChange() {
        this.updateTarget(this.bindingObserver.observe(this.source, this.context));
    }
    /** @internal */
    handleEvent(event) {
        _observation_observable_js__WEBPACK_IMPORTED_MODULE_0__.ExecutionContext.setEvent(event);
        const result = this.binding(this.source, this.context);
        _observation_observable_js__WEBPACK_IMPORTED_MODULE_0__.ExecutionContext.setEvent(null);
        if (result !== true) {
            event.preventDefault();
        }
    }
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/templating/compiler.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/templating/compiler.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compileTemplate": () => (/* binding */ compileTemplate)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom.js */ "./node_modules/@microsoft/fast-element/dist/esm/dom.js");
/* harmony import */ var _binding_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binding.js */ "./node_modules/@microsoft/fast-element/dist/esm/templating/binding.js");


let sharedContext = null;
class CompilationContext {
    addFactory(factory) {
        factory.targetIndex = this.targetIndex;
        this.behaviorFactories.push(factory);
    }
    captureContentBinding(directive) {
        directive.targetAtContent();
        this.addFactory(directive);
    }
    reset() {
        this.behaviorFactories = [];
        this.targetIndex = -1;
    }
    release() {
        sharedContext = this;
    }
    static borrow(directives) {
        const shareable = sharedContext || new CompilationContext();
        shareable.directives = directives;
        shareable.reset();
        sharedContext = null;
        return shareable;
    }
}
function createAggregateBinding(parts) {
    if (parts.length === 1) {
        return parts[0];
    }
    let targetName;
    const partCount = parts.length;
    const finalParts = parts.map((x) => {
        if (typeof x === "string") {
            return () => x;
        }
        targetName = x.targetName || targetName;
        return x.binding;
    });
    const binding = (scope, context) => {
        let output = "";
        for (let i = 0; i < partCount; ++i) {
            output += finalParts[i](scope, context);
        }
        return output;
    };
    const directive = new _binding_js__WEBPACK_IMPORTED_MODULE_0__.HTMLBindingDirective(binding);
    directive.targetName = targetName;
    return directive;
}
const interpolationEndLength = _dom_js__WEBPACK_IMPORTED_MODULE_1__._interpolationEnd.length;
function parseContent(context, value) {
    const valueParts = value.split(_dom_js__WEBPACK_IMPORTED_MODULE_1__._interpolationStart);
    if (valueParts.length === 1) {
        return null;
    }
    const bindingParts = [];
    for (let i = 0, ii = valueParts.length; i < ii; ++i) {
        const current = valueParts[i];
        const index = current.indexOf(_dom_js__WEBPACK_IMPORTED_MODULE_1__._interpolationEnd);
        let literal;
        if (index === -1) {
            literal = current;
        }
        else {
            const directiveIndex = parseInt(current.substring(0, index));
            bindingParts.push(context.directives[directiveIndex]);
            literal = current.substring(index + interpolationEndLength);
        }
        if (literal !== "") {
            bindingParts.push(literal);
        }
    }
    return bindingParts;
}
function compileAttributes(context, node, includeBasicValues = false) {
    const attributes = node.attributes;
    for (let i = 0, ii = attributes.length; i < ii; ++i) {
        const attr = attributes[i];
        const attrValue = attr.value;
        const parseResult = parseContent(context, attrValue);
        let result = null;
        if (parseResult === null) {
            if (includeBasicValues) {
                result = new _binding_js__WEBPACK_IMPORTED_MODULE_0__.HTMLBindingDirective(() => attrValue);
                result.targetName = attr.name;
            }
        }
        else {
            result = createAggregateBinding(parseResult);
        }
        if (result !== null) {
            node.removeAttributeNode(attr);
            i--;
            ii--;
            context.addFactory(result);
        }
    }
}
function compileContent(context, node, walker) {
    const parseResult = parseContent(context, node.textContent);
    if (parseResult !== null) {
        let lastNode = node;
        for (let i = 0, ii = parseResult.length; i < ii; ++i) {
            const currentPart = parseResult[i];
            const currentNode = i === 0
                ? node
                : lastNode.parentNode.insertBefore(document.createTextNode(""), lastNode.nextSibling);
            if (typeof currentPart === "string") {
                currentNode.textContent = currentPart;
            }
            else {
                currentNode.textContent = " ";
                context.captureContentBinding(currentPart);
            }
            lastNode = currentNode;
            context.targetIndex++;
            if (currentNode !== node) {
                walker.nextNode();
            }
        }
        context.targetIndex--;
    }
}
/**
 * Compiles a template and associated directives into a raw compilation
 * result which include a cloneable DocumentFragment and factories capable
 * of attaching runtime behavior to nodes within the fragment.
 * @param template - The template to compile.
 * @param directives - The directives referenced by the template.
 * @remarks
 * The template that is provided for compilation is altered in-place
 * and cannot be compiled again. If the original template must be preserved,
 * it is recommended that you clone the original and pass the clone to this API.
 * @public
 */
function compileTemplate(template, directives) {
    const fragment = template.content;
    // https://bugs.chromium.org/p/chromium/issues/detail?id=1111864
    document.adoptNode(fragment);
    const context = CompilationContext.borrow(directives);
    compileAttributes(context, template, true);
    const hostBehaviorFactories = context.behaviorFactories;
    context.reset();
    const walker = _dom_js__WEBPACK_IMPORTED_MODULE_1__.DOM.createTemplateWalker(fragment);
    let node;
    while ((node = walker.nextNode())) {
        context.targetIndex++;
        switch (node.nodeType) {
            case 1: // element node
                compileAttributes(context, node);
                break;
            case 3: // text node
                compileContent(context, node, walker);
                break;
            case 8: // comment
                if (_dom_js__WEBPACK_IMPORTED_MODULE_1__.DOM.isMarker(node)) {
                    context.addFactory(directives[_dom_js__WEBPACK_IMPORTED_MODULE_1__.DOM.extractDirectiveIndexFromMarker(node)]);
                }
        }
    }
    let targetOffset = 0;
    if (
    // If the first node in a fragment is a marker, that means it's an unstable first node,
    // because something like a when, repeat, etc. could add nodes before the marker.
    // To mitigate this, we insert a stable first node. However, if we insert a node,
    // that will alter the result of the TreeWalker. So, we also need to offset the target index.
    _dom_js__WEBPACK_IMPORTED_MODULE_1__.DOM.isMarker(fragment.firstChild) ||
        // Or if there is only one node and a directive, it means the template's content
        // is *only* the directive. In that case, HTMLView.dispose() misses any nodes inserted by
        // the directive. Inserting a new node ensures proper disposal of nodes added by the directive.
        (fragment.childNodes.length === 1 && directives.length)) {
        fragment.insertBefore(document.createComment(""), fragment.firstChild);
        targetOffset = -1;
    }
    const viewBehaviorFactories = context.behaviorFactories;
    context.release();
    return {
        fragment,
        viewBehaviorFactories,
        hostBehaviorFactories,
        targetOffset,
    };
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/templating/html-directive.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/templating/html-directive.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttachedBehaviorHTMLDirective": () => (/* binding */ AttachedBehaviorHTMLDirective),
/* harmony export */   "HTMLDirective": () => (/* binding */ HTMLDirective),
/* harmony export */   "TargetedHTMLDirective": () => (/* binding */ TargetedHTMLDirective)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom.js */ "./node_modules/@microsoft/fast-element/dist/esm/dom.js");

/**
 * Instructs the template engine to apply behavior to a node.
 * @public
 */
class HTMLDirective {
    constructor() {
        /**
         * The index of the DOM node to which the created behavior will apply.
         */
        this.targetIndex = 0;
    }
}
/**
 * A {@link HTMLDirective} that targets a named attribute or property on a node.
 * @public
 */
class TargetedHTMLDirective extends HTMLDirective {
    constructor() {
        super(...arguments);
        /**
         * Creates a placeholder string based on the directive's index within the template.
         * @param index - The index of the directive within the template.
         */
        this.createPlaceholder = _dom_js__WEBPACK_IMPORTED_MODULE_0__.DOM.createInterpolationPlaceholder;
    }
}
/**
 * A directive that attaches special behavior to an element via a custom attribute.
 * @public
 */
class AttachedBehaviorHTMLDirective extends HTMLDirective {
    /**
     *
     * @param name - The name of the behavior; used as a custom attribute on the element.
     * @param behavior - The behavior to instantiate and attach to the element.
     * @param options - Options to pass to the behavior during creation.
     */
    constructor(name, behavior, options) {
        super();
        this.name = name;
        this.behavior = behavior;
        this.options = options;
    }
    /**
     * Creates a placeholder string based on the directive's index within the template.
     * @param index - The index of the directive within the template.
     * @remarks
     * Creates a custom attribute placeholder.
     */
    createPlaceholder(index) {
        return _dom_js__WEBPACK_IMPORTED_MODULE_0__.DOM.createCustomAttributePlaceholder(this.name, index);
    }
    /**
     * Creates a behavior for the provided target node.
     * @param target - The node instance to create the behavior for.
     * @remarks
     * Creates an instance of the `behavior` type this directive was constructed with
     * and passes the target and options to that `behavior`'s constructor.
     */
    createBehavior(target) {
        return new this.behavior(target, this.options);
    }
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/templating/node-observation.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/templating/node-observation.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NodeObservationBehavior": () => (/* binding */ NodeObservationBehavior),
/* harmony export */   "elements": () => (/* binding */ elements)
/* harmony export */ });
/* harmony import */ var _observation_observable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observation/observable.js */ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../platform.js */ "./node_modules/@microsoft/fast-element/dist/esm/platform.js");


/**
 * Creates a function that can be used to filter a Node array, selecting only elements.
 * @param selector - An optional selector to restrict the filter to.
 * @public
 */
function elements(selector) {
    if (selector) {
        return function (value, index, array) {
            return value.nodeType === 1 && value.matches(selector);
        };
    }
    return function (value, index, array) {
        return value.nodeType === 1;
    };
}
/**
 * A base class for node observation.
 * @internal
 */
class NodeObservationBehavior {
    /**
     * Creates an instance of NodeObservationBehavior.
     * @param target - The target to assign the nodes property on.
     * @param options - The options to use in configuring node observation.
     */
    constructor(target, options) {
        this.target = target;
        this.options = options;
        this.source = null;
    }
    /**
     * Bind this behavior to the source.
     * @param source - The source to bind to.
     * @param context - The execution context that the binding is operating within.
     */
    bind(source) {
        const name = this.options.property;
        this.shouldUpdate = _observation_observable_js__WEBPACK_IMPORTED_MODULE_0__.Observable.getAccessors(source).some((x) => x.name === name);
        this.source = source;
        this.updateTarget(this.computeNodes());
        if (this.shouldUpdate) {
            this.observe();
        }
    }
    /**
     * Unbinds this behavior from the source.
     * @param source - The source to unbind from.
     */
    unbind() {
        this.updateTarget(_platform_js__WEBPACK_IMPORTED_MODULE_1__.emptyArray);
        this.source = null;
        if (this.shouldUpdate) {
            this.disconnect();
        }
    }
    /** @internal */
    handleEvent() {
        this.updateTarget(this.computeNodes());
    }
    computeNodes() {
        let nodes = this.getNodes();
        if (this.options.filter !== void 0) {
            nodes = nodes.filter(this.options.filter);
        }
        return nodes;
    }
    updateTarget(value) {
        this.source[this.options.property] = value;
    }
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/templating/ref.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/templating/ref.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RefBehavior": () => (/* binding */ RefBehavior),
/* harmony export */   "ref": () => (/* binding */ ref)
/* harmony export */ });
/* harmony import */ var _html_directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html-directive.js */ "./node_modules/@microsoft/fast-element/dist/esm/templating/html-directive.js");

/**
 * The runtime behavior for template references.
 * @public
 */
class RefBehavior {
    /**
     * Creates an instance of RefBehavior.
     * @param target - The element to reference.
     * @param propertyName - The name of the property to assign the reference to.
     */
    constructor(target, propertyName) {
        this.target = target;
        this.propertyName = propertyName;
    }
    /**
     * Bind this behavior to the source.
     * @param source - The source to bind to.
     * @param context - The execution context that the binding is operating within.
     */
    bind(source) {
        source[this.propertyName] = this.target;
    }
    /**
     * Unbinds this behavior from the source.
     * @param source - The source to unbind from.
     */
    /* eslint-disable-next-line @typescript-eslint/no-empty-function */
    unbind() { }
}
/**
 * A directive that observes the updates a property with a reference to the element.
 * @param propertyName - The name of the property to assign the reference to.
 * @public
 */
function ref(propertyName) {
    return new _html_directive_js__WEBPACK_IMPORTED_MODULE_0__.AttachedBehaviorHTMLDirective("fast-ref", RefBehavior, propertyName);
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/templating/slotted.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/templating/slotted.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlottedBehavior": () => (/* binding */ SlottedBehavior),
/* harmony export */   "slotted": () => (/* binding */ slotted)
/* harmony export */ });
/* harmony import */ var _html_directive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html-directive.js */ "./node_modules/@microsoft/fast-element/dist/esm/templating/html-directive.js");
/* harmony import */ var _node_observation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node-observation.js */ "./node_modules/@microsoft/fast-element/dist/esm/templating/node-observation.js");


/**
 * The runtime behavior for slotted node observation.
 * @public
 */
class SlottedBehavior extends _node_observation_js__WEBPACK_IMPORTED_MODULE_0__.NodeObservationBehavior {
    /**
     * Creates an instance of SlottedBehavior.
     * @param target - The slot element target to observe.
     * @param options - The options to use when observing the slot.
     */
    constructor(target, options) {
        super(target, options);
    }
    /**
     * Begins observation of the nodes.
     */
    observe() {
        this.target.addEventListener("slotchange", this);
    }
    /**
     * Disconnects observation of the nodes.
     */
    disconnect() {
        this.target.removeEventListener("slotchange", this);
    }
    /**
     * Retrieves the nodes that should be assigned to the target.
     */
    getNodes() {
        return this.target.assignedNodes(this.options);
    }
}
/**
 * A directive that observes the `assignedNodes()` of a slot and updates a property
 * whenever they change.
 * @param propertyOrOptions - The options used to configure slotted node observation.
 * @public
 */
function slotted(propertyOrOptions) {
    if (typeof propertyOrOptions === "string") {
        propertyOrOptions = { property: propertyOrOptions };
    }
    return new _html_directive_js__WEBPACK_IMPORTED_MODULE_1__.AttachedBehaviorHTMLDirective("fast-slotted", SlottedBehavior, propertyOrOptions);
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/templating/template.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/templating/template.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewTemplate": () => (/* binding */ ViewTemplate),
/* harmony export */   "html": () => (/* binding */ html)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom.js */ "./node_modules/@microsoft/fast-element/dist/esm/dom.js");
/* harmony import */ var _observation_observable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../observation/observable.js */ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _compiler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compiler.js */ "./node_modules/@microsoft/fast-element/dist/esm/templating/compiler.js");
/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view.js */ "./node_modules/@microsoft/fast-element/dist/esm/templating/view.js");
/* harmony import */ var _html_directive_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./html-directive.js */ "./node_modules/@microsoft/fast-element/dist/esm/templating/html-directive.js");
/* harmony import */ var _binding_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./binding.js */ "./node_modules/@microsoft/fast-element/dist/esm/templating/binding.js");






/**
 * A template capable of creating HTMLView instances or rendering directly to DOM.
 * @public
 */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
class ViewTemplate {
    /**
     * Creates an instance of ViewTemplate.
     * @param html - The html representing what this template will instantiate, including placeholders for directives.
     * @param directives - The directives that will be connected to placeholders in the html.
     */
    constructor(html, directives) {
        this.behaviorCount = 0;
        this.hasHostBehaviors = false;
        this.fragment = null;
        this.targetOffset = 0;
        this.viewBehaviorFactories = null;
        this.hostBehaviorFactories = null;
        this.html = html;
        this.directives = directives;
    }
    /**
     * Creates an HTMLView instance based on this template definition.
     * @param hostBindingTarget - The element that host behaviors will be bound to.
     */
    create(hostBindingTarget) {
        if (this.fragment === null) {
            let template;
            const html = this.html;
            if (typeof html === "string") {
                template = document.createElement("template");
                template.innerHTML = _dom_js__WEBPACK_IMPORTED_MODULE_0__.DOM.createHTML(html);
                const fec = template.content.firstElementChild;
                if (fec !== null && fec.tagName === "TEMPLATE") {
                    template = fec;
                }
            }
            else {
                template = html;
            }
            const result = (0,_compiler_js__WEBPACK_IMPORTED_MODULE_1__.compileTemplate)(template, this.directives);
            this.fragment = result.fragment;
            this.viewBehaviorFactories = result.viewBehaviorFactories;
            this.hostBehaviorFactories = result.hostBehaviorFactories;
            this.targetOffset = result.targetOffset;
            this.behaviorCount =
                this.viewBehaviorFactories.length + this.hostBehaviorFactories.length;
            this.hasHostBehaviors = this.hostBehaviorFactories.length > 0;
        }
        const fragment = this.fragment.cloneNode(true);
        const viewFactories = this.viewBehaviorFactories;
        const behaviors = new Array(this.behaviorCount);
        const walker = _dom_js__WEBPACK_IMPORTED_MODULE_0__.DOM.createTemplateWalker(fragment);
        let behaviorIndex = 0;
        let targetIndex = this.targetOffset;
        let node = walker.nextNode();
        for (let ii = viewFactories.length; behaviorIndex < ii; ++behaviorIndex) {
            const factory = viewFactories[behaviorIndex];
            const factoryIndex = factory.targetIndex;
            while (node !== null) {
                if (targetIndex === factoryIndex) {
                    behaviors[behaviorIndex] = factory.createBehavior(node);
                    break;
                }
                else {
                    node = walker.nextNode();
                    targetIndex++;
                }
            }
        }
        if (this.hasHostBehaviors) {
            const hostFactories = this.hostBehaviorFactories;
            for (let i = 0, ii = hostFactories.length; i < ii; ++i, ++behaviorIndex) {
                behaviors[behaviorIndex] = hostFactories[i].createBehavior(hostBindingTarget);
            }
        }
        return new _view_js__WEBPACK_IMPORTED_MODULE_2__.HTMLView(fragment, behaviors);
    }
    /**
     * Creates an HTMLView from this template, binds it to the source, and then appends it to the host.
     * @param source - The data source to bind the template to.
     * @param host - The Element where the template will be rendered.
     * @param hostBindingTarget - An HTML element to target the host bindings at if different from the
     * host that the template is being attached to.
     */
    render(source, host, hostBindingTarget) {
        if (typeof host === "string") {
            host = document.getElementById(host);
        }
        if (hostBindingTarget === void 0) {
            hostBindingTarget = host;
        }
        const view = this.create(hostBindingTarget);
        view.bind(source, _observation_observable_js__WEBPACK_IMPORTED_MODULE_3__.defaultExecutionContext);
        view.appendTo(host);
        return view;
    }
}
// Much thanks to LitHTML for working this out!
const lastAttributeNameRegex = 
/* eslint-disable-next-line no-control-regex */
/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * Transforms a template literal string into a renderable ViewTemplate.
 * @param strings - The string fragments that are interpolated with the values.
 * @param values - The values that are interpolated with the string fragments.
 * @remarks
 * The html helper supports interpolation of strings, numbers, binding expressions,
 * other template instances, and Directive instances.
 * @public
 */
function html(strings, ...values) {
    const directives = [];
    let html = "";
    for (let i = 0, ii = strings.length - 1; i < ii; ++i) {
        const currentString = strings[i];
        let value = values[i];
        html += currentString;
        if (value instanceof ViewTemplate) {
            const template = value;
            value = () => template;
        }
        if (typeof value === "function") {
            value = new _binding_js__WEBPACK_IMPORTED_MODULE_4__.HTMLBindingDirective(value);
        }
        if (value instanceof _html_directive_js__WEBPACK_IMPORTED_MODULE_5__.TargetedHTMLDirective) {
            const match = lastAttributeNameRegex.exec(currentString);
            if (match !== null) {
                value.targetName = match[2];
            }
        }
        if (value instanceof _html_directive_js__WEBPACK_IMPORTED_MODULE_5__.HTMLDirective) {
            // Since not all values are directives, we can't use i
            // as the index for the placeholder. Instead, we need to
            // use directives.length to get the next index.
            html += value.createPlaceholder(directives.length);
            directives.push(value);
        }
        else {
            html += value;
        }
    }
    html += strings[strings.length - 1];
    return new ViewTemplate(html, directives);
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/templating/view.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/templating/view.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLView": () => (/* binding */ HTMLView)
/* harmony export */ });
// A singleton Range instance used to efficiently remove ranges of DOM nodes.
// See the implementation of HTMLView below for further details.
const range = document.createRange();
/**
 * The standard View implementation, which also implements ElementView and SyntheticView.
 * @public
 */
class HTMLView {
    /**
     * Constructs an instance of HTMLView.
     * @param fragment - The html fragment that contains the nodes for this view.
     * @param behaviors - The behaviors to be applied to this view.
     */
    constructor(fragment, behaviors) {
        this.fragment = fragment;
        this.behaviors = behaviors;
        /**
         * The data that the view is bound to.
         */
        this.source = null;
        /**
         * The execution context the view is running within.
         */
        this.context = null;
        this.firstChild = fragment.firstChild;
        this.lastChild = fragment.lastChild;
    }
    /**
     * Appends the view's DOM nodes to the referenced node.
     * @param node - The parent node to append the view's DOM nodes to.
     */
    appendTo(node) {
        node.appendChild(this.fragment);
    }
    /**
     * Inserts the view's DOM nodes before the referenced node.
     * @param node - The node to insert the view's DOM before.
     */
    insertBefore(node) {
        if (this.fragment.hasChildNodes()) {
            node.parentNode.insertBefore(this.fragment, node);
        }
        else {
            const parentNode = node.parentNode;
            const end = this.lastChild;
            let current = this.firstChild;
            let next;
            while (current !== end) {
                next = current.nextSibling;
                parentNode.insertBefore(current, node);
                current = next;
            }
            parentNode.insertBefore(end, node);
        }
    }
    /**
     * Removes the view's DOM nodes.
     * The nodes are not disposed and the view can later be re-inserted.
     */
    remove() {
        const fragment = this.fragment;
        const end = this.lastChild;
        let current = this.firstChild;
        let next;
        while (current !== end) {
            next = current.nextSibling;
            fragment.appendChild(current);
            current = next;
        }
        fragment.appendChild(end);
    }
    /**
     * Removes the view and unbinds its behaviors, disposing of DOM nodes afterward.
     * Once a view has been disposed, it cannot be inserted or bound again.
     */
    dispose() {
        const parent = this.firstChild.parentNode;
        const end = this.lastChild;
        let current = this.firstChild;
        let next;
        while (current !== end) {
            next = current.nextSibling;
            parent.removeChild(current);
            current = next;
        }
        parent.removeChild(end);
        const behaviors = this.behaviors;
        const oldSource = this.source;
        for (let i = 0, ii = behaviors.length; i < ii; ++i) {
            behaviors[i].unbind(oldSource);
        }
    }
    /**
     * Binds a view's behaviors to its binding source.
     * @param source - The binding source for the view's binding behaviors.
     * @param context - The execution context to run the behaviors within.
     */
    bind(source, context) {
        const behaviors = this.behaviors;
        if (this.source === source) {
            return;
        }
        else if (this.source !== null) {
            const oldSource = this.source;
            this.source = source;
            this.context = context;
            for (let i = 0, ii = behaviors.length; i < ii; ++i) {
                const current = behaviors[i];
                current.unbind(oldSource);
                current.bind(source, context);
            }
        }
        else {
            this.source = source;
            this.context = context;
            for (let i = 0, ii = behaviors.length; i < ii; ++i) {
                behaviors[i].bind(source, context);
            }
        }
    }
    /**
     * Unbinds a view's behaviors from its binding source.
     */
    unbind() {
        if (this.source === null) {
            return;
        }
        const behaviors = this.behaviors;
        const oldSource = this.source;
        for (let i = 0, ii = behaviors.length; i < ii; ++i) {
            behaviors[i].unbind(oldSource);
        }
        this.source = null;
    }
    /**
     * Efficiently disposes of a contiguous range of synthetic view instances.
     * @param views - A contiguous range of views to be disposed.
     */
    static disposeContiguousBatch(views) {
        if (views.length === 0) {
            return;
        }
        range.setStartBefore(views[0].firstChild);
        range.setEndAfter(views[views.length - 1].lastChild);
        range.deleteContents();
        for (let i = 0, ii = views.length; i < ii; ++i) {
            const view = views[i];
            const behaviors = view.behaviors;
            const oldSource = view.source;
            for (let j = 0, jj = behaviors.length; j < jj; ++j) {
                behaviors[j].unbind(oldSource);
            }
        }
    }
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/button/button.form-associated.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/button/button.form-associated.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormAssociatedButton": () => (/* binding */ FormAssociatedButton)
/* harmony export */ });
/* harmony import */ var _form_associated_form_associated_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form-associated/form-associated.js */ "./node_modules/@microsoft/fast-foundation/dist/esm/form-associated/form-associated.js");
/* harmony import */ var _foundation_element_foundation_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../foundation-element/foundation-element.js */ "./node_modules/@microsoft/fast-foundation/dist/esm/foundation-element/foundation-element.js");


class _Button extends _foundation_element_foundation_element_js__WEBPACK_IMPORTED_MODULE_0__.FoundationElement {
}
/**
 * A form-associated base class for the {@link @microsoft/fast-foundation#(Button:class)} component.
 *
 * @internal
 */
class FormAssociatedButton extends (0,_form_associated_form_associated_js__WEBPACK_IMPORTED_MODULE_1__.FormAssociated)(_Button) {
    constructor() {
        super(...arguments);
        this.proxy = document.createElement("input");
    }
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/button/button.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/button/button.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* binding */ Button),
/* harmony export */   "DelegatesARIAButton": () => (/* binding */ DelegatesARIAButton)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/components/attributes.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _patterns_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../patterns/index.js */ "./node_modules/@microsoft/fast-foundation/dist/esm/patterns/aria-global.js");
/* harmony import */ var _patterns_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../patterns/index.js */ "./node_modules/@microsoft/fast-foundation/dist/esm/patterns/start-end.js");
/* harmony import */ var _utilities_apply_mixins_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/apply-mixins.js */ "./node_modules/@microsoft/fast-foundation/dist/esm/utilities/apply-mixins.js");
/* harmony import */ var _button_form_associated_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.form-associated.js */ "./node_modules/@microsoft/fast-foundation/dist/esm/button/button.form-associated.js");





/**
 * A Button Custom HTML Element.
 * Based largely on the {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button | <button> element }.
 *
 * @public
 */
class Button extends _button_form_associated_js__WEBPACK_IMPORTED_MODULE_0__.FormAssociatedButton {
    constructor() {
        super(...arguments);
        /**
         * Prevent events to propagate if disabled and has no slotted content wrapped in HTML elements
         * @internal
         */
        this.handleClick = (e) => {
            var _a;
            if (this.disabled && ((_a = this.defaultSlottedContent) === null || _a === void 0 ? void 0 : _a.length) <= 1) {
                e.stopPropagation();
            }
        };
        /**
         * Submits the parent form
         */
        this.handleSubmission = () => {
            if (!this.form) {
                return;
            }
            const attached = this.proxy.isConnected;
            if (!attached) {
                this.attachProxy();
            }
            // Browser support for requestSubmit is not comprehensive
            // so click the proxy if it isn't supported
            typeof this.form.requestSubmit === "function"
                ? this.form.requestSubmit(this.proxy)
                : this.proxy.click();
            if (!attached) {
                this.detachProxy();
            }
        };
        /**
         * Resets the parent form
         */
        this.handleFormReset = () => {
            var _a;
            (_a = this.form) === null || _a === void 0 ? void 0 : _a.reset();
        };
        /**
         * Overrides the focus call for where delegatesFocus is unsupported.
         * This check works for Chrome, Edge Chromium, FireFox, and Safari
         * Relevant PR on the Firefox browser: https://phabricator.services.mozilla.com/D123858
         */
        this.handleUnsupportedDelegatesFocus = () => {
            var _a;
            // Check to see if delegatesFocus is supported
            if (window.ShadowRoot &&
                !window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus") && ((_a = this.$fastController.definition.shadowOptions) === null || _a === void 0 ? void 0 : _a.delegatesFocus)) {
                this.focus = () => {
                    this.control.focus();
                };
            }
        };
    }
    formactionChanged() {
        if (this.proxy instanceof HTMLInputElement) {
            this.proxy.formAction = this.formaction;
        }
    }
    formenctypeChanged() {
        if (this.proxy instanceof HTMLInputElement) {
            this.proxy.formEnctype = this.formenctype;
        }
    }
    formmethodChanged() {
        if (this.proxy instanceof HTMLInputElement) {
            this.proxy.formMethod = this.formmethod;
        }
    }
    formnovalidateChanged() {
        if (this.proxy instanceof HTMLInputElement) {
            this.proxy.formNoValidate = this.formnovalidate;
        }
    }
    formtargetChanged() {
        if (this.proxy instanceof HTMLInputElement) {
            this.proxy.formTarget = this.formtarget;
        }
    }
    typeChanged(previous, next) {
        if (this.proxy instanceof HTMLInputElement) {
            this.proxy.type = this.type;
        }
        next === "submit" && this.addEventListener("click", this.handleSubmission);
        previous === "submit" && this.removeEventListener("click", this.handleSubmission);
        next === "reset" && this.addEventListener("click", this.handleFormReset);
        previous === "reset" && this.removeEventListener("click", this.handleFormReset);
    }
    /**
     * @internal
     */
    connectedCallback() {
        var _a;
        super.connectedCallback();
        this.proxy.setAttribute("type", this.type);
        this.handleUnsupportedDelegatesFocus();
        const elements = Array.from((_a = this.control) === null || _a === void 0 ? void 0 : _a.children);
        if (elements) {
            elements.forEach((span) => {
                span.addEventListener("click", this.handleClick);
            });
        }
    }
    /**
     * @internal
     */
    disconnectedCallback() {
        var _a;
        super.disconnectedCallback();
        const elements = Array.from((_a = this.control) === null || _a === void 0 ? void 0 : _a.children);
        if (elements) {
            elements.forEach((span) => {
                span.removeEventListener("click", this.handleClick);
            });
        }
    }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.attr)({ mode: "boolean" })
], Button.prototype, "autofocus", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.attr)({ attribute: "form" })
], Button.prototype, "formId", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.attr
], Button.prototype, "formaction", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.attr
], Button.prototype, "formenctype", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.attr
], Button.prototype, "formmethod", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.attr)({ mode: "boolean" })
], Button.prototype, "formnovalidate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.attr
], Button.prototype, "formtarget", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.attr
], Button.prototype, "type", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.observable
], Button.prototype, "defaultSlottedContent", void 0);
/**
 * Includes ARIA states and properties relating to the ARIA button role
 *
 * @public
 */
class DelegatesARIAButton {
}
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.attr)({ attribute: "aria-expanded" })
], DelegatesARIAButton.prototype, "ariaExpanded", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.attr)({ attribute: "aria-pressed" })
], DelegatesARIAButton.prototype, "ariaPressed", void 0);
(0,_utilities_apply_mixins_js__WEBPACK_IMPORTED_MODULE_4__.applyMixins)(DelegatesARIAButton, _patterns_index_js__WEBPACK_IMPORTED_MODULE_5__.ARIAGlobalStatesAndProperties);
(0,_utilities_apply_mixins_js__WEBPACK_IMPORTED_MODULE_4__.applyMixins)(Button, _patterns_index_js__WEBPACK_IMPORTED_MODULE_6__.StartEnd, DelegatesARIAButton);


/***/ }),

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/button/button.template.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/button/button.template.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buttonTemplate": () => (/* binding */ buttonTemplate)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/templating/template.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/templating/ref.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/templating/slotted.js");
/* harmony import */ var _patterns_start_end_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../patterns/start-end.js */ "./node_modules/@microsoft/fast-foundation/dist/esm/patterns/start-end.js");


/**
 * The template for the {@link @microsoft/fast-foundation#(Button:class)} component.
 * @public
 */
const buttonTemplate = (context, definition) => _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
    <button
        class="control"
        part="control"
        ?autofocus="${x => x.autofocus}"
        ?disabled="${x => x.disabled}"
        form="${x => x.formId}"
        formaction="${x => x.formaction}"
        formenctype="${x => x.formenctype}"
        formmethod="${x => x.formmethod}"
        formnovalidate="${x => x.formnovalidate}"
        formtarget="${x => x.formtarget}"
        name="${x => x.name}"
        type="${x => x.type}"
        value="${x => x.value}"
        aria-atomic="${x => x.ariaAtomic}"
        aria-busy="${x => x.ariaBusy}"
        aria-controls="${x => x.ariaControls}"
        aria-current="${x => x.ariaCurrent}"
        aria-describedby="${x => x.ariaDescribedby}"
        aria-details="${x => x.ariaDetails}"
        aria-disabled="${x => x.ariaDisabled}"
        aria-errormessage="${x => x.ariaErrormessage}"
        aria-expanded="${x => x.ariaExpanded}"
        aria-flowto="${x => x.ariaFlowto}"
        aria-haspopup="${x => x.ariaHaspopup}"
        aria-hidden="${x => x.ariaHidden}"
        aria-invalid="${x => x.ariaInvalid}"
        aria-keyshortcuts="${x => x.ariaKeyshortcuts}"
        aria-label="${x => x.ariaLabel}"
        aria-labelledby="${x => x.ariaLabelledby}"
        aria-live="${x => x.ariaLive}"
        aria-owns="${x => x.ariaOwns}"
        aria-pressed="${x => x.ariaPressed}"
        aria-relevant="${x => x.ariaRelevant}"
        aria-roledescription="${x => x.ariaRoledescription}"
        ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.ref)("control")}
    >
        ${(0,_patterns_start_end_js__WEBPACK_IMPORTED_MODULE_2__.startSlotTemplate)(context, definition)}
        <span class="content" part="content">
            <slot ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.slotted)("defaultSlottedContent")}></slot>
        </span>
        ${(0,_patterns_start_end_js__WEBPACK_IMPORTED_MODULE_2__.endSlotTemplate)(context, definition)}
    </button>
`;


/***/ }),

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/design-system/component-presentation.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/design-system/component-presentation.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentPresentation": () => (/* binding */ ComponentPresentation),
/* harmony export */   "DefaultComponentPresentation": () => (/* binding */ DefaultComponentPresentation)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/styles/element-styles.js");
/* harmony import */ var _di_di_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../di/di.js */ "./node_modules/@microsoft/fast-foundation/dist/esm/di/di.js");


function presentationKeyFromTag(tagName) {
    return `${tagName.toLowerCase()}:presentation`;
}
const presentationRegistry = new Map();
/**
 * An API gateway to component presentation features.
 * @public
 */
const ComponentPresentation = Object.freeze({
    /**
     * Defines a component presentation for an element.
     * @param tagName - The element name to define the presentation for.
     * @param presentation - The presentation that will be applied to matching elements.
     * @param container - The dependency injection container to register the configuration in.
     * @public
     */
    define(tagName, presentation, container) {
        const key = presentationKeyFromTag(tagName);
        const existing = presentationRegistry.get(key);
        if (existing === void 0) {
            presentationRegistry.set(key, presentation);
        }
        else {
            // false indicates that we have more than one presentation
            // registered for a tagName and we must resolve through DI
            presentationRegistry.set(key, false);
        }
        container.register(_di_di_js__WEBPACK_IMPORTED_MODULE_0__.Registration.instance(key, presentation));
    },
    /**
     * Finds a component presentation for the specified element name,
     * searching the DOM hierarchy starting from the provided element.
     * @param tagName - The name of the element to locate the presentation for.
     * @param element - The element to begin the search from.
     * @returns The component presentation or null if none is found.
     * @public
     */
    forTag(tagName, element) {
        const key = presentationKeyFromTag(tagName);
        const existing = presentationRegistry.get(key);
        if (existing === false) {
            const container = _di_di_js__WEBPACK_IMPORTED_MODULE_0__.DI.findResponsibleContainer(element);
            return container.get(key);
        }
        return existing || null;
    },
});
/**
 * The default implementation of ComponentPresentation, used by FoundationElement.
 * @public
 */
class DefaultComponentPresentation {
    /**
     * Creates an instance of DefaultComponentPresentation.
     * @param template - The template to apply to the element.
     * @param styles - The styles to apply to the element.
     * @public
     */
    constructor(template, styles) {
        this.template = template || null;
        this.styles =
            styles === void 0
                ? null
                : Array.isArray(styles)
                    ? _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.ElementStyles.create(styles)
                    : styles instanceof _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.ElementStyles
                        ? styles
                        : _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.ElementStyles.create([styles]);
    }
    /**
     * Applies the presentation details to the specified element.
     * @param element - The element to apply the presentation details to.
     * @public
     */
    applyTo(element) {
        const controller = element.$fastController;
        if (controller.template === null) {
            controller.template = this.template;
        }
        if (controller.styles === null) {
            controller.styles = this.styles;
        }
    }
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/di/di.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/di/di.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "ContainerConfiguration": () => (/* binding */ ContainerConfiguration),
/* harmony export */   "ContainerImpl": () => (/* binding */ ContainerImpl),
/* harmony export */   "DI": () => (/* binding */ DI),
/* harmony export */   "DefaultResolver": () => (/* binding */ DefaultResolver),
/* harmony export */   "FactoryImpl": () => (/* binding */ FactoryImpl),
/* harmony export */   "Registration": () => (/* binding */ Registration),
/* harmony export */   "ResolverBuilder": () => (/* binding */ ResolverBuilder),
/* harmony export */   "ResolverImpl": () => (/* binding */ ResolverImpl),
/* harmony export */   "ServiceLocator": () => (/* binding */ ServiceLocator),
/* harmony export */   "all": () => (/* binding */ all),
/* harmony export */   "ignore": () => (/* binding */ ignore),
/* harmony export */   "inject": () => (/* binding */ inject),
/* harmony export */   "lazy": () => (/* binding */ lazy),
/* harmony export */   "newInstanceForScope": () => (/* binding */ newInstanceForScope),
/* harmony export */   "newInstanceOf": () => (/* binding */ newInstanceOf),
/* harmony export */   "optional": () => (/* binding */ optional),
/* harmony export */   "singleton": () => (/* binding */ singleton),
/* harmony export */   "transient": () => (/* binding */ transient),
/* harmony export */   "validateKey": () => (/* binding */ validateKey)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/components/fast-element.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/platform.js");
/**
 * Big thanks to https://github.com/fkleuver and the https://github.com/aurelia/aurelia project
 * for the bulk of this code and many of the associated tests.
 */

// Tiny polyfill for TypeScript's Reflect metadata API.
const metadataByTarget = new Map();
if (!("metadata" in Reflect)) {
    Reflect.metadata = function (key, value) {
        return function (target) {
            Reflect.defineMetadata(key, value, target);
        };
    };
    Reflect.defineMetadata = function (key, value, target) {
        let metadata = metadataByTarget.get(target);
        if (metadata === void 0) {
            metadataByTarget.set(target, (metadata = new Map()));
        }
        metadata.set(key, value);
    };
    Reflect.getOwnMetadata = function (key, target) {
        const metadata = metadataByTarget.get(target);
        if (metadata !== void 0) {
            return metadata.get(key);
        }
        return void 0;
    };
}
/**
 * A utility class used that constructs and registers resolvers for a dependency
 * injection container. Supports a standard set of object lifetimes.
 * @public
 */
class ResolverBuilder {
    /**
     *
     * @param container - The container to create resolvers for.
     * @param key - The key to register resolvers under.
     */
    constructor(container, key) {
        this.container = container;
        this.key = key;
    }
    /**
     * Creates a resolver for an existing object instance.
     * @param value - The instance to resolve.
     * @returns The resolver.
     */
    instance(value) {
        return this.registerResolver(0 /* instance */, value);
    }
    /**
     * Creates a resolver that enforces a singleton lifetime.
     * @param value - The type to create and cache the singleton for.
     * @returns The resolver.
     */
    singleton(value) {
        return this.registerResolver(1 /* singleton */, value);
    }
    /**
     * Creates a resolver that creates a new instance for every dependency request.
     * @param value - The type to create instances of.
     * @returns - The resolver.
     */
    transient(value) {
        return this.registerResolver(2 /* transient */, value);
    }
    /**
     * Creates a resolver that invokes a callback function for every dependency resolution
     * request, allowing custom logic to return the dependency.
     * @param value - The callback to call during resolution.
     * @returns The resolver.
     */
    callback(value) {
        return this.registerResolver(3 /* callback */, value);
    }
    /**
     * Creates a resolver that invokes a callback function the first time that a dependency
     * resolution is requested. The returned value is then cached and provided for all
     * subsequent requests.
     * @param value - The callback to call during the first resolution.
     * @returns The resolver.
     */
    cachedCallback(value) {
        return this.registerResolver(3 /* callback */, cacheCallbackResult(value));
    }
    /**
     * Aliases the current key to a different key.
     * @param destinationKey - The key to point the alias to.
     * @returns The resolver.
     */
    aliasTo(destinationKey) {
        return this.registerResolver(5 /* alias */, destinationKey);
    }
    registerResolver(strategy, state) {
        const { container, key } = this;
        /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
        this.container = this.key = (void 0);
        return container.registerResolver(key, new ResolverImpl(key, strategy, state));
    }
}
function cloneArrayWithPossibleProps(source) {
    const clone = source.slice();
    const keys = Object.keys(source);
    const len = keys.length;
    let key;
    for (let i = 0; i < len; ++i) {
        key = keys[i];
        if (!isArrayIndex(key)) {
            clone[key] = source[key];
        }
    }
    return clone;
}
/**
 * A set of default resolvers useful in configuring a container.
 * @public
 */
const DefaultResolver = Object.freeze({
    /**
     * Disables auto-registration and throws for all un-registered dependencies.
     * @param key - The key to create the resolver for.
     */
    none(key) {
        throw Error(`${key.toString()} not registered, did you forget to add @singleton()?`);
    },
    /**
     * Provides default singleton resolution behavior during auto-registration.
     * @param key - The key to create the resolver for.
     * @returns The resolver.
     */
    singleton(key) {
        return new ResolverImpl(key, 1 /* singleton */, key);
    },
    /**
     * Provides default transient resolution behavior during auto-registration.
     * @param key - The key to create the resolver for.
     * @returns The resolver.
     */
    transient(key) {
        return new ResolverImpl(key, 2 /* transient */, key);
    },
});
/**
 * Configuration for a dependency injection container.
 * @public
 */
const ContainerConfiguration = Object.freeze({
    /**
     * The default configuration used when creating a DOM-disconnected container.
     * @remarks
     * The default creates a root container, with no parent container. It does not handle
     * owner requests and it uses singleton resolution behavior for auto-registration.
     */
    default: Object.freeze({
        parentLocator: () => null,
        responsibleForOwnerRequests: false,
        defaultResolver: DefaultResolver.singleton,
    }),
});
const dependencyLookup = new Map();
function getParamTypes(key) {
    return (Type) => {
        return Reflect.getOwnMetadata(key, Type);
    };
}
let rootDOMContainer = null;
/**
 * The gateway to dependency injection APIs.
 * @public
 */
const DI = Object.freeze({
    /**
     * Creates a new dependency injection container.
     * @param config - The configuration for the container.
     * @returns A newly created dependency injection container.
     */
    createContainer(config) {
        return new ContainerImpl(null, Object.assign({}, ContainerConfiguration.default, config));
    },
    /**
     * Finds the dependency injection container responsible for providing dependencies
     * to the specified node.
     * @param node - The node to find the responsible container for.
     * @returns The container responsible for providing dependencies to the node.
     * @remarks
     * This will be the same as the parent container if the specified node
     * does not itself host a container configured with responsibleForOwnerRequests.
     */
    findResponsibleContainer(node) {
        const owned = node.$$container$$;
        if (owned && owned.responsibleForOwnerRequests) {
            return owned;
        }
        return DI.findParentContainer(node);
    },
    /**
     * Find the dependency injection container up the DOM tree from this node.
     * @param node - The node to find the parent container for.
     * @returns The parent container of this node.
     * @remarks
     * This will be the same as the responsible container if the specified node
     * does not itself host a container configured with responsibleForOwnerRequests.
     */
    findParentContainer(node) {
        const event = new CustomEvent(DILocateParentEventType, {
            bubbles: true,
            composed: true,
            cancelable: true,
            detail: { container: void 0 },
        });
        node.dispatchEvent(event);
        return event.detail.container || DI.getOrCreateDOMContainer();
    },
    /**
     * Returns a dependency injection container if one is explicitly owned by the specified
     * node. If one is not owned, then a new container is created and assigned to the node.
     * @param node - The node to find or create the container for.
     * @param config - The configuration for the container if one needs to be created.
     * @returns The located or created container.
     * @remarks
     * This API does not search for a responsible or parent container. It looks only for a container
     * directly defined on the specified node and creates one at that location if one does not
     * already exist.
     */
    getOrCreateDOMContainer(node, config) {
        if (!node) {
            return (rootDOMContainer ||
                (rootDOMContainer = new ContainerImpl(null, Object.assign({}, ContainerConfiguration.default, config, {
                    parentLocator: () => null,
                }))));
        }
        return (node.$$container$$ ||
            new ContainerImpl(node, Object.assign({}, ContainerConfiguration.default, config, {
                parentLocator: DI.findParentContainer,
            })));
    },
    /**
     * Gets the "design:paramtypes" metadata for the specified type.
     * @param Type - The type to get the metadata for.
     * @returns The metadata array or undefined if no metadata is found.
     */
    getDesignParamtypes: getParamTypes("design:paramtypes"),
    /**
     * Gets the "di:paramtypes" metadata for the specified type.
     * @param Type - The type to get the metadata for.
     * @returns The metadata array or undefined if no metadata is found.
     */
    getAnnotationParamtypes: getParamTypes("di:paramtypes"),
    /**
     *
     * @param Type - Gets the "di:paramtypes" metadata for the specified type. If none is found,
     * an empty metadata array is created and added.
     * @returns The metadata array.
     */
    getOrCreateAnnotationParamTypes(Type) {
        let annotationParamtypes = this.getAnnotationParamtypes(Type);
        if (annotationParamtypes === void 0) {
            Reflect.defineMetadata("di:paramtypes", (annotationParamtypes = []), Type);
        }
        return annotationParamtypes;
    },
    /**
     * Gets the dependency keys representing what is needed to instantiate the specified type.
     * @param Type - The type to get the dependencies for.
     * @returns An array of dependency keys.
     */
    getDependencies(Type) {
        // Note: Every detail of this getDependencies method is pretty deliberate at the moment, and probably not yet 100% tested from every possible angle,
        // so be careful with making changes here as it can have a huge impact on complex end user apps.
        // Preferably, only make changes to the dependency resolution process via a RFC.
        let dependencies = dependencyLookup.get(Type);
        if (dependencies === void 0) {
            // Type.length is the number of constructor parameters. If this is 0, it could mean the class has an empty constructor
            // but it could also mean the class has no constructor at all (in which case it inherits the constructor from the prototype).
            // Non-zero constructor length + no paramtypes means emitDecoratorMetadata is off, or the class has no decorator.
            // We're not doing anything with the above right now, but it's good to keep in mind for any future issues.
            const inject = Type.inject;
            if (inject === void 0) {
                // design:paramtypes is set by tsc when emitDecoratorMetadata is enabled.
                const designParamtypes = DI.getDesignParamtypes(Type);
                // di:paramtypes is set by the parameter decorator from DI.createInterface or by @inject
                const annotationParamtypes = DI.getAnnotationParamtypes(Type);
                if (designParamtypes === void 0) {
                    if (annotationParamtypes === void 0) {
                        // Only go up the prototype if neither static inject nor any of the paramtypes is defined, as
                        // there is no sound way to merge a type's deps with its prototype's deps
                        const Proto = Object.getPrototypeOf(Type);
                        if (typeof Proto === "function" && Proto !== Function.prototype) {
                            dependencies = cloneArrayWithPossibleProps(DI.getDependencies(Proto));
                        }
                        else {
                            dependencies = [];
                        }
                    }
                    else {
                        // No design:paramtypes so just use the di:paramtypes
                        dependencies = cloneArrayWithPossibleProps(annotationParamtypes);
                    }
                }
                else if (annotationParamtypes === void 0) {
                    // No di:paramtypes so just use the design:paramtypes
                    dependencies = cloneArrayWithPossibleProps(designParamtypes);
                }
                else {
                    // We've got both, so merge them (in case of conflict on same index, di:paramtypes take precedence)
                    dependencies = cloneArrayWithPossibleProps(designParamtypes);
                    let len = annotationParamtypes.length;
                    let auAnnotationParamtype;
                    for (let i = 0; i < len; ++i) {
                        auAnnotationParamtype = annotationParamtypes[i];
                        if (auAnnotationParamtype !== void 0) {
                            dependencies[i] = auAnnotationParamtype;
                        }
                    }
                    const keys = Object.keys(annotationParamtypes);
                    len = keys.length;
                    let key;
                    for (let i = 0; i < len; ++i) {
                        key = keys[i];
                        if (!isArrayIndex(key)) {
                            dependencies[key] = annotationParamtypes[key];
                        }
                    }
                }
            }
            else {
                // Ignore paramtypes if we have static inject
                dependencies = cloneArrayWithPossibleProps(inject);
            }
            dependencyLookup.set(Type, dependencies);
        }
        return dependencies;
    },
    /**
     * Defines a property on a web component class. The value of this property will
     * be resolved from the dependency injection container responsible for the element
     * instance, based on where it is connected in the DOM.
     * @param target - The target to define the property on.
     * @param propertyName - The name of the property to define.
     * @param key - The dependency injection key.
     * @param respectConnection - Indicates whether or not to update the property value if the
     * hosting component is disconnected and then re-connected at a different location in the DOM.
     * @remarks
     * The respectConnection option is only applicable to elements that descend from FASTElement.
     */
    defineProperty(target, propertyName, key, respectConnection = false) {
        const diPropertyKey = `$di_${propertyName}`;
        Reflect.defineProperty(target, propertyName, {
            get: function () {
                let value = this[diPropertyKey];
                if (value === void 0) {
                    const container = this instanceof HTMLElement
                        ? DI.findResponsibleContainer(this)
                        : DI.getOrCreateDOMContainer();
                    value = container.get(key);
                    this[diPropertyKey] = value;
                    if (respectConnection && this instanceof _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.FASTElement) {
                        const notifier = this.$fastController;
                        const handleChange = () => {
                            const newContainer = DI.findResponsibleContainer(this);
                            const newValue = newContainer.get(key);
                            const oldValue = this[diPropertyKey];
                            if (newValue !== oldValue) {
                                this[diPropertyKey] = value;
                                notifier.notify(propertyName);
                            }
                        };
                        notifier.subscribe({ handleChange }, "isConnected");
                    }
                }
                return value;
            },
        });
    },
    /**
     * Creates a dependency injection key.
     * @param nameConfigOrCallback - A friendly name for the key or a lambda that configures a
     * default resolution for the dependency.
     * @param configuror - If a friendly name was provided for the first parameter, then an optional
     * lambda that configures a default resolution for the dependency can be provided second.
     * @returns The created key.
     * @remarks
     * The created key can be used as a property decorator or constructor parameter decorator,
     * in addition to its standard use in an inject array or through direct container APIs.
     */
    createInterface(nameConfigOrCallback, configuror) {
        const configure = typeof nameConfigOrCallback === "function"
            ? nameConfigOrCallback
            : configuror;
        const friendlyName = typeof nameConfigOrCallback === "string"
            ? nameConfigOrCallback
            : nameConfigOrCallback && "friendlyName" in nameConfigOrCallback
                ? nameConfigOrCallback.friendlyName || defaultFriendlyName
                : defaultFriendlyName;
        const respectConnection = typeof nameConfigOrCallback === "string"
            ? false
            : nameConfigOrCallback && "respectConnection" in nameConfigOrCallback
                ? nameConfigOrCallback.respectConnection || false
                : false;
        const Interface = function (target, property, index) {
            if (target == null || new.target !== undefined) {
                throw new Error(`No registration for interface: '${Interface.friendlyName}'`);
            }
            if (property) {
                DI.defineProperty(target, property, Interface, respectConnection);
            }
            else {
                const annotationParamtypes = DI.getOrCreateAnnotationParamTypes(target);
                annotationParamtypes[index] = Interface;
            }
        };
        Interface.$isInterface = true;
        Interface.friendlyName = friendlyName == null ? "(anonymous)" : friendlyName;
        if (configure != null) {
            Interface.register = function (container, key) {
                return configure(new ResolverBuilder(container, key !== null && key !== void 0 ? key : Interface));
            };
        }
        Interface.toString = function toString() {
            return `InterfaceSymbol<${Interface.friendlyName}>`;
        };
        return Interface;
    },
    /**
     * A decorator that specifies what to inject into its target.
     * @param dependencies - The dependencies to inject.
     * @returns The decorator to be applied to the target class.
     * @remarks
     * The decorator can be used to decorate a class, listing all of the classes dependencies.
     * Or it can be used to decorate a constructor paramter, indicating what to inject for that
     * parameter.
     * Or it can be used for a web component property, indicating what that property should resolve to.
     */
    inject(...dependencies) {
        return function (target, key, descriptor) {
            if (typeof descriptor === "number") {
                // It's a parameter decorator.
                const annotationParamtypes = DI.getOrCreateAnnotationParamTypes(target);
                const dep = dependencies[0];
                if (dep !== void 0) {
                    annotationParamtypes[descriptor] = dep;
                }
            }
            else if (key) {
                DI.defineProperty(target, key, dependencies[0]);
            }
            else {
                const annotationParamtypes = descriptor
                    ? DI.getOrCreateAnnotationParamTypes(descriptor.value)
                    : DI.getOrCreateAnnotationParamTypes(target);
                let dep;
                for (let i = 0; i < dependencies.length; ++i) {
                    dep = dependencies[i];
                    if (dep !== void 0) {
                        annotationParamtypes[i] = dep;
                    }
                }
            }
        };
    },
    /**
     * Registers the `target` class as a transient dependency; each time the dependency is resolved
     * a new instance will be created.
     *
     * @param target - The class / constructor function to register as transient.
     * @returns The same class, with a static `register` method that takes a container and returns the appropriate resolver.
     *
     * @example
     * On an existing class
     * ```ts
     * class Foo { }
     * DI.transient(Foo);
     * ```
     *
     * @example
     * Inline declaration
     *
     * ```ts
     * const Foo = DI.transient(class { });
     * // Foo is now strongly typed with register
     * Foo.register(container);
     * ```
     *
     * @public
     */
    transient(target) {
        target.register = function register(container) {
            const registration = Registration.transient(target, target);
            return registration.register(container);
        };
        target.registerInRequestor = false;
        return target;
    },
    /**
     * Registers the `target` class as a singleton dependency; the class will only be created once. Each
     * consecutive time the dependency is resolved, the same instance will be returned.
     *
     * @param target - The class / constructor function to register as a singleton.
     * @returns The same class, with a static `register` method that takes a container and returns the appropriate resolver.
     * @example
     * On an existing class
     * ```ts
     * class Foo { }
     * DI.singleton(Foo);
     * ```
     *
     * @example
     * Inline declaration
     * ```ts
     * const Foo = DI.singleton(class { });
     * // Foo is now strongly typed with register
     * Foo.register(container);
     * ```
     *
     * @public
     */
    singleton(target, options = defaultSingletonOptions) {
        target.register = function register(container) {
            const registration = Registration.singleton(target, target);
            return registration.register(container);
        };
        target.registerInRequestor = options.scoped;
        return target;
    },
});
/**
 * The interface key that resolves the dependency injection container itself.
 * @public
 */
const Container = DI.createInterface("Container");
/**
 * The interface key that resolves the service locator itself.
 * @public
 */
const ServiceLocator = Container;
function createResolver(getter) {
    return function (key) {
        const resolver = function (target, property, descriptor) {
            DI.inject(resolver)(target, property, descriptor);
        };
        resolver.$isResolver = true;
        resolver.resolve = function (handler, requestor) {
            return getter(key, handler, requestor);
        };
        return resolver;
    };
}
/**
 * A decorator that specifies what to inject into its target.
 * @param dependencies - The dependencies to inject.
 * @returns The decorator to be applied to the target class.
 * @remarks
 * The decorator can be used to decorate a class, listing all of the classes dependencies.
 * Or it can be used to decorate a constructor paramter, indicating what to inject for that
 * parameter.
 * Or it can be used for a web component property, indicating what that property should resolve to.
 *
 * @public
 */
const inject = DI.inject;
function transientDecorator(target) {
    return DI.transient(target);
}
function transient(target) {
    return target == null ? transientDecorator : transientDecorator(target);
}
const defaultSingletonOptions = { scoped: false };
function singletonDecorator(target) {
    return DI.singleton(target);
}
/**
 * @public
 */
function singleton(targetOrOptions) {
    if (typeof targetOrOptions === "function") {
        return DI.singleton(targetOrOptions);
    }
    return function ($target) {
        return DI.singleton($target, targetOrOptions);
    };
}
function createAllResolver(getter) {
    return function (key, searchAncestors) {
        searchAncestors = !!searchAncestors;
        const resolver = function (target, property, descriptor) {
            DI.inject(resolver)(target, property, descriptor);
        };
        resolver.$isResolver = true;
        resolver.resolve = function (handler, requestor) {
            /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
            return getter(key, handler, requestor, searchAncestors);
        };
        return resolver;
    };
}
/**
 * A decorator and DI resolver that will resolve an array of all dependencies
 * registered with the specified key.
 * @param key - The key to resolve all dependencies for.
 * @param searchAncestors - [optional] Indicates whether to search ancestor containers.
 * @public
 */
const all = createAllResolver((key, handler, requestor, searchAncestors) => requestor.getAll(key, searchAncestors));
/**
 * A decorator that lazily injects a dependency depending on whether the `Key` is present at the time of function call.
 *
 * @example
 * You need to make your argument a function that returns the type, for example
 * ```ts
 * class Foo {
 *   constructor( @lazy('random') public random: () => number )
 * }
 * const foo = container.get(Foo); // instanceof Foo
 * foo.random(); // throws
 * ```
 * would throw an exception because you haven't registered `'random'` before calling the method.
 * @example
 * This, would give you a new 'Math.random()' number each time.
 * ```ts
 * class Foo {
 *   constructor( @lazy('random') public random: () => random )
 * }
 * container.register(Registration.callback('random', Math.random ));
 * container.get(Foo).random(); // some random number
 * container.get(Foo).random(); // another random number
 * ```
 *
 * `@lazy` does not manage the lifecycle of the underlying key. If you want a singleton, you have to register as a
 * `singleton`, `transient` would also behave as you would expect, providing you a new instance each time.
 *
 * @param key - The key to lazily resolve.
 * see {@link DI.createInterface} on interactions with interfaces
 *
 * @public
 */
const lazy = createResolver((key, handler, requestor) => {
    return () => requestor.get(key);
});
/**
 * A decorator that allows you to optionally inject a dependency depending on whether the [[`Key`]] is present, for example:
 * @example
 * ```ts
 * class Foo {
 *   constructor( @inject('mystring') public str: string = 'somestring' )
 * }
 * container.get(Foo); // throws
 * ```
 * would fail
 *
 * @example
 * ```ts
 * class Foo {
 *   constructor( @optional('mystring') public str: string = 'somestring' )
 * }
 * container.get(Foo).str // somestring
 * ```
 * if you use it without a default it will inject `undefined`, so remember to mark your input type as
 * possibly `undefined`!
 *
 * @param key - The key to optionally resolve.
 * see {@link DI.createInterface} on interactions with interfaces
 *
 * @public
 */
const optional = createResolver((key, handler, requestor) => {
    if (requestor.has(key, true)) {
        return requestor.get(key);
    }
    else {
        return undefined;
    }
});
/**
 * A decorator that tells the container not to try to inject a dependency.
 *
 * @public
 */
function ignore(target, property, descriptor) {
    DI.inject(ignore)(target, property, descriptor);
}
// Hack: casting below used to prevent TS from generate a namespace which can't be commented
// and results in documentation validation errors.
ignore.$isResolver = true;
ignore.resolve = () => undefined;
/**
 * A decorator that indicates that a new instance should be injected scoped to the
 * container that requested the instance.
 * @param key - The dependency key for the new instance.
 * @remarks
 * This creates a resolver with an instance strategy pointing to the new instance, effectively
 * making this a singleton, scoped to the container or DOM's subtree.
 *
 * @public
 */
const newInstanceForScope = createResolver((key, handler, requestor) => {
    const instance = createNewInstance(key, handler);
    const resolver = new ResolverImpl(key, 0 /* instance */, instance);
    requestor.registerResolver(key, resolver);
    return instance;
});
/**
 * A decorator that indicates that a new instance should be injected.
 * @param key - The dependency key for the new instance.
 * @remarks
 * The instance is not internally cached with a resolver as newInstanceForScope does.
 *
 * @public
 */
const newInstanceOf = createResolver((key, handler, _requestor) => createNewInstance(key, handler));
function createNewInstance(key, handler) {
    /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
    return handler.getFactory(key).construct(handler);
}
/** @internal */
class ResolverImpl {
    constructor(key, strategy, state) {
        this.key = key;
        this.strategy = strategy;
        this.state = state;
        this.resolving = false;
    }
    get $isResolver() {
        return true;
    }
    register(container) {
        return container.registerResolver(this.key, this);
    }
    resolve(handler, requestor) {
        switch (this.strategy) {
            case 0 /* instance */:
                return this.state;
            case 1 /* singleton */: {
                if (this.resolving) {
                    throw new Error(`Cyclic dependency found: ${this.state.name}`);
                }
                this.resolving = true;
                this.state = handler
                    .getFactory(this.state)
                    .construct(requestor);
                this.strategy = 0 /* instance */;
                this.resolving = false;
                return this.state;
            }
            case 2 /* transient */: {
                // Always create transients from the requesting container
                const factory = handler.getFactory(this.state);
                if (factory === null) {
                    throw new Error(`Resolver for ${String(this.key)} returned a null factory`);
                }
                return factory.construct(requestor);
            }
            case 3 /* callback */:
                return this.state(handler, requestor, this);
            case 4 /* array */:
                return this.state[0].resolve(handler, requestor);
            case 5 /* alias */:
                return requestor.get(this.state);
            default:
                throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`);
        }
    }
    getFactory(container) {
        var _a, _b, _c;
        switch (this.strategy) {
            case 1 /* singleton */:
            case 2 /* transient */:
                return container.getFactory(this.state);
            case 5 /* alias */:
                return (_c = (_b = (_a = container.getResolver(this.state)) === null || _a === void 0 ? void 0 : _a.getFactory) === null || _b === void 0 ? void 0 : _b.call(_a, container)) !== null && _c !== void 0 ? _c : null;
            default:
                return null;
        }
    }
}
function containerGetKey(d) {
    return this.get(d);
}
function transformInstance(inst, transform) {
    return transform(inst);
}
/** @internal */
class FactoryImpl {
    constructor(Type, dependencies) {
        this.Type = Type;
        this.dependencies = dependencies;
        this.transformers = null;
    }
    construct(container, dynamicDependencies) {
        let instance;
        if (dynamicDependencies === void 0) {
            instance = new this.Type(...this.dependencies.map(containerGetKey, container));
        }
        else {
            instance = new this.Type(...this.dependencies.map(containerGetKey, container), ...dynamicDependencies);
        }
        if (this.transformers == null) {
            return instance;
        }
        return this.transformers.reduce(transformInstance, instance);
    }
    registerTransformer(transformer) {
        (this.transformers || (this.transformers = [])).push(transformer);
    }
}
const containerResolver = {
    $isResolver: true,
    resolve(handler, requestor) {
        return requestor;
    },
};
function isRegistry(obj) {
    return typeof obj.register === "function";
}
function isSelfRegistry(obj) {
    return isRegistry(obj) && typeof obj.registerInRequestor === "boolean";
}
function isRegisterInRequester(obj) {
    return isSelfRegistry(obj) && obj.registerInRequestor;
}
function isClass(obj) {
    return obj.prototype !== void 0;
}
const InstrinsicTypeNames = new Set([
    "Array",
    "ArrayBuffer",
    "Boolean",
    "DataView",
    "Date",
    "Error",
    "EvalError",
    "Float32Array",
    "Float64Array",
    "Function",
    "Int8Array",
    "Int16Array",
    "Int32Array",
    "Map",
    "Number",
    "Object",
    "Promise",
    "RangeError",
    "ReferenceError",
    "RegExp",
    "Set",
    "SharedArrayBuffer",
    "String",
    "SyntaxError",
    "TypeError",
    "Uint8Array",
    "Uint8ClampedArray",
    "Uint16Array",
    "Uint32Array",
    "URIError",
    "WeakMap",
    "WeakSet",
]);
const DILocateParentEventType = "__DI_LOCATE_PARENT__";
const factories = new Map();
/**
 * @internal
 */
class ContainerImpl {
    constructor(owner, config) {
        this.owner = owner;
        this.config = config;
        this._parent = void 0;
        this.registerDepth = 0;
        this.context = null;
        if (owner !== null) {
            owner.$$container$$ = this;
        }
        this.resolvers = new Map();
        this.resolvers.set(Container, containerResolver);
        if (owner instanceof Node) {
            owner.addEventListener(DILocateParentEventType, (e) => {
                if (e.composedPath()[0] !== this.owner) {
                    e.detail.container = this;
                    e.stopImmediatePropagation();
                }
            });
        }
    }
    get parent() {
        if (this._parent === void 0) {
            this._parent = this.config.parentLocator(this.owner);
        }
        return this._parent;
    }
    get depth() {
        return this.parent === null ? 0 : this.parent.depth + 1;
    }
    get responsibleForOwnerRequests() {
        return this.config.responsibleForOwnerRequests;
    }
    registerWithContext(context, ...params) {
        this.context = context;
        this.register(...params);
        this.context = null;
        return this;
    }
    register(...params) {
        if (++this.registerDepth === 100) {
            throw new Error("Unable to autoregister dependency");
            // Most likely cause is trying to register a plain object that does not have a
            // register method and is not a class constructor
        }
        let current;
        let keys;
        let value;
        let j;
        let jj;
        const context = this.context;
        for (let i = 0, ii = params.length; i < ii; ++i) {
            current = params[i];
            if (!isObject(current)) {
                continue;
            }
            if (isRegistry(current)) {
                current.register(this, context);
            }
            else if (isClass(current)) {
                Registration.singleton(current, current).register(this);
            }
            else {
                keys = Object.keys(current);
                j = 0;
                jj = keys.length;
                for (; j < jj; ++j) {
                    value = current[keys[j]];
                    if (!isObject(value)) {
                        continue;
                    }
                    // note: we could remove this if-branch and call this.register directly
                    // - the extra check is just a perf tweak to create fewer unnecessary arrays by the spread operator
                    if (isRegistry(value)) {
                        value.register(this, context);
                    }
                    else {
                        this.register(value);
                    }
                }
            }
        }
        --this.registerDepth;
        return this;
    }
    registerResolver(key, resolver) {
        validateKey(key);
        const resolvers = this.resolvers;
        const result = resolvers.get(key);
        if (result == null) {
            resolvers.set(key, resolver);
        }
        else if (result instanceof ResolverImpl &&
            result.strategy === 4 /* array */) {
            result.state.push(resolver);
        }
        else {
            resolvers.set(key, new ResolverImpl(key, 4 /* array */, [result, resolver]));
        }
        return resolver;
    }
    registerTransformer(key, transformer) {
        const resolver = this.getResolver(key);
        if (resolver == null) {
            return false;
        }
        if (resolver.getFactory) {
            const factory = resolver.getFactory(this);
            if (factory == null) {
                return false;
            }
            // This type cast is a bit of a hacky one, necessary due to the duplicity of IResolverLike.
            // Problem is that that interface's type arg can be of type Key, but the getFactory method only works on
            // type Constructable. So the return type of that optional method has this additional constraint, which
            // seems to confuse the type checker.
            factory.registerTransformer(transformer);
            return true;
        }
        return false;
    }
    getResolver(key, autoRegister = true) {
        validateKey(key);
        if (key.resolve !== void 0) {
            return key;
        }
        /* eslint-disable-next-line @typescript-eslint/no-this-alias */
        let current = this;
        let resolver;
        while (current != null) {
            resolver = current.resolvers.get(key);
            if (resolver == null) {
                if (current.parent == null) {
                    const handler = isRegisterInRequester(key)
                        ? this
                        : current;
                    return autoRegister ? this.jitRegister(key, handler) : null;
                }
                current = current.parent;
            }
            else {
                return resolver;
            }
        }
        return null;
    }
    has(key, searchAncestors = false) {
        return this.resolvers.has(key)
            ? true
            : searchAncestors && this.parent != null
                ? this.parent.has(key, true)
                : false;
    }
    get(key) {
        validateKey(key);
        if (key.$isResolver) {
            return key.resolve(this, this);
        }
        /* eslint-disable-next-line @typescript-eslint/no-this-alias */
        let current = this;
        let resolver;
        while (current != null) {
            resolver = current.resolvers.get(key);
            if (resolver == null) {
                if (current.parent == null) {
                    const handler = isRegisterInRequester(key)
                        ? this
                        : current;
                    resolver = this.jitRegister(key, handler);
                    return resolver.resolve(current, this);
                }
                current = current.parent;
            }
            else {
                return resolver.resolve(current, this);
            }
        }
        throw new Error(`Unable to resolve key: ${key}`);
    }
    getAll(key, searchAncestors = false) {
        validateKey(key);
        /* eslint-disable-next-line @typescript-eslint/no-this-alias */
        const requestor = this;
        let current = requestor;
        let resolver;
        if (searchAncestors) {
            let resolutions = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.emptyArray;
            while (current != null) {
                resolver = current.resolvers.get(key);
                if (resolver != null) {
                    resolutions = resolutions.concat(
                    /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
                    buildAllResponse(resolver, current, requestor));
                }
                current = current.parent;
            }
            return resolutions;
        }
        else {
            while (current != null) {
                resolver = current.resolvers.get(key);
                if (resolver == null) {
                    current = current.parent;
                    if (current == null) {
                        return _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.emptyArray;
                    }
                }
                else {
                    return buildAllResponse(resolver, current, requestor);
                }
            }
        }
        return _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.emptyArray;
    }
    getFactory(Type) {
        let factory = factories.get(Type);
        if (factory === void 0) {
            if (isNativeFunction(Type)) {
                throw new Error(`${Type.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);
            }
            factories.set(Type, (factory = new FactoryImpl(Type, DI.getDependencies(Type))));
        }
        return factory;
    }
    registerFactory(key, factory) {
        factories.set(key, factory);
    }
    createChild(config) {
        return new ContainerImpl(null, Object.assign({}, this.config, config, { parentLocator: () => this }));
    }
    jitRegister(keyAsValue, handler) {
        if (typeof keyAsValue !== "function") {
            throw new Error(`Attempted to jitRegister something that is not a constructor: '${keyAsValue}'. Did you forget to register this dependency?`);
        }
        if (InstrinsicTypeNames.has(keyAsValue.name)) {
            throw new Error(`Attempted to jitRegister an intrinsic type: ${keyAsValue.name}. Did you forget to add @inject(Key)`);
        }
        if (isRegistry(keyAsValue)) {
            const registrationResolver = keyAsValue.register(handler);
            if (!(registrationResolver instanceof Object) ||
                registrationResolver.resolve == null) {
                const newResolver = handler.resolvers.get(keyAsValue);
                if (newResolver != void 0) {
                    return newResolver;
                }
                throw new Error("A valid resolver was not returned from the static register method");
            }
            return registrationResolver;
        }
        else if (keyAsValue.$isInterface) {
            throw new Error(`Attempted to jitRegister an interface: ${keyAsValue.friendlyName}`);
        }
        else {
            const resolver = this.config.defaultResolver(keyAsValue, handler);
            handler.resolvers.set(keyAsValue, resolver);
            return resolver;
        }
    }
}
const cache = new WeakMap();
function cacheCallbackResult(fun) {
    return function (handler, requestor, resolver) {
        if (cache.has(resolver)) {
            return cache.get(resolver);
        }
        const t = fun(handler, requestor, resolver);
        cache.set(resolver, t);
        return t;
    };
}
/**
 * You can use the resulting Registration of any of the factory methods
 * to register with the container.
 *
 * @example
 * ```
 * class Foo {}
 * const container = DI.createContainer();
 * container.register(Registration.instance(Foo, new Foo()));
 * container.get(Foo);
 * ```
 *
 * @public
 */
const Registration = Object.freeze({
    /**
     * Allows you to pass an instance.
     * Every time you request this {@link Key} you will get this instance back.
     *
     * @example
     * ```
     * Registration.instance(Foo, new Foo()));
     * ```
     *
     * @param key - The key to register the instance under.
     * @param value - The instance to return when the key is requested.
     */
    instance(key, value) {
        return new ResolverImpl(key, 0 /* instance */, value);
    },
    /**
     * Creates an instance from the class.
     * Every time you request this {@link Key} you will get the same one back.
     *
     * @example
     * ```
     * Registration.singleton(Foo, Foo);
     * ```
     *
     * @param key - The key to register the singleton under.
     * @param value - The class to instantiate as a singleton when first requested.
     */
    singleton(key, value) {
        return new ResolverImpl(key, 1 /* singleton */, value);
    },
    /**
     * Creates an instance from a class.
     * Every time you request this {@link Key} you will get a new instance.
     *
     * @example
     * ```
     * Registration.instance(Foo, Foo);
     * ```
     *
     * @param key - The key to register the instance type under.
     * @param value - The class to instantiate each time the key is requested.
     */
    transient(key, value) {
        return new ResolverImpl(key, 2 /* transient */, value);
    },
    /**
     * Delegates to a callback function to provide the dependency.
     * Every time you request this {@link Key} the callback will be invoked to provide
     * the dependency.
     *
     * @example
     * ```
     * Registration.callback(Foo, () => new Foo());
     * Registration.callback(Bar, (c: Container) => new Bar(c.get(Foo)));
     * ```
     *
     * @param key - The key to register the callback for.
     * @param callback - The function that is expected to return the dependency.
     */
    callback(key, callback) {
        return new ResolverImpl(key, 3 /* callback */, callback);
    },
    /**
     * Delegates to a callback function to provide the dependency and then caches the
     * dependency for future requests.
     *
     * @example
     * ```
     * Registration.cachedCallback(Foo, () => new Foo());
     * Registration.cachedCallback(Bar, (c: Container) => new Bar(c.get(Foo)));
     * ```
     *
     * @param key - The key to register the callback for.
     * @param callback - The function that is expected to return the dependency.
     * @remarks
     * If you pass the same Registration to another container, the same cached value will be used.
     * Should all references to the resolver returned be removed, the cache will expire.
     */
    cachedCallback(key, callback) {
        return new ResolverImpl(key, 3 /* callback */, cacheCallbackResult(callback));
    },
    /**
     * Creates an alternate {@link Key} to retrieve an instance by.
     *
     * @example
     * ```
     * Register.singleton(Foo, Foo)
     * Register.aliasTo(Foo, MyFoos);
     *
     * container.getAll(MyFoos) // contains an instance of Foo
     * ```
     *
     * @param originalKey - The original key that has been registered.
     * @param aliasKey - The alias to the original key.
     */
    aliasTo(originalKey, aliasKey) {
        return new ResolverImpl(aliasKey, 5 /* alias */, originalKey);
    },
});
/** @internal */
function validateKey(key) {
    if (key === null || key === void 0) {
        throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?");
    }
}
function buildAllResponse(resolver, handler, requestor) {
    if (resolver instanceof ResolverImpl &&
        resolver.strategy === 4 /* array */) {
        const state = resolver.state;
        let i = state.length;
        const results = new Array(i);
        while (i--) {
            results[i] = state[i].resolve(handler, requestor);
        }
        return results;
    }
    return [resolver.resolve(handler, requestor)];
}
const defaultFriendlyName = "(anonymous)";
function isObject(value) {
    return (typeof value === "object" && value !== null) || typeof value === "function";
}
/**
 * Determine whether the value is a native function.
 *
 * @param fn - The function to check.
 * @returns `true` is the function is a native function, otherwise `false`
 */
const isNativeFunction = (function () {
    const lookup = new WeakMap();
    let isNative = false;
    let sourceText = "";
    let i = 0;
    return function (fn) {
        isNative = lookup.get(fn);
        if (isNative === void 0) {
            sourceText = fn.toString();
            i = sourceText.length;
            // http://www.ecma-international.org/ecma-262/#prod-NativeFunction
            isNative =
                // 29 is the length of 'function () { [native code] }' which is the smallest length of a native function string
                i >= 29 &&
                    // 100 seems to be a safe upper bound of the max length of a native function. In Chrome and FF it's 56, in Edge it's 61.
                    i <= 100 &&
                    // This whole heuristic *could* be tricked by a comment. Do we need to care about that?
                    sourceText.charCodeAt(i - 1) === 0x7d && // }
                    // TODO: the spec is a little vague about the precise constraints, so we do need to test this across various browsers to make sure just one whitespace is a safe assumption.
                    sourceText.charCodeAt(i - 2) <= 0x20 && // whitespace
                    sourceText.charCodeAt(i - 3) === 0x5d && // ]
                    sourceText.charCodeAt(i - 4) === 0x65 && // e
                    sourceText.charCodeAt(i - 5) === 0x64 && // d
                    sourceText.charCodeAt(i - 6) === 0x6f && // o
                    sourceText.charCodeAt(i - 7) === 0x63 && // c
                    sourceText.charCodeAt(i - 8) === 0x20 && //
                    sourceText.charCodeAt(i - 9) === 0x65 && // e
                    sourceText.charCodeAt(i - 10) === 0x76 && // v
                    sourceText.charCodeAt(i - 11) === 0x69 && // i
                    sourceText.charCodeAt(i - 12) === 0x74 && // t
                    sourceText.charCodeAt(i - 13) === 0x61 && // a
                    sourceText.charCodeAt(i - 14) === 0x6e && // n
                    sourceText.charCodeAt(i - 15) === 0x58; // [
            lookup.set(fn, isNative);
        }
        return isNative;
    };
})();
const isNumericLookup = {};
function isArrayIndex(value) {
    switch (typeof value) {
        case "number":
            return value >= 0 && (value | 0) === value;
        case "string": {
            const result = isNumericLookup[value];
            if (result !== void 0) {
                return result;
            }
            const length = value.length;
            if (length === 0) {
                return (isNumericLookup[value] = false);
            }
            let ch = 0;
            for (let i = 0; i < length; ++i) {
                ch = value.charCodeAt(i);
                if ((i === 0 && ch === 0x30 && length > 1) /* must not start with 0 */ ||
                    ch < 0x30 /* 0 */ ||
                    ch > 0x39 /* 9 */) {
                    return (isNumericLookup[value] = false);
                }
            }
            return (isNumericLookup[value] = true);
        }
        default:
            return false;
    }
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/form-associated/form-associated.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/form-associated/form-associated.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckableFormAssociated": () => (/* binding */ CheckableFormAssociated),
/* harmony export */   "FormAssociated": () => (/* binding */ FormAssociated),
/* harmony export */   "supportsElementInternals": () => (/* binding */ supportsElementInternals)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/platform.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/dom.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/components/attributes.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "./node_modules/@microsoft/fast-web-utilities/dist/key-codes.js");


const proxySlotName = "form-associated-proxy";
const ElementInternalsKey = "ElementInternals";
/**
 * @alpha
 */
const supportsElementInternals = ElementInternalsKey in window &&
    "setFormValue" in window[ElementInternalsKey].prototype;
const InternalsMap = new WeakMap();
/**
 * Base function for providing Custom Element Form Association.
 *
 * @alpha
 */
function FormAssociated(BaseCtor) {
    const C = class extends BaseCtor {
        constructor(...args) {
            super(...args);
            /**
             * Track whether the value has been changed from the initial value
             */
            this.dirtyValue = false;
            /**
             * Sets the element's disabled state. A disabled element will not be included during form submission.
             *
             * @remarks
             * HTML Attribute: disabled
             */
            this.disabled = false;
            /**
             * These are events that are still fired by the proxy
             * element based on user / programmatic interaction.
             *
             * The proxy implementation should be transparent to
             * the app author, so block these events from emitting.
             */
            this.proxyEventsToBlock = ["change", "click"];
            this.proxyInitialized = false;
            this.required = false;
            this.initialValue = this.initialValue || "";
            if (!this.elementInternals) {
                // When elementInternals is not supported, formResetCallback is
                // bound to an event listener, so ensure the handler's `this`
                // context is correct.
                this.formResetCallback = this.formResetCallback.bind(this);
            }
        }
        /**
         * Must evaluate to true to enable elementInternals.
         * Feature detects API support and resolve respectively
         *
         * @internal
         */
        static get formAssociated() {
            return supportsElementInternals;
        }
        /**
         * Returns the validity state of the element
         *
         * @alpha
         */
        get validity() {
            return this.elementInternals
                ? this.elementInternals.validity
                : this.proxy.validity;
        }
        /**
         * Retrieve a reference to the associated form.
         * Returns null if not associated to any form.
         *
         * @alpha
         */
        get form() {
            return this.elementInternals ? this.elementInternals.form : this.proxy.form;
        }
        /**
         * Retrieve the localized validation message,
         * or custom validation message if set.
         *
         * @alpha
         */
        get validationMessage() {
            return this.elementInternals
                ? this.elementInternals.validationMessage
                : this.proxy.validationMessage;
        }
        /**
         * Whether the element will be validated when the
         * form is submitted
         */
        get willValidate() {
            return this.elementInternals
                ? this.elementInternals.willValidate
                : this.proxy.willValidate;
        }
        /**
         * A reference to all associated label elements
         */
        get labels() {
            if (this.elementInternals) {
                return Object.freeze(Array.from(this.elementInternals.labels));
            }
            else if (this.proxy instanceof HTMLElement &&
                this.proxy.ownerDocument &&
                this.id) {
                // Labels associated by wrapping the element: <label><custom-element></custom-element></label>
                const parentLabels = this.proxy.labels;
                // Labels associated using the `for` attribute
                const forLabels = Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`));
                const labels = parentLabels
                    ? forLabels.concat(Array.from(parentLabels))
                    : forLabels;
                return Object.freeze(labels);
            }
            else {
                return _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.emptyArray;
            }
        }
        /**
         * Invoked when the `value` property changes
         * @param previous - the previous value
         * @param next - the new value
         *
         * @remarks
         * If elements extending `FormAssociated` implement a `valueChanged` method
         * They must be sure to invoke `super.valueChanged(previous, next)` to ensure
         * proper functioning of `FormAssociated`
         */
        valueChanged(previous, next) {
            this.dirtyValue = true;
            if (this.proxy instanceof HTMLElement) {
                this.proxy.value = this.value;
            }
            this.currentValue = this.value;
            this.setFormValue(this.value);
            this.validate();
        }
        currentValueChanged() {
            this.value = this.currentValue;
        }
        /**
         * Invoked when the `initialValue` property changes
         *
         * @param previous - the previous value
         * @param next - the new value
         *
         * @remarks
         * If elements extending `FormAssociated` implement a `initialValueChanged` method
         * They must be sure to invoke `super.initialValueChanged(previous, next)` to ensure
         * proper functioning of `FormAssociated`
         */
        initialValueChanged(previous, next) {
            // If the value is clean and the component is connected to the DOM
            // then set value equal to the attribute value.
            if (!this.dirtyValue) {
                this.value = this.initialValue;
                this.dirtyValue = false;
            }
        }
        /**
         * Invoked when the `disabled` property changes
         *
         * @param previous - the previous value
         * @param next - the new value
         *
         * @remarks
         * If elements extending `FormAssociated` implement a `disabledChanged` method
         * They must be sure to invoke `super.disabledChanged(previous, next)` to ensure
         * proper functioning of `FormAssociated`
         */
        disabledChanged(previous, next) {
            if (this.proxy instanceof HTMLElement) {
                this.proxy.disabled = this.disabled;
            }
            _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.DOM.queueUpdate(() => this.classList.toggle("disabled", this.disabled));
        }
        /**
         * Invoked when the `name` property changes
         *
         * @param previous - the previous value
         * @param next - the new value
         *
         * @remarks
         * If elements extending `FormAssociated` implement a `nameChanged` method
         * They must be sure to invoke `super.nameChanged(previous, next)` to ensure
         * proper functioning of `FormAssociated`
         */
        nameChanged(previous, next) {
            if (this.proxy instanceof HTMLElement) {
                this.proxy.name = this.name;
            }
        }
        /**
         * Invoked when the `required` property changes
         *
         * @param previous - the previous value
         * @param next - the new value
         *
         * @remarks
         * If elements extending `FormAssociated` implement a `requiredChanged` method
         * They must be sure to invoke `super.requiredChanged(previous, next)` to ensure
         * proper functioning of `FormAssociated`
         */
        requiredChanged(prev, next) {
            if (this.proxy instanceof HTMLElement) {
                this.proxy.required = this.required;
            }
            _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.DOM.queueUpdate(() => this.classList.toggle("required", this.required));
            this.validate();
        }
        /**
         * The element internals object. Will only exist
         * in browsers supporting the attachInternals API
         */
        get elementInternals() {
            if (!supportsElementInternals) {
                return null;
            }
            let internals = InternalsMap.get(this);
            if (!internals) {
                internals = this.attachInternals();
                InternalsMap.set(this, internals);
            }
            return internals;
        }
        /**
         * @internal
         */
        connectedCallback() {
            super.connectedCallback();
            this.addEventListener("keypress", this._keypressHandler);
            if (!this.value) {
                this.value = this.initialValue;
                this.dirtyValue = false;
            }
            if (!this.elementInternals) {
                this.attachProxy();
                if (this.form) {
                    this.form.addEventListener("reset", this.formResetCallback);
                }
            }
        }
        /**
         * @internal
         */
        disconnectedCallback() {
            this.proxyEventsToBlock.forEach(name => this.proxy.removeEventListener(name, this.stopPropagation));
            if (!this.elementInternals && this.form) {
                this.form.removeEventListener("reset", this.formResetCallback);
            }
        }
        /**
         * Return the current validity of the element.
         */
        checkValidity() {
            return this.elementInternals
                ? this.elementInternals.checkValidity()
                : this.proxy.checkValidity();
        }
        /**
         * Return the current validity of the element.
         * If false, fires an invalid event at the element.
         */
        reportValidity() {
            return this.elementInternals
                ? this.elementInternals.reportValidity()
                : this.proxy.reportValidity();
        }
        /**
         * Set the validity of the control. In cases when the elementInternals object is not
         * available (and the proxy element is used to report validity), this function will
         * do nothing unless a message is provided, at which point the setCustomValidity method
         * of the proxy element will be invoked with the provided message.
         * @param flags - Validity flags
         * @param message - Optional message to supply
         * @param anchor - Optional element used by UA to display an interactive validation UI
         */
        setValidity(flags, message, anchor) {
            if (this.elementInternals) {
                this.elementInternals.setValidity(flags, message, anchor);
            }
            else if (typeof message === "string") {
                this.proxy.setCustomValidity(message);
            }
        }
        /**
         * Invoked when a connected component's form or fieldset has its disabled
         * state changed.
         * @param disabled - the disabled value of the form / fieldset
         */
        formDisabledCallback(disabled) {
            this.disabled = disabled;
        }
        formResetCallback() {
            this.value = this.initialValue;
            this.dirtyValue = false;
        }
        /**
         * Attach the proxy element to the DOM
         */
        attachProxy() {
            var _a;
            if (!this.proxyInitialized) {
                this.proxyInitialized = true;
                this.proxy.style.display = "none";
                this.proxyEventsToBlock.forEach(name => this.proxy.addEventListener(name, this.stopPropagation));
                // These are typically mapped to the proxy during
                // property change callbacks, but during initialization
                // on the initial call of the callback, the proxy is
                // still undefined. We should find a better way to address this.
                this.proxy.disabled = this.disabled;
                this.proxy.required = this.required;
                if (typeof this.name === "string") {
                    this.proxy.name = this.name;
                }
                if (typeof this.value === "string") {
                    this.proxy.value = this.value;
                }
                this.proxy.setAttribute("slot", proxySlotName);
                this.proxySlot = document.createElement("slot");
                this.proxySlot.setAttribute("name", proxySlotName);
            }
            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(this.proxySlot);
            this.appendChild(this.proxy);
        }
        /**
         * Detach the proxy element from the DOM
         */
        detachProxy() {
            var _a;
            this.removeChild(this.proxy);
            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.removeChild(this.proxySlot);
        }
        /**
         * Sets the validity of the custom element. By default this uses the proxy element to determine
         * validity, but this can be extended or replaced in implementation.
         */
        validate() {
            if (this.proxy instanceof HTMLElement) {
                this.setValidity(this.proxy.validity, this.proxy.validationMessage);
            }
        }
        /**
         * Associates the provided value (and optional state) with the parent form.
         * @param value - The value to set
         * @param state - The state object provided to during session restores and when autofilling.
         */
        setFormValue(value, state) {
            if (this.elementInternals) {
                this.elementInternals.setFormValue(value, state || value);
            }
        }
        _keypressHandler(e) {
            switch (e.key) {
                case _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_2__.keyEnter:
                    if (this.form instanceof HTMLFormElement) {
                        // Implicit submission
                        const defaultButton = this.form.querySelector("[type=submit]");
                        defaultButton === null || defaultButton === void 0 ? void 0 : defaultButton.click();
                    }
                    break;
            }
        }
        /**
         * Used to stop propagation of proxy element events
         * @param e - Event object
         */
        stopPropagation(e) {
            e.stopPropagation();
        }
    };
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.attr)({ mode: "boolean" })(C.prototype, "disabled");
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.attr)({ mode: "fromView", attribute: "value" })(C.prototype, "initialValue");
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.attr)({ attribute: "current-value" })(C.prototype, "currentValue");
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.attr)(C.prototype, "name");
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.attr)({ mode: "boolean" })(C.prototype, "required");
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.observable)(C.prototype, "value");
    return C;
}
/**
 * @alpha
 */
function CheckableFormAssociated(BaseCtor) {
    class C extends FormAssociated(BaseCtor) {
    }
    class D extends C {
        constructor(...args) {
            super(args);
            /**
             * Tracks whether the "checked" property has been changed.
             * This is necessary to provide consistent behavior with
             * normal input checkboxes
             */
            this.dirtyChecked = false;
            /**
             * Provides the default checkedness of the input element
             * Passed down to proxy
             *
             * @public
             * @remarks
             * HTML Attribute: checked
             */
            this.checkedAttribute = false;
            /**
             * The checked state of the control.
             *
             * @public
             */
            this.checked = false;
            // Re-initialize dirtyChecked because initialization of other values
            // causes it to become true
            this.dirtyChecked = false;
        }
        checkedAttributeChanged() {
            this.defaultChecked = this.checkedAttribute;
        }
        /**
         * @internal
         */
        defaultCheckedChanged() {
            if (!this.dirtyChecked) {
                // Setting this.checked will cause us to enter a dirty state,
                // but if we are clean when defaultChecked is changed, we want to stay
                // in a clean state, so reset this.dirtyChecked
                this.checked = this.defaultChecked;
                this.dirtyChecked = false;
            }
        }
        checkedChanged(prev, next) {
            if (!this.dirtyChecked) {
                this.dirtyChecked = true;
            }
            this.currentChecked = this.checked;
            this.updateForm();
            if (this.proxy instanceof HTMLInputElement) {
                this.proxy.checked = this.checked;
            }
            if (prev !== undefined) {
                this.$emit("change");
            }
            this.validate();
        }
        currentCheckedChanged(prev, next) {
            this.checked = this.currentChecked;
        }
        updateForm() {
            const value = this.checked ? this.value : null;
            this.setFormValue(value, value);
        }
        connectedCallback() {
            super.connectedCallback();
            this.updateForm();
        }
        formResetCallback() {
            super.formResetCallback();
            this.checked = !!this.checkedAttribute;
            this.dirtyChecked = false;
        }
    }
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.attr)({ attribute: "checked", mode: "boolean" })(D.prototype, "checkedAttribute");
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.attr)({ attribute: "current-checked", converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.booleanConverter })(D.prototype, "currentChecked");
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.observable)(D.prototype, "defaultChecked");
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.observable)(D.prototype, "checked");
    return D;
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/foundation-element/foundation-element.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/foundation-element/foundation-element.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FoundationElement": () => (/* binding */ FoundationElement),
/* harmony export */   "FoundationElementRegistry": () => (/* binding */ FoundationElementRegistry)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/components/fast-element.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _design_system_component_presentation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../design-system/component-presentation.js */ "./node_modules/@microsoft/fast-foundation/dist/esm/design-system/component-presentation.js");



/**
 * Defines a foundation element class that:
 * 1. Connects the element to its ComponentPresentation
 * 2. Allows resolving the element template from the instance or ComponentPresentation
 * 3. Allows resolving the element styles from the instance or ComponentPresentation
 *
 * @public
 */
class FoundationElement extends _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.FASTElement {
    constructor() {
        super(...arguments);
        this._presentation = void 0;
    }
    /**
     * A property which resolves the ComponentPresentation instance
     * for the current component.
     * @public
     */
    get $presentation() {
        if (this._presentation === void 0) {
            this._presentation = _design_system_component_presentation_js__WEBPACK_IMPORTED_MODULE_1__.ComponentPresentation.forTag(this.tagName, this);
        }
        return this._presentation;
    }
    templateChanged() {
        if (this.template !== undefined) {
            this.$fastController.template = this.template;
        }
    }
    stylesChanged() {
        if (this.styles !== undefined) {
            this.$fastController.styles = this.styles;
        }
    }
    /**
     * The connected callback for this FASTElement.
     * @remarks
     * This method is invoked by the platform whenever this FoundationElement
     * becomes connected to the document.
     * @public
     */
    connectedCallback() {
        if (this.$presentation !== null) {
            this.$presentation.applyTo(this);
        }
        super.connectedCallback();
    }
    /**
     * Defines an element registry function with a set of element definition defaults.
     * @param elementDefinition - The definition of the element to create the registry
     * function for.
     * @public
     */
    static compose(elementDefinition) {
        return (overrideDefinition = {}) => new FoundationElementRegistry(this === FoundationElement
            ? class extends FoundationElement {
            }
            : this, elementDefinition, overrideDefinition);
    }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.observable
], FoundationElement.prototype, "template", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.observable
], FoundationElement.prototype, "styles", void 0);
function resolveOption(option, context, definition) {
    if (typeof option === "function") {
        return option(context, definition);
    }
    return option;
}
/**
 * Registry capable of defining presentation properties for a DOM Container hierarchy.
 *
 * @internal
 */
/* eslint-disable @typescript-eslint/no-unused-vars */
class FoundationElementRegistry {
    constructor(type, elementDefinition, overrideDefinition) {
        this.type = type;
        this.elementDefinition = elementDefinition;
        this.overrideDefinition = overrideDefinition;
        this.definition = Object.assign(Object.assign({}, this.elementDefinition), this.overrideDefinition);
    }
    register(container, context) {
        const definition = this.definition;
        const overrideDefinition = this.overrideDefinition;
        const prefix = definition.prefix || context.elementPrefix;
        const name = `${prefix}-${definition.baseName}`;
        context.tryDefineElement({
            name,
            type: this.type,
            baseClass: this.elementDefinition.baseClass,
            callback: x => {
                const presentation = new _design_system_component_presentation_js__WEBPACK_IMPORTED_MODULE_1__.DefaultComponentPresentation(resolveOption(definition.template, x, definition), resolveOption(definition.styles, x, definition));
                x.definePresentation(presentation);
                let shadowOptions = resolveOption(definition.shadowOptions, x, definition);
                if (x.shadowRootMode) {
                    // If the design system has overridden the shadow root mode, we need special handling.
                    if (shadowOptions) {
                        // If there are shadow options present in the definition, then
                        // either the component itself has specified an option or the
                        // registry function has overridden it.
                        if (!overrideDefinition.shadowOptions) {
                            // There were shadow options provided by the component and not overridden by
                            // the registry.
                            shadowOptions.mode = x.shadowRootMode;
                        }
                    }
                    else if (shadowOptions !== null) {
                        // If the component author did not provide shadow options,
                        // and did not null them out (light dom opt-in) then they
                        // were relying on the FASTElement default. So, if the
                        // design system provides a mode, we need to create the options
                        // to override the default.
                        shadowOptions = { mode: x.shadowRootMode };
                    }
                }
                x.defineElement({
                    elementOptions: resolveOption(definition.elementOptions, x, definition),
                    shadowOptions,
                    attributes: resolveOption(definition.attributes, x, definition),
                });
            },
        });
    }
}
/* eslint-enable @typescript-eslint/no-unused-vars */


/***/ }),

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/patterns/aria-global.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/patterns/aria-global.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ARIAGlobalStatesAndProperties": () => (/* binding */ ARIAGlobalStatesAndProperties)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/components/attributes.js");


/**
 * Some states and properties are applicable to all host language elements regardless of whether a role is applied.
 * The following global states and properties are supported by all roles and by all base markup elements.
 * {@link https://www.w3.org/TR/wai-aria-1.1/#global_states}
 *
 * This is intended to be used as a mixin. Be sure you extend FASTElement.
 *
 * @public
 */
class ARIAGlobalStatesAndProperties {
}
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-atomic" })
], ARIAGlobalStatesAndProperties.prototype, "ariaAtomic", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-busy" })
], ARIAGlobalStatesAndProperties.prototype, "ariaBusy", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-controls" })
], ARIAGlobalStatesAndProperties.prototype, "ariaControls", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-current" })
], ARIAGlobalStatesAndProperties.prototype, "ariaCurrent", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-describedby" })
], ARIAGlobalStatesAndProperties.prototype, "ariaDescribedby", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-details" })
], ARIAGlobalStatesAndProperties.prototype, "ariaDetails", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-disabled" })
], ARIAGlobalStatesAndProperties.prototype, "ariaDisabled", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-errormessage" })
], ARIAGlobalStatesAndProperties.prototype, "ariaErrormessage", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-flowto" })
], ARIAGlobalStatesAndProperties.prototype, "ariaFlowto", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-haspopup" })
], ARIAGlobalStatesAndProperties.prototype, "ariaHaspopup", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-hidden" })
], ARIAGlobalStatesAndProperties.prototype, "ariaHidden", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-invalid" })
], ARIAGlobalStatesAndProperties.prototype, "ariaInvalid", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-keyshortcuts" })
], ARIAGlobalStatesAndProperties.prototype, "ariaKeyshortcuts", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-label" })
], ARIAGlobalStatesAndProperties.prototype, "ariaLabel", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-labelledby" })
], ARIAGlobalStatesAndProperties.prototype, "ariaLabelledby", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-live" })
], ARIAGlobalStatesAndProperties.prototype, "ariaLive", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-owns" })
], ARIAGlobalStatesAndProperties.prototype, "ariaOwns", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-relevant" })
], ARIAGlobalStatesAndProperties.prototype, "ariaRelevant", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-roledescription" })
], ARIAGlobalStatesAndProperties.prototype, "ariaRoledescription", void 0);


/***/ }),

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/patterns/start-end.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/patterns/start-end.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartEnd": () => (/* binding */ StartEnd),
/* harmony export */   "endSlotTemplate": () => (/* binding */ endSlotTemplate),
/* harmony export */   "endTemplate": () => (/* binding */ endTemplate),
/* harmony export */   "startSlotTemplate": () => (/* binding */ startSlotTemplate),
/* harmony export */   "startTemplate": () => (/* binding */ startTemplate)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/templating/template.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/templating/ref.js");

/**
 * A mixin class implementing start and end elements.
 * These are generally used to decorate text elements with icons or other visual indicators.
 * @public
 */
class StartEnd {
    handleStartContentChange() {
        this.startContainer.classList.toggle("start", this.start.assignedNodes().length > 0);
    }
    handleEndContentChange() {
        this.endContainer.classList.toggle("end", this.end.assignedNodes().length > 0);
    }
}
/**
 * The template for the end element.
 * For use with {@link StartEnd}
 *
 * @public
 */
const endSlotTemplate = (context, definition) => _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
    <span
        part="end"
        ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.ref)("endContainer")}
        class=${x => (definition.end ? "end" : void 0)}
    >
        <slot name="end" ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.ref)("end")} @slotchange="${x => x.handleEndContentChange()}">
            ${definition.end || ""}
        </slot>
    </span>
`;
/**
 * The template for the start element.
 * For use with {@link StartEnd}
 *
 * @public
 */
const startSlotTemplate = (context, definition) => _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
    <span
        part="start"
        ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.ref)("startContainer")}
        class="${x => (definition.start ? "start" : void 0)}"
    >
        <slot
            name="start"
            ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.ref)("start")}
            @slotchange="${x => x.handleStartContentChange()}"
        >
            ${definition.start || ""}
        </slot>
    </span>
`;
/**
 * The template for the end element.
 * For use with {@link StartEnd}
 *
 * @public
 * @deprecated - use endSlotTemplate
 */
const endTemplate = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
    <span part="end" ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.ref)("endContainer")}>
        <slot
            name="end"
            ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.ref)("end")}
            @slotchange="${x => x.handleEndContentChange()}"
        ></slot>
    </span>
`;
/**
 * The template for the start element.
 * For use with {@link StartEnd}
 *
 * @public
 * @deprecated - use startSlotTemplate
 */
const startTemplate = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
    <span part="start" ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.ref)("startContainer")}>
        <slot
            name="start"
            ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.ref)("start")}
            @slotchange="${x => x.handleStartContentChange()}"
        ></slot>
    </span>
`;


/***/ }),

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/utilities/apply-mixins.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/utilities/apply-mixins.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyMixins": () => (/* binding */ applyMixins)
/* harmony export */ });
/**
 * Apply mixins to a constructor.
 * Sourced from {@link https://www.typescriptlang.org/docs/handbook/mixins.html | TypeScript Documentation }.
 * @public
 */
function applyMixins(derivedCtor, ...baseCtors) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            if (name !== "constructor") {
                Object.defineProperty(derivedCtor.prototype, name, 
                /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
                Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
            }
        });
        if (baseCtor.attributes) {
            const existing = derivedCtor.attributes || [];
            derivedCtor.attributes = existing.concat(baseCtor.attributes);
        }
    });
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-web-utilities/dist/key-codes.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@microsoft/fast-web-utilities/dist/key-codes.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArrowKeys": () => (/* binding */ ArrowKeys),
/* harmony export */   "KeyCodes": () => (/* binding */ KeyCodes),
/* harmony export */   "keyArrowDown": () => (/* binding */ keyArrowDown),
/* harmony export */   "keyArrowLeft": () => (/* binding */ keyArrowLeft),
/* harmony export */   "keyArrowRight": () => (/* binding */ keyArrowRight),
/* harmony export */   "keyArrowUp": () => (/* binding */ keyArrowUp),
/* harmony export */   "keyBackspace": () => (/* binding */ keyBackspace),
/* harmony export */   "keyCodeAlt": () => (/* binding */ keyCodeAlt),
/* harmony export */   "keyCodeArrowDown": () => (/* binding */ keyCodeArrowDown),
/* harmony export */   "keyCodeArrowLeft": () => (/* binding */ keyCodeArrowLeft),
/* harmony export */   "keyCodeArrowRight": () => (/* binding */ keyCodeArrowRight),
/* harmony export */   "keyCodeArrowUp": () => (/* binding */ keyCodeArrowUp),
/* harmony export */   "keyCodeBack": () => (/* binding */ keyCodeBack),
/* harmony export */   "keyCodeBackSlash": () => (/* binding */ keyCodeBackSlash),
/* harmony export */   "keyCodeBreak": () => (/* binding */ keyCodeBreak),
/* harmony export */   "keyCodeCapsLock": () => (/* binding */ keyCodeCapsLock),
/* harmony export */   "keyCodeCloseBracket": () => (/* binding */ keyCodeCloseBracket),
/* harmony export */   "keyCodeColon": () => (/* binding */ keyCodeColon),
/* harmony export */   "keyCodeColon2": () => (/* binding */ keyCodeColon2),
/* harmony export */   "keyCodeComma": () => (/* binding */ keyCodeComma),
/* harmony export */   "keyCodeCtrl": () => (/* binding */ keyCodeCtrl),
/* harmony export */   "keyCodeDelete": () => (/* binding */ keyCodeDelete),
/* harmony export */   "keyCodeEnd": () => (/* binding */ keyCodeEnd),
/* harmony export */   "keyCodeEnter": () => (/* binding */ keyCodeEnter),
/* harmony export */   "keyCodeEquals": () => (/* binding */ keyCodeEquals),
/* harmony export */   "keyCodeEquals2": () => (/* binding */ keyCodeEquals2),
/* harmony export */   "keyCodeEquals3": () => (/* binding */ keyCodeEquals3),
/* harmony export */   "keyCodeEscape": () => (/* binding */ keyCodeEscape),
/* harmony export */   "keyCodeForwardSlash": () => (/* binding */ keyCodeForwardSlash),
/* harmony export */   "keyCodeFunction1": () => (/* binding */ keyCodeFunction1),
/* harmony export */   "keyCodeFunction10": () => (/* binding */ keyCodeFunction10),
/* harmony export */   "keyCodeFunction11": () => (/* binding */ keyCodeFunction11),
/* harmony export */   "keyCodeFunction12": () => (/* binding */ keyCodeFunction12),
/* harmony export */   "keyCodeFunction2": () => (/* binding */ keyCodeFunction2),
/* harmony export */   "keyCodeFunction3": () => (/* binding */ keyCodeFunction3),
/* harmony export */   "keyCodeFunction4": () => (/* binding */ keyCodeFunction4),
/* harmony export */   "keyCodeFunction5": () => (/* binding */ keyCodeFunction5),
/* harmony export */   "keyCodeFunction6": () => (/* binding */ keyCodeFunction6),
/* harmony export */   "keyCodeFunction7": () => (/* binding */ keyCodeFunction7),
/* harmony export */   "keyCodeFunction8": () => (/* binding */ keyCodeFunction8),
/* harmony export */   "keyCodeFunction9": () => (/* binding */ keyCodeFunction9),
/* harmony export */   "keyCodeHome": () => (/* binding */ keyCodeHome),
/* harmony export */   "keyCodeInsert": () => (/* binding */ keyCodeInsert),
/* harmony export */   "keyCodeMenu": () => (/* binding */ keyCodeMenu),
/* harmony export */   "keyCodeMinus": () => (/* binding */ keyCodeMinus),
/* harmony export */   "keyCodeMinus2": () => (/* binding */ keyCodeMinus2),
/* harmony export */   "keyCodeNumLock": () => (/* binding */ keyCodeNumLock),
/* harmony export */   "keyCodeNumPad0": () => (/* binding */ keyCodeNumPad0),
/* harmony export */   "keyCodeNumPad1": () => (/* binding */ keyCodeNumPad1),
/* harmony export */   "keyCodeNumPad2": () => (/* binding */ keyCodeNumPad2),
/* harmony export */   "keyCodeNumPad3": () => (/* binding */ keyCodeNumPad3),
/* harmony export */   "keyCodeNumPad4": () => (/* binding */ keyCodeNumPad4),
/* harmony export */   "keyCodeNumPad5": () => (/* binding */ keyCodeNumPad5),
/* harmony export */   "keyCodeNumPad6": () => (/* binding */ keyCodeNumPad6),
/* harmony export */   "keyCodeNumPad7": () => (/* binding */ keyCodeNumPad7),
/* harmony export */   "keyCodeNumPad8": () => (/* binding */ keyCodeNumPad8),
/* harmony export */   "keyCodeNumPad9": () => (/* binding */ keyCodeNumPad9),
/* harmony export */   "keyCodeNumPadDivide": () => (/* binding */ keyCodeNumPadDivide),
/* harmony export */   "keyCodeNumPadDot": () => (/* binding */ keyCodeNumPadDot),
/* harmony export */   "keyCodeNumPadMinus": () => (/* binding */ keyCodeNumPadMinus),
/* harmony export */   "keyCodeNumPadMultiply": () => (/* binding */ keyCodeNumPadMultiply),
/* harmony export */   "keyCodeNumPadPlus": () => (/* binding */ keyCodeNumPadPlus),
/* harmony export */   "keyCodeOpenBracket": () => (/* binding */ keyCodeOpenBracket),
/* harmony export */   "keyCodePageDown": () => (/* binding */ keyCodePageDown),
/* harmony export */   "keyCodePageUp": () => (/* binding */ keyCodePageUp),
/* harmony export */   "keyCodePeriod": () => (/* binding */ keyCodePeriod),
/* harmony export */   "keyCodePrint": () => (/* binding */ keyCodePrint),
/* harmony export */   "keyCodeQuote": () => (/* binding */ keyCodeQuote),
/* harmony export */   "keyCodeScrollLock": () => (/* binding */ keyCodeScrollLock),
/* harmony export */   "keyCodeShift": () => (/* binding */ keyCodeShift),
/* harmony export */   "keyCodeSpace": () => (/* binding */ keyCodeSpace),
/* harmony export */   "keyCodeTab": () => (/* binding */ keyCodeTab),
/* harmony export */   "keyCodeTilde": () => (/* binding */ keyCodeTilde),
/* harmony export */   "keyCodeWindowsLeft": () => (/* binding */ keyCodeWindowsLeft),
/* harmony export */   "keyCodeWindowsOpera": () => (/* binding */ keyCodeWindowsOpera),
/* harmony export */   "keyCodeWindowsRight": () => (/* binding */ keyCodeWindowsRight),
/* harmony export */   "keyDelete": () => (/* binding */ keyDelete),
/* harmony export */   "keyEnd": () => (/* binding */ keyEnd),
/* harmony export */   "keyEnter": () => (/* binding */ keyEnter),
/* harmony export */   "keyEscape": () => (/* binding */ keyEscape),
/* harmony export */   "keyFunction2": () => (/* binding */ keyFunction2),
/* harmony export */   "keyHome": () => (/* binding */ keyHome),
/* harmony export */   "keyPageDown": () => (/* binding */ keyPageDown),
/* harmony export */   "keyPageUp": () => (/* binding */ keyPageUp),
/* harmony export */   "keySpace": () => (/* binding */ keySpace),
/* harmony export */   "keyTab": () => (/* binding */ keyTab)
/* harmony export */ });
/**
 * Key Code values
 * @deprecated - KeyCodes are deprecated, use individual string key exports
 */
var KeyCodes;
(function (KeyCodes) {
    KeyCodes[KeyCodes["alt"] = 18] = "alt";
    KeyCodes[KeyCodes["arrowDown"] = 40] = "arrowDown";
    KeyCodes[KeyCodes["arrowLeft"] = 37] = "arrowLeft";
    KeyCodes[KeyCodes["arrowRight"] = 39] = "arrowRight";
    KeyCodes[KeyCodes["arrowUp"] = 38] = "arrowUp";
    KeyCodes[KeyCodes["back"] = 8] = "back";
    KeyCodes[KeyCodes["backSlash"] = 220] = "backSlash";
    KeyCodes[KeyCodes["break"] = 19] = "break";
    KeyCodes[KeyCodes["capsLock"] = 20] = "capsLock";
    KeyCodes[KeyCodes["closeBracket"] = 221] = "closeBracket";
    KeyCodes[KeyCodes["colon"] = 186] = "colon";
    KeyCodes[KeyCodes["colon2"] = 59] = "colon2";
    KeyCodes[KeyCodes["comma"] = 188] = "comma";
    KeyCodes[KeyCodes["ctrl"] = 17] = "ctrl";
    KeyCodes[KeyCodes["delete"] = 46] = "delete";
    KeyCodes[KeyCodes["end"] = 35] = "end";
    KeyCodes[KeyCodes["enter"] = 13] = "enter";
    KeyCodes[KeyCodes["equals"] = 187] = "equals";
    KeyCodes[KeyCodes["equals2"] = 61] = "equals2";
    KeyCodes[KeyCodes["equals3"] = 107] = "equals3";
    KeyCodes[KeyCodes["escape"] = 27] = "escape";
    KeyCodes[KeyCodes["forwardSlash"] = 191] = "forwardSlash";
    KeyCodes[KeyCodes["function1"] = 112] = "function1";
    KeyCodes[KeyCodes["function10"] = 121] = "function10";
    KeyCodes[KeyCodes["function11"] = 122] = "function11";
    KeyCodes[KeyCodes["function12"] = 123] = "function12";
    KeyCodes[KeyCodes["function2"] = 113] = "function2";
    KeyCodes[KeyCodes["function3"] = 114] = "function3";
    KeyCodes[KeyCodes["function4"] = 115] = "function4";
    KeyCodes[KeyCodes["function5"] = 116] = "function5";
    KeyCodes[KeyCodes["function6"] = 117] = "function6";
    KeyCodes[KeyCodes["function7"] = 118] = "function7";
    KeyCodes[KeyCodes["function8"] = 119] = "function8";
    KeyCodes[KeyCodes["function9"] = 120] = "function9";
    KeyCodes[KeyCodes["home"] = 36] = "home";
    KeyCodes[KeyCodes["insert"] = 45] = "insert";
    KeyCodes[KeyCodes["menu"] = 93] = "menu";
    KeyCodes[KeyCodes["minus"] = 189] = "minus";
    KeyCodes[KeyCodes["minus2"] = 109] = "minus2";
    KeyCodes[KeyCodes["numLock"] = 144] = "numLock";
    KeyCodes[KeyCodes["numPad0"] = 96] = "numPad0";
    KeyCodes[KeyCodes["numPad1"] = 97] = "numPad1";
    KeyCodes[KeyCodes["numPad2"] = 98] = "numPad2";
    KeyCodes[KeyCodes["numPad3"] = 99] = "numPad3";
    KeyCodes[KeyCodes["numPad4"] = 100] = "numPad4";
    KeyCodes[KeyCodes["numPad5"] = 101] = "numPad5";
    KeyCodes[KeyCodes["numPad6"] = 102] = "numPad6";
    KeyCodes[KeyCodes["numPad7"] = 103] = "numPad7";
    KeyCodes[KeyCodes["numPad8"] = 104] = "numPad8";
    KeyCodes[KeyCodes["numPad9"] = 105] = "numPad9";
    KeyCodes[KeyCodes["numPadDivide"] = 111] = "numPadDivide";
    KeyCodes[KeyCodes["numPadDot"] = 110] = "numPadDot";
    KeyCodes[KeyCodes["numPadMinus"] = 109] = "numPadMinus";
    KeyCodes[KeyCodes["numPadMultiply"] = 106] = "numPadMultiply";
    KeyCodes[KeyCodes["numPadPlus"] = 107] = "numPadPlus";
    KeyCodes[KeyCodes["openBracket"] = 219] = "openBracket";
    KeyCodes[KeyCodes["pageDown"] = 34] = "pageDown";
    KeyCodes[KeyCodes["pageUp"] = 33] = "pageUp";
    KeyCodes[KeyCodes["period"] = 190] = "period";
    KeyCodes[KeyCodes["print"] = 44] = "print";
    KeyCodes[KeyCodes["quote"] = 222] = "quote";
    KeyCodes[KeyCodes["scrollLock"] = 145] = "scrollLock";
    KeyCodes[KeyCodes["shift"] = 16] = "shift";
    KeyCodes[KeyCodes["space"] = 32] = "space";
    KeyCodes[KeyCodes["tab"] = 9] = "tab";
    KeyCodes[KeyCodes["tilde"] = 192] = "tilde";
    KeyCodes[KeyCodes["windowsLeft"] = 91] = "windowsLeft";
    KeyCodes[KeyCodes["windowsOpera"] = 219] = "windowsOpera";
    KeyCodes[KeyCodes["windowsRight"] = 92] = "windowsRight";
})(KeyCodes || (KeyCodes = {}));
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeAlt = 18;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeArrowDown = 40;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeArrowLeft = 37;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeArrowRight = 39;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeArrowUp = 38;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeBack = 8;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeBackSlash = 220;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeBreak = 19;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeCapsLock = 20;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeCloseBracket = 221;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeColon = 186;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeColon2 = 59; // Opera and Firefox
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeComma = 188;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeCtrl = 17;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeDelete = 46;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeEnd = 35;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeEnter = 13;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeEquals = 187;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeEquals2 = 61; // Opera
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeEquals3 = 107; // Firefox
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeEscape = 27;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeForwardSlash = 191;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeFunction1 = 112;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeFunction10 = 121;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeFunction11 = 122;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeFunction12 = 123;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeFunction2 = 113;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeFunction3 = 114;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeFunction4 = 115;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeFunction5 = 116;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeFunction6 = 117;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeFunction7 = 118;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeFunction8 = 119;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeFunction9 = 120;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeHome = 36;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeInsert = 45;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeMenu = 93;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeMinus = 189;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeMinus2 = 109; // Opera and Firefox
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeNumLock = 144;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeNumPad0 = 96;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeNumPad1 = 97;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeNumPad2 = 98;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeNumPad3 = 99;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeNumPad4 = 100;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeNumPad5 = 101;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeNumPad6 = 102;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeNumPad7 = 103;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeNumPad8 = 104;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeNumPad9 = 105;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeNumPadDivide = 111;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeNumPadDot = 110;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeNumPadMinus = 109;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeNumPadMultiply = 106;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeNumPadPlus = 107;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeOpenBracket = 219;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodePageDown = 34;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodePageUp = 33;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodePeriod = 190;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodePrint = 44;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeQuote = 222;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeScrollLock = 145;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeShift = 16;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeSpace = 32;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeTab = 9;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeTilde = 192;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeWindowsLeft = 91;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeWindowsOpera = 219; // Opera
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeWindowsRight = 92;
/**
 * String values for use with KeyboardEvent.key
 */
const keyArrowDown = "ArrowDown";
const keyArrowLeft = "ArrowLeft";
const keyArrowRight = "ArrowRight";
const keyArrowUp = "ArrowUp";
const keyEnter = "Enter";
const keyEscape = "Escape";
const keyHome = "Home";
const keyEnd = "End";
const keyFunction2 = "F2";
const keyPageDown = "PageDown";
const keyPageUp = "PageUp";
const keySpace = " ";
const keyTab = "Tab";
const keyBackspace = "Backspace";
const keyDelete = "Delete";
const ArrowKeys = {
    ArrowDown: keyArrowDown,
    ArrowLeft: keyArrowLeft,
    ArrowRight: keyArrowRight,
    ArrowUp: keyArrowUp,
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* reexport safe */ _button__WEBPACK_IMPORTED_MODULE_0__.Button),
/* harmony export */   "buttonBasicStyles": () => (/* reexport safe */ _button__WEBPACK_IMPORTED_MODULE_0__.buttonBasicStyles),
/* harmony export */   "cerButtonBasic": () => (/* reexport safe */ _button__WEBPACK_IMPORTED_MODULE_0__.cerButtonBasic)
/* harmony export */ });
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ "./src/button.ts");


})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxnQkFBZ0I7QUFDNUQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDOU1EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsUUFBUTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixnQkFBZ0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxS2dDO0FBQ007QUFDZ0M7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDTyxtQkFBbUIsc0RBQVk7QUFDdEM7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9EQUFlO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsZ0VBQXNCO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLEtBQUs7QUFDbEMsK0JBQStCLEtBQUs7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCx1REFBYTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNBLDZCQUE2Qiw2REFBYTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxRQUFRO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsUUFBUTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxRQUFRO0FBQ25EO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsSUFBSTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLCtEQUFVO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsK0RBQVU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLCtEQUFVO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsV0FBVztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQseUJBQXlCLDJCQUEyQjtBQUMzRztBQUNBO0FBQ0E7QUFDQSw4RkFBOEYsV0FBVztBQUN6RztBQUNBO0FBQ0EsMkVBQTJFLGdCQUFnQjtBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFLHdCQUF3QjtBQUM5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxvQ0FBb0MsV0FBVztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxvQ0FBb0MsV0FBVztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxvQ0FBb0MsV0FBVztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxvQ0FBb0MsV0FBVztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSw2QkFBNkIsV0FBVztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELGVBQWU7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFlBQVk7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1ekMrRjtBQUN0QztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0dBQWdHLFFBQVE7QUFDeEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLCtEQUFVO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvRUFBZTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvRUFBZTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG1FQUFRO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw2REFBSSxHQUFHLGlCQUFpQjtBQUM1QixJQUFJLDZEQUFJLEdBQUcsc0NBQXNDO0FBQ2pELElBQUksNkRBQUksR0FBRyw0QkFBNEI7QUFDdkMsSUFBSSw2REFBSTtBQUNSLElBQUksNkRBQUksR0FBRyxpQkFBaUI7QUFDNUIsSUFBSSxtRUFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPLDBCQUEwQjtBQUNqQztBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTywyQkFBMkI7QUFDbEM7QUFDQTtBQUNBO0FBQ08sNEJBQTRCO0FBQ25DO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPLDJCQUEyQjtBQUNsQztBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPLGlDQUFpQztBQUN4QztBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3ZYQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOeUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nZXR0aW5nLXN0YXJ0ZWQtdXNpbmctYS1jb25maWd1cmF0aW9uL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9nZXR0aW5nLXN0YXJ0ZWQtdXNpbmctYS1jb25maWd1cmF0aW9uLy4vc3JjL2J1dHRvbi50cyIsIndlYnBhY2s6Ly9nZXR0aW5nLXN0YXJ0ZWQtdXNpbmctYS1jb25maWd1cmF0aW9uLy4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly9nZXR0aW5nLXN0YXJ0ZWQtdXNpbmctYS1jb25maWd1cmF0aW9uLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvZmFzdC1lbGVtZW50L2Rpc3QvZXNtL2NvbXBvbmVudHMvYXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9nZXR0aW5nLXN0YXJ0ZWQtdXNpbmctYS1jb25maWd1cmF0aW9uLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvZmFzdC1lbGVtZW50L2Rpc3QvZXNtL2NvbXBvbmVudHMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9nZXR0aW5nLXN0YXJ0ZWQtdXNpbmctYS1jb25maWd1cmF0aW9uLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvZmFzdC1lbGVtZW50L2Rpc3QvZXNtL2NvbXBvbmVudHMvZmFzdC1kZWZpbml0aW9ucy5qcyIsIndlYnBhY2s6Ly9nZXR0aW5nLXN0YXJ0ZWQtdXNpbmctYS1jb25maWd1cmF0aW9uLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvZmFzdC1lbGVtZW50L2Rpc3QvZXNtL2NvbXBvbmVudHMvZmFzdC1lbGVtZW50LmpzIiwid2VicGFjazovL2dldHRpbmctc3RhcnRlZC11c2luZy1hLWNvbmZpZ3VyYXRpb24vLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9mYXN0LWVsZW1lbnQvZGlzdC9lc20vZG9tLmpzIiwid2VicGFjazovL2dldHRpbmctc3RhcnRlZC11c2luZy1hLWNvbmZpZ3VyYXRpb24vLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9mYXN0LWVsZW1lbnQvZGlzdC9lc20vb2JzZXJ2YXRpb24vbm90aWZpZXIuanMiLCJ3ZWJwYWNrOi8vZ2V0dGluZy1zdGFydGVkLXVzaW5nLWEtY29uZmlndXJhdGlvbi8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L2Zhc3QtZWxlbWVudC9kaXN0L2VzbS9vYnNlcnZhdGlvbi9vYnNlcnZhYmxlLmpzIiwid2VicGFjazovL2dldHRpbmctc3RhcnRlZC11c2luZy1hLWNvbmZpZ3VyYXRpb24vLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9mYXN0LWVsZW1lbnQvZGlzdC9lc20vcGxhdGZvcm0uanMiLCJ3ZWJwYWNrOi8vZ2V0dGluZy1zdGFydGVkLXVzaW5nLWEtY29uZmlndXJhdGlvbi8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L2Zhc3QtZWxlbWVudC9kaXN0L2VzbS9zdHlsZXMvY3NzLWRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly9nZXR0aW5nLXN0YXJ0ZWQtdXNpbmctYS1jb25maWd1cmF0aW9uLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvZmFzdC1lbGVtZW50L2Rpc3QvZXNtL3N0eWxlcy9jc3MuanMiLCJ3ZWJwYWNrOi8vZ2V0dGluZy1zdGFydGVkLXVzaW5nLWEtY29uZmlndXJhdGlvbi8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L2Zhc3QtZWxlbWVudC9kaXN0L2VzbS9zdHlsZXMvZWxlbWVudC1zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vZ2V0dGluZy1zdGFydGVkLXVzaW5nLWEtY29uZmlndXJhdGlvbi8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L2Zhc3QtZWxlbWVudC9kaXN0L2VzbS90ZW1wbGF0aW5nL2JpbmRpbmcuanMiLCJ3ZWJwYWNrOi8vZ2V0dGluZy1zdGFydGVkLXVzaW5nLWEtY29uZmlndXJhdGlvbi8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L2Zhc3QtZWxlbWVudC9kaXN0L2VzbS90ZW1wbGF0aW5nL2NvbXBpbGVyLmpzIiwid2VicGFjazovL2dldHRpbmctc3RhcnRlZC11c2luZy1hLWNvbmZpZ3VyYXRpb24vLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9mYXN0LWVsZW1lbnQvZGlzdC9lc20vdGVtcGxhdGluZy9odG1sLWRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly9nZXR0aW5nLXN0YXJ0ZWQtdXNpbmctYS1jb25maWd1cmF0aW9uLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvZmFzdC1lbGVtZW50L2Rpc3QvZXNtL3RlbXBsYXRpbmcvbm9kZS1vYnNlcnZhdGlvbi5qcyIsIndlYnBhY2s6Ly9nZXR0aW5nLXN0YXJ0ZWQtdXNpbmctYS1jb25maWd1cmF0aW9uLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvZmFzdC1lbGVtZW50L2Rpc3QvZXNtL3RlbXBsYXRpbmcvcmVmLmpzIiwid2VicGFjazovL2dldHRpbmctc3RhcnRlZC11c2luZy1hLWNvbmZpZ3VyYXRpb24vLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9mYXN0LWVsZW1lbnQvZGlzdC9lc20vdGVtcGxhdGluZy9zbG90dGVkLmpzIiwid2VicGFjazovL2dldHRpbmctc3RhcnRlZC11c2luZy1hLWNvbmZpZ3VyYXRpb24vLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9mYXN0LWVsZW1lbnQvZGlzdC9lc20vdGVtcGxhdGluZy90ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly9nZXR0aW5nLXN0YXJ0ZWQtdXNpbmctYS1jb25maWd1cmF0aW9uLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvZmFzdC1lbGVtZW50L2Rpc3QvZXNtL3RlbXBsYXRpbmcvdmlldy5qcyIsIndlYnBhY2s6Ly9nZXR0aW5nLXN0YXJ0ZWQtdXNpbmctYS1jb25maWd1cmF0aW9uLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvZmFzdC1mb3VuZGF0aW9uL2Rpc3QvZXNtL2J1dHRvbi9idXR0b24uZm9ybS1hc3NvY2lhdGVkLmpzIiwid2VicGFjazovL2dldHRpbmctc3RhcnRlZC11c2luZy1hLWNvbmZpZ3VyYXRpb24vLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9mYXN0LWZvdW5kYXRpb24vZGlzdC9lc20vYnV0dG9uL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly9nZXR0aW5nLXN0YXJ0ZWQtdXNpbmctYS1jb25maWd1cmF0aW9uLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvZmFzdC1mb3VuZGF0aW9uL2Rpc3QvZXNtL2J1dHRvbi9idXR0b24udGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vZ2V0dGluZy1zdGFydGVkLXVzaW5nLWEtY29uZmlndXJhdGlvbi8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L2Zhc3QtZm91bmRhdGlvbi9kaXN0L2VzbS9kZXNpZ24tc3lzdGVtL2NvbXBvbmVudC1wcmVzZW50YXRpb24uanMiLCJ3ZWJwYWNrOi8vZ2V0dGluZy1zdGFydGVkLXVzaW5nLWEtY29uZmlndXJhdGlvbi8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L2Zhc3QtZm91bmRhdGlvbi9kaXN0L2VzbS9kaS9kaS5qcyIsIndlYnBhY2s6Ly9nZXR0aW5nLXN0YXJ0ZWQtdXNpbmctYS1jb25maWd1cmF0aW9uLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvZmFzdC1mb3VuZGF0aW9uL2Rpc3QvZXNtL2Zvcm0tYXNzb2NpYXRlZC9mb3JtLWFzc29jaWF0ZWQuanMiLCJ3ZWJwYWNrOi8vZ2V0dGluZy1zdGFydGVkLXVzaW5nLWEtY29uZmlndXJhdGlvbi8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L2Zhc3QtZm91bmRhdGlvbi9kaXN0L2VzbS9mb3VuZGF0aW9uLWVsZW1lbnQvZm91bmRhdGlvbi1lbGVtZW50LmpzIiwid2VicGFjazovL2dldHRpbmctc3RhcnRlZC11c2luZy1hLWNvbmZpZ3VyYXRpb24vLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9mYXN0LWZvdW5kYXRpb24vZGlzdC9lc20vcGF0dGVybnMvYXJpYS1nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vZ2V0dGluZy1zdGFydGVkLXVzaW5nLWEtY29uZmlndXJhdGlvbi8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L2Zhc3QtZm91bmRhdGlvbi9kaXN0L2VzbS9wYXR0ZXJucy9zdGFydC1lbmQuanMiLCJ3ZWJwYWNrOi8vZ2V0dGluZy1zdGFydGVkLXVzaW5nLWEtY29uZmlndXJhdGlvbi8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L2Zhc3QtZm91bmRhdGlvbi9kaXN0L2VzbS91dGlsaXRpZXMvYXBwbHktbWl4aW5zLmpzIiwid2VicGFjazovL2dldHRpbmctc3RhcnRlZC11c2luZy1hLWNvbmZpZ3VyYXRpb24vLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9mYXN0LXdlYi11dGlsaXRpZXMvZGlzdC9rZXktY29kZXMuanMiLCJ3ZWJwYWNrOi8vZ2V0dGluZy1zdGFydGVkLXVzaW5nLWEtY29uZmlndXJhdGlvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nZXR0aW5nLXN0YXJ0ZWQtdXNpbmctYS1jb25maWd1cmF0aW9uL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nZXR0aW5nLXN0YXJ0ZWQtdXNpbmctYS1jb25maWd1cmF0aW9uL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ2V0dGluZy1zdGFydGVkLXVzaW5nLWEtY29uZmlndXJhdGlvbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dldHRpbmctc3RhcnRlZC11c2luZy1hLWNvbmZpZ3VyYXRpb24vLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHNlbGYsICgpID0+IHtcbnJldHVybiAiLCJpbXBvcnQgeyBhdHRyLCBjc3MgfSBmcm9tICdAbWljcm9zb2Z0L2Zhc3QtZWxlbWVudCc7XHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uIGFzIEZvdW5kYXRpb25CdXR0b24sXHJcbiAgYnV0dG9uVGVtcGxhdGUgYXMgdGVtcGxhdGUsXHJcbn0gZnJvbSAnQG1pY3Jvc29mdC9mYXN0LWZvdW5kYXRpb24nO1xyXG5cclxuY29uc3Qgc3R5bGVzID0gY3NzYFxyXG4gICAgOmhvc3QoW2FwcGVhcmFuY2U9XCJhY2NlbnRcIl0pIGJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuLyoqXHJcbiAqIFR5cGVzIG9mIGJ1dHRvbiBhcHBlYXJhbmNlLlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBCdXR0b25BcHBlYXJhbmNlID1cclxuICB8ICdhY2NlbnQnXHJcbiAgfCAnbGlnaHR3ZWlnaHQnXHJcbiAgfCAnbmV1dHJhbCdcclxuICB8ICdvdXRsaW5lJ1xyXG4gIHwgJ3N0ZWFsdGgnO1xyXG5leHBvcnQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgRm91bmRhdGlvbkJ1dHRvbiB7XHJcbiAgLyoqXHJcbiAgICogVGhlIGFwcGVhcmFuY2UgdGhlIGJ1dHRvbiBzaG91bGQgaGF2ZS5cclxuICAgKlxyXG4gICAqIEBwdWJsaWNcclxuICAgKiBAcmVtYXJrc1xyXG4gICAqIEhUTUwgQXR0cmlidXRlOiBhcHBlYXJhbmNlXHJcbiAgICovXHJcbiAgQGF0dHJcclxuICBwdWJsaWMgYXBwZWFyYW5jZTogQnV0dG9uQXBwZWFyYW5jZSA9ICduZXV0cmFsJztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNlckJ1dHRvbkJhc2ljID0gQnV0dG9uLmNvbXBvc2Uoe1xyXG4gIGJhc2VOYW1lOiAnYnV0dG9uLWJhc2ljJyxcclxuICBiYXNlQ2xhc3M6IEZvdW5kYXRpb25CdXR0b24sXHJcbiAgdGVtcGxhdGUsXHJcbiAgc3R5bGVzLFxyXG4gIHNoYWRvd09wdGlvbnM6IHtcclxuICAgIGRlbGVnYXRlc0ZvY3VzOiB0cnVlLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IHsgc3R5bGVzIGFzIGJ1dHRvbkJhc2ljU3R5bGVzIH07XHJcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NyZWF0ZUJpbmRpbmcobywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlTWFwLnNldChyZWNlaXZlciwgdmFsdWUpO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcbiIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiLi4vb2JzZXJ2YXRpb24vb2JzZXJ2YWJsZS5qc1wiO1xuaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4uL2RvbS5qc1wiO1xuLyoqXG4gKiBBIHtAbGluayBWYWx1ZUNvbnZlcnRlcn0gdGhhdCBjb252ZXJ0cyB0byBhbmQgZnJvbSBgYm9vbGVhbmAgdmFsdWVzLlxuICogQHJlbWFya3NcbiAqIFVzZWQgYXV0b21hdGljYWxseSB3aGVuIHRoZSBgYm9vbGVhbmAge0BsaW5rIEF0dHJpYnV0ZU1vZGV9IGlzIHNlbGVjdGVkLlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgYm9vbGVhbkNvbnZlcnRlciA9IHtcbiAgICB0b1ZpZXcodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlID8gXCJ0cnVlXCIgOiBcImZhbHNlXCI7XG4gICAgfSxcbiAgICBmcm9tVmlldyh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHxcbiAgICAgICAgICAgIHZhbHVlID09PSB2b2lkIDAgfHxcbiAgICAgICAgICAgIHZhbHVlID09PSBcImZhbHNlXCIgfHxcbiAgICAgICAgICAgIHZhbHVlID09PSBmYWxzZSB8fFxuICAgICAgICAgICAgdmFsdWUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxufTtcbi8qKlxuICogQSB7QGxpbmsgVmFsdWVDb252ZXJ0ZXJ9IHRoYXQgY29udmVydHMgdG8gYW5kIGZyb20gYG51bWJlcmAgdmFsdWVzLlxuICogQHJlbWFya3NcbiAqIFRoaXMgY29udmVydGVyIGFsbG93cyBmb3IgbnVsbGFibGUgbnVtYmVycywgcmV0dXJuaW5nIGBudWxsYCBpZiB0aGVcbiAqIGlucHV0IHdhcyBgbnVsbGAsIGB1bmRlZmluZWRgLCBvciBgTmFOYC5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IG51bGxhYmxlTnVtYmVyQ29udmVydGVyID0ge1xuICAgIHRvVmlldyh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbnVtYmVyID0gdmFsdWUgKiAxO1xuICAgICAgICByZXR1cm4gaXNOYU4obnVtYmVyKSA/IG51bGwgOiBudW1iZXIudG9TdHJpbmcoKTtcbiAgICB9LFxuICAgIGZyb21WaWV3KHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBudW1iZXIgPSB2YWx1ZSAqIDE7XG4gICAgICAgIHJldHVybiBpc05hTihudW1iZXIpID8gbnVsbCA6IG51bWJlcjtcbiAgICB9LFxufTtcbi8qKlxuICogQW4gaW1wbGVtZW50YXRpb24gb2Yge0BsaW5rIEFjY2Vzc29yfSB0aGF0IHN1cHBvcnRzIHJlYWN0aXZpdHksXG4gKiBjaGFuZ2UgY2FsbGJhY2tzLCBhdHRyaWJ1dGUgcmVmbGVjdGlvbiwgYW5kIHR5cGUgY29udmVyc2lvbiBmb3JcbiAqIGN1c3RvbSBlbGVtZW50cy5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNsYXNzIEF0dHJpYnV0ZURlZmluaXRpb24ge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQXR0cmlidXRlRGVmaW5pdGlvbi5cbiAgICAgKiBAcGFyYW0gT3duZXIgLSBUaGUgY2xhc3MgY29uc3RydWN0b3IgdGhhdCBvd25zIHRoaXMgYXR0cmlidXRlLlxuICAgICAqIEBwYXJhbSBuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5IGFzc29jaWF0ZWQgd2l0aCB0aGUgYXR0cmlidXRlLlxuICAgICAqIEBwYXJhbSBhdHRyaWJ1dGUgLSBUaGUgbmFtZSBvZiB0aGUgYXR0cmlidXRlIGluIEhUTUwuXG4gICAgICogQHBhcmFtIG1vZGUgLSBUaGUge0BsaW5rIEF0dHJpYnV0ZU1vZGV9IHRoYXQgZGVzY3JpYmVzIHRoZSBiZWhhdmlvciBvZiB0aGlzIGF0dHJpYnV0ZS5cbiAgICAgKiBAcGFyYW0gY29udmVydGVyIC0gQSB7QGxpbmsgVmFsdWVDb252ZXJ0ZXJ9IHRoYXQgaW50ZWdyYXRlcyB3aXRoIHRoZSBwcm9wZXJ0eSBnZXR0ZXIvc2V0dGVyXG4gICAgICogdG8gY29udmVydCB2YWx1ZXMgdG8gYW5kIGZyb20gYSBET00gc3RyaW5nLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKE93bmVyLCBuYW1lLCBhdHRyaWJ1dGUgPSBuYW1lLnRvTG93ZXJDYXNlKCksIG1vZGUgPSBcInJlZmxlY3RcIiwgY29udmVydGVyKSB7XG4gICAgICAgIHRoaXMuZ3VhcmRzID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLk93bmVyID0gT3duZXI7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlID0gYXR0cmlidXRlO1xuICAgICAgICB0aGlzLm1vZGUgPSBtb2RlO1xuICAgICAgICB0aGlzLmNvbnZlcnRlciA9IGNvbnZlcnRlcjtcbiAgICAgICAgdGhpcy5maWVsZE5hbWUgPSBgXyR7bmFtZX1gO1xuICAgICAgICB0aGlzLmNhbGxiYWNrTmFtZSA9IGAke25hbWV9Q2hhbmdlZGA7XG4gICAgICAgIHRoaXMuaGFzQ2FsbGJhY2sgPSB0aGlzLmNhbGxiYWNrTmFtZSBpbiBPd25lci5wcm90b3R5cGU7XG4gICAgICAgIGlmIChtb2RlID09PSBcImJvb2xlYW5cIiAmJiBjb252ZXJ0ZXIgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgdGhpcy5jb252ZXJ0ZXIgPSBib29sZWFuQ29udmVydGVyO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHZhbHVlIG9mIHRoZSBhdHRyaWJ1dGUvcHJvcGVydHkgb24gdGhlIHNvdXJjZSBlbGVtZW50LlxuICAgICAqIEBwYXJhbSBzb3VyY2UgLSBUaGUgc291cmNlIGVsZW1lbnQgdG8gYWNjZXNzLlxuICAgICAqIEBwYXJhbSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBzZXQgdGhlIGF0dHJpYnV0ZS9wcm9wZXJ0eSB0by5cbiAgICAgKi9cbiAgICBzZXRWYWx1ZShzb3VyY2UsIG5ld1ZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG9sZFZhbHVlID0gc291cmNlW3RoaXMuZmllbGROYW1lXTtcbiAgICAgICAgY29uc3QgY29udmVydGVyID0gdGhpcy5jb252ZXJ0ZXI7XG4gICAgICAgIGlmIChjb252ZXJ0ZXIgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgbmV3VmFsdWUgPSBjb252ZXJ0ZXIuZnJvbVZpZXcobmV3VmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHNvdXJjZVt0aGlzLmZpZWxkTmFtZV0gPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMudHJ5UmVmbGVjdFRvQXR0cmlidXRlKHNvdXJjZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5oYXNDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHNvdXJjZVt0aGlzLmNhbGxiYWNrTmFtZV0ob2xkVmFsdWUsIG5ld1ZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNvdXJjZS4kZmFzdENvbnRyb2xsZXIubm90aWZ5KHRoaXMubmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgdmFsdWUgb2YgdGhlIGF0dHJpYnV0ZS9wcm9wZXJ0eSBvbiB0aGUgc291cmNlIGVsZW1lbnQuXG4gICAgICogQHBhcmFtIHNvdXJjZSAtIFRoZSBzb3VyY2UgZWxlbWVudCB0byBhY2Nlc3MuXG4gICAgICovXG4gICAgZ2V0VmFsdWUoc291cmNlKSB7XG4gICAgICAgIE9ic2VydmFibGUudHJhY2soc291cmNlLCB0aGlzLm5hbWUpO1xuICAgICAgICByZXR1cm4gc291cmNlW3RoaXMuZmllbGROYW1lXTtcbiAgICB9XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIG9uQXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGVsZW1lbnQsIHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLmd1YXJkcy5oYXMoZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmd1YXJkcy5hZGQoZWxlbWVudCk7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoZWxlbWVudCwgdmFsdWUpO1xuICAgICAgICB0aGlzLmd1YXJkcy5kZWxldGUoZWxlbWVudCk7XG4gICAgfVxuICAgIHRyeVJlZmxlY3RUb0F0dHJpYnV0ZShlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IG1vZGUgPSB0aGlzLm1vZGU7XG4gICAgICAgIGNvbnN0IGd1YXJkcyA9IHRoaXMuZ3VhcmRzO1xuICAgICAgICBpZiAoZ3VhcmRzLmhhcyhlbGVtZW50KSB8fCBtb2RlID09PSBcImZyb21WaWV3XCIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBET00ucXVldWVVcGRhdGUoKCkgPT4ge1xuICAgICAgICAgICAgZ3VhcmRzLmFkZChlbGVtZW50KTtcbiAgICAgICAgICAgIGNvbnN0IGxhdGVzdFZhbHVlID0gZWxlbWVudFt0aGlzLmZpZWxkTmFtZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG1vZGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwicmVmbGVjdFwiOlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb252ZXJ0ZXIgPSB0aGlzLmNvbnZlcnRlcjtcbiAgICAgICAgICAgICAgICAgICAgRE9NLnNldEF0dHJpYnV0ZShlbGVtZW50LCB0aGlzLmF0dHJpYnV0ZSwgY29udmVydGVyICE9PSB2b2lkIDAgPyBjb252ZXJ0ZXIudG9WaWV3KGxhdGVzdFZhbHVlKSA6IGxhdGVzdFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImJvb2xlYW5cIjpcbiAgICAgICAgICAgICAgICAgICAgRE9NLnNldEJvb2xlYW5BdHRyaWJ1dGUoZWxlbWVudCwgdGhpcy5hdHRyaWJ1dGUsIGxhdGVzdFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBndWFyZHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29sbGVjdHMgYWxsIGF0dHJpYnV0ZSBkZWZpbml0aW9ucyBhc3NvY2lhdGVkIHdpdGggdGhlIG93bmVyLlxuICAgICAqIEBwYXJhbSBPd25lciAtIFRoZSBjbGFzcyBjb25zdHJ1Y3RvciB0byBjb2xsZWN0IGF0dHJpYnV0ZSBmb3IuXG4gICAgICogQHBhcmFtIGF0dHJpYnV0ZUxpc3RzIC0gQW55IGV4aXN0aW5nIGF0dHJpYnV0ZXMgdG8gY29sbGVjdCBhbmQgbWVyZ2Ugd2l0aCB0aG9zZSBhc3NvY2lhdGVkIHdpdGggdGhlIG93bmVyLlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHN0YXRpYyBjb2xsZWN0KE93bmVyLCAuLi5hdHRyaWJ1dGVMaXN0cykge1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gW107XG4gICAgICAgIGF0dHJpYnV0ZUxpc3RzLnB1c2goT3duZXIuYXR0cmlidXRlcyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBpaSA9IGF0dHJpYnV0ZUxpc3RzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBhdHRyaWJ1dGVMaXN0c1tpXTtcbiAgICAgICAgICAgIGlmIChsaXN0ID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwLCBqaiA9IGxpc3QubGVuZ3RoOyBqIDwgamo7ICsraikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbmZpZyA9IGxpc3Rbal07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcy5wdXNoKG5ldyBBdHRyaWJ1dGVEZWZpbml0aW9uKE93bmVyLCBjb25maWcpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMucHVzaChuZXcgQXR0cmlidXRlRGVmaW5pdGlvbihPd25lciwgY29uZmlnLnByb3BlcnR5LCBjb25maWcuYXR0cmlidXRlLCBjb25maWcubW9kZSwgY29uZmlnLmNvbnZlcnRlcikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXR0cmlidXRlcztcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gYXR0cihjb25maWdPclRhcmdldCwgcHJvcCkge1xuICAgIGxldCBjb25maWc7XG4gICAgZnVuY3Rpb24gZGVjb3JhdG9yKCR0YXJnZXQsICRwcm9wKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgLy8gTm9uIGludm9jYXRpb246XG4gICAgICAgICAgICAvLyAtIEBhdHRyXG4gICAgICAgICAgICAvLyBJbnZvY2F0aW9uIHdpdGggb3Igdy9vIG9wdHM6XG4gICAgICAgICAgICAvLyAtIEBhdHRyKClcbiAgICAgICAgICAgIC8vIC0gQGF0dHIoey4uLm9wdHN9KVxuICAgICAgICAgICAgY29uZmlnLnByb3BlcnR5ID0gJHByb3A7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9ICR0YXJnZXQuY29uc3RydWN0b3IuYXR0cmlidXRlcyB8fFxuICAgICAgICAgICAgKCR0YXJnZXQuY29uc3RydWN0b3IuYXR0cmlidXRlcyA9IFtdKTtcbiAgICAgICAgYXR0cmlidXRlcy5wdXNoKGNvbmZpZyk7XG4gICAgfVxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAvLyBOb24gaW52b2NhdGlvbjpcbiAgICAgICAgLy8gLSBAYXR0clxuICAgICAgICBjb25maWcgPSB7fTtcbiAgICAgICAgZGVjb3JhdG9yKGNvbmZpZ09yVGFyZ2V0LCBwcm9wKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBJbnZvY2F0aW9uIHdpdGggb3Igdy9vIG9wdHM6XG4gICAgLy8gLSBAYXR0cigpXG4gICAgLy8gLSBAYXR0cih7Li4ub3B0c30pXG4gICAgY29uZmlnID0gY29uZmlnT3JUYXJnZXQgPT09IHZvaWQgMCA/IHt9IDogY29uZmlnT3JUYXJnZXQ7XG4gICAgcmV0dXJuIGRlY29yYXRvcjtcbn1cbiIsImltcG9ydCB7IERPTSB9IGZyb20gXCIuLi9kb20uanNcIjtcbmltcG9ydCB7IFByb3BlcnR5Q2hhbmdlTm90aWZpZXIgfSBmcm9tIFwiLi4vb2JzZXJ2YXRpb24vbm90aWZpZXIuanNcIjtcbmltcG9ydCB7IGRlZmF1bHRFeGVjdXRpb25Db250ZXh0LCBPYnNlcnZhYmxlIH0gZnJvbSBcIi4uL29ic2VydmF0aW9uL29ic2VydmFibGUuanNcIjtcbmltcG9ydCB7IEZBU1RFbGVtZW50RGVmaW5pdGlvbiB9IGZyb20gXCIuL2Zhc3QtZGVmaW5pdGlvbnMuanNcIjtcbmNvbnN0IHNoYWRvd1Jvb3RzID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IGRlZmF1bHRFdmVudE9wdGlvbnMgPSB7XG4gICAgYnViYmxlczogdHJ1ZSxcbiAgICBjb21wb3NlZDogdHJ1ZSxcbiAgICBjYW5jZWxhYmxlOiB0cnVlLFxufTtcbmZ1bmN0aW9uIGdldFNoYWRvd1Jvb3QoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LnNoYWRvd1Jvb3QgfHwgc2hhZG93Um9vdHMuZ2V0KGVsZW1lbnQpIHx8IG51bGw7XG59XG4vKipcbiAqIENvbnRyb2xzIHRoZSBsaWZlY3ljbGUgYW5kIHJlbmRlcmluZyBvZiBhIGBGQVNURWxlbWVudGAuXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjbGFzcyBDb250cm9sbGVyIGV4dGVuZHMgUHJvcGVydHlDaGFuZ2VOb3RpZmllciB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIENvbnRyb2xsZXIgdG8gY29udHJvbCB0aGUgc3BlY2lmaWVkIGVsZW1lbnQuXG4gICAgICogQHBhcmFtIGVsZW1lbnQgLSBUaGUgZWxlbWVudCB0byBiZSBjb250cm9sbGVkIGJ5IHRoaXMgY29udHJvbGxlci5cbiAgICAgKiBAcGFyYW0gZGVmaW5pdGlvbiAtIFRoZSBlbGVtZW50IGRlZmluaXRpb24gbWV0YWRhdGEgdGhhdCBpbnN0cnVjdHMgdGhpc1xuICAgICAqIGNvbnRyb2xsZXIgaW4gaG93IHRvIGhhbmRsZSByZW5kZXJpbmcgYW5kIG90aGVyIHBsYXRmb3JtIGludGVncmF0aW9ucy5cbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBkZWZpbml0aW9uKSB7XG4gICAgICAgIHN1cGVyKGVsZW1lbnQpO1xuICAgICAgICB0aGlzLmJvdW5kT2JzZXJ2YWJsZXMgPSBudWxsO1xuICAgICAgICB0aGlzLmJlaGF2aW9ycyA9IG51bGw7XG4gICAgICAgIHRoaXMubmVlZHNJbml0aWFsaXphdGlvbiA9IHRydWU7XG4gICAgICAgIHRoaXMuX3RlbXBsYXRlID0gbnVsbDtcbiAgICAgICAgdGhpcy5fc3R5bGVzID0gbnVsbDtcbiAgICAgICAgdGhpcy5faXNDb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgYWxsb3dzIE9ic2VydmFibGUuZ2V0Tm90aWZpZXIoLi4uKSB0byByZXR1cm4gdGhlIENvbnRyb2xsZXJcbiAgICAgICAgICogd2hlbiB0aGUgbm90aWZpZXIgZm9yIHRoZSBDb250cm9sbGVyIGl0c2VsZiBpcyBiZWluZyByZXF1ZXN0ZWQuIFRoZVxuICAgICAgICAgKiByZXN1bHQgaXMgdGhhdCB0aGUgT2JzZXJ2YWJsZSBzeXN0ZW0gZG9lcyBub3QgbmVlZCB0byBjcmVhdGUgYSBzZXBhcmF0ZVxuICAgICAgICAgKiBpbnN0YW5jZSBvZiBOb3RpZmllciBmb3Igb2JzZXJ2YWJsZXMgb24gdGhlIENvbnRyb2xsZXIuIFRoZSBjb21wb25lbnQgYW5kXG4gICAgICAgICAqIHRoZSBjb250cm9sbGVyIHdpbGwgbm93IHNoYXJlIHRoZSBzYW1lIG5vdGlmaWVyLCByZW1vdmluZyBvbmUtb2JqZWN0IGNvbnN0cnVjdFxuICAgICAgICAgKiBwZXIgd2ViIGNvbXBvbmVudCBpbnN0YW5jZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuJGZhc3RDb250cm9sbGVyID0gdGhpcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB2aWV3IGFzc29jaWF0ZWQgd2l0aCB0aGUgY3VzdG9tIGVsZW1lbnQuXG4gICAgICAgICAqIEByZW1hcmtzXG4gICAgICAgICAqIElmIGBudWxsYCB0aGVuIHRoZSBlbGVtZW50IGlzIG1hbmFnaW5nIGl0cyBvd24gcmVuZGVyaW5nLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy52aWV3ID0gbnVsbDtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5kZWZpbml0aW9uID0gZGVmaW5pdGlvbjtcbiAgICAgICAgY29uc3Qgc2hhZG93T3B0aW9ucyA9IGRlZmluaXRpb24uc2hhZG93T3B0aW9ucztcbiAgICAgICAgaWYgKHNoYWRvd09wdGlvbnMgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgY29uc3Qgc2hhZG93Um9vdCA9IGVsZW1lbnQuYXR0YWNoU2hhZG93KHNoYWRvd09wdGlvbnMpO1xuICAgICAgICAgICAgaWYgKHNoYWRvd09wdGlvbnMubW9kZSA9PT0gXCJjbG9zZWRcIikge1xuICAgICAgICAgICAgICAgIHNoYWRvd1Jvb3RzLnNldChlbGVtZW50LCBzaGFkb3dSb290KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBDYXB0dXJlIGFueSBvYnNlcnZhYmxlIHZhbHVlcyB0aGF0IHdlcmUgc2V0IGJ5IHRoZSBiaW5kaW5nIGVuZ2luZSBiZWZvcmVcbiAgICAgICAgLy8gdGhlIGJyb3dzZXIgdXBncmFkZWQgdGhlIGVsZW1lbnQuIFRoZW4gZGVsZXRlIHRoZSBwcm9wZXJ0eSBzaW5jZSBpdCB3aWxsXG4gICAgICAgIC8vIHNoYWRvdyB0aGUgZ2V0dGVyL3NldHRlciB0aGF0IGlzIHJlcXVpcmVkIHRvIG1ha2UgdGhlIG9ic2VydmFibGUgb3BlcmF0ZS5cbiAgICAgICAgLy8gTGF0ZXIsIGluIHRoZSBjb25uZWN0IGNhbGxiYWNrLCB3ZSdsbCByZS1hcHBseSB0aGUgdmFsdWVzLlxuICAgICAgICBjb25zdCBhY2Nlc3NvcnMgPSBPYnNlcnZhYmxlLmdldEFjY2Vzc29ycyhlbGVtZW50KTtcbiAgICAgICAgaWYgKGFjY2Vzc29ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBib3VuZE9ic2VydmFibGVzID0gKHRoaXMuYm91bmRPYnNlcnZhYmxlcyA9IE9iamVjdC5jcmVhdGUobnVsbCkpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGlpID0gYWNjZXNzb3JzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSBhY2Nlc3NvcnNbaV0ubmFtZTtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGVsZW1lbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgZWxlbWVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICAgICAgICAgICAgICBib3VuZE9ic2VydmFibGVzW3Byb3BlcnR5TmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHdoZXRoZXIgb3Igbm90IHRoZSBjdXN0b20gZWxlbWVudCBoYXMgYmVlblxuICAgICAqIGNvbm5lY3RlZCB0byB0aGUgZG9jdW1lbnQuXG4gICAgICovXG4gICAgZ2V0IGlzQ29ubmVjdGVkKCkge1xuICAgICAgICBPYnNlcnZhYmxlLnRyYWNrKHRoaXMsIFwiaXNDb25uZWN0ZWRcIik7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0Nvbm5lY3RlZDtcbiAgICB9XG4gICAgc2V0SXNDb25uZWN0ZWQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5faXNDb25uZWN0ZWQgPSB2YWx1ZTtcbiAgICAgICAgT2JzZXJ2YWJsZS5ub3RpZnkodGhpcywgXCJpc0Nvbm5lY3RlZFwiKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cy9zZXRzIHRoZSB0ZW1wbGF0ZSB1c2VkIHRvIHJlbmRlciB0aGUgY29tcG9uZW50LlxuICAgICAqIEByZW1hcmtzXG4gICAgICogVGhpcyB2YWx1ZSBjYW4gb25seSBiZSBhY2N1cmF0ZWx5IHJlYWQgYWZ0ZXIgY29ubmVjdCBidXQgY2FuIGJlIHNldCBhdCBhbnkgdGltZS5cbiAgICAgKi9cbiAgICBnZXQgdGVtcGxhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZTtcbiAgICB9XG4gICAgc2V0IHRlbXBsYXRlKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLl90ZW1wbGF0ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl90ZW1wbGF0ZSA9IHZhbHVlO1xuICAgICAgICBpZiAoIXRoaXMubmVlZHNJbml0aWFsaXphdGlvbikge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJUZW1wbGF0ZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cy9zZXRzIHRoZSBwcmltYXJ5IHN0eWxlcyB1c2VkIGZvciB0aGUgY29tcG9uZW50LlxuICAgICAqIEByZW1hcmtzXG4gICAgICogVGhpcyB2YWx1ZSBjYW4gb25seSBiZSBhY2N1cmF0ZWx5IHJlYWQgYWZ0ZXIgY29ubmVjdCBidXQgY2FuIGJlIHNldCBhdCBhbnkgdGltZS5cbiAgICAgKi9cbiAgICBnZXQgc3R5bGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3R5bGVzO1xuICAgIH1cbiAgICBzZXQgc3R5bGVzKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLl9zdHlsZXMgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3N0eWxlcyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVTdHlsZXModGhpcy5fc3R5bGVzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zdHlsZXMgPSB2YWx1ZTtcbiAgICAgICAgaWYgKCF0aGlzLm5lZWRzSW5pdGlhbGl6YXRpb24gJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkU3R5bGVzKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIHN0eWxlcyB0byB0aGlzIGVsZW1lbnQuIFByb3ZpZGluZyBhbiBIVE1MU3R5bGVFbGVtZW50IHdpbGwgYXR0YWNoIHRoZSBlbGVtZW50IGluc3RhbmNlIHRvIHRoZSBzaGFkb3dSb290LlxuICAgICAqIEBwYXJhbSBzdHlsZXMgLSBUaGUgc3R5bGVzIHRvIGFkZC5cbiAgICAgKi9cbiAgICBhZGRTdHlsZXMoc3R5bGVzKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGdldFNoYWRvd1Jvb3QodGhpcy5lbGVtZW50KSB8fFxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmdldFJvb3ROb2RlKCk7XG4gICAgICAgIGlmIChzdHlsZXMgaW5zdGFuY2VvZiBIVE1MU3R5bGVFbGVtZW50KSB7XG4gICAgICAgICAgICB0YXJnZXQuYXBwZW5kKHN0eWxlcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXN0eWxlcy5pc0F0dGFjaGVkVG8odGFyZ2V0KSkge1xuICAgICAgICAgICAgY29uc3Qgc291cmNlQmVoYXZpb3JzID0gc3R5bGVzLmJlaGF2aW9ycztcbiAgICAgICAgICAgIHN0eWxlcy5hZGRTdHlsZXNUbyh0YXJnZXQpO1xuICAgICAgICAgICAgaWYgKHNvdXJjZUJlaGF2aW9ycyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkQmVoYXZpb3JzKHNvdXJjZUJlaGF2aW9ycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBzdHlsZXMgZnJvbSB0aGlzIGVsZW1lbnQuIFByb3ZpZGluZyBhbiBIVE1MU3R5bGVFbGVtZW50IHdpbGwgZGV0YWNoIHRoZSBlbGVtZW50IGluc3RhbmNlIGZyb20gdGhlIHNoYWRvd1Jvb3QuXG4gICAgICogQHBhcmFtIHN0eWxlcyAtIHRoZSBzdHlsZXMgdG8gcmVtb3ZlLlxuICAgICAqL1xuICAgIHJlbW92ZVN0eWxlcyhzdHlsZXMpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZ2V0U2hhZG93Um9vdCh0aGlzLmVsZW1lbnQpIHx8XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuZ2V0Um9vdE5vZGUoKTtcbiAgICAgICAgaWYgKHN0eWxlcyBpbnN0YW5jZW9mIEhUTUxTdHlsZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRhcmdldC5yZW1vdmVDaGlsZChzdHlsZXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0eWxlcy5pc0F0dGFjaGVkVG8odGFyZ2V0KSkge1xuICAgICAgICAgICAgY29uc3Qgc291cmNlQmVoYXZpb3JzID0gc3R5bGVzLmJlaGF2aW9ycztcbiAgICAgICAgICAgIHN0eWxlcy5yZW1vdmVTdHlsZXNGcm9tKHRhcmdldCk7XG4gICAgICAgICAgICBpZiAoc291cmNlQmVoYXZpb3JzICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVCZWhhdmlvcnMoc291cmNlQmVoYXZpb3JzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGJlaGF2aW9ycyB0byB0aGlzIGVsZW1lbnQuXG4gICAgICogQHBhcmFtIGJlaGF2aW9ycyAtIFRoZSBiZWhhdmlvcnMgdG8gYWRkLlxuICAgICAqL1xuICAgIGFkZEJlaGF2aW9ycyhiZWhhdmlvcnMpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0QmVoYXZpb3JzID0gdGhpcy5iZWhhdmlvcnMgfHwgKHRoaXMuYmVoYXZpb3JzID0gbmV3IE1hcCgpKTtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gYmVoYXZpb3JzLmxlbmd0aDtcbiAgICAgICAgY29uc3QgYmVoYXZpb3JzVG9CaW5kID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGNvbnN0IGJlaGF2aW9yID0gYmVoYXZpb3JzW2ldO1xuICAgICAgICAgICAgaWYgKHRhcmdldEJlaGF2aW9ycy5oYXMoYmVoYXZpb3IpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0QmVoYXZpb3JzLnNldChiZWhhdmlvciwgdGFyZ2V0QmVoYXZpb3JzLmdldChiZWhhdmlvcikgKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldEJlaGF2aW9ycy5zZXQoYmVoYXZpb3IsIDEpO1xuICAgICAgICAgICAgICAgIGJlaGF2aW9yc1RvQmluZC5wdXNoKGJlaGF2aW9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5faXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJlaGF2aW9yc1RvQmluZC5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGJlaGF2aW9yc1RvQmluZFtpXS5iaW5kKGVsZW1lbnQsIGRlZmF1bHRFeGVjdXRpb25Db250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGJlaGF2aW9ycyBmcm9tIHRoaXMgZWxlbWVudC5cbiAgICAgKiBAcGFyYW0gYmVoYXZpb3JzIC0gVGhlIGJlaGF2aW9ycyB0byByZW1vdmUuXG4gICAgICogQHBhcmFtIGZvcmNlIC0gRm9yY2VzIHVuYmluZGluZyBvZiBiZWhhdmlvcnMuXG4gICAgICovXG4gICAgcmVtb3ZlQmVoYXZpb3JzKGJlaGF2aW9ycywgZm9yY2UgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCB0YXJnZXRCZWhhdmlvcnMgPSB0aGlzLmJlaGF2aW9ycztcbiAgICAgICAgaWYgKHRhcmdldEJlaGF2aW9ycyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IGJlaGF2aW9ycy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGJlaGF2aW9yc1RvVW5iaW5kID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGNvbnN0IGJlaGF2aW9yID0gYmVoYXZpb3JzW2ldO1xuICAgICAgICAgICAgaWYgKHRhcmdldEJlaGF2aW9ycy5oYXMoYmVoYXZpb3IpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY291bnQgPSB0YXJnZXRCZWhhdmlvcnMuZ2V0KGJlaGF2aW9yKSAtIDE7XG4gICAgICAgICAgICAgICAgY291bnQgPT09IDAgfHwgZm9yY2VcbiAgICAgICAgICAgICAgICAgICAgPyB0YXJnZXRCZWhhdmlvcnMuZGVsZXRlKGJlaGF2aW9yKSAmJiBiZWhhdmlvcnNUb1VuYmluZC5wdXNoKGJlaGF2aW9yKVxuICAgICAgICAgICAgICAgICAgICA6IHRhcmdldEJlaGF2aW9ycy5zZXQoYmVoYXZpb3IsIGNvdW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5faXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJlaGF2aW9yc1RvVW5iaW5kLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgYmVoYXZpb3JzVG9VbmJpbmRbaV0udW5iaW5kKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJ1bnMgY29ubmVjdGVkIGxpZmVjeWNsZSBiZWhhdmlvciBvbiB0aGUgYXNzb2NpYXRlZCBlbGVtZW50LlxuICAgICAqL1xuICAgIG9uQ29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgIGlmICh0aGlzLm5lZWRzSW5pdGlhbGl6YXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuZmluaXNoSW5pdGlhbGl6YXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnZpZXcgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy5iaW5kKGVsZW1lbnQsIGRlZmF1bHRFeGVjdXRpb25Db250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBiZWhhdmlvcnMgPSB0aGlzLmJlaGF2aW9ycztcbiAgICAgICAgaWYgKGJlaGF2aW9ycyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBbYmVoYXZpb3JdIG9mIGJlaGF2aW9ycykge1xuICAgICAgICAgICAgICAgIGJlaGF2aW9yLmJpbmQoZWxlbWVudCwgZGVmYXVsdEV4ZWN1dGlvbkNvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0SXNDb25uZWN0ZWQodHJ1ZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJ1bnMgZGlzY29ubmVjdGVkIGxpZmVjeWNsZSBiZWhhdmlvciBvbiB0aGUgYXNzb2NpYXRlZCBlbGVtZW50LlxuICAgICAqL1xuICAgIG9uRGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIGlmICghdGhpcy5faXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldElzQ29ubmVjdGVkKGZhbHNlKTtcbiAgICAgICAgY29uc3QgdmlldyA9IHRoaXMudmlldztcbiAgICAgICAgaWYgKHZpZXcgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHZpZXcudW5iaW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYmVoYXZpb3JzID0gdGhpcy5iZWhhdmlvcnM7XG4gICAgICAgIGlmIChiZWhhdmlvcnMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtiZWhhdmlvcl0gb2YgYmVoYXZpb3JzKSB7XG4gICAgICAgICAgICAgICAgYmVoYXZpb3IudW5iaW5kKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJ1bnMgdGhlIGF0dHJpYnV0ZSBjaGFuZ2VkIGNhbGxiYWNrIGZvciB0aGUgYXNzb2NpYXRlZCBlbGVtZW50LlxuICAgICAqIEBwYXJhbSBuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGF0dHJpYnV0ZSB0aGF0IGNoYW5nZWQuXG4gICAgICogQHBhcmFtIG9sZFZhbHVlIC0gVGhlIHByZXZpb3VzIHZhbHVlIG9mIHRoZSBhdHRyaWJ1dGUuXG4gICAgICogQHBhcmFtIG5ld1ZhbHVlIC0gVGhlIG5ldyB2YWx1ZSBvZiB0aGUgYXR0cmlidXRlLlxuICAgICAqL1xuICAgIG9uQXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuICAgICAgICBjb25zdCBhdHRyRGVmID0gdGhpcy5kZWZpbml0aW9uLmF0dHJpYnV0ZUxvb2t1cFtuYW1lXTtcbiAgICAgICAgaWYgKGF0dHJEZWYgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgYXR0ckRlZi5vbkF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayh0aGlzLmVsZW1lbnQsIG5ld1ZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbWl0cyBhIGN1c3RvbSBIVE1MIGV2ZW50LlxuICAgICAqIEBwYXJhbSB0eXBlIC0gVGhlIHR5cGUgbmFtZSBvZiB0aGUgZXZlbnQuXG4gICAgICogQHBhcmFtIGRldGFpbCAtIFRoZSBldmVudCBkZXRhaWwgb2JqZWN0IHRvIHNlbmQgd2l0aCB0aGUgZXZlbnQuXG4gICAgICogQHBhcmFtIG9wdGlvbnMgLSBUaGUgZXZlbnQgb3B0aW9ucy4gQnkgZGVmYXVsdCBidWJibGVzIGFuZCBjb21wb3NlZC5cbiAgICAgKiBAcmVtYXJrc1xuICAgICAqIE9ubHkgZW1pdHMgZXZlbnRzIGlmIGNvbm5lY3RlZC5cbiAgICAgKi9cbiAgICBlbWl0KHR5cGUsIGRldGFpbCwgb3B0aW9ucykge1xuICAgICAgICBpZiAodGhpcy5faXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQodHlwZSwgT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHsgZGV0YWlsIH0sIGRlZmF1bHRFdmVudE9wdGlvbnMpLCBvcHRpb25zKSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZmluaXNoSW5pdGlhbGl6YXRpb24oKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGJvdW5kT2JzZXJ2YWJsZXMgPSB0aGlzLmJvdW5kT2JzZXJ2YWJsZXM7XG4gICAgICAgIC8vIElmIHdlIGhhdmUgYW55IG9ic2VydmFibGVzIHRoYXQgd2VyZSBib3VuZCwgcmUtYXBwbHkgdGhlaXIgdmFsdWVzLlxuICAgICAgICBpZiAoYm91bmRPYnNlcnZhYmxlcyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgcHJvcGVydHlOYW1lcyA9IE9iamVjdC5rZXlzKGJvdW5kT2JzZXJ2YWJsZXMpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGlpID0gcHJvcGVydHlOYW1lcy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvcGVydHlOYW1lID0gcHJvcGVydHlOYW1lc1tpXTtcbiAgICAgICAgICAgICAgICBlbGVtZW50W3Byb3BlcnR5TmFtZV0gPSBib3VuZE9ic2VydmFibGVzW3Byb3BlcnR5TmFtZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmJvdW5kT2JzZXJ2YWJsZXMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSB0aGlzLmRlZmluaXRpb247XG4gICAgICAgIC8vIDEuIFRlbXBsYXRlIG92ZXJyaWRlcyB0YWtlIHRvcCBwcmVjZWRlbmNlLlxuICAgICAgICBpZiAodGhpcy5fdGVtcGxhdGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnQucmVzb2x2ZVRlbXBsYXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gMi4gQWxsb3cgZm9yIGVsZW1lbnQgaW5zdGFuY2Ugb3ZlcnJpZGVzIG5leHQuXG4gICAgICAgICAgICAgICAgdGhpcy5fdGVtcGxhdGUgPSB0aGlzLmVsZW1lbnQucmVzb2x2ZVRlbXBsYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkZWZpbml0aW9uLnRlbXBsYXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gMy4gRGVmYXVsdCB0byB0aGUgc3RhdGljIGRlZmluaXRpb24uXG4gICAgICAgICAgICAgICAgdGhpcy5fdGVtcGxhdGUgPSBkZWZpbml0aW9uLnRlbXBsYXRlIHx8IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIHRlbXBsYXRlIGFmdGVyIHRoZSBhYm92ZSBwcm9jZXNzLCByZW5kZXIgaXQuXG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gdGVtcGxhdGUsIHRoZW4gdGhlIGVsZW1lbnQgYXV0aG9yIGhhcyBvcHRlZCBpbnRvXG4gICAgICAgIC8vIGN1c3RvbSByZW5kZXJpbmcgYW5kIHRoZXkgd2lsbCBtYW5hZ2VkIHRoZSBzaGFkb3cgcm9vdCdzIGNvbnRlbnQgdGhlbXNlbHZlcy5cbiAgICAgICAgaWYgKHRoaXMuX3RlbXBsYXRlICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclRlbXBsYXRlKHRoaXMuX3RlbXBsYXRlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyAxLiBTdHlsZXMgb3ZlcnJpZGVzIHRha2UgdG9wIHByZWNlZGVuY2UuXG4gICAgICAgIGlmICh0aGlzLl9zdHlsZXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnQucmVzb2x2ZVN0eWxlcykge1xuICAgICAgICAgICAgICAgIC8vIDIuIEFsbG93IGZvciBlbGVtZW50IGluc3RhbmNlIG92ZXJyaWRlcyBuZXh0LlxuICAgICAgICAgICAgICAgIHRoaXMuX3N0eWxlcyA9IHRoaXMuZWxlbWVudC5yZXNvbHZlU3R5bGVzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkZWZpbml0aW9uLnN0eWxlcykge1xuICAgICAgICAgICAgICAgIC8vIDMuIERlZmF1bHQgdG8gdGhlIHN0YXRpYyBkZWZpbml0aW9uLlxuICAgICAgICAgICAgICAgIHRoaXMuX3N0eWxlcyA9IGRlZmluaXRpb24uc3R5bGVzIHx8IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBzdHlsZXMgYWZ0ZXIgdGhlIGFib3ZlIHByb2Nlc3MsIGFkZCB0aGVtLlxuICAgICAgICBpZiAodGhpcy5fc3R5bGVzICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmFkZFN0eWxlcyh0aGlzLl9zdHlsZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubmVlZHNJbml0aWFsaXphdGlvbiA9IGZhbHNlO1xuICAgIH1cbiAgICByZW5kZXJUZW1wbGF0ZSh0ZW1wbGF0ZSkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50O1xuICAgICAgICAvLyBXaGVuIGdldHRpbmcgdGhlIGhvc3QgdG8gcmVuZGVyIHRvLCB3ZSBzdGFydCBieSBsb29raW5nXG4gICAgICAgIC8vIHVwIHRoZSBzaGFkb3cgcm9vdC4gSWYgdGhlcmUgaXNuJ3Qgb25lLCB0aGVuIHRoYXQgbWVhbnNcbiAgICAgICAgLy8gd2UncmUgZG9pbmcgYSBMaWdodCBET00gcmVuZGVyIHRvIHRoZSBlbGVtZW50J3MgZGlyZWN0IGNoaWxkcmVuLlxuICAgICAgICBjb25zdCBob3N0ID0gZ2V0U2hhZG93Um9vdChlbGVtZW50KSB8fCBlbGVtZW50O1xuICAgICAgICBpZiAodGhpcy52aWV3ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGVyZSdzIGFscmVhZHkgYSB2aWV3LCB3ZSBuZWVkIHRvIHVuYmluZCBhbmQgcmVtb3ZlIHRocm91Z2ggZGlzcG9zZS5cbiAgICAgICAgICAgIHRoaXMudmlldy5kaXNwb3NlKCk7XG4gICAgICAgICAgICB0aGlzLnZpZXcgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCF0aGlzLm5lZWRzSW5pdGlhbGl6YXRpb24pIHtcbiAgICAgICAgICAgIC8vIElmIHRoZXJlIHdhcyBwcmV2aW91cyBjdXN0b20gcmVuZGVyaW5nLCB3ZSBuZWVkIHRvIGNsZWFyIG91dCB0aGUgaG9zdC5cbiAgICAgICAgICAgIERPTS5yZW1vdmVDaGlsZE5vZGVzKGhvc3QpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0ZW1wbGF0ZSkge1xuICAgICAgICAgICAgLy8gSWYgYSBuZXcgdGVtcGxhdGUgd2FzIHByb3ZpZGVkLCByZW5kZXIgaXQuXG4gICAgICAgICAgICB0aGlzLnZpZXcgPSB0ZW1wbGF0ZS5yZW5kZXIoZWxlbWVudCwgaG9zdCwgZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogTG9jYXRlcyBvciBjcmVhdGVzIGEgY29udHJvbGxlciBmb3IgdGhlIHNwZWNpZmllZCBlbGVtZW50LlxuICAgICAqIEBwYXJhbSBlbGVtZW50IC0gVGhlIGVsZW1lbnQgdG8gcmV0dXJuIHRoZSBjb250cm9sbGVyIGZvci5cbiAgICAgKiBAcmVtYXJrc1xuICAgICAqIFRoZSBzcGVjaWZpZWQgZWxlbWVudCBtdXN0IGhhdmUgYSB7QGxpbmsgRkFTVEVsZW1lbnREZWZpbml0aW9ufVxuICAgICAqIHJlZ2lzdGVyZWQgZWl0aGVyIHRocm91Z2ggdGhlIHVzZSBvZiB0aGUge0BsaW5rIGN1c3RvbUVsZW1lbnR9XG4gICAgICogZGVjb3JhdG9yIG9yIGEgY2FsbCB0byBgRkFTVEVsZW1lbnQuZGVmaW5lYC5cbiAgICAgKi9cbiAgICBzdGF0aWMgZm9yQ3VzdG9tRWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBlbGVtZW50LiRmYXN0Q29udHJvbGxlcjtcbiAgICAgICAgaWYgKGNvbnRyb2xsZXIgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRyb2xsZXI7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IEZBU1RFbGVtZW50RGVmaW5pdGlvbi5mb3JUeXBlKGVsZW1lbnQuY29uc3RydWN0b3IpO1xuICAgICAgICBpZiAoZGVmaW5pdGlvbiA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIEZBU1RFbGVtZW50IGRlZmluaXRpb24uXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoZWxlbWVudC4kZmFzdENvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcihlbGVtZW50LCBkZWZpbml0aW9uKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRkFTVCB9IGZyb20gXCIuLi9wbGF0Zm9ybS5qc1wiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCIuLi9vYnNlcnZhdGlvbi9vYnNlcnZhYmxlLmpzXCI7XG5pbXBvcnQgeyBFbGVtZW50U3R5bGVzIH0gZnJvbSBcIi4uL3N0eWxlcy9lbGVtZW50LXN0eWxlcy5qc1wiO1xuaW1wb3J0IHsgQXR0cmlidXRlRGVmaW5pdGlvbiB9IGZyb20gXCIuL2F0dHJpYnV0ZXMuanNcIjtcbmNvbnN0IGRlZmF1bHRTaGFkb3dPcHRpb25zID0geyBtb2RlOiBcIm9wZW5cIiB9O1xuY29uc3QgZGVmYXVsdEVsZW1lbnRPcHRpb25zID0ge307XG5jb25zdCBmYXN0UmVnaXN0cnkgPSBGQVNULmdldEJ5SWQoNCAvKiBlbGVtZW50UmVnaXN0cnkgKi8sICgpID0+IHtcbiAgICBjb25zdCB0eXBlVG9EZWZpbml0aW9uID0gbmV3IE1hcCgpO1xuICAgIHJldHVybiBPYmplY3QuZnJlZXplKHtcbiAgICAgICAgcmVnaXN0ZXIoZGVmaW5pdGlvbikge1xuICAgICAgICAgICAgaWYgKHR5cGVUb0RlZmluaXRpb24uaGFzKGRlZmluaXRpb24udHlwZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0eXBlVG9EZWZpbml0aW9uLnNldChkZWZpbml0aW9uLnR5cGUsIGRlZmluaXRpb24pO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIGdldEJ5VHlwZShrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlVG9EZWZpbml0aW9uLmdldChrZXkpO1xuICAgICAgICB9LFxuICAgIH0pO1xufSk7XG4vKipcbiAqIERlZmluZXMgbWV0YWRhdGEgZm9yIGEgRkFTVEVsZW1lbnQuXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjbGFzcyBGQVNURWxlbWVudERlZmluaXRpb24ge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgRkFTVEVsZW1lbnREZWZpbml0aW9uLlxuICAgICAqIEBwYXJhbSB0eXBlIC0gVGhlIHR5cGUgdGhpcyBkZWZpbml0aW9uIGlzIGJlaW5nIGNyZWF0ZWQgZm9yLlxuICAgICAqIEBwYXJhbSBuYW1lT3JDb25maWcgLSBUaGUgbmFtZSBvZiB0aGUgZWxlbWVudCB0byBkZWZpbmUgb3IgYSBjb25maWcgb2JqZWN0XG4gICAgICogdGhhdCBkZXNjcmliZXMgdGhlIGVsZW1lbnQgdG8gZGVmaW5lLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHR5cGUsIG5hbWVPckNvbmZpZyA9IHR5cGUuZGVmaW5pdGlvbikge1xuICAgICAgICBpZiAodHlwZW9mIG5hbWVPckNvbmZpZyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbmFtZU9yQ29uZmlnID0geyBuYW1lOiBuYW1lT3JDb25maWcgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lT3JDb25maWcubmFtZTtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IG5hbWVPckNvbmZpZy50ZW1wbGF0ZTtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IEF0dHJpYnV0ZURlZmluaXRpb24uY29sbGVjdCh0eXBlLCBuYW1lT3JDb25maWcuYXR0cmlidXRlcyk7XG4gICAgICAgIGNvbnN0IG9ic2VydmVkQXR0cmlidXRlcyA9IG5ldyBBcnJheShhdHRyaWJ1dGVzLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5TG9va3VwID0ge307XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZUxvb2t1cCA9IHt9O1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgaWkgPSBhdHRyaWJ1dGVzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSBhdHRyaWJ1dGVzW2ldO1xuICAgICAgICAgICAgb2JzZXJ2ZWRBdHRyaWJ1dGVzW2ldID0gY3VycmVudC5hdHRyaWJ1dGU7XG4gICAgICAgICAgICBwcm9wZXJ0eUxvb2t1cFtjdXJyZW50Lm5hbWVdID0gY3VycmVudDtcbiAgICAgICAgICAgIGF0dHJpYnV0ZUxvb2t1cFtjdXJyZW50LmF0dHJpYnV0ZV0gPSBjdXJyZW50O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXM7XG4gICAgICAgIHRoaXMub2JzZXJ2ZWRBdHRyaWJ1dGVzID0gb2JzZXJ2ZWRBdHRyaWJ1dGVzO1xuICAgICAgICB0aGlzLnByb3BlcnR5TG9va3VwID0gcHJvcGVydHlMb29rdXA7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlTG9va3VwID0gYXR0cmlidXRlTG9va3VwO1xuICAgICAgICB0aGlzLnNoYWRvd09wdGlvbnMgPVxuICAgICAgICAgICAgbmFtZU9yQ29uZmlnLnNoYWRvd09wdGlvbnMgPT09IHZvaWQgMFxuICAgICAgICAgICAgICAgID8gZGVmYXVsdFNoYWRvd09wdGlvbnNcbiAgICAgICAgICAgICAgICA6IG5hbWVPckNvbmZpZy5zaGFkb3dPcHRpb25zID09PSBudWxsXG4gICAgICAgICAgICAgICAgICAgID8gdm9pZCAwXG4gICAgICAgICAgICAgICAgICAgIDogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0U2hhZG93T3B0aW9ucyksIG5hbWVPckNvbmZpZy5zaGFkb3dPcHRpb25zKTtcbiAgICAgICAgdGhpcy5lbGVtZW50T3B0aW9ucyA9XG4gICAgICAgICAgICBuYW1lT3JDb25maWcuZWxlbWVudE9wdGlvbnMgPT09IHZvaWQgMFxuICAgICAgICAgICAgICAgID8gZGVmYXVsdEVsZW1lbnRPcHRpb25zXG4gICAgICAgICAgICAgICAgOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRFbGVtZW50T3B0aW9ucyksIG5hbWVPckNvbmZpZy5lbGVtZW50T3B0aW9ucyk7XG4gICAgICAgIHRoaXMuc3R5bGVzID1cbiAgICAgICAgICAgIG5hbWVPckNvbmZpZy5zdHlsZXMgPT09IHZvaWQgMFxuICAgICAgICAgICAgICAgID8gdm9pZCAwXG4gICAgICAgICAgICAgICAgOiBBcnJheS5pc0FycmF5KG5hbWVPckNvbmZpZy5zdHlsZXMpXG4gICAgICAgICAgICAgICAgICAgID8gRWxlbWVudFN0eWxlcy5jcmVhdGUobmFtZU9yQ29uZmlnLnN0eWxlcylcbiAgICAgICAgICAgICAgICAgICAgOiBuYW1lT3JDb25maWcuc3R5bGVzIGluc3RhbmNlb2YgRWxlbWVudFN0eWxlc1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBuYW1lT3JDb25maWcuc3R5bGVzXG4gICAgICAgICAgICAgICAgICAgICAgICA6IEVsZW1lbnRTdHlsZXMuY3JlYXRlKFtuYW1lT3JDb25maWcuc3R5bGVzXSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyBpZiB0aGlzIGVsZW1lbnQgaGFzIGJlZW4gZGVmaW5lZCBpbiBhdCBsZWFzdCBvbmUgcmVnaXN0cnkuXG4gICAgICovXG4gICAgZ2V0IGlzRGVmaW5lZCgpIHtcbiAgICAgICAgcmV0dXJuICEhZmFzdFJlZ2lzdHJ5LmdldEJ5VHlwZSh0aGlzLnR5cGUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGEgY3VzdG9tIGVsZW1lbnQgYmFzZWQgb24gdGhpcyBkZWZpbml0aW9uLlxuICAgICAqIEBwYXJhbSByZWdpc3RyeSAtIFRoZSBlbGVtZW50IHJlZ2lzdHJ5IHRvIGRlZmluZSB0aGUgZWxlbWVudCBpbi5cbiAgICAgKi9cbiAgICBkZWZpbmUocmVnaXN0cnkgPSBjdXN0b21FbGVtZW50cykge1xuICAgICAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlO1xuICAgICAgICBpZiAoZmFzdFJlZ2lzdHJ5LnJlZ2lzdGVyKHRoaXMpKSB7XG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gdGhpcy5hdHRyaWJ1dGVzO1xuICAgICAgICAgICAgY29uc3QgcHJvdG8gPSB0eXBlLnByb3RvdHlwZTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBpaSA9IGF0dHJpYnV0ZXMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgICAgICAgICAgICAgIE9ic2VydmFibGUuZGVmaW5lUHJvcGVydHkocHJvdG8sIGF0dHJpYnV0ZXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSh0eXBlLCBcIm9ic2VydmVkQXR0cmlidXRlc1wiLCB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMub2JzZXJ2ZWRBdHRyaWJ1dGVzLFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJlZ2lzdHJ5LmdldCh0aGlzLm5hbWUpKSB7XG4gICAgICAgICAgICByZWdpc3RyeS5kZWZpbmUodGhpcy5uYW1lLCB0eXBlLCB0aGlzLmVsZW1lbnRPcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG4vKipcbiAqIEdldHMgdGhlIGVsZW1lbnQgZGVmaW5pdGlvbiBhc3NvY2lhdGVkIHdpdGggdGhlIHNwZWNpZmllZCB0eXBlLlxuICogQHBhcmFtIHR5cGUgLSBUaGUgY3VzdG9tIGVsZW1lbnQgdHlwZSB0byByZXRyaWV2ZSB0aGUgZGVmaW5pdGlvbiBmb3IuXG4gKi9cbkZBU1RFbGVtZW50RGVmaW5pdGlvbi5mb3JUeXBlID0gZmFzdFJlZ2lzdHJ5LmdldEJ5VHlwZTtcbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwiLi9jb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgeyBGQVNURWxlbWVudERlZmluaXRpb24sIH0gZnJvbSBcIi4vZmFzdC1kZWZpbml0aW9ucy5qc1wiO1xuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1mdW5jdGlvbi1yZXR1cm4tdHlwZSAqL1xuZnVuY3Rpb24gY3JlYXRlRkFTVEVsZW1lbnQoQmFzZVR5cGUpIHtcbiAgICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBCYXNlVHlwZSB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgQ29udHJvbGxlci5mb3JDdXN0b21FbGVtZW50KHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgICRlbWl0KHR5cGUsIGRldGFpbCwgb3B0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGZhc3RDb250cm9sbGVyLmVtaXQodHlwZSwgZGV0YWlsLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgICAgIHRoaXMuJGZhc3RDb250cm9sbGVyLm9uQ29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgICAgIHRoaXMuJGZhc3RDb250cm9sbGVyLm9uRGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLiRmYXN0Q29udHJvbGxlci5vbkF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbi8qKlxuICogQSBtaW5pbWFsIGJhc2UgY2xhc3MgZm9yIEZBU1RFbGVtZW50cyB0aGF0IGFsc28gcHJvdmlkZXNcbiAqIHN0YXRpYyBoZWxwZXJzIGZvciB3b3JraW5nIHdpdGggRkFTVEVsZW1lbnRzLlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgRkFTVEVsZW1lbnQgPSBPYmplY3QuYXNzaWduKGNyZWF0ZUZBU1RFbGVtZW50KEhUTUxFbGVtZW50KSwge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgRkFTVEVsZW1lbnQgYmFzZSBjbGFzcyBpbmhlcml0ZWQgZnJvbSB0aGVcbiAgICAgKiBwcm92aWRlZCBiYXNlIHR5cGUuXG4gICAgICogQHBhcmFtIEJhc2VUeXBlIC0gVGhlIGJhc2UgZWxlbWVudCB0eXBlIHRvIGluaGVyaXQgZnJvbS5cbiAgICAgKi9cbiAgICBmcm9tKEJhc2VUeXBlKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVGQVNURWxlbWVudChCYXNlVHlwZSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGEgcGxhdGZvcm0gY3VzdG9tIGVsZW1lbnQgYmFzZWQgb24gdGhlIHByb3ZpZGVkIHR5cGUgYW5kIGRlZmluaXRpb24uXG4gICAgICogQHBhcmFtIHR5cGUgLSBUaGUgY3VzdG9tIGVsZW1lbnQgdHlwZSB0byBkZWZpbmUuXG4gICAgICogQHBhcmFtIG5hbWVPckRlZiAtIFRoZSBuYW1lIG9mIHRoZSBlbGVtZW50IHRvIGRlZmluZSBvciBhIGRlZmluaXRpb24gb2JqZWN0XG4gICAgICogdGhhdCBkZXNjcmliZXMgdGhlIGVsZW1lbnQgdG8gZGVmaW5lLlxuICAgICAqL1xuICAgIGRlZmluZSh0eXBlLCBuYW1lT3JEZWYpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBGQVNURWxlbWVudERlZmluaXRpb24odHlwZSwgbmFtZU9yRGVmKS5kZWZpbmUoKS50eXBlO1xuICAgIH0sXG59KTtcbi8qKlxuICogRGVjb3JhdG9yOiBEZWZpbmVzIGEgcGxhdGZvcm0gY3VzdG9tIGVsZW1lbnQgYmFzZWQgb24gYEZBU1RFbGVtZW50YC5cbiAqIEBwYXJhbSBuYW1lT3JEZWYgLSBUaGUgbmFtZSBvZiB0aGUgZWxlbWVudCB0byBkZWZpbmUgb3IgYSBkZWZpbml0aW9uIG9iamVjdFxuICogdGhhdCBkZXNjcmliZXMgdGhlIGVsZW1lbnQgdG8gZGVmaW5lLlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gY3VzdG9tRWxlbWVudChuYW1lT3JEZWYpIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LWZ1bmN0aW9uLXJldHVybi10eXBlICovXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIG5ldyBGQVNURWxlbWVudERlZmluaXRpb24odHlwZSwgbmFtZU9yRGVmKS5kZWZpbmUoKTtcbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgJGdsb2JhbCB9IGZyb20gXCIuL3BsYXRmb3JtLmpzXCI7XG5jb25zdCB1cGRhdGVRdWV1ZSA9ICRnbG9iYWwuRkFTVC5nZXRCeUlkKDEgLyogdXBkYXRlUXVldWUgKi8sICgpID0+IHtcbiAgICBjb25zdCB0YXNrcyA9IFtdO1xuICAgIGNvbnN0IHBlbmRpbmdFcnJvcnMgPSBbXTtcbiAgICBmdW5jdGlvbiB0aHJvd0ZpcnN0RXJyb3IoKSB7XG4gICAgICAgIGlmIChwZW5kaW5nRXJyb3JzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgcGVuZGluZ0Vycm9ycy5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRyeVJ1blRhc2sodGFzaykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGFzay5jYWxsKCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBwZW5kaW5nRXJyb3JzLnB1c2goZXJyb3IpO1xuICAgICAgICAgICAgc2V0VGltZW91dCh0aHJvd0ZpcnN0RXJyb3IsIDApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHByb2Nlc3MoKSB7XG4gICAgICAgIGNvbnN0IGNhcGFjaXR5ID0gMTAyNDtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgd2hpbGUgKGluZGV4IDwgdGFza3MubGVuZ3RoKSB7XG4gICAgICAgICAgICB0cnlSdW5UYXNrKHRhc2tzW2luZGV4XSk7XG4gICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgLy8gUHJldmVudCBsZWFraW5nIG1lbW9yeSBmb3IgbG9uZyBjaGFpbnMgb2YgcmVjdXJzaXZlIGNhbGxzIHRvIGBET00ucXVldWVVcGRhdGVgLlxuICAgICAgICAgICAgLy8gSWYgd2UgY2FsbCBgRE9NLnF1ZXVlVXBkYXRlYCB3aXRoaW4gYSB0YXNrIHNjaGVkdWxlZCBieSBgRE9NLnF1ZXVlVXBkYXRlYCwgdGhlIHF1ZXVlIHdpbGxcbiAgICAgICAgICAgIC8vIGdyb3csIGJ1dCB0byBhdm9pZCBhbiBPKG4pIHdhbGsgZm9yIGV2ZXJ5IHRhc2sgd2UgZXhlY3V0ZSwgd2UgZG9uJ3RcbiAgICAgICAgICAgIC8vIHNoaWZ0IHRhc2tzIG9mZiB0aGUgcXVldWUgYWZ0ZXIgdGhleSBoYXZlIGJlZW4gZXhlY3V0ZWQuXG4gICAgICAgICAgICAvLyBJbnN0ZWFkLCB3ZSBwZXJpb2RpY2FsbHkgc2hpZnQgMTAyNCB0YXNrcyBvZmYgdGhlIHF1ZXVlLlxuICAgICAgICAgICAgaWYgKGluZGV4ID4gY2FwYWNpdHkpIHtcbiAgICAgICAgICAgICAgICAvLyBNYW51YWxseSBzaGlmdCBhbGwgdmFsdWVzIHN0YXJ0aW5nIGF0IHRoZSBpbmRleCBiYWNrIHRvIHRoZVxuICAgICAgICAgICAgICAgIC8vIGJlZ2lubmluZyBvZiB0aGUgcXVldWUuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgc2NhbiA9IDAsIG5ld0xlbmd0aCA9IHRhc2tzLmxlbmd0aCAtIGluZGV4OyBzY2FuIDwgbmV3TGVuZ3RoOyBzY2FuKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGFza3Nbc2Nhbl0gPSB0YXNrc1tzY2FuICsgaW5kZXhdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0YXNrcy5sZW5ndGggLT0gaW5kZXg7XG4gICAgICAgICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRhc2tzLmxlbmd0aCA9IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGVucXVldWUoY2FsbGFibGUpIHtcbiAgICAgICAgaWYgKHRhc2tzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgICRnbG9iYWwucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHByb2Nlc3MpO1xuICAgICAgICB9XG4gICAgICAgIHRhc2tzLnB1c2goY2FsbGFibGUpO1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XG4gICAgICAgIGVucXVldWUsXG4gICAgICAgIHByb2Nlc3MsXG4gICAgfSk7XG59KTtcbi8qIGVzbGludC1kaXNhYmxlICovXG5jb25zdCBmYXN0SFRNTFBvbGljeSA9ICRnbG9iYWwudHJ1c3RlZFR5cGVzLmNyZWF0ZVBvbGljeShcImZhc3QtaHRtbFwiLCB7XG4gICAgY3JlYXRlSFRNTDogaHRtbCA9PiBodG1sLFxufSk7XG4vKiBlc2xpbnQtZW5hYmxlICovXG5sZXQgaHRtbFBvbGljeSA9IGZhc3RIVE1MUG9saWN5O1xuY29uc3QgbWFya2VyID0gYGZhc3QtJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgOCl9YDtcbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBfaW50ZXJwb2xhdGlvblN0YXJ0ID0gYCR7bWFya2VyfXtgO1xuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IF9pbnRlcnBvbGF0aW9uRW5kID0gYH0ke21hcmtlcn1gO1xuLyoqXG4gKiBDb21tb24gRE9NIEFQSXMuXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBET00gPSBPYmplY3QuZnJlZXplKHtcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgRE9NIHN1cHBvcnRzIHRoZSBhZG9wdGVkU3R5bGVTaGVldHMgZmVhdHVyZS5cbiAgICAgKi9cbiAgICBzdXBwb3J0c0Fkb3B0ZWRTdHlsZVNoZWV0czogQXJyYXkuaXNBcnJheShkb2N1bWVudC5hZG9wdGVkU3R5bGVTaGVldHMpICYmXG4gICAgICAgIFwicmVwbGFjZVwiIGluIENTU1N0eWxlU2hlZXQucHJvdG90eXBlLFxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIEhUTUwgdHJ1c3RlZCB0eXBlcyBwb2xpY3kgdXNlZCBieSB0aGUgdGVtcGxhdGluZyBlbmdpbmUuXG4gICAgICogQHBhcmFtIHBvbGljeSAtIFRoZSBwb2xpY3kgdG8gc2V0IGZvciBIVE1MLlxuICAgICAqIEByZW1hcmtzXG4gICAgICogVGhpcyBBUEkgY2FuIG9ubHkgYmUgY2FsbGVkIG9uY2UsIGZvciBzZWN1cml0eSByZWFzb25zLiBJdCBzaG91bGQgYmVcbiAgICAgKiBjYWxsZWQgYnkgdGhlIGFwcGxpY2F0aW9uIGRldmVsb3BlciBhdCB0aGUgc3RhcnQgb2YgdGhlaXIgcHJvZ3JhbS5cbiAgICAgKi9cbiAgICBzZXRIVE1MUG9saWN5KHBvbGljeSkge1xuICAgICAgICBpZiAoaHRtbFBvbGljeSAhPT0gZmFzdEhUTUxQb2xpY3kpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBIVE1MIHBvbGljeSBjYW4gb25seSBiZSBzZXQgb25jZS5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaHRtbFBvbGljeSA9IHBvbGljeTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFR1cm5zIGEgc3RyaW5nIGludG8gdHJ1c3RlZCBIVE1MIHVzaW5nIHRoZSBjb25maWd1cmVkIHRydXN0ZWQgdHlwZXMgcG9saWN5LlxuICAgICAqIEBwYXJhbSBodG1sIC0gVGhlIHN0cmluZyB0byB0dXJuIGludG8gdHJ1c3RlZCBIVE1MLlxuICAgICAqIEByZW1hcmtzXG4gICAgICogVXNlZCBpbnRlcm5hbGx5IGJ5IHRoZSB0ZW1wbGF0ZSBlbmdpbmUgd2hlbiBjcmVhdGluZyB0ZW1wbGF0ZXNcbiAgICAgKiBhbmQgc2V0dGluZyBpbm5lckhUTUwuXG4gICAgICovXG4gICAgY3JlYXRlSFRNTChodG1sKSB7XG4gICAgICAgIHJldHVybiBodG1sUG9saWN5LmNyZWF0ZUhUTUwoaHRtbCk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIHRoZSBwcm92aWRlZCBub2RlIGlzIGEgdGVtcGxhdGUgbWFya2VyIHVzZWQgYnkgdGhlIHJ1bnRpbWUuXG4gICAgICogQHBhcmFtIG5vZGUgLSBUaGUgbm9kZSB0byB0ZXN0LlxuICAgICAqL1xuICAgIGlzTWFya2VyKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIG5vZGUgJiYgbm9kZS5ub2RlVHlwZSA9PT0gOCAmJiBub2RlLmRhdGEuc3RhcnRzV2l0aChtYXJrZXIpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogR2l2ZW4gYSBtYXJrZXIgbm9kZSwgZXh0cmFjdCB0aGUge0BsaW5rIEhUTUxEaXJlY3RpdmV9IGluZGV4IGZyb20gdGhlIHBsYWNlaG9sZGVyLlxuICAgICAqIEBwYXJhbSBub2RlIC0gVGhlIG1hcmtlciBub2RlIHRvIGV4dHJhY3QgdGhlIGluZGV4IGZyb20uXG4gICAgICovXG4gICAgZXh0cmFjdERpcmVjdGl2ZUluZGV4RnJvbU1hcmtlcihub2RlKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludChub2RlLmRhdGEucmVwbGFjZShgJHttYXJrZXJ9OmAsIFwiXCIpKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBwbGFjZWhvbGRlciBzdHJpbmcgc3VpdGFibGUgZm9yIG1hcmtpbmcgb3V0IGEgbG9jYXRpb24gKndpdGhpbipcbiAgICAgKiBhbiBhdHRyaWJ1dGUgdmFsdWUgb3IgSFRNTCBjb250ZW50LlxuICAgICAqIEBwYXJhbSBpbmRleCAtIFRoZSBkaXJlY3RpdmUgaW5kZXggdG8gY3JlYXRlIHRoZSBwbGFjZWhvbGRlciBmb3IuXG4gICAgICogQHJlbWFya3NcbiAgICAgKiBVc2VkIGludGVybmFsbHkgYnkgYmluZGluZyBkaXJlY3RpdmVzLlxuICAgICAqL1xuICAgIGNyZWF0ZUludGVycG9sYXRpb25QbGFjZWhvbGRlcihpbmRleCkge1xuICAgICAgICByZXR1cm4gYCR7X2ludGVycG9sYXRpb25TdGFydH0ke2luZGV4fSR7X2ludGVycG9sYXRpb25FbmR9YDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBwbGFjZWhvbGRlciB0aGF0IG1hbmlmZXN0cyBpdHNlbGYgYXMgYW4gYXR0cmlidXRlIG9uIGFuXG4gICAgICogZWxlbWVudC5cbiAgICAgKiBAcGFyYW0gYXR0cmlidXRlTmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBjdXN0b20gYXR0cmlidXRlLlxuICAgICAqIEBwYXJhbSBpbmRleCAtIFRoZSBkaXJlY3RpdmUgaW5kZXggdG8gY3JlYXRlIHRoZSBwbGFjZWhvbGRlciBmb3IuXG4gICAgICogQHJlbWFya3NcbiAgICAgKiBVc2VkIGludGVybmFsbHkgYnkgYXR0cmlidXRlIGRpcmVjdGl2ZXMgc3VjaCBhcyBgcmVmYCwgYHNsb3R0ZWRgLCBhbmQgYGNoaWxkcmVuYC5cbiAgICAgKi9cbiAgICBjcmVhdGVDdXN0b21BdHRyaWJ1dGVQbGFjZWhvbGRlcihhdHRyaWJ1dGVOYW1lLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gYCR7YXR0cmlidXRlTmFtZX09XCIke3RoaXMuY3JlYXRlSW50ZXJwb2xhdGlvblBsYWNlaG9sZGVyKGluZGV4KX1cImA7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgcGxhY2Vob2xkZXIgdGhhdCBtYW5pZmVzdHMgaXRzZWxmIGFzIGEgbWFya2VyIHdpdGhpbiB0aGUgRE9NIHN0cnVjdHVyZS5cbiAgICAgKiBAcGFyYW0gaW5kZXggLSBUaGUgZGlyZWN0aXZlIGluZGV4IHRvIGNyZWF0ZSB0aGUgcGxhY2Vob2xkZXIgZm9yLlxuICAgICAqIEByZW1hcmtzXG4gICAgICogVXNlZCBpbnRlcm5hbGx5IGJ5IHN0cnVjdHVyYWwgZGlyZWN0aXZlcyBzdWNoIGFzIGByZXBlYXRgLlxuICAgICAqL1xuICAgIGNyZWF0ZUJsb2NrUGxhY2Vob2xkZXIoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIGA8IS0tJHttYXJrZXJ9OiR7aW5kZXh9LS0+YDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFNjaGVkdWxlcyBET00gdXBkYXRlIHdvcmsgaW4gdGhlIG5leHQgYXN5bmMgYmF0Y2guXG4gICAgICogQHBhcmFtIGNhbGxhYmxlIC0gVGhlIGNhbGxhYmxlIGZ1bmN0aW9uIG9yIG9iamVjdCB0byBxdWV1ZS5cbiAgICAgKi9cbiAgICBxdWV1ZVVwZGF0ZTogdXBkYXRlUXVldWUuZW5xdWV1ZSxcbiAgICAvKipcbiAgICAgKiBJbW1lZGlhdGVseSBwcm9jZXNzZXMgYWxsIHdvcmsgcHJldmlvdXNseSBzY2hlZHVsZWRcbiAgICAgKiB0aHJvdWdoIHF1ZXVlVXBkYXRlLlxuICAgICAqIEByZW1hcmtzXG4gICAgICogVGhpcyBhbHNvIGZvcmNlcyBuZXh0VXBkYXRlIHByb21pc2VzXG4gICAgICogdG8gcmVzb2x2ZS5cbiAgICAgKi9cbiAgICBwcm9jZXNzVXBkYXRlczogdXBkYXRlUXVldWUucHJvY2VzcyxcbiAgICAvKipcbiAgICAgKiBSZXNvbHZlcyB3aXRoIHRoZSBuZXh0IERPTSB1cGRhdGUuXG4gICAgICovXG4gICAgbmV4dFVwZGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHVwZGF0ZVF1ZXVlLmVucXVldWUpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogU2V0cyBhbiBhdHRyaWJ1dGUgdmFsdWUgb24gYW4gZWxlbWVudC5cbiAgICAgKiBAcGFyYW0gZWxlbWVudCAtIFRoZSBlbGVtZW50IHRvIHNldCB0aGUgYXR0cmlidXRlIHZhbHVlIG9uLlxuICAgICAqIEBwYXJhbSBhdHRyaWJ1dGVOYW1lIC0gVGhlIGF0dHJpYnV0ZSBuYW1lIHRvIHNldC5cbiAgICAgKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgb2YgdGhlIGF0dHJpYnV0ZSB0byBzZXQuXG4gICAgICogQHJlbWFya3NcbiAgICAgKiBJZiB0aGUgdmFsdWUgaXMgYG51bGxgIG9yIGB1bmRlZmluZWRgLCB0aGUgYXR0cmlidXRlIGlzIHJlbW92ZWQsIG90aGVyd2lzZVxuICAgICAqIGl0IGlzIHNldCB0byB0aGUgcHJvdmlkZWQgdmFsdWUgdXNpbmcgdGhlIHN0YW5kYXJkIGBzZXRBdHRyaWJ1dGVgIEFQSS5cbiAgICAgKi9cbiAgICBzZXRBdHRyaWJ1dGUoZWxlbWVudCwgYXR0cmlidXRlTmFtZSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBTZXRzIGEgYm9vbGVhbiBhdHRyaWJ1dGUgdmFsdWUuXG4gICAgICogQHBhcmFtIGVsZW1lbnQgLSBUaGUgZWxlbWVudCB0byBzZXQgdGhlIGJvb2xlYW4gYXR0cmlidXRlIHZhbHVlIG9uLlxuICAgICAqIEBwYXJhbSBhdHRyaWJ1dGVOYW1lIC0gVGhlIGF0dHJpYnV0ZSBuYW1lIHRvIHNldC5cbiAgICAgKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgb2YgdGhlIGF0dHJpYnV0ZSB0byBzZXQuXG4gICAgICogQHJlbWFya3NcbiAgICAgKiBJZiB0aGUgdmFsdWUgaXMgdHJ1ZSwgdGhlIGF0dHJpYnV0ZSBpcyBhZGRlZDsgb3RoZXJ3aXNlIGl0IGlzIHJlbW92ZWQuXG4gICAgICovXG4gICAgc2V0Qm9vbGVhbkF0dHJpYnV0ZShlbGVtZW50LCBhdHRyaWJ1dGVOYW1lLCB2YWx1ZSkge1xuICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgPyBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBcIlwiKVxuICAgICAgICAgICAgOiBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIHRoZSBjaGlsZCBub2RlcyBvZiB0aGUgcHJvdmlkZWQgcGFyZW50IG5vZGUuXG4gICAgICogQHBhcmFtIHBhcmVudCAtIFRoZSBub2RlIHRvIHJlbW92ZSB0aGUgY2hpbGRyZW4gZnJvbS5cbiAgICAgKi9cbiAgICByZW1vdmVDaGlsZE5vZGVzKHBhcmVudCkge1xuICAgICAgICBmb3IgKGxldCBjaGlsZCA9IHBhcmVudC5maXJzdENoaWxkOyBjaGlsZCAhPT0gbnVsbDsgY2hpbGQgPSBwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIFRyZWVXYWxrZXIgY29uZmlndXJlZCB0byB3YWxrIGEgdGVtcGxhdGUgZnJhZ21lbnQuXG4gICAgICogQHBhcmFtIGZyYWdtZW50IC0gVGhlIGZyYWdtZW50IHRvIHdhbGsuXG4gICAgICovXG4gICAgY3JlYXRlVGVtcGxhdGVXYWxrZXIoZnJhZ21lbnQpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoZnJhZ21lbnQsIDEzMywgLy8gZWxlbWVudCwgdGV4dCwgY29tbWVudFxuICAgICAgICBudWxsLCBmYWxzZSk7XG4gICAgfSxcbn0pO1xuIiwiZnVuY3Rpb24gc3BpbGxvdmVyU3Vic2NyaWJlKHN1YnNjcmliZXIpIHtcbiAgICBjb25zdCBzcGlsbG92ZXIgPSB0aGlzLnNwaWxsb3ZlcjtcbiAgICBjb25zdCBpbmRleCA9IHNwaWxsb3Zlci5pbmRleE9mKHN1YnNjcmliZXIpO1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgc3BpbGxvdmVyLnB1c2goc3Vic2NyaWJlcik7XG4gICAgfVxufVxuZnVuY3Rpb24gc3BpbGxvdmVyVW5zdWJzY3JpYmUoc3Vic2NyaWJlcikge1xuICAgIGNvbnN0IHNwaWxsb3ZlciA9IHRoaXMuc3BpbGxvdmVyO1xuICAgIGNvbnN0IGluZGV4ID0gc3BpbGxvdmVyLmluZGV4T2Yoc3Vic2NyaWJlcik7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICBzcGlsbG92ZXIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzcGlsbG92ZXJOb3RpZnlTdWJzY3JpYmVycyhhcmdzKSB7XG4gICAgY29uc3Qgc3BpbGxvdmVyID0gdGhpcy5zcGlsbG92ZXI7XG4gICAgY29uc3Qgc291cmNlID0gdGhpcy5zb3VyY2U7XG4gICAgZm9yIChsZXQgaSA9IDAsIGlpID0gc3BpbGxvdmVyLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICAgICAgc3BpbGxvdmVyW2ldLmhhbmRsZUNoYW5nZShzb3VyY2UsIGFyZ3MpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNwaWxsb3ZlckhhcyhzdWJzY3JpYmVyKSB7XG4gICAgcmV0dXJuIHRoaXMuc3BpbGxvdmVyLmluZGV4T2Yoc3Vic2NyaWJlcikgIT09IC0xO1xufVxuLyoqXG4gKiBBbiBpbXBsZW1lbnRhdGlvbiBvZiB7QGxpbmsgTm90aWZpZXJ9IHRoYXQgZWZmaWNpZW50bHkga2VlcHMgdHJhY2sgb2ZcbiAqIHN1YnNjcmliZXJzIGludGVyZXN0ZWQgaW4gYSBzcGVjaWZpYyBjaGFuZ2Ugbm90aWZpY2F0aW9uIG9uIGFuXG4gKiBvYnNlcnZhYmxlIHNvdXJjZS5cbiAqXG4gKiBAcmVtYXJrc1xuICogVGhpcyBzZXQgaXMgb3B0aW1pemVkIGZvciB0aGUgbW9zdCBjb21tb24gc2NlbmFyaW8gb2YgMSBvciAyIHN1YnNjcmliZXJzLlxuICogV2l0aCB0aGlzIGluIG1pbmQsIGl0IGNhbiBzdG9yZSBhIHN1YnNjcmliZXIgaW4gYW4gaW50ZXJuYWwgZmllbGQsIGFsbG93aW5nIGl0IHRvIGF2b2lkIEFycmF5I3B1c2ggb3BlcmF0aW9ucy5cbiAqIElmIHRoZSBzZXQgZXZlciBleGNlZWRzIHR3byBzdWJzY3JpYmVycywgaXQgdXBncmFkZXMgdG8gYW4gYXJyYXkgYXV0b21hdGljYWxseS5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNsYXNzIFN1YnNjcmliZXJTZXQge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgU3Vic2NyaWJlclNldCBmb3IgdGhlIHNwZWNpZmllZCBzb3VyY2UuXG4gICAgICogQHBhcmFtIHNvdXJjZSAtIFRoZSBvYmplY3Qgc291cmNlIHRoYXQgc3Vic2NyaWJlcnMgd2lsbCByZWNlaXZlIG5vdGlmaWNhdGlvbnMgZnJvbS5cbiAgICAgKiBAcGFyYW0gaW5pdGlhbFN1YnNjcmliZXIgLSBBbiBpbml0aWFsIHN1YnNjcmliZXIgdG8gY2hhbmdlcy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihzb3VyY2UsIGluaXRpYWxTdWJzY3JpYmVyKSB7XG4gICAgICAgIHRoaXMuc3ViMSA9IHZvaWQgMDtcbiAgICAgICAgdGhpcy5zdWIyID0gdm9pZCAwO1xuICAgICAgICB0aGlzLnNwaWxsb3ZlciA9IHZvaWQgMDtcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICAgIHRoaXMuc3ViMSA9IGluaXRpYWxTdWJzY3JpYmVyO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgcHJvdmlkZWQgc3Vic2NyaWJlciBoYXMgYmVlbiBhZGRlZCB0byB0aGlzIHNldC5cbiAgICAgKiBAcGFyYW0gc3Vic2NyaWJlciAtIFRoZSBzdWJzY3JpYmVyIHRvIHRlc3QgZm9yIGluY2x1c2lvbiBpbiB0aGlzIHNldC5cbiAgICAgKi9cbiAgICBoYXMoc3Vic2NyaWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWIxID09PSBzdWJzY3JpYmVyIHx8IHRoaXMuc3ViMiA9PT0gc3Vic2NyaWJlcjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3Vic2NyaWJlcyB0byBub3RpZmljYXRpb24gb2YgY2hhbmdlcyBpbiBhbiBvYmplY3QncyBzdGF0ZS5cbiAgICAgKiBAcGFyYW0gc3Vic2NyaWJlciAtIFRoZSBvYmplY3QgdGhhdCBpcyBzdWJzY3JpYmluZyBmb3IgY2hhbmdlIG5vdGlmaWNhdGlvbi5cbiAgICAgKi9cbiAgICBzdWJzY3JpYmUoc3Vic2NyaWJlcikge1xuICAgICAgICBpZiAodGhpcy5oYXMoc3Vic2NyaWJlcikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdWIxID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHRoaXMuc3ViMSA9IHN1YnNjcmliZXI7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3ViMiA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICB0aGlzLnN1YjIgPSBzdWJzY3JpYmVyO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3BpbGxvdmVyID0gW3RoaXMuc3ViMSwgdGhpcy5zdWIyLCBzdWJzY3JpYmVyXTtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmUgPSBzcGlsbG92ZXJTdWJzY3JpYmU7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzcGlsbG92ZXJVbnN1YnNjcmliZTtcbiAgICAgICAgdGhpcy5ub3RpZnkgPSBzcGlsbG92ZXJOb3RpZnlTdWJzY3JpYmVycztcbiAgICAgICAgdGhpcy5oYXMgPSBzcGlsbG92ZXJIYXM7XG4gICAgICAgIHRoaXMuc3ViMSA9IHZvaWQgMDtcbiAgICAgICAgdGhpcy5zdWIyID0gdm9pZCAwO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVbnN1YnNjcmliZXMgZnJvbSBub3RpZmljYXRpb24gb2YgY2hhbmdlcyBpbiBhbiBvYmplY3QncyBzdGF0ZS5cbiAgICAgKiBAcGFyYW0gc3Vic2NyaWJlciAtIFRoZSBvYmplY3QgdGhhdCBpcyB1bnN1YnNjcmliaW5nIGZyb20gY2hhbmdlIG5vdGlmaWNhdGlvbi5cbiAgICAgKi9cbiAgICB1bnN1YnNjcmliZShzdWJzY3JpYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLnN1YjEgPT09IHN1YnNjcmliZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc3ViMSA9IHZvaWQgMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnN1YjIgPT09IHN1YnNjcmliZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc3ViMiA9IHZvaWQgMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBOb3RpZmllcyBhbGwgc3Vic2NyaWJlcnMuXG4gICAgICogQHBhcmFtIGFyZ3MgLSBEYXRhIHBhc3NlZCBhbG9uZyB0byBzdWJzY3JpYmVycyBkdXJpbmcgbm90aWZpY2F0aW9uLlxuICAgICAqL1xuICAgIG5vdGlmeShhcmdzKSB7XG4gICAgICAgIGNvbnN0IHN1YjEgPSB0aGlzLnN1YjE7XG4gICAgICAgIGNvbnN0IHN1YjIgPSB0aGlzLnN1YjI7XG4gICAgICAgIGNvbnN0IHNvdXJjZSA9IHRoaXMuc291cmNlO1xuICAgICAgICBpZiAoc3ViMSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBzdWIxLmhhbmRsZUNoYW5nZShzb3VyY2UsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdWIyICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHN1YjIuaGFuZGxlQ2hhbmdlKHNvdXJjZSwgYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4vKipcbiAqIEFuIGltcGxlbWVudGF0aW9uIG9mIE5vdGlmaWVyIHRoYXQgYWxsb3dzIHN1YnNjcmliZXJzIHRvIGJlIG5vdGlmaWVkXG4gKiBvZiBpbmRpdmlkdWFsIHByb3BlcnR5IGNoYW5nZXMgb24gYW4gb2JqZWN0LlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY2xhc3MgUHJvcGVydHlDaGFuZ2VOb3RpZmllciB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBQcm9wZXJ0eUNoYW5nZU5vdGlmaWVyIGZvciB0aGUgc3BlY2lmaWVkIHNvdXJjZS5cbiAgICAgKiBAcGFyYW0gc291cmNlIC0gVGhlIG9iamVjdCBzb3VyY2UgdGhhdCBzdWJzY3JpYmVycyB3aWxsIHJlY2VpdmUgbm90aWZpY2F0aW9ucyBmcm9tLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNvdXJjZSkge1xuICAgICAgICB0aGlzLnN1YnNjcmliZXJzID0ge307XG4gICAgICAgIHRoaXMuc291cmNlU3Vic2NyaWJlcnMgPSBudWxsO1xuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTm90aWZpZXMgYWxsIHN1YnNjcmliZXJzLCBiYXNlZCBvbiB0aGUgc3BlY2lmaWVkIHByb3BlcnR5LlxuICAgICAqIEBwYXJhbSBwcm9wZXJ0eU5hbWUgLSBUaGUgcHJvcGVydHkgbmFtZSwgcGFzc2VkIGFsb25nIHRvIHN1YnNjcmliZXJzIGR1cmluZyBub3RpZmljYXRpb24uXG4gICAgICovXG4gICAgbm90aWZ5KHByb3BlcnR5TmFtZSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IHN1YnNjcmliZXJzID0gdGhpcy5zdWJzY3JpYmVyc1twcm9wZXJ0eU5hbWVdO1xuICAgICAgICBpZiAoc3Vic2NyaWJlcnMgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgc3Vic2NyaWJlcnMubm90aWZ5KHByb3BlcnR5TmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgKF9hID0gdGhpcy5zb3VyY2VTdWJzY3JpYmVycykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm5vdGlmeShwcm9wZXJ0eU5hbWUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmVzIHRvIG5vdGlmaWNhdGlvbiBvZiBjaGFuZ2VzIGluIGFuIG9iamVjdCdzIHN0YXRlLlxuICAgICAqIEBwYXJhbSBzdWJzY3JpYmVyIC0gVGhlIG9iamVjdCB0aGF0IGlzIHN1YnNjcmliaW5nIGZvciBjaGFuZ2Ugbm90aWZpY2F0aW9uLlxuICAgICAqIEBwYXJhbSBwcm9wZXJ0eVRvV2F0Y2ggLSBUaGUgbmFtZSBvZiB0aGUgcHJvcGVydHkgdGhhdCB0aGUgc3Vic2NyaWJlciBpcyBpbnRlcmVzdGVkIGluIHdhdGNoaW5nIGZvciBjaGFuZ2VzLlxuICAgICAqL1xuICAgIHN1YnNjcmliZShzdWJzY3JpYmVyLCBwcm9wZXJ0eVRvV2F0Y2gpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAocHJvcGVydHlUb1dhdGNoKSB7XG4gICAgICAgICAgICBsZXQgc3Vic2NyaWJlcnMgPSB0aGlzLnN1YnNjcmliZXJzW3Byb3BlcnR5VG9XYXRjaF07XG4gICAgICAgICAgICBpZiAoc3Vic2NyaWJlcnMgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlcnNbcHJvcGVydHlUb1dhdGNoXSA9IHN1YnNjcmliZXJzID0gbmV3IFN1YnNjcmliZXJTZXQodGhpcy5zb3VyY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3Vic2NyaWJlcnMuc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zb3VyY2VTdWJzY3JpYmVycyA9IChfYSA9IHRoaXMuc291cmNlU3Vic2NyaWJlcnMpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IG5ldyBTdWJzY3JpYmVyU2V0KHRoaXMuc291cmNlKTtcbiAgICAgICAgICAgIHRoaXMuc291cmNlU3Vic2NyaWJlcnMuc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVuc3Vic2NyaWJlcyBmcm9tIG5vdGlmaWNhdGlvbiBvZiBjaGFuZ2VzIGluIGFuIG9iamVjdCdzIHN0YXRlLlxuICAgICAqIEBwYXJhbSBzdWJzY3JpYmVyIC0gVGhlIG9iamVjdCB0aGF0IGlzIHVuc3Vic2NyaWJpbmcgZnJvbSBjaGFuZ2Ugbm90aWZpY2F0aW9uLlxuICAgICAqIEBwYXJhbSBwcm9wZXJ0eVRvVW53YXRjaCAtIFRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eSB0aGF0IHRoZSBzdWJzY3JpYmVyIGlzIG5vIGxvbmdlciBpbnRlcmVzdGVkIGluIHdhdGNoaW5nLlxuICAgICAqL1xuICAgIHVuc3Vic2NyaWJlKHN1YnNjcmliZXIsIHByb3BlcnR5VG9VbndhdGNoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKHByb3BlcnR5VG9VbndhdGNoKSB7XG4gICAgICAgICAgICBjb25zdCBzdWJzY3JpYmVycyA9IHRoaXMuc3Vic2NyaWJlcnNbcHJvcGVydHlUb1Vud2F0Y2hdO1xuICAgICAgICAgICAgaWYgKHN1YnNjcmliZXJzICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVycy51bnN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIChfYSA9IHRoaXMuc291cmNlU3Vic2NyaWJlcnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS51bnN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IERPTSB9IGZyb20gXCIuLi9kb20uanNcIjtcbmltcG9ydCB7IEZBU1QgfSBmcm9tIFwiLi4vcGxhdGZvcm0uanNcIjtcbmltcG9ydCB7IFByb3BlcnR5Q2hhbmdlTm90aWZpZXIsIFN1YnNjcmliZXJTZXQgfSBmcm9tIFwiLi9ub3RpZmllci5qc1wiO1xuLyoqXG4gKiBDb21tb24gT2JzZXJ2YWJsZSBBUElzLlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgT2JzZXJ2YWJsZSA9IEZBU1QuZ2V0QnlJZCgyIC8qIG9ic2VydmFibGUgKi8sICgpID0+IHtcbiAgICBjb25zdCB2b2xhdGlsZVJlZ2V4ID0gLyg6fCYmfFxcfFxcfHxpZikvO1xuICAgIGNvbnN0IG5vdGlmaWVyTG9va3VwID0gbmV3IFdlYWtNYXAoKTtcbiAgICBjb25zdCBhY2Nlc3Nvckxvb2t1cCA9IG5ldyBXZWFrTWFwKCk7XG4gICAgY29uc3QgcXVldWVVcGRhdGUgPSBET00ucXVldWVVcGRhdGU7XG4gICAgbGV0IHdhdGNoZXIgPSB2b2lkIDA7XG4gICAgbGV0IGNyZWF0ZUFycmF5T2JzZXJ2ZXIgPSAoYXJyYXkpID0+IHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTXVzdCBjYWxsIGVuYWJsZUFycmF5T2JzZXJ2YXRpb24gYmVmb3JlIG9ic2VydmluZyBhcnJheXMuXCIpO1xuICAgIH07XG4gICAgZnVuY3Rpb24gZ2V0Tm90aWZpZXIoc291cmNlKSB7XG4gICAgICAgIGxldCBmb3VuZCA9IHNvdXJjZS4kZmFzdENvbnRyb2xsZXIgfHwgbm90aWZpZXJMb29rdXAuZ2V0KHNvdXJjZSk7XG4gICAgICAgIGlmIChmb3VuZCA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzb3VyY2UpKSB7XG4gICAgICAgICAgICAgICAgZm91bmQgPSBjcmVhdGVBcnJheU9ic2VydmVyKHNvdXJjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBub3RpZmllckxvb2t1cC5zZXQoc291cmNlLCAoZm91bmQgPSBuZXcgUHJvcGVydHlDaGFuZ2VOb3RpZmllcihzb3VyY2UpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvdW5kO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRBY2Nlc3NvcnModGFyZ2V0KSB7XG4gICAgICAgIGxldCBhY2Nlc3NvcnMgPSBhY2Nlc3Nvckxvb2t1cC5nZXQodGFyZ2V0KTtcbiAgICAgICAgaWYgKGFjY2Vzc29ycyA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudFRhcmdldCA9IFJlZmxlY3QuZ2V0UHJvdG90eXBlT2YodGFyZ2V0KTtcbiAgICAgICAgICAgIHdoaWxlIChhY2Nlc3NvcnMgPT09IHZvaWQgMCAmJiBjdXJyZW50VGFyZ2V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgYWNjZXNzb3JzID0gYWNjZXNzb3JMb29rdXAuZ2V0KGN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUYXJnZXQgPSBSZWZsZWN0LmdldFByb3RvdHlwZU9mKGN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFjY2Vzc29ycyA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgYWNjZXNzb3JzID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NvcnMgPSBhY2Nlc3NvcnMuc2xpY2UoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhY2Nlc3Nvckxvb2t1cC5zZXQodGFyZ2V0LCBhY2Nlc3NvcnMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY2Nlc3NvcnM7XG4gICAgfVxuICAgIGNsYXNzIERlZmF1bHRPYnNlcnZhYmxlQWNjZXNzb3Ige1xuICAgICAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgdGhpcy5maWVsZCA9IGBfJHtuYW1lfWA7XG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrID0gYCR7bmFtZX1DaGFuZ2VkYDtcbiAgICAgICAgfVxuICAgICAgICBnZXRWYWx1ZShzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmICh3YXRjaGVyICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICB3YXRjaGVyLndhdGNoKHNvdXJjZSwgdGhpcy5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzb3VyY2VbdGhpcy5maWVsZF07XG4gICAgICAgIH1cbiAgICAgICAgc2V0VmFsdWUoc291cmNlLCBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgZmllbGQgPSB0aGlzLmZpZWxkO1xuICAgICAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSBzb3VyY2VbZmllbGRdO1xuICAgICAgICAgICAgaWYgKG9sZFZhbHVlICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHNvdXJjZVtmaWVsZF0gPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IHNvdXJjZVt0aGlzLmNhbGxiYWNrXTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChzb3VyY2UsIG9sZFZhbHVlLCBuZXdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGdldE5vdGlmaWVyKHNvdXJjZSkubm90aWZ5KHRoaXMubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2xhc3MgQmluZGluZ09ic2VydmVySW1wbGVtZW50YXRpb24gZXh0ZW5kcyBTdWJzY3JpYmVyU2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoYmluZGluZywgaW5pdGlhbFN1YnNjcmliZXIsIGlzVm9sYXRpbGVCaW5kaW5nID0gZmFsc2UpIHtcbiAgICAgICAgICAgIHN1cGVyKGJpbmRpbmcsIGluaXRpYWxTdWJzY3JpYmVyKTtcbiAgICAgICAgICAgIHRoaXMuYmluZGluZyA9IGJpbmRpbmc7XG4gICAgICAgICAgICB0aGlzLmlzVm9sYXRpbGVCaW5kaW5nID0gaXNWb2xhdGlsZUJpbmRpbmc7XG4gICAgICAgICAgICB0aGlzLm5lZWRzUmVmcmVzaCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm5lZWRzUXVldWUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5maXJzdCA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLmxhc3QgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5wcm9wZXJ0eVNvdXJjZSA9IHZvaWQgMDtcbiAgICAgICAgICAgIHRoaXMucHJvcGVydHlOYW1lID0gdm9pZCAwO1xuICAgICAgICAgICAgdGhpcy5ub3RpZmllciA9IHZvaWQgMDtcbiAgICAgICAgICAgIHRoaXMubmV4dCA9IHZvaWQgMDtcbiAgICAgICAgfVxuICAgICAgICBvYnNlcnZlKHNvdXJjZSwgY29udGV4dCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubmVlZHNSZWZyZXNoICYmIHRoaXMubGFzdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNXYXRjaGVyID0gd2F0Y2hlcjtcbiAgICAgICAgICAgIHdhdGNoZXIgPSB0aGlzLm5lZWRzUmVmcmVzaCA/IHRoaXMgOiB2b2lkIDA7XG4gICAgICAgICAgICB0aGlzLm5lZWRzUmVmcmVzaCA9IHRoaXMuaXNWb2xhdGlsZUJpbmRpbmc7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmJpbmRpbmcoc291cmNlLCBjb250ZXh0KTtcbiAgICAgICAgICAgIHdhdGNoZXIgPSBwcmV2aW91c1dhdGNoZXI7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5sYXN0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmZpcnN0O1xuICAgICAgICAgICAgICAgIHdoaWxlIChjdXJyZW50ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudC5ub3RpZmllci51bnN1YnNjcmliZSh0aGlzLCBjdXJyZW50LnByb3BlcnR5TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubGFzdCA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5uZWVkc1JlZnJlc2ggPSB0aGlzLm5lZWRzUXVldWUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHdhdGNoKHByb3BlcnR5U291cmNlLCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHByZXYgPSB0aGlzLmxhc3Q7XG4gICAgICAgICAgICBjb25zdCBub3RpZmllciA9IGdldE5vdGlmaWVyKHByb3BlcnR5U291cmNlKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSBwcmV2ID09PSBudWxsID8gdGhpcy5maXJzdCA6IHt9O1xuICAgICAgICAgICAgY3VycmVudC5wcm9wZXJ0eVNvdXJjZSA9IHByb3BlcnR5U291cmNlO1xuICAgICAgICAgICAgY3VycmVudC5wcm9wZXJ0eU5hbWUgPSBwcm9wZXJ0eU5hbWU7XG4gICAgICAgICAgICBjdXJyZW50Lm5vdGlmaWVyID0gbm90aWZpZXI7XG4gICAgICAgICAgICBub3RpZmllci5zdWJzY3JpYmUodGhpcywgcHJvcGVydHlOYW1lKTtcbiAgICAgICAgICAgIGlmIChwcmV2ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLm5lZWRzUmVmcmVzaCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBEZWNsYXJpbmcgdGhlIHZhcmlhYmxlIHByaW9yIHRvIGFzc2lnbm1lbnQgYmVsb3cgY2lyY3VtdmVudHNcbiAgICAgICAgICAgICAgICAgICAgLy8gYSBidWcgaW4gQW5ndWxhcidzIG9wdGltaXphdGlvbiBwcm9jZXNzIGNhdXNpbmcgaW5maW5pdGUgcmVjdXJzaW9uXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mIHRoaXMgd2F0Y2goKSBtZXRob2QuIERldGFpbHMgaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9mYXN0L2lzc3Vlcy80OTY5XG4gICAgICAgICAgICAgICAgICAgIGxldCBwcmV2VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHdhdGNoZXIgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuICAgICAgICAgICAgICAgICAgICBwcmV2VmFsdWUgPSBwcmV2LnByb3BlcnR5U291cmNlW3ByZXYucHJvcGVydHlOYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgd2F0Y2hlciA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eVNvdXJjZSA9PT0gcHJldlZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5lZWRzUmVmcmVzaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJldi5uZXh0ID0gY3VycmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubGFzdCA9IGN1cnJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaGFuZGxlQ2hhbmdlKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubmVlZHNRdWV1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubmVlZHNRdWV1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHF1ZXVlVXBkYXRlKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhbGwoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5sYXN0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uZWVkc1F1ZXVlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeSh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZWNvcmRzKCkge1xuICAgICAgICAgICAgbGV0IG5leHQgPSB0aGlzLmZpcnN0O1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuZXh0OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSBuZXh0O1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0ID0gbmV4dC5uZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY3VycmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtTeW1ib2wuaXRlcmF0b3JdOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBPYmplY3QuZnJlZXplKHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBpbnRlcm5hbFxuICAgICAgICAgKiBAcGFyYW0gZmFjdG9yeSAtIFRoZSBmYWN0b3J5IHVzZWQgdG8gY3JlYXRlIGFycmF5IG9ic2VydmVycy5cbiAgICAgICAgICovXG4gICAgICAgIHNldEFycmF5T2JzZXJ2ZXJGYWN0b3J5KGZhY3RvcnkpIHtcbiAgICAgICAgICAgIGNyZWF0ZUFycmF5T2JzZXJ2ZXIgPSBmYWN0b3J5O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0cyBhIG5vdGlmaWVyIGZvciBhbiBvYmplY3Qgb3IgQXJyYXkuXG4gICAgICAgICAqIEBwYXJhbSBzb3VyY2UgLSBUaGUgb2JqZWN0IG9yIEFycmF5IHRvIGdldCB0aGUgbm90aWZpZXIgZm9yLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0Tm90aWZpZXIsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWNvcmRzIGEgcHJvcGVydHkgY2hhbmdlIGZvciBhIHNvdXJjZSBvYmplY3QuXG4gICAgICAgICAqIEBwYXJhbSBzb3VyY2UgLSBUaGUgb2JqZWN0IHRvIHJlY29yZCB0aGUgY2hhbmdlIGFnYWluc3QuXG4gICAgICAgICAqIEBwYXJhbSBwcm9wZXJ0eU5hbWUgLSBUaGUgcHJvcGVydHkgdG8gdHJhY2sgYXMgY2hhbmdlZC5cbiAgICAgICAgICovXG4gICAgICAgIHRyYWNrKHNvdXJjZSwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgICAgICBpZiAod2F0Y2hlciAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgd2F0Y2hlci53YXRjaChzb3VyY2UsIHByb3BlcnR5TmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBOb3RpZmllcyB3YXRjaGVycyB0aGF0IHRoZSBjdXJyZW50bHkgZXhlY3V0aW5nIHByb3BlcnR5IGdldHRlciBvciBmdW5jdGlvbiBpcyB2b2xhdGlsZVxuICAgICAgICAgKiB3aXRoIHJlc3BlY3QgdG8gaXRzIG9ic2VydmFibGUgZGVwZW5kZW5jaWVzLlxuICAgICAgICAgKi9cbiAgICAgICAgdHJhY2tWb2xhdGlsZSgpIHtcbiAgICAgICAgICAgIGlmICh3YXRjaGVyICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICB3YXRjaGVyLm5lZWRzUmVmcmVzaCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBOb3RpZmllcyBzdWJzY3JpYmVycyBvZiBhIHNvdXJjZSBvYmplY3Qgb2YgY2hhbmdlcy5cbiAgICAgICAgICogQHBhcmFtIHNvdXJjZSAtIHRoZSBvYmplY3QgdG8gbm90aWZ5IG9mIGNoYW5nZXMuXG4gICAgICAgICAqIEBwYXJhbSBhcmdzIC0gVGhlIGNoYW5nZSBhcmdzIHRvIHBhc3MgdG8gc3Vic2NyaWJlcnMuXG4gICAgICAgICAqL1xuICAgICAgICBub3RpZnkoc291cmNlLCBhcmdzKSB7XG4gICAgICAgICAgICBnZXROb3RpZmllcihzb3VyY2UpLm5vdGlmeShhcmdzKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmluZXMgYW4gb2JzZXJ2YWJsZSBwcm9wZXJ0eSBvbiBhbiBvYmplY3Qgb3IgcHJvdG90eXBlLlxuICAgICAgICAgKiBAcGFyYW0gdGFyZ2V0IC0gVGhlIHRhcmdldCBvYmplY3QgdG8gZGVmaW5lIHRoZSBvYnNlcnZhYmxlIG9uLlxuICAgICAgICAgKiBAcGFyYW0gbmFtZU9yQWNjZXNzb3IgLSBUaGUgbmFtZSBvZiB0aGUgcHJvcGVydHkgdG8gZGVmaW5lIGFzIG9ic2VydmFibGU7XG4gICAgICAgICAqIG9yIGEgY3VzdG9tIGFjY2Vzc29yIHRoYXQgc3BlY2lmaWVzIHRoZSBwcm9wZXJ0eSBuYW1lIGFuZCBhY2Nlc3NvciBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICovXG4gICAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwgbmFtZU9yQWNjZXNzb3IpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbmFtZU9yQWNjZXNzb3IgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBuYW1lT3JBY2Nlc3NvciA9IG5ldyBEZWZhdWx0T2JzZXJ2YWJsZUFjY2Vzc29yKG5hbWVPckFjY2Vzc29yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdldEFjY2Vzc29ycyh0YXJnZXQpLnB1c2gobmFtZU9yQWNjZXNzb3IpO1xuICAgICAgICAgICAgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIG5hbWVPckFjY2Vzc29yLm5hbWUsIHtcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmFtZU9yQWNjZXNzb3IuZ2V0VmFsdWUodGhpcyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lT3JBY2Nlc3Nvci5zZXRWYWx1ZSh0aGlzLCBuZXdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogRmluZHMgYWxsIHRoZSBvYnNlcnZhYmxlIGFjY2Vzc29ycyBkZWZpbmVkIG9uIHRoZSB0YXJnZXQsXG4gICAgICAgICAqIGluY2x1ZGluZyBpdHMgcHJvdG90eXBlIGNoYWluLlxuICAgICAgICAgKiBAcGFyYW0gdGFyZ2V0IC0gVGhlIHRhcmdldCBvYmplY3QgdG8gc2VhcmNoIGZvciBhY2Nlc3NvciBvbi5cbiAgICAgICAgICovXG4gICAgICAgIGdldEFjY2Vzc29ycyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENyZWF0ZXMgYSB7QGxpbmsgQmluZGluZ09ic2VydmVyfSB0aGF0IGNhbiB3YXRjaCB0aGVcbiAgICAgICAgICogcHJvdmlkZWQge0BsaW5rIEJpbmRpbmd9IGZvciBjaGFuZ2VzLlxuICAgICAgICAgKiBAcGFyYW0gYmluZGluZyAtIFRoZSBiaW5kaW5nIHRvIG9ic2VydmUuXG4gICAgICAgICAqIEBwYXJhbSBpbml0aWFsU3Vic2NyaWJlciAtIEFuIGluaXRpYWwgc3Vic2NyaWJlciB0byBjaGFuZ2VzIGluIHRoZSBiaW5kaW5nIHZhbHVlLlxuICAgICAgICAgKiBAcGFyYW0gaXNWb2xhdGlsZUJpbmRpbmcgLSBJbmRpY2F0ZXMgd2hldGhlciB0aGUgYmluZGluZydzIGRlcGVuZGVuY3kgbGlzdCBtdXN0IGJlIHJlLWV2YWx1YXRlZCBvbiBldmVyeSB2YWx1ZSBldmFsdWF0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgYmluZGluZyhiaW5kaW5nLCBpbml0aWFsU3Vic2NyaWJlciwgaXNWb2xhdGlsZUJpbmRpbmcgPSB0aGlzLmlzVm9sYXRpbGVCaW5kaW5nKGJpbmRpbmcpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEJpbmRpbmdPYnNlcnZlckltcGxlbWVudGF0aW9uKGJpbmRpbmcsIGluaXRpYWxTdWJzY3JpYmVyLCBpc1ZvbGF0aWxlQmluZGluZyk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSBiaW5kaW5nIGV4cHJlc3Npb24gaXMgdm9sYXRpbGUgYW5kIG5lZWRzIHRvIGhhdmUgaXRzIGRlcGVuZGVuY3kgbGlzdCByZS1ldmFsdWF0ZWRcbiAgICAgICAgICogb24gZXZlcnkgZXZhbHVhdGlvbiBvZiB0aGUgdmFsdWUuXG4gICAgICAgICAqIEBwYXJhbSBiaW5kaW5nIC0gVGhlIGJpbmRpbmcgdG8gaW5zcGVjdC5cbiAgICAgICAgICovXG4gICAgICAgIGlzVm9sYXRpbGVCaW5kaW5nKGJpbmRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiB2b2xhdGlsZVJlZ2V4LnRlc3QoYmluZGluZy50b1N0cmluZygpKTtcbiAgICAgICAgfSxcbiAgICB9KTtcbn0pO1xuLyoqXG4gKiBEZWNvcmF0b3I6IERlZmluZXMgYW4gb2JzZXJ2YWJsZSBwcm9wZXJ0eSBvbiB0aGUgdGFyZ2V0LlxuICogQHBhcmFtIHRhcmdldCAtIFRoZSB0YXJnZXQgdG8gZGVmaW5lIHRoZSBvYnNlcnZhYmxlIG9uLlxuICogQHBhcmFtIG5hbWVPckFjY2Vzc29yIC0gVGhlIHByb3BlcnR5IG5hbWUgb3IgYWNjZXNzb3IgdG8gZGVmaW5lIHRoZSBvYnNlcnZhYmxlIGFzLlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2YWJsZSh0YXJnZXQsIG5hbWVPckFjY2Vzc29yKSB7XG4gICAgT2JzZXJ2YWJsZS5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIG5hbWVPckFjY2Vzc29yKTtcbn1cbi8qKlxuICogRGVjb3JhdG9yOiBNYXJrcyBhIHByb3BlcnR5IGdldHRlciBhcyBoYXZpbmcgdm9sYXRpbGUgb2JzZXJ2YWJsZSBkZXBlbmRlbmNpZXMuXG4gKiBAcGFyYW0gdGFyZ2V0IC0gVGhlIHRhcmdldCB0aGF0IHRoZSBwcm9wZXJ0eSBpcyBkZWZpbmVkIG9uLlxuICogQHBhcmFtIG5hbWUgLSBUaGUgcHJvcGVydHkgbmFtZS5cbiAqIEBwYXJhbSBuYW1lIC0gVGhlIGV4aXN0aW5nIGRlc2NyaXB0b3IuXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2b2xhdGlsZSh0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZGVzY3JpcHRvciwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIE9ic2VydmFibGUudHJhY2tWb2xhdGlsZSgpO1xuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaXB0b3IuZ2V0LmFwcGx5KHRoaXMpO1xuICAgICAgICB9LFxuICAgIH0pO1xufVxuY29uc3QgY29udGV4dEV2ZW50ID0gRkFTVC5nZXRCeUlkKDMgLyogY29udGV4dEV2ZW50ICovLCAoKSA9PiB7XG4gICAgbGV0IGN1cnJlbnQgPSBudWxsO1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50O1xuICAgICAgICB9LFxuICAgICAgICBzZXQoZXZlbnQpIHtcbiAgICAgICAgICAgIGN1cnJlbnQgPSBldmVudDtcbiAgICAgICAgfSxcbiAgICB9O1xufSk7XG4vKipcbiAqIFByb3ZpZGVzIGFkZGl0aW9uYWwgY29udGV4dHVhbCBpbmZvcm1hdGlvbiBhdmFpbGFibGUgdG8gYmVoYXZpb3JzIGFuZCBleHByZXNzaW9ucy5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNsYXNzIEV4ZWN1dGlvbkNvbnRleHQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGluZGV4IG9mIHRoZSBjdXJyZW50IGl0ZW0gd2l0aGluIGEgcmVwZWF0IGNvbnRleHQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBsZW5ndGggb2YgdGhlIGN1cnJlbnQgY29sbGVjdGlvbiB3aXRoaW4gYSByZXBlYXQgY29udGV4dC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubGVuZ3RoID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBwYXJlbnQgZGF0YSBvYmplY3Qgd2l0aGluIGEgcmVwZWF0IGNvbnRleHQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnBhcmVudCA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcGFyZW50IGV4ZWN1dGlvbiBjb250ZXh0IHdoZW4gaW4gbmVzdGVkIGNvbnRleHQgc2NlbmFyaW9zLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5wYXJlbnRDb250ZXh0ID0gbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgZXZlbnQgd2l0aGluIGFuIGV2ZW50IGhhbmRsZXIuXG4gICAgICovXG4gICAgZ2V0IGV2ZW50KCkge1xuICAgICAgICByZXR1cm4gY29udGV4dEV2ZW50LmdldCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgY3VycmVudCBpdGVtIHdpdGhpbiBhIHJlcGVhdCBjb250ZXh0XG4gICAgICogaGFzIGFuIGV2ZW4gaW5kZXguXG4gICAgICovXG4gICAgZ2V0IGlzRXZlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5kZXggJSAyID09PSAwO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgY3VycmVudCBpdGVtIHdpdGhpbiBhIHJlcGVhdCBjb250ZXh0XG4gICAgICogaGFzIGFuIG9kZCBpbmRleC5cbiAgICAgKi9cbiAgICBnZXQgaXNPZGQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmluZGV4ICUgMiAhPT0gMDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGN1cnJlbnQgaXRlbSB3aXRoaW4gYSByZXBlYXQgY29udGV4dFxuICAgICAqIGlzIHRoZSBmaXJzdCBpdGVtIGluIHRoZSBjb2xsZWN0aW9uLlxuICAgICAqL1xuICAgIGdldCBpc0ZpcnN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbmRleCA9PT0gMDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGN1cnJlbnQgaXRlbSB3aXRoaW4gYSByZXBlYXQgY29udGV4dFxuICAgICAqIGlzIHNvbWV3aGVyZSBpbiB0aGUgbWlkZGxlIG9mIHRoZSBjb2xsZWN0aW9uLlxuICAgICAqL1xuICAgIGdldCBpc0luTWlkZGxlKCkge1xuICAgICAgICByZXR1cm4gIXRoaXMuaXNGaXJzdCAmJiAhdGhpcy5pc0xhc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBjdXJyZW50IGl0ZW0gd2l0aGluIGEgcmVwZWF0IGNvbnRleHRcbiAgICAgKiBpcyB0aGUgbGFzdCBpdGVtIGluIHRoZSBjb2xsZWN0aW9uLlxuICAgICAqL1xuICAgIGdldCBpc0xhc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmluZGV4ID09PSB0aGlzLmxlbmd0aCAtIDE7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGV2ZW50IGZvciB0aGUgY3VycmVudCBleGVjdXRpb24gY29udGV4dC5cbiAgICAgKiBAcGFyYW0gZXZlbnQgLSBUaGUgZXZlbnQgdG8gc2V0LlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHN0YXRpYyBzZXRFdmVudChldmVudCkge1xuICAgICAgICBjb250ZXh0RXZlbnQuc2V0KGV2ZW50KTtcbiAgICB9XG59XG5PYnNlcnZhYmxlLmRlZmluZVByb3BlcnR5KEV4ZWN1dGlvbkNvbnRleHQucHJvdG90eXBlLCBcImluZGV4XCIpO1xuT2JzZXJ2YWJsZS5kZWZpbmVQcm9wZXJ0eShFeGVjdXRpb25Db250ZXh0LnByb3RvdHlwZSwgXCJsZW5ndGhcIik7XG4vKipcbiAqIFRoZSBkZWZhdWx0IGV4ZWN1dGlvbiBjb250ZXh0IHVzZWQgaW4gYmluZGluZyBleHByZXNzaW9ucy5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRFeGVjdXRpb25Db250ZXh0ID0gT2JqZWN0LnNlYWwobmV3IEV4ZWN1dGlvbkNvbnRleHQoKSk7XG4iLCIvKipcbiAqIEEgcmVmZXJlbmNlIHRvIGdsb2JhbFRoaXMsIHdpdGggc3VwcG9ydFxuICogZm9yIGJyb3dzZXJzIHRoYXQgZG9uJ3QgeWV0IHN1cHBvcnQgdGhlIHNwZWMuXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCAkZ2xvYmFsID0gKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgLy8gV2UncmUgcnVubmluZyBpbiBhIG1vZGVybiBlbnZpcm9ubWVudC5cbiAgICAgICAgcmV0dXJuIGdsb2JhbFRoaXM7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIC8vIFdlJ3JlIHJ1bm5pbmcgaW4gTm9kZUpTXG4gICAgICAgIHJldHVybiBnbG9iYWw7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAvLyBXZSdyZSBydW5uaW5nIGluIGEgd29ya2VyLlxuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgLy8gV2UncmUgcnVubmluZyBpbiB0aGUgYnJvd3NlcidzIG1haW4gdGhyZWFkLlxuICAgICAgICByZXR1cm4gd2luZG93O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyBIb3BlZnVsbHkgd2UgbmV2ZXIgZ2V0IGhlcmUuLi5cbiAgICAgICAgLy8gTm90IGFsbCBlbnZpcm9ubWVudHMgYWxsb3cgZXZhbCBhbmQgRnVuY3Rpb24uIFVzZSBvbmx5IGFzIGEgbGFzdCByZXNvcnQ6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgICAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbiAgICB9XG4gICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgIC8vIElmIGFsbCBmYWlscywgZ2l2ZSB1cCBhbmQgY3JlYXRlIGFuIG9iamVjdC5cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9jb25zaXN0ZW50LXR5cGUtYXNzZXJ0aW9uc1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxufSkoKTtcbi8vIEFQSS1vbmx5IFBvbHlmaWxsIGZvciB0cnVzdGVkVHlwZXNcbmlmICgkZ2xvYmFsLnRydXN0ZWRUeXBlcyA9PT0gdm9pZCAwKSB7XG4gICAgJGdsb2JhbC50cnVzdGVkVHlwZXMgPSB7IGNyZWF0ZVBvbGljeTogKG4sIHIpID0+IHIgfTtcbn1cbmNvbnN0IHByb3BDb25maWcgPSB7XG4gICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICB3cml0YWJsZTogZmFsc2UsXG59O1xuaWYgKCRnbG9iYWwuRkFTVCA9PT0gdm9pZCAwKSB7XG4gICAgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSgkZ2xvYmFsLCBcIkZBU1RcIiwgT2JqZWN0LmFzc2lnbih7IHZhbHVlOiBPYmplY3QuY3JlYXRlKG51bGwpIH0sIHByb3BDb25maWcpKTtcbn1cbi8qKlxuICogVGhlIEZBU1QgZ2xvYmFsLlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBjb25zdCBGQVNUID0gJGdsb2JhbC5GQVNUO1xuaWYgKEZBU1QuZ2V0QnlJZCA9PT0gdm9pZCAwKSB7XG4gICAgY29uc3Qgc3RvcmFnZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShGQVNULCBcImdldEJ5SWRcIiwgT2JqZWN0LmFzc2lnbih7IHZhbHVlKGlkLCBpbml0aWFsaXplKSB7XG4gICAgICAgICAgICBsZXQgZm91bmQgPSBzdG9yYWdlW2lkXTtcbiAgICAgICAgICAgIGlmIChmb3VuZCA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgZm91bmQgPSBpbml0aWFsaXplID8gKHN0b3JhZ2VbaWRdID0gaW5pdGlhbGl6ZSgpKSA6IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZm91bmQ7XG4gICAgICAgIH0gfSwgcHJvcENvbmZpZykpO1xufVxuLyoqXG4gKiBBIHJlYWRvbmx5LCBlbXB0eSBhcnJheS5cbiAqIEByZW1hcmtzXG4gKiBUeXBpY2FsbHkgcmV0dXJuZWQgYnkgQVBJcyB0aGF0IHJldHVybiBhcnJheXMgd2hlbiB0aGVyZSBhcmVcbiAqIG5vIGFjdHVhbCBpdGVtcyB0byByZXR1cm4uXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGNvbnN0IGVtcHR5QXJyYXkgPSBPYmplY3QuZnJlZXplKFtdKTtcbiIsIi8qKlxuICogRGlyZWN0aXZlIGZvciB1c2UgaW4ge0BsaW5rIGNzc30uXG4gKlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY2xhc3MgQ1NTRGlyZWN0aXZlIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgQ1NTIGZyYWdtZW50IHRvIGludGVycG9sYXRlIGludG8gdGhlIENTUyBkb2N1bWVudC5cbiAgICAgKiBAcmV0dXJucyAtIHRoZSBzdHJpbmcgdG8gaW50ZXJwb2xhdGUgaW50byBDU1NcbiAgICAgKi9cbiAgICBjcmVhdGVDU1MoKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgYmVoYXZpb3IgdG8gYmluZCB0byB0aGUgaG9zdCBlbGVtZW50LlxuICAgICAqIEByZXR1cm5zIC0gdGhlIGJlaGF2aW9yIHRvIGJpbmQgdG8gdGhlIGhvc3QgZWxlbWVudCwgb3IgdW5kZWZpbmVkLlxuICAgICAqL1xuICAgIGNyZWF0ZUJlaGF2aW9yKCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENTU0RpcmVjdGl2ZSB9IGZyb20gXCIuL2Nzcy1kaXJlY3RpdmUuanNcIjtcbmltcG9ydCB7IEVsZW1lbnRTdHlsZXMgfSBmcm9tIFwiLi9lbGVtZW50LXN0eWxlcy5qc1wiO1xuZnVuY3Rpb24gY29sbGVjdFN0eWxlcyhzdHJpbmdzLCB2YWx1ZXMpIHtcbiAgICBjb25zdCBzdHlsZXMgPSBbXTtcbiAgICBsZXQgY3NzU3RyaW5nID0gXCJcIjtcbiAgICBjb25zdCBiZWhhdmlvcnMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMCwgaWkgPSBzdHJpbmdzLmxlbmd0aCAtIDE7IGkgPCBpaTsgKytpKSB7XG4gICAgICAgIGNzc1N0cmluZyArPSBzdHJpbmdzW2ldO1xuICAgICAgICBsZXQgdmFsdWUgPSB2YWx1ZXNbaV07XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIENTU0RpcmVjdGl2ZSkge1xuICAgICAgICAgICAgY29uc3QgYmVoYXZpb3IgPSB2YWx1ZS5jcmVhdGVCZWhhdmlvcigpO1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5jcmVhdGVDU1MoKTtcbiAgICAgICAgICAgIGlmIChiZWhhdmlvcikge1xuICAgICAgICAgICAgICAgIGJlaGF2aW9ycy5wdXNoKGJlaGF2aW9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBFbGVtZW50U3R5bGVzIHx8IHZhbHVlIGluc3RhbmNlb2YgQ1NTU3R5bGVTaGVldCkge1xuICAgICAgICAgICAgaWYgKGNzc1N0cmluZy50cmltKCkgIT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBzdHlsZXMucHVzaChjc3NTdHJpbmcpO1xuICAgICAgICAgICAgICAgIGNzc1N0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdHlsZXMucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjc3NTdHJpbmcgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY3NzU3RyaW5nICs9IHN0cmluZ3Nbc3RyaW5ncy5sZW5ndGggLSAxXTtcbiAgICBpZiAoY3NzU3RyaW5nLnRyaW0oKSAhPT0gXCJcIikge1xuICAgICAgICBzdHlsZXMucHVzaChjc3NTdHJpbmcpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBzdHlsZXMsXG4gICAgICAgIGJlaGF2aW9ycyxcbiAgICB9O1xufVxuLyoqXG4gKiBUcmFuc2Zvcm1zIGEgdGVtcGxhdGUgbGl0ZXJhbCBzdHJpbmcgaW50byBzdHlsZXMuXG4gKiBAcGFyYW0gc3RyaW5ncyAtIFRoZSBzdHJpbmcgZnJhZ21lbnRzIHRoYXQgYXJlIGludGVycG9sYXRlZCB3aXRoIHRoZSB2YWx1ZXMuXG4gKiBAcGFyYW0gdmFsdWVzIC0gVGhlIHZhbHVlcyB0aGF0IGFyZSBpbnRlcnBvbGF0ZWQgd2l0aCB0aGUgc3RyaW5nIGZyYWdtZW50cy5cbiAqIEByZW1hcmtzXG4gKiBUaGUgY3NzIGhlbHBlciBzdXBwb3J0cyBpbnRlcnBvbGF0aW9uIG9mIHN0cmluZ3MgYW5kIEVsZW1lbnRTdHlsZSBpbnN0YW5jZXMuXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjc3Moc3RyaW5ncywgLi4udmFsdWVzKSB7XG4gICAgY29uc3QgeyBzdHlsZXMsIGJlaGF2aW9ycyB9ID0gY29sbGVjdFN0eWxlcyhzdHJpbmdzLCB2YWx1ZXMpO1xuICAgIGNvbnN0IGVsZW1lbnRTdHlsZXMgPSBFbGVtZW50U3R5bGVzLmNyZWF0ZShzdHlsZXMpO1xuICAgIGlmIChiZWhhdmlvcnMubGVuZ3RoKSB7XG4gICAgICAgIGVsZW1lbnRTdHlsZXMud2l0aEJlaGF2aW9ycyguLi5iZWhhdmlvcnMpO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudFN0eWxlcztcbn1cbmNsYXNzIENTU1BhcnRpYWwgZXh0ZW5kcyBDU1NEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKHN0eWxlcywgYmVoYXZpb3JzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYmVoYXZpb3JzID0gYmVoYXZpb3JzO1xuICAgICAgICB0aGlzLmNzcyA9IFwiXCI7XG4gICAgICAgIGNvbnN0IHN0eWxlc2hlZXRzID0gc3R5bGVzLnJlZHVjZSgoYWNjdW11bGF0ZWQsIGN1cnJlbnQpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY3VycmVudCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuY3NzICs9IGN1cnJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhY2N1bXVsYXRlZC5wdXNoKGN1cnJlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFjY3VtdWxhdGVkO1xuICAgICAgICB9LCBbXSk7XG4gICAgICAgIGlmIChzdHlsZXNoZWV0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuc3R5bGVzID0gRWxlbWVudFN0eWxlcy5jcmVhdGUoc3R5bGVzaGVldHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNyZWF0ZUJlaGF2aW9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY3JlYXRlQ1NTKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jc3M7XG4gICAgfVxuICAgIGJpbmQoZWwpIHtcbiAgICAgICAgaWYgKHRoaXMuc3R5bGVzKSB7XG4gICAgICAgICAgICBlbC4kZmFzdENvbnRyb2xsZXIuYWRkU3R5bGVzKHRoaXMuc3R5bGVzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5iZWhhdmlvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBlbC4kZmFzdENvbnRyb2xsZXIuYWRkQmVoYXZpb3JzKHRoaXMuYmVoYXZpb3JzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1bmJpbmQoZWwpIHtcbiAgICAgICAgaWYgKHRoaXMuc3R5bGVzKSB7XG4gICAgICAgICAgICBlbC4kZmFzdENvbnRyb2xsZXIucmVtb3ZlU3R5bGVzKHRoaXMuc3R5bGVzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5iZWhhdmlvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBlbC4kZmFzdENvbnRyb2xsZXIucmVtb3ZlQmVoYXZpb3JzKHRoaXMuYmVoYXZpb3JzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8qKlxuICogVHJhbnNmb3JtcyBhIHRlbXBsYXRlIGxpdGVyYWwgc3RyaW5nIGludG8gcGFydGlhbCBDU1MuXG4gKiBAcGFyYW0gc3RyaW5ncyAtIFRoZSBzdHJpbmcgZnJhZ21lbnRzIHRoYXQgYXJlIGludGVycG9sYXRlZCB3aXRoIHRoZSB2YWx1ZXMuXG4gKiBAcGFyYW0gdmFsdWVzIC0gVGhlIHZhbHVlcyB0aGF0IGFyZSBpbnRlcnBvbGF0ZWQgd2l0aCB0aGUgc3RyaW5nIGZyYWdtZW50cy5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNzc1BhcnRpYWwoc3RyaW5ncywgLi4udmFsdWVzKSB7XG4gICAgY29uc3QgeyBzdHlsZXMsIGJlaGF2aW9ycyB9ID0gY29sbGVjdFN0eWxlcyhzdHJpbmdzLCB2YWx1ZXMpO1xuICAgIHJldHVybiBuZXcgQ1NTUGFydGlhbChzdHlsZXMsIGJlaGF2aW9ycyk7XG59XG4iLCJpbXBvcnQgeyBET00gfSBmcm9tIFwiLi4vZG9tLmpzXCI7XG4vKipcbiAqIFJlcHJlc2VudHMgc3R5bGVzIHRoYXQgY2FuIGJlIGFwcGxpZWQgdG8gYSBjdXN0b20gZWxlbWVudC5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNsYXNzIEVsZW1lbnRTdHlsZXMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnRhcmdldHMgPSBuZXcgV2Vha1NldCgpO1xuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIHRoaXMuYmVoYXZpb3JzID0gbnVsbDtcbiAgICB9XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIGFkZFN0eWxlc1RvKHRhcmdldCkge1xuICAgICAgICB0aGlzLnRhcmdldHMuYWRkKHRhcmdldCk7XG4gICAgfVxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICByZW1vdmVTdHlsZXNGcm9tKHRhcmdldCkge1xuICAgICAgICB0aGlzLnRhcmdldHMuZGVsZXRlKHRhcmdldCk7XG4gICAgfVxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBpc0F0dGFjaGVkVG8odGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhcmdldHMuaGFzKHRhcmdldCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFzc29jaWF0ZXMgYmVoYXZpb3JzIHdpdGggdGhpcyBzZXQgb2Ygc3R5bGVzLlxuICAgICAqIEBwYXJhbSBiZWhhdmlvcnMgLSBUaGUgYmVoYXZpb3JzIHRvIGFzc29jaWF0ZS5cbiAgICAgKi9cbiAgICB3aXRoQmVoYXZpb3JzKC4uLmJlaGF2aW9ycykge1xuICAgICAgICB0aGlzLmJlaGF2aW9ycyA9XG4gICAgICAgICAgICB0aGlzLmJlaGF2aW9ycyA9PT0gbnVsbCA/IGJlaGF2aW9ycyA6IHRoaXMuYmVoYXZpb3JzLmNvbmNhdChiZWhhdmlvcnMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG4vKipcbiAqIENyZWF0ZSBFbGVtZW50U3R5bGVzIGZyb20gQ29tcG9zYWJsZVN0eWxlcy5cbiAqL1xuRWxlbWVudFN0eWxlcy5jcmVhdGUgPSAoKCkgPT4ge1xuICAgIGlmIChET00uc3VwcG9ydHNBZG9wdGVkU3R5bGVTaGVldHMpIHtcbiAgICAgICAgY29uc3Qgc3R5bGVTaGVldENhY2hlID0gbmV3IE1hcCgpO1xuICAgICAgICByZXR1cm4gKHN0eWxlcykgPT4gXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgICAgICAgbmV3IEFkb3B0ZWRTdHlsZVNoZWV0c1N0eWxlcyhzdHlsZXMsIHN0eWxlU2hlZXRDYWNoZSk7XG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgICByZXR1cm4gKHN0eWxlcykgPT4gbmV3IFN0eWxlRWxlbWVudFN0eWxlcyhzdHlsZXMpO1xufSkoKTtcbmZ1bmN0aW9uIHJlZHVjZVN0eWxlcyhzdHlsZXMpIHtcbiAgICByZXR1cm4gc3R5bGVzXG4gICAgICAgIC5tYXAoKHgpID0+IHggaW5zdGFuY2VvZiBFbGVtZW50U3R5bGVzID8gcmVkdWNlU3R5bGVzKHguc3R5bGVzKSA6IFt4XSlcbiAgICAgICAgLnJlZHVjZSgocHJldiwgY3VycikgPT4gcHJldi5jb25jYXQoY3VyciksIFtdKTtcbn1cbmZ1bmN0aW9uIHJlZHVjZUJlaGF2aW9ycyhzdHlsZXMpIHtcbiAgICByZXR1cm4gc3R5bGVzXG4gICAgICAgIC5tYXAoKHgpID0+ICh4IGluc3RhbmNlb2YgRWxlbWVudFN0eWxlcyA/IHguYmVoYXZpb3JzIDogbnVsbCkpXG4gICAgICAgIC5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHtcbiAgICAgICAgaWYgKGN1cnIgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmV2ID09PSBudWxsKSB7XG4gICAgICAgICAgICBwcmV2ID0gW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByZXYuY29uY2F0KGN1cnIpO1xuICAgIH0sIG51bGwpO1xufVxuLyoqXG4gKiBodHRwczovL3dpY2cuZ2l0aHViLmlvL2NvbnN0cnVjdC1zdHlsZXNoZWV0cy9cbiAqIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi91cGRhdGVzLzIwMTkvMDIvY29uc3RydWN0YWJsZS1zdHlsZXNoZWV0c1xuICpcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgY2xhc3MgQWRvcHRlZFN0eWxlU2hlZXRzU3R5bGVzIGV4dGVuZHMgRWxlbWVudFN0eWxlcyB7XG4gICAgY29uc3RydWN0b3Ioc3R5bGVzLCBzdHlsZVNoZWV0Q2FjaGUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdHlsZXMgPSBzdHlsZXM7XG4gICAgICAgIHRoaXMuc3R5bGVTaGVldENhY2hlID0gc3R5bGVTaGVldENhY2hlO1xuICAgICAgICB0aGlzLl9zdHlsZVNoZWV0cyA9IHZvaWQgMDtcbiAgICAgICAgdGhpcy5iZWhhdmlvcnMgPSByZWR1Y2VCZWhhdmlvcnMoc3R5bGVzKTtcbiAgICB9XG4gICAgZ2V0IHN0eWxlU2hlZXRzKCkge1xuICAgICAgICBpZiAodGhpcy5fc3R5bGVTaGVldHMgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgY29uc3Qgc3R5bGVzID0gdGhpcy5zdHlsZXM7XG4gICAgICAgICAgICBjb25zdCBzdHlsZVNoZWV0Q2FjaGUgPSB0aGlzLnN0eWxlU2hlZXRDYWNoZTtcbiAgICAgICAgICAgIHRoaXMuX3N0eWxlU2hlZXRzID0gcmVkdWNlU3R5bGVzKHN0eWxlcykubWFwKCh4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHggaW5zdGFuY2VvZiBDU1NTdHlsZVNoZWV0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgc2hlZXQgPSBzdHlsZVNoZWV0Q2FjaGUuZ2V0KHgpO1xuICAgICAgICAgICAgICAgIGlmIChzaGVldCA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNoZWV0ID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgc2hlZXQucmVwbGFjZVN5bmMoeCk7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRDYWNoZS5zZXQoeCwgc2hlZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gc2hlZXQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fc3R5bGVTaGVldHM7XG4gICAgfVxuICAgIGFkZFN0eWxlc1RvKHRhcmdldCkge1xuICAgICAgICB0YXJnZXQuYWRvcHRlZFN0eWxlU2hlZXRzID0gWy4uLnRhcmdldC5hZG9wdGVkU3R5bGVTaGVldHMsIC4uLnRoaXMuc3R5bGVTaGVldHNdO1xuICAgICAgICBzdXBlci5hZGRTdHlsZXNUbyh0YXJnZXQpO1xuICAgIH1cbiAgICByZW1vdmVTdHlsZXNGcm9tKHRhcmdldCkge1xuICAgICAgICBjb25zdCBzb3VyY2VTaGVldHMgPSB0aGlzLnN0eWxlU2hlZXRzO1xuICAgICAgICB0YXJnZXQuYWRvcHRlZFN0eWxlU2hlZXRzID0gdGFyZ2V0LmFkb3B0ZWRTdHlsZVNoZWV0cy5maWx0ZXIoKHgpID0+IHNvdXJjZVNoZWV0cy5pbmRleE9mKHgpID09PSAtMSk7XG4gICAgICAgIHN1cGVyLnJlbW92ZVN0eWxlc0Zyb20odGFyZ2V0KTtcbiAgICB9XG59XG5sZXQgc3R5bGVDbGFzc0lkID0gMDtcbmZ1bmN0aW9uIGdldE5leHRTdHlsZUNsYXNzKCkge1xuICAgIHJldHVybiBgZmFzdC1zdHlsZS1jbGFzcy0keysrc3R5bGVDbGFzc0lkfWA7XG59XG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgY2xhc3MgU3R5bGVFbGVtZW50U3R5bGVzIGV4dGVuZHMgRWxlbWVudFN0eWxlcyB7XG4gICAgY29uc3RydWN0b3Ioc3R5bGVzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3R5bGVzID0gc3R5bGVzO1xuICAgICAgICB0aGlzLmJlaGF2aW9ycyA9IG51bGw7XG4gICAgICAgIHRoaXMuYmVoYXZpb3JzID0gcmVkdWNlQmVoYXZpb3JzKHN0eWxlcyk7XG4gICAgICAgIHRoaXMuc3R5bGVTaGVldHMgPSByZWR1Y2VTdHlsZXMoc3R5bGVzKTtcbiAgICAgICAgdGhpcy5zdHlsZUNsYXNzID0gZ2V0TmV4dFN0eWxlQ2xhc3MoKTtcbiAgICB9XG4gICAgYWRkU3R5bGVzVG8odGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0IHN0eWxlU2hlZXRzID0gdGhpcy5zdHlsZVNoZWV0cztcbiAgICAgICAgY29uc3Qgc3R5bGVDbGFzcyA9IHRoaXMuc3R5bGVDbGFzcztcbiAgICAgICAgdGFyZ2V0ID0gdGhpcy5ub3JtYWxpemVUYXJnZXQodGFyZ2V0KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHlsZVNoZWV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gc3R5bGVTaGVldHNbaV07XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IHN0eWxlQ2xhc3M7XG4gICAgICAgICAgICB0YXJnZXQuYXBwZW5kKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyLmFkZFN0eWxlc1RvKHRhcmdldCk7XG4gICAgfVxuICAgIHJlbW92ZVN0eWxlc0Zyb20odGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldCA9IHRoaXMubm9ybWFsaXplVGFyZ2V0KHRhcmdldCk7XG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IHRhcmdldC5xdWVyeVNlbGVjdG9yQWxsKGAuJHt0aGlzLnN0eWxlQ2xhc3N9YCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBpaSA9IHN0eWxlcy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICAgICAgICB0YXJnZXQucmVtb3ZlQ2hpbGQoc3R5bGVzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBzdXBlci5yZW1vdmVTdHlsZXNGcm9tKHRhcmdldCk7XG4gICAgfVxuICAgIGlzQXR0YWNoZWRUbyh0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmlzQXR0YWNoZWRUbyh0aGlzLm5vcm1hbGl6ZVRhcmdldCh0YXJnZXQpKTtcbiAgICB9XG4gICAgbm9ybWFsaXplVGFyZ2V0KHRhcmdldCkge1xuICAgICAgICByZXR1cm4gdGFyZ2V0ID09PSBkb2N1bWVudCA/IGRvY3VtZW50LmJvZHkgOiB0YXJnZXQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4uL2RvbS5qc1wiO1xuaW1wb3J0IHsgRXhlY3V0aW9uQ29udGV4dCwgT2JzZXJ2YWJsZSwgfSBmcm9tIFwiLi4vb2JzZXJ2YXRpb24vb2JzZXJ2YWJsZS5qc1wiO1xuaW1wb3J0IHsgVGFyZ2V0ZWRIVE1MRGlyZWN0aXZlIH0gZnJvbSBcIi4vaHRtbC1kaXJlY3RpdmUuanNcIjtcbmZ1bmN0aW9uIG5vcm1hbEJpbmQoc291cmNlLCBjb250ZXh0KSB7XG4gICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICBpZiAodGhpcy5iaW5kaW5nT2JzZXJ2ZXIgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5iaW5kaW5nT2JzZXJ2ZXIgPSBPYnNlcnZhYmxlLmJpbmRpbmcodGhpcy5iaW5kaW5nLCB0aGlzLCB0aGlzLmlzQmluZGluZ1ZvbGF0aWxlKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVUYXJnZXQodGhpcy5iaW5kaW5nT2JzZXJ2ZXIub2JzZXJ2ZShzb3VyY2UsIGNvbnRleHQpKTtcbn1cbmZ1bmN0aW9uIHRyaWdnZXJCaW5kKHNvdXJjZSwgY29udGV4dCkge1xuICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLnRhcmdldE5hbWUsIHRoaXMpO1xufVxuZnVuY3Rpb24gbm9ybWFsVW5iaW5kKCkge1xuICAgIHRoaXMuYmluZGluZ09ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB0aGlzLnNvdXJjZSA9IG51bGw7XG4gICAgdGhpcy5jb250ZXh0ID0gbnVsbDtcbn1cbmZ1bmN0aW9uIGNvbnRlbnRVbmJpbmQoKSB7XG4gICAgdGhpcy5iaW5kaW5nT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIHRoaXMuc291cmNlID0gbnVsbDtcbiAgICB0aGlzLmNvbnRleHQgPSBudWxsO1xuICAgIGNvbnN0IHZpZXcgPSB0aGlzLnRhcmdldC4kZmFzdFZpZXc7XG4gICAgaWYgKHZpZXcgIT09IHZvaWQgMCAmJiB2aWV3LmlzQ29tcG9zZWQpIHtcbiAgICAgICAgdmlldy51bmJpbmQoKTtcbiAgICAgICAgdmlldy5uZWVkc0JpbmRPbmx5ID0gdHJ1ZTtcbiAgICB9XG59XG5mdW5jdGlvbiB0cmlnZ2VyVW5iaW5kKCkge1xuICAgIHRoaXMudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy50YXJnZXROYW1lLCB0aGlzKTtcbiAgICB0aGlzLnNvdXJjZSA9IG51bGw7XG4gICAgdGhpcy5jb250ZXh0ID0gbnVsbDtcbn1cbmZ1bmN0aW9uIHVwZGF0ZUF0dHJpYnV0ZVRhcmdldCh2YWx1ZSkge1xuICAgIERPTS5zZXRBdHRyaWJ1dGUodGhpcy50YXJnZXQsIHRoaXMudGFyZ2V0TmFtZSwgdmFsdWUpO1xufVxuZnVuY3Rpb24gdXBkYXRlQm9vbGVhbkF0dHJpYnV0ZVRhcmdldCh2YWx1ZSkge1xuICAgIERPTS5zZXRCb29sZWFuQXR0cmlidXRlKHRoaXMudGFyZ2V0LCB0aGlzLnRhcmdldE5hbWUsIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZUNvbnRlbnRUYXJnZXQodmFsdWUpIHtcbiAgICAvLyBJZiB0aGVyZSdzIG5vIGFjdHVhbCB2YWx1ZSwgdGhlbiB0aGlzIGVxdWF0ZXMgdG8gdGhlXG4gICAgLy8gZW1wdHkgc3RyaW5nIGZvciB0aGUgcHVycG9zZXMgb2YgY29udGVudCBiaW5kaW5ncy5cbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YWx1ZSA9IFwiXCI7XG4gICAgfVxuICAgIC8vIElmIHRoZSB2YWx1ZSBoYXMgYSBcImNyZWF0ZVwiIG1ldGhvZCwgdGhlbiBpdCdzIGEgdGVtcGxhdGUtbGlrZS5cbiAgICBpZiAodmFsdWUuY3JlYXRlKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgbGV0IHZpZXcgPSB0aGlzLnRhcmdldC4kZmFzdFZpZXc7XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gcHJldmlvdXMgdmlldyB0aGF0IHdlIG1pZ2h0IGJlIGFibGUgdG9cbiAgICAgICAgLy8gcmV1c2UgdGhlbiBjcmVhdGUgYSBuZXcgdmlldyBmcm9tIHRoZSB0ZW1wbGF0ZS5cbiAgICAgICAgaWYgKHZpZXcgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgdmlldyA9IHZhbHVlLmNyZWF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSBwcmV2aW91cyB2aWV3LCBidXQgaXQgd2Fzbid0IGNyZWF0ZWRcbiAgICAgICAgICAgIC8vIGZyb20gdGhlIHNhbWUgdGVtcGxhdGUgYXMgdGhlIG5ldyB2YWx1ZSwgdGhlbiB3ZVxuICAgICAgICAgICAgLy8gbmVlZCB0byByZW1vdmUgdGhlIG9sZCB2aWV3IGlmIGl0J3Mgc3RpbGwgaW4gdGhlIERPTVxuICAgICAgICAgICAgLy8gYW5kIGNyZWF0ZSBhIG5ldyB2aWV3IGZyb20gdGhlIHRlbXBsYXRlLlxuICAgICAgICAgICAgaWYgKHRoaXMudGFyZ2V0LiRmYXN0VGVtcGxhdGUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZpZXcuaXNDb21wb3NlZCkge1xuICAgICAgICAgICAgICAgICAgICB2aWV3LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICB2aWV3LnVuYmluZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2aWV3ID0gdmFsdWUuY3JlYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSXQncyBwb3NzaWJsZSB0aGF0IHRoZSB2YWx1ZSBpcyB0aGUgc2FtZSBhcyB0aGUgcHJldmlvdXMgdGVtcGxhdGVcbiAgICAgICAgLy8gYW5kIHRoYXQgdGhlcmUncyBhY3R1YWxseSBubyBuZWVkIHRvIGNvbXBvc2UgaXQuXG4gICAgICAgIGlmICghdmlldy5pc0NvbXBvc2VkKSB7XG4gICAgICAgICAgICB2aWV3LmlzQ29tcG9zZWQgPSB0cnVlO1xuICAgICAgICAgICAgdmlldy5iaW5kKHRoaXMuc291cmNlLCB0aGlzLmNvbnRleHQpO1xuICAgICAgICAgICAgdmlldy5pbnNlcnRCZWZvcmUodGhpcy50YXJnZXQpO1xuICAgICAgICAgICAgdGhpcy50YXJnZXQuJGZhc3RWaWV3ID0gdmlldztcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LiRmYXN0VGVtcGxhdGUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2aWV3Lm5lZWRzQmluZE9ubHkpIHtcbiAgICAgICAgICAgIHZpZXcubmVlZHNCaW5kT25seSA9IGZhbHNlO1xuICAgICAgICAgICAgdmlldy5iaW5kKHRoaXMuc291cmNlLCB0aGlzLmNvbnRleHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCB2aWV3ID0gdGhpcy50YXJnZXQuJGZhc3RWaWV3O1xuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIHZpZXcgYW5kIGl0J3MgY3VycmVudGx5IGNvbXBvc2VkIGludG9cbiAgICAgICAgLy8gdGhlIERPTSwgdGhlbiB3ZSBuZWVkIHRvIHJlbW92ZSBpdC5cbiAgICAgICAgaWYgKHZpZXcgIT09IHZvaWQgMCAmJiB2aWV3LmlzQ29tcG9zZWQpIHtcbiAgICAgICAgICAgIHZpZXcuaXNDb21wb3NlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdmlldy5yZW1vdmUoKTtcbiAgICAgICAgICAgIGlmICh2aWV3Lm5lZWRzQmluZE9ubHkpIHtcbiAgICAgICAgICAgICAgICB2aWV3Lm5lZWRzQmluZE9ubHkgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZpZXcudW5iaW5kKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50YXJnZXQudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICB9XG59XG5mdW5jdGlvbiB1cGRhdGVQcm9wZXJ0eVRhcmdldCh2YWx1ZSkge1xuICAgIHRoaXMudGFyZ2V0W3RoaXMudGFyZ2V0TmFtZV0gPSB2YWx1ZTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZUNsYXNzVGFyZ2V0KHZhbHVlKSB7XG4gICAgY29uc3QgY2xhc3NWZXJzaW9ucyA9IHRoaXMuY2xhc3NWZXJzaW9ucyB8fCBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXMudGFyZ2V0O1xuICAgIGxldCB2ZXJzaW9uID0gdGhpcy52ZXJzaW9uIHx8IDA7XG4gICAgLy8gQWRkIHRoZSBjbGFzc2VzLCB0cmFja2luZyB0aGUgdmVyc2lvbiBhdCB3aGljaCB0aGV5IHdlcmUgYWRkZWQuXG4gICAgaWYgKHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IG5hbWVzID0gdmFsdWUuc3BsaXQoL1xccysvKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGlpID0gbmFtZXMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudE5hbWUgPSBuYW1lc1tpXTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50TmFtZSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2xhc3NWZXJzaW9uc1tjdXJyZW50TmFtZV0gPSB2ZXJzaW9uO1xuICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoY3VycmVudE5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRoaXMuY2xhc3NWZXJzaW9ucyA9IGNsYXNzVmVyc2lvbnM7XG4gICAgdGhpcy52ZXJzaW9uID0gdmVyc2lvbiArIDE7XG4gICAgLy8gSWYgdGhpcyBpcyB0aGUgZmlyc3QgY2FsbCB0byBhZGQgY2xhc3NlcywgdGhlcmUncyBubyBuZWVkIHRvIHJlbW92ZSBvbGQgb25lcy5cbiAgICBpZiAodmVyc2lvbiA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFJlbW92ZSBjbGFzc2VzIGZyb20gdGhlIHByZXZpb3VzIHZlcnNpb24uXG4gICAgdmVyc2lvbiAtPSAxO1xuICAgIGZvciAoY29uc3QgbmFtZSBpbiBjbGFzc1ZlcnNpb25zKSB7XG4gICAgICAgIGlmIChjbGFzc1ZlcnNpb25zW25hbWVdID09PSB2ZXJzaW9uKSB7XG4gICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShuYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8qKlxuICogQSBkaXJlY3RpdmUgdGhhdCBjb25maWd1cmVzIGRhdGEgYmluZGluZyB0byBlbGVtZW50IGNvbnRlbnQgYW5kIGF0dHJpYnV0ZXMuXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjbGFzcyBIVE1MQmluZGluZ0RpcmVjdGl2ZSBleHRlbmRzIFRhcmdldGVkSFRNTERpcmVjdGl2ZSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBCaW5kaW5nRGlyZWN0aXZlLlxuICAgICAqIEBwYXJhbSBiaW5kaW5nIC0gQSBiaW5kaW5nIHRoYXQgcmV0dXJucyB0aGUgZGF0YSB1c2VkIHRvIHVwZGF0ZSB0aGUgRE9NLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGJpbmRpbmcpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5iaW5kaW5nID0gYmluZGluZztcbiAgICAgICAgdGhpcy5iaW5kID0gbm9ybWFsQmluZDtcbiAgICAgICAgdGhpcy51bmJpbmQgPSBub3JtYWxVbmJpbmQ7XG4gICAgICAgIHRoaXMudXBkYXRlVGFyZ2V0ID0gdXBkYXRlQXR0cmlidXRlVGFyZ2V0O1xuICAgICAgICB0aGlzLmlzQmluZGluZ1ZvbGF0aWxlID0gT2JzZXJ2YWJsZS5pc1ZvbGF0aWxlQmluZGluZyh0aGlzLmJpbmRpbmcpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzL3NldHMgdGhlIG5hbWUgb2YgdGhlIGF0dHJpYnV0ZSBvciBwcm9wZXJ0eSB0aGF0IHRoaXNcbiAgICAgKiBiaW5kaW5nIGlzIHRhcmdldGluZy5cbiAgICAgKi9cbiAgICBnZXQgdGFyZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3JpZ2luYWxUYXJnZXROYW1lO1xuICAgIH1cbiAgICBzZXQgdGFyZ2V0TmFtZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLm9yaWdpbmFsVGFyZ2V0TmFtZSA9IHZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodmFsdWVbMF0pIHtcbiAgICAgICAgICAgIGNhc2UgXCI6XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhbmVkVGFyZ2V0TmFtZSA9IHZhbHVlLnN1YnN0cigxKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRhcmdldCA9IHVwZGF0ZVByb3BlcnR5VGFyZ2V0O1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsZWFuZWRUYXJnZXROYW1lID09PSBcImlubmVySFRNTFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJpbmRpbmcgPSB0aGlzLmJpbmRpbmc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmluZGluZyA9IChzLCBjKSA9PiBET00uY3JlYXRlSFRNTChiaW5kaW5nKHMsIGMpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiP1wiOlxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYW5lZFRhcmdldE5hbWUgPSB2YWx1ZS5zdWJzdHIoMSk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUYXJnZXQgPSB1cGRhdGVCb29sZWFuQXR0cmlidXRlVGFyZ2V0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkBcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFuZWRUYXJnZXROYW1lID0gdmFsdWUuc3Vic3RyKDEpO1xuICAgICAgICAgICAgICAgIHRoaXMuYmluZCA9IHRyaWdnZXJCaW5kO1xuICAgICAgICAgICAgICAgIHRoaXMudW5iaW5kID0gdHJpZ2dlclVuYmluZDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhbmVkVGFyZ2V0TmFtZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gXCJjbGFzc1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVGFyZ2V0ID0gdXBkYXRlQ2xhc3NUYXJnZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE1ha2VzIHRoaXMgYmluZGluZyB0YXJnZXQgdGhlIGNvbnRlbnQgb2YgYW4gZWxlbWVudCByYXRoZXIgdGhhblxuICAgICAqIGEgcGFydGljdWxhciBhdHRyaWJ1dGUgb3IgcHJvcGVydHkuXG4gICAgICovXG4gICAgdGFyZ2V0QXRDb250ZW50KCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVRhcmdldCA9IHVwZGF0ZUNvbnRlbnRUYXJnZXQ7XG4gICAgICAgIHRoaXMudW5iaW5kID0gY29udGVudFVuYmluZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgcnVudGltZSBCaW5kaW5nQmVoYXZpb3IgaW5zdGFuY2UgYmFzZWQgb24gdGhlIGNvbmZpZ3VyYXRpb25cbiAgICAgKiBpbmZvcm1hdGlvbiBzdG9yZWQgaW4gdGhlIEJpbmRpbmdEaXJlY3RpdmUuXG4gICAgICogQHBhcmFtIHRhcmdldCAtIFRoZSB0YXJnZXQgbm9kZSB0aGF0IHRoZSBiaW5kaW5nIGJlaGF2aW9yIHNob3VsZCBhdHRhY2ggdG8uXG4gICAgICovXG4gICAgY3JlYXRlQmVoYXZpb3IodGFyZ2V0KSB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbiAgICAgICAgcmV0dXJuIG5ldyBCaW5kaW5nQmVoYXZpb3IodGFyZ2V0LCB0aGlzLmJpbmRpbmcsIHRoaXMuaXNCaW5kaW5nVm9sYXRpbGUsIHRoaXMuYmluZCwgdGhpcy51bmJpbmQsIHRoaXMudXBkYXRlVGFyZ2V0LCB0aGlzLmNsZWFuZWRUYXJnZXROYW1lKTtcbiAgICB9XG59XG4vKipcbiAqIEEgYmVoYXZpb3IgdGhhdCB1cGRhdGVzIGNvbnRlbnQgYW5kIGF0dHJpYnV0ZXMgYmFzZWQgb24gYSBjb25maWd1cmVkXG4gKiBCaW5kaW5nRGlyZWN0aXZlLlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY2xhc3MgQmluZGluZ0JlaGF2aW9yIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEJpbmRpbmdCZWhhdmlvci5cbiAgICAgKiBAcGFyYW0gdGFyZ2V0IC0gVGhlIHRhcmdldCBvZiB0aGUgZGF0YSB1cGRhdGVzLlxuICAgICAqIEBwYXJhbSBiaW5kaW5nIC0gVGhlIGJpbmRpbmcgdGhhdCByZXR1cm5zIHRoZSBsYXRlc3QgdmFsdWUgZm9yIGFuIHVwZGF0ZS5cbiAgICAgKiBAcGFyYW0gaXNCaW5kaW5nVm9sYXRpbGUgLSBJbmRpY2F0ZXMgd2hldGhlciB0aGUgYmluZGluZyBoYXMgdm9sYXRpbGUgZGVwZW5kZW5jaWVzLlxuICAgICAqIEBwYXJhbSBiaW5kIC0gVGhlIG9wZXJhdGlvbiB0byBwZXJmb3JtIGR1cmluZyBiaW5kaW5nLlxuICAgICAqIEBwYXJhbSB1bmJpbmQgLSBUaGUgb3BlcmF0aW9uIHRvIHBlcmZvcm0gZHVyaW5nIHVuYmluZGluZy5cbiAgICAgKiBAcGFyYW0gdXBkYXRlVGFyZ2V0IC0gVGhlIG9wZXJhdGlvbiB0byBwZXJmb3JtIHdoZW4gdXBkYXRpbmcuXG4gICAgICogQHBhcmFtIHRhcmdldE5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgdGFyZ2V0IGF0dHJpYnV0ZSBvciBwcm9wZXJ0eSB0byB1cGRhdGUuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IodGFyZ2V0LCBiaW5kaW5nLCBpc0JpbmRpbmdWb2xhdGlsZSwgYmluZCwgdW5iaW5kLCB1cGRhdGVUYXJnZXQsIHRhcmdldE5hbWUpIHtcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICB0aGlzLnNvdXJjZSA9IG51bGw7XG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgdGhpcy5jb250ZXh0ID0gbnVsbDtcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICB0aGlzLmJpbmRpbmdPYnNlcnZlciA9IG51bGw7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLmJpbmRpbmcgPSBiaW5kaW5nO1xuICAgICAgICB0aGlzLmlzQmluZGluZ1ZvbGF0aWxlID0gaXNCaW5kaW5nVm9sYXRpbGU7XG4gICAgICAgIHRoaXMuYmluZCA9IGJpbmQ7XG4gICAgICAgIHRoaXMudW5iaW5kID0gdW5iaW5kO1xuICAgICAgICB0aGlzLnVwZGF0ZVRhcmdldCA9IHVwZGF0ZVRhcmdldDtcbiAgICAgICAgdGhpcy50YXJnZXROYW1lID0gdGFyZ2V0TmFtZTtcbiAgICB9XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIGhhbmRsZUNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVUYXJnZXQodGhpcy5iaW5kaW5nT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLnNvdXJjZSwgdGhpcy5jb250ZXh0KSk7XG4gICAgfVxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBoYW5kbGVFdmVudChldmVudCkge1xuICAgICAgICBFeGVjdXRpb25Db250ZXh0LnNldEV2ZW50KGV2ZW50KTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5iaW5kaW5nKHRoaXMuc291cmNlLCB0aGlzLmNvbnRleHQpO1xuICAgICAgICBFeGVjdXRpb25Db250ZXh0LnNldEV2ZW50KG51bGwpO1xuICAgICAgICBpZiAocmVzdWx0ICE9PSB0cnVlKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgX2ludGVycG9sYXRpb25FbmQsIF9pbnRlcnBvbGF0aW9uU3RhcnQsIERPTSB9IGZyb20gXCIuLi9kb20uanNcIjtcbmltcG9ydCB7IEhUTUxCaW5kaW5nRGlyZWN0aXZlIH0gZnJvbSBcIi4vYmluZGluZy5qc1wiO1xubGV0IHNoYXJlZENvbnRleHQgPSBudWxsO1xuY2xhc3MgQ29tcGlsYXRpb25Db250ZXh0IHtcbiAgICBhZGRGYWN0b3J5KGZhY3RvcnkpIHtcbiAgICAgICAgZmFjdG9yeS50YXJnZXRJbmRleCA9IHRoaXMudGFyZ2V0SW5kZXg7XG4gICAgICAgIHRoaXMuYmVoYXZpb3JGYWN0b3JpZXMucHVzaChmYWN0b3J5KTtcbiAgICB9XG4gICAgY2FwdHVyZUNvbnRlbnRCaW5kaW5nKGRpcmVjdGl2ZSkge1xuICAgICAgICBkaXJlY3RpdmUudGFyZ2V0QXRDb250ZW50KCk7XG4gICAgICAgIHRoaXMuYWRkRmFjdG9yeShkaXJlY3RpdmUpO1xuICAgIH1cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5iZWhhdmlvckZhY3RvcmllcyA9IFtdO1xuICAgICAgICB0aGlzLnRhcmdldEluZGV4ID0gLTE7XG4gICAgfVxuICAgIHJlbGVhc2UoKSB7XG4gICAgICAgIHNoYXJlZENvbnRleHQgPSB0aGlzO1xuICAgIH1cbiAgICBzdGF0aWMgYm9ycm93KGRpcmVjdGl2ZXMpIHtcbiAgICAgICAgY29uc3Qgc2hhcmVhYmxlID0gc2hhcmVkQ29udGV4dCB8fCBuZXcgQ29tcGlsYXRpb25Db250ZXh0KCk7XG4gICAgICAgIHNoYXJlYWJsZS5kaXJlY3RpdmVzID0gZGlyZWN0aXZlcztcbiAgICAgICAgc2hhcmVhYmxlLnJlc2V0KCk7XG4gICAgICAgIHNoYXJlZENvbnRleHQgPSBudWxsO1xuICAgICAgICByZXR1cm4gc2hhcmVhYmxlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZUFnZ3JlZ2F0ZUJpbmRpbmcocGFydHMpIHtcbiAgICBpZiAocGFydHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiBwYXJ0c1swXTtcbiAgICB9XG4gICAgbGV0IHRhcmdldE5hbWU7XG4gICAgY29uc3QgcGFydENvdW50ID0gcGFydHMubGVuZ3RoO1xuICAgIGNvbnN0IGZpbmFsUGFydHMgPSBwYXJ0cy5tYXAoKHgpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB4ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4geDtcbiAgICAgICAgfVxuICAgICAgICB0YXJnZXROYW1lID0geC50YXJnZXROYW1lIHx8IHRhcmdldE5hbWU7XG4gICAgICAgIHJldHVybiB4LmJpbmRpbmc7XG4gICAgfSk7XG4gICAgY29uc3QgYmluZGluZyA9IChzY29wZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgb3V0cHV0ID0gXCJcIjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0Q291bnQ7ICsraSkge1xuICAgICAgICAgICAgb3V0cHV0ICs9IGZpbmFsUGFydHNbaV0oc2NvcGUsIGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfTtcbiAgICBjb25zdCBkaXJlY3RpdmUgPSBuZXcgSFRNTEJpbmRpbmdEaXJlY3RpdmUoYmluZGluZyk7XG4gICAgZGlyZWN0aXZlLnRhcmdldE5hbWUgPSB0YXJnZXROYW1lO1xuICAgIHJldHVybiBkaXJlY3RpdmU7XG59XG5jb25zdCBpbnRlcnBvbGF0aW9uRW5kTGVuZ3RoID0gX2ludGVycG9sYXRpb25FbmQubGVuZ3RoO1xuZnVuY3Rpb24gcGFyc2VDb250ZW50KGNvbnRleHQsIHZhbHVlKSB7XG4gICAgY29uc3QgdmFsdWVQYXJ0cyA9IHZhbHVlLnNwbGl0KF9pbnRlcnBvbGF0aW9uU3RhcnQpO1xuICAgIGlmICh2YWx1ZVBhcnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgYmluZGluZ1BhcnRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDAsIGlpID0gdmFsdWVQYXJ0cy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSB2YWx1ZVBhcnRzW2ldO1xuICAgICAgICBjb25zdCBpbmRleCA9IGN1cnJlbnQuaW5kZXhPZihfaW50ZXJwb2xhdGlvbkVuZCk7XG4gICAgICAgIGxldCBsaXRlcmFsO1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBsaXRlcmFsID0gY3VycmVudDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGl2ZUluZGV4ID0gcGFyc2VJbnQoY3VycmVudC5zdWJzdHJpbmcoMCwgaW5kZXgpKTtcbiAgICAgICAgICAgIGJpbmRpbmdQYXJ0cy5wdXNoKGNvbnRleHQuZGlyZWN0aXZlc1tkaXJlY3RpdmVJbmRleF0pO1xuICAgICAgICAgICAgbGl0ZXJhbCA9IGN1cnJlbnQuc3Vic3RyaW5nKGluZGV4ICsgaW50ZXJwb2xhdGlvbkVuZExlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxpdGVyYWwgIT09IFwiXCIpIHtcbiAgICAgICAgICAgIGJpbmRpbmdQYXJ0cy5wdXNoKGxpdGVyYWwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBiaW5kaW5nUGFydHM7XG59XG5mdW5jdGlvbiBjb21waWxlQXR0cmlidXRlcyhjb250ZXh0LCBub2RlLCBpbmNsdWRlQmFzaWNWYWx1ZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBub2RlLmF0dHJpYnV0ZXM7XG4gICAgZm9yIChsZXQgaSA9IDAsIGlpID0gYXR0cmlidXRlcy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICAgIGNvbnN0IGF0dHIgPSBhdHRyaWJ1dGVzW2ldO1xuICAgICAgICBjb25zdCBhdHRyVmFsdWUgPSBhdHRyLnZhbHVlO1xuICAgICAgICBjb25zdCBwYXJzZVJlc3VsdCA9IHBhcnNlQ29udGVudChjb250ZXh0LCBhdHRyVmFsdWUpO1xuICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgaWYgKHBhcnNlUmVzdWx0ID09PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoaW5jbHVkZUJhc2ljVmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbmV3IEhUTUxCaW5kaW5nRGlyZWN0aXZlKCgpID0+IGF0dHJWYWx1ZSk7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnRhcmdldE5hbWUgPSBhdHRyLm5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgPSBjcmVhdGVBZ2dyZWdhdGVCaW5kaW5nKHBhcnNlUmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZU5vZGUoYXR0cik7XG4gICAgICAgICAgICBpLS07XG4gICAgICAgICAgICBpaS0tO1xuICAgICAgICAgICAgY29udGV4dC5hZGRGYWN0b3J5KHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBjb21waWxlQ29udGVudChjb250ZXh0LCBub2RlLCB3YWxrZXIpIHtcbiAgICBjb25zdCBwYXJzZVJlc3VsdCA9IHBhcnNlQ29udGVudChjb250ZXh0LCBub2RlLnRleHRDb250ZW50KTtcbiAgICBpZiAocGFyc2VSZXN1bHQgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IGxhc3ROb2RlID0gbm9kZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGlpID0gcGFyc2VSZXN1bHQubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFBhcnQgPSBwYXJzZVJlc3VsdFtpXTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnROb2RlID0gaSA9PT0gMFxuICAgICAgICAgICAgICAgID8gbm9kZVxuICAgICAgICAgICAgICAgIDogbGFzdE5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIiksIGxhc3ROb2RlLm5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY3VycmVudFBhcnQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZS50ZXh0Q29udGVudCA9IGN1cnJlbnRQYXJ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY3VycmVudE5vZGUudGV4dENvbnRlbnQgPSBcIiBcIjtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmNhcHR1cmVDb250ZW50QmluZGluZyhjdXJyZW50UGFydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYXN0Tm9kZSA9IGN1cnJlbnROb2RlO1xuICAgICAgICAgICAgY29udGV4dC50YXJnZXRJbmRleCsrO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnROb2RlICE9PSBub2RlKSB7XG4gICAgICAgICAgICAgICAgd2Fsa2VyLm5leHROb2RlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dC50YXJnZXRJbmRleC0tO1xuICAgIH1cbn1cbi8qKlxuICogQ29tcGlsZXMgYSB0ZW1wbGF0ZSBhbmQgYXNzb2NpYXRlZCBkaXJlY3RpdmVzIGludG8gYSByYXcgY29tcGlsYXRpb25cbiAqIHJlc3VsdCB3aGljaCBpbmNsdWRlIGEgY2xvbmVhYmxlIERvY3VtZW50RnJhZ21lbnQgYW5kIGZhY3RvcmllcyBjYXBhYmxlXG4gKiBvZiBhdHRhY2hpbmcgcnVudGltZSBiZWhhdmlvciB0byBub2RlcyB3aXRoaW4gdGhlIGZyYWdtZW50LlxuICogQHBhcmFtIHRlbXBsYXRlIC0gVGhlIHRlbXBsYXRlIHRvIGNvbXBpbGUuXG4gKiBAcGFyYW0gZGlyZWN0aXZlcyAtIFRoZSBkaXJlY3RpdmVzIHJlZmVyZW5jZWQgYnkgdGhlIHRlbXBsYXRlLlxuICogQHJlbWFya3NcbiAqIFRoZSB0ZW1wbGF0ZSB0aGF0IGlzIHByb3ZpZGVkIGZvciBjb21waWxhdGlvbiBpcyBhbHRlcmVkIGluLXBsYWNlXG4gKiBhbmQgY2Fubm90IGJlIGNvbXBpbGVkIGFnYWluLiBJZiB0aGUgb3JpZ2luYWwgdGVtcGxhdGUgbXVzdCBiZSBwcmVzZXJ2ZWQsXG4gKiBpdCBpcyByZWNvbW1lbmRlZCB0aGF0IHlvdSBjbG9uZSB0aGUgb3JpZ2luYWwgYW5kIHBhc3MgdGhlIGNsb25lIHRvIHRoaXMgQVBJLlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcGlsZVRlbXBsYXRlKHRlbXBsYXRlLCBkaXJlY3RpdmVzKSB7XG4gICAgY29uc3QgZnJhZ21lbnQgPSB0ZW1wbGF0ZS5jb250ZW50O1xuICAgIC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTExMTE4NjRcbiAgICBkb2N1bWVudC5hZG9wdE5vZGUoZnJhZ21lbnQpO1xuICAgIGNvbnN0IGNvbnRleHQgPSBDb21waWxhdGlvbkNvbnRleHQuYm9ycm93KGRpcmVjdGl2ZXMpO1xuICAgIGNvbXBpbGVBdHRyaWJ1dGVzKGNvbnRleHQsIHRlbXBsYXRlLCB0cnVlKTtcbiAgICBjb25zdCBob3N0QmVoYXZpb3JGYWN0b3JpZXMgPSBjb250ZXh0LmJlaGF2aW9yRmFjdG9yaWVzO1xuICAgIGNvbnRleHQucmVzZXQoKTtcbiAgICBjb25zdCB3YWxrZXIgPSBET00uY3JlYXRlVGVtcGxhdGVXYWxrZXIoZnJhZ21lbnQpO1xuICAgIGxldCBub2RlO1xuICAgIHdoaWxlICgobm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpKSkge1xuICAgICAgICBjb250ZXh0LnRhcmdldEluZGV4Kys7XG4gICAgICAgIHN3aXRjaCAobm9kZS5ub2RlVHlwZSkge1xuICAgICAgICAgICAgY2FzZSAxOiAvLyBlbGVtZW50IG5vZGVcbiAgICAgICAgICAgICAgICBjb21waWxlQXR0cmlidXRlcyhjb250ZXh0LCBub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzogLy8gdGV4dCBub2RlXG4gICAgICAgICAgICAgICAgY29tcGlsZUNvbnRlbnQoY29udGV4dCwgbm9kZSwgd2Fsa2VyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgODogLy8gY29tbWVudFxuICAgICAgICAgICAgICAgIGlmIChET00uaXNNYXJrZXIobm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5hZGRGYWN0b3J5KGRpcmVjdGl2ZXNbRE9NLmV4dHJhY3REaXJlY3RpdmVJbmRleEZyb21NYXJrZXIobm9kZSldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IHRhcmdldE9mZnNldCA9IDA7XG4gICAgaWYgKFxuICAgIC8vIElmIHRoZSBmaXJzdCBub2RlIGluIGEgZnJhZ21lbnQgaXMgYSBtYXJrZXIsIHRoYXQgbWVhbnMgaXQncyBhbiB1bnN0YWJsZSBmaXJzdCBub2RlLFxuICAgIC8vIGJlY2F1c2Ugc29tZXRoaW5nIGxpa2UgYSB3aGVuLCByZXBlYXQsIGV0Yy4gY291bGQgYWRkIG5vZGVzIGJlZm9yZSB0aGUgbWFya2VyLlxuICAgIC8vIFRvIG1pdGlnYXRlIHRoaXMsIHdlIGluc2VydCBhIHN0YWJsZSBmaXJzdCBub2RlLiBIb3dldmVyLCBpZiB3ZSBpbnNlcnQgYSBub2RlLFxuICAgIC8vIHRoYXQgd2lsbCBhbHRlciB0aGUgcmVzdWx0IG9mIHRoZSBUcmVlV2Fsa2VyLiBTbywgd2UgYWxzbyBuZWVkIHRvIG9mZnNldCB0aGUgdGFyZ2V0IGluZGV4LlxuICAgIERPTS5pc01hcmtlcihmcmFnbWVudC5maXJzdENoaWxkKSB8fFxuICAgICAgICAvLyBPciBpZiB0aGVyZSBpcyBvbmx5IG9uZSBub2RlIGFuZCBhIGRpcmVjdGl2ZSwgaXQgbWVhbnMgdGhlIHRlbXBsYXRlJ3MgY29udGVudFxuICAgICAgICAvLyBpcyAqb25seSogdGhlIGRpcmVjdGl2ZS4gSW4gdGhhdCBjYXNlLCBIVE1MVmlldy5kaXNwb3NlKCkgbWlzc2VzIGFueSBub2RlcyBpbnNlcnRlZCBieVxuICAgICAgICAvLyB0aGUgZGlyZWN0aXZlLiBJbnNlcnRpbmcgYSBuZXcgbm9kZSBlbnN1cmVzIHByb3BlciBkaXNwb3NhbCBvZiBub2RlcyBhZGRlZCBieSB0aGUgZGlyZWN0aXZlLlxuICAgICAgICAoZnJhZ21lbnQuY2hpbGROb2Rlcy5sZW5ndGggPT09IDEgJiYgZGlyZWN0aXZlcy5sZW5ndGgpKSB7XG4gICAgICAgIGZyYWdtZW50Lmluc2VydEJlZm9yZShkb2N1bWVudC5jcmVhdGVDb21tZW50KFwiXCIpLCBmcmFnbWVudC5maXJzdENoaWxkKTtcbiAgICAgICAgdGFyZ2V0T2Zmc2V0ID0gLTE7XG4gICAgfVxuICAgIGNvbnN0IHZpZXdCZWhhdmlvckZhY3RvcmllcyA9IGNvbnRleHQuYmVoYXZpb3JGYWN0b3JpZXM7XG4gICAgY29udGV4dC5yZWxlYXNlKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZnJhZ21lbnQsXG4gICAgICAgIHZpZXdCZWhhdmlvckZhY3RvcmllcyxcbiAgICAgICAgaG9zdEJlaGF2aW9yRmFjdG9yaWVzLFxuICAgICAgICB0YXJnZXRPZmZzZXQsXG4gICAgfTtcbn1cbiIsImltcG9ydCB7IERPTSB9IGZyb20gXCIuLi9kb20uanNcIjtcbi8qKlxuICogSW5zdHJ1Y3RzIHRoZSB0ZW1wbGF0ZSBlbmdpbmUgdG8gYXBwbHkgYmVoYXZpb3IgdG8gYSBub2RlLlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY2xhc3MgSFRNTERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgaW5kZXggb2YgdGhlIERPTSBub2RlIHRvIHdoaWNoIHRoZSBjcmVhdGVkIGJlaGF2aW9yIHdpbGwgYXBwbHkuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRhcmdldEluZGV4ID0gMDtcbiAgICB9XG59XG4vKipcbiAqIEEge0BsaW5rIEhUTUxEaXJlY3RpdmV9IHRoYXQgdGFyZ2V0cyBhIG5hbWVkIGF0dHJpYnV0ZSBvciBwcm9wZXJ0eSBvbiBhIG5vZGUuXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjbGFzcyBUYXJnZXRlZEhUTUxEaXJlY3RpdmUgZXh0ZW5kcyBIVE1MRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENyZWF0ZXMgYSBwbGFjZWhvbGRlciBzdHJpbmcgYmFzZWQgb24gdGhlIGRpcmVjdGl2ZSdzIGluZGV4IHdpdGhpbiB0aGUgdGVtcGxhdGUuXG4gICAgICAgICAqIEBwYXJhbSBpbmRleCAtIFRoZSBpbmRleCBvZiB0aGUgZGlyZWN0aXZlIHdpdGhpbiB0aGUgdGVtcGxhdGUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNyZWF0ZVBsYWNlaG9sZGVyID0gRE9NLmNyZWF0ZUludGVycG9sYXRpb25QbGFjZWhvbGRlcjtcbiAgICB9XG59XG4vKipcbiAqIEEgZGlyZWN0aXZlIHRoYXQgYXR0YWNoZXMgc3BlY2lhbCBiZWhhdmlvciB0byBhbiBlbGVtZW50IHZpYSBhIGN1c3RvbSBhdHRyaWJ1dGUuXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjbGFzcyBBdHRhY2hlZEJlaGF2aW9ySFRNTERpcmVjdGl2ZSBleHRlbmRzIEhUTUxEaXJlY3RpdmUge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIG5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgYmVoYXZpb3I7IHVzZWQgYXMgYSBjdXN0b20gYXR0cmlidXRlIG9uIHRoZSBlbGVtZW50LlxuICAgICAqIEBwYXJhbSBiZWhhdmlvciAtIFRoZSBiZWhhdmlvciB0byBpbnN0YW50aWF0ZSBhbmQgYXR0YWNoIHRvIHRoZSBlbGVtZW50LlxuICAgICAqIEBwYXJhbSBvcHRpb25zIC0gT3B0aW9ucyB0byBwYXNzIHRvIHRoZSBiZWhhdmlvciBkdXJpbmcgY3JlYXRpb24uXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobmFtZSwgYmVoYXZpb3IsIG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5iZWhhdmlvciA9IGJlaGF2aW9yO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgcGxhY2Vob2xkZXIgc3RyaW5nIGJhc2VkIG9uIHRoZSBkaXJlY3RpdmUncyBpbmRleCB3aXRoaW4gdGhlIHRlbXBsYXRlLlxuICAgICAqIEBwYXJhbSBpbmRleCAtIFRoZSBpbmRleCBvZiB0aGUgZGlyZWN0aXZlIHdpdGhpbiB0aGUgdGVtcGxhdGUuXG4gICAgICogQHJlbWFya3NcbiAgICAgKiBDcmVhdGVzIGEgY3VzdG9tIGF0dHJpYnV0ZSBwbGFjZWhvbGRlci5cbiAgICAgKi9cbiAgICBjcmVhdGVQbGFjZWhvbGRlcihpbmRleCkge1xuICAgICAgICByZXR1cm4gRE9NLmNyZWF0ZUN1c3RvbUF0dHJpYnV0ZVBsYWNlaG9sZGVyKHRoaXMubmFtZSwgaW5kZXgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgYmVoYXZpb3IgZm9yIHRoZSBwcm92aWRlZCB0YXJnZXQgbm9kZS5cbiAgICAgKiBAcGFyYW0gdGFyZ2V0IC0gVGhlIG5vZGUgaW5zdGFuY2UgdG8gY3JlYXRlIHRoZSBiZWhhdmlvciBmb3IuXG4gICAgICogQHJlbWFya3NcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIHRoZSBgYmVoYXZpb3JgIHR5cGUgdGhpcyBkaXJlY3RpdmUgd2FzIGNvbnN0cnVjdGVkIHdpdGhcbiAgICAgKiBhbmQgcGFzc2VzIHRoZSB0YXJnZXQgYW5kIG9wdGlvbnMgdG8gdGhhdCBgYmVoYXZpb3JgJ3MgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgY3JlYXRlQmVoYXZpb3IodGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiBuZXcgdGhpcy5iZWhhdmlvcih0YXJnZXQsIHRoaXMub3B0aW9ucyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCIuLi9vYnNlcnZhdGlvbi9vYnNlcnZhYmxlLmpzXCI7XG5pbXBvcnQgeyBlbXB0eUFycmF5IH0gZnJvbSBcIi4uL3BsYXRmb3JtLmpzXCI7XG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHRvIGZpbHRlciBhIE5vZGUgYXJyYXksIHNlbGVjdGluZyBvbmx5IGVsZW1lbnRzLlxuICogQHBhcmFtIHNlbGVjdG9yIC0gQW4gb3B0aW9uYWwgc2VsZWN0b3IgdG8gcmVzdHJpY3QgdGhlIGZpbHRlciB0by5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRzKHNlbGVjdG9yKSB7XG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWUsIGluZGV4LCBhcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLm5vZGVUeXBlID09PSAxICYmIHZhbHVlLm1hdGNoZXMoc2VsZWN0b3IpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlLCBpbmRleCwgYXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLm5vZGVUeXBlID09PSAxO1xuICAgIH07XG59XG4vKipcbiAqIEEgYmFzZSBjbGFzcyBmb3Igbm9kZSBvYnNlcnZhdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgY2xhc3MgTm9kZU9ic2VydmF0aW9uQmVoYXZpb3Ige1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgTm9kZU9ic2VydmF0aW9uQmVoYXZpb3IuXG4gICAgICogQHBhcmFtIHRhcmdldCAtIFRoZSB0YXJnZXQgdG8gYXNzaWduIHRoZSBub2RlcyBwcm9wZXJ0eSBvbi5cbiAgICAgKiBAcGFyYW0gb3B0aW9ucyAtIFRoZSBvcHRpb25zIHRvIHVzZSBpbiBjb25maWd1cmluZyBub2RlIG9ic2VydmF0aW9uLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHRhcmdldCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBCaW5kIHRoaXMgYmVoYXZpb3IgdG8gdGhlIHNvdXJjZS5cbiAgICAgKiBAcGFyYW0gc291cmNlIC0gVGhlIHNvdXJjZSB0byBiaW5kIHRvLlxuICAgICAqIEBwYXJhbSBjb250ZXh0IC0gVGhlIGV4ZWN1dGlvbiBjb250ZXh0IHRoYXQgdGhlIGJpbmRpbmcgaXMgb3BlcmF0aW5nIHdpdGhpbi5cbiAgICAgKi9cbiAgICBiaW5kKHNvdXJjZSkge1xuICAgICAgICBjb25zdCBuYW1lID0gdGhpcy5vcHRpb25zLnByb3BlcnR5O1xuICAgICAgICB0aGlzLnNob3VsZFVwZGF0ZSA9IE9ic2VydmFibGUuZ2V0QWNjZXNzb3JzKHNvdXJjZSkuc29tZSgoeCkgPT4geC5uYW1lID09PSBuYW1lKTtcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICAgIHRoaXMudXBkYXRlVGFyZ2V0KHRoaXMuY29tcHV0ZU5vZGVzKCkpO1xuICAgICAgICBpZiAodGhpcy5zaG91bGRVcGRhdGUpIHtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVuYmluZHMgdGhpcyBiZWhhdmlvciBmcm9tIHRoZSBzb3VyY2UuXG4gICAgICogQHBhcmFtIHNvdXJjZSAtIFRoZSBzb3VyY2UgdG8gdW5iaW5kIGZyb20uXG4gICAgICovXG4gICAgdW5iaW5kKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVRhcmdldChlbXB0eUFycmF5KTtcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5zaG91bGRVcGRhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBoYW5kbGVFdmVudCgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVUYXJnZXQodGhpcy5jb21wdXRlTm9kZXMoKSk7XG4gICAgfVxuICAgIGNvbXB1dGVOb2RlcygpIHtcbiAgICAgICAgbGV0IG5vZGVzID0gdGhpcy5nZXROb2RlcygpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmZpbHRlciAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBub2RlcyA9IG5vZGVzLmZpbHRlcih0aGlzLm9wdGlvbnMuZmlsdGVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZXM7XG4gICAgfVxuICAgIHVwZGF0ZVRhcmdldCh2YWx1ZSkge1xuICAgICAgICB0aGlzLnNvdXJjZVt0aGlzLm9wdGlvbnMucHJvcGVydHldID0gdmFsdWU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQXR0YWNoZWRCZWhhdmlvckhUTUxEaXJlY3RpdmUgfSBmcm9tIFwiLi9odG1sLWRpcmVjdGl2ZS5qc1wiO1xuLyoqXG4gKiBUaGUgcnVudGltZSBiZWhhdmlvciBmb3IgdGVtcGxhdGUgcmVmZXJlbmNlcy5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNsYXNzIFJlZkJlaGF2aW9yIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIFJlZkJlaGF2aW9yLlxuICAgICAqIEBwYXJhbSB0YXJnZXQgLSBUaGUgZWxlbWVudCB0byByZWZlcmVuY2UuXG4gICAgICogQHBhcmFtIHByb3BlcnR5TmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24gdGhlIHJlZmVyZW5jZSB0by5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy5wcm9wZXJ0eU5hbWUgPSBwcm9wZXJ0eU5hbWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEJpbmQgdGhpcyBiZWhhdmlvciB0byB0aGUgc291cmNlLlxuICAgICAqIEBwYXJhbSBzb3VyY2UgLSBUaGUgc291cmNlIHRvIGJpbmQgdG8uXG4gICAgICogQHBhcmFtIGNvbnRleHQgLSBUaGUgZXhlY3V0aW9uIGNvbnRleHQgdGhhdCB0aGUgYmluZGluZyBpcyBvcGVyYXRpbmcgd2l0aGluLlxuICAgICAqL1xuICAgIGJpbmQoc291cmNlKSB7XG4gICAgICAgIHNvdXJjZVt0aGlzLnByb3BlcnR5TmFtZV0gPSB0aGlzLnRhcmdldDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVW5iaW5kcyB0aGlzIGJlaGF2aW9yIGZyb20gdGhlIHNvdXJjZS5cbiAgICAgKiBAcGFyYW0gc291cmNlIC0gVGhlIHNvdXJjZSB0byB1bmJpbmQgZnJvbS5cbiAgICAgKi9cbiAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWZ1bmN0aW9uICovXG4gICAgdW5iaW5kKCkgeyB9XG59XG4vKipcbiAqIEEgZGlyZWN0aXZlIHRoYXQgb2JzZXJ2ZXMgdGhlIHVwZGF0ZXMgYSBwcm9wZXJ0eSB3aXRoIGEgcmVmZXJlbmNlIHRvIHRoZSBlbGVtZW50LlxuICogQHBhcmFtIHByb3BlcnR5TmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24gdGhlIHJlZmVyZW5jZSB0by5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZihwcm9wZXJ0eU5hbWUpIHtcbiAgICByZXR1cm4gbmV3IEF0dGFjaGVkQmVoYXZpb3JIVE1MRGlyZWN0aXZlKFwiZmFzdC1yZWZcIiwgUmVmQmVoYXZpb3IsIHByb3BlcnR5TmFtZSk7XG59XG4iLCJpbXBvcnQgeyBBdHRhY2hlZEJlaGF2aW9ySFRNTERpcmVjdGl2ZSB9IGZyb20gXCIuL2h0bWwtZGlyZWN0aXZlLmpzXCI7XG5pbXBvcnQgeyBOb2RlT2JzZXJ2YXRpb25CZWhhdmlvciB9IGZyb20gXCIuL25vZGUtb2JzZXJ2YXRpb24uanNcIjtcbi8qKlxuICogVGhlIHJ1bnRpbWUgYmVoYXZpb3IgZm9yIHNsb3R0ZWQgbm9kZSBvYnNlcnZhdGlvbi5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNsYXNzIFNsb3R0ZWRCZWhhdmlvciBleHRlbmRzIE5vZGVPYnNlcnZhdGlvbkJlaGF2aW9yIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIFNsb3R0ZWRCZWhhdmlvci5cbiAgICAgKiBAcGFyYW0gdGFyZ2V0IC0gVGhlIHNsb3QgZWxlbWVudCB0YXJnZXQgdG8gb2JzZXJ2ZS5cbiAgICAgKiBAcGFyYW0gb3B0aW9ucyAtIFRoZSBvcHRpb25zIHRvIHVzZSB3aGVuIG9ic2VydmluZyB0aGUgc2xvdC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQsIG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIodGFyZ2V0LCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQmVnaW5zIG9ic2VydmF0aW9uIG9mIHRoZSBub2Rlcy5cbiAgICAgKi9cbiAgICBvYnNlcnZlKCkge1xuICAgICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwic2xvdGNoYW5nZVwiLCB0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGlzY29ubmVjdHMgb2JzZXJ2YXRpb24gb2YgdGhlIG5vZGVzLlxuICAgICAqL1xuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzbG90Y2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIG5vZGVzIHRoYXQgc2hvdWxkIGJlIGFzc2lnbmVkIHRvIHRoZSB0YXJnZXQuXG4gICAgICovXG4gICAgZ2V0Tm9kZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhcmdldC5hc3NpZ25lZE5vZGVzKHRoaXMub3B0aW9ucyk7XG4gICAgfVxufVxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0aGF0IG9ic2VydmVzIHRoZSBgYXNzaWduZWROb2RlcygpYCBvZiBhIHNsb3QgYW5kIHVwZGF0ZXMgYSBwcm9wZXJ0eVxuICogd2hlbmV2ZXIgdGhleSBjaGFuZ2UuXG4gKiBAcGFyYW0gcHJvcGVydHlPck9wdGlvbnMgLSBUaGUgb3B0aW9ucyB1c2VkIHRvIGNvbmZpZ3VyZSBzbG90dGVkIG5vZGUgb2JzZXJ2YXRpb24uXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzbG90dGVkKHByb3BlcnR5T3JPcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wZXJ0eU9yT3B0aW9ucyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBwcm9wZXJ0eU9yT3B0aW9ucyA9IHsgcHJvcGVydHk6IHByb3BlcnR5T3JPcHRpb25zIH07XG4gICAgfVxuICAgIHJldHVybiBuZXcgQXR0YWNoZWRCZWhhdmlvckhUTUxEaXJlY3RpdmUoXCJmYXN0LXNsb3R0ZWRcIiwgU2xvdHRlZEJlaGF2aW9yLCBwcm9wZXJ0eU9yT3B0aW9ucyk7XG59XG4iLCJpbXBvcnQgeyBET00gfSBmcm9tIFwiLi4vZG9tLmpzXCI7XG5pbXBvcnQgeyBkZWZhdWx0RXhlY3V0aW9uQ29udGV4dCB9IGZyb20gXCIuLi9vYnNlcnZhdGlvbi9vYnNlcnZhYmxlLmpzXCI7XG5pbXBvcnQgeyBjb21waWxlVGVtcGxhdGUgfSBmcm9tIFwiLi9jb21waWxlci5qc1wiO1xuaW1wb3J0IHsgSFRNTFZpZXcgfSBmcm9tIFwiLi92aWV3LmpzXCI7XG5pbXBvcnQgeyBIVE1MRGlyZWN0aXZlLCBUYXJnZXRlZEhUTUxEaXJlY3RpdmUsIH0gZnJvbSBcIi4vaHRtbC1kaXJlY3RpdmUuanNcIjtcbmltcG9ydCB7IEhUTUxCaW5kaW5nRGlyZWN0aXZlIH0gZnJvbSBcIi4vYmluZGluZy5qc1wiO1xuLyoqXG4gKiBBIHRlbXBsYXRlIGNhcGFibGUgb2YgY3JlYXRpbmcgSFRNTFZpZXcgaW5zdGFuY2VzIG9yIHJlbmRlcmluZyBkaXJlY3RseSB0byBET00uXG4gKiBAcHVibGljXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMgKi9cbmV4cG9ydCBjbGFzcyBWaWV3VGVtcGxhdGUge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgVmlld1RlbXBsYXRlLlxuICAgICAqIEBwYXJhbSBodG1sIC0gVGhlIGh0bWwgcmVwcmVzZW50aW5nIHdoYXQgdGhpcyB0ZW1wbGF0ZSB3aWxsIGluc3RhbnRpYXRlLCBpbmNsdWRpbmcgcGxhY2Vob2xkZXJzIGZvciBkaXJlY3RpdmVzLlxuICAgICAqIEBwYXJhbSBkaXJlY3RpdmVzIC0gVGhlIGRpcmVjdGl2ZXMgdGhhdCB3aWxsIGJlIGNvbm5lY3RlZCB0byBwbGFjZWhvbGRlcnMgaW4gdGhlIGh0bWwuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoaHRtbCwgZGlyZWN0aXZlcykge1xuICAgICAgICB0aGlzLmJlaGF2aW9yQ291bnQgPSAwO1xuICAgICAgICB0aGlzLmhhc0hvc3RCZWhhdmlvcnMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mcmFnbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMudGFyZ2V0T2Zmc2V0ID0gMDtcbiAgICAgICAgdGhpcy52aWV3QmVoYXZpb3JGYWN0b3JpZXMgPSBudWxsO1xuICAgICAgICB0aGlzLmhvc3RCZWhhdmlvckZhY3RvcmllcyA9IG51bGw7XG4gICAgICAgIHRoaXMuaHRtbCA9IGh0bWw7XG4gICAgICAgIHRoaXMuZGlyZWN0aXZlcyA9IGRpcmVjdGl2ZXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gSFRNTFZpZXcgaW5zdGFuY2UgYmFzZWQgb24gdGhpcyB0ZW1wbGF0ZSBkZWZpbml0aW9uLlxuICAgICAqIEBwYXJhbSBob3N0QmluZGluZ1RhcmdldCAtIFRoZSBlbGVtZW50IHRoYXQgaG9zdCBiZWhhdmlvcnMgd2lsbCBiZSBib3VuZCB0by5cbiAgICAgKi9cbiAgICBjcmVhdGUoaG9zdEJpbmRpbmdUYXJnZXQpIHtcbiAgICAgICAgaWYgKHRoaXMuZnJhZ21lbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGxldCB0ZW1wbGF0ZTtcbiAgICAgICAgICAgIGNvbnN0IGh0bWwgPSB0aGlzLmh0bWw7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGh0bWwgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBET00uY3JlYXRlSFRNTChodG1sKTtcbiAgICAgICAgICAgICAgICBjb25zdCBmZWMgPSB0ZW1wbGF0ZS5jb250ZW50LmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgICAgIGlmIChmZWMgIT09IG51bGwgJiYgZmVjLnRhZ05hbWUgPT09IFwiVEVNUExBVEVcIikge1xuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZSA9IGZlYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZSA9IGh0bWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjb21waWxlVGVtcGxhdGUodGVtcGxhdGUsIHRoaXMuZGlyZWN0aXZlcyk7XG4gICAgICAgICAgICB0aGlzLmZyYWdtZW50ID0gcmVzdWx0LmZyYWdtZW50O1xuICAgICAgICAgICAgdGhpcy52aWV3QmVoYXZpb3JGYWN0b3JpZXMgPSByZXN1bHQudmlld0JlaGF2aW9yRmFjdG9yaWVzO1xuICAgICAgICAgICAgdGhpcy5ob3N0QmVoYXZpb3JGYWN0b3JpZXMgPSByZXN1bHQuaG9zdEJlaGF2aW9yRmFjdG9yaWVzO1xuICAgICAgICAgICAgdGhpcy50YXJnZXRPZmZzZXQgPSByZXN1bHQudGFyZ2V0T2Zmc2V0O1xuICAgICAgICAgICAgdGhpcy5iZWhhdmlvckNvdW50ID1cbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdCZWhhdmlvckZhY3Rvcmllcy5sZW5ndGggKyB0aGlzLmhvc3RCZWhhdmlvckZhY3Rvcmllcy5sZW5ndGg7XG4gICAgICAgICAgICB0aGlzLmhhc0hvc3RCZWhhdmlvcnMgPSB0aGlzLmhvc3RCZWhhdmlvckZhY3Rvcmllcy5sZW5ndGggPiAwO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZyYWdtZW50ID0gdGhpcy5mcmFnbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIGNvbnN0IHZpZXdGYWN0b3JpZXMgPSB0aGlzLnZpZXdCZWhhdmlvckZhY3RvcmllcztcbiAgICAgICAgY29uc3QgYmVoYXZpb3JzID0gbmV3IEFycmF5KHRoaXMuYmVoYXZpb3JDb3VudCk7XG4gICAgICAgIGNvbnN0IHdhbGtlciA9IERPTS5jcmVhdGVUZW1wbGF0ZVdhbGtlcihmcmFnbWVudCk7XG4gICAgICAgIGxldCBiZWhhdmlvckluZGV4ID0gMDtcbiAgICAgICAgbGV0IHRhcmdldEluZGV4ID0gdGhpcy50YXJnZXRPZmZzZXQ7XG4gICAgICAgIGxldCBub2RlID0gd2Fsa2VyLm5leHROb2RlKCk7XG4gICAgICAgIGZvciAobGV0IGlpID0gdmlld0ZhY3Rvcmllcy5sZW5ndGg7IGJlaGF2aW9ySW5kZXggPCBpaTsgKytiZWhhdmlvckluZGV4KSB7XG4gICAgICAgICAgICBjb25zdCBmYWN0b3J5ID0gdmlld0ZhY3Rvcmllc1tiZWhhdmlvckluZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IGZhY3RvcnlJbmRleCA9IGZhY3RvcnkudGFyZ2V0SW5kZXg7XG4gICAgICAgICAgICB3aGlsZSAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRJbmRleCA9PT0gZmFjdG9yeUluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yc1tiZWhhdmlvckluZGV4XSA9IGZhY3RvcnkuY3JlYXRlQmVoYXZpb3Iobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpO1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5oYXNIb3N0QmVoYXZpb3JzKSB7XG4gICAgICAgICAgICBjb25zdCBob3N0RmFjdG9yaWVzID0gdGhpcy5ob3N0QmVoYXZpb3JGYWN0b3JpZXM7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgaWkgPSBob3N0RmFjdG9yaWVzLmxlbmd0aDsgaSA8IGlpOyArK2ksICsrYmVoYXZpb3JJbmRleCkge1xuICAgICAgICAgICAgICAgIGJlaGF2aW9yc1tiZWhhdmlvckluZGV4XSA9IGhvc3RGYWN0b3JpZXNbaV0uY3JlYXRlQmVoYXZpb3IoaG9zdEJpbmRpbmdUYXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgSFRNTFZpZXcoZnJhZ21lbnQsIGJlaGF2aW9ycyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gSFRNTFZpZXcgZnJvbSB0aGlzIHRlbXBsYXRlLCBiaW5kcyBpdCB0byB0aGUgc291cmNlLCBhbmQgdGhlbiBhcHBlbmRzIGl0IHRvIHRoZSBob3N0LlxuICAgICAqIEBwYXJhbSBzb3VyY2UgLSBUaGUgZGF0YSBzb3VyY2UgdG8gYmluZCB0aGUgdGVtcGxhdGUgdG8uXG4gICAgICogQHBhcmFtIGhvc3QgLSBUaGUgRWxlbWVudCB3aGVyZSB0aGUgdGVtcGxhdGUgd2lsbCBiZSByZW5kZXJlZC5cbiAgICAgKiBAcGFyYW0gaG9zdEJpbmRpbmdUYXJnZXQgLSBBbiBIVE1MIGVsZW1lbnQgdG8gdGFyZ2V0IHRoZSBob3N0IGJpbmRpbmdzIGF0IGlmIGRpZmZlcmVudCBmcm9tIHRoZVxuICAgICAqIGhvc3QgdGhhdCB0aGUgdGVtcGxhdGUgaXMgYmVpbmcgYXR0YWNoZWQgdG8uXG4gICAgICovXG4gICAgcmVuZGVyKHNvdXJjZSwgaG9zdCwgaG9zdEJpbmRpbmdUYXJnZXQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBob3N0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBob3N0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaG9zdCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhvc3RCaW5kaW5nVGFyZ2V0ID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGhvc3RCaW5kaW5nVGFyZ2V0ID0gaG9zdDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2aWV3ID0gdGhpcy5jcmVhdGUoaG9zdEJpbmRpbmdUYXJnZXQpO1xuICAgICAgICB2aWV3LmJpbmQoc291cmNlLCBkZWZhdWx0RXhlY3V0aW9uQ29udGV4dCk7XG4gICAgICAgIHZpZXcuYXBwZW5kVG8oaG9zdCk7XG4gICAgICAgIHJldHVybiB2aWV3O1xuICAgIH1cbn1cbi8vIE11Y2ggdGhhbmtzIHRvIExpdEhUTUwgZm9yIHdvcmtpbmcgdGhpcyBvdXQhXG5jb25zdCBsYXN0QXR0cmlidXRlTmFtZVJlZ2V4ID0gXG4vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udHJvbC1yZWdleCAqL1xuLyhbIFxceDA5XFx4MGFcXHgwY1xceDBkXSkoW15cXDAtXFx4MUZcXHg3Ri1cXHg5RiBcIic+PS9dKykoWyBcXHgwOVxceDBhXFx4MGNcXHgwZF0qPVsgXFx4MDlcXHgwYVxceDBjXFx4MGRdKig/OlteIFxceDA5XFx4MGFcXHgwY1xceDBkXCInYDw+PV0qfFwiW15cIl0qfCdbXiddKikpJC87XG4vKipcbiAqIFRyYW5zZm9ybXMgYSB0ZW1wbGF0ZSBsaXRlcmFsIHN0cmluZyBpbnRvIGEgcmVuZGVyYWJsZSBWaWV3VGVtcGxhdGUuXG4gKiBAcGFyYW0gc3RyaW5ncyAtIFRoZSBzdHJpbmcgZnJhZ21lbnRzIHRoYXQgYXJlIGludGVycG9sYXRlZCB3aXRoIHRoZSB2YWx1ZXMuXG4gKiBAcGFyYW0gdmFsdWVzIC0gVGhlIHZhbHVlcyB0aGF0IGFyZSBpbnRlcnBvbGF0ZWQgd2l0aCB0aGUgc3RyaW5nIGZyYWdtZW50cy5cbiAqIEByZW1hcmtzXG4gKiBUaGUgaHRtbCBoZWxwZXIgc3VwcG9ydHMgaW50ZXJwb2xhdGlvbiBvZiBzdHJpbmdzLCBudW1iZXJzLCBiaW5kaW5nIGV4cHJlc3Npb25zLFxuICogb3RoZXIgdGVtcGxhdGUgaW5zdGFuY2VzLCBhbmQgRGlyZWN0aXZlIGluc3RhbmNlcy5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGh0bWwoc3RyaW5ncywgLi4udmFsdWVzKSB7XG4gICAgY29uc3QgZGlyZWN0aXZlcyA9IFtdO1xuICAgIGxldCBodG1sID0gXCJcIjtcbiAgICBmb3IgKGxldCBpID0gMCwgaWkgPSBzdHJpbmdzLmxlbmd0aCAtIDE7IGkgPCBpaTsgKytpKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTdHJpbmcgPSBzdHJpbmdzW2ldO1xuICAgICAgICBsZXQgdmFsdWUgPSB2YWx1ZXNbaV07XG4gICAgICAgIGh0bWwgKz0gY3VycmVudFN0cmluZztcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVmlld1RlbXBsYXRlKSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IHZhbHVlO1xuICAgICAgICAgICAgdmFsdWUgPSAoKSA9PiB0ZW1wbGF0ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHZhbHVlID0gbmV3IEhUTUxCaW5kaW5nRGlyZWN0aXZlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUYXJnZXRlZEhUTUxEaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gbGFzdEF0dHJpYnV0ZU5hbWVSZWdleC5leGVjKGN1cnJlbnRTdHJpbmcpO1xuICAgICAgICAgICAgaWYgKG1hdGNoICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUudGFyZ2V0TmFtZSA9IG1hdGNoWzJdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEhUTUxEaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIC8vIFNpbmNlIG5vdCBhbGwgdmFsdWVzIGFyZSBkaXJlY3RpdmVzLCB3ZSBjYW4ndCB1c2UgaVxuICAgICAgICAgICAgLy8gYXMgdGhlIGluZGV4IGZvciB0aGUgcGxhY2Vob2xkZXIuIEluc3RlYWQsIHdlIG5lZWQgdG9cbiAgICAgICAgICAgIC8vIHVzZSBkaXJlY3RpdmVzLmxlbmd0aCB0byBnZXQgdGhlIG5leHQgaW5kZXguXG4gICAgICAgICAgICBodG1sICs9IHZhbHVlLmNyZWF0ZVBsYWNlaG9sZGVyKGRpcmVjdGl2ZXMubGVuZ3RoKTtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXMucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBodG1sICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGh0bWwgKz0gc3RyaW5nc1tzdHJpbmdzLmxlbmd0aCAtIDFdO1xuICAgIHJldHVybiBuZXcgVmlld1RlbXBsYXRlKGh0bWwsIGRpcmVjdGl2ZXMpO1xufVxuIiwiLy8gQSBzaW5nbGV0b24gUmFuZ2UgaW5zdGFuY2UgdXNlZCB0byBlZmZpY2llbnRseSByZW1vdmUgcmFuZ2VzIG9mIERPTSBub2Rlcy5cbi8vIFNlZSB0aGUgaW1wbGVtZW50YXRpb24gb2YgSFRNTFZpZXcgYmVsb3cgZm9yIGZ1cnRoZXIgZGV0YWlscy5cbmNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbi8qKlxuICogVGhlIHN0YW5kYXJkIFZpZXcgaW1wbGVtZW50YXRpb24sIHdoaWNoIGFsc28gaW1wbGVtZW50cyBFbGVtZW50VmlldyBhbmQgU3ludGhldGljVmlldy5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNsYXNzIEhUTUxWaWV3IHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RzIGFuIGluc3RhbmNlIG9mIEhUTUxWaWV3LlxuICAgICAqIEBwYXJhbSBmcmFnbWVudCAtIFRoZSBodG1sIGZyYWdtZW50IHRoYXQgY29udGFpbnMgdGhlIG5vZGVzIGZvciB0aGlzIHZpZXcuXG4gICAgICogQHBhcmFtIGJlaGF2aW9ycyAtIFRoZSBiZWhhdmlvcnMgdG8gYmUgYXBwbGllZCB0byB0aGlzIHZpZXcuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZnJhZ21lbnQsIGJlaGF2aW9ycykge1xuICAgICAgICB0aGlzLmZyYWdtZW50ID0gZnJhZ21lbnQ7XG4gICAgICAgIHRoaXMuYmVoYXZpb3JzID0gYmVoYXZpb3JzO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGRhdGEgdGhhdCB0aGUgdmlldyBpcyBib3VuZCB0by5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc291cmNlID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBleGVjdXRpb24gY29udGV4dCB0aGUgdmlldyBpcyBydW5uaW5nIHdpdGhpbi5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY29udGV4dCA9IG51bGw7XG4gICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IGZyYWdtZW50LmZpcnN0Q2hpbGQ7XG4gICAgICAgIHRoaXMubGFzdENoaWxkID0gZnJhZ21lbnQubGFzdENoaWxkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBcHBlbmRzIHRoZSB2aWV3J3MgRE9NIG5vZGVzIHRvIHRoZSByZWZlcmVuY2VkIG5vZGUuXG4gICAgICogQHBhcmFtIG5vZGUgLSBUaGUgcGFyZW50IG5vZGUgdG8gYXBwZW5kIHRoZSB2aWV3J3MgRE9NIG5vZGVzIHRvLlxuICAgICAqL1xuICAgIGFwcGVuZFRvKG5vZGUpIHtcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZCh0aGlzLmZyYWdtZW50KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW5zZXJ0cyB0aGUgdmlldydzIERPTSBub2RlcyBiZWZvcmUgdGhlIHJlZmVyZW5jZWQgbm9kZS5cbiAgICAgKiBAcGFyYW0gbm9kZSAtIFRoZSBub2RlIHRvIGluc2VydCB0aGUgdmlldydzIERPTSBiZWZvcmUuXG4gICAgICovXG4gICAgaW5zZXJ0QmVmb3JlKG5vZGUpIHtcbiAgICAgICAgaWYgKHRoaXMuZnJhZ21lbnQuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgICAgICBub2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZnJhZ21lbnQsIG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50Tm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIGNvbnN0IGVuZCA9IHRoaXMubGFzdENoaWxkO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICBsZXQgbmV4dDtcbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50ICE9PSBlbmQpIHtcbiAgICAgICAgICAgICAgICBuZXh0ID0gY3VycmVudC5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShjdXJyZW50LCBub2RlKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVuZCwgbm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgdmlldydzIERPTSBub2Rlcy5cbiAgICAgKiBUaGUgbm9kZXMgYXJlIG5vdCBkaXNwb3NlZCBhbmQgdGhlIHZpZXcgY2FuIGxhdGVyIGJlIHJlLWluc2VydGVkLlxuICAgICAqL1xuICAgIHJlbW92ZSgpIHtcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSB0aGlzLmZyYWdtZW50O1xuICAgICAgICBjb25zdCBlbmQgPSB0aGlzLmxhc3RDaGlsZDtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmZpcnN0Q2hpbGQ7XG4gICAgICAgIGxldCBuZXh0O1xuICAgICAgICB3aGlsZSAoY3VycmVudCAhPT0gZW5kKSB7XG4gICAgICAgICAgICBuZXh0ID0gY3VycmVudC5uZXh0U2libGluZztcbiAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGN1cnJlbnQpO1xuICAgICAgICAgICAgY3VycmVudCA9IG5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZW5kKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgdmlldyBhbmQgdW5iaW5kcyBpdHMgYmVoYXZpb3JzLCBkaXNwb3Npbmcgb2YgRE9NIG5vZGVzIGFmdGVyd2FyZC5cbiAgICAgKiBPbmNlIGEgdmlldyBoYXMgYmVlbiBkaXNwb3NlZCwgaXQgY2Fubm90IGJlIGluc2VydGVkIG9yIGJvdW5kIGFnYWluLlxuICAgICAqL1xuICAgIGRpc3Bvc2UoKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuZmlyc3RDaGlsZC5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCBlbmQgPSB0aGlzLmxhc3RDaGlsZDtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmZpcnN0Q2hpbGQ7XG4gICAgICAgIGxldCBuZXh0O1xuICAgICAgICB3aGlsZSAoY3VycmVudCAhPT0gZW5kKSB7XG4gICAgICAgICAgICBuZXh0ID0gY3VycmVudC5uZXh0U2libGluZztcbiAgICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChjdXJyZW50KTtcbiAgICAgICAgICAgIGN1cnJlbnQgPSBuZXh0O1xuICAgICAgICB9XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChlbmQpO1xuICAgICAgICBjb25zdCBiZWhhdmlvcnMgPSB0aGlzLmJlaGF2aW9ycztcbiAgICAgICAgY29uc3Qgb2xkU291cmNlID0gdGhpcy5zb3VyY2U7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBpaSA9IGJlaGF2aW9ycy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICAgICAgICBiZWhhdmlvcnNbaV0udW5iaW5kKG9sZFNvdXJjZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQmluZHMgYSB2aWV3J3MgYmVoYXZpb3JzIHRvIGl0cyBiaW5kaW5nIHNvdXJjZS5cbiAgICAgKiBAcGFyYW0gc291cmNlIC0gVGhlIGJpbmRpbmcgc291cmNlIGZvciB0aGUgdmlldydzIGJpbmRpbmcgYmVoYXZpb3JzLlxuICAgICAqIEBwYXJhbSBjb250ZXh0IC0gVGhlIGV4ZWN1dGlvbiBjb250ZXh0IHRvIHJ1biB0aGUgYmVoYXZpb3JzIHdpdGhpbi5cbiAgICAgKi9cbiAgICBiaW5kKHNvdXJjZSwgY29udGV4dCkge1xuICAgICAgICBjb25zdCBiZWhhdmlvcnMgPSB0aGlzLmJlaGF2aW9ycztcbiAgICAgICAgaWYgKHRoaXMuc291cmNlID09PSBzb3VyY2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnNvdXJjZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3Qgb2xkU291cmNlID0gdGhpcy5zb3VyY2U7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgaWkgPSBiZWhhdmlvcnMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSBiZWhhdmlvcnNbaV07XG4gICAgICAgICAgICAgICAgY3VycmVudC51bmJpbmQob2xkU291cmNlKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50LmJpbmQoc291cmNlLCBjb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBpaSA9IGJlaGF2aW9ycy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICAgICAgICAgICAgYmVoYXZpb3JzW2ldLmJpbmQoc291cmNlLCBjb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBVbmJpbmRzIGEgdmlldydzIGJlaGF2aW9ycyBmcm9tIGl0cyBiaW5kaW5nIHNvdXJjZS5cbiAgICAgKi9cbiAgICB1bmJpbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLnNvdXJjZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJlaGF2aW9ycyA9IHRoaXMuYmVoYXZpb3JzO1xuICAgICAgICBjb25zdCBvbGRTb3VyY2UgPSB0aGlzLnNvdXJjZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGlpID0gYmVoYXZpb3JzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICAgICAgICAgIGJlaGF2aW9yc1tpXS51bmJpbmQob2xkU291cmNlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNvdXJjZSA9IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVmZmljaWVudGx5IGRpc3Bvc2VzIG9mIGEgY29udGlndW91cyByYW5nZSBvZiBzeW50aGV0aWMgdmlldyBpbnN0YW5jZXMuXG4gICAgICogQHBhcmFtIHZpZXdzIC0gQSBjb250aWd1b3VzIHJhbmdlIG9mIHZpZXdzIHRvIGJlIGRpc3Bvc2VkLlxuICAgICAqL1xuICAgIHN0YXRpYyBkaXNwb3NlQ29udGlndW91c0JhdGNoKHZpZXdzKSB7XG4gICAgICAgIGlmICh2aWV3cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByYW5nZS5zZXRTdGFydEJlZm9yZSh2aWV3c1swXS5maXJzdENoaWxkKTtcbiAgICAgICAgcmFuZ2Uuc2V0RW5kQWZ0ZXIodmlld3Nbdmlld3MubGVuZ3RoIC0gMV0ubGFzdENoaWxkKTtcbiAgICAgICAgcmFuZ2UuZGVsZXRlQ29udGVudHMoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGlpID0gdmlld3MubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgICAgICAgICAgY29uc3QgdmlldyA9IHZpZXdzW2ldO1xuICAgICAgICAgICAgY29uc3QgYmVoYXZpb3JzID0gdmlldy5iZWhhdmlvcnM7XG4gICAgICAgICAgICBjb25zdCBvbGRTb3VyY2UgPSB2aWV3LnNvdXJjZTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwLCBqaiA9IGJlaGF2aW9ycy5sZW5ndGg7IGogPCBqajsgKytqKSB7XG4gICAgICAgICAgICAgICAgYmVoYXZpb3JzW2pdLnVuYmluZChvbGRTb3VyY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRm9ybUFzc29jaWF0ZWQgfSBmcm9tIFwiLi4vZm9ybS1hc3NvY2lhdGVkL2Zvcm0tYXNzb2NpYXRlZC5qc1wiO1xuaW1wb3J0IHsgRm91bmRhdGlvbkVsZW1lbnQgfSBmcm9tIFwiLi4vZm91bmRhdGlvbi1lbGVtZW50L2ZvdW5kYXRpb24tZWxlbWVudC5qc1wiO1xuY2xhc3MgX0J1dHRvbiBleHRlbmRzIEZvdW5kYXRpb25FbGVtZW50IHtcbn1cbi8qKlxuICogQSBmb3JtLWFzc29jaWF0ZWQgYmFzZSBjbGFzcyBmb3IgdGhlIHtAbGluayBAbWljcm9zb2Z0L2Zhc3QtZm91bmRhdGlvbiMoQnV0dG9uOmNsYXNzKX0gY29tcG9uZW50LlxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgY2xhc3MgRm9ybUFzc29jaWF0ZWRCdXR0b24gZXh0ZW5kcyBGb3JtQXNzb2NpYXRlZChfQnV0dG9uKSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMucHJveHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgX19kZWNvcmF0ZSB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgYXR0ciwgb2JzZXJ2YWJsZSB9IGZyb20gXCJAbWljcm9zb2Z0L2Zhc3QtZWxlbWVudFwiO1xuaW1wb3J0IHsgQVJJQUdsb2JhbFN0YXRlc0FuZFByb3BlcnRpZXMsIFN0YXJ0RW5kLCB9IGZyb20gXCIuLi9wYXR0ZXJucy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgYXBwbHlNaXhpbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FwcGx5LW1peGlucy5qc1wiO1xuaW1wb3J0IHsgRm9ybUFzc29jaWF0ZWRCdXR0b24gfSBmcm9tIFwiLi9idXR0b24uZm9ybS1hc3NvY2lhdGVkLmpzXCI7XG4vKipcbiAqIEEgQnV0dG9uIEN1c3RvbSBIVE1MIEVsZW1lbnQuXG4gKiBCYXNlZCBsYXJnZWx5IG9uIHRoZSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9FbGVtZW50L2J1dHRvbiB8IDxidXR0b24+IGVsZW1lbnQgfS5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBGb3JtQXNzb2NpYXRlZEJ1dHRvbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcmV2ZW50IGV2ZW50cyB0byBwcm9wYWdhdGUgaWYgZGlzYWJsZWQgYW5kIGhhcyBubyBzbG90dGVkIGNvbnRlbnQgd3JhcHBlZCBpbiBIVE1MIGVsZW1lbnRzXG4gICAgICAgICAqIEBpbnRlcm5hbFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5oYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCAmJiAoKF9hID0gdGhpcy5kZWZhdWx0U2xvdHRlZENvbnRlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5sZW5ndGgpIDw9IDEpIHtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogU3VibWl0cyB0aGUgcGFyZW50IGZvcm1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWlzc2lvbiA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5mb3JtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYXR0YWNoZWQgPSB0aGlzLnByb3h5LmlzQ29ubmVjdGVkO1xuICAgICAgICAgICAgaWYgKCFhdHRhY2hlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNoUHJveHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEJyb3dzZXIgc3VwcG9ydCBmb3IgcmVxdWVzdFN1Ym1pdCBpcyBub3QgY29tcHJlaGVuc2l2ZVxuICAgICAgICAgICAgLy8gc28gY2xpY2sgdGhlIHByb3h5IGlmIGl0IGlzbid0IHN1cHBvcnRlZFxuICAgICAgICAgICAgdHlwZW9mIHRoaXMuZm9ybS5yZXF1ZXN0U3VibWl0ID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgICAgICA/IHRoaXMuZm9ybS5yZXF1ZXN0U3VibWl0KHRoaXMucHJveHkpXG4gICAgICAgICAgICAgICAgOiB0aGlzLnByb3h5LmNsaWNrKCk7XG4gICAgICAgICAgICBpZiAoIWF0dGFjaGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXRhY2hQcm94eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVzZXRzIHRoZSBwYXJlbnQgZm9ybVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5oYW5kbGVGb3JtUmVzZXQgPSAoKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAoX2EgPSB0aGlzLmZvcm0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZXNldCgpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogT3ZlcnJpZGVzIHRoZSBmb2N1cyBjYWxsIGZvciB3aGVyZSBkZWxlZ2F0ZXNGb2N1cyBpcyB1bnN1cHBvcnRlZC5cbiAgICAgICAgICogVGhpcyBjaGVjayB3b3JrcyBmb3IgQ2hyb21lLCBFZGdlIENocm9taXVtLCBGaXJlRm94LCBhbmQgU2FmYXJpXG4gICAgICAgICAqIFJlbGV2YW50IFBSIG9uIHRoZSBGaXJlZm94IGJyb3dzZXI6IGh0dHBzOi8vcGhhYnJpY2F0b3Iuc2VydmljZXMubW96aWxsYS5jb20vRDEyMzg1OFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5oYW5kbGVVbnN1cHBvcnRlZERlbGVnYXRlc0ZvY3VzID0gKCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgLy8gQ2hlY2sgdG8gc2VlIGlmIGRlbGVnYXRlc0ZvY3VzIGlzIHN1cHBvcnRlZFxuICAgICAgICAgICAgaWYgKHdpbmRvdy5TaGFkb3dSb290ICYmXG4gICAgICAgICAgICAgICAgIXdpbmRvdy5TaGFkb3dSb290LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eShcImRlbGVnYXRlc0ZvY3VzXCIpICYmICgoX2EgPSB0aGlzLiRmYXN0Q29udHJvbGxlci5kZWZpbml0aW9uLnNoYWRvd09wdGlvbnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5kZWxlZ2F0ZXNGb2N1cykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2wuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICBmb3JtYWN0aW9uQ2hhbmdlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJveHkgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnByb3h5LmZvcm1BY3Rpb24gPSB0aGlzLmZvcm1hY3Rpb247XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9ybWVuY3R5cGVDaGFuZ2VkKCkge1xuICAgICAgICBpZiAodGhpcy5wcm94eSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMucHJveHkuZm9ybUVuY3R5cGUgPSB0aGlzLmZvcm1lbmN0eXBlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvcm1tZXRob2RDaGFuZ2VkKCkge1xuICAgICAgICBpZiAodGhpcy5wcm94eSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMucHJveHkuZm9ybU1ldGhvZCA9IHRoaXMuZm9ybW1ldGhvZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3Jtbm92YWxpZGF0ZUNoYW5nZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3h5IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5wcm94eS5mb3JtTm9WYWxpZGF0ZSA9IHRoaXMuZm9ybW5vdmFsaWRhdGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9ybXRhcmdldENoYW5nZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3h5IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5wcm94eS5mb3JtVGFyZ2V0ID0gdGhpcy5mb3JtdGFyZ2V0O1xuICAgICAgICB9XG4gICAgfVxuICAgIHR5cGVDaGFuZ2VkKHByZXZpb3VzLCBuZXh0KSB7XG4gICAgICAgIGlmICh0aGlzLnByb3h5IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5wcm94eS50eXBlID0gdGhpcy50eXBlO1xuICAgICAgICB9XG4gICAgICAgIG5leHQgPT09IFwic3VibWl0XCIgJiYgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVTdWJtaXNzaW9uKTtcbiAgICAgICAgcHJldmlvdXMgPT09IFwic3VibWl0XCIgJiYgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVTdWJtaXNzaW9uKTtcbiAgICAgICAgbmV4dCA9PT0gXCJyZXNldFwiICYmIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlRm9ybVJlc2V0KTtcbiAgICAgICAgcHJldmlvdXMgPT09IFwicmVzZXRcIiAmJiB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZUZvcm1SZXNldCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICAgIHRoaXMucHJveHkuc2V0QXR0cmlidXRlKFwidHlwZVwiLCB0aGlzLnR5cGUpO1xuICAgICAgICB0aGlzLmhhbmRsZVVuc3VwcG9ydGVkRGVsZWdhdGVzRm9jdXMoKTtcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBBcnJheS5mcm9tKChfYSA9IHRoaXMuY29udHJvbCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNoaWxkcmVuKTtcbiAgICAgICAgaWYgKGVsZW1lbnRzKSB7XG4gICAgICAgICAgICBlbGVtZW50cy5mb3JFYWNoKChzcGFuKSA9PiB7XG4gICAgICAgICAgICAgICAgc3Bhbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVDbGljayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgICBjb25zdCBlbGVtZW50cyA9IEFycmF5LmZyb20oKF9hID0gdGhpcy5jb250cm9sKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2hpbGRyZW4pO1xuICAgICAgICBpZiAoZWxlbWVudHMpIHtcbiAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2goKHNwYW4pID0+IHtcbiAgICAgICAgICAgICAgICBzcGFuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZUNsaWNrKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuX19kZWNvcmF0ZShbXG4gICAgYXR0cih7IG1vZGU6IFwiYm9vbGVhblwiIH0pXG5dLCBCdXR0b24ucHJvdG90eXBlLCBcImF1dG9mb2N1c1wiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgYXR0cih7IGF0dHJpYnV0ZTogXCJmb3JtXCIgfSlcbl0sIEJ1dHRvbi5wcm90b3R5cGUsIFwiZm9ybUlkXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBhdHRyXG5dLCBCdXR0b24ucHJvdG90eXBlLCBcImZvcm1hY3Rpb25cIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGF0dHJcbl0sIEJ1dHRvbi5wcm90b3R5cGUsIFwiZm9ybWVuY3R5cGVcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGF0dHJcbl0sIEJ1dHRvbi5wcm90b3R5cGUsIFwiZm9ybW1ldGhvZFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgYXR0cih7IG1vZGU6IFwiYm9vbGVhblwiIH0pXG5dLCBCdXR0b24ucHJvdG90eXBlLCBcImZvcm1ub3ZhbGlkYXRlXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBhdHRyXG5dLCBCdXR0b24ucHJvdG90eXBlLCBcImZvcm10YXJnZXRcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGF0dHJcbl0sIEJ1dHRvbi5wcm90b3R5cGUsIFwidHlwZVwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgb2JzZXJ2YWJsZVxuXSwgQnV0dG9uLnByb3RvdHlwZSwgXCJkZWZhdWx0U2xvdHRlZENvbnRlbnRcIiwgdm9pZCAwKTtcbi8qKlxuICogSW5jbHVkZXMgQVJJQSBzdGF0ZXMgYW5kIHByb3BlcnRpZXMgcmVsYXRpbmcgdG8gdGhlIEFSSUEgYnV0dG9uIHJvbGVcbiAqXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjbGFzcyBEZWxlZ2F0ZXNBUklBQnV0dG9uIHtcbn1cbl9fZGVjb3JhdGUoW1xuICAgIGF0dHIoeyBhdHRyaWJ1dGU6IFwiYXJpYS1leHBhbmRlZFwiIH0pXG5dLCBEZWxlZ2F0ZXNBUklBQnV0dG9uLnByb3RvdHlwZSwgXCJhcmlhRXhwYW5kZWRcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGF0dHIoeyBhdHRyaWJ1dGU6IFwiYXJpYS1wcmVzc2VkXCIgfSlcbl0sIERlbGVnYXRlc0FSSUFCdXR0b24ucHJvdG90eXBlLCBcImFyaWFQcmVzc2VkXCIsIHZvaWQgMCk7XG5hcHBseU1peGlucyhEZWxlZ2F0ZXNBUklBQnV0dG9uLCBBUklBR2xvYmFsU3RhdGVzQW5kUHJvcGVydGllcyk7XG5hcHBseU1peGlucyhCdXR0b24sIFN0YXJ0RW5kLCBEZWxlZ2F0ZXNBUklBQnV0dG9uKTtcbiIsImltcG9ydCB7IGh0bWwsIHJlZiwgc2xvdHRlZCB9IGZyb20gXCJAbWljcm9zb2Z0L2Zhc3QtZWxlbWVudFwiO1xuaW1wb3J0IHsgZW5kU2xvdFRlbXBsYXRlLCBzdGFydFNsb3RUZW1wbGF0ZSB9IGZyb20gXCIuLi9wYXR0ZXJucy9zdGFydC1lbmQuanNcIjtcbi8qKlxuICogVGhlIHRlbXBsYXRlIGZvciB0aGUge0BsaW5rIEBtaWNyb3NvZnQvZmFzdC1mb3VuZGF0aW9uIyhCdXR0b246Y2xhc3MpfSBjb21wb25lbnQuXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBidXR0b25UZW1wbGF0ZSA9IChjb250ZXh0LCBkZWZpbml0aW9uKSA9PiBodG1sIGBcbiAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzPVwiY29udHJvbFwiXG4gICAgICAgIHBhcnQ9XCJjb250cm9sXCJcbiAgICAgICAgP2F1dG9mb2N1cz1cIiR7eCA9PiB4LmF1dG9mb2N1c31cIlxuICAgICAgICA/ZGlzYWJsZWQ9XCIke3ggPT4geC5kaXNhYmxlZH1cIlxuICAgICAgICBmb3JtPVwiJHt4ID0+IHguZm9ybUlkfVwiXG4gICAgICAgIGZvcm1hY3Rpb249XCIke3ggPT4geC5mb3JtYWN0aW9ufVwiXG4gICAgICAgIGZvcm1lbmN0eXBlPVwiJHt4ID0+IHguZm9ybWVuY3R5cGV9XCJcbiAgICAgICAgZm9ybW1ldGhvZD1cIiR7eCA9PiB4LmZvcm1tZXRob2R9XCJcbiAgICAgICAgZm9ybW5vdmFsaWRhdGU9XCIke3ggPT4geC5mb3Jtbm92YWxpZGF0ZX1cIlxuICAgICAgICBmb3JtdGFyZ2V0PVwiJHt4ID0+IHguZm9ybXRhcmdldH1cIlxuICAgICAgICBuYW1lPVwiJHt4ID0+IHgubmFtZX1cIlxuICAgICAgICB0eXBlPVwiJHt4ID0+IHgudHlwZX1cIlxuICAgICAgICB2YWx1ZT1cIiR7eCA9PiB4LnZhbHVlfVwiXG4gICAgICAgIGFyaWEtYXRvbWljPVwiJHt4ID0+IHguYXJpYUF0b21pY31cIlxuICAgICAgICBhcmlhLWJ1c3k9XCIke3ggPT4geC5hcmlhQnVzeX1cIlxuICAgICAgICBhcmlhLWNvbnRyb2xzPVwiJHt4ID0+IHguYXJpYUNvbnRyb2xzfVwiXG4gICAgICAgIGFyaWEtY3VycmVudD1cIiR7eCA9PiB4LmFyaWFDdXJyZW50fVwiXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCIke3ggPT4geC5hcmlhRGVzY3JpYmVkYnl9XCJcbiAgICAgICAgYXJpYS1kZXRhaWxzPVwiJHt4ID0+IHguYXJpYURldGFpbHN9XCJcbiAgICAgICAgYXJpYS1kaXNhYmxlZD1cIiR7eCA9PiB4LmFyaWFEaXNhYmxlZH1cIlxuICAgICAgICBhcmlhLWVycm9ybWVzc2FnZT1cIiR7eCA9PiB4LmFyaWFFcnJvcm1lc3NhZ2V9XCJcbiAgICAgICAgYXJpYS1leHBhbmRlZD1cIiR7eCA9PiB4LmFyaWFFeHBhbmRlZH1cIlxuICAgICAgICBhcmlhLWZsb3d0bz1cIiR7eCA9PiB4LmFyaWFGbG93dG99XCJcbiAgICAgICAgYXJpYS1oYXNwb3B1cD1cIiR7eCA9PiB4LmFyaWFIYXNwb3B1cH1cIlxuICAgICAgICBhcmlhLWhpZGRlbj1cIiR7eCA9PiB4LmFyaWFIaWRkZW59XCJcbiAgICAgICAgYXJpYS1pbnZhbGlkPVwiJHt4ID0+IHguYXJpYUludmFsaWR9XCJcbiAgICAgICAgYXJpYS1rZXlzaG9ydGN1dHM9XCIke3ggPT4geC5hcmlhS2V5c2hvcnRjdXRzfVwiXG4gICAgICAgIGFyaWEtbGFiZWw9XCIke3ggPT4geC5hcmlhTGFiZWx9XCJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiJHt4ID0+IHguYXJpYUxhYmVsbGVkYnl9XCJcbiAgICAgICAgYXJpYS1saXZlPVwiJHt4ID0+IHguYXJpYUxpdmV9XCJcbiAgICAgICAgYXJpYS1vd25zPVwiJHt4ID0+IHguYXJpYU93bnN9XCJcbiAgICAgICAgYXJpYS1wcmVzc2VkPVwiJHt4ID0+IHguYXJpYVByZXNzZWR9XCJcbiAgICAgICAgYXJpYS1yZWxldmFudD1cIiR7eCA9PiB4LmFyaWFSZWxldmFudH1cIlxuICAgICAgICBhcmlhLXJvbGVkZXNjcmlwdGlvbj1cIiR7eCA9PiB4LmFyaWFSb2xlZGVzY3JpcHRpb259XCJcbiAgICAgICAgJHtyZWYoXCJjb250cm9sXCIpfVxuICAgID5cbiAgICAgICAgJHtzdGFydFNsb3RUZW1wbGF0ZShjb250ZXh0LCBkZWZpbml0aW9uKX1cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjb250ZW50XCIgcGFydD1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxzbG90ICR7c2xvdHRlZChcImRlZmF1bHRTbG90dGVkQ29udGVudFwiKX0+PC9zbG90PlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgICR7ZW5kU2xvdFRlbXBsYXRlKGNvbnRleHQsIGRlZmluaXRpb24pfVxuICAgIDwvYnV0dG9uPlxuYDtcbiIsImltcG9ydCB7IEVsZW1lbnRTdHlsZXMsIH0gZnJvbSBcIkBtaWNyb3NvZnQvZmFzdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBESSwgUmVnaXN0cmF0aW9uIH0gZnJvbSBcIi4uL2RpL2RpLmpzXCI7XG5mdW5jdGlvbiBwcmVzZW50YXRpb25LZXlGcm9tVGFnKHRhZ05hbWUpIHtcbiAgICByZXR1cm4gYCR7dGFnTmFtZS50b0xvd2VyQ2FzZSgpfTpwcmVzZW50YXRpb25gO1xufVxuY29uc3QgcHJlc2VudGF0aW9uUmVnaXN0cnkgPSBuZXcgTWFwKCk7XG4vKipcbiAqIEFuIEFQSSBnYXRld2F5IHRvIGNvbXBvbmVudCBwcmVzZW50YXRpb24gZmVhdHVyZXMuXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBDb21wb25lbnRQcmVzZW50YXRpb24gPSBPYmplY3QuZnJlZXplKHtcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGEgY29tcG9uZW50IHByZXNlbnRhdGlvbiBmb3IgYW4gZWxlbWVudC5cbiAgICAgKiBAcGFyYW0gdGFnTmFtZSAtIFRoZSBlbGVtZW50IG5hbWUgdG8gZGVmaW5lIHRoZSBwcmVzZW50YXRpb24gZm9yLlxuICAgICAqIEBwYXJhbSBwcmVzZW50YXRpb24gLSBUaGUgcHJlc2VudGF0aW9uIHRoYXQgd2lsbCBiZSBhcHBsaWVkIHRvIG1hdGNoaW5nIGVsZW1lbnRzLlxuICAgICAqIEBwYXJhbSBjb250YWluZXIgLSBUaGUgZGVwZW5kZW5jeSBpbmplY3Rpb24gY29udGFpbmVyIHRvIHJlZ2lzdGVyIHRoZSBjb25maWd1cmF0aW9uIGluLlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBkZWZpbmUodGFnTmFtZSwgcHJlc2VudGF0aW9uLCBjb250YWluZXIpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gcHJlc2VudGF0aW9uS2V5RnJvbVRhZyh0YWdOYW1lKTtcbiAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBwcmVzZW50YXRpb25SZWdpc3RyeS5nZXQoa2V5KTtcbiAgICAgICAgaWYgKGV4aXN0aW5nID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHByZXNlbnRhdGlvblJlZ2lzdHJ5LnNldChrZXksIHByZXNlbnRhdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBmYWxzZSBpbmRpY2F0ZXMgdGhhdCB3ZSBoYXZlIG1vcmUgdGhhbiBvbmUgcHJlc2VudGF0aW9uXG4gICAgICAgICAgICAvLyByZWdpc3RlcmVkIGZvciBhIHRhZ05hbWUgYW5kIHdlIG11c3QgcmVzb2x2ZSB0aHJvdWdoIERJXG4gICAgICAgICAgICBwcmVzZW50YXRpb25SZWdpc3RyeS5zZXQoa2V5LCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGFpbmVyLnJlZ2lzdGVyKFJlZ2lzdHJhdGlvbi5pbnN0YW5jZShrZXksIHByZXNlbnRhdGlvbikpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogRmluZHMgYSBjb21wb25lbnQgcHJlc2VudGF0aW9uIGZvciB0aGUgc3BlY2lmaWVkIGVsZW1lbnQgbmFtZSxcbiAgICAgKiBzZWFyY2hpbmcgdGhlIERPTSBoaWVyYXJjaHkgc3RhcnRpbmcgZnJvbSB0aGUgcHJvdmlkZWQgZWxlbWVudC5cbiAgICAgKiBAcGFyYW0gdGFnTmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBlbGVtZW50IHRvIGxvY2F0ZSB0aGUgcHJlc2VudGF0aW9uIGZvci5cbiAgICAgKiBAcGFyYW0gZWxlbWVudCAtIFRoZSBlbGVtZW50IHRvIGJlZ2luIHRoZSBzZWFyY2ggZnJvbS5cbiAgICAgKiBAcmV0dXJucyBUaGUgY29tcG9uZW50IHByZXNlbnRhdGlvbiBvciBudWxsIGlmIG5vbmUgaXMgZm91bmQuXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGZvclRhZyh0YWdOYW1lLCBlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGtleSA9IHByZXNlbnRhdGlvbktleUZyb21UYWcodGFnTmFtZSk7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nID0gcHJlc2VudGF0aW9uUmVnaXN0cnkuZ2V0KGtleSk7XG4gICAgICAgIGlmIChleGlzdGluZyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IERJLmZpbmRSZXNwb25zaWJsZUNvbnRhaW5lcihlbGVtZW50KTtcbiAgICAgICAgICAgIHJldHVybiBjb250YWluZXIuZ2V0KGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nIHx8IG51bGw7XG4gICAgfSxcbn0pO1xuLyoqXG4gKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiBDb21wb25lbnRQcmVzZW50YXRpb24sIHVzZWQgYnkgRm91bmRhdGlvbkVsZW1lbnQuXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjbGFzcyBEZWZhdWx0Q29tcG9uZW50UHJlc2VudGF0aW9uIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIERlZmF1bHRDb21wb25lbnRQcmVzZW50YXRpb24uXG4gICAgICogQHBhcmFtIHRlbXBsYXRlIC0gVGhlIHRlbXBsYXRlIHRvIGFwcGx5IHRvIHRoZSBlbGVtZW50LlxuICAgICAqIEBwYXJhbSBzdHlsZXMgLSBUaGUgc3R5bGVzIHRvIGFwcGx5IHRvIHRoZSBlbGVtZW50LlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZSwgc3R5bGVzKSB7XG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZSB8fCBudWxsO1xuICAgICAgICB0aGlzLnN0eWxlcyA9XG4gICAgICAgICAgICBzdHlsZXMgPT09IHZvaWQgMFxuICAgICAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgICAgIDogQXJyYXkuaXNBcnJheShzdHlsZXMpXG4gICAgICAgICAgICAgICAgICAgID8gRWxlbWVudFN0eWxlcy5jcmVhdGUoc3R5bGVzKVxuICAgICAgICAgICAgICAgICAgICA6IHN0eWxlcyBpbnN0YW5jZW9mIEVsZW1lbnRTdHlsZXNcbiAgICAgICAgICAgICAgICAgICAgICAgID8gc3R5bGVzXG4gICAgICAgICAgICAgICAgICAgICAgICA6IEVsZW1lbnRTdHlsZXMuY3JlYXRlKFtzdHlsZXNdKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQXBwbGllcyB0aGUgcHJlc2VudGF0aW9uIGRldGFpbHMgdG8gdGhlIHNwZWNpZmllZCBlbGVtZW50LlxuICAgICAqIEBwYXJhbSBlbGVtZW50IC0gVGhlIGVsZW1lbnQgdG8gYXBwbHkgdGhlIHByZXNlbnRhdGlvbiBkZXRhaWxzIHRvLlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBhcHBseVRvKGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgY29udHJvbGxlciA9IGVsZW1lbnQuJGZhc3RDb250cm9sbGVyO1xuICAgICAgICBpZiAoY29udHJvbGxlci50ZW1wbGF0ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29udHJvbGxlci50ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbnRyb2xsZXIuc3R5bGVzID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb250cm9sbGVyLnN0eWxlcyA9IHRoaXMuc3R5bGVzO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLyoqXG4gKiBCaWcgdGhhbmtzIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9ma2xldXZlciBhbmQgdGhlIGh0dHBzOi8vZ2l0aHViLmNvbS9hdXJlbGlhL2F1cmVsaWEgcHJvamVjdFxuICogZm9yIHRoZSBidWxrIG9mIHRoaXMgY29kZSBhbmQgbWFueSBvZiB0aGUgYXNzb2NpYXRlZCB0ZXN0cy5cbiAqL1xuaW1wb3J0IHsgZW1wdHlBcnJheSwgRkFTVEVsZW1lbnQgfSBmcm9tIFwiQG1pY3Jvc29mdC9mYXN0LWVsZW1lbnRcIjtcbi8vIFRpbnkgcG9seWZpbGwgZm9yIFR5cGVTY3JpcHQncyBSZWZsZWN0IG1ldGFkYXRhIEFQSS5cbmNvbnN0IG1ldGFkYXRhQnlUYXJnZXQgPSBuZXcgTWFwKCk7XG5pZiAoIShcIm1ldGFkYXRhXCIgaW4gUmVmbGVjdCkpIHtcbiAgICBSZWZsZWN0Lm1ldGFkYXRhID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoa2V5LCB2YWx1ZSwgdGFyZ2V0KTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgdGFyZ2V0KSB7XG4gICAgICAgIGxldCBtZXRhZGF0YSA9IG1ldGFkYXRhQnlUYXJnZXQuZ2V0KHRhcmdldCk7XG4gICAgICAgIGlmIChtZXRhZGF0YSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBtZXRhZGF0YUJ5VGFyZ2V0LnNldCh0YXJnZXQsIChtZXRhZGF0YSA9IG5ldyBNYXAoKSkpO1xuICAgICAgICB9XG4gICAgICAgIG1ldGFkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgICB9O1xuICAgIFJlZmxlY3QuZ2V0T3duTWV0YWRhdGEgPSBmdW5jdGlvbiAoa2V5LCB0YXJnZXQpIHtcbiAgICAgICAgY29uc3QgbWV0YWRhdGEgPSBtZXRhZGF0YUJ5VGFyZ2V0LmdldCh0YXJnZXQpO1xuICAgICAgICBpZiAobWV0YWRhdGEgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgcmV0dXJuIG1ldGFkYXRhLmdldChrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2b2lkIDA7XG4gICAgfTtcbn1cbi8qKlxuICogQSB1dGlsaXR5IGNsYXNzIHVzZWQgdGhhdCBjb25zdHJ1Y3RzIGFuZCByZWdpc3RlcnMgcmVzb2x2ZXJzIGZvciBhIGRlcGVuZGVuY3lcbiAqIGluamVjdGlvbiBjb250YWluZXIuIFN1cHBvcnRzIGEgc3RhbmRhcmQgc2V0IG9mIG9iamVjdCBsaWZldGltZXMuXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjbGFzcyBSZXNvbHZlckJ1aWxkZXIge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbnRhaW5lciAtIFRoZSBjb250YWluZXIgdG8gY3JlYXRlIHJlc29sdmVycyBmb3IuXG4gICAgICogQHBhcmFtIGtleSAtIFRoZSBrZXkgdG8gcmVnaXN0ZXIgcmVzb2x2ZXJzIHVuZGVyLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lciwga2V5KSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHJlc29sdmVyIGZvciBhbiBleGlzdGluZyBvYmplY3QgaW5zdGFuY2UuXG4gICAgICogQHBhcmFtIHZhbHVlIC0gVGhlIGluc3RhbmNlIHRvIHJlc29sdmUuXG4gICAgICogQHJldHVybnMgVGhlIHJlc29sdmVyLlxuICAgICAqL1xuICAgIGluc3RhbmNlKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZ2lzdGVyUmVzb2x2ZXIoMCAvKiBpbnN0YW5jZSAqLywgdmFsdWUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgcmVzb2x2ZXIgdGhhdCBlbmZvcmNlcyBhIHNpbmdsZXRvbiBsaWZldGltZS5cbiAgICAgKiBAcGFyYW0gdmFsdWUgLSBUaGUgdHlwZSB0byBjcmVhdGUgYW5kIGNhY2hlIHRoZSBzaW5nbGV0b24gZm9yLlxuICAgICAqIEByZXR1cm5zIFRoZSByZXNvbHZlci5cbiAgICAgKi9cbiAgICBzaW5nbGV0b24odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVnaXN0ZXJSZXNvbHZlcigxIC8qIHNpbmdsZXRvbiAqLywgdmFsdWUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgcmVzb2x2ZXIgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIGZvciBldmVyeSBkZXBlbmRlbmN5IHJlcXVlc3QuXG4gICAgICogQHBhcmFtIHZhbHVlIC0gVGhlIHR5cGUgdG8gY3JlYXRlIGluc3RhbmNlcyBvZi5cbiAgICAgKiBAcmV0dXJucyAtIFRoZSByZXNvbHZlci5cbiAgICAgKi9cbiAgICB0cmFuc2llbnQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVnaXN0ZXJSZXNvbHZlcigyIC8qIHRyYW5zaWVudCAqLywgdmFsdWUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgcmVzb2x2ZXIgdGhhdCBpbnZva2VzIGEgY2FsbGJhY2sgZnVuY3Rpb24gZm9yIGV2ZXJ5IGRlcGVuZGVuY3kgcmVzb2x1dGlvblxuICAgICAqIHJlcXVlc3QsIGFsbG93aW5nIGN1c3RvbSBsb2dpYyB0byByZXR1cm4gdGhlIGRlcGVuZGVuY3kuXG4gICAgICogQHBhcmFtIHZhbHVlIC0gVGhlIGNhbGxiYWNrIHRvIGNhbGwgZHVyaW5nIHJlc29sdXRpb24uXG4gICAgICogQHJldHVybnMgVGhlIHJlc29sdmVyLlxuICAgICAqL1xuICAgIGNhbGxiYWNrKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZ2lzdGVyUmVzb2x2ZXIoMyAvKiBjYWxsYmFjayAqLywgdmFsdWUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgcmVzb2x2ZXIgdGhhdCBpbnZva2VzIGEgY2FsbGJhY2sgZnVuY3Rpb24gdGhlIGZpcnN0IHRpbWUgdGhhdCBhIGRlcGVuZGVuY3lcbiAgICAgKiByZXNvbHV0aW9uIGlzIHJlcXVlc3RlZC4gVGhlIHJldHVybmVkIHZhbHVlIGlzIHRoZW4gY2FjaGVkIGFuZCBwcm92aWRlZCBmb3IgYWxsXG4gICAgICogc3Vic2VxdWVudCByZXF1ZXN0cy5cbiAgICAgKiBAcGFyYW0gdmFsdWUgLSBUaGUgY2FsbGJhY2sgdG8gY2FsbCBkdXJpbmcgdGhlIGZpcnN0IHJlc29sdXRpb24uXG4gICAgICogQHJldHVybnMgVGhlIHJlc29sdmVyLlxuICAgICAqL1xuICAgIGNhY2hlZENhbGxiYWNrKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZ2lzdGVyUmVzb2x2ZXIoMyAvKiBjYWxsYmFjayAqLywgY2FjaGVDYWxsYmFja1Jlc3VsdCh2YWx1ZSkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBbGlhc2VzIHRoZSBjdXJyZW50IGtleSB0byBhIGRpZmZlcmVudCBrZXkuXG4gICAgICogQHBhcmFtIGRlc3RpbmF0aW9uS2V5IC0gVGhlIGtleSB0byBwb2ludCB0aGUgYWxpYXMgdG8uXG4gICAgICogQHJldHVybnMgVGhlIHJlc29sdmVyLlxuICAgICAqL1xuICAgIGFsaWFzVG8oZGVzdGluYXRpb25LZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVnaXN0ZXJSZXNvbHZlcig1IC8qIGFsaWFzICovLCBkZXN0aW5hdGlvbktleSk7XG4gICAgfVxuICAgIHJlZ2lzdGVyUmVzb2x2ZXIoc3RyYXRlZ3ksIHN0YXRlKSB7XG4gICAgICAgIGNvbnN0IHsgY29udGFpbmVyLCBrZXkgfSA9IHRoaXM7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uICovXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5rZXkgPSAodm9pZCAwKTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lci5yZWdpc3RlclJlc29sdmVyKGtleSwgbmV3IFJlc29sdmVySW1wbChrZXksIHN0cmF0ZWd5LCBzdGF0ZSkpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNsb25lQXJyYXlXaXRoUG9zc2libGVQcm9wcyhzb3VyY2UpIHtcbiAgICBjb25zdCBjbG9uZSA9IHNvdXJjZS5zbGljZSgpO1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgIGNvbnN0IGxlbiA9IGtleXMubGVuZ3RoO1xuICAgIGxldCBrZXk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICBpZiAoIWlzQXJyYXlJbmRleChrZXkpKSB7XG4gICAgICAgICAgICBjbG9uZVtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNsb25lO1xufVxuLyoqXG4gKiBBIHNldCBvZiBkZWZhdWx0IHJlc29sdmVycyB1c2VmdWwgaW4gY29uZmlndXJpbmcgYSBjb250YWluZXIuXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBEZWZhdWx0UmVzb2x2ZXIgPSBPYmplY3QuZnJlZXplKHtcbiAgICAvKipcbiAgICAgKiBEaXNhYmxlcyBhdXRvLXJlZ2lzdHJhdGlvbiBhbmQgdGhyb3dzIGZvciBhbGwgdW4tcmVnaXN0ZXJlZCBkZXBlbmRlbmNpZXMuXG4gICAgICogQHBhcmFtIGtleSAtIFRoZSBrZXkgdG8gY3JlYXRlIHRoZSByZXNvbHZlciBmb3IuXG4gICAgICovXG4gICAgbm9uZShrZXkpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoYCR7a2V5LnRvU3RyaW5nKCl9IG5vdCByZWdpc3RlcmVkLCBkaWQgeW91IGZvcmdldCB0byBhZGQgQHNpbmdsZXRvbigpP2ApO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUHJvdmlkZXMgZGVmYXVsdCBzaW5nbGV0b24gcmVzb2x1dGlvbiBiZWhhdmlvciBkdXJpbmcgYXV0by1yZWdpc3RyYXRpb24uXG4gICAgICogQHBhcmFtIGtleSAtIFRoZSBrZXkgdG8gY3JlYXRlIHRoZSByZXNvbHZlciBmb3IuXG4gICAgICogQHJldHVybnMgVGhlIHJlc29sdmVyLlxuICAgICAqL1xuICAgIHNpbmdsZXRvbihrZXkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZXNvbHZlckltcGwoa2V5LCAxIC8qIHNpbmdsZXRvbiAqLywga2V5KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFByb3ZpZGVzIGRlZmF1bHQgdHJhbnNpZW50IHJlc29sdXRpb24gYmVoYXZpb3IgZHVyaW5nIGF1dG8tcmVnaXN0cmF0aW9uLlxuICAgICAqIEBwYXJhbSBrZXkgLSBUaGUga2V5IHRvIGNyZWF0ZSB0aGUgcmVzb2x2ZXIgZm9yLlxuICAgICAqIEByZXR1cm5zIFRoZSByZXNvbHZlci5cbiAgICAgKi9cbiAgICB0cmFuc2llbnQoa2V5KSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVzb2x2ZXJJbXBsKGtleSwgMiAvKiB0cmFuc2llbnQgKi8sIGtleSk7XG4gICAgfSxcbn0pO1xuLyoqXG4gKiBDb25maWd1cmF0aW9uIGZvciBhIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGNvbnRhaW5lci5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IENvbnRhaW5lckNvbmZpZ3VyYXRpb24gPSBPYmplY3QuZnJlZXplKHtcbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCBjb25maWd1cmF0aW9uIHVzZWQgd2hlbiBjcmVhdGluZyBhIERPTS1kaXNjb25uZWN0ZWQgY29udGFpbmVyLlxuICAgICAqIEByZW1hcmtzXG4gICAgICogVGhlIGRlZmF1bHQgY3JlYXRlcyBhIHJvb3QgY29udGFpbmVyLCB3aXRoIG5vIHBhcmVudCBjb250YWluZXIuIEl0IGRvZXMgbm90IGhhbmRsZVxuICAgICAqIG93bmVyIHJlcXVlc3RzIGFuZCBpdCB1c2VzIHNpbmdsZXRvbiByZXNvbHV0aW9uIGJlaGF2aW9yIGZvciBhdXRvLXJlZ2lzdHJhdGlvbi5cbiAgICAgKi9cbiAgICBkZWZhdWx0OiBPYmplY3QuZnJlZXplKHtcbiAgICAgICAgcGFyZW50TG9jYXRvcjogKCkgPT4gbnVsbCxcbiAgICAgICAgcmVzcG9uc2libGVGb3JPd25lclJlcXVlc3RzOiBmYWxzZSxcbiAgICAgICAgZGVmYXVsdFJlc29sdmVyOiBEZWZhdWx0UmVzb2x2ZXIuc2luZ2xldG9uLFxuICAgIH0pLFxufSk7XG5jb25zdCBkZXBlbmRlbmN5TG9va3VwID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gZ2V0UGFyYW1UeXBlcyhrZXkpIHtcbiAgICByZXR1cm4gKFR5cGUpID0+IHtcbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0T3duTWV0YWRhdGEoa2V5LCBUeXBlKTtcbiAgICB9O1xufVxubGV0IHJvb3RET01Db250YWluZXIgPSBudWxsO1xuLyoqXG4gKiBUaGUgZ2F0ZXdheSB0byBkZXBlbmRlbmN5IGluamVjdGlvbiBBUElzLlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgREkgPSBPYmplY3QuZnJlZXplKHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGRlcGVuZGVuY3kgaW5qZWN0aW9uIGNvbnRhaW5lci5cbiAgICAgKiBAcGFyYW0gY29uZmlnIC0gVGhlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBjb250YWluZXIuXG4gICAgICogQHJldHVybnMgQSBuZXdseSBjcmVhdGVkIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGNvbnRhaW5lci5cbiAgICAgKi9cbiAgICBjcmVhdGVDb250YWluZXIoY29uZmlnKSB7XG4gICAgICAgIHJldHVybiBuZXcgQ29udGFpbmVySW1wbChudWxsLCBPYmplY3QuYXNzaWduKHt9LCBDb250YWluZXJDb25maWd1cmF0aW9uLmRlZmF1bHQsIGNvbmZpZykpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogRmluZHMgdGhlIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGNvbnRhaW5lciByZXNwb25zaWJsZSBmb3IgcHJvdmlkaW5nIGRlcGVuZGVuY2llc1xuICAgICAqIHRvIHRoZSBzcGVjaWZpZWQgbm9kZS5cbiAgICAgKiBAcGFyYW0gbm9kZSAtIFRoZSBub2RlIHRvIGZpbmQgdGhlIHJlc3BvbnNpYmxlIGNvbnRhaW5lciBmb3IuXG4gICAgICogQHJldHVybnMgVGhlIGNvbnRhaW5lciByZXNwb25zaWJsZSBmb3IgcHJvdmlkaW5nIGRlcGVuZGVuY2llcyB0byB0aGUgbm9kZS5cbiAgICAgKiBAcmVtYXJrc1xuICAgICAqIFRoaXMgd2lsbCBiZSB0aGUgc2FtZSBhcyB0aGUgcGFyZW50IGNvbnRhaW5lciBpZiB0aGUgc3BlY2lmaWVkIG5vZGVcbiAgICAgKiBkb2VzIG5vdCBpdHNlbGYgaG9zdCBhIGNvbnRhaW5lciBjb25maWd1cmVkIHdpdGggcmVzcG9uc2libGVGb3JPd25lclJlcXVlc3RzLlxuICAgICAqL1xuICAgIGZpbmRSZXNwb25zaWJsZUNvbnRhaW5lcihub2RlKSB7XG4gICAgICAgIGNvbnN0IG93bmVkID0gbm9kZS4kJGNvbnRhaW5lciQkO1xuICAgICAgICBpZiAob3duZWQgJiYgb3duZWQucmVzcG9uc2libGVGb3JPd25lclJlcXVlc3RzKSB7XG4gICAgICAgICAgICByZXR1cm4gb3duZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIERJLmZpbmRQYXJlbnRDb250YWluZXIobm9kZSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBGaW5kIHRoZSBkZXBlbmRlbmN5IGluamVjdGlvbiBjb250YWluZXIgdXAgdGhlIERPTSB0cmVlIGZyb20gdGhpcyBub2RlLlxuICAgICAqIEBwYXJhbSBub2RlIC0gVGhlIG5vZGUgdG8gZmluZCB0aGUgcGFyZW50IGNvbnRhaW5lciBmb3IuXG4gICAgICogQHJldHVybnMgVGhlIHBhcmVudCBjb250YWluZXIgb2YgdGhpcyBub2RlLlxuICAgICAqIEByZW1hcmtzXG4gICAgICogVGhpcyB3aWxsIGJlIHRoZSBzYW1lIGFzIHRoZSByZXNwb25zaWJsZSBjb250YWluZXIgaWYgdGhlIHNwZWNpZmllZCBub2RlXG4gICAgICogZG9lcyBub3QgaXRzZWxmIGhvc3QgYSBjb250YWluZXIgY29uZmlndXJlZCB3aXRoIHJlc3BvbnNpYmxlRm9yT3duZXJSZXF1ZXN0cy5cbiAgICAgKi9cbiAgICBmaW5kUGFyZW50Q29udGFpbmVyKG5vZGUpIHtcbiAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoRElMb2NhdGVQYXJlbnRFdmVudFR5cGUsIHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICBjb21wb3NlZDogdHJ1ZSxcbiAgICAgICAgICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgICAgICAgICBkZXRhaWw6IHsgY29udGFpbmVyOiB2b2lkIDAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIG5vZGUuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgIHJldHVybiBldmVudC5kZXRhaWwuY29udGFpbmVyIHx8IERJLmdldE9yQ3JlYXRlRE9NQ29udGFpbmVyKCk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgZGVwZW5kZW5jeSBpbmplY3Rpb24gY29udGFpbmVyIGlmIG9uZSBpcyBleHBsaWNpdGx5IG93bmVkIGJ5IHRoZSBzcGVjaWZpZWRcbiAgICAgKiBub2RlLiBJZiBvbmUgaXMgbm90IG93bmVkLCB0aGVuIGEgbmV3IGNvbnRhaW5lciBpcyBjcmVhdGVkIGFuZCBhc3NpZ25lZCB0byB0aGUgbm9kZS5cbiAgICAgKiBAcGFyYW0gbm9kZSAtIFRoZSBub2RlIHRvIGZpbmQgb3IgY3JlYXRlIHRoZSBjb250YWluZXIgZm9yLlxuICAgICAqIEBwYXJhbSBjb25maWcgLSBUaGUgY29uZmlndXJhdGlvbiBmb3IgdGhlIGNvbnRhaW5lciBpZiBvbmUgbmVlZHMgdG8gYmUgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgbG9jYXRlZCBvciBjcmVhdGVkIGNvbnRhaW5lci5cbiAgICAgKiBAcmVtYXJrc1xuICAgICAqIFRoaXMgQVBJIGRvZXMgbm90IHNlYXJjaCBmb3IgYSByZXNwb25zaWJsZSBvciBwYXJlbnQgY29udGFpbmVyLiBJdCBsb29rcyBvbmx5IGZvciBhIGNvbnRhaW5lclxuICAgICAqIGRpcmVjdGx5IGRlZmluZWQgb24gdGhlIHNwZWNpZmllZCBub2RlIGFuZCBjcmVhdGVzIG9uZSBhdCB0aGF0IGxvY2F0aW9uIGlmIG9uZSBkb2VzIG5vdFxuICAgICAqIGFscmVhZHkgZXhpc3QuXG4gICAgICovXG4gICAgZ2V0T3JDcmVhdGVET01Db250YWluZXIobm9kZSwgY29uZmlnKSB7XG4gICAgICAgIGlmICghbm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIChyb290RE9NQ29udGFpbmVyIHx8XG4gICAgICAgICAgICAgICAgKHJvb3RET01Db250YWluZXIgPSBuZXcgQ29udGFpbmVySW1wbChudWxsLCBPYmplY3QuYXNzaWduKHt9LCBDb250YWluZXJDb25maWd1cmF0aW9uLmRlZmF1bHQsIGNvbmZpZywge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRMb2NhdG9yOiAoKSA9PiBudWxsLFxuICAgICAgICAgICAgICAgIH0pKSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAobm9kZS4kJGNvbnRhaW5lciQkIHx8XG4gICAgICAgICAgICBuZXcgQ29udGFpbmVySW1wbChub2RlLCBPYmplY3QuYXNzaWduKHt9LCBDb250YWluZXJDb25maWd1cmF0aW9uLmRlZmF1bHQsIGNvbmZpZywge1xuICAgICAgICAgICAgICAgIHBhcmVudExvY2F0b3I6IERJLmZpbmRQYXJlbnRDb250YWluZXIsXG4gICAgICAgICAgICB9KSkpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgXCJkZXNpZ246cGFyYW10eXBlc1wiIG1ldGFkYXRhIGZvciB0aGUgc3BlY2lmaWVkIHR5cGUuXG4gICAgICogQHBhcmFtIFR5cGUgLSBUaGUgdHlwZSB0byBnZXQgdGhlIG1ldGFkYXRhIGZvci5cbiAgICAgKiBAcmV0dXJucyBUaGUgbWV0YWRhdGEgYXJyYXkgb3IgdW5kZWZpbmVkIGlmIG5vIG1ldGFkYXRhIGlzIGZvdW5kLlxuICAgICAqL1xuICAgIGdldERlc2lnblBhcmFtdHlwZXM6IGdldFBhcmFtVHlwZXMoXCJkZXNpZ246cGFyYW10eXBlc1wiKSxcbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBcImRpOnBhcmFtdHlwZXNcIiBtZXRhZGF0YSBmb3IgdGhlIHNwZWNpZmllZCB0eXBlLlxuICAgICAqIEBwYXJhbSBUeXBlIC0gVGhlIHR5cGUgdG8gZ2V0IHRoZSBtZXRhZGF0YSBmb3IuXG4gICAgICogQHJldHVybnMgVGhlIG1ldGFkYXRhIGFycmF5IG9yIHVuZGVmaW5lZCBpZiBubyBtZXRhZGF0YSBpcyBmb3VuZC5cbiAgICAgKi9cbiAgICBnZXRBbm5vdGF0aW9uUGFyYW10eXBlczogZ2V0UGFyYW1UeXBlcyhcImRpOnBhcmFtdHlwZXNcIiksXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gVHlwZSAtIEdldHMgdGhlIFwiZGk6cGFyYW10eXBlc1wiIG1ldGFkYXRhIGZvciB0aGUgc3BlY2lmaWVkIHR5cGUuIElmIG5vbmUgaXMgZm91bmQsXG4gICAgICogYW4gZW1wdHkgbWV0YWRhdGEgYXJyYXkgaXMgY3JlYXRlZCBhbmQgYWRkZWQuXG4gICAgICogQHJldHVybnMgVGhlIG1ldGFkYXRhIGFycmF5LlxuICAgICAqL1xuICAgIGdldE9yQ3JlYXRlQW5ub3RhdGlvblBhcmFtVHlwZXMoVHlwZSkge1xuICAgICAgICBsZXQgYW5ub3RhdGlvblBhcmFtdHlwZXMgPSB0aGlzLmdldEFubm90YXRpb25QYXJhbXR5cGVzKFR5cGUpO1xuICAgICAgICBpZiAoYW5ub3RhdGlvblBhcmFtdHlwZXMgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShcImRpOnBhcmFtdHlwZXNcIiwgKGFubm90YXRpb25QYXJhbXR5cGVzID0gW10pLCBUeXBlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYW5ub3RhdGlvblBhcmFtdHlwZXM7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBkZXBlbmRlbmN5IGtleXMgcmVwcmVzZW50aW5nIHdoYXQgaXMgbmVlZGVkIHRvIGluc3RhbnRpYXRlIHRoZSBzcGVjaWZpZWQgdHlwZS5cbiAgICAgKiBAcGFyYW0gVHlwZSAtIFRoZSB0eXBlIHRvIGdldCB0aGUgZGVwZW5kZW5jaWVzIGZvci5cbiAgICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiBkZXBlbmRlbmN5IGtleXMuXG4gICAgICovXG4gICAgZ2V0RGVwZW5kZW5jaWVzKFR5cGUpIHtcbiAgICAgICAgLy8gTm90ZTogRXZlcnkgZGV0YWlsIG9mIHRoaXMgZ2V0RGVwZW5kZW5jaWVzIG1ldGhvZCBpcyBwcmV0dHkgZGVsaWJlcmF0ZSBhdCB0aGUgbW9tZW50LCBhbmQgcHJvYmFibHkgbm90IHlldCAxMDAlIHRlc3RlZCBmcm9tIGV2ZXJ5IHBvc3NpYmxlIGFuZ2xlLFxuICAgICAgICAvLyBzbyBiZSBjYXJlZnVsIHdpdGggbWFraW5nIGNoYW5nZXMgaGVyZSBhcyBpdCBjYW4gaGF2ZSBhIGh1Z2UgaW1wYWN0IG9uIGNvbXBsZXggZW5kIHVzZXIgYXBwcy5cbiAgICAgICAgLy8gUHJlZmVyYWJseSwgb25seSBtYWtlIGNoYW5nZXMgdG8gdGhlIGRlcGVuZGVuY3kgcmVzb2x1dGlvbiBwcm9jZXNzIHZpYSBhIFJGQy5cbiAgICAgICAgbGV0IGRlcGVuZGVuY2llcyA9IGRlcGVuZGVuY3lMb29rdXAuZ2V0KFR5cGUpO1xuICAgICAgICBpZiAoZGVwZW5kZW5jaWVzID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIC8vIFR5cGUubGVuZ3RoIGlzIHRoZSBudW1iZXIgb2YgY29uc3RydWN0b3IgcGFyYW1ldGVycy4gSWYgdGhpcyBpcyAwLCBpdCBjb3VsZCBtZWFuIHRoZSBjbGFzcyBoYXMgYW4gZW1wdHkgY29uc3RydWN0b3JcbiAgICAgICAgICAgIC8vIGJ1dCBpdCBjb3VsZCBhbHNvIG1lYW4gdGhlIGNsYXNzIGhhcyBubyBjb25zdHJ1Y3RvciBhdCBhbGwgKGluIHdoaWNoIGNhc2UgaXQgaW5oZXJpdHMgdGhlIGNvbnN0cnVjdG9yIGZyb20gdGhlIHByb3RvdHlwZSkuXG4gICAgICAgICAgICAvLyBOb24temVybyBjb25zdHJ1Y3RvciBsZW5ndGggKyBubyBwYXJhbXR5cGVzIG1lYW5zIGVtaXREZWNvcmF0b3JNZXRhZGF0YSBpcyBvZmYsIG9yIHRoZSBjbGFzcyBoYXMgbm8gZGVjb3JhdG9yLlxuICAgICAgICAgICAgLy8gV2UncmUgbm90IGRvaW5nIGFueXRoaW5nIHdpdGggdGhlIGFib3ZlIHJpZ2h0IG5vdywgYnV0IGl0J3MgZ29vZCB0byBrZWVwIGluIG1pbmQgZm9yIGFueSBmdXR1cmUgaXNzdWVzLlxuICAgICAgICAgICAgY29uc3QgaW5qZWN0ID0gVHlwZS5pbmplY3Q7XG4gICAgICAgICAgICBpZiAoaW5qZWN0ID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICAvLyBkZXNpZ246cGFyYW10eXBlcyBpcyBzZXQgYnkgdHNjIHdoZW4gZW1pdERlY29yYXRvck1ldGFkYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgICAgICAgICAgY29uc3QgZGVzaWduUGFyYW10eXBlcyA9IERJLmdldERlc2lnblBhcmFtdHlwZXMoVHlwZSk7XG4gICAgICAgICAgICAgICAgLy8gZGk6cGFyYW10eXBlcyBpcyBzZXQgYnkgdGhlIHBhcmFtZXRlciBkZWNvcmF0b3IgZnJvbSBESS5jcmVhdGVJbnRlcmZhY2Ugb3IgYnkgQGluamVjdFxuICAgICAgICAgICAgICAgIGNvbnN0IGFubm90YXRpb25QYXJhbXR5cGVzID0gREkuZ2V0QW5ub3RhdGlvblBhcmFtdHlwZXMoVHlwZSk7XG4gICAgICAgICAgICAgICAgaWYgKGRlc2lnblBhcmFtdHlwZXMgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYW5ub3RhdGlvblBhcmFtdHlwZXMgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT25seSBnbyB1cCB0aGUgcHJvdG90eXBlIGlmIG5laXRoZXIgc3RhdGljIGluamVjdCBub3IgYW55IG9mIHRoZSBwYXJhbXR5cGVzIGlzIGRlZmluZWQsIGFzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGVyZSBpcyBubyBzb3VuZCB3YXkgdG8gbWVyZ2UgYSB0eXBlJ3MgZGVwcyB3aXRoIGl0cyBwcm90b3R5cGUncyBkZXBzXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihUeXBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgUHJvdG8gPT09IFwiZnVuY3Rpb25cIiAmJiBQcm90byAhPT0gRnVuY3Rpb24ucHJvdG90eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVwZW5kZW5jaWVzID0gY2xvbmVBcnJheVdpdGhQb3NzaWJsZVByb3BzKERJLmdldERlcGVuZGVuY2llcyhQcm90bykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVwZW5kZW5jaWVzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBObyBkZXNpZ246cGFyYW10eXBlcyBzbyBqdXN0IHVzZSB0aGUgZGk6cGFyYW10eXBlc1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVwZW5kZW5jaWVzID0gY2xvbmVBcnJheVdpdGhQb3NzaWJsZVByb3BzKGFubm90YXRpb25QYXJhbXR5cGVzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChhbm5vdGF0aW9uUGFyYW10eXBlcyA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE5vIGRpOnBhcmFtdHlwZXMgc28ganVzdCB1c2UgdGhlIGRlc2lnbjpwYXJhbXR5cGVzXG4gICAgICAgICAgICAgICAgICAgIGRlcGVuZGVuY2llcyA9IGNsb25lQXJyYXlXaXRoUG9zc2libGVQcm9wcyhkZXNpZ25QYXJhbXR5cGVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdlJ3ZlIGdvdCBib3RoLCBzbyBtZXJnZSB0aGVtIChpbiBjYXNlIG9mIGNvbmZsaWN0IG9uIHNhbWUgaW5kZXgsIGRpOnBhcmFtdHlwZXMgdGFrZSBwcmVjZWRlbmNlKVxuICAgICAgICAgICAgICAgICAgICBkZXBlbmRlbmNpZXMgPSBjbG9uZUFycmF5V2l0aFBvc3NpYmxlUHJvcHMoZGVzaWduUGFyYW10eXBlcyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsZW4gPSBhbm5vdGF0aW9uUGFyYW10eXBlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhdUFubm90YXRpb25QYXJhbXR5cGU7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1QW5ub3RhdGlvblBhcmFtdHlwZSA9IGFubm90YXRpb25QYXJhbXR5cGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF1QW5ub3RhdGlvblBhcmFtdHlwZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVwZW5kZW5jaWVzW2ldID0gYXVBbm5vdGF0aW9uUGFyYW10eXBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhhbm5vdGF0aW9uUGFyYW10eXBlcyk7XG4gICAgICAgICAgICAgICAgICAgIGxlbiA9IGtleXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBsZXQga2V5O1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0FycmF5SW5kZXgoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcGVuZGVuY2llc1trZXldID0gYW5ub3RhdGlvblBhcmFtdHlwZXNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIElnbm9yZSBwYXJhbXR5cGVzIGlmIHdlIGhhdmUgc3RhdGljIGluamVjdFxuICAgICAgICAgICAgICAgIGRlcGVuZGVuY2llcyA9IGNsb25lQXJyYXlXaXRoUG9zc2libGVQcm9wcyhpbmplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVwZW5kZW5jeUxvb2t1cC5zZXQoVHlwZSwgZGVwZW5kZW5jaWVzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVwZW5kZW5jaWVzO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyBhIHByb3BlcnR5IG9uIGEgd2ViIGNvbXBvbmVudCBjbGFzcy4gVGhlIHZhbHVlIG9mIHRoaXMgcHJvcGVydHkgd2lsbFxuICAgICAqIGJlIHJlc29sdmVkIGZyb20gdGhlIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGNvbnRhaW5lciByZXNwb25zaWJsZSBmb3IgdGhlIGVsZW1lbnRcbiAgICAgKiBpbnN0YW5jZSwgYmFzZWQgb24gd2hlcmUgaXQgaXMgY29ubmVjdGVkIGluIHRoZSBET00uXG4gICAgICogQHBhcmFtIHRhcmdldCAtIFRoZSB0YXJnZXQgdG8gZGVmaW5lIHRoZSBwcm9wZXJ0eSBvbi5cbiAgICAgKiBAcGFyYW0gcHJvcGVydHlOYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5IHRvIGRlZmluZS5cbiAgICAgKiBAcGFyYW0ga2V5IC0gVGhlIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGtleS5cbiAgICAgKiBAcGFyYW0gcmVzcGVjdENvbm5lY3Rpb24gLSBJbmRpY2F0ZXMgd2hldGhlciBvciBub3QgdG8gdXBkYXRlIHRoZSBwcm9wZXJ0eSB2YWx1ZSBpZiB0aGVcbiAgICAgKiBob3N0aW5nIGNvbXBvbmVudCBpcyBkaXNjb25uZWN0ZWQgYW5kIHRoZW4gcmUtY29ubmVjdGVkIGF0IGEgZGlmZmVyZW50IGxvY2F0aW9uIGluIHRoZSBET00uXG4gICAgICogQHJlbWFya3NcbiAgICAgKiBUaGUgcmVzcGVjdENvbm5lY3Rpb24gb3B0aW9uIGlzIG9ubHkgYXBwbGljYWJsZSB0byBlbGVtZW50cyB0aGF0IGRlc2NlbmQgZnJvbSBGQVNURWxlbWVudC5cbiAgICAgKi9cbiAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5TmFtZSwga2V5LCByZXNwZWN0Q29ubmVjdGlvbiA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGRpUHJvcGVydHlLZXkgPSBgJGRpXyR7cHJvcGVydHlOYW1lfWA7XG4gICAgICAgIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eU5hbWUsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRoaXNbZGlQcm9wZXJ0eUtleV07XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICA/IERJLmZpbmRSZXNwb25zaWJsZUNvbnRhaW5lcih0aGlzKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBESS5nZXRPckNyZWF0ZURPTUNvbnRhaW5lcigpO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGNvbnRhaW5lci5nZXQoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tkaVByb3BlcnR5S2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcGVjdENvbm5lY3Rpb24gJiYgdGhpcyBpbnN0YW5jZW9mIEZBU1RFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBub3RpZmllciA9IHRoaXMuJGZhc3RDb250cm9sbGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0NvbnRhaW5lciA9IERJLmZpbmRSZXNwb25zaWJsZUNvbnRhaW5lcih0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IG5ld0NvbnRhaW5lci5nZXQoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IHRoaXNbZGlQcm9wZXJ0eUtleV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSBvbGRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2RpUHJvcGVydHlLZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWVyLm5vdGlmeShwcm9wZXJ0eU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RpZmllci5zdWJzY3JpYmUoeyBoYW5kbGVDaGFuZ2UgfSwgXCJpc0Nvbm5lY3RlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBkZXBlbmRlbmN5IGluamVjdGlvbiBrZXkuXG4gICAgICogQHBhcmFtIG5hbWVDb25maWdPckNhbGxiYWNrIC0gQSBmcmllbmRseSBuYW1lIGZvciB0aGUga2V5IG9yIGEgbGFtYmRhIHRoYXQgY29uZmlndXJlcyBhXG4gICAgICogZGVmYXVsdCByZXNvbHV0aW9uIGZvciB0aGUgZGVwZW5kZW5jeS5cbiAgICAgKiBAcGFyYW0gY29uZmlndXJvciAtIElmIGEgZnJpZW5kbHkgbmFtZSB3YXMgcHJvdmlkZWQgZm9yIHRoZSBmaXJzdCBwYXJhbWV0ZXIsIHRoZW4gYW4gb3B0aW9uYWxcbiAgICAgKiBsYW1iZGEgdGhhdCBjb25maWd1cmVzIGEgZGVmYXVsdCByZXNvbHV0aW9uIGZvciB0aGUgZGVwZW5kZW5jeSBjYW4gYmUgcHJvdmlkZWQgc2Vjb25kLlxuICAgICAqIEByZXR1cm5zIFRoZSBjcmVhdGVkIGtleS5cbiAgICAgKiBAcmVtYXJrc1xuICAgICAqIFRoZSBjcmVhdGVkIGtleSBjYW4gYmUgdXNlZCBhcyBhIHByb3BlcnR5IGRlY29yYXRvciBvciBjb25zdHJ1Y3RvciBwYXJhbWV0ZXIgZGVjb3JhdG9yLFxuICAgICAqIGluIGFkZGl0aW9uIHRvIGl0cyBzdGFuZGFyZCB1c2UgaW4gYW4gaW5qZWN0IGFycmF5IG9yIHRocm91Z2ggZGlyZWN0IGNvbnRhaW5lciBBUElzLlxuICAgICAqL1xuICAgIGNyZWF0ZUludGVyZmFjZShuYW1lQ29uZmlnT3JDYWxsYmFjaywgY29uZmlndXJvcikge1xuICAgICAgICBjb25zdCBjb25maWd1cmUgPSB0eXBlb2YgbmFtZUNvbmZpZ09yQ2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgICAgPyBuYW1lQ29uZmlnT3JDYWxsYmFja1xuICAgICAgICAgICAgOiBjb25maWd1cm9yO1xuICAgICAgICBjb25zdCBmcmllbmRseU5hbWUgPSB0eXBlb2YgbmFtZUNvbmZpZ09yQ2FsbGJhY2sgPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gbmFtZUNvbmZpZ09yQ2FsbGJhY2tcbiAgICAgICAgICAgIDogbmFtZUNvbmZpZ09yQ2FsbGJhY2sgJiYgXCJmcmllbmRseU5hbWVcIiBpbiBuYW1lQ29uZmlnT3JDYWxsYmFja1xuICAgICAgICAgICAgICAgID8gbmFtZUNvbmZpZ09yQ2FsbGJhY2suZnJpZW5kbHlOYW1lIHx8IGRlZmF1bHRGcmllbmRseU5hbWVcbiAgICAgICAgICAgICAgICA6IGRlZmF1bHRGcmllbmRseU5hbWU7XG4gICAgICAgIGNvbnN0IHJlc3BlY3RDb25uZWN0aW9uID0gdHlwZW9mIG5hbWVDb25maWdPckNhbGxiYWNrID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGZhbHNlXG4gICAgICAgICAgICA6IG5hbWVDb25maWdPckNhbGxiYWNrICYmIFwicmVzcGVjdENvbm5lY3Rpb25cIiBpbiBuYW1lQ29uZmlnT3JDYWxsYmFja1xuICAgICAgICAgICAgICAgID8gbmFtZUNvbmZpZ09yQ2FsbGJhY2sucmVzcGVjdENvbm5lY3Rpb24gfHwgZmFsc2VcbiAgICAgICAgICAgICAgICA6IGZhbHNlO1xuICAgICAgICBjb25zdCBJbnRlcmZhY2UgPSBmdW5jdGlvbiAodGFyZ2V0LCBwcm9wZXJ0eSwgaW5kZXgpIHtcbiAgICAgICAgICAgIGlmICh0YXJnZXQgPT0gbnVsbCB8fCBuZXcudGFyZ2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIHJlZ2lzdHJhdGlvbiBmb3IgaW50ZXJmYWNlOiAnJHtJbnRlcmZhY2UuZnJpZW5kbHlOYW1lfSdgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eSkge1xuICAgICAgICAgICAgICAgIERJLmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHksIEludGVyZmFjZSwgcmVzcGVjdENvbm5lY3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYW5ub3RhdGlvblBhcmFtdHlwZXMgPSBESS5nZXRPckNyZWF0ZUFubm90YXRpb25QYXJhbVR5cGVzKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgYW5ub3RhdGlvblBhcmFtdHlwZXNbaW5kZXhdID0gSW50ZXJmYWNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBJbnRlcmZhY2UuJGlzSW50ZXJmYWNlID0gdHJ1ZTtcbiAgICAgICAgSW50ZXJmYWNlLmZyaWVuZGx5TmFtZSA9IGZyaWVuZGx5TmFtZSA9PSBudWxsID8gXCIoYW5vbnltb3VzKVwiIDogZnJpZW5kbHlOYW1lO1xuICAgICAgICBpZiAoY29uZmlndXJlICE9IG51bGwpIHtcbiAgICAgICAgICAgIEludGVyZmFjZS5yZWdpc3RlciA9IGZ1bmN0aW9uIChjb250YWluZXIsIGtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb25maWd1cmUobmV3IFJlc29sdmVyQnVpbGRlcihjb250YWluZXIsIGtleSAhPT0gbnVsbCAmJiBrZXkgIT09IHZvaWQgMCA/IGtleSA6IEludGVyZmFjZSkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBJbnRlcmZhY2UudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgICAgICAgIHJldHVybiBgSW50ZXJmYWNlU3ltYm9sPCR7SW50ZXJmYWNlLmZyaWVuZGx5TmFtZX0+YDtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIEludGVyZmFjZTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEEgZGVjb3JhdG9yIHRoYXQgc3BlY2lmaWVzIHdoYXQgdG8gaW5qZWN0IGludG8gaXRzIHRhcmdldC5cbiAgICAgKiBAcGFyYW0gZGVwZW5kZW5jaWVzIC0gVGhlIGRlcGVuZGVuY2llcyB0byBpbmplY3QuXG4gICAgICogQHJldHVybnMgVGhlIGRlY29yYXRvciB0byBiZSBhcHBsaWVkIHRvIHRoZSB0YXJnZXQgY2xhc3MuXG4gICAgICogQHJlbWFya3NcbiAgICAgKiBUaGUgZGVjb3JhdG9yIGNhbiBiZSB1c2VkIHRvIGRlY29yYXRlIGEgY2xhc3MsIGxpc3RpbmcgYWxsIG9mIHRoZSBjbGFzc2VzIGRlcGVuZGVuY2llcy5cbiAgICAgKiBPciBpdCBjYW4gYmUgdXNlZCB0byBkZWNvcmF0ZSBhIGNvbnN0cnVjdG9yIHBhcmFtdGVyLCBpbmRpY2F0aW5nIHdoYXQgdG8gaW5qZWN0IGZvciB0aGF0XG4gICAgICogcGFyYW1ldGVyLlxuICAgICAqIE9yIGl0IGNhbiBiZSB1c2VkIGZvciBhIHdlYiBjb21wb25lbnQgcHJvcGVydHksIGluZGljYXRpbmcgd2hhdCB0aGF0IHByb3BlcnR5IHNob3VsZCByZXNvbHZlIHRvLlxuICAgICAqL1xuICAgIGluamVjdCguLi5kZXBlbmRlbmNpZXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSwgZGVzY3JpcHRvcikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBkZXNjcmlwdG9yID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgLy8gSXQncyBhIHBhcmFtZXRlciBkZWNvcmF0b3IuXG4gICAgICAgICAgICAgICAgY29uc3QgYW5ub3RhdGlvblBhcmFtdHlwZXMgPSBESS5nZXRPckNyZWF0ZUFubm90YXRpb25QYXJhbVR5cGVzKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVwID0gZGVwZW5kZW5jaWVzWzBdO1xuICAgICAgICAgICAgICAgIGlmIChkZXAgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgICAgICBhbm5vdGF0aW9uUGFyYW10eXBlc1tkZXNjcmlwdG9yXSA9IGRlcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChrZXkpIHtcbiAgICAgICAgICAgICAgICBESS5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZGVwZW5kZW5jaWVzWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFubm90YXRpb25QYXJhbXR5cGVzID0gZGVzY3JpcHRvclxuICAgICAgICAgICAgICAgICAgICA/IERJLmdldE9yQ3JlYXRlQW5ub3RhdGlvblBhcmFtVHlwZXMoZGVzY3JpcHRvci52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgOiBESS5nZXRPckNyZWF0ZUFubm90YXRpb25QYXJhbVR5cGVzKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgbGV0IGRlcDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlcGVuZGVuY2llcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBkZXAgPSBkZXBlbmRlbmNpZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXAgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5ub3RhdGlvblBhcmFtdHlwZXNbaV0gPSBkZXA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSZWdpc3RlcnMgdGhlIGB0YXJnZXRgIGNsYXNzIGFzIGEgdHJhbnNpZW50IGRlcGVuZGVuY3k7IGVhY2ggdGltZSB0aGUgZGVwZW5kZW5jeSBpcyByZXNvbHZlZFxuICAgICAqIGEgbmV3IGluc3RhbmNlIHdpbGwgYmUgY3JlYXRlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB0YXJnZXQgLSBUaGUgY2xhc3MgLyBjb25zdHJ1Y3RvciBmdW5jdGlvbiB0byByZWdpc3RlciBhcyB0cmFuc2llbnQuXG4gICAgICogQHJldHVybnMgVGhlIHNhbWUgY2xhc3MsIHdpdGggYSBzdGF0aWMgYHJlZ2lzdGVyYCBtZXRob2QgdGhhdCB0YWtlcyBhIGNvbnRhaW5lciBhbmQgcmV0dXJucyB0aGUgYXBwcm9wcmlhdGUgcmVzb2x2ZXIuXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIE9uIGFuIGV4aXN0aW5nIGNsYXNzXG4gICAgICogYGBgdHNcbiAgICAgKiBjbGFzcyBGb28geyB9XG4gICAgICogREkudHJhbnNpZW50KEZvbyk7XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIElubGluZSBkZWNsYXJhdGlvblxuICAgICAqXG4gICAgICogYGBgdHNcbiAgICAgKiBjb25zdCBGb28gPSBESS50cmFuc2llbnQoY2xhc3MgeyB9KTtcbiAgICAgKiAvLyBGb28gaXMgbm93IHN0cm9uZ2x5IHR5cGVkIHdpdGggcmVnaXN0ZXJcbiAgICAgKiBGb28ucmVnaXN0ZXIoY29udGFpbmVyKTtcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICB0cmFuc2llbnQodGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldC5yZWdpc3RlciA9IGZ1bmN0aW9uIHJlZ2lzdGVyKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgY29uc3QgcmVnaXN0cmF0aW9uID0gUmVnaXN0cmF0aW9uLnRyYW5zaWVudCh0YXJnZXQsIHRhcmdldCk7XG4gICAgICAgICAgICByZXR1cm4gcmVnaXN0cmF0aW9uLnJlZ2lzdGVyKGNvbnRhaW5lcik7XG4gICAgICAgIH07XG4gICAgICAgIHRhcmdldC5yZWdpc3RlckluUmVxdWVzdG9yID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSZWdpc3RlcnMgdGhlIGB0YXJnZXRgIGNsYXNzIGFzIGEgc2luZ2xldG9uIGRlcGVuZGVuY3k7IHRoZSBjbGFzcyB3aWxsIG9ubHkgYmUgY3JlYXRlZCBvbmNlLiBFYWNoXG4gICAgICogY29uc2VjdXRpdmUgdGltZSB0aGUgZGVwZW5kZW5jeSBpcyByZXNvbHZlZCwgdGhlIHNhbWUgaW5zdGFuY2Ugd2lsbCBiZSByZXR1cm5lZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB0YXJnZXQgLSBUaGUgY2xhc3MgLyBjb25zdHJ1Y3RvciBmdW5jdGlvbiB0byByZWdpc3RlciBhcyBhIHNpbmdsZXRvbi5cbiAgICAgKiBAcmV0dXJucyBUaGUgc2FtZSBjbGFzcywgd2l0aCBhIHN0YXRpYyBgcmVnaXN0ZXJgIG1ldGhvZCB0aGF0IHRha2VzIGEgY29udGFpbmVyIGFuZCByZXR1cm5zIHRoZSBhcHByb3ByaWF0ZSByZXNvbHZlci5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIE9uIGFuIGV4aXN0aW5nIGNsYXNzXG4gICAgICogYGBgdHNcbiAgICAgKiBjbGFzcyBGb28geyB9XG4gICAgICogREkuc2luZ2xldG9uKEZvbyk7XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIElubGluZSBkZWNsYXJhdGlvblxuICAgICAqIGBgYHRzXG4gICAgICogY29uc3QgRm9vID0gREkuc2luZ2xldG9uKGNsYXNzIHsgfSk7XG4gICAgICogLy8gRm9vIGlzIG5vdyBzdHJvbmdseSB0eXBlZCB3aXRoIHJlZ2lzdGVyXG4gICAgICogRm9vLnJlZ2lzdGVyKGNvbnRhaW5lcik7XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgc2luZ2xldG9uKHRhcmdldCwgb3B0aW9ucyA9IGRlZmF1bHRTaW5nbGV0b25PcHRpb25zKSB7XG4gICAgICAgIHRhcmdldC5yZWdpc3RlciA9IGZ1bmN0aW9uIHJlZ2lzdGVyKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgY29uc3QgcmVnaXN0cmF0aW9uID0gUmVnaXN0cmF0aW9uLnNpbmdsZXRvbih0YXJnZXQsIHRhcmdldCk7XG4gICAgICAgICAgICByZXR1cm4gcmVnaXN0cmF0aW9uLnJlZ2lzdGVyKGNvbnRhaW5lcik7XG4gICAgICAgIH07XG4gICAgICAgIHRhcmdldC5yZWdpc3RlckluUmVxdWVzdG9yID0gb3B0aW9ucy5zY29wZWQ7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfSxcbn0pO1xuLyoqXG4gKiBUaGUgaW50ZXJmYWNlIGtleSB0aGF0IHJlc29sdmVzIHRoZSBkZXBlbmRlbmN5IGluamVjdGlvbiBjb250YWluZXIgaXRzZWxmLlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gREkuY3JlYXRlSW50ZXJmYWNlKFwiQ29udGFpbmVyXCIpO1xuLyoqXG4gKiBUaGUgaW50ZXJmYWNlIGtleSB0aGF0IHJlc29sdmVzIHRoZSBzZXJ2aWNlIGxvY2F0b3IgaXRzZWxmLlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgU2VydmljZUxvY2F0b3IgPSBDb250YWluZXI7XG5mdW5jdGlvbiBjcmVhdGVSZXNvbHZlcihnZXR0ZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBjb25zdCByZXNvbHZlciA9IGZ1bmN0aW9uICh0YXJnZXQsIHByb3BlcnR5LCBkZXNjcmlwdG9yKSB7XG4gICAgICAgICAgICBESS5pbmplY3QocmVzb2x2ZXIpKHRhcmdldCwgcHJvcGVydHksIGRlc2NyaXB0b3IpO1xuICAgICAgICB9O1xuICAgICAgICByZXNvbHZlci4kaXNSZXNvbHZlciA9IHRydWU7XG4gICAgICAgIHJlc29sdmVyLnJlc29sdmUgPSBmdW5jdGlvbiAoaGFuZGxlciwgcmVxdWVzdG9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0dGVyKGtleSwgaGFuZGxlciwgcmVxdWVzdG9yKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVyO1xuICAgIH07XG59XG4vKipcbiAqIEEgZGVjb3JhdG9yIHRoYXQgc3BlY2lmaWVzIHdoYXQgdG8gaW5qZWN0IGludG8gaXRzIHRhcmdldC5cbiAqIEBwYXJhbSBkZXBlbmRlbmNpZXMgLSBUaGUgZGVwZW5kZW5jaWVzIHRvIGluamVjdC5cbiAqIEByZXR1cm5zIFRoZSBkZWNvcmF0b3IgdG8gYmUgYXBwbGllZCB0byB0aGUgdGFyZ2V0IGNsYXNzLlxuICogQHJlbWFya3NcbiAqIFRoZSBkZWNvcmF0b3IgY2FuIGJlIHVzZWQgdG8gZGVjb3JhdGUgYSBjbGFzcywgbGlzdGluZyBhbGwgb2YgdGhlIGNsYXNzZXMgZGVwZW5kZW5jaWVzLlxuICogT3IgaXQgY2FuIGJlIHVzZWQgdG8gZGVjb3JhdGUgYSBjb25zdHJ1Y3RvciBwYXJhbXRlciwgaW5kaWNhdGluZyB3aGF0IHRvIGluamVjdCBmb3IgdGhhdFxuICogcGFyYW1ldGVyLlxuICogT3IgaXQgY2FuIGJlIHVzZWQgZm9yIGEgd2ViIGNvbXBvbmVudCBwcm9wZXJ0eSwgaW5kaWNhdGluZyB3aGF0IHRoYXQgcHJvcGVydHkgc2hvdWxkIHJlc29sdmUgdG8uXG4gKlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgaW5qZWN0ID0gREkuaW5qZWN0O1xuZnVuY3Rpb24gdHJhbnNpZW50RGVjb3JhdG9yKHRhcmdldCkge1xuICAgIHJldHVybiBESS50cmFuc2llbnQodGFyZ2V0KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2llbnQodGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRhcmdldCA9PSBudWxsID8gdHJhbnNpZW50RGVjb3JhdG9yIDogdHJhbnNpZW50RGVjb3JhdG9yKHRhcmdldCk7XG59XG5jb25zdCBkZWZhdWx0U2luZ2xldG9uT3B0aW9ucyA9IHsgc2NvcGVkOiBmYWxzZSB9O1xuZnVuY3Rpb24gc2luZ2xldG9uRGVjb3JhdG9yKHRhcmdldCkge1xuICAgIHJldHVybiBESS5zaW5nbGV0b24odGFyZ2V0KTtcbn1cbi8qKlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gc2luZ2xldG9uKHRhcmdldE9yT3B0aW9ucykge1xuICAgIGlmICh0eXBlb2YgdGFyZ2V0T3JPcHRpb25zID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIERJLnNpbmdsZXRvbih0YXJnZXRPck9wdGlvbnMpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKCR0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuIERJLnNpbmdsZXRvbigkdGFyZ2V0LCB0YXJnZXRPck9wdGlvbnMpO1xuICAgIH07XG59XG5mdW5jdGlvbiBjcmVhdGVBbGxSZXNvbHZlcihnZXR0ZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGtleSwgc2VhcmNoQW5jZXN0b3JzKSB7XG4gICAgICAgIHNlYXJjaEFuY2VzdG9ycyA9ICEhc2VhcmNoQW5jZXN0b3JzO1xuICAgICAgICBjb25zdCByZXNvbHZlciA9IGZ1bmN0aW9uICh0YXJnZXQsIHByb3BlcnR5LCBkZXNjcmlwdG9yKSB7XG4gICAgICAgICAgICBESS5pbmplY3QocmVzb2x2ZXIpKHRhcmdldCwgcHJvcGVydHksIGRlc2NyaXB0b3IpO1xuICAgICAgICB9O1xuICAgICAgICByZXNvbHZlci4kaXNSZXNvbHZlciA9IHRydWU7XG4gICAgICAgIHJlc29sdmVyLnJlc29sdmUgPSBmdW5jdGlvbiAoaGFuZGxlciwgcmVxdWVzdG9yKSB7XG4gICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvbiAqL1xuICAgICAgICAgICAgcmV0dXJuIGdldHRlcihrZXksIGhhbmRsZXIsIHJlcXVlc3Rvciwgc2VhcmNoQW5jZXN0b3JzKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVyO1xuICAgIH07XG59XG4vKipcbiAqIEEgZGVjb3JhdG9yIGFuZCBESSByZXNvbHZlciB0aGF0IHdpbGwgcmVzb2x2ZSBhbiBhcnJheSBvZiBhbGwgZGVwZW5kZW5jaWVzXG4gKiByZWdpc3RlcmVkIHdpdGggdGhlIHNwZWNpZmllZCBrZXkuXG4gKiBAcGFyYW0ga2V5IC0gVGhlIGtleSB0byByZXNvbHZlIGFsbCBkZXBlbmRlbmNpZXMgZm9yLlxuICogQHBhcmFtIHNlYXJjaEFuY2VzdG9ycyAtIFtvcHRpb25hbF0gSW5kaWNhdGVzIHdoZXRoZXIgdG8gc2VhcmNoIGFuY2VzdG9yIGNvbnRhaW5lcnMuXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBhbGwgPSBjcmVhdGVBbGxSZXNvbHZlcigoa2V5LCBoYW5kbGVyLCByZXF1ZXN0b3IsIHNlYXJjaEFuY2VzdG9ycykgPT4gcmVxdWVzdG9yLmdldEFsbChrZXksIHNlYXJjaEFuY2VzdG9ycykpO1xuLyoqXG4gKiBBIGRlY29yYXRvciB0aGF0IGxhemlseSBpbmplY3RzIGEgZGVwZW5kZW5jeSBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgYEtleWAgaXMgcHJlc2VudCBhdCB0aGUgdGltZSBvZiBmdW5jdGlvbiBjYWxsLlxuICpcbiAqIEBleGFtcGxlXG4gKiBZb3UgbmVlZCB0byBtYWtlIHlvdXIgYXJndW1lbnQgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIHR5cGUsIGZvciBleGFtcGxlXG4gKiBgYGB0c1xuICogY2xhc3MgRm9vIHtcbiAqICAgY29uc3RydWN0b3IoIEBsYXp5KCdyYW5kb20nKSBwdWJsaWMgcmFuZG9tOiAoKSA9PiBudW1iZXIgKVxuICogfVxuICogY29uc3QgZm9vID0gY29udGFpbmVyLmdldChGb28pOyAvLyBpbnN0YW5jZW9mIEZvb1xuICogZm9vLnJhbmRvbSgpOyAvLyB0aHJvd3NcbiAqIGBgYFxuICogd291bGQgdGhyb3cgYW4gZXhjZXB0aW9uIGJlY2F1c2UgeW91IGhhdmVuJ3QgcmVnaXN0ZXJlZCBgJ3JhbmRvbSdgIGJlZm9yZSBjYWxsaW5nIHRoZSBtZXRob2QuXG4gKiBAZXhhbXBsZVxuICogVGhpcywgd291bGQgZ2l2ZSB5b3UgYSBuZXcgJ01hdGgucmFuZG9tKCknIG51bWJlciBlYWNoIHRpbWUuXG4gKiBgYGB0c1xuICogY2xhc3MgRm9vIHtcbiAqICAgY29uc3RydWN0b3IoIEBsYXp5KCdyYW5kb20nKSBwdWJsaWMgcmFuZG9tOiAoKSA9PiByYW5kb20gKVxuICogfVxuICogY29udGFpbmVyLnJlZ2lzdGVyKFJlZ2lzdHJhdGlvbi5jYWxsYmFjaygncmFuZG9tJywgTWF0aC5yYW5kb20gKSk7XG4gKiBjb250YWluZXIuZ2V0KEZvbykucmFuZG9tKCk7IC8vIHNvbWUgcmFuZG9tIG51bWJlclxuICogY29udGFpbmVyLmdldChGb28pLnJhbmRvbSgpOyAvLyBhbm90aGVyIHJhbmRvbSBudW1iZXJcbiAqIGBgYFxuICpcbiAqIGBAbGF6eWAgZG9lcyBub3QgbWFuYWdlIHRoZSBsaWZlY3ljbGUgb2YgdGhlIHVuZGVybHlpbmcga2V5LiBJZiB5b3Ugd2FudCBhIHNpbmdsZXRvbiwgeW91IGhhdmUgdG8gcmVnaXN0ZXIgYXMgYVxuICogYHNpbmdsZXRvbmAsIGB0cmFuc2llbnRgIHdvdWxkIGFsc28gYmVoYXZlIGFzIHlvdSB3b3VsZCBleHBlY3QsIHByb3ZpZGluZyB5b3UgYSBuZXcgaW5zdGFuY2UgZWFjaCB0aW1lLlxuICpcbiAqIEBwYXJhbSBrZXkgLSBUaGUga2V5IHRvIGxhemlseSByZXNvbHZlLlxuICogc2VlIHtAbGluayBESS5jcmVhdGVJbnRlcmZhY2V9IG9uIGludGVyYWN0aW9ucyB3aXRoIGludGVyZmFjZXNcbiAqXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBsYXp5ID0gY3JlYXRlUmVzb2x2ZXIoKGtleSwgaGFuZGxlciwgcmVxdWVzdG9yKSA9PiB7XG4gICAgcmV0dXJuICgpID0+IHJlcXVlc3Rvci5nZXQoa2V5KTtcbn0pO1xuLyoqXG4gKiBBIGRlY29yYXRvciB0aGF0IGFsbG93cyB5b3UgdG8gb3B0aW9uYWxseSBpbmplY3QgYSBkZXBlbmRlbmN5IGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBbW2BLZXlgXV0gaXMgcHJlc2VudCwgZm9yIGV4YW1wbGU6XG4gKiBAZXhhbXBsZVxuICogYGBgdHNcbiAqIGNsYXNzIEZvbyB7XG4gKiAgIGNvbnN0cnVjdG9yKCBAaW5qZWN0KCdteXN0cmluZycpIHB1YmxpYyBzdHI6IHN0cmluZyA9ICdzb21lc3RyaW5nJyApXG4gKiB9XG4gKiBjb250YWluZXIuZ2V0KEZvbyk7IC8vIHRocm93c1xuICogYGBgXG4gKiB3b3VsZCBmYWlsXG4gKlxuICogQGV4YW1wbGVcbiAqIGBgYHRzXG4gKiBjbGFzcyBGb28ge1xuICogICBjb25zdHJ1Y3RvciggQG9wdGlvbmFsKCdteXN0cmluZycpIHB1YmxpYyBzdHI6IHN0cmluZyA9ICdzb21lc3RyaW5nJyApXG4gKiB9XG4gKiBjb250YWluZXIuZ2V0KEZvbykuc3RyIC8vIHNvbWVzdHJpbmdcbiAqIGBgYFxuICogaWYgeW91IHVzZSBpdCB3aXRob3V0IGEgZGVmYXVsdCBpdCB3aWxsIGluamVjdCBgdW5kZWZpbmVkYCwgc28gcmVtZW1iZXIgdG8gbWFyayB5b3VyIGlucHV0IHR5cGUgYXNcbiAqIHBvc3NpYmx5IGB1bmRlZmluZWRgIVxuICpcbiAqIEBwYXJhbSBrZXkgLSBUaGUga2V5IHRvIG9wdGlvbmFsbHkgcmVzb2x2ZS5cbiAqIHNlZSB7QGxpbmsgREkuY3JlYXRlSW50ZXJmYWNlfSBvbiBpbnRlcmFjdGlvbnMgd2l0aCBpbnRlcmZhY2VzXG4gKlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3Qgb3B0aW9uYWwgPSBjcmVhdGVSZXNvbHZlcigoa2V5LCBoYW5kbGVyLCByZXF1ZXN0b3IpID0+IHtcbiAgICBpZiAocmVxdWVzdG9yLmhhcyhrZXksIHRydWUpKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0b3IuZ2V0KGtleSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbn0pO1xuLyoqXG4gKiBBIGRlY29yYXRvciB0aGF0IHRlbGxzIHRoZSBjb250YWluZXIgbm90IHRvIHRyeSB0byBpbmplY3QgYSBkZXBlbmRlbmN5LlxuICpcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlnbm9yZSh0YXJnZXQsIHByb3BlcnR5LCBkZXNjcmlwdG9yKSB7XG4gICAgREkuaW5qZWN0KGlnbm9yZSkodGFyZ2V0LCBwcm9wZXJ0eSwgZGVzY3JpcHRvcik7XG59XG4vLyBIYWNrOiBjYXN0aW5nIGJlbG93IHVzZWQgdG8gcHJldmVudCBUUyBmcm9tIGdlbmVyYXRlIGEgbmFtZXNwYWNlIHdoaWNoIGNhbid0IGJlIGNvbW1lbnRlZFxuLy8gYW5kIHJlc3VsdHMgaW4gZG9jdW1lbnRhdGlvbiB2YWxpZGF0aW9uIGVycm9ycy5cbmlnbm9yZS4kaXNSZXNvbHZlciA9IHRydWU7XG5pZ25vcmUucmVzb2x2ZSA9ICgpID0+IHVuZGVmaW5lZDtcbi8qKlxuICogQSBkZWNvcmF0b3IgdGhhdCBpbmRpY2F0ZXMgdGhhdCBhIG5ldyBpbnN0YW5jZSBzaG91bGQgYmUgaW5qZWN0ZWQgc2NvcGVkIHRvIHRoZVxuICogY29udGFpbmVyIHRoYXQgcmVxdWVzdGVkIHRoZSBpbnN0YW5jZS5cbiAqIEBwYXJhbSBrZXkgLSBUaGUgZGVwZW5kZW5jeSBrZXkgZm9yIHRoZSBuZXcgaW5zdGFuY2UuXG4gKiBAcmVtYXJrc1xuICogVGhpcyBjcmVhdGVzIGEgcmVzb2x2ZXIgd2l0aCBhbiBpbnN0YW5jZSBzdHJhdGVneSBwb2ludGluZyB0byB0aGUgbmV3IGluc3RhbmNlLCBlZmZlY3RpdmVseVxuICogbWFraW5nIHRoaXMgYSBzaW5nbGV0b24sIHNjb3BlZCB0byB0aGUgY29udGFpbmVyIG9yIERPTSdzIHN1YnRyZWUuXG4gKlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgbmV3SW5zdGFuY2VGb3JTY29wZSA9IGNyZWF0ZVJlc29sdmVyKChrZXksIGhhbmRsZXIsIHJlcXVlc3RvcikgPT4ge1xuICAgIGNvbnN0IGluc3RhbmNlID0gY3JlYXRlTmV3SW5zdGFuY2Uoa2V5LCBoYW5kbGVyKTtcbiAgICBjb25zdCByZXNvbHZlciA9IG5ldyBSZXNvbHZlckltcGwoa2V5LCAwIC8qIGluc3RhbmNlICovLCBpbnN0YW5jZSk7XG4gICAgcmVxdWVzdG9yLnJlZ2lzdGVyUmVzb2x2ZXIoa2V5LCByZXNvbHZlcik7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufSk7XG4vKipcbiAqIEEgZGVjb3JhdG9yIHRoYXQgaW5kaWNhdGVzIHRoYXQgYSBuZXcgaW5zdGFuY2Ugc2hvdWxkIGJlIGluamVjdGVkLlxuICogQHBhcmFtIGtleSAtIFRoZSBkZXBlbmRlbmN5IGtleSBmb3IgdGhlIG5ldyBpbnN0YW5jZS5cbiAqIEByZW1hcmtzXG4gKiBUaGUgaW5zdGFuY2UgaXMgbm90IGludGVybmFsbHkgY2FjaGVkIHdpdGggYSByZXNvbHZlciBhcyBuZXdJbnN0YW5jZUZvclNjb3BlIGRvZXMuXG4gKlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgbmV3SW5zdGFuY2VPZiA9IGNyZWF0ZVJlc29sdmVyKChrZXksIGhhbmRsZXIsIF9yZXF1ZXN0b3IpID0+IGNyZWF0ZU5ld0luc3RhbmNlKGtleSwgaGFuZGxlcikpO1xuZnVuY3Rpb24gY3JlYXRlTmV3SW5zdGFuY2Uoa2V5LCBoYW5kbGVyKSB7XG4gICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb24gKi9cbiAgICByZXR1cm4gaGFuZGxlci5nZXRGYWN0b3J5KGtleSkuY29uc3RydWN0KGhhbmRsZXIpO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNsYXNzIFJlc29sdmVySW1wbCB7XG4gICAgY29uc3RydWN0b3Ioa2V5LCBzdHJhdGVneSwgc3RhdGUpIHtcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgICAgIHRoaXMuc3RyYXRlZ3kgPSBzdHJhdGVneTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICB0aGlzLnJlc29sdmluZyA9IGZhbHNlO1xuICAgIH1cbiAgICBnZXQgJGlzUmVzb2x2ZXIoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZWdpc3Rlcihjb250YWluZXIpIHtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lci5yZWdpc3RlclJlc29sdmVyKHRoaXMua2V5LCB0aGlzKTtcbiAgICB9XG4gICAgcmVzb2x2ZShoYW5kbGVyLCByZXF1ZXN0b3IpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLnN0cmF0ZWd5KSB7XG4gICAgICAgICAgICBjYXNlIDAgLyogaW5zdGFuY2UgKi86XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gICAgICAgICAgICBjYXNlIDEgLyogc2luZ2xldG9uICovOiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVzb2x2aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ3ljbGljIGRlcGVuZGVuY3kgZm91bmQ6ICR7dGhpcy5zdGF0ZS5uYW1lfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IGhhbmRsZXJcbiAgICAgICAgICAgICAgICAgICAgLmdldEZhY3RvcnkodGhpcy5zdGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgLmNvbnN0cnVjdChyZXF1ZXN0b3IpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RyYXRlZ3kgPSAwIC8qIGluc3RhbmNlICovO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzb2x2aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIDIgLyogdHJhbnNpZW50ICovOiB7XG4gICAgICAgICAgICAgICAgLy8gQWx3YXlzIGNyZWF0ZSB0cmFuc2llbnRzIGZyb20gdGhlIHJlcXVlc3RpbmcgY29udGFpbmVyXG4gICAgICAgICAgICAgICAgY29uc3QgZmFjdG9yeSA9IGhhbmRsZXIuZ2V0RmFjdG9yeSh0aGlzLnN0YXRlKTtcbiAgICAgICAgICAgICAgICBpZiAoZmFjdG9yeSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFJlc29sdmVyIGZvciAke1N0cmluZyh0aGlzLmtleSl9IHJldHVybmVkIGEgbnVsbCBmYWN0b3J5YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWN0b3J5LmNvbnN0cnVjdChyZXF1ZXN0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAzIC8qIGNhbGxiYWNrICovOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlKGhhbmRsZXIsIHJlcXVlc3RvciwgdGhpcyk7XG4gICAgICAgICAgICBjYXNlIDQgLyogYXJyYXkgKi86XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVbMF0ucmVzb2x2ZShoYW5kbGVyLCByZXF1ZXN0b3IpO1xuICAgICAgICAgICAgY2FzZSA1IC8qIGFsaWFzICovOlxuICAgICAgICAgICAgICAgIHJldHVybiByZXF1ZXN0b3IuZ2V0KHRoaXMuc3RhdGUpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgcmVzb2x2ZXIgc3RyYXRlZ3kgc3BlY2lmaWVkOiAke3RoaXMuc3RyYXRlZ3l9LmApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldEZhY3RvcnkoY29udGFpbmVyKSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICBzd2l0Y2ggKHRoaXMuc3RyYXRlZ3kpIHtcbiAgICAgICAgICAgIGNhc2UgMSAvKiBzaW5nbGV0b24gKi86XG4gICAgICAgICAgICBjYXNlIDIgLyogdHJhbnNpZW50ICovOlxuICAgICAgICAgICAgICAgIHJldHVybiBjb250YWluZXIuZ2V0RmFjdG9yeSh0aGlzLnN0YXRlKTtcbiAgICAgICAgICAgIGNhc2UgNSAvKiBhbGlhcyAqLzpcbiAgICAgICAgICAgICAgICByZXR1cm4gKF9jID0gKF9iID0gKF9hID0gY29udGFpbmVyLmdldFJlc29sdmVyKHRoaXMuc3RhdGUpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0RmFjdG9yeSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EsIGNvbnRhaW5lcikpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IG51bGw7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gY29udGFpbmVyR2V0S2V5KGQpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoZCk7XG59XG5mdW5jdGlvbiB0cmFuc2Zvcm1JbnN0YW5jZShpbnN0LCB0cmFuc2Zvcm0pIHtcbiAgICByZXR1cm4gdHJhbnNmb3JtKGluc3QpO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNsYXNzIEZhY3RvcnlJbXBsIHtcbiAgICBjb25zdHJ1Y3RvcihUeXBlLCBkZXBlbmRlbmNpZXMpIHtcbiAgICAgICAgdGhpcy5UeXBlID0gVHlwZTtcbiAgICAgICAgdGhpcy5kZXBlbmRlbmNpZXMgPSBkZXBlbmRlbmNpZXM7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtZXJzID0gbnVsbDtcbiAgICB9XG4gICAgY29uc3RydWN0KGNvbnRhaW5lciwgZHluYW1pY0RlcGVuZGVuY2llcykge1xuICAgICAgICBsZXQgaW5zdGFuY2U7XG4gICAgICAgIGlmIChkeW5hbWljRGVwZW5kZW5jaWVzID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGluc3RhbmNlID0gbmV3IHRoaXMuVHlwZSguLi50aGlzLmRlcGVuZGVuY2llcy5tYXAoY29udGFpbmVyR2V0S2V5LCBjb250YWluZXIpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGluc3RhbmNlID0gbmV3IHRoaXMuVHlwZSguLi50aGlzLmRlcGVuZGVuY2llcy5tYXAoY29udGFpbmVyR2V0S2V5LCBjb250YWluZXIpLCAuLi5keW5hbWljRGVwZW5kZW5jaWVzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50cmFuc2Zvcm1lcnMgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybWVycy5yZWR1Y2UodHJhbnNmb3JtSW5zdGFuY2UsIGluc3RhbmNlKTtcbiAgICB9XG4gICAgcmVnaXN0ZXJUcmFuc2Zvcm1lcih0cmFuc2Zvcm1lcikge1xuICAgICAgICAodGhpcy50cmFuc2Zvcm1lcnMgfHwgKHRoaXMudHJhbnNmb3JtZXJzID0gW10pKS5wdXNoKHRyYW5zZm9ybWVyKTtcbiAgICB9XG59XG5jb25zdCBjb250YWluZXJSZXNvbHZlciA9IHtcbiAgICAkaXNSZXNvbHZlcjogdHJ1ZSxcbiAgICByZXNvbHZlKGhhbmRsZXIsIHJlcXVlc3Rvcikge1xuICAgICAgICByZXR1cm4gcmVxdWVzdG9yO1xuICAgIH0sXG59O1xuZnVuY3Rpb24gaXNSZWdpc3RyeShvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iai5yZWdpc3RlciA9PT0gXCJmdW5jdGlvblwiO1xufVxuZnVuY3Rpb24gaXNTZWxmUmVnaXN0cnkob2JqKSB7XG4gICAgcmV0dXJuIGlzUmVnaXN0cnkob2JqKSAmJiB0eXBlb2Ygb2JqLnJlZ2lzdGVySW5SZXF1ZXN0b3IgPT09IFwiYm9vbGVhblwiO1xufVxuZnVuY3Rpb24gaXNSZWdpc3RlckluUmVxdWVzdGVyKG9iaikge1xuICAgIHJldHVybiBpc1NlbGZSZWdpc3RyeShvYmopICYmIG9iai5yZWdpc3RlckluUmVxdWVzdG9yO1xufVxuZnVuY3Rpb24gaXNDbGFzcyhvYmopIHtcbiAgICByZXR1cm4gb2JqLnByb3RvdHlwZSAhPT0gdm9pZCAwO1xufVxuY29uc3QgSW5zdHJpbnNpY1R5cGVOYW1lcyA9IG5ldyBTZXQoW1xuICAgIFwiQXJyYXlcIixcbiAgICBcIkFycmF5QnVmZmVyXCIsXG4gICAgXCJCb29sZWFuXCIsXG4gICAgXCJEYXRhVmlld1wiLFxuICAgIFwiRGF0ZVwiLFxuICAgIFwiRXJyb3JcIixcbiAgICBcIkV2YWxFcnJvclwiLFxuICAgIFwiRmxvYXQzMkFycmF5XCIsXG4gICAgXCJGbG9hdDY0QXJyYXlcIixcbiAgICBcIkZ1bmN0aW9uXCIsXG4gICAgXCJJbnQ4QXJyYXlcIixcbiAgICBcIkludDE2QXJyYXlcIixcbiAgICBcIkludDMyQXJyYXlcIixcbiAgICBcIk1hcFwiLFxuICAgIFwiTnVtYmVyXCIsXG4gICAgXCJPYmplY3RcIixcbiAgICBcIlByb21pc2VcIixcbiAgICBcIlJhbmdlRXJyb3JcIixcbiAgICBcIlJlZmVyZW5jZUVycm9yXCIsXG4gICAgXCJSZWdFeHBcIixcbiAgICBcIlNldFwiLFxuICAgIFwiU2hhcmVkQXJyYXlCdWZmZXJcIixcbiAgICBcIlN0cmluZ1wiLFxuICAgIFwiU3ludGF4RXJyb3JcIixcbiAgICBcIlR5cGVFcnJvclwiLFxuICAgIFwiVWludDhBcnJheVwiLFxuICAgIFwiVWludDhDbGFtcGVkQXJyYXlcIixcbiAgICBcIlVpbnQxNkFycmF5XCIsXG4gICAgXCJVaW50MzJBcnJheVwiLFxuICAgIFwiVVJJRXJyb3JcIixcbiAgICBcIldlYWtNYXBcIixcbiAgICBcIldlYWtTZXRcIixcbl0pO1xuY29uc3QgRElMb2NhdGVQYXJlbnRFdmVudFR5cGUgPSBcIl9fRElfTE9DQVRFX1BBUkVOVF9fXCI7XG5jb25zdCBmYWN0b3JpZXMgPSBuZXcgTWFwKCk7XG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgY2xhc3MgQ29udGFpbmVySW1wbCB7XG4gICAgY29uc3RydWN0b3Iob3duZXIsIGNvbmZpZykge1xuICAgICAgICB0aGlzLm93bmVyID0gb3duZXI7XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLl9wYXJlbnQgPSB2b2lkIDA7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJEZXB0aCA9IDA7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IG51bGw7XG4gICAgICAgIGlmIChvd25lciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgb3duZXIuJCRjb250YWluZXIkJCA9IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXNvbHZlcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucmVzb2x2ZXJzLnNldChDb250YWluZXIsIGNvbnRhaW5lclJlc29sdmVyKTtcbiAgICAgICAgaWYgKG93bmVyIGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICAgICAgb3duZXIuYWRkRXZlbnRMaXN0ZW5lcihESUxvY2F0ZVBhcmVudEV2ZW50VHlwZSwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZS5jb21wb3NlZFBhdGgoKVswXSAhPT0gdGhpcy5vd25lcikge1xuICAgICAgICAgICAgICAgICAgICBlLmRldGFpbC5jb250YWluZXIgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBwYXJlbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLl9wYXJlbnQgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgdGhpcy5fcGFyZW50ID0gdGhpcy5jb25maWcucGFyZW50TG9jYXRvcih0aGlzLm93bmVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICAgIH1cbiAgICBnZXQgZGVwdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudCA9PT0gbnVsbCA/IDAgOiB0aGlzLnBhcmVudC5kZXB0aCArIDE7XG4gICAgfVxuICAgIGdldCByZXNwb25zaWJsZUZvck93bmVyUmVxdWVzdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5yZXNwb25zaWJsZUZvck93bmVyUmVxdWVzdHM7XG4gICAgfVxuICAgIHJlZ2lzdGVyV2l0aENvbnRleHQoY29udGV4dCwgLi4ucGFyYW1zKSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMucmVnaXN0ZXIoLi4ucGFyYW1zKTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJlZ2lzdGVyKC4uLnBhcmFtcykge1xuICAgICAgICBpZiAoKyt0aGlzLnJlZ2lzdGVyRGVwdGggPT09IDEwMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIGF1dG9yZWdpc3RlciBkZXBlbmRlbmN5XCIpO1xuICAgICAgICAgICAgLy8gTW9zdCBsaWtlbHkgY2F1c2UgaXMgdHJ5aW5nIHRvIHJlZ2lzdGVyIGEgcGxhaW4gb2JqZWN0IHRoYXQgZG9lcyBub3QgaGF2ZSBhXG4gICAgICAgICAgICAvLyByZWdpc3RlciBtZXRob2QgYW5kIGlzIG5vdCBhIGNsYXNzIGNvbnN0cnVjdG9yXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGN1cnJlbnQ7XG4gICAgICAgIGxldCBrZXlzO1xuICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgIGxldCBqO1xuICAgICAgICBsZXQgamo7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBpaSA9IHBhcmFtcy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICAgICAgICBjdXJyZW50ID0gcGFyYW1zW2ldO1xuICAgICAgICAgICAgaWYgKCFpc09iamVjdChjdXJyZW50KSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzUmVnaXN0cnkoY3VycmVudCkpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50LnJlZ2lzdGVyKHRoaXMsIGNvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXNDbGFzcyhjdXJyZW50KSkge1xuICAgICAgICAgICAgICAgIFJlZ2lzdHJhdGlvbi5zaW5nbGV0b24oY3VycmVudCwgY3VycmVudCkucmVnaXN0ZXIodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBrZXlzID0gT2JqZWN0LmtleXMoY3VycmVudCk7XG4gICAgICAgICAgICAgICAgaiA9IDA7XG4gICAgICAgICAgICAgICAgamogPSBrZXlzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKDsgaiA8IGpqOyArK2opIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBjdXJyZW50W2tleXNbal1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gbm90ZTogd2UgY291bGQgcmVtb3ZlIHRoaXMgaWYtYnJhbmNoIGFuZCBjYWxsIHRoaXMucmVnaXN0ZXIgZGlyZWN0bHlcbiAgICAgICAgICAgICAgICAgICAgLy8gLSB0aGUgZXh0cmEgY2hlY2sgaXMganVzdCBhIHBlcmYgdHdlYWsgdG8gY3JlYXRlIGZld2VyIHVubmVjZXNzYXJ5IGFycmF5cyBieSB0aGUgc3ByZWFkIG9wZXJhdG9yXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1JlZ2lzdHJ5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUucmVnaXN0ZXIodGhpcywgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAtLXRoaXMucmVnaXN0ZXJEZXB0aDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJlZ2lzdGVyUmVzb2x2ZXIoa2V5LCByZXNvbHZlcikge1xuICAgICAgICB2YWxpZGF0ZUtleShrZXkpO1xuICAgICAgICBjb25zdCByZXNvbHZlcnMgPSB0aGlzLnJlc29sdmVycztcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVzb2x2ZXJzLmdldChrZXkpO1xuICAgICAgICBpZiAocmVzdWx0ID09IG51bGwpIHtcbiAgICAgICAgICAgIHJlc29sdmVycy5zZXQoa2V5LCByZXNvbHZlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocmVzdWx0IGluc3RhbmNlb2YgUmVzb2x2ZXJJbXBsICYmXG4gICAgICAgICAgICByZXN1bHQuc3RyYXRlZ3kgPT09IDQgLyogYXJyYXkgKi8pIHtcbiAgICAgICAgICAgIHJlc3VsdC5zdGF0ZS5wdXNoKHJlc29sdmVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlc29sdmVycy5zZXQoa2V5LCBuZXcgUmVzb2x2ZXJJbXBsKGtleSwgNCAvKiBhcnJheSAqLywgW3Jlc3VsdCwgcmVzb2x2ZXJdKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmVyO1xuICAgIH1cbiAgICByZWdpc3RlclRyYW5zZm9ybWVyKGtleSwgdHJhbnNmb3JtZXIpIHtcbiAgICAgICAgY29uc3QgcmVzb2x2ZXIgPSB0aGlzLmdldFJlc29sdmVyKGtleSk7XG4gICAgICAgIGlmIChyZXNvbHZlciA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc29sdmVyLmdldEZhY3RvcnkpIHtcbiAgICAgICAgICAgIGNvbnN0IGZhY3RvcnkgPSByZXNvbHZlci5nZXRGYWN0b3J5KHRoaXMpO1xuICAgICAgICAgICAgaWYgKGZhY3RvcnkgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFRoaXMgdHlwZSBjYXN0IGlzIGEgYml0IG9mIGEgaGFja3kgb25lLCBuZWNlc3NhcnkgZHVlIHRvIHRoZSBkdXBsaWNpdHkgb2YgSVJlc29sdmVyTGlrZS5cbiAgICAgICAgICAgIC8vIFByb2JsZW0gaXMgdGhhdCB0aGF0IGludGVyZmFjZSdzIHR5cGUgYXJnIGNhbiBiZSBvZiB0eXBlIEtleSwgYnV0IHRoZSBnZXRGYWN0b3J5IG1ldGhvZCBvbmx5IHdvcmtzIG9uXG4gICAgICAgICAgICAvLyB0eXBlIENvbnN0cnVjdGFibGUuIFNvIHRoZSByZXR1cm4gdHlwZSBvZiB0aGF0IG9wdGlvbmFsIG1ldGhvZCBoYXMgdGhpcyBhZGRpdGlvbmFsIGNvbnN0cmFpbnQsIHdoaWNoXG4gICAgICAgICAgICAvLyBzZWVtcyB0byBjb25mdXNlIHRoZSB0eXBlIGNoZWNrZXIuXG4gICAgICAgICAgICBmYWN0b3J5LnJlZ2lzdGVyVHJhbnNmb3JtZXIodHJhbnNmb3JtZXIpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBnZXRSZXNvbHZlcihrZXksIGF1dG9SZWdpc3RlciA9IHRydWUpIHtcbiAgICAgICAgdmFsaWRhdGVLZXkoa2V5KTtcbiAgICAgICAgaWYgKGtleS5yZXNvbHZlICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgIH1cbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby10aGlzLWFsaWFzICovXG4gICAgICAgIGxldCBjdXJyZW50ID0gdGhpcztcbiAgICAgICAgbGV0IHJlc29sdmVyO1xuICAgICAgICB3aGlsZSAoY3VycmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXNvbHZlciA9IGN1cnJlbnQucmVzb2x2ZXJzLmdldChrZXkpO1xuICAgICAgICAgICAgaWYgKHJlc29sdmVyID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudC5wYXJlbnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBoYW5kbGVyID0gaXNSZWdpc3RlckluUmVxdWVzdGVyKGtleSlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgOiBjdXJyZW50O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXV0b1JlZ2lzdGVyID8gdGhpcy5qaXRSZWdpc3RlcihrZXksIGhhbmRsZXIpIDogbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBoYXMoa2V5LCBzZWFyY2hBbmNlc3RvcnMgPSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXNvbHZlcnMuaGFzKGtleSlcbiAgICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgICAgOiBzZWFyY2hBbmNlc3RvcnMgJiYgdGhpcy5wYXJlbnQgIT0gbnVsbFxuICAgICAgICAgICAgICAgID8gdGhpcy5wYXJlbnQuaGFzKGtleSwgdHJ1ZSlcbiAgICAgICAgICAgICAgICA6IGZhbHNlO1xuICAgIH1cbiAgICBnZXQoa2V5KSB7XG4gICAgICAgIHZhbGlkYXRlS2V5KGtleSk7XG4gICAgICAgIGlmIChrZXkuJGlzUmVzb2x2ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBrZXkucmVzb2x2ZSh0aGlzLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXRoaXMtYWxpYXMgKi9cbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzO1xuICAgICAgICBsZXQgcmVzb2x2ZXI7XG4gICAgICAgIHdoaWxlIChjdXJyZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJlc29sdmVyID0gY3VycmVudC5yZXNvbHZlcnMuZ2V0KGtleSk7XG4gICAgICAgICAgICBpZiAocmVzb2x2ZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50LnBhcmVudCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSBpc1JlZ2lzdGVySW5SZXF1ZXN0ZXIoa2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVyID0gdGhpcy5qaXRSZWdpc3RlcihrZXksIGhhbmRsZXIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZXIucmVzb2x2ZShjdXJyZW50LCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVyLnJlc29sdmUoY3VycmVudCwgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gcmVzb2x2ZSBrZXk6ICR7a2V5fWApO1xuICAgIH1cbiAgICBnZXRBbGwoa2V5LCBzZWFyY2hBbmNlc3RvcnMgPSBmYWxzZSkge1xuICAgICAgICB2YWxpZGF0ZUtleShrZXkpO1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXRoaXMtYWxpYXMgKi9cbiAgICAgICAgY29uc3QgcmVxdWVzdG9yID0gdGhpcztcbiAgICAgICAgbGV0IGN1cnJlbnQgPSByZXF1ZXN0b3I7XG4gICAgICAgIGxldCByZXNvbHZlcjtcbiAgICAgICAgaWYgKHNlYXJjaEFuY2VzdG9ycykge1xuICAgICAgICAgICAgbGV0IHJlc29sdXRpb25zID0gZW1wdHlBcnJheTtcbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlciA9IGN1cnJlbnQucmVzb2x2ZXJzLmdldChrZXkpO1xuICAgICAgICAgICAgICAgIGlmIChyZXNvbHZlciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdXRpb25zID0gcmVzb2x1dGlvbnMuY29uY2F0KFxuICAgICAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvbiAqL1xuICAgICAgICAgICAgICAgICAgICBidWlsZEFsbFJlc3BvbnNlKHJlc29sdmVyLCBjdXJyZW50LCByZXF1ZXN0b3IpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdXRpb25zO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmVyID0gY3VycmVudC5yZXNvbHZlcnMuZ2V0KGtleSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc29sdmVyID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50O1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW1wdHlBcnJheTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJ1aWxkQWxsUmVzcG9uc2UocmVzb2x2ZXIsIGN1cnJlbnQsIHJlcXVlc3Rvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbXB0eUFycmF5O1xuICAgIH1cbiAgICBnZXRGYWN0b3J5KFR5cGUpIHtcbiAgICAgICAgbGV0IGZhY3RvcnkgPSBmYWN0b3JpZXMuZ2V0KFR5cGUpO1xuICAgICAgICBpZiAoZmFjdG9yeSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBpZiAoaXNOYXRpdmVGdW5jdGlvbihUeXBlKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtUeXBlLm5hbWV9IGlzIGEgbmF0aXZlIGZ1bmN0aW9uIGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHNhZmVseSBjb25zdHJ1Y3RlZCBieSBESS4gSWYgdGhpcyBpcyBpbnRlbnRpb25hbCwgcGxlYXNlIHVzZSBhIGNhbGxiYWNrIG9yIGNhY2hlZENhbGxiYWNrIHJlc29sdmVyLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmFjdG9yaWVzLnNldChUeXBlLCAoZmFjdG9yeSA9IG5ldyBGYWN0b3J5SW1wbChUeXBlLCBESS5nZXREZXBlbmRlbmNpZXMoVHlwZSkpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhY3Rvcnk7XG4gICAgfVxuICAgIHJlZ2lzdGVyRmFjdG9yeShrZXksIGZhY3RvcnkpIHtcbiAgICAgICAgZmFjdG9yaWVzLnNldChrZXksIGZhY3RvcnkpO1xuICAgIH1cbiAgICBjcmVhdGVDaGlsZChjb25maWcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDb250YWluZXJJbXBsKG51bGwsIE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY29uZmlnLCBjb25maWcsIHsgcGFyZW50TG9jYXRvcjogKCkgPT4gdGhpcyB9KSk7XG4gICAgfVxuICAgIGppdFJlZ2lzdGVyKGtleUFzVmFsdWUsIGhhbmRsZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBrZXlBc1ZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQXR0ZW1wdGVkIHRvIGppdFJlZ2lzdGVyIHNvbWV0aGluZyB0aGF0IGlzIG5vdCBhIGNvbnN0cnVjdG9yOiAnJHtrZXlBc1ZhbHVlfScuIERpZCB5b3UgZm9yZ2V0IHRvIHJlZ2lzdGVyIHRoaXMgZGVwZW5kZW5jeT9gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoSW5zdHJpbnNpY1R5cGVOYW1lcy5oYXMoa2V5QXNWYWx1ZS5uYW1lKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBdHRlbXB0ZWQgdG8gaml0UmVnaXN0ZXIgYW4gaW50cmluc2ljIHR5cGU6ICR7a2V5QXNWYWx1ZS5uYW1lfS4gRGlkIHlvdSBmb3JnZXQgdG8gYWRkIEBpbmplY3QoS2V5KWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1JlZ2lzdHJ5KGtleUFzVmFsdWUpKSB7XG4gICAgICAgICAgICBjb25zdCByZWdpc3RyYXRpb25SZXNvbHZlciA9IGtleUFzVmFsdWUucmVnaXN0ZXIoaGFuZGxlcik7XG4gICAgICAgICAgICBpZiAoIShyZWdpc3RyYXRpb25SZXNvbHZlciBpbnN0YW5jZW9mIE9iamVjdCkgfHxcbiAgICAgICAgICAgICAgICByZWdpc3RyYXRpb25SZXNvbHZlci5yZXNvbHZlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdSZXNvbHZlciA9IGhhbmRsZXIucmVzb2x2ZXJzLmdldChrZXlBc1ZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAobmV3UmVzb2x2ZXIgIT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXdSZXNvbHZlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQSB2YWxpZCByZXNvbHZlciB3YXMgbm90IHJldHVybmVkIGZyb20gdGhlIHN0YXRpYyByZWdpc3RlciBtZXRob2RcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVnaXN0cmF0aW9uUmVzb2x2ZXI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoa2V5QXNWYWx1ZS4kaXNJbnRlcmZhY2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQXR0ZW1wdGVkIHRvIGppdFJlZ2lzdGVyIGFuIGludGVyZmFjZTogJHtrZXlBc1ZhbHVlLmZyaWVuZGx5TmFtZX1gKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc29sdmVyID0gdGhpcy5jb25maWcuZGVmYXVsdFJlc29sdmVyKGtleUFzVmFsdWUsIGhhbmRsZXIpO1xuICAgICAgICAgICAgaGFuZGxlci5yZXNvbHZlcnMuc2V0KGtleUFzVmFsdWUsIHJlc29sdmVyKTtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlcjtcbiAgICAgICAgfVxuICAgIH1cbn1cbmNvbnN0IGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcbmZ1bmN0aW9uIGNhY2hlQ2FsbGJhY2tSZXN1bHQoZnVuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChoYW5kbGVyLCByZXF1ZXN0b3IsIHJlc29sdmVyKSB7XG4gICAgICAgIGlmIChjYWNoZS5oYXMocmVzb2x2ZXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGUuZ2V0KHJlc29sdmVyKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0ID0gZnVuKGhhbmRsZXIsIHJlcXVlc3RvciwgcmVzb2x2ZXIpO1xuICAgICAgICBjYWNoZS5zZXQocmVzb2x2ZXIsIHQpO1xuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xufVxuLyoqXG4gKiBZb3UgY2FuIHVzZSB0aGUgcmVzdWx0aW5nIFJlZ2lzdHJhdGlvbiBvZiBhbnkgb2YgdGhlIGZhY3RvcnkgbWV0aG9kc1xuICogdG8gcmVnaXN0ZXIgd2l0aCB0aGUgY29udGFpbmVyLlxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGBcbiAqIGNsYXNzIEZvbyB7fVxuICogY29uc3QgY29udGFpbmVyID0gREkuY3JlYXRlQ29udGFpbmVyKCk7XG4gKiBjb250YWluZXIucmVnaXN0ZXIoUmVnaXN0cmF0aW9uLmluc3RhbmNlKEZvbywgbmV3IEZvbygpKSk7XG4gKiBjb250YWluZXIuZ2V0KEZvbyk7XG4gKiBgYGBcbiAqXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBSZWdpc3RyYXRpb24gPSBPYmplY3QuZnJlZXplKHtcbiAgICAvKipcbiAgICAgKiBBbGxvd3MgeW91IHRvIHBhc3MgYW4gaW5zdGFuY2UuXG4gICAgICogRXZlcnkgdGltZSB5b3UgcmVxdWVzdCB0aGlzIHtAbGluayBLZXl9IHlvdSB3aWxsIGdldCB0aGlzIGluc3RhbmNlIGJhY2suXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGBgYFxuICAgICAqIFJlZ2lzdHJhdGlvbi5pbnN0YW5jZShGb28sIG5ldyBGb28oKSkpO1xuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogQHBhcmFtIGtleSAtIFRoZSBrZXkgdG8gcmVnaXN0ZXIgdGhlIGluc3RhbmNlIHVuZGVyLlxuICAgICAqIEBwYXJhbSB2YWx1ZSAtIFRoZSBpbnN0YW5jZSB0byByZXR1cm4gd2hlbiB0aGUga2V5IGlzIHJlcXVlc3RlZC5cbiAgICAgKi9cbiAgICBpbnN0YW5jZShrZXksIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVzb2x2ZXJJbXBsKGtleSwgMCAvKiBpbnN0YW5jZSAqLywgdmFsdWUpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBmcm9tIHRoZSBjbGFzcy5cbiAgICAgKiBFdmVyeSB0aW1lIHlvdSByZXF1ZXN0IHRoaXMge0BsaW5rIEtleX0geW91IHdpbGwgZ2V0IHRoZSBzYW1lIG9uZSBiYWNrLlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBgYGBcbiAgICAgKiBSZWdpc3RyYXRpb24uc2luZ2xldG9uKEZvbywgRm9vKTtcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEBwYXJhbSBrZXkgLSBUaGUga2V5IHRvIHJlZ2lzdGVyIHRoZSBzaW5nbGV0b24gdW5kZXIuXG4gICAgICogQHBhcmFtIHZhbHVlIC0gVGhlIGNsYXNzIHRvIGluc3RhbnRpYXRlIGFzIGEgc2luZ2xldG9uIHdoZW4gZmlyc3QgcmVxdWVzdGVkLlxuICAgICAqL1xuICAgIHNpbmdsZXRvbihrZXksIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVzb2x2ZXJJbXBsKGtleSwgMSAvKiBzaW5nbGV0b24gKi8sIHZhbHVlKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2UgZnJvbSBhIGNsYXNzLlxuICAgICAqIEV2ZXJ5IHRpbWUgeW91IHJlcXVlc3QgdGhpcyB7QGxpbmsgS2V5fSB5b3Ugd2lsbCBnZXQgYSBuZXcgaW5zdGFuY2UuXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGBgYFxuICAgICAqIFJlZ2lzdHJhdGlvbi5pbnN0YW5jZShGb28sIEZvbyk7XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBAcGFyYW0ga2V5IC0gVGhlIGtleSB0byByZWdpc3RlciB0aGUgaW5zdGFuY2UgdHlwZSB1bmRlci5cbiAgICAgKiBAcGFyYW0gdmFsdWUgLSBUaGUgY2xhc3MgdG8gaW5zdGFudGlhdGUgZWFjaCB0aW1lIHRoZSBrZXkgaXMgcmVxdWVzdGVkLlxuICAgICAqL1xuICAgIHRyYW5zaWVudChrZXksIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVzb2x2ZXJJbXBsKGtleSwgMiAvKiB0cmFuc2llbnQgKi8sIHZhbHVlKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIERlbGVnYXRlcyB0byBhIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIHByb3ZpZGUgdGhlIGRlcGVuZGVuY3kuXG4gICAgICogRXZlcnkgdGltZSB5b3UgcmVxdWVzdCB0aGlzIHtAbGluayBLZXl9IHRoZSBjYWxsYmFjayB3aWxsIGJlIGludm9rZWQgdG8gcHJvdmlkZVxuICAgICAqIHRoZSBkZXBlbmRlbmN5LlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBgYGBcbiAgICAgKiBSZWdpc3RyYXRpb24uY2FsbGJhY2soRm9vLCAoKSA9PiBuZXcgRm9vKCkpO1xuICAgICAqIFJlZ2lzdHJhdGlvbi5jYWxsYmFjayhCYXIsIChjOiBDb250YWluZXIpID0+IG5ldyBCYXIoYy5nZXQoRm9vKSkpO1xuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogQHBhcmFtIGtleSAtIFRoZSBrZXkgdG8gcmVnaXN0ZXIgdGhlIGNhbGxiYWNrIGZvci5cbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgLSBUaGUgZnVuY3Rpb24gdGhhdCBpcyBleHBlY3RlZCB0byByZXR1cm4gdGhlIGRlcGVuZGVuY3kuXG4gICAgICovXG4gICAgY2FsbGJhY2soa2V5LCBjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gbmV3IFJlc29sdmVySW1wbChrZXksIDMgLyogY2FsbGJhY2sgKi8sIGNhbGxiYWNrKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIERlbGVnYXRlcyB0byBhIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIHByb3ZpZGUgdGhlIGRlcGVuZGVuY3kgYW5kIHRoZW4gY2FjaGVzIHRoZVxuICAgICAqIGRlcGVuZGVuY3kgZm9yIGZ1dHVyZSByZXF1ZXN0cy5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogYGBgXG4gICAgICogUmVnaXN0cmF0aW9uLmNhY2hlZENhbGxiYWNrKEZvbywgKCkgPT4gbmV3IEZvbygpKTtcbiAgICAgKiBSZWdpc3RyYXRpb24uY2FjaGVkQ2FsbGJhY2soQmFyLCAoYzogQ29udGFpbmVyKSA9PiBuZXcgQmFyKGMuZ2V0KEZvbykpKTtcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEBwYXJhbSBrZXkgLSBUaGUga2V5IHRvIHJlZ2lzdGVyIHRoZSBjYWxsYmFjayBmb3IuXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIC0gVGhlIGZ1bmN0aW9uIHRoYXQgaXMgZXhwZWN0ZWQgdG8gcmV0dXJuIHRoZSBkZXBlbmRlbmN5LlxuICAgICAqIEByZW1hcmtzXG4gICAgICogSWYgeW91IHBhc3MgdGhlIHNhbWUgUmVnaXN0cmF0aW9uIHRvIGFub3RoZXIgY29udGFpbmVyLCB0aGUgc2FtZSBjYWNoZWQgdmFsdWUgd2lsbCBiZSB1c2VkLlxuICAgICAqIFNob3VsZCBhbGwgcmVmZXJlbmNlcyB0byB0aGUgcmVzb2x2ZXIgcmV0dXJuZWQgYmUgcmVtb3ZlZCwgdGhlIGNhY2hlIHdpbGwgZXhwaXJlLlxuICAgICAqL1xuICAgIGNhY2hlZENhbGxiYWNrKGtleSwgY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZXNvbHZlckltcGwoa2V5LCAzIC8qIGNhbGxiYWNrICovLCBjYWNoZUNhbGxiYWNrUmVzdWx0KGNhbGxiYWNrKSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGFsdGVybmF0ZSB7QGxpbmsgS2V5fSB0byByZXRyaWV2ZSBhbiBpbnN0YW5jZSBieS5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogYGBgXG4gICAgICogUmVnaXN0ZXIuc2luZ2xldG9uKEZvbywgRm9vKVxuICAgICAqIFJlZ2lzdGVyLmFsaWFzVG8oRm9vLCBNeUZvb3MpO1xuICAgICAqXG4gICAgICogY29udGFpbmVyLmdldEFsbChNeUZvb3MpIC8vIGNvbnRhaW5zIGFuIGluc3RhbmNlIG9mIEZvb1xuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogQHBhcmFtIG9yaWdpbmFsS2V5IC0gVGhlIG9yaWdpbmFsIGtleSB0aGF0IGhhcyBiZWVuIHJlZ2lzdGVyZWQuXG4gICAgICogQHBhcmFtIGFsaWFzS2V5IC0gVGhlIGFsaWFzIHRvIHRoZSBvcmlnaW5hbCBrZXkuXG4gICAgICovXG4gICAgYWxpYXNUbyhvcmlnaW5hbEtleSwgYWxpYXNLZXkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZXNvbHZlckltcGwoYWxpYXNLZXksIDUgLyogYWxpYXMgKi8sIG9yaWdpbmFsS2V5KTtcbiAgICB9LFxufSk7XG4vKiogQGludGVybmFsICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVLZXkoa2V5KSB7XG4gICAgaWYgKGtleSA9PT0gbnVsbCB8fCBrZXkgPT09IHZvaWQgMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJrZXkvdmFsdWUgY2Fubm90IGJlIG51bGwgb3IgdW5kZWZpbmVkLiBBcmUgeW91IHRyeWluZyB0byBpbmplY3QvcmVnaXN0ZXIgc29tZXRoaW5nIHRoYXQgZG9lc24ndCBleGlzdCB3aXRoIERJP1wiKTtcbiAgICB9XG59XG5mdW5jdGlvbiBidWlsZEFsbFJlc3BvbnNlKHJlc29sdmVyLCBoYW5kbGVyLCByZXF1ZXN0b3IpIHtcbiAgICBpZiAocmVzb2x2ZXIgaW5zdGFuY2VvZiBSZXNvbHZlckltcGwgJiZcbiAgICAgICAgcmVzb2x2ZXIuc3RyYXRlZ3kgPT09IDQgLyogYXJyYXkgKi8pIHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSByZXNvbHZlci5zdGF0ZTtcbiAgICAgICAgbGV0IGkgPSBzdGF0ZS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBuZXcgQXJyYXkoaSk7XG4gICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICAgIHJlc3VsdHNbaV0gPSBzdGF0ZVtpXS5yZXNvbHZlKGhhbmRsZXIsIHJlcXVlc3Rvcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxuICAgIHJldHVybiBbcmVzb2x2ZXIucmVzb2x2ZShoYW5kbGVyLCByZXF1ZXN0b3IpXTtcbn1cbmNvbnN0IGRlZmF1bHRGcmllbmRseU5hbWUgPSBcIihhbm9ueW1vdXMpXCI7XG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICAgIHJldHVybiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsKSB8fCB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIjtcbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHZhbHVlIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSBmbiAtIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIGB0cnVlYCBpcyB0aGUgZnVuY3Rpb24gaXMgYSBuYXRpdmUgZnVuY3Rpb24sIG90aGVyd2lzZSBgZmFsc2VgXG4gKi9cbmNvbnN0IGlzTmF0aXZlRnVuY3Rpb24gPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGxvb2t1cCA9IG5ldyBXZWFrTWFwKCk7XG4gICAgbGV0IGlzTmF0aXZlID0gZmFsc2U7XG4gICAgbGV0IHNvdXJjZVRleHQgPSBcIlwiO1xuICAgIGxldCBpID0gMDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIGlzTmF0aXZlID0gbG9va3VwLmdldChmbik7XG4gICAgICAgIGlmIChpc05hdGl2ZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBzb3VyY2VUZXh0ID0gZm4udG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGkgPSBzb3VyY2VUZXh0Lmxlbmd0aDtcbiAgICAgICAgICAgIC8vIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi8jcHJvZC1OYXRpdmVGdW5jdGlvblxuICAgICAgICAgICAgaXNOYXRpdmUgPVxuICAgICAgICAgICAgICAgIC8vIDI5IGlzIHRoZSBsZW5ndGggb2YgJ2Z1bmN0aW9uICgpIHsgW25hdGl2ZSBjb2RlXSB9JyB3aGljaCBpcyB0aGUgc21hbGxlc3QgbGVuZ3RoIG9mIGEgbmF0aXZlIGZ1bmN0aW9uIHN0cmluZ1xuICAgICAgICAgICAgICAgIGkgPj0gMjkgJiZcbiAgICAgICAgICAgICAgICAgICAgLy8gMTAwIHNlZW1zIHRvIGJlIGEgc2FmZSB1cHBlciBib3VuZCBvZiB0aGUgbWF4IGxlbmd0aCBvZiBhIG5hdGl2ZSBmdW5jdGlvbi4gSW4gQ2hyb21lIGFuZCBGRiBpdCdzIDU2LCBpbiBFZGdlIGl0J3MgNjEuXG4gICAgICAgICAgICAgICAgICAgIGkgPD0gMTAwICYmXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgd2hvbGUgaGV1cmlzdGljICpjb3VsZCogYmUgdHJpY2tlZCBieSBhIGNvbW1lbnQuIERvIHdlIG5lZWQgdG8gY2FyZSBhYm91dCB0aGF0P1xuICAgICAgICAgICAgICAgICAgICBzb3VyY2VUZXh0LmNoYXJDb2RlQXQoaSAtIDEpID09PSAweDdkICYmIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogdGhlIHNwZWMgaXMgYSBsaXR0bGUgdmFndWUgYWJvdXQgdGhlIHByZWNpc2UgY29uc3RyYWludHMsIHNvIHdlIGRvIG5lZWQgdG8gdGVzdCB0aGlzIGFjcm9zcyB2YXJpb3VzIGJyb3dzZXJzIHRvIG1ha2Ugc3VyZSBqdXN0IG9uZSB3aGl0ZXNwYWNlIGlzIGEgc2FmZSBhc3N1bXB0aW9uLlxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VUZXh0LmNoYXJDb2RlQXQoaSAtIDIpIDw9IDB4MjAgJiYgLy8gd2hpdGVzcGFjZVxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VUZXh0LmNoYXJDb2RlQXQoaSAtIDMpID09PSAweDVkICYmIC8vIF1cbiAgICAgICAgICAgICAgICAgICAgc291cmNlVGV4dC5jaGFyQ29kZUF0KGkgLSA0KSA9PT0gMHg2NSAmJiAvLyBlXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZVRleHQuY2hhckNvZGVBdChpIC0gNSkgPT09IDB4NjQgJiYgLy8gZFxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VUZXh0LmNoYXJDb2RlQXQoaSAtIDYpID09PSAweDZmICYmIC8vIG9cbiAgICAgICAgICAgICAgICAgICAgc291cmNlVGV4dC5jaGFyQ29kZUF0KGkgLSA3KSA9PT0gMHg2MyAmJiAvLyBjXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZVRleHQuY2hhckNvZGVBdChpIC0gOCkgPT09IDB4MjAgJiYgLy9cbiAgICAgICAgICAgICAgICAgICAgc291cmNlVGV4dC5jaGFyQ29kZUF0KGkgLSA5KSA9PT0gMHg2NSAmJiAvLyBlXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZVRleHQuY2hhckNvZGVBdChpIC0gMTApID09PSAweDc2ICYmIC8vIHZcbiAgICAgICAgICAgICAgICAgICAgc291cmNlVGV4dC5jaGFyQ29kZUF0KGkgLSAxMSkgPT09IDB4NjkgJiYgLy8gaVxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VUZXh0LmNoYXJDb2RlQXQoaSAtIDEyKSA9PT0gMHg3NCAmJiAvLyB0XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZVRleHQuY2hhckNvZGVBdChpIC0gMTMpID09PSAweDYxICYmIC8vIGFcbiAgICAgICAgICAgICAgICAgICAgc291cmNlVGV4dC5jaGFyQ29kZUF0KGkgLSAxNCkgPT09IDB4NmUgJiYgLy8gblxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VUZXh0LmNoYXJDb2RlQXQoaSAtIDE1KSA9PT0gMHg1ODsgLy8gW1xuICAgICAgICAgICAgbG9va3VwLnNldChmbiwgaXNOYXRpdmUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc05hdGl2ZTtcbiAgICB9O1xufSkoKTtcbmNvbnN0IGlzTnVtZXJpY0xvb2t1cCA9IHt9O1xuZnVuY3Rpb24gaXNBcnJheUluZGV4KHZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgdmFsdWUpIHtcbiAgICAgICAgY2FzZSBcIm51bWJlclwiOlxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID49IDAgJiYgKHZhbHVlIHwgMCkgPT09IHZhbHVlO1xuICAgICAgICBjYXNlIFwic3RyaW5nXCI6IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGlzTnVtZXJpY0xvb2t1cFt2YWx1ZV07XG4gICAgICAgICAgICBpZiAocmVzdWx0ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gdmFsdWUubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKGxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoaXNOdW1lcmljTG9va3VwW3ZhbHVlXSA9IGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBjaCA9IDA7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgY2ggPSB2YWx1ZS5jaGFyQ29kZUF0KGkpO1xuICAgICAgICAgICAgICAgIGlmICgoaSA9PT0gMCAmJiBjaCA9PT0gMHgzMCAmJiBsZW5ndGggPiAxKSAvKiBtdXN0IG5vdCBzdGFydCB3aXRoIDAgKi8gfHxcbiAgICAgICAgICAgICAgICAgICAgY2ggPCAweDMwIC8qIDAgKi8gfHxcbiAgICAgICAgICAgICAgICAgICAgY2ggPiAweDM5IC8qIDkgKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChpc051bWVyaWNMb29rdXBbdmFsdWVdID0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoaXNOdW1lcmljTG9va3VwW3ZhbHVlXSA9IHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgYXR0ciwgYm9vbGVhbkNvbnZlcnRlciwgRE9NLCBlbXB0eUFycmF5LCBvYnNlcnZhYmxlLCB9IGZyb20gXCJAbWljcm9zb2Z0L2Zhc3QtZWxlbWVudFwiO1xuaW1wb3J0IHsga2V5RW50ZXIgfSBmcm9tIFwiQG1pY3Jvc29mdC9mYXN0LXdlYi11dGlsaXRpZXNcIjtcbmNvbnN0IHByb3h5U2xvdE5hbWUgPSBcImZvcm0tYXNzb2NpYXRlZC1wcm94eVwiO1xuY29uc3QgRWxlbWVudEludGVybmFsc0tleSA9IFwiRWxlbWVudEludGVybmFsc1wiO1xuLyoqXG4gKiBAYWxwaGFcbiAqL1xuZXhwb3J0IGNvbnN0IHN1cHBvcnRzRWxlbWVudEludGVybmFscyA9IEVsZW1lbnRJbnRlcm5hbHNLZXkgaW4gd2luZG93ICYmXG4gICAgXCJzZXRGb3JtVmFsdWVcIiBpbiB3aW5kb3dbRWxlbWVudEludGVybmFsc0tleV0ucHJvdG90eXBlO1xuY29uc3QgSW50ZXJuYWxzTWFwID0gbmV3IFdlYWtNYXAoKTtcbi8qKlxuICogQmFzZSBmdW5jdGlvbiBmb3IgcHJvdmlkaW5nIEN1c3RvbSBFbGVtZW50IEZvcm0gQXNzb2NpYXRpb24uXG4gKlxuICogQGFscGhhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBGb3JtQXNzb2NpYXRlZChCYXNlQ3Rvcikge1xuICAgIGNvbnN0IEMgPSBjbGFzcyBleHRlbmRzIEJhc2VDdG9yIHtcbiAgICAgICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRyYWNrIHdoZXRoZXIgdGhlIHZhbHVlIGhhcyBiZWVuIGNoYW5nZWQgZnJvbSB0aGUgaW5pdGlhbCB2YWx1ZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLmRpcnR5VmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogU2V0cyB0aGUgZWxlbWVudCdzIGRpc2FibGVkIHN0YXRlLiBBIGRpc2FibGVkIGVsZW1lbnQgd2lsbCBub3QgYmUgaW5jbHVkZWQgZHVyaW5nIGZvcm0gc3VibWlzc2lvbi5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcmVtYXJrc1xuICAgICAgICAgICAgICogSFRNTCBBdHRyaWJ1dGU6IGRpc2FibGVkXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVGhlc2UgYXJlIGV2ZW50cyB0aGF0IGFyZSBzdGlsbCBmaXJlZCBieSB0aGUgcHJveHlcbiAgICAgICAgICAgICAqIGVsZW1lbnQgYmFzZWQgb24gdXNlciAvIHByb2dyYW1tYXRpYyBpbnRlcmFjdGlvbi5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBUaGUgcHJveHkgaW1wbGVtZW50YXRpb24gc2hvdWxkIGJlIHRyYW5zcGFyZW50IHRvXG4gICAgICAgICAgICAgKiB0aGUgYXBwIGF1dGhvciwgc28gYmxvY2sgdGhlc2UgZXZlbnRzIGZyb20gZW1pdHRpbmcuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMucHJveHlFdmVudHNUb0Jsb2NrID0gW1wiY2hhbmdlXCIsIFwiY2xpY2tcIl07XG4gICAgICAgICAgICB0aGlzLnByb3h5SW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFZhbHVlID0gdGhpcy5pbml0aWFsVmFsdWUgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmICghdGhpcy5lbGVtZW50SW50ZXJuYWxzKSB7XG4gICAgICAgICAgICAgICAgLy8gV2hlbiBlbGVtZW50SW50ZXJuYWxzIGlzIG5vdCBzdXBwb3J0ZWQsIGZvcm1SZXNldENhbGxiYWNrIGlzXG4gICAgICAgICAgICAgICAgLy8gYm91bmQgdG8gYW4gZXZlbnQgbGlzdGVuZXIsIHNvIGVuc3VyZSB0aGUgaGFuZGxlcidzIGB0aGlzYFxuICAgICAgICAgICAgICAgIC8vIGNvbnRleHQgaXMgY29ycmVjdC5cbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1SZXNldENhbGxiYWNrID0gdGhpcy5mb3JtUmVzZXRDYWxsYmFjay5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNdXN0IGV2YWx1YXRlIHRvIHRydWUgdG8gZW5hYmxlIGVsZW1lbnRJbnRlcm5hbHMuXG4gICAgICAgICAqIEZlYXR1cmUgZGV0ZWN0cyBBUEkgc3VwcG9ydCBhbmQgcmVzb2x2ZSByZXNwZWN0aXZlbHlcbiAgICAgICAgICpcbiAgICAgICAgICogQGludGVybmFsXG4gICAgICAgICAqL1xuICAgICAgICBzdGF0aWMgZ2V0IGZvcm1Bc3NvY2lhdGVkKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN1cHBvcnRzRWxlbWVudEludGVybmFscztcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgdmFsaWRpdHkgc3RhdGUgb2YgdGhlIGVsZW1lbnRcbiAgICAgICAgICpcbiAgICAgICAgICogQGFscGhhXG4gICAgICAgICAqL1xuICAgICAgICBnZXQgdmFsaWRpdHkoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50SW50ZXJuYWxzXG4gICAgICAgICAgICAgICAgPyB0aGlzLmVsZW1lbnRJbnRlcm5hbHMudmFsaWRpdHlcbiAgICAgICAgICAgICAgICA6IHRoaXMucHJveHkudmFsaWRpdHk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHJpZXZlIGEgcmVmZXJlbmNlIHRvIHRoZSBhc3NvY2lhdGVkIGZvcm0uXG4gICAgICAgICAqIFJldHVybnMgbnVsbCBpZiBub3QgYXNzb2NpYXRlZCB0byBhbnkgZm9ybS5cbiAgICAgICAgICpcbiAgICAgICAgICogQGFscGhhXG4gICAgICAgICAqL1xuICAgICAgICBnZXQgZm9ybSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRJbnRlcm5hbHMgPyB0aGlzLmVsZW1lbnRJbnRlcm5hbHMuZm9ybSA6IHRoaXMucHJveHkuZm9ybTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0cmlldmUgdGhlIGxvY2FsaXplZCB2YWxpZGF0aW9uIG1lc3NhZ2UsXG4gICAgICAgICAqIG9yIGN1c3RvbSB2YWxpZGF0aW9uIG1lc3NhZ2UgaWYgc2V0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYWxwaGFcbiAgICAgICAgICovXG4gICAgICAgIGdldCB2YWxpZGF0aW9uTWVzc2FnZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRJbnRlcm5hbHNcbiAgICAgICAgICAgICAgICA/IHRoaXMuZWxlbWVudEludGVybmFscy52YWxpZGF0aW9uTWVzc2FnZVxuICAgICAgICAgICAgICAgIDogdGhpcy5wcm94eS52YWxpZGF0aW9uTWVzc2FnZTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogV2hldGhlciB0aGUgZWxlbWVudCB3aWxsIGJlIHZhbGlkYXRlZCB3aGVuIHRoZVxuICAgICAgICAgKiBmb3JtIGlzIHN1Ym1pdHRlZFxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0IHdpbGxWYWxpZGF0ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRJbnRlcm5hbHNcbiAgICAgICAgICAgICAgICA/IHRoaXMuZWxlbWVudEludGVybmFscy53aWxsVmFsaWRhdGVcbiAgICAgICAgICAgICAgICA6IHRoaXMucHJveHkud2lsbFZhbGlkYXRlO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHJlZmVyZW5jZSB0byBhbGwgYXNzb2NpYXRlZCBsYWJlbCBlbGVtZW50c1xuICAgICAgICAgKi9cbiAgICAgICAgZ2V0IGxhYmVscygpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnRJbnRlcm5hbHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZShBcnJheS5mcm9tKHRoaXMuZWxlbWVudEludGVybmFscy5sYWJlbHMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMucHJveHkgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJlxuICAgICAgICAgICAgICAgIHRoaXMucHJveHkub3duZXJEb2N1bWVudCAmJlxuICAgICAgICAgICAgICAgIHRoaXMuaWQpIHtcbiAgICAgICAgICAgICAgICAvLyBMYWJlbHMgYXNzb2NpYXRlZCBieSB3cmFwcGluZyB0aGUgZWxlbWVudDogPGxhYmVsPjxjdXN0b20tZWxlbWVudD48L2N1c3RvbS1lbGVtZW50PjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50TGFiZWxzID0gdGhpcy5wcm94eS5sYWJlbHM7XG4gICAgICAgICAgICAgICAgLy8gTGFiZWxzIGFzc29jaWF0ZWQgdXNpbmcgdGhlIGBmb3JgIGF0dHJpYnV0ZVxuICAgICAgICAgICAgICAgIGNvbnN0IGZvckxhYmVscyA9IEFycmF5LmZyb20odGhpcy5wcm94eS5nZXRSb290Tm9kZSgpLnF1ZXJ5U2VsZWN0b3JBbGwoYFtmb3I9JyR7dGhpcy5pZH0nXWApKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsYWJlbHMgPSBwYXJlbnRMYWJlbHNcbiAgICAgICAgICAgICAgICAgICAgPyBmb3JMYWJlbHMuY29uY2F0KEFycmF5LmZyb20ocGFyZW50TGFiZWxzKSlcbiAgICAgICAgICAgICAgICAgICAgOiBmb3JMYWJlbHM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5mcmVlemUobGFiZWxzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbXB0eUFycmF5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnZva2VkIHdoZW4gdGhlIGB2YWx1ZWAgcHJvcGVydHkgY2hhbmdlc1xuICAgICAgICAgKiBAcGFyYW0gcHJldmlvdXMgLSB0aGUgcHJldmlvdXMgdmFsdWVcbiAgICAgICAgICogQHBhcmFtIG5leHQgLSB0aGUgbmV3IHZhbHVlXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZW1hcmtzXG4gICAgICAgICAqIElmIGVsZW1lbnRzIGV4dGVuZGluZyBgRm9ybUFzc29jaWF0ZWRgIGltcGxlbWVudCBhIGB2YWx1ZUNoYW5nZWRgIG1ldGhvZFxuICAgICAgICAgKiBUaGV5IG11c3QgYmUgc3VyZSB0byBpbnZva2UgYHN1cGVyLnZhbHVlQ2hhbmdlZChwcmV2aW91cywgbmV4dClgIHRvIGVuc3VyZVxuICAgICAgICAgKiBwcm9wZXIgZnVuY3Rpb25pbmcgb2YgYEZvcm1Bc3NvY2lhdGVkYFxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWVDaGFuZ2VkKHByZXZpb3VzLCBuZXh0KSB7XG4gICAgICAgICAgICB0aGlzLmRpcnR5VmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJveHkgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJveHkudmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5zZXRGb3JtVmFsdWUodGhpcy52YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudFZhbHVlQ2hhbmdlZCgpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmN1cnJlbnRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogSW52b2tlZCB3aGVuIHRoZSBgaW5pdGlhbFZhbHVlYCBwcm9wZXJ0eSBjaGFuZ2VzXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBwcmV2aW91cyAtIHRoZSBwcmV2aW91cyB2YWx1ZVxuICAgICAgICAgKiBAcGFyYW0gbmV4dCAtIHRoZSBuZXcgdmFsdWVcbiAgICAgICAgICpcbiAgICAgICAgICogQHJlbWFya3NcbiAgICAgICAgICogSWYgZWxlbWVudHMgZXh0ZW5kaW5nIGBGb3JtQXNzb2NpYXRlZGAgaW1wbGVtZW50IGEgYGluaXRpYWxWYWx1ZUNoYW5nZWRgIG1ldGhvZFxuICAgICAgICAgKiBUaGV5IG11c3QgYmUgc3VyZSB0byBpbnZva2UgYHN1cGVyLmluaXRpYWxWYWx1ZUNoYW5nZWQocHJldmlvdXMsIG5leHQpYCB0byBlbnN1cmVcbiAgICAgICAgICogcHJvcGVyIGZ1bmN0aW9uaW5nIG9mIGBGb3JtQXNzb2NpYXRlZGBcbiAgICAgICAgICovXG4gICAgICAgIGluaXRpYWxWYWx1ZUNoYW5nZWQocHJldmlvdXMsIG5leHQpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSB2YWx1ZSBpcyBjbGVhbiBhbmQgdGhlIGNvbXBvbmVudCBpcyBjb25uZWN0ZWQgdG8gdGhlIERPTVxuICAgICAgICAgICAgLy8gdGhlbiBzZXQgdmFsdWUgZXF1YWwgdG8gdGhlIGF0dHJpYnV0ZSB2YWx1ZS5cbiAgICAgICAgICAgIGlmICghdGhpcy5kaXJ0eVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuaW5pdGlhbFZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlydHlWYWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnZva2VkIHdoZW4gdGhlIGBkaXNhYmxlZGAgcHJvcGVydHkgY2hhbmdlc1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gcHJldmlvdXMgLSB0aGUgcHJldmlvdXMgdmFsdWVcbiAgICAgICAgICogQHBhcmFtIG5leHQgLSB0aGUgbmV3IHZhbHVlXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZW1hcmtzXG4gICAgICAgICAqIElmIGVsZW1lbnRzIGV4dGVuZGluZyBgRm9ybUFzc29jaWF0ZWRgIGltcGxlbWVudCBhIGBkaXNhYmxlZENoYW5nZWRgIG1ldGhvZFxuICAgICAgICAgKiBUaGV5IG11c3QgYmUgc3VyZSB0byBpbnZva2UgYHN1cGVyLmRpc2FibGVkQ2hhbmdlZChwcmV2aW91cywgbmV4dClgIHRvIGVuc3VyZVxuICAgICAgICAgKiBwcm9wZXIgZnVuY3Rpb25pbmcgb2YgYEZvcm1Bc3NvY2lhdGVkYFxuICAgICAgICAgKi9cbiAgICAgICAgZGlzYWJsZWRDaGFuZ2VkKHByZXZpb3VzLCBuZXh0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm94eSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm94eS5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBET00ucXVldWVVcGRhdGUoKCkgPT4gdGhpcy5jbGFzc0xpc3QudG9nZ2xlKFwiZGlzYWJsZWRcIiwgdGhpcy5kaXNhYmxlZCkpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnZva2VkIHdoZW4gdGhlIGBuYW1lYCBwcm9wZXJ0eSBjaGFuZ2VzXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBwcmV2aW91cyAtIHRoZSBwcmV2aW91cyB2YWx1ZVxuICAgICAgICAgKiBAcGFyYW0gbmV4dCAtIHRoZSBuZXcgdmFsdWVcbiAgICAgICAgICpcbiAgICAgICAgICogQHJlbWFya3NcbiAgICAgICAgICogSWYgZWxlbWVudHMgZXh0ZW5kaW5nIGBGb3JtQXNzb2NpYXRlZGAgaW1wbGVtZW50IGEgYG5hbWVDaGFuZ2VkYCBtZXRob2RcbiAgICAgICAgICogVGhleSBtdXN0IGJlIHN1cmUgdG8gaW52b2tlIGBzdXBlci5uYW1lQ2hhbmdlZChwcmV2aW91cywgbmV4dClgIHRvIGVuc3VyZVxuICAgICAgICAgKiBwcm9wZXIgZnVuY3Rpb25pbmcgb2YgYEZvcm1Bc3NvY2lhdGVkYFxuICAgICAgICAgKi9cbiAgICAgICAgbmFtZUNoYW5nZWQocHJldmlvdXMsIG5leHQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3h5IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3h5Lm5hbWUgPSB0aGlzLm5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludm9rZWQgd2hlbiB0aGUgYHJlcXVpcmVkYCBwcm9wZXJ0eSBjaGFuZ2VzXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBwcmV2aW91cyAtIHRoZSBwcmV2aW91cyB2YWx1ZVxuICAgICAgICAgKiBAcGFyYW0gbmV4dCAtIHRoZSBuZXcgdmFsdWVcbiAgICAgICAgICpcbiAgICAgICAgICogQHJlbWFya3NcbiAgICAgICAgICogSWYgZWxlbWVudHMgZXh0ZW5kaW5nIGBGb3JtQXNzb2NpYXRlZGAgaW1wbGVtZW50IGEgYHJlcXVpcmVkQ2hhbmdlZGAgbWV0aG9kXG4gICAgICAgICAqIFRoZXkgbXVzdCBiZSBzdXJlIHRvIGludm9rZSBgc3VwZXIucmVxdWlyZWRDaGFuZ2VkKHByZXZpb3VzLCBuZXh0KWAgdG8gZW5zdXJlXG4gICAgICAgICAqIHByb3BlciBmdW5jdGlvbmluZyBvZiBgRm9ybUFzc29jaWF0ZWRgXG4gICAgICAgICAqL1xuICAgICAgICByZXF1aXJlZENoYW5nZWQocHJldiwgbmV4dCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJveHkgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJveHkucmVxdWlyZWQgPSB0aGlzLnJlcXVpcmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgRE9NLnF1ZXVlVXBkYXRlKCgpID0+IHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcInJlcXVpcmVkXCIsIHRoaXMucmVxdWlyZWQpKTtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGVsZW1lbnQgaW50ZXJuYWxzIG9iamVjdC4gV2lsbCBvbmx5IGV4aXN0XG4gICAgICAgICAqIGluIGJyb3dzZXJzIHN1cHBvcnRpbmcgdGhlIGF0dGFjaEludGVybmFscyBBUElcbiAgICAgICAgICovXG4gICAgICAgIGdldCBlbGVtZW50SW50ZXJuYWxzKCkge1xuICAgICAgICAgICAgaWYgKCFzdXBwb3J0c0VsZW1lbnRJbnRlcm5hbHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBpbnRlcm5hbHMgPSBJbnRlcm5hbHNNYXAuZ2V0KHRoaXMpO1xuICAgICAgICAgICAgaWYgKCFpbnRlcm5hbHMpIHtcbiAgICAgICAgICAgICAgICBpbnRlcm5hbHMgPSB0aGlzLmF0dGFjaEludGVybmFscygpO1xuICAgICAgICAgICAgICAgIEludGVybmFsc01hcC5zZXQodGhpcywgaW50ZXJuYWxzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpbnRlcm5hbHM7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBpbnRlcm5hbFxuICAgICAgICAgKi9cbiAgICAgICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgdGhpcy5fa2V5cHJlc3NIYW5kbGVyKTtcbiAgICAgICAgICAgIGlmICghdGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmluaXRpYWxWYWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpcnR5VmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5lbGVtZW50SW50ZXJuYWxzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2hQcm94eSgpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNldFwiLCB0aGlzLmZvcm1SZXNldENhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBpbnRlcm5hbFxuICAgICAgICAgKi9cbiAgICAgICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgICAgICB0aGlzLnByb3h5RXZlbnRzVG9CbG9jay5mb3JFYWNoKG5hbWUgPT4gdGhpcy5wcm94eS5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIHRoaXMuc3RvcFByb3BhZ2F0aW9uKSk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZWxlbWVudEludGVybmFscyAmJiB0aGlzLmZvcm0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2V0XCIsIHRoaXMuZm9ybVJlc2V0Q2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm4gdGhlIGN1cnJlbnQgdmFsaWRpdHkgb2YgdGhlIGVsZW1lbnQuXG4gICAgICAgICAqL1xuICAgICAgICBjaGVja1ZhbGlkaXR5KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudEludGVybmFsc1xuICAgICAgICAgICAgICAgID8gdGhpcy5lbGVtZW50SW50ZXJuYWxzLmNoZWNrVmFsaWRpdHkoKVxuICAgICAgICAgICAgICAgIDogdGhpcy5wcm94eS5jaGVja1ZhbGlkaXR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybiB0aGUgY3VycmVudCB2YWxpZGl0eSBvZiB0aGUgZWxlbWVudC5cbiAgICAgICAgICogSWYgZmFsc2UsIGZpcmVzIGFuIGludmFsaWQgZXZlbnQgYXQgdGhlIGVsZW1lbnQuXG4gICAgICAgICAqL1xuICAgICAgICByZXBvcnRWYWxpZGl0eSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRJbnRlcm5hbHNcbiAgICAgICAgICAgICAgICA/IHRoaXMuZWxlbWVudEludGVybmFscy5yZXBvcnRWYWxpZGl0eSgpXG4gICAgICAgICAgICAgICAgOiB0aGlzLnByb3h5LnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0aGUgdmFsaWRpdHkgb2YgdGhlIGNvbnRyb2wuIEluIGNhc2VzIHdoZW4gdGhlIGVsZW1lbnRJbnRlcm5hbHMgb2JqZWN0IGlzIG5vdFxuICAgICAgICAgKiBhdmFpbGFibGUgKGFuZCB0aGUgcHJveHkgZWxlbWVudCBpcyB1c2VkIHRvIHJlcG9ydCB2YWxpZGl0eSksIHRoaXMgZnVuY3Rpb24gd2lsbFxuICAgICAgICAgKiBkbyBub3RoaW5nIHVubGVzcyBhIG1lc3NhZ2UgaXMgcHJvdmlkZWQsIGF0IHdoaWNoIHBvaW50IHRoZSBzZXRDdXN0b21WYWxpZGl0eSBtZXRob2RcbiAgICAgICAgICogb2YgdGhlIHByb3h5IGVsZW1lbnQgd2lsbCBiZSBpbnZva2VkIHdpdGggdGhlIHByb3ZpZGVkIG1lc3NhZ2UuXG4gICAgICAgICAqIEBwYXJhbSBmbGFncyAtIFZhbGlkaXR5IGZsYWdzXG4gICAgICAgICAqIEBwYXJhbSBtZXNzYWdlIC0gT3B0aW9uYWwgbWVzc2FnZSB0byBzdXBwbHlcbiAgICAgICAgICogQHBhcmFtIGFuY2hvciAtIE9wdGlvbmFsIGVsZW1lbnQgdXNlZCBieSBVQSB0byBkaXNwbGF5IGFuIGludGVyYWN0aXZlIHZhbGlkYXRpb24gVUlcbiAgICAgICAgICovXG4gICAgICAgIHNldFZhbGlkaXR5KGZsYWdzLCBtZXNzYWdlLCBhbmNob3IpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnRJbnRlcm5hbHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRJbnRlcm5hbHMuc2V0VmFsaWRpdHkoZmxhZ3MsIG1lc3NhZ2UsIGFuY2hvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgbWVzc2FnZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHRoaXMucHJveHkuc2V0Q3VzdG9tVmFsaWRpdHkobWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludm9rZWQgd2hlbiBhIGNvbm5lY3RlZCBjb21wb25lbnQncyBmb3JtIG9yIGZpZWxkc2V0IGhhcyBpdHMgZGlzYWJsZWRcbiAgICAgICAgICogc3RhdGUgY2hhbmdlZC5cbiAgICAgICAgICogQHBhcmFtIGRpc2FibGVkIC0gdGhlIGRpc2FibGVkIHZhbHVlIG9mIHRoZSBmb3JtIC8gZmllbGRzZXRcbiAgICAgICAgICovXG4gICAgICAgIGZvcm1EaXNhYmxlZENhbGxiYWNrKGRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZm9ybVJlc2V0Q2FsbGJhY2soKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5pbml0aWFsVmFsdWU7XG4gICAgICAgICAgICB0aGlzLmRpcnR5VmFsdWUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQXR0YWNoIHRoZSBwcm94eSBlbGVtZW50IHRvIHRoZSBET01cbiAgICAgICAgICovXG4gICAgICAgIGF0dGFjaFByb3h5KCkge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnByb3h5SW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3h5SW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMucHJveHkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgIHRoaXMucHJveHlFdmVudHNUb0Jsb2NrLmZvckVhY2gobmFtZSA9PiB0aGlzLnByb3h5LmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgdGhpcy5zdG9wUHJvcGFnYXRpb24pKTtcbiAgICAgICAgICAgICAgICAvLyBUaGVzZSBhcmUgdHlwaWNhbGx5IG1hcHBlZCB0byB0aGUgcHJveHkgZHVyaW5nXG4gICAgICAgICAgICAgICAgLy8gcHJvcGVydHkgY2hhbmdlIGNhbGxiYWNrcywgYnV0IGR1cmluZyBpbml0aWFsaXphdGlvblxuICAgICAgICAgICAgICAgIC8vIG9uIHRoZSBpbml0aWFsIGNhbGwgb2YgdGhlIGNhbGxiYWNrLCB0aGUgcHJveHkgaXNcbiAgICAgICAgICAgICAgICAvLyBzdGlsbCB1bmRlZmluZWQuIFdlIHNob3VsZCBmaW5kIGEgYmV0dGVyIHdheSB0byBhZGRyZXNzIHRoaXMuXG4gICAgICAgICAgICAgICAgdGhpcy5wcm94eS5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm94eS5yZXF1aXJlZCA9IHRoaXMucmVxdWlyZWQ7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm5hbWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm94eS5uYW1lID0gdGhpcy5uYW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMudmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm94eS52YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucHJveHkuc2V0QXR0cmlidXRlKFwic2xvdFwiLCBwcm94eVNsb3ROYW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3h5U2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzbG90XCIpO1xuICAgICAgICAgICAgICAgIHRoaXMucHJveHlTbG90LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgcHJveHlTbG90TmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAoX2EgPSB0aGlzLnNoYWRvd1Jvb3QpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hcHBlbmRDaGlsZCh0aGlzLnByb3h5U2xvdCk7XG4gICAgICAgICAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMucHJveHkpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZXRhY2ggdGhlIHByb3h5IGVsZW1lbnQgZnJvbSB0aGUgRE9NXG4gICAgICAgICAqL1xuICAgICAgICBkZXRhY2hQcm94eSgpIHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5wcm94eSk7XG4gICAgICAgICAgICAoX2EgPSB0aGlzLnNoYWRvd1Jvb3QpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZW1vdmVDaGlsZCh0aGlzLnByb3h5U2xvdCk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgdGhlIHZhbGlkaXR5IG9mIHRoZSBjdXN0b20gZWxlbWVudC4gQnkgZGVmYXVsdCB0aGlzIHVzZXMgdGhlIHByb3h5IGVsZW1lbnQgdG8gZGV0ZXJtaW5lXG4gICAgICAgICAqIHZhbGlkaXR5LCBidXQgdGhpcyBjYW4gYmUgZXh0ZW5kZWQgb3IgcmVwbGFjZWQgaW4gaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAqL1xuICAgICAgICB2YWxpZGF0ZSgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3h5IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFZhbGlkaXR5KHRoaXMucHJveHkudmFsaWRpdHksIHRoaXMucHJveHkudmFsaWRhdGlvbk1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBc3NvY2lhdGVzIHRoZSBwcm92aWRlZCB2YWx1ZSAoYW5kIG9wdGlvbmFsIHN0YXRlKSB3aXRoIHRoZSBwYXJlbnQgZm9ybS5cbiAgICAgICAgICogQHBhcmFtIHZhbHVlIC0gVGhlIHZhbHVlIHRvIHNldFxuICAgICAgICAgKiBAcGFyYW0gc3RhdGUgLSBUaGUgc3RhdGUgb2JqZWN0IHByb3ZpZGVkIHRvIGR1cmluZyBzZXNzaW9uIHJlc3RvcmVzIGFuZCB3aGVuIGF1dG9maWxsaW5nLlxuICAgICAgICAgKi9cbiAgICAgICAgc2V0Rm9ybVZhbHVlKHZhbHVlLCBzdGF0ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudEludGVybmFscykge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudEludGVybmFscy5zZXRGb3JtVmFsdWUodmFsdWUsIHN0YXRlIHx8IHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBfa2V5cHJlc3NIYW5kbGVyKGUpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIGtleUVudGVyOlxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtIGluc3RhbmNlb2YgSFRNTEZvcm1FbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJbXBsaWNpdCBzdWJtaXNzaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWZhdWx0QnV0dG9uID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoXCJbdHlwZT1zdWJtaXRdXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEJ1dHRvbiA9PT0gbnVsbCB8fCBkZWZhdWx0QnV0dG9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWZhdWx0QnV0dG9uLmNsaWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVzZWQgdG8gc3RvcCBwcm9wYWdhdGlvbiBvZiBwcm94eSBlbGVtZW50IGV2ZW50c1xuICAgICAgICAgKiBAcGFyYW0gZSAtIEV2ZW50IG9iamVjdFxuICAgICAgICAgKi9cbiAgICAgICAgc3RvcFByb3BhZ2F0aW9uKGUpIHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGF0dHIoeyBtb2RlOiBcImJvb2xlYW5cIiB9KShDLnByb3RvdHlwZSwgXCJkaXNhYmxlZFwiKTtcbiAgICBhdHRyKHsgbW9kZTogXCJmcm9tVmlld1wiLCBhdHRyaWJ1dGU6IFwidmFsdWVcIiB9KShDLnByb3RvdHlwZSwgXCJpbml0aWFsVmFsdWVcIik7XG4gICAgYXR0cih7IGF0dHJpYnV0ZTogXCJjdXJyZW50LXZhbHVlXCIgfSkoQy5wcm90b3R5cGUsIFwiY3VycmVudFZhbHVlXCIpO1xuICAgIGF0dHIoQy5wcm90b3R5cGUsIFwibmFtZVwiKTtcbiAgICBhdHRyKHsgbW9kZTogXCJib29sZWFuXCIgfSkoQy5wcm90b3R5cGUsIFwicmVxdWlyZWRcIik7XG4gICAgb2JzZXJ2YWJsZShDLnByb3RvdHlwZSwgXCJ2YWx1ZVwiKTtcbiAgICByZXR1cm4gQztcbn1cbi8qKlxuICogQGFscGhhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBDaGVja2FibGVGb3JtQXNzb2NpYXRlZChCYXNlQ3Rvcikge1xuICAgIGNsYXNzIEMgZXh0ZW5kcyBGb3JtQXNzb2NpYXRlZChCYXNlQ3Rvcikge1xuICAgIH1cbiAgICBjbGFzcyBEIGV4dGVuZHMgQyB7XG4gICAgICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIHN1cGVyKGFyZ3MpO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBUcmFja3Mgd2hldGhlciB0aGUgXCJjaGVja2VkXCIgcHJvcGVydHkgaGFzIGJlZW4gY2hhbmdlZC5cbiAgICAgICAgICAgICAqIFRoaXMgaXMgbmVjZXNzYXJ5IHRvIHByb3ZpZGUgY29uc2lzdGVudCBiZWhhdmlvciB3aXRoXG4gICAgICAgICAgICAgKiBub3JtYWwgaW5wdXQgY2hlY2tib3hlc1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLmRpcnR5Q2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBQcm92aWRlcyB0aGUgZGVmYXVsdCBjaGVja2VkbmVzcyBvZiB0aGUgaW5wdXQgZWxlbWVudFxuICAgICAgICAgICAgICogUGFzc2VkIGRvd24gdG8gcHJveHlcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAgICAgKiBAcmVtYXJrc1xuICAgICAgICAgICAgICogSFRNTCBBdHRyaWJ1dGU6IGNoZWNrZWRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5jaGVja2VkQXR0cmlidXRlID0gZmFsc2U7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRoZSBjaGVja2VkIHN0YXRlIG9mIHRoZSBjb250cm9sLlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAvLyBSZS1pbml0aWFsaXplIGRpcnR5Q2hlY2tlZCBiZWNhdXNlIGluaXRpYWxpemF0aW9uIG9mIG90aGVyIHZhbHVlc1xuICAgICAgICAgICAgLy8gY2F1c2VzIGl0IHRvIGJlY29tZSB0cnVlXG4gICAgICAgICAgICB0aGlzLmRpcnR5Q2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNoZWNrZWRBdHRyaWJ1dGVDaGFuZ2VkKCkge1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0Q2hlY2tlZCA9IHRoaXMuY2hlY2tlZEF0dHJpYnV0ZTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQGludGVybmFsXG4gICAgICAgICAqL1xuICAgICAgICBkZWZhdWx0Q2hlY2tlZENoYW5nZWQoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZGlydHlDaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgLy8gU2V0dGluZyB0aGlzLmNoZWNrZWQgd2lsbCBjYXVzZSB1cyB0byBlbnRlciBhIGRpcnR5IHN0YXRlLFxuICAgICAgICAgICAgICAgIC8vIGJ1dCBpZiB3ZSBhcmUgY2xlYW4gd2hlbiBkZWZhdWx0Q2hlY2tlZCBpcyBjaGFuZ2VkLCB3ZSB3YW50IHRvIHN0YXlcbiAgICAgICAgICAgICAgICAvLyBpbiBhIGNsZWFuIHN0YXRlLCBzbyByZXNldCB0aGlzLmRpcnR5Q2hlY2tlZFxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tlZCA9IHRoaXMuZGVmYXVsdENoZWNrZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJ0eUNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjaGVja2VkQ2hhbmdlZChwcmV2LCBuZXh0KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZGlydHlDaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJ0eUNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Q2hlY2tlZCA9IHRoaXMuY2hlY2tlZDtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRm9ybSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJveHkgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm94eS5jaGVja2VkID0gdGhpcy5jaGVja2VkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByZXYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoXCJjaGFuZ2VcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudENoZWNrZWRDaGFuZ2VkKHByZXYsIG5leHQpIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZCA9IHRoaXMuY3VycmVudENoZWNrZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlRm9ybSgpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5jaGVja2VkID8gdGhpcy52YWx1ZSA6IG51bGw7XG4gICAgICAgICAgICB0aGlzLnNldEZvcm1WYWx1ZSh2YWx1ZSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRm9ybSgpO1xuICAgICAgICB9XG4gICAgICAgIGZvcm1SZXNldENhbGxiYWNrKCkge1xuICAgICAgICAgICAgc3VwZXIuZm9ybVJlc2V0Q2FsbGJhY2soKTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZCA9ICEhdGhpcy5jaGVja2VkQXR0cmlidXRlO1xuICAgICAgICAgICAgdGhpcy5kaXJ0eUNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhdHRyKHsgYXR0cmlidXRlOiBcImNoZWNrZWRcIiwgbW9kZTogXCJib29sZWFuXCIgfSkoRC5wcm90b3R5cGUsIFwiY2hlY2tlZEF0dHJpYnV0ZVwiKTtcbiAgICBhdHRyKHsgYXR0cmlidXRlOiBcImN1cnJlbnQtY2hlY2tlZFwiLCBjb252ZXJ0ZXI6IGJvb2xlYW5Db252ZXJ0ZXIgfSkoRC5wcm90b3R5cGUsIFwiY3VycmVudENoZWNrZWRcIik7XG4gICAgb2JzZXJ2YWJsZShELnByb3RvdHlwZSwgXCJkZWZhdWx0Q2hlY2tlZFwiKTtcbiAgICBvYnNlcnZhYmxlKEQucHJvdG90eXBlLCBcImNoZWNrZWRcIik7XG4gICAgcmV0dXJuIEQ7XG59XG4iLCJpbXBvcnQgeyBfX2RlY29yYXRlIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBGQVNURWxlbWVudCwgb2JzZXJ2YWJsZSB9IGZyb20gXCJAbWljcm9zb2Z0L2Zhc3QtZWxlbWVudFwiO1xuaW1wb3J0IHsgQ29tcG9uZW50UHJlc2VudGF0aW9uLCBEZWZhdWx0Q29tcG9uZW50UHJlc2VudGF0aW9uLCB9IGZyb20gXCIuLi9kZXNpZ24tc3lzdGVtL2NvbXBvbmVudC1wcmVzZW50YXRpb24uanNcIjtcbi8qKlxuICogRGVmaW5lcyBhIGZvdW5kYXRpb24gZWxlbWVudCBjbGFzcyB0aGF0OlxuICogMS4gQ29ubmVjdHMgdGhlIGVsZW1lbnQgdG8gaXRzIENvbXBvbmVudFByZXNlbnRhdGlvblxuICogMi4gQWxsb3dzIHJlc29sdmluZyB0aGUgZWxlbWVudCB0ZW1wbGF0ZSBmcm9tIHRoZSBpbnN0YW5jZSBvciBDb21wb25lbnRQcmVzZW50YXRpb25cbiAqIDMuIEFsbG93cyByZXNvbHZpbmcgdGhlIGVsZW1lbnQgc3R5bGVzIGZyb20gdGhlIGluc3RhbmNlIG9yIENvbXBvbmVudFByZXNlbnRhdGlvblxuICpcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNsYXNzIEZvdW5kYXRpb25FbGVtZW50IGV4dGVuZHMgRkFTVEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLl9wcmVzZW50YXRpb24gPSB2b2lkIDA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEEgcHJvcGVydHkgd2hpY2ggcmVzb2x2ZXMgdGhlIENvbXBvbmVudFByZXNlbnRhdGlvbiBpbnN0YW5jZVxuICAgICAqIGZvciB0aGUgY3VycmVudCBjb21wb25lbnQuXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGdldCAkcHJlc2VudGF0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5fcHJlc2VudGF0aW9uID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHRoaXMuX3ByZXNlbnRhdGlvbiA9IENvbXBvbmVudFByZXNlbnRhdGlvbi5mb3JUYWcodGhpcy50YWdOYW1lLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fcHJlc2VudGF0aW9uO1xuICAgIH1cbiAgICB0ZW1wbGF0ZUNoYW5nZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLnRlbXBsYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuJGZhc3RDb250cm9sbGVyLnRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdHlsZXNDaGFuZ2VkKCkge1xuICAgICAgICBpZiAodGhpcy5zdHlsZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy4kZmFzdENvbnRyb2xsZXIuc3R5bGVzID0gdGhpcy5zdHlsZXM7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhlIGNvbm5lY3RlZCBjYWxsYmFjayBmb3IgdGhpcyBGQVNURWxlbWVudC5cbiAgICAgKiBAcmVtYXJrc1xuICAgICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgYnkgdGhlIHBsYXRmb3JtIHdoZW5ldmVyIHRoaXMgRm91bmRhdGlvbkVsZW1lbnRcbiAgICAgKiBiZWNvbWVzIGNvbm5lY3RlZCB0byB0aGUgZG9jdW1lbnQuXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBpZiAodGhpcy4kcHJlc2VudGF0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLiRwcmVzZW50YXRpb24uYXBwbHlUbyh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGFuIGVsZW1lbnQgcmVnaXN0cnkgZnVuY3Rpb24gd2l0aCBhIHNldCBvZiBlbGVtZW50IGRlZmluaXRpb24gZGVmYXVsdHMuXG4gICAgICogQHBhcmFtIGVsZW1lbnREZWZpbml0aW9uIC0gVGhlIGRlZmluaXRpb24gb2YgdGhlIGVsZW1lbnQgdG8gY3JlYXRlIHRoZSByZWdpc3RyeVxuICAgICAqIGZ1bmN0aW9uIGZvci5cbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgc3RhdGljIGNvbXBvc2UoZWxlbWVudERlZmluaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIChvdmVycmlkZURlZmluaXRpb24gPSB7fSkgPT4gbmV3IEZvdW5kYXRpb25FbGVtZW50UmVnaXN0cnkodGhpcyA9PT0gRm91bmRhdGlvbkVsZW1lbnRcbiAgICAgICAgICAgID8gY2xhc3MgZXh0ZW5kcyBGb3VuZGF0aW9uRWxlbWVudCB7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6IHRoaXMsIGVsZW1lbnREZWZpbml0aW9uLCBvdmVycmlkZURlZmluaXRpb24pO1xuICAgIH1cbn1cbl9fZGVjb3JhdGUoW1xuICAgIG9ic2VydmFibGVcbl0sIEZvdW5kYXRpb25FbGVtZW50LnByb3RvdHlwZSwgXCJ0ZW1wbGF0ZVwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgb2JzZXJ2YWJsZVxuXSwgRm91bmRhdGlvbkVsZW1lbnQucHJvdG90eXBlLCBcInN0eWxlc1wiLCB2b2lkIDApO1xuZnVuY3Rpb24gcmVzb2x2ZU9wdGlvbihvcHRpb24sIGNvbnRleHQsIGRlZmluaXRpb24pIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBvcHRpb24oY29udGV4dCwgZGVmaW5pdGlvbik7XG4gICAgfVxuICAgIHJldHVybiBvcHRpb247XG59XG4vKipcbiAqIFJlZ2lzdHJ5IGNhcGFibGUgb2YgZGVmaW5pbmcgcHJlc2VudGF0aW9uIHByb3BlcnRpZXMgZm9yIGEgRE9NIENvbnRhaW5lciBoaWVyYXJjaHkuXG4gKlxuICogQGludGVybmFsXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xuZXhwb3J0IGNsYXNzIEZvdW5kYXRpb25FbGVtZW50UmVnaXN0cnkge1xuICAgIGNvbnN0cnVjdG9yKHR5cGUsIGVsZW1lbnREZWZpbml0aW9uLCBvdmVycmlkZURlZmluaXRpb24pIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5lbGVtZW50RGVmaW5pdGlvbiA9IGVsZW1lbnREZWZpbml0aW9uO1xuICAgICAgICB0aGlzLm92ZXJyaWRlRGVmaW5pdGlvbiA9IG92ZXJyaWRlRGVmaW5pdGlvbjtcbiAgICAgICAgdGhpcy5kZWZpbml0aW9uID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLmVsZW1lbnREZWZpbml0aW9uKSwgdGhpcy5vdmVycmlkZURlZmluaXRpb24pO1xuICAgIH1cbiAgICByZWdpc3Rlcihjb250YWluZXIsIGNvbnRleHQpIHtcbiAgICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IHRoaXMuZGVmaW5pdGlvbjtcbiAgICAgICAgY29uc3Qgb3ZlcnJpZGVEZWZpbml0aW9uID0gdGhpcy5vdmVycmlkZURlZmluaXRpb247XG4gICAgICAgIGNvbnN0IHByZWZpeCA9IGRlZmluaXRpb24ucHJlZml4IHx8IGNvbnRleHQuZWxlbWVudFByZWZpeDtcbiAgICAgICAgY29uc3QgbmFtZSA9IGAke3ByZWZpeH0tJHtkZWZpbml0aW9uLmJhc2VOYW1lfWA7XG4gICAgICAgIGNvbnRleHQudHJ5RGVmaW5lRWxlbWVudCh7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgICAgICAgYmFzZUNsYXNzOiB0aGlzLmVsZW1lbnREZWZpbml0aW9uLmJhc2VDbGFzcyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiB4ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmVzZW50YXRpb24gPSBuZXcgRGVmYXVsdENvbXBvbmVudFByZXNlbnRhdGlvbihyZXNvbHZlT3B0aW9uKGRlZmluaXRpb24udGVtcGxhdGUsIHgsIGRlZmluaXRpb24pLCByZXNvbHZlT3B0aW9uKGRlZmluaXRpb24uc3R5bGVzLCB4LCBkZWZpbml0aW9uKSk7XG4gICAgICAgICAgICAgICAgeC5kZWZpbmVQcmVzZW50YXRpb24ocHJlc2VudGF0aW9uKTtcbiAgICAgICAgICAgICAgICBsZXQgc2hhZG93T3B0aW9ucyA9IHJlc29sdmVPcHRpb24oZGVmaW5pdGlvbi5zaGFkb3dPcHRpb25zLCB4LCBkZWZpbml0aW9uKTtcbiAgICAgICAgICAgICAgICBpZiAoeC5zaGFkb3dSb290TW9kZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgZGVzaWduIHN5c3RlbSBoYXMgb3ZlcnJpZGRlbiB0aGUgc2hhZG93IHJvb3QgbW9kZSwgd2UgbmVlZCBzcGVjaWFsIGhhbmRsaW5nLlxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hhZG93T3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIHNoYWRvdyBvcHRpb25zIHByZXNlbnQgaW4gdGhlIGRlZmluaXRpb24sIHRoZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVpdGhlciB0aGUgY29tcG9uZW50IGl0c2VsZiBoYXMgc3BlY2lmaWVkIGFuIG9wdGlvbiBvciB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlZ2lzdHJ5IGZ1bmN0aW9uIGhhcyBvdmVycmlkZGVuIGl0LlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvdmVycmlkZURlZmluaXRpb24uc2hhZG93T3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZXJlIHdlcmUgc2hhZG93IG9wdGlvbnMgcHJvdmlkZWQgYnkgdGhlIGNvbXBvbmVudCBhbmQgbm90IG92ZXJyaWRkZW4gYnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgcmVnaXN0cnkuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhZG93T3B0aW9ucy5tb2RlID0geC5zaGFkb3dSb290TW9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChzaGFkb3dPcHRpb25zICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgY29tcG9uZW50IGF1dGhvciBkaWQgbm90IHByb3ZpZGUgc2hhZG93IG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbmQgZGlkIG5vdCBudWxsIHRoZW0gb3V0IChsaWdodCBkb20gb3B0LWluKSB0aGVuIHRoZXlcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlcmUgcmVseWluZyBvbiB0aGUgRkFTVEVsZW1lbnQgZGVmYXVsdC4gU28sIGlmIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGVzaWduIHN5c3RlbSBwcm92aWRlcyBhIG1vZGUsIHdlIG5lZWQgdG8gY3JlYXRlIHRoZSBvcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdC5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRvd09wdGlvbnMgPSB7IG1vZGU6IHguc2hhZG93Um9vdE1vZGUgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB4LmRlZmluZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50T3B0aW9uczogcmVzb2x2ZU9wdGlvbihkZWZpbml0aW9uLmVsZW1lbnRPcHRpb25zLCB4LCBkZWZpbml0aW9uKSxcbiAgICAgICAgICAgICAgICAgICAgc2hhZG93T3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlczogcmVzb2x2ZU9wdGlvbihkZWZpbml0aW9uLmF0dHJpYnV0ZXMsIHgsIGRlZmluaXRpb24pLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuLyogZXNsaW50LWVuYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMgKi9cbiIsImltcG9ydCB7IF9fZGVjb3JhdGUgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IGF0dHIgfSBmcm9tIFwiQG1pY3Jvc29mdC9mYXN0LWVsZW1lbnRcIjtcbi8qKlxuICogU29tZSBzdGF0ZXMgYW5kIHByb3BlcnRpZXMgYXJlIGFwcGxpY2FibGUgdG8gYWxsIGhvc3QgbGFuZ3VhZ2UgZWxlbWVudHMgcmVnYXJkbGVzcyBvZiB3aGV0aGVyIGEgcm9sZSBpcyBhcHBsaWVkLlxuICogVGhlIGZvbGxvd2luZyBnbG9iYWwgc3RhdGVzIGFuZCBwcm9wZXJ0aWVzIGFyZSBzdXBwb3J0ZWQgYnkgYWxsIHJvbGVzIGFuZCBieSBhbGwgYmFzZSBtYXJrdXAgZWxlbWVudHMuXG4gKiB7QGxpbmsgaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLTEuMS8jZ2xvYmFsX3N0YXRlc31cbiAqXG4gKiBUaGlzIGlzIGludGVuZGVkIHRvIGJlIHVzZWQgYXMgYSBtaXhpbi4gQmUgc3VyZSB5b3UgZXh0ZW5kIEZBU1RFbGVtZW50LlxuICpcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNsYXNzIEFSSUFHbG9iYWxTdGF0ZXNBbmRQcm9wZXJ0aWVzIHtcbn1cbl9fZGVjb3JhdGUoW1xuICAgIGF0dHIoeyBhdHRyaWJ1dGU6IFwiYXJpYS1hdG9taWNcIiB9KVxuXSwgQVJJQUdsb2JhbFN0YXRlc0FuZFByb3BlcnRpZXMucHJvdG90eXBlLCBcImFyaWFBdG9taWNcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGF0dHIoeyBhdHRyaWJ1dGU6IFwiYXJpYS1idXN5XCIgfSlcbl0sIEFSSUFHbG9iYWxTdGF0ZXNBbmRQcm9wZXJ0aWVzLnByb3RvdHlwZSwgXCJhcmlhQnVzeVwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgYXR0cih7IGF0dHJpYnV0ZTogXCJhcmlhLWNvbnRyb2xzXCIgfSlcbl0sIEFSSUFHbG9iYWxTdGF0ZXNBbmRQcm9wZXJ0aWVzLnByb3RvdHlwZSwgXCJhcmlhQ29udHJvbHNcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGF0dHIoeyBhdHRyaWJ1dGU6IFwiYXJpYS1jdXJyZW50XCIgfSlcbl0sIEFSSUFHbG9iYWxTdGF0ZXNBbmRQcm9wZXJ0aWVzLnByb3RvdHlwZSwgXCJhcmlhQ3VycmVudFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgYXR0cih7IGF0dHJpYnV0ZTogXCJhcmlhLWRlc2NyaWJlZGJ5XCIgfSlcbl0sIEFSSUFHbG9iYWxTdGF0ZXNBbmRQcm9wZXJ0aWVzLnByb3RvdHlwZSwgXCJhcmlhRGVzY3JpYmVkYnlcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGF0dHIoeyBhdHRyaWJ1dGU6IFwiYXJpYS1kZXRhaWxzXCIgfSlcbl0sIEFSSUFHbG9iYWxTdGF0ZXNBbmRQcm9wZXJ0aWVzLnByb3RvdHlwZSwgXCJhcmlhRGV0YWlsc1wiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgYXR0cih7IGF0dHJpYnV0ZTogXCJhcmlhLWRpc2FibGVkXCIgfSlcbl0sIEFSSUFHbG9iYWxTdGF0ZXNBbmRQcm9wZXJ0aWVzLnByb3RvdHlwZSwgXCJhcmlhRGlzYWJsZWRcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGF0dHIoeyBhdHRyaWJ1dGU6IFwiYXJpYS1lcnJvcm1lc3NhZ2VcIiB9KVxuXSwgQVJJQUdsb2JhbFN0YXRlc0FuZFByb3BlcnRpZXMucHJvdG90eXBlLCBcImFyaWFFcnJvcm1lc3NhZ2VcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGF0dHIoeyBhdHRyaWJ1dGU6IFwiYXJpYS1mbG93dG9cIiB9KVxuXSwgQVJJQUdsb2JhbFN0YXRlc0FuZFByb3BlcnRpZXMucHJvdG90eXBlLCBcImFyaWFGbG93dG9cIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGF0dHIoeyBhdHRyaWJ1dGU6IFwiYXJpYS1oYXNwb3B1cFwiIH0pXG5dLCBBUklBR2xvYmFsU3RhdGVzQW5kUHJvcGVydGllcy5wcm90b3R5cGUsIFwiYXJpYUhhc3BvcHVwXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBhdHRyKHsgYXR0cmlidXRlOiBcImFyaWEtaGlkZGVuXCIgfSlcbl0sIEFSSUFHbG9iYWxTdGF0ZXNBbmRQcm9wZXJ0aWVzLnByb3RvdHlwZSwgXCJhcmlhSGlkZGVuXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBhdHRyKHsgYXR0cmlidXRlOiBcImFyaWEtaW52YWxpZFwiIH0pXG5dLCBBUklBR2xvYmFsU3RhdGVzQW5kUHJvcGVydGllcy5wcm90b3R5cGUsIFwiYXJpYUludmFsaWRcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGF0dHIoeyBhdHRyaWJ1dGU6IFwiYXJpYS1rZXlzaG9ydGN1dHNcIiB9KVxuXSwgQVJJQUdsb2JhbFN0YXRlc0FuZFByb3BlcnRpZXMucHJvdG90eXBlLCBcImFyaWFLZXlzaG9ydGN1dHNcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGF0dHIoeyBhdHRyaWJ1dGU6IFwiYXJpYS1sYWJlbFwiIH0pXG5dLCBBUklBR2xvYmFsU3RhdGVzQW5kUHJvcGVydGllcy5wcm90b3R5cGUsIFwiYXJpYUxhYmVsXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBhdHRyKHsgYXR0cmlidXRlOiBcImFyaWEtbGFiZWxsZWRieVwiIH0pXG5dLCBBUklBR2xvYmFsU3RhdGVzQW5kUHJvcGVydGllcy5wcm90b3R5cGUsIFwiYXJpYUxhYmVsbGVkYnlcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGF0dHIoeyBhdHRyaWJ1dGU6IFwiYXJpYS1saXZlXCIgfSlcbl0sIEFSSUFHbG9iYWxTdGF0ZXNBbmRQcm9wZXJ0aWVzLnByb3RvdHlwZSwgXCJhcmlhTGl2ZVwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgYXR0cih7IGF0dHJpYnV0ZTogXCJhcmlhLW93bnNcIiB9KVxuXSwgQVJJQUdsb2JhbFN0YXRlc0FuZFByb3BlcnRpZXMucHJvdG90eXBlLCBcImFyaWFPd25zXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBhdHRyKHsgYXR0cmlidXRlOiBcImFyaWEtcmVsZXZhbnRcIiB9KVxuXSwgQVJJQUdsb2JhbFN0YXRlc0FuZFByb3BlcnRpZXMucHJvdG90eXBlLCBcImFyaWFSZWxldmFudFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgYXR0cih7IGF0dHJpYnV0ZTogXCJhcmlhLXJvbGVkZXNjcmlwdGlvblwiIH0pXG5dLCBBUklBR2xvYmFsU3RhdGVzQW5kUHJvcGVydGllcy5wcm90b3R5cGUsIFwiYXJpYVJvbGVkZXNjcmlwdGlvblwiLCB2b2lkIDApO1xuIiwiaW1wb3J0IHsgaHRtbCwgcmVmIH0gZnJvbSBcIkBtaWNyb3NvZnQvZmFzdC1lbGVtZW50XCI7XG4vKipcbiAqIEEgbWl4aW4gY2xhc3MgaW1wbGVtZW50aW5nIHN0YXJ0IGFuZCBlbmQgZWxlbWVudHMuXG4gKiBUaGVzZSBhcmUgZ2VuZXJhbGx5IHVzZWQgdG8gZGVjb3JhdGUgdGV4dCBlbGVtZW50cyB3aXRoIGljb25zIG9yIG90aGVyIHZpc3VhbCBpbmRpY2F0b3JzLlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY2xhc3MgU3RhcnRFbmQge1xuICAgIGhhbmRsZVN0YXJ0Q29udGVudENoYW5nZSgpIHtcbiAgICAgICAgdGhpcy5zdGFydENvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwic3RhcnRcIiwgdGhpcy5zdGFydC5hc3NpZ25lZE5vZGVzKCkubGVuZ3RoID4gMCk7XG4gICAgfVxuICAgIGhhbmRsZUVuZENvbnRlbnRDaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMuZW5kQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJlbmRcIiwgdGhpcy5lbmQuYXNzaWduZWROb2RlcygpLmxlbmd0aCA+IDApO1xuICAgIH1cbn1cbi8qKlxuICogVGhlIHRlbXBsYXRlIGZvciB0aGUgZW5kIGVsZW1lbnQuXG4gKiBGb3IgdXNlIHdpdGgge0BsaW5rIFN0YXJ0RW5kfVxuICpcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IGVuZFNsb3RUZW1wbGF0ZSA9IChjb250ZXh0LCBkZWZpbml0aW9uKSA9PiBodG1sIGBcbiAgICA8c3BhblxuICAgICAgICBwYXJ0PVwiZW5kXCJcbiAgICAgICAgJHtyZWYoXCJlbmRDb250YWluZXJcIil9XG4gICAgICAgIGNsYXNzPSR7eCA9PiAoZGVmaW5pdGlvbi5lbmQgPyBcImVuZFwiIDogdm9pZCAwKX1cbiAgICA+XG4gICAgICAgIDxzbG90IG5hbWU9XCJlbmRcIiAke3JlZihcImVuZFwiKX0gQHNsb3RjaGFuZ2U9XCIke3ggPT4geC5oYW5kbGVFbmRDb250ZW50Q2hhbmdlKCl9XCI+XG4gICAgICAgICAgICAke2RlZmluaXRpb24uZW5kIHx8IFwiXCJ9XG4gICAgICAgIDwvc2xvdD5cbiAgICA8L3NwYW4+XG5gO1xuLyoqXG4gKiBUaGUgdGVtcGxhdGUgZm9yIHRoZSBzdGFydCBlbGVtZW50LlxuICogRm9yIHVzZSB3aXRoIHtAbGluayBTdGFydEVuZH1cbiAqXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBzdGFydFNsb3RUZW1wbGF0ZSA9IChjb250ZXh0LCBkZWZpbml0aW9uKSA9PiBodG1sIGBcbiAgICA8c3BhblxuICAgICAgICBwYXJ0PVwic3RhcnRcIlxuICAgICAgICAke3JlZihcInN0YXJ0Q29udGFpbmVyXCIpfVxuICAgICAgICBjbGFzcz1cIiR7eCA9PiAoZGVmaW5pdGlvbi5zdGFydCA/IFwic3RhcnRcIiA6IHZvaWQgMCl9XCJcbiAgICA+XG4gICAgICAgIDxzbG90XG4gICAgICAgICAgICBuYW1lPVwic3RhcnRcIlxuICAgICAgICAgICAgJHtyZWYoXCJzdGFydFwiKX1cbiAgICAgICAgICAgIEBzbG90Y2hhbmdlPVwiJHt4ID0+IHguaGFuZGxlU3RhcnRDb250ZW50Q2hhbmdlKCl9XCJcbiAgICAgICAgPlxuICAgICAgICAgICAgJHtkZWZpbml0aW9uLnN0YXJ0IHx8IFwiXCJ9XG4gICAgICAgIDwvc2xvdD5cbiAgICA8L3NwYW4+XG5gO1xuLyoqXG4gKiBUaGUgdGVtcGxhdGUgZm9yIHRoZSBlbmQgZWxlbWVudC5cbiAqIEZvciB1c2Ugd2l0aCB7QGxpbmsgU3RhcnRFbmR9XG4gKlxuICogQHB1YmxpY1xuICogQGRlcHJlY2F0ZWQgLSB1c2UgZW5kU2xvdFRlbXBsYXRlXG4gKi9cbmV4cG9ydCBjb25zdCBlbmRUZW1wbGF0ZSA9IGh0bWwgYFxuICAgIDxzcGFuIHBhcnQ9XCJlbmRcIiAke3JlZihcImVuZENvbnRhaW5lclwiKX0+XG4gICAgICAgIDxzbG90XG4gICAgICAgICAgICBuYW1lPVwiZW5kXCJcbiAgICAgICAgICAgICR7cmVmKFwiZW5kXCIpfVxuICAgICAgICAgICAgQHNsb3RjaGFuZ2U9XCIke3ggPT4geC5oYW5kbGVFbmRDb250ZW50Q2hhbmdlKCl9XCJcbiAgICAgICAgPjwvc2xvdD5cbiAgICA8L3NwYW4+XG5gO1xuLyoqXG4gKiBUaGUgdGVtcGxhdGUgZm9yIHRoZSBzdGFydCBlbGVtZW50LlxuICogRm9yIHVzZSB3aXRoIHtAbGluayBTdGFydEVuZH1cbiAqXG4gKiBAcHVibGljXG4gKiBAZGVwcmVjYXRlZCAtIHVzZSBzdGFydFNsb3RUZW1wbGF0ZVxuICovXG5leHBvcnQgY29uc3Qgc3RhcnRUZW1wbGF0ZSA9IGh0bWwgYFxuICAgIDxzcGFuIHBhcnQ9XCJzdGFydFwiICR7cmVmKFwic3RhcnRDb250YWluZXJcIil9PlxuICAgICAgICA8c2xvdFxuICAgICAgICAgICAgbmFtZT1cInN0YXJ0XCJcbiAgICAgICAgICAgICR7cmVmKFwic3RhcnRcIil9XG4gICAgICAgICAgICBAc2xvdGNoYW5nZT1cIiR7eCA9PiB4LmhhbmRsZVN0YXJ0Q29udGVudENoYW5nZSgpfVwiXG4gICAgICAgID48L3Nsb3Q+XG4gICAgPC9zcGFuPlxuYDtcbiIsIi8qKlxuICogQXBwbHkgbWl4aW5zIHRvIGEgY29uc3RydWN0b3IuXG4gKiBTb3VyY2VkIGZyb20ge0BsaW5rIGh0dHBzOi8vd3d3LnR5cGVzY3JpcHRsYW5nLm9yZy9kb2NzL2hhbmRib29rL21peGlucy5odG1sIHwgVHlwZVNjcmlwdCBEb2N1bWVudGF0aW9uIH0uXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBseU1peGlucyhkZXJpdmVkQ3RvciwgLi4uYmFzZUN0b3JzKSB7XG4gICAgYmFzZUN0b3JzLmZvckVhY2goYmFzZUN0b3IgPT4ge1xuICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhiYXNlQ3Rvci5wcm90b3R5cGUpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgICAgICBpZiAobmFtZSAhPT0gXCJjb25zdHJ1Y3RvclwiKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlcml2ZWRDdG9yLnByb3RvdHlwZSwgbmFtZSwgXG4gICAgICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb24gKi9cbiAgICAgICAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2VDdG9yLnByb3RvdHlwZSwgbmFtZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGJhc2VDdG9yLmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nID0gZGVyaXZlZEN0b3IuYXR0cmlidXRlcyB8fCBbXTtcbiAgICAgICAgICAgIGRlcml2ZWRDdG9yLmF0dHJpYnV0ZXMgPSBleGlzdGluZy5jb25jYXQoYmFzZUN0b3IuYXR0cmlidXRlcyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsIi8qKlxuICogS2V5IENvZGUgdmFsdWVzXG4gKiBAZGVwcmVjYXRlZCAtIEtleUNvZGVzIGFyZSBkZXByZWNhdGVkLCB1c2UgaW5kaXZpZHVhbCBzdHJpbmcga2V5IGV4cG9ydHNcbiAqL1xuZXhwb3J0IHZhciBLZXlDb2RlcztcbihmdW5jdGlvbiAoS2V5Q29kZXMpIHtcbiAgICBLZXlDb2Rlc1tLZXlDb2Rlc1tcImFsdFwiXSA9IDE4XSA9IFwiYWx0XCI7XG4gICAgS2V5Q29kZXNbS2V5Q29kZXNbXCJhcnJvd0Rvd25cIl0gPSA0MF0gPSBcImFycm93RG93blwiO1xuICAgIEtleUNvZGVzW0tleUNvZGVzW1wiYXJyb3dMZWZ0XCJdID0gMzddID0gXCJhcnJvd0xlZnRcIjtcbiAgICBLZXlDb2Rlc1tLZXlDb2Rlc1tcImFycm93UmlnaHRcIl0gPSAzOV0gPSBcImFycm93UmlnaHRcIjtcbiAgICBLZXlDb2Rlc1tLZXlDb2Rlc1tcImFycm93VXBcIl0gPSAzOF0gPSBcImFycm93VXBcIjtcbiAgICBLZXlDb2Rlc1tLZXlDb2Rlc1tcImJhY2tcIl0gPSA4XSA9IFwiYmFja1wiO1xuICAgIEtleUNvZGVzW0tleUNvZGVzW1wiYmFja1NsYXNoXCJdID0gMjIwXSA9IFwiYmFja1NsYXNoXCI7XG4gICAgS2V5Q29kZXNbS2V5Q29kZXNbXCJicmVha1wiXSA9IDE5XSA9IFwiYnJlYWtcIjtcbiAgICBLZXlDb2Rlc1tLZXlDb2Rlc1tcImNhcHNMb2NrXCJdID0gMjBdID0gXCJjYXBzTG9ja1wiO1xuICAgIEtleUNvZGVzW0tleUNvZGVzW1wiY2xvc2VCcmFja2V0XCJdID0gMjIxXSA9IFwiY2xvc2VCcmFja2V0XCI7XG4gICAgS2V5Q29kZXNbS2V5Q29kZXNbXCJjb2xvblwiXSA9IDE4Nl0gPSBcImNvbG9uXCI7XG4gICAgS2V5Q29kZXNbS2V5Q29kZXNbXCJjb2xvbjJcIl0gPSA1OV0gPSBcImNvbG9uMlwiO1xuICAgIEtleUNvZGVzW0tleUNvZGVzW1wiY29tbWFcIl0gPSAxODhdID0gXCJjb21tYVwiO1xuICAgIEtleUNvZGVzW0tleUNvZGVzW1wiY3RybFwiXSA9IDE3XSA9IFwiY3RybFwiO1xuICAgIEtleUNvZGVzW0tleUNvZGVzW1wiZGVsZXRlXCJdID0gNDZdID0gXCJkZWxldGVcIjtcbiAgICBLZXlDb2Rlc1tLZXlDb2Rlc1tcImVuZFwiXSA9IDM1XSA9IFwiZW5kXCI7XG4gICAgS2V5Q29kZXNbS2V5Q29kZXNbXCJlbnRlclwiXSA9IDEzXSA9IFwiZW50ZXJcIjtcbiAgICBLZXlDb2Rlc1tLZXlDb2Rlc1tcImVxdWFsc1wiXSA9IDE4N10gPSBcImVxdWFsc1wiO1xuICAgIEtleUNvZGVzW0tleUNvZGVzW1wiZXF1YWxzMlwiXSA9IDYxXSA9IFwiZXF1YWxzMlwiO1xuICAgIEtleUNvZGVzW0tleUNvZGVzW1wiZXF1YWxzM1wiXSA9IDEwN10gPSBcImVxdWFsczNcIjtcbiAgICBLZXlDb2Rlc1tLZXlDb2Rlc1tcImVzY2FwZVwiXSA9IDI3XSA9IFwiZXNjYXBlXCI7XG4gICAgS2V5Q29kZXNbS2V5Q29kZXNbXCJmb3J3YXJkU2xhc2hcIl0gPSAxOTFdID0gXCJmb3J3YXJkU2xhc2hcIjtcbiAgICBLZXlDb2Rlc1tLZXlDb2Rlc1tcImZ1bmN0aW9uMVwiXSA9IDExMl0gPSBcImZ1bmN0aW9uMVwiO1xuICAgIEtleUNvZGVzW0tleUNvZGVzW1wiZnVuY3Rpb24xMFwiXSA9IDEyMV0gPSBcImZ1bmN0aW9uMTBcIjtcbiAgICBLZXlDb2Rlc1tLZXlDb2Rlc1tcImZ1bmN0aW9uMTFcIl0gPSAxMjJdID0gXCJmdW5jdGlvbjExXCI7XG4gICAgS2V5Q29kZXNbS2V5Q29kZXNbXCJmdW5jdGlvbjEyXCJdID0gMTIzXSA9IFwiZnVuY3Rpb24xMlwiO1xuICAgIEtleUNvZGVzW0tleUNvZGVzW1wiZnVuY3Rpb24yXCJdID0gMTEzXSA9IFwiZnVuY3Rpb24yXCI7XG4gICAgS2V5Q29kZXNbS2V5Q29kZXNbXCJmdW5jdGlvbjNcIl0gPSAxMTRdID0gXCJmdW5jdGlvbjNcIjtcbiAgICBLZXlDb2Rlc1tLZXlDb2Rlc1tcImZ1bmN0aW9uNFwiXSA9IDExNV0gPSBcImZ1bmN0aW9uNFwiO1xuICAgIEtleUNvZGVzW0tleUNvZGVzW1wiZnVuY3Rpb241XCJdID0gMTE2XSA9IFwiZnVuY3Rpb241XCI7XG4gICAgS2V5Q29kZXNbS2V5Q29kZXNbXCJmdW5jdGlvbjZcIl0gPSAxMTddID0gXCJmdW5jdGlvbjZcIjtcbiAgICBLZXlDb2Rlc1tLZXlDb2Rlc1tcImZ1bmN0aW9uN1wiXSA9IDExOF0gPSBcImZ1bmN0aW9uN1wiO1xuICAgIEtleUNvZGVzW0tleUNvZGVzW1wiZnVuY3Rpb244XCJdID0gMTE5XSA9IFwiZnVuY3Rpb244XCI7XG4gICAgS2V5Q29kZXNbS2V5Q29kZXNbXCJmdW5jdGlvbjlcIl0gPSAxMjBdID0gXCJmdW5jdGlvbjlcIjtcbiAgICBLZXlDb2Rlc1tLZXlDb2Rlc1tcImhvbWVcIl0gPSAzNl0gPSBcImhvbWVcIjtcbiAgICBLZXlDb2Rlc1tLZXlDb2Rlc1tcImluc2VydFwiXSA9IDQ1XSA9IFwiaW5zZXJ0XCI7XG4gICAgS2V5Q29kZXNbS2V5Q29kZXNbXCJtZW51XCJdID0gOTNdID0gXCJtZW51XCI7XG4gICAgS2V5Q29kZXNbS2V5Q29kZXNbXCJtaW51c1wiXSA9IDE4OV0gPSBcIm1pbnVzXCI7XG4gICAgS2V5Q29kZXNbS2V5Q29kZXNbXCJtaW51czJcIl0gPSAxMDldID0gXCJtaW51czJcIjtcbiAgICBLZXlDb2Rlc1tLZXlDb2Rlc1tcIm51bUxvY2tcIl0gPSAxNDRdID0gXCJudW1Mb2NrXCI7XG4gICAgS2V5Q29kZXNbS2V5Q29kZXNbXCJudW1QYWQwXCJdID0gOTZdID0gXCJudW1QYWQwXCI7XG4gICAgS2V5Q29kZXNbS2V5Q29kZXNbXCJudW1QYWQxXCJdID0gOTddID0gXCJudW1QYWQxXCI7XG4gICAgS2V5Q29kZXNbS2V5Q29kZXNbXCJudW1QYWQyXCJdID0gOThdID0gXCJudW1QYWQyXCI7XG4gICAgS2V5Q29kZXNbS2V5Q29kZXNbXCJudW1QYWQzXCJdID0gOTldID0gXCJudW1QYWQzXCI7XG4gICAgS2V5Q29kZXNbS2V5Q29kZXNbXCJudW1QYWQ0XCJdID0gMTAwXSA9IFwibnVtUGFkNFwiO1xuICAgIEtleUNvZGVzW0tleUNvZGVzW1wibnVtUGFkNVwiXSA9IDEwMV0gPSBcIm51bVBhZDVcIjtcbiAgICBLZXlDb2Rlc1tLZXlDb2Rlc1tcIm51bVBhZDZcIl0gPSAxMDJdID0gXCJudW1QYWQ2XCI7XG4gICAgS2V5Q29kZXNbS2V5Q29kZXNbXCJudW1QYWQ3XCJdID0gMTAzXSA9IFwibnVtUGFkN1wiO1xuICAgIEtleUNvZGVzW0tleUNvZGVzW1wibnVtUGFkOFwiXSA9IDEwNF0gPSBcIm51bVBhZDhcIjtcbiAgICBLZXlDb2Rlc1tLZXlDb2Rlc1tcIm51bVBhZDlcIl0gPSAxMDVdID0gXCJudW1QYWQ5XCI7XG4gICAgS2V5Q29kZXNbS2V5Q29kZXNbXCJudW1QYWREaXZpZGVcIl0gPSAxMTFdID0gXCJudW1QYWREaXZpZGVcIjtcbiAgICBLZXlDb2Rlc1tLZXlDb2Rlc1tcIm51bVBhZERvdFwiXSA9IDExMF0gPSBcIm51bVBhZERvdFwiO1xuICAgIEtleUNvZGVzW0tleUNvZGVzW1wibnVtUGFkTWludXNcIl0gPSAxMDldID0gXCJudW1QYWRNaW51c1wiO1xuICAgIEtleUNvZGVzW0tleUNvZGVzW1wibnVtUGFkTXVsdGlwbHlcIl0gPSAxMDZdID0gXCJudW1QYWRNdWx0aXBseVwiO1xuICAgIEtleUNvZGVzW0tleUNvZGVzW1wibnVtUGFkUGx1c1wiXSA9IDEwN10gPSBcIm51bVBhZFBsdXNcIjtcbiAgICBLZXlDb2Rlc1tLZXlDb2Rlc1tcIm9wZW5CcmFja2V0XCJdID0gMjE5XSA9IFwib3BlbkJyYWNrZXRcIjtcbiAgICBLZXlDb2Rlc1tLZXlDb2Rlc1tcInBhZ2VEb3duXCJdID0gMzRdID0gXCJwYWdlRG93blwiO1xuICAgIEtleUNvZGVzW0tleUNvZGVzW1wicGFnZVVwXCJdID0gMzNdID0gXCJwYWdlVXBcIjtcbiAgICBLZXlDb2Rlc1tLZXlDb2Rlc1tcInBlcmlvZFwiXSA9IDE5MF0gPSBcInBlcmlvZFwiO1xuICAgIEtleUNvZGVzW0tleUNvZGVzW1wicHJpbnRcIl0gPSA0NF0gPSBcInByaW50XCI7XG4gICAgS2V5Q29kZXNbS2V5Q29kZXNbXCJxdW90ZVwiXSA9IDIyMl0gPSBcInF1b3RlXCI7XG4gICAgS2V5Q29kZXNbS2V5Q29kZXNbXCJzY3JvbGxMb2NrXCJdID0gMTQ1XSA9IFwic2Nyb2xsTG9ja1wiO1xuICAgIEtleUNvZGVzW0tleUNvZGVzW1wic2hpZnRcIl0gPSAxNl0gPSBcInNoaWZ0XCI7XG4gICAgS2V5Q29kZXNbS2V5Q29kZXNbXCJzcGFjZVwiXSA9IDMyXSA9IFwic3BhY2VcIjtcbiAgICBLZXlDb2Rlc1tLZXlDb2Rlc1tcInRhYlwiXSA9IDldID0gXCJ0YWJcIjtcbiAgICBLZXlDb2Rlc1tLZXlDb2Rlc1tcInRpbGRlXCJdID0gMTkyXSA9IFwidGlsZGVcIjtcbiAgICBLZXlDb2Rlc1tLZXlDb2Rlc1tcIndpbmRvd3NMZWZ0XCJdID0gOTFdID0gXCJ3aW5kb3dzTGVmdFwiO1xuICAgIEtleUNvZGVzW0tleUNvZGVzW1wid2luZG93c09wZXJhXCJdID0gMjE5XSA9IFwid2luZG93c09wZXJhXCI7XG4gICAgS2V5Q29kZXNbS2V5Q29kZXNbXCJ3aW5kb3dzUmlnaHRcIl0gPSA5Ml0gPSBcIndpbmRvd3NSaWdodFwiO1xufSkoS2V5Q29kZXMgfHwgKEtleUNvZGVzID0ge30pKTtcbi8qKlxuICogQGRlcHJlY2F0ZWQgLSBLZXlDb2RlcyBhcmUgZGVwcmVjYXRlZCwgdXNlIHN0cmluZyBrZXkgZXhwb3J0c1xuICovXG5leHBvcnQgY29uc3Qga2V5Q29kZUFsdCA9IDE4O1xuLyoqXG4gKiBAZGVwcmVjYXRlZCAtIEtleUNvZGVzIGFyZSBkZXByZWNhdGVkLCB1c2Ugc3RyaW5nIGtleSBleHBvcnRzXG4gKi9cbmV4cG9ydCBjb25zdCBrZXlDb2RlQXJyb3dEb3duID0gNDA7XG4vKipcbiAqIEBkZXByZWNhdGVkIC0gS2V5Q29kZXMgYXJlIGRlcHJlY2F0ZWQsIHVzZSBzdHJpbmcga2V5IGV4cG9ydHNcbiAqL1xuZXhwb3J0IGNvbnN0IGtleUNvZGVBcnJvd0xlZnQgPSAzNztcbi8qKlxuICogQGRlcHJlY2F0ZWQgLSBLZXlDb2RlcyBhcmUgZGVwcmVjYXRlZCwgdXNlIHN0cmluZyBrZXkgZXhwb3J0c1xuICovXG5leHBvcnQgY29uc3Qga2V5Q29kZUFycm93UmlnaHQgPSAzOTtcbi8qKlxuICogQGRlcHJlY2F0ZWQgLSBLZXlDb2RlcyBhcmUgZGVwcmVjYXRlZCwgdXNlIHN0cmluZyBrZXkgZXhwb3J0c1xuICovXG5leHBvcnQgY29uc3Qga2V5Q29kZUFycm93VXAgPSAzODtcbi8qKlxuICogQGRlcHJlY2F0ZWQgLSBLZXlDb2RlcyBhcmUgZGVwcmVjYXRlZCwgdXNlIHN0cmluZyBrZXkgZXhwb3J0c1xuICovXG5leHBvcnQgY29uc3Qga2V5Q29kZUJhY2sgPSA4O1xuLyoqXG4gKiBAZGVwcmVjYXRlZCAtIEtleUNvZGVzIGFyZSBkZXByZWNhdGVkLCB1c2Ugc3RyaW5nIGtleSBleHBvcnRzXG4gKi9cbmV4cG9ydCBjb25zdCBrZXlDb2RlQmFja1NsYXNoID0gMjIwO1xuLyoqXG4gKiBAZGVwcmVjYXRlZCAtIEtleUNvZGVzIGFyZSBkZXByZWNhdGVkLCB1c2Ugc3RyaW5nIGtleSBleHBvcnRzXG4gKi9cbmV4cG9ydCBjb25zdCBrZXlDb2RlQnJlYWsgPSAxOTtcbi8qKlxuICogQGRlcHJlY2F0ZWQgLSBLZXlDb2RlcyBhcmUgZGVwcmVjYXRlZCwgdXNlIHN0cmluZyBrZXkgZXhwb3J0c1xuICovXG5leHBvcnQgY29uc3Qga2V5Q29kZUNhcHNMb2NrID0gMjA7XG4vKipcbiAqIEBkZXByZWNhdGVkIC0gS2V5Q29kZXMgYXJlIGRlcHJlY2F0ZWQsIHVzZSBzdHJpbmcga2V5IGV4cG9ydHNcbiAqL1xuZXhwb3J0IGNvbnN0IGtleUNvZGVDbG9zZUJyYWNrZXQgPSAyMjE7XG4vKipcbiAqIEBkZXByZWNhdGVkIC0gS2V5Q29kZXMgYXJlIGRlcHJlY2F0ZWQsIHVzZSBzdHJpbmcga2V5IGV4cG9ydHNcbiAqL1xuZXhwb3J0IGNvbnN0IGtleUNvZGVDb2xvbiA9IDE4Njtcbi8qKlxuICogQGRlcHJlY2F0ZWQgLSBLZXlDb2RlcyBhcmUgZGVwcmVjYXRlZCwgdXNlIHN0cmluZyBrZXkgZXhwb3J0c1xuICovXG5leHBvcnQgY29uc3Qga2V5Q29kZUNvbG9uMiA9IDU5OyAvLyBPcGVyYSBhbmQgRmlyZWZveFxuLyoqXG4gKiBAZGVwcmVjYXRlZCAtIEtleUNvZGVzIGFyZSBkZXByZWNhdGVkLCB1c2Ugc3RyaW5nIGtleSBleHBvcnRzXG4gKi9cbmV4cG9ydCBjb25zdCBrZXlDb2RlQ29tbWEgPSAxODg7XG4vKipcbiAqIEBkZXByZWNhdGVkIC0gS2V5Q29kZXMgYXJlIGRlcHJlY2F0ZWQsIHVzZSBzdHJpbmcga2V5IGV4cG9ydHNcbiAqL1xuZXhwb3J0IGNvbnN0IGtleUNvZGVDdHJsID0gMTc7XG4vKipcbiAqIEBkZXByZWNhdGVkIC0gS2V5Q29kZXMgYXJlIGRlcHJlY2F0ZWQsIHVzZSBzdHJpbmcga2V5IGV4cG9ydHNcbiAqL1xuZXhwb3J0IGNvbnN0IGtleUNvZGVEZWxldGUgPSA0Njtcbi8qKlxuICogQGRlcHJlY2F0ZWQgLSBLZXlDb2RlcyBhcmUgZGVwcmVjYXRlZCwgdXNlIHN0cmluZyBrZXkgZXhwb3J0c1xuICovXG5leHBvcnQgY29uc3Qga2V5Q29kZUVuZCA9IDM1O1xuLyoqXG4gKiBAZGVwcmVjYXRlZCAtIEtleUNvZGVzIGFyZSBkZXByZWNhdGVkLCB1c2Ugc3RyaW5nIGtleSBleHBvcnRzXG4gKi9cbmV4cG9ydCBjb25zdCBrZXlDb2RlRW50ZXIgPSAxMztcbi8qKlxuICogQGRlcHJlY2F0ZWQgLSBLZXlDb2RlcyBhcmUgZGVwcmVjYXRlZCwgdXNlIHN0cmluZyBrZXkgZXhwb3J0c1xuICovXG5leHBvcnQgY29uc3Qga2V5Q29kZUVxdWFscyA9IDE4Nztcbi8qKlxuICogQGRlcHJlY2F0ZWQgLSBLZXlDb2RlcyBhcmUgZGVwcmVjYXRlZCwgdXNlIHN0cmluZyBrZXkgZXhwb3J0c1xuICovXG5leHBvcnQgY29uc3Qga2V5Q29kZUVxdWFsczIgPSA2MTsgLy8gT3BlcmFcbi8qKlxuICogQGRlcHJlY2F0ZWQgLSBLZXlDb2RlcyBhcmUgZGVwcmVjYXRlZCwgdXNlIHN0cmluZyBrZXkgZXhwb3J0c1xuICovXG5leHBvcnQgY29uc3Qga2V5Q29kZUVxdWFsczMgPSAxMDc7IC8vIEZpcmVmb3hcbi8qKlxuICogQGRlcHJlY2F0ZWQgLSBLZXlDb2RlcyBhcmUgZGVwcmVjYXRlZCwgdXNlIHN0cmluZyBrZXkgZXhwb3J0c1xuICovXG5leHBvcnQgY29uc3Qga2V5Q29kZUVzY2FwZSA9IDI3O1xuLyoqXG4gKiBAZGVwcmVjYXRlZCAtIEtleUNvZGVzIGFyZSBkZXByZWNhdGVkLCB1c2Ugc3RyaW5nIGtleSBleHBvcnRzXG4gKi9cbmV4cG9ydCBjb25zdCBrZXlDb2RlRm9yd2FyZFNsYXNoID0gMTkxO1xuLyoqXG4gKiBAZGVwcmVjYXRlZCAtIEtleUNvZGVzIGFyZSBkZXByZWNhdGVkLCB1c2Ugc3RyaW5nIGtleSBleHBvcnRzXG4gKi9cbmV4cG9ydCBjb25zdCBrZXlDb2RlRnVuY3Rpb24xID0gMTEyO1xuLyoqXG4gKiBAZGVwcmVjYXRlZCAtIEtleUNvZGVzIGFyZSBkZXByZWNhdGVkLCB1c2Ugc3RyaW5nIGtleSBleHBvcnRzXG4gKi9cbmV4cG9ydCBjb25zdCBrZXlDb2RlRnVuY3Rpb24xMCA9IDEyMTtcbi8qKlxuICogQGRlcHJlY2F0ZWQgLSBLZXlDb2RlcyBhcmUgZGVwcmVjYXRlZCwgdXNlIHN0cmluZyBrZXkgZXhwb3J0c1xuICovXG5leHBvcnQgY29uc3Qga2V5Q29kZUZ1bmN0aW9uMTEgPSAxMjI7XG4vKipcbiAqIEBkZXByZWNhdGVkIC0gS2V5Q29kZXMgYXJlIGRlcHJlY2F0ZWQsIHVzZSBzdHJpbmcga2V5IGV4cG9ydHNcbiAqL1xuZXhwb3J0IGNvbnN0IGtleUNvZGVGdW5jdGlvbjEyID0gMTIzO1xuLyoqXG4gKiBAZGVwcmVjYXRlZCAtIEtleUNvZGVzIGFyZSBkZXByZWNhdGVkLCB1c2Ugc3RyaW5nIGtleSBleHBvcnRzXG4gKi9cbmV4cG9ydCBjb25zdCBrZXlDb2RlRnVuY3Rpb24yID0gMTEzO1xuLyoqXG4gKiBAZGVwcmVjYXRlZCAtIEtleUNvZGVzIGFyZSBkZXByZWNhdGVkLCB1c2Ugc3RyaW5nIGtleSBleHBvcnRzXG4gKi9cbmV4cG9ydCBjb25zdCBrZXlDb2RlRnVuY3Rpb24zID0gMTE0O1xuLyoqXG4gKiBAZGVwcmVjYXRlZCAtIEtleUNvZGVzIGFyZSBkZXByZWNhdGVkLCB1c2Ugc3RyaW5nIGtleSBleHBvcnRzXG4gKi9cbmV4cG9ydCBjb25zdCBrZXlDb2RlRnVuY3Rpb240ID0gMTE1O1xuLyoqXG4gKiBAZGVwcmVjYXRlZCAtIEtleUNvZGVzIGFyZSBkZXByZWNhdGVkLCB1c2Ugc3RyaW5nIGtleSBleHBvcnRzXG4gKi9cbmV4cG9ydCBjb25zdCBrZXlDb2RlRnVuY3Rpb241ID0gMTE2O1xuLyoqXG4gKiBAZGVwcmVjYXRlZCAtIEtleUNvZGVzIGFyZSBkZXByZWNhdGVkLCB1c2Ugc3RyaW5nIGtleSBleHBvcnRzXG4gKi9cbmV4cG9ydCBjb25zdCBrZXlDb2RlRnVuY3Rpb242ID0gMTE3O1xuLyoqXG4gKiBAZGVwcmVjYXRlZCAtIEtleUNvZGVzIGFyZSBkZXByZWNhdGVkLCB1c2Ugc3RyaW5nIGtleSBleHBvcnRzXG4gKi9cbmV4cG9ydCBjb25zdCBrZXlDb2RlRnVuY3Rpb243ID0gMTE4O1xuLyoqXG4gKiBAZGVwcmVjYXRlZCAtIEtleUNvZGVzIGFyZSBkZXByZWNhdGVkLCB1c2Ugc3RyaW5nIGtleSBleHBvcnRzXG4gKi9cbmV4cG9ydCBjb25zdCBrZXlDb2RlRnVuY3Rpb244ID0gMTE5O1xuLyoqXG4gKiBAZGVwcmVjYXRlZCAtIEtleUNvZGVzIGFyZSBkZXByZWNhdGVkLCB1c2Ugc3RyaW5nIGtleSBleHBvcnRzXG4gKi9cbmV4cG9ydCBjb25zdCBrZXlDb2RlRnVuY3Rpb245ID0gMTIwO1xuLyoqXG4gKiBAZGVwcmVjYXRlZCAtIEtleUNvZGVzIGFyZSBkZXByZWNhdGVkLCB1c2Ugc3RyaW5nIGtleSBleHBvcnRzXG4gKi9cbmV4cG9ydCBjb25zdCBrZXlDb2RlSG9tZSA9IDM2O1xuLyoqXG4gKiBAZGVwcmVjYXRlZCAtIEtleUNvZGVzIGFyZSBkZXByZWNhdGVkLCB1c2Ugc3RyaW5nIGtleSBleHBvcnRzXG4gKi9cbmV4cG9ydCBjb25zdCBrZXlDb2RlSW5zZXJ0ID0gNDU7XG4vKipcbiAqIEBkZXByZWNhdGVkIC0gS2V5Q29kZXMgYXJlIGRlcHJlY2F0ZWQsIHVzZSBzdHJpbmcga2V5IGV4cG9ydHNcbiAqL1xuZXhwb3J0IGNvbnN0IGtleUNvZGVNZW51ID0gOTM7XG4vKipcbiAqIEBkZXByZWNhdGVkIC0gS2V5Q29kZXMgYXJlIGRlcHJlY2F0ZWQsIHVzZSBzdHJpbmcga2V5IGV4cG9ydHNcbiAqL1xuZXhwb3J0IGNvbnN0IGtleUNvZGVNaW51cyA9IDE4OTtcbi8qKlxuICogQGRlcHJlY2F0ZWQgLSBLZXlDb2RlcyBhcmUgZGVwcmVjYXRlZCwgdXNlIHN0cmluZyBrZXkgZXhwb3J0c1xuICovXG5leHBvcnQgY29uc3Qga2V5Q29kZU1pbnVzMiA9IDEwOTsgLy8gT3BlcmEgYW5kIEZpcmVmb3hcbi8qKlxuICogQGRlcHJlY2F0ZWQgLSBLZXlDb2RlcyBhcmUgZGVwcmVjYXRlZCwgdXNlIHN0cmluZyBrZXkgZXhwb3J0c1xuICovXG5leHBvcnQgY29uc3Qga2V5Q29kZU51bUxvY2sgPSAxNDQ7XG4vKipcbiAqIEBkZXByZWNhdGVkIC0gS2V5Q29kZXMgYXJlIGRlcHJlY2F0ZWQsIHVzZSBzdHJpbmcga2V5IGV4cG9ydHNcbiAqL1xuZXhwb3J0IGNvbnN0IGtleUNvZGVOdW1QYWQwID0gOTY7XG4vKipcbiAqIEBkZXByZWNhdGVkIC0gS2V5Q29kZXMgYXJlIGRlcHJlY2F0ZWQsIHVzZSBzdHJpbmcga2V5IGV4cG9ydHNcbiAqL1xuZXhwb3J0IGNvbnN0IGtleUNvZGVOdW1QYWQxID0gOTc7XG4vKipcbiAqIEBkZXByZWNhdGVkIC0gS2V5Q29kZXMgYXJlIGRlcHJlY2F0ZWQsIHVzZSBzdHJpbmcga2V5IGV4cG9ydHNcbiAqL1xuZXhwb3J0IGNvbnN0IGtleUNvZGVOdW1QYWQyID0gOTg7XG4vKipcbiAqIEBkZXByZWNhdGVkIC0gS2V5Q29kZXMgYXJlIGRlcHJlY2F0ZWQsIHVzZSBzdHJpbmcga2V5IGV4cG9ydHNcbiAqL1xuZXhwb3J0IGNvbnN0IGtleUNvZGVOdW1QYWQzID0gOTk7XG4vKipcbiAqIEBkZXByZWNhdGVkIC0gS2V5Q29kZXMgYXJlIGRlcHJlY2F0ZWQsIHVzZSBzdHJpbmcga2V5IGV4cG9ydHNcbiAqL1xuZXhwb3J0IGNvbnN0IGtleUNvZGVOdW1QYWQ0ID0gMTAwO1xuLyoqXG4gKiBAZGVwcmVjYXRlZCAtIEtleUNvZGVzIGFyZSBkZXByZWNhdGVkLCB1c2Ugc3RyaW5nIGtleSBleHBvcnRzXG4gKi9cbmV4cG9ydCBjb25zdCBrZXlDb2RlTnVtUGFkNSA9IDEwMTtcbi8qKlxuICogQGRlcHJlY2F0ZWQgLSBLZXlDb2RlcyBhcmUgZGVwcmVjYXRlZCwgdXNlIHN0cmluZyBrZXkgZXhwb3J0c1xuICovXG5leHBvcnQgY29uc3Qga2V5Q29kZU51bVBhZDYgPSAxMDI7XG4vKipcbiAqIEBkZXByZWNhdGVkIC0gS2V5Q29kZXMgYXJlIGRlcHJlY2F0ZWQsIHVzZSBzdHJpbmcga2V5IGV4cG9ydHNcbiAqL1xuZXhwb3J0IGNvbnN0IGtleUNvZGVOdW1QYWQ3ID0gMTAzO1xuLyoqXG4gKiBAZGVwcmVjYXRlZCAtIEtleUNvZGVzIGFyZSBkZXByZWNhdGVkLCB1c2Ugc3RyaW5nIGtleSBleHBvcnRzXG4gKi9cbmV4cG9ydCBjb25zdCBrZXlDb2RlTnVtUGFkOCA9IDEwNDtcbi8qKlxuICogQGRlcHJlY2F0ZWQgLSBLZXlDb2RlcyBhcmUgZGVwcmVjYXRlZCwgdXNlIHN0cmluZyBrZXkgZXhwb3J0c1xuICovXG5leHBvcnQgY29uc3Qga2V5Q29kZU51bVBhZDkgPSAxMDU7XG4vKipcbiAqIEBkZXByZWNhdGVkIC0gS2V5Q29kZXMgYXJlIGRlcHJlY2F0ZWQsIHVzZSBzdHJpbmcga2V5IGV4cG9ydHNcbiAqL1xuZXhwb3J0IGNvbnN0IGtleUNvZGVOdW1QYWREaXZpZGUgPSAxMTE7XG4vKipcbiAqIEBkZXByZWNhdGVkIC0gS2V5Q29kZXMgYXJlIGRlcHJlY2F0ZWQsIHVzZSBzdHJpbmcga2V5IGV4cG9ydHNcbiAqL1xuZXhwb3J0IGNvbnN0IGtleUNvZGVOdW1QYWREb3QgPSAxMTA7XG4vKipcbiAqIEBkZXByZWNhdGVkIC0gS2V5Q29kZXMgYXJlIGRlcHJlY2F0ZWQsIHVzZSBzdHJpbmcga2V5IGV4cG9ydHNcbiAqL1xuZXhwb3J0IGNvbnN0IGtleUNvZGVOdW1QYWRNaW51cyA9IDEwOTtcbi8qKlxuICogQGRlcHJlY2F0ZWQgLSBLZXlDb2RlcyBhcmUgZGVwcmVjYXRlZCwgdXNlIHN0cmluZyBrZXkgZXhwb3J0c1xuICovXG5leHBvcnQgY29uc3Qga2V5Q29kZU51bVBhZE11bHRpcGx5ID0gMTA2O1xuLyoqXG4gKiBAZGVwcmVjYXRlZCAtIEtleUNvZGVzIGFyZSBkZXByZWNhdGVkLCB1c2Ugc3RyaW5nIGtleSBleHBvcnRzXG4gKi9cbmV4cG9ydCBjb25zdCBrZXlDb2RlTnVtUGFkUGx1cyA9IDEwNztcbi8qKlxuICogQGRlcHJlY2F0ZWQgLSBLZXlDb2RlcyBhcmUgZGVwcmVjYXRlZCwgdXNlIHN0cmluZyBrZXkgZXhwb3J0c1xuICovXG5leHBvcnQgY29uc3Qga2V5Q29kZU9wZW5CcmFja2V0ID0gMjE5O1xuLyoqXG4gKiBAZGVwcmVjYXRlZCAtIEtleUNvZGVzIGFyZSBkZXByZWNhdGVkLCB1c2Ugc3RyaW5nIGtleSBleHBvcnRzXG4gKi9cbmV4cG9ydCBjb25zdCBrZXlDb2RlUGFnZURvd24gPSAzNDtcbi8qKlxuICogQGRlcHJlY2F0ZWQgLSBLZXlDb2RlcyBhcmUgZGVwcmVjYXRlZCwgdXNlIHN0cmluZyBrZXkgZXhwb3J0c1xuICovXG5leHBvcnQgY29uc3Qga2V5Q29kZVBhZ2VVcCA9IDMzO1xuLyoqXG4gKiBAZGVwcmVjYXRlZCAtIEtleUNvZGVzIGFyZSBkZXByZWNhdGVkLCB1c2Ugc3RyaW5nIGtleSBleHBvcnRzXG4gKi9cbmV4cG9ydCBjb25zdCBrZXlDb2RlUGVyaW9kID0gMTkwO1xuLyoqXG4gKiBAZGVwcmVjYXRlZCAtIEtleUNvZGVzIGFyZSBkZXByZWNhdGVkLCB1c2Ugc3RyaW5nIGtleSBleHBvcnRzXG4gKi9cbmV4cG9ydCBjb25zdCBrZXlDb2RlUHJpbnQgPSA0NDtcbi8qKlxuICogQGRlcHJlY2F0ZWQgLSBLZXlDb2RlcyBhcmUgZGVwcmVjYXRlZCwgdXNlIHN0cmluZyBrZXkgZXhwb3J0c1xuICovXG5leHBvcnQgY29uc3Qga2V5Q29kZVF1b3RlID0gMjIyO1xuLyoqXG4gKiBAZGVwcmVjYXRlZCAtIEtleUNvZGVzIGFyZSBkZXByZWNhdGVkLCB1c2Ugc3RyaW5nIGtleSBleHBvcnRzXG4gKi9cbmV4cG9ydCBjb25zdCBrZXlDb2RlU2Nyb2xsTG9jayA9IDE0NTtcbi8qKlxuICogQGRlcHJlY2F0ZWQgLSBLZXlDb2RlcyBhcmUgZGVwcmVjYXRlZCwgdXNlIHN0cmluZyBrZXkgZXhwb3J0c1xuICovXG5leHBvcnQgY29uc3Qga2V5Q29kZVNoaWZ0ID0gMTY7XG4vKipcbiAqIEBkZXByZWNhdGVkIC0gS2V5Q29kZXMgYXJlIGRlcHJlY2F0ZWQsIHVzZSBzdHJpbmcga2V5IGV4cG9ydHNcbiAqL1xuZXhwb3J0IGNvbnN0IGtleUNvZGVTcGFjZSA9IDMyO1xuLyoqXG4gKiBAZGVwcmVjYXRlZCAtIEtleUNvZGVzIGFyZSBkZXByZWNhdGVkLCB1c2Ugc3RyaW5nIGtleSBleHBvcnRzXG4gKi9cbmV4cG9ydCBjb25zdCBrZXlDb2RlVGFiID0gOTtcbi8qKlxuICogQGRlcHJlY2F0ZWQgLSBLZXlDb2RlcyBhcmUgZGVwcmVjYXRlZCwgdXNlIHN0cmluZyBrZXkgZXhwb3J0c1xuICovXG5leHBvcnQgY29uc3Qga2V5Q29kZVRpbGRlID0gMTkyO1xuLyoqXG4gKiBAZGVwcmVjYXRlZCAtIEtleUNvZGVzIGFyZSBkZXByZWNhdGVkLCB1c2Ugc3RyaW5nIGtleSBleHBvcnRzXG4gKi9cbmV4cG9ydCBjb25zdCBrZXlDb2RlV2luZG93c0xlZnQgPSA5MTtcbi8qKlxuICogQGRlcHJlY2F0ZWQgLSBLZXlDb2RlcyBhcmUgZGVwcmVjYXRlZCwgdXNlIHN0cmluZyBrZXkgZXhwb3J0c1xuICovXG5leHBvcnQgY29uc3Qga2V5Q29kZVdpbmRvd3NPcGVyYSA9IDIxOTsgLy8gT3BlcmFcbi8qKlxuICogQGRlcHJlY2F0ZWQgLSBLZXlDb2RlcyBhcmUgZGVwcmVjYXRlZCwgdXNlIHN0cmluZyBrZXkgZXhwb3J0c1xuICovXG5leHBvcnQgY29uc3Qga2V5Q29kZVdpbmRvd3NSaWdodCA9IDkyO1xuLyoqXG4gKiBTdHJpbmcgdmFsdWVzIGZvciB1c2Ugd2l0aCBLZXlib2FyZEV2ZW50LmtleVxuICovXG5leHBvcnQgY29uc3Qga2V5QXJyb3dEb3duID0gXCJBcnJvd0Rvd25cIjtcbmV4cG9ydCBjb25zdCBrZXlBcnJvd0xlZnQgPSBcIkFycm93TGVmdFwiO1xuZXhwb3J0IGNvbnN0IGtleUFycm93UmlnaHQgPSBcIkFycm93UmlnaHRcIjtcbmV4cG9ydCBjb25zdCBrZXlBcnJvd1VwID0gXCJBcnJvd1VwXCI7XG5leHBvcnQgY29uc3Qga2V5RW50ZXIgPSBcIkVudGVyXCI7XG5leHBvcnQgY29uc3Qga2V5RXNjYXBlID0gXCJFc2NhcGVcIjtcbmV4cG9ydCBjb25zdCBrZXlIb21lID0gXCJIb21lXCI7XG5leHBvcnQgY29uc3Qga2V5RW5kID0gXCJFbmRcIjtcbmV4cG9ydCBjb25zdCBrZXlGdW5jdGlvbjIgPSBcIkYyXCI7XG5leHBvcnQgY29uc3Qga2V5UGFnZURvd24gPSBcIlBhZ2VEb3duXCI7XG5leHBvcnQgY29uc3Qga2V5UGFnZVVwID0gXCJQYWdlVXBcIjtcbmV4cG9ydCBjb25zdCBrZXlTcGFjZSA9IFwiIFwiO1xuZXhwb3J0IGNvbnN0IGtleVRhYiA9IFwiVGFiXCI7XG5leHBvcnQgY29uc3Qga2V5QmFja3NwYWNlID0gXCJCYWNrc3BhY2VcIjtcbmV4cG9ydCBjb25zdCBrZXlEZWxldGUgPSBcIkRlbGV0ZVwiO1xuZXhwb3J0IGNvbnN0IEFycm93S2V5cyA9IHtcbiAgICBBcnJvd0Rvd246IGtleUFycm93RG93bixcbiAgICBBcnJvd0xlZnQ6IGtleUFycm93TGVmdCxcbiAgICBBcnJvd1JpZ2h0OiBrZXlBcnJvd1JpZ2h0LFxuICAgIEFycm93VXA6IGtleUFycm93VXAsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgKiBmcm9tICcuL2J1dHRvbic7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=