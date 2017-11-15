import test from 'ava'
import mcjsonapi from '../src/minecraft'

const goodOpts = {user: 'user', password: 'pass'}

test('it should export class', t => {
	mcjsonapi.should.be.a.Function()
})

test('it properly constructs instances', t => {
	const instance = new mcjsonapi(goodOpts)
	instance.should.be.instanceof(mcjsonapi)
	instance.should.have.property('makeRequest')
})

test('it throws on missing properties', t => {
	t.throws(() => {
		return new mcjsonapi()
	})
	t.throws(() => {
		return new mcjsonapi({user: 'user'})
	})
	t.throws(() => {
		return new mcjsonapi({password: 'pass'})
	})
})

/*
mock axios.
#constructor
spy on axios#create, ensure baseURL looks good.
#makeRequest
spy on request. ensure properties key, username.
mock utils.
spy on ensureArray
spy on validateCommand
 */
