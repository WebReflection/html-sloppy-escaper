import {escape as safeEs, unescape as safeUn} from 'html-escaper';

const $ = String;

/**
 * Safely escape any input, unless it's either null or undefined.
 * @param {any} input the generic input to escape
 * @returns {string|null|undefined} the escaped input, or null/undefined
 */
export const escape = input => input == null ? input : safeEs($(input));

/**
 * Safely unescape any input, unless it's either null or undefined.
 * @param {any} input the generic input to unescape
 * @returns {string|null|undefined} the unescaped input, or null/undefined
 */
export const unescape = input => input == null ? input : safeUn($(input));
