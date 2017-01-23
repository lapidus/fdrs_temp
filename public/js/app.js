webpackJsonp([28,29],{

/***/ 1002:
/***/ (function(module, exports, __webpack_require__) {

var basePropertyOf = __webpack_require__(970);

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 's'
};

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = basePropertyOf(deburredLetters);

module.exports = deburrLetter;


/***/ }),

/***/ 1012:
/***/ (function(module, exports) {

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

module.exports = hasUnicodeWord;


/***/ }),

/***/ 1053:
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = '\\u2000-\\u206f',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]",
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
    rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsOrdLower = '\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)',
    rsOrdUpper = '\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
  rsUpper + '+' + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join('|'), 'g');

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

module.exports = unicodeWords;


/***/ }),

/***/ 1056:
/***/ (function(module, exports, __webpack_require__) {

var createWrap = __webpack_require__(113);

/** Used to compose bitmasks for function metadata. */
var WRAP_ARY_FLAG = 128;

/**
 * Creates a function that invokes `func`, with up to `n` arguments,
 * ignoring any additional arguments.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} func The function to cap arguments for.
 * @param {number} [n=func.length] The arity cap.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Function} Returns the new capped function.
 * @example
 *
 * _.map(['6', '8', '10'], _.ary(parseInt, 1));
 * // => [6, 8, 10]
 */
function ary(func, n, guard) {
  n = guard ? undefined : n;
  n = (func && n == null) ? func.length : n;
  return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);
}

module.exports = ary;


/***/ }),

/***/ 1059:
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(249);

/** Used to compose bitmasks for cloning. */
var CLONE_SYMBOLS_FLAG = 4;

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */
function clone(value) {
  return baseClone(value, CLONE_SYMBOLS_FLAG);
}

module.exports = clone;


/***/ }),

/***/ 1060:
/***/ (function(module, exports, __webpack_require__) {

var createWrap = __webpack_require__(113);

/** Used to compose bitmasks for function metadata. */
var WRAP_CURRY_FLAG = 8;

/**
 * Creates a function that accepts arguments of `func` and either invokes
 * `func` returning its result, if at least `arity` number of arguments have
 * been provided, or returns a function that accepts the remaining `func`
 * arguments, and so on. The arity of `func` may be specified if `func.length`
 * is not sufficient.
 *
 * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
 * may be used as a placeholder for provided arguments.
 *
 * **Note:** This method doesn't set the "length" property of curried functions.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Function
 * @param {Function} func The function to curry.
 * @param {number} [arity=func.length] The arity of `func`.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Function} Returns the new curried function.
 * @example
 *
 * var abc = function(a, b, c) {
 *   return [a, b, c];
 * };
 *
 * var curried = _.curry(abc);
 *
 * curried(1)(2)(3);
 * // => [1, 2, 3]
 *
 * curried(1, 2)(3);
 * // => [1, 2, 3]
 *
 * curried(1, 2, 3);
 * // => [1, 2, 3]
 *
 * // Curried with placeholders.
 * curried(1)(_, 3)(2);
 * // => [1, 2, 3]
 */
function curry(func, arity, guard) {
  arity = guard ? undefined : arity;
  var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
  result.placeholder = curry.placeholder;
  return result;
}

// Assign default placeholders.
curry.placeholder = {};

module.exports = curry;


/***/ }),

/***/ 1061:
/***/ (function(module, exports, __webpack_require__) {

var deburrLetter = __webpack_require__(1002),
    toString = __webpack_require__(163);

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;

/** Used to compose unicode capture groups. */
var rsCombo = '[' + rsComboRange + ']';

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}

module.exports = deburr;


/***/ }),

/***/ 1064:
/***/ (function(module, exports, __webpack_require__) {

var mapping = __webpack_require__(1065),
    fallbackHolder = __webpack_require__(307);

/** Built-in value reference. */
var push = Array.prototype.push;

/**
 * Creates a function, with an arity of `n`, that invokes `func` with the
 * arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} n The arity of the new function.
 * @returns {Function} Returns the new function.
 */
function baseArity(func, n) {
  return n == 2
    ? function(a, b) { return func.apply(undefined, arguments); }
    : function(a) { return func.apply(undefined, arguments); };
}

/**
 * Creates a function that invokes `func`, with up to `n` arguments, ignoring
 * any additional arguments.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @param {number} n The arity cap.
 * @returns {Function} Returns the new function.
 */
function baseAry(func, n) {
  return n == 2
    ? function(a, b) { return func(a, b); }
    : function(a) { return func(a); };
}

/**
 * Creates a clone of `array`.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the cloned array.
 */
function cloneArray(array) {
  var length = array ? array.length : 0,
      result = Array(length);

  while (length--) {
    result[length] = array[length];
  }
  return result;
}

/**
 * Creates a function that clones a given object using the assignment `func`.
 *
 * @private
 * @param {Function} func The assignment function.
 * @returns {Function} Returns the new cloner function.
 */
function createCloner(func) {
  return function(object) {
    return func({}, object);
  };
}

/**
 * This function is like `_.spread` except that it includes arguments after those spread.
 *
 * @private
 * @param {Function} func The function to spread arguments over.
 * @param {number} start The start position of the spread.
 * @returns {Function} Returns the new function.
 */
function spread(func, start) {
  return function() {
    var length = arguments.length,
        args = Array(length);

    while (length--) {
      args[length] = arguments[length];
    }
    var array = args[start],
        lastIndex = args.length - 1,
        otherArgs = args.slice(0, start);

    if (array) {
      push.apply(otherArgs, array);
    }
    if (start != lastIndex) {
      push.apply(otherArgs, args.slice(start + 1));
    }
    return func.apply(this, otherArgs);
  };
}

/**
 * Creates a function that wraps `func` and uses `cloner` to clone the first
 * argument it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} cloner The function to clone arguments.
 * @returns {Function} Returns the new immutable function.
 */
function wrapImmutable(func, cloner) {
  return function() {
    var length = arguments.length;
    if (!length) {
      return;
    }
    var args = Array(length);
    while (length--) {
      args[length] = arguments[length];
    }
    var result = args[0] = cloner.apply(undefined, args);
    func.apply(undefined, args);
    return result;
  };
}

/**
 * The base implementation of `convert` which accepts a `util` object of methods
 * required to perform conversions.
 *
 * @param {Object} util The util object.
 * @param {string} name The name of the function to convert.
 * @param {Function} func The function to convert.
 * @param {Object} [options] The options object.
 * @param {boolean} [options.cap=true] Specify capping iteratee arguments.
 * @param {boolean} [options.curry=true] Specify currying.
 * @param {boolean} [options.fixed=true] Specify fixed arity.
 * @param {boolean} [options.immutable=true] Specify immutable operations.
 * @param {boolean} [options.rearg=true] Specify rearranging arguments.
 * @returns {Function|Object} Returns the converted function or object.
 */
function baseConvert(util, name, func, options) {
  var setPlaceholder,
      isLib = typeof name == 'function',
      isObj = name === Object(name);

  if (isObj) {
    options = func;
    func = name;
    name = undefined;
  }
  if (func == null) {
    throw new TypeError;
  }
  options || (options = {});

  var config = {
    'cap': 'cap' in options ? options.cap : true,
    'curry': 'curry' in options ? options.curry : true,
    'fixed': 'fixed' in options ? options.fixed : true,
    'immutable': 'immutable' in options ? options.immutable : true,
    'rearg': 'rearg' in options ? options.rearg : true
  };

  var forceCurry = ('curry' in options) && options.curry,
      forceFixed = ('fixed' in options) && options.fixed,
      forceRearg = ('rearg' in options) && options.rearg,
      placeholder = isLib ? func : fallbackHolder,
      pristine = isLib ? func.runInContext() : undefined;

  var helpers = isLib ? func : {
    'ary': util.ary,
    'assign': util.assign,
    'clone': util.clone,
    'curry': util.curry,
    'forEach': util.forEach,
    'isArray': util.isArray,
    'isFunction': util.isFunction,
    'iteratee': util.iteratee,
    'keys': util.keys,
    'rearg': util.rearg,
    'toInteger': util.toInteger,
    'toPath': util.toPath
  };

  var ary = helpers.ary,
      assign = helpers.assign,
      clone = helpers.clone,
      curry = helpers.curry,
      each = helpers.forEach,
      isArray = helpers.isArray,
      isFunction = helpers.isFunction,
      keys = helpers.keys,
      rearg = helpers.rearg,
      toInteger = helpers.toInteger,
      toPath = helpers.toPath;

  var aryMethodKeys = keys(mapping.aryMethod);

  var wrappers = {
    'castArray': function(castArray) {
      return function() {
        var value = arguments[0];
        return isArray(value)
          ? castArray(cloneArray(value))
          : castArray.apply(undefined, arguments);
      };
    },
    'iteratee': function(iteratee) {
      return function() {
        var func = arguments[0],
            arity = arguments[1],
            result = iteratee(func, arity),
            length = result.length;

        if (config.cap && typeof arity == 'number') {
          arity = arity > 2 ? (arity - 2) : 1;
          return (length && length <= arity) ? result : baseAry(result, arity);
        }
        return result;
      };
    },
    'mixin': function(mixin) {
      return function(source) {
        var func = this;
        if (!isFunction(func)) {
          return mixin(func, Object(source));
        }
        var pairs = [];
        each(keys(source), function(key) {
          if (isFunction(source[key])) {
            pairs.push([key, func.prototype[key]]);
          }
        });

        mixin(func, Object(source));

        each(pairs, function(pair) {
          var value = pair[1];
          if (isFunction(value)) {
            func.prototype[pair[0]] = value;
          } else {
            delete func.prototype[pair[0]];
          }
        });
        return func;
      };
    },
    'nthArg': function(nthArg) {
      return function(n) {
        var arity = n < 0 ? 1 : (toInteger(n) + 1);
        return curry(nthArg(n), arity);
      };
    },
    'rearg': function(rearg) {
      return function(func, indexes) {
        var arity = indexes ? indexes.length : 0;
        return curry(rearg(func, indexes), arity);
      };
    },
    'runInContext': function(runInContext) {
      return function(context) {
        return baseConvert(util, runInContext(context), options);
      };
    }
  };

  /*--------------------------------------------------------------------------*/

  /**
   * Casts `func` to a function with an arity capped iteratee if needed.
   *
   * @private
   * @param {string} name The name of the function to inspect.
   * @param {Function} func The function to inspect.
   * @returns {Function} Returns the cast function.
   */
  function castCap(name, func) {
    if (config.cap) {
      var indexes = mapping.iterateeRearg[name];
      if (indexes) {
        return iterateeRearg(func, indexes);
      }
      var n = !isLib && mapping.iterateeAry[name];
      if (n) {
        return iterateeAry(func, n);
      }
    }
    return func;
  }

  /**
   * Casts `func` to a curried function if needed.
   *
   * @private
   * @param {string} name The name of the function to inspect.
   * @param {Function} func The function to inspect.
   * @param {number} n The arity of `func`.
   * @returns {Function} Returns the cast function.
   */
  function castCurry(name, func, n) {
    return (forceCurry || (config.curry && n > 1))
      ? curry(func, n)
      : func;
  }

  /**
   * Casts `func` to a fixed arity function if needed.
   *
   * @private
   * @param {string} name The name of the function to inspect.
   * @param {Function} func The function to inspect.
   * @param {number} n The arity cap.
   * @returns {Function} Returns the cast function.
   */
  function castFixed(name, func, n) {
    if (config.fixed && (forceFixed || !mapping.skipFixed[name])) {
      var data = mapping.methodSpread[name],
          start = data && data.start;

      return start  === undefined ? ary(func, n) : spread(func, start);
    }
    return func;
  }

  /**
   * Casts `func` to an rearged function if needed.
   *
   * @private
   * @param {string} name The name of the function to inspect.
   * @param {Function} func The function to inspect.
   * @param {number} n The arity of `func`.
   * @returns {Function} Returns the cast function.
   */
  function castRearg(name, func, n) {
    return (config.rearg && n > 1 && (forceRearg || !mapping.skipRearg[name]))
      ? rearg(func, mapping.methodRearg[name] || mapping.aryRearg[n])
      : func;
  }

  /**
   * Creates a clone of `object` by `path`.
   *
   * @private
   * @param {Object} object The object to clone.
   * @param {Array|string} path The path to clone by.
   * @returns {Object} Returns the cloned object.
   */
  function cloneByPath(object, path) {
    path = toPath(path);

    var index = -1,
        length = path.length,
        lastIndex = length - 1,
        result = clone(Object(object)),
        nested = result;

    while (nested != null && ++index < length) {
      var key = path[index],
          value = nested[key];

      if (value != null) {
        nested[path[index]] = clone(index == lastIndex ? value : Object(value));
      }
      nested = nested[key];
    }
    return result;
  }

  /**
   * Converts `lodash` to an immutable auto-curried iteratee-first data-last
   * version with conversion `options` applied.
   *
   * @param {Object} [options] The options object. See `baseConvert` for more details.
   * @returns {Function} Returns the converted `lodash`.
   */
  function convertLib(options) {
    return _.runInContext.convert(options)(undefined);
  }

  /**
   * Create a converter function for `func` of `name`.
   *
   * @param {string} name The name of the function to convert.
   * @param {Function} func The function to convert.
   * @returns {Function} Returns the new converter function.
   */
  function createConverter(name, func) {
    var realName = mapping.aliasToReal[name] || name,
        methodName = mapping.remap[realName] || realName,
        oldOptions = options;

    return function(options) {
      var newUtil = isLib ? pristine : helpers,
          newFunc = isLib ? pristine[methodName] : func,
          newOptions = assign(assign({}, oldOptions), options);

      return baseConvert(newUtil, realName, newFunc, newOptions);
    };
  }

  /**
   * Creates a function that wraps `func` to invoke its iteratee, with up to `n`
   * arguments, ignoring any additional arguments.
   *
   * @private
   * @param {Function} func The function to cap iteratee arguments for.
   * @param {number} n The arity cap.
   * @returns {Function} Returns the new function.
   */
  function iterateeAry(func, n) {
    return overArg(func, function(func) {
      return typeof func == 'function' ? baseAry(func, n) : func;
    });
  }

  /**
   * Creates a function that wraps `func` to invoke its iteratee with arguments
   * arranged according to the specified `indexes` where the argument value at
   * the first index is provided as the first argument, the argument value at
   * the second index is provided as the second argument, and so on.
   *
   * @private
   * @param {Function} func The function to rearrange iteratee arguments for.
   * @param {number[]} indexes The arranged argument indexes.
   * @returns {Function} Returns the new function.
   */
  function iterateeRearg(func, indexes) {
    return overArg(func, function(func) {
      var n = indexes.length;
      return baseArity(rearg(baseAry(func, n), indexes), n);
    });
  }

  /**
   * Creates a function that invokes `func` with its first argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function() {
      var length = arguments.length;
      if (!length) {
        return func();
      }
      var args = Array(length);
      while (length--) {
        args[length] = arguments[length];
      }
      var index = config.rearg ? 0 : (length - 1);
      args[index] = transform(args[index]);
      return func.apply(undefined, args);
    };
  }

  /**
   * Creates a function that wraps `func` and applys the conversions
   * rules by `name`.
   *
   * @private
   * @param {string} name The name of the function to wrap.
   * @param {Function} func The function to wrap.
   * @returns {Function} Returns the converted function.
   */
  function wrap(name, func) {
    var result,
        realName = mapping.aliasToReal[name] || name,
        wrapped = func,
        wrapper = wrappers[realName];

    if (wrapper) {
      wrapped = wrapper(func);
    }
    else if (config.immutable) {
      if (mapping.mutate.array[realName]) {
        wrapped = wrapImmutable(func, cloneArray);
      }
      else if (mapping.mutate.object[realName]) {
        wrapped = wrapImmutable(func, createCloner(func));
      }
      else if (mapping.mutate.set[realName]) {
        wrapped = wrapImmutable(func, cloneByPath);
      }
    }
    each(aryMethodKeys, function(aryKey) {
      each(mapping.aryMethod[aryKey], function(otherName) {
        if (realName == otherName) {
          var spreadData = mapping.methodSpread[realName],
              afterRearg = spreadData && spreadData.afterRearg;

          result = afterRearg
            ? castFixed(realName, castRearg(realName, wrapped, aryKey), aryKey)
            : castRearg(realName, castFixed(realName, wrapped, aryKey), aryKey);

          result = castCap(realName, result);
          result = castCurry(realName, result, aryKey);
          return false;
        }
      });
      return !result;
    });

    result || (result = wrapped);
    if (result == func) {
      result = forceCurry ? curry(result, 1) : function() {
        return func.apply(this, arguments);
      };
    }
    result.convert = createConverter(realName, func);
    if (mapping.placeholder[realName]) {
      setPlaceholder = true;
      result.placeholder = func.placeholder = placeholder;
    }
    return result;
  }

  /*--------------------------------------------------------------------------*/

  if (!isObj) {
    return wrap(name, func);
  }
  var _ = func;

  // Convert methods by ary cap.
  var pairs = [];
  each(aryMethodKeys, function(aryKey) {
    each(mapping.aryMethod[aryKey], function(key) {
      var func = _[mapping.remap[key] || key];
      if (func) {
        pairs.push([key, wrap(key, func)]);
      }
    });
  });

  // Convert remaining methods.
  each(keys(_), function(key) {
    var func = _[key];
    if (typeof func == 'function') {
      var length = pairs.length;
      while (length--) {
        if (pairs[length][0] == key) {
          return;
        }
      }
      func.convert = createConverter(key, func);
      pairs.push([key, func]);
    }
  });

  // Assign to `_` leaving `_.prototype` unchanged to allow chaining.
  each(pairs, function(pair) {
    _[pair[0]] = pair[1];
  });

  _.convert = convertLib;
  if (setPlaceholder) {
    _.placeholder = placeholder;
  }
  // Assign aliases.
  each(keys(_), function(key) {
    each(mapping.realToAlias[key] || [], function(alias) {
      _[alias] = _[key];
    });
  });

  return _;
}

module.exports = baseConvert;


/***/ }),

/***/ 1065:
/***/ (function(module, exports) {

/** Used to map aliases to their real names. */
exports.aliasToReal = {

  // Lodash aliases.
  'each': 'forEach',
  'eachRight': 'forEachRight',
  'entries': 'toPairs',
  'entriesIn': 'toPairsIn',
  'extend': 'assignIn',
  'extendAll': 'assignInAll',
  'extendAllWith': 'assignInAllWith',
  'extendWith': 'assignInWith',
  'first': 'head',

  // Methods that are curried variants of others.
  'conforms': 'conformsTo',
  'matches': 'isMatch',
  'property': 'get',

  // Ramda aliases.
  '__': 'placeholder',
  'F': 'stubFalse',
  'T': 'stubTrue',
  'all': 'every',
  'allPass': 'overEvery',
  'always': 'constant',
  'any': 'some',
  'anyPass': 'overSome',
  'apply': 'spread',
  'assoc': 'set',
  'assocPath': 'set',
  'complement': 'negate',
  'compose': 'flowRight',
  'contains': 'includes',
  'dissoc': 'unset',
  'dissocPath': 'unset',
  'dropLast': 'dropRight',
  'dropLastWhile': 'dropRightWhile',
  'equals': 'isEqual',
  'identical': 'eq',
  'indexBy': 'keyBy',
  'init': 'initial',
  'invertObj': 'invert',
  'juxt': 'over',
  'omitAll': 'omit',
  'nAry': 'ary',
  'path': 'get',
  'pathEq': 'matchesProperty',
  'pathOr': 'getOr',
  'paths': 'at',
  'pickAll': 'pick',
  'pipe': 'flow',
  'pluck': 'map',
  'prop': 'get',
  'propEq': 'matchesProperty',
  'propOr': 'getOr',
  'props': 'at',
  'symmetricDifference': 'xor',
  'symmetricDifferenceBy': 'xorBy',
  'symmetricDifferenceWith': 'xorWith',
  'takeLast': 'takeRight',
  'takeLastWhile': 'takeRightWhile',
  'unapply': 'rest',
  'unnest': 'flatten',
  'useWith': 'overArgs',
  'where': 'conformsTo',
  'whereEq': 'isMatch',
  'zipObj': 'zipObject'
};

/** Used to map ary to method names. */
exports.aryMethod = {
  '1': [
    'assignAll', 'assignInAll', 'attempt', 'castArray', 'ceil', 'create',
    'curry', 'curryRight', 'defaultsAll', 'defaultsDeepAll', 'floor', 'flow',
    'flowRight', 'fromPairs', 'invert', 'iteratee', 'memoize', 'method', 'mergeAll',
    'methodOf', 'mixin', 'nthArg', 'over', 'overEvery', 'overSome','rest', 'reverse',
    'round', 'runInContext', 'spread', 'template', 'trim', 'trimEnd', 'trimStart',
    'uniqueId', 'words', 'zipAll'
  ],
  '2': [
    'add', 'after', 'ary', 'assign', 'assignAllWith', 'assignIn', 'assignInAllWith',
    'at', 'before', 'bind', 'bindAll', 'bindKey', 'chunk', 'cloneDeepWith',
    'cloneWith', 'concat', 'conformsTo', 'countBy', 'curryN', 'curryRightN',
    'debounce', 'defaults', 'defaultsDeep', 'defaultTo', 'delay', 'difference',
    'divide', 'drop', 'dropRight', 'dropRightWhile', 'dropWhile', 'endsWith', 'eq',
    'every', 'filter', 'find', 'findIndex', 'findKey', 'findLast', 'findLastIndex',
    'findLastKey', 'flatMap', 'flatMapDeep', 'flattenDepth', 'forEach',
    'forEachRight', 'forIn', 'forInRight', 'forOwn', 'forOwnRight', 'get',
    'groupBy', 'gt', 'gte', 'has', 'hasIn', 'includes', 'indexOf', 'intersection',
    'invertBy', 'invoke', 'invokeMap', 'isEqual', 'isMatch', 'join', 'keyBy',
    'lastIndexOf', 'lt', 'lte', 'map', 'mapKeys', 'mapValues', 'matchesProperty',
    'maxBy', 'meanBy', 'merge', 'mergeAllWith', 'minBy', 'multiply', 'nth', 'omit',
    'omitBy', 'overArgs', 'pad', 'padEnd', 'padStart', 'parseInt', 'partial',
    'partialRight', 'partition', 'pick', 'pickBy', 'propertyOf', 'pull', 'pullAll',
    'pullAt', 'random', 'range', 'rangeRight', 'rearg', 'reject', 'remove',
    'repeat', 'restFrom', 'result', 'sampleSize', 'some', 'sortBy', 'sortedIndex',
    'sortedIndexOf', 'sortedLastIndex', 'sortedLastIndexOf', 'sortedUniqBy',
    'split', 'spreadFrom', 'startsWith', 'subtract', 'sumBy', 'take', 'takeRight',
    'takeRightWhile', 'takeWhile', 'tap', 'throttle', 'thru', 'times', 'trimChars',
    'trimCharsEnd', 'trimCharsStart', 'truncate', 'union', 'uniqBy', 'uniqWith',
    'unset', 'unzipWith', 'without', 'wrap', 'xor', 'zip', 'zipObject',
    'zipObjectDeep'
  ],
  '3': [
    'assignInWith', 'assignWith', 'clamp', 'differenceBy', 'differenceWith',
    'findFrom', 'findIndexFrom', 'findLastFrom', 'findLastIndexFrom', 'getOr',
    'includesFrom', 'indexOfFrom', 'inRange', 'intersectionBy', 'intersectionWith',
    'invokeArgs', 'invokeArgsMap', 'isEqualWith', 'isMatchWith', 'flatMapDepth',
    'lastIndexOfFrom', 'mergeWith', 'orderBy', 'padChars', 'padCharsEnd',
    'padCharsStart', 'pullAllBy', 'pullAllWith', 'rangeStep', 'rangeStepRight',
    'reduce', 'reduceRight', 'replace', 'set', 'slice', 'sortedIndexBy',
    'sortedLastIndexBy', 'transform', 'unionBy', 'unionWith', 'update', 'xorBy',
    'xorWith', 'zipWith'
  ],
  '4': [
    'fill', 'setWith', 'updateWith'
  ]
};

/** Used to map ary to rearg configs. */
exports.aryRearg = {
  '2': [1, 0],
  '3': [2, 0, 1],
  '4': [3, 2, 0, 1]
};

/** Used to map method names to their iteratee ary. */
exports.iterateeAry = {
  'dropRightWhile': 1,
  'dropWhile': 1,
  'every': 1,
  'filter': 1,
  'find': 1,
  'findFrom': 1,
  'findIndex': 1,
  'findIndexFrom': 1,
  'findKey': 1,
  'findLast': 1,
  'findLastFrom': 1,
  'findLastIndex': 1,
  'findLastIndexFrom': 1,
  'findLastKey': 1,
  'flatMap': 1,
  'flatMapDeep': 1,
  'flatMapDepth': 1,
  'forEach': 1,
  'forEachRight': 1,
  'forIn': 1,
  'forInRight': 1,
  'forOwn': 1,
  'forOwnRight': 1,
  'map': 1,
  'mapKeys': 1,
  'mapValues': 1,
  'partition': 1,
  'reduce': 2,
  'reduceRight': 2,
  'reject': 1,
  'remove': 1,
  'some': 1,
  'takeRightWhile': 1,
  'takeWhile': 1,
  'times': 1,
  'transform': 2
};

/** Used to map method names to iteratee rearg configs. */
exports.iterateeRearg = {
  'mapKeys': [1]
};

/** Used to map method names to rearg configs. */
exports.methodRearg = {
  'assignInAllWith': [1, 0],
  'assignInWith': [1, 2, 0],
  'assignAllWith': [1, 0],
  'assignWith': [1, 2, 0],
  'differenceBy': [1, 2, 0],
  'differenceWith': [1, 2, 0],
  'getOr': [2, 1, 0],
  'intersectionBy': [1, 2, 0],
  'intersectionWith': [1, 2, 0],
  'isEqualWith': [1, 2, 0],
  'isMatchWith': [2, 1, 0],
  'mergeAllWith': [1, 0],
  'mergeWith': [1, 2, 0],
  'padChars': [2, 1, 0],
  'padCharsEnd': [2, 1, 0],
  'padCharsStart': [2, 1, 0],
  'pullAllBy': [2, 1, 0],
  'pullAllWith': [2, 1, 0],
  'rangeStep': [1, 2, 0],
  'rangeStepRight': [1, 2, 0],
  'setWith': [3, 1, 2, 0],
  'sortedIndexBy': [2, 1, 0],
  'sortedLastIndexBy': [2, 1, 0],
  'unionBy': [1, 2, 0],
  'unionWith': [1, 2, 0],
  'updateWith': [3, 1, 2, 0],
  'xorBy': [1, 2, 0],
  'xorWith': [1, 2, 0],
  'zipWith': [1, 2, 0]
};

/** Used to map method names to spread configs. */
exports.methodSpread = {
  'assignAll': { 'start': 0 },
  'assignAllWith': { 'start': 0 },
  'assignInAll': { 'start': 0 },
  'assignInAllWith': { 'start': 0 },
  'defaultsAll': { 'start': 0 },
  'defaultsDeepAll': { 'start': 0 },
  'invokeArgs': { 'start': 2 },
  'invokeArgsMap': { 'start': 2 },
  'mergeAll': { 'start': 0 },
  'mergeAllWith': { 'start': 0 },
  'partial': { 'start': 1 },
  'partialRight': { 'start': 1 },
  'without': { 'start': 1 },
  'zipAll': { 'start': 0 }
};

/** Used to identify methods which mutate arrays or objects. */
exports.mutate = {
  'array': {
    'fill': true,
    'pull': true,
    'pullAll': true,
    'pullAllBy': true,
    'pullAllWith': true,
    'pullAt': true,
    'remove': true,
    'reverse': true
  },
  'object': {
    'assign': true,
    'assignAll': true,
    'assignAllWith': true,
    'assignIn': true,
    'assignInAll': true,
    'assignInAllWith': true,
    'assignInWith': true,
    'assignWith': true,
    'defaults': true,
    'defaultsAll': true,
    'defaultsDeep': true,
    'defaultsDeepAll': true,
    'merge': true,
    'mergeAll': true,
    'mergeAllWith': true,
    'mergeWith': true,
  },
  'set': {
    'set': true,
    'setWith': true,
    'unset': true,
    'update': true,
    'updateWith': true
  }
};

/** Used to track methods with placeholder support */
exports.placeholder = {
  'bind': true,
  'bindKey': true,
  'curry': true,
  'curryRight': true,
  'partial': true,
  'partialRight': true
};

/** Used to map real names to their aliases. */
exports.realToAlias = (function() {
  var hasOwnProperty = Object.prototype.hasOwnProperty,
      object = exports.aliasToReal,
      result = {};

  for (var key in object) {
    var value = object[key];
    if (hasOwnProperty.call(result, value)) {
      result[value].push(key);
    } else {
      result[value] = [key];
    }
  }
  return result;
}());

/** Used to map method names to other names. */
exports.remap = {
  'assignAll': 'assign',
  'assignAllWith': 'assignWith',
  'assignInAll': 'assignIn',
  'assignInAllWith': 'assignInWith',
  'curryN': 'curry',
  'curryRightN': 'curryRight',
  'defaultsAll': 'defaults',
  'defaultsDeepAll': 'defaultsDeep',
  'findFrom': 'find',
  'findIndexFrom': 'findIndex',
  'findLastFrom': 'findLast',
  'findLastIndexFrom': 'findLastIndex',
  'getOr': 'get',
  'includesFrom': 'includes',
  'indexOfFrom': 'indexOf',
  'invokeArgs': 'invoke',
  'invokeArgsMap': 'invokeMap',
  'lastIndexOfFrom': 'lastIndexOf',
  'mergeAll': 'merge',
  'mergeAllWith': 'mergeWith',
  'padChars': 'pad',
  'padCharsEnd': 'padEnd',
  'padCharsStart': 'padStart',
  'propertyOf': 'get',
  'rangeStep': 'range',
  'rangeStepRight': 'rangeRight',
  'restFrom': 'rest',
  'spreadFrom': 'spread',
  'trimChars': 'trim',
  'trimCharsEnd': 'trimEnd',
  'trimCharsStart': 'trimStart',
  'zipAll': 'zip'
};

/** Used to track methods that skip fixing their arity. */
exports.skipFixed = {
  'castArray': true,
  'flow': true,
  'flowRight': true,
  'iteratee': true,
  'mixin': true,
  'rearg': true,
  'runInContext': true
};

/** Used to track methods that skip rearranging arguments. */
exports.skipRearg = {
  'add': true,
  'assign': true,
  'assignIn': true,
  'bind': true,
  'bindKey': true,
  'concat': true,
  'difference': true,
  'divide': true,
  'eq': true,
  'gt': true,
  'gte': true,
  'isEqual': true,
  'lt': true,
  'lte': true,
  'matchesProperty': true,
  'merge': true,
  'multiply': true,
  'overArgs': true,
  'partial': true,
  'partialRight': true,
  'propertyOf': true,
  'random': true,
  'range': true,
  'rangeRight': true,
  'subtract': true,
  'zip': true,
  'zipObject': true,
  'zipObjectDeep': true
};


/***/ }),

/***/ 1066:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  'ary': __webpack_require__(1056),
  'assign': __webpack_require__(426),
  'clone': __webpack_require__(1059),
  'curry': __webpack_require__(1060),
  'forEach': __webpack_require__(245),
  'isArray': __webpack_require__(11),
  'isFunction': __webpack_require__(19),
  'iteratee': __webpack_require__(1071),
  'keys': __webpack_require__(252),
  'rearg': __webpack_require__(1078),
  'toInteger': __webpack_require__(178),
  'toPath': __webpack_require__(1082)
};


/***/ }),

/***/ 1071:
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(249),
    baseIteratee = __webpack_require__(87);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1;

/**
 * Creates a function that invokes `func` with the arguments of the created
 * function. If `func` is a property name, the created function returns the
 * property value for a given element. If `func` is an array or object, the
 * created function returns `true` for elements that contain the equivalent
 * source properties, otherwise it returns `false`.
 *
 * @static
 * @since 4.0.0
 * @memberOf _
 * @category Util
 * @param {*} [func=_.identity] The value to convert to a callback.
 * @returns {Function} Returns the callback.
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
 * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, _.iteratee(['user', 'fred']));
 * // => [{ 'user': 'fred', 'age': 40 }]
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, _.iteratee('user'));
 * // => ['barney', 'fred']
 *
 * // Create custom iteratee shorthands.
 * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
 *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
 *     return func.test(string);
 *   };
 * });
 *
 * _.filter(['abc', 'def'], /ef/);
 * // => ['def']
 */
function iteratee(func) {
  return baseIteratee(typeof func == 'function' ? func : baseClone(func, CLONE_DEEP_FLAG));
}

module.exports = iteratee;


/***/ }),

/***/ 1072:
/***/ (function(module, exports, __webpack_require__) {

var createCompounder = __webpack_require__(996);

/**
 * Converts `string` to
 * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the kebab cased string.
 * @example
 *
 * _.kebabCase('Foo Bar');
 * // => 'foo-bar'
 *
 * _.kebabCase('fooBar');
 * // => 'foo-bar'
 *
 * _.kebabCase('__FOO_BAR__');
 * // => 'foo-bar'
 */
var kebabCase = createCompounder(function(result, word, index) {
  return result + (index ? '-' : '') + word.toLowerCase();
});

module.exports = kebabCase;


/***/ }),

/***/ 1073:
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(60),
    baseIteratee = __webpack_require__(87),
    baseMap = __webpack_require__(432),
    isArray = __webpack_require__(11);

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}

module.exports = map;


/***/ }),

/***/ 1078:
/***/ (function(module, exports, __webpack_require__) {

var createWrap = __webpack_require__(113),
    flatRest = __webpack_require__(258);

/** Used to compose bitmasks for function metadata. */
var WRAP_REARG_FLAG = 256;

/**
 * Creates a function that invokes `func` with arguments arranged according
 * to the specified `indexes` where the argument value at the first index is
 * provided as the first argument, the argument value at the second index is
 * provided as the second argument, and so on.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} func The function to rearrange arguments for.
 * @param {...(number|number[])} indexes The arranged argument indexes.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var rearged = _.rearg(function(a, b, c) {
 *   return [a, b, c];
 * }, [2, 0, 1]);
 *
 * rearged('b', 'c', 'a')
 * // => ['a', 'b', 'c']
 */
var rearg = flatRest(function(func, indexes) {
  return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
});

module.exports = rearg;


/***/ }),

/***/ 1082:
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(60),
    copyArray = __webpack_require__(111),
    isArray = __webpack_require__(11),
    isSymbol = __webpack_require__(65),
    stringToPath = __webpack_require__(455),
    toKey = __webpack_require__(64),
    toString = __webpack_require__(163);

/**
 * Converts `value` to a property path array.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Util
 * @param {*} value The value to convert.
 * @returns {Array} Returns the new property path array.
 * @example
 *
 * _.toPath('a.b.c');
 * // => ['a', 'b', 'c']
 *
 * _.toPath('a[0].b.c');
 * // => ['a', '0', 'b', 'c']
 */
function toPath(value) {
  if (isArray(value)) {
    return arrayMap(value, toKey);
  }
  return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
}

module.exports = toPath;


/***/ }),

/***/ 1084:
/***/ (function(module, exports, __webpack_require__) {

var asciiWords = __webpack_require__(947),
    hasUnicodeWord = __webpack_require__(1012),
    toString = __webpack_require__(163),
    unicodeWords = __webpack_require__(1053);

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}

module.exports = words;


/***/ }),

/***/ 1299:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(129);

var _reactRedux = __webpack_require__(27);

var _reactI18next = __webpack_require__(41);

var _routes = __webpack_require__(524);

var _routes2 = _interopRequireDefault(_routes);

var _configureStore = __webpack_require__(522);

var _configureStore2 = _interopRequireDefault(_configureStore);

var _needsFetcher = __webpack_require__(525);

var _needsFetcher2 = _interopRequireDefault(_needsFetcher);

var _i18n = __webpack_require__(523);

var _i18n2 = _interopRequireDefault(_i18n);

var _appActions = __webpack_require__(69);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _configureStore2.default)();
window.store = store;
var history = _reactRouter.browserHistory;

function beforeTransitionHandler(location, callback) {
  console.log("Before transition");

  // Check and set new language if needed
  var urlArr = location.pathname.split("/");
  var newLang = urlArr[1] && urlArr[1].length === 2 ? urlArr[1] : "en";
  if (_i18n2.default.language !== newLang) _i18n2.default.changeLanguage(newLang);

  (0, _reactRouter.match)({ routes: _routes2.default, location: location }, function (error, redirectLocation, renderProps) {
    store.dispatch((0, _appActions.startMainLoad)());
    (0, _needsFetcher2.default)(store.dispatch, renderProps).then(function () {
      store.dispatch((0, _appActions.endMainLoad)());
      setTimeout(function () {
        window.scroll(0, 0);
        callback();
      }, 300);
    }).catch(console.error);
  });
}

history.listenBefore(beforeTransitionHandler);
history.listen(function () {
  return store.dispatch((0, _appActions.closeNav)());
});

document.addEventListener("DOMContentLoaded", function () {
  // Check for data to be loaded on first load of the app...
  beforeTransitionHandler(window.location, function () {
    console.log("Pre render");
    _reactDom2.default.render(_react2.default.createElement(
      _reactI18next.I18nextProvider,
      { i18n: _i18n2.default },
      _react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(_reactRouter.Router, { history: history, routes: _routes2.default })
      )
    ), document.getElementById("app"));
  });
});

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(129);

var _reactI18next = __webpack_require__(41);

var _prefixLanguageToRoute = __webpack_require__(554);

var _prefixLanguageToRoute2 = _interopRequireDefault(_prefixLanguageToRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LanguageLink = function (_React$Component) {
  _inherits(LanguageLink, _React$Component);

  function LanguageLink() {
    _classCallCheck(this, LanguageLink);

    return _possibleConstructorReturn(this, (LanguageLink.__proto__ || Object.getPrototypeOf(LanguageLink)).apply(this, arguments));
  }

  _createClass(LanguageLink, [{
    key: "render",
    value: function render() {
      var language = this.context.i18n.language;


      return _react2.default.createElement(
        _reactRouter.Link,
        { to: (0, _prefixLanguageToRoute2.default)(language, this.props.to), className: this.props.className },
        this.props.children
      );
    }
  }]);

  return LanguageLink;
}(_react2.default.Component);

LanguageLink.contextTypes = {
  i18n: _react2.default.PropTypes.object
};

exports.default = (0, _reactI18next.translate)()(LanguageLink);

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var constructLanguageRoute = function constructLanguageRoute(lang, _ref) {
  var pathname = _ref.pathname;

  if (pathname === "/") return "" + pathname + (lang || "");

  if (pathname.split("/")[1].length === 2) pathname = pathname.slice(3);
  return lang ? "/" + lang + pathname : pathname;
};

exports.default = constructLanguageRoute;

/***/ }),

/***/ 307:
/***/ (function(module, exports) {

/**
 * The default argument placeholder value for methods.
 *
 * @type {Object}
 */
module.exports = {};


/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dropdown = function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  function Dropdown(props) {
    _classCallCheck(this, Dropdown);

    var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));

    _this.state = {
      showDropdown: props.showDropdown
    };

    _this.showDropdown = _this.showDropdown.bind(_this);
    _this.hideDropdown = _this.hideDropdown.bind(_this);
    return _this;
  }

  _createClass(Dropdown, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.showDropdown !== this.props.showDropdown) {
        this.setState({ showDropdown: nextProps.showDropdown });
      }
    }
  }, {
    key: 'showDropdown',
    value: function showDropdown() {
      this.setState({ showDropdown: true });
    }
  }, {
    key: 'hideDropdown',
    value: function hideDropdown() {
      this.setState({ showDropdown: false });
    }
  }, {
    key: 'render',
    value: function render() {

      var dropdownStyles = {
        display: this.state.showDropdown || this.props.navOpen ? 'block' : 'none',
        pointerEvents: this.state.showDropdown || this.props.navOpen ? "all" : "none"
      };

      return _react2.default.createElement(
        'span',
        { onMouseEnter: this.showDropdown, onMouseLeave: this.hideDropdown, onClick: this.hideDropdown },
        this.props.children[0],
        _react2.default.createElement(
          'div',
          { style: dropdownStyles },
          this.props.children[1]
        )
      );
    }
  }]);

  return Dropdown;
}(_react2.default.Component);

exports.default = Dropdown;

/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _redux = __webpack_require__(175);

var _reducers = __webpack_require__(563);

var _reducers2 = _interopRequireDefault(_reducers);

var _reduxThunk = __webpack_require__(304);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = function logger(store) {
  return function (next) {
    return function (action) {
      if (console.group) console.group(action.type);else console.log('\n\n' + action.type + '\n\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014');

      console.log('%c prev state', 'color: grey', store.getState());
      console.log('%c action', 'color: blue', action);
      var returnValue = next(action);
      console.log('%c next state', 'color: green', store.getState());

      if (console.group) console.groupEnd(action.type);else console.log('\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\n\n\n');

      return returnValue;
    };
  };
};

function configureStore(initialState) {
  // If there is an initialState derived from the window.__INITIAL_STATE__ object
  // merge it in with the reducers
  // return createStore(combineReducers(reducers), initialState);

  // If there is middleware to be considered, use this function to apply the middleware
  // to the redux store.
  // const store = applyMiddleware(:middlewarename)(createStore)(combineReducers(reducers), initialState);

  // Simplest configuration
  // return createStore(combineReducers(reducers));
  // return applyMiddleware(thunk)(createStore)(combineReducers(reducers));
  return (0, _redux.createStore)((0, _redux.combineReducers)(_reducers2.default), (0, _redux.applyMiddleware)(logger, _reduxThunk2.default));
}

/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _i18next = __webpack_require__(303);

var _i18next2 = _interopRequireDefault(_i18next);

var _i18nextXhrBackend = __webpack_require__(302);

var _i18nextXhrBackend2 = _interopRequireDefault(_i18nextXhrBackend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_i18next2.default.use(_i18nextXhrBackend2.default).init({
  fallbackLng: "en",
  ns: ["common"],
  defaultNS: "common",
  debug: true,
  returnObjects: true
});

exports.default = _i18next2.default;

/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _App = __webpack_require__(561);

var _App2 = _interopRequireDefault(_App);

var _config = __webpack_require__(553);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// error log for faild dynamic loading
var errorLoading = function errorLoading(err) {
  return console.error("Dynamic page loading failed", err);
};

// helper module loader for dynamic loader
var loadRoute = function loadRoute(cb) {
  return function (module) {
    return cb(null, module.default);
  };
};

// an array of routes for the /report
// based on the config
var reportChildRoutes = Object.keys(_config.report.routes).map(function (routeKey) {
  return {
    path: _config.report.routes[routeKey].slug,
    getComponent: function getComponent(location, cb) {
      __webpack_require__(555)("./" + (routeKey.charAt(0).toUpperCase() + routeKey.slice(1))).then(loadRoute(cb)).catch(errorLoading);
    }
  };
});

// FDRS child routes
var fdrsChildRoutes = [{
  path: "data",
  getComponent: function getComponent(location, cb) {
    __webpack_require__.e/* import() */(19).then(__webpack_require__.bind(null, 1302)).then(loadRoute(cb)).catch(errorLoading);
  }
}, {
  path: "overview",
  getComponent: function getComponent(location, cb) {
    __webpack_require__.e/* import() */(20).then(__webpack_require__.bind(null, 1309)).then(loadRoute(cb)).catch(errorLoading);
  },

  childRoutes: [{
    path: "map",
    getComponent: function getComponent(location, cb) {
      __webpack_require__.e/* import() */(18).then(__webpack_require__.bind(null, 1307)).then(loadRoute(cb)).catch(errorLoading);
    }
  }, {
    path: "table",
    getComponent: function getComponent(location, cb) {
      __webpack_require__.e/* import() */(17).then(__webpack_require__.bind(null, 1308)).then(loadRoute(cb)).catch(errorLoading);
    }
  }]
}, {
  path: "faq",
  getComponent: function getComponent(location, cb) {
    __webpack_require__.e/* import() */(23).then(__webpack_require__.bind(null, 1304)).then(loadRoute(cb)).catch(errorLoading);
  }
}, {
  path: "about",
  getComponent: function getComponent(location, cb) {
    __webpack_require__.e/* import() */(25).then(__webpack_require__.bind(null, 1301)).then(loadRoute(cb)).catch(errorLoading);
  }
}, {
  path: "data-download",
  getComponent: function getComponent(location, cb) {
    __webpack_require__.e/* import() */(24).then(__webpack_require__.bind(null, 1303)).then(loadRoute(cb)).catch(errorLoading);
  }
}, {
  path: "societies",
  getComponent: function getComponent(location, cb) {
    __webpack_require__.e/* import() */(22).then(__webpack_require__.bind(null, 1310)).then(loadRoute(cb)).catch(errorLoading);
  }
}, {
  path: "societies/:id",
  getComponent: function getComponent(location, cb) {
    __webpack_require__.e/* import() */(15).then(__webpack_require__.bind(null, 1311)).then(loadRoute(cb)).catch(errorLoading);
  }
}, {
  path: "societies_pdf/:id",
  getComponent: function getComponent(location, cb) {
    __webpack_require__.e/* import() */(16).then(__webpack_require__.bind(null, 1312)).then(loadRoute(cb)).catch(errorLoading);
  }
}, {
  path: "report",
  getComponent: function getComponent(location, cb) {
    __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 315)).then(loadRoute(cb)).catch(errorLoading);
  },

  indexRoute: {
    getComponent: function getComponent(location, cb) {
      __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 314)).then(loadRoute(cb)).catch(errorLoading);
    }
  },
  childRoutes: reportChildRoutes
}];

var fdrsRoutes = [{
  path: "fdrs",
  getComponent: function getComponent(location, cb) {
    __webpack_require__.e/* import() */(26).then(__webpack_require__.bind(null, 1305)).then(loadRoute(cb)).catch(errorLoading);
  },

  indexRoute: {
    getComponent: function getComponent(location, cb) {
      __webpack_require__.e/* import() */(21).then(__webpack_require__.bind(null, 1306)).then(loadRoute(cb)).catch(errorLoading);
    }
  },
  childRoutes: fdrsChildRoutes
}];

var routes = {
  component: _App2.default,
  childRoutes: [{
    path: "/",
    getComponent: function getComponent(location, cb) {
      __webpack_require__.e/* import() */(14).then(__webpack_require__.bind(null, 540)).then(loadRoute(cb)).catch(errorLoading);
    }
  }]
};

// add main child routes, default ("en" skipped in the url)
routes.childRoutes = routes.childRoutes.concat(fdrsRoutes);

// helper to create language prefixed routes
var langPrefixedRoutes = function langPrefixedRoutes(lang) {
  return {
    path: lang,
    indexRoute: {
      getComponent: function getComponent(location, cb) {
        __webpack_require__.e/* import() */(14/* duplicate */).then(__webpack_require__.bind(null, 540)).then(loadRoute(cb)).catch(errorLoading);
      }
    },
    childRoutes: fdrsRoutes
  };
};

routes.childRoutes.push(langPrefixedRoutes("fr"), langPrefixedRoutes("es"), langPrefixedRoutes("ar"));

exports.default = routes;

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var fetchNeededData = function fetchNeededData(dispatch, _ref) {
  var components = _ref.components,
      params = _ref.params,
      location = _ref.location;
  return Promise.all(components.reduce(function (p, c) {
    return (c && c.needs ? c.needs : []).concat(p);
  }, []).map(function (n) {
    return dispatch(n(params, location.pathname));
  }));
};

exports.default = fetchNeededData;

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var icons = {
  twitter: {
    width: '24',
    height: '24',
    viewBox: '0 0 512 512',
    path: '<path d="M492,109.5c-17.4,7.7-36,12.9-55.6,15.3c20-12,35.4-31,42.6-53.6c-18.7,11.1-39.4,19.2-61.5,23.5  C399.8,75.8,374.6,64,346.8,64c-53.5,0-96.8,43.4-96.8,96.9c0,7.6,0.8,15,2.5,22.1C172,179,100.6,140.4,52.9,81.7  c-8.3,14.3-13.1,31-13.1,48.7c0,33.6,17.1,63.3,43.1,80.7C67,210.7,52,206.3,39,199c0,0.4,0,0.8,0,1.2c0,47,33.4,86.1,77.7,95  c-8.1,2.2-16.7,3.4-25.5,3.4c-6.2,0-12.3-0.6-18.2-1.8c12.3,38.5,48.1,66.5,90.5,67.3c-33.1,26-74.9,41.5-120.3,41.5  c-7.8,0-15.5-0.5-23.1-1.4C62.9,432,113.8,448,168.4,448C346.6,448,444,300.3,444,172.2c0-4.2-0.1-8.4-0.3-12.5  C462.6,146,479,128.9,492,109.5z"/>'
  },
  facebook: {
    width: '24',
    height: '24',
    viewBox: '0 0 512 512',
    path: '<path d="M288,192v-38.1c0-17.2,3.8-25.9,30.5-25.9H352V64h-55.9c-68.5,0-91.1,31.4-91.1,85.3V192h-45v64h45v192h83V256h56.4l7.6-64  H288z"/>'
  },
  navigation: {
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    path: '<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g fill="#263238"><rect x="4" y="6" width="16" height="2"></rect><rect x="4" y="16" width="16" height="2"></rect><rect x="4" y="11" width="16" height="2"></rect></g></g>'
  },
  close: {
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    path: '<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g fill="#263238"><rect transform="translate(12, 12) rotate(-45) translate(-12, -12) " x="4" y="11" width="16" height="2"></rect><rect transform="translate(12, 12) rotate(-315) translate(-12, -12) " x="4" y="11" width="16" height="2"></rect></g></g>'
  },
  usergroup: {
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    path: '<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path fill="#EE3224" d="M1.91611925,17.7337039 L1.79484588,19.3587671 L0,19.3587671 L0.12127337,17.5760485 C0.226377484,16.4199033 0.701360101,15.5245105 1.54623547,14.8898434 C2.39111084,14.2551762 3.53713273,13.9378474 4.98433552,13.9378474 C5.32390266,13.9378474 5.62304065,13.954017 5.88175846,13.9863567 C5.5098516,14.5280472 5.25113767,15.1505776 5.10560889,15.8539666 C5.09752396,15.8539666 5.07933314,15.8519454 5.05103588,15.847903 C5.02273862,15.8438605 5.00050539,15.8418393 4.98433552,15.8418393 C4.45881496,15.8418393 3.99798076,15.8943906 3.6018191,15.9994947 C3.20565744,16.1045988 2.90651945,16.2278922 2.70439616,16.3693785 C2.50227287,16.5108648 2.33855545,16.6806458 2.21323901,16.8787266 C2.08792257,17.0768075 2.00909566,17.2364825 1.97675594,17.3577564 C1.94441621,17.4790304 1.92420418,17.604345 1.91611925,17.7337039 L1.91611925,17.7337039 Z M23.8665993,17.5639212 L24,19.3587671 L22.1930268,19.3587671 L22.0717534,17.7215766 C22.0636685,17.5922176 22.0434565,17.4669031 22.0111167,17.3456291 C21.978777,17.2243551 21.8999501,17.0667013 21.7746337,16.872663 C21.6493172,16.6786246 21.4855998,16.5108648 21.2834765,16.3693785 C21.0813532,16.2278922 20.7822152,16.1045988 20.3860536,15.9994947 C19.9898919,15.8943906 19.5290577,15.8418393 19.0035371,15.8418393 C18.9954522,15.8418393 18.9772614,15.8438605 18.9489641,15.847903 C18.9206669,15.8519454 18.8984336,15.8539666 18.8822638,15.8539666 C18.7529049,15.1829173 18.4982333,14.5603869 18.1182415,13.9863567 C18.3688744,13.954017 18.66397,13.9378474 19.0035371,13.9378474 C20.442655,13.9378474 21.5866557,14.253155 22.4355735,14.8837797 C23.2844914,15.5144044 23.7614952,16.4077759 23.8665993,17.5639212 L23.8665993,17.5639212 Z M8.00404245,19.3587671 L6.19706923,19.3587671 L6.41536129,16.6058615 C6.53663527,15.3850368 7.08235998,14.4411352 8.05255179,13.7741283 C9.02274361,13.1071215 10.3365253,12.773623 11.9939363,12.773623 C13.6513473,12.773623 14.9651291,13.1071215 15.9353209,13.7741283 C16.9055127,14.4411352 17.4512374,15.3809944 17.5725114,16.5937342 L17.7908034,19.3587671 L15.9838302,19.3587671 L15.7655382,16.7271349 C15.7008587,16.0560856 15.345127,15.5467425 14.6983325,15.1990904 C14.0515379,14.8514384 13.1500816,14.677615 11.9939363,14.677615 C10.8377911,14.677615 9.93633471,14.8514384 9.28954017,15.1990904 C8.64274563,15.5467425 8.28701397,16.060128 8.22233451,16.7392623 L8.00404245,19.3587671 Z M4.62051541,13.1495705 C3.73117292,13.1495705 2.99141275,12.8120297 2.40121273,12.1369378 C1.81101271,11.461846 1.51591713,10.6190045 1.51591713,9.60838807 C1.51591713,8.72713051 1.80899151,7.99747636 2.39514907,7.41940374 C2.98130662,6.84133112 3.72308798,6.55229914 4.62051541,6.55229914 C5.51794284,6.55229914 6.2597242,6.84133112 6.84588176,7.41940374 C7.43203931,7.99747636 7.72511369,8.72713051 7.72511369,9.60838807 C7.72511369,10.6190045 7.43001811,11.461846 6.83981809,12.1369378 C6.24961807,12.8120297 5.50985791,13.1495705 4.62051541,13.1495705 L4.62051541,13.1495705 Z M4.62051541,8.41990904 C4.28094828,8.41990904 3.9919163,8.51692677 3.75341081,8.71096513 C3.51490533,8.9050035 3.39565437,9.20009908 3.39565437,9.59626074 C3.39565437,10.0813566 3.51086292,10.483576 3.74128348,10.8029308 C3.97170403,11.1222856 4.26477841,11.2819606 4.62051541,11.2819606 C4.97625241,11.2819606 5.26932679,11.1222856 5.49974735,10.8029308 C5.7301679,10.483576 5.84537645,10.0813566 5.84537645,9.59626074 C5.84537645,9.20009908 5.7261255,8.9050035 5.48762001,8.71096513 C5.24911452,8.51692677 4.96008255,8.41990904 4.62051541,8.41990904 L4.62051541,8.41990904 Z M16.7599798,12.1369378 C16.1697798,11.461846 15.8746842,10.6190045 15.8746842,9.60838807 C15.8746842,8.72713051 16.1677586,7.99747636 16.7539161,7.41940374 C17.3400737,6.84133112 18.081855,6.55229914 18.9792825,6.55229914 C19.86054,6.55229914 20.598279,6.84537352 21.1925215,7.43153108 C21.786764,8.01768863 22.0838807,8.74330037 22.0838807,9.60838807 C22.0838807,10.6190045 21.7887852,11.461846 21.1985851,12.1369378 C20.6083851,12.8120297 19.868625,13.1495705 18.9792825,13.1495705 C18.08994,13.1495705 17.3501798,12.8120297 16.7599798,12.1369378 Z M18.9671551,8.41990904 C18.627588,8.41990904 18.338556,8.51692677 18.1000505,8.71096513 C17.861545,8.9050035 17.7422941,9.20009908 17.7422941,9.59626074 C17.7422941,10.0813566 17.8575026,10.483576 18.0879232,10.8029308 C18.3183437,11.1222856 18.6114181,11.2819606 18.9671551,11.2819606 C19.3228921,11.2819606 19.6159665,11.1222856 19.8463871,10.8029308 C20.0768076,10.483576 20.1920162,10.0813566 20.1920162,9.59626074 C20.1920162,9.17584428 20.0747864,8.87468509 19.8403234,8.69277413 C19.6058604,8.51086316 19.3148072,8.41990904 18.9671551,8.41990904 L18.9671551,8.41990904 Z M9.44719555,10.9120768 C8.81657087,10.1965603 8.50126326,9.30520998 8.50126326,8.23799899 C8.50126326,7.3244017 8.81859208,6.5563447 9.45325922,5.93380495 C10.0879264,5.3112652 10.8701318,5 11.7998989,5 C12.7296661,5 13.5118715,5.3112652 14.1465387,5.93380495 C14.7812058,6.5563447 15.0985346,7.3244017 15.0985346,8.23799899 C15.0985346,9.30520998 14.783227,10.1965603 14.1526023,10.9120768 C13.5219776,11.6275933 12.737751,11.9853461 11.7998989,11.9853461 C10.8620469,11.9853461 10.0778202,11.6275933 9.44719555,10.9120768 Z M10.7812026,7.25568469 C10.5063149,7.51440251 10.3688732,7.83779493 10.3688732,8.22587165 C10.3688732,8.76756208 10.5042937,9.21829027 10.775139,9.57806973 C11.0459842,9.9378492 11.3875674,10.1177362 11.7998989,10.1177362 C12.2122305,10.1177362 12.5538137,9.9378492 12.8246589,9.57806973 C13.0955041,9.21829027 13.2309247,8.76756208 13.2309247,8.22587165 C13.2309247,7.83779493 13.0934829,7.51440251 12.8185953,7.25568469 C12.5437076,6.99696687 12.2041455,6.8676099 11.7998989,6.8676099 C11.3956523,6.8676099 11.0560903,6.99696687 10.7812026,7.25568469 Z"></path></g>'
  },
  info: {
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    path: '<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><circle stroke="#EE3224" stroke-width="2" fill-opacity="0" fill="#EE3224" cx="12" cy="12" r="9"></circle><rect fill="#EE3224" x="11" y="10" width="2" height="7"></rect><rect fill="#EE3224" x="11" y="7" width="2" height="2"></rect></g>'
  },
  quote: {
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    path: '<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M16.5517241,9.68965517 L23,9.68965517 L23,19.1724138 L13.137931,19.1724138 L13.137931,10.0689655 C13.137931,8.12499028 13.6713309,6.62751962 14.7381466,5.57650862 C15.8049622,4.52549762 17.2945307,4 19.2068966,4 L19.2068966,5.89655172 C17.7054523,5.89655172 16.6347015,6.2264694 15.9946121,6.88631466 C15.3545227,7.54615991 15.0344828,8.60703292 15.0344828,10.0689655 L15.0344828,17.2758621 L21.1034483,17.2758621 L21.1034483,11.5862069 L16.5517241,11.5862069 L16.5517241,9.68965517 Z M4.4137931,11.5862069 L4.4137931,9.68965517 L10.862069,9.68965517 L10.862069,19.1724138 L1,19.1724138 L1,10.0689655 C1,8.12499028 1.53339984,6.62751962 2.60021552,5.57650862 C3.6670312,4.52549762 5.15659963,4 7.06896552,4 L7.06896552,5.89655172 C5.56752123,5.89655172 4.49677044,6.2264694 3.85668103,6.88631466 C3.21659163,7.54615991 2.89655172,8.60703292 2.89655172,10.0689655 L2.89655172,17.2758621 L8.96551724,17.2758621 L8.96551724,11.5862069 L4.4137931,11.5862069 Z" fill="#786A65"></path></g>'
  },
  goto: {
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    path: '<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><polygon fill="#fff" points="11.8669891 1 23 12.1330109 11.8669891 23.2660218 10.3506651 21.7629988 18.9165659 13.1970979 1 13.1970979 1 11.0689238 18.9165659 11.0689238 10.3506651 2.50302297"></polygon></g>'
  },
  down: {
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    path: '<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><polygon fill="#263238" points="23.133 12 12 23.133 0.866 12 2.370 10.483 10.935 19.049 10.935 1.133 13.064 1.133 13.064 19.049 21.629 10.483"></polygon></g>'
  },
  tornado: {
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    path: '<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path fill="#EE3224" d="M7.02573529,8.52941176 C6.9889704,8.56617665 6.9558825,8.61397029 6.92647059,8.67279412 C6.85294081,8.80514772 6.84191151,8.93014647 6.89338235,9.04779412 C6.95220618,9.1875007 7.0955871,9.33088162 7.32352941,9.47794118 C7.55147173,9.62500074 7.8749979,9.77757274 8.29411765,9.93566176 C8.71323739,10.0937508 9.29779037,10.222426 10.0477941,10.3216912 C10.7977979,10.4209564 11.6470541,10.4705882 12.5955882,10.4705882 C15.3897199,10.4705882 17.4816107,9.93750533 18.8713235,8.87132353 C18.9080884,9.2463254 18.7371342,9.73345289 18.3584559,10.3327206 C17.9797775,10.9319883 17.4338271,11.3749986 16.7205882,11.6617647 C16.1838208,11.8750011 15.6029443,12.0238966 14.9779412,12.1084559 C14.3529381,12.1930151 13.5588283,12.2352941 12.5955882,12.2352941 C11.0955807,12.2352941 9.77941743,12.1066189 8.64705882,11.8492647 L8.58088235,11.8823529 C8.45588173,11.9411768 8.36764732,12.036764 8.31617647,12.1691176 C8.25735265,12.3014712 8.26102908,12.4338229 8.32720588,12.5661765 C8.45220651,12.8308837 8.89337857,13.0772047 9.65073529,13.3051471 C10.408092,13.5330894 11.4264642,13.6470588 12.7058824,13.6470588 C14.0000065,13.6470588 15.0698487,13.5238983 15.9154412,13.2775735 C16.7610336,13.0312488 17.3786745,12.7463251 17.7683824,12.4227941 C17.6213228,13.0919151 17.4080896,13.6102923 17.1286765,13.9779412 C16.8492633,14.3455901 16.5000021,14.6397048 16.0808824,14.8602941 C15.6838215,15.0661775 15.2352966,15.2095584 14.7352941,15.2904412 C14.2352916,15.3713239 13.5588278,15.4117647 12.7058824,15.4117647 C11.6691125,15.4117647 10.724269,15.3308832 9.87132353,15.1691176 C9.67279313,15.2500004 9.52389756,15.3805138 9.42463235,15.5606618 C9.32536715,15.7408097 9.32352893,15.9007346 9.41911765,16.0404412 C9.57353018,16.2536775 9.88786528,16.4374992 10.3621324,16.5919118 C10.8363994,16.7463243 11.4558785,16.8235294 12.2205882,16.8235294 C13.0808867,16.8235294 13.854776,16.751839 14.5422794,16.6084559 C15.2297828,16.4650728 15.7352925,16.2977951 16.0588235,16.1066176 C15.9191169,16.8566214 15.5330914,17.4577183 14.9007353,17.9099265 C14.2683792,18.3621346 13.3750058,18.5882353 12.2205882,18.5882353 C11.9852929,18.5882353 11.7610305,18.577206 11.5477941,18.5551471 C11.5330882,18.7904424 11.5900729,18.9816169 11.71875,19.1286765 C11.8474271,19.275736 12.1066157,19.470587 12.4963235,19.7132353 C12.658089,19.808824 12.7867642,19.8878673 12.8823529,19.9503676 C12.9779417,20.012868 13.1066168,20.1102935 13.2683824,20.2426471 C13.4301479,20.3750007 13.5606613,20.4999994 13.6599265,20.6176471 C13.7591917,20.7352947 13.8621318,20.8878667 13.96875,21.0753676 C14.0753682,21.2628686 14.1507351,21.4522049 14.1948529,21.6433824 C14.2389708,21.8345598 14.257353,22.0606605 14.25,22.3216912 C14.242647,22.5827219 14.2022062,22.8566162 14.1286765,23.1433824 L12.4301471,22.6911765 C12.5257358,22.3161746 12.5183829,22.0441185 12.4080882,21.875 C12.2977936,21.7058815 12.0183846,21.4852955 11.5698529,21.2132353 C11.3419106,21.0661757 11.1691182,20.9522063 11.0514706,20.8713235 C10.9338229,20.7904408 10.7720599,20.6525745 10.5661765,20.4577206 C10.3602931,20.2628667 10.2058829,20.0735303 10.1029412,19.8897059 C9.99999949,19.7058814 9.91360329,19.4687515 9.84375,19.1783088 C9.77389671,18.8878662 9.75735276,18.5772075 9.79411765,18.2463235 C8.95587816,17.9742633 8.35294301,17.5735321 7.98529412,17.0441176 C7.55146842,16.4117615 7.46691044,15.7536799 7.73161765,15.0698529 C7.79779445,14.9154404 7.89338173,14.742648 8.01838235,14.5514706 C7.42279114,14.2279396 7.00367768,13.8308847 6.76102941,13.3602941 C6.41543945,12.6470553 6.44117449,11.9375035 6.83823529,11.2316176 C6.05881963,10.8492628 5.54044246,10.3492678 5.28308824,9.73161765 C5.04043996,9.15808537 5.05146926,8.57720882 5.31617647,7.98897059 C3.7720511,7.35661449 3,6.53676974 3,5.52941176 C3,4.94852651 3.26286502,4.4264729 3.78860294,3.96323529 C4.31434086,3.49999768 5.01286329,3.12867787 5.88419118,2.84926471 C6.75551906,2.56985154 7.71323007,2.3584566 8.75735294,2.21507353 C9.80147581,2.07169046 10.8823474,2 12,2 C13.1176526,2 14.1985242,2.07169046 15.2426471,2.21507353 C16.2867699,2.3584566 17.2444809,2.56985154 18.1158088,2.84926471 C18.9871367,3.12867787 19.6856591,3.49999768 20.2113971,3.96323529 C20.737135,4.4264729 21,4.94852651 21,5.52941176 C21,6.11029702 20.737135,6.63235062 20.2113971,7.09558824 C19.6856591,7.55882585 18.9871367,7.93014566 18.1158088,8.20955882 C17.2444809,8.48897199 16.2867699,8.70036693 15.2426471,8.84375 C14.1985242,8.98713307 13.1176526,9.05882353 12,9.05882353 C10.1911674,9.05882353 8.53309577,8.88235471 7.02573529,8.52941176 L7.02573529,8.52941176 Z M4.76470588,5.52941176 C4.77205886,5.6176475 4.86580792,5.73161695 5.04595588,5.87132353 C5.22610384,6.01103011 5.51654211,6.16360211 5.91727941,6.32904412 C6.31801671,6.49448612 6.78860024,6.64889634 7.32904412,6.79227941 C7.869488,6.93566248 8.55146647,7.05514658 9.375,7.15073529 C10.1985335,7.24632401 11.0735248,7.29411765 12,7.29411765 C12.9264752,7.29411765 13.8014665,7.24632401 14.625,7.15073529 C15.4485335,7.05514658 16.130512,6.93566248 16.6709559,6.79227941 C17.2113998,6.64889634 17.6819833,6.49448612 18.0827206,6.32904412 C18.4834579,6.16360211 18.7738962,6.01103011 18.9540441,5.87132353 C19.1341921,5.73161695 19.2279411,5.6176475 19.2352941,5.52941176 C19.2279411,5.44117603 19.1341921,5.32720658 18.9540441,5.1875 C18.7738962,5.04779342 18.4834579,4.89522142 18.0827206,4.72977941 C17.6819833,4.56433741 17.2113998,4.40992719 16.6709559,4.26654412 C16.130512,4.12316105 15.4485335,4.00367695 14.625,3.90808824 C13.8014665,3.81249952 12.9264752,3.76470588 12,3.76470588 C11.0735248,3.76470588 10.1985335,3.81249952 9.375,3.90808824 C8.55146647,4.00367695 7.869488,4.12316105 7.32904412,4.26654412 C6.78860024,4.40992719 6.31801671,4.56433741 5.91727941,4.72977941 C5.51654211,4.89522142 5.22610384,5.04779342 5.04595588,5.1875 C4.86580792,5.32720658 4.77205886,5.44117603 4.76470588,5.52941176 L4.76470588,5.52941176 Z"></path></g>'
  },
  flag: {
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    path: '<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path fill="#EE3224" d="M22,4.81411263 L22,19.0665636 L21.2769608,19.262642 C21.195261,19.287152 21.1033502,19.3116615 21.0012255,19.3361715 C20.8991008,19.3606814 20.6764723,19.4035731 20.3333333,19.4648479 C19.9901944,19.5261227 19.6429756,19.5710569 19.2916667,19.5996518 C18.9403577,19.6282468 18.4991857,19.6405015 17.9681373,19.6364166 C17.4370888,19.6323316 16.9101333,19.5976097 16.3872549,19.5322499 C15.7581668,19.4505501 15.1290881,19.2932805 14.5,19.0604362 C13.8709119,18.8275919 13.417485,18.6335579 13.1397059,18.4783283 C12.8619267,18.3230988 12.4289245,18.0575786 11.8406863,17.6817597 C11.7344766,17.6163999 11.6527781,17.5673808 11.5955882,17.5347009 C10.5171515,16.8484229 9.63480735,16.4113358 8.94852941,16.2234264 C8.04983211,15.9864971 6.91013762,15.9415629 5.52941176,16.0886224 L5.52941176,14.1155832 C7.10621703,13.9766936 8.4133935,14.0502223 9.45098039,14.3361715 C9.85130919,14.4423811 10.2577594,14.5894385 10.6703431,14.7773479 C11.0829269,14.9652574 11.409721,15.1306969 11.6507353,15.2736715 C11.8917496,15.416646 12.2205862,15.6188499 12.6372549,15.8802891 C12.6781048,15.904799 12.7904403,15.9762852 12.9742647,16.0947499 C13.1580892,16.2132145 13.2785945,16.2887857 13.3357843,16.3214656 C13.3929741,16.3541455 13.5073521,16.4215468 13.6789216,16.5236715 C13.8504911,16.6257961 13.9730388,16.6972824 14.0465686,16.7381322 C14.1200984,16.7789821 14.2406037,16.840256 14.4080882,16.9219558 C14.5755727,17.0036555 14.7103753,17.0649294 14.8125,17.1057793 C14.9146247,17.1466292 15.0473848,17.1976908 15.2107843,17.2589656 C15.3741838,17.3202404 15.5253261,17.367217 15.6642157,17.3998969 C15.8031053,17.4325768 15.95629,17.4652563 16.1237745,17.4979362 C16.291259,17.5306161 16.4607835,17.5592105 16.6323529,17.5837205 C17.7107897,17.7226101 18.8463993,17.7062704 20.0392157,17.5347009 L20.0392157,7.30185773 C18.9035891,7.48159719 17.6903659,7.48976704 16.3995098,7.32636753 C15.7214018,7.24466778 15.0616862,7.09148304 14.4203431,6.86680871 C13.7790001,6.64213438 13.2826815,6.43380313 12.9313725,6.24180871 C12.5800636,6.04981429 12.1348066,5.78633653 11.5955882,5.45136753 C11.2115994,5.22260822 10.9215696,5.05104131 10.7254902,4.93666165 C10.5294108,4.82228199 10.2618481,4.68747942 9.92279412,4.53224989 C9.58374013,4.37702035 9.25898848,4.25855748 8.94852941,4.17685773 C7.72303309,3.85005871 6.06046801,3.8786532 3.96078431,4.26264204 L3.96078431,22.387642 L2,22.387642 L2,2.7185244 L2.73529412,2.53470087 C2.81699387,2.51019094 2.98039093,2.46934168 3.2254902,2.41215185 C3.47058946,2.35496202 3.84844516,2.28756073 4.35906863,2.20994597 C4.8696921,2.1323312 5.39052022,2.07309976 5.92156863,2.03224989 C6.45261703,1.99140001 7.04288891,1.98935755 7.69240196,2.02612244 C8.34191501,2.06288733 8.92810196,2.15071324 9.45098039,2.28960283 C10.3333377,2.52653212 11.3872488,3.02489315 12.6127451,3.78470087 C13.1192836,4.09515994 13.5175639,4.33004321 13.807598,4.48935773 C14.0976322,4.64867225 14.5020399,4.82023916 15.0208333,5.00406361 C15.5396268,5.18788806 16.0727097,5.31247832 16.620098,5.37783812 C18.1233735,5.56574756 19.487739,5.50038873 20.7132353,5.18175969 L22,4.81411263 Z"></path></g>'
  },
  earth: {
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    path: '<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path fill="#795548" d="M3,12.0087891 C3,16.9746094 7.02539062,21.0087891 12,21.0087891 C16.9746094,21.0087891 21,16.9746094 21,12.0087891 C21,7.03417969 16.9746094,3.00878906 12,3.00878906 C7.02539062,3.00878906 3,7.03417969 3,12.0087891 Z M14.8916016,6.21679688 C13.6083984,6.21679688 14.25,5.25878906 14.5751953,4.93359375 C14.6191406,4.88964844 14.6455078,4.828125 14.671875,4.77539062 C15.8496094,5.21484375 16.8955078,5.92675781 17.7304687,6.84960938 C16.8867187,6.45410156 16.0517578,8.15039062 15.2167969,8.15039062 C14.25,8.15039062 14.8916016,6.21679688 14.8916016,6.21679688 L14.8916016,6.21679688 Z M16.5,10.4003906 C16.5,8.40527344 18.5126953,8.43164062 18.3017578,7.5703125 C19.1894531,8.82714844 19.7167969,10.3476562 19.7167969,12.0087891 C19.7167969,12.6591797 19.6201172,13.2832031 19.4707031,13.8896484 C18.328125,13.3007812 16.5,12.0175781 16.5,10.4003906 L16.5,10.4003906 Z M9.42480469,10.7167969 C8.14160156,11.0419922 9.10839844,12.0087891 9.10839844,12.0087891 C10.3916016,12.6503906 9.75,12.9667969 9.75,12.9667969 C8.78320312,12.6503906 7.82519531,12.0087891 7.82519531,12.0087891 C7.82519531,12.0087891 6.53320312,11.0419922 6.85839844,10.4003906 C7.17480469,9.75878906 7.82519531,8.79199219 6.85839844,7.82519531 C6.55078125,7.52636719 6.26074219,7.32421875 5.98828125,7.18359375 C6.47167969,6.57714844 7.04296875,6.04101562 7.69335938,5.61035156 C8.15039062,6.41894531 9.42480469,7.18359375 9.42480469,7.18359375 C10.0751953,5.57519531 11.0332031,6.54199219 11.0332031,6.54199219 C11.3583984,5.90039062 12.6416016,6.21679688 12,6.85839844 C11.3583984,7.50878906 10.0751953,7.18359375 11.0332031,8.15039062 C12,9.10839844 11.3583984,7.50878906 12.6416016,7.50878906 C13.9248047,7.50878906 13.9248047,8.79199219 13.2832031,8.79199219 C12.6416016,8.79199219 12.9667969,9.10839844 11.6748047,9.75878906 C10.3916016,10.4003906 11.0332031,11.3583984 10.3916016,11.3583984 C9.75,11.3583984 10.3916016,10.4003906 9.42480469,10.7167969 L9.42480469,10.7167969 Z M12.6679688,19.0400391 C12.4042969,19.1894531 12.1933594,18.7236328 11.8945312,18.4160156 C11.5957031,18.1083984 11.296875,17.4931641 11.5957031,15.9462891 C11.5957031,15.9462891 10.3916016,15.6386719 10.3916016,13.7841797 C10.3916016,12.8613281 11.296875,12.2373047 12.7998047,12.8613281 C14.3027344,13.4765625 13.3974609,13.4765625 13.9951172,13.7841797 C14.6015625,14.0917969 14.9003906,15.0234375 13.9951172,15.9462891 C13.0986328,16.8779297 12.9404297,18.8818359 12.6679688,19.0400391 Z"></path></g>'
  },
  download: {
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    path: '<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path fill="#795548" d="M18.7375,9.04583333 C19.9291726,9.10694475 20.9374959,9.57291231 21.7625,10.44375 C22.5875041,11.3145877 23,12.361105 23,13.5833333 C23,14.8361174 22.5493101,15.9131899 21.6479167,16.8145833 C20.7465233,17.7159767 19.6694507,18.1666667 18.4166667,18.1666667 L6.5,18.1666667 C4.97221458,18.1666667 3.67361646,17.6319498 2.60416667,16.5625 C1.53471687,15.4930502 1,14.1944521 1,12.6666667 C1,11.2611041 1.47360638,10.0388941 2.42083333,9 C3.36806029,7.96110592 4.52915979,7.36527854 5.90416667,7.2125 C6.48472512,6.08193879 7.31735569,5.18055892 8.40208333,4.50833333 C9.48681098,3.83610775 10.6861045,3.5 12,3.5 C13.6500083,3.5 15.1013826,4.02707806 16.3541667,5.08125 C17.6069507,6.13542194 18.4013872,7.4569365 18.7375,9.04583333 L18.7375,9.04583333 Z M10.5333333,11.3833333 L7.41666667,11.3833333 L12,15.9666667 L16.5833333,11.3833333 L13.4666667,11.3833333 L13.4666667,7.9 L10.5333333,7.9 L10.5333333,11.3833333 Z"></path></g>'
  },
  share: {
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    path: '<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path fill="#786A65" d="M18,16.125 C18.8125041,16.125 19.4999972,16.4062472 20.0625,16.96875 C20.6250028,17.5312528 20.90625,18.2187459 20.90625,19.03125 C20.90625,19.8437541 20.6250028,20.5312472 20.0625,21.09375 C19.4999972,21.6562528 18.8125041,21.9375 18,21.9375 C17.1874959,21.9375 16.5000028,21.6562528 15.9375,21.09375 C15.3749972,20.5312472 15.09375,19.8437541 15.09375,19.03125 C15.09375,18.8437491 15.1249997,18.6250013 15.1875,18.375 L8.0625,14.25 C7.46874703,14.7812527 6.78125391,15.046875 6,15.046875 C5.18749594,15.046875 4.48437797,14.750003 3.890625,14.15625 C3.29687203,13.562497 3,12.8593791 3,12.046875 C3,11.2343709 3.28905961,10.531253 3.8671875,9.9375 C4.44531539,9.34374703 5.14062094,9.046875 5.953125,9.046875 C6.73437891,9.046875 7.42187203,9.31249734 8.015625,9.84375 L15.09375,5.765625 C15.0312497,5.45312344 15,5.21875078 15,5.0625 C15,4.24999594 15.296872,3.54687797 15.890625,2.953125 C16.484378,2.35937203 17.1874959,2.0625 18,2.0625 C18.8125041,2.0625 19.515622,2.35937203 20.109375,2.953125 C20.703128,3.54687797 21,4.24999594 21,5.0625 C21,5.87500406 20.703128,6.57812203 20.109375,7.171875 C19.515622,7.76562797 18.8125041,8.0625 18,8.0625 C17.2187461,8.0625 16.531253,7.79687766 15.9375,7.265625 L8.859375,11.34375 C8.92187531,11.6562516 8.953125,11.8906242 8.953125,12.046875 C8.953125,12.2031258 8.92187531,12.4374984 8.859375,12.75 L16.03125,16.875 C16.5312525,16.3749975 17.1874959,16.125 18,16.125 L18,16.125 Z"></path></g>'
  },
  drop: {
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    path: '<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path fill="#EE3224" d="M19.046,9.518 C19.848,10.807 20.25,12.207 20.25,13.718 C20.25,14.792 20.040,15.817 19.621,16.791 C19.202,17.764 18.640,18.604 17.935,19.310 C17.229,20.015 16.389,20.577 15.416,20.996 C14.442,21.415 13.417,21.625 12.343,21.625 C11.269,21.625 10.245,21.415 9.271,20.996 C8.297,20.577 7.457,20.015 6.752,19.310 C6.047,18.604 5.484,17.764 5.065,16.791 C4.646,15.817 4.437,14.792 4.437,13.718 C4.437,12.207 4.838,10.807 5.640,9.518 C6.020,8.909 6.741,8.011 7.805,6.822 C8.868,5.633 9.699,4.729 10.297,4.109 C10.895,3.490 11.373,3.001 11.731,2.643 L12.343,2.031 L12.956,2.643 C13.314,3.001 13.792,3.490 14.390,4.109 C14.988,4.729 15.818,5.633 16.882,6.822 C17.945,8.011 18.667,8.909 19.046,9.518 L19.046,9.518 L19.046,9.518 Z M12.343,19.906 C13.181,19.906 13.981,19.743 14.744,19.417 C15.507,19.091 16.166,18.651 16.721,18.096 C17.276,17.541 17.716,16.882 18.042,16.119 C18.368,15.356 18.531,14.556 18.531,13.718 C18.531,12.529 18.216,11.434 17.585,10.431 C16.934,9.393 15.186,7.405 12.343,4.469 C9.500,7.405 7.753,9.393 7.101,10.431 C6.471,11.434 6.156,12.529 6.156,13.718 C6.156,14.556 6.319,15.356 6.645,16.119 C6.970,16.882 7.411,17.541 7.966,18.096 C8.521,18.651 9.180,19.091 9.942,19.417 C10.705,19.743 11.505,19.906 12.343,19.906 L12.343,19.906 L12.343,19.906 Z M8.261,11.151 C8.698,10.456 9.851,9.106 11.720,7.101 L12.966,8.283 C11.212,10.152 10.130,11.412 9.722,12.064 C9.407,12.565 9.25,13.117 9.25,13.718 C9.25,14.592 9.565,15.333 10.195,15.942 L8.992,17.166 C8.018,16.228 7.531,15.079 7.531,13.718 C7.531,12.794 7.774,11.939 8.261,11.151 L8.261,11.151 L8.261,11.151 Z"></path></g>'
  },
  work: {
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    path: '<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path fill="#EE3224" d="M16.46875,7.21875 L21.28125,7.21875 L21.28125,19.9375 L2.71875,19.9375 L2.71875,7.21875 L7.53125,7.21875 L7.53125,4.984375 C7.53125,4.56184685 7.68342947,4.19840647 7.98779297,3.89404297 C8.29215647,3.58967947 8.65559685,3.4375 9.078125,3.4375 L14.921875,3.4375 C15.3444032,3.4375 15.7078435,3.58967947 16.012207,3.89404297 C16.3165705,4.19840647 16.46875,4.56184685 16.46875,4.984375 L16.46875,7.21875 L16.46875,7.21875 Z M19.5625,18.21875 L19.5625,8.9375 L10.625,8.9375 L10.625,7.21875 L14.75,7.21875 L14.75,5.15625 L9.25,5.15625 L9.25,8.9375 L4.4375,8.9375 L4.4375,18.21875 L19.5625,18.21875 L19.5625,18.21875 Z"></path></g>'
  },
  heart: {
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    path: '<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path fill="#EE3224" d="M20.5830078,9.28222656 C20.6904302,11.1227306 19.9778722,12.8414634 18.4453125,14.4384766 C17.843747,15.0615266 17.2332388,15.6953093 16.6137695,16.3398438 C15.9943003,16.9843782 15.4554059,17.5447567 14.9970703,18.0209961 C14.5387347,18.4972355 14.126955,18.9269187 13.7617188,19.3100586 C13.3964825,19.6931985 13.1171885,19.985025 12.9238281,20.1855469 L12.6230469,20.4970703 L12,21.1523438 L11.3769531,20.4970703 L11.0761719,20.1855469 C10.8828115,19.985025 10.6035175,19.6931985 10.2382813,19.3100586 C9.87304505,18.9269187 9.46305566,18.4972355 9.00830078,18.0209961 C8.5535459,17.5447567 8.01465155,16.9843782 7.39160156,16.3398438 C6.76855157,15.6953093 6.15625301,15.0615266 5.5546875,14.4384766 C4.02212775,12.8414634 3.30956978,11.1227306 3.41699219,9.28222656 C3.45996115,8.53743117 3.63899582,7.83740562 3.95410156,7.18212891 C4.2692073,6.52685219 4.68456773,5.99153854 5.20019531,5.57617188 C6.13835104,4.8170535 7.21613975,4.4375 8.43359375,4.4375 C10.001961,4.4375 11.1907512,4.99966886 12,6.12402344 C12.8092488,4.99966886 13.998039,4.4375 15.5664063,4.4375 C16.7838603,4.4375 17.861649,4.8170535 18.7998047,5.57617188 C19.3154323,5.99153854 19.7307927,6.52685219 20.0458984,7.18212891 C20.3610042,7.83740562 20.5400388,8.53743117 20.5830078,9.28222656 L20.5830078,9.28222656 Z M17.2099609,13.2460938 C18.4059305,12.0071553 18.9573572,10.7181057 18.8642578,9.37890625 C18.8356118,8.8346327 18.7102876,8.34586805 18.4882812,7.91259766 C18.2662749,7.47932726 18.008465,7.14811312 17.7148437,6.91894531 C17.1061167,6.41047923 16.3899781,6.15625 15.5664062,6.15625 C15.0221327,6.15625 14.5602233,6.25113837 14.1806641,6.44091797 C13.8011049,6.63069756 13.5236011,6.89029783 13.3481445,7.21972656 C13.1726879,7.54915529 13.0581057,7.79443279 13.0043945,7.95556641 C12.9506833,8.11670002 12.9059247,8.30826712 12.8701172,8.53027344 C12.8629557,8.55175792 12.859375,8.56608069 12.859375,8.57324219 C12.7734371,9.02441632 12.4977237,9.25 12.0322266,9.25 C11.7529283,9.25 11.539877,9.18196683 11.3930664,9.04589844 C11.2462558,8.90983005 11.1621095,8.74869885 11.140625,8.5625 C10.9687491,7.38085347 10.410161,6.62890786 9.46484375,6.30664062 C9.1568995,6.20637971 8.81315294,6.15625 8.43359375,6.15625 C7.61002192,6.15625 6.89388325,6.41047923 6.28515625,6.91894531 C5.99153499,7.14811312 5.73372507,7.47932726 5.51171875,7.91259766 C5.28971243,8.34586805 5.16438816,8.8346327 5.13574219,9.37890625 C5.04264276,10.7181057 5.59406954,12.0071553 6.79003906,13.2460938 C9.50424534,16.0605609 11.2408816,17.8652304 12,18.6601562 C12.7591184,17.8652304 14.4957547,16.0605609 17.2099609,13.2460938 L17.2099609,13.2460938 Z"></path></g>'
  },
  back: {
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    path: '<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><polygon fill="#263238" points="12.1330109 23.2660218 1 12.1330109 12.1330109 1 13.6493349 2.50302297 5.0834341 11.0689238 23 11.0689238 23 13.1970979 5.0834341 13.1970979 13.6493349 21.7629988"></polygon></g>'
  }
};

var Icon = function Icon(props) {
  return _react2.default.createElement('svg', { className: 'icn', style: { width: props.width, height: props.height }, width: props.width || icons[props.name].width, height: props.height || icons[props.name].height, viewBox: props.viewBox || icons[props.name].viewBox, dangerouslySetInnerHTML: { __html: icons[props.name].path } });
};

exports.default = Icon;

/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

var baseConvert = __webpack_require__(1064),
    util = __webpack_require__(1066);

/**
 * Converts `func` of `name` to an immutable auto-curried iteratee-first data-last
 * version with conversion `options` applied. If `name` is an object its methods
 * will be converted.
 *
 * @param {string} name The name of the function to wrap.
 * @param {Function} [func] The function to wrap.
 * @param {Object} [options] The options object. See `baseConvert` for more details.
 * @returns {Function|Object} Returns the converted function or object.
 */
function convert(name, func, options) {
  return baseConvert(util, name, func, options);
}

module.exports = convert;


/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

var convert = __webpack_require__(529),
    func = convert('map', __webpack_require__(1073));

func.placeholder = __webpack_require__(307);
module.exports = func;


/***/ }),

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INVALIDATE_REQUEST = exports.RECEIVE_DATASETS = exports.REQUEST_DATASETS = exports.CHANGE_DATASET = undefined;
exports.changeDataset = changeDataset;
exports.fetchDatasets = fetchDatasets;

var _superagent = __webpack_require__(305);

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CHANGE_DATASET = exports.CHANGE_DATASET = 'CHANGE_DATASET';
var REQUEST_DATASETS = exports.REQUEST_DATASETS = 'REQUEST_DATASETS';
var RECEIVE_DATASETS = exports.RECEIVE_DATASETS = 'RECEIVE_DATASETS';
var INVALIDATE_REQUEST = exports.INVALIDATE_REQUEST = 'INVALIDATE_REQUEST';

function changeDataset(id) {
  return {
    type: CHANGE_DATASET,
    newDataset: id
  };
}

function requestDatasets() {
  return {
    type: REQUEST_DATASETS
  };
}

function receiveDatasets(datasets) {
  return {
    type: RECEIVE_DATASETS,
    datasets: datasets
  };
}

function invalidateRequest() {
  return {
    type: INVALIDATE_REQUEST
  };
}

function fetchDatasets(params) {
  return function (dispatch, getState) {
    if (shouldFetchDatasets(getState())) {
      dispatch(requestDatasets());
      console.log('Sending request');
      var promise = new Promise(function (resolve, reject) {
        _superagent2.default.get('http://localhost:3000/api/en/chapter-1.json').end(function (err, res) {
          console.log('Finished request');
          if (err) {
            dispatch(invalidateRequest());
            reject(err);
          } else {
            console.log('Got data', res);
            dispatch(receiveDatasets(res));
            resolve(res);
          }
        });
      });

      return promise;
    }
  };
}

function shouldFetchDatasets(state) {
  return state.storyReducer.isFetching ? false : state.storyReducer.datasets.length === 0;
}

/***/ }),

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Loader = function (_React$Component) {
  _inherits(Loader, _React$Component);

  function Loader(props) {
    _classCallCheck(this, Loader);

    return _possibleConstructorReturn(this, (Loader.__proto__ || Object.getPrototypeOf(Loader)).call(this, props));
  }

  _createClass(Loader, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: { opacity: '' + (this.props.showLoader && this.props.loadProgress > 0 ? '1' : '0'), position: 'fixed', top: 0, left: 0, width: '100%', height: '3px', zIndex: 9999999999 } },
        _react2.default.createElement('div', { style: { height: '3px', background: '#EE3224', transition: 'all 0.3s', width: this.props.loadProgress + '%' } })
      );
    }
  }]);

  return Loader;
}(_react2.default.Component);

function mapStateToProps(state) {
  return {
    showLoader: state.appReducer.showLoader,
    loadProgress: state.appReducer.loadProgress
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Loader);

/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var report = exports.report = {
  slug: "report",
  routes: {
    acknowledgements: {
      slug: "acknowledgements"
    },
    chapter1: {
      slug: "who-we-are"
    },
    chapter2: {
      slug: "what-we-do"
    },
    chapter3: {
      slug: "living-our-fundamental-principles"
    },
    chapter4: {
      slug: "strategic-aim-1"
    },
    chapter5: {
      slug: "strategic-aim-2"
    },
    chapter6: {
      slug: "strategic-aim-3"
    },
    chapter7: {
      slug: "enabling-action-1"
    },
    chapter8: {
      slug: "enabling-action-2"
    },
    chapter9: {
      slug: "enabling-action-3"
    }
  }
};

/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
          value: true
});
var prefixLanguageToRoute = function prefixLanguageToRoute(lang) {
          var route = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
          return lang === "en" ? route : route === "/" ? "/" + lang : "/" + lang + route;
};

exports.default = prefixLanguageToRoute;

/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Acknowledgements": [
		541,
		12
	],
	"./Acknowledgements.js": [
		541,
		12
	],
	"./Chapter1": [
		542,
		3
	],
	"./Chapter1.js": [
		542,
		3
	],
	"./Chapter2": [
		543,
		9
	],
	"./Chapter2.js": [
		543,
		9
	],
	"./Chapter3": [
		544,
		11
	],
	"./Chapter3.js": [
		544,
		11
	],
	"./Chapter4": [
		545,
		2
	],
	"./Chapter4.js": [
		545,
		2
	],
	"./Chapter5": [
		546,
		4
	],
	"./Chapter5.js": [
		546,
		4
	],
	"./Chapter6": [
		547,
		8
	],
	"./Chapter6.js": [
		547,
		8
	],
	"./Chapter7": [
		548,
		5
	],
	"./Chapter7.js": [
		548,
		5
	],
	"./Chapter8": [
		549,
		7
	],
	"./Chapter8.js": [
		549,
		7
	],
	"./Chapter9": [
		550,
		6
	],
	"./Chapter9.js": [
		550,
		6
	],
	"./Forms": [
		551,
		13
	],
	"./Forms.js": [
		551,
		13
	],
	"./Home": [
		314,
		1
	],
	"./Home.js": [
		314,
		1
	],
	"./Story": [
		552,
		10
	],
	"./Story.js": [
		552,
		10
	],
	"./index": [
		315,
		0
	],
	"./index.js": [
		315,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 555;


/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactI18next = __webpack_require__(41);

var _LanguageLink = __webpack_require__(176);

var _LanguageLink2 = _interopRequireDefault(_LanguageLink);

var _reactRedux = __webpack_require__(27);

var _constructLanguageRoute = __webpack_require__(180);

var _constructLanguageRoute2 = _interopRequireDefault(_constructLanguageRoute);

var _Dropdown = __webpack_require__(318);

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _appActions = __webpack_require__(69);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FDRSNavigation = function (_React$Component) {
  _inherits(FDRSNavigation, _React$Component);

  function FDRSNavigation(props) {
    _classCallCheck(this, FDRSNavigation);

    var _this = _possibleConstructorReturn(this, (FDRSNavigation.__proto__ || Object.getPrototypeOf(FDRSNavigation)).call(this, props));

    _this.state = {
      showDropdown: [false, false]
    };

    _this.goToLanguage = _this.goToLanguage.bind(_this);
    return _this;
  }

  _createClass(FDRSNavigation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      window.addEventListener("resize", function () {
        if (_this2.props.navOpen) _this2.props.closeNav();
      });
    }
  }, {
    key: "showDropdown",
    value: function showDropdown(n) {
      this.setState({
        showDropdown: this.state.showDropdown.map(function (item, i) {
          if (i === n) return true;else return item;
        })
      });
    }
  }, {
    key: "hideDropdown",
    value: function hideDropdown(n) {
      this.setState({
        showDropdown: this.state.showDropdown.map(function (item, i) {
          if (i === n) return false;else return item;
        })
      });
    }
  }, {
    key: "goToLanguage",
    value: function goToLanguage(lang) {
      this.context.router.push((0, _constructLanguageRoute2.default)(lang === "en" ? null : lang, this.context.router.location));
    }
  }, {
    key: "renderFlag",
    value: function renderFlag(language) {
      var flags = {
        en: _react2.default.createElement(
          "svg",
          { style: { width: "1rem", height: "1rem", marginTop: -1 }, className: "inline-block", width: "48px", height: "48px", viewBox: "0 0 48 48" },
          _react2.default.createElement(
            "g",
            null,
            _react2.default.createElement("path", { fill: "#002781", d: "M46,6H2C0.896,6,0,6.896,0,8v32c0,1.104,0.896,2,2,2h44c1.104,0,2-0.896,2-2V8C48,6.896,47.104,6,46,6z" }),
            _react2.default.createElement("path", { fill: "#E6E6E6", d: "M48,8c0-1.104-0.896-2-2-2h-5.161L28,15.876V6h-8v9.876L7.161,6H2C0.896,6,0,6.896,0,8v2.586L12.239,20H0v8h12.239L0,37.415V40c0,1.104,0.896,2,2,2h5.161L20,32.124V42h8v-9.876L40.839,42H46c1.104,0,2-0.896,2-2v-2.585L35.761,28H48v-8H35.761L48,10.586V8z" }),
            _react2.default.createElement("polygon", { fill: "#D10D24", points: "48,22 26,22 26,6 22,6 22,22 0,22 0,26 22,26 22,42 26,42 26,26 48,26 " }),
            _react2.default.createElement("path", { fill: "#D10D24", d: "M47.001,6.307L29.2,20h3.28L48,8.062V8C48,7.268,47.587,6.656,47.001,6.307z" }),
            _react2.default.createElement("path", { fill: "#D10D24", d: "M32.48,28H29.2l17.801,13.693C47.587,41.344,48,40.732,48,40v-0.062L32.48,28z" }),
            _react2.default.createElement("path", { fill: "#D10D24", d: "M15.52,28L0,39.938V40c0,0.732,0.413,1.344,0.999,1.693L18.8,28H15.52z" }),
            _react2.default.createElement("path", { fill: "#D10D24", d: "M15.52,20h3.28L0.999,6.307C0.413,6.656,0,7.268,0,8v0.062L15.52,20z" })
          )
        ),
        fr: _react2.default.createElement(
          "svg",
          { style: { width: "1rem", height: "1rem", marginTop: -1 }, className: "inline-block", width: "48px", height: "48px", viewBox: "0 0 48 48" },
          _react2.default.createElement(
            "g",
            null,
            _react2.default.createElement("path", { fill: "#01209F", d: "M16,42H2c-1.105,0-2-0.895-2-2V8c0-1.105,0.895-2,2-2h14V42z" }),
            _react2.default.createElement("path", { fill: "#EF4234", d: "M48,40c0,1.105-0.895,2-2,2H32V6h14c1.105,0,2,0.895,2,2V40z" }),
            _react2.default.createElement("rect", { x: "16", y: "6", fill: "#E6E6E6", width: "16", height: "36" })
          )
        ),
        es: _react2.default.createElement(
          "svg",
          { style: { width: "1rem", height: "1rem", marginTop: -1 }, className: "inline-block", width: "48px", height: "48px", viewBox: "0 0 48 48" },
          _react2.default.createElement(
            "g",
            null,
            _react2.default.createElement("path", { fill: "#C60B1E", d: "M48,16H0V8c0-1.105,0.895-2,2-2h44c1.105,0,2,0.895,2,2V16z" }),
            _react2.default.createElement("rect", { y: "16", fill: "#FFC300", width: "48", height: "16" }),
            _react2.default.createElement("path", { fill: "#C60B1E", d: "M48,40c0,1.105-0.895,2-2,2H2c-1.105,0-2-0.895-2-2v-8h48V40z" }),
            _react2.default.createElement("polygon", { fill: "#91443A", points: "14,20 14,18 6,18 6,20 8,20 8,22 6,22 6,27.332 10,30 14,27.332 14,22 12,22 12,20 " })
          )
        ),
        ar: _react2.default.createElement(
          "svg",
          { style: { width: "1rem", height: "1rem", marginTop: -1 }, className: "inline-block", width: "48px", height: "48px", viewBox: "0 0 48 48" },
          _react2.default.createElement(
            "g",
            null,
            _react2.default.createElement("path", { fill: "#0B6B37", d: "M48,40c0,1.105-0.895,2-2,2H2c-1.105,0-2-0.895-2-2V8c0-1.105,0.895-2,2-2h44c1.105,0,2,0.895,2,2V40z" }),
            _react2.default.createElement("path", { fill: "#FFFFFF", d: "M38,14v2h-6v2h6v2h-6v2h6v2h-6v2h6v2h-8v-4v-2v-2h-2v2h-2v2h2v4h-4V18h-2v10h-2V18h-2v10h-2v-4v-2h-2h-4v-2h6v-2h-6v-4H8v4v2v2v2v4v2h2h4h2h22h2v-2V18v-2v-2H38z M10,28v-4h4v4H10z" }),
            _react2.default.createElement("rect", { x: "12", y: "14", fill: "#FFFFFF", width: "2", height: "2" }),
            _react2.default.createElement("rect", { x: "18", y: "14", fill: "#FFFFFF", width: "6", height: "2" }),
            _react2.default.createElement("rect", { x: "26", y: "16", fill: "#FFFFFF", width: "4", height: "2" }),
            _react2.default.createElement("rect", { x: "8", y: "34", fill: "#FFFFFF", width: "32", height: "2" })
          )
        )
      };

      return flags[language];
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var t = this.props.t;
      var i18n = this.context.i18n;
      var language = i18n.language;


      var pageData = i18n.store.data[language]["common"];

      return _react2.default.createElement(
        "header",
        { className: "relative clearfix shadow-4 bg-white z-index-max print-hidden" },
        _react2.default.createElement(
          "div",
          { className: "col sm-6" },
          _react2.default.createElement(
            "a",
            { href: "http://www.ifrc.org", target: "_blank", className: "inline-block align-middle link-no-underline" },
            _react2.default.createElement("img", {
              src: "/img/ifrc-logo-2.png",
              height: 72,
              className: "inline-block align-middle mx1"
            })
          ),
          _react2.default.createElement(
            "h1",
            { className: "inline-block align-middle text-xs light m0 lh-small", style: { fontFamily: "Helvetica Neue, sans-serif" } },
            _react2.default.createElement(
              _LanguageLink2.default,
              { to: "/fdrs", className: "color-regular uppercase extended link-no-underline" },
              _react2.default.createElement(
                "span",
                { className: "color-primary" },
                t("common:nameParts")[0]
              ),
              "\xA0",
              t("common:nameParts")[1],
              _react2.default.createElement("br", null),
              t("common:nameParts")[2]
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "absolute t0 r0 z-index-1 sm-hidden" },
          _react2.default.createElement(
            "button",
            { className: "btn bg-light p15", onClick: this.props.toggleNav },
            _react2.default.createElement(
              "span",
              { className: "block" },
              _react2.default.createElement(
                "svg",
                { className: "block", width: "20px", height: "20px", viewBox: "0 0 24 24" },
                _react2.default.createElement(
                  "g",
                  { transform: "translate(0, 0)" },
                  _react2.default.createElement("line", { fill: "none", stroke: "#343434", strokeWidth: "2", strokeLinecap: "square", strokeMiterlimit: "10", x1: "1", y1: "12", x2: "23", y2: "12", strokeLinejoin: "miter" }),
                  _react2.default.createElement("line", { fill: "none", stroke: "#343434", strokeWidth: "2", strokeLinecap: "square", strokeMiterlimit: "10", x1: "1", y1: "5", x2: "23", y2: "5", strokeLinejoin: "miter" }),
                  _react2.default.createElement("line", { fill: "none", stroke: "#343434", strokeWidth: "2", strokeLinecap: "square", strokeMiterlimit: "10", x1: "1", y1: "19", x2: "23", y2: "19", strokeLinejoin: "miter" })
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "absolute t0 r0 sm-relative col base-10 sm-6 bg-white " + (this.context.i18n.language === "ar" ? "sm-text-left" : "sm-text-right") + " nav " + (this.props.navOpen ? "nav-open" : "") },
          _react2.default.createElement(
            "nav",
            { className: "relative block sm-inline-block t0 r0" },
            _react2.default.createElement(
              "ul",
              { className: "m0 p0" },
              _react2.default.createElement(
                "li",
                { className: "block relative sm-inline-block" },
                _react2.default.createElement(
                  _Dropdown2.default,
                  { showDropdown: this.state.showDropdown[0] },
                  _react2.default.createElement(
                    _LanguageLink2.default,
                    { to: "/fdrs", className: "btn block py15 text-left bg-white z-index-1", onFocus: function onFocus() {
                        return _this3.showDropdown(0);
                      }, onBlur: function onBlur() {
                        return _this3.hideDropdown(0);
                      } },
                    _react2.default.createElement(
                      "span",
                      { className: "inline-block px05" },
                      _react2.default.createElement(
                        "svg",
                        { style: { width: "1rem", height: "1rem", marginTop: -1 }, width: "20px", height: "20px", viewBox: "0 0 24 24" },
                        _react2.default.createElement(
                          "g",
                          { transform: "translate(0, 0)", className: "stroke-current" },
                          _react2.default.createElement("line", { fill: "none", stroke: "inherit", strokeWidth: "2", strokeLinecap: "square", strokeMiterlimit: "10", x1: "10", y1: "4", x2: "22", y2: "4", strokeLinejoin: "miter" }),
                          _react2.default.createElement("line", { fill: "none", stroke: "inherit", strokeWidth: "2", strokeLinecap: "square", strokeMiterlimit: "10", x1: "10", y1: "12", x2: "22", y2: "12", strokeLinejoin: "miter" }),
                          _react2.default.createElement("line", { fill: "none", stroke: "inherit", strokeWidth: "2", strokeLinecap: "square", strokeMiterlimit: "10", x1: "10", y1: "20", x2: "22", y2: "20", strokeLinejoin: "miter" }),
                          _react2.default.createElement("rect", { x: "2", y: "2", fill: "none", stroke: "inherit", strokeWidth: "2", strokeLinecap: "square", strokeMiterlimit: "10", width: "4", height: "4", strokeLinejoin: "miter" }),
                          _react2.default.createElement("rect", { x: "2", y: "10", fill: "none", stroke: "inherit", strokeWidth: "2", strokeLinecap: "square", strokeMiterlimit: "10", width: "4", height: "4", strokeLinejoin: "miter" }),
                          _react2.default.createElement("rect", { x: "2", y: "18", fill: "none", stroke: "inherit", strokeWidth: "2", strokeLinecap: "square", strokeMiterlimit: "10", width: "4", height: "4", strokeLinejoin: "miter" })
                        )
                      )
                    ),
                    _react2.default.createElement(
                      "span",
                      { className: "inline-block px05" },
                      pageData.navigation[0].name
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "relative sm-absolute t100 l0 bg-white text-left shadow-4 dropdown-menu" },
                    _react2.default.createElement(
                      "ul",
                      { className: "m0 p0 base-12" },
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          _LanguageLink2.default,
                          { to: "/fdrs/overview/map", className: "btn px1 py1 text-left base-12", onFocus: function onFocus() {
                              return _this3.showDropdown(0);
                            }, onBlur: function onBlur() {
                              return _this3.hideDropdown(0);
                            } },
                          _react2.default.createElement(
                            "svg",
                            { style: { width: "1rem", height: "1rem", marginTop: -1, marginRight: "1rem" }, width: "24px", height: "24px", viewBox: "0 0 24 24" },
                            _react2.default.createElement(
                              "g",
                              { transform: "translate(0, 0)", className: "stroke-current" },
                              _react2.default.createElement("path", { fill: "none", stroke: "#343434", strokeWidth: "2", strokeMiterlimit: "10", d: "M5.7,3C6.4,3.5,7,4.1,7.5,5C7.9,5.7,8.9,7.8,8,9c-1,1.3-4,1.8-4,3c0,0.9,1.3,2,2,3c1,1.5,0.6,3,0,4c-0.3,0.5-0.8,0.9-1.3,1.2", strokeLinejoin: "miter", strokeLinecap: "butt" }),
                              _react2.default.createElement("path", { fill: "none", stroke: "#343434", strokeWidth: "2", strokeMiterlimit: "10", d: "M20.6,5.2C18.5,6.3,15.5,7,15,7c-1,0.1-1.2-0.8-2-2c-0.6-0.9-2-2.1-2-3c0-0.4,0-0.7,0.1-1", strokeLinejoin: "miter", strokeLinecap: "butt" }),
                              _react2.default.createElement("circle", { fill: "none", stroke: "#343434", strokeWidth: "2", strokeLinecap: "square", strokeMiterlimit: "10", cx: "12", cy: "12", r: "11", strokeLinejoin: "miter" }),
                              _react2.default.createElement("path", { fill: "none", stroke: "#343434", strokeWidth: "2", strokeMiterlimit: "10", d: "M19,12.9c0,3.1-4,6.9-6,6.1c-1.8-0.7-0.5-2.1-1-6.1c-0.2-1.6,1.6-3,3.5-3S19,11.2,19,12.9z", strokeLinejoin: "miter", strokeLinecap: "butt" })
                            )
                          ),
                          pageData.navigation[0].dropdownItems[0]
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          _LanguageLink2.default,
                          { to: "/fdrs/societies", className: "btn px1 py1 text-left base-12", onFocus: function onFocus() {
                              return _this3.showDropdown(0);
                            }, onBlur: function onBlur() {
                              return _this3.hideDropdown(0);
                            } },
                          _react2.default.createElement(
                            "svg",
                            { style: { width: "1rem", height: "1rem", marginTop: -3, marginRight: "1rem" }, width: "24px", height: "24px", viewBox: "0 0 24 24" },
                            _react2.default.createElement(
                              "g",
                              { transform: "translate(0, 0)", className: "stroke-current" },
                              _react2.default.createElement("path", { fill: "none", stroke: "#343434", strokeWidth: "2", strokeMiterlimit: "10", d: "M12,23c-2-1.6-2.1-6.8,1-8c1.6-0.6,2.2,2.9,5.4,2c0.6-0.2,2.1,0.7,1.6,2.1", strokeLinejoin: "miter", strokeLinecap: "butt" }),
                              _react2.default.createElement("path", { fill: "none", stroke: "#343434", strokeWidth: "2", strokeMiterlimit: "10", d: "M6.3,4.8c0.6,0.5,1.1,1.1,1.6,1.8c0.4,0.7,1.3,2.6,0.5,3.6c-0.9,1.2-3.6,1.6-3.6,2.7c0,0.8,1.2,1.8,1.8,2.7c1,1.4,0.5,2.8,0,3.6c-0.3,0.5-0.7,0.8-1.2,1.1", strokeLinejoin: "miter", strokeLinecap: "butt" }),
                              _react2.default.createElement("path", { fill: "none", stroke: "#343434", strokeWidth: "2", strokeMiterlimit: "10", d: "M20.2,7.3C21.3,8.9,22,10.9,22,13c0,5.5-4.5,10-10,10S2,18.5,2,13S6.5,3,12,3c0.5,0,1,0,1.5,0.1", strokeLinejoin: "miter", strokeLinecap: "butt" }),
                              _react2.default.createElement("path", { fill: "none", stroke: "#343434", strokeWidth: "2", strokeLinecap: "square", strokeMiterlimit: "10", d: "M21,5c0,2.5-4,6-4,6s-4-3.5-4-6c0-2.5,2.1-4,4-4S21,2.5,21,5z", strokeLinejoin: "miter" })
                            )
                          ),
                          pageData.navigation[0].dropdownItems[1]
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          _LanguageLink2.default,
                          { to: "/fdrs/report", className: "btn px1 py1 text-left base-12", onFocus: function onFocus() {
                              return _this3.showDropdown(0);
                            }, onBlur: function onBlur() {
                              return _this3.hideDropdown(0);
                            } },
                          _react2.default.createElement(
                            "svg",
                            { style: { width: "1rem", height: "1rem", marginTop: -3, marginRight: "1rem" }, width: "24px", height: "24px", viewBox: "0 0 24 24" },
                            _react2.default.createElement(
                              "g",
                              { transform: "translate(0, 0)", className: "stroke-current" },
                              _react2.default.createElement("rect", { x: "2", y: "1", fill: "none", stroke: "#343434", strokeWidth: "2", strokeLinecap: "square", strokeMiterlimit: "10", width: "20", height: "22", strokeLinejoin: "miter" }),
                              _react2.default.createElement("line", { fill: "none", stroke: "#343434", strokeWidth: "2", strokeLinecap: "square", strokeMiterlimit: "10", x1: "12", y1: "8", x2: "12", y2: "16", strokeLinejoin: "miter" }),
                              _react2.default.createElement("line", { fill: "none", stroke: "#343434", strokeWidth: "2", strokeLinecap: "square", strokeMiterlimit: "10", x1: "8", y1: "14", x2: "8", y2: "16", strokeLinejoin: "miter" }),
                              _react2.default.createElement("line", { fill: "none", stroke: "#343434", strokeWidth: "2", strokeLinecap: "square", strokeMiterlimit: "10", x1: "16", y1: "11", x2: "16", y2: "16", strokeLinejoin: "miter" })
                            )
                          ),
                          pageData.navigation[0].dropdownItems[2]
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          _LanguageLink2.default,
                          { to: "/fdrs/data-download", className: "btn px1 py1 text-left base-12", onFocus: function onFocus() {
                              return _this3.showDropdown(0);
                            }, onBlur: function onBlur() {
                              return _this3.hideDropdown(0);
                            } },
                          _react2.default.createElement(
                            "svg",
                            { style: { width: "1rem", height: "1rem", marginTop: -1, marginRight: "1rem" }, width: "24px", height: "24px", viewBox: "0 0 24 24" },
                            _react2.default.createElement(
                              "g",
                              { transform: "translate(0, 0)", className: "stroke-current" },
                              _react2.default.createElement("line", { fill: "none", stroke: "#343434", strokeWidth: "2", strokeMiterlimit: "10", x1: "12", y1: "9", x2: "12", y2: "22", strokeLinejoin: "miter", strokeLinecap: "butt" }),
                              _react2.default.createElement("polyline", { fill: "none", stroke: "#343434", strokeWidth: "2", strokeLinecap: "square", strokeMiterlimit: "10", points: "15,19 12,22 9,19 ", strokeLinejoin: "miter" }),
                              _react2.default.createElement("path", { fill: "none", stroke: "#343434", strokeWidth: "2", strokeLinecap: "square", strokeMiterlimit: "10", d: "M17,16h2c2.209,0,4-1.791,4-4c0-2.197-1.782-4.013-4.025-3.997C18.718,4.093,15.474,1,11.5,1C7.481,1,4.21,4.164,4.018,8.136C2.287,8.575,1,10.132,1,12c0,2.209,1.791,4,4,4h2", strokeLinejoin: "miter" })
                            )
                          ),
                          pageData.navigation[0].dropdownItems[3]
                        )
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "li",
                { className: "block relative sm-inline-block" },
                _react2.default.createElement(
                  _LanguageLink2.default,
                  { to: "/fdrs/faq", className: "btn block py15" },
                  _react2.default.createElement(
                    "span",
                    { className: "inline-block px05" },
                    _react2.default.createElement(
                      "svg",
                      { style: { width: "1.25rem", height: "1.25rem", marginTop: -2 }, width: "24px", height: "24px", viewBox: "0 0 24 24" },
                      _react2.default.createElement(
                        "g",
                        { transform: "translate(0, 0)", className: "stroke-current" },
                        _react2.default.createElement("line", { fill: "none", stroke: "#343434", strokeWidth: "1.8", strokeLinecap: "square", strokeMiterlimit: "10", x1: "1", y1: "12", x2: "3", y2: "12", strokeLinejoin: "miter" }),
                        _react2.default.createElement("line", { fill: "none", stroke: "#343434", strokeWidth: "1.8", strokeLinecap: "square", strokeMiterlimit: "10", x1: "4.2", y1: "4.2", x2: "5.6", y2: "5.6", strokeLinejoin: "miter" }),
                        _react2.default.createElement("line", { fill: "none", stroke: "#343434", strokeWidth: "1.8", strokeLinecap: "square", strokeMiterlimit: "10", x1: "12", y1: "1", x2: "12", y2: "3", strokeLinejoin: "miter" }),
                        _react2.default.createElement("line", { fill: "none", stroke: "#343434", strokeWidth: "1.8", strokeLinecap: "square", strokeMiterlimit: "10", x1: "19.8", y1: "4.2", x2: "18.4", y2: "5.6", strokeLinejoin: "miter" }),
                        _react2.default.createElement("line", { fill: "none", stroke: "#343434", strokeWidth: "1.8", strokeLinecap: "square", strokeMiterlimit: "10", x1: "23", y1: "12", x2: "21", y2: "12", strokeLinejoin: "miter" }),
                        _react2.default.createElement("path", { fill: "none", stroke: "#343434", strokeWidth: "1.8", strokeLinecap: "square", strokeMiterlimit: "10", d: "M18,12c0-3.3-2.7-6-6-6s-6,2.7-6,6c0,2.6,1.7,4.8,4,5.7V20h4v-2.3C16.3,16.8,18,14.6,18,12z", strokeLinejoin: "miter" }),
                        _react2.default.createElement("line", { fill: "none", stroke: "#343434", strokeWidth: "1.8", strokeLinecap: "square", strokeMiterlimit: "10", x1: "10", y1: "23", x2: "14", y2: "23", strokeLinejoin: "miter" })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "span",
                    { className: "inline-block px05" },
                    pageData.navigation[1].name
                  )
                )
              ),
              _react2.default.createElement(
                "li",
                { className: "block relative sm-inline-block" },
                _react2.default.createElement(
                  _Dropdown2.default,
                  { showDropdown: this.state.showDropdown[1] },
                  _react2.default.createElement(
                    "div",
                    { className: "btn block py15 text-left bg-white z-index-1 sm-visible sm-block", style: { minWidth: 94 }, onFocus: function onFocus() {
                        return _this3.showDropdown(1);
                      }, onBlur: function onBlur() {
                        return _this3.hideDropdown(1);
                      } },
                    _react2.default.createElement(
                      "span",
                      { className: "inline-block px05" },
                      this.renderFlag(language)
                    ),
                    _react2.default.createElement(
                      "span",
                      { className: "inline-block px05 uppercase" },
                      pageData.languages[language].slug
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "relative sm-absolute t100 l0 bg-white text-left shadow-4", style: { width: "100%" } },
                    _react2.default.createElement(
                      "ul",
                      null,
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "button",
                          { onClick: function onClick() {
                              return _this3.goToLanguage("en");
                            }, className: "btn px05 py1 text-left base-12", onFocus: function onFocus() {
                              return _this3.showDropdown(1);
                            }, onBlur: function onBlur() {
                              return _this3.hideDropdown(1);
                            } },
                          _react2.default.createElement(
                            "span",
                            { className: "inline-block px05" },
                            this.renderFlag("en")
                          ),
                          _react2.default.createElement(
                            "span",
                            { className: "inline-block px05 uppercase" },
                            pageData.languages.en.slug
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "button",
                          { onClick: function onClick() {
                              return _this3.goToLanguage("fr");
                            }, className: "btn px05 py1 text-left base-12", onFocus: function onFocus() {
                              return _this3.showDropdown(1);
                            }, onBlur: function onBlur() {
                              return _this3.hideDropdown(1);
                            } },
                          _react2.default.createElement(
                            "span",
                            { className: "inline-block px05" },
                            this.renderFlag("fr")
                          ),
                          _react2.default.createElement(
                            "span",
                            { className: "inline-block px05 uppercase" },
                            pageData.languages.fr.slug
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "button",
                          { onClick: function onClick() {
                              return _this3.goToLanguage("es");
                            }, className: "btn px05 py1 text-left base-12", onFocus: function onFocus() {
                              return _this3.showDropdown(1);
                            }, onBlur: function onBlur() {
                              return _this3.hideDropdown(1);
                            } },
                          _react2.default.createElement(
                            "span",
                            { className: "inline-block px05" },
                            this.renderFlag("es")
                          ),
                          _react2.default.createElement(
                            "span",
                            { className: "inline-block px05 uppercase" },
                            pageData.languages.es.slug
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "button",
                          { onClick: function onClick() {
                              return _this3.goToLanguage("ar");
                            }, className: "btn px05 py1 text-left base-12", onFocus: function onFocus() {
                              return _this3.showDropdown(1);
                            }, onBlur: function onBlur() {
                              return _this3.hideDropdown(1);
                            } },
                          _react2.default.createElement(
                            "span",
                            { className: "inline-block px05" },
                            this.renderFlag("ar")
                          ),
                          _react2.default.createElement(
                            "span",
                            { className: "inline-block px05 uppercase" },
                            pageData.languages.ar.slug
                          )
                        )
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "li",
                { className: "block relative sm-inline-block" },
                _react2.default.createElement(
                  "a",
                  { href: "http://fdrs.ifrc.org", target: "_blank", className: "btn block p15 bg-primary color-inverted" },
                  t("common:login")
                )
              )
            )
          )
        )
      );
    }
  }]);

  return FDRSNavigation;
}(_react2.default.Component);

FDRSNavigation.propTypes = {
  t: _react2.default.PropTypes.func.isRequired,
  toggleNav: _react2.default.PropTypes.func,
  closeNav: _react2.default.PropTypes.func
};

FDRSNavigation.contextTypes = {
  router: _react2.default.PropTypes.object.isRequired,
  i18n: _react2.default.PropTypes.object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    navOpen: state.appReducer.navOpen
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    toggleNav: function toggleNav() {
      return dispatch((0, _appActions.toggleNav)());
    },
    closeNav: function closeNav() {
      return dispatch((0, _appActions.closeNav)());
    }
  };
};

exports.default = (0, _reactI18next.translate)()((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(FDRSNavigation));

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactI18next = __webpack_require__(41);

var _LanguageLink = __webpack_require__(176);

var _LanguageLink2 = _interopRequireDefault(_LanguageLink);

var _reactRedux = __webpack_require__(27);

var _constructLanguageRoute = __webpack_require__(180);

var _constructLanguageRoute2 = _interopRequireDefault(_constructLanguageRoute);

var _Dropdown = __webpack_require__(318);

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _appActions = __webpack_require__(69);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleNavigation = function (_React$Component) {
  _inherits(SimpleNavigation, _React$Component);

  function SimpleNavigation(props) {
    _classCallCheck(this, SimpleNavigation);

    var _this = _possibleConstructorReturn(this, (SimpleNavigation.__proto__ || Object.getPrototypeOf(SimpleNavigation)).call(this, props));

    _this.state = {
      showDropdown: [false, false]
    };

    _this.goToLanguage = _this.goToLanguage.bind(_this);
    return _this;
  }

  _createClass(SimpleNavigation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // window.addEventListener("resize", () => {
      //   if(this.props.navOpen) this.props.closeNav()
      // })
    }
  }, {
    key: "showDropdown",
    value: function showDropdown(n) {
      this.setState({
        showDropdown: this.state.showDropdown.map(function (item, i) {
          if (i === n) return true;else return item;
        })
      });
    }
  }, {
    key: "hideDropdown",
    value: function hideDropdown(n) {
      this.setState({
        showDropdown: this.state.showDropdown.map(function (item, i) {
          if (i === n) return false;else return item;
        })
      });
    }
  }, {
    key: "goToLanguage",
    value: function goToLanguage(lang) {
      this.context.router.push((0, _constructLanguageRoute2.default)(lang === "en" ? null : lang, this.context.router.location));
    }
  }, {
    key: "renderFlag",
    value: function renderFlag(language) {
      var flags = {
        en: _react2.default.createElement(
          "svg",
          { style: { width: "1rem", height: "1rem", marginTop: -1 }, className: "inline-block", width: "48px", height: "48px", viewBox: "0 0 48 48" },
          _react2.default.createElement(
            "g",
            null,
            _react2.default.createElement("path", { fill: "#002781", d: "M46,6H2C0.896,6,0,6.896,0,8v32c0,1.104,0.896,2,2,2h44c1.104,0,2-0.896,2-2V8C48,6.896,47.104,6,46,6z" }),
            _react2.default.createElement("path", { fill: "#E6E6E6", d: "M48,8c0-1.104-0.896-2-2-2h-5.161L28,15.876V6h-8v9.876L7.161,6H2C0.896,6,0,6.896,0,8v2.586L12.239,20H0v8h12.239L0,37.415V40c0,1.104,0.896,2,2,2h5.161L20,32.124V42h8v-9.876L40.839,42H46c1.104,0,2-0.896,2-2v-2.585L35.761,28H48v-8H35.761L48,10.586V8z" }),
            _react2.default.createElement("polygon", { fill: "#D10D24", points: "48,22 26,22 26,6 22,6 22,22 0,22 0,26 22,26 22,42 26,42 26,26 48,26 " }),
            _react2.default.createElement("path", { fill: "#D10D24", d: "M47.001,6.307L29.2,20h3.28L48,8.062V8C48,7.268,47.587,6.656,47.001,6.307z" }),
            _react2.default.createElement("path", { fill: "#D10D24", d: "M32.48,28H29.2l17.801,13.693C47.587,41.344,48,40.732,48,40v-0.062L32.48,28z" }),
            _react2.default.createElement("path", { fill: "#D10D24", d: "M15.52,28L0,39.938V40c0,0.732,0.413,1.344,0.999,1.693L18.8,28H15.52z" }),
            _react2.default.createElement("path", { fill: "#D10D24", d: "M15.52,20h3.28L0.999,6.307C0.413,6.656,0,7.268,0,8v0.062L15.52,20z" })
          )
        ),
        fr: _react2.default.createElement(
          "svg",
          { style: { width: "1rem", height: "1rem", marginTop: -1 }, className: "inline-block", width: "48px", height: "48px", viewBox: "0 0 48 48" },
          _react2.default.createElement(
            "g",
            null,
            _react2.default.createElement("path", { fill: "#01209F", d: "M16,42H2c-1.105,0-2-0.895-2-2V8c0-1.105,0.895-2,2-2h14V42z" }),
            _react2.default.createElement("path", { fill: "#EF4234", d: "M48,40c0,1.105-0.895,2-2,2H32V6h14c1.105,0,2,0.895,2,2V40z" }),
            _react2.default.createElement("rect", { x: "16", y: "6", fill: "#E6E6E6", width: "16", height: "36" })
          )
        ),
        es: _react2.default.createElement(
          "svg",
          { style: { width: "1rem", height: "1rem", marginTop: -1 }, className: "inline-block", width: "48px", height: "48px", viewBox: "0 0 48 48" },
          _react2.default.createElement(
            "g",
            null,
            _react2.default.createElement("path", { fill: "#C60B1E", d: "M48,16H0V8c0-1.105,0.895-2,2-2h44c1.105,0,2,0.895,2,2V16z" }),
            _react2.default.createElement("rect", { y: "16", fill: "#FFC300", width: "48", height: "16" }),
            _react2.default.createElement("path", { fill: "#C60B1E", d: "M48,40c0,1.105-0.895,2-2,2H2c-1.105,0-2-0.895-2-2v-8h48V40z" }),
            _react2.default.createElement("polygon", { fill: "#91443A", points: "14,20 14,18 6,18 6,20 8,20 8,22 6,22 6,27.332 10,30 14,27.332 14,22 12,22 12,20 " })
          )
        ),
        ar: _react2.default.createElement(
          "svg",
          { style: { width: "1rem", height: "1rem", marginTop: -1 }, className: "inline-block", width: "48px", height: "48px", viewBox: "0 0 48 48" },
          _react2.default.createElement(
            "g",
            null,
            _react2.default.createElement("path", { fill: "#0B6B37", d: "M48,40c0,1.105-0.895,2-2,2H2c-1.105,0-2-0.895-2-2V8c0-1.105,0.895-2,2-2h44c1.105,0,2,0.895,2,2V40z" }),
            _react2.default.createElement("path", { fill: "#FFFFFF", d: "M38,14v2h-6v2h6v2h-6v2h6v2h-6v2h6v2h-8v-4v-2v-2h-2v2h-2v2h2v4h-4V18h-2v10h-2V18h-2v10h-2v-4v-2h-2h-4v-2h6v-2h-6v-4H8v4v2v2v2v4v2h2h4h2h22h2v-2V18v-2v-2H38z M10,28v-4h4v4H10z" }),
            _react2.default.createElement("rect", { x: "12", y: "14", fill: "#FFFFFF", width: "2", height: "2" }),
            _react2.default.createElement("rect", { x: "18", y: "14", fill: "#FFFFFF", width: "6", height: "2" }),
            _react2.default.createElement("rect", { x: "26", y: "16", fill: "#FFFFFF", width: "4", height: "2" }),
            _react2.default.createElement("rect", { x: "8", y: "34", fill: "#FFFFFF", width: "32", height: "2" })
          )
        )
      };

      return flags[language];
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var t = this.props.t;
      var language = this.context.i18n.language;


      return _react2.default.createElement(
        "header",
        { className: "relative clearfix shadow-4 bg-white z-index-max print-hidden" },
        _react2.default.createElement(
          "div",
          { className: "col sm-6" },
          _react2.default.createElement(
            "a",
            { href: "http://www.ifrc.org", target: "_blank", className: "inline-block align-middle link-no-underline" },
            _react2.default.createElement("img", {
              src: "/img/ifrc-logo-2.png",
              height: 72,
              className: "inline-block align-middle mx1"
            })
          ),
          _react2.default.createElement(
            "h1",
            { className: "inline-block align-middle text-xs light m0 lh-small", style: { fontFamily: "Helvetica Neue, sans-serif" } },
            _react2.default.createElement(
              _LanguageLink2.default,
              { to: "/", className: "color-regular uppercase extended link-no-underline" },
              "IFRC Data Initiatives"
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "absolute t0 r0 sm-relative col base-auto sm-6 bg-white sm-text-right" },
          _react2.default.createElement(
            "nav",
            { className: "relative block sm-inline-block t0 r0" },
            _react2.default.createElement(
              "ul",
              { className: "m0 p0" },
              _react2.default.createElement(
                "li",
                { className: "block relative sm-inline-block" },
                _react2.default.createElement(
                  _Dropdown2.default,
                  { showDropdown: this.state.showDropdown[0] },
                  _react2.default.createElement(
                    "div",
                    { className: "btn block py15 px1 text-left bg-white z-index-1", style: { minWidth: 105 }, onFocus: function onFocus() {
                        return _this2.showDropdown(0);
                      }, onBlur: function onBlur() {
                        return _this2.hideDropdown(0);
                      } },
                    _react2.default.createElement(
                      "span",
                      { className: "inline-block px05" },
                      this.renderFlag(language)
                    ),
                    _react2.default.createElement(
                      "span",
                      { className: "inline-block px05 uppercase" },
                      language
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "relative sm-absolute t100 l0 bg-white text-left shadow-4", style: { width: "100%" } },
                    _react2.default.createElement(
                      "ul",
                      null,
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "button",
                          { onClick: function onClick() {
                              return _this2.goToLanguage("en");
                            }, className: "btn px1 py1 text-left base-12", onFocus: function onFocus() {
                              return _this2.showDropdown(0);
                            }, onBlur: function onBlur() {
                              return _this2.hideDropdown(0);
                            } },
                          _react2.default.createElement(
                            "span",
                            { className: "inline-block px05" },
                            this.renderFlag("en")
                          ),
                          _react2.default.createElement(
                            "span",
                            { className: "inline-block px05" },
                            "EN"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "button",
                          { onClick: function onClick() {
                              return _this2.goToLanguage("fr");
                            }, className: "btn px1 py1 text-left base-12", onFocus: function onFocus() {
                              return _this2.showDropdown(0);
                            }, onBlur: function onBlur() {
                              return _this2.hideDropdown(0);
                            } },
                          _react2.default.createElement(
                            "span",
                            { className: "inline-block px05" },
                            this.renderFlag("fr")
                          ),
                          _react2.default.createElement(
                            "span",
                            { className: "inline-block px05" },
                            "FR"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "button",
                          { onClick: function onClick() {
                              return _this2.goToLanguage("es");
                            }, className: "btn px1 py1 text-left base-12", onFocus: function onFocus() {
                              return _this2.showDropdown(0);
                            }, onBlur: function onBlur() {
                              return _this2.hideDropdown(0);
                            } },
                          _react2.default.createElement(
                            "span",
                            { className: "inline-block px05" },
                            this.renderFlag("es")
                          ),
                          _react2.default.createElement(
                            "span",
                            { className: "inline-block px05" },
                            "ES"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "button",
                          { onClick: function onClick() {
                              return _this2.goToLanguage("ar");
                            }, className: "btn px1 py1 text-left base-12", onFocus: function onFocus() {
                              return _this2.showDropdown(0);
                            }, onBlur: function onBlur() {
                              return _this2.hideDropdown(0);
                            } },
                          _react2.default.createElement(
                            "span",
                            { className: "inline-block px05" },
                            this.renderFlag("ar")
                          ),
                          _react2.default.createElement(
                            "span",
                            { className: "inline-block px05" },
                            "AR"
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return SimpleNavigation;
}(_react2.default.Component);

SimpleNavigation.propTypes = {
  t: _react2.default.PropTypes.func.isRequired,
  toggleNav: _react2.default.PropTypes.func,
  closeNav: _react2.default.PropTypes.func
};

SimpleNavigation.contextTypes = {
  router: _react2.default.PropTypes.object.isRequired,
  i18n: _react2.default.PropTypes.object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    navOpen: state.appReducer.navOpen
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    toggleNav: function toggleNav() {
      return dispatch((0, _appActions.toggleNav)());
    },
    closeNav: function closeNav() {
      return dispatch((0, _appActions.closeNav)());
    }
  };
};

exports.default = (0, _reactI18next.translate)()((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SimpleNavigation));

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _LanguageLink = __webpack_require__(176);

var _LanguageLink2 = _interopRequireDefault(_LanguageLink);

var _reactRedux = __webpack_require__(27);

var _reactI18next = __webpack_require__(41);

var _reactSelect = __webpack_require__(70);

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _constructLanguageRoute = __webpack_require__(180);

var _constructLanguageRoute2 = _interopRequireDefault(_constructLanguageRoute);

var _appActions = __webpack_require__(69);

var _Icon = __webpack_require__(528);

var _Icon2 = _interopRequireDefault(_Icon);

var _Loader = __webpack_require__(539);

var _Loader2 = _interopRequireDefault(_Loader);

var _FDRSNavigation = __webpack_require__(559);

var _FDRSNavigation2 = _interopRequireDefault(_FDRSNavigation);

var _SimpleNavigation = __webpack_require__(560);

var _SimpleNavigation2 = _interopRequireDefault(_SimpleNavigation);

var _reduxTooltip = __webpack_require__(130);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(565);

var languageOptions = [{ value: "en", label: "EN" }, { value: "fr", label: "FR" }, { value: "es", label: "ES" }, { value: "ar", label: "AR" }];

var Dropdown = function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  function Dropdown(props) {
    _classCallCheck(this, Dropdown);

    var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));

    _this.state = {
      showDropdown: false
    };

    _this.showDropdown = _this.showDropdown.bind(_this);
    _this.hideDropdown = _this.hideDropdown.bind(_this);
    return _this;
  }

  _createClass(Dropdown, [{
    key: "showDropdown",
    value: function showDropdown() {
      this.setState({ showDropdown: true });
    }
  }, {
    key: "hideDropdown",
    value: function hideDropdown() {
      this.setState({ showDropdown: false });
    }
  }, {
    key: "render",
    value: function render() {

      var dropdownStyles = {
        opacity: this.state.showDropdown || this.props.navOpen ? 1 : 0,
        pointerEvents: this.state.showDropdown || this.props.navOpen ? "all" : "none"
      };

      return _react2.default.createElement(
        "span",
        { onMouseEnter: this.showDropdown, onMouseLeave: this.hideDropdown, onClick: this.hideDropdown },
        this.props.children[0],
        _react2.default.createElement(
          "span",
          { style: dropdownStyles },
          this.props.children[1]
        )
      );
    }
  }]);

  return Dropdown;
}(_react2.default.Component);

// class BasicNavigation extends React.Component {
//   render() {
//   }
// }

var App = function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App(props) {
    _classCallCheck(this, App);

    var _this2 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this2.goToLanguage = _this2.goToLanguage.bind(_this2);
    return _this2;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("Mounting app: ", this.props.location);
    }
  }, {
    key: "goToLanguage",
    value: function goToLanguage(lang) {
      this.context.router.push((0, _constructLanguageRoute2.default)(lang.value === "en" ? null : lang.value, this.props.location));
    }
  }, {
    key: "render",
    value: function render() {
      var router = this.context.router;
      var language = this.context.i18n.language;
      var _props = this.props,
          t = _props.t,
          navOpen = _props.navOpen;

      var headerClassName = navOpen ? "site-header clearfix level-5 is-extended" : "site-header clearfix level-5";

      var prefixedRootRoute = "/" + language;

      return _react2.default.createElement(
        "div",
        {
          dir: language === "ar" ? "rtl" : "ltr",
          className: language === "ar" ? "layout-rtl" : ""
        },
        _react2.default.createElement(_Loader2.default, null),
        router.location.pathname !== "/" && router.location.pathname !== prefixedRootRoute ? _react2.default.createElement(_FDRSNavigation2.default, { toggleNav: this.props.toggleNav, navOpen: this.props.navOpen }) : _react2.default.createElement(_SimpleNavigation2.default, { toggleNav: this.props.toggleNav, navOpen: this.props.navOpen }),
        _react2.default.createElement(
          "div",
          { className: "main-content-wrapper light" },
          _react2.default.createElement(
            "div",
            null,
            this.props.children
          ),
          _react2.default.createElement(
            "footer",
            { className: "site-footer bg-dark clearfix hidden-print" },
            router.location.pathname !== "/" && router.location.pathname !== prefixedRootRoute ? _react2.default.createElement(
              "div",
              { className: "clearfix py2" },
              _react2.default.createElement(
                "div",
                { className: "col sm-3 sm-offset-1" },
                _react2.default.createElement(
                  "p",
                  { className: "inline-block align-middle small light m0", style: { lineHeight: '1rem', letterSpacing: '1px', fontFamily: "Helvetica Neue, sans-serif" } },
                  _react2.default.createElement(
                    _LanguageLink2.default,
                    { to: "/fdrs", className: "color-inverted caps" },
                    _react2.default.createElement(
                      "span",
                      { className: "color-primary" },
                      t("common:nameParts")[0]
                    ),
                    "\xA0",
                    t("common:nameParts")[1],
                    _react2.default.createElement("br", null),
                    t("common:nameParts")[2]
                  )
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  t("common:credit"),
                  " ",
                  _react2.default.createElement(
                    "strong",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "http://www.lapidus.se", target: "_blank" },
                      "Lapidus Interactive"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "col sm-3" },
                _react2.default.createElement(
                  "p",
                  { className: "subhead strong" },
                  t("common:navigation")[0].name
                ),
                _react2.default.createElement(
                  "ul",
                  { className: "m0 p0" },
                  _react2.default.createElement(
                    "li",
                    { className: "block" },
                    _react2.default.createElement(
                      _LanguageLink2.default,
                      { to: "/fdrs/overview" },
                      _react2.default.createElement(
                        "svg",
                        { style: { width: 16, height: 16, marginTop: -1 }, className: "stroke-current", width: "24px", height: "24px", viewBox: "0 0 24 24" },
                        _react2.default.createElement("polyline", { fill: "none", stroke: "inherit", strokeWidth: "2", strokeLinecap: "square", strokeMiterlimit: "10", points: "10,8 14,12 10,16", transform: "translate(0, 0)", strokeLinejoin: "miter" })
                      ),
                      _react2.default.createElement(
                        "span",
                        null,
                        t("common:navigation")[0].dropdownItems[0]
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    { className: "block" },
                    _react2.default.createElement(
                      _LanguageLink2.default,
                      { to: "/fdrs/societies" },
                      _react2.default.createElement(
                        "svg",
                        { style: { width: 16, height: 16, marginTop: -1 }, className: "stroke-current", width: "24px", height: "24px", viewBox: "0 0 24 24" },
                        _react2.default.createElement("polyline", { fill: "none", stroke: "inherit", strokeWidth: "2", strokeLinecap: "square", strokeMiterlimit: "10", points: "10,8 14,12 10,16", transform: "translate(0, 0)", strokeLinejoin: "miter" })
                      ),
                      _react2.default.createElement(
                        "span",
                        null,
                        t("common:navigation")[0].dropdownItems[1]
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    { className: "block" },
                    _react2.default.createElement(
                      _LanguageLink2.default,
                      { to: "/fdrs/report" },
                      _react2.default.createElement(
                        "svg",
                        { style: { width: 16, height: 16, marginTop: -1 }, className: "stroke-current", width: "24px", height: "24px", viewBox: "0 0 24 24" },
                        _react2.default.createElement("polyline", { fill: "none", stroke: "inherit", strokeWidth: "2", strokeLinecap: "square", strokeMiterlimit: "10", points: "10,8 14,12 10,16", transform: "translate(0, 0)", strokeLinejoin: "miter" })
                      ),
                      _react2.default.createElement(
                        "span",
                        null,
                        t("common:navigation")[0].dropdownItems[2]
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    { className: "block" },
                    _react2.default.createElement(
                      _LanguageLink2.default,
                      { to: "/fdrs/data-download" },
                      _react2.default.createElement(
                        "svg",
                        { style: { width: 16, height: 16, marginTop: -1 }, className: "stroke-current", width: "24px", height: "24px", viewBox: "0 0 24 24" },
                        _react2.default.createElement("polyline", { fill: "none", stroke: "inherit", strokeWidth: "2", strokeLinecap: "square", strokeMiterlimit: "10", points: "10,8 14,12 10,16", transform: "translate(0, 0)", strokeLinejoin: "miter" })
                      ),
                      _react2.default.createElement(
                        "span",
                        null,
                        t("common:navigation")[0].dropdownItems[3]
                      )
                    )
                  )
                ),
                _react2.default.createElement("br", null),
                _react2.default.createElement(
                  "ul",
                  { className: "m0 p0" },
                  _react2.default.createElement(
                    "li",
                    { className: "block" },
                    _react2.default.createElement(
                      _LanguageLink2.default,
                      { to: "/fdrs/faq" },
                      _react2.default.createElement(
                        "svg",
                        { style: { width: 16, height: 16, marginTop: -1 }, className: "stroke-current", width: "24px", height: "24px", viewBox: "0 0 24 24" },
                        _react2.default.createElement("polyline", { fill: "none", stroke: "inherit", strokeWidth: "2", strokeLinecap: "square", strokeMiterlimit: "10", points: "10,8 14,12 10,16", transform: "translate(0, 0)", strokeLinejoin: "miter" })
                      ),
                      _react2.default.createElement(
                        "span",
                        null,
                        t("common:navigation")[1].name
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    { className: "block" },
                    _react2.default.createElement(
                      _LanguageLink2.default,
                      { to: "/fdrs/about" },
                      _react2.default.createElement(
                        "svg",
                        { style: { width: 16, height: 16, marginTop: -1 }, className: "stroke-current", width: "24px", height: "24px", viewBox: "0 0 24 24" },
                        _react2.default.createElement("polyline", { fill: "none", stroke: "inherit", strokeWidth: "2", strokeLinecap: "square", strokeMiterlimit: "10", points: "10,8 14,12 10,16", transform: "translate(0, 0)", strokeLinejoin: "miter" })
                      ),
                      _react2.default.createElement(
                        "span",
                        null,
                        t("common:navigation")[2].name
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    { className: "block" },
                    _react2.default.createElement(
                      _LanguageLink2.default,
                      { to: "/fdrs/acknowledgements" },
                      _react2.default.createElement(
                        "svg",
                        { style: { width: 16, height: 16, marginTop: -1 }, className: "stroke-current", width: "24px", height: "24px", viewBox: "0 0 24 24" },
                        _react2.default.createElement("polyline", { fill: "none", stroke: "inherit", strokeWidth: "2", strokeLinecap: "square", strokeMiterlimit: "10", points: "10,8 14,12 10,16", transform: "translate(0, 0)", strokeLinejoin: "miter" })
                      ),
                      _react2.default.createElement(
                        "span",
                        null,
                        t("common:navigation")[3].name
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "col sm-3" },
                _react2.default.createElement(
                  "p",
                  { className: "subhead strong" },
                  t("common:contact.title")
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  t("common:contact.lead")
                ),
                _react2.default.createElement(
                  "a",
                  { href: "#" },
                  t("common:contact.email")
                )
              )
            ) : null,
            _react2.default.createElement(
              "div",
              { className: "clearfix bg-darker py2" },
              _react2.default.createElement(
                "div",
                { className: "col sm-3 sm-offset-1" },
                this.props.location.pathname !== "/" ? _react2.default.createElement(
                  _LanguageLink2.default,
                  { to: "/" },
                  "Back to Data.ifrc.org"
                ) : ""
              ),
              _react2.default.createElement("div", { className: "col sm-3" }),
              _react2.default.createElement(
                "div",
                { className: "col sm-3" },
                _react2.default.createElement(
                  "p",
                  null,
                  "\xA9\xA0",
                  t("common:copyright")
                )
              )
            )
          )
        ),
        _react2.default.createElement(_reduxTooltip.Tooltip, null)
      );
    }
  }]);

  return App;
}(_react2.default.Component);

App.propTypes = {
  t: _react.PropTypes.func.isRequired,
  children: _react.PropTypes.element,
  location: _react.PropTypes.object,
  navOpen: _react.PropTypes.bool,
  toggleNav: _react.PropTypes.func
};

App.childContextTypes = {
  location: _react.PropTypes.object
};

App.contextTypes = {
  router: _react.PropTypes.object.isRequired,
  i18n: _react2.default.PropTypes.object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    navOpen: state.appReducer.navOpen
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    toggleNav: function toggleNav() {
      return dispatch((0, _appActions.toggleNav)());
    }
  };
};

// export default App
exports.default = (0, _reactI18next.translate)()((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = storyReducer;

var _assign = __webpack_require__(6);

var _assign2 = _interopRequireDefault(_assign);

var _appActions = __webpack_require__(69);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function storyReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    showLoader: false,
    loadProgress: 0,
    navOpen: false,
    nationalSocieties: [],
    fetchingNationalSocieties: false,
    timeSeries: [],
    fetchingTimeSeries: false,
    timeSeriesMeta: [],
    fetchingTimeSeriesMeta: false,
    documents: [],
    fetchingDocuments: false,
    tooltipVisible: false,
    tooltipContent: {},
    tooltipPosition: {
      top: 0,
      left: 0
    },
    fetchingCountries: false,
    countryPaths: null,
    currentIndicator: "KPI_noPeopleVolunteering",
    selectedSocieties: [],
    currentYear: 2015
  };
  var action = arguments[1];

  switch (action.type) {
    case _appActions.START_LOAD:
      return (0, _assign2.default)({}, state, {
        showLoader: true
      });
    case _appActions.PROGRESS_LOAD:
      return (0, _assign2.default)({}, state, {
        loadProgress: action.progress
      });
    case _appActions.END_LOAD:
      return (0, _assign2.default)({}, state, {
        showLoader: false
      });
    case _appActions.TOGGLE_NAV:
      document.body.style.overflow = !state.navOpen ? "hidden" : "auto";
      return (0, _assign2.default)({}, state, {
        navOpen: !state.navOpen
      });
    case _appActions.CLOSE_NAV:
      document.body.style.overflow = "auto";
      return (0, _assign2.default)({}, state, {
        navOpen: false
      });
    case _appActions.REQUEST_NATIONAL_SOCIETIES:
      return (0, _assign2.default)({}, state, {
        fetchingNationalSocieties: true
      });
    case _appActions.RECEIVE_NATIONAL_SOCIETIES:
      return (0, _assign2.default)({}, state, {
        nationalSocieties: action.nationalSocieties,
        fetchingNationalSocieties: false
      });
    case _appActions.REQUEST_TIME_SERIES:
      return (0, _assign2.default)({}, state, {
        fetchingTimeSeries: true
      });
    case _appActions.RECEIVE_TIME_SERIES:
      return (0, _assign2.default)({}, state, {
        timeSeries: action.timeSeries,
        fetchingTimeSeries: false
      });
    case _appActions.REQUEST_TIME_SERIES_META:
      return (0, _assign2.default)({}, state, {
        fetchingTimeSeriesMeta: true
      });
    case _appActions.RECEIVE_TIME_SERIES_META:
      return (0, _assign2.default)({}, state, {
        timeSeriesMeta: action.timeSeriesMeta,
        fetchingTimeSeriesMeta: false
      });
    case _appActions.REQUEST_DOCUMENTS:
      return (0, _assign2.default)({}, state, {
        fetchingDocuments: true
      });
    case _appActions.RECEIVE_DOCUMENTS:
      return (0, _assign2.default)({}, state, {
        documents: action.documents,
        fetchingDocuments: false
      });
    case _appActions.REQUEST_COUNTRIES:
      return (0, _assign2.default)({}, state, {
        fetchingCountries: true
      });
    case _appActions.RECEIVE_COUNTRIES:
      return (0, _assign2.default)({}, state, {
        countryPaths: action.countryPaths,
        fetchingCountries: false
      });
    case _appActions.SHOW_TOOLTIP:
      return (0, _assign2.default)({}, state, {
        tooltipVisible: true,
        tooltipContent: action.content,
        tooltipPosition: action.position
      });
    case _appActions.HIDE_TOOLTIP:
      return (0, _assign2.default)({}, state, {
        tooltipVisible: false
      });
    case _appActions.SET_INDICATOR:
      return (0, _assign2.default)({}, state, {
        currentIndicator: action.indicator
      });
    case _appActions.SELECT_SOCIETY:
      return (0, _assign2.default)({}, state, {
        selectedSocieties: state.selectedSocieties.concat([action.societyID])
      });
    case _appActions.UNSELECT_SOCIETY:
      var societyIndex = state.selectedSocieties.indexOf(action.societyID);
      var newSocieties = state.selectedSocieties.slice(0, societyIndex).concat(state.selectedSocieties.slice(societyIndex + 1));
      return (0, _assign2.default)({}, state, {
        selectedSocieties: newSocieties
      });
    case _appActions.CLEAR_SOCIETIES:
      return (0, _assign2.default)({}, state, {
        selectedSocieties: []
      });
    case _appActions.SWITCH_YEAR:
      return (0, _assign2.default)({}, state, {
        currentYear: action.year
      });
    default:
      return state;
  }
}

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _storyReducer = __webpack_require__(564);

var _storyReducer2 = _interopRequireDefault(_storyReducer);

var _appReducer = __webpack_require__(562);

var _appReducer2 = _interopRequireDefault(_appReducer);

var _reduxTooltip = __webpack_require__(130);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  appReducer: _appReducer2.default,
  storyReducer: _storyReducer2.default,
  tooltip: _reduxTooltip.reducer
};

/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = storyReducer;

var _assign = __webpack_require__(6);

var _assign2 = _interopRequireDefault(_assign);

var _storyActions = __webpack_require__(538);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function storyReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    currentDataset: 0,
    isFetching: false,
    datasets: []
  };
  var action = arguments[1];

  switch (action.type) {
    case _storyActions.CHANGE_DATASET:
      return (0, _assign2.default)({}, state, {
        currentDataset: action.newDataset
      });
    case _storyActions.REQUEST_DATASETS:
      return (0, _assign2.default)({}, state, {
        isFetching: true
      });
    case _storyActions.RECEIVE_DATASETS:
      return (0, _assign2.default)({}, state, {
        isFetching: false,
        datasets: action.datasets
      });
    case _storyActions.INVALIDATE_REQUEST:
      return (0, _assign2.default)({}, state, {
        isFetching: false
      });
    default:
      return state;
  }
}

/***/ }),

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  d3.geo.project = function (object, projection) {
    var stream = projection.stream;
    if (!stream) throw new Error("not yet supported");
    return (object && d3_geo_projectObjectType.hasOwnProperty(object.type) ? d3_geo_projectObjectType[object.type] : d3_geo_projectGeometry)(object, stream);
  };
  function d3_geo_projectFeature(object, stream) {
    return {
      type: "Feature",
      id: object.id,
      properties: object.properties,
      geometry: d3_geo_projectGeometry(object.geometry, stream)
    };
  }
  function d3_geo_projectGeometry(geometry, stream) {
    if (!geometry) return null;
    if (geometry.type === "GeometryCollection") return {
      type: "GeometryCollection",
      geometries: object.geometries.map(function (geometry) {
        return d3_geo_projectGeometry(geometry, stream);
      })
    };
    if (!d3_geo_projectGeometryType.hasOwnProperty(geometry.type)) return null;
    var sink = d3_geo_projectGeometryType[geometry.type];
    d3.geo.stream(geometry, stream(sink));
    return sink.result();
  }
  var d3_geo_projectObjectType = {
    Feature: d3_geo_projectFeature,
    FeatureCollection: function FeatureCollection(object, stream) {
      return {
        type: "FeatureCollection",
        features: object.features.map(function (feature) {
          return d3_geo_projectFeature(feature, stream);
        })
      };
    }
  };
  var d3_geo_projectPoints = [],
      d3_geo_projectLines = [];
  var d3_geo_projectPoint = {
    point: function point(x, y) {
      d3_geo_projectPoints.push([x, y]);
    },
    result: function result() {
      var result = !d3_geo_projectPoints.length ? null : d3_geo_projectPoints.length < 2 ? {
        type: "Point",
        coordinates: d3_geo_projectPoints[0]
      } : {
        type: "MultiPoint",
        coordinates: d3_geo_projectPoints
      };
      d3_geo_projectPoints = [];
      return result;
    }
  };
  var d3_geo_projectLine = {
    lineStart: d3_geo_projectNoop,
    point: function point(x, y) {
      d3_geo_projectPoints.push([x, y]);
    },
    lineEnd: function lineEnd() {
      if (d3_geo_projectPoints.length) d3_geo_projectLines.push(d3_geo_projectPoints), d3_geo_projectPoints = [];
    },
    result: function result() {
      var result = !d3_geo_projectLines.length ? null : d3_geo_projectLines.length < 2 ? {
        type: "LineString",
        coordinates: d3_geo_projectLines[0]
      } : {
        type: "MultiLineString",
        coordinates: d3_geo_projectLines
      };
      d3_geo_projectLines = [];
      return result;
    }
  };
  var d3_geo_projectPolygon = {
    polygonStart: d3_geo_projectNoop,
    lineStart: d3_geo_projectNoop,
    point: function point(x, y) {
      d3_geo_projectPoints.push([x, y]);
    },
    lineEnd: function lineEnd() {
      var n = d3_geo_projectPoints.length;
      if (n) {
        do {
          d3_geo_projectPoints.push(d3_geo_projectPoints[0].slice());
        } while (++n < 4);
        d3_geo_projectLines.push(d3_geo_projectPoints), d3_geo_projectPoints = [];
      }
    },
    polygonEnd: d3_geo_projectNoop,
    result: function result() {
      if (!d3_geo_projectLines.length) return null;
      var polygons = [],
          holes = [];
      d3_geo_projectLines.forEach(function (ring) {
        if (d3_geo_projectClockwise(ring)) polygons.push([ring]);else holes.push(ring);
      });
      holes.forEach(function (hole) {
        var point = hole[0];
        polygons.some(function (polygon) {
          if (d3_geo_projectContains(polygon[0], point)) {
            polygon.push(hole);
            return true;
          }
        }) || polygons.push([hole]);
      });
      d3_geo_projectLines = [];
      return !polygons.length ? null : polygons.length > 1 ? {
        type: "MultiPolygon",
        coordinates: polygons
      } : {
        type: "Polygon",
        coordinates: polygons[0]
      };
    }
  };
  var d3_geo_projectGeometryType = {
    Point: d3_geo_projectPoint,
    MultiPoint: d3_geo_projectPoint,
    LineString: d3_geo_projectLine,
    MultiLineString: d3_geo_projectLine,
    Polygon: d3_geo_projectPolygon,
    MultiPolygon: d3_geo_projectPolygon,
    Sphere: d3_geo_projectPolygon
  };
  function d3_geo_projectNoop() {}
  function d3_geo_projectClockwise(ring) {
    if ((n = ring.length) < 4) return false;
    var i = 0,
        n,
        area = ring[n - 1][1] * ring[0][0] - ring[n - 1][0] * ring[0][1];
    while (++i < n) {
      area += ring[i - 1][1] * ring[i][0] - ring[i - 1][0] * ring[i][1];
    }return area <= 0;
  }
  function d3_geo_projectContains(ring, point) {
    var x = point[0],
        y = point[1],
        contains = false;
    for (var i = 0, n = ring.length, j = n - 1; i < n; j = i++) {
      var pi = ring[i],
          xi = pi[0],
          yi = pi[1],
          pj = ring[j],
          xj = pj[0],
          yj = pj[1];
      if (yi > y ^ yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi) contains = !contains;
    }
    return contains;
  }
  var ε = 1e-6,
      ε2 = ε * ε,
      π = Math.PI,
      halfπ = π / 2,
      sqrtπ = Math.sqrt(π),
      radians = π / 180,
      degrees = 180 / π;
  function sinci(x) {
    return x ? x / Math.sin(x) : 1;
  }
  function sgn(x) {
    return x > 0 ? 1 : x < 0 ? -1 : 0;
  }
  function asin(x) {
    return x > 1 ? halfπ : x < -1 ? -halfπ : Math.asin(x);
  }
  function acos(x) {
    return x > 1 ? 0 : x < -1 ? π : Math.acos(x);
  }
  function asqrt(x) {
    return x > 0 ? Math.sqrt(x) : 0;
  }
  var projection = d3.geo.projection,
      projectionMutator = d3.geo.projectionMutator;
  d3.geo.interrupt = function (project) {
    var lobes = [[[[-π, 0], [0, halfπ], [π, 0]]], [[[-π, 0], [0, -halfπ], [π, 0]]]];
    var bounds;
    function forward(λ, φ) {
      var sign = φ < 0 ? -1 : +1,
          hemilobes = lobes[+(φ < 0)];
      for (var i = 0, n = hemilobes.length - 1; i < n && λ > hemilobes[i][2][0]; ++i) {}
      var coordinates = project(λ - hemilobes[i][1][0], φ);
      coordinates[0] += project(hemilobes[i][1][0], sign * φ > sign * hemilobes[i][0][1] ? hemilobes[i][0][1] : φ)[0];
      return coordinates;
    }
    function reset() {
      bounds = lobes.map(function (hemilobes) {
        return hemilobes.map(function (lobe) {
          var x0 = project(lobe[0][0], lobe[0][1])[0],
              x1 = project(lobe[2][0], lobe[2][1])[0],
              y0 = project(lobe[1][0], lobe[0][1])[1],
              y1 = project(lobe[1][0], lobe[1][1])[1],
              t;
          if (y0 > y1) t = y0, y0 = y1, y1 = t;
          return [[x0, y0], [x1, y1]];
        });
      });
    }
    if (project.invert) forward.invert = function (x, y) {
      var hemibounds = bounds[+(y < 0)],
          hemilobes = lobes[+(y < 0)];
      for (var i = 0, n = hemibounds.length; i < n; ++i) {
        var b = hemibounds[i];
        if (b[0][0] <= x && x < b[1][0] && b[0][1] <= y && y < b[1][1]) {
          var coordinates = project.invert(x - project(hemilobes[i][1][0], 0)[0], y);
          coordinates[0] += hemilobes[i][1][0];
          return pointEqual(forward(coordinates[0], coordinates[1]), [x, y]) ? coordinates : null;
        }
      }
    };
    var projection = d3.geo.projection(forward),
        stream_ = projection.stream;
    projection.stream = function (stream) {
      var rotate = projection.rotate(),
          rotateStream = stream_(stream),
          sphereStream = (projection.rotate([0, 0]), stream_(stream));
      projection.rotate(rotate);
      rotateStream.sphere = function () {
        d3.geo.stream(sphere(), sphereStream);
      };
      return rotateStream;
    };
    projection.lobes = function (_) {
      if (!arguments.length) return lobes.map(function (lobes) {
        return lobes.map(function (lobe) {
          return [[lobe[0][0] * 180 / π, lobe[0][1] * 180 / π], [lobe[1][0] * 180 / π, lobe[1][1] * 180 / π], [lobe[2][0] * 180 / π, lobe[2][1] * 180 / π]];
        });
      });
      lobes = _.map(function (lobes) {
        return lobes.map(function (lobe) {
          return [[lobe[0][0] * π / 180, lobe[0][1] * π / 180], [lobe[1][0] * π / 180, lobe[1][1] * π / 180], [lobe[2][0] * π / 180, lobe[2][1] * π / 180]];
        });
      });
      reset();
      return projection;
    };
    function sphere() {
      var ε = 1e-6,
          coordinates = [];
      for (var i = 0, n = lobes[0].length; i < n; ++i) {
        var lobe = lobes[0][i],
            λ0 = lobe[0][0] * 180 / π,
            φ0 = lobe[0][1] * 180 / π,
            φ1 = lobe[1][1] * 180 / π,
            λ2 = lobe[2][0] * 180 / π,
            φ2 = lobe[2][1] * 180 / π;
        coordinates.push(resample([[λ0 + ε, φ0 + ε], [λ0 + ε, φ1 - ε], [λ2 - ε, φ1 - ε], [λ2 - ε, φ2 + ε]], 30));
      }
      for (var i = lobes[1].length - 1; i >= 0; --i) {
        var lobe = lobes[1][i],
            λ0 = lobe[0][0] * 180 / π,
            φ0 = lobe[0][1] * 180 / π,
            φ1 = lobe[1][1] * 180 / π,
            λ2 = lobe[2][0] * 180 / π,
            φ2 = lobe[2][1] * 180 / π;
        coordinates.push(resample([[λ2 - ε, φ2 - ε], [λ2 - ε, φ1 + ε], [λ0 + ε, φ1 + ε], [λ0 + ε, φ0 - ε]], 30));
      }
      return {
        type: "Polygon",
        coordinates: [d3.merge(coordinates)]
      };
    }
    function resample(coordinates, m) {
      var i = -1,
          n = coordinates.length,
          p0 = coordinates[0],
          p1,
          dx,
          dy,
          resampled = [];
      while (++i < n) {
        p1 = coordinates[i];
        dx = (p1[0] - p0[0]) / m;
        dy = (p1[1] - p0[1]) / m;
        for (var j = 0; j < m; ++j) {
          resampled.push([p0[0] + j * dx, p0[1] + j * dy]);
        }p0 = p1;
      }
      resampled.push(p1);
      return resampled;
    }
    function pointEqual(a, b) {
      return Math.abs(a[0] - b[0]) < ε && Math.abs(a[1] - b[1]) < ε;
    }
    return projection;
  };
  function times(λ, φ) {
    var t = Math.tan(φ / 2),
        s = Math.sin(π / 4 * t);
    return [λ * (.74482 - .34588 * s * s), 1.70711 * t];
  }
  times.invert = function (x, y) {
    var t = y / 1.70711,
        s = Math.sin(π / 4 * t);
    return [x / (.74482 - .34588 * s * s), 2 * Math.atan(t)];
  };
  (d3.geo.times = function () {
    return projection(times);
  }).raw = times;
})();

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switchYear = exports.clearSocieties = exports.unselectSociety = exports.selectSociety = exports.setIndicator = exports.receiveCountries = exports.requestCountries = exports.receiveTimeSeriesMeta = exports.requestTimeSeriesMeta = exports.receiveDocuments = exports.requestDocuments = exports.receiveTimeSeries = exports.requestTimeSeries = exports.receiveNationalSocieties = exports.requestNationalSocieties = exports.hideTooltip = exports.showTooltip = exports.closeNav = exports.toggleNav = exports.SWITCH_YEAR = exports.CLEAR_SOCIETIES = exports.UNSELECT_SOCIETY = exports.SELECT_SOCIETY = exports.SET_INDICATOR = exports.HIDE_TOOLTIP = exports.SHOW_TOOLTIP = exports.RECEIVE_COUNTRIES = exports.REQUEST_COUNTRIES = exports.RECEIVE_DOCUMENTS = exports.REQUEST_DOCUMENTS = exports.RECEIVE_TIME_SERIES_META = exports.REQUEST_TIME_SERIES_META = exports.RECEIVE_TIME_SERIES = exports.REQUEST_TIME_SERIES = exports.RECEIVE_NATIONAL_SOCIETIES = exports.REQUEST_NATIONAL_SOCIETIES = exports.CLOSE_NAV = exports.TOGGLE_NAV = exports.END_LOAD = exports.PROGRESS_LOAD = exports.START_LOAD = undefined;
exports.startMainLoad = startMainLoad;
exports.endMainLoad = endMainLoad;
exports.fetchNationalSocieties = fetchNationalSocieties;
exports.fetchTimeSeries = fetchTimeSeries;
exports.fetchDocuments = fetchDocuments;
exports.fetchTimeSeriesMeta = fetchTimeSeriesMeta;
exports.fetchCountries = fetchCountries;

var _d = __webpack_require__(177);

var _kebabCase = __webpack_require__(1072);

var _kebabCase2 = _interopRequireDefault(_kebabCase);

var _map = __webpack_require__(531);

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var START_LOAD = exports.START_LOAD = "START_LOAD";
var PROGRESS_LOAD = exports.PROGRESS_LOAD = "PROGRESS_LOAD";
var END_LOAD = exports.END_LOAD = "END_LOAD";

var TOGGLE_NAV = exports.TOGGLE_NAV = "TOGGLE_NAV";
var CLOSE_NAV = exports.CLOSE_NAV = "CLOSE_NAV";

var REQUEST_NATIONAL_SOCIETIES = exports.REQUEST_NATIONAL_SOCIETIES = "REQUEST_NATIONAL_SOCIETIES";
var RECEIVE_NATIONAL_SOCIETIES = exports.RECEIVE_NATIONAL_SOCIETIES = "RECEIVE_NATIONAL_SOCIETIES";

var REQUEST_TIME_SERIES = exports.REQUEST_TIME_SERIES = "REQUEST_TIME_SERIES";
var RECEIVE_TIME_SERIES = exports.RECEIVE_TIME_SERIES = "RECEIVE_TIME_SERIES";

var REQUEST_TIME_SERIES_META = exports.REQUEST_TIME_SERIES_META = "REQUEST_TIME_SERIES_META";
var RECEIVE_TIME_SERIES_META = exports.RECEIVE_TIME_SERIES_META = "RECEIVE_TIME_SERIES_META";

var REQUEST_DOCUMENTS = exports.REQUEST_DOCUMENTS = "REQUEST_DOCUMENTS";
var RECEIVE_DOCUMENTS = exports.RECEIVE_DOCUMENTS = "RECEIVE_DOCUMENTS";

var REQUEST_COUNTRIES = exports.REQUEST_COUNTRIES = "REQUEST_COUNTRIES";
var RECEIVE_COUNTRIES = exports.RECEIVE_COUNTRIES = "RECEIVE_COUNTRIES";

var SHOW_TOOLTIP = exports.SHOW_TOOLTIP = "SHOW_TOOLTIP";
var HIDE_TOOLTIP = exports.HIDE_TOOLTIP = "HIDE_TOOLTIP";

var SET_INDICATOR = exports.SET_INDICATOR = "SET_INDICATOR";

var SELECT_SOCIETY = exports.SELECT_SOCIETY = "SELECT_SOCIETY";
var UNSELECT_SOCIETY = exports.UNSELECT_SOCIETY = "UNSELECT_SOCIETY";
var CLEAR_SOCIETIES = exports.CLEAR_SOCIETIES = "CLEAR_SOCIETIES";

var SWITCH_YEAR = exports.SWITCH_YEAR = "SWITCH_YEAR";

var counter = void 0;

var startLoad = function startLoad() {
  return { type: START_LOAD };
};
var endLoad = function endLoad() {
  return { type: END_LOAD };
};

var progressLoad = function progressLoad(progress) {
  return {
    type: PROGRESS_LOAD,
    progress: progress
  };
};

function startMainLoad() {
  return function (dispatch, getState) {
    dispatch(startLoad());
    dispatch(progressLoad(0));

    counter = setInterval(function () {
      var store = getState();
      var lastProgress = store.appReducer.loadProgress;
      dispatch(progressLoad(lastProgress + (75 - lastProgress) / 4));
    }, 300);
  };
}

function endMainLoad() {
  console.log("Ending main load");
  return function (dispatch) {
    clearInterval(counter);
    counter = undefined;
    dispatch(progressLoad(100));
    setTimeout(function () {
      dispatch(endLoad());
      dispatch(progressLoad(0));
    }, 500);
  };
}

var toggleNav = exports.toggleNav = function toggleNav() {
  return { type: TOGGLE_NAV };
};
var closeNav = exports.closeNav = function closeNav() {
  return { type: CLOSE_NAV };
};

var showTooltip = exports.showTooltip = function showTooltip(content, evt) {
  console.log("Event is here: ", evt);
  var targetDimensions = evt.target.getBoundingClientRect();
  return {
    type: SHOW_TOOLTIP,
    content: content,
    position: {
      top: targetDimensions.top,
      left: targetDimensions.left + targetDimensions.width
    }
  };
};
var hideTooltip = exports.hideTooltip = function hideTooltip() {
  return { type: HIDE_TOOLTIP };
};

var parseNationalSocieties = (0, _map2.default)(function (s) {
  s.slug = (0, _kebabCase2.default)(s.NSO_DON_name);
  return s;
});

var requestNationalSocieties = exports.requestNationalSocieties = function requestNationalSocieties() {
  return {
    type: REQUEST_NATIONAL_SOCIETIES
  };
};

var receiveNationalSocieties = exports.receiveNationalSocieties = function receiveNationalSocieties(nationalSocieties) {
  return {
    type: RECEIVE_NATIONAL_SOCIETIES,
    nationalSocieties: nationalSocieties
  };
};

function fetchNationalSocieties() {
  console.log("FETCHING NATIONAL SOCIEITES");
  return function (dispatch, getState) {
    var store = getState().appReducer;

    if (store.nationalSocieties.length) return dispatch(receiveNationalSocieties(store.nationalSocieties));

    dispatch(requestNationalSocieties());
    return new Promise(function (resolve, reject) {
      (0, _d.csv)("/api/meta/national_societies.csv", function (err, res) {
        if (err) {
          console.log("Failed at fetching national societies");
          reject(err);
        } else {
          console.log("Received National Societies");
          dispatch(receiveNationalSocieties(parseNationalSocieties(res)));
          resolve();
        }
      });
    });
  };
}

var requestTimeSeries = exports.requestTimeSeries = function requestTimeSeries() {
  return {
    type: REQUEST_TIME_SERIES
  };
};

var receiveTimeSeries = exports.receiveTimeSeries = function receiveTimeSeries(timeSeries) {
  return {
    type: RECEIVE_TIME_SERIES,
    timeSeries: timeSeries
  };
};

function fetchTimeSeries() {
  console.log("FETCHING TIME SERIES");
  return function (dispatch, getState) {
    var store = getState().appReducer;

    if (store.timeSeries.length) return dispatch(receiveTimeSeries(store.timeSeries));

    dispatch(requestTimeSeries());
    return new Promise(function (resolve, reject) {
      (0, _d.csv)("/api/indicators/time_series.csv", function (err, res) {
        if (err) {
          console.log("Failed at fetching documents");
          reject(err);
        } else {
          console.log("RECEIVED TIME SERIES", res);
          dispatch(receiveTimeSeries(res));
          resolve();
        }
      });
    });
  };
}

var requestDocuments = exports.requestDocuments = function requestDocuments() {
  return {
    type: REQUEST_DOCUMENTS
  };
};

var receiveDocuments = exports.receiveDocuments = function receiveDocuments(documents) {
  return {
    type: RECEIVE_DOCUMENTS,
    documents: documents
  };
};

function fetchDocuments() {
  console.log("FETCHING DOCUMENTS");
  return function (dispatch, getState) {
    var store = getState().appReducer;

    if (store.documents.length) return dispatch(receiveDocuments(store.documents));

    dispatch(requestDocuments());
    return new Promise(function (resolve, reject) {
      (0, _d.json)("/api/documents/documents.json", function (err, res) {
        if (err) {
          console.log("Failed at fetching documents");
          reject(err);
        } else {
          console.log("RECEIVED DOCUMENTS");
          dispatch(receiveDocuments(res));
          resolve();
        }
      });
    });
  };
}

var requestTimeSeriesMeta = exports.requestTimeSeriesMeta = function requestTimeSeriesMeta() {
  return {
    type: REQUEST_TIME_SERIES_META
  };
};

var receiveTimeSeriesMeta = exports.receiveTimeSeriesMeta = function receiveTimeSeriesMeta(timeSeriesMeta) {
  return {
    type: RECEIVE_TIME_SERIES_META,
    timeSeriesMeta: timeSeriesMeta
  };
};

function fetchTimeSeriesMeta() {
  console.log("FETCHING TIME_SERIES_META");
  return function (dispatch, getState) {
    var timeSeriesMeta = getState().appReducer.timeSeriesMeta;


    if (timeSeriesMeta.length) return dispatch(receiveTimeSeriesMeta(timeSeriesMeta));

    dispatch(requestTimeSeriesMeta());
    return new Promise(function (resolve, reject) {
      (0, _d.csv)("/api/meta/time_series_meta.csv", function (err, res) {
        if (err) {
          console.log("Failed at fetching timeSeriesMeta");
          reject(err);
        } else {
          console.log("RECEIVED TIME_SERIES_META");
          dispatch(receiveTimeSeriesMeta(res));
          resolve();
        }
      });
    });
  };
}

var requestCountries = exports.requestCountries = function requestCountries() {
  return {
    type: REQUEST_COUNTRIES
  };
};

var receiveCountries = exports.receiveCountries = function receiveCountries(countryPaths) {
  return {
    type: RECEIVE_COUNTRIES,
    countryPaths: countryPaths
  };
};

function fetchCountries() {
  console.log("FETCHING COUNTRY PATHS");
  return function (dispatch, getState) {
    var countryPaths = getState().appReducer.countryPaths;


    if (countryPaths) return dispatch(receiveCountries(countryPaths));

    dispatch(requestCountries());
    return new Promise(function (resolve, reject) {
      (0, _d.json)("/api/report/world-topo.json", function (err, countryPaths) {
        if (err) {
          console.log("Failed at fetching country paths");
          reject(err);
        } else {
          console.log("RECEIVED COUNTRY PATHS");
          dispatch(receiveCountries(countryPaths));
          resolve();
        }
      });
    });
  };
}

var setIndicator = exports.setIndicator = function setIndicator(indicator) {
  return {
    type: SET_INDICATOR,
    indicator: indicator
  };
};

var selectSociety = exports.selectSociety = function selectSociety(societyID) {
  return {
    type: SELECT_SOCIETY,
    societyID: societyID
  };
};

var unselectSociety = exports.unselectSociety = function unselectSociety(societyID) {
  return {
    type: UNSELECT_SOCIETY,
    societyID: societyID
  };
};

var clearSocieties = exports.clearSocieties = function clearSocieties() {
  return {
    type: CLEAR_SOCIETIES
  };
};

var switchYear = exports.switchYear = function switchYear(year) {
  return {
    type: SWITCH_YEAR,
    year: year
  };
};

/***/ }),

/***/ 947:
/***/ (function(module, exports) {

/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

module.exports = asciiWords;


/***/ }),

/***/ 970:
/***/ (function(module, exports) {

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

module.exports = basePropertyOf;


/***/ }),

/***/ 996:
/***/ (function(module, exports, __webpack_require__) {

var arrayReduce = __webpack_require__(248),
    deburr = __webpack_require__(1061),
    words = __webpack_require__(1084);

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]";

/** Used to match apostrophes. */
var reApos = RegExp(rsApos, 'g');

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
  };
}

module.exports = createCompounder;


/***/ })

},[1299]);