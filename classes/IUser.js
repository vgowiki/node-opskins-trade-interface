const Collection = require('./collection.js')

class IUser extends Collection {
	constructor(api) {
		super(api)
	}
}

const schema = Collection.getSchema().IUser

for(let key in schema) {
	IUser.prototype[key] = async function(params = {}) {
		try {
			this._validate(params, this.schema[key].params)

			const res = await this._exec(key, params, this.schema[key].method)

			return res
		} catch(err) {
			throw err
		}
	}
}

module.exports = IUser