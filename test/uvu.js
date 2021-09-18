import { suite } from '@nurdiansyah/uvu';
import * as assert from '@nurdiansyah/uvu/assert';
import * as uvu from '../src/index';

const ste = suite('suite');

ste('should be a function', () => {
	assert.type(uvu.suite, 'function');
});

ste.run();

// ---

const test = suite('test');

test('should be a function', () => {
	assert.type(uvu.test, 'function');
});

test.run();

// ---

const exec = suite('exec');

exec('should be a function', () => {
	assert.type(uvu.exec, 'function');
});

exec.run();
