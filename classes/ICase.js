const Collection = require('./collection.js')

class ICase extends Collection {
	constructor(api) {
		super(api)
	}
}

const schema = Collection.getSchema().ICase

for(let key in schema) {
	ICase.prototype[key] = async function(params = {}) {
		try {
			this._validate(params, this.schema[key].params)

			const res = await this._exec(key, params, this.schema[key].method)

			return res
		} catch(err) {
			throw err
		}
	}
}

module.exports = ICase