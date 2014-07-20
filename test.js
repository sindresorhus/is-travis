'use strict';
var test = require('ava');
var requireUncached = require('require-uncached');

test('not travis', function (t) {
	t.assert(!requireUncached('./'));
});

test('travis', function (t) {
	process.env.TRAVIS = 1;
	process.env.CI = 1;
	t.assert(requireUncached('./'));
});
