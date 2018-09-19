(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Lezhin"] = factory();
	else
		root["Lezhin"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(10)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(4);

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Card = function () {
    function Card() {
        (0, _classCallCheck3.default)(this, Card);

        // 카드 데이터
        this._data = __webpack_require__(26);
    }

    (0, _createClass3.default)(Card, [{
        key: 'getMaleCards',
        value: function getMaleCards() {
            return this._data[1].items;
        }
    }, {
        key: 'getFemaleCards',
        value: function getFemaleCards() {
            return this._data[0].items;
        }

        /**
         * 전달받은 Array 객체를 무작위로 다시 섞는다.
         */

    }, {
        key: 'shuffle',
        value: function shuffle() {
            var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

            var newList = JSON.parse((0, _stringify2.default)(v));
            var r = void 0,
                tmp = void 0;
            var length = v.length;

            for (var i = length; --i;) {
                r = Math.floor(Math.random() * i);

                tmp = newList[i - 1];
                newList[i - 1] = newList[r];
                newList[r] = tmp;
            }

            return newList;
        }
    }]);
    return Card;
}();

module.exports = Card;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(13), __esModule: true };

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(14);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var core = __webpack_require__(0);
var ctx = __webpack_require__(17);
var hide = __webpack_require__(19);
var has = __webpack_require__(25);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(20);
var IE8_DOM_DEFINE = __webpack_require__(21);
var toPrimitive = __webpack_require__(23);
var dP = Object.defineProperty;

exports.f = __webpack_require__(1) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by mohwa on 2018. 4. 19..
 */

__webpack_require__(12);

var Card = __webpack_require__(3);
var Tournament = __webpack_require__(27);

function load() {
    var card = new Card();
    // let cardList = card.getFemaleCards();
    var cardList = card.getMaleCards();

    var tournament = new Tournament(cardList);
    tournament.init();
}

window.onload = load;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(0);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(15), __esModule: true };

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(16);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(7);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(1), 'Object', { defineProperty: __webpack_require__(9).f });


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(18);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(9);
var createDesc = __webpack_require__(24);
module.exports = __webpack_require__(1) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(1) && !__webpack_require__(10)(function () {
  return Object.defineProperty(__webpack_require__(22)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2);
var document = __webpack_require__(8).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(2);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = [{"gender":"female","items":[{"id":"1","name":"최지연","age":28,"photo":"http://cfile29.uf.tistory.com/image/2623B0385409202F2BD8A7"},{"id":"2","name":"임수정","age":35,"photo":"http://cfile24.uf.tistory.com/image/2607113C5409203110A10D"},{"id":"3","name":"소희","age":27,"photo":"http://img.etoday.co.kr/pto_db/2017/08/20170810084001_1110719_468_592.JPG"},{"id":"4","name":"박소담","age":22,"photo":"http://img.etoday.co.kr/pto_db/2017/08/20170810084102_1110722_475_551.JPG"},{"id":"5","name":"슬기","age":24,"photo":"http://img.etoday.co.kr/pto_db/2017/08/20170810084141_1110724_575_576.JPG"},{"id":"6","name":"김고은","age":25,"photo":"http://img.etoday.co.kr/pto_db/2017/08/20170810084228_1110728_467_556.JPG"},{"id":"7","name":"한예리","age":30,"photo":"http://img.etoday.co.kr/pto_db/2017/08/20170810084319_1110731_586_530.JPG"},{"id":"8","name":"이솜","age":28,"photo":"http://img.etoday.co.kr/pto_db/2017/08/20170810084513_1110736_502_572.JPG"},{"id":"9","name":"쯔위","age":21,"photo":"http://img.gqkorea.co.kr/gq/2016/04/style_570624a2751a6.jpg"},{"id":"10","name":"신민아","age":37,"photo":"http://cfile23.uf.tistory.com/image/23639F3A50EE76AD289F67"},{"id":"11","name":"제시카","age":32,"photo":"http://cfile9.uf.tistory.com/image/2008793A50EE76AE0FFFCF"},{"id":"12","name":"한예슬","age":37,"photo":"http://cfile24.uf.tistory.com/image/1544B63850EE76AF0A0ABF"},{"id":"13","name":"유진","age":39,"photo":"http://cfile4.uf.tistory.com/image/141EC83850EE76B02BA34A"},{"id":"14","name":"김연아","age":28,"photo":"http://i.imgur.com/m0ydh8p.jpg"},{"id":"15","name":"송혜교","age":32,"photo":"http://i.imgur.com/dsUJWBh.jpg"},{"id":"16","name":"이연희","age":28,"photo":"http://imgnews.naver.net/image/008/2014/05/21/2014052116424515755_1_99_20140521192703.jpg"}]},{"gender":"male","items":[{"id":"1","name":"정우성","age":45,"photo":"https://mblogthumb-phinf.pstatic.net/20151116_190/wnqkfkrlds_1447647439412giCAY_JPEG/20150414101649_rIdo4cxZ_jeongwsng.jpg?type=w2"},{"id":"2","name":"송중기","age":34,"photo":"https://mblogthumb-phinf.pstatic.net/20151116_98/wnqkfkrlds_14476476271101WfXC_JPEG/VLGlv18.jpg?type=w2"},{"id":"3","name":"닉쿤","age":29,"photo":"https://mblogthumb-phinf.pstatic.net/20151116_97/wnqkfkrlds_1447647755196X7w3V_JPEG/1_71.jpg?type=w2"},{"id":"4","name":"소지섭","age":42,"photo":"https://mblogthumb-phinf.pstatic.net/20151116_285/wnqkfkrlds_14476478365045JW2l_JPEG/2011111754707_2011111721581.jpg?type=w2"},{"id":"5","name":"고수","age":40,"photo":"https://mblogthumb-phinf.pstatic.net/20151116_167/wnqkfkrlds_14476480055846yn4W_JPEG/%BB%E7%BA%BB_-_HHHHHHHHH.jpg?type=w2"},{"id":"6","name":"공유","age":41,"photo":"https://mblogthumb-phinf.pstatic.net/20151116_61/wnqkfkrlds_1447648136388yjLIW_JPEG/style_5554844dd8452.jpg?type=w2"},{"id":"7","name":"조인성","age":43,"photo":"https://mblogthumb-phinf.pstatic.net/20151116_65/wnqkfkrlds_1447648266133q9Tlv_JPEG/20130208_1360281107_30510900_1.jpg?type=w2"},{"id":"8","name":"현빈","age":40,"photo":"https://mblogthumb-phinf.pstatic.net/20151116_124/wnqkfkrlds_1447648441671FsasK_JPEG/img_keyvisual.jpg?type=w2"},{"id":"9","name":"강동원","age":40,"photo":"https://mblogthumb-phinf.pstatic.net/20151116_106/wnqkfkrlds_1447648807679gOsDk_JPEG/37488_46270_2049.jpg?type=w2"},{"id":"10","name":"원빈","age":40,"photo":"https://mblogthumb-phinf.pstatic.net/20151116_16/wnqkfkrlds_1447648966214yvXrz_JPEG/d0014374_51a54dd8ccebb.jpg?type=w2"},{"id":"11","name":"지코","age":33,"photo":"https://mblogthumb-phinf.pstatic.net/20160221_238/cindy________1455990567933WVaL8_JPEG/1.jpg?type=w2"},{"id":"12","name":"홍종현","age":32,"photo":"https://mblogthumb-phinf.pstatic.net/20160221_120/cindy________1455990787414QMwEy_JPEG/8.jpg?type=w2"},{"id":"13","name":"류준열","age":27,"photo":"https://mblogthumb-phinf.pstatic.net/20160221_84/cindy________1455991101609MD0Tu_JPEG/20.jpg?type=w2"},{"id":"14","name":"김수현","age":31,"photo":"https://mblogthumb-phinf.pstatic.net/20160221_218/cindy________1455991327708uzyR7_JPEG/30.jpg?type=w2"},{"id":"15","name":"박서준","age":32,"photo":"https://mblogthumb-phinf.pstatic.net/20160221_199/cindy________1455991510519twxPT_JPEG/43.jpg?type=w2"},{"id":"16","name":"유아인","age":30,"photo":"https://mblogthumb-phinf.pstatic.net/20160221_80/cindy________14559921189689MzVE_JPEG/59.jpg?type=w2"}]}]

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _log = __webpack_require__(28);

var _log2 = _interopRequireDefault(_log);

var _stringify = __webpack_require__(4);

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Card = __webpack_require__(3);

var Tournament = function () {
    function Tournament(cardList) {
        var roundNum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16;
        (0, _classCallCheck3.default)(this, Tournament);

        this._cardList = new Card().shuffle(cardList);
        this._originCardList = JSON.parse((0, _stringify2.default)(this._cardList));

        this._selectedList = []; // 매 라운드마다 선택한 결과를 저장하기 위한 이차원 배열
        this._selectedListIndex = 0;

        this._roundNum = roundNum;
        this._currentRoundIndex = 0;
    }

    (0, _createClass3.default)(Tournament, [{
        key: "init",
        value: function init() {
            this.setRoundNumText(this._roundNum + "\uAC15");

            // 16강이면 스테이지는 4번이 된다.(16강 -> 8강 -> 4강 -> 결승)
            var stageNumber = (0, _log2.default)(this._roundNum);
            for (var i = 0; i < stageNumber; i++) {
                this._selectedList.push([]);
            }

            this.setCardItem("card1", this._cardList[0]);
            this.setCardItem("card2", this._cardList[1]);
            document.getElementById("winner").className = "hidden";
        }

        /**
         * 현재 진행중인 라운드의 텍스트를 지정합니다.
         */

    }, {
        key: "setRoundNumText",
        value: function setRoundNumText(text) {
            document.getElementById("stage").innerText = text;
        }

        /**
         * 카드의 정보(사진, 이름)를 지정합니다.
         */

    }, {
        key: "setCardItem",
        value: function setCardItem(id, item) {
            var _this = this;

            document.getElementById(id + "_image").src = item.photo;
            document.getElementById(id + "_name").innerText = item.name;

            if (id !== "winner") {
                document.getElementById(id).onclick = function (e) {
                    return _this.handleClickCard(e, item);
                };
            }
        }

        /**
         * 사용자가 선택한 히스토리를 보여줍니다.
         */

    }, {
        key: "showHistory",
        value: function showHistory() {
            console.log('history', this._selectedList, this._originCardList);

            var divElement = document.createElement("div");
            this._originCardList.forEach(function (element) {
                var historyElement = document.createElement("div");

                historyElement.setAttribute("class", "history");
                historyElement.innerHTML = "\n                <img src=" + element.photo + " />\n                <span class=\"name\">" + element.name + "</span>\n            ";

                divElement.appendChild(historyElement);
            });

            document.getElementById("history").appendChild(divElement);

            for (var i = 0; i < this._selectedList.length; i++) {
                var _divElement = document.createElement("div");

                for (var j = 0; j < this._selectedList[i].length; j++) {
                    var element = this._selectedList[i][j];
                    var historyElement = document.createElement("div");

                    historyElement.setAttribute("class", "history");
                    historyElement.innerHTML = "\n                    <img src=" + element.photo + " />\n                    <span class=\"name\">" + element.name + "</span>\n                ";

                    _divElement.appendChild(historyElement);
                    document.getElementById("history").appendChild(_divElement);
                }

                document.getElementById("history").appendChild(document.createElement("br"));
            }

            document.getElementById("result").className = "hidden";
        }

        /**
         * 카드를 클릭할 때 발생하는 함수입니다.
         */

    }, {
        key: "handleClickCard",
        value: function handleClickCard(e, selectedCard) {
            var _this2 = this;

            // 최종 이상형 결정
            if (this._roundNum === 2) {
                var cards = document.getElementById("cards");
                cards.className = 'hidden';

                document.getElementById("winner").className = "card-item winner";
                this.setCardItem("winner", selectedCard);
                this.setRoundNumText("\uB2F9\uC2E0\uC758 \uC774\uC0C1\uD615\uC740 '" + selectedCard.name + "' \uC785\uB2C8\uB2E4.");

                this._selectedList[this._selectedListIndex].push(selectedCard);

                var buttonElement = document.createElement("button");
                buttonElement.setAttribute("id", "result");
                buttonElement.innerText = "결과보기";
                buttonElement.onclick = function () {
                    return _this2.showHistory();
                };
                document.getElementById("winner").appendChild(buttonElement);

                return;
            }

            // 선택한 결과 저장
            this._selectedList[this._selectedListIndex].push(selectedCard);

            // 16강이면 index 가 14 일 때까지 돌아야 함
            if (this._currentRoundIndex < this._roundNum - 2) {
                // 두 명씩 붙게 되므로 index는 2씩 증가
                this._currentRoundIndex += 2;
            } else {
                // 다음 라운드로 이동
                this._roundNum /= 2;
                this.setRoundNumText(this._roundNum === 2 ? "결승" : this._roundNum + "\uAC15");

                this._cardList = new Card().shuffle(this._selectedList[this._selectedListIndex]);
                this._selectedListIndex++;

                this._currentRoundIndex = 0;
            }

            this.setCardItem("card1", this._cardList[this._currentRoundIndex]);
            this.setCardItem("card2", this._cardList[this._currentRoundIndex + 1]);
        }
    }]);
    return Tournament;
}();

module.exports = Tournament;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(29), __esModule: true };

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(30);
module.exports = __webpack_require__(0).Math.log2;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.22 Math.log2(x)
var $export = __webpack_require__(7);

$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});


/***/ })
/******/ ]);
});