import test from 'ava'
import commands from '../src/commands'

test('it exports an array', t => {
	commands.should.be.an.Array()
})

test('it has the correct amount of things', t => {
	commands.length.should.equal(196)
})
