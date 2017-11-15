const axios = require('axios')
const utils = require('./util')

class Minecraft {
	/**
	 * Takes an option object and returns a Minecraft JSONAPI connection instance.
	 * @param  {String} [host='localhost'] [description]
	 * @param  {Number} [port='20059']     [description]
	 * @param  {String} user               [description]
	 * @param  {String} password           [description]
	 * @param  {String} salt               [description]
	 * @return {Minecraft}                 [description]
	 */
	constructor({host = 'localhost', port = 20059, user, password} = {}) {
		if (!user || !password) {
			throw new Error('Missing properties: ' + (!password ? 'password ' : '') + (!user ? 'user ' : '')) // eslint-disable-line no-negated-condition
		}

		/* Store config */
		Object.assign(this, {host, port, user, password})

		/* Create http client */
		this.api = axios.create({baseURL: `http://${this.host}:${this.port}/api/2/call`})
	}
	/**
	 * Make a request to the Minecraft server.
	 * @param  {[type]} requests [description]
	 * @return {[type]}          [description]
	 */
	makeRequest(requests) {
		const data = utils.ensureArray(requests).map(request => {
			utils.validateCommand(request.name)
			request.key = utils.generateKey(request.name, this.user, this.password)
			request.username = this.user
			return request
		})
		return this.api({method: 'POST', data})
	}
}

module.exports = Minecraft
