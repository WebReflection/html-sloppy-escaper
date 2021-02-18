'use strict';
const {escape: safeEs, unescape: safeUn} = require('html-escaper');

const $ = String;

/**
 * Safely escape any input, unless it's either null or undefined.
 * @param {any} input the generic input to escape
 * @returns {string|null|undefined} the escaped input, or null/undefined
 */
const escape = input => input == null ? input : safeEs($(input));
exports.escape = escape;

/**
 * Safely unescape any input, unless it's either null or undefined.
 * @param {any} input the generic input to unescape
 * @returns {string|null|undefined} the unescaped input, or null/undefined
 */
const unescape = input => input == null ? input : safeUn($(input));
exports.unescape = unescape;
