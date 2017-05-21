import test from 'ava';
import importFresh from 'import-fresh';

test('not travis', t => {
	delete process.env.TRAVIS;
	delete process.env.CI;
	t.false(importFresh('.'));
});

test('travis', t => {
	process.env.TRAVIS = 1;
	process.env.CI = 1;
	t.true(importFresh('.'));
});
