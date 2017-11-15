const Minecraft = require('./src/minecraft')
const Manager = require('./src/manager')

module.exports = Minecraft
module.exports.manager = Manager
module.exports.Manager = Manager /* Some linters prefer capitalised constructors */
