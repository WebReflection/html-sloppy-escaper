self.htmlSloppyEscaper = (function (exports) {
  'use strict';

  /**
   * Copyright (C) 2017-present by Andrea Giammarchi - @WebReflection
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var _ref = '',
      replace = _ref.replace; // escape

  var es = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g;
  var ca = /[&<>'"]/g;
  var esca = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  };

  var pe = function pe(m) {
    return esca[m];
  };
  /**
   * Safely escape HTML entities such as `&`, `<`, `>`, `"`, and `'`.
   * @param {string} es the input to safely escape
   * @returns {string} the escaped input, and it **throws** an error if
   *  the input type is unexpected, except for boolean and numbers,
   *  converted as string.
   */


  var escape = function escape(es) {
    return replace.call(es, ca, pe);
  }; // unescape

  var unes = {
    '&amp;': '&',
    '&#38;': '&',
    '&lt;': '<',
    '&#60;': '<',
    '&gt;': '>',
    '&#62;': '>',
    '&apos;': "'",
    '&#39;': "'",
    '&quot;': '"',
    '&#34;': '"'
  };

  var cape = function cape(m) {
    return unes[m];
  };
  /**
   * Safely unescape previously escaped entities such as `&`, `<`, `>`, `"`,
   * and `'`.
   * @param {string} un a previously escaped string
   * @returns {string} the unescaped input, and it **throws** an error if
   *  the input type is unexpected, except for boolean and numbers,
   *  converted as string.
   */


  var unescape = function unescape(un) {
    return replace.call(un, es, cape);
  };

  var $ = String;
  /**
   * Safely escape any input, unless it's either null or undefined.
   * @param {any} input the generic input to escape
   * @returns {string|null|undefined} the escaped input, or null/undefined
   */

  var escape$1 = function escape$1(input) {
    return input == null ? input : escape($(input));
  };
  /**
   * Safely unescape any input, unless it's either null or undefined.
   * @param {any} input the generic input to unescape
   * @returns {string|null|undefined} the unescaped input, or null/undefined
   */

  var unescape$1 = function unescape$1(input) {
    return input == null ? input : unescape($(input));
  };

  exports.escape = escape$1;
  exports.unescape = unescape$1;

  return exports;

}({}).default);
