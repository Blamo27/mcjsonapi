const Minecraft = require('./minecraft')
/**
 * Built-in singleton manager
 * @type {Object}
 */
const manager = {
	instances: {},
	/**
	 * Sets instance, overriding any existing ones with same name.
	 * @param  {String} name Instance name
	 * @param  {Object} opts Instance options
	 * @return {Minecraft}   Minecraft instance.
	 */
	setInstance(name, opts) {
		this.instances[name] = new Minecraft(opts)
		return this.instances[name]
	},
	/**
	 * Returns instance with given name
	 * @param  {String} name Instance name
	 * @return {Minecraft}   Minecraft instance.
	 */
	getInstance(name) {
		return this.instances[name]
	},
	/**
	 * Ensures instance, returns existing or creates a new instance with provided opts.
	 * @param  {String} name Instance name
	 * @param  {Object} opts Instance options
	 * @return {Minecraft}   Minecraft instance.
	 */
	ensureInstance(name, opts) {
		if (name in this.instances) {
			return this.instances[name]
		}
		this.instances[name] = new Minecraft(opts)
		return this.instances[name]
	},
	/**
	 * Maps over instances
	 * @param  {Function} cb Callback function. Called with params key and value.
	 * @return {[Any]}  	Returns result of mapping
	 */
	mapInstances(cb) {
		return Object.entries(this.instances).map(e => cb(...e))
	}
}

class Manager {
	constructor() {
		Object.assign(this, manager)
		this.instances = {}
	}
	/**
	 * Sets instance, overriding any existing ones with same name.
	 * @param  {String} name Instance name
	 * @param  {Object} opts Instance options
	 * @return {Minecraft}   Minecraft instance.
	 */
	static setInstance(name, val) {
		return manager.setInstance(name, val)
	}
	/**
	 * Returns instance with given name
	 * @param  {String} name Instance name
	 * @return {Minecraft}   Minecraft instance.
	 */
	static getInstance(name) {
		return manager.getInstance(name)
	}
	/**
	 * Ensures instance, returns existing or creates a new instance with provided opts.
	 * @param  {String} name Instance name
	 * @param  {Object} opts Instance options
	 * @return {Minecraft}   Minecraft instance.
	 */
	static ensureInstance(name, opts) {
		return manager.ensureInstance(name, opts)
	}
	/**
	 * Maps over instances
	 * @param  {Function} cb Callback function. Called with params key and value.
	 * @return {[Any]}  	Returns result of mapping
	 */
	static mapInstances(cb) {
		return manager.mapInstances(cb)
	}
}

module.exports = Manager
