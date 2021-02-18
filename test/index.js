const {escape, unescape} = require('../cjs');

console.assert(escape(null) === null, 'escape ignores null input');
console.assert(escape(void 0) === void 0, 'escape ignores undefined input');
console.assert(escape('<') === '&lt;', 'escape does *not* ignore strings');
console.assert(escape(Symbol('!')) === 'Symbol(!)', 'escape does *not* throw on symbols');

console.assert(unescape(null) === null, 'unescape ignores null input');
console.assert(unescape(void 0) === void 0, 'unescape ignores undefined input');
console.assert(unescape('&lt;') === '<', 'unescape does *not* ignore strings');
console.assert(unescape(Symbol('!')) === 'Symbol(!)', 'unescape does *not* throw on symbols');
