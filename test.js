const assert = require('assert').strict

const traverse = require('.')

assert.deepEqual(traverse({ a: { b: { c: 1 } } }), { a: { b: { c: 'number' } } })

assert.deepEqual(traverse({ a: { b: { c: [1] } } }), { a: { b: { c: 'array' } } })

assert.deepEqual(traverse({ a: { b: { c: new Date() } } }), { a: { b: { c: 'date' } } })

assert.deepEqual(traverse({ a: { b: { c: [1] } }, b: { a: 1 } }), { a: { b: { c: 'array' } }, b: { a: 'number' } })

assert.deepEqual(traverse({ a: null }), { a: 'null' })
console.log('done')
