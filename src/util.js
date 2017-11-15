const crypto = require('crypto')
const commands = require('./commands')

function generateKey(method, user, pass) {
	return crypto.createHash('sha256').update(`${user}${method}${pass}`).digest('hex')
}

function ensureArray(object) {
	return Array.isArray(object) ? object : [object]
}

function validateCommand(method) {
	if (!commands.includes(method)) {
		throw new Error(`Command ${method} does not exist`)
	}
	return method
}

module.exports = {generateKey, ensureArray, validateCommand}
