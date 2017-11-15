const Minecraft = require('./minecraft')
/**
 * Built-in singleton manager
 * @type {Object}
 */
const manager = {
	instances: {},
	setInstance(name, opts) {
		this.instances[name] = new Minecraft(opts)
		return this.instances[name]
	},
	getInstance(name) {
		return this.instances[name]
	},
	ensureInstance(name, opts) {
		if (name in this.instances) {
			return this.instances[name]
		}
		this.instances[name] = new Minecraft(opts)
		return this.instances[name]
	}
}

class Manager {
	constructor() {
		Object.assign(this, manager)
		this.instances = {}
	}
	static setInstance(name, val) {
		return manager.setInstance(name, val)
	}
	static getInstance(name) {
		return manager.getInstance(name)
	}
	static ensureInstance(name, opts) {
		return manager.ensureInstance(name, opts)
	}
}

module.exports = Manager
