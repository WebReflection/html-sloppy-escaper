# html-sloppy-escaper

[![Build Status](https://travis-ci.com/WebReflection/html-sloppy-escaper.svg?branch=main)](https://travis-ci.com/WebReflection/html-sloppy-escaper) [![Coverage Status](https://coveralls.io/repos/github/WebReflection/html-sloppy-escaper/badge.svg?branch=main)](https://coveralls.io/github/WebReflection/html-sloppy-escaper?branch=main)

This is exactly the same [html-escaper](https://www.npmjs.com/package/html-escaper) module, except it doesn't throw with `null` or `undefined`, and returns either `null` or `undefined` instead, when passed along.

*Symbols* are also transformed as string, so basically this module should *never* throw.

This is [the result of this discussion](https://github.com/WebReflection/html-escaper/issues/3) regarding *html-escaper* strictness.

If you don't care about the data you pass along, this module is likely more suitable.
