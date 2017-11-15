import test from 'ava'
import util from '../src/util'

test('it exports function generateKey', t => {
	util.should.have.property('generateKey')
	util.generateKey.should.be.a.Function()
})

test('generateKey generates valid sha256 hash', t => {
	const key = util.generateKey('test', 'user', 'pass')
	key.should.be.a.String().and.equal('273006017543fbf5e68102314b65459a86ad3fddad091d4b295bdb69a3a7dd5c') /* Magic value, how do I avoid? */
})

test('it exports function ensureArray', t => {
	util.should.have.property('ensureArray')
	util.ensureArray.should.be.a.Function()
})

test('ensureArray does not wrap arrays', t => {
	const testArray = [1, 2, 3]
	t.is(util.ensureArray(testArray), testArray)
})

test('ensureArray wraps objects', t => {
	const testObject = {
		a: 1,
		b: 2
	}
	t.deepEqual(util.ensureArray(testObject), [testObject])
})

test('it exports function validateCommand', t => {
	util.should.have.property('validateCommand')
	util.validateCommand.should.be.a.Function()
})

test('validateCommand throws an error on invalid command', t => {
	t.throws(() => util.validateCommand('foo'))
})

test('validateCommand does not throw on valid command', t => {
	t.notThrows(() => util.validateCommand('server'))
})

test('validateCommand returns a valid command when given one', t => {
	const command = 'server'
	t.is(util.validateCommand(command), command)
})
