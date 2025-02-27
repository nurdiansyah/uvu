const { test } = require('@nurdiansyah/uvu');
const assert = require('@nurdiansyah/uvu/assert');
const math = require('../../math');

test('sum', () => {
	assert.type(math.sum, 'function');
	assert.is(math.sum(1, 2), 3);
	assert.is(math.sum(-1, -2), -3);
	assert.is(math.sum(-1, 1), 0);
});

test('div', () => {
	assert.type(math.div, 'function');
	assert.is(math.div(1, 2), 0.5);
	assert.is(math.div(-1, -2), 0.5);
	assert.is(math.div(-1, 1), -1);
});

test('mod', () => {
	assert.type(math.mod, 'function');
	assert.is(math.mod(1, 2), 1);
	assert.is(math.mod(-3, -2), -1);
	assert.is(math.mod(7, 4), 3);
});

test.run();
